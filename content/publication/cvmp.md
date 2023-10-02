+++
abstract = "Variational message passing is an efficient Bayesian inference method in factorized probabilistic models composed of conjugate factors from the exponential family (EF) distributions. In many applications, a more accurate model for the process under consideration can be obtained by inserting nonlinear deterministic factors in the model. Unfortunately, variational messages that pass through nonlinear nodes cannot be analytically computed in closed form. In this paper, we derive an efficient algorithm for passing variational messages through arbitrary deterministic factors. Our method is based on projecting outgoing messages onto an EF distribution. We implemented our algorithm in RxInfer, which is an open-source message passing-based inference package in Julia. The resulting implementation yields efficient message passing-based inference in arbitrary models composed of stochastic and deterministic factors. We compare our method to alternative state-of-the-art inference methods and find lower (i.e., better) free energy residuals for the proposed method."
date = "2023-09-16T18:07:00+02:00"
publication = "MLSP 2023"
publication_short = ""
publication_date = "2023-09-16"
to_be_published = false
selected = false
title = "Efficient Bayesian Inference by Conjugate-computation Variational Message Passing"
url_pdf = "pdf/mlsp2023/mlsp_2023_mykola.pdf"

[[authors]]
    name = "Mykola Lukashchuk"
    id = "mykola"
[[authors]]
    name = "Ismail Senoz"
    id = "ismail"
[[authors]]
    name = "Bert de Vries"
    id = "bert"
+++
