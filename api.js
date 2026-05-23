const { WebSocketServer, WebSocket } = require('ws')
const { genRandom, genGame, genColor, genQuiz } = require('./utils/core.utils')
const { MongoClient, ObjectId } = require('mongodb')
const { createServer } = require('http')
const jwt = require('jsonwebtoken')
const express = require('express')
const cors = require('cors')
const path = require('path')

const app = express()
const server = createServer(app)
const wss = new WebSocketServer({ server })

require('dotenv/config')



// Storage

const lobby = {}
const rooms = {}
const liveGames = {}
const gameTimers = {}
const games = genGame(40)



// Middlewares

app.use(cors())
app.use(express.json())



// Functions

const getArray = (from) => {
    return Object.values(from)
}

const sendLobby = (obj) => {
    for (const userID in lobby) {
        if (lobby[userID].readyState === WebSocket.OPEN) lobby[userID].send(JSON.stringify(obj))
    }
}

const sendRoom = (id, obj) => {
    for (const userID in rooms[id]) {
        if (rooms[id][userID].readyState === WebSocket.OPEN) rooms[id][userID].send(JSON.stringify(obj))
    }
}

const sendUser = (userID, obj) => {
    if (lobby[userID]) lobby[userID].send(JSON.stringify(obj))
}

const init = () => {
    console.clear()
    console.log(`\x1b[33mApp running on 🔥\n\n\x1b[36m  http://localhost:${process.env.PORT}  \x1b[0m\n`); wss.on('error', console.error)

    // For generated games
    Object.keys(games).forEach((id) => rooms[id] = {})
}

const startGameWithBots = (gameID) => {
    if (!games[gameID]) return // already started or deleted

    const game = games[gameID]

    // Add bots if only 1 player (the creator)
    if (game.players.joined <= 1) {
        const botNames = ['Salvador Johnston', 'Wallace Long', 'Howard Beck', 'Alfredo Curtis', 'Stephen Williamson', 'Logan Carter', 'Travis Stevens', 'Derrick Kuhn', 'Kylie Grant', 'Jonathan Gordon']
        const shuffled = botNames.sort(() => Math.random() > 0.5 ? 1 : -1)

        for (let i = 0; i < 2; i++) {
            const botID = genRandom()
            const bot = { id: botID, name: shuffled[i], color: genColor(), os: 'AI', isFinished: false }
            game.players.list.push(bot)
            game.players.joined++
            game.answers[botID] = Array(game.duration).fill({ answer: '', isTrue: null })
        }
    }

    // Move to liveGames and start
    game.players.all = game.players.joined
    liveGames[gameID] = game
    liveGames[gameID].quiz = genQuiz(liveGames[gameID].topic.name, liveGames[gameID].duration)
    delete games[gameID]

    // Deduct tokens from real players
    Object.keys(rooms[gameID]).forEach((id) => {
        lobby[id].balance -= liveGames[gameID].token
        sendUser(id, { command: 'UPDT_BLNC', balance: lobby[id].balance })
    })

    sendRoom(gameID, { command: 'START_GAME', quiz: liveGames[gameID].quiz })
    sendLobby({ command: 'UPDT_GAMES', games: getArray(games) })

    // Simulate bot answers after random delays
    liveGames[gameID].players.list.forEach((player) => {
        if (player.os === 'AI') {
            const quiz = liveGames[gameID].quiz
            let delay = 2000 + Math.random() * 3000

            quiz.forEach((q, index) => {
                delay += 1500 + Math.random() * 4000
                setTimeout(() => {
                    if (!liveGames[gameID]) return
                    const isCorrect = Math.random() > 0.45
                    const answer = isCorrect ? q.correct : q.choices.find(c => c !== q.correct)
                    liveGames[gameID].answers[player.id][index] = { answer, isTrue: isCorrect }
                    sendRoom(gameID, { command: 'UPDT_ANSR', answers: liveGames[gameID].answers })

                    // Check if bot finished all questions
                    if (liveGames[gameID].answers[player.id].findIndex(a => a.answer === '') === -1) {
                        const pi = liveGames[gameID].players.list.findIndex(p => p.id === player.id)
                        liveGames[gameID].players.list[pi].isFinished = true
                        liveGames[gameID].players.list[pi].timeSpent = delay
                        sendRoom(gameID, { command: 'UPDT_PLYRS', players: liveGames[gameID].players })

                        // Check if ALL players finished
                        if (liveGames[gameID].players.list.findIndex(p => p.isFinished === false) === -1) {
                            finishGame(gameID)
                        }
                    }
                }, delay)
            })
        }
    })

    delete gameTimers[gameID]
}

const finishGame = (gameID) => {
    if (!liveGames[gameID]) return

    let stats = []
    liveGames[gameID].players.list.forEach((player) => {
        if (lobby[player.id]) lobby[player.id].gameID = ''
        stats.push({
            id: player.id,
            name: player.name,
            color: player.color,
            timeSpent: player.timeSpent,
            correct: liveGames[gameID].answers[player.id].filter(a => a.isTrue).length,
            wrong: liveGames[gameID].answers[player.id].filter(a => a.isTrue === false).length
        })
    })

    stats = stats.sort((a, b) => a.timeSpent - b.timeSpent).sort((a, b) => a.wrong - b.wrong).sort((a, b) => b.correct - a.correct)

    if (lobby[stats[0].id]) {
        lobby[stats[0].id].balance += liveGames[gameID].players.list.length * liveGames[gameID].token
        sendUser(stats[0].id, { command: 'UPDT_BLNC', balance: lobby[stats[0].id].balance })
    }
    sendRoom(gameID, { command: 'FNSH_GAME', winner: stats[0] })

    delete rooms[gameID]
    delete liveGames[gameID]
}



// Websocket

wss.on('connection', (ws) => {
    const userID = genRandom()

    ws.on('message', async (msg) => {
        const req = JSON.parse(msg)

        if (req.command === 'INIT_PLYR') {
            const guest = {
                id: userID,
                isGuest: true,
                isInLobby: true,
                gameID: '',
                balance: 500,
                color: genColor(),
                name: `Guest #${Math.round(Math.random() * 10000 - 1).toString().padEnd(4, '0')}`,
                os: req.os
            }

            if (req.token) {
                const payload = jwt.verify(req.token, process.env.ACS_TKN_SCT)
                const user = await this.collection('users').findOne({ _id: new ObjectId(payload.sub) })
                guest._id = user._id
                guest.name = user.username
                guest.email = user.email
                guest.balance = user.balance
                guest.color = user.color
                guest.isGuest = false
            }

            Object.assign(ws, guest)
            lobby[userID] = ws

            ws.send(JSON.stringify({ command: 'INIT_PLYR', user: guest }))
            ws.send(JSON.stringify({ command: 'UPDT_GAMES', games: getArray(games) }))
            console.log(`[${lobby[userID].name}]\x1b[1;32m Joined\x1b[0m 🥳`)
        } else if (req.command === 'JOIN_GAME') {
            const liveGameID = lobby[userID].gameID

            if (lobby[userID].balance < games[req.id].token) return

            if (liveGameID) {
                if (games[liveGameID]) {
                    if (games[liveGameID].players.joined === 1) {
                        delete rooms[liveGameID]
                        delete games[liveGameID]
                    } else {
                        games[liveGameID].players.list = games[liveGameID].players.list.filter(p => p.name !== req.name)
                        games[liveGameID].players.joined--
                        delete rooms[liveGameID][userID]

                        sendRoom(liveGameID, { command: 'UPDT_GAME', game: games[liveGameID] })
                    }
                } else {
                    if (liveGames[liveGameID].players.joined === 1) {
                        delete rooms[liveGameID]
                        delete liveGames[liveGameID]
                    } else {
                        liveGames[liveGameID].players.list = liveGames[liveGameID].players.list.filter(p => p.name !== req.name)
                        liveGames[liveGameID].players.joined--
                        delete rooms[liveGameID][userID]

                        sendRoom(liveGameID, { command: 'UPDT_GAME', game: liveGames[liveGameID] })
                    }
                }

                lobby[userID].gameID = ''
            }

            lobby[userID].gameID = req.id
            rooms[req.id][userID] = ws
            games[req.id].players.list.push({ id: userID, name: req.name, color: req.color, os: lobby[userID].os, isFinished: false })
            games[req.id].players.joined++
            games[req.id].answers[userID] = Array(games[req.id].duration).fill({ answer: '', isTrue: null })

            // If this is a pre-generated game and first real player joined, start auto-start timer
            if (!gameTimers[req.id] && !games[req.id].createdAt) {
                games[req.id].createdAt = Date.now()
                gameTimers[req.id] = setTimeout(() => startGameWithBots(req.id), 60000)
            }

            ws.send(JSON.stringify({ command: 'JOIN_GAME', game: games[req.id] }))
            sendRoom(req.id, { command: 'UPDT_GAME', game: games[req.id] })
            sendLobby({ command: 'UPDT_GAMES', games: getArray(games) })
        } else if (req.command === 'LEAVE_GAME') {
            if (!games[req.id]) return
            if (games[req.id].players.joined === 1) {
                // Clear auto-start timer when last player leaves
                if (gameTimers[req.id]) {
                    clearTimeout(gameTimers[req.id])
                    delete gameTimers[req.id]
                }
                delete rooms[req.id]
                delete games[req.id]
            } else {
                games[req.id].players.list = games[req.id].players.list.filter(p => p.name !== req.name)
                games[req.id].players.joined--
                delete rooms[req.id][userID]
            }

            lobby[userID].gameID = ''

            ws.send(JSON.stringify({ command: 'LEAVE_GAME' }))
            if (games[req.id]) {
                sendRoom(req.id, { command: 'UPDT_GAME', game: games[req.id] })
            }
            sendLobby({ command: 'UPDT_GAMES', games: getArray(games) })
        } else if (req.command === 'CREATE_GAME') {
            const gameID = genRandom(8, 10)
            const createdAt = Date.now()

            games[gameID] = {
                id: gameID,
                topic: req.game.topic,
                duration: req.game.duration,
                token: req.game.token,
                createdAt,
                players: { all: 0, joined: 1, list: [{ id: userID, name: req.user.name, color: req.user.color, os: lobby[userID].os, isFinished: false }] },
                answers: { [userID]: Array(req.game.duration).fill({ answer: '', isTrue: null }) }
            }

            lobby[userID].gameID = gameID
            rooms[gameID] = {}
            rooms[gameID][userID] = ws
            ws.send(JSON.stringify({ command: 'JOIN_GAME', game: games[gameID] }))
            sendRoom(gameID, { command: 'UPDT_GAME', game: games[gameID] })
            sendLobby({ command: 'UPDT_GAMES', games: getArray(games) })

            // Auto-start after 60 seconds
            gameTimers[gameID] = setTimeout(() => startGameWithBots(gameID), 60000)
        } else if (req.command === 'SEND_ANSR') {
            if (!liveGames[req.id]) return
            if (req.answer) {
                liveGames[req.id].answers[userID][req.index] = { answer: req.answer, isTrue: req.answer === liveGames[req.id].quiz[req.index].correct }
                sendRoom(req.id, { command: 'UPDT_ANSR', answers: liveGames[req.id].answers })

                if (liveGames[req.id].answers[userID].findIndex(a => a.answer === '') === -1) {
                    const playerId = liveGames[req.id].players.list.findIndex(p => p.id === userID)
                    liveGames[req.id].players.list[playerId].isFinished = true
                    liveGames[req.id].players.list[playerId].timeSpent = req.timeSpent
                    sendRoom(req.id, { command: 'UPDT_PLYRS', players: liveGames[req.id].players })
                }
            } else {
                liveGames[req.id].players.list[liveGames[req.id].players.list.findIndex(p => p.id === userID)].isFinished = true
                sendRoom(req.id, { command: 'UPDT_PLYRS', players: liveGames[req.id].players })
            }

            if (liveGames[req.id].players.list.findIndex(p => p.isFinished === false) === -1) {
                finishGame(req.id)
            }
        }
    })

    ws.on('close', async () => {
        console.log(`[${lobby[userID]?.name}]\x1b[1;31m Disconnected\x1b[0m 💀`)

        const liveGameID = lobby[userID]?.gameID

        if (liveGameID) {
            if (games[liveGameID]) {
                if (games[liveGameID].players.joined === 1) {
                    delete rooms[liveGameID]
                    delete games[liveGameID]
                } else {
                    games[liveGameID].players.list = games[liveGameID].players.list.filter(p => p.name !== lobby[userID].name)
                    games[liveGameID].players.joined--
                    delete rooms[liveGameID][userID]

                    sendRoom(liveGameID, { command: 'UPDT_GAME', game: games[liveGameID] })
                }

                sendLobby({ command: 'UPDT_GAMES', games })
            } else {
                if (liveGames[liveGameID].players.joined === 1) {
                    delete rooms[liveGameID]
                    delete liveGames[liveGameID]
                } else {
                    liveGames[liveGameID].players.list = liveGames[liveGameID].players.list.filter(p => p.name !== lobby[userID].name)
                    liveGames[liveGameID].players.joined--
                    delete rooms[liveGameID][userID]

                    sendRoom(liveGameID, { command: 'UPDT_GAME', game: liveGames[liveGameID] })
                }
            }

            lobby[userID].gameID = ''
        }

        if (!lobby[userID].isGuest) {
            await this.collection('users').updateOne({ _id: lobby[userID]._id }, { $set: { balance: lobby[userID].balance } })
        }

        delete lobby[userID]
    })

    ws.on('error', console.error)

})



// Server

let DB

const connectDB = async () => {
    const client = new MongoClient(process.env.DB_CONNECT)
    await client.connect()
    DB = client.db('brch')
}


(async () => await connectDB().then(() => {
    console.log('Connected to MongoDB')
    server.listen(process.env.PORT, '0.0.0.0', () => init())
}).catch((err) => console.log(err)))()



module.exports.collection = (c) => DB.collection(c)



// Routes

app.get('/api', (req, res) => res.json({ message: 'From api with love' }))

app.use('/', express.static(path.join(`${__dirname}/client/dist`)))
app.get('*', (req, res) => res.sendFile(path.join(`${__dirname}/client/dist/index.html`)))

app.use('/auth', require('./routes/auth.routes'))