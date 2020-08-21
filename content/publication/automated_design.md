+++
abstract = '''This thesis describes a framework for automated design and personalization of Bayesian signal processing algorithms, with a focus on hearing aids. A pervasive problem with the hearing aid personalization (fitting) process is that acoustic issues often reveal themselves in-situ, far away from the controlled environment of the audiologists office. Instead of returning to the audiologist, it would be greatly beneficial to a patients hearing experience if she could adjust the hearing aid setting under situated conditions with minimal effort. Patient appraisals could for example be communicated to a synthetic algorithm designer by the press of a button on her smart-phone, or a gesture recognized by her smartwatch. The synthetic designer should then respond with an improved hearing aid signal processing algorithm. 

Towards this goal, the current thesis advocates a problem-based iterative approach to algorithm design, rigorously based on probabilistic reasoning. Conventional hearing aid fitting adheres to prescribed fitting rules that are developed for an average user in a controlled environment. In contrast, situated design demands techniques that enable personalization to a specific user in an unknown and volatile environment. In this setting, there is much uncertainty about the user and her encompassing soundscape. Probability theory offers a rigorous language for reasoning with this uncertainty. 

In this thesis the algorithm design process commences with an explicit problem statement, in the form of a probabilistic generative model. In the context of hearing aid algorithm design, this generative model includes a statement about personal hearing loss. Additional information, about e.g. user preferences or the encompassing soundscape, can be incorporated by further constraints on the model. Crucially, algorithms for signal processing, parameter estimation and relative model comparison can be automatically inferred by Bayesian reasoning on the generative model. 

Automatic algorithm derivation is implemented with the use of probabilistic programming techniques. The ForneyLab toolbox presented in this thesis allows for a convenient generative model specification as a Forney-style factor graph. This modular, scalable and flexible graphical formulation enables automatic derivation of complex (approximate) Bayesian message passing algorithms. Resulting algorithms are returned as Julia code, which can be customized and (in principle) readily executed on low-power devices such as hearing aids. 

Towards the goal of personalized algorithm design, the generative model can be extended with prior beliefs about future desired states. These prior beliefs will lead to goal-directed behavior by a process known as active inference. More specifically, if future outcomes are constrained to predict a satisfied user, then algorithms inferred from the constrained generative model will attempt to resolve these expectations. This thesis presents an operational framework for governing these active inference processes, which aid the automation of situated design processes. 

Taken together, this thesis describes the foundational principles for automated design of adaptive, personalized signal processing algorithms. The presented ForneyLab probabilistic programming software package offers the tools to implement the described algorithm design principles in practice.'''
abstract_short = ""
date = "2019-06-12T13:30:00+02:00"
image = ""
image_preview = ""
math = false
publication = "PhD thesis"
publication_short = ""
selected = false
title = "Automated Design of Bayesian Signal Processing Algorithms"
url_code = ""
url_dataset = ""
url_pdf = "https://research.tue.nl/en/publications/automated-design-of-bayesian-signal-processing-algorithms"
url_project = ""
url_slides = ""
url_video = ""

[[authors]]
    name = "Thijs van de Laar"
    id = "thijs"
+++