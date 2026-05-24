require('dotenv').config();
const { MongoClient } = require('mongodb');
const fs = require('fs');
const path = require('path');

const questions = [
    {
        topic: "ai",
        quest: "A startup trains a Large Language Model exclusively on Reddit data because it is free and easily accessible via API. When deployed to draft professional legal contracts, the model fails miserably. What specific statistical sampling error did the startup commit?",
        hasContent: false,
        choices: [
            "Stratified Sampling.",
            "Convenience Sampling (a nonprobability method); they selected data based on availability rather than ensuring it statistically represented the true real-world distribution of language.",
            "Snowball Sampling.",
            "Reservoir Sampling."
        ],
        correct: "Convenience Sampling (a nonprobability method); they selected data based on availability rather than ensuring it statistically represented the true real-world distribution of language."
    },
    {
        topic: "ai",
        quest: "You are building a medical AI to detect a rare disease that occurs in 0.01% of the population. If you use 'Simple Random Sampling' to draw 1,000 patient records to build your dataset, what is the most likely outcome?",
        hasContent: false,
        choices: [
            "Your dataset will perfectly reflect the rare disease.",
            "Your dataset will likely contain zero examples of the rare disease, making it impossible for the model to learn to detect it.",
            "Your dataset will overfit on the rare disease.",
            "Simple Random Sampling is mathematically identical to Stratified Sampling in this case."
        ],
        correct: "Your dataset will likely contain zero examples of the rare disease, making it impossible for the model to learn to detect it."
    },
    {
        topic: "ai",
        quest: "To guarantee that a minority class (like 'Fraud' transactions) is present in your training/test splits without artificially duplicating data, which sampling technique should you strictly enforce?",
        hasContent: true,
        contentType: "code",
        codeLanguage: "python",
        content: "df.groupby('fraud_status').apply(lambda x: x.sample(n=100))",
        choices: [
            "Simple Random Sampling",
            "Stratified Sampling",
            "Convenience Sampling",
            "Judgment Sampling"
        ],
        correct: "Stratified Sampling"
    },
    {
        topic: "ai",
        quest: "What is the critical distinction between 'Weighted Sampling' and 'Sample Weights' during model training?",
        hasContent: false,
        choices: [
            "They are the exact same concept.",
            "Weighted Sampling changes the input distribution by determining WHICH data makes it into the training set. Sample Weights change how the model learns from a FIXED dataset by altering the loss function penalty for specific examples.",
            "Weighted Sampling is used for NLP, Sample Weights are used for Computer Vision.",
            "Weighted Sampling reduces CPU usage."
        ],
        correct: "Weighted Sampling changes the input distribution by determining WHICH data makes it into the training set. Sample Weights change how the model learns from a FIXED dataset by altering the loss function penalty for specific examples."
    },
    {
        topic: "ai",
        quest: "Your real-time monitoring system needs to maintain a perfectly random sample of exactly 500 predictions from a live, infinite data stream to check for drift. Which algorithm allows you to do this without storing the entire stream?",
        hasContent: false,
        choices: [
            "Monte Carlo Sampling",
            "Reservoir Sampling",
            "Stratified Sampling",
            "Quota Sampling"
        ],
        correct: "Reservoir Sampling"
    },
    {
        topic: "ai",
        quest: "Three expert annotators label the same medical image for 'Pneumonia'. Annotator A says Yes, B says No, C says Yes. In ML engineering, what does this 'Label Multiplicity' typically indicate?",
        hasContent: false,
        choices: [
            "The model is overfitting.",
            "The image is corrupted.",
            "It reflects genuine ambiguity in the data or poorly defined annotation guidelines, rather than just a simple failure of the process.",
            "The annotators are intentionally sabotaging the dataset."
        ],
        correct: "It reflects genuine ambiguity in the data or poorly defined annotation guidelines, rather than just a simple failure of the process."
    },
    {
        topic: "ai",
        quest: "Why is 'Data Lineage' an absolute necessity when dealing with crowdsourced labeled datasets?",
        hasContent: false,
        choices: [
            "To ensure the data is properly encrypted.",
            "To trace exactly which annotator labeled which sample; if model accuracy suddenly drops, you can identify if a specific annotator or batch consistently skewed the distribution.",
            "To calculate the total cost of the project.",
            "To speed up model inference."
        ],
        correct: "To trace exactly which annotator labeled which sample; if model accuracy suddenly drops, you can identify if a specific annotator or batch consistently skewed the distribution."
    },
    {
        topic: "ai",
        quest: "A streaming platform uses 'Natural Labels' to train its recommendation engine. A 'skip' is a negative label, and a 'watch to completion' is a positive label. What is the primary engineering advantage of this approach over hand-labeling?",
        hasContent: false,
        choices: [
            "It eliminates all algorithmic bias.",
            "Behavioral labels are generated automatically, constantly, and at massive scale directly from user actions, with zero human annotation cost.",
            "It allows the use of unsupervised learning algorithms.",
            "It encrypts user data automatically."
        ],
        correct: "Behavioral labels are generated automatically, constantly, and at massive scale directly from user actions, with zero human annotation cost."
    },
    {
        topic: "ai",
        quest: "You deploy two models: an Ad Click Predictor and a Credit Default Predictor. The Ad Predictor recovers from drift in 2 hours. The Credit Predictor takes 2 years to recover. What fundamental system property dictates this?",
        hasContent: false,
        choices: [
            "The Feedback Loop Length; Ad clicks generate natural labels (ground truth) almost instantly, whereas loan defaults take months or years to materialize.",
            "The neural network architecture.",
            "The choice of SQL database.",
            "The ETL processing speed."
        ],
        correct: "The Feedback Loop Length; Ad clicks generate natural labels (ground truth) almost instantly, whereas loan defaults take months or years to materialize."
    },
    {
        topic: "ai",
        quest: "Instead of hiring experts to label 100,000 support tickets, an engineer writes Python functions like `if 'crash' in text: return 'URGENT'`. These noisy heuristics are combined mathematically to generate probabilistic labels. What is this technique called?",
        hasContent: true,
        contentType: "code",
        codeLanguage: "python",
        content: "def lf_keyword_urgent(text):\n    if 'crash' in text:\n        return 'URGENT'\n    return None",
        choices: [
            "Transfer Learning",
            "Active Learning",
            "Weak Supervision (e.g., using Snorkel)",
            "Self-Training"
        ],
        correct: "Weak Supervision (e.g., using Snorkel)"
    },
    {
        topic: "ai",
        quest: "In Semi-Supervised Learning, a common technique is 'Self-Training'. How does self-training leverage unlabeled data?",
        hasContent: false,
        choices: [
            "It drops the unlabeled data completely.",
            "It trains an initial model on a small labeled set, uses it to predict labels for the unlabeled data, and adds the high-confidence predictions (pseudo-labels) back into the training set for a second round of training.",
            "It uses unsupervised clustering to group all data before predicting.",
            "It asks humans to verify every single prediction."
        ],
        correct: "It trains an initial model on a small labeled set, uses it to predict labels for the unlabeled data, and adds the high-confidence predictions (pseudo-labels) back into the training set for a second round of training."
    },
    {
        topic: "ai",
        quest: "An engineer uses an LLM trained on billions of public internet words, and then fine-tunes it on 5,000 specific medical documents. What ML paradigm solves the 'label scarcity' problem here?",
        hasContent: false,
        choices: [
            "Active Learning",
            "Transfer Learning; reusing the general patterns learned from abundant data to massively reduce the number of labels required for the specific downstream task.",
            "Weak Supervision",
            "Reservoir Sampling"
        ],
        correct: "Transfer Learning; reusing the general patterns learned from abundant data to massively reduce the number of labels required for the specific downstream task."
    },
    {
        topic: "ai",
        quest: "Instead of labeling 10,000 random images, you train a small model and ask it: 'Which of these unlabeled images are you most confused/uncertain about?' You then send ONLY those confusing images to humans for labeling. What is this technique?",
        hasContent: true,
        contentType: "code",
        codeLanguage: "python",
        content: "uncertainty = 1 - proba.max(axis=1)\nmost_informative = np.argsort(uncertainty)[-20:]",
        choices: [
            "Transfer Learning",
            "Active Learning (specifically, Uncertainty Sampling)",
            "Semi-Supervised Learning",
            "Weak Supervision"
        ],
        correct: "Active Learning (specifically, Uncertainty Sampling)"
    },
    {
        topic: "ai",
        quest: "A facial recognition model is deployed nationally. It performs at 99% accuracy for one demographic but 60% for another. Upon review, the training dataset contained almost exclusively photos from a single demographic. What specific bias is this?",
        hasContent: false,
        choices: [
            "Measurement Bias",
            "Selection Bias (the sample was not representative of the true production population)",
            "Historical Bias",
            "Algorithmic Bias"
        ],
        correct: "Selection Bias (the sample was not representative of the true production population)"
    },
    {
        topic: "ai",
        quest: "A predictive policing model uses 'historical arrest records' as a proxy target for 'actual crime committed'. Since arrests are heavily skewed by localized patrol patterns rather than just underlying crime rates, what specific bias does this introduce?",
        hasContent: false,
        choices: [
            "Measurement Bias; the feature measured (arrests) is a deeply flawed proxy for the actual target (crime).",
            "Selection Bias.",
            "Label Multiplicity.",
            "Active Learning Bias."
        ],
        correct: "Measurement Bias; the feature measured (arrests) is a deeply flawed proxy for the actual target (crime)."
    }
];

async function insertBatch() {
    const uri = process.env.DB_CONNECT;
    if (!uri) {
        console.error('DB_CONNECT env variable is missing!');
        process.exit(1);
    }

    const client = new MongoClient(uri);
    try {
        await client.connect();
        const db = client.db('brch');
        
        const result = await db.collection('questions').insertMany(questions);
        console.log(`Successfully inserted ${result.insertedCount} questions for '2.5 Datasets'`);
        
        // Delete the processed file
        const targetFile = path.join(__dirname, '..', 'materials', '2.5 Datasets and Labeling.md');
        if (fs.existsSync(targetFile)) {
            fs.unlinkSync(targetFile);
            console.log(`Deleted file: ${targetFile}`);
        } else {
            console.log(`Warning: File not found at ${targetFile}`);
        }
    } catch (err) {
        console.error("Error during insertion:", err);
    } finally {
        await client.close();
    }
}

insertBatch();
