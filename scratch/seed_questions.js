require('dotenv').config();
const fs = require('fs');
const path = require('path');
const { MongoClient } = require('mongodb');

// Import core.utils.js to get the existing questions
const coreUtils = require('../utils/core.utils');

const topicsList = [
    'astronomy',
    'anatomy',
    'cinema',
    'economics',
    'geography',
    'mathematics',
    'mixed',
    'music',
    'sports',
    'technology',
    'game',
    'ai'
];

function fixContent(content) {
    // 1. Fix missing commas between objects in arrays: }\s*{ -> },\n{
    content = content.replace(/\}\s*\{/g, '},\n{');
    
    // 2. Fix Python booleans: True/False bare words
    content = content.replace(/:\s*True\b/g, ': true');
    content = content.replace(/:\s*False\b/g, ': false');
    
    // 3. Fix unescaped single and double quotes inside string property values
    const lines = content.split('\n');
    const processedLines = lines.map((line, idx) => {
        const trimL = line.trim();
        
        // A. Single quoted strings (e.g. quest: '...', content: '...', correct: '...')
        if (trimL.startsWith("quest: '") || trimL.startsWith("content: '") || trimL.startsWith("correct: '")) {
            const firstQuote = line.indexOf("'");
            const lastQuote = line.lastIndexOf("'");
            if (firstQuote !== -1 && lastQuote !== -1 && firstQuote !== lastQuote) {
                const prefix = line.substring(0, firstQuote + 1);
                const suffix = line.substring(lastQuote);
                const value = line.substring(firstQuote + 1, lastQuote);
                
                // Escape any single quote in value that is NOT preceded by \
                const escapedValue = value.replace(/(?<!\\)'/g, "\\'");
                return prefix + escapedValue + suffix;
            }
        }
        
        // B. Double quoted strings (e.g. quest: "...", content: "...", correct: "...")
        if (trimL.startsWith('quest: "') || trimL.startsWith('content: "') || trimL.startsWith('correct: "')) {
            const firstQuote = line.indexOf('"');
            const lastQuote = line.lastIndexOf('"');
            if (firstQuote !== -1 && lastQuote !== -1 && firstQuote !== lastQuote) {
                const prefix = line.substring(0, firstQuote + 1);
                const suffix = line.substring(lastQuote);
                const value = line.substring(firstQuote + 1, lastQuote);
                
                // Escape any double quote in value that is NOT preceded by \
                const escapedValue = value.replace(/(?<!\\)"/g, '\\"');
                return prefix + escapedValue + suffix;
            }
        }
        
        // C. Single quoted strings inside choices array: choices: ['...', '...']
        if (trimL.startsWith("choices:") || trimL.includes("choices: [") || trimL.includes('"choices": [')) {
            const firstBrac = line.indexOf('[');
            const lastBrac = line.lastIndexOf(']');
            if (firstBrac !== -1 && lastBrac !== -1) {
                const prefix = line.substring(0, firstBrac + 1);
                const suffix = line.substring(lastBrac);
                const inside = line.substring(firstBrac + 1, lastBrac).trim();
                
                // inside is: 'choice 1', 'choice 2', 'choice 3', 'choice 4'
                // Strip the outermost quotes if they exist
                if ((inside.startsWith("'") && inside.endsWith("'")) || (inside.startsWith('"') && inside.endsWith('"'))) {
                    const isSingleQuote = inside.startsWith("'");
                    const quoteChar = isSingleQuote ? "'" : '"';
                    const innerText = inside.substring(1, inside.length - 1);
                    
                    // Split elements by the boundary quote-comma-quote
                    const splitRegex = isSingleQuote ? /'\s*,\s*'/ : /"\s*,\s*"/;
                    const items = innerText.split(splitRegex);
                    
                    const escapedItems = items.map(item => {
                        if (isSingleQuote) {
                            return item.replace(/(?<!\\)'/g, "\\'");
                        } else {
                            return item.replace(/(?<!\\)"/g, '\\"');
                        }
                    });
                    
                    const newInside = escapedItems.map(item => `${quoteChar}${item}${quoteChar}`).join(', ');
                    return prefix + newInside + suffix;
                }
            }
        }
        
        return line;
    });
    
    return processedLines.join('\n');
}

const loadFile = (filepath, exportsList) => {
    if (!fs.existsSync(filepath)) {
        console.log(`File not found: ${filepath}`);
        return null;
    }
    let content = fs.readFileSync(filepath, 'utf8');
    content = fixContent(content);
    const fnCode = content + `\nreturn { ${exportsList.join(', ')} };`;
    try {
        const fn = new Function(fnCode);
        return fn();
    } catch (e) {
        console.error('Error loading file:', filepath, e);
        return null;
    }
};

async function main() {
    const uri = process.env.DB_CONNECT;
    if (!uri) {
        console.error('DB_CONNECT env variable is missing!');
        process.exit(1);
    }

    console.log('Connecting to database...');
    const client = new MongoClient(uri);
    await client.connect();
    const db = client.db('brch');
    const questionsCollection = db.collection('questions');

    console.log('Clearing existing questions collection...');
    await questionsCollection.deleteMany({});

    const uniqueQuestions = new Set();
    const allQuestions = [];

    const addQuestion = (topic, q) => {
        if (!q.quest) return;
        const key = q.quest.trim().toLowerCase();
        if (uniqueQuestions.has(key)) {
            return; // Duplicate
        }
        uniqueQuestions.add(key);

        const doc = {
            topic: topic.toLowerCase().trim(),
            quest: q.quest.trim(),
            choices: Array.isArray(q.choices) ? q.choices.map(c => c.trim()) : [],
            correct: q.correct ? q.correct.trim() : '',
            hasContent: Boolean(q.hasContent)
        };

        if (q.content) doc.content = q.content.trim();
        if (q.contentType) doc.contentType = q.contentType.trim();
        if (q.codeLanguage) doc.codeLanguage = q.codeLanguage.trim();

        allQuestions.push(doc);
    };

    // 1. Load questions from core.utils.js
    console.log('Extracting questions from core.utils.js...');
    for (const topic of topicsList) {
        const quizList = coreUtils.genQuiz(topic, 999999);
        if (Array.isArray(quizList)) {
            quizList.forEach(q => addQuestion(topic, q));
        }
    }
    console.log(`Extracted ${allQuestions.length} unique questions from core.utils.js`);

    // 2. Load 1.3 and 1.4 from questions/İronhack/
    console.log('Loading 1.3 and 1.4 Ironhack questions...');
    const ironhackPath = path.join(__dirname, '..', 'questions', 'İronhack');
    
    let ironhack13, ironhack14;
    try {
        ironhack13 = require(path.join(ironhackPath, '1.3_questions.js'));
    } catch(err) {
        console.warn('1.3 questions not found, skipping: ', err.message);
    }
    try {
        ironhack14 = require(path.join(ironhackPath, '1.4_questions.js'));
    } catch(err) {
        console.warn('1.4 questions not found, skipping: ', err.message);
    }

    if (Array.isArray(ironhack13)) ironhack13.forEach(q => addQuestion('ai', q));
    if (Array.isArray(ironhack14)) ironhack14.forEach(q => addQuestion('ai', q));

    console.log(`Total questions after adding 1.3 and 1.4: ${allQuestions.length}`);

    // 3. Load from questions/new questions.js
    console.log('Loading questions from questions/new questions.js...');
    const newQuestionsFile = path.join(__dirname, '..', 'questions', 'new questions.js');
    const newQuestionsVars = [
        'sportsQuestions', 'anatomyQuestions', 'astronomyQuestions', 'cinemaQuestions',
        'economyQuestions', 'geographyQuestions', 'musicQuestions', 'techQuestions',
        'gameQuestions', 'mathematicsQuestions'
    ];
    const newQuestionsData = loadFile(newQuestionsFile, newQuestionsVars);
    if (newQuestionsData) {
        if (Array.isArray(newQuestionsData.sportsQuestions)) newQuestionsData.sportsQuestions.forEach(q => addQuestion('sports', q));
        if (Array.isArray(newQuestionsData.anatomyQuestions)) newQuestionsData.anatomyQuestions.forEach(q => addQuestion('anatomy', q));
        if (Array.isArray(newQuestionsData.astronomyQuestions)) newQuestionsData.astronomyQuestions.forEach(q => addQuestion('astronomy', q));
        if (Array.isArray(newQuestionsData.cinemaQuestions)) newQuestionsData.cinemaQuestions.forEach(q => addQuestion('cinema', q));
        if (Array.isArray(newQuestionsData.economyQuestions)) newQuestionsData.economyQuestions.forEach(q => addQuestion('economics', q));
        if (Array.isArray(newQuestionsData.geographyQuestions)) newQuestionsData.geographyQuestions.forEach(q => addQuestion('geography', q));
        if (Array.isArray(newQuestionsData.musicQuestions)) newQuestionsData.musicQuestions.forEach(q => addQuestion('music', q));
        if (Array.isArray(newQuestionsData.techQuestions)) newQuestionsData.techQuestions.forEach(q => addQuestion('technology', q));
        if (Array.isArray(newQuestionsData.gameQuestions)) newQuestionsData.gameQuestions.forEach(q => addQuestion('game', q));
        if (Array.isArray(newQuestionsData.mathematicsQuestions)) newQuestionsData.mathematicsQuestions.forEach(q => addQuestion('mathematics', q));
    }

    // 4. Load from questions/new questions 2.js
    console.log('Loading questions from questions/new questions 2.js...');
    const newQuestions2File = path.join(__dirname, '..', 'questions', 'new questions 2.js');
    const newQuestions2Data = loadFile(newQuestions2File, newQuestionsVars);
    if (newQuestions2Data) {
        if (Array.isArray(newQuestions2Data.sportsQuestions)) newQuestions2Data.sportsQuestions.forEach(q => addQuestion('sports', q));
        if (Array.isArray(newQuestions2Data.anatomyQuestions)) newQuestions2Data.anatomyQuestions.forEach(q => addQuestion('anatomy', q));
        if (Array.isArray(newQuestions2Data.astronomyQuestions)) newQuestions2Data.astronomyQuestions.forEach(q => addQuestion('astronomy', q));
        if (Array.isArray(newQuestions2Data.cinemaQuestions)) newQuestions2Data.cinemaQuestions.forEach(q => addQuestion('cinema', q));
        if (Array.isArray(newQuestions2Data.economyQuestions)) newQuestions2Data.economyQuestions.forEach(q => addQuestion('economics', q));
        if (Array.isArray(newQuestions2Data.geographyQuestions)) newQuestions2Data.geographyQuestions.forEach(q => addQuestion('geography', q));
        if (Array.isArray(newQuestions2Data.musicQuestions)) newQuestions2Data.musicQuestions.forEach(q => addQuestion('music', q));
        if (Array.isArray(newQuestions2Data.techQuestions)) newQuestions2Data.techQuestions.forEach(q => addQuestion('technology', q));
        if (Array.isArray(newQuestions2Data.gameQuestions)) newQuestions2Data.gameQuestions.forEach(q => addQuestion('game', q));
        if (Array.isArray(newQuestions2Data.mathematicsQuestions)) newQuestions2Data.mathematicsQuestions.forEach(q => addQuestion('mathematics', q));
    }

    // 5. Load from questions/questions 3.js
    console.log('Loading questions from questions/questions 3.js...');
    const questions3File = path.join(__dirname, '..', 'questions', 'questions 3.js');
    const questions3Vars = [
        'anatomyQuestions', 'astronomyQuestions', 'techQuestions', 'cinemaQuestions',
        'economyQuestions', 'geographyQuestions', 'musicQuestions', 'mathematicsQuestions',
        'sportsQuestions'
    ];
    const questions3Data = loadFile(questions3File, questions3Vars);
    if (questions3Data) {
        if (Array.isArray(questions3Data.sportsQuestions)) questions3Data.sportsQuestions.forEach(q => addQuestion('sports', q));
        if (Array.isArray(questions3Data.anatomyQuestions)) questions3Data.anatomyQuestions.forEach(q => addQuestion('anatomy', q));
        if (Array.isArray(questions3Data.astronomyQuestions)) questions3Data.astronomyQuestions.forEach(q => addQuestion('astronomy', q));
        if (Array.isArray(questions3Data.cinemaQuestions)) questions3Data.cinemaQuestions.forEach(q => addQuestion('cinema', q));
        if (Array.isArray(questions3Data.economyQuestions)) questions3Data.economyQuestions.forEach(q => addQuestion('economics', q));
        if (Array.isArray(questions3Data.geographyQuestions)) questions3Data.geographyQuestions.forEach(q => addQuestion('geography', q));
        if (Array.isArray(questions3Data.musicQuestions)) questions3Data.musicQuestions.forEach(q => addQuestion('music', q));
        if (Array.isArray(questions3Data.techQuestions)) questions3Data.techQuestions.forEach(q => addQuestion('technology', q));
        if (Array.isArray(questions3Data.mathematicsQuestions)) questions3Data.mathematicsQuestions.forEach(q => addQuestion('mathematics', q));
    }

    // 6. Load from questions/questions 4.js
    console.log('Loading questions from questions/questions 4.js...');
    const questions4File = path.join(__dirname, '..', 'questions', 'questions 4.js');
    const questions4Vars = [
        'animequestions', 'AnimeQuestions', 'gamequestions', 'mythologyQuestions', 'bookquestions'
    ];
    const questions4Data = loadFile(questions4File, questions4Vars);
    if (questions4Data) {
        if (Array.isArray(questions4Data.animequestions)) questions4Data.animequestions.forEach(q => addQuestion('mixed', q));
        if (Array.isArray(questions4Data.AnimeQuestions)) questions4Data.AnimeQuestions.forEach(q => addQuestion('mixed', q));
        if (Array.isArray(questions4Data.gamequestions)) questions4Data.gamequestions.forEach(q => addQuestion('game', q));
        if (Array.isArray(questions4Data.mythologyQuestions)) questions4Data.mythologyQuestions.forEach(q => addQuestion('mixed', q));
        if (Array.isArray(questions4Data.bookquestions)) questions4Data.bookquestions.forEach(q => addQuestion('mixed', q));
    }

    console.log(`Deduplication finished. Total unique questions to insert: ${allQuestions.length}`);

    // Insert into database in batches
    const batchSize = 500;
    for (let i = 0; i < allQuestions.length; i += batchSize) {
        const batch = allQuestions.slice(i, i + batchSize);
        await questionsCollection.insertMany(batch);
        console.log(`Inserted batch ${i / batchSize + 1} (${batch.length} questions)`);
    }

    // Print stats per topic
    const stats = await questionsCollection.aggregate([
        { $group: { _id: '$topic', count: { $sum: 1 } } }
    ]).toArray();

    console.log('\n--- Migration Summary ---');
    stats.forEach(s => {
        console.log(`${s._id}: ${s.count} questions`);
    });
    console.log('-------------------------');

    await client.close();
    console.log('Done!');
}

main().catch(err => {
    console.error('Migration failed:', err);
});
