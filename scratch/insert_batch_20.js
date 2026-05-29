require('dotenv').config();
const { MongoClient } = require('mongodb');

const questions = [
    {
        topic: "ai",
        quest: "What is the primary difference between Binary Classification and Multiclass Classification?",
        choices: [
            "Binary classification maps input to continuous numbers; multiclass outputs discrete labels.",
            "Binary classification sorts data into two distinct classes, while multiclass handles three or more classes.",
            "Binary classification uses decision trees, while multiclass requires neural networks.",
            "Binary classification uses scaled data, while multiclass only works on raw data."
        ],
        answer: "Binary classification sorts data into two distinct classes, while multiclass handles three or more classes.",
        reason: "Binary classification deals with exactly two categories (e.g., spam or not spam). Multiclass deals with any problem containing more than two distinct categories (e.g., penguin species).",
        diff: 1
    },
    {
        topic: "ai",
        quest: "Despite having 'Regression' in its name, Logistic Regression is actually used for classification. What mathematical function does it use to convert outputs into probabilities?",
        choices: [
            "The Step Function",
            "The Sigmoid Function",
            "The Softmax Function",
            "The Kernel Trick"
        ],
        answer: "The Sigmoid Function",
        reason: "Logistic Regression applies the sigmoid function, which squishes any real-valued number into a strict range between 0 and 1, making it perfect for outputting probabilities.",
        diff: 1
    },
    {
        topic: "ai",
        quest: "What is the 'Decision Boundary' in a Logistic Regression model?",
        choices: [
            "The threshold (typically 0.5 probability) where the model's prediction shifts from one class to another.",
            "The mathematical limit where the cost function reaches zero.",
            "The maximum depth a Decision Tree is allowed to reach.",
            "The perimeter of the epsilon-tube in SVM."
        ],
        answer: "The threshold (typically 0.5 probability) where the model's prediction shifts from one class to another.",
        reason: "The decision boundary separates the feature space. If the model outputs a probability above 0.5, it falls on one side of the boundary (e.g., Class 1); below 0.5, the other side (Class 0).",
        diff: 2
    },
    {
        topic: "ai",
        quest: "The Naive Bayes classifier is described as 'naive' because it makes a very strong, often unrealistic assumption. What is this assumption?",
        choices: [
            "It assumes all data points are normally distributed.",
            "It assumes all features are conditionally independent of each other given the class.",
            "It assumes there are no outliers in the training dataset.",
            "It assumes the dataset is perfectly balanced across all classes."
        ],
        answer: "It assumes all features are conditionally independent of each other given the class.",
        reason: "Naive Bayes assumes that the presence of one feature does not affect the probability of another feature occurring, which is rarely true in the real world (hence 'naive').",
        diff: 2
    },
    {
        topic: "ai",
        quest: "Which variant of Naive Bayes is typically the best choice for text classification when dealing with word counts?",
        choices: [
            "GaussianNB",
            "MultinomialNB",
            "BernoulliNB",
            "CategoricalNB"
        ],
        answer: "MultinomialNB",
        reason: "Multinomial Naive Bayes is specifically designed to handle multinomially distributed data, which is ideal for discrete counts like word frequencies in document classification.",
        diff: 2
    },
    {
        topic: "ai",
        quest: "In the context of Support Vector Machines (SVM), what is the 'Maximum Margin'?",
        choices: [
            "The maximum number of features the model can handle without crashing.",
            "The widest possible distance between the decision boundary and the nearest data points of any class.",
            "The highest accuracy the model can achieve on the validation set.",
            "The acceptable error rate defined by the epsilon parameter."
        ],
        answer: "The widest possible distance between the decision boundary and the nearest data points of any class.",
        reason: "SVM searches for the hyperplane that strictly separates classes while maximizing the gap (margin) between the support vectors of each class.",
        diff: 2
    },
    {
        topic: "ai",
        quest: "How does the 'C parameter' in an SVM classifier affect the model's behavior?",
        choices: [
            "A high C creates a wider margin with more misclassifications allowed.",
            "A high C creates a narrower margin and heavily penalizes misclassifications, potentially leading to overfitting.",
            "A high C increases the dimensionality of the kernel trick.",
            "The C parameter only applies to Support Vector Regression, not Classification."
        ],
        answer: "A high C creates a narrower margin and heavily penalizes misclassifications, potentially leading to overfitting.",
        reason: "The C parameter dictates the trade-off. High C means 'strict classification'—the model will try to classify all training points correctly, resulting in a narrow margin.",
        diff: 3
    },
    {
        topic: "ai",
        quest: "Decision Trees determine the best feature to split the data by evaluating node purity. Which two mathematical criteria are most commonly used for this?",
        choices: [
            "Mean Squared Error and Mean Absolute Error",
            "Gini Impurity and Entropy (Information Gain)",
            "Precision and Recall",
            "Sigmoid and ReLU"
        ],
        answer: "Gini Impurity and Entropy (Information Gain)",
        reason: "Decision trees calculate the Gini Impurity or Entropy before and after a split to maximize the purity of the resulting child nodes.",
        diff: 2
    },
    {
        topic: "ai",
        quest: "What is a major vulnerability of an unpruned Decision Tree?",
        choices: [
            "It requires massive amounts of computational power to make predictions.",
            "It tends to grow too deep and memorize the training data, leading to severe overfitting.",
            "It cannot handle categorical features.",
            "It always underfits due to a lack of complexity."
        ],
        answer: "It tends to grow too deep and memorize the training data, leading to severe overfitting.",
        reason: "Without constraints (pruning), a decision tree will continue splitting until every leaf has exactly one sample, perfectly learning the noise of the training data.",
        diff: 1
    },
    {
        topic: "ai",
        quest: "Random Forests rely on a concept called 'Bootstrap sampling'. What does this mean?",
        choices: [
            "Features are standardized automatically before training.",
            "Each tree in the forest is trained on a random sample of the training data drawn with replacement.",
            "The model restarts the training process if accuracy drops below a threshold.",
            "The algorithm iteratively adjusts weights based on previously misclassified samples."
        ],
        answer: "Each tree in the forest is trained on a random sample of the training data drawn with replacement.",
        reason: "Bootstrapping involves sampling random subsets of the dataset (allowing duplicates) to introduce diversity into the training of each individual decision tree.",
        diff: 3
    },
    {
        topic: "ai",
        quest: "When analyzing a Confusion Matrix for a medical test predicting a rare disease, what does a 'False Negative' represent?",
        choices: [
            "A healthy patient correctly identified as healthy.",
            "A sick patient incorrectly identified as healthy.",
            "A healthy patient incorrectly identified as sick.",
            "A sick patient correctly identified as sick."
        ],
        answer: "A sick patient incorrectly identified as healthy.",
        reason: "A False Negative means the model predicted 'Negative' (healthy), but the reality was 'Positive' (sick). This is usually the most dangerous error in medical diagnostics.",
        diff: 2
    },
    {
        topic: "ai",
        quest: "Why can pure 'Accuracy' be a highly misleading metric for classification tasks with imbalanced datasets?",
        choices: [
            "Because accuracy cannot be calculated for multiclass problems.",
            "Because a model can achieve very high accuracy by simply predicting the majority class every time, ignoring the minority class entirely.",
            "Because accuracy ignores True Positives.",
            "Because accuracy is easily distorted by feature scaling."
        ],
        answer: "Because a model can achieve very high accuracy by simply predicting the majority class every time, ignoring the minority class entirely.",
        reason: "If 99% of emails are normal and 1% is spam, a model that just labels everything 'normal' is 99% accurate, but utterly useless at its actual job.",
        diff: 2
    },
    {
        topic: "ai",
        quest: "Which evaluation metric specifically answers the question: 'Of all the positive predictions made by the model, how many were actually correct?'",
        choices: [
            "Recall (Sensitivity)",
            "Precision",
            "Accuracy",
            "F1-Score"
        ],
        answer: "Precision",
        reason: "Precision measures the quality of positive predictions. It is calculated as True Positives divided by the sum of True Positives and False Positives.",
        diff: 2
    },
    {
        topic: "ai",
        quest: "The F1-Score is particularly useful when you need to balance Precision and Recall. Mathematically, how is it calculated?",
        choices: [
            "It is the arithmetic mean of Precision and Recall.",
            "It is the harmonic mean of Precision and Recall.",
            "It is the sum of Precision and Recall divided by Accuracy.",
            "It is the product of True Positives and True Negatives."
        ],
        answer: "It is the harmonic mean of Precision and Recall.",
        reason: "The F1-score formula (2 * (Precision * Recall) / (Precision + Recall)) is the harmonic mean, which heavily penalizes extreme imbalances between the two metrics.",
        diff: 3
    },
    {
        topic: "ai",
        quest: "What does an Area Under the Curve (AUC) score of 0.5 indicate on an ROC Curve?",
        choices: [
            "The classifier has achieved perfect separation between classes.",
            "The classifier is performing no better than random guessing.",
            "The classifier is perfectly predicting the minority class but failing the majority class.",
            "The data must be normalized before the model can be evaluated."
        ],
        answer: "The classifier is performing no better than random guessing.",
        reason: "An AUC of 0.5 means the ROC curve follows the 45-degree diagonal line, indicating that the model has no discriminative capacity to distinguish between positive and negative classes.",
        diff: 2
    },
    {
        topic: "ai",
        quest: "In scikit-learn, what is the purpose of the `LabelEncoder` class?",
        choices: [
            "To scale numerical features to a range of 0 to 1.",
            "To handle missing data by imputing the median value.",
            "To convert categorical text labels (like 'Spam' or 'Not Spam') into integers.",
            "To automatically split the dataset into training and testing sets."
        ],
        answer: "To convert categorical text labels (like 'Spam' or 'Not Spam') into integers.",
        reason: "Machine learning models require numerical inputs. LabelEncoder maps string labels to integers (e.g., [0, 1, 2]) so the algorithms can process the target variable.",
        diff: 1
    },
    {
        topic: "ai",
        quest: "When using `pd.get_dummies()` to one-hot encode categorical features, why is the `drop_first=True` parameter commonly used?",
        choices: [
            "To remove the first column of the dataset for memory optimization.",
            "To avoid the dummy variable trap (perfect multicollinearity) by removing one redundant category.",
            "To drop rows containing NaN values automatically.",
            "To ensure the target variable is not encoded by mistake."
        ],
        answer: "To avoid the dummy variable trap (perfect multicollinearity) by removing one redundant category.",
        reason: "If a feature has three categories (A, B, C), you only need two columns to represent it. If both are 0, it implicitly means category C. Keeping all three creates collinearity issues for models like Logistic Regression.",
        diff: 3
    },
    {
        topic: "ai",
        quest: "How does a Random Forest classifier make its final prediction for a given data point?",
        choices: [
            "It selects the prediction of the tree that had the highest training accuracy.",
            "It averages the predicted probabilities from all trees, or takes a majority vote across all trees.",
            "It passes the outputs of all trees into a secondary Logistic Regression model.",
            "It strictly relies on the decision boundary of the first tree built."
        ],
        answer: "It averages the predicted probabilities from all trees, or takes a majority vote across all trees.",
        reason: "Random Forest is an ensemble method. Each tree gets one 'vote' on the class, and the forest outputs the class that receives the majority vote.",
        diff: 2
    },
    {
        topic: "ai",
        quest: "Which feature scaling technique is generally NOT required when training a standard Decision Tree or Random Forest?",
        choices: [
            "StandardScaler",
            "Label Encoding",
            "One-Hot Encoding",
            "Handling missing values"
        ],
        answer: "StandardScaler",
        reason: "Tree-based models find split points based on value thresholds (e.g., weight > 50). They are scale-invariant, meaning scaling or normalizing numeric features doesn't change the structural splits of the tree.",
        diff: 2
    },
    {
        topic: "ai",
        quest: "In Support Vector Machines, what is the role of the 'rbf' kernel?",
        choices: [
            "To strictly draw a linear boundary between groups.",
            "To apply Random Bootstrap Filtering for ensemble processing.",
            "To implicitly map data into a higher (potentially infinite) dimensional space to find non-linear decision boundaries.",
            "To speed up the calculation of the confusion matrix."
        ],
        answer: "To implicitly map data into a higher (potentially infinite) dimensional space to find non-linear decision boundaries.",
        reason: "The Radial Basis Function (RBF) kernel calculates similarity in a transformed higher-dimensional space, allowing SVM to separate classes that are wrapped around each other or non-linearly distributed.",
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
        console.log(`Successfully inserted ${result.insertedCount} questions for 4.3 Classification!`);
    } catch (err) {
        console.error(err);
    } finally {
        await client.close();
    }
}

run();
