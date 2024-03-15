+++
abstract = '''Bayesian inference realizes optimal information processing through a full commitment to reasoning by probability theory.
The Bayesian framework is a crucial technology at the core of modern AI with applications such as speech and image recognition and generation, biomedical analysis, robot navigation, and more.
The framework describes how a rational agent should update its beliefs when new information is revealed by the agent’s environment.
In order to update internal beliefs, the agent must execute the so-called Bayes rule, which follows straight from the fundamental rules of probability theory. Unfortunately, the exact execution of Bayes rule is often computationally challenging or even intractable, due to the need to evaluate high-dimensional integrals that may have no closed-form solution.
In addition, real-world scenarios comprise non-stationary environments that may lead to a need for online and real-time execution of Bayes rule in time-varying conditions. In short, while Bayes rule is arguably the correct way to support computations in advanced AI applications, in practice the application of a Bayesian approach to AI systems has been hindered by serious computational issues. 

In this dissertation, we attempt to approach this computational issue from a fresh perspective. 
This dissertation focuses on the realization of efficient Bayesian inference in large-scale probabilistic models, targeting real-time signal processing and control applications under real-world conditions.
We present a practical architecture based on reactive message passing-based inference in a factor graph representation of the probabilistic model under study.
Factor graphs not only offer an insightful visual representation but also support an efficient inference process that takes advantage of statistical independence assumptions in the probabilistic model.
For a given factor graph, we first associate the Bayesian inference problem with the minimization of a Constrained Bethe Free Energy (CBFE) functional, which can be interpreted as an approximate, but computationally lighter, approach to Bayesian inference. We then develop an automatated message passing approach to CBFE minimization. As a unique feature, in this dissertation, we introduce a reactive programming style implementation of the message passing process. 
Compared to existing message passing frameworks that are coded in the procedural style, reactive message passing leads to several advantages, including improved facilitation of real-time processing of streaming data, increased robustness to structural mishaps, and context-dependent adaptation of the sequence of messages. %inference process inference, reacting promptly to new measurements and updating posterior information automatically.

To demonstrate the efficacy and potential of the proposed approach, the dissertation introduces RxInfer, a software framework for factor graph-based CBFE minimization, implemented in the Julia programming language.
RxInfer provides a model specification language that translates textual descriptions of probabilistic models into corresponding factor graph representations.
RxInfer supports hybrid variational inference processes that combine different Bayesian inference methods within different parts of the model, thereby taking advantage of local trade-offs between accuracy and computational speed.
The implementation of the reactive architecture is scalable, accommodating the simulation of probabilistic models with hundreds of thousands of variables, as well as supporting the processing of infinite asynchronous data streams.'''

abstract_short = ""
date = "2023-12-19"
image = ""
image_preview = ""
math = false
publication = "PhD thesis"
publication_short = ""
selected = false
title = "Reactive Probabilistic Programming for Scalable Bayesian Inference"
url_code = ""
url_dataset = ""
url_pdf = "https://research.tue.nl/files/313860204/20231219_Bagaev_hf.pdf"
url_project = ""
url_slides = ""
url_video = ""

[[authors]]
    id = "bvdmitri"
+++
