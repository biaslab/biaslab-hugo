+++
abstract = "We introduce Reactive Message Passing (RMP) as a framework for executing schedule-free, robust and scalable message passing-based inference in a factor graph representation of a probabilistic model. RMP is based on the reactive programming style that only describes how nodes in a factor graph react to changes in connected nodes. The absence of a fixed message passing schedule improves robustness, scalability and execution time of the inference procedure. We also present ReactiveMP.jl, which is a Julia package for realizing RMP through minimization of a constrained Bethe free energy. By user-defined specification of local form and factorization constraints on the variational posterior distribution, ReactiveMP.jl executes hybrid message passing algorithms including belief propagation, variational message passing, expectation propagation, and expectation maximisation update rules. Experimental results demonstrate the improved performance of ReactiveMP-based RMP in comparison to other Julia packages for Bayesian inference across a range of probabilistic models. In particular, we show that the RMP framework is able to run Bayesian inference for large-scale probabilistic state space models with hundreds of thousands of random variables on a standard laptop computer."
date = "2021-12-25"
image = ""
image_preview = ""
math = false
publication = "ArXiv preprint"
publication_short = "ArXiv preprint"
to_be_published = false
selected = false
title = "Reactive Message Passing for Scalable Bayesian Inference"
url_code = "https://github.com/biaslab/ReactiveMP.jl"
url_dataset = ""
url_pdf = "https://arxiv.org/pdf/2112.13251"
url_project = ""
url_video = ""
url_custom = [ { name="ArXiv", url = "https://arxiv.org/abs/2112.13251" } ]

[[authors]]
    id = "bvdmitri"
[[authors]]
    id = "bert"
+++
