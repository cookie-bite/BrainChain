require('dotenv').config();
const { MongoClient } = require('mongodb');
const fs = require('fs');
const path = require('path');

const questions = [
    {
        topic: "ai",
        quest: "What is the primary difference between classification and regression in supervised learning?",
        choices: [
            "Classification predicts categories, while regression predicts continuous numerical values.",
            "Classification requires labeled data, while regression is unsupervised.",
            "Regression is used for text data, while classification is used for images.",
            "Regression only works with neural networks."
        ],
        answer: "Classification predicts categories, while regression predicts continuous numerical values.",
        reason: "Regression maps input features to a continuous numerical output (e.g., house prices), whereas classification sorts data into discrete categories (e.g., spam vs. not spam).",
        diff: 1
    },
    {
        topic: "ai",
        quest: "In Linear Regression, what does the Ordinary Least Squares (OLS) cost function attempt to minimize?",
        choices: [
            "The sum of absolute differences between predictions and actual values.",
            "The sum of squared errors (SSE) between predicted and actual values.",
            "The number of features used in the model.",
            "The margin between support vectors."
        ],
        answer: "The sum of squared errors (SSE) between predicted and actual values.",
        reason: "OLS finds the best-fit line by minimizing the sum of squared distances between the actual target values and the values predicted by the linear model.",
        diff: 2
    },
    {
        topic: "ai",
        quest: "How does Ridge Regression (L2 Regularization) help prevent overfitting in linear models?",
        choices: [
            "By adding a penalty proportional to the absolute values of the coefficients.",
            "By removing features with negative coefficients.",
            "By adding a penalty proportional to the sum of squared coefficients to the cost function.",
            "By converting the continuous target variable into discrete bins."
        ],
        answer: "By adding a penalty proportional to the sum of squared coefficients to the cost function.",
        reason: "Ridge Regression (L2) adds a complexity penalty (alpha * sum of squared weights) to discourage the model from assigning excessively large coefficients, thereby reducing overfitting.",
        diff: 2
    },
    {
        topic: "ai",
        quest: "Which regression technique inherently performs automatic feature selection by shrinking some coefficients to exactly zero?",
        choices: [
            "Ridge Regression",
            "Linear Regression",
            "Support Vector Regression (SVR)",
            "Lasso Regression"
        ],
        answer: "Lasso Regression",
        reason: "Lasso Regression uses L1 regularization, which uses absolute values of coefficients. This property allows it to push the coefficients of less important features exactly to zero.",
        diff: 2
    },
    {
        topic: "ai",
        quest: "When evaluating a regression model, what does an R² (Coefficient of Determination) value of 1.0 indicate?",
        choices: [
            "The model is no better than predicting the mean value.",
            "The model perfectly explains all the variance in the target variable.",
            "The model has overfitted and is completely useless.",
            "The algorithm failed to converge during training."
        ],
        answer: "The model perfectly explains all the variance in the target variable.",
        reason: "R² ranges from negative infinity to 1. An R² of 1 indicates that the model's predictions perfectly match the actual values without any error.",
        diff: 1
    },
    {
        topic: "ai",
        quest: "Which metric represents the average of the squared prediction errors and heavily penalizes large errors?",
        choices: [
            "Mean Absolute Error (MAE)",
            "Root Mean Squared Error (RMSE)",
            "Adjusted R²",
            "Mean Squared Error (MSE)"
        ],
        answer: "Mean Squared Error (MSE)",
        reason: "MSE averages the squared differences between predicted and actual values. Because the errors are squared, larger errors are penalized exponentially more.",
        diff: 1
    },
    {
        topic: "ai",
        quest: "Why might a data scientist choose Adjusted R² over standard R² when evaluating a model with many features?",
        choices: [
            "Adjusted R² is faster to calculate.",
            "Adjusted R² penalizes the addition of useless features, whereas standard R² always stays the same or increases.",
            "Adjusted R² transforms non-linear errors into a linear scale.",
            "Adjusted R² ignores outliers completely."
        ],
        answer: "Adjusted R² penalizes the addition of useless features, whereas standard R² always stays the same or increases.",
        reason: "Standard R² can artificially inflate when more variables are added. Adjusted R² corrects this by penalizing the model for adding features that don't meaningfully improve predictions.",
        diff: 3
    },
    {
        topic: "ai",
        quest: "What is the primary purpose of the 'kernel trick' in Support Vector Regression (SVR)?",
        choices: [
            "To speed up the gradient descent process by caching weights.",
            "To model complex, non-linear relationships without explicitly computing higher-dimensional features.",
            "To automatically drop correlated features like Lasso regression.",
            "To convert regression problems into classification problems."
        ],
        answer: "To model complex, non-linear relationships without explicitly computing higher-dimensional features.",
        reason: "The kernel trick (like RBF or polynomial kernels) maps data into higher dimensions implicitly, allowing SVR to find non-linear patterns efficiently.",
        diff: 3
    },
    {
        topic: "ai",
        quest: "Consider a Linear Regression model with a learned coefficient of -15000 for the feature `house_age`. What does this indicate?",
        choices: [
            "For every additional year of age, the predicted house value decreases by $15,000.",
            "The house age feature is irrelevant and should be removed.",
            "The model's R² score is reduced by 15000.",
            "Older houses are always more expensive than newer ones."
        ],
        answer: "For every additional year of age, the predicted house value decreases by $15,000.",
        reason: "In linear regression, a negative coefficient means that as the feature value increases, the target prediction decreases proportionally.",
        diff: 2
    },
    {
        topic: "ai",
        quest: "What concept in Support Vector Regression (SVR) makes it more robust to small errors and outliers compared to standard OLS?",
        choices: [
            "The Epsilon-Tube (margin)",
            "The L1 Regularization Penalty",
            "The Gradient Descent Optimizer",
            "The Adjusted R² metric"
        ],
        answer: "The Epsilon-Tube (margin)",
        reason: "SVR tries to fit points within an epsilon-tube around the prediction line. Errors inside this tube are ignored (zero penalty), making the model robust to minor fluctuations.",
        diff: 3
    },
    {
        topic: "ai",
        quest: "In the Ordinary Least Squares formula $J(\\theta) = \\frac{1}{2n} \\sum (y_i - \\hat{y}_i)^2$, what does $\\hat{y}_i$ represent?",
        choices: [
            "The actual target value of the $i$-th sample",
            "The number of features in the dataset",
            "The predicted target value for the $i$-th sample",
            "The regularization penalty applied to the model"
        ],
        answer: "The predicted target value for the $i$-th sample",
        reason: "In regression notation, $y_i$ is the actual true value, and $\\hat{y}_i$ (y-hat) represents the value predicted by the model.",
        diff: 2
    },
    {
        topic: "ai",
        quest: "If you have a dataset with a large number of highly correlated features, which linear model is generally best suited to handle the multicollinearity?",
        choices: [
            "Standard Linear Regression",
            "Ridge Regression",
            "Support Vector Regression with Linear Kernel",
            "None of the above"
        ],
        answer: "Ridge Regression",
        reason: "Ridge (L2) handles multicollinearity well by shrinking the coefficients of correlated features proportionally, rather than discarding them arbitrarily or becoming unstable like standard OLS.",
        diff: 3
    },
    {
        topic: "ai",
        quest: "Which metric provides the average error in the exact same units as the target variable, making it highly interpretable for business stakeholders?",
        choices: [
            "Mean Squared Error (MSE)",
            "R-Squared (R²)",
            "Root Mean Squared Error (RMSE)",
            "L1 Penalty"
        ],
        answer: "Root Mean Squared Error (RMSE)",
        reason: "Because RMSE takes the square root of the squared errors, it reverses the squaring process, bringing the metric back to the original units of the target variable (e.g., dollars).",
        diff: 2
    },
    {
        topic: "ai",
        quest: "You are tuning the $\\alpha$ (alpha) hyperparameter for a Lasso regression model. What happens if you set $\\alpha$ to a very large value?",
        choices: [
            "The model becomes identical to standard linear regression.",
            "Almost all feature coefficients will be aggressively shrunk to exactly zero, resulting in a severely underfitted model.",
            "The model will perfectly memorize the training data.",
            "The model automatically switches to Ridge regression."
        ],
        answer: "Almost all feature coefficients will be aggressively shrunk to exactly zero, resulting in a severely underfitted model.",
        reason: "A very high alpha applies extreme L1 penalty, meaning the model's priority becomes minimizing weights over fitting data, zeroing out almost everything.",
        diff: 3
    },
    {
        topic: "ai",
        quest: "When using scikit-learn's `cross_val_score` for alpha tuning in Ridge regression, why do we use cross-validation instead of just checking the test set?",
        choices: [
            "Because cross-validation is computationally faster.",
            "To avoid data leakage and prevent overfitting the hyperparameters to the specific test set.",
            "Because `Ridge` requires it by default to compile.",
            "To convert the continuous target into categorical labels."
        ],
        answer: "To avoid data leakage and prevent overfitting the hyperparameters to the specific test set.",
        reason: "Cross-validation splits the training data into internal train/validation folds to tune parameters, keeping the actual test set completely unseen for final evaluation.",
        diff: 3
    },
    {
        topic: "ai",
        quest: "What is a major advantage of Mean Absolute Error (MAE) over Mean Squared Error (MSE)?",
        choices: [
            "MAE is easier to differentiate mathematically.",
            "MAE automatically performs feature selection.",
            "MAE is more robust to extreme outliers because it does not square the errors.",
            "MAE is always guaranteed to be between 0 and 1."
        ],
        answer: "MAE is more robust to extreme outliers because it does not square the errors.",
        reason: "Because MSE squares errors, a single massive outlier will inflate the MSE heavily. MAE uses absolute values, treating all errors linearly.",
        diff: 2
    },
    {
        topic: "ai",
        quest: "Which scikit-learn model would you import if you wanted to implement a Support Vector Machine for predicting continuous values?",
        choices: [
            "sklearn.svm.SVC",
            "sklearn.svm.SVR",
            "sklearn.linear_model.SVM",
            "sklearn.regression.SupportVector"
        ],
        answer: "sklearn.svm.SVR",
        reason: "SVR stands for Support Vector Regression. SVC is for classification.",
        diff: 1
    },
    {
        topic: "ai",
        quest: "In a scatter plot comparing Actual Values (x-axis) vs Predicted Values (y-axis), what does a perfect model look like visually?",
        choices: [
            "A horizontal line parallel to the x-axis.",
            "A random cloud of points grouped in the center.",
            "A vertical line parallel to the y-axis.",
            "All points falling perfectly on the 45-degree diagonal line."
        ],
        answer: "All points falling perfectly on the 45-degree diagonal line.",
        reason: "If predictions exactly equal actual values, the coordinate (actual, predicted) will be e.g. (5, 5), (10, 10), forming a perfect 45-degree diagonal line.",
        diff: 1
    },
    {
        topic: "ai",
        quest: "When visualizing housing data, what is the impact of applying `StandardScaler` to features before fitting a Linear Regression model?",
        choices: [
            "It ensures all features have a mean of 0 and variance of 1, making the resulting coefficients directly comparable in magnitude.",
            "It drops features with high standard deviations.",
            "It changes the target variable to fit a normal distribution.",
            "It automatically determines the optimal alpha value for the model."
        ],
        answer: "It ensures all features have a mean of 0 and variance of 1, making the resulting coefficients directly comparable in magnitude.",
        reason: "Scaling features standardizes their ranges. This is critical because otherwise, a feature measured in thousands (like population) would have a tiny coefficient compared to one measured in decimals (like age), making interpretation impossible.",
        diff: 2
    },
    {
        topic: "ai",
        quest: "Which algorithm should you typically start with as a baseline when facing a new regression problem?",
        choices: [
            "Support Vector Regression with RBF kernel",
            "Lasso Regression",
            "Linear Regression (OLS)",
            "A complex Deep Neural Network"
        ],
        answer: "Linear Regression (OLS)",
        reason: "Linear Regression is fast, highly interpretable, and provides a solid baseline. If it performs poorly, you can then try more complex non-linear models like SVR.",
        diff: 1
    }
];

const uri = process.env.DB_CONNECT;

async function run() {
    console.log("Connecting to MongoDB...");
    const client = new MongoClient(uri);

    try {
        await client.connect();
        const db = client.db("brch");
        const collection = db.collection("questions");

        const result = await collection.insertMany(questions);
        console.log(`Successfully inserted ${result.insertedCount} questions for 4.2 Regression!`);
    } catch (err) {
        console.error(err);
    } finally {
        await client.close();
    }
}

run();
