+++
abstract = "We introduce Riemannian Black Box Variational Inference (RBBVI) for scenarios lacking gradient information of the model with respect to its parameters. Our method constrains posterior marginals to exponential families, optimizing variational free energy using Riemannian geometry and gradients of the log-partition function. It excels with black-box or nondifferentiable models, where popular methods fail. We demonstrate efficacy by inferring parameters from the SIR model and tuning neural network learning rates. The results show competitive performance with gradient-based (NUTS) and gradient-free (Latent Slice Sampling) methods, achieving better coverage and matching Bayesian optimization with fewer evaluations. RBBVI extends variational inference to settings where model gradients are unavailable, improving efficiency and flexibility for real-world applications."
date = "2024-10-14"
image = ""
image_preview = ""
math = false
publication = "NeurIPS 2024 Workshop on Bayesian Decision-making and Uncertainty"
publication_short = "NeurIPS 2024 BDU"
to_be_published = false
selected = false
title = "Riemannian Black Box Variational Inference"
url_code = "https://github.com/biaslab/GradientFreeVI"
url_dataset = ""
url_pdf = "https://openreview.net/pdf?id=QBbc0L5Zpb"
url_project = ""
url_video = ""
url_custom = [
    {name = "OpenReview", url = "https://openreview.net/forum?id=QBbc0L5Zpb"},
]

[[authors]]
    id = "mykola"
[[authors]]
    id = "woutern"
[[authors]]
    id = "bvdmitri"
[[authors]]
    id = "ismail"
[[authors]]
    id = "bert"
+++
