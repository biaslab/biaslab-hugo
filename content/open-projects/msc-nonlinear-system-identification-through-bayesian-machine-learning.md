+++
title = "MSc graduation project: system identification with Bayesian machine learning"
date = "2019-09-19T08:50:58+02:00"
draft = true

description = "In this project you will develop an agent to infer the dynamical parameters of an electro-mechanical positioning system."
external_link = ""
vacancy_id = "nonlinear-system-identification"
+++


## Problem description

System identification is concerned with estimating a dynamical model
from paired input and output data. In particular, we are considering an
electro-mechanical positioning system (EMPS), where a motor drives a
small platform on a track between two points (a prismatic joint)
[1]. These are ubiquitous in robotics and machine tool
applications, but can be challenging to control when non-linearities
such as friction are involved. Our goal is to estimate the inverse
dynamical model (torque/force as a function of position, velocity and
acceleration), outperforming the current least-squares baseline
approach. More information on the electro-mechanical positioning system,
including baseline, data and code, can be found at
<http://nonlinearbenchmark.org/>.

{{< figure src="/img/proposals/EMPS.jpg" title="Electro-mechanical positioning system setup.">}}

The Bayesian Intelligent Autonomous Systems lab (BIASlab) is working
on intelligent agents that perceive and act through Bayesian machine
learning. We work with a principled technique for approximate inference,
called variational free energy minimization, and apply it to
discrete-time dynamical systems. For an introduction to this framework,
see our toolbox [ForneyLab](/project/forneylab). Currently, we are
interested in system identification and would like to tackle the EMPS
benchmark using our techniques.

## Student task description

We expect the student to familiarize him/her self with variational free
energy minimization and system identification. Your job will be to
program an agent to infer the dynamical parameters of the system from
given input-output data, and compare the agent to baseline methods. We
hope to include an *optimal design / active inference* experiment as
well, where the agent infers which inputs it should test to infer the
dynamics as fast as possible.

### Tasks:

-   Literature search over the intersection between Bayesian machine
    learning and nonlinear system identification.

-   Familiarize yourself with the difficulties of nonlinear system
    identification.

-   Understand the challenges of applying variational free energy
    minimization to nonlinear system identification.

-   Collaborate and discuss with researchers in BIASlab and the Control
    Systems group.

-   Implement an agent that infers dynamics in the system.

-   Experiment with the implementation and compare to baselines.

-   Analyze results and reflect on what has been achieved.

-   Write a report detailing the advantages and limitations of this
    approach.

### Supervision:

-   Weekly progress meetings with Maarten Schoukens and Wouter Kouw.

-   The student is expected to be prepared for meetings, preferably by
    writing reports that can be used to track progress.

-   All developed code and reports should be accessible via git to
    achieve efficient collaboration.

## Information

For more information go to the project page at [TU/e Master Marketplace](https://master.ele.tue.nl/).

## References
[1]: A. Janot, M. Gautier, and M. Brunot. Data set and reference models of EMPS. In *2019 Workshop on Nonlinear System Identification Benchmarks, Eindhoven, The Netherlands, April 10-12, 2019*.