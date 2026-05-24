import { useEffect } from 'react'
import { usePostHog } from 'posthog-js/react'
import { AnimatePresence, motion, useAnimation } from 'framer-motion'
import { useSnapshot } from 'valtio'
import { STUI, STProfile, STFilters, STGames } from '../stores/app.store'
import { Icon } from '../components/core.cmp'

import { Profile } from './profile.ui'

import sty from '../styles/modules/controls.module.css'


export const Controls = ({ core }) => {
    const SSUI = useSnapshot(STUI)
    const SSGames = useSnapshot(STGames)
    const SSProfile = useSnapshot(STProfile)
    const SSFilters = useSnapshot(STFilters)

    const posthog = usePostHog()

    const navs = [
        { name: 'Play', icon: 'play' },
        { name: 'Discover', icon: 'compass' },
        { name: 'Tournaments', icon: 'podium-o' },
        { name: 'Community', icon: 'people' }
    ]


    const Balance = () => {
        return (
            <div className={sty.balance}>
                <h5 className={sty.balanceLbl}>{SSProfile.balance}</h5>
                <Icon name='brain-token' size={24} color='--system-pink' />
            </div>
        )
    }


    const filterVt = (margin = 10, index) => {
        return {
            initial: { width: 0, marginLeft: 0, scale: 0, opacity: 0 },
            animate: { width: 'auto', marginLeft: `${margin}px`, scale: 1, opacity: 1, transition: { ease: 'easeInOut', duration: 0.3, delay: 0.1 * index } },
            exit: { width: 0, marginLeft: 0, scale: 0, opacity: 0, transition: { ease: 'easeInOut', duration: 0.3, delay: 0.1 * index } },
        }
    }


    const changeFilter = (filter) => {
        let { topic, players, duration, token } = SSFilters

        if (filter === 'topic') {
            const topics = ['All', 'AI', 'Anatomy', 'Art', 'Astronomy', 'Cinema', 'Economics', 'Game', 'Geography', 'Mathematics', 'Mixed', 'Music', 'Sports', 'Technology']
            topic = topics.at(1 + topics.indexOf(SSFilters.topic) - topics.length)
            STFilters.topic = topic
        } else if (filter === 'duration') {
            const durations = ['All', 5, 10, 15, 20, 25, 30]
            duration = durations.at(1 + durations.indexOf(SSFilters.duration) - durations.length)
            STFilters.duration = duration
        } else if (filter === 'token') {
            const tokens = ['All', 20, 50, 100, 150, 200]
            token = tokens.at(1 + tokens.indexOf(SSFilters.token) - tokens.length)
            STFilters.token = token
        }

        let games = SSGames.all.filter(game => topic === 'All' ? game : game.topic.name === topic)
        games = games.filter(game => duration === 'All' ? game : game.duration === duration)
        STGames.filtered = games.filter(game => token === 'All' ? game : game.token === token)
    }


    useEffect(() => {
        posthog.capture('Navigated', { page: SSUI.value.name })
    }, [SSUI.value.name])


    return (
        <div className={sty.controlsHitSlop}>
            <AnimatePresence>
                {SSUI.value.showControls && <motion.div className={sty.controls} style={{ flexDirection: core.isMobile ? 'column' : 'row' }}
                    initial={{ y: -115 }}
                    animate={{ y: 0 }}
                    exit={{ y: -115 }}
                    transition={{ duration: 0.8, delay: SSUI.history.index === 0 ? 2.2 : 0 }}
                >
                    {!core.isMobile && <Profile core={core} />}

                    <div className={sty.navbar} style={{ transform: `scale(${core.isMobile ? 0.60 : 1})` }}>
                        <div className={sty.menu} style={{ display: 'flex', flexDirection: 'row' }}>
                            <div className={sty.menuIc} onClick={() => STUI.value.name = 'Home'} >
                                <Icon name='grid' size={24} color={SSUI.value.name === 'Home' ? '--primary-tint' : '--secondary-label'} />
                            </div>
                            {navs.map((item) => {
                                return (
                                    <div className={sty.menuIc} key={item.name}
                                        onClick={() => STUI.value.name = item.name}
                                    >
                                        <Icon name={item.icon} size={24} color={SSUI.value.name === item.name ? '--primary-tint' : '--secondary-label'} />
                                    </div>
                                )
                            })}
                        </div>


                    </div>

                    {core.isMobile && <div className={sty.mobNav}>
                        <Profile core={core} />
                        <Balance />
                    </div>}

                    {!core.isMobile && <Balance />}
                </motion.div>}
            </AnimatePresence>
        </div>
    )
}