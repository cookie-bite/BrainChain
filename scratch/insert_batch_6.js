require('dotenv').config();
const { MongoClient } = require('mongodb');
const fs = require('fs');
const path = require('path');

const questions = [
    {
        topic: "ai",
        quest: "In a classical ETL pipeline, why is strict data validation performed during the 'Extract' phase rather than waiting until the 'Transform' phase?",
        hasContent: false,
        choices: [
            "To speed up the extraction process.",
            "To catch corrupted data or schema violations as early as possible, preventing bad data from silently propagating through the pipeline and ruining downstream machine learning models.",
            "Because validation requires SQL aggregations.",
            "To compress the data before saving it to disk."
        ],
        correct: "To catch corrupted data or schema violations as early as possible, preventing bad data from silently propagating through the pipeline and ruining downstream machine learning models."
    },
    {
        topic: "ai",
        quest: "An architecture team decides to switch from an ETL pattern to an ELT pattern. What is the fundamental change they are making to their data pipeline?",
        hasContent: false,
        choices: [
            "They are switching from Python to Java.",
            "They are extracting data, loading it completely raw into a Data Lake, and then performing the transformations later, trading early structure for faster ingestion and maximum flexibility.",
            "They are completely abandoning batch processing in favor of real-time streaming.",
            "They are extracting data, applying machine learning models immediately, and then loading the predictions."
        ],
        correct: "They are extracting data, loading it completely raw into a Data Lake, and then performing the transformations later, trading early structure for faster ingestion and maximum flexibility."
    },
    {
        topic: "ai",
        quest: "A ride-sharing app uses Microservices. A user requests a ride, and the `PriceOptimizationService` sends synchronous REST requests to the `DriverService` and `RideDemandService`. If the `DriverService` crashes, what happens to the user's price request?",
        hasContent: false,
        choices: [
            "The `PriceOptimizationService` automatically uses a cached machine learning model.",
            "The request fails or hangs because the synchronous service-to-service communication creates a rigid dependency chain; the price service cannot complete its work without the driver service.",
            "The Kafka broker handles the crash and restarts the service.",
            "The `RideDemandService` takes over the calculation."
        ],
        correct: "The request fails or hangs because the synchronous service-to-service communication creates a rigid dependency chain; the price service cannot complete its work without the driver service."
    },
    {
        topic: "ai",
        quest: "To fix the rigid dependency chains of synchronous microservices, an architect introduces Apache Kafka. How does a Publish-Subscribe (PubSub) system decouple the services?",
        hasContent: false,
        choices: [
            "It forces all services to run on the exact same physical server.",
            "Instead of services calling each other directly, they publish event data to a broker. Any service that needs that data simply subscribes to it. If a consuming service crashes, the publishing service is entirely unaffected.",
            "It translates REST API calls into GraphQL.",
            "It stores all data in a single massive SQL table."
        ],
        correct: "Instead of services calling each other directly, they publish event data to a broker. Any service that needs that data simply subscribes to it. If a consuming service crashes, the publishing service is entirely unaffected."
    },
    {
        topic: "ai",
        quest: "What is the primary difference between a 'Publish-Subscribe (PubSub)' transport like Kafka and a 'Message Queue' like RabbitMQ?",
        hasContent: false,
        choices: [
            "Kafka uses SQL, RabbitMQ uses NoSQL.",
            "In PubSub, any number of consumers can subscribe to and read the same events; in a Message Queue, a message is typically routed to a specific consumer and consumed only once.",
            "PubSub is for batch processing, Message Queues are for stream processing.",
            "Message Queues are significantly faster but lose data."
        ],
        correct: "In PubSub, any number of consumers can subscribe to and read the same events; in a Message Queue, a message is typically routed to a specific consumer and consumed only once."
    },
    {
        topic: "ai",
        quest: "An ML model predicts fraud. It uses the feature 'total_transactions_last_30_days' (updated nightly) and 'transactions_last_5_minutes' (updated instantly). In ML engineering terms, what are these feature types called?",
        hasContent: false,
        choices: [
            "Static (Batch) features and Dynamic (Streaming) features.",
            "Relational features and Document features.",
            "ETL features and ELT features.",
            "Synchronous features and Asynchronous features."
        ],
        correct: "Static (Batch) features and Dynamic (Streaming) features."
    },
    {
        topic: "ai",
        quest: "In computer science theory, why is Batch Processing considered merely a 'special case' of Stream Processing?",
        hasContent: false,
        choices: [
            "Because stream processing is older.",
            "Because if you have a stream processor (like Flink), you can process historical batch data simply by replaying it through the stream engine, but a batch processor (like Hadoop) cannot process real-time events continuously.",
            "Because batch processing requires more RAM.",
            "Because they use the exact same Python libraries."
        ],
        correct: "Because if you have a stream processor (like Flink), you can process historical batch data simply by replaying it through the stream engine, but a batch processor (like Hadoop) cannot process real-time events continuously."
    },
    {
        topic: "ai",
        quest: "You are building a live dashboard showing 'Current Active Users in the last 60 seconds'. Why is a traditional Database-backed architecture (Process A writes to DB, Process B reads from DB) a poor choice for this specific feature?",
        hasContent: false,
        choices: [
            "Databases cannot store numbers.",
            "The latency and overhead of constant disk-level database writes and reads are too high for millisecond-level real-time stateful computation; a Stream Processor is required.",
            "The database will run out of storage space in 60 seconds.",
            "SQL cannot perform COUNT aggregations."
        ],
        correct: "The latency and overhead of constant disk-level database writes and reads are too high for millisecond-level real-time stateful computation; a Stream Processor is required."
    },
    {
        topic: "ai",
        quest: "During the 'Transform' step of an ETL pipeline, you merge a table of 'purchases' with a table of 'user_profiles'. What is the primary analytical goal of this operation?",
        hasContent: true,
        contentType: "code",
        codeLanguage: "python",
        content: "enriched = purchases.merge(user_profiles, on='user_id', how='left')",
        choices: [
            "Data Validation",
            "Data Enrichment; combining data from multiple sources to add context (like demographic features) to raw events for downstream ML models.",
            "Data Deduplication",
            "Data Extraction"
        ],
        correct: "Data Enrichment; combining data from multiple sources to add context (like demographic features) to raw events for downstream ML models."
    },
    {
        topic: "ai",
        quest: "A data engineer states: 'We use gRPC instead of REST for internal microservice communication.' What is the most likely reason for this choice?",
        hasContent: false,
        choices: [
            "gRPC operates entirely without network connections.",
            "gRPC uses Protocol Buffers (binary serialization) which is significantly faster and more efficient for internal Service-to-Service communication compared to REST's text-based JSON.",
            "gRPC natively stores data in a PostgreSQL database.",
            "gRPC is the only protocol supported by Python."
        ],
        correct: "gRPC uses Protocol Buffers (binary serialization) which is significantly faster and more efficient for internal Service-to-Service communication compared to REST's text-based JSON."
    },
    {
        topic: "ai",
        quest: "When designing a real-time ML feature pipeline, what makes stream processing stateful computation (like a 30-day rolling window) so powerful?",
        hasContent: false,
        choices: [
            "It recalculates the entire 30 days of data every single time a new event arrives.",
            "It maintains a running state in memory and updates it incrementally as each new event arrives (computing only the delta), avoiding massive recalculations.",
            "It permanently deletes all data older than 30 days.",
            "It converts the stream into an immutable Parquet file."
        ],
        correct: "It maintains a running state in memory and updates it incrementally as each new event arrives (computing only the delta), avoiding massive recalculations."
    },
    {
        topic: "ai",
        quest: "If you need to process data where relationships and connections between entities are the primary subject of your queries (e.g. social networks, fraud rings), but your data arrives continuously as a stream of events, what architecture is needed?",
        hasContent: false,
        choices: [
            "A traditional relational database with ETL.",
            "A stream processor (like Kafka/Flink) feeding continuous event updates into a Graph Database.",
            "An ELT process feeding a Document Database (MongoDB).",
            "A Pandas DataFrame running on a local laptop."
        ],
        correct: "A stream processor (like Kafka/Flink) feeding continuous event updates into a Graph Database."
    },
    {
        topic: "ai",
        quest: "Which of the following represents the 'Load' step in an ETL pipeline script?",
        hasContent: true,
        contentType: "code",
        codeLanguage: "python",
        content: "df = pd.DataFrame(valid_records)\ndf['ts'] = pd.to_datetime(df['ts'])\nenriched.to_parquet('purchases.parquet', index=False)",
        choices: [
            "df = pd.DataFrame(valid_records)",
            "df['ts'] = pd.to_datetime(df['ts'])",
            "enriched.to_parquet('purchases.parquet', index=False) - because it is writing the transformed data to its final analytical destination.",
            "import pandas as pd"
        ],
        correct: "enriched.to_parquet('purchases.parquet', index=False) - because it is writing the transformed data to its final analytical destination."
    },
    {
        topic: "ai",
        quest: "Why do modern data lakehouses (like Databricks or Snowflake) blur the lines between ETL and ELT?",
        hasContent: false,
        choices: [
            "They enforce a strict ETL-only policy.",
            "They support both cheap raw data storage (Data Lake functionality for ELT) and highly structured analytical query engines (Data Warehouse functionality for ETL) in the exact same platform.",
            "They only support stream processing, making batch ETL obsolete.",
            "They completely automate machine learning model training."
        ],
        correct: "They support both cheap raw data storage (Data Lake functionality for ELT) and highly structured analytical query engines (Data Warehouse functionality for ETL) in the exact same platform."
    },
    {
        topic: "ai",
        quest: "A feature store's primary purpose in a production ML system is to:",
        hasContent: false,
        choices: [
            "Extract raw JSON from third-party APIs.",
            "Train machine learning models using GPU acceleration.",
            "Act as the central 'Load' destination where both batch (static) and streaming (dynamic) pipelines merge, providing a unified API for the model to fetch features during prediction.",
            "Replace the Message Broker."
        ],
        correct: "Act as the central 'Load' destination where both batch (static) and streaming (dynamic) pipelines merge, providing a unified API for the model to fetch features during prediction."
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
        console.log(`Successfully inserted ${result.insertedCount} questions for '2.4 ETL Workflows'`);
        
        // Delete the processed file
        const targetFile = path.join(__dirname, '..', 'materials', '2.4 ETL Workflows and Dataflow Between Systems.md');
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
