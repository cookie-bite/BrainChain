import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'

import sty from './matrix.module.css'


export const Matrix = ({ size, gap }) => {
    const canvasRef = useRef(null)

    useEffect(() => {
        const canvas = canvasRef.current
        if (!canvas) return

        const ctx = canvas.getContext('2d')
        let animationFrameId

        // Initialize block properties once
        const blocks = Array(size * size).fill().map(() => ({
            duration: Math.random() * 4000 + 2000, // 2s to 6s
            delay: Math.random() * 2000,           // 0s to 2s
            startTime: performance.now()
        }))

        const resize = () => {
            const parent = canvas.parentElement
            canvas.width = parent.offsetWidth
            canvas.height = parent.offsetHeight
        }
        
        window.addEventListener('resize', resize)
        resize() // Set initial size

        const render = (time) => {
            ctx.clearRect(0, 0, canvas.width, canvas.height)

            const w = canvas.width
            const h = canvas.height
            
            const cellW = (w - (size - 1) * gap) / size
            const cellH = (h - (size - 1) * gap) / size

            for (let i = 0; i < size; i++) {
                for (let j = 0; j < size; j++) {
                    const idx = i * size + j
                    const b = blocks[idx]

                    const elapsed = time - b.startTime - b.delay
                    if (elapsed < 0) continue // Still in delay phase

                    // Progress from 0 to 1 based on duration
                    const progress = (elapsed % b.duration) / b.duration

                    // Sine wave for smooth pulsing opacity (0 -> 1 -> 0)
                    const opacity = Math.sin(progress * Math.PI) * 0.6

                    if (opacity > 0) {
                        ctx.globalAlpha = opacity
                        ctx.fillStyle = '#30D158' // var(--system-green)
                        
                        const x = j * (cellW + gap)
                        const y = i * (cellH + gap)
                        
                        // Round to avoid sub-pixel anti-aliasing blur and optimize drawing
                        ctx.fillRect(Math.round(x), Math.round(y), Math.round(cellW), Math.round(cellH))
                    }
                }
            }
            animationFrameId = requestAnimationFrame(render)
        }

        animationFrameId = requestAnimationFrame(render)

        return () => {
            window.removeEventListener('resize', resize)
            cancelAnimationFrame(animationFrameId)
        }
    }, [size, gap])

    return (
        <motion.div className={sty.matrixWrap}
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ ease: 'easeOut', duration: 1.5 }}
        >
            <canvas ref={canvasRef} style={{ width: '100%', height: '100%', display: 'block' }} />
        </motion.div>
    )
}