require('dotenv').config();
const { MongoClient } = require('mongodb');
const fs = require('fs');
const path = require('path');

const questions = [
    {
        topic: "ai",
        quest: "In Hypothesis Testing, what exactly is the Null Hypothesis ($H_0$)?",
        hasContent: false,
        choices: [
            "The claim that your new machine learning model is definitively better than the old one.",
            "The default assumption that nothing interesting is happening (e.g., there is no difference, no effect, no relationship).",
            "The hypothesis that the data is perfectly normally distributed.",
            "The probability of making a Type I error."
        ],
        correct: "The default assumption that nothing interesting is happening (e.g., there is no difference, no effect, no relationship)."
    },
    {
        topic: "ai",
        quest: "A junior analyst tells you: 'The p-value is 0.02, which means there is a 2% chance that the Null Hypothesis is true.' Why is this statement statistically incorrect?",
        hasContent: false,
        choices: [
            "Because the p-value actually represents the probability that the Alternative Hypothesis is true.",
            "Because the p-value is the probability of observing data this extreme ASSUMING the Null Hypothesis is true, not the probability that the hypothesis itself is true.",
            "Because p-values must be greater than 0.05 to be interpreted.",
            "Because 0.02 means there is a 98% chance the Null Hypothesis is true."
        ],
        correct: "Because the p-value is the probability of observing data this extreme ASSUMING the Null Hypothesis is true, not the probability that the hypothesis itself is true."
    },
    {
        topic: "ai",
        quest: "An A/B test on a massive dataset of 5 million users shows a new button color increases revenue by $0.0001 per user, with a p-value of 0.001. What critical lesson about p-values does this demonstrate?",
        hasContent: false,
        choices: [
            "A tiny p-value always means the business should immediately launch the feature.",
            "Statistical significance is exactly the same as practical importance.",
            "With a massive sample size, even a trivially small, practically meaningless effect can produce a highly 'significant' (tiny) p-value.",
            "The Null Hypothesis was true."
        ],
        correct: "With a massive sample size, even a trivially small, practically meaningless effect can produce a highly 'significant' (tiny) p-value."
    },
    {
        topic: "ai",
        quest: "You are designing an A/B test. You decide to set your Significance Level ($\\alpha$) to 0.01 instead of the standard 0.05. What is the direct consequence of this choice?",
        hasContent: false,
        choices: [
            "You drastically increase your chance of a Type I error (False Positive).",
            "You make it much harder to reject the Null Hypothesis, reducing Type I errors (False Positives) but increasing the risk of Type II errors (False Negatives).",
            "You guarantee that your test will have 99% Power.",
            "You eliminate the need to calculate an effect size."
        ],
        correct: "You make it much harder to reject the Null Hypothesis, reducing Type I errors (False Positives) but increasing the risk of Type II errors (False Negatives)."
    },
    {
        topic: "ai",
        quest: "In medical testing for a fatal disease, failing to diagnose a sick patient means they die without treatment. Diagnosing a healthy patient as sick just causes temporary anxiety until a secondary test clears them. Which statistical error should the hospital minimize at all costs?",
        hasContent: false,
        choices: [
            "Type I Error (False Positive)",
            "Type II Error (False Negative); failing to reject the null (healthy) when the alternative (sick) is actually true.",
            "Standard Error",
            "Sampling Error"
        ],
        correct: "Type II Error (False Negative); failing to reject the null (healthy) when the alternative (sick) is actually true."
    },
    {
        topic: "ai",
        quest: "What is the statistical 'Power' of a hypothesis test?",
        hasContent: true,
        contentType: "math",
        content: "\\text{Power} = 1 - \\beta",
        choices: [
            "The probability of correctly rejecting the Null Hypothesis when the Alternative Hypothesis is true (i.e., successfully detecting a real effect).",
            "The probability of making a Type I Error.",
            "The size of the sample divided by the standard deviation.",
            "The probability of a false positive."
        ],
        correct: "The probability of correctly rejecting the Null Hypothesis when the Alternative Hypothesis is true (i.e., successfully detecting a real effect)."
    },
    {
        topic: "ai",
        quest: "A researcher is comparing the average session times of two entirely different groups of users (Mobile vs Desktop). What is the most appropriate test to use?",
        hasContent: false,
        choices: [
            "One-Sample t-test",
            "Paired t-test",
            "Two-Sample t-test (independent samples)",
            "Chi-Square test"
        ],
        correct: "Two-Sample t-test (independent samples)"
    },
    {
        topic: "ai",
        quest: "When using `scipy.stats.ttest_ind()` to perform a Two-Sample t-test, it is highly recommended to set `equal_var=False`. What specific test does this parameter trigger?",
        hasContent: true,
        contentType: "code",
        codeLanguage: "python",
        content: "stats.ttest_ind(group_a, group_b, equal_var=False)",
        choices: [
            "Student's t-test",
            "Welch's t-test; which is more robust because it does not blindly assume the two groups have exactly equal variances.",
            "The Mann-Whitney U test",
            "The Bonferroni Correction"
        ],
        correct: "Welch's t-test; which is more robust because it does not blindly assume the two groups have exactly equal variances."
    },
    {
        topic: "ai",
        quest: "A fitness app measures the resting heart rate of 50 users BEFORE they start a workout program, and measures the SAME 50 users AFTER 6 weeks. Why is a Paired t-test much more powerful here than a Two-Sample t-test?",
        hasContent: false,
        choices: [
            "Because Paired t-tests assume unequal variances.",
            "Because it analyzes the within-subject differences directly, eliminating the massive between-person variability (e.g., naturally high vs low heart rates) that would add noise to an unpaired test.",
            "Because it doubles the effective sample size to 100.",
            "Because the data is completely independent."
        ],
        correct: "Because it analyzes the within-subject differences directly, eliminating the massive between-person variability (e.g., naturally high vs low heart rates) that would add noise to an unpaired test."
    },
    {
        topic: "ai",
        quest: "If your two groups have tiny sample sizes ($N=12$) and you discover the data is severely skewed (non-normal), what non-parametric alternative to the Two-Sample t-test should you use?",
        hasContent: false,
        choices: [
            "Welch's t-test",
            "Mann-Whitney U test",
            "One-Sample t-test",
            "Cohen's d test"
        ],
        correct: "Mann-Whitney U test"
    },
    {
        topic: "ai",
        quest: "Cohen's d is a standard measure of Effect Size. If Cohen's d is calculated to be 0.85, what does this tell you about the difference between the two groups?",
        hasContent: false,
        choices: [
            "There is an 85% probability the groups are different.",
            "The p-value is exactly 0.85.",
            "The difference between the group means is 0.85 pooled standard deviations; this is generally considered a 'large' magnitude effect.",
            "The difference is statistically insignificant."
        ],
        correct: "The difference between the group means is 0.85 pooled standard deviations; this is generally considered a 'large' magnitude effect."
    },
    {
        topic: "ai",
        quest: "You are testing 20 different button colors on your website simultaneously against a control, using $\\alpha = 0.05$ for each test. None of the colors are actually better. What is the approximate probability that you will get AT LEAST ONE 'statistically significant' result purely by chance?",
        hasContent: true,
        contentType: "math",
        content: "1 - (1 - \\alpha)^n = 1 - 0.95^{20}",
        choices: [
            "Exactly 5%",
            "Roughly 64%; this is the Multiple Testing Problem, where running many tests drastically inflates the overall false positive rate.",
            "0%",
            "Exactly 20%"
        ],
        correct: "Roughly 64%; this is the Multiple Testing Problem, where running many tests drastically inflates the overall false positive rate."
    },
    {
        topic: "ai",
        quest: "To combat the Multiple Testing Problem when running 10 separate hypothesis tests, a data scientist divides their significance level by 10 ($\\alpha_{new} = 0.05 / 10 = 0.005$). What is this conservative correction method called?",
        hasContent: false,
        choices: [
            "The Benjamini-Hochberg Procedure",
            "The Bonferroni Correction",
            "Welch's Correction",
            "The False Discovery Rate (FDR)"
        ],
        correct: "The Bonferroni Correction"
    },
    {
        topic: "ai",
        quest: "What is the primary advantage of the Benjamini-Hochberg (FDR) correction over the Bonferroni correction in multiple testing?",
        hasContent: false,
        choices: [
            "It guarantees exactly zero false positives.",
            "It controls the False Discovery Rate (the proportion of false positives among rejected hypotheses) rather than strictly bounding the family-wise error rate, making it less conservative and more powerful.",
            "It automatically increases the sample size of the dataset.",
            "It only requires a single p-value."
        ],
        correct: "It controls the False Discovery Rate (the proportion of false positives among rejected hypotheses) rather than strictly bounding the family-wise error rate, making it less conservative and more powerful."
    },
    {
        topic: "ai",
        quest: "A One-Sided hypothesis test concentrates the entire $\\alpha$ region (e.g., 5%) into a single tail of the distribution. Why shouldn't you always use a one-sided test, since it makes getting a 'significant' result easier?",
        hasContent: false,
        choices: [
            "Because you must have a strong prior reason to expect the effect to go strictly in that direction, and you completely forfeit the ability to detect an effect in the opposite direction.",
            "Because Python does not support one-sided tests.",
            "Because it doubles the required sample size.",
            "Because it increases the Type II error rate to 95%."
        ],
        correct: "Because you must have a strong prior reason to expect the effect to go strictly in that direction, and you completely forfeit the ability to detect an effect in the opposite direction."
    },
    {
        topic: "ai",
        quest: "You run a t-test and calculate a t-statistic of $t = 3.5$. What does this value physically represent regarding your sample mean?",
        hasContent: true,
        contentType: "math",
        content: "t = \\frac{\\bar{x} - \\mu_0}{s / \\sqrt{n}}",
        choices: [
            "The sample mean is 3.5 units larger than the population mean.",
            "The sample mean is 3.5 Standard Errors away from the hypothesized null value.",
            "The probability of the null hypothesis being true is 3.5%.",
            "The sample standard deviation is 3.5."
        ],
        correct: "The sample mean is 3.5 Standard Errors away from the hypothesized null value."
    },
    {
        topic: "ai",
        quest: "A data scientist concludes a presentation by saying, 'We failed to reject the null hypothesis.' An executive responds, 'Great, so you proved the new feature has zero effect!' How should the data scientist correct the executive?",
        hasContent: false,
        choices: [
            "'Yes, the p-value was high, so the effect is exactly zero.'",
            "'Failing to reject the null hypothesis does not PROVE the null is true. It simply means our data did not provide enough strong evidence to prove it is false. We might just lack statistical power.'",
            "'No, we proved the alternative hypothesis is true.'",
            "'We need to switch to a one-sided test to prove it.'"
        ],
        correct: "'Failing to reject the null hypothesis does not PROVE the null is true. It simply means our data did not provide enough strong evidence to prove it is false. We might just lack statistical power.'"
    },
    {
        topic: "ai",
        quest: "Which combination of test results provides the MOST complete and actionable information to a business stakeholder?",
        hasContent: false,
        choices: [
            "Only the p-value.",
            "Only the t-statistic.",
            "Only the Effect Size (Cohen's d).",
            "The p-value (to prove the effect is real/not noise) PLUS the Effect Size and Confidence Interval (to show if the magnitude of the effect actually matters practically)."
        ],
        correct: "The p-value (to prove the effect is real/not noise) PLUS the Effect Size and Confidence Interval (to show if the magnitude of the effect actually matters practically)."
    },
    {
        topic: "ai",
        quest: "If you decrease your Significance Level ($\\alpha$) from 0.05 to 0.01 without changing your sample size, what mathematically happens to the Power ($1 - \\beta$) of your hypothesis test?",
        hasContent: false,
        choices: [
            "Power increases.",
            "Power decreases; by demanding stronger evidence to reject the null (fewer false alarms), you inherently miss more real effects (more false negatives).",
            "Power remains exactly the same.",
            "Power reaches 100%."
        ],
        correct: "Power decreases; by demanding stronger evidence to reject the null (fewer false alarms), you inherently miss more real effects (more false negatives)."
    },
    {
        topic: "ai",
        quest: "What happens if a data scientist aggressively 'p-hacks' by constantly checking their A/B test results every hour, and stopping the test the exact moment the p-value dips below 0.05?",
        hasContent: false,
        choices: [
            "They optimize the experiment duration perfectly.",
            "They guarantee a 100% true positive rate.",
            "They massively inflate their Type I Error rate; randomly fluctuating data will eventually cross the significance threshold by pure chance if checked continuously.",
            "They decrease the Type II Error rate to 0."
        ],
        correct: "They massively inflate their Type I Error rate; randomly fluctuating data will eventually cross the significance threshold by pure chance if checked continuously."
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
        console.log(`Successfully inserted ${result.insertedCount} questions for '3.5 Hypothesis Testing'`);
        
        // Delete the processed file
        const targetFile = path.join(__dirname, '..', 'materials', '3.5 Hypothesis Testing and p-values.md');
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
