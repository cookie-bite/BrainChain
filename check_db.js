require('dotenv').config();
const { MongoClient } = require('mongodb');

async function checkDB() {
    console.log("Connecting to:", process.env.DB_CONNECT);
    const client = new MongoClient(process.env.DB_CONNECT);
    try {
        await client.connect();
        console.log("Connected successfully.");
        const db = client.db('brch');
        const count = await db.collection('questions').countDocuments();
        console.log("Total questions in 'brch.questions':", count);
        
        const topics = await db.collection('questions').distinct('topic');
        console.log("Topics in DB:", topics);
        
    } catch (err) {
        console.error("Error:", err);
    } finally {
        await client.close();
    }
}

checkDB();
