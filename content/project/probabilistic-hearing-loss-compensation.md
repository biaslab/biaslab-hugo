+++
date = "2016-07-12T16:10:22+02:00"
external_link = ""
project_id = "phlc"
description = "Hearing Aid (HA) algorithms need to be tuned (fitted) to match the impairment of each specific patient. The lack of a fundamental HA fitting theory is a strong contributing factor to an unsatisfying sound experience for about 20% of hearing aid patients. This paper proposes a probabilistic modeling approach to the design of HA algorithms. The proposed method relies on a generative probabilistic model for the hearing loss problem and provides for automated inference of the corresponding (1) signal processing algorithm, (2) the fitting solution as well as a principled (3) performance evaluation metric. All three tasks are realized as message passing algorithms in a factor graph representation of the generative model, which in principle allows for fast implementation on hearing aid or mobile device hardware. The methods are theoretically worked out and simulated with a custom-built factor graph toolbox for a specific hearing loss model."
title = "Probabilistic Hearing Loss Compensation"

[[participants]]
    name = "Thijs van de Laar"
    is_member = true
    link = "/thijs"

[[participants]]
    name = "Bert de Vries"
    is_member = true
    link = "/bert"

+++


## Problem Statement

Hearing loss is a problem that affects millions of people, and each hearing loss is unique. For those people wearing a hearing aid to compensate for their hearing loss, each person also has his or her own preferred hearing aid settings. Therefore, it is hard to find the best setting for each individual, especially when problems often arise in the field.

We aim to automate hearing aid algorithm design, and argue that a proper hearing aid design agent (HADA) should:

- describe hearing aid design as a personalized process;
- decide what signal processing circuit to use for hearing loss compensation;
- estimate tuning parameters of the signal processing algorthm;
- evaluate the performance of one signal processing algorithm relative to an alternative.


## Methods and Solution Proposal

From a hearing aid, the HADA collects the signal input and compensation gain, and labels these input-gain pairs with a patient evaluation. A positive evaluation triggers parameter learning, while a negative evaluation sends a new parameter setting to the hearing aid, starting a new listening trial. This way, hearing aid design becomes an always-on process of consecutive trials. The HADA is illustrated in the figure below. From the HADA, a trial parameter setting is sent to the hearing aid. The user then offers direct feedback (thumbs up or down) on the perceived audio. In response to positive feedback, the HADA updates its state-of knowledge about preferred parameters from the training data (the current input-gain pair).

<img src="/img/projects/PHLC/PHLC-architecture.png" width="500px">


## Results

In order to illustrate the process of personalized hearing aid design, we simulated the signal processing, parameter estimation and relative model comparison tasks of the HADA.

For signal processing, the HADA inferred a personalized amplification gain, based on an input signal and a description (model) of a patient-specific hearing loss. The results show for a piecewise linear hearing loss (in the log-power domain) with a hearing threshold at 45 [dB HL], and a recruitment threshold at 90 [dB HL], for a single (arbitrary) frequency band, are plotted below. Here, the dashed line represents the input sound level, and the solid line the compensation gain. This signal processing result exhibits the behaviour of a dynamic range compressor. 

<img src="/img/projects/PHLC/SP.png" width="500px">

For parameter estimation, a more complex latent hearing loss function was approximated from training data. The training data were generated from signal processing on the latent model itself. The approximating function was again a piecewise-linear hearning loss model. The figure below shows an appealing fit of the approximate model (solid curve) to the latent model (dash-dotted curve), and suggests that the hearing loss model can be learned from audio data.

<img src="/img/projects/PHLC/PE_fit.png" width="500px">

For model comparison, we evaluated the performance difference (Bayes factor) between a model with and without a distortion-limiting gain restriction. On the training data, the model _with_ gain restriction strongly outperforms the simpler but restrictionless model, by 16.7 [dHart]. This model comparison example illustrates that the Bayes factor can be used as a model-agnostic comparison metric.


### Reference
Thijs van de Laar and Bert de Vries, _A Probabilistic Modeling Approach to Hearing Loss Compensation_, (accepted for publication in) IEEE Tr. on Audio, Speech and Language Processing, available at http://arxiv.org/abs/1602.01345, July 2016
