require('dotenv').config();
const { MongoClient } = require('mongodb');
const fs = require('fs');
const path = require('path');

const questions = [
    {
        topic: "ai",
        quest: "While a t-test is used to compare the means of continuous data, what type of data is a Chi-Square test specifically designed for?",
        hasContent: false,
        choices: [
            "Time-series data",
            "Categorical data (frequencies or counts of categories)",
            "Text data",
            "Image data"
        ],
        correct: "Categorical data (frequencies or counts of categories)"
    },
    {
        topic: "ai",
        quest: "You roll a die 600 times to see if it is fair. You use a Chi-Square Goodness-of-Fit test. What is the formula for the Chi-Square statistic?",
        hasContent: true,
        contentType: "math",
        content: "\\chi^2 = ?",
        choices: [
            "\\sum \\frac{\\text{Observed}}{\\text{Expected}}",
            "\\sum \\frac{(\\text{Observed} - \\text{Expected})^2}{\\text{Expected}}",
            "\\sum (\\text{Observed} - \\text{Expected})^2",
            "\\frac{\\text{Observed}^2}{\\text{Expected}^2}"
        ],
        correct: "\\sum \\frac{(\\text{Observed} - \\text{Expected})^2}{\\text{Expected}}"
    },
    {
        topic: "ai",
        quest: "You want to know if the marketing channel (Email, Social, Search) a user clicked determines which product tier (Basic, Pro, Enterprise) they ultimately buy. What statistical test answers this question?",
        hasContent: false,
        choices: [
            "Two-Sample t-test",
            "Chi-Square Test of Independence",
            "Chi-Square Goodness-of-Fit Test",
            "Paired t-test"
        ],
        correct: "Chi-Square Test of Independence"
    },
    {
        topic: "ai",
        quest: "In a Chi-Square Test of Independence, how is the 'Expected Count' for a specific cell in the contingency table calculated, assuming the variables are completely independent?",
        hasContent: true,
        contentType: "math",
        content: "\\text{Expected Count} = ?",
        choices: [
            "\\frac{\\text{Row Total} \\times \\text{Column Total}}{\\text{Grand Total}}",
            "\\frac{\\text{Row Total} + \\text{Column Total}}{2}",
            "\\text{Grand Total} - \\text{Row Total}",
            "\\sqrt{\\text{Row Total} \\times \\text{Column Total}}"
        ],
        correct: "\\frac{\\text{Row Total} \\times \\text{Column Total}}{\\text{Grand Total}}"
    },
    {
        topic: "ai",
        quest: "After running a Chi-Square Test of Independence, you find a highly significant p-value. How can you determine WHICH specific combinations of categories drove this result?",
        hasContent: false,
        choices: [
            "By looking at the Grand Total.",
            "By calculating the Standardized Residuals for each cell; absolute values > 2 indicate notable deviations from independence.",
            "By dividing the p-value by the Degrees of Freedom.",
            "By running a t-test on every individual cell."
        ],
        correct: "By calculating the Standardized Residuals for each cell; absolute values > 2 indicate notable deviations from independence."
    },
    {
        topic: "ai",
        quest: "What is a common 'rule of thumb' assumption regarding the Expected Counts for a Chi-Square test to be considered mathematically reliable?",
        hasContent: false,
        choices: [
            "All expected counts should be exactly equal.",
            "All expected counts should be at least 5; otherwise, categories might need to be combined.",
            "All expected counts must be integers.",
            "The total expected count must exceed 10,000."
        ],
        correct: "All expected counts should be at least 5; otherwise, categories might need to be combined."
    },
    {
        topic: "ai",
        quest: "Cohen's d measures the effect size for continuous differences. What metric is used to measure the Effect Size (strength of association) for categorical data in a contingency table?",
        hasContent: false,
        choices: [
            "Pearson's r",
            "Cramér's V (ranges from 0 to 1)",
            "Standard Error",
            "The p-value"
        ],
        correct: "Cramér's V (ranges from 0 to 1)"
    },
    {
        topic: "ai",
        quest: "You run a Chi-Square test on a massive dataset ($N = 50,000$) and get a statistically significant p-value, but Cramér's V is 0.004. What does this indicate?",
        hasContent: false,
        choices: [
            "The result is a false positive.",
            "There is a statistically detectable association, but its magnitude is so incredibly small that it is practically meaningless in the real world.",
            "The calculation of Cramér's V is broken for large datasets.",
            "The association is massive and highly actionable."
        ],
        correct: "There is a statistically detectable association, but its magnitude is so incredibly small that it is practically meaningless in the real world."
    },
    {
        topic: "ai",
        quest: "What is the primary purpose of 'Power Analysis' in statistical design?",
        hasContent: false,
        choices: [
            "To prove the null hypothesis is true.",
            "To proactively determine the Required Sample Size needed to reliably detect an effect of a given magnitude before data collection even begins.",
            "To calculate the final p-value after an experiment.",
            "To increase the processing speed of the statistical algorithm."
        ],
        correct: "To proactively determine the Required Sample Size needed to reliably detect an effect of a given magnitude before data collection even begins."
    },
    {
        topic: "ai",
        quest: "Statistical Power is defined mathematically as $1 - \\beta$. What does $\\beta$ represent here?",
        hasContent: false,
        choices: [
            "The Probability of a Type I Error (False Positive).",
            "The Probability of a Type II Error (False Negative; failing to detect a real effect).",
            "The Significance Level.",
            "The Effect Size."
        ],
        correct: "The Probability of a Type II Error (False Negative; failing to detect a real effect)."
    },
    {
        topic: "ai",
        quest: "In Power Analysis, four variables are perfectly linked. If you fix any three, you can solve for the fourth. Which of the following is NOT one of those four variables?",
        hasContent: false,
        choices: [
            "Sample Size",
            "Effect Size",
            "Statistical Power",
            "Standard Deviation of the Null Hypothesis"
        ],
        correct: "Standard Deviation of the Null Hypothesis"
    },
    {
        topic: "ai",
        quest: "According to power curves, how does the required Sample Size behave as the expected Effect Size gets smaller?",
        hasContent: false,
        choices: [
            "The required sample size decreases linearly.",
            "The required sample size dramatically INCREASES; detecting small effects requires vastly more data.",
            "The required sample size stays the same.",
            "The required sample size becomes negative."
        ],
        correct: "The required sample size dramatically INCREASES; detecting small effects requires vastly more data."
    },
    {
        topic: "ai",
        quest: "Your manager says: 'We only have budget to test 200 users per group.' You run a Power Analysis to find the 'Minimum Detectable Effect' (MDE). What does the MDE tell you?",
        hasContent: false,
        choices: [
            "The exact difference between the two groups.",
            "The smallest actual effect size you have a reasonable chance (e.g., 80% power) of statistically detecting given your strictly limited sample size.",
            "The maximum false positive rate you will accept.",
            "The p-value of the test."
        ],
        correct: "The smallest actual effect size you have a reasonable chance (e.g., 80% power) of statistically detecting given your strictly limited sample size."
    },
    {
        topic: "ai",
        quest: "In an A/B test comparing the Conversion Rates of two different checkout designs, which specific hypothesis test is most commonly used to determine if the rates differ?",
        hasContent: false,
        choices: [
            "Paired t-test",
            "Two-Proportion Z-test (or a 2x2 Chi-Square test)",
            "One-Sample t-test",
            "Mann-Whitney U test"
        ],
        correct: "Two-Proportion Z-test (or a 2x2 Chi-Square test)"
    },
    {
        topic: "ai",
        quest: "Why is it mathematically dangerous to constantly 'peek' at your A/B test results every day and immediately stop the test the moment the p-value drops below 0.05?",
        hasContent: false,
        choices: [
            "It is not dangerous; it is an efficient way to save time.",
            "It massively inflates your False Positive rate (Type I error); random fluctuations will eventually trigger a 'significant' result purely by chance if you continuously check it.",
            "It artificially decreases the sample size.",
            "It guarantees a False Negative."
        ],
        correct: "It massively inflates your False Positive rate (Type I error); random fluctuations will eventually trigger a 'significant' result purely by chance if you continuously check it."
    },
    {
        topic: "ai",
        quest: "When designing an A/B test, why do data scientists often insist the test runs for at least one or two full weeks, even if the Power Analysis sample size requirement is met in just two days?",
        hasContent: false,
        choices: [
            "To artificially lower the p-value.",
            "To capture full 'Day-of-Week' effects (e.g., weekend users vs weekday users behave differently) and allow 'Novelty Effects' to wear off.",
            "To increase the False Positive rate.",
            "Because statistical models require 14 days of data to initialize."
        ],
        correct: "To capture full 'Day-of-Week' effects (e.g., weekend users vs weekday users behave differently) and allow 'Novelty Effects' to wear off."
    },
    {
        topic: "ai",
        quest: "You are testing whether a six-sided die is fair. Your Chi-Square degrees of freedom (DOF) is calculated as `categories - 1`. What is the DOF for this test?",
        hasContent: false,
        choices: [
            "6",
            "5",
            "1",
            "0"
        ],
        correct: "5"
    },
    {
        topic: "ai",
        quest: "What is a 'Novelty Effect' in the context of an A/B test for a new UI feature?",
        hasContent: false,
        choices: [
            "When the new feature completely breaks the website.",
            "When users temporarily interact with the feature at a high rate simply because it is new and different, but their interaction drops off once they get used to it.",
            "When older users ignore the feature completely.",
            "When the control group outperforms the treatment group."
        ],
        correct: "When users temporarily interact with the feature at a high rate simply because it is new and different, but their interaction drops off once they get used to it."
    },
    {
        topic: "ai",
        quest: "You write a Python script using `statsmodels.stats.power.TTestIndPower()`. You provide `effect_size=0.5`, `alpha=0.05`, and `power=0.8`. The `.solve_power()` method returns `n=64`. What does 64 represent?",
        hasContent: true,
        contentType: "code",
        codeLanguage: "python",
        content: "n = analysis.solve_power(effect_size=0.5, alpha=0.05, power=0.8)",
        choices: [
            "The total number of users needed for the entire experiment.",
            "The required sample size PER GROUP (so you actually need 128 total users).",
            "The probability of the null hypothesis.",
            "The Minimum Detectable Effect."
        ],
        correct: "The required sample size PER GROUP (so you actually need 128 total users)."
    },
    {
        topic: "ai",
        quest: "If you have a 2x3 contingency table (e.g., 2 genders, 3 product categories). What is the Degrees of Freedom for the Chi-Square Test of Independence?",
        hasContent: true,
        contentType: "math",
        content: "\\text{DOF} = (\\text{Rows} - 1) \\times (\\text{Cols} - 1)",
        choices: [
            "6",
            "5",
            "2",
            "1"
        ],
        correct: "2"
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
        console.log(`Successfully inserted ${result.insertedCount} questions for '3.6 Chi-Square'`);
        
        // Delete the processed file
        const targetFile = path.join(__dirname, '..', 'materials', '3.6 Chi-Square Tests and Power AnalysisUnit 3 – Sta.._.md');
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
