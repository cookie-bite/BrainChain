require('dotenv').config();
const { MongoClient } = require('mongodb');
const fs = require('fs');
const path = require('path');

const questions = [
    {
        topic: "ai",
        quest: "What is the fundamental logic behind ANOVA (Analysis of Variance) when comparing the means of multiple groups?",
        hasContent: false,
        choices: [
            "It checks if the standard deviations of all groups are perfectly zero.",
            "It compares the variance BETWEEN the group means to the variance WITHIN the individual groups (the individual noise). If the between-group variance is relatively large, the groups are genuinely different.",
            "It calculates the median of each group and multiplies them together.",
            "It runs a sequence of thousands of t-tests."
        ],
        correct: "It compares the variance BETWEEN the group means to the variance WITHIN the individual groups (the individual noise). If the between-group variance is relatively large, the groups are genuinely different."
    },
    {
        topic: "ai",
        quest: "What test statistic does a One-Way ANOVA compute?",
        hasContent: false,
        choices: [
            "The t-statistic",
            "The F-statistic (ratio of Mean Square Between to Mean Square Within)",
            "The Chi-Square statistic",
            "The Z-score"
        ],
        correct: "The F-statistic (ratio of Mean Square Between to Mean Square Within)"
    },
    {
        topic: "ai",
        quest: "If the null hypothesis of an ANOVA is entirely true (all groups are fundamentally identical), what approximate value should the F-statistic be close to?",
        hasContent: false,
        choices: [
            "Infinity",
            "1; because the Between-Group variance is just random sampling noise, it should be similar in magnitude to the Within-Group variance.",
            "0",
            "-1"
        ],
        correct: "1; because the Between-Group variance is just random sampling noise, it should be similar in magnitude to the Within-Group variance."
    },
    {
        topic: "ai",
        quest: "A data scientist runs an ANOVA on 5 different marketing campaigns and gets a p-value of 0.01. What exact conclusion can they draw?",
        hasContent: false,
        choices: [
            "Campaign 1 is the best.",
            "At least one of the 5 campaigns is statistically different from the others. (However, ANOVA does NOT tell you WHICH specific campaigns differ).",
            "All 5 campaigns are completely different from each other.",
            "All 5 campaigns are identical."
        ],
        correct: "At least one of the 5 campaigns is statistically different from the others. (However, ANOVA does NOT tell you WHICH specific campaigns differ)."
    },
    {
        topic: "ai",
        quest: "To determine WHICH specific groups differ after a significant ANOVA result, you must perform Post-Hoc tests. What is the most widely preferred and standard Post-Hoc test?",
        hasContent: false,
        choices: [
            "Tukey's HSD (Honestly Significant Difference)",
            "Spearman's Rank",
            "The Shapiro-Wilk test",
            "Pearson Correlation"
        ],
        correct: "Tukey's HSD (Honestly Significant Difference)"
    },
    {
        topic: "ai",
        quest: "Why can't you just run multiple standard t-tests (A vs B, A vs C, B vs C) instead of using an ANOVA and specialized Post-Hoc tests?",
        hasContent: false,
        choices: [
            "Because t-tests cannot handle letters.",
            "Because of the Multiple Comparisons Problem: running many t-tests mathematically inflates your overall False Positive (Type I error) rate dramatically.",
            "Because t-tests use the F-distribution.",
            "Because t-tests require exactly equal sample sizes."
        ],
        correct: "Because of the Multiple Comparisons Problem: running many t-tests mathematically inflates your overall False Positive (Type I error) rate dramatically."
    },
    {
        topic: "ai",
        quest: "Which of the following is NOT a required assumption for a standard One-Way ANOVA?",
        hasContent: false,
        choices: [
            "Observations within and across groups are independent.",
            "The data within each group is approximately normally distributed.",
            "The variance within each group is roughly equal (Homogeneity of Variances).",
            "All groups must have a sample size of exactly 100."
        ],
        correct: "All groups must have a sample size of exactly 100."
    },
    {
        topic: "ai",
        quest: "Before running an ANOVA, a data scientist runs Levene's test and gets a p-value of 0.001. What does this indicate, and what should they do?",
        hasContent: false,
        choices: [
            "The data is not normal. They should use a t-test.",
            "The assumption of equal variances (homogeneity) is severely violated. They should use Welch's ANOVA instead of a standard ANOVA.",
            "The groups are identical. Stop testing.",
            "The samples are too small."
        ],
        correct: "The assumption of equal variances (homogeneity) is severely violated. They should use Welch's ANOVA instead of a standard ANOVA."
    },
    {
        topic: "ai",
        quest: "If you have 4 groups of users and want to use the Bonferroni Correction for your pairwise post-hoc t-tests, you must divide your overall significance level ($\\alpha=0.05$) by the number of comparisons. How many pairwise comparisons are there for 4 groups?",
        hasContent: true,
        contentType: "math",
        content: "\\frac{n(n-1)}{2} = ?",
        choices: [
            "4",
            "6",
            "8",
            "12"
        ],
        correct: "6"
    },
    {
        topic: "ai",
        quest: "Eta-Squared ($\\eta^2$) is the effect size metric for ANOVA. Conceptually, what does an $\\eta^2$ of 0.15 indicate?",
        hasContent: true,
        contentType: "math",
        content: "\\eta^2 = \\frac{SS_{\\text{between}}}{SS_{\\text{total}}}",
        choices: [
            "The p-value is 0.15.",
            "15% of the total variance in the dataset is explained by the group membership (e.g., the study method).",
            "The error rate is 15%.",
            "Group A is 15% better than Group B."
        ],
        correct: "15% of the total variance in the dataset is explained by the group membership (e.g., the study method)."
    },
    {
        topic: "ai",
        quest: "How does the ANOVA $\\eta^2$ (Eta-Squared) metric directly relate to Machine Learning?",
        hasContent: false,
        choices: [
            "It is the learning rate of a neural network.",
            "It is mathematically identical to the $R^2$ metric used to evaluate Regression models (proportion of variance explained).",
            "It calculates the number of trees in a Random Forest.",
            "It determines the dropout rate."
        ],
        correct: "It is mathematically identical to the $R^2$ metric used to evaluate Regression models (proportion of variance explained)."
    },
    {
        topic: "ai",
        quest: "You want to compare 3 different pricing tiers. However, your data is incredibly skewed (not normal) and your sample size is tiny. What Non-Parametric alternative to ANOVA should you use?",
        hasContent: false,
        choices: [
            "Welch's ANOVA",
            "Kruskal-Wallis Test (which ranks all observations instead of comparing raw means)",
            "Chi-Square Test",
            "Mann-Whitney U Test"
        ],
        correct: "Kruskal-Wallis Test (which ranks all observations instead of comparing raw means)"
    },
    {
        topic: "ai",
        quest: "For pairwise comparisons between TWO groups when data is highly non-normal, what Non-Parametric test is the equivalent of the independent t-test?",
        hasContent: false,
        choices: [
            "Tukey's HSD",
            "Mann-Whitney U Test",
            "One-Way ANOVA",
            "Levene's Test"
        ],
        correct: "Mann-Whitney U Test"
    },
    {
        topic: "ai",
        quest: "When computing ANOVA in Python using the `statsmodels` library, what does the formula notation `score ~ C(method)` specifically tell the algorithm?",
        hasContent: true,
        contentType: "code",
        codeLanguage: "python",
        content: "model = ols('score ~ C(method)', data=df).fit()",
        choices: [
            "To calculate the correlation.",
            "To treat the 'method' variable explicitly as a Categorical variable.",
            "To center the data at 0.",
            "To drop missing values."
        ],
        correct: "To treat the 'method' variable explicitly as a Categorical variable."
    },
    {
        topic: "ai",
        quest: "In Machine Learning, a Random Forest calculates 'Feature Importance'. How is this algorithmically similar to the logic of ANOVA?",
        hasContent: false,
        choices: [
            "It checks the p-value of each split.",
            "It measures how much each feature individually contributes to REDUCING the overall variance (impurity) of the target, exactly like Between-Group variance reduces unexplained variance.",
            "It runs Tukey's HSD on the trees.",
            "It computes the Z-score for each branch."
        ],
        correct: "It measures how much each feature individually contributes to REDUCING the overall variance (impurity) of the target, exactly like Between-Group variance reduces unexplained variance."
    },
    {
        topic: "ai",
        quest: "A researcher runs an ANOVA and gets a p-value of $0.00001$. They declare 'This is the most practically important discovery of the decade!' What statistical reality have they ignored?",
        hasContent: false,
        choices: [
            "They didn't apply a logarithmic transformation.",
            "Statistical significance (p-value) only measures whether an effect is real (non-zero noise). It does NOT measure Effect Size (magnitude). The actual difference might be trivially tiny.",
            "ANOVA cannot produce p-values smaller than 0.01.",
            "They should have used a correlation test."
        ],
        correct: "Statistical significance (p-value) only measures whether an effect is real (non-zero noise). It does NOT measure Effect Size (magnitude). The actual difference might be trivially tiny."
    },
    {
        topic: "ai",
        quest: "If $SS_{\\text{Total}} = 1000$ and $SS_{\\text{Within}} = 200$, what is $SS_{\\text{Between}}$?",
        hasContent: false,
        choices: [
            "1200",
            "800",
            "5",
            "Impossible to calculate without the degrees of freedom."
        ],
        correct: "800"
    },
    {
        topic: "ai",
        quest: "If you want to compare the means of exactly 2 groups, and the assumptions of normality and equal variance are met, should you use an Independent t-test or a One-Way ANOVA?",
        hasContent: false,
        choices: [
            "You MUST use a t-test; ANOVA crashes with 2 groups.",
            "Mathematically, they are exactly identical for 2 groups. The t-statistic squared equals the F-statistic ($t^2 = F$).",
            "You MUST use an ANOVA; t-tests are obsolete.",
            "They will give completely opposite results."
        ],
        correct: "Mathematically, they are exactly identical for 2 groups. The t-statistic squared equals the F-statistic ($t^2 = F$)."
    },
    {
        topic: "ai",
        quest: "What is the primary danger of the Bonferroni correction in post-hoc testing?",
        hasContent: false,
        choices: [
            "It increases the Type I error rate.",
            "It is heavily conservative. As the number of comparisons grows, the required significance level becomes incredibly tiny, drastically increasing the Type II error rate (missing real effects).",
            "It only works on continuous data.",
            "It requires the data to be non-normal."
        ],
        correct: "It is heavily conservative. As the number of comparisons grows, the required significance level becomes incredibly tiny, drastically increasing the Type II error rate (missing real effects)."
    },
    {
        topic: "ai",
        quest: "You are testing 3 different website landing pages (A, B, C) and measuring whether a user 'Converted' or 'Did Not Convert' (Binary/Categorical outcome). Should you use ANOVA?",
        hasContent: false,
        choices: [
            "Yes, ANOVA is perfect for binary data.",
            "No. Because the outcome is binary/categorical, you must use a Chi-Square Test of Independence (or logistic regression), NOT ANOVA.",
            "Yes, but only Welch's ANOVA.",
            "No, you must use a Paired t-test."
        ],
        correct: "No. Because the outcome is binary/categorical, you must use a Chi-Square Test of Independence (or logistic regression), NOT ANOVA."
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
        console.log(`Successfully inserted ${result.insertedCount} questions for '3.8 Variance Analysis'`);
        
        // Delete the processed file
        const targetFile = path.join(__dirname, '..', 'materials', '3.8 Variance Analysis and Group ComparisonsUnit 3 –.._.md');
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
