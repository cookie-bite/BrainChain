require('dotenv').config();
const { MongoClient } = require('mongodb');
const fs = require('fs');
const path = require('path');

const questions = [
    {
        topic: "ai",
        quest: "You are designing an e-commerce database. You notice that the publisher 'Banana Press' and country 'UK' are repeated across thousands of book records in a single table. If you normalize this by moving publishers to a separate table, what is the primary computational trade-off you must accept?",
        hasContent: false,
        choices: [
            "Data consistency will become harder to maintain during updates.",
            "You must pay the computational cost of executing a JOIN operation every time you need the complete picture of a book and its publisher.",
            "You will consume significantly more disk storage space.",
            "You are forced to switch to a Document-oriented database."
        ],
        correct: "You must pay the computational cost of executing a JOIN operation every time you need the complete picture of a book and its publisher."
    },
    {
        topic: "ai",
        quest: "Why is SQL considered a 'declarative' language, and why is this property crucial for database performance?",
        hasContent: true,
        contentType: "code",
        codeLanguage: "sql",
        content: "SELECT title FROM books WHERE price < 25;",
        choices: [
            "Because it declares exact memory addresses for the data.",
            "Because you specify *what* data you want, not *how* to get it, allowing the Database Query Optimizer to determine the fastest execution strategy (indexes, scan order) behind the scenes.",
            "Because it explicitly loops through rows step-by-step, ensuring maximum precision.",
            "Because it declares the strict types of all variables at runtime."
        ],
        correct: "Because you specify *what* data you want, not *how* to get it, allowing the Database Query Optimizer to determine the fastest execution strategy (indexes, scan order) behind the scenes."
    },
    {
        topic: "ai",
        quest: "A team stores user profiles in MongoDB. They proudly claim their database is 'schemaless' because they can insert any JSON document. However, when the frontend code tries to read `user['address']['city']`, the application crashes on some users. What concept does this demonstrate?",
        hasContent: false,
        choices: [
            "MongoDB requires a strict SQL schema.",
            "The data model is fundamentally row-major.",
            "The work of schema enforcement didn't disappear; it just moved from 'schema-on-write' (database level) to 'schema-on-read' (application level).",
            "Document databases cannot handle nested JSON."
        ],
        correct: "The work of schema enforcement didn't disappear; it just moved from 'schema-on-write' (database level) to 'schema-on-read' (application level)."
    },
    {
        topic: "ai",
        quest: "In a Document Database (like MongoDB), all information about a book, its publisher, and all its editions lives in a single nested document. What is the primary performance advantage of this design?",
        hasContent: true,
        contentType: "json",
        content: "{\n  \"title\": \"The Hobbit\",\n  \"editions\": [{\"format\": \"Paperback\", \"price\": 30}]\n}",
        choices: [
            "Schema-on-write validation is strictly enforced.",
            "Locality: related data is stored together, so retrieving a complete entity is incredibly fast and requires no joins.",
            "It automatically normalizes the data to save space.",
            "It is highly optimized for complex analytical aggregations across millions of documents."
        ],
        correct: "Locality: related data is stored together, so retrieving a complete entity is incredibly fast and requires no joins."
    },
    {
        topic: "ai",
        quest: "You are building a fraud detection system that needs to trace chains of suspicious transactions: User A sent money to User B, who shares an IP with User C, who sent money to User D. Which data model is uniquely optimized for this variable-depth traversal?",
        hasContent: false,
        choices: [
            "Relational Model",
            "Document Model",
            "Graph Model",
            "Time-Series Model"
        ],
        correct: "Graph Model"
    },
    {
        topic: "ai",
        quest: "A ride-sharing app uses a database to assign drivers. A user requests a ride, and a driver is assigned. If the payment fails at the exact same millisecond, the driver assignment must be immediately rolled back as if it never happened. Which ACID property guarantees this?",
        hasContent: false,
        choices: [
            "Atomicity",
            "Consistency",
            "Isolation",
            "Durability"
        ],
        correct: "Atomicity"
    },
    {
        topic: "ai",
        quest: "Two users, Alice and Bob, simultaneously try to book the last remaining seat on a flight. The database ensures that only one of them gets the seat, and the other sees a 'Sold Out' error. Which ACID property guarantees they don't both get confirmed for the same seat?",
        hasContent: false,
        choices: [
            "Atomicity",
            "Consistency",
            "Isolation",
            "Durability"
        ],
        correct: "Isolation"
    },
    {
        topic: "ai",
        quest: "You execute a successful transaction transferring $500. A microsecond after the database confirms the transaction, the entire data center loses power. When power is restored, the $500 transfer is still recorded. Which ACID property ensures this?",
        hasContent: false,
        choices: [
            "Atomicity",
            "Consistency",
            "Isolation",
            "Durability"
        ],
        correct: "Durability"
    },
    {
        topic: "ai",
        quest: "A data scientist writes a query to calculate the average 'price' across 10 million transactions in a PostgreSQL (row-major) database. Why is this query significantly slower than running it in a Column-Major analytical database?",
        hasContent: true,
        contentType: "text",
        content: "Row-major storage keeps all fields of a record contiguous in memory.",
        choices: [
            "PostgreSQL does not support mathematical aggregations.",
            "In row-major storage, the CPU must read every single field of every transaction (customer_id, date, product_name, etc.) just to extract the 'price', wasting massive amounts of cache memory and I/O.",
            "Column-major databases store the data in RAM, while row-major stores it on disk.",
            "Row-major databases require the data to be perfectly normalized."
        ],
        correct: "In row-major storage, the CPU must read every single field of every transaction (customer_id, date, product_name, etc.) just to extract the 'price', wasting massive amounts of cache memory and I/O."
    },
    {
        topic: "ai",
        quest: "What is the core architectural difference between traditional databases (where Storage and Compute are coupled) and modern decoupled cloud architectures (like Snowflake or Databricks)?",
        hasContent: false,
        choices: [
            "Decoupled architectures force you to use unstructured data.",
            "In decoupled architectures, data is stored once in cheap object storage (like S3), and different processing engines (Compute) can be spun up independently to query the same data, saving costs and adding flexibility.",
            "Coupled architectures are much faster for analytical queries.",
            "Decoupled architectures do not support SQL."
        ],
        correct: "In decoupled architectures, data is stored once in cheap object storage (like S3), and different processing engines (Compute) can be spun up independently to query the same data, saving costs and adding flexibility."
    },
    {
        topic: "ai",
        quest: "You are building a Content Management System (CMS) where every article might have completely different metadata fields (some have videos, some have author bios, some have polls). Which data model is the most natural fit?",
        hasContent: false,
        choices: [
            "Relational Model",
            "Graph Model",
            "Document Model",
            "OLAP Cube"
        ],
        correct: "Document Model"
    },
    {
        topic: "ai",
        quest: "Which of the following best describes the 'BASE' philosophy often used in distributed NoSQL databases, in contrast to ACID?",
        hasContent: false,
        choices: [
            "Binary And Sequential Execution",
            "Basically Available, Soft state, Eventual consistency - it relaxes strict consistency to achieve higher availability and performance across distributed nodes.",
            "Basic Analytics and Scalable Extraction",
            "Blocked Access, Strict Enforcement - it prioritizes extreme security over performance."
        ],
        correct: "Basically Available, Soft state, Eventual consistency - it relaxes strict consistency to achieve higher availability and performance across distributed nodes."
    },
    {
        topic: "ai",
        quest: "A query optimizer's primary job in a relational database is to:",
        hasContent: false,
        choices: [
            "Translate Python code into SQL.",
            "Examine all possible ways to execute a declarative query (indexes, join orders) and pick the most efficient physical execution plan.",
            "Automatically normalize tables.",
            "Enforce foreign key constraints during writes."
        ],
        correct: "Examine all possible ways to execute a declarative query (indexes, join orders) and pick the most efficient physical execution plan."
    },
    {
        topic: "ai",
        quest: "In an OLAP (Online Analytical Processing) workload, what is the typical access pattern?",
        hasContent: false,
        choices: [
            "Inserting single rows as fast as possible (milliseconds).",
            "Updating specific fields in a single user profile.",
            "Reading and aggregating specific columns across thousands or millions of records (seconds to minutes).",
            "Traversing deep relationships between specific nodes."
        ],
        correct: "Reading and aggregating specific columns across thousands or millions of records (seconds to minutes)."
    },
    {
        topic: "ai",
        quest: "You are analyzing a social network dataset. You need to find 'Friends of friends who like Machine Learning'. In a relational database, this requires complex, slow JOINs. Which database model solves this naturally via 'traversal'?",
        hasContent: false,
        choices: [
            "Document Database",
            "Column-Family Store",
            "Graph Database",
            "Key-Value Store"
        ],
        correct: "Graph Database"
    },
    {
        topic: "ai",
        quest: "If you decide to use a purely Document-oriented database for a highly interconnected financial ledger where users frequently exchange funds, what is the most likely pain point you will encounter?",
        hasContent: false,
        choices: [
            "Lack of schema flexibility.",
            "Inability to store JSON objects.",
            "Difficulty and high computational cost in executing cross-document queries and maintaining global relational consistency without native JOINs.",
            "Document databases cannot handle numbers."
        ],
        correct: "Difficulty and high computational cost in executing cross-document queries and maintaining global relational consistency without native JOINs."
    },
    {
        topic: "ai",
        quest: "Consider the declarative ML framework concept (like H2O AutoML). How does it parallel the concept of SQL in databases?",
        hasContent: true,
        contentType: "code",
        codeLanguage: "python",
        content: "aml = H2OAutoML(max_models=20)\naml.train(x=features, y=target, training_frame=data)",
        choices: [
            "Both require strict explicit loops to function.",
            "Both allow the user to specify *what* they want (the data pattern or the best model) while the underlying engine figures out *how* to optimize and execute it (query plan or hyperparameter search).",
            "Both are used exclusively for unstructured data.",
            "Both inherently rely on Graph theory."
        ],
        correct: "Both allow the user to specify *what* they want (the data pattern or the best model) while the underlying engine figures out *how* to optimize and execute it (query plan or hyperparameter search)."
    },
    {
        topic: "ai",
        quest: "A modern trend in databases is the 'Convergence of OLTP and OLAP'. What does this practically mean for data architecture?",
        hasContent: false,
        choices: [
            "You must buy two completely separate servers.",
            "Modern tools (like DuckDB, CockroachDB, or Iceberg tables) are increasingly supporting both fast transactional row-level guarantees and efficient columnar analytical queries within the same ecosystem.",
            "OLTP is being completely deprecated in favor of OLAP.",
            "Databases are no longer using SQL."
        ],
        correct: "Modern tools (like DuckDB, CockroachDB, or Iceberg tables) are increasingly supporting both fast transactional row-level guarantees and efficient columnar analytical queries within the same ecosystem."
    },
    {
        topic: "ai",
        quest: "In a relational model, the statement 'the order of rows does not matter, and the order of columns does not matter' is rooted in:",
        hasContent: false,
        choices: [
            "The physical disk limitations of 1970s hardware.",
            "The mathematical foundation of relations as 'sets of tuples', giving relational databases their rigor.",
            "A flaw in the SQL standard.",
            "The requirements of Machine Learning tensors."
        ],
        correct: "The mathematical foundation of relations as 'sets of tuples', giving relational databases their rigor."
    },
    {
        topic: "ai",
        quest: "You are tasked with building a real-time multiplayer game backend. Player coordinates (X, Y, Z) must be updated 60 times a second. Which storage paradigm is best suited for this?",
        hasContent: false,
        choices: [
            "OLAP Analytical Engine",
            "Column-Major Data Lake",
            "OLTP Transactional Engine (or in-memory key-value store) optimized for high-frequency, low-latency row updates.",
            "A Graph Database."
        ],
        correct: "OLTP Transactional Engine (or in-memory key-value store) optimized for high-frequency, low-latency row updates."
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
        console.log(`Successfully inserted ${result.insertedCount} questions for '2.2 Data Models'`);
        
        // Delete the processed file
        const targetFile = path.join(__dirname, '..', 'materials', '2.2 Data Models, Databases, and Storage EnginesUnit.._.md');
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
