+++
date = "2022-05-15T13:33:37+00:00"
id = "mykola"
interests = ["Probabilistic Inference", "Approximate Inference", "Active Inference"]
name = "Mykola Lukashchuk"
portrait = "portraits/mykola.jpg"
short_bio = "I am a PhD candidate at the Electrical Engineering department, [Eindhoven University of Technology](https://www.tue.nl/en/)."
title = "Mykola Lukashchuk"
sort_position = 4.5

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

A team of researchers at a hearing aid company has developed a new algorithm for improving sound quality in noisy environments. However, before the algorithm can be used in hearing aids, it needs to be optimized to run faster and use less power. To address this issue, a separate team of engineers begins to work on adapting the algorithm to the production environment: they implement strategies for efficient execution and power management. In a typical iterative development cycle procedure, they then pass the updated algorithm to the researcher team, adding another iteration in the cycle. Finally, after a lot of time spent in this cycle and many iterations, both teams deliver the product.

Unfortunately, some customers testing the product - dog handlers - are complaining: they cannot hear their dogs! Why? The current algorithm considered barking, an essential sound for dog handlers, as noise!

To build a better algorithm that can deal with this unexpected scenario, both teams need to spend even more time in the development cycle. Evidently, convergence to a good algorithm is very slow in this development cycle: the need for two separate teams slows down the research process, and another iteration in the cycle is required whenever something unexpected happens.

My general long-term research goal is to resolve this two-separate-team problem (at least partially). Specifically, I aim to develop a flexible computational engine that can trade precision for efficiency, and which will consequently generate new versions of an algorithm that are less precise but still usable for testing. In the aforementioned example, this can help the teams make progress more quickly and avoid having to restart the entire development cycle when unexpected issues arise, such as the barking being classified as noise in the initial algorithm.

To implement this engine, I want to treat message computation as a Bayesian procedure inside message-passing inference.
In message-passing inference, all our computations are local and can be kept for faster inference.
If one needs to be less precise, then approximations of the exact result can be computed via approximate inference methods.
Implementations of all inference methods within this engine will be demonstrated within the [RxInfer ecosystem](https://biaslab.github.io/rxinfer-website/).

Previously, I worked as a DevOps \& machine learning engineer and natural language processing engineer.
