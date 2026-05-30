import { useEffect, useState, useCallback, useRef } from 'react'
import { motion, AnimatePresence, useAnimation } from 'framer-motion'
import { useSnapshot } from 'valtio'
import { STArc, STScene, STUI, STProfile } from '../stores/app.store'

import sty from '../styles/modules/abstract.module.css'


// ── ARC colour map ──────────────────────────────────────────────────────────

const ARC_COLORS = [
    '#111111', // 0 black
    '#1565C0', // 1 blue
    '#C62828', // 2 red
    '#2E7D32', // 3 green
    '#F9A825', // 4 yellow
    '#757575', // 5 grey
    '#AD1457', // 6 fuchsia
    '#E65100', // 7 orange
    '#00838F', // 8 teal
    '#4E342E', // 9 maroon
]


// ── Router helper ───────────────────────────────────────────────────────────

const ArcRouter = ({ children }) => {
    const SS = useSnapshot(STArc)
    return children.filter(c => c.props.name === SS.ui)
}


// ── Static grid (read-only) ─────────────────────────────────────────────────

const ArcGrid = ({ grid, cellSize = 18 }) => {
    if (!grid || grid.length === 0) return null
    const rows = grid.length
    const cols = grid[0].length

    // Auto-scale for large grids
    const maxDim = Math.max(rows, cols)
    const size = maxDim > 20 ? Math.max(8, Math.floor(280 / maxDim)) : cellSize

    return (
        <div className={sty.gridWrapper} style={{ maxWidth: '100%', overflow: 'auto' }}>
            {grid.map((row, r) => (
                <div className={sty.gridRow} key={r}>
                    {row.map((val, c) => (
                        <div
                            key={c}
                            className={sty.gridCell}
                            style={{
                                width: size,
                                height: size,
                                backgroundColor: ARC_COLORS[val] ?? ARC_COLORS[0]
                            }}
                        />
                    ))}
                </div>
            ))}
        </div>
    )
}


// ── Interactive answer grid ─────────────────────────────────────────────────

const AnswerGrid = ({ rows, cols, grid, onCellClick, onNumberKeyPress, cellSize = 22 }) => {
    const maxDim = Math.max(rows, cols)
    const size = maxDim > 20 ? Math.max(10, Math.floor(400 / maxDim)) : cellSize
    const isDrawing = useRef(false)
    const hoveredCell = useRef(null)

    useEffect(() => {
        const handleKeyDown = (e) => {
            const num = parseInt(e.key, 10)
            if (!isNaN(num) && num >= 0 && num <= 9 && hoveredCell.current) {
                const { r, c } = hoveredCell.current
                onNumberKeyPress(r, c, num)
            }
        }
        window.addEventListener('keydown', handleKeyDown)
        return () => window.removeEventListener('keydown', handleKeyDown)
    }, [onNumberKeyPress])

    const handlePointerDown = (r, c) => {
        isDrawing.current = true
        onCellClick(r, c)
    }

    const handlePointerEnter = (r, c) => {
        hoveredCell.current = { r, c }
        if (isDrawing.current) onCellClick(r, c)
    }

    const handlePointerLeave = () => {
        hoveredCell.current = null
        isDrawing.current = false
    }

    return (
        <div
            className={sty.gridWrapper}
            style={{ userSelect: 'none', overflow: 'auto', maxWidth: '100%', cursor: 'crosshair' }}
            onPointerUp={() => { isDrawing.current = false }}
            onPointerLeave={handlePointerLeave}
        >
            {grid.map((row, r) => (
                <div className={sty.gridRow} key={r}>
                    {row.map((val, c) => (
                        <div
                            key={c}
                            className={sty.gridCellInteractive}
                            style={{
                                width: size,
                                height: size,
                                backgroundColor: ARC_COLORS[val] ?? ARC_COLORS[0]
                            }}
                            onPointerDown={() => handlePointerDown(r, c)}
                            onPointerEnter={() => handlePointerEnter(r, c)}
                            onPointerLeave={() => { if (hoveredCell.current?.r === r && hoveredCell.current?.c === c) hoveredCell.current = null }}
                        />
                    ))}
                </div>
            ))}
        </div>
    )
}


// ── Train panel ─────────────────────────────────────────────────────────────

const TrainPanel = ({ pairs }) => (
    <div className={sty.trainSection}>
        <span className={sty.trainLabel}>Examples</span>
        <div className={sty.trainPairs}>
            {pairs.map((pair, i) => (
                <div className={sty.trainPair} key={i}>
                    <span className={sty.trainPairLabel}>Input</span>
                    <ArcGrid grid={pair.input} cellSize={16} />
                    <span className={sty.trainPairArrow}>↓</span>
                    <span className={sty.trainPairLabel}>Output</span>
                    <ArcGrid grid={pair.output} cellSize={16} />
                </div>
            ))}
        </div>
    </div>
)


// ── Countdown screen ─────────────────────────────────────────────────────────

const Countdown = () => {
    const SS = useSnapshot(STArc)
    const [count, setCount] = useState(3)
    const anim = useAnimation()

    useEffect(() => {
        const id = setInterval(() => {
            setCount(prev => {
                anim.set({ opacity: 1, scale: 1 })
                anim.start({ opacity: 0, scale: 0.6 })
                if (prev <= 1) {
                    clearInterval(id)
                    STArc.ui = 'Puzzle'
                    return prev
                }
                return prev - 1
            })
        }, 1000)
        return () => clearInterval(id)
    }, [])

    return (
        <motion.h1
            className={sty.countdown}
            initial={{ opacity: 1 }}
            animate={anim}
            transition={{ ease: 'easeIn', duration: 0.8, delay: 0.2 }}
        >
            {count}
        </motion.h1>
    )
}


// removed Timeout screen


// ── Main Puzzle screen ────────────────────────────────────────────────────────

const PUZZLE_TIME = 90 // seconds per puzzle

const PuzzleScreen = ({ ws }) => {
    const SS = useSnapshot(STArc)
    const puzzle = SS.puzzles[SS.currentPuzzle]

    // Answer grid state
    const initGrid = useCallback((rows, cols) =>
        Array.from({ length: rows }, () => Array(cols).fill(0)),
        [])

    const guessGridSize = (puzzle) => {
        // Try to infer from train outputs, fall back to testInput size
        if (puzzle.train && puzzle.train.length > 0) {
            const lastOut = puzzle.train[puzzle.train.length - 1].output
            if (lastOut && lastOut.length > 0) {
                return { rows: lastOut.length, cols: lastOut[0].length }
            }
        }
        const inp = puzzle.testInput
        return { rows: inp.length, cols: inp[0].length }
    }

    const initialSize = puzzle ? guessGridSize(puzzle) : { rows: 3, cols: 3 }
    const [answerGrid, setAnswerGrid] = useState(() => initGrid(initialSize.rows, initialSize.cols))
    const [gridRows, setGridRows] = useState(initialSize.rows)
    const [gridCols, setGridCols] = useState(initialSize.cols)
    const [selectedColor, setSelectedColor] = useState(0)
    const [timer, setTimer] = useState(PUZZLE_TIME)
    const [submitted, setSubmitted] = useState(false)
    const [resultVisible, setResultVisible] = useState(false)
    const timerRef = useRef(null)

    // Reset answer grid when puzzle changes
    useEffect(() => {
        if (!puzzle) return
        const sz = guessGridSize(puzzle)
        setGridRows(sz.rows)
        setGridCols(sz.cols)
        setAnswerGrid(initGrid(sz.rows, sz.cols))
        setSelectedColor(0)
        setSubmitted(false)
        setResultVisible(false)
        setTimer(PUZZLE_TIME)
    }, [SS.currentPuzzle, puzzle])

    // Timer countdown
    useEffect(() => {
        if (submitted) return
        timerRef.current = setInterval(() => {
            setTimer(t => {
                if (t <= 1) {
                    clearInterval(timerRef.current)
                    handleSubmit(true) // auto-submit on timeout
                    return 0
                }
                return t - 1
            })
        }, 1000)
        return () => clearInterval(timerRef.current)
    }, [SS.currentPuzzle, submitted])

    const resizeGrid = (newRows, newCols) => {
        const r = Math.max(1, Math.min(30, newRows))
        const c = Math.max(1, Math.min(30, newCols))
        setGridRows(r)
        setGridCols(c)
        setAnswerGrid(prev => {
            return Array.from({ length: r }, (_, ri) =>
                Array.from({ length: c }, (_, ci) => (prev[ri]?.[ci] ?? 0))
            )
        })
    }

    const handleCellClick = useCallback((r, c) => {
        setAnswerGrid(prev => {
            const next = prev.map(row => [...row])
            next[r][c] = selectedColor
            return next
        })
    }, [selectedColor])

    const handleNumberKeyPress = useCallback((r, c, num) => {
        setSelectedColor(num)
        setAnswerGrid(prev => {
            const next = prev.map(row => [...row])
            next[r][c] = num
            return next
        })
    }, [])

    const handleSubmit = (isTimeout = false) => {
        if (submitted) return
        setSubmitted(true)
        clearInterval(timerRef.current)

        const grid = isTimeout
            ? Array.from({ length: gridRows }, () => Array(gridCols).fill(0))
            : answerGrid

        ws.send(JSON.stringify({
            command: 'SEND_ANSR',
            id: STProfile.gameID,
            index: SS.currentPuzzle,
            answer: grid,
            timeSpent: PUZZLE_TIME - timer
        }))
    }

    // Show result overlay then advance
    useEffect(() => {
        const result = SS.results[SS.currentPuzzle]
        if (result !== null && result !== undefined && submitted) {
            setResultVisible(true)
            setTimeout(() => {
                setResultVisible(false)
                const next = SS.currentPuzzle + 1
                if (next < SS.puzzles.length) {
                    STArc.currentPuzzle = next
                    setSubmitted(false)
                } else {
                    // Game flow will transition to Winner screen via FNSH_GAME from server
                }
            }, 1800)
        }
    }, [SS.results, SS.currentPuzzle, submitted])

    if (!puzzle) return null

    const timerPct = (timer / PUZZLE_TIME) * 100
    const timerColor = timer > 30 ? 'var(--system-green)' : timer > 10 ? 'var(--system-orange)' : 'var(--system-red)'
    const currentResult = SS.results[SS.currentPuzzle]

    return (
        <div className={sty.puzzle}>
            {/* Header */}
            <div className={sty.puzzleHeader}>
                <h2 className={sty.puzzleTitle}>
                    Puzzle {SS.currentPuzzle + 1} / {SS.puzzles.length}
                </h2>

                <div className={sty.puzzleNav}>
                    {SS.puzzles.map((_, i) => {
                        const res = SS.results[i]
                        let dotClass = sty.puzzleNavDot
                        if (i === SS.currentPuzzle) dotClass += ' ' + sty.puzzleNavDotActive
                        else if (res === true) dotClass += ' ' + sty.puzzleNavDotCorrect
                        else if (res === false) dotClass += ' ' + sty.puzzleNavDotWrong
                        return <div key={i} className={dotClass} onClick={() => { if (!submitted) STArc.currentPuzzle = i }} />
                    })}
                </div>

                <div className={sty.timerBar}>
                    <h3 className={sty.timerLbl} style={{ color: timerColor }}>{timer}</h3>
                    <div className={sty.timerTrack}>
                        <div className={sty.timerFill} style={{ width: `${timerPct}%`, background: timerColor }} />
                    </div>
                </div>
            </div>

            {/* Train Examples */}
            <TrainPanel pairs={puzzle.train} />

            {/* Test Input */}
            <div className={sty.trainSection}>
                <span className={sty.trainLabel}>Test Input — find the pattern and draw the output</span>
                <div className={sty.trainPair} style={{ alignSelf: 'center' }}>
                    <ArcGrid grid={puzzle.testInput} cellSize={20} />
                </div>
            </div>

            {/* Answer Controls */}
            <div className={sty.answerSection}>
                <span className={sty.answerLabel}>Your Answer</span>

                <div className={sty.answerControls} style={{ justifyContent: 'center', marginBottom: 10 }}>
                    {/* Colour palette */}
                    <div className={sty.colorPalette}>
                        {ARC_COLORS.map((col, i) => (
                            <div
                                key={i}
                                className={`${sty.colorSwatch} ${selectedColor === i ? sty.colorSwatchActive : ''}`}
                                style={{ backgroundColor: col }}
                                onClick={() => setSelectedColor(i)}
                                title={`Color ${i}`}
                            />
                        ))}
                    </div>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 16 }}>
                    {/* Grid size controls */}
                    <div className={sty.answerSizeCtrls}>
                        <button className={sty.sizeBtn} onClick={() => resizeGrid(gridRows - 1, gridCols)}>−</button>
                        <input type="number" min="1" max="30" value={gridRows} onChange={e => resizeGrid(parseInt(e.target.value)||1, gridCols)} className={sty.sizeInput} />
                        <span style={{ color: 'var(--secondary-label)', fontSize: 13, marginRight: 8 }}>rows</span>
                        <button className={sty.sizeBtn} onClick={() => resizeGrid(gridRows + 1, gridCols)}>+</button>
                        
                        <div style={{ width: 16 }} />
                        
                        <button className={sty.sizeBtn} onClick={() => resizeGrid(gridRows, gridCols - 1)}>−</button>
                        <input type="number" min="1" max="30" value={gridCols} onChange={e => resizeGrid(gridRows, parseInt(e.target.value)||1)} className={sty.sizeInput} />
                        <span style={{ color: 'var(--secondary-label)', fontSize: 13, marginRight: 8 }}>cols</span>
                        <button className={sty.sizeBtn} onClick={() => resizeGrid(gridRows, gridCols + 1)}>+</button>
                    </div>

                    {/* Interactive grid */}
                    <AnswerGrid
                        rows={gridRows}
                        cols={gridCols}
                        grid={answerGrid}
                        onCellClick={handleCellClick}
                        onNumberKeyPress={handleNumberKeyPress}
                        cellSize={22}
                    />
                </div>

                {/* Submit */}
                <button
                    className={`${sty.submitBtn} ${submitted ? sty.submitBtnDisabled : ''}`}
                    onClick={() => handleSubmit(false)}
                    disabled={submitted}
                >
                    <h2 className={sty.submitBtnLbl}>
                        {submitted ? 'Submitted…' : 'Submit Answer'}
                    </h2>
                </button>
            </div>

            {/* Result overlay */}
            <AnimatePresence>
                {resultVisible && (
                    <motion.div
                        className={sty.resultOverlay}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                    >
                        <h1 className={sty.resultLbl} style={{ color: currentResult ? 'var(--system-green)' : 'var(--system-red)' }}>
                            {currentResult ? '✓ Correct' : '✗ Wrong'}
                        </h1>
                        <p className={sty.resultSublbl}>
                            {currentResult ? 'Pattern recognised!' : 'Keep trying — next puzzle'}
                        </p>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
}


// Removed Board and Lobby components since Abstract uses standard Lobby and Winner screens


// ── Root export ───────────────────────────────────────────────────────────────

export const Abstract = ({ ws, core }) => {
    const SS = useSnapshot(STArc)

    return (
        <div className={sty.abstractBlur}>
            <ArcRouter>
                <Countdown name='Countdown' />
                <PuzzleScreen name='Puzzle' ws={ws} />
            </ArcRouter>
        </div>
    )
}
