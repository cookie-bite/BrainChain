require('dotenv').config();
const { MongoClient } = require('mongodb');
const fs = require('fs');
const path = require('path');

const questions = [
    {
        topic: "ai",
        quest: "When choosing a chart to visualize data, what are the two most critical factors you must consider?",
        hasContent: false,
        choices: [
            "The color palette and the font size.",
            "The data types (categorical vs. continuous) and the specific statistical question you are trying to answer (e.g., distribution, trend, comparison).",
            "The size of the dataset and the processing power of the computer.",
            "Whether to use 2D or 3D graphics."
        ],
        correct: "The data types (categorical vs. continuous) and the specific statistical question you are trying to answer (e.g., distribution, trend, comparison)."
    },
    {
        topic: "ai",
        quest: "You want to understand the 'Distribution' of a single continuous variable (like user ages). Which group of charts is specifically designed for this?",
        hasContent: false,
        choices: [
            "Scatter plots and Line charts",
            "Pie charts and Stacked bar charts",
            "Histograms, Density (KDE) plots, Box plots, and Violin plots",
            "Heatmaps and Correlation matrices"
        ],
        correct: "Histograms, Density (KDE) plots, Box plots, and Violin plots"
    },
    {
        topic: "ai",
        quest: "A standard Box Plot is great for showing medians and quartiles. However, what critical aspect of a distribution can a Box Plot easily hide that a Violin Plot would clearly reveal?",
        hasContent: false,
        choices: [
            "The exact mean value.",
            "Bimodality; a box plot can look perfectly normal even if the underlying data has two massive distinct peaks (a bimodal distribution).",
            "The maximum outlier.",
            "The total number of data points."
        ],
        correct: "Bimodality; a box plot can look perfectly normal even if the underlying data has two massive distinct peaks (a bimodal distribution)."
    },
    {
        topic: "ai",
        quest: "Why is a Bar Chart showing only the 'Mean' of groups considered a poor choice for statistical comparison without additional elements?",
        hasContent: false,
        choices: [
            "Bar charts cannot display continuous numbers.",
            "It hides variability and uncertainty; without error bars or distribution shapes, you cannot tell if the difference between means is statistically meaningful or just noise.",
            "Bar charts take up too much space.",
            "Bar charts are only used for time-series data."
        ],
        correct: "It hides variability and uncertainty; without error bars or distribution shapes, you cannot tell if the difference between means is statistically meaningful or just noise."
    },
    {
        topic: "ai",
        quest: "When adding 'Error Bars' to a visualization, what is the most important rule for the analyst to follow to avoid misleading the audience?",
        hasContent: false,
        choices: [
            "Always make the error bars as small as possible.",
            "Explicitly state what the error bars represent (e.g., Standard Deviation, Standard Error, or 95% Confidence Interval) because they mean very different things.",
            "Only use error bars if the p-value is > 0.05.",
            "Make sure the error bars overlap to show statistical significance."
        ],
        correct: "Explicitly state what the error bars represent (e.g., Standard Deviation, Standard Error, or 95% Confidence Interval) because they mean very different things."
    },
    {
        topic: "ai",
        quest: "When plotting a linear regression trend line on a scatter plot, what does a 'Confidence Band' (the shaded region around the line) represent?",
        hasContent: false,
        choices: [
            "The exact area where 100% of the data points fall.",
            "The margin of error for the slope and intercept; it shows where the TRUE regression line is likely to fall given the uncertainty in the data.",
            "The standard deviation of the x-axis.",
            "A purely decorative element to make the line thicker."
        ],
        correct: "The margin of error for the slope and intercept; it shows where the TRUE regression line is likely to fall given the uncertainty in the data."
    },
    {
        topic: "ai",
        quest: "What is universally considered the most common and dangerous way that Bar Charts are intentionally designed to visually deceive an audience?",
        hasContent: false,
        choices: [
            "Using the color red.",
            "Truncating the Y-axis (starting it at a number other than zero), which wildly exaggerates tiny differences between the bars.",
            "Sorting the bars from tallest to shortest.",
            "Adding a legend."
        ],
        correct: "Truncating the Y-axis (starting it at a number other than zero), which wildly exaggerates tiny differences between the bars."
    },
    {
        topic: "ai",
        quest: "Why are Data Scientists generally taught to avoid Pie Charts (especially 3D ones) for comparing data?",
        hasContent: false,
        choices: [
            "They are computationally expensive to render.",
            "The human brain is terrible at accurately judging and comparing angles or 2D areas, making it hard to tell if a slice is 25% or 30%. Grouped Bar Charts are far superior.",
            "They can only display two categories.",
            "They cannot be generated in Python."
        ],
        correct: "The human brain is terrible at accurately judging and comparing angles or 2D areas, making it hard to tell if a slice is 25% or 30%. Grouped Bar Charts are far superior."
    },
    {
        topic: "ai",
        quest: "What is the primary danger of using a 'Dual Y-Axis' chart (plotting two different metrics on the same graph with different scales on the left and right)?",
        hasContent: false,
        choices: [
            "It requires color printers.",
            "It allows the chart creator to arbitrarily align the two axes to create the visual illusion of a massive correlation where none actually exists.",
            "It takes up twice as much memory.",
            "It prevents the use of legends."
        ],
        correct: "It allows the chart creator to arbitrarily align the two axes to create the visual illusion of a massive correlation where none actually exists."
    },
    {
        topic: "ai",
        quest: "You want to compare the relationship between 'Salary' and 'Experience' across 5 different departments. Instead of putting all 5 groups on one incredibly cluttered scatter plot, what visualization technique should you use?",
        hasContent: false,
        choices: [
            "A 3D scatter plot.",
            "Faceted Plots (Small Multiples); creating a separate, aligned mini-plot for each department using the exact same axes.",
            "A single pie chart.",
            "A dual y-axis line chart."
        ],
        correct: "Faceted Plots (Small Multiples); creating a separate, aligned mini-plot for each department using the exact same axes."
    },
    {
        topic: "ai",
        quest: "In Statistical Storytelling, raw charts are often not enough because they force the audience to hunt for the point. What simple addition instantly transforms a chart into a narrative?",
        hasContent: false,
        choices: [
            "More grid lines.",
            "Text Annotations directly on the chart (e.g., an arrow pointing to a dip saying 'Server Outage on June 4th').",
            "A 3D drop shadow.",
            "Making the lines thicker."
        ],
        correct: "Text Annotations directly on the chart (e.g., an arrow pointing to a dip saying 'Server Outage on June 4th')."
    },
    {
        topic: "ai",
        quest: "You are looking at a line chart of 'Monthly Revenue'. The trend looks like a catastrophic cliff diving straight down. However, you notice the X-axis only covers 'March 1st to March 3rd'. What misleading tactic is this?",
        hasContent: false,
        choices: [
            "Simpson's Paradox",
            "Cherry-Picked Time Ranges; framing a tiny, localized fluctuation without showing the long-term historical context.",
            "Multicollinearity",
            "A truncated Y-axis."
        ],
        correct: "Cherry-Picked Time Ranges; framing a tiny, localized fluctuation without showing the long-term historical context."
    },
    {
        topic: "ai",
        quest: "If you have a dataset with one Continuous Target Variable (e.g., 'House Price') and one Categorical Group Variable (e.g., 'Neighborhood'), which visualization is BEST to compare them?",
        hasContent: false,
        choices: [
            "Scatter Plot",
            "Box Plot or Violin Plot grouped by Neighborhood",
            "Line Chart",
            "Pie Chart"
        ],
        correct: "Box Plot or Violin Plot grouped by Neighborhood"
    },
    {
        topic: "ai",
        quest: "When using Seaborn's `sns.regplot` to plot a scatter plot with a regression line, the `ci=95` parameter automatically adds what to the chart?",
        hasContent: true,
        contentType: "code",
        codeLanguage: "python",
        content: "sns.regplot(x=x, y=y, ci=95)",
        choices: [
            "95 randomly selected data points.",
            "A 95% confidence band (shaded area) around the regression line.",
            "A cut-off line at the 95th percentile.",
            "A p-value of 0.95."
        ],
        correct: "A 95% confidence band (shaded area) around the regression line."
    },
    {
        topic: "ai",
        quest: "Which of the following breaks the core rule of 'Honest Visualization' regarding Line Charts vs Bar Charts?",
        hasContent: false,
        choices: [
            "Using blue for all bars.",
            "Truncating the Y-axis on a Bar Chart (which must start at 0 to show true volume). Truncating a Line Chart is sometimes acceptable to show slope changes.",
            "Putting time on the X-axis.",
            "Adding data labels."
        ],
        correct: "Truncating the Y-axis on a Bar Chart (which must start at 0 to show true volume). Truncating a Line Chart is sometimes acceptable to show slope changes."
    },
    {
        topic: "ai",
        quest: "In a corporate presentation, what is the best strategy if you MUST compare two completely differently scaled metrics over time (e.g., Total Revenue in millions vs. Conversion Rate in %)?",
        hasContent: false,
        choices: [
            "Use a Dual Y-Axis chart.",
            "Use two separate line charts stacked vertically (subplots) that share the same X-axis timeline.",
            "Multiply the percentages by 1,000,000 to make them fit on one axis.",
            "Use a Pie Chart."
        ],
        correct: "Use two separate line charts stacked vertically (subplots) that share the same X-axis timeline."
    },
    {
        topic: "ai",
        quest: "What statistical principle does a 'Violin Plot' combine?",
        hasContent: false,
        choices: [
            "A scatter plot and a line chart.",
            "A Box Plot (for medians and quartiles) and a Kernel Density Estimate (KDE) plot (for the full shape of the distribution).",
            "A pie chart and a bar chart.",
            "A heatmap and a histogram."
        ],
        correct: "A Box Plot (for medians and quartiles) and a Kernel Density Estimate (KDE) plot (for the full shape of the distribution)."
    },
    {
        topic: "ai",
        quest: "A good Data Narrative arc follows a specific structure. What is the typical sequence?",
        hasContent: false,
        choices: [
            "Conclusion -> Code -> Numbers -> Question",
            "Context -> Question -> Evidence (Charts) -> Interpretation -> Recommendation",
            "Charts -> More Charts -> Final Chart -> Code",
            "Recommendation -> Context -> Evidence -> Question"
        ],
        correct: "Context -> Question -> Evidence (Charts) -> Interpretation -> Recommendation"
    },
    {
        topic: "ai",
        quest: "What does 'Minimizing Ink' mean in the context of chart design?",
        hasContent: false,
        choices: [
            "Printing charts in grayscale.",
            "Removing heavy grid lines, 3D borders, background colors, and unnecessary decorations that do not encode actual data, thereby maximizing the 'data-to-ink ratio'.",
            "Using very thin lines for your data.",
            "Deleting outliers so you draw less points."
        ],
        correct: "Removing heavy grid lines, 3D borders, background colors, and unnecessary decorations that do not encode actual data, thereby maximizing the 'data-to-ink ratio'."
    },
    {
        topic: "ai",
        quest: "If you want to visualize the relationship (correlation) between TWO Continuous variables, what is the single best chart type?",
        hasContent: false,
        choices: [
            "Grouped Bar Chart",
            "Scatter Plot (or Hexbin plot for massive datasets)",
            "Violin Plot",
            "Pie Chart"
        ],
        correct: "Scatter Plot (or Hexbin plot for massive datasets)"
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
        console.log(`Successfully inserted ${result.insertedCount} questions for '3.9 Visualization'`);
        
        // Delete the processed file
        const targetFile = path.join(__dirname, '..', 'materials', '3.9 Visualization for Statistical CommunicationUnit.._.md');
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
