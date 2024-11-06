+++
abstract = "Tools for message passing on factor graphs typically employ a scheduling procedure, in which a separate algorithm or compiler takes the model description and returns which nodes should pass messages where at what time. This can be sufficiently expensive to form a bottleneck. Moreover, it's not a biologically plausible mechanism for governing message passing. I explore the possibility of passing messages without a scheduler. A designated terminal node should pass an initial message, which will arrive at an initial variable. The corresponding belief is updated, a local Free Energy is computed and the belief is emitted to neighbouring factor nodes. From there on out, whenever an updated belief arrives at a factor node, the node fires messages to all other variables if the local Free Energy surpasses a threshold. If not, the node becomes silent."
abstract_short = "Tools for message passing on factor graphs typically employ a scheduling procedure, in which a separate algorithm or compiler takes the model description and returns which nodes should pass messages where at what time. This can be sufficiently expensive to form a bottleneck. Moreover, it's not a biologically plausible mechanism for governing message passing. I explore the possibility of passing messages without a scheduler. A designated terminal node should pass an initial message, which will arrive at an initial variable. The corresponding belief is updated, a local Free Energy is computed and the belief is emitted to neighbouring factor nodes. From there on out, whenever an updated belief arrives at a factor node, the node fires messages to all other variables if the local Free Energy surpasses a threshold. If not, the node becomes silent."
date = "2020-03-25T09:00:00+02:00"
image = ""
image_preview = ""
math = false
publication = "Neuromatch Conference 2020"
publication_short = "Neuromatch 2020"
publication_date = "2020-03-25T09:00:00+02:00"
selected = false
title = "Schedule-free variational message passing for Bayesian filtering"
url_code = "https://github.com/biaslab/schedulefree-mp"
url_dataset = ""
url_project = ""
url_slides = ""
url_video = ""
url_pdf = "/pdf/neuromatch2020/Kouw2020neuromatch.pdf"

[[authors]]
    id = "wouter"
+++
