require('dotenv').config();
const { MongoClient } = require('mongodb');

const questions = [
    // File 1
    { topic: "technology", quest: "Data analysis begins long before what stage?", choices: ["Modeling or visualization", "Data extraction", "Database administration", "Server deployment"], correct: "Modeling or visualization" },
    { topic: "technology", quest: "What is the most time-consuming part of the data workflow?", choices: ["Model training", "Getting data into the right shape", "Plotting", "Writing reports"], correct: "Getting data into the right shape" },
    { topic: "technology", quest: "Which pandas function is the workhorse for reading CSV files?", choices: ["load_csv", "read_csv", "import_csv", "fetch_csv"], correct: "read_csv" },
    { topic: "technology", quest: "What method shows the first few rows to confirm the data looks reasonable?", choices: ["top()", "head()", "first()", "preview()"], correct: "head()" },
    { topic: "technology", quest: "How can you specify a custom delimiter in read_csv?", choices: ["delimiter=\"\\t\"", "sep=\"\\t\"", "split=\"\\t\"", "delim=\"\\t\""], correct: "sep=\"\\t\"" },
    { topic: "technology", quest: "If a file has no header row, what parameter should you use in read_csv?", choices: ["header=None", "no_header=True", "head=False", "columns=None"], correct: "header=None" },
    { topic: "technology", quest: "How does pandas represent missing values by default?", choices: ["NULL", "None", "NaN", "NA"], correct: "NaN" },
    { topic: "technology", quest: "What happens if you don't parse dates during load?", choices: ["They are dropped", "They are stored as strings", "They become integers", "They crash the program"], correct: "They are stored as strings" },
    { topic: "technology", quest: "Which parameter in read_csv allows you to parse dates automatically?", choices: ["parse_dates", "load_dates", "read_dates", "dates"], correct: "parse_dates" },
    { topic: "technology", quest: "How do you tell pandas to treat \"NA\" and \"-\" as missing values?", choices: ["missing_values=[\"NA\", \"-\"]", "null_values=[\"NA\", \"-\"]", "na_values=[\"NA\", \"-\"]", "ignore=[\"NA\", \"-\"]"], correct: "na_values=[\"NA\", \"-\"]" },
    { topic: "technology", quest: "Which pandas method tells you the number of non-null values per column?", choices: ["details()", "describe()", "info()", "dtypes()"], correct: "info()" },
    { topic: "technology", quest: "If a numeric column is read as an object type, what does it usually mean?", choices: ["The numbers are too large", "There are non-numeric values", "The column is a primary key", "The column is sorted"], correct: "There are non-numeric values" },
    { topic: "technology", quest: "Which function reads line-delimited JSON?", choices: ["read_json(lines=True)", "load_json(lines=True)", "parse_json(lines=True)", "json_read(lines=True)"], correct: "read_json(lines=True)" },
    { topic: "technology", quest: "What does json_normalize do?", choices: ["It converts JSON to CSV", "It flattens nested structures into columns", "It minifies JSON", "It validates JSON format"], correct: "It flattens nested structures into columns" },
    { topic: "technology", quest: "What argument prevents the index from becoming an extra column when saving to CSV?", choices: ["index=False", "drop_index=True", "ignore_index=True", "no_index=True"], correct: "index=False" },
    { topic: "technology", quest: "Which file format preserves data types and is more efficient for large data?", choices: ["JSON", "CSV", "Parquet", "TSV"], correct: "Parquet" },
    { topic: "technology", quest: "What does df.isna().sum() do?", choices: ["Sums all numerical columns", "Counts missing values by column", "Drops missing values", "Fills missing values"], correct: "Counts missing values by column" },
    { topic: "technology", quest: "Which pandas method drops rows with missing values?", choices: ["dropna()", "clear_null()", "drop_null()", "filter_na()"], correct: "dropna()" },
    { topic: "technology", quest: "Which parameter turns invalid entries into NaN in pd.to_numeric?", choices: ["errors=\"ignore\"", "errors=\"coerce\"", "errors=\"drop\"", "errors=\"nan\""], correct: "errors=\"coerce\"" },
    { topic: "technology", quest: "Which method finds duplicate rows in a DataFrame?", choices: ["duplicates()", "duplicated()", "is_duplicate()", "find_duplicates()"], correct: "duplicated()" },

    // File 2
    { topic: "technology", quest: "By what does pandas align data primarily?", choices: ["Index and column labels", "Row numbers", "Memory addresses", "Insertion order"], correct: "Index and column labels" },
    { topic: "technology", quest: "What does pd.concat do by default?", choices: ["Joins data side by side", "Stacks objects along a given axis", "Merges by key", "Multiplies DataFrames"], correct: "Stacks objects along a given axis" },
    { topic: "technology", quest: "Which argument in pd.concat resets the index to get a continuous range?", choices: ["reset_index=True", "ignore_index=True", "drop_index=True", "new_index=True"], correct: "ignore_index=True" },
    { topic: "technology", quest: "How can you preserve source identity when concatenating DataFrames?", choices: ["Use the names parameter", "Use the keys parameter", "Use the labels parameter", "Use the sources parameter"], correct: "Use the keys parameter" },
    { topic: "technology", quest: "Which operation aligns DataFrames based on index position when axis=1?", choices: ["pd.merge", "pd.concat", "pd.join", "pd.append"], correct: "pd.concat" },
    { topic: "technology", quest: "What is the mental model for pd.merge?", choices: ["Matrix multiplication", "Relational, matching rows based on key values", "Stacking vertically", "Reshaping Wide to Long"], correct: "Relational, matching rows based on key values" },
    { topic: "technology", quest: "What does how=\"left\" do in pd.merge?", choices: ["Keeps all keys from both tables", "Keeps only matching keys", "Preserves all rows from the left DataFrame", "Reverses the columns"], correct: "Preserves all rows from the left DataFrame" },
    { topic: "technology", quest: "What does how=\"inner\" do in pd.merge?", choices: ["Keeps all keys from both tables", "Keeps only matching keys", "Drops the index", "Appends rows"], correct: "Keeps only matching keys" },
    { topic: "technology", quest: "Which pandas function converts a wide DataFrame to a long format?", choices: ["pivot()", "stack()", "melt()", "unstack()"], correct: "melt()" },
    { topic: "technology", quest: "What does the id_vars argument in melt specify?", choices: ["The values to unpivot", "The columns that are identifiers", "The name of the new value column", "The data types"], correct: "The columns that are identifiers" },
    { topic: "technology", quest: "Which pandas function converts a long DataFrame back to a wide format?", choices: ["pivot()", "unpivot()", "melt()", "stack()"], correct: "pivot()" },
    { topic: "technology", quest: "What function is required if there are multiple values for the same index/column combination when pivoting?", choices: ["pivot()", "pivot_table()", "melt()", "group_pivot()"], correct: "pivot_table()" },
    { topic: "technology", quest: "What is the mental model of the groupby operation?", choices: ["Split-Apply-Combine", "Map-Reduce", "Filter-Transform", "Extract-Transform-Load"], correct: "Split-Apply-Combine" },
    { topic: "technology", quest: "Which method applies different aggregation functions to multiple columns?", choices: ["agg()", "apply()", "transform()", "map()"], correct: "agg()" },
    { topic: "technology", quest: "What type of index does grouping by multiple keys produce?", choices: ["LinearIndex", "MultiIndex", "NestedIndex", "HashIndex"], correct: "MultiIndex" },
    { topic: "technology", quest: "How can you move one level of a MultiIndex into columns?", choices: ["unstack()", "flatten()", "expand()", "melt()"], correct: "unstack()" },
    { topic: "technology", quest: "What method adds group-level summaries back to the original data, preserving row count?", choices: ["apply()", "agg()", "transform()", "map()"], correct: "transform()" },
    { topic: "technology", quest: "What is the difference between agg and transform?", choices: ["agg is faster", "agg reduces data to one row per group, transform preserves original index", "transform is for numeric data only", "agg only works on Series"], correct: "agg reduces data to one row per group, transform preserves original index" },
    { topic: "technology", quest: "Which function would you use to get the mean sales per city and month?", choices: ["df.pivot_table()", "df.melt()", "df.concat()", "df.join()"], correct: "df.pivot_table()" },
    { topic: "technology", quest: "Why might you use reset_index() after a groupby?", choices: ["To delete the index", "To merge results back or for plotting", "To sort the data", "To change data types"], correct: "To merge results back or for plotting" },

    // File 3
    { topic: "technology", quest: "Which plot type is best for showing trends over time?", choices: ["Bar chart", "Scatter plot", "Line plot", "Histogram"], correct: "Line plot" },
    { topic: "technology", quest: "What does pandas naturally provide if your DataFrame is indexed by a DateTimeIndex?", choices: ["A 3D plot", "A time-aware plot", "A categorical axis", "An animated chart"], correct: "A time-aware plot" },
    { topic: "technology", quest: "Which feature of pandas allows slicing time series by date strings like \"2024-01-03\"?", choices: ["Label-based time slicing", "String searching", "Regex matching", "Index filtering"], correct: "Label-based time slicing" },
    { topic: "technology", quest: "What operation changes the frequency of a time series in pandas?", choices: ["reindex()", "resample()", "reshape()", "reformat()"], correct: "resample()" },
    { topic: "technology", quest: "How does resampling behave conceptually in pandas?", choices: ["It is a map operation", "It is groupby for time", "It is a pivot operation", "It is a sorting algorithm"], correct: "It is groupby for time" },
    { topic: "technology", quest: "What method forward-fills values when upsampling a time series?", choices: ["ffill()", "fillna()", "bfill()", "interpolate()"], correct: "ffill()" },
    { topic: "technology", quest: "What operation lets you compute statistics over a moving window?", choices: ["resample()", "rolling()", "expanding()", "ewm()"], correct: "rolling()" },
    { topic: "technology", quest: "Why might the first few values of a rolling mean be missing?", choices: ["Because of daylight saving time", "Because there are not enough points to fill the window", "Because the data is corrupted", "Because pandas skips them by default"], correct: "Because there are not enough points to fill the window" },
    { topic: "technology", quest: "Which method sets the time zone for naive timestamps?", choices: ["tz_convert()", "tz_localize()", "tz_set()", "tz_assign()"], correct: "tz_localize()" },
    { topic: "technology", quest: "Which method changes the representation of a timestamp to a different zone?", choices: ["tz_convert()", "tz_localize()", "tz_shift()", "tz_rebase()"], correct: "tz_convert()" },
    { topic: "technology", quest: "What is the main benefit of the Categorical dtype in pandas?", choices: ["It encrypts the data", "It is more memory-efficient and allows explicit category ordering", "It automatically cleans strings", "It converts text to integers"], correct: "It is more memory-efficient and allows explicit category ordering" },
    { topic: "technology", quest: "How do you access vectorized string methods in pandas?", choices: ["Through .str", "Through .string", "Through .text", "Through .char"], correct: "Through .str" },
    { topic: "technology", quest: "Which method is used for elementwise transforms on a Series?", choices: ["apply()", "map()", "transform()", "assign()"], correct: "map()" },
    { topic: "technology", quest: "Which method is used for row- or column-wise transforms on a DataFrame?", choices: ["apply()", "map()", "agg()", "reduce()"], correct: "apply()" },
    { topic: "technology", quest: "What structure does pandas often return after grouping by multiple keys?", choices: ["Dict", "MultiIndex", "Tuple", "List"], correct: "MultiIndex" },
    { topic: "technology", quest: "How can you access a specific level in a MultiIndex DataFrame?", choices: ["Using .loc with a tuple of keys", "Using .iloc with string keys", "Using array indexing", "Using a dictionary lookup"], correct: "Using .loc with a tuple of keys" },
    { topic: "technology", quest: "What library handles numerical computation and matrix operations in the modeling workflow?", choices: ["pandas", "matplotlib", "NumPy", "seaborn"], correct: "NumPy" },
    { topic: "technology", quest: "Which function in NumPy can solve for coefficients in a linear model?", choices: ["np.solve", "np.linalg.lstsq", "np.dot", "np.matmul"], correct: "np.linalg.lstsq" },
    { topic: "technology", quest: "How do you compute the residuals of a model prediction?", choices: ["y / pred", "y + pred", "y - pred", "pred * y"], correct: "y - pred" },
    { topic: "technology", quest: "Why is visualization considered a thinking tool rather than just for presentation?", choices: ["It makes code run faster", "It helps see patterns and outliers invisible in tables", "It uses less memory", "It generates automatic insights"], correct: "It helps see patterns and outliers invisible in tables" },
    { topic: "technology", quest: "What happens when you apply .str.strip().str.title() to a column?", choices: ["Removes punctuation and sorts alphabetically", "Removes whitespace and standardizes capitalization", "Replaces spaces with underscores", "Converts to uppercase"], correct: "Removes whitespace and standardizes capitalization" }
];

async function updateQuestions() {
    console.log("Connecting to:", process.env.DB_CONNECT);
    const client = new MongoClient(process.env.DB_CONNECT);
    try {
        await client.connect();
        const db = client.db('brch');
        
        const quests = questions.map(q => q.quest);
        const result = await db.collection('questions').updateMany(
            { quest: { $in: quests } },
            { $set: { topic: "ai" } }
        );
        
        console.log(`Updated ${result.modifiedCount} questions to topic 'ai' successfully!`);
    } catch (err) {
        console.error("Error updating questions:", err);
    } finally {
        await client.close();
    }
}

updateQuestions();
