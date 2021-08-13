+++
abstract = "Pure-tone audiometry—the process of estimating a person's hearing threshold from 'audible' and 'inaudible' responses to tones of varying frequency and intensity—is the basis for diagnosing and quantifying hearing loss. By taking a probabilistic modeling approach, both optimal tone selection (in terms of expected information gain) and hearing threshold estimation can be derived through Bayesian inference methods. The performance of probabilistic model-based audiometry methods is directly linked to the quality of the underlying model. In recent years, Gaussian process (GP) models have been shown to provide good results in this context. We present methods to improve the efficiency of GP-based audiometry procedures by improving the underlying model. Instead of a single GP, we propose to use a GP mixture model that can be conditioned on side-information about the subject. The underlying idea is that one can typically distinguish between different types of hearing thresholds, enabling a mixture model to better capture the statistical properties of hearing thresholds among a population. Instead of modeling all hearing thresholds by a single GP, a mixture model allows specific types of hearing thresholds to be modeled by independent GP models. Moreover, the mixing coefficients can be conditioned on side-information such as age and gender, capturing the correlations between age, gender, and hearing threshold. We show how a GP mixture model can be optimized for a specific target population by learning the parameters from a data set containing annotated audiograms. We also derive an optimal tone selection method based on greedy information gain maximization, as well as hearing threshold estimation through Bayesian inference. The proposed models are fitted to a data set containing roughly 176 thousand annotated audiograms collected in the Nordic countries. We compare the predictive accuracies of optimized mixture models of varying sizes with that of an optimized single-GP model. The usefulness of the optimized models is tested in audiometry simulations. Simulation results indicate that an optimized GP mixture model can significantly outperform an optimized single-GP model in terms of predictive accuracy, and significantly increases the efficiency of the resulting Bayesian audiometry procedure."
abstract_short = ""
date = "2021-08-13T07:41:37+01:00"
image = ""
image_preview = ""
math = false
publication = "Frontiers in Digital Health (2021)"
publication_short = ""
selected = false
title = "Bayesian Pure-Tone Audiometry Through Active Learning Under Informed Priors"
url_code = ""
url_dataset = ""
url_pdf = "https://www.frontiersin.org/articles/10.3389/fdgth.2021.723348/pdf"
url_project = "/project/bayesian-pure-tone-audiometry"
url_slides = ""
url_video = ""

[[authors]]
    name = "Marco Cox"
    id = "marco"
[[authors]]
    name = "Bert de Vries"
    id = "bert"
+++

View the [online version](https://www.frontiersin.org/articles/10.3389/fdgth.2021.723348/full) of this article.