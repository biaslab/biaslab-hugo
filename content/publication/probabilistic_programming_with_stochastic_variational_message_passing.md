+++
abstract = "Stochastic approximation methods for variational inference have recently gained popularity in the probabilistic programming community since these methods are amenable to automation and allow online, scalable, and universal approximate Bayesian inference. Unfortunately, common Probabilistic Programming Languages (PPLs) with stochastic approximation engines lack the efficiency of message passing-based inference algorithms with deterministic update rules such as Belief Propagation (BP) and Variational Message Passing (VMP). Still, Stochastic Variational Inference (SVI) and Conjugate-Computation Variational Inference (CVI) provide principled methods to integrate fast deterministic inference techniques with broadly applicable stochastic approximate inference. Unfortunately, implementation of SVI and CVI necessitates manually driven variational update rules, which does not yet exist in most PPLs. In this paper, we cast SVI and CVI explicitly in a message passing-based inference context. We provide an implementation for SVI and CVI in ForneyLab, which is an automated message passing-based probabilistic programming package in the open source Julia language. Through a number of experiments, we demonstrate how SVI and CVI extends the automated inference capabilities of message passing-based probabilistic programming."
date = "2022-06-22"
image = ""
image_preview = ""
math = false
publication = "Elsevier: International Journal of Approximate Reasoning"
publication_short = "Elsevier: IJAR"
to_be_published = false
selected = false
title = "Probabilistic programming with stochastic variational message passing"
url_code = "https://github.com/semihakbayrak/ForneyLab.jl/tree/StochasticVMP"
url_dataset = ""
url_project = ""
url_video = ""
url_pdf = "/pdf/ijar2022/probabilistic_programming_with_stochastic_variational_message_passing.pdf"
url_custom = [{name="Experiments", url="https://github.com/biaslab/StochasticVMP"}, {name="Elsevier", url="https://doi.org/10.1016/j.ijar.2022.06.006"}]

[[authors]]
    id = "semih"
[[authors]]
    id = "ismail"
[[authors]]
    id = "alp"
[[authors]]
    id = "bert"
+++
