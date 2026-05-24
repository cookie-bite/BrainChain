require('dotenv').config();
const { MongoClient } = require('mongodb');
const fs = require('fs');
const path = require('path');

const questions = [
    {
        topic: "ai",
        quest: "A data scientist models the precise time (in milliseconds) a user spends on a webpage. What kind of random variable is this, and what function must be used to describe its probability distribution?",
        hasContent: false,
        choices: [
            "Discrete Random Variable; Probability Mass Function (PMF).",
            "Continuous Random Variable; Probability Density Function (PDF).",
            "Discrete Random Variable; Cumulative Distribution Function (CDF).",
            "Continuous Random Variable; Probability Mass Function (PMF)."
        ],
        correct: "Continuous Random Variable; Probability Density Function (PDF)."
    },
    {
        topic: "ai",
        quest: "You are looking at a Probability Density Function (PDF) curve for a normal distribution. What does the Y-axis represent?",
        hasContent: false,
        choices: [
            "The exact probability of the specific value on the X-axis occurring.",
            "The cumulative probability of all values up to X.",
            "Density; the exact probability of any single continuous value is technically zero, so probability is calculated as the area under the curve between two points.",
            "The variance of the distribution."
        ],
        correct: "Density; the exact probability of any single continuous value is technically zero, so probability is calculated as the area under the curve between two points."
    },
    {
        topic: "ai",
        quest: "You want to quickly determine 'what fraction of our users made 5 or fewer purchases last year'. Which probability function directly answers this question?",
        hasContent: false,
        choices: [
            "Probability Mass Function (PMF)",
            "Probability Density Function (PDF)",
            "Cumulative Distribution Function (CDF)",
            "Excess Kurtosis Function"
        ],
        correct: "Cumulative Distribution Function (CDF)"
    },
    {
        topic: "ai",
        quest: "A fair die has an expected value (first moment) of 3.5. What does 'expected value' mean in this probabilistic context?",
        hasContent: false,
        choices: [
            "It is the most likely single outcome of any individual die roll.",
            "It is the value you will get if you roll the die exactly twice.",
            "It is the theoretical long-run average; as the number of rolls approaches infinity, the average of all outcomes will converge exactly to 3.5.",
            "It means 3 and 4 have higher probabilities than 1 or 6."
        ],
        correct: "It is the theoretical long-run average; as the number of rolls approaches infinity, the average of all outcomes will converge exactly to 3.5."
    },
    {
        topic: "ai",
        quest: "In probability theory, which statistical moment specifically measures how 'heavy' or 'fat' the tails of a distribution are compared to a normal distribution?",
        hasContent: true,
        contentType: "math",
        content: "\\kappa = \\frac{E[(X - \\mu)^4]}{\\sigma^4}",
        choices: [
            "1st Moment (Mean)",
            "2nd Moment (Variance)",
            "3rd Moment (Skewness)",
            "4th Moment (Kurtosis)"
        ],
        correct: "4th Moment (Kurtosis)"
    },
    {
        topic: "ai",
        quest: "A disease affects 1 in 10,000 people. You take a test with a 99% accuracy rate (1% false positive rate) and test positive. Despite the highly accurate test, the probability you actually have the disease is less than 1%. Why does Bayes' Rule produce this counterintuitive result?",
        hasContent: false,
        choices: [
            "Because the sensitivity of the test is too low.",
            "Because of the Base Rate Fallacy; the disease is so extremely rare (the prior) that the false positives from the 9,999 healthy people completely overwhelm the true positives.",
            "Because the test has negative skewness.",
            "Because the events are perfectly independent."
        ],
        correct: "Because of the Base Rate Fallacy; the disease is so extremely rare (the prior) that the false positives from the 9,999 healthy people completely overwhelm the true positives."
    },
    {
        topic: "ai",
        quest: "In the Bayes' Rule equation, what does the term $P(B | A)$ specifically represent?",
        hasContent: true,
        contentType: "math",
        content: "P(A \\mid B) = \\frac{P(B \\mid A) \\cdot P(A)}{P(B)}",
        choices: [
            "The Prior (belief before evidence)",
            "The Posterior (updated belief)",
            "The Likelihood (how probable the evidence B is, assuming hypothesis A is true)",
            "The Marginal Evidence"
        ],
        correct: "The Likelihood (how probable the evidence B is, assuming hypothesis A is true)"
    },
    {
        topic: "ai",
        quest: "You are designing an email marketing campaign. Historically, emails have a 5% open rate. If you send 1,000 emails and want to find the probability of getting exactly 60 opens, which distribution perfectly models this scenario?",
        hasContent: false,
        choices: [
            "Bernoulli Distribution",
            "Binomial Distribution (modeling the count of successes in $n$ independent trials).",
            "Poisson Distribution",
            "Normal Distribution"
        ],
        correct: "Binomial Distribution (modeling the count of successes in $n$ independent trials)."
    },
    {
        topic: "ai",
        quest: "A web server receives an average of 15 requests per minute. To model the probability of receiving exactly 25 requests in the next minute, which distribution should you use?",
        hasContent: false,
        choices: [
            "Bernoulli Distribution",
            "Binomial Distribution",
            "Poisson Distribution (modeling the count of independent events occurring in a fixed interval of time).",
            "Student-t Distribution"
        ],
        correct: "Poisson Distribution (modeling the count of independent events occurring in a fixed interval of time)."
    },
    {
        topic: "ai",
        quest: "A data engineer notices that for a certain metric, the Variance is vastly larger than the Mean. Why is this a strong diagnostic signal that a Poisson Distribution is a poor fit for this data?",
        hasContent: true,
        contentType: "math",
        content: "E[X] = \\lambda \\qquad \\text{Var}(X) = \\lambda",
        choices: [
            "Because Poisson distributions only apply to continuous data.",
            "Because a fundamental property of the Poisson distribution is that its Mean and Variance must be exactly equal (both equal to $\\lambda$).",
            "Because Poisson distributions must have a Variance of exactly zero.",
            "Because it indicates the data is negatively skewed."
        ],
        correct: "Because a fundamental property of the Poisson distribution is that its Mean and Variance must be exactly equal (both equal to $\\lambda$)."
    },
    {
        topic: "ai",
        quest: "Events A and B are mathematically independent. Which of the following statements must be absolutely true?",
        hasContent: false,
        choices: [
            "P(A) + P(B) = 1",
            "P(A | B) = P(B)",
            "P(A ∩ B) = P(A) * P(B) ; knowing that B occurred does not change the probability of A occurring.",
            "P(A ∩ B) = 0"
        ],
        correct: "P(A ∩ B) = P(A) * P(B) ; knowing that B occurred does not change the probability of A occurring."
    },
    {
        topic: "ai",
        quest: "Instead of solving a complex probability problem analytically, a data scientist writes a Python script to simulate the random process 100,000 times and computes the relative frequency of the target outcome. What is this technique called?",
        hasContent: true,
        contentType: "code",
        codeLanguage: "python",
        content: "rolls = np.random.randint(1, 7, size=(100000, 4))\nat_least_one_six = np.any(rolls == 6, axis=1)\nprint(at_least_one_six.mean())",
        choices: [
            "Bayesian Updating",
            "Reservoir Sampling",
            "Monte Carlo Simulation",
            "Kernel Density Estimation"
        ],
        correct: "Monte Carlo Simulation"
    },
    {
        topic: "ai",
        quest: "In the famous 'Birthday Problem', how many people need to be in a room for there to be a roughly 50% probability that at least two people share the exact same birthday?",
        hasContent: false,
        choices: [
            "183 people",
            "365 people",
            "23 people",
            "50 people"
        ],
        correct: "23 people"
    },
    {
        topic: "ai",
        quest: "A machine learning model predicts $P(\\text{fraud}) = 0.65$ for a transaction. If the bank adjusts its threshold to block transactions from $0.70$ down to $0.50$, what is the guaranteed statistical trade-off?",
        hasContent: false,
        choices: [
            "Recall will decrease, and Precision will increase.",
            "Both Recall and Precision will increase simultaneously.",
            "Recall (catching more actual fraud) will increase, but Precision (percentage of blocked transactions that are actually fraud) will decrease due to more false positives.",
            "The Base Rate of fraud will physically change."
        ],
        correct: "Recall (catching more actual fraud) will increase, but Precision (percentage of blocked transactions that are actually fraud) will decrease due to more false positives."
    },
    {
        topic: "ai",
        quest: "An executive is evaluating a product launch. There is a 30% chance it yields $1,000,000, and a 70% chance it loses $200,000. What is the Expected Value of this launch?",
        hasContent: false,
        choices: [
            "$800,000",
            "$300,000",
            "$160,000; calculated as (0.30 * 1,000,000) + (0.70 * -200,000).",
            "-$140,000"
        ],
        correct: "$160,000; calculated as (0.30 * 1,000,000) + (0.70 * -200,000)."
    },
    {
        topic: "ai",
        quest: "According to the empirical rule (68-95-99.7) for Normal Distributions, what is the probability that a randomly drawn observation falls MORE than 3 standard deviations away from the mean?",
        hasContent: false,
        choices: [
            "Roughly 5%",
            "Roughly 0.3% (since 99.7% of data falls within 3 standard deviations).",
            "Exactly 0%",
            "Roughly 32%"
        ],
        correct: "Roughly 0.3% (since 99.7% of data falls within 3 standard deviations)."
    },
    {
        topic: "ai",
        quest: "The Central Limit Theorem is the deepest reason why one specific distribution appears constantly in data science. Which distribution is it?",
        hasContent: false,
        choices: [
            "The Normal (Gaussian) Distribution",
            "The Poisson Distribution",
            "The Binomial Distribution",
            "The Bernoulli Distribution"
        ],
        correct: "The Normal (Gaussian) Distribution"
    },
    {
        topic: "ai",
        quest: "Which probability distribution models a single 'Yes/No' (1/0) trial, such as an individual coin flip or a single user clicking an ad?",
        hasContent: false,
        choices: [
            "Poisson Distribution",
            "Normal Distribution",
            "Bernoulli Distribution",
            "Student-t Distribution"
        ],
        correct: "Bernoulli Distribution"
    },
    {
        topic: "ai",
        quest: "If you standardize a normal random variable by calculating its Z-score (subtracting the mean and dividing by the standard deviation), what are the properties of the resulting Standard Normal Distribution?",
        hasContent: true,
        contentType: "math",
        content: "z = \\frac{x - \\mu}{\\sigma}",
        choices: [
            "Mean = 1, Standard Deviation = 1",
            "Mean = 0, Standard Deviation = 1",
            "Mean = 0, Standard Deviation = 0",
            "Mean = 1, Standard Deviation = 0"
        ],
        correct: "Mean = 0, Standard Deviation = 1"
    },
    {
        topic: "ai",
        quest: "In a Bayesian spam filter, the algorithm knows the probability of seeing the word 'viagra' given that an email is already known to be spam. In Bayes' theorem terminology, what is this specific probability called?",
        hasContent: true,
        contentType: "math",
        content: "P(\\text{'viagra'} \\mid \\text{spam})",
        choices: [
            "The Posterior",
            "The Prior",
            "The Marginal Evidence",
            "The Likelihood"
        ],
        correct: "The Likelihood"
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
        console.log(`Successfully inserted ${result.insertedCount} questions for '3.2 Probability'`);
        
        // Delete the processed file
        const targetFile = path.join(__dirname, '..', 'materials', '3.2 Probability for Data Science.md');
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
