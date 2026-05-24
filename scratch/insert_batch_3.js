require('dotenv').config();
const { MongoClient } = require('mongodb');
const fs = require('fs');
const path = require('path');

const questions = [
    {
        topic: "ai",
        quest: "You are building the ingestion layer for an ML pipeline. Why is it a best practice to write incoming raw data directly to a 'landing zone' without performing any transformations first?",
        hasContent: false,
        choices: [
            "Because transforming data during ingestion takes too much CPU power.",
            "To decouple the source from the pipeline; saving the raw, unmodified data ensures you can always reprocess it later if downstream transformation logic changes or has a bug.",
            "Because landing zones automatically compress the data.",
            "To comply with GDPR data anonymization laws."
        ],
        correct: "To decouple the source from the pipeline; saving the raw, unmodified data ensures you can always reprocess it later if downstream transformation logic changes or has a bug."
    },
    {
        topic: "ai",
        quest: "A record arrives with `UnitPrice = -5.0`. Your validation layer detects this business rule violation. What is the standard engineering pattern for handling this specific record?",
        hasContent: false,
        choices: [
            "Silently drop the record to keep the pipeline moving.",
            "Automatically convert it to a positive number.",
            "Quarantine the bad record by sending it to a Dead Letter Queue (DLQ) for later inspection, while allowing valid records to pass through.",
            "Halt the entire pipeline and throw a fatal exception."
        ],
        correct: "Quarantine the bad record by sending it to a Dead Letter Queue (DLQ) for later inspection, while allowing valid records to pass through."
    },
    {
        topic: "ai",
        quest: "The 'Transformation' stage of your ETL pipeline computes daily revenue summaries. Due to a scheduler bug, the transformation runs twice on the same input data. If the output remains exactly the same and no data is double-counted, what critical property does your pipeline possess?",
        hasContent: false,
        choices: [
            "Concurrency",
            "Idempotency",
            "Latency optimization",
            "Immutability"
        ],
        correct: "Idempotency"
    },
    {
        topic: "ai",
        quest: "Why do modern data architectures strongly advocate for the 'Separation of Storage and Compute'?",
        hasContent: false,
        choices: [
            "It prevents SQL injection attacks.",
            "It forces data to be stored entirely in RAM.",
            "It allows independent scaling and cost-optimization; you can store massive datasets cheaply in object storage and only spin up (and pay for) expensive compute nodes when executing queries.",
            "It ensures that data is stored locally on the CPU cache."
        ],
        correct: "It allows independent scaling and cost-optimization; you can store massive datasets cheaply in object storage and only spin up (and pay for) expensive compute nodes when executing queries."
    },
    {
        topic: "ai",
        quest: "Your fraud model uses 'customer historical spending' (Offline feature) and 'transactions in the last 10 minutes' (Online feature). In production, the model's accuracy degrades because the online pipeline calculates 'transactions' differently than the offline training script did. What is this classic failure mode called?",
        hasContent: false,
        choices: [
            "Concept Drift",
            "Training-Serving Skew",
            "Data Leakage",
            "Class Imbalance"
        ],
        correct: "Training-Serving Skew"
    },
    {
        topic: "ai",
        quest: "You are setting up data quality monitoring. A pipeline that normally processes 100,000 rows per hour suddenly processes only 5,000 rows, though all 5,000 pass schema validation. Which specific quality metric has triggered an alarm?",
        hasContent: false,
        choices: [
            "Freshness",
            "Volume",
            "Schema",
            "Distribution"
        ],
        correct: "Volume"
    },
    {
        topic: "ai",
        quest: "In an incremental update pipeline, the system tracks the `last_processed` timestamp to know where to resume. What is the industry term for this tracking mechanism?",
        hasContent: true,
        contentType: "code",
        codeLanguage: "python",
        content: "new_data = [r for r in records if r['timestamp'] > hwm]",
        choices: [
            "Dead Letter Queue",
            "High-Water Mark",
            "Temporal Split",
            "Idempotent Key"
        ],
        correct: "High-Water Mark"
    },
    {
        topic: "ai",
        quest: "A regulatory audit asks exactly which customer records and which transformation code version were used to generate a specific ML model 6 months ago. What system capability allows you to answer this?",
        hasContent: false,
        choices: [
            "A Dead Letter Queue",
            "Data Lineage Tracking",
            "Incremental Refresh",
            "Feature Scaling"
        ],
        correct: "Data Lineage Tracking"
    },
    {
        topic: "ai",
        quest: "Your pipeline connects to a third-party API that randomly drops connections about 2% of the time due to transient network blips. What is the simplest resilience pattern to handle this without failing the pipeline?",
        hasContent: false,
        choices: [
            "Dead Letter Queue",
            "Retry with exponential backoff",
            "Full Refresh",
            "Idempotency"
        ],
        correct: "Retry with exponential backoff"
    },
    {
        topic: "ai",
        quest: "Which data path is inherently designed for latency optimization (responding in milliseconds) rather than throughput optimization?",
        hasContent: false,
        choices: [
            "The Offline Path (Batch)",
            "The Online Path (Real-time Stream)",
            "The Analytical Data Lake",
            "The Model Training Pipeline"
        ],
        correct: "The Online Path (Real-time Stream)"
    },
    {
        topic: "ai",
        quest: "A pipeline performs a 5-hour transformation job. At hour 4, a server crashes. To avoid restarting from hour 0, the pipeline design should incorporate:",
        hasContent: false,
        choices: [
            "Incremental updates",
            "Dead Letter Queues",
            "Checkpointing",
            "High-Water Marks"
        ],
        correct: "Checkpointing"
    },
    {
        topic: "ai",
        quest: "A 'Distribution' monitoring check fails in your pipeline. What does this likely mean?",
        hasContent: true,
        contentType: "text",
        content: "The schema hasn't changed, and the volume is normal.",
        choices: [
            "The API endpoint is completely down.",
            "The statistical properties of the data shifted dramatically (e.g., the mean transaction value jumped from $50 to $500), indicating either a data quality issue or a major business event.",
            "The data arrived 3 hours late.",
            "The data format changed from JSON to CSV."
        ],
        correct: "The statistical properties of the data shifted dramatically (e.g., the mean transaction value jumped from $50 to $500), indicating either a data quality issue or a major business event."
    },
    {
        topic: "ai",
        quest: "When late-arriving data enters an incremental pipeline (e.g. Tuesday data arriving on Thursday), what is the primary architectural dilemma?",
        hasContent: false,
        choices: [
            "Whether to scale the compute nodes.",
            "Whether to ignore the data, reprocess the entire historical window, or complexly append and reconcile the aggregates.",
            "Whether to change the schema to accommodate late data.",
            "Whether to switch from JSON to Parquet."
        ],
        correct: "Whether to ignore the data, reprocess the entire historical window, or complexly append and reconcile the aggregates."
    },
    {
        topic: "ai",
        quest: "You maintain three storage layers: Raw, Clean, and Feature. A bug is found in the ML aggregation logic used to create the Feature layer. Which layer allows you to regenerate the features without re-querying the external APIs?",
        hasContent: false,
        choices: [
            "The external APIs must be re-queried.",
            "The Feature layer itself.",
            "The Clean layer.",
            "The Monitoring layer."
        ],
        correct: "The Clean layer."
    },
    {
        topic: "ai",
        quest: "An online feature store's primary responsibility in an ML architecture is to:",
        hasContent: false,
        choices: [
            "Store massive amounts of historical data for model training.",
            "Provide extremely low-latency access to pre-calculated dynamic features for real-time model serving.",
            "Train models in real-time.",
            "Handle data visualization and BI dashboards."
        ],
        correct: "Provide extremely low-latency access to pre-calculated dynamic features for real-time model serving."
    },
    {
        topic: "ai",
        quest: "Which component inherently decouples storage scaling from compute scaling?",
        hasContent: false,
        choices: [
            "A traditional SQL database on a single massive server.",
            "A cloud-native data lake using Amazon S3 for storage and separate Spark clusters for compute.",
            "A Dead Letter Queue.",
            "A High-Water Mark tracker."
        ],
        correct: "A cloud-native data lake using Amazon S3 for storage and separate Spark clusters for compute."
    },
    {
        topic: "ai",
        quest: "Why is 'Freshness' a critical pipeline monitoring metric specifically for ML models?",
        hasContent: false,
        choices: [
            "Because models inherently run faster on newer data.",
            "Because if data stops arriving (stale data), an online model might serve predictions based on days-old features, completely invalidating the business logic.",
            "Because old data takes up more storage space.",
            "Because freshness determines the CPU temperature of the servers."
        ],
        correct: "Because if data stops arriving (stale data), an online model might serve predictions based on days-old features, completely invalidating the business logic."
    },
    {
        topic: "ai",
        quest: "What does the 'T' stand for in ETL pipelines?",
        hasContent: true,
        contentType: "code",
        codeLanguage: "python",
        content: "df['total'] = df['qty'] * df['price']\ndf = df.dropna()",
        choices: [
            "Transfer",
            "Transaction",
            "Transformation",
            "Transport"
        ],
        correct: "Transformation"
    },
    {
        topic: "ai",
        quest: "If you want to debug an unexpected drop in model performance, which system provides the necessary metadata linking the model back to the specific training dataset versions and annotation sources?",
        hasContent: false,
        choices: [
            "Data Lineage",
            "Data Ingestion",
            "Dead Letter Queue",
            "High-Water Mark"
        ],
        correct: "Data Lineage"
    },
    {
        topic: "ai",
        quest: "A full dataset refresh processes all historical data from scratch. When is this highly inefficient approach actually the *best* choice?",
        hasContent: false,
        choices: [
            "When the dataset is 100 Terabytes.",
            "When dealing with strict real-time streaming constraints.",
            "When the core transformation logic has been fundamentally rewritten and you must backfill all historical data to match the new logic.",
            "When handling late-arriving data on a minute-by-minute basis."
        ],
        correct: "When the core transformation logic has been fundamentally rewritten and you must backfill all historical data to match the new logic."
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
        console.log(`Successfully inserted ${result.insertedCount} questions for '2.7 Practical Data Pipelines.md'`);
        
        // Delete the processed file
        const targetFile = path.join(__dirname, '..', 'materials', '2.7 Practical Data Pipelines.md');
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
