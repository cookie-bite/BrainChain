const aiQuestions = [
    {
        hasContent: false,
        quest: "What are the two primary data structures used in the pandas library?",
        choices: ["List and Dictionary", "Array and Matrix", "Series and DataFrame", "Vector and Scalar"],
        correct: "Series and DataFrame"
    },
    {
        hasContent: false,
        quest: "Which of the following best describes a pandas Series?",
        choices: ["A two-dimensional table of data", "A mathematical formula", "A one-dimensional array-like object containing a sequence of values and an associated array of data labels", "A file format for storing large datasets"],
        correct: "A one-dimensional array-like object containing a sequence of values and an associated array of data labels"
    },
    {
        hasContent: false,
        quest: "Which of the following best describes a pandas DataFrame?",
        choices: ["A 1D labeled array", "A rectangular table of data containing an ordered collection of columns, each of which can be a different value type", "An unstructured text document", "A database connection object"],
        correct: "A rectangular table of data containing an ordered collection of columns, each of which can be a different value type"
    },
    {
        hasContent: true,
        quest: "Which pandas function is commonly used to load tabular data from a comma-separated values file into a DataFrame?",
        content: "df = pd.____('data.csv')",
        contentType: "code",
        codeLanguage: "python",
        choices: ["load_csv", "read_csv", "import_csv", "open_csv"],
        correct: "read_csv"
    },
    {
        hasContent: true,
        quest: "How do you select a single column named 'population' from a DataFrame 'df', which returns a Series?",
        content: "pop = df[____]",
        contentType: "code",
        codeLanguage: "python",
        choices: ["0", "'population'", "population", "df.population"],
        correct: "'population'"
    },
    {
        hasContent: false,
        quest: "What is the primary difference between the 'loc' and 'iloc' indexers in pandas?",
        choices: ["'loc' is used for Series, while 'iloc' is used for DataFrames", "'loc' is integer position-based, while 'iloc' is label-based", "'loc' is label-based, while 'iloc' is integer position-based", "They are identical and can be used interchangeably"],
        correct: "'loc' is label-based, while 'iloc' is integer position-based"
    },
    {
        hasContent: true,
        quest: "Which method would you call on a DataFrame to quickly inspect the first 5 rows of data?",
        content: "df.____()",
        contentType: "code",
        codeLanguage: "python",
        choices: ["head", "first", "start", "top"],
        correct: "head"
    },
    {
        hasContent: false,
        quest: "Which method prints a concise summary of a DataFrame, including the column names, non-null counts, and data types?",
        choices: ["df.summary()", "df.describe()", "df.info()", "df.stats()"],
        correct: "df.info()"
    },
    {
        hasContent: false,
        quest: "Which method generates descriptive statistics (count, mean, standard deviation, min, max, etc.) for numerical columns in a DataFrame?",
        choices: ["df.summary()", "df.describe()", "df.info()", "df.stats()"],
        correct: "df.describe()"
    },
    {
        hasContent: true,
        quest: "How do you filter a DataFrame 'df' to keep only the rows where the 'age' column is greater than 30?",
        content: "filtered_df = ____",
        contentType: "code",
        codeLanguage: "python",
        choices: ["df[df['age'] > 30]", "df.filter('age' > 30)", "df.where(age > 30)", "df.loc['age'] > 30"],
        correct: "df[df['age'] > 30]"
    },
    {
        hasContent: true,
        quest: "Which method is used to move an existing column to become the index of the DataFrame?",
        content: "df = df.____('date')",
        contentType: "code",
        codeLanguage: "python",
        choices: ["make_index", "set_index", "reindex", "to_index"],
        correct: "set_index"
    },
    {
        hasContent: true,
        quest: "Which method moves the current index back into the DataFrame as a regular column and creates a new default integer index?",
        content: "df = df.____()",
        contentType: "code",
        codeLanguage: "python",
        choices: ["remove_index", "clear_index", "reset_index", "delete_index"],
        correct: "reset_index"
    },
    {
        hasContent: true,
        quest: "How can you remove a column named 'temp' from a DataFrame?",
        content: "df = df.____('temp', axis=1)",
        contentType: "code",
        codeLanguage: "python",
        choices: ["delete", "remove", "drop", "pop"],
        correct: "drop"
    },
    {
        hasContent: false,
        quest: "Which method is used to remove rows (or columns) that contain missing values (NaN)?",
        choices: ["df.remove_na()", "df.drop_missing()", "df.dropna()", "df.clear_nan()"],
        correct: "df.dropna()"
    },
    {
        hasContent: true,
        quest: "Which method is used to fill in missing values with a specific value, such as 0?",
        content: "df = df.____(0)",
        contentType: "code",
        codeLanguage: "python",
        choices: ["fill_na", "fillna", "replace_na", "impute"],
        correct: "fillna"
    },
    {
        hasContent: true,
        quest: "How do you rename a column 'old_name' to 'new_name' in a DataFrame?",
        content: "df = df.____(columns={'old_name': 'new_name'})",
        contentType: "code",
        codeLanguage: "python",
        choices: ["change", "rename", "replace", "map"],
        correct: "rename"
    },
    {
        hasContent: true,
        quest: "Which method returns an array of the distinct, non-repeating values in a pandas Series?",
        content: "distinct_values = df['category'].____()",
        contentType: "code",
        codeLanguage: "python",
        choices: ["distinct", "unique", "levels", "keys"],
        correct: "unique"
    },
    {
        hasContent: true,
        quest: "Which method returns a Series containing counts of unique values in descending order?",
        content: "counts = df['category'].____()",
        contentType: "code",
        codeLanguage: "python",
        choices: ["value_counts", "count_unique", "frequency", "groupby_count"],
        correct: "value_counts"
    },
    {
        hasContent: true,
        quest: "How do you sort a DataFrame ascendingly based on the values in the 'price' column?",
        content: "df_sorted = df.____('price')",
        contentType: "code",
        codeLanguage: "python",
        choices: ["sort", "order_by", "sort_values", "arrange"],
        correct: "sort_values"
    },
    {
        hasContent: true,
        quest: "Which method allows you to invoke a custom Python function on each value of a Series?",
        content: "df['formatted'] = df['raw_text'].____(str.lower)",
        contentType: "code",
        codeLanguage: "python",
        choices: ["map", "apply", "execute", "invoke"],
        correct: "apply"
    },
    {
        hasContent: true,
        quest: "How do you create a new column 'total' by adding two existing columns 'subtotal' and 'tax'?",
        content: "df['total'] = ____",
        contentType: "code",
        codeLanguage: "python",
        choices: ["df.subtotal + df.tax", "df['subtotal'] + df['tax']", "df.add('subtotal', 'tax')", "Both A and B are valid"],
        correct: "Both A and B are valid"
    },
    {
        hasContent: true,
        quest: "Which attribute returns a tuple representing the dimensionality (rows, columns) of the DataFrame?",
        content: "rows, cols = df.____",
        contentType: "code",
        codeLanguage: "python",
        choices: ["size", "dimensions", "shape", "bounds"],
        correct: "shape"
    },
    {
        hasContent: false,
        quest: "Which pandas method is used to return a boolean same-sized object indicating if the values are NA/NaN?",
        choices: ["df.isna()", "df.isempty()", "df.has_null()", "df.check_na()"],
        correct: "df.isna()"
    },
    {
        hasContent: true,
        quest: "Which attribute is used to swap the rows and columns (transpose) of a DataFrame?",
        content: "transposed_df = df.____",
        contentType: "code",
        codeLanguage: "python",
        choices: ["swap", "T", "inverse", "flip"],
        correct: "T"
    },
    {
        hasContent: true,
        quest: "How can you extract the underlying NumPy array representation of a pandas DataFrame?",
        content: "numpy_array = df.____()",
        contentType: "code",
        codeLanguage: "python",
        choices: ["to_ndarray", "extract_array", "to_numpy", "get_values"],
        correct: "to_numpy"
    }
];

module.exports = aiQuestions;
