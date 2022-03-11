+++
title = "MSc project: Parallel reactive computing for probabilistic programs."
date = "2022-03-1T12:00:00+02:00"

description = "Software: develop a multi-core computation procedure for our toolbox ReactiveMP.jl"
external_link = ""
vacancy_id = "parallel-reactive"
+++


In this project you are challenged to setup factor graph-based agents that operate simultaneously on multiple CPU cores. You will investigate the feasibility of splitting a factor graph model into multiple parts and how to run message passing-based inference in parallel using multiple CPU cores (see Figure 1). Since graph models can become quite large (e.g., millions of nodes) and data may arrive at different graph locations at different time scales, it is practically important to run these kinds of models in parallel.

{{< figure src="/img/proposals/multi-core-cpu.png" title="A factor graph split over multiple cpu cores." class="center" height="100px" >}}

In the second part of the project, you will evaluate the performance of parallel message passing-based inference on factor graphs. In principle, parallel inference on multiple CPU's should lead to more efficient use of computational resources and provide the same results in less time.

## Student task description
- Literature search: he student needs to be able to obtain a working understanding of Bayesian Inference, probabilistic methods, probabilistic graphical models, Forney-style factor graphs and message passing.
- Learning programming: this project is best suited for a student with a strong computer science background. The student should get familiar with relevant software tools ([julia](https://julialang.org/), [ForneyLab.jl](https://github.com/biaslab/ForneyLab.jl), [ReactiveMP.jl](https://github.com/biaslab/ForneyLab.jl)) and understand how to setup parallel computation infrastructures.
- Develop an efficient _parallel implementation_ of message passing-based inference in factor graph models.
- Depending on progress, the student may extend the system to more complex benchmark tasks.
- Iterate steps 3 and 4 until satisfaction and/or time runs out.
- Write a MSc-thesis detailing performance benchmarks, results and findings, including positioning of the work within the broader field.

## Project positioning
[BIASlab](https://biaslab.github.io/) (FLUX-7.060) is a subgroup of the Signal Processing Systems (SPS) group that aims to develop \textbf{Intelligent Autonomous Agents}. These agents interact with their environment through their sensors and actuators in order to learn purposeful behavior without any supervision ("autonomously"), e.g., to navigate, play soccer or they may learn to decode speech signals under bad acoustic conditions. Our research projects are inspired by the latest insights from machine learning, computational neuroscience and signal processing.

Intelligent agents process information through Bayesian inference. In our lab, we realize these agents as (Forney-style) \textbf{Factor Graphs} that execute Bayesian inference in complex models through message passing in a graph. In our team, we are developing a toolbox that supports message passing-based inference in factor graphs, see [ForneyLab](https://biaslab.github.io/ForneyLab.jl/stable/) and [ReactiveMP](https://biaslab.github.io/ForneyLab.jl/stable/).

### Supervision:
- Weekly progress meetings with Dmitry Bagaev.
- The student should prepare update meetings, preferably with derivations or visualizations in interactive notebooks.
- All developed code should be accessible (e.g., on BIASlab's Github organization).

## Timeline
The project is available from September 15th 2021 onwards. The total duration will be 32 weeks. Halfway through, there will be a "midterm" evaluation where the student must report on their activities and indicate how they will proceed for the remainder of the project. At the end, the student will write a thesis summarizing their work, their findings and possible future steps. The thesis will be presented in an official "defense" ceremony and a committee of experts will grade the student's work.