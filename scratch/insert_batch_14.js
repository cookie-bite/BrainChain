require('dotenv').config();
const { MongoClient } = require('mongodb');
const fs = require('fs');
const path = require('path');

const questions = [
    {
        topic: "ai",
        quest: "What is the primary limitation of using 'Covariance' to measure the relationship between two variables?",
        hasContent: false,
        choices: [
            "It cannot detect negative relationships.",
            "Its magnitude heavily depends on the units of measurement (e.g., changing meters to millimeters changes the covariance drastically), making it impossible to compare across datasets.",
            "It only works on categorical data.",
            "It always returns a value between -1 and 1."
        ],
        correct: "Its magnitude heavily depends on the units of measurement (e.g., changing meters to millimeters changes the covariance drastically), making it impossible to compare across datasets."
    },
    {
        topic: "ai",
        quest: "How does the Pearson Correlation coefficient elegantly solve the unit-dependency problem of Covariance?",
        hasContent: true,
        contentType: "math",
        content: "r = \\frac{\\text{cov}(X, Y)}{\\sigma_X \\times \\sigma_Y}",
        choices: [
            "By multiplying covariance by the sample size.",
            "By standardizing the covariance; dividing it by the product of both variables' standard deviations, creating a dimensionless metric from -1 to 1.",
            "By taking the square root of the covariance.",
            "By converting all data points to probabilities."
        ],
        correct: "By standardizing the covariance; dividing it by the product of both variables' standard deviations, creating a dimensionless metric from -1 to 1."
    },
    {
        topic: "ai",
        quest: "If the Pearson Correlation coefficient ($r$) between 'Study Hours' and 'Test Score' is exactly 0.5, what does $r^2$ tell you?",
        hasContent: false,
        choices: [
            "The p-value is 0.25.",
            "25% of the variance in Test Scores is mathematically explained by Study Hours.",
            "Test scores will increase by 25 points for every hour studied.",
            "50% of the students passed the test."
        ],
        correct: "25% of the variance in Test Scores is mathematically explained by Study Hours."
    },
    {
        topic: "ai",
        quest: "You discover a perfect U-shaped (quadratic) relationship in your data ($y = x^2$). If you calculate the Pearson correlation, what value will you likely get?",
        hasContent: false,
        choices: [
            "Exactly 1.0",
            "A value near 0, because Pearson only detects LINEAR relationships, not curved ones.",
            "-1.0",
            "Infinity"
        ],
        correct: "A value near 0, because Pearson only detects LINEAR relationships, not curved ones."
    },
    {
        topic: "ai",
        quest: "Why is the Spearman Rank Correlation much better at detecting an exponential relationship ($y = e^x$) than Pearson?",
        hasContent: false,
        choices: [
            "Spearman automatically applies a logarithmic transformation to the data.",
            "Spearman converts raw values into ranks before correlating them, allowing it to detect ANY monotonic relationship (constantly increasing/decreasing) regardless of whether it's a straight line.",
            "Spearman uses a higher significance level.",
            "Spearman ignores negative numbers."
        ],
        correct: "Spearman converts raw values into ranks before correlating them, allowing it to detect ANY monotonic relationship (constantly increasing/decreasing) regardless of whether it's a straight line."
    },
    {
        topic: "ai",
        quest: "A dataset of 100 users shows a weak Pearson correlation ($r = 0.1$). You discover one user in the dataset spent $10,000 while everyone else spent $5. Why should you re-evaluate the correlation?",
        hasContent: false,
        choices: [
            "Because standard deviation is undefined.",
            "Because Pearson correlation operates on raw values and is extremely sensitive to massive outliers, which can completely distort the coefficient.",
            "Because $r=0.1$ is statistically impossible.",
            "Because the p-value will be exactly 0."
        ],
        correct: "Because Pearson correlation operates on raw values and is extremely sensitive to massive outliers, which can completely distort the coefficient."
    },
    {
        topic: "ai",
        quest: "If you want a correlation metric that is highly robust against massive outliers, which should you choose?",
        hasContent: false,
        choices: [
            "Pearson Correlation",
            "Spearman Rank Correlation",
            "Covariance",
            "Linear Regression Coefficient"
        ],
        correct: "Spearman Rank Correlation"
    },
    {
        topic: "ai",
        quest: "A classic example shows a strong positive correlation between 'Ice Cream Sales' and 'Drowning Deaths'. What is 'Summer Temperature' known as in this scenario?",
        hasContent: false,
        choices: [
            "A Target Variable",
            "A Confounding Variable; a hidden third factor that directly influences both observed variables, creating a spurious (false) correlation.",
            "An Outlier",
            "A Monotonic Feature"
        ],
        correct: "A Confounding Variable; a hidden third factor that directly influences both observed variables, creating a spurious (false) correlation."
    },
    {
        topic: "ai",
        quest: "In a medical dataset, a new drug improves recovery rates for Men and improves recovery rates for Women. However, when the data is combined, the drug appears to DECREASE the overall recovery rate. What is this bizarre statistical phenomenon called?",
        hasContent: false,
        choices: [
            "The Placebo Effect",
            "Simpson's Paradox; where a trend appears in isolated groups but disappears or reverses when the groups are aggregated due to uneven group sizes and base rates.",
            "The Butterfly Effect",
            "Multicollinearity"
        ],
        correct: "Simpson's Paradox; where a trend appears in isolated groups but disappears or reverses when the groups are aggregated due to uneven group sizes and base rates."
    },
    {
        topic: "ai",
        quest: "In Machine Learning, what is 'Multicollinearity'?",
        hasContent: false,
        choices: [
            "When a feature is highly correlated with the target variable.",
            "When two or more predictor FEATURES are highly correlated with each other, providing redundant information and making linear model coefficients incredibly unstable.",
            "When the target variable has multiple classes.",
            "When rows in the dataset are duplicated."
        ],
        correct: "When two or more predictor FEATURES are highly correlated with each other, providing redundant information and making linear model coefficients incredibly unstable."
    },
    {
        topic: "ai",
        quest: "You are preparing data for a Linear Regression model. You calculate the Variance Inflation Factor (VIF) for 'Years of Experience' and get a value of 15. What does this mean?",
        hasContent: false,
        choices: [
            "The feature is perfectly scaled.",
            "There is severe multicollinearity; this feature is highly redundant with other features in the dataset and is distorting the model (VIF > 10 is very bad).",
            "The feature has a negative correlation with the target.",
            "The feature is completely independent of everything."
        ],
        correct: "There is severe multicollinearity; this feature is highly redundant with other features in the dataset and is distorting the model (VIF > 10 is very bad)."
    },
    {
        topic: "ai",
        quest: "When analyzing a Correlation Heatmap of your features, what is the ideal scenario for a highly robust, interpretable Machine Learning model?",
        hasContent: false,
        choices: [
            "Features are highly correlated with each other (dark red), and weakly correlated with the target (white).",
            "Features are weakly correlated with each other (preventing multicollinearity), but highly correlated with the Target variable (maximizing predictive power).",
            "Everything is zero correlation.",
            "All features are perfectly correlated with each other."
        ],
        correct: "Features are weakly correlated with each other (preventing multicollinearity), but highly correlated with the Target variable (maximizing predictive power)."
    },
    {
        topic: "ai",
        quest: "A data scientist runs `df.corr(method='pearson')` and `df.corr(method='spearman')` on two variables. The Pearson result is $0.2$, but the Spearman result is $0.9$. What is the most likely shape of this relationship on a scatter plot?",
        hasContent: false,
        choices: [
            "A perfect straight line.",
            "A strong exponential or logarithmic curve (monotonic but highly non-linear), or a linear relationship severely warped by a massive outlier.",
            "A perfect circle.",
            "Completely random noise."
        ],
        correct: "A strong exponential or logarithmic curve (monotonic but highly non-linear), or a linear relationship severely warped by a massive outlier."
    },
    {
        topic: "ai",
        quest: "Why can an ML model trained strictly on a 'Spurious Correlation' perform incredibly well on historical Training Data, but immediately fail in Production?",
        hasContent: false,
        choices: [
            "Because training data is usually smaller.",
            "Because the spurious correlation relies on a hidden confounder. If the relationship between the confounder and the features shifts in the real world, the model's logic entirely collapses.",
            "Because spurious correlations have p-values > 0.05.",
            "Because production environments block collinear features."
        ],
        correct: "Because the spurious correlation relies on a hidden confounder. If the relationship between the confounder and the features shifts in the real world, the model's logic entirely collapses."
    },
    {
        topic: "ai",
        quest: "In a scatterplot matrix, what is typically plotted on the diagonal line where a variable intersects with itself?",
        hasContent: false,
        choices: [
            "A straight diagonal line showing perfect correlation.",
            "A histogram or density plot showing the univariate distribution of that specific variable.",
            "A blank square.",
            "The covariance matrix."
        ],
        correct: "A histogram or density plot showing the univariate distribution of that specific variable."
    },
    {
        topic: "ai",
        quest: "Which of these scenarios is the absolute BEST use-case for calculating a Spearman Correlation instead of Pearson?",
        hasContent: false,
        choices: [
            "When comparing heights and weights of adults.",
            "When correlating an ordinal survey scale ('1-Bad' to '5-Great') with income brackets, because the data is ranked/ordinal and not strictly continuous.",
            "When proving that $X$ causes $Y$.",
            "When performing a One-Sample t-test."
        ],
        correct: "When correlating an ordinal survey scale ('1-Bad' to '5-Great') with income brackets, because the data is ranked/ordinal and not strictly continuous."
    },
    {
        topic: "ai",
        quest: "If Variable A and Variable B have a Pearson correlation of -0.85, what does the negative sign indicate?",
        hasContent: false,
        choices: [
            "The relationship is very weak.",
            "The calculation failed.",
            "The relationship is inverse; as Variable A strictly increases, Variable B tends to strongly decrease.",
            "The data is skewed to the left."
        ],
        correct: "The relationship is inverse; as Variable A strictly increases, Variable B tends to strongly decrease."
    },
    {
        topic: "ai",
        quest: "You are building a pricing model for houses. Both 'Square Footage' and 'Number of Bedrooms' have a massive 0.92 correlation with each other. What statistical issue have you just identified?",
        hasContent: false,
        choices: [
            "Simpson's Paradox",
            "Multicollinearity",
            "Type I Error",
            "Selection Bias"
        ],
        correct: "Multicollinearity"
    },
    {
        topic: "ai",
        quest: "How does the Variance Inflation Factor (VIF) detect multicollinearity algorithmically?",
        hasContent: false,
        choices: [
            "It runs a neural network on the data.",
            "It tries to predict one feature using all the OTHER features via linear regression. If $R^2$ is very high, that feature is highly redundant (inflating the VIF).",
            "It sums up all the covariances.",
            "It ranks the data from highest to lowest."
        ],
        correct: "It tries to predict one feature using all the OTHER features via linear regression. If $R^2$ is very high, that feature is highly redundant (inflating the VIF)."
    },
    {
        topic: "ai",
        quest: "Is it statistically possible for a Correlation Coefficient to be perfectly exactly zero, but the two variables are still completely deterministically dependent on each other?",
        hasContent: false,
        choices: [
            "No, if correlation is 0, they are entirely independent.",
            "Yes, if the relationship is highly non-linear and symmetrical (like a perfect circle or a U-shape), the linear Pearson correlation will be 0 despite a perfect relationship.",
            "Yes, but only if sample size is under 30.",
            "No, because $p$-values prevent this."
        ],
        correct: "Yes, if the relationship is highly non-linear and symmetrical (like a perfect circle or a U-shape), the linear Pearson correlation will be 0 despite a perfect relationship."
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
        console.log(`Successfully inserted ${result.insertedCount} questions for '3.7 Correlation'`);
        
        // Delete the processed file
        const targetFile = path.join(__dirname, '..', 'materials', '3.7 Correlation and Feature UnderstandingLESSONIntr.._.md');
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
