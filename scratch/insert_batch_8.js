require('dotenv').config();
const { MongoClient } = require('mongodb');
const fs = require('fs');
const path = require('path');

const questions = [
    {
        topic: "ai",
        quest: "A data engineer creates a column called 'customer_id' containing numeric values like 101, 102, 103. A junior analyst computes the 'average customer_id'. What fundamental mistake was made regarding data types?",
        hasContent: false,
        choices: [
            "Customer IDs are continuous numeric data, so the median should be used instead of the mean.",
            "Customer IDs are nominal categorical data acting as identifiers; performing arithmetic operations on them is mathematically meaningless.",
            "Customer IDs are discrete data, so only the mode can be calculated.",
            "The analyst forgot to use the `ddof=1` argument."
        ],
        correct: "Customer IDs are nominal categorical data acting as identifiers; performing arithmetic operations on them is mathematically meaningless."
    },
    {
        topic: "ai",
        quest: "You are analyzing customer satisfaction surveys with responses: 'Very Unhappy', 'Unhappy', 'Neutral', 'Happy', 'Very Happy'. What is the most precise classification of this data type?",
        hasContent: false,
        choices: [
            "Nominal Categorical",
            "Continuous Numeric",
            "Ordinal Categorical; there is a meaningful order, but the distance between 'Neutral' and 'Happy' is not necessarily the same mathematically as the distance between 'Unhappy' and 'Neutral'.",
            "Discrete Numeric"
        ],
        correct: "Ordinal Categorical; there is a meaningful order, but the distance between 'Neutral' and 'Happy' is not necessarily the same mathematically as the distance between 'Unhappy' and 'Neutral'."
    },
    {
        topic: "ai",
        quest: "You join a startup with 5 employees earning around $50,000 each. The CEO is hired and earns $2,000,000. In a press release, the CEO claims the 'average' salary at the startup is $375,000. Why is this summary technically correct but highly misleading?",
        hasContent: false,
        choices: [
            "The CEO used the Median, which gets pulled dramatically by outliers.",
            "The CEO used the Mean, which is highly sensitive to extreme values and got pulled toward the long right tail, failing to represent the typical employee's experience.",
            "The CEO used the Mode, which only selects the highest value.",
            "The CEO used the Interquartile Range (IQR)."
        ],
        correct: "The CEO used the Mean, which is highly sensitive to extreme values and got pulled toward the long right tail, failing to represent the typical employee's experience."
    },
    {
        topic: "ai",
        quest: "You are analyzing web server response times. The mean response time is 450ms, but the median is only 120ms. What does this massive divergence tell you about the shape of the data distribution?",
        hasContent: false,
        choices: [
            "The data is perfectly symmetric (Normal Distribution).",
            "The data has a strong negative (left) skew.",
            "The data has a strong positive (right) skew; most users experience fast 120ms responses, but a few extremely slow requests (the long right tail) are heavily inflating the mean.",
            "The data has negative kurtosis."
        ],
        correct: "The data has a strong positive (right) skew; most users experience fast 120ms responses, but a few extremely slow requests (the long right tail) are heavily inflating the mean."
    },
    {
        topic: "ai",
        quest: "A Python developer computes the standard deviation of a sample using Pandas (`df.std()`) and then using NumPy (`np.std(df)`), and gets slightly different answers. What is the mathematical reason for this discrepancy?",
        hasContent: false,
        choices: [
            "Pandas handles float64 better than NumPy.",
            "Pandas defaults to Delta Degrees of Freedom `ddof=1` (sample standard deviation to correct for underestimation), while NumPy defaults to `ddof=0` (population standard deviation).",
            "NumPy automatically drops all null values, while Pandas includes them as zeroes.",
            "NumPy uses the median instead of the mean to calculate deviations."
        ],
        correct: "Pandas defaults to Delta Degrees of Freedom `ddof=1` (sample standard deviation to correct for underestimation), while NumPy defaults to `ddof=0` (population standard deviation)."
    },
    {
        topic: "ai",
        quest: "If you want a measure of spread (dispersion) that is completely robust against extreme outliers, which metric should you choose?",
        hasContent: false,
        choices: [
            "Range (Max - Min)",
            "Standard Deviation",
            "Variance",
            "Interquartile Range (IQR), which only looks at the distance between the 25th and 75th percentiles, ignoring the tails entirely."
        ],
        correct: "Interquartile Range (IQR), which only looks at the distance between the 25th and 75th percentiles, ignoring the tails entirely."
    },
    {
        topic: "ai",
        quest: "You need to compare the volatility (variability) of a penny stock valued at $2 and a massive tech stock valued at $500. Standard deviation alone is useless because the scales are so different. Which statistic solves this problem?",
        hasContent: true,
        contentType: "math",
        content: "\\text{CV} = \\frac{\\sigma}{\\mu} \\times 100",
        choices: [
            "Z-Score",
            "Coefficient of Variation (CV); it expresses the standard deviation as a percentage of the mean, allowing fair comparisons across vastly different scales.",
            "Kurtosis",
            "Interquartile Range (IQR)"
        ],
        correct: "Coefficient of Variation (CV); it expresses the standard deviation as a percentage of the mean, allowing fair comparisons across vastly different scales."
    },
    {
        topic: "ai",
        quest: "A data point in your dataset has a Z-Score of -2.5. What exactly does this mean mathematically?",
        hasContent: false,
        choices: [
            "The value is 2.5 times smaller than the median.",
            "The value is exactly 2.5 standard deviations below the mean of the distribution.",
            "The value falls in the 2.5th percentile of the data.",
            "The value is an error and should be deleted immediately."
        ],
        correct: "The value is exactly 2.5 standard deviations below the mean of the distribution."
    },
    {
        topic: "ai",
        quest: "An analyst finds that a financial returns dataset has a high positive Excess Kurtosis. What does this indicate about the data, and why is it dangerous to ignore?",
        hasContent: false,
        choices: [
            "It means the data is perfectly normal.",
            "It indicates 'heavy tails'; extreme values (like market crashes or massive booms) occur much more frequently than a standard Normal Distribution would predict.",
            "It means the distribution has a flat, uniform shape.",
            "It indicates that all values are clustered perfectly around the median."
        ],
        correct: "It indicates 'heavy tails'; extreme values (like market crashes or massive booms) occur much more frequently than a standard Normal Distribution would predict."
    },
    {
        topic: "ai",
        quest: "You create a Box Plot. You see a box with a line in the middle, and 'whiskers' extending outward. What exactly do the edges of the box represent?",
        hasContent: false,
        choices: [
            "The Mean and the Standard Deviation.",
            "The Minimum and Maximum values of the dataset.",
            "The 25th percentile (Q1) and the 75th percentile (Q3), with the distance between them being the IQR.",
            "The 5th and 95th percentiles."
        ],
        correct: "The 25th percentile (Q1) and the 75th percentile (Q3), with the distance between them being the IQR."
    },
    {
        topic: "ai",
        quest: "According to 'Anscombe's Quartet', four datasets can have the exact same mean, variance, correlation, and linear regression line, but look completely entirely different. What is the fundamental lesson of this phenomenon?",
        hasContent: false,
        choices: [
            "Linear regression is a broken algorithm.",
            "Summary statistics are often enough to make business decisions.",
            "Never trust summary statistics alone; you must always visualize your data to understand its true shape and identify hidden patterns or extreme outliers.",
            "Standard deviation is a better metric than variance."
        ],
        correct: "Never trust summary statistics alone; you must always visualize your data to understand its true shape and identify hidden patterns or extreme outliers."
    },
    {
        topic: "ai",
        quest: "You run `df.describe(include='all')` on a Pandas DataFrame and look at a column called `country`. You see `unique = 205`. If you expected only European countries, what does this summary instantly tell you?",
        hasContent: true,
        contentType: "code",
        codeLanguage: "python",
        content: "df.describe(include='all')",
        choices: [
            "The mean country value is too high.",
            "There is a severe data quality issue; a categorical summary showing 205 unique values when you expect around 40-50 indicates dirty data or global records mixed in.",
            "The data is right-skewed.",
            "The standard deviation of countries is 205."
        ],
        correct: "There is a severe data quality issue; a categorical summary showing 205 unique values when you expect around 40-50 indicates dirty data or global records mixed in."
    },
    {
        topic: "ai",
        quest: "A distribution is described as 'Continuous Numeric'. Which of the following is a classic example of this data type?",
        hasContent: false,
        choices: [
            "Number of children in a family.",
            "Number of website clicks per hour.",
            "Exact temperature in degrees Celsius, which can take any fractional value within a range.",
            "T-shirt sizes (S, M, L, XL)."
        ],
        correct: "Exact temperature in degrees Celsius, which can take any fractional value within a range."
    },
    {
        topic: "ai",
        quest: "When using the Empirical Rule (68-95-99.7) on a perfectly normal distribution, what percentage of the data is expected to fall within TWO standard deviations of the mean?",
        hasContent: false,
        choices: [
            "50%",
            "68%",
            "95%",
            "99.7%"
        ],
        correct: "95%"
    },
    {
        topic: "ai",
        quest: "In a negatively skewed (left skewed) distribution, such as scores on a very easy exam, what is the typical relationship between the Mean and the Median?",
        hasContent: false,
        choices: [
            "Mean = Median",
            "The Mean is less than the Median, because the long left tail of low scores pulls the mean down.",
            "The Mean is greater than the Median.",
            "The Median is pulled toward the left tail."
        ],
        correct: "The Mean is less than the Median, because the long left tail of low scores pulls the mean down."
    },
    {
        topic: "ai",
        quest: "Why is 'Mode' often the ONLY valid measure of central tendency for Nominal Categorical data (like 'Color')?",
        hasContent: false,
        choices: [
            "Because Nominal data has extreme outliers.",
            "Because you cannot mathematically average colors, nor can you find the 'middle' color since there is no meaningful order. You can only count which appears most frequently.",
            "Because Nominal data is continuous.",
            "Because colors follow a heavy-tailed distribution."
        ],
        correct: "Because you cannot mathematically average colors, nor can you find the 'middle' color since there is no meaningful order. You can only count which appears most frequently."
    },
    {
        topic: "ai",
        quest: "An ML pipeline automatically drops any record with a Z-Score greater than 3 or less than -3. What is this pipeline attempting to do?",
        hasContent: false,
        choices: [
            "Perform Stratified Sampling.",
            "Normalize the data to fit between 0 and 1.",
            "Remove potential extreme outliers, based on the assumption that values more than 3 standard deviations away from the mean are highly unusual.",
            "Calculate the Interquartile Range."
        ],
        correct: "Remove potential extreme outliers, based on the assumption that values more than 3 standard deviations away from the mean are highly unusual."
    },
    {
        topic: "ai",
        quest: "If the 75th percentile of annual income in a dataset is $120,000, what exactly does that signify?",
        hasContent: false,
        choices: [
            "The average income is $120,000.",
            "75% of the people in the dataset earn $120,000 or less.",
            "75% of the people in the dataset earn MORE than $120,000.",
            "The standard deviation is 75."
        ],
        correct: "75% of the people in the dataset earn $120,000 or less."
    },
    {
        topic: "ai",
        quest: "You compute summary statistics on a tiny dataset of $N=5$. The standard deviation is 10. Why should a data scientist be extremely cautious about using this standard deviation in a production model?",
        hasContent: false,
        choices: [
            "Because the mean is unknown.",
            "Because summary statistics computed from extremely small samples are highly noisy estimates of the true population parameters, and standard deviation is particularly unstable at $N=5$.",
            "Because standard deviation cannot be calculated for samples under 10.",
            "Because they should have used the Coefficient of Variation instead."
        ],
        correct: "Because summary statistics computed from extremely small samples are highly noisy estimates of the true population parameters, and standard deviation is particularly unstable at $N=5$."
    },
    {
        topic: "ai",
        quest: "Which feature of a Box Plot is used specifically to visually flag potential outliers?",
        hasContent: false,
        choices: [
            "The line representing the median.",
            "The edges of the central box (Q1 and Q3).",
            "Individual points plotted beyond the whiskers (which usually extend to 1.5 * IQR from the box edges).",
            "The title of the graph."
        ],
        correct: "Individual points plotted beyond the whiskers (which usually extend to 1.5 * IQR from the box edges)."
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
        console.log(`Successfully inserted ${result.insertedCount} questions for '3.1 Descriptive Statistics'`);
        
        // Delete the processed file
        const targetFile = path.join(__dirname, '..', 'materials', '3.1 Descriptive Statistics as Data Language.md');
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
