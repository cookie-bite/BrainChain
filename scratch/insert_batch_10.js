require('dotenv').config();
const { MongoClient } = require('mongodb');
const fs = require('fs');
const path = require('path');

const questions = [
    {
        topic: "ai",
        quest: "A data scientist wants to estimate the average spending of all users on a platform. They randomly select 500 users, calculate the mean, and find it is slightly different from the true mean of all users. What is the statistical term for this inevitable difference?",
        hasContent: false,
        choices: [
            "Measurement Bias",
            "Sampling Error; the natural variation that occurs because a sample is only a subset of the entire population.",
            "Selection Bias",
            "Train-Test Contamination"
        ],
        correct: "Sampling Error; the natural variation that occurs because a sample is only a subset of the entire population."
    },
    {
        topic: "ai",
        quest: "A company’s customer base is 80% Basic, 15% Premium, and 5% Enterprise. To ensure the small Enterprise group is accurately represented in a survey of 1,000 customers, the analyst randomly selects exactly 800 Basic, 150 Premium, and 50 Enterprise customers. What sampling method is this?",
        hasContent: false,
        choices: [
            "Simple Random Sampling",
            "Systematic Sampling",
            "Stratified Sampling; dividing the population into groups (strata) and sampling proportionally from each.",
            "Convenience Sampling"
        ],
        correct: "Stratified Sampling; dividing the population into groups (strata) and sampling proportionally from each."
    },
    {
        topic: "ai",
        quest: "To collect data quickly, a researcher stands outside a luxury mall on a Tuesday afternoon and surveys the first 100 people who walk by. Why is this 'Convenience Sampling' highly dangerous for predictive modeling?",
        hasContent: false,
        choices: [
            "It requires too much computational power.",
            "It introduces severe Selection Bias; the sample is systematically different from the general population (e.g., higher income, not at work on a Tuesday).",
            "It violates the Central Limit Theorem.",
            "It causes Target Leakage."
        ],
        correct: "It introduces severe Selection Bias; the sample is systematically different from the general population (e.g., higher income, not at work on a Tuesday)."
    },
    {
        topic: "ai",
        quest: "During WWII, engineers examined returning bombers and found many bullet holes in the wings, but almost none in the engines. They naively concluded they should add armor to the wings. Statistician Abraham Wald disagreed, saying they must armor the engines. What bias did Wald successfully identify?",
        hasContent: false,
        choices: [
            "Measurement Bias",
            "Survivorship Bias; planes hit in the engines did not survive to be measured, so the data only represented the survivors.",
            "Confounding Bias",
            "Data Leakage"
        ],
        correct: "Survivorship Bias; planes hit in the engines did not survive to be measured, so the data only represented the survivors."
    },
    {
        topic: "ai",
        quest: "A startup claims their investment algorithm yields a 20% annual return, based on backtesting against companies currently listed in the S&P 500 over the last 10 years. What critical error makes this claim completely invalid?",
        hasContent: false,
        choices: [
            "They forgot to normalize the data.",
            "They suffered from Survivorship Bias by only looking at companies that survived long enough to be in the S&P 500 today, ignoring all the companies that went bankrupt during those 10 years.",
            "They used Stratified Sampling.",
            "They used Systematic Sampling."
        ],
        correct: "They suffered from Survivorship Bias by only looking at companies that survived long enough to be in the S&P 500 today, ignoring all the companies that went bankrupt during those 10 years."
    },
    {
        topic: "ai",
        quest: "You notice a massive positive correlation ($r = 0.95$) between Ice Cream Sales and Drowning Incidents. Instead of concluding that ice cream causes drowning, you realize that hotter Summer Weather causes both to increase. What is 'Summer Weather' known as in this scenario?",
        hasContent: false,
        choices: [
            "A Target Variable",
            "A Confounding Variable; a third factor that influences both the supposed cause and the supposed effect, creating a spurious correlation.",
            "A Stratum",
            "A Sampling Error"
        ],
        correct: "A Confounding Variable; a third factor that influences both the supposed cause and the supposed effect, creating a spurious correlation."
    },
    {
        topic: "ai",
        quest: "A Junior Data Scientist runs `StandardScaler` on their entire dataset BEFORE running `train_test_split()`. What fatal machine learning error have they just committed?",
        hasContent: true,
        contentType: "code",
        codeLanguage: "python",
        content: "scaler = StandardScaler()\nX_scaled = scaler.fit_transform(X)\nX_train, X_test = train_test_split(X_scaled)",
        choices: [
            "Target Leakage",
            "Train-Test Contamination (a form of Data Leakage); the scaler calculated the mean and variance using the test set, meaning information from the test set 'leaked' into the training process.",
            "Survivorship Bias",
            "Underfitting"
        ],
        correct: "Train-Test Contamination (a form of Data Leakage); the scaler calculated the mean and variance using the test set, meaning information from the test set 'leaked' into the training process."
    },
    {
        topic: "ai",
        quest: "A machine learning model predicts whether a user will churn next month. One of the features provided to the model is 'Days Since Last Login (Next Month)'. What specific type of bias will this introduce?",
        hasContent: false,
        choices: [
            "Selection Bias",
            "Temporal Data Leakage; the model is being trained using future information that would absolutely not be available at prediction time.",
            "Survivorship Bias",
            "Non-response Bias"
        ],
        correct: "Temporal Data Leakage; the model is being trained using future information that would absolutely not be available at prediction time."
    },
    {
        topic: "ai",
        quest: "You plot a perfectly U-shaped relationship ($y = x^2$) between two variables. You calculate the Pearson correlation coefficient ($r$) and are shocked to find it is exactly 0.0. Why does this happen?",
        hasContent: false,
        choices: [
            "The calculation was done on a sample, not the population.",
            "There is a confounding variable present.",
            "Pearson correlation only detects LINEAR relationships; a zero correlation does not mean there is no relationship, just no linear one.",
            "The standard deviation of both variables is zero."
        ],
        correct: "Pearson correlation only detects LINEAR relationships; a zero correlation does not mean there is no relationship, just no linear one."
    },
    {
        topic: "ai",
        quest: "According to the Central Limit Theorem (CLT), what happens to the Sampling Distribution of the Mean as the sample size ($n$) becomes very large?",
        hasContent: false,
        choices: [
            "It perfectly matches the original distribution of the population.",
            "It approaches a Normal Distribution, regardless of how skewed or non-normal the original population is.",
            "Its variance increases to infinity.",
            "It becomes a Uniform Distribution."
        ],
        correct: "It approaches a Normal Distribution, regardless of how skewed or non-normal the original population is."
    },
    {
        topic: "ai",
        quest: "What is the mathematical formula for the Standard Error of the Mean, which dictates how spread out the sampling distribution will be?",
        hasContent: true,
        contentType: "math",
        content: "\\text{Standard Error} = ?",
        choices: [
            "\\mu / n",
            "\\sigma / \\sqrt{n} ; indicating that as sample size increases, the standard error decreases and our estimate becomes more precise.",
            "\\sigma^2",
            "\\mu - \\sigma"
        ],
        correct: "\\sigma / \\sqrt{n} ; indicating that as sample size increases, the standard error decreases and our estimate becomes more precise."
    },
    {
        topic: "ai",
        quest: "You only have ONE dataset of 200 users. To estimate the uncertainty of the mean, you write a script to randomly draw 200 users from your existing data *with replacement*, calculate the mean, and repeat this 5,000 times. What is this powerful technique called?",
        hasContent: false,
        choices: [
            "Stratified Sampling",
            "Bootstrap Sampling",
            "Systematic Sampling",
            "Cross-Validation"
        ],
        correct: "Bootstrap Sampling"
    },
    {
        topic: "ai",
        quest: "A predictive policing system directs police to patrol a specific neighborhood more often because historical data shows more arrests there. More patrols lead to more arrests in that neighborhood, feeding the model further. What is this phenomenon?",
        hasContent: false,
        choices: [
            "A perfectly optimized feedback loop.",
            "A dangerous feedback loop driven by Selection Bias; the arrest data reflects where police already patrol, not the true baseline crime rate across all areas.",
            "Temporal Data Leakage",
            "The Central Limit Theorem"
        ],
        correct: "A dangerous feedback loop driven by Selection Bias; the arrest data reflects where police already patrol, not the true baseline crime rate across all areas."
    },
    {
        topic: "ai",
        quest: "A company asks all its users, 'How satisfied are you on a scale of 1-10?' The responses average 8.5. However, mostly extremely happy or extremely angry people bother to reply, while average users ignore the email. What kind of bias is this?",
        hasContent: false,
        choices: [
            "Target Leakage",
            "Confounding Bias",
            "Non-Response Bias (a form of Measurement/Selection bias); the probability of responding is directly tied to the underlying satisfaction level.",
            "Survivorship Bias"
        ],
        correct: "Non-Response Bias (a form of Measurement/Selection bias); the probability of responding is directly tied to the underlying satisfaction level."
    },
    {
        topic: "ai",
        quest: "A medical AI trained mostly on images of light-skinned patients performs significantly worse when diagnosing conditions on dark-skinned patients. What is the fundamental cause of this failure?",
        hasContent: false,
        choices: [
            "The neural network was over-regularized.",
            "The training data suffered from Selection Bias and was not representative of the full population the model would encounter in production.",
            "The model suffered from Target Leakage.",
            "The learning rate was set too high."
        ],
        correct: "The training data suffered from Selection Bias and was not representative of the full population the model encounter in production."
    },
    {
        topic: "ai",
        quest: "To survey a database sorted by registration date, an analyst selects every 20th user. They accidentally hit exactly the same day of the week every time, completely missing weekend signups. What sampling method caused this failure?",
        hasContent: false,
        choices: [
            "Simple Random Sampling",
            "Stratified Sampling",
            "Systematic Sampling, which is vulnerable to hidden periodic patterns in the ordering of the data.",
            "Bootstrap Sampling"
        ],
        correct: "Systematic Sampling, which is vulnerable to hidden periodic patterns in the ordering of the data."
    },
    {
        topic: "ai",
        quest: "What is the 'Gold Standard' methodology in data science and medical research for definitively establishing Causation rather than just Correlation?",
        hasContent: false,
        choices: [
            "Training a Deep Neural Network.",
            "Randomized Controlled Experiments (A/B testing); because randomly assigning treatment breaks the link with all potential confounding variables.",
            "Calculating the Pearson Correlation Coefficient very precisely.",
            "Using a larger Convenience Sample."
        ],
        correct: "Randomized Controlled Experiments (A/B testing); because randomly assigning treatment breaks the link with all potential confounding variables."
    },
    {
        topic: "ai",
        quest: "In the context of the Central Limit Theorem, what does it mean that 'the mean of the sample means equals the population mean'?",
        hasContent: false,
        choices: [
            "It means the sample mean is always exactly correct every time.",
            "It means the sampling process is unbiased; on average, over infinite hypothetical samples, the estimate perfectly centers on the true population value.",
            "It means variance decreases to zero.",
            "It means the data is perfectly symmetric."
        ],
        correct: "It means the sampling process is unbiased; on average, over infinite hypothetical samples, the estimate perfectly centers on the true population value."
    },
    {
        topic: "ai",
        quest: "Which of the following is the BEST way to avoid Train-Test Contamination when preprocessing data?",
        hasContent: false,
        choices: [
            "Fit the scaler on the test data, and transform the training data.",
            "Fit the scaler on the entire dataset before splitting.",
            "Split the data first. Fit the scaler ONLY on the Training data. Use that fitted scaler to simply transform the Test data.",
            "Use Bootstrap Sampling."
        ],
        correct: "Split the data first. Fit the scaler ONLY on the Training data. Use that fitted scaler to simply transform the Test data."
    },
    {
        topic: "ai",
        quest: "You are given a dataset of the 'top 100 hit songs of the 1980s' and told to analyze why '80s music was objectively better than modern music'. Why is your analysis doomed from the start?",
        hasContent: false,
        choices: [
            "Audio data cannot be analyzed by machine learning.",
            "It suffers from massive Survivorship Bias; you are only looking at the 100 massive successes that survived the test of time, ignoring the tens of thousands of terrible songs released in the same decade.",
            "It suffers from Target Leakage.",
            "It violates the Central Limit Theorem."
        ],
        correct: "It suffers from massive Survivorship Bias; you are only looking at the 100 massive successes that survived the test of time, ignoring the tens of thousands of terrible songs released in the same decade."
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
        console.log(`Successfully inserted ${result.insertedCount} questions for '3.3 Sampling'`);
        
        // Delete the processed file
        const targetFile = path.join(__dirname, '..', 'materials', '3.3 Sampling, Bias, and Data Generation.3 Sampling, Bias, and Data Generation.3 Sampling, Bias, and Data Generation.md');
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
