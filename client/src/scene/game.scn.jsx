import { useSnapshot } from 'valtio'
import { genColor } from '../utilities/core.utils'
import { STIndicator } from '../stores/app.store'
import { Player } from './player.scn'


export const Game = () => {
    const SSIndicator = useSnapshot(STIndicator)

    const count = SSIndicator.players.joined || 1
    const radius = count * 0.8
    const angle = 360 / count

    const toRadian = (index) => {
        return angle * (Math.PI / 180) * index
    }

    const pos = (index) => {
        return [
            +(Math.cos(Math.PI / 2 + toRadian(index)) * radius).toFixed(3),
            0,
            +(Math.sin(Math.PI / 2 + toRadian(index)) * radius).toFixed(3)
        ]
    }

    return (
        Array(count).fill().map((_, index) => {
            return <Player key={index}
                position={pos(index)}
                rotation={[0, Math.PI - toRadian(index), 0]}
                player={SSIndicator.players.list[index] || { name: 'Waiting...', color: genColor() }}
            />
        })
    )
}