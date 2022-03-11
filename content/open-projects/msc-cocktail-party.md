+++
title = "MSc project: Acoustic source separation for hearables."
date = "2022-03-11T13:00:00+02:00"
draft = false

description = "Signal processing: develop a probabilistic model for acoustic source separation.  "
external_link = ""
vacancy_id = "cocktail-party"
+++

<!-- ## Problem description -->

You are challenged to design an agent that learns to solve
the cocktail party problem through on-the-spot interactions with a (human)
listener. The cocktail party problem refers to the
issue of not being able to understand your conversation partner in the presence
of many simultaneously competing voices (Fig.1). 

{{< figure src="/img/proposals/cocktail-party.jpeg" title="Sound signals from multiple conversations mix at a cocktail party." class="center" height="100px" >}}

The learning protocol is displayed in Fig.2. A listener wears earbuds that are capable to process audio
signals in real-time (like hearing aids). In response to a detected problem, the
agent proposes the most promising alternative parameter settings for the audio
algorithm (the TRY step). Next, the new audio algorithm is executed in the ear
buds and evaluated by the listener (EXECUTE and EVALUATE steps). Based on the
listener’s appraisal, the agent should now update its model of the world (LEARN step). This design loop repeats in real-time until the listener indicates that the problem has been solved.

{{< figure src="/img/proposals/IA-loop.png" title="Learning protocol of the agent." class="center" height="100px" >}}



## Student task description
This project will get you involved with the latest artificial
intelligence methods, since the agent needs to (1) learn from each
interaction and (2) be smart about selecting the most promising
algorithm candidates. It will also give you an opportunity to learn
about how biological brains solve real-time design issues.

### Concrete tasks:
- Familiarize yourself with the literature on Active inference.
- Discuss problem and solution proposal with researchers at BIASlab.
- Implement solution proposal using BIASlab resources.
- Experiment with the implementation and compare to current solutions.
- Analyze results and reflect on what has been achieved.
- Write a report detailing the advantages and limitations of this approach.


## Project positioning
The Bayesian Intelligent Autonomous Systems lab BIASlab (http://biaslab.org, FLUX-7.060) is
a subgroup of the Signal Processing Systems (SPS) that aims to develop
Intelligent Autonomous Agents. These agents interact with their
environment through their sensors and actuators in order to learn
purposeful behavior, e.g., to navigate, play soccer or they may learn to
decode speech signals under bad acoustic conditions. Our research
projects are inspired by the latest insights from machine learning,
computational neuroscience and signal processing.

### Supervision:
- Weekly progress meetings with Bert de Vries.
- Periodic progress meetings with contacts at GN Resound.
- The student should prepare update meetings, preferably with derivations or visualizations in interactive notebooks.

## Timeline
The project is available from September 2017 onwards. The total duration will be 32 weeks. Halfway through, there will be a "midterm" evaluation where the student must report on their activities and indicate how they will proceed for the remainder of the project. At the end, the student will write a thesis summarizing their work, their findings and possible future steps. The thesis will be presented in an official "defense" ceremony and a committee of experts will grade the student's work.