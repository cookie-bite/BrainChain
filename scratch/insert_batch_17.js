require('dotenv').config();
const { MongoClient } = require('mongodb');
const fs = require('fs');
const path = require('path');

const questions = [
    {
        topic: "ai",
        quest: "From a statistical perspective, why is it fundamentally wrong to state that 'My Machine Learning model has an exact accuracy of 87%'?",
        hasContent: false,
        choices: [
            "Because machine learning cannot do math.",
            "Because model metrics are Random Variables, not fixed numbers. They fluctuate based on the specific random sample of data in the test set. 87% is just a Point Estimate.",
            "Because accuracy is always a decimal, not a percentage.",
            "Because accuracy is the wrong metric to use."
        ],
        correct: "Because model metrics are Random Variables, not fixed numbers. They fluctuate based on the specific random sample of data in the test set. 87% is just a Point Estimate."
    },
    {
        topic: "ai",
        quest: "How does K-Fold Cross-Validation explicitly demonstrate that ML metrics are Random Variables?",
        hasContent: false,
        choices: [
            "It drops random features.",
            "It generates a Distribution of performance estimates (one for each fold) rather than a single number, showing the variability and uncertainty of the model's true performance.",
            "It randomly shuffles the labels.",
            "It changes the hyperparameters for every fold."
        ],
        correct: "It generates a Distribution of performance estimates (one for each fold) rather than a single number, showing the variability and uncertainty of the model's true performance."
    },
    {
        topic: "ai",
        quest: "You want to calculate a 95% Confidence Interval for your model's F1 Score, but the F1 score distribution is highly skewed and non-normal. What statistical technique should you use?",
        hasContent: false,
        choices: [
            "A One-Sample t-test",
            "Bootstrapping; repeatedly resampling the test set with replacement to build an empirical distribution of F1 scores, then taking the 2.5th and 97.5th percentiles.",
            "A Chi-Square test",
            "Calculating the standard deviation and multiplying by 1.96."
        ],
        correct: "Bootstrapping; repeatedly resampling the test set with replacement to build an empirical distribution of F1 scores, then taking the 2.5th and 97.5th percentiles."
    },
    {
        topic: "ai",
        quest: "Model A gets 87.3% accuracy. Model B gets 86.8% accuracy on the same test set. How should you statistically determine if Model A is ACTUALLY better than Model B?",
        hasContent: false,
        choices: [
            "By subtracting 86.8 from 87.3 and seeing if it is positive.",
            "By using a Paired Statistical Test (like a Paired Bootstrap Test or McNemar's Test) to see if the difference between them is statistically significant beyond random noise.",
            "By looking at the ROC curve.",
            "By training them again."
        ],
        correct: "By using a Paired Statistical Test (like a Paired Bootstrap Test or McNemar's Test) to see if the difference between them is statistically significant beyond random noise."
    },
    {
        topic: "ai",
        quest: "What specific subset of data does McNemar's Test focus on when comparing two Classification models?",
        hasContent: false,
        choices: [
            "The observations where both models were correct.",
            "Only the observations where the two models DISAGREED. It tests if one model gets significantly more of these contested cases right.",
            "The observations in the training set.",
            "The missing values."
        ],
        correct: "Only the observations where the two models DISAGREED. It tests if one model gets significantly more of these contested cases right."
    },
    {
        topic: "ai",
        quest: "What is the purely statistical definition of 'Overfitting' in Machine Learning?",
        hasContent: false,
        choices: [
            "Using too many epochs.",
            "When the model mathematically learns and memorizes the random, unrepeatable NOISE in the training sample rather than the true underlying SIGNAL.",
            "When the learning rate is too high.",
            "When the dataset is too small."
        ],
        correct: "When the model mathematically learns and memorizes the random, unrepeatable NOISE in the training sample rather than the true underlying SIGNAL."
    },
    {
        topic: "ai",
        quest: "When looking at a Learning Curve (Performance vs. Training Set Size), what is the classic statistical signature of severe Overfitting?",
        hasContent: false,
        choices: [
            "Both curves are at 50%.",
            "The Training Accuracy is near perfect (e.g., 99%), but there is a massive, persistent gap where the Validation Accuracy plateaus much lower (e.g., 70%).",
            "The Validation accuracy is higher than the Training accuracy.",
            "The curves are completely flat."
        ],
        correct: "The Training Accuracy is near perfect (e.g., 99%), but there is a massive, persistent gap where the Validation Accuracy plateaus much lower (e.g., 70%)."
    },
    {
        topic: "ai",
        quest: "What is 'Data Leakage' in Machine Learning from a statistical viewpoint?",
        hasContent: false,
        choices: [
            "When memory leaks from the RAM.",
            "A violation of the core assumption of INDEPENDENCE between the Training and Evaluation data (e.g., information from the test set accidentally influenced the training process).",
            "When features are dropped.",
            "When the model outputs probabilities instead of classes."
        ],
        correct: "A violation of the core assumption of INDEPENDENCE between the Training and Evaluation data (e.g., information from the test set accidentally influenced the training process)."
    },
    {
        topic: "ai",
        quest: "You are building a pipeline. You run `StandardScaler().fit_transform(X)` on your ENTIRE dataset, and THEN you run `train_test_split()`. Why is this a fatal statistical error?",
        hasContent: true,
        contentType: "code",
        codeLanguage: "python",
        content: "X_scaled = scaler.fit_transform(X)\nX_train, X_test = train_test_split(X_scaled)",
        choices: [
            "It will cause a syntax error.",
            "Data Leakage. The mean and variance of the TEST set were used to scale the TRAINING data, breaking the independence of the evaluation.",
            "The test set will be too small.",
            "It changes the target variable."
        ],
        correct: "Data Leakage. The mean and variance of the TEST set were used to scale the TRAINING data, breaking the independence of the evaluation."
    },
    {
        topic: "ai",
        quest: "Your new ML model achieves 99.8% accuracy on a problem where domain experts say the theoretical maximum is roughly 85%. Statistically, what is the most likely explanation?",
        hasContent: false,
        choices: [
            "You are a genius.",
            "The data contains massive Data Leakage (a feature perfectly correlates with the target because it was generated after the target occurred).",
            "The learning rate was optimal.",
            "The model is a Random Forest."
        ],
        correct: "The data contains massive Data Leakage (a feature perfectly correlates with the target because it was generated after the target occurred)."
    },
    {
        topic: "ai",
        quest: "By default, Logistic Regression uses a decision threshold of 0.5 (probability > 50% = Positive). When should you statistically move this threshold LOWER (e.g., 0.2)?",
        hasContent: false,
        choices: [
            "When False Positives are incredibly expensive.",
            "When False Negatives are incredibly expensive (e.g., cancer screening), so you want to aggressively maximize Recall at the cost of Precision.",
            "When you want to improve Accuracy.",
            "Never, 0.5 is mathematically proven to be optimal."
        ],
        correct: "When False Negatives are incredibly expensive (e.g., cancer screening), so you want to aggressively maximize Recall at the cost of Precision."
    },
    {
        topic: "ai",
        quest: "You are writing a formal Model Evaluation Memo. Instead of writing 'Model Accuracy is 0.85', what is the professional, statistically rigorous way to report it?",
        hasContent: false,
        choices: [
            "Model Accuracy is exactly 0.85.",
            "Model Accuracy is 0.85 (95% CI: [0.82, 0.88]), computed via Bootstrap on a held-out test set of n=1000.",
            "Model Accuracy is roughly 0.85.",
            "Model Accuracy > 0.8"
        ],
        correct: "Model Accuracy is 0.85 (95% CI: [0.82, 0.88]), computed via Bootstrap on a held-out test set of n=1000."
    },
    {
        topic: "ai",
        quest: "When constructing Bootstrap samples to evaluate a model's F1 score, how is the sampling performed?",
        hasContent: false,
        choices: [
            "Without replacement, creating smaller and smaller datasets.",
            "With replacement. Each bootstrap sample is the same size as the original test set, but some observations are duplicated and some are left out.",
            "By taking only the first 10% of the data.",
            "By generating synthetic fake data."
        ],
        correct: "With replacement. Each bootstrap sample is the same size as the original test set, but some observations are duplicated and some are left out."
    },
    {
        topic: "ai",
        quest: "Why can two ML models have entirely OVERLAPPING 95% Confidence Intervals for their individual Accuracy, yet a Paired Test proves one is significantly better than the other?",
        hasContent: false,
        choices: [
            "Because p-values are broken.",
            "Because the paired test accounts for the Correlation between their errors. If Model A beats Model B consistently on the exact same hard examples, the difference is significant despite overall variance.",
            "Because the test set was too small.",
            "Because they are different types of models."
        ],
        correct: "Because the paired test accounts for the Correlation between their errors. If Model A beats Model B consistently on the exact same hard examples, the difference is significant despite overall variance."
    },
    {
        topic: "ai",
        quest: "Which visual tool explicitly maps out the trade-off between False Positives and False Negatives across every possible decision threshold?",
        hasContent: false,
        choices: [
            "A Pie Chart",
            "A Precision-Recall Curve (or ROC Curve)",
            "A Learning Curve",
            "A Scatter Matrix"
        ],
        correct: "A Precision-Recall Curve (or ROC Curve)"
    },
    {
        topic: "ai",
        quest: "You perform a Paired t-test between your Cross-Validation Training Scores and your Validation Scores. The p-value is 0.0001, and the average gap is +8%. What does this statistically confirm?",
        hasContent: false,
        choices: [
            "The model is ready for production.",
            "The model is consistently and significantly Overfitting to the training data.",
            "The data is perfectly balanced.",
            "The model has Underfitted."
        ],
        correct: "The model is consistently and significantly Overfitting to the training data."
    },
    {
        topic: "ai",
        quest: "In the context of evaluating a classification model, why is 'Test Set Size' a critical piece of statistical context?",
        hasContent: false,
        choices: [
            "Because large test sets run faster.",
            "Because the Margin of Error depends heavily on $n$. 90% accuracy on a test set of 20 observations has a massive confidence interval and is highly unreliable.",
            "Because it changes the training algorithm.",
            "Because smaller test sets give better accuracy."
        ],
        correct: "Because the Margin of Error depends heavily on $n$. 90% accuracy on a test set of 20 observations has a massive confidence interval and is highly unreliable."
    },
    {
        topic: "ai",
        quest: "If you want to catch 99% of all fraudulent transactions (Extremely High Recall), what will statistically happen to your Precision?",
        hasContent: false,
        choices: [
            "It will also go up to 99%.",
            "It will almost certainly crash. To catch 99% of frauds, you must lower the threshold, meaning you will falsely flag many legitimate transactions as fraud.",
            "It will stay exactly the same.",
            "It becomes undefined."
        ],
        correct: "It will almost certainly crash. To catch 99% of frauds, you must lower the threshold, meaning you will falsely flag many legitimate transactions as fraud."
    },
    {
        topic: "ai",
        quest: "What does the 'Point Estimate' refer to in ML Evaluation?",
        hasContent: false,
        choices: [
            "The Confidence Interval.",
            "The single, specific number calculated on your one test set (e.g., 'Accuracy = 0.85'), ignoring all underlying uncertainty.",
            "The optimal threshold.",
            "The number of features."
        ],
        correct: "The single, specific number calculated on your one test set (e.g., 'Accuracy = 0.85'), ignoring all underlying uncertainty."
    },
    {
        topic: "ai",
        quest: "Which of these phrases belongs in the 'Interpretation/Caveats' section of a professional Statistical ML Evaluation Memo?",
        hasContent: false,
        choices: [
            "RandomForestClassifier(max_depth=5)",
            "'We assume the test set distribution perfectly matches the future live production data. If real-world data drifts, this F1 estimate will degrade.'",
            "'The p-value is 0.04'",
            "'Accuracy is 92%'"
        ],
        correct: "'We assume the test set distribution perfectly matches the future live production data. If real-world data drifts, this F1 estimate will degrade.'"
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
        console.log(`Successfully inserted ${result.insertedCount} questions for '3.10 ML Evaluation'`);
        
        // Delete the processed file
        const targetFile = path.join(__dirname, '..', 'materials', '3.10 Connecting Statistics to ML EvaluationUnit 3 –.._.md');
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
