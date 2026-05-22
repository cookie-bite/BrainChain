## Mission Control: The Mars Lander Challenge

[

Unit 3 – Statistical Reasoning & Uncertainty





](https://preview.my.ironhack.com/lms/courses/github:course:Data-AI-IDDA:data-ai-idda:cohort-B2B-DAAIPT-20260216-HYB-EN/modules/module_3_unit-3-statistical-reasoning-uncertainty)

19 Mar 2026

[

Mission Control: The Mars Lander Challenge

](https://preview.my.ironhack.com/lms/courses/github:course:Data-AI-IDDA:data-ai-idda:cohort-B2B-DAAIPT-20260216-HYB-EN/modules/module_3_unit-3-statistical-reasoning-uncertainty/units/unit_3_3_0_mission-control-the-mars-lander-challenge)

## Mission Control: The Mars Lander Challenge

CLASS ACTIVITY

## Overview

Welcome to **Mission Control** — a 4-hour team competition where you will design, defend, and stress-test a probabilistic guidance system for a Mars lander. This is not a coding exercise. This is an engineering design challenge grounded in probability. You will use whiteboards, paper, back-of-the-envelope calculations, and sharp debate. Quick computations or simulations are welcome for verification, but the core deliverable is a _decision architecture_ backed by _probabilistic reasoning_.

There are no right answers — only trade-offs between crashing and wasting fuel. The winning team is the one that navigates these trade-offs most convincingly.

## The Mission

The year is 2032. Your team is the guidance systems group at a private space company. Your lander, **Ares IV**, is about to attempt a precision landing on Mars. The entire descent — from atmosphere entry to touchdown — takes approximately 7 minutes. During this time, the lander must autonomously decide when to fire its braking engines, how to adjust its trajectory, and whether to abort. Earth is 14 light-minutes away, so no human can help in real time.

Your job: **design the probabilistic decision logic that keeps the lander alive.**

## The Sensors (noisy, biased, and mortal)

The lander carries three independent sensors. Each measures altitude above the surface, but each has different characteristics:

### Sensor A — Radar Altimeter

- **What it does:** Bounces radio waves off the surface and measures the return time
- **Noise model:** Gaussian noise with standard deviation of 50 meters at high altitude, improving to 5 meters below 500m
- **Bias:** Systematically reads 20 meters too high over rocky terrain (the radar bounces off ridges above the mean surface)
- **Failure mode:** Can lock onto a false echo from dust clouds. When this happens, it suddenly reports an altitude 300–800 meters lower than reality. Probability of false lock: 3% per minute of operation
- **Failure signature:** The reading drops suddenly rather than gradually

### Sensor B — Inertial Measurement Unit (IMU)

- **What it does:** Tracks acceleration and integrates to estimate velocity and position. Does not directly measure altitude — it _calculates_ altitude from a known starting point
- **Noise model:** Small errors accumulate over time (drift). After $t$ minutes of operation, position error is approximately Gaussian with standard deviation $\sigma_B = 15\sqrt{t}$ meters
- **Bias:** None inherent, but the drift is one-directional within any given descent (once it starts drifting high, it keeps drifting high)
- **Failure mode:** Rarely fails outright. However, a hard vibration event (like engine ignition) can cause a sudden offset of 50–200 meters. Probability of shock-induced offset at engine ignition: 8%
- **Failure signature:** A sudden step change in the reading, not a gradual drift

### Sensor C — Terrain-Relative Navigation Camera

- **What it does:** Photographs the surface and matches features against a stored map to estimate position and altitude
- **Noise model:** Gaussian with standard deviation of 30 meters in good conditions
- **Bias:** Accuracy degrades severely when dust is kicked up by the engines. Below 200 meters altitude, noise standard deviation increases to 150 meters. Below 50 meters, the camera is essentially useless (dust whiteout)
- **Failure mode:** Complete failure if the landing site does not match the stored map (e.g., a recent landslide changed the terrain). Probability of map mismatch: 5%
- **Failure signature:** The matching algorithm reports low confidence scores before failing entirely

### Summary Table

|Sensor|Noise (σ)|Known Bias|Failure Prob|When It's Best|When It's Worst|
|---|---|---|---|---|---|
|A (Radar)|50m → 5m (improves with altitude)|+20m over rocks|3%/min (false lock)|Low altitude, smooth terrain|Dusty conditions, rocky terrain|
|B (IMU)|$15\sqrt{t}$ meters (grows)|Drift direction|8% at ignition (shock)|Early descent, short durations|Long descents, after vibration|
|C (Camera)|30m → 150m (degrades low)|None|5% (map mismatch)|High/mid altitude, clear air|Below 200m, dust, terrain change|

## The Descent Timeline

The 7-minute descent has four phases. Your decision system must handle all of them:

|Phase|Altitude|Duration|What Happens|
|---|---|---|---|
|**Entry**|125 km → 10 km|0:00–4:00|Atmospheric braking. Sensors warm up. IMU drift begins accumulating|
|**Parachute**|10 km → 1.5 km|4:00–5:30|Parachute deploys. All three sensors now active. Key decision: when to drop the parachute and ignite engines|
|**Powered descent**|1.5 km → 50 m|5:30–6:40|Engines firing. Radar improves, camera degrades, IMU risk of shock offset|
|**Terminal**|50 m → 0 m|6:40–7:00|Final approach. Camera nearly useless. Must commit to landing or abort|

## The Decisions Your System Must Make

### Decision 1 — Sensor Fusion

At every moment, you have up to three altitude estimates that may disagree. How do you combine them into a single "best estimate"?

- Do you take a weighted average? What are the weights, and how do they change over time?
- How do you compute $P(\text{true altitude} \mid \text{sensor A reading}, \text{sensor B reading}, \text{sensor C reading})$?
- When two sensors agree and one disagrees wildly, what do you do? At what threshold of disagreement do you discard a sensor?

### Decision 2 — Failure Detection

How do you detect that a sensor has failed?

- Sensor A false-locks suddenly. What statistical test detects a "sudden drop" vs normal noise?
- Sensor B has a shock offset at ignition. How do you distinguish an 8% chance offset from normal drift?
- Sensor C confidence degrades gradually. At what confidence score do you stop trusting it?
- If you declare a sensor failed when it hasn't (false alarm), you lose information. If you keep trusting a failed sensor, it corrupts your estimate. What is the cost of each error?

### Decision 3 — Engine Ignition Timing

The engines must ignite at approximately 1.5 km altitude. Too early means wasting fuel (the lander carries only 40 seconds of fuel margin). Too late means hitting the ground at lethal speed.

- If your altitude estimate has uncertainty $\sigma$, and you ignite at estimated altitude $\hat{h}$, what is the probability that the true altitude is actually below the safe ignition threshold?
- How much fuel margin do you sacrifice for safety? There is an explicit trade-off: igniting 100 meters early costs ~3 seconds of fuel but reduces crash probability. Quantify this.

### Decision 4 — Abort Criteria

At what point do you abandon the landing attempt?

- If all three sensors disagree by more than some threshold, do you abort?
- If estimated fuel remaining drops below a critical level, do you abort?
- Aborting is itself dangerous (the lander must execute an untested emergency maneuver with a 15% failure rate). So aborting is not free — it trades one risk for another. At what point is aborting _less risky_ than continuing?

## Your Deliverable

Design the complete decision system on paper/whiteboard. You must specify:

1. **The Fusion Model** — How do you combine sensor readings into a single altitude estimate with a quantified uncertainty? Show the formulas. How do the weights shift across descent phases?
    
2. **The Failure Detector** — For each sensor, what is your detection rule? What is the probability of detecting a real failure (sensitivity)? What is the probability of a false alarm (1 − specificity)? Show the trade-off explicitly.
    
3. **The Ignition Rule** — At what estimated altitude (and with what uncertainty) do you ignite? Show the expected cost calculation: $P(\text{crash}) \times \text{cost}_{\text{crash}}$ vs $P(\text{fuel waste}) \times \text{cost}_{\text{fuel waste}}$.
    
4. **The Abort Boundary** — Define the conditions under which you abort. Show that the probability of surviving an abort is higher than the probability of surviving a continued landing attempt under those conditions.
    
5. **The Descent Timeline Diagram** — A visual showing which sensors you trust in each phase, when weights shift, when failure checks fire, and where your decision points are.
    

## Competition Structure

### Act 1 — Design Phase (90 minutes)

Form teams of 3–4 people. Each team works independently to design their guidance system.

**Guiding questions for your design session:**

- If Sensor A reads 1200m, Sensor B reads 1350m, and Sensor C reads 1280m, what is your best estimate? What is your uncertainty? What if Sensor A suddenly reads 600m on the next measurement — what changes?
- The IMU drift after 5 minutes is $\sigma_B = 15\sqrt{5} \approx 33.5$ meters. How does this compare to the radar's 50m noise? When does the IMU become _less_ trustworthy than the radar?
- Engine ignition: your estimate is $\hat{h} = 1500m$ with $\sigma = 60m$. What is $P(\text{true altitude} < 1300m)$? Is that acceptable?
- You detect a discrepancy: sensors A and C read ~1100m, sensor B reads 900m. Is sensor B broken, or are A and C both biased by terrain? How do you decide?

**You may use Python/calculators for:**

- Computing Gaussian probabilities, CDFs, and confidence intervals
- Simulating sensor readings to test your fusion weights
- Evaluating expected costs under different ignition altitudes

**You should produce (on paper/whiteboard):**

- A descent timeline diagram with sensor trust regions and decision points
- The mathematical framework for sensor fusion (formulas, weights, update rules)
- A failure detection decision tree for each sensor
- An expected cost table for at least three different ignition altitude choices
- Your abort criteria with the probability argument for why aborting beats continuing

### Act 2 — The Adversary Round (60 minutes)

Teams exchange their system designs with another team. You are now **Mission Saboteurs** — your job is to construct descent scenarios that break the other team's system.

**Your mission:**

- **Construct a killer scenario:** Design a specific sequence of sensor readings over the 7-minute descent that would cause the other team's system to make a fatal error. Be precise — give actual numbers, not hand-waving
- **Find the blind spot:** Did they handle the case where the IMU drifts _and_ the radar false-locks simultaneously? What is the compound probability, and did they plan for it?
- **Break the ignition timing:** If you add an extra 20m of systematic bias to the radar (worse rocky terrain than expected), does their ignition rule still produce an acceptable crash probability?
- **Test the abort logic:** Construct a scenario where their system _should_ abort but doesn't, or _does_ abort when it shouldn't. What is the cost?
- **Stress the transitions:** The moment when the camera becomes unreliable (below 200m) and the radar becomes accurate is a critical handoff. What happens if the handoff is not clean?

Prepare a **5-minute adversary brief** — walk through your killer scenario step by step, showing exactly when and how the other team's lander crashes or wastes all its fuel.

### Act 3 — Grand Presentations & Mission Review (90 minutes)

Each team cycle takes approximately 20–25 minutes:

1. **Mission Brief (10 min):** Present your guidance system to the class. Walk through the descent timeline, sensor fusion model, failure detectors, ignition rule, and abort criteria. Draw on the whiteboard. Show the math.
    
2. **Adversary Scenario (5 min):** The adversary team presents their killer scenario. They walk through the descent second by second, showing how the lander's system responds — and where it goes wrong.
    
3. **Emergency Response (5 min):** The presenting team responds. Did they anticipate this scenario? Can they show why their system survives it, or do they acknowledge the failure and propose a fix?
    
4. **Mission Review Board Questions (3–5 min):** The class acts as a review board. Anyone can ask questions or propose additional scenarios.
    

**After all teams present:**

The class votes on three awards:

- **Safest Lander** — the system design most likely to survive the widest range of scenarios
- **Most Devastating Sabotage** — the adversary scenario that most convincingly destroyed a lander
- **Best Under Pressure** — the team that handled the toughest adversary attack most gracefully

## Facilitator Notes

### Timing Summary

|Segment|Duration|
|---|---|
|**Block 1**|**2 hours**|
|Mission briefing & team formation|10 min|
|Act 1 — Design Phase|80 min|
|Wrap-up & adversary team assignments|10 min|
|**Break**|**30 min**|
|**Block 2**|**2 hours**|
|Act 2 — Adversary Round|40 min|
|Act 3 — Presentations & Mission Review|70 min|
|Voting & Debrief|10 min|
|**Total**|**4 hours + 30 min break**|

Adjust presentation time per team based on class size. For 4 teams: ~15 min each. For 6 teams: tighten to ~10 min (cut class questions).

### Key Concepts Being Tested

This activity integrates all three days of the first block:

|Day|Topic|How It Appears in the Challenge|
|---|---|---|
|Day 1|Descriptive Statistics|Sensor noise distributions (mean, variance, skewness of errors), characterizing drift behavior, summarizing uncertainty|
|Day 2|Probability|Bayesian sensor fusion, conditional probabilities for failure detection, expected cost calculations, PDF/CDF for ignition timing, compound probabilities|
|Day 3|Sampling & Bias|Sensor A terrain bias, IMU drift as non-stationary error, camera degradation as data quality collapse, historical map data that may not represent current terrain|

### What Makes a Strong Design

- **Sensor fusion uses explicit weights tied to noise models.** A strong team will write something like: $\hat{h} = w_A h_A + w_B h_B + w_C h_C$ where $w_i \propto 1/\sigma_i^2$, and show how the weights shift across phases as each $\sigma_i$ changes
- **Failure detection has quantified sensitivity and false alarm rates.** For example: "We flag Sensor A as failed if the reading drops by more than $2.5\sigma_A$ in one timestep. This gives 95% detection probability and a 1.2% false alarm rate per timestep."
- **Ignition timing shows the safety-fuel trade-off.** Strong teams will compute: "At $\hat{h} = 1500m$ with $\sigma = 60m$, $P(\text{true} < 1300m) = P(Z < -3.33) \approx 0.04%$. At $\hat{h} = 1600m$ (igniting early for safety), crash probability drops to nearly zero but we burn an extra 3 seconds of fuel from our 40-second margin."
- **Abort criteria compare compound risks.** The key insight: aborting has a 15% failure rate, so you only abort when continuing is _worse_ than 15%. Teams should find the sensor-agreement threshold where $P(\text{crash if we continue}) > 0.15$
- **The timeline diagram shows phase transitions clearly** — especially the critical handoff around 200m where the camera fails and the radar becomes dominant

### Common Pitfalls to Watch For

- Teams that assign fixed weights to sensors without adjusting for descent phase
- Failure detectors that are too aggressive (discard sensors on normal fluctuations) or too passive (keep trusting a clearly failed sensor)
- Ignition decisions based on the point estimate alone without accounting for uncertainty
- Abort logic that ignores the 15% abort failure rate ("we abort whenever anything looks wrong")
- Treating sensor errors as independent when some failure modes are correlated (engine ignition affects both IMU and camera simultaneously)
- Forgetting that Sensor C becomes useless below 200m — systems that rely on a three-sensor vote through the entire descent will fail in the terminal phase

### Debrief Talking Points

After voting, spend the last 10 minutes connecting the competition back to the course:

- "Every team had to decide how much to trust each data source — and that trust changed over time. This is exactly what happens in real data science: data quality is not static. A feature that is reliable in one regime may be garbage in another."
- "The sensor fusion problem is Bayesian reasoning made physical. Your prior is your current altitude estimate, the sensor reading is new evidence, and the posterior is your updated estimate. The weights are determined by the relative precision of each source — just like combining expert opinions or data from different surveys."
- "The failure detection problem is a hypothesis test. $H_0$: the sensor is working. $H_1$: the sensor has failed. You chose a detection threshold that trades off false alarms against missed detections — the exact same trade-off as choosing a significance level in hypothesis testing, which you will study in the next block."
- "The ignition timing problem is a decision under uncertainty using expected costs and the CDF of a normal distribution. This is the same framework you would use for any business decision: 'given my uncertainty about this quantity, what is the probability of a bad outcome, and is that acceptable?'"
- "Notice that the hardest part was not any single calculation — it was figuring out how the pieces interact. A failure in one sensor changes the weights for the others, which changes your uncertainty, which changes your ignition timing, which changes your fuel budget, which changes your abort threshold. Real systems have these feedback loops. Probability gives you the language to reason about them."