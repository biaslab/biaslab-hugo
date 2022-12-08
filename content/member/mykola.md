+++
date = "2022-05-15T13:33:37+00:00"
id = "mykola"
interests = ["Probabilistic Inference", "Approximate Inference", "Active Inference"]
name = "Mykola Lukashchuk"
portrait = "portraits/mykola.jpg"
short_bio = "I am a PhD candidate at the Electrical Engineering department, [Eindhoven University of Technology](https://www.tue.nl/en/)."
title = "Mykola Lukashchuk"
sort_position = 4

[[social]]
    icon = "envelope"
    icon_pack = "fa"
    link = "mailto:m.lukashchuk@tue.nl"

[[social]]
    icon = "github"
    icon_pack = "fa"
    link = "https://github.com/Nimrais"

[[education]]
    course = "MSc in Statistics"
    institution = "Taras Shevchenko National University of Kyiv"
    year = 2021

[[education]]
    course = "MSc in Computer Science"
    institution = "Instituto Politécnico Nacional"
    year = 2021

[[education]]
    course = "BSc in Statistics"
    institution = 'Taras Shevchenko National University of Kyiv'
    year = 2019

[[organizations]]
    name = "TU Eindhoven"
    role = "PhD candidate"

+++

We all know about this situation: a team of researchers developed a new, pretty algorithm... But, OUCH!... before this algorithm can be employed, some production constraints still need to be fulfilled: it needs to be faster, use less RAM, etc. To resolve this issue, a separate team of engineers starts to shape the shiny algorithm into a form that fits into the production environment, e.g., by adding strategies for execution, memory allocation, and much more. But this two-separate-team problem stopped us from iterating the research process fast: something new and unexpected happened, and we needed to restart the whole cycle again. So if it is magically possible, at least test the new algorithm inside the production environment...

My general long-term research goal is to resolve this two-separate-team problem (at least partially). Specifically, I aim to develop a flexible computational engine that can trade efficiency for precision.

The message-passing inference is the perfect place to implement it. All our computations are local, and if one needs to be less precise, so be it. It should keep the result (at least approximately). To achieve this inside the message passing inference, I want to treat message computation as a bayesian procedure.

To demonstrate the capabilities of this approximate inference method, it will be implemeted inside our [RxInfer ecosystem](https://biaslab.github.io/rxinfer-website/).

Previously, I worked as a DevOps \& machine learning engineer, and natural language processing engineer.
