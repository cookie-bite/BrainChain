require('dotenv').config();
const { MongoClient } = require('mongodb');
const fs = require('fs');
const path = require('path');

const questions = [
    {
        topic: "ai",
        quest: "A user inputs '27.3°C' into a temperature tracking application where the backend simply casts input to float(). What is the primary engineering risk demonstrated here?",
        hasContent: true,
        contentType: "code",
        codeLanguage: "python",
        content: "raw_inputs = ['22.5', 'not a number', '27.3°C']\nparsed = [float(x) for x in raw_inputs]",
        choices: [
            "The application will crash due to a ValueError because user input often contains unexpected unit suffixes that require explicit parsing.",
            "The float() function will silently truncate the string to 27.0.",
            "The degree symbol cannot be encoded in UTF-8.",
            "The application will convert it to a complex number type."
        ],
        correct: "The application will crash due to a ValueError because user input often contains unexpected unit suffixes that require explicit parsing."
    },
    {
        topic: "ai",
        quest: "You are building an observability pipeline that processes 10 million events per minute. Why are structured JSON logs preferred over plain text logs despite the increased storage size?",
        hasContent: false,
        choices: [
            "Because structured JSON automatically compresses better than text.",
            "Because JSON defers the work of schema interpretation to the reader, allowing flexible and deterministic extraction without brittle regular expressions.",
            "Because JSON is a binary format that reads faster into memory.",
            "Because plain text logs cannot store timestamps."
        ],
        correct: "Because JSON defers the work of schema interpretation to the reader, allowing flexible and deterministic extraction without brittle regular expressions."
    },
    {
        topic: "ai",
        quest: "A startup decides to purchase user browsing habits from an ad network to improve its recommendation engine. According to data categorizations, what type of data is this?",
        hasContent: false,
        choices: [
            "First-party data",
            "Second-party data",
            "Third-party data",
            "System-generated data"
        ],
        correct: "Third-party data"
    },
    {
        topic: "ai",
        quest: "Your data engineering team is receiving a daily CSV file containing zip codes. You notice that zip codes like '02134' are being stored as '2134'. What is the root cause of this data corruption?",
        hasContent: true,
        contentType: "text",
        content: "CSV format does not inherently store type metadata.",
        choices: [
            "The CSV writer encoded the numbers using an outdated ASCII standard.",
            "The reader tool performed implicit type inference, treating the column as integers and silently dropping leading zeros.",
            "The zip codes were stored as floating-point numbers and truncated.",
            "CSV files limit column values to 4 characters by default."
        ],
        correct: "The reader tool performed implicit type inference, treating the column as integers and silently dropping leading zeros."
    },
    {
        topic: "ai",
        quest: "A data scientist needs to compute the average temperature across 10 million weather records spanning 50 columns. Which storage format and layout will execute this analytical query the fastest?",
        hasContent: false,
        choices: [
            "CSV, because text formats are optimized for sequential CPU caching.",
            "JSON, because key-value pairs allow direct access to the temperature field.",
            "Parquet, because it uses a binary column-major layout, allowing the CPU to read only the temperature values contiguously.",
            "Pickle, because it natively serializes Python objects without overhead."
        ],
        correct: "Parquet, because it uses a binary column-major layout, allowing the CPU to read only the temperature values contiguously."
    },
    {
        topic: "ai",
        quest: "An application needs to constantly append new user transaction records, writing all 15 fields for each transaction simultaneously. Which memory layout is optimal for this write pattern?",
        hasContent: false,
        choices: [
            "Row-major layout, because all fields for a single record are written to contiguous memory blocks at once.",
            "Column-major layout, because writing each field to a different column allows parallel processing.",
            "Diagonal-major layout, to balance read and write speeds.",
            "Document layout, because it enforces a strict schema."
        ],
        correct: "Row-major layout, because all fields for a single record are written to contiguous memory blocks at once."
    },
    {
        topic: "ai",
        quest: "A junior developer writes the following pandas code and complains that it is incredibly slow on a 1M-row DataFrame. Why is this code so inefficient?",
        hasContent: true,
        contentType: "code",
        codeLanguage: "python",
        content: "for idx, row in df.iterrows():\n    df.at[idx, 'total'] = row['price'] + row['tax']",
        choices: [
            "Pandas DataFrames are row-major, so iterating by column is faster.",
            "Pandas DataFrames are column-major, meaning iterating row-by-row forces the CPU to fetch data from non-contiguous memory locations, destroying cache efficiency.",
            "The 'at' accessor is deprecated and inherently slow.",
            "Python's garbage collector pauses execution during iterrows()."
        ],
        correct: "Pandas DataFrames are column-major, meaning iterating row-by-row forces the CPU to fetch data from non-contiguous memory locations, destroying cache efficiency."
    },
    {
        topic: "ai",
        quest: "You are designing an ML architecture. You choose to accept incoming web API payloads as JSON, but immediately serialize them to Protobuf for internal microservices. Why is this a valid architectural decision?",
        hasContent: false,
        choices: [
            "JSON is faster to process internally, but Protobuf is required for HTTP.",
            "Text formats like JSON are flexible at boundaries for human debugging, while binary formats like Protobuf optimize internal network bandwidth and processing speed.",
            "Protobuf allows unstructured data, whereas JSON requires a strict schema.",
            "JSON prevents security vulnerabilities that Protobuf introduces."
        ],
        correct: "Text formats like JSON are flexible at boundaries for human debugging, while binary formats like Protobuf optimize internal network bandwidth and processing speed."
    },
    {
        topic: "ai",
        quest: "A company decides to store raw, unparsed log files and unstructured images directly into cloud storage without imposing a schema upfront. What architectural pattern does this describe?",
        hasContent: false,
        choices: [
            "Data Warehouse",
            "Data Lake",
            "Relational Database",
            "OLAP Cube"
        ],
        correct: "Data Lake"
    },
    {
        topic: "ai",
        quest: "You have a flat DataFrame where the publisher 'Banana Press' and its country 'UK' are repeated across 500,000 book records. If you normalize this by moving publishers to a separate table, what is the primary analytical trade-off?",
        hasContent: true,
        contentType: "text",
        content: "Normalization reduces redundancy and makes updates (e.g., renaming the publisher) trivial.",
        choices: [
            "It increases storage size significantly.",
            "It makes querying the average price of all books impossible.",
            "It requires a join operation to reconstruct the full picture, which incurs a computational cost during analysis.",
            "It forces you to use document-oriented databases."
        ],
        correct: "It requires a join operation to reconstruct the full picture, which incurs a computational cost during analysis."
    },
    {
        topic: "ai",
        quest: "Why is a document-oriented representation (like nested JSON) generally slower for computing aggregates like the average price across all books?",
        hasContent: true,
        contentType: "code",
        codeLanguage: "json",
        content: "{\n  \"title\": \"Book A\",\n  \"editions\": [{\"price\": 20}, {\"price\": 10}]\n}",
        choices: [
            "Because JSON files cannot store floating-point numbers.",
            "Because it has poor memory locality for aggregates; the engine must scan every document and unpack nested structures to find the prices.",
            "Because documents cannot be indexed.",
            "Because averages can only be calculated on normalized relational tables."
        ],
        correct: "Because it has poor memory locality for aggregates; the engine must scan every document and unpack nested structures to find the prices."
    },
    {
        topic: "ai",
        quest: "Calculate the storage difference when storing the number 1,000,000. As a UTF-8 text string, it requires 7 bytes. As a standard 32-bit binary integer, how many bytes does it require?",
        hasContent: true,
        contentType: "equation",
        content: "Text\\ Bytes = 7 \\newline Binary\\ Bytes = ?",
        choices: [
            "1 byte",
            "2 bytes",
            "4 bytes",
            "8 bytes"
        ],
        correct: "4 bytes"
    },
    {
        topic: "ai",
        quest: "What is the primary danger of parsing unstructured text logs using Regular Expressions in a production pipeline?",
        hasContent: true,
        contentType: "code",
        codeLanguage: "python",
        content: "pattern = r'(\\d{4}-\\d{2}-\\d{2}) (\\w+) (.*)'\nmatch = re.match(pattern, log_line)",
        choices: [
            "Regex is universally too slow for any production pipeline.",
            "A single unusual log entry that deviates from the implicit pattern can silently break the regex, leading to missing or incorrectly parsed data.",
            "Regex cannot extract timestamps.",
            "Regex patterns require compilation which blocks the main execution thread permanently."
        ],
        correct: "A single unusual log entry that deviates from the implicit pattern can silently break the regex, leading to missing or incorrectly parsed data."
    },
    {
        topic: "ai",
        quest: "In the context of NumPy arrays, what does it mean if an array's memory layout is 'C_CONTIGUOUS'?",
        hasContent: false,
        choices: [
            "It is stored in column-major order (Fortran style).",
            "It is stored in row-major order (C style), meaning elements of the same row are adjacent in memory.",
            "The array is compressed using C-level algorithms.",
            "The array is immutable and allocated in the C cache."
        ],
        correct: "It is stored in row-major order (C style), meaning elements of the same row are adjacent in memory."
    },
    {
        topic: "ai",
        quest: "A team decides to use Avro over Parquet for a streaming pipeline. Based on typical format strengths, what is the most likely justification?",
        hasContent: false,
        choices: [
            "Avro is a text-based format that is easier to debug in real-time.",
            "Avro prioritizes schema evolution and row-based serialization, making it excellent for streaming where schemas change and records arrive sequentially.",
            "Avro is strictly column-major, which is required for streaming.",
            "Avro automatically converts categorical data into numerical tensors."
        ],
        correct: "Avro prioritizes schema evolution and row-based serialization, making it excellent for streaming where schemas change and records arrive sequentially."
    },
    {
        topic: "ai",
        quest: "You are given semi-structured data where all events share a 'timestamp' and 'event_type', but other fields vary wildly depending on the event. Where is the work of interpreting this structure primarily deferred?",
        hasContent: false,
        choices: [
            "To the writer; the application generating the event must enforce the schema.",
            "To the network layer; the load balancer filters invalid fields.",
            "To the reader; the downstream analysis code must check for the existence of fields before using them.",
            "To the operating system; the file system handles dynamic schemas."
        ],
        correct: "To the reader; the downstream analysis code must check for the existence of fields before using them."
    },
    {
        topic: "ai",
        quest: "A data lakehouse attempts to solve the dichotomy between Data Lakes and Data Warehouses. Which of the following best describes its core value proposition?",
        hasContent: false,
        choices: [
            "It stores everything exclusively in third normal form (3NF).",
            "It combines the schema enforcement and fast query performance of a warehouse with the flexible, low-cost raw storage of a lake.",
            "It completely eliminates the need for binary formats like Parquet.",
            "It runs entirely in-memory without persistent storage."
        ],
        correct: "It combines the schema enforcement and fast query performance of a warehouse with the flexible, low-cost raw storage of a lake."
    },
    {
        topic: "ai",
        quest: "When using pd.read_csv(), you notice that one of your numeric columns is loaded as the 'object' dtype. What is the most reliable deduction you can make?",
        hasContent: false,
        choices: [
            "The column contains numbers that are too large for a 64-bit float.",
            "There are non-numeric values (like text, 'NA', or special characters) somewhere in that column.",
            "The CSV file is corrupted and missing its header.",
            "Pandas always loads the first numeric column as an object."
        ],
        correct: "There are non-numeric values (like text, 'NA', or special characters) somewhere in that column."
    },
    {
        topic: "ai",
        quest: "Which of the following lines of code represents the most CPU cache-friendly and idiomatic way to sum three columns in a pandas DataFrame?",
        hasContent: true,
        contentType: "code",
        codeLanguage: "python",
        content: "# Option A\ndf['sum'] = df.apply(lambda x: x['c1']+x['c2']+x['c3'], axis=1)\n\n# Option B\ndf['sum'] = df['c1'] + df['c2'] + df['c3']",
        choices: [
            "Option A, because apply() uses map-reduce internally.",
            "Option A, because iterating by axis=1 is optimized for column-major layouts.",
            "Option B, because vectorized column operations take advantage of contiguous memory blocks in pandas.",
            "Neither, you must convert the DataFrame to a dictionary first."
        ],
        correct: "Option B, because vectorized column operations take advantage of contiguous memory blocks in pandas."
    },
    {
        topic: "ai",
        quest: "Why might a company choose to heavily invest in First-Party data rather than relying on Third-Party data for their ML recommendation systems?",
        hasContent: true,
        contentType: "text",
        content: "First-party data is collected directly from users.",
        choices: [
            "First-party data is inherently anonymized.",
            "Third-party data is always cheaper to acquire.",
            "Due to privacy regulations and platform changes (like opt-in ad tracking), third-party data has become less granular and harder to acquire.",
            "First-party data is guaranteed to be perfectly structured."
        ],
        correct: "Due to privacy regulations and platform changes (like opt-in ad tracking), third-party data has become less granular and harder to acquire."
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
        console.log(`Successfully inserted ${result.insertedCount} questions for '2.1 Data Sources...'`);
        
        // Delete the processed file
        const targetFile = path.join(__dirname, '..', 'materials', '2.1 Data Sources, Structure, and RepresentationUnit.._.md');
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
