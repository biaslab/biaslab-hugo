+++
abstract = '''
This thesis presents efficient and automated probabilistic inference algorithms for intelligent system design.
An intelligent system is a decision-making agent that can take reasonable and reliable actions in uncertain environments.
Probability theory and Bayesian inference constitute the theoretical framework for intelligent system design.
Hence, probabilistic modeling and inference are of great importance in building intelligent agents and applications.
Modeling a real-world phenomenon with the language of probability theory is often intuitive, and hence it can be carried out by experts in the application field.
In contrast, the inference part often necessitates expertise in Bayesian statistics and precludes experts and scientists from diverse application fields from utilizing probabilistic modeling.

This thesis focuses on automating Bayesian inference procedures to make probabilistic modeling more accessible for non-experts of Bayesian statistics.
The works presented in this thesis can be subsumed under the umbrella of probabilistic programming.
Probabilistic programming is a programming paradigm that automates inference procedures in probabilistic models.
Unlike most of the existing probabilistic programming tools, which follow Monte Carlo sampling approaches and stochastic optimization for universality, the algorithms in this thesis strive to utilize deterministic message passing approaches at the utmost level.
Deterministic message passing algorithms are often faster than Monte Carlo algorithms and hence preferable in real-time applications, e.g., robotics.

Deterministic message passing algorithms are fast and efficient, but automating them in a universal way is more challenging compared to Monte Carlo algorithms.
The main reason is that, unlike Monte Carlo algorithms, which are simulation-based approaches, message passing algorithms require custom analytical rules for the components of probabilistic models.
The algorithms in this thesis aim to circumvent this issue by hybrid approaches that combine the best of Monte Carlo and message passing approaches.

In general, the contributions of this thesis are twofold. First, we present a generic framework to incorporate Monte Carlo or other approximation approaches like Laplace approximation into message passing procedures by proposing fully automated hybrid algorithms.
Next, we demonstrate how to cast some well-recognized stochastic optimization-based methods as probabilistic programming algorithms with message passing on factor graphs.
The resulting methods realize distributed probabilistic inference by sticking to deterministic approaches if possible and resorting to Monte Carlo, Laplace, or stochastic optimization approaches only when necessary.

This thesis provides a generic framework for hybrid, efficient and automatable Bayesian inference on factor graphs.
The presented algorithms achieve hybrid inference by interfacing Monte Carlo, Laplace, and stochastic optimization approaches with deterministic message passing algorithms.
'''

abstract_short = ""
date = "2023-01-20"
image = ""
image_preview = ""
math = false
publication = "PhD thesis"
publication_short = ""
selected = false
title = "Towards Universal Probabilistic Programming with Message Passing on Factor Graphs"
url_code = ""
url_dataset = ""
url_pdf = "pdf/thesis/20230120_Akbayrak_hf.pdf"
url_project = ""
url_slides = ""
url_video = ""

[[authors]]
    name = "Semih Akbayrak"
    id = "semih"
+++