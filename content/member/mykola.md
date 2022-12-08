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

A team of researchers at a hearing aid company has developed a new algorithm for improving sound quality in noisy environments. However, before the algorithm can produce hearing aids, it needs to be optimized to run faster and use less power. To address this issue, a separate team of engineers begins working on adapting the algorithm to the production environment: by implementing strategies for efficient execution and power management. A lot of time spend, and finally, teams deliver the product.

Unfortunately, a strange thing happened: the barking was considered noise in the initial algorithm, but it is an essential sound for dog handlers. They want to hear their dogs!

And the team needs to restart this cycle again. This development cycle converges to a good algorithm very slowly: the need for two separate teams slows down the research process, and the entire cycle has to be restarted when something unexpected happens.

My general long-term research goal is to resolve this two-separate-team problem (at least partially). Specifically, I aim to develop a flexible computational engine that can trade precision for efficiency.

The flexible computational engine will allow the team to generate new versions of the algorithm that are less precise but still usable for testing. This can help the team to make progress more quickly and avoid having to restart the entire development cycle when unexpected issues arise, such as the barking being classified as noise in the initial algorithm. 

The message-passing inference is the perfect place to implement it. All our computations are local, and if one needs to be less precise, so be it. It should keep the result (at least approximately). I want to treat message computation as a bayesian procedure to achieve this inside the message-passing inference.

By treating message computation as a bayesian procedure inside the message-passing inference, the approximate inference method can be implemented and demonstrated within the [RxInfer ecosystem](https://biaslab.github.io/rxinfer-website/).

Previously, I worked as a DevOps \& machine learning engineer and natural language processing engineer.
