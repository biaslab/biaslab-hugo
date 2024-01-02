+++
abstract = '''Building models to understand patterns is one of the fundamental pursuits of science. Among such models, dynamical models are ubiquitous in most scientific fields as these models describe how processes evolve. These models can be found in finance, navigation, control engineering, audio signal processing, and telecommunications. Applications range from tracking the position of an aircraft to estimating the variance of returns on assets. Inference corresponds to computing posterior distributions over the variables of a given model.

This dissertation describes a theoretical framework for deriving customized message passing-based inference algorithms in factor graphs and illustrates the framework’s application to hierarchical dynamical models. Factor graphs are visual representations of the dependency structures among the variables of a model. Inference tasks on a given model
can be realized using message passing algorithms on the corresponding factor graph, where propagated messages are computed by integration (summation). Often, dynamical models of natural processes are constructed hierarchically. Because the hierarchies in the models may grow the complexity of dependence structures, exact inference by message passing in these models becomes infeasible and computationally impossible in a real-time setting. To employ
hierarchical dynamical models in applications that require real-time processing, inference by message passing needs to be approximated.

This dissertation proposes a constraint manipulation strategy to derive message passing algorithms on Forney-style factor graphs that pave the way for an efficient implementation of automated approximate inference. By changing the constraints on the local sub-graphs, we derive various local message update rules as the stationary solutions of a constrained Bethe free energy from first principles. By combining these local updates, one can perform hybrid message passing. Constraint manipulation is a modular way of generating message-passing algorithms by combining local updates such that factorized computations of local updates allow efficient implementation. This thesis then demonstrates how message passing by constraint manipulation applies to
hierarchical dynamical systems. The focus is on the hierarchical Gaussian filter, a time-series model for volatile processes where non-linear transforms couple the states in this process. A composite factor node (named GCV), representing the state transition distribution of an HGF, is constructed and subsequently can be used as a plug-in module for any factor graph. Various message update rules for the GCV node under multiple constraints are derived. Combining derived update rules, it is possible to implement automated hybrid message passing for the variants of the HGF-like models in software packages ForneyLab.jl and ReactiveMP.jl.

Natural processes are often non-stationary. Therefore, the realizations of natural processes have statistical properties that change with time. A source of non-stationarity is due to regime changes in the parameter values. A parameterized transition distribution may govern
changes in the statistical properties. If the parameters of this transition distribution are subject to regime switches, then the statistical properties of the transition distribution will depend on the regimes. To account for context switches, this dissertation provides a switching extension to the HGF model with a hidden Markov model that governs a selection mechanism for the parameters of the ordinary HGF model. A composite factor node (named GCSV) is
constructed as a successor of GCV, and closed-form message update rules are derived. The derived message update rules allow automated real-time message passing in graphs containing state transitions with switching volatile dynamics.

Moreover, this dissertation illustrates how the graphical formalism of factor graphs allows us to build complex models from primitive node structures. To that end, this dissertation focuses on auto-regressive(AR) processes that are ubiquitous for time-series modeling. AR processes are often constructed under the assumption that the precision of the innovation noise and AR coefficients are constant to ensure stationarity. The dissertation shows how the GCV node could be used as a plug-in module within the graphs of auto-regressive models to extend the auto-regressive models such that the deriving noise processes are time-varying. Message passing in the corresponding model leads to online state and parameter estimation
in auto-regressive models with time-varying process noise.

In summary, this dissertation formulates a guideline for automated approximate inference and performance evaluation for discrete-time hierarchical dynamical models. This thesis advocates that inference and performance evaluation can be automated and efficiently implemented by message passing on factor graphs for hierarchical dynamical models via locally approximated message update rules. A product of the dissertation is a message-passing
framework equipped with modular factor nodes with available message update rules to create hierarchical dynamical systems.
'''

abstract_short = ""
date = "2022-06-24"
image = ""
image_preview = ""
math = false
publication = "PhD thesis"
publication_short = ""
selected = false
title = "Message Passing Algorithms for Hierarchical Dynamical Models"
url_code = ""
url_dataset = ""
url_pdf = "https://pure.tue.nl/ws/portalfiles/portal/204469195/20220624_Senoz_hf.pdf"
url_project = ""
url_slides = ""
url_video = ""

[[authors]]
    id = "ismail"
+++
