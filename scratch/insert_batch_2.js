require('dotenv').config();
const { MongoClient } = require('mongodb');
const fs = require('fs');
const path = require('path');

const questions = [
    {
        topic: "ai",
        quest: "You are analyzing a medical dataset. Patients with severe, painful symptoms systematically skip the 'Rate your general health' question because they feel too ill to complete it. What type of missing data is this?",
        hasContent: false,
        choices: [
            "Missing Not at Random (MNAR), because the missingness is directly caused by the value of the missing variable itself (poor health).",
            "Missing at Random (MAR), because the missingness is related to another variable (pain level).",
            "Missing Completely at Random (MCAR), because any patient might skip a question.",
            "Missing by Design (MBD), because the survey was structured poorly."
        ],
        correct: "Missing Not at Random (MNAR), because the missingness is directly caused by the value of the missing variable itself (poor health)."
    },
    {
        topic: "ai",
        quest: "Your team is building a credit scoring model. In the raw data, 'income' is occasionally missing. You discover that female applicants are more likely to leave 'income' blank, but within each gender group, the missingness has no relationship to actual income. What is the missing data type, and is row deletion safe?",
        hasContent: false,
        choices: [
            "MAR; row deletion is safe because it preserves overall statistics.",
            "MAR; row deletion is dangerous because it will severely underrepresent female applicants in the training data, introducing bias.",
            "MNAR; row deletion is dangerous because it drops the highest incomes.",
            "MCAR; row deletion is perfectly safe."
        ],
        correct: "MAR; row deletion is dangerous because it will severely underrepresent female applicants in the training data, introducing bias."
    },
    {
        topic: "ai",
        quest: "A survey records 'Number of Children'. 15% of respondents left it blank. A junior data scientist decides to impute the missing values with 0. According to the 'Sentinel Rule', why is this a catastrophic mistake?",
        hasContent: false,
        choices: [
            "Because 0 is not the mean or median of the dataset.",
            "Because filling missing data with a plausible real value (0) makes it impossible to distinguish between respondents who truly have no children and respondents whose data was lost.",
            "Because imputation should always be done with -1.",
            "Because decision trees cannot split on the number 0."
        ],
        correct: "Because filling missing data with a plausible real value (0) makes it impossible to distinguish between respondents who truly have no children and respondents whose data was lost."
    },
    {
        topic: "ai",
        quest: "You have two features: 'Age' (range 20-60) and 'Salary' (range $30k-$200k). If you feed these directly into a distance-based algorithm like K-Nearest Neighbors without scaling, what will happen?",
        hasContent: true,
        contentType: "text",
        content: "Both features are numeric, but their scales differ by orders of magnitude.",
        choices: [
            "The model will automatically normalize them internally.",
            "The 'Salary' feature will completely dominate the distance calculations, effectively rendering 'Age' irrelevant.",
            "The algorithm will fail to compile.",
            "The model will assign higher feature importance to 'Age' because it has lower variance."
        ],
        correct: "The 'Salary' feature will completely dominate the distance calculations, effectively rendering 'Age' irrelevant."
    },
    {
        topic: "ai",
        quest: "A dataset has an extremely right-skewed 'Revenue' feature where most values are around $1,000, but a few are $10,000,000. Why is applying a logarithmic transformation (np.log1p) beneficial before training a linear model?",
        hasContent: false,
        choices: [
            "It converts the continuous variable into a categorical one.",
            "It squeezes the massive outliers closer to the mean, reducing the skewness and preventing the linear model's coefficients from being overly influenced by a few extreme values.",
            "It forces the data to perfectly fit a Gaussian distribution.",
            "It removes all zero and negative values from the dataset automatically."
        ],
        correct: "It squeezes the massive outliers closer to the mean, reducing the skewness and preventing the linear model's coefficients from being overly influenced by a few extreme values."
    },
    {
        topic: "ai",
        quest: "You are building a fraud detection system for an e-commerce platform. New seller brands register every minute. Why is 'One-Hot Encoding' a poor choice for the 'Brand_Name' categorical feature?",
        hasContent: false,
        choices: [
            "One-Hot Encoding cannot handle string values.",
            "One-Hot Encoding creates a static vocabulary; when a brand new 'Brand_Name' appears in production tomorrow, the model will crash or treat it as an error because it has no corresponding column.",
            "One-Hot Encoding takes too long to compute during inference.",
            "One-Hot Encoding will assign integer weights to brands, implying an artificial ordering."
        ],
        correct: "One-Hot Encoding creates a static vocabulary; when a brand new 'Brand_Name' appears in production tomorrow, the model will crash or treat it as an error because it has no corresponding column."
    },
    {
        topic: "ai",
        quest: "To handle an infinite stream of new, evolving categories (like user-agent strings), your team decides to use the Hashing Trick. What is the primary accepted trade-off of this approach?",
        hasContent: true,
        contentType: "code",
        codeLanguage: "python",
        content: "hashed_val = hash_category('NewStartup2026', n_buckets=1024)",
        choices: [
            "It requires constant internet access to resolve hashes.",
            "It maps completely different strings to the same bucket (hash collisions), but empirical research shows low collision rates cause negligible performance loss in large models.",
            "It makes the feature space infinitely large, consuming all available RAM.",
            "It takes too long to train."
        ],
        correct: "It maps completely different strings to the same bucket (hash collisions), but empirical research shows low collision rates cause negligible performance loss in large models."
    },
    {
        topic: "ai",
        quest: "A medical model screens for a rare disease (prevalence: 0.1%). A lazy model just outputs 'Negative' for every single patient. What is its accuracy, and why is accuracy a terrible metric here?",
        hasContent: false,
        choices: [
            "0.1% accuracy; it is terrible because it misses the majority class.",
            "50% accuracy; it is terrible because it is essentially random guessing.",
            "99.9% accuracy; it is terrible because the cost of missing the 0.1% of sick patients is catastrophic, yet the model looks nearly perfect.",
            "100% accuracy; it is terrible because it overfits the training data."
        ],
        correct: "99.9% accuracy; it is terrible because the cost of missing the 0.1% of sick patients is catastrophic, yet the model looks nearly perfect."
    },
    {
        topic: "ai",
        quest: "You use SMOTE to oversample the minority class in an imbalanced dataset. You apply SMOTE to the entire dataset (Train + Test), then do an 80/20 split. Your model achieves 98% F1-score. What fatal mistake have you made?",
        hasContent: true,
        contentType: "text",
        content: "The Resampling Golden Rule was violated.",
        choices: [
            "You used SMOTE instead of Tomek links.",
            "You leaked synthetic data patterns into the test set; by resampling before splitting, the evaluation is no longer testing on the true, natural distribution, heavily overestimating real-world performance.",
            "You should have done a 70/30 split.",
            "SMOTE only works on categorical variables, not continuous ones."
        ],
        correct: "You leaked synthetic data patterns into the test set; by resampling before splitting, the evaluation is no longer testing on the true, natural distribution, heavily overestimating real-world performance."
    },
    {
        topic: "ai",
        quest: "If you cannot alter the imbalanced training dataset (e.g., due to strict regulatory compliance), what is a valid algorithm-level method to force the model to care about the 1% minority class?",
        hasContent: false,
        choices: [
            "Change the activation function to ReLU.",
            "Use Class-Balanced Weights in the loss function, penalizing mistakes on the 1% minority class 99 times more heavily than mistakes on the majority class.",
            "Drop the learning rate by a factor of 100.",
            "Switch from Python to C++ to ensure faster convergence."
        ],
        correct: "Use Class-Balanced Weights in the loss function, penalizing mistakes on the 1% minority class 99 times more heavily than mistakes on the majority class."
    },
    {
        topic: "ai",
        quest: "In computer vision, you apply random rotations, flips, and crops to your training images on the fly. In NLP, you randomly replace 1.5% of words with synonyms. What is the fundamental purpose of these Data Augmentation techniques?",
        hasContent: false,
        choices: [
            "To artificially balance the classes.",
            "To force the model to memorize the exact training data.",
            "To make the model more robust to noise and structural fluctuations by increasing the effective size and variance of the training data.",
            "To compress the dataset so it fits into GPU memory."
        ],
        correct: "To make the model more robust to noise and structural fluctuations by increasing the effective size and variance of the training data."
    },
    {
        topic: "ai",
        quest: "You are predicting future stock movements. You have 3 years of daily historical data. A junior engineer uses `train_test_split(df, test_size=0.2, random_state=42)`. Why will this model fail in production?",
        hasContent: true,
        contentType: "code",
        codeLanguage: "python",
        content: "train, test = train_test_split(df, test_size=0.2, random_state=42)",
        choices: [
            "Because random_state=42 is an unlucky seed.",
            "Because a random split interleaves train and test dates, allowing information from the future to leak into the past during training (Temporal Leakage).",
            "Because the test_size should be 0.3 for financial data.",
            "Because the split does not balance the classes automatically."
        ],
        correct: "Because a random split interleaves train and test dates, allowing information from the future to leak into the past during training (Temporal Leakage)."
    },
    {
        topic: "ai",
        quest: "A data scientist scales their features using `StandardScaler.fit_transform(entire_dataset)` before performing the train/test split. Why is this considered Data Leakage?",
        hasContent: false,
        choices: [
            "Because the scaler computes the global mean and variance across the whole dataset; thus, statistical information from the test set 'leaks' into the training set.",
            "Because standard scaling changes the underlying distribution of the data.",
            "Because the test set requires a completely different scaling algorithm.",
            "Because it prevents the use of one-hot encoding later."
        ],
        correct: "Because the scaler computes the global mean and variance across the whole dataset; thus, statistical information from the test set 'leaks' into the training set."
    },
    {
        topic: "ai",
        quest: "A hospital develops an AI to detect lung disease from X-rays. They split their 10,000 images 80/20. However, many patients had multiple X-rays taken over time. If Patient A's early X-rays are in Train, and their later X-rays are in Test, what type of leakage is this?",
        hasContent: true,
        contentType: "text",
        content: "The model achieves 95% accuracy on the test set, but drops to 60% on new patients.",
        choices: [
            "Temporal Leakage.",
            "Group Leakage (or Entity Leakage); the model memorized patient-specific anatomical traits (like rib shape) rather than learning generalized disease features.",
            "Scaling Leakage.",
            "Label Leakage."
        ],
        correct: "Group Leakage (or Entity Leakage); the model memorized patient-specific anatomical traits (like rib shape) rather than learning generalized disease features."
    },
    {
        topic: "ai",
        quest: "You notice that a specific feature in your dataset has a 0.99 absolute correlation with the target variable. What is your immediate next step as an ML engineer?",
        hasContent: false,
        choices: [
            "Deploy the model immediately; you found the perfect predictor.",
            "Investigate the feature's generation process; suspiciously high correlation is the primary symptom of label leakage (e.g., using 'is_cancelled' to predict 'churn').",
            "Drop all other features because they are useless.",
            "Multiply the feature by a small weight to hide the correlation."
        ],
        correct: "Investigate the feature's generation process; suspiciously high correlation is the primary symptom of label leakage (e.g., using 'is_cancelled' to predict 'churn')."
    },
    {
        topic: "ai",
        quest: "What is the primary conceptual difference between 'Focal Loss' and standard 'Class-Balanced Loss' when dealing with imbalanced datasets?",
        hasContent: false,
        choices: [
            "Focal loss only works for regression, while class-balanced loss is for classification.",
            "Class-balanced loss weights purely by class frequency; Focal loss dynamically reduces the weight of easy, well-classified examples, forcing the model to focus on the 'hard' misclassified examples regardless of their class.",
            "Focal loss oversamples the dataset in memory, while class-balanced loss does not.",
            "They are identical mathematical functions with different names."
        ],
        correct: "Class-balanced loss weights purely by class frequency; Focal loss dynamically reduces the weight of easy, well-classified examples, forcing the model to focus on the 'hard' misclassified examples regardless of their class."
    },
    {
        topic: "ai",
        quest: "You are training an NLP model using the BERT framework. During training, the framework randomly replaces 1.5% of tokens with random words. What specific data augmentation technique is this?",
        hasContent: false,
        choices: [
            "Label-preserving Synonyms",
            "Token Masking / Perturbation",
            "Mixup Synthesis",
            "SMOTE Oversampling"
        ],
        correct: "Token Masking / Perturbation"
    },
    {
        topic: "ai",
        quest: "Which data synthesis technique involves linearly blending two training images and their one-hot encoded labels (e.g., creating a 70% dog / 30% cat image with label [0.7, 0.3])?",
        hasContent: false,
        choices: [
            "Adversarial Augmentation",
            "Tomek Links",
            "Mixup",
            "Generative Pre-training"
        ],
        correct: "Mixup"
    },
    {
        topic: "ai",
        quest: "In a machine learning workflow, which is the mathematically correct sequence for handling missing values via imputation and feature scaling?",
        hasContent: true,
        contentType: "text",
        content: "To strictly prevent Data Leakage across train/test splits.",
        choices: [
            "1. Split Train/Test. 2. Fit Imputer and Scaler on Train. 3. Transform Train and Test using those fitted objects.",
            "1. Fit Imputer and Scaler on Full Data. 2. Transform Full Data. 3. Split Train/Test.",
            "1. Split Train/Test. 2. Fit Imputer on Train, fit Scaler on Test. 3. Transform.",
            "1. Impute on Full Data. 2. Split. 3. Scale separately."
        ],
        correct: "1. Split Train/Test. 2. Fit Imputer and Scaler on Train. 3. Transform Train and Test using those fitted objects."
    },
    {
        topic: "ai",
        quest: "You have an imbalanced dataset where finding the Positive class (Fraud) is critical. Model A has Precision=0.90 and Recall=0.10. Model B has Precision=0.20 and Recall=0.95. Which model catches almost all the fraud, but annoys users with many false alarms?",
        hasContent: false,
        choices: [
            "Model A",
            "Model B",
            "Both models catch equal amounts of fraud.",
            "Neither model catches fraud."
        ],
        correct: "Model B"
    },
    {
        topic: "ai",
        quest: "A data scientist decides to drop all rows containing any missing values. Which specific condition MUST be true for this to be statistically safe and unbiased?",
        hasContent: false,
        choices: [
            "The data must be Missing Not at Random (MNAR).",
            "The missing data must represent at least 50% of the dataset.",
            "The data must be Missing Completely at Random (MCAR) and the number of dropped rows must be tiny.",
            "The data must be Missing at Random (MAR) conditioned on a binary feature."
        ],
        correct: "The data must be Missing Completely at Random (MCAR) and the number of dropped rows must be tiny."
    },
    {
        topic: "ai",
        quest: "If you add a binary indicator column `income_was_missing` (0 or 1) before imputing the actual `income` column with its mean, what specific signal are you preserving for the model?",
        hasContent: false,
        choices: [
            "The MCAR noise threshold.",
            "The MNAR signal; the fact that the value was missing might inherently predict the target (e.g., people hiding high incomes).",
            "The scaling variance.",
            "The class imbalance ratio."
        ],
        correct: "The MNAR signal; the fact that the value was missing might inherently predict the target (e.g., people hiding high incomes)."
    },
    {
        topic: "ai",
        quest: "Which resampling technique identifies pairs of opposite-class samples that are close together in feature space, and removes the majority-class member to 'clean' the decision boundary?",
        hasContent: false,
        choices: [
            "SMOTE",
            "Random Oversampling",
            "Tomek Links",
            "Focal Smoothing"
        ],
        correct: "Tomek Links"
    },
    {
        topic: "ai",
        quest: "When using SMOTE on a highly imbalanced dataset with 50 minority and 950 majority samples, what does SMOTE actually do under the hood?",
        hasContent: false,
        choices: [
            "It duplicates the 50 minority samples exactly 18 times each.",
            "It deletes 900 majority samples randomly.",
            "It creates synthetic minority samples by mathematically interpolating features between existing minority samples and their nearest neighbors.",
            "It weights the loss function of the minority samples by 19."
        ],
        correct: "It creates synthetic minority samples by mathematically interpolating features between existing minority samples and their nearest neighbors."
    },
    {
        topic: "ai",
        quest: "In an ablation study to detect data leakage, you remove the feature 'days_since_last_login' and the model's accuracy drops from 95% to 60%. What does this strongly imply?",
        hasContent: false,
        choices: [
            "The model is severely underfitting.",
            "The feature 'days_since_last_login' is likely containing leaked information or is a proxy for the target label, warranting a deep audit.",
            "You should apply SMOTE to the dataset.",
            "The dataset has severe class imbalance."
        ],
        correct: "The feature 'days_since_last_login' is likely containing leaked information or is a proxy for the target label, warranting a deep audit."
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
        console.log(`Successfully inserted ${result.insertedCount} questions for '2.6 Real-World Data Processing.md'`);
        
        // Delete the processed file
        const targetFile = path.join(__dirname, '..', 'materials', '2.6 Real-World Data Processing.md');
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
