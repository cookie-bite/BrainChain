require('dotenv').config();
const { MongoClient } = require('mongodb');

const questions = [
    {
        topic: "ai",
        quest: "What is the core principle behind ensemble methods in machine learning?",
        choices: [
            "Replacing a complex model with a simpler, highly interpretable one.",
            "Combining the predictions of multiple individual models to achieve better and more robust overall performance.",
            "Using unsupervised learning to extract features before applying supervised models.",
            "Sequentially removing features until the model accuracy stops improving."
        ],
        answer: "Combining the predictions of multiple individual models to achieve better and more robust overall performance.",
        reason: "Ensemble methods rely on the 'wisdom of the crowd' by aggregating multiple models to reduce error and increase stability compared to any single model.",
        diff: 1
    },
    {
        topic: "ai",
        quest: "Which ensemble technique primarily aims to reduce a model's variance by training multiple instances of the same algorithm in parallel on random subsets of data?",
        choices: [
            "Boosting",
            "Stacking",
            "Bagging (Bootstrap Aggregating)",
            "Soft Voting"
        ],
        answer: "Bagging (Bootstrap Aggregating)",
        reason: "Bagging reduces variance (overfitting) by training models independently in parallel on bootstrap samples and averaging their predictions.",
        diff: 1
    },
    {
        topic: "ai",
        quest: "In the context of ensemble learning, what is a 'Bootstrap sample'?",
        choices: [
            "A sample containing only the misclassified examples from previous models.",
            "A completely new dataset generated using synthetic data techniques.",
            "A random subset of features drawn without replacement.",
            "A random sample drawn from the training data with replacement."
        ],
        answer: "A random sample drawn from the training data with replacement.",
        reason: "Bootstrapping involves drawing samples randomly from the original dataset, allowing the same instance to be picked multiple times in one sample.",
        diff: 2
    },
    {
        topic: "ai",
        quest: "Random Forests extend standard bagging by introducing what additional element of randomness to further reduce tree correlation?",
        choices: [
            "They use randomized activation functions at each node.",
            "They randomly assign the target labels during training.",
            "At each split in a tree, they only consider a random subset of features.",
            "They apply a random learning rate to each individual tree."
        ],
        answer: "At each split in a tree, they only consider a random subset of features.",
        reason: "Feature randomization prevents a single highly predictive feature from dominating all trees, ensuring that the trees in the forest are diverse and less correlated.",
        diff: 2
    },
    {
        topic: "ai",
        quest: "What is the 'Out-of-Bag' (OOB) score in a Random Forest?",
        choices: [
            "The error rate calculated on data points that were never selected during the bootstrap sampling for a given tree.",
            "The percentage of trees that failed to converge during training.",
            "A metric that evaluates how many features were excluded from the model.",
            "The error rate caused by outliers in the dataset."
        ],
        answer: "The error rate calculated on data points that were never selected during the bootstrap sampling for a given tree.",
        reason: "Since bootstrapping leaves out roughly 37% of the data for each tree, these 'out-of-bag' samples can act as a built-in validation set to estimate model performance.",
        diff: 2
    },
    {
        topic: "ai",
        quest: "Unlike bagging, how does Boosting build its ensemble of models?",
        choices: [
            "It trains all models simultaneously on different machines to save time.",
            "It builds models sequentially, with each new model focusing on correcting the mistakes of the previous ones.",
            "It uses a single meta-model to determine which base model is best.",
            "It requires user input after each tree is built to determine the next step."
        ],
        answer: "It builds models sequentially, with each new model focusing on correcting the mistakes of the previous ones.",
        reason: "Boosting aims to reduce bias by sequentially training weak learners, where each learner gives higher weight or priority to instances that were misclassified previously.",
        diff: 2
    },
    {
        topic: "ai",
        quest: "How does the AdaBoost algorithm guide its sequential models to learn from past mistakes?",
        choices: [
            "It fits the new model to the residual errors of the previous ensemble.",
            "It deletes correctly classified samples from the training set.",
            "It increases the mathematical weights of the previously misclassified samples.",
            "It automatically switches to a more complex algorithm like neural networks."
        ],
        answer: "It increases the mathematical weights of the previously misclassified samples.",
        reason: "Adaptive Boosting (AdaBoost) adjusts sample weights after each iteration so that subsequent models focus more heavily on the harder-to-predict instances.",
        diff: 3
    },
    {
        topic: "ai",
        quest: "Instead of reweighting samples like AdaBoost, what mathematical approach does Gradient Boosting use to correct previous models?",
        choices: [
            "It applies the kernel trick to map errors into higher dimensions.",
            "It fits each new model directly to the residual errors of the current ensemble.",
            "It calculates the Gini impurity of the combined predictions.",
            "It averages the probabilities of all previous models."
        ],
        answer: "It fits each new model directly to the residual errors of the current ensemble.",
        reason: "Gradient Boosting treats boosting as an optimization problem, sequentially fitting new models to the residuals (errors) left over by the ensemble so far.",
        diff: 3
    },
    {
        topic: "ai",
        quest: "When tuning a Gradient Boosting model, what is the typical relationship between the 'learning_rate' and 'n_estimators'?",
        choices: [
            "They are completely independent and should be tuned randomly.",
            "A lower learning rate usually requires more estimators (trees) to achieve the same or better performance.",
            "Increasing the learning rate automatically decreases the number of estimators.",
            "A higher learning rate always prevents overfitting."
        ],
        answer: "A lower learning rate usually requires more estimators (trees) to achieve the same or better performance.",
        reason: "The learning rate dictates how much each tree contributes. A small learning rate means each tree makes a tiny correction, requiring more trees overall, which generally improves generalization.",
        diff: 3
    },
    {
        topic: "ai",
        quest: "Which of the following describes the Stacking (Stacked Generalization) ensemble method?",
        choices: [
            "Taking a simple majority vote of 5 identical Decision Trees.",
            "Training a 'meta-learner' model that takes the predictions of several diverse base models as its input features.",
            "Iteratively stacking deeper neural network layers until accuracy stabilizes.",
            "Creating subsets of data and training a random forest on each subset."
        ],
        answer: "Training a 'meta-learner' model that takes the predictions of several diverse base models as its input features.",
        reason: "Stacking involves training level-1 base models (like SVM, RF, KNN) and feeding their predictions into a level-2 meta-model (like Logistic Regression) that learns how to best combine them.",
        diff: 2
    },
    {
        topic: "ai",
        quest: "In a Voting Classifier, what is the key difference between 'Hard Voting' and 'Soft Voting'?",
        choices: [
            "Hard voting is for regression; soft voting is for classification.",
            "Hard voting counts the majority class vote; soft voting averages the predicted probabilities from each model.",
            "Hard voting only accepts unanimous predictions; soft voting accepts any majority.",
            "Hard voting requires neural networks; soft voting relies on decision trees."
        ],
        answer: "Hard voting counts the majority class vote; soft voting averages the predicted probabilities from each model.",
        reason: "Hard voting literally counts class 'ballots' (e.g., 2 votes for Class A, 1 for Class B). Soft voting averages the confidence probabilities, which is generally more accurate.",
        diff: 2
    },
    {
        topic: "ai",
        quest: "Why might Soft Voting generally outperform Hard Voting in an ensemble?",
        choices: [
            "It ignores models with low accuracy automatically.",
            "It takes into account the confidence level of each model's prediction rather than just a binary class label.",
            "It trains significantly faster because it avoids calculating classes.",
            "It acts as a regularization technique to prevent overfitting."
        ],
        answer: "It takes into account the confidence level of each model's prediction rather than just a binary class label.",
        reason: "A model that is 99% confident can outweigh a model that is only 51% confident, leading to more nuanced and accurate overall predictions.",
        diff: 2
    },
    {
        topic: "ai",
        quest: "When setting up Stacking, why is it crucial to use Cross-Validation to generate the predictions for the meta-learner?",
        choices: [
            "To speed up the training process of the base models.",
            "To prevent data leakage by ensuring the meta-learner is trained on predictions made on unseen data.",
            "Because scikit-learn's API does not allow normal `predict` calls inside ensembles.",
            "To automatically select the best hyperparameters for the meta-learner."
        ],
        answer: "To prevent data leakage by ensuring the meta-learner is trained on predictions made on unseen data.",
        reason: "If base models predict on the exact data they trained on, they will artificially appear too confident. CV ensures the meta-model learns how base models perform on actual new data.",
        diff: 3
    },
    {
        topic: "ai",
        quest: "XGBoost and LightGBM are highly popular algorithms for Kaggle competitions. What ensemble technique do they implement and optimize?",
        choices: [
            "Random Forest (Bagging)",
            "Stacking",
            "Voting",
            "Gradient Boosting"
        ],
        answer: "Gradient Boosting",
        reason: "Both XGBoost (Extreme Gradient Boosting) and LightGBM are highly optimized, modern implementations of the Gradient Boosting concept.",
        diff: 1
    },
    {
        topic: "ai",
        quest: "What is the primary reason for using a diversity of different algorithms (e.g., SVM, KNN, Random Forest) when building a Stacking ensemble?",
        choices: [
            "To ensure that at least one model trains fast enough.",
            "Because different algorithms make different assumptions and types of errors, allowing the meta-learner to leverage their individual strengths.",
            "To satisfy the mathematical requirements of the logistic regression meta-learner.",
            "To increase the bias of the overall model."
        ],
        answer: "Because different algorithms make different assumptions and types of errors, allowing the meta-learner to leverage their individual strengths.",
        reason: "An ensemble benefits most when its constituent models are uncorrelated. If they all make the exact same mistakes, the ensemble offers no improvement.",
        diff: 2
    },
    {
        topic: "ai",
        quest: "If your model is suffering from high variance (overfitting deep decision trees), which ensemble method is most theoretically appropriate to apply?",
        choices: [
            "Bagging (e.g., Random Forest)",
            "AdaBoost",
            "Gradient Boosting",
            "Linear Regression Stacking"
        ],
        answer: "Bagging (e.g., Random Forest)",
        reason: "Bagging averages multiple complex, overfitted models to smooth out their predictions, directly reducing variance.",
        diff: 2
    },
    {
        topic: "ai",
        quest: "If your base model is extremely simple and suffers from high bias (underfitting, like a decision stump), which ensemble method is most appropriate?",
        choices: [
            "Bagging",
            "Random Forest",
            "Boosting (e.g., AdaBoost)",
            "Hard Voting"
        ],
        answer: "Boosting (e.g., AdaBoost)",
        reason: "Boosting sequentially trains weak learners, combining them into a strong learner. It is specifically designed to reduce bias.",
        diff: 2
    },
    {
        topic: "ai",
        quest: "Which ensemble strategy would you use if you simply have three already-trained, well-performing models and you want a quick, easy way to combine their predictions?",
        choices: [
            "Gradient Boosting",
            "Voting Classifier",
            "Bagging",
            "Random Forest"
        ],
        answer: "Voting Classifier",
        reason: "Voting is the most straightforward way to combine existing, diverse models without needing to train a new meta-model or change how the base models were trained.",
        diff: 1
    },
    {
        topic: "ai",
        quest: "In the context of model error decomposition, what are the three theoretical components of total error?",
        choices: [
            "Training Error, Test Error, and Validation Error",
            "Precision, Recall, and F1-Score",
            "Bias, Variance, and Irreducible Noise",
            "False Positives, False Negatives, and True Negatives"
        ],
        answer: "Bias, Variance, and Irreducible Noise",
        reason: "Total model error can be broken down into Bias (underfitting), Variance (overfitting), and Irreducible Error (inherent noise in the data).",
        diff: 2
    },
    {
        topic: "ai",
        quest: "What happens to the performance of a Random Forest as you increase the `n_estimators` parameter (number of trees)?",
        choices: [
            "The model will eventually overfit the training data severely.",
            "Performance generally improves and stabilizes; it will not cause overfitting just by adding more trees.",
            "The model's bias will linearly increase.",
            "The model will automatically switch from classification to regression."
        ],
        answer: "Performance generally improves and stabilizes; it will not cause overfitting just by adding more trees.",
        reason: "Unlike boosting, where adding too many trees can overfit, bagging methods like Random Forest simply average out predictions. More trees increase stability, though computational cost increases.",
        diff: 3
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
        console.log(`Successfully inserted ${result.insertedCount} questions for 4.4 Ensemble Methods!`);
    } catch (err) {
        console.error(err);
    } finally {
        await client.close();
    }
}

run();
