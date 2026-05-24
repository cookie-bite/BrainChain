require('dotenv').config();
const { MongoClient } = require('mongodb');
const fs = require('fs');
const path = require('path');

const questions = [
    {
        topic: "ai",
        quest: "You write a SQL query to find all users older than 60 (`WHERE age > 60`) on a 100GB Parquet file. The query executes instantly without reading 90% of the file from disk. What Parquet feature makes this possible?",
        hasContent: false,
        choices: [
            "Arrow Zero-Copy serialization.",
            "Row Group Pruning; Parquet stores min/max statistics in the footer for each row group, allowing the engine to completely skip row groups where the maximum age is less than 60.",
            "In-memory column vectors.",
            "Lazy Execution caching."
        ],
        correct: "Row Group Pruning; Parquet stores min/max statistics in the footer for each row group, allowing the engine to completely skip row groups where the maximum age is less than 60."
    },
    {
        topic: "ai",
        quest: "Before Apache Arrow, passing a 10GB dataset from a Java Spark job to a Python pandas script required massive overhead. Why does Arrow eliminate this bottleneck?",
        hasContent: false,
        choices: [
            "Arrow converts all languages into a unified bytecode.",
            "Arrow provides a standardized, language-agnostic in-memory columnar format. Tools can share the exact same memory layout without serialization/deserialization (zero-copy access).",
            "Arrow compresses the data to 1% of its original size.",
            "Arrow automatically drops columns that are not heavily used."
        ],
        correct: "Arrow provides a standardized, language-agnostic in-memory columnar format. Tools can share the exact same memory layout without serialization/deserialization (zero-copy access)."
    },
    {
        topic: "ai",
        quest: "You execute a pandas script: `filtered = df[df['age'] > 30]`, then `selected = filtered[['city', 'score']]`. Why is this inherently less efficient than a modern SQL engine like DuckDB?",
        hasContent: true,
        contentType: "code",
        codeLanguage: "python",
        content: "filtered = df[df['age'] > 30]\nselected = filtered[['city', 'score']]",
        choices: [
            "Pandas uses Lazy Execution.",
            "Pandas uses Eager Execution; it evaluates each line immediately, creating full intermediate copies of the data in RAM at every step, whereas a lazy engine optimizes the operations into a single pass.",
            "DuckDB runs on GPUs, while pandas runs on CPUs.",
            "Pandas cannot use vectorized operations."
        ],
        correct: "Pandas uses Eager Execution; it evaluates each line immediately, creating full intermediate copies of the data in RAM at every step, whereas a lazy engine optimizes the operations into a single pass."
    },
    {
        topic: "ai",
        quest: "A data engineer rewrites a row-by-row Python `for` loop into a pandas `np.where()` operation. The execution time drops from 10 minutes to 2 seconds. What underlying concept causes this massive speedup?",
        hasContent: false,
        choices: [
            "Predicate Pushdown",
            "Vectorized Execution; the operation is delegated to highly optimized C/C++ routines that process entire contiguous columns in memory at once, avoiding Python interpreter overhead.",
            "Lazy Execution",
            "Distributed Computing"
        ],
        correct: "Vectorized Execution; the operation is delegated to highly optimized C/C++ routines that process entire contiguous columns in memory at once, avoiding Python interpreter overhead."
    },
    {
        topic: "ai",
        quest: "When using an analytical engine like DuckDB to query a Parquet file, what does the term 'Predicate Pushdown' literally mean?",
        hasContent: false,
        choices: [
            "Pushing the SQL query down into a secondary database.",
            "Pushing the filter conditions (predicates) down to the storage layer, so the Parquet reader discards non-matching rows *before* they are loaded into RAM.",
            "Pushing numeric data down to a lower precision (e.g., float64 to float32).",
            "Pushing column aggregations to the end of the query plan."
        ],
        correct: "Pushing the filter conditions (predicates) down to the storage layer, so the Parquet reader discards non-matching rows *before* they are loaded into RAM."
    },
    {
        topic: "ai",
        quest: "Why is DuckDB often described as the 'SQLite for analytical workloads'?",
        hasContent: false,
        choices: [
            "Because it stores data primarily in a row-major format.",
            "Because it requires a massive dedicated cluster of servers to run.",
            "Because it is an embedded database that runs locally inside your Python process with zero server setup, but uses a columnar engine optimized for complex analytical aggregations.",
            "Because it only supports the C programming language."
        ],
        correct: "Because it is an embedded database that runs locally inside your Python process with zero server setup, but uses a columnar engine optimized for complex analytical aggregations."
    },
    {
        topic: "ai",
        quest: "You are analyzing a Parquet file with 500 columns and 1 billion rows. You write a query to calculate the average of just ONE column. Why is Parquet drastically faster than CSV for this specific task?",
        hasContent: false,
        choices: [
            "Parquet uses a hash map to find the column.",
            "Parquet is physically structured by column chunks. The engine can seek directly to the exact byte offset of that single column on disk and read it continuously, completely ignoring the other 499 columns.",
            "CSV files cannot contain 500 columns.",
            "Parquet files automatically cache averages during creation."
        ],
        correct: "Parquet is physically structured by column chunks. The engine can seek directly to the exact byte offset of that single column on disk and read it continuously, completely ignoring the other 499 columns."
    },
    {
        topic: "ai",
        quest: "A team upgrades their pandas code to use `dtype_backend='pyarrow'`. What immediate technical benefits do they gain over traditional NumPy-backed pandas DataFrames?",
        hasContent: false,
        choices: [
            "The DataFrame can now execute distributed workloads across multiple machines.",
            "More efficient memory handling for strings, native support for missing values (nulls), and faster interoperability with other Arrow-based tools.",
            "Automatic SQL query optimization.",
            "The ability to store relational foreign keys."
        ],
        correct: "More efficient memory handling for strings, native support for missing values (nulls), and faster interoperability with other Arrow-based tools."
    },
    {
        topic: "ai",
        quest: "Consider the architecture of a Parquet file. Where is the metadata (schema, column statistics, row group offsets) stored, and why?",
        hasContent: true,
        contentType: "text",
        content: "Parquet files are written sequentially.",
        choices: [
            "At the beginning (header), so the reader can parse it immediately.",
            "At the end (footer), because the file is written sequentially and the statistics (min/max/count) are only known after all the data row groups have been written.",
            "In a separate sidecar .json file.",
            "In every single row."
        ],
        correct: "At the end (footer), because the file is written sequentially and the statistics (min/max/count) are only known after all the data row groups have been written."
    },
    {
        topic: "ai",
        quest: "You write a complex SQL query in DuckDB querying a pandas DataFrame. `duckdb.sql('SELECT city, AVG(score) FROM df GROUP BY city')`. How does DuckDB access the pandas data?",
        hasContent: false,
        choices: [
            "It converts the DataFrame into a CSV, saves it to disk, and reads it back.",
            "It reads the pandas memory layout directly (especially if Arrow-backed) without expensive data copying or serialization.",
            "It uploads the DataFrame to a local SQLite server.",
            "It translates the SQL string into pandas `.groupby()` Python methods and executes them."
        ],
        correct: "It reads the pandas memory layout directly (especially if Arrow-backed) without expensive data copying or serialization."
    },
    {
        topic: "ai",
        quest: "If you want to view the exact execution strategy a database engine (like DuckDB or PostgreSQL) will use, including where it placed the filters and aggregations, what SQL command do you prefix your query with?",
        hasContent: false,
        choices: [
            "EXECUTE",
            "EXPLAIN",
            "OPTIMIZE",
            "PLAN"
        ],
        correct: "EXPLAIN"
    },
    {
        topic: "ai",
        quest: "Which of the following scenarios is the WORST fit for a tool like DuckDB or Polars?",
        hasContent: false,
        choices: [
            "Aggregating 50 million rows on a laptop to find monthly revenue.",
            "Joining three 10GB Parquet files to produce an ML feature set.",
            "Serving real-time user profiles to a live web application at 10,000 requests per second.",
            "Running exploratory SQL queries against a directory of CSV files."
        ],
        correct: "Serving real-time user profiles to a live web application at 10,000 requests per second."
    },
    {
        topic: "ai",
        quest: "What is the relationship between Parquet and Apache Arrow?",
        hasContent: false,
        choices: [
            "They are competitors fighting for the same exact use case.",
            "Parquet is an in-memory format, while Arrow is a disk storage format.",
            "Parquet optimizes how columnar data is persistently stored on disk, while Arrow optimizes how columnar data is represented and shared in RAM.",
            "Arrow is a programming language used to query Parquet files."
        ],
        correct: "Parquet optimizes how columnar data is persistently stored on disk, while Arrow optimizes how columnar data is represented and shared in RAM."
    },
    {
        topic: "ai",
        quest: "When a data scientist talks about the 'Modern Local Analytics Stack', which three core technologies represent the Storage, Memory, and Execution layers respectively?",
        hasContent: false,
        choices: [
            "CSV -> pandas -> Python",
            "Parquet -> Apache Arrow -> DuckDB / Polars",
            "JSON -> SQLite -> SQL",
            "PostgreSQL -> Redis -> Node.js"
        ],
        correct: "Parquet -> Apache Arrow -> DuckDB / Polars"
    },
    {
        topic: "ai",
        quest: "You have a massive dataset partitioned by date. A query optimizer utilizes 'Column Pruning' and 'Row Group Pruning'. What is the difference?",
        hasContent: false,
        choices: [
            "They are the exact same concept.",
            "Column pruning skips reading unneeded fields (vertical optimization); Row Group pruning uses min/max stats to skip reading chunks of rows that don't match the filter (horizontal optimization).",
            "Column pruning applies to CSV files, Row Group pruning applies to Parquet.",
            "Column pruning happens in RAM, Row Group pruning happens in the CPU cache."
        ],
        correct: "Column pruning skips reading unneeded fields (vertical optimization); Row Group pruning uses min/max stats to skip reading chunks of rows that don't match the filter (horizontal optimization)."
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
        console.log(`Successfully inserted ${result.insertedCount} questions for '2.3 Data Formats'`);
        
        // Delete the processed file
        const targetFile = path.join(__dirname, '..', 'materials', '2.3 Data Formats and Analytical Execution EnginesUn.._.md');
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
