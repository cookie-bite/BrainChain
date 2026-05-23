const aiQuestions = [
    {
        hasContent: false,
        quest: "What is the primary core object provided by NumPy for data manipulation?",
        choices: ["Series", "DataFrame", "ndarray", "List"],
        correct: "ndarray"
    },
    {
        hasContent: true,
        quest: "How do you create a 1-dimensional NumPy array from a Python list?",
        content: "import numpy as np\nmy_list = [1, 2, 3]\nmy_array = ____(my_list)",
        contentType: "code",
        codeLanguage: "python",
        choices: ["np.matrix", "np.array", "np.create", "np.ndarray"],
        correct: "np.array"
    },
    {
        hasContent: false,
        quest: "What is a key difference between a Python list and a NumPy ndarray?",
        choices: ["Lists are faster for mathematical operations", "Arrays can contain elements of different data types", "Arrays store elements in contiguous memory and require a single data type", "Lists have fixed sizes while arrays can grow dynamically"],
        correct: "Arrays store elements in contiguous memory and require a single data type"
    },
    {
        hasContent: true,
        quest: "Which attribute is used to check the dimensions (e.g., number of rows and columns) of a NumPy array?",
        content: "arr = np.array([[1, 2], [3, 4]])\narr.____",
        contentType: "code",
        codeLanguage: "python",
        choices: ["size", "shape", "ndim", "dtype"],
        correct: "shape"
    },
    {
        hasContent: false,
        quest: "What does the 'vectorization' feature in NumPy allow you to do?",
        choices: ["Convert numbers to text automatically", "Perform element-wise operations on arrays without explicit for-loops", "Visualize data as vector graphics", "Increase the memory limit of Python variables"],
        correct: "Perform element-wise operations on arrays without explicit for-loops"
    },
    {
        hasContent: true,
        quest: "What will be the output of this vectorized operation?",
        content: "arr = np.array([10, 20, 30])\nresult = arr / 10",
        contentType: "code",
        codeLanguage: "python",
        choices: ["[1, 2, 3]", "array([1., 2., 3.])", "TypeError", "array([1, 2, 3])"],
        correct: "array([1., 2., 3.])"
    },
    {
        hasContent: false,
        quest: "What is 'broadcasting' in NumPy?",
        choices: ["A way to print arrays to the console", "A mechanism that allows arithmetic operations between arrays of different shapes", "Transmitting data to a database", "Converting an array to a wider data type"],
        correct: "A mechanism that allows arithmetic operations between arrays of different shapes"
    },
    {
        hasContent: true,
        quest: "Which function generates an array of a specified length containing evenly spaced values within a given interval?",
        content: "np.____(0, 10, 5) # Output: array([0. , 2.5, 5. , 7.5, 10. ])",
        contentType: "code",
        codeLanguage: "python",
        choices: ["arange", "linspace", "interval", "zeros"],
        correct: "linspace"
    },
    {
        hasContent: true,
        quest: "How do you generate an array containing a sequence of numbers from 0 up to (but not including) 10?",
        content: "np.____(10)",
        contentType: "code",
        codeLanguage: "python",
        choices: ["arange", "sequence", "range", "array"],
        correct: "arange"
    },
    {
        hasContent: true,
        quest: "How do you select the element in the 2nd row and 3rd column of a 2D NumPy array (assuming 0-indexed)?",
        content: "arr = np.array([[1,2,3], [4,5,6], [7,8,9]])\nval = arr[____]",
        contentType: "code",
        codeLanguage: "python",
        choices: ["1, 2", "2, 3", "1][2", "2][3"],
        correct: "1, 2"
    },
    {
        hasContent: true,
        quest: "What does the following array slicing operation do?",
        content: "arr[0:2, 1:]",
        contentType: "code",
        codeLanguage: "python",
        choices: ["Selects rows 0 and 1, and all columns starting from index 1", "Selects rows 1 and 2, and column 1 only", "Selects the first two columns and all rows", "Generates a syntax error"],
        correct: "Selects rows 0 and 1, and all columns starting from index 1"
    },
    {
        hasContent: true,
        quest: "What is the concept demonstrated by the following code?",
        content: "arr = np.array([1, 2, 3, 4, 5])\nfiltered = arr[arr > 3]",
        contentType: "code",
        codeLanguage: "python",
        choices: ["Fancy indexing", "Slicing", "Boolean indexing", "Broadcasting"],
        correct: "Boolean indexing"
    },
    {
        hasContent: true,
        quest: "What is the result of using 'Fancy Indexing' in this snippet?",
        content: "arr = np.array([10, 20, 30, 40, 50])\nres = arr[[0, 3, 4]]",
        contentType: "code",
        codeLanguage: "python",
        choices: ["array([10, 20, 30])", "array([10, 40, 50])", "array([[0], [3], [4]])", "IndexError"],
        correct: "array([10, 40, 50])"
    },
    {
        hasContent: true,
        quest: "Which method is used to change the dimensions of an array without changing its data?",
        content: "arr = np.arange(12)\nnew_arr = arr.____((3, 4))",
        contentType: "code",
        codeLanguage: "python",
        choices: ["resize", "reshape", "transpose", "flatten"],
        correct: "reshape"
    },
    {
        hasContent: true,
        quest: "Which attribute or method is used to swap the rows and columns of a 2D matrix in NumPy?",
        content: "arr2d.____",
        contentType: "code",
        codeLanguage: "python",
        choices: ["swap()", "inverse", "T", "flip"],
        correct: "T"
    },
    {
        hasContent: false,
        quest: "What are Universal Functions (ufuncs) in NumPy?",
        choices: ["Functions that work across all programming languages", "Functions that can be applied to any data type", "Fast, element-wise array functions like np.sqrt and np.exp", "Built-in statistical models"],
        correct: "Fast, element-wise array functions like np.sqrt and np.exp"
    },
    {
        hasContent: true,
        quest: "If you want to calculate the sum of each column in a 2D array, which axis parameter should you use?",
        content: "arr = np.array([[1, 2], [3, 4]])\nnp.sum(arr, axis=____)",
        contentType: "code",
        codeLanguage: "python",
        choices: ["0", "1", "-1", "None"],
        correct: "0"
    },
    {
        hasContent: false,
        quest: "Which NumPy module contains functions for drawing samples from various probability distributions?",
        choices: ["np.stats", "np.math", "np.prob", "np.random"],
        correct: "np.random"
    },
    {
        hasContent: true,
        quest: "How do you generate an array of 5 random floats uniformly distributed over [0, 1)?",
        content: "np.random.____(5)",
        contentType: "code",
        codeLanguage: "python",
        choices: ["randn", "uniform", "rand", "randint"],
        correct: "rand"
    },
    {
        hasContent: true,
        quest: "Which function returns the indices of the maximum values along an axis?",
        content: "arr = np.array([10, 50, 30])\nnp.____(arr) # Returns 1",
        contentType: "code",
        codeLanguage: "python",
        choices: ["max", "argmax", "maximum", "argsort"],
        correct: "argmax"
    },
    {
        hasContent: true,
        quest: "How can you compute the dot product (matrix multiplication) of two 2D arrays, A and B?",
        content: "result = A ____ B",
        contentType: "code",
        codeLanguage: "python",
        choices: ["*", "**", "@", "x"],
        correct: "@"
    },
    {
        hasContent: false,
        quest: "When using boolean indexing, what logical operator should you use to combine multiple conditions element-wise?",
        choices: ["and / or", "& / |", "&& / ||", "ALL / ANY"],
        correct: "& / |"
    },
    {
        hasContent: true,
        quest: "What happens when you slice a NumPy array and assign it to a new variable, then modify the slice?",
        content: "arr = np.array([1, 2, 3])\nslice = arr[0:2]\nslice[0] = 99",
        contentType: "code",
        codeLanguage: "python",
        choices: ["The original array is unmodified", "A ValueError is raised", "The original array is also modified because slices are views", "The slice operation automatically creates a deep copy"],
        correct: "The original array is also modified because slices are views"
    },
    {
        hasContent: true,
        quest: "How can you explicitly force NumPy to create a separate copy of an array instead of a view?",
        content: "new_arr = old_arr.____()",
        contentType: "code",
        codeLanguage: "python",
        choices: ["clone", "copy", "duplicate", "view"],
        correct: "copy"
    },
    {
        hasContent: false,
        quest: "Which NumPy function is used to join a sequence of arrays along an existing axis?",
        choices: ["np.join()", "np.append()", "np.concatenate()", "np.merge()"],
        correct: "np.concatenate()"
    }
];

module.exports = aiQuestions;
