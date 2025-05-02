+++
abstract = '''Hearing loss is a growing global issue, with projections indicating that one in four people will be affected by 2025. When left undiagnosed or untreated, hearing loss can lead to numerous social, medical, and economic problems. Hearing aids, which amplify sounds to compensate for hearing loss, aim to prevent these issues. Modern digital hearing aids incorporate various technologies to improve speech intelligibility in noisy environments. However, developing effective hearing aid algorithms is challenging because users perceive their effects differently based on environmental and cognitive factors. The limited personalization, adaptability, and lengthy design cycles of current hearing aid algorithms contribute to their limited adoption and frequent abandonment.

Addressing these challenges requires a paradigm shift in hearing aid algorithm design. This dissertation introduces a new class of personalized and situational hearing aid algorithms using a probabilistic modeling approach. This approach simplifies the development of a complete hearing aid algorithm to specifying a generative model. The resulting algorithm is then obtained by performing probabilistic inference within this model, which can be efficiently automated using message passing.

This dissertation frames the problem of hearing aid algorithm personalization from the user’s perspective as a source separation task. Users recombine the extracted sources from the observed mixture to personalize their acoustic experience. The underlying parameters are automatically adjusted by interacting with the hearing aid algorithm, balancing exploration of new parameter settings with exploitation of successful ones. These algorithms can also identify the current acoustic scene, achieving specialized performance across various situations. Additionally, we explore mechanisms for real-time processing to adapt to the resource constraints of hearing aids.

The probabilistic modeling approach also offers a principled strategy to compare different models to find the optimal one for a given environment. We demonstrate how to track model performance locally and use this information to select or combine models for optimal performance in different acoustic environments. We also show how to generate an uninformative model for new environments to adapt the hearing aid algorithms to previously unencountered situations. Finally, we illustrate how flexible Bayesian neural network models, typically too large for direct implementation in hearing aids, can be pruned without sacrificing performance, and how their depth can be estimated based on the complexity of the data.

The methods developed in this dissertation provide a novel perspective on hearing aid algorithm design. The demonstrated feasibility, combined with contributions across various design stages, offers a promising future for hearing aid algorithms. Addressing the remaining challenges will bring us closer to industrial adaptation. Recent advances at the intersection of model-based and data-driven machine learning present an exciting direction for future research.'''
abstract_short = ""
date = "2025-06-12T13:30:00+02:00"
image = ""
image_preview = ""
math = false
publication = "PhD thesis"
publication_short = ""
selected = false
title = "Automated Bayesian Hearing Aid Design"
url_code = ""
url_dataset = ""
url_pdf = "https://research.tue.nl/nl/publications/automated-bayesian-hearing-aid-design"
url_project = ""
url_slides = ""
url_video = ""

[[authors]]
    name = "Bart van Erp"
    id = "bart"
+++
