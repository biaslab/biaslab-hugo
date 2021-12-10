+++
abstract = "Factor graphs provide a convenient framework for automatically generating (approximate) Bayesian inference algorithms based on message passing. Examples include the sum-product algorithm (belief propagation), expectation maximization (EM), expectation propagation (EP) and variational message passing (VMP). While these message passing algorithms can be generated automatically, they depend on a library of pre-computed message update rules. As a result, the applicability of the factor graph approach depends on the availability of such rules for all involved nodes. This paper describes the probit factor node for linking continuous and binary random variables in a factor graph. We derive (approximate) sum-product message update rules for this node through constrained moment matching, which leads to a robust version of the EP algorithm in which all messages are guaranteed to be proper. This enables automatic Bayesian inference in probabilistic models that involve both continuous and discrete latent variables, without the need for model-specific derivations. The usefulness of the node as a factor graph building block is demonstrated by applying it to perform Bayesian inference in a linear classification model with corrupted class labels."
abstract_short = ""
date = "2018-09-06T14:07:00+02:00"
image = ""
image_preview = ""
math = false
publication = "26th European Signal Processing Conference"
publication_short = "EUSIPCO 2018"
selected = false
title = "Robust Expectation Propagation in Factor Graphs Involving Both Continuous and Binary Variables"
url_code = ""
url_dataset = ""
url_pdf = "/pdf/eusipco2018/cox_robust_expectation_propagation.pdf"
url_project = ""
url_slides = ""
url_video = ""
url_custom = [{name="IEEE", url = "https://ieeexplore.ieee.org/document/8553490"}]

[[authors]]
    name = "Marco Cox"
    id = "marco"
[[authors]]
    name = "Bert de Vries"
    id = "bert"
+++