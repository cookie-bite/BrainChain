require('dotenv').config();
const { MongoClient } = require('mongodb');
const fs = require('fs');
const path = require('path');

const questions = [
    {
        topic: "ai",
        quest: "What is the core philosophical difference between traditional programming and Machine Learning?",
        hasContent: false,
        choices: [
            "Machine Learning uses loops, while traditional programming does not.",
            "Traditional programming involves writing explicit rules to process data into answers. Machine Learning takes data and answers, and figures out the RULES on its own.",
            "Traditional programming only works on text data.",
            "Machine Learning does not require a CPU."
        ],
        correct: "Traditional programming involves writing explicit rules to process data into answers. Machine Learning takes data and answers, and figures out the RULES on its own."
    },
    {
        topic: "ai",
        quest: "In Machine Learning terminology, predicting the exact Sale Price of a house ($350,000) versus identifying if an email is 'Spam' or 'Not Spam' represents which two distinct types of Supervised Learning?",
        hasContent: false,
        choices: [
            "Unsupervised and Reinforcement",
            "Regression (continuous numbers) and Classification (distinct categories)",
            "Deep Learning and Shallow Learning",
            "Clustering and Dimensionality Reduction"
        ],
        correct: "Regression (continuous numbers) and Classification (distinct categories)"
    },
    {
        topic: "ai",
        quest: "A tech company wants to group their users into distinct marketing profiles based on their browsing behavior, but they don't have predefined labels. What type of ML is this?",
        hasContent: false,
        choices: [
            "Supervised Learning",
            "Unsupervised Learning (e.g., Clustering), because the algorithm must find hidden structures in unlabeled data.",
            "Reinforcement Learning",
            "Linear Regression"
        ],
        correct: "Unsupervised Learning (e.g., Clustering), because the algorithm must find hidden structures in unlabeled data."
    },
    {
        topic: "ai",
        quest: "In a standard tabular dataset used for ML, what are 'Features' and what is the 'Target'?",
        hasContent: false,
        choices: [
            "Features are the column headers, Target is the last row.",
            "Features are the Independent Variables (the inputs/questions), and the Target is the Dependent Variable (the output/answer you want to predict).",
            "Features are numerical data, Target is text data.",
            "Features are the test set, Target is the training set."
        ],
        correct: "Features are the Independent Variables (the inputs/questions), and the Target is the Dependent Variable (the output/answer you want to predict)."
    },
    {
        topic: "ai",
        quest: "You have a column called 'City' with values like 'Paris', 'Tokyo', and 'New York'. Why shouldn't you use standard Label Encoding (assigning 0, 1, 2) for this column?",
        hasContent: false,
        choices: [
            "Because 0 cannot be used in math.",
            "Because this is Nominal data (no inherent order). If you assign 0, 1, 2, the math engine of the ML model will incorrectly assume that Tokyo is somehow 'greater than' Paris.",
            "Because cities must be scaled first.",
            "Because Label Encoding only works on floats."
        ],
        correct: "Because this is Nominal data (no inherent order). If you assign 0, 1, 2, the math engine of the ML model will incorrectly assume that Tokyo is somehow 'greater than' Paris."
    },
    {
        topic: "ai",
        quest: "What is the proper way to encode a Nominal Categorical variable like 'Color' (Red, Blue, Green) for a Machine Learning model?",
        hasContent: false,
        choices: [
            "Label Encoding",
            "One-Hot Encoding (creating separate binary columns like color_red, color_blue, color_green containing 0s or 1s).",
            "StandardScaler",
            "MinMaxScaler"
        ],
        correct: "One-Hot Encoding (creating separate binary columns like color_red, color_blue, color_green containing 0s or 1s)."
    },
    {
        topic: "ai",
        quest: "When using `OneHotEncoder` in Scikit-Learn, why is it mathematically important to use the `drop='first'` parameter in linear models?",
        hasContent: true,
        contentType: "code",
        codeLanguage: "python",
        content: "encoder = OneHotEncoder(drop='first')",
        choices: [
            "To save memory.",
            "To avoid the Dummy Variable Trap (perfect multicollinearity). If color_red=0 and color_green=0, the model already knows it MUST be blue; the blue column is completely redundant.",
            "To drop the target variable.",
            "To remove outliers."
        ],
        correct: "To avoid the Dummy Variable Trap (perfect multicollinearity). If color_red=0 and color_green=0, the model already knows it MUST be blue; the blue column is completely redundant."
    },
    {
        topic: "ai",
        quest: "What does `StandardScaler` (Z-score normalization) mathematically do to a feature column?",
        hasContent: false,
        choices: [
            "It rounds all numbers to integers.",
            "It shifts and scales the distribution so that the Mean becomes exactly 0 and the Standard Deviation becomes exactly 1.",
            "It forces all numbers to be exactly between 0 and 1.",
            "It replaces missing values with the mean."
        ],
        correct: "It shifts and scales the distribution so that the Mean becomes exactly 0 and the Standard Deviation becomes exactly 1."
    },
    {
        topic: "ai",
        quest: "Why is 'Feature Scaling' absolutely critical for algorithms like K-Nearest Neighbors (KNN) or Support Vector Machines (SVM)?",
        hasContent: false,
        choices: [
            "Because they cannot process negative numbers.",
            "Because these algorithms compute physical geometric DISTANCES between data points. A feature ranging from 0 to 1,000,000 will entirely dominate a feature ranging from 0 to 1 if unscaled.",
            "Because it prevents data leakage.",
            "Because it encodes categorical text."
        ],
        correct: "Because these algorithms compute physical geometric DISTANCES between data points. A feature ranging from 0 to 1,000,000 will entirely dominate a feature ranging from 0 to 1 if unscaled."
    },
    {
        topic: "ai",
        quest: "In the Scikit-Learn Estimator API, what is the strict, golden rule to prevent massive Data Leakage when applying Preprocessors (like Scalers) to your Training and Test sets?",
        hasContent: false,
        choices: [
            "Fit the scaler on the Test set, then transform the Training set.",
            "Call `fit_transform()` on the Training set, but ONLY call `transform()` on the Test set (using the parameters learned solely from the training data).",
            "Call `fit_transform()` on both the Training set and the Test set.",
            "Apply the scaler to the entire dataset before splitting."
        ],
        correct: "Call `fit_transform()` on the Training set, but ONLY call `transform()` on the Test set (using the parameters learned solely from the training data)."
    },
    {
        topic: "ai",
        quest: "What is the primary architectural advantage of using a `Pipeline` in Scikit-Learn?",
        hasContent: true,
        contentType: "code",
        codeLanguage: "python",
        content: "pipe = Pipeline([('scaler', StandardScaler()), ('model', Ridge())])",
        choices: [
            "It runs the code on the GPU.",
            "It elegantly chains preprocessing and modeling steps together, automatically handling `fit_transform` during training and `transform` during testing, making data leakage almost impossible.",
            "It automatically generates new features.",
            "It visualizes the data instantly."
        ],
        correct: "It elegantly chains preprocessing and modeling steps together, automatically handling `fit_transform` during training and `transform` during testing, making data leakage almost impossible."
    },
    {
        topic: "ai",
        quest: "When handling Missing Values in a dataset, why do experienced data scientists often prefer `df.dropna()` over aggressive data imputation (like filling missing ages with the Mean)?",
        hasContent: false,
        choices: [
            "Because `dropna()` is faster to run.",
            "Because replacing real missing values with completely fabricated averages can severely distort the actual variance of the dataset and introduce artificial bias.",
            "Because Scikit-learn cannot process imputed data.",
            "Because missing values are usually outliers."
        ],
        correct: "Because replacing real missing values with completely fabricated averages can severely distort the actual variance of the dataset and introduce artificial bias."
    },
    {
        topic: "ai",
        quest: "You use `VarianceThreshold(threshold=0.01)` as a Feature Selection step. What specific type of feature is this designed to instantly remove?",
        hasContent: false,
        choices: [
            "Features highly correlated with the target.",
            "Features that essentially have the exact same constant value for almost every single row in the dataset (zero or near-zero variance), providing zero predictive power.",
            "Features with negative values.",
            "Categorical features."
        ],
        correct: "Features that essentially have the exact same constant value for almost every single row in the dataset (zero or near-zero variance), providing zero predictive power."
    },
    {
        topic: "ai",
        quest: "You have a feature called 'User Satisfaction' with values: 'Poor', 'Fair', 'Good', 'Excellent'. Which encoding method is statistically appropriate here?",
        hasContent: false,
        choices: [
            "One-Hot Encoding",
            "Ordinal Encoding (mapping them to 0, 1, 2, 3), because the intrinsic ordered hierarchy of the categories matters to the logic of the problem.",
            "StandardScaler",
            "VarianceThreshold"
        ],
        correct: "Ordinal Encoding (mapping them to 0, 1, 2, 3), because the intrinsic ordered hierarchy of the categories matters to the logic of the problem."
    },
    {
        topic: "ai",
        quest: "What happens mathematically if you run a Machine Learning model without dropping highly correlated, redundant features (Multicollinearity)?",
        hasContent: false,
        choices: [
            "The model will automatically drop them.",
            "The model will run slower, and if it's a Linear model, the learned coefficients will become highly unstable, unreliable, and uninterpretable.",
            "The model will achieve 100% accuracy.",
            "The model will switch to Unsupervised learning."
        ],
        correct: "The model will run slower, and if it's a Linear model, the learned coefficients will become highly unstable, unreliable, and uninterpretable."
    },
    {
        topic: "ai",
        quest: "In Scikit-Learn, a typical Model object (Estimator) like `RandomForestClassifier` exposes which two primary methods to the user?",
        hasContent: false,
        choices: [
            "`clean()` and `plot()`",
            "`fit(X, y)` to learn from data, and `predict(X)` to generate outputs on new data.",
            "`train()` and `test()`",
            "`compile()` and `run()`"
        ],
        correct: "`fit(X, y)` to learn from data, and `predict(X)` to generate outputs on new data."
    },
    {
        topic: "ai",
        quest: "In a machine learning workflow, roughly what percentage of a Data Scientist's time is typically spent strictly on Data Cleaning and Feature Engineering (rather than model tuning)?",
        hasContent: false,
        choices: [
            "10-20%",
            "60-80%; preparing the raw data into high-quality mathematical features is by far the most time-consuming and impactful phase of ML.",
            "5-10%",
            "99%"
        ],
        correct: "60-80%; preparing the raw data into high-quality mathematical features is by far the most time-consuming and impactful phase of ML."
    },
    {
        topic: "ai",
        quest: "How does `MinMaxScaler` differ computationally from `StandardScaler`?",
        hasContent: false,
        choices: [
            "It turns continuous data into categories.",
            "MinMaxScaler strictly squeezes all values into a rigid predefined bounded range (usually between 0.0 and 1.0), whereas StandardScaler does not strictly bound the min/max values.",
            "It removes the minimum value from the dataset.",
            "It replaces missing values with 0."
        ],
        correct: "MinMaxScaler strictly squeezes all values into a rigid predefined bounded range (usually between 0.0 and 1.0), whereas StandardScaler does not strictly bound the min/max values."
    },
    {
        topic: "ai",
        quest: "Which of the following problems is an example of 'Reinforcement Learning' rather than Supervised or Unsupervised?",
        hasContent: false,
        choices: [
            "Predicting tomorrow's stock price.",
            "An AI agent learning to play Chess or drive a car by repeatedly taking actions in an environment and receiving numeric rewards or penalties.",
            "Grouping a supermarket's inventory into clusters.",
            "Detecting fraudulent credit card transactions."
        ],
        correct: "An AI agent learning to play Chess or drive a car by repeatedly taking actions in an environment and receiving numeric rewards or penalties."
    },
    {
        topic: "ai",
        quest: "Principal Component Analysis (PCA) is an algorithm used during Feature Engineering primarily for what purpose?",
        hasContent: false,
        choices: [
            "Imputing missing values.",
            "Dimensionality Reduction; projecting a massive number of features down into a smaller set of 'Principal Components' while preserving the maximum amount of original variance.",
            "One-Hot Encoding text data.",
            "Scaling numerical features to mean 0."
        ],
        correct: "Dimensionality Reduction; projecting a massive number of features down into a smaller set of 'Principal Components' while preserving the maximum amount of original variance."
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
        console.log(`Successfully inserted ${result.insertedCount} questions for '4.1 Fundamentals'`);
        
        // Delete the processed file
        const targetFile = path.join(__dirname, '..', 'materials', '4.1 Fundamentals & Feature EngineeringLESSONIntrodu.._.md');
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
