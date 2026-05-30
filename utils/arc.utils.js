const path = require('path')
const fs = require('fs')

// Load ARC-AGI data once at startup
const CHALLENGES_PATH = path.join(__dirname, '../materials/arc-agi_training_challenges.json')
const SOLUTIONS_PATH = path.join(__dirname, '../materials/arc-agi_training_solutions.json')

let challenges = null
let solutions = null
let challengeKeys = []

const loadData = () => {
    if (challenges && solutions) return
    console.log('[ARC] Loading ARC-AGI dataset...')
    challenges = JSON.parse(fs.readFileSync(CHALLENGES_PATH, 'utf8'))
    solutions = JSON.parse(fs.readFileSync(SOLUTIONS_PATH, 'utf8'))
    challengeKeys = Object.keys(challenges)
    console.log(`[ARC] Loaded ${challengeKeys.length} ARC-AGI puzzles.`)
}


/**
 * Returns `count` random ARC-AGI puzzles formatted for gameplay.
 * Each puzzle: { id, train: [{input, output}], testInput, solution }
 */
exports.getArcPuzzles = (count = 3) => {
    loadData()

    // Shuffle keys and pick `count` of them
    const shuffled = [...challengeKeys].sort(() => Math.random() - 0.5)
    const picked = shuffled.slice(0, count)

    return picked.map(id => {
        const challenge = challenges[id]
        const sol = solutions[id] // array of grids, one per test item

        return {
            id,
            train: challenge.train, // [{input: grid[][], output: grid[][]}]
            testInput: challenge.test[0].input, // grid[][]
            solution: sol[0]  // grid[][] — the correct answer
        }
    })
}


/**
 * Checks whether a submitted answer grid matches the solution.
 * Returns true if every cell matches exactly.
 */
exports.checkAnswer = (submitted, solution) => {
    if (!submitted || !solution) return false
    if (submitted.length !== solution.length) return false
    for (let r = 0; r < solution.length; r++) {
        if (!submitted[r] || submitted[r].length !== solution[r].length) return false
        for (let c = 0; c < solution[r].length; c++) {
            if (submitted[r][c] !== solution[r][c]) return false
        }
    }
    return true
}
