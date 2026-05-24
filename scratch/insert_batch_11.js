require('dotenv').config();
const { MongoClient } = require('mongodb');
const fs = require('fs');
const path = require('path');

const questions = [
    {
        topic: "ai",
        quest: "A data analyst reports that the average session length is 14 minutes, but provides no range or margin of error. In statistical terms, what is '14 minutes' known as?",
        hasContent: false,
        choices: [
            "An Interval Estimate",
            "A Point Estimate; a single number used to estimate a population parameter without capturing the uncertainty.",
            "A Standard Error",
            "A Bootstrap Statistic"
        ],
        correct: "A Point Estimate; a single number used to estimate a population parameter without capturing the uncertainty."
    },
    {
        topic: "ai",
        quest: "What does the 'Standard Error' of the mean specifically measure?",
        hasContent: false,
        choices: [
            "The average distance of individual data points from the sample mean.",
            "The typical amount by which a sample mean misses the true population mean (the standard deviation of the sampling distribution).",
            "The percentage of data that is missing or corrupt.",
            "The probability that a hypothesis is false."
        ],
        correct: "The typical amount by which a sample mean misses the true population mean (the standard deviation of the sampling distribution)."
    },
    {
        topic: "ai",
        quest: "Based on the formula for Standard Error, if you want to cut your margin of error strictly in half, how much more data must you collect?",
        hasContent: true,
        contentType: "math",
        content: "\\text{SE} = \\frac{s}{\\sqrt{n}}",
        choices: [
            "You need exactly double the amount of data.",
            "You need to collect 4 times as much data (quadruple the sample size), due to the square root relationship.",
            "You need 10 times as much data.",
            "It is impossible to cut the margin of error in half."
        ],
        correct: "You need to collect 4 times as much data (quadruple the sample size), due to the square root relationship."
    },
    {
        topic: "ai",
        quest: "You are asked to compute a Confidence Interval for the MEDIAN user income, but no simple formula exists for the Standard Error of a median. What computational technique perfectly solves this problem?",
        hasContent: false,
        choices: [
            "Z-Score Standardization",
            "Bootstrap Resampling; generating thousands of simulated samples with replacement from the original sample to build an empirical distribution.",
            "Linear Regression",
            "Stratified Sampling"
        ],
        correct: "Bootstrap Resampling; generating thousands of simulated samples with replacement from the original sample to build an empirical distribution."
    },
    {
        topic: "ai",
        quest: "A 95% Confidence Interval for the average customer age is [28.2, 31.5]. Which of the following is the strictly correct interpretation of this interval?",
        hasContent: false,
        choices: [
            "There is a 95% probability that the true population average age is between 28.2 and 31.5.",
            "95% of all customers in the population are between 28.2 and 31.5 years old.",
            "If we were to repeat this sampling process thousands of times, approximately 95% of the calculated intervals would contain the true, fixed population average age.",
            "The true mean is 95% larger than the sample mean."
        ],
        correct: "If we were to repeat this sampling process thousands of times, approximately 95% of the calculated intervals would contain the true, fixed population average age."
    },
    {
        topic: "ai",
        quest: "Why is the statement 'There is a 95% probability that the true mean lies within this specific interval' considered technically false by frequentist statisticians?",
        hasContent: false,
        choices: [
            "Because the true mean is constantly shifting over time.",
            "Because the true mean is a fixed parameter, not a random variable. It either is in the interval (100% probability) or it is not (0% probability).",
            "Because 95% is not high enough for certainty.",
            "Because it ignores the Z-score."
        ],
        correct: "Because the true mean is a fixed parameter, not a random variable. It either is in the interval (100% probability) or it is not (0% probability)."
    },
    {
        topic: "ai",
        quest: "A developer complains that the 99% Confidence Interval is much wider than the 90% Confidence Interval, making it 'less precise'. What is the fundamental trade-off here?",
        hasContent: false,
        choices: [
            "The developer calculated it incorrectly; a 99% CI should be narrower.",
            "Higher confidence naturally requires a wider interval. You trade precision (narrowness) for certainty that the interval captures the true parameter.",
            "The 99% CI uses a smaller sample size under the hood.",
            "The 99% CI introduces selection bias."
        ],
        correct: "Higher confidence naturally requires a wider interval. You trade precision (narrowness) for certainty that the interval captures the true parameter."
    },
    {
        topic: "ai",
        quest: "When calculating a confidence interval for a very small sample (e.g., $N=15$), why should you use the t-distribution instead of the normal (Z) distribution?",
        hasContent: false,
        choices: [
            "The t-distribution has lighter tails, creating a narrower interval.",
            "The t-distribution has heavier tails, which produces a wider, more conservative interval that properly accounts for the extra uncertainty in small samples.",
            "The normal distribution cannot handle decimals.",
            "The t-distribution forces the mean to be exactly zero."
        ],
        correct: "The t-distribution has heavier tails, which produces a wider, more conservative interval that properly accounts for the extra uncertainty in small samples."
    },
    {
        topic: "ai",
        quest: "You are visualizing A/B test results using a Forest Plot. The 95% Confidence Interval for Group A is [10.2, 14.5] and for Group B is [14.8, 19.1]. What visual heuristic tells you instantly that Group B is statistically different from Group A?",
        hasContent: false,
        choices: [
            "Group B's mean is higher than Group A's mean.",
            "The Confidence Intervals do not overlap; this strongly suggests the difference between the groups is statistically significant.",
            "The intervals are perfectly symmetrical.",
            "Group A has a smaller margin of error."
        ],
        correct: "The Confidence Intervals do not overlap; this strongly suggests the difference between the groups is statistically significant."
    },
    {
        topic: "ai",
        quest: "You are estimating the CTR (Click-Through Rate) of a button, which is a proportion. What is the standard error formula for a proportion $\\hat{p}$?",
        hasContent: true,
        contentType: "math",
        content: "\\text{SE}_p = ?",
        choices: [
            "\\sqrt{\\frac{\\hat{p} \\times (1 - \\hat{p})}{n}}",
            "\\frac{\\sigma}{\\sqrt{n}}",
            "\\hat{p} \\times n",
            "\\frac{\\hat{p}}{n}"
        ],
        correct: "\\sqrt{\\frac{\\hat{p} \\times (1 - \\hat{p})}{n}}"
    },
    {
        topic: "ai",
        quest: "A marketing team sees that a campaign's ROI Confidence Interval is [$0.01, $0.05]. They claim the campaign is an absolute massive success because 'it excludes zero, meaning it is statistically significant'. What is the error in their reasoning?",
        hasContent: false,
        choices: [
            "An interval excluding zero means it is NOT statistically significant.",
            "They are conflating 'statistical significance' (it is confidently greater than 0) with 'practical importance' (a $0.01 return might not be worth the effort).",
            "They should have used a 99% CI.",
            "They used the wrong distribution."
        ],
        correct: "They are conflating 'statistical significance' (it is confidently greater than 0) with 'practical importance' (a $0.01 return might not be worth the effort)."
    },
    {
        topic: "ai",
        quest: "In the formula for calculating required sample size: $n = \\left(\\frac{z^* \\times s}{\\text{ME}}\\right)^2$, what does 'ME' represent?",
        hasContent: false,
        choices: [
            "Mean Error",
            "Margin of Error (the desired precision of the estimate, e.g., ±$5)",
            "Maximum Estimate",
            "Minimum Entropy"
        ],
        correct: "Margin of Error (the desired precision of the estimate, e.g., ±$5)"
    },
    {
        topic: "ai",
        quest: "If you have an extremely small proportion (e.g., a conversion rate of 0.001%) and a small sample size, the standard normal approximation for the CI can fail. What alternative interval calculation should you use in Python (`statsmodels`)?",
        hasContent: true,
        contentType: "code",
        codeLanguage: "python",
        content: "proportion_confint(count, nobs, method='...')",
        choices: [
            "The Pearson Interval",
            "The Wilson Score Interval (or exact binomial interval), which is more robust for extreme proportions.",
            "The T-test Interval",
            "The Z-Score Interval"
        ],
        correct: "The Wilson Score Interval (or exact binomial interval), which is more robust for extreme proportions."
    },
    {
        topic: "ai",
        quest: "If you compute the Standard Deviation of a Bootstrap sampling distribution of means, what theoretical value does this closely approximate?",
        hasContent: false,
        choices: [
            "The Population Mean",
            "The Range of the data",
            "The Standard Error of the mean",
            "The Z-score"
        ],
        correct: "The Standard Error of the mean"
    },
    {
        topic: "ai",
        quest: "Why do we use `replace=True` when generating Bootstrap samples?",
        hasContent: true,
        contentType: "code",
        codeLanguage: "python",
        content: "boot_sample = np.random.choice(original_sample, size=len(original_sample), replace=True)",
        choices: [
            "To ensure the array size shrinks dynamically.",
            "To prevent duplicate values from occurring.",
            "Because sampling with replacement simulates drawing fresh samples from a larger theoretical population that resembles the original sample.",
            "To avoid memory leaks in Python."
        ],
        correct: "Because sampling with replacement simulates drawing fresh samples from a larger theoretical population that resembles the original sample."
    },
    {
        topic: "ai",
        quest: "When calculating a 95% Z-based confidence interval, what is the approximate Z-score (critical value) used?",
        hasContent: false,
        choices: [
            "1.00",
            "1.96 (or roughly 2)",
            "2.58",
            "3.14"
        ],
        correct: "1.96 (or roughly 2)"
    },
    {
        topic: "ai",
        quest: "A manager says: 'Our 95% Confidence Interval for user age is [20, 30], which means 95% of our users are between 20 and 30 years old.' Is this correct?",
        hasContent: false,
        choices: [
            "Yes, that is the exact definition of a Confidence Interval.",
            "No, the CI is an estimate for the POPULATION MEAN, not a range containing 95% of individual data points. Individual ages could span from 13 to 80.",
            "No, it means 95% of the sample is between 20 and 30.",
            "Yes, but only if the data is perfectly normally distributed."
        ],
        correct: "No, the CI is an estimate for the POPULATION MEAN, not a range containing 95% of individual data points. Individual ages could span from 13 to 80."
    },
    {
        topic: "ai",
        quest: "Which library and function provides the simplest way to calculate the standard error of the mean (SEM) in Python?",
        hasContent: false,
        choices: [
            "`numpy.se()`",
            "`scipy.stats.sem(data)`",
            "`pandas.std()`",
            "`math.standard_error()`"
        ],
        correct: "`scipy.stats.sem(data)`"
    },
    {
        topic: "ai",
        quest: "You are analyzing server ping latency. You take a sample of $n=1000$ and find the mean is 45ms. If you increase the sample size to $n=1000000$, what happens to the point estimate and standard error?",
        hasContent: false,
        choices: [
            "The point estimate approaches 0, and standard error approaches infinity.",
            "The point estimate converges closer to the true population mean, and the standard error shrinks dramatically towards zero.",
            "Both the point estimate and standard error increase.",
            "The point estimate changes completely, and standard error remains constant."
        ],
        correct: "The point estimate converges closer to the true population mean, and the standard error shrinks dramatically towards zero."
    },
    {
        topic: "ai",
        quest: "When visualizing group means using a bar chart with Error Bars, what do the 'whiskers' (error bars) typically represent?",
        hasContent: false,
        choices: [
            "The absolute minimum and maximum data points.",
            "The 1st and 3rd quartiles.",
            "The Confidence Intervals (e.g., 95% CI) or the Standard Error boundaries, showing the uncertainty around the point estimate.",
            "The Z-scores of the outliers."
        ],
        correct: "The Confidence Intervals (e.g., 95% CI) or the Standard Error boundaries, showing the uncertainty around the point estimate."
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
        console.log(`Successfully inserted ${result.insertedCount} questions for '3.4 Estimation'`);
        
        // Delete the processed file
        const targetFile = path.join(__dirname, '..', 'materials', '3.4 Estimation and Confidence Intervals.md');
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
