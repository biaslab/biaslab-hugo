+++
title = "MSc project: Active inference for SpotMicro locomotion."
date = "2017-08-24T15:50:58+02:00"

description = "Control systems: develop a controller to make a four-legged robot learn to walk."
external_link = ""
vacancy_id = "cocktail-party"
+++


The goal is to develop an intelligent autonomous system (agent) for a SpotMicro quadruped robot (see Figure 1). The agent must learn to walk: it will not be given an accurate model of its legs' kinematics but will have to gradually build a locomotion model from interaction with its environment. You will use _Active Inference_ (AIF), a probabilistic machine learning framework from the computational neuroscience community, to design and train the agent. 

{{< figure src="/img/proposals/SpotMicroAI_complete_1.jpg" title="A physical Spotmicro build. Figure courtesy of https://spotmicroai.readthedocs.io." class="center" height="100px" >}}

Please note that this is not a hardware project, but an AI project. You will write code to control a simulated robot that interacts with a simulated environment (see Figure 2), generated using the open-source physics engine [Bullet](https://pybullet.org/wordpress/). The challenge will be to adapt existing AIF agents to control a SpotMicro system. 

{{< figure src="/img/proposals/spot-mini-mini.gif" title="A simulated Spotmicro in a physics simulation. Figure courtesy of https://spotmicroai.readthedocs.io." class="center" height="100px" >}}

## Project positioning
This is a purely academic graduation project. You will be working in the Bayesian Intelligent Autonomous Systems lab ([BIASlab](https://biaslab.github.io{BIASlab)), a subgroup of the Signal Processing Systems (SPS) group at TU Eindhoven. BIASlab develops probabilistic models and inference algorithms for signal processing and control problems. This graduation project is a part of a larger research initiative towards AIF agents for robot locomotion.

### Supervision
- Weekly progress meetings with dr. Wouter Kouw.
- Periodic progress meetings with BIASlab researchers.
- The student should prepare for meetings in advance, e.g. with notebooks.
- All software that has been developed should be accessible online through [BIASlab's github](https://github.com/biaslab/) organization and should be legible / usable for future students.

## Student task description
You will initially be spending time familiarizing yourself with the tools and techniques that BIASlab develops (mainly [ReactiveMP](https://github.com/biaslab/ReactiveMP.jl). Once familiar, you will write your own active inference agent based off of existing AIF agent implementations within BIASlab. Note that you'll be supported by BIASlab researchers that are working on other robot locomotion projects. 

### Concrete tasks
- Read the literature on AIF agents for control.
- Familiarize yourself with the challenges of quadrupedal locomotion.
- Learn to use BIASlab's probabilistic machine learning toolbox _ReactiveMP_.
- Familiarize yourself with the sensors and actuators on-board a SpotMicro and the simulation environment Bullet.
- Develop an AIF agent for the SpotMicro system. 
- Investigate factors that affect the speed and robustness of learning to walk.
- Reflect on what has been achieved and discuss with BIASlab's researchers. 
- Write a report detailing your agent's properties and behaviour.

## Timeline
The project is available from September 2022 onwards. The total duration will be 32 weeks. Halfway through, there will be a "midterm" evaluation where the student must report on their activities and indicate how they will proceed for the remainder of the project. At the end, the student will write a thesis summarizing their work, their findings and possible future steps. The thesis will be presented in an official "defense" ceremony and a committee of experts will grade the student's work.