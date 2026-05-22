const aiQuestions = [
    {
        hasContent: false,
        quest: "What does REPL stand for in the context of the Python interactive interpreter?",
        choices: ["Run-Evaluate-Process-Loop", "Read-Eval-Print Loop", "Read-Execute-Print Loop", "Run-Execute-Process-Log"],
        correct: "Read-Eval-Print Loop"
    },
    {
        hasContent: true,
        quest: "Which built-in library and function would you use to find the current working directory in Python?",
        content: "import os\nos.getcwd()",
        contentType: "code",
        codeLanguage: "python",
        choices: ["sys.path()", "os.getcwd()", "os.dir()", "pathlib.pwd()"],
        correct: "os.getcwd()"
    },
    {
        hasContent: false,
        quest: "In IPython, what is the primary purpose of typing an object's name followed by a dot and pressing Tab?",
        choices: ["To delete the object", "To run the script", "To see attribute and method names (introspection)", "To format the code automatically"],
        correct: "To see attribute and method names (introspection)"
    },
    {
        hasContent: true,
        quest: "What is the result of evaluating this Python code snippet?",
        content: "value = (2 + 2) * 3\nvalue",
        contentType: "code",
        codeLanguage: "python",
        choices: ["8", "10", "12", "14"],
        correct: "12"
    },
    {
        hasContent: true,
        quest: "Which IPython magic command is used to execute an external Python script directly within the interactive session?",
        content: "%run simple_stats.py",
        contentType: "code",
        codeLanguage: "python",
        choices: ["%execute", "%load", "%run", "%script"],
        correct: "%run"
    },
    {
        hasContent: false,
        quest: "What does the IPython magic command '%time' do?",
        choices: ["Sets the system clock", "Measures the execution time of a single line of code", "Pauses the interpreter for a specified time", "Prints the current date and time"],
        correct: "Measures the execution time of a single line of code"
    },
    {
        hasContent: true,
        quest: "How can you run a system shell command, such as listing directory contents, from within IPython?",
        content: "!ls",
        contentType: "code",
        codeLanguage: "bash",
        choices: ["By prefixing the command with $", "By prefixing the command with !", "By using the %shell magic command", "By importing the bash module"],
        correct: "By prefixing the command with !"
    },
    {
        hasContent: false,
        quest: "Why is it important to run Jupyter Notebook cells in order from top to bottom?",
        choices: ["Because the notebook will crash otherwise", "Because cells cannot be run individually", "To maintain a clean and consistent state in the persistent namespace", "To save processing power"],
        correct: "To maintain a clean and consistent state in the persistent namespace"
    },
    {
        hasContent: false,
        quest: "In Python, what is the fundamental difference between an expression and a statement?",
        choices: ["An expression produces a value, while a statement performs an action", "An expression performs an action, while a statement produces a value", "Expressions are only used in loops", "Statements cannot assign variables"],
        correct: "An expression produces a value, while a statement performs an action"
    },
    {
        hasContent: true,
        quest: "What mechanism does Python use to define blocks of code, such as loops or conditionals?",
        content: "if x > 3:\n    message = 'x is greater than 3'",
        contentType: "code",
        codeLanguage: "python",
        choices: ["Curly braces {}", "Keywords like BEGIN and END", "Indentation", "Semicolons ;"],
        correct: "Indentation"
    },
    {
        hasContent: true,
        quest: "What will be the output of the type() function for the variable 'temperature'?",
        content: "temperature = 22.5\ntype(temperature)",
        contentType: "code",
        codeLanguage: "python",
        choices: ["<class 'int'>", "<class 'float'>", "<class 'str'>", "<class 'double'>"],
        correct: "<class 'float'>"
    },
    {
        hasContent: true,
        quest: "What kind of error will Python raise if you attempt to add an integer to a list?",
        content: "values = [1, 2, 3]\nvalues + 10",
        contentType: "code",
        codeLanguage: "python",
        choices: ["SyntaxError", "ValueError", "TypeError", "IndexError"],
        correct: "TypeError"
    },
    {
        hasContent: true,
        quest: "In the standardization formula, what does the Greek letter mu (\\mu) represent?",
        content: "z = \\frac{x - \\mu}{\\sigma}",
        contentType: "equation",
        choices: ["Standard Deviation", "Variance", "Mean", "Median"],
        correct: "Mean"
    },
    {
        hasContent: true,
        quest: "Why is the vectorized NumPy approach generally faster than a Python loop for summing elements?",
        content: "data.sum() vs loop_sum(data)",
        contentType: "code",
        codeLanguage: "python",
        choices: ["Because it ignores negative numbers", "Because it uses optimized C code under the hood", "Because it runs on the GPU automatically", "Because Python loops are compiled first"],
        correct: "Because it uses optimized C code under the hood"
    },
    {
        hasContent: false,
        quest: "What is the primary benefit of dynamic typing in Python?",
        choices: ["It forces strict type declarations", "It prevents type errors completely", "It is flexible, allowing variables to be reassigned to different types", "It makes the code run faster than statically typed languages"],
        correct: "It is flexible, allowing variables to be reassigned to different types"
    },
    {
        hasContent: true,
        quest: "Which Python function is used to explicitly convert a string representing a number into a floating-point number?",
        content: "raw = '3.14159'\nvalue = _____(raw)",
        contentType: "code",
        codeLanguage: "python",
        choices: ["int()", "float()", "str()", "dec()"],
        correct: "float()"
    },
    {
        hasContent: false,
        quest: "When writing a Jupyter Notebook, what is the best practice for ensuring reproducibility before sharing it?",
        choices: ["Exporting it as a PDF immediately", "Re-running all cells in order from top to bottom", "Deleting all text cells", "Hiding the code cells"],
        correct: "Re-running all cells in order from top to bottom"
    },
    {
        hasContent: true,
        quest: "In the standardization function, what happens when you subtract the mean from the NumPy array?",
        content: "return (values - values.mean()) / values.std()",
        contentType: "code",
        codeLanguage: "python",
        choices: ["It raises a TypeError", "It applies the subtraction elementwise (vectorization)", "It subtracts the mean only from the first element", "It appends the mean to the array"],
        correct: "It applies the subtraction elementwise (vectorization)"
    },
    {
        hasContent: false,
        quest: "What is a 'Traceback' in Python?",
        choices: ["A detailed error report showing where an exception occurred", "A tool for undoing the last command", "A method for profiling code speed", "A magical command in IPython"],
        correct: "A detailed error report showing where an exception occurred"
    },
    {
        hasContent: true,
        quest: "What does the Greek letter sigma (\\sigma) represent in the denominator of the standardization formula?",
        content: "z = \\frac{x - \\mu}{\\sigma}",
        contentType: "equation",
        choices: ["Summation", "Mean", "Standard Deviation", "Variance"],
        correct: "Standard Deviation"
    }
];

module.exports = aiQuestions;
