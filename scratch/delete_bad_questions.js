require('dotenv').config();
const { MongoClient } = require('mongodb');
const fs = require('fs');

async function extractQuestions(filePath) {
    if (!fs.existsSync(filePath)) return [];
    const content = fs.readFileSync(filePath, 'utf8');
    // Simple extraction of quest strings
    const matches = [...content.matchAll(/quest:\s*"([^"]+)"/g)];
    return matches.map(m => m[1]);
}

async function run() {
    console.log("Connecting to MongoDB to delete bad questions...");
    const uri = process.env.DB_CONNECT;
    const client = new MongoClient(uri);

    try {
        await client.connect();
        const db = client.db("brch");
        const collection = db.collection("questions");

        const q19 = await extractQuestions('scratch/insert_batch_19.js');
        const q20 = await extractQuestions('scratch/insert_batch_20.js');
        const q21 = await extractQuestions('scratch/insert_batch_21.js');

        const allQuestions = [...q19, ...q20, ...q21];

        if (allQuestions.length > 0) {
            const result = await collection.deleteMany({ quest: { $in: allQuestions } });
            console.log(`Successfully deleted ${result.deletedCount} bad questions from DB.`);
        } else {
            console.log("No questions found to delete.");
        }
    } catch (err) {
        console.error(err);
    } finally {
        await client.close();
    }
}

run();
