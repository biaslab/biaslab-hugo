+++
title = "MSc graduation project: Bayesian machine learning on a neuromorphic chip"
date = "2020-04-10T08:50:58+02:00"

description = "In this project you will simulate a Bayesian machine learning algorithm on a neuromorphic chip."
external_link = ""
vacancy_id = "neuromorphic-computing"
+++


## Problem description

Modern intelligent systems are typically deployed on hardware with extensive computational resources, for example GPU stacks in self-driving cars. As machine learning becomes more ingrained into engineering, the need rises for specialized hardware in which learning algorithms can be deployed efficiently. One strategy is to look to the brain for inspiration. Neuromorphic computing architectures are designed to support learning algorithms in a power- and memory-efficient manner. [GrAI Matter Labs](https://www.graimatterlabs.ai/) is a startup located partly at the High Tech Campus Eindhoven, which develops chips with neuromorphic processor architectures [1]. Their main chip, GrAI One, was recently presented at the [Consumer Electronics Show 2020](https://youtu.be/dtOU3QpzEB8).

{{< figure src="/img/proposals/sparse_video_signal.png" title="Example of a sparse video signal. Only changes between frames are processed.">}}

The Bayesian Intelligent Autonomous Systems lab (BIASlab) works on intelligent agents that employ Bayesian machine learning to sense and act. Our main focus has been audio processing applications, such as noise suppression, acoustic scene classification and hearing loss compensation [2,3]. But we are expanding into mobile robotics; we currently run projects in robot navigation and we are starting projects in drone flight control [4]. We are interested in running our algorithms on neuromorphic chips, as this could allow for lighter "brains" for our agents.

## Student task description

The student will do a pilot project where he/she simulates the application of a learning algorithm on a neuromorphic processing architecture. In practice, this means adapting an algorithm to take in and produce sparse signals. For example, in a video signal, two subsequent frames correlate heavily. Instead of processing each frame fully (i.e. dense signal), only the largest changes between frames are kept (i.e. sparse signal, see Figure 1). An example of a task for the algorithm would be object tracking in a video signal, but we aim to find a task that is both valuable to the labs and exciting to the student.

### Tasks:

-   Literature search for applications of Bayesian machine learning in neuromorphic architectures.

-   Familiarize yourself with the difficulties of working with sparse signals.

-   Discuss with researchers and engineers at BIASlab and GrAI Matter Labs.

-   Implement a Bayesian model that runs on a (simulated) neuromorphic chip.

-   Experiment with the implementation and compare to baselines.

-   Analyze results and reflect on what has been achieved.

-   Write a report detailing the advantages and limitations of this approach.


### Supervision:

-   Weekly progress meetings with Wouter Kouw, monthly meeting with Arash Pourtaherian.

-   The student is expected to be prepared for meetings, preferably by writing interactive notebooks.

-   All developed code should be accessible online (e.g. Github, Gitlab) to achieve efficient collaboration.


## Information

For more information go to the project page at [TU/e Master Marketplace](https://master.ele.tue.nl/).

## References
[1]:    O. Moreira, A. Yousefzadeh, F. Chersi, G. Cinserin, R.-J. Zwartenkot, A. Kapoor, P. Qiao, P. Kievits, M. Khoei, L. Rouillard, A. Ferouge, J. Tapson, and A. Visweswara, NeuronFlow: a neuromorphic processor architecture for Live AI applications, in *Conference on Design, Automation and Test in Europe, 2020*.

[2]:    I. Bocharov, T. Tjalkens, and B. De Vries, Acoustic scene classification from few examples, in *IEEE European Signal Processing Conference, 2018, pp. 862–866*. 

[3]:    T. W. van de Laar and B. de Vries, A probabilistic modeling approach to hearing loss compensation, *IEEE/ACM Transactions on Audio, Speech, and Language Processing, vol. 24, no. 11, pp. 2200–2213, 2016*.

[4]:    T. W. van de Laar and B. de Vries, Simulating active inference processes by message passing, *Frontiers in Robotics and AI, vol. 6, p. 20, 2019*.