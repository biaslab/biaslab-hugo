+++
abstract = "This paper addresses the problem of implementing robust and hyperparameter-free natural gradient variational inference. Natural gradient methods are often employed in variational inference strategies, which maximize a variational lower bound on the model evidence. Generally, gradient-based optimization algorithms require the user to pre-specify values for hyperparameters such as step size and number of iterations. Optimal values for these hyperparameters are problem-specific and may significantly affect the algorithm’s performance. We propose a model-aware optimizer that adaptively adjusts its step size parameter. The proposed optimizer determines the necessary number of iterations and evaluates the accuracy of the variational approximation, compared to the actual posterior distribution, using convergence diagnostics. We verify in this paper that the proposed adaptive optimizer alleviates the fine tuning problem with no manually initialized step size and a number of iterations. The performance of the optimization results is reported using the convergence diagnostics implemented within the proposed optimizer."
date = "2022-06-01"
image = ""
image_preview = ""
math = false
publication = "42nd WIC Symposium on Information Theory in the Benelux"
publication_short = "SITB 2022"
to_be_published = false
selected = false
title = "Adaptive Optimizer Design for Constrained Variational Inference"
url_code = ""
url_dataset = ""
url_pdf = "/pdf/sitb2022/alp_adaptive_optimizer_cvi.pdf"
url_project = ""
url_video = ""
url_custom = [{name="SITB", url="https://sites.google.com/view/sitb2022/program-and-keynote-speakers"}]

[[authors]]
    id = "alp"
[[authors]]
    id = "semih"
[[authors]]
    id = "ismail"
[[authors]]
    id = "bert"
+++
