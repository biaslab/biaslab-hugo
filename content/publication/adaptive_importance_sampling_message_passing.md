+++
abstract = "The aim of Probabilistic Programming (PP) is to automate inference in probabilistic models. One efficient realization of PP-based inference concerns variational message passing-based (VMP) inference in a factor graph. VMP is efficient but in principle only leads to closed-form update rules in case the model consists of conjugate and/or conditionally conjugate factor pairs. Recently, Extended Variational Message Passing (EVMP) has been proposed to broaden the applicability of VMP by importance sampling-based particle methods for non-linear and non-conjugate factor pairs. EVMP automates the importance sampling procedure by employing forward messages as proposal distributions, which unfortunately may lead to inaccurate estimation results and numerical instabilities in case the forward message is not a good representative of the unknown correct posterior. This paper addresses this issue by integrating an adaptive importance sampling procedure with message passing-based inference. The resulting method is a hyperparameter-free approximate inference engine that combines recent advances in stochastic adaptive importance sampling and optimization methods. We provide an implementation for the proposed method in the Julia package ForneyLab.jl."
date = "2022-06-26"
image = ""
image_preview = ""
math = false
publication = "2022 IEEE International Symposium on Information Theory"
publication_short = "ISIT 2022"
to_be_published = false
selected = false
title = "Adaptive Importance Sampling Message Passing"
url_code = "https://github.com/semihakbayrak/ForneyLab.jl/tree/AIS-MP"
url_dataset = ""
url_pdf = "/pdf/isit2022/adaptive_importance_sampling_message_passing.pdf"
url_project = ""
url_video = ""
url_custom = [{name="Experiments", url="https://github.com/biaslab/AIS-MP"}, {name="IEEE", url="https://ieeexplore.ieee.org/document/9834628"}]

[[authors]]
    id = "semih"
[[authors]]
    id = "ismail"
[[authors]]
    id = "bert"
+++
