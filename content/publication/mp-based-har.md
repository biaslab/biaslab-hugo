+++
abstract = '''This dissertation describes a research effort toward automating personalized design of hearing aid algorithms through in-the-field communication between a user and a portable intelligent agent. The traditional design cycle of hearing aid is inefficient as it requires many human professionals in the design loop who have to elicit and design for a hearing impaired person's unique and context-dependent preferences. In contrast, a wearable synthetic intelligent agent could possibly improve the quality of a hearing aid by on-the-spot suggestions for new hearing aid settings, rather than waiting for offline human expert intervention. To create such an agent, we take inspiration from a theoretical neuroscience framework called the Free Energy Principle, which explains how living brains effectively control their environment by online Bayesian learning of a model of their environment. 

According to this hypothesis, an agent (such as a brain) holds a generative probabilistic model for its sensory input signals. Translated to the context of a synthetic agent and an acoustic environment with a hearing aid (HA) and a HA patient, the agent's generative model should comprise a model for both environmental acoustic signals and user appraisals for hearing aid behavior. These models ought to be learned under in-situ conditions through Bayesian inference, which offers a rigorous procedure for parameter estimation in probabilistic models. 

Following the premise of the Free Energy Principle, the essence of our approach to automated HA design is that all engineering tasks can be formulated as a Bayesian inference on the generative probabilistic model. In particular, this dissertation focuses on a specific family of models for environmental acoustical signals, namely Hierarchical Autoregressive Models. In principle, the flexibility of these models supports describing complex non-stationary acoustic environments. Unfortunately, Bayesian parameter estimation in these models is not trivial, and inference solutions do not exist in closed-form. Therefore, this work develops methods to automate Bayesian inference for both state and parameter updating in hierarchical autoregressive models.

The contributions of this thesis are the following. First, we explore different hierarchical autoregressive models such as continuous time-varying, switching, and coupled autoregressive models. We cast these models into a factor graph framework that provides a convenient visualization of the models. We show that hierarchical models build on a network of special building blocks that can be re-used to increase the expressiveness of other dynamical models. Second, we realize Bayesian inference by an efficient message passing-based algorithm on these probabilistic factor graphs. We obtain closed-form message passing update rules for hierarchical autoregressive models. Third, closing in on the final application, we make use of the developed tools for efficient inference in hierarchical autoregressive models to build a synthetic  agent that tunes hearing aid parameters under situated conditions. The developed agent solves the classification of acoustic context, infers optimal trial design, and executes the HA signal processing algorithm all by automated Bayesian inference.

In summary, this thesis provides a generic framework for hybrid, efficient and automatable Bayesian inference on probabilistic graphical models representing hierarchical autoregressive models. All derivations for the inference procedures have been added to the open-source Julia package ReactiveMP.jl that focuses on efficient and scalable Bayesian inference.'''

abstract_short = ""
date = "2022-12-20"
image = ""
image_preview = ""
math = false
publication = "PhD thesis"
publication_short = ""
selected = false
title = "Message Passing-based Inference in Hierarchical Autoregressive Models"
url_code = ""
url_dataset = ""
url_pdf = "https://pure.tue.nl/ws/portalfiles/portal/234497290/20221220_Podusenko_hf.pdf"
url_project = ""
url_slides = ""
url_video = ""

[[authors]]
    name = "Albert Podusenko"
    id = "albert"
+++