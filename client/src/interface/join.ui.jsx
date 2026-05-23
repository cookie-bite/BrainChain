import { useEffect, useState, useRef, memo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useSnapshot } from 'valtio'
import { usePostHog } from 'posthog-js/react'
import { STGames, STProfile, STIndicator } from '../stores/app.store'
import { Icon, Matrix } from '../components/core.cmp'

import sty from '../styles/modules/join.module.css'


/* ── Countdown Timer ── */

const CountdownTimer = memo(({ createdAt }) => {
    const [countdown, setCountdown] = useState(() => {
        if (!createdAt) return 60
        return Math.max(0, 60 - Math.floor((Date.now() - createdAt) / 1000))
    })
    const countdownRef = useRef(null)

    useEffect(() => {
        if (!createdAt) return
        const remaining = Math.max(0, 60 - Math.floor((Date.now() - createdAt) / 1000))
        setCountdown(remaining)
        if (remaining <= 0) return

        countdownRef.current = setInterval(() => {
            const left = Math.max(0, 60 - Math.floor((Date.now() - createdAt) / 1000))
            setCountdown(left)
            if (left <= 0) clearInterval(countdownRef.current)
        }, 1000)

        return () => clearInterval(countdownRef.current)
    }, [createdAt])

    if (!createdAt || countdown <= 0) return null

    return (
        <div className={sty.countdown}>
            <h1 className={sty.countdownLbl} style={{ color: countdown <= 10 ? 'var(--system-red)' : 'var(--system-yellow)' }}>{countdown}s</h1>
            <h5 className={sty.countdownSbtl}>Waiting for players...</h5>
        </div>
    )
})


/* ── Circular Progress Ring ── */

const Ring = ({ progress, color, size = 60, radius = 24, onClick, children }) => {
    const C = 2 * Math.PI * radius
    const isAll = progress === 0
    const center = size / 2

    return (
        <div className={sty.ring} onClick={onClick} style={{ width: size, height: size }}>
            <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} className={sty.ringSvg}>
                <circle cx={center} cy={center} r={radius} fill="none"
                    stroke={color} strokeWidth="2.5" opacity="0.15"
                    strokeDasharray={isAll ? '4 4' : undefined} />
                {!isAll && <circle cx={center} cy={center} r={radius} fill="none"
                    stroke={color} strokeWidth="2.5" strokeLinecap="round"
                    strokeDasharray={C} strokeDashoffset={C * (1 - progress)}
                    transform={`rotate(-90 ${center} ${center})`}
                    className={sty.ringProgress} />}
            </svg>
            <div className={sty.ringContent}>{children}</div>
        </div>
    )
}


/* ── Constants ── */

const icons = {
    'AI': 'hardware-chip', 'Anatomy': 'body', 'Art': 'color-palette',
    'Astronomy': 'planet', 'Cinema': 'film', 'Economics': 'bar-chart',
    'Game': 'game-controller', 'Geography': 'compass', 'Mathematics': 'calculator',
    'Mixed': 'earth', 'Music': 'musical-notes', 'Sports': 'basketball', 'Technology': 'code-slash'
}

const topicList = ['All', 'AI', 'Anatomy', 'Astronomy', 'Cinema', 'Economics', 'Game', 'Geography', 'Mathematics', 'Mixed', 'Music', 'Sports', 'Technology']
const durationList = ['All', 5, 10, 15, 20, 25, 30]
const tokenList = ['All', 20, 50, 100, 150, 200]

const cycle = (arr, current) => arr.at(1 + arr.indexOf(current) - arr.length)
const progress = (arr, current) => { const i = arr.indexOf(current); return i === 0 ? 0 : i / (arr.length - 1) }


/* ── Main Component ── */

export const Join = ({ ws, core }) => {
    const SSProfile = useSnapshot(STProfile)
    const SSGames = useSnapshot(STGames)
    const SSIndicator = useSnapshot(STIndicator)
    const posthog = usePostHog()

    const [topicF, setTopicF] = useState('All')
    const [durationF, setDurationF] = useState('All')
    const [tokenF, setTokenF] = useState('All')

    // Filter lobby games
    useEffect(() => {
        let f = SSGames.all
        if (topicF !== 'All') f = f.filter(g => g.topic.name === topicF)
        if (durationF !== 'All') f = f.filter(g => g.duration === durationF)
        if (tokenF !== 'All') f = f.filter(g => g.token === tokenF)
        STGames.filtered = f
    }, [topicF, durationF, tokenF, SSGames.all])

    const getParams = () => ({
        topic: { name: topicF !== 'All' ? topicF : 'Mixed', icon: icons[topicF !== 'All' ? topicF : 'Mixed'] },
        duration: durationF !== 'All' ? durationF : 5,
        token: tokenF !== 'All' ? tokenF : 20
    })

    const createGame = () => {
        posthog.capture('Created Game')
        ws.send(JSON.stringify({ command: 'CREATE_GAME', game: getParams(), user: { name: STProfile.name, color: STProfile.color } }))
    }

    const actGame = (game) => {
        const act = game.id === SSProfile.gameID
        posthog.capture(act ? 'Left Game' : 'Joined Game')
        ws.send(JSON.stringify({ command: act ? 'LEAVE_GAME' : 'JOIN_GAME', id: game.id, name: SSProfile.name, color: SSProfile.color }))
    }

    const leaveGame = () => {
        posthog.capture('Canceled Game')
        ws.send(JSON.stringify({ command: 'LEAVE_GAME', id: SSProfile.gameID, name: SSProfile.name }))
    }

    // Progress values
    const tP = progress(topicList, topicF)
    const dP = progress(durationList, durationF)
    const kP = progress(tokenList, tokenF)

    // Display values
    const topicIcon = topicF === 'All' ? 'earth' : icons[topicF]
    const topicName = topicF === 'All' ? 'All Topics' : topicF
    const durationLbl = durationF === 'All' ? 'All questions' : `${durationF} questions`
    const tokenLbl = tokenF === 'All' ? '∞' : tokenF

    const isMob = core.isMobile


    return (
        <div className={sty.join}>
            <AnimatePresence mode='wait'>
                {SSProfile.gameID ? (
                    /* ── Waiting Screen ── */
                    <motion.div className={sty.waitingArea} key='waiting'
                        style={{ transform: `scale(${isMob ? 0.65 : 1})` }}
                        initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.9 }} transition={{ duration: 0.3 }}
                    >
                        <div className={sty.waitingWrapper}>
                            <Matrix size={15} gap={3} />
                            <div className={sty.waitingCard}>
                                <div className={sty.waitingHeader}>
                                    <Icon name={SSIndicator.topic.icon} size={50} color='--system-yellow' />
                                    <div className={sty.waitingToken}>
                                        <h5 className={sty.waitingTokenLbl}>{SSIndicator.token}</h5>
                                        <Icon name='brain-token' size={48} color='--system-pink' />
                                    </div>
                                </div>
                                <div className={sty.waitingTopic}>
                                    <h2 className={sty.waitingTopicLbl}>{SSIndicator.topic.name}</h2>
                                    <h5 className={sty.waitingDurationLbl}>{SSIndicator.duration} questions</h5>
                                </div>
                                <CountdownTimer createdAt={SSIndicator.createdAt} />
                                <div className={sty.waitingPlayers}>
                                    {SSIndicator.players.list.map((player, index) => (
                                        <Icon name='person' size={34} color={player.os === 'AI' ? '--primary-tint' : '--system-orange'} key={index} />
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div className={sty.waitingBtns}>
                            <button className={sty.leaveBtn} onClick={() => leaveGame()}>
                                <h2 className={sty.leaveBtnLbl}>Leave</h2>
                            </button>
                        </div>
                    </motion.div>
                ) : (
                    /* ── Lobby View ── */
                    <motion.div className={sty.lobbyArea} key='lobby'
                        initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                    >
                        {/* ── Filter Card ── */}
                        <div className={sty.filterCardWrap} style={{ transform: `scale(${isMob ? 0.7 : 1})` }}>
                            <div className={sty.filterCard} onClick={createGame}>
                                <div className={sty.fcHeader}>
                                    <Ring progress={tP} color='var(--system-yellow)'
                                        onClick={e => { e.stopPropagation(); setTopicF(prev => cycle(topicList, prev)) }}>
                                        <Icon name={topicIcon} size={28} color='--system-yellow' />
                                    </Ring>
                                    <div className={sty.fcTokenCol} onClick={e => { e.stopPropagation(); setTokenF(prev => cycle(tokenList, prev)) }}>
                                        <Ring progress={kP} color='var(--system-pink)'>
                                            <Icon name='brain-token' size={24} color='--system-pink' />
                                        </Ring>
                                        <h5 className={sty.fcTokenLbl}>{tokenLbl}</h5>
                                    </div>
                                </div>

                                <div className={sty.fcCenter}>
                                    <h2 className={sty.fcTopicLbl}>{topicName}</h2>
                                    <div className={sty.fcDuration} onClick={e => { e.stopPropagation(); setDurationF(prev => cycle(durationList, prev)) }}>
                                        <h5 className={sty.fcDurationLbl}>{durationLbl}</h5>
                                        <div className={sty.linearTrack}>
                                            <div className={sty.linearFill} style={{ width: `${dP * 100}%` }} />
                                        </div>
                                    </div>
                                </div>

                                <div className={sty.fcCreate}>
                                    <Icon name='person-o' size={26} color='--primary-tint' />
                                </div>
                            </div>
                        </div>

                        {/* ── Game Cards ── */}
                        <div className={sty.games} style={{ width: isMob ? '100%' : '80%', gap: isMob ? 25 : 20 }}>
                            {SSGames.filtered.map((game) => (
                                <motion.div className={sty.gameWrapper} key={game.id}
                                    style={{ width: isMob ? 'calc(50vw - 40px)' : 198, height: isMob ? 'calc(50vw - 40px)' : 198 }}
                                    initial={{ backdropFilter: 'inherit', WebkitBackdropFilter: 'inherit' }}
                                    animate={{ backdropFilter: 'saturate(180%) blur(20px)', WebkitBackdropFilter: 'saturate(180%) blur(20px)' }}
                                    transition={{ duration: 0.3, delay: 0.6 }}
                                >
                                    <div className={sty.gameCard} onClick={() => actGame(game)} style={{ width: isMob ? '100%' : 198, height: isMob ? '100%' : 198 }}>
                                        <div className={sty.gameHeader}>
                                            <Icon name={game.topic.icon} size={34} color='--system-yellow' />
                                            <div className={sty.gameToken}>
                                                <h5 className={sty.gameTokenLbl}>{game.token}</h5>
                                                <Icon name='brain-token' size={32} color='--system-pink' />
                                            </div>
                                        </div>
                                        <div className={sty.gameTopic}>
                                            <h2 className={sty.gameTopicLbl}>{game.topic.name}</h2>
                                            <h5 className={sty.gameDurationLbl}>{game.duration} questions</h5>
                                        </div>
                                        <div className={sty.gamePlayers}>
                                            {game.players.list.map((player, index) => (
                                                <Icon name='person' size={20} color={player.os === 'AI' ? '--primary-tint' : '--system-orange'} key={index} />
                                            ))}
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
}