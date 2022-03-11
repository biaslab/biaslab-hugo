+++
title = "MSc graduation project: intelligent behavior through cooperating agents"
date = "2020-05-07T08:50:58+02:00"
draft = true

description = "In this project you will study how two active inference agents can communicate and cooperate to solve a task."
external_link = ""
vacancy_id = "multi-agent-interaction"
+++


## Problem description

Autonomous guidance is becoming more widely adopted in mobile robotics applications. Factory bots can find their own way from production lines to storage facilities and police drones can scout and search areas without an operator. In many applications, having more than one agent can prove beneficial. For instance, when searching an area, more agents cover more ground (see also Figure 1). But they need to communicate and coordinate. This graduation project will focus on coordination and planning across multiple agents.

{{< figure src="/img/proposals/robot-foraging.png" title="Foraging behaviour. (Left) All robots start at the hive (H). (Middle) All robots explore randomly, one has found food (F). (Right) All robots forage from food source. Figures taken from [1].">}}

The Bayesian Intelligent Autonomous Systems lab (BIASlab) develops agents that learn from their environment. Sensing (filtering noisy signals) and acting (selecting controls) are framed as inference problems and solved with Bayesian machine learning [4]. We work with a specific framework, called *active inference*, that is inspired by how the brain processes information [2,3]. For demos of our work, see our toolbox [ForneyLab.jl](https://github.com/biaslab/ForneyLab.jl).

This project is a collaboration with the [Swarmlab](https://project.dke.maastrichtuniversity.nl/SwarmLab/) at Maastricht University. They develop multi-agent systems and swarm robotics from the perspective of self-organising biological systems. For example, multi-robot coordination based on ant pheromone trails or communication between drones based on honey bee dances [1]. We hope to learn from their experience.

## Student task description

In this project, you will take two active inference agents and assign them a task. You will then study how these agents can learn to cooperate and plan actions together. Part of this work will be theoretical, in specifying models and inference procedures from which cooperation emerges, and part of this work will be practical, in actually coding out agents to operate in (simulated) environments. Depending on the student's progress and interests, we can scale up and tackle a real-world setting. For example, swarm surveillance of a designated area for security purposes.

### Tasks:

-   Study the literature on active inference and multi-agent interaction.

-   Understand the challenges of applying active inference in a multi-agent setting.

-   Collaborate and discuss with researchers in BIASlab and Swarmlab.

-   Implement agents that communicate and cooperate to complete a task.

-   Experiment with the implementation and compare to baselines.

-   Analyze results and reflect on what has been achieved.

-   Write a report detailing the advantages and limitations of this approach.


### Supervision:

-   Weekly progress meetings with Wouter Kouw.

-   The student is expected to be prepared for meetings, preferably by writing interactive notebooks.

-   All developed code should be accessible online (e.g. Github, Gitlab) to achieve efficient collaboration.


## Information

For more information go to the project page at [TU/e Master Marketplace](https://master.ele.tue.nl/).

## References
[1]: S. Alers, K. Tuyls, B. Ranjbar-Sahraei, D. Claes, and G. Weiss. Insect-inspired robot coordination: foraging and coverage. In *Conference on Artificial Life, pages 761–768, 2014*.

[2]: K. J. Friston, J. Daunizeau, J. Kilner, and S. J. Kiebel. Action and behavior: a free-energy formulation. *Biological Cybernetics, 102(3):227–260, 2010*.

[3]: L. Pio-Lopez, A. Nizard, K. J. Friston, and G. Pezzulo. Active inference and robot control: a case study. *Journal of The Royal Society Interface, 13(122):20160616, 2016*.

[4]: T. W. van de Laar and B. de Vries, Simulating active inference processes by message passing, *Frontiers in Robotics and AI, vol. 6, p. 20, 2019*.