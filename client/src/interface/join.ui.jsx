import { useEffect, useState, useRef, memo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useSnapshot } from 'valtio'
import { usePostHog } from 'posthog-js/react'
import { STGames, STProfile, STIndicator } from '../stores/app.store'
import { Icon, Matrix } from '../components/core.cmp'

import sty from '../styles/modules/join.module.css'


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


const icons = {
    'AI': 'hardware-chip',
    'Anatomy': 'body',
    'Art': 'color-palette',
    'Astronomy': 'planet',
    'Cinema': 'film',
    'Economics': 'bar-chart',
    'Game': 'game-controller',
    'Geography': 'compass',
    'Mathematics': 'calculator',
    'Mixed': 'earth',
    'Music': 'musical-notes',
    'Sports': 'basketball',
    'Technology': 'code-slash'
}


export const Join = ({ ws, core }) => {
    const SSProfile = useSnapshot(STProfile)
    const SSGames = useSnapshot(STGames)
    const SSIndicator = useSnapshot(STIndicator)

    const posthog = usePostHog()


    const changeFilter = (filter) => {
        if (filter === 'topic') {
            const topics = ['AI', 'Anatomy', 'Astronomy', 'Cinema', 'Economics', 'Game', 'Geography', 'Mathematics', 'Mixed', 'Music', 'Sports', 'Technology']
            let newTopic = topics.at(1 + topics.indexOf(SSIndicator.topic.name) - topics.length)
            STIndicator.topic = { name: newTopic, icon: icons[newTopic] }
        } else if (filter === 'duration') {
            const durations = [5, 10, 15, 20, 25, 30]
            STIndicator.duration = durations.at(1 + durations.indexOf(SSIndicator.duration) - durations.length)
        } else if (filter === 'token') {
            const tokens = [20, 50, 100, 150, 200]
            STIndicator.token = tokens.at(1 + tokens.indexOf(SSIndicator.token) - tokens.length)
        }
    }


    // Filter games based on current indicator values
    useEffect(() => {
        const { topic, duration, token } = SSIndicator
        let filtered = SSGames.all
        filtered = filtered.filter(g => g.topic.name === topic.name)
        filtered = filtered.filter(g => g.duration === duration)
        filtered = filtered.filter(g => g.token === token)
        STGames.filtered = filtered
    }, [SSIndicator.topic.name, SSIndicator.duration, SSIndicator.token, SSGames.all])


    const createGame = () => {
        posthog.capture('Created Game')
        ws.send(JSON.stringify({ command: 'CREATE_GAME', game: { ...SSIndicator }, user: { name: STProfile.name, color: STProfile.color } }))
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


    return (
        <div className={sty.join}>
            <AnimatePresence>
                {!SSProfile.gameID && <motion.div className={sty.filterBar}
                    style={{ transform: `scale(${core.isMobile ? 0.75 : 1})` }}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ ease: 'easeInOut', duration: 0.3 }}
                >
                    <div className={sty.filterPill} onClick={() => changeFilter('topic')}>
                        <div className={sty.filterPillIc}>
                            <Icon name='book' size={18} color='--system-yellow' />
                        </div>
                        <h5 className={sty.filterPillLbl}>{SSIndicator.topic.name}</h5>
                    </div>
                    <div className={sty.filterPill} onClick={() => changeFilter('duration')}>
                        <div className={sty.filterPillIc}>
                            <Icon name='reader' size={18} color='--primary-label' />
                        </div>
                        <h5 className={sty.filterPillLbl}>{SSIndicator.duration}</h5>
                    </div>
                    <div className={sty.filterPill} onClick={() => changeFilter('token')}>
                        <div className={sty.filterPillIc}>
                            <Icon name='brain-token' size={16} color='--system-pink' />
                        </div>
                        <h5 className={sty.filterPillLbl}>{SSIndicator.token}</h5>
                    </div>
                    <button className={sty.createBtn} onClick={() => createGame()}>
                        <Icon name='add-circle' size={20} color='--system-green' />
                        <h5 className={sty.createBtnLbl}>Create</h5>
                    </button>
                </motion.div>}
            </AnimatePresence>

            <AnimatePresence>
                {SSProfile.gameID
                    ? <motion.div className={sty.waitingArea}
                        style={{ transform: `scale(${core.isMobile ? 0.65 : 1})` }}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        transition={{ ease: 'easeInOut', duration: 0.3 }}
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

                    : <motion.div className={sty.games}
                        style={{ width: core.isMobile ? '100%' : '80%', gap: core.isMobile ? 25 : 20 }}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ ease: 'easeInOut', duration: 0.3 }}
                    >
                        {SSGames.filtered.map((game) => {
                            return (
                                <motion.div className={sty.gameWrapper} key={game.id}
                                    style={{ width: core.isMobile ? 'calc(50vw - 40px)' : 198, height: core.isMobile ? 'calc(50vw - 40px)' : 198 }}
                                    initial={{ backdropFilter: 'inherit', WebkitBackdropFilter: 'inherit' }}
                                    animate={{ backdropFilter: 'saturate(180%) blur(20px)', WebkitBackdropFilter: 'saturate(180%) blur(20px)' }}
                                    transition={{ duration: 0.3, delay: 0.6 }}
                                >
                                    {SSProfile.gameID === game.id && (
                                        core.isMobile
                                            ? <Matrix size={9} gap={2} />
                                            : <Matrix size={10} gap={2} />
                                    )}
                                    <div className={sty.gameCard} onClick={() => actGame(game)} style={{ width: core.isMobile ? '100%' : 198, height: core.isMobile ? '100%' : 198 }}>
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
                                            {game.players.list.map((player, index) => {
                                                return <Icon name='person' size={20} color={player.os === 'AI' ? '--primary-tint' : '--system-orange'} key={index} />
                                            })}
                                        </div>
                                    </div>
                                </motion.div>
                            )
                        })}
                    </motion.div>
                }
            </AnimatePresence>
        </div>
    )
}