+++
abstract = "Probabilistic programming provides a structured approach to signal processing algorithm design. The design task is formulated as a generative model, and the algorithm is derived through automatic inference. Efficient inference is a major challenge; e.g., the Shafer-Shenoy algorithm (SS) performs badly on models with large treewidth, which arise from various real-world problems. We focus on reducing the size of discrete models with large treewidth by storing intermediate factors in compressed form, thereby decoupling the variables through conditioning on introduced weights.This work proposes pruning of these weights using Kullback-Leibler divergence. We adapt a strategy from the Gaussian mixture reduction literature, leading to Kullback-Leibler Tensor Belief Propagation (KL-TBP), in which we use agglomerative hierarchical clustering to subsequently merge pairs of weights. Experiments using benchmark problems show KL-TBP consistently achieves lower approximation error than existing methods with competitive runtime."
abstract_short = ""
date = "2020-05-06T18:30:00+02:00"
image = ""
image_preview = ""
math = false
publication = "2020 IEEE International Conference on Acoustics, Speech and Signal Processing (ICASSP)"
publication_short = "ICASSP 2020"
selected = false
title = "Approximate Inference by Kullback-Leibler Tensor Belief Propagation"
url_code = ""
url_dataset = ""
url_pdf = "/pdf/icassp2020/kl-tbp.pdf"
url_project = ""
url_slides = ""
url_video = ""

[[authors]]
    name = " Patrick W.A. Wijnings"
    id = "patrick"
[[authors]]
    name = "Sander Stuijk"
[[authors]]
    name = "Bert de Vries"
    id = "bert"
[[authors]]
    name = "Henk Corporaal"
+++
