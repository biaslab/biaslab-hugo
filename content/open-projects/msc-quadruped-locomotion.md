+++
title = "MSc project: Active inference for robot locomotion."
date = "2017-08-24T15:50:58+02:00"

description = "Control systems: develop a controller to make a four-legged robot learn to walk."
external_link = ""
vacancy_id = "quadruped"
+++


The goal is to develop an intelligent autonomous system (agent) for a quadrupedal robot (see example in Figure 1). The agent must learn to walk: it will not be given an accurate model of its legs' kinematics but will have to gradually build a locomotion model from interacting with its environment. You will use _Active Inference_ (AIF), a probabilistic machine learning framework from the computational neuroscience community, to design and train the agent. 

{{< figure src="/img/proposals/SpotMicroAI_complete_1.jpg" title="A physical Spotmicro build. Figure courtesy of https://spotmicroai.readthedocs.io." class="center" height="100px" >}}

Please note that this is a software project; it does not involve hardware. You will write code to control a simulated robot that interacts with a simulated environment (see Figure 2), generated using the open-source physics engine [Bullet](https://pybullet.org/wordpress/). The challenge will be to adapt existing AIF agents to control the robotic system. 

{{< figure src="/img/proposals/spot-mini-mini.gif" title="A simulated Spotmicro in a physics simulation. Figure courtesy of https://spotmicroai.readthedocs.io." class="center" height="100px" >}}

## Project positioning
This project does not involve a company. You will be working in the Bayesian Intelligent Autonomous Systems lab ([BIASlab](https://biaslab.github.io{BIASlab)) at TU Eindhoven. BIASlab develops probabilistic models and inference algorithms for signal processing and control problems. This graduation project is a part of a larger research initiative towards AIF agents for robot locomotion.

### Supervision
- Weekly progress meetings with dr. Wouter Kouw.
- Periodic progress meetings with BIASlab researchers.
- The student should prepare for meetings in advance, e.g. with slides or notebooks.
- Developed software will be open source, accessible through [BIASlab's github](https://github.com/biaslab/) organization. It should be legible / usable for future students.

## Student task description
You will initially be spending time familiarizing yourself with the tools and techniques that BIASlab develops ([RxInfer.jl](https://github.com/biaslab/RxInfer.jl)). Once familiar, you will write your own active inference agent based off of existing AIF agent implementations within BIASlab. Note that you'll be supported by BIASlab researchers that are working on other robot locomotion projects. 

### Concrete tasks
- Review literature on AIF agents for robotics.
- Familiarize yourself with the challenges of quadrupedal locomotion.
- Learn to use the probabilistic machine learning toolbox RxInfer.jl.
- Familiarize yourself with the simulation environment Bullet.
- Develop an active inference agent for a quadrupedal robot system. 
- Reflect on what has been achieved and discuss with BIASlab's researchers. 
- Write a report detailing your agent's properties and behaviour.

## Timeline
The project is available from September 2022 onwards. The total duration will be 32 weeks. Halfway through, there will be a "midterm" evaluation where the student must report on their activities and indicate how they will proceed for the remainder of the project. At the end, the student will write a thesis summarizing their work, their findings and possible future steps. The thesis will be presented in an official "defense" ceremony and a committee of experts will grade the student's work.