+++
title = "MSc project: Probabilistic programming for printhead diagnostics."
date = "2024-02-01T13:00:00+02:00"
draft = false

description = "System diagnostics: develop a maintenance support tool for printhead malfunction."
external_link = ""
vacancy_id = "system-diagnostics"
+++

<!-- ## Problem description -->

Industrial printers output thousands of pages per day. This enormous throughput is realized by a delicate printhead that operates under extremely varying conditions. The printhead consists of a few thousand micronozzles that jet ink to the paper. Through test pages, nozzles are diagnosed and when too many nozzles are failing, a maintenance action is triggered.

With the enormous throughput of industrial printers, it becomes paramount to keep printers operational. Any issues should be quickly diagnosed and resolved. Therefore, it helps if maintenance engineers are informed about potential root causes of a problem. This will help in understanding the optimal maintenance action, such as a cleaning versus a printhead replacement.

A probabilistic dynamical model of the printhead operation, based on expert insights, can consider uncertainties on the failure causes and the time-varying operational conditions. With probabilistic programming techniques, a root cause of failure can be automatically inferred from the probabilistic model, and communicated to the maintenance engineer.

## Student task description
The goal of this project is to apply probabilistic programming techniques to model printhead nozzle (mal)function, and automatically identify root causes of failure through probabilistic inference.

### Concrete tasks:

1) Study models of nozzle malfunction;
2) Study probabilistic programming;
3) Build a probabilistic dynamical model of printhead nozzle (mal)function;
4) Given a dataset of nozzle diagnostics over time, infer states and parameters in the model;
5) Repeat 3-5 until convergence or until time is up.

## Project positioning
This project is a collaboration between Canon Production Printing (CPP), TNO-ESI and BIASlab. CPP works on game-changing technology that shapes the way that people work and communicate. TNO-ESI (esi.nl) develops new methods and techniques for system design and engineering for the high-tech industry. BIASlab (biaslab.org) works on probabilistic programming for intelligent agents that operate under real-time, situated conditions.

### Supervision:
- Weekly progress meetings with Thijs van de Laar.
- Periodic progress meetings with contacts at Canon and TNO-ESI.
- The student should prepare update meetings, preferably with derivations or visualizations in interactive notebooks.

## Timeline
The project is available from January 2024 onwards. The total duration will be 32 weeks. Halfway through, there will be a "midterm" evaluation where the student must report on their activities and indicate how they will proceed for the remainder of the project. At the end, the student will write a thesis summarizing their work, their findings and possible future steps. The thesis will be presented in an official "defense" ceremony and a committee of experts will grade the student's work.
