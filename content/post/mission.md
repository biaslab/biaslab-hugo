+++
title = "Our Mission: Bayesian Intelligent Agents"
date = "2016-10-03T15:50:58+02:00"
short_text = "The primary mission of the BIASlab team is to develop in-situ trainable Bayesian Intelligent Agents for applications to wearable technology."
sort_position = 1
[[authors]]
    name = "Bert de Vries"
    is_member = true
    link = "/bert"
+++

In this note we describe by an example the research scope and mission of BIASlab.

### Example: a hearing aid design problem

Consider a situation where a person (named Sarah) is having coffee at a lunch cafe. Sarah wears hearing aids (HA), but due to other conversations across the room, she has trouble understanding Mark who sits about 3 ft away from her.

It is not clear to Sarah how to improve the situation through changing some settings of her HAs. Perhaps she needs more amplification, perhaps more directional processing or maybe the noise reduction module actually has an inactive 'babble noise' mode that would help out in this setting.

### A Solution Proposal

Now consider Fig.1 and assume that Sarah's phone contains an **Hearing Aid Design App** (HADA).

<img class="centered" src="/img/mission/Intelligent-Agent-for-Hearable.png" alt="Drawing" style="width: 500px;"/>

At any time, Sarah may submit a positive or negative evaluation of the ongoing HA processing by pressing a thumbs-up or thumbs-down button, respectively. HADA's task is to respond after negative appraisals by sending _interesting_ alternative parameter settings to the HA (the 'try' arc in Fig.1). Thus, Sarah can switch to new audio processing algorithms simply by pressing the dislike button. In order for HADA to propose interesting HA alternatives, it must learn from Sarah's appraisals. In this framework, _HA design is an always-on incremental learning process of consecutive trials_ that executes under in-situ conditions. The design process is never finished and it should be that way since unforeseen unpleasant listening experiences may always occur in the future.

### Scope and Mission

HADA's task is very difficult. For a HA with 10 tuning parameters and 5 interesting values per parameter (e.g., very low, low, neutral, high, very high), HADA must try to select _the_ most interesting proposal out of almost 1 million candidates.

In technical terms, the explosion of the size of the candidate space is known as the 'curse of dimensionality' and HADA is an example of an **Intelligent Agent** that is tasked with a **Reinforcement Learning** problem.

At BIASlab we study and develop intelligent agents like HADA to solve difficult reinforcement problems for wearable computing systems like hearing aids and hearables. We are also interested in the many applications of intelligent agents outside the domain of training hearing aids, such as in-situ health and fitness coaching or applications to navigation and robotics.

Our research is inspired by related work in **computational neurosciences** (since the brain is an awesome intelligent agent) and **Bayesian machine learning**. Please have a look at our [publications](/publication) and [projects](/project) sections for an overview of our work.
