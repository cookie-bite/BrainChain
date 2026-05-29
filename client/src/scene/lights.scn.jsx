import { useSnapshot } from 'valtio'
import { useState, useEffect } from 'react'
import { STIndicator, STScene } from '../stores/app.store'


export const Lights = () => {
    const SSScene = useSnapshot(STScene)
    const SSIndicator = useSnapshot(STIndicator)
    const [flash, setFlash] = useState(false)

    useEffect(() => {
        if (SSScene.name === 'Game' && SSIndicator.players.joined > 1) {
            setFlash(true)
            const timeout = setTimeout(() => setFlash(false), 200)
            return () => clearTimeout(timeout)
        }
    }, [SSIndicator.players.joined])

    const los = 2048

    
    const getPos = () => {
        if (['Lobby', 'Winner'].includes(SSScene.name)) {
            return [-3, 5, 3]
        } else if (SSScene.name === 'Game') {
            return [0, 2 + SSIndicator.players.joined / 2, 0]
        }
    }

    const getInts = () => {
        if (flash) return 0
        if (['Lobby', 'Winner'].includes(SSScene.name)) {
            return 1
        } else if (SSScene.name === 'Game') {
            return 1
        }
    }


    return (
        <>
            <color attach='background' args={['#15151A']} />
            <ambientLight intensity={0.4} />
            <spotLight castShadow color={'#ffd60a'} intensity={getInts()} position={getPos()} shadow-mapSize-width={los} shadow-mapSize-height={los} />
        </>
    )
}