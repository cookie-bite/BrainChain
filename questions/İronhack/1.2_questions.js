const questions_1_2 = [
    // === LISTS ===
    {
        hasContent: false,
        quest: "Which of the following best describes a Python list?",
        choices: ["Immutable sequence of unique elements", "Ordered, mutable sequence", "Unordered collection of key-value pairs", "Fixed-size numeric array"],
        correct: "Ordered, mutable sequence"
    },
    {
        hasContent: true,
        quest: "What will be the value of 'temps_c' after running this code?",
        content: "temps_c = [21.1, 22.4, 20.8]\ntemps_c.append(19.5)\ntemps_c",
        contentType: "code",
        codeLanguage: "python",
        choices: ["[21.1, 22.4, 20.8]", "[19.5, 21.1, 22.4, 20.8]", "[21.1, 22.4, 20.8, 19.5]", "Error"],
        correct: "[21.1, 22.4, 20.8, 19.5]"
    },
    {
        hasContent: true,
        quest: "What does slicing return in Python?",
        content: "weekdays = temps_c[:5]",
        contentType: "code",
        codeLanguage: "python",
        choices: ["A view into the original list", "A new independent list", "A tuple of the first 5 elements", "A generator object"],
        correct: "A new independent list"
    },
    {
        hasContent: true,
        quest: "What is the output of this list comprehension?",
        content: "high = [t for t in [21.1, 22.4, 20.8, 23.0] if t >= 22.0]\nhigh",
        contentType: "code",
        codeLanguage: "python",
        choices: ["[21.1, 20.8]", "[22.4, 23.0]", "[22.4, 20.8, 23.0]", "[True, True]"],
        correct: "[22.4, 23.0]"
    },

    // === TUPLES ===
    {
        hasContent: false,
        quest: "What is the key difference between a tuple and a list in Python?",
        choices: ["Tuples are faster but unordered", "Tuples are immutable, lists are mutable", "Tuples can only hold strings", "Lists cannot be indexed"],
        correct: "Tuples are immutable, lists are mutable"
    },
    {
        hasContent: true,
        quest: "What will the variable 'city' hold after this code runs?",
        content: "city, temp = (\"Toronto\", 16.7)\ncity",
        contentType: "code",
        codeLanguage: "python",
        choices: ["(\"Toronto\", 16.7)", "16.7", "\"Toronto\"", "Error"],
        correct: "\"Toronto\""
    },
    {
        hasContent: false,
        quest: "Why can tuples be used as dictionary keys but lists cannot?",
        choices: ["Tuples are shorter", "Tuples are immutable and thus hashable", "Tuples contain only numbers", "Lists use more memory"],
        correct: "Tuples are immutable and thus hashable"
    },

    // === DICTIONARIES ===
    {
        hasContent: true,
        quest: "How do you safely access a key that might not exist in a dictionary?",
        content: "record.get(\"pressure\", None)",
        contentType: "code",
        codeLanguage: "python",
        choices: ["record[\"pressure\"]", "record.find(\"pressure\")", "record.get(\"pressure\", None)", "record.has(\"pressure\")"],
        correct: "record.get(\"pressure\", None)"
    },
    {
        hasContent: true,
        quest: "What does this code produce?",
        content: "record = {\"city\": \"Berlin\", \"temp\": 18.2}\nrecord[\"temp_f\"] = record[\"temp\"] * 9/5 + 32\nrecord[\"temp_f\"]",
        contentType: "code",
        codeLanguage: "python",
        choices: ["18.2", "64.76", "32.0", "KeyError"],
        correct: "64.76"
    },
    {
        hasContent: false,
        quest: "What advantage do dictionaries have over lists for representing a data record?",
        choices: ["Dictionaries are faster to iterate", "Keys describe the data, making access more expressive", "Dictionaries use less memory", "Dictionaries preserve insertion order in all Python versions"],
        correct: "Keys describe the data, making access more expressive"
    },

    // === SETS ===
    {
        hasContent: true,
        quest: "What is the result of converting this list to a set?",
        content: "ids = [101, 103, 101, 104, 103, 105]\nset(ids)",
        contentType: "code",
        codeLanguage: "python",
        choices: ["{101, 103, 101, 104, 103, 105}", "{101, 103, 104, 105}", "[101, 103, 104, 105]", "Error: duplicates found"],
        correct: "{101, 103, 104, 105}"
    },
    {
        hasContent: true,
        quest: "What does the '&' operator do between two sets?",
        content: "a = {101, 102, 103}\nb = {103, 104, 105}\na & b",
        contentType: "code",
        codeLanguage: "python",
        choices: ["{101, 102, 103, 104, 105}", "{103}", "{101, 102}", "Error"],
        correct: "{103}"
    },
    {
        hasContent: false,
        quest: "Why are sets preferred over lists for membership testing with large datasets?",
        choices: ["Sets are sorted automatically", "Sets use O(1) average lookup vs O(n) for lists", "Sets can hold more elements", "Sets support indexing"],
        correct: "Sets use O(1) average lookup vs O(n) for lists"
    },

    // === STRINGS ===
    {
        hasContent: true,
        quest: "What does the split() method return?",
        content: "line = \"Berlin,18.2,0.65\"\nparts = line.split(\",\")\nparts",
        contentType: "code",
        codeLanguage: "python",
        choices: ["(\"Berlin\", \"18.2\", \"0.65\")", "[\"Berlin\", \"18.2\", \"0.65\"]", "\"Berlin 18.2 0.65\"", "{\"Berlin\", \"18.2\", \"0.65\"}"],
        correct: "[\"Berlin\", \"18.2\", \"0.65\"]"
    },
    {
        hasContent: true,
        quest: "What does the strip() method do to a string?",
        content: "raw = \"  Berlin  \"\nraw.strip()",
        contentType: "code",
        codeLanguage: "python",
        choices: ["Removes all spaces from the string", "Removes leading and trailing whitespace", "Converts to lowercase", "Splits the string into characters"],
        correct: "Removes leading and trailing whitespace"
    },
    {
        hasContent: false,
        quest: "Why are Python strings considered 'safe' in data pipelines?",
        choices: ["They are encrypted by default", "They are immutable — methods return new strings without modifying the original", "They cannot contain special characters", "They are always Unicode"],
        correct: "They are immutable — methods return new strings without modifying the original"
    },

    // === FUNCTIONS ===
    {
        hasContent: true,
        quest: "What does this function return when called with [0, 100]?",
        content: "def c_to_f(values):\n    return [v * 9/5 + 32 for v in values]\n\nc_to_f([0, 100])",
        contentType: "code",
        codeLanguage: "python",
        choices: ["[0, 100]", "[32.0, 212.0]", "[273.15, 373.15]", "Error"],
        correct: "[32.0, 212.0]"
    },
    {
        hasContent: true,
        quest: "What is the result of calling this clip function?",
        content: "def clip(values, lower=None, upper=None):\n    result = []\n    for v in values:\n        if lower is not None and v < lower: v = lower\n        if upper is not None and v > upper: v = upper\n        result.append(v)\n    return result\n\nclip([1, 5, 10, 20], lower=3, upper=12)",
        contentType: "code",
        codeLanguage: "python",
        choices: ["[1, 5, 10, 20]", "[3, 5, 10, 12]", "[3, 5, 10, 20]", "[1, 5, 10, 12]"],
        correct: "[3, 5, 10, 12]"
    },
    {
        hasContent: false,
        quest: "What is the purpose of setting default parameter values to None in a Python function?",
        choices: ["To make the function run faster", "To indicate that the parameter is optional and allow conditional behavior", "To prevent the function from being called", "To automatically convert types"],
        correct: "To indicate that the parameter is optional and allow conditional behavior"
    },

    // === LAMBDA ===
    {
        hasContent: true,
        quest: "What does this sorted() call do?",
        content: "records = [\n    {\"city\": \"Seoul\", \"temp\": 26.5},\n    {\"city\": \"Berlin\", \"temp\": 18.2}\n]\nsorted(records, key=lambda r: r[\"temp\"])",
        contentType: "code",
        codeLanguage: "python",
        choices: ["Sorts records alphabetically by city", "Sorts records by temperature in ascending order", "Removes duplicates from records", "Filters records with temp > 20"],
        correct: "Sorts records by temperature in ascending order"
    },
    {
        hasContent: false,
        quest: "What is a lambda function in Python?",
        choices: ["A function that runs in parallel", "An anonymous function defined with the 'lambda' keyword", "A built-in function for mathematics", "A function that modifies global state"],
        correct: "An anonymous function defined with the 'lambda' keyword"
    },

    // === GENERATORS ===
    {
        hasContent: true,
        quest: "What is the key difference between a list comprehension and a generator expression?",
        content: "# List comprehension:\n[v * v for v in range(5)]\n\n# Generator expression:\n(v * v for v in range(5))",
        contentType: "code",
        codeLanguage: "python",
        choices: ["No difference, they are identical", "Generator uses [] and list uses ()", "Generator yields values on demand without storing them all in memory", "Generator is faster but produces different results"],
        correct: "Generator yields values on demand without storing them all in memory"
    },

    // === FILE I/O ===
    {
        hasContent: true,
        quest: "Why is the 'with' statement recommended when working with files in Python?",
        content: "with open(\"data.csv\", \"r\") as f:\n    lines = f.readlines()",
        contentType: "code",
        codeLanguage: "python",
        choices: ["It makes file reads faster", "It ensures the file is properly closed even if an error occurs", "It converts the file to UTF-8 automatically", "It prevents other programs from accessing the file"],
        correct: "It ensures the file is properly closed even if an error occurs"
    },
    {
        hasContent: false,
        quest: "When reading a large file, why is iterating line-by-line preferred over readlines()?",
        choices: ["readlines() cannot read CSV files", "Line-by-line iteration is memory-efficient as it loads one line at a time", "readlines() skips empty lines", "Line-by-line iteration is always faster"],
        correct: "Line-by-line iteration is memory-efficient as it loads one line at a time"
    },

    // === PARSING ===
    {
        hasContent: true,
        quest: "What does zip(header, values) produce in this CSV parsing pattern?",
        content: "header = [\"city\", \"temp\", \"humidity\"]\nvalues = [\"Berlin\", \"18.2\", \"0.65\"]\ndict(zip(header, values))",
        contentType: "code",
        codeLanguage: "python",
        choices: [
            "[\"city\", \"Berlin\", \"temp\", \"18.2\"]",
            "{\"city\": \"Berlin\", \"temp\": \"18.2\", \"humidity\": \"0.65\"}",
            "[(\"city\", \"temp\"), (\"Berlin\", \"18.2\")]",
            "Error: incompatible types"
        ],
        correct: "{\"city\": \"Berlin\", \"temp\": \"18.2\", \"humidity\": \"0.65\"}"
    }
];

module.exports = questions_1_2;
