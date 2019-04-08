var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Home",
    "title": "Home",
    "category": "page",
    "text": ""
},

{
    "location": "#ForneyLab.jl-1",
    "page": "Home",
    "title": "ForneyLab.jl",
    "category": "section",
    "text": "A Julia toolbox for automatic generation of (Bayesian) inference algorithms.Given a probabilistic model, ForneyLab generates efficient Julia code for message-passing based inference. It uses the model structure to generate an algorithm that consists of a sequence of local computations on a Forney-style factor graph (FFG) representation of the model."
},

{
    "location": "#Package-Features-1",
    "page": "Home",
    "title": "Package Features",
    "category": "section",
    "text": "User friendly syntax for specification of probabilistic models.\nAutomatic generation of message passing algorithms including\nBelief propagation\nVariational message passing\nExpectation propagation\nSupport for hybrid models combining discrete and continuous latent variables.\nEvaluation of free energy as a model performance measure.\nCombination of distinct inference algorithms under a unified paradigm.\nFeatures composite nodes that allow for flexible hierarchical design in terms of model structure and algorithms."
},

{
    "location": "#Resources-1",
    "page": "Home",
    "title": "Resources",
    "category": "section",
    "text": "For an in depth overview of ForneyLab, see A Factor Graph Approach to Automated Design of Bayesian Signal Processing Algorithms by Cox et. al. (2018).\nFor an introduction to message passing and FFGs, see The Factor Graph Approach to Model-Based Signal Processing by Loeliger et al. (2007).\nThe ForneyLab project page provides more background on ForneyLab as well as pointers to related literature and talks."
},

{
    "location": "#How-to-get-started?-1",
    "page": "Home",
    "title": "How to get started?",
    "category": "section",
    "text": "Head to the Getting started section to get up and running with ForneyLab in no time."
},

{
    "location": "getting-started/#",
    "page": "Getting started",
    "title": "Getting started",
    "category": "page",
    "text": ""
},

{
    "location": "getting-started/#Getting-started-1",
    "page": "Getting started",
    "title": "Getting started",
    "category": "section",
    "text": "This page provides the necessary information you need to get started with ForneyLab. We will show the general approach to solving inference problems with ForneyLab by means of a running example: Inferring the bias of a coin."
},

{
    "location": "getting-started/#Installation-1",
    "page": "Getting started",
    "title": "Installation",
    "category": "section",
    "text": "Install ForneyLab through the Julia package manager:] add ForneyLabnote: Note\nIf you want to use the graph visualization functions, you need to have GraphViz installed."
},

{
    "location": "getting-started/#Example:-Inferring-the-bias-of-a-coin-1",
    "page": "Getting started",
    "title": "Example: Inferring the bias of a coin",
    "category": "section",
    "text": "The ForneyLab approach to solving inference problems consists of three phases:Model specification: ForneyLab provides a simple metalanguage to specify probabilistic models.\nMessage-passing algorithm generation: Given a model, it is ForneyLab\'s job to provide you with an algorithm that runs inference on your quantities of interest.\nMessage-passing inference execution: Feed observations and a prior belief over your quantities of interest to the algorithm and you will get an updated posterior in return."
},

{
    "location": "getting-started/#Coin-flip-simulation-1",
    "page": "Getting started",
    "title": "Coin flip simulation",
    "category": "section",
    "text": "Let\'s start by gathering some data. One approach could be flipping a coin N times and recording each outcome. Here, however, we will simulate this process by sampling some values from a Bernoulli distribution. Each sample can be thought of as the outcome of single flip which is either heads or tails (1 or 0). We will assume that our virtual coin has an underlying probability of 75% of landing heads up.N = 25          # number of coin tosses\r\np = 0.75        # p parameter of the Bernoulli distribution\r\nsbernoulli(n, p) = [(rand() < p) ? 1 : 0 for _ = 1:n] # define Bernoulli sampler\r\ndataset = sbernoulli(N, p); # run N Bernoulli trials\r\nprint(\"dataset = \") ; show(dataset)"
},

{
    "location": "getting-started/#getting-started-model-specification-1",
    "page": "Getting started",
    "title": "Model specification",
    "category": "section",
    "text": "In a Bayesian setting, the next step is to specify our probabilistic model. This amounts to specifying the joint probability of the random variables of the system."
},

{
    "location": "getting-started/#Likelihood-1",
    "page": "Getting started",
    "title": "Likelihood",
    "category": "section",
    "text": "We will assume that the outcome of each coin flip is governed by the Bernoulli distribution, i.e.y_i sim Bernoulli(theta),where y_i=1 represents \"heads\", y_i=0 represents \"tails\", and θ in 01 is the underlying probability of the coin landing heads up for a single coin flip."
},

{
    "location": "getting-started/#Prior-1",
    "page": "Getting started",
    "title": "Prior",
    "category": "section",
    "text": "We will choose the conjugate prior of the Bernoulli likelihood function defined above, namely the beta distribution, i.e.theta sim Beta(a b),where a and b are the hyperparameters that encode our prior beliefs about the possible values of theta. We will assign values to the hyperparameters in a later step.   "
},

{
    "location": "getting-started/#Joint-probability-1",
    "page": "Getting started",
    "title": "Joint probability",
    "category": "section",
    "text": "The joint probability is given by the multiplication of the likelihood and the prior, i.e.P(y_i θ) = prod_i=1^N P(y_i  θ) P(θ).Now let\'s see how to specify this model using ForneyLab\'s syntax.using ForneyLab\r\ng = FactorGraph()       # create a factor graph\r\na = placeholder(:a)     # define hyperparameter a as placeholder\r\nb = placeholder(:b)     # define hyperparameter b as placeholder\r\n@RV θ ~ Beta(a, b)      # prior\r\n@RV y ~ Bernoulli(θ)    # likelihood\r\nplaceholder(y, :y)      # define y as a placeholder for data\r\ndraw(g)                 # draw the factor graphAs you can see, ForneyLab offers a model specification syntax that resembles closely to the mathematical equations defined above. Placeholders are used to indicate variables that take specific values at a later date. For example, the way we feed observations into the model is by iteratively assigning each of the observations in our dataset to the random variable y. Perhaps less obvious is the fact that the hyperparameters a and b are also defined as placeholders. The reason is that we will use them to input our current belief about θ for every observation that is processed. In section Message-passing inference execution we will see how this is done."
},

{
    "location": "getting-started/#Message-passing-algorithm-generation-1",
    "page": "Getting started",
    "title": "Message-passing algorithm generation",
    "category": "section",
    "text": "Once we have defined our model, the next step is to instruct ForneyLab to generate a message-passing algorithm that solves our given inference problem. To do this, we need to specify which type of algorithm we want to use. In this case we will use belief propagation, also known as the sum-product algorithm. Once we execute the following code, we see that a function called step!(...) becomes available in the current scope. This function contains the sum-product message-passing algorithm.# Generate a message passging sum-product algorithm that infers theta\r\nalgo_str = sumProductAlgorithm(θ) # ForneyLab returns the algorithm as a string\r\nalgorithm = Meta.parse(algo_str) # parse the algorithm into a Julia expression\r\neval(algorithm); # evaluate the functions contained in the Julia expression\r\nnothing # hide:(function step!(data::Dict, marginals::Dict=Dict(), messages::Vector{Message}=Array{Message}(undef, 2))\r\n      #= none:3 =#\r\n      messages[1] = ruleSPBetaOutVPP(nothing, Message(Univariate, PointMass, m=data[:a]), Message(Univariate, PointMass, m=data[:b]))\r\n      #= none:4 =#\r\n      messages[2] = ruleSPBernoulliIn1PV(Message(Univariate, PointMass, m=data[:y]), nothing)\r\n      #= none:6 =#\r\n      marginals[:θ] = (messages[1]).dist * (messages[2]).dist\r\n      #= none:8 =#\r\n      return marginals\r\n  end)"
},

{
    "location": "getting-started/#Message-passing-inference-execution-1",
    "page": "Getting started",
    "title": "Message-passing inference execution",
    "category": "section",
    "text": "The last step is to execute the message-passing algorithm. In order to do this, we first need to assign values to the hyperparameters a and b which characterize our prior beliefs p(theta) about the bias of the coin. Then, we need to feed the observations, one at a time, to the algorithm together with our current belief (prior) p(theta) about the bias of the coin. The important thing to note here is that the posterior distribution after processing one observation p(thetay_i-1) becomes the prior for the processing of the next observation.# Create a marginals dictionary, and initialize hyperparameters\r\na = 2.0\r\nb = 7.0\r\nmarginals = Dict(:θ => ProbabilityDistribution(Beta, a=a, b=b))\r\n\r\nfor i in 1:N\r\n    # Feed in datapoints 1 at a time\r\n    data = Dict(:y => dataset[i],\r\n                :a => marginals[:θ].params[:a],\r\n                :b => marginals[:θ].params[:b])\r\n\r\n    step!(data, marginals)\r\nend"
},

{
    "location": "getting-started/#Results-1",
    "page": "Getting started",
    "title": "Results",
    "category": "section",
    "text": "The plot below shows the result of the inference procedure. We see how the posterior is a “compromise” between the prior and likelihood, as mandated by Bayesian inference.using Plots, LaTeXStrings, SpecialFunctions; theme(:default)\r\npyplot(fillalpha=0.3, leg=false, xlabel=L\"\\theta\", yticks=nothing)\r\nBetaPDF(α, β) = x ->  x^(α-1)*(1-x)^(β-1)/beta(α, β) # beta distribution definition\r\nBernoulliPDF(z, N) = θ -> θ^z*(1-θ)^(N-z) # Bernoulli distribution definition\r\n\r\nrθ = range(0, 1, length=100)\r\np1 = plot(rθ, BetaPDF(a, b), title=\"Prior\", fill=true, ylabel=L\"P(\\theta)\", c=1,)\r\np2 = plot(rθ, BernoulliPDF(sum(dataset), N), title=\"Likelihood\", fill=true, ylabel=L\"P(D|\\theta)\", c=2)\r\np3 = plot(rθ, BetaPDF(marginals[:θ].params[:a], marginals[:θ].params[:b]), title=\"Posterior\", fill=true, ylabel=L\"P(\\theta|D)\", c=3)\r\nplot(p1, p2, p3, layout=@layout([a; b; c]))"
},

{
    "location": "getting-started/#Where-to-go-next?-1",
    "page": "Getting started",
    "title": "Where to go next?",
    "category": "section",
    "text": "There are a set of demos available in ForneyLab\'s repository that demonstrate the more advanced features of ForneyLab. Alternatively, you can head to the User guide which provides more detailed information of how to use ForneyLab to solve inference problems."
},

{
    "location": "user-guide/#",
    "page": "User guide",
    "title": "User guide",
    "category": "page",
    "text": ""
},

{
    "location": "user-guide/#User-guide-1",
    "page": "User guide",
    "title": "User guide",
    "category": "section",
    "text": "This user guide outlines the usage of ForneyLab for solving inference problems. The main content is divided in three parts:Specifying a model\nGenerating an algorithm\nExecuting an algorithmFor installation instructions see the Getting started page. To import ForneyLab into the active Julia session run  using ForneyLab"
},

{
    "location": "user-guide/#Specifying-a-model-1",
    "page": "User guide",
    "title": "Specifying a model",
    "category": "section",
    "text": "Probabilistic models incorporate the element of randomness to describe an event or phenomenon. They do this by using random variables and probability distributions. These models can be represented diagrammatically using probabilistic graphical models (PGMs). A factor graph is a type of PGM that is well suited to cast inference tasks in terms of graphical manipulations."
},

{
    "location": "user-guide/#Creating-a-new-factor-graph-1",
    "page": "User guide",
    "title": "Creating a new factor graph",
    "category": "section",
    "text": "Factor graphs are represented by the FactorGraph composite type (struct). To instantiate a new (empty) factor graph we use its constructor function that takes no argumentsg = FactorGraph()\r\nnothing # hideForneyLab keeps track of an active factor graph at all times. Future operations on the graph, such as adding variables or nodes, affect the active graph. The call to FactorGraph() creates a new instance of a factor graph and registers it as the active graph.To get the active graph runfg = currentGraph()\r\nnothing # hideTo set the active graph runsetCurrentGraph(g)\r\nnothing # hide"
},

{
    "location": "user-guide/#Adding-random-variables-(edges)-1",
    "page": "User guide",
    "title": "Adding random variables (edges)",
    "category": "section",
    "text": "Random variables are represented as edges on Forney-style factor graphs. You can add a random variable to the active factor graph by instantiating the Variable composite type. The constructor function takes an id of type Symbol as argument. For example, runningx = Variable(id=:x)\r\nnothing # hideassociates the variable x to an edge of the active factor graph.Alternatively, the @RV macro can be used for the same purpose in a more compact form. Executing the following line has the same effect as the previous one.@RV x\r\nnothing # hideBy default, the @RV macro uses the variable\'s name to create a Julia Symbol that is assigned to the id field of the Variable object (:x in this example). However, if this id value has already been assigned to a variable in the factor graph, then ForneyLab will create a default id of the form :variable_x, where x is a number that increments. In case you want to provide a custom id, the @RV macro accepts an optional keyword argument between square brackets that allows this. For example,@RV [id=:my_id] x\r\nnothing # hideadds the variable x to the active graph and assigns the :my_id symbol to its id field. Later we will see that this is useful once we start visualizing the factor graph."
},

{
    "location": "user-guide/#Adding-factor-nodes-1",
    "page": "User guide",
    "title": "Adding factor nodes",
    "category": "section",
    "text": "Factor nodes are used to define the relationship between different random variables. They assign probability distributions to a random variable as a function of other variables. See Factor nodes for a complete list of the available factor nodes in ForneyLab.We can assign a probability distribution to a random variable using the ~ operator together with the @RV macro. For example, to create a Gaussian distributed random variable y, where its mean and variance are controlled by the random variables m and v respectively, we could run@RV m\r\n@RV v\r\n@RV y ~ GaussianMeanVariance(m, v)\r\nnothing # hide"
},

{
    "location": "user-guide/#Visualizing-a-factor-graph-1",
    "page": "User guide",
    "title": "Visualizing a factor graph",
    "category": "section",
    "text": "Factor graphs can be visualized using the draw function. It takes a FactorGraph object as argument. Let\'s visualize the factor graph that we defined in the previous section.ForneyLab.draw(g)Edges that are not connected to any factor node are not drawn."
},

{
    "location": "user-guide/#Clamping-1",
    "page": "User guide",
    "title": "Clamping",
    "category": "section",
    "text": "Suppose we know that the variance of the random variable y, of the previous model, is fixed to a certain value. ForneyLab provides a special factor node to impose this kind of constraint called a Clamp. Clamp factor nodes can be implicitly defined by using literals like in the following exampleg = FactorGraph() # create a new factor graph\r\n@RV m\r\n@RV y ~ GaussianMeanVariance(m, 1.0)\r\nForneyLab.draw(g)Here, the literal 1.0 that is passed as the second argument to GaussianMeanVariance function creates a clamp node implicitly. Clamp factor nodes are visualized with a gray background.Alternatively, if you want to assign a custom id to a Clamp factor node, then you have to instantiate them explicitly using its constructor function, i.e.g = FactorGraph() # create a new factor graph\r\n@RV m\r\n@RV v ~ Clamp(1.0)\r\n@RV y ~ GaussianMeanVariance(m, v)\r\nForneyLab.draw(g)"
},

{
    "location": "user-guide/#Placeholders-1",
    "page": "User guide",
    "title": "Placeholders",
    "category": "section",
    "text": "Placeholders are a kind of Clamp factor nodes that act as entry points for data. They associate a given random variable with a buffer through which data is fed at a later point. This buffer has an id, a dimensionality and a data type. Placeholders are created with the placeholder function. Suppose that we want to feed an array of one-dimensional floating-point data to the y random variable of the previous model. We would then need to define y as a placeholder as follows.g = FactorGraph() # create a new factor graph\r\n@RV m\r\n@RV v ~ Clamp(1.0)\r\n@RV y ~ GaussianMeanVariance(m, v)\r\nplaceholder(y, :y)\r\nForneyLab.draw(g)Placeholders default to one-dimensional floating-point data. In case we want to override this with, for example, 3-dimensional integer data, we would need to specify the dims and datatpye parameters of the placeholder function as followsplaceholder(y, :y, dims=(3,), datatype=Int)In the previous example, we first created the random variable y and then marked it as a placeholder. There is, however, a shorthand version to perform these two steps in one. The syntax consists of calling a placeholder method that takes an id Symbol as argument and returns the new random variable. Here is an example:x = placeholder(:x)\r\nnothing # hidewhere x is now a random variable linked to a placeholder with id :x.In section Executing an algorithm we will see how the data is fed to the placeholders."
},

{
    "location": "user-guide/#Overloaded-operators-1",
    "page": "User guide",
    "title": "Overloaded operators",
    "category": "section",
    "text": "ForneyLab supports the use of the +, - and * operators between random variables that have certain types of probability distributions. This is known as operator overloading. These operators are represented as deterministic factor nodes in ForneyLab. As an example, a two-component Gaussian mixture can be defined as follows  g = FactorGraph() # create a new factor graph\r\n@RV x ~ GaussianMeanVariance(0.0, 1.0)\r\n@RV y ~ GaussianMeanVariance(2.0, 3.0)\r\n@RV z = x + y\r\nplaceholder(z, :z)\r\nForneyLab.draw(g)"
},

{
    "location": "user-guide/#Online-vs.-offline-learning-1",
    "page": "User guide",
    "title": "Online vs. offline learning",
    "category": "section",
    "text": "Online learning refers to a procedure where observations are processed as soon as they become available. In the context of factor graphs this means that observations need to be fed to the placeholders and processed one at a time. In a Bayesian setting, this reduces to the application of Bayes rule in a recursive fashion, i.e. the posterior distribution for a given random variable, becomes the prior for the next processing step. Since we are feeding one observation at each time step, the factor graph will have one placeholder for every observed variable. All of the factor graphs that we have seen so far were specified to process data in this fashion.Let\'s take a look at an example in order to contrast it with its offline counterpart. In this simple example, the mean x of a Gaussian distributed random variable y is modelled by another Gaussian distribution with hyperparameters m and v. The variance of y is assumed to be known.g = FactorGraph() # create a new factor graph\r\nm = placeholder(:m)\r\nv = placeholder(:v)\r\n@RV x ~ GaussianMeanVariance(m, v)\r\n@RV y ~ GaussianMeanVariance(x, 1.0)\r\nplaceholder(y, :y)\r\nForneyLab.draw(g)As we have seen in previous examples, there is one placeholder linked to the observed variable y that accepts one observation at a time. Perhaps what is less obvious is that the hyperparameters m and v are also defined as placeholders. The reason for this is that we will use them to input our current (prior) belief about x for every observation that is processed. In section Executing an algorithm we will elaborate more on this.Offline learning, on the other hand, involves feeding and processing a batch of N observations (typically all available observations) in a single step. This translates into a factor graph that has one placeholder linked to a random variable for each sample in the batch. We can specify this type of models using a for loop like in the following example.g = FactorGraph()   # create a new factor graph\r\nN = 3               # number of observations\r\ny = Vector{Variable}(undef, N)\r\n@RV x ~ GaussianMeanVariance(0.0, 1.0)\r\nfor i = 1:N\r\n    @RV y[i] ~ GaussianMeanVariance(x, 1.0)\r\n    placeholder(y[i], :y, index=i)\r\nend\r\nForneyLab.draw(g)The important thing to note here is that we need an extra array of N observed random variables where each of them is linked to a dedicated index of the placeholder\'s buffer. This buffer can be thought of as an N dimensional array of Clamp factor nodes. We achieve this link by means of the index parameter of the placeholder function.In section Executing an algorithm we will see examples of how the data is fed to the placeholders in each of these two scenarios."
},

{
    "location": "user-guide/#Generating-an-algorithm-1",
    "page": "User guide",
    "title": "Generating an algorithm",
    "category": "section",
    "text": "ForneyLab supports code generation for three different types of message-passing algorithms:Belief propagation\nVariational message passing\nExpectation propagationWhereas belief propagation computes exact inference for the random variables of interest, variational message passing (VMP) and expectation propagation (EP) algorithms are approximation methods that can be applied to a larger range of models."
},

{
    "location": "user-guide/#Belief-propagation-1",
    "page": "User guide",
    "title": "Belief propagation",
    "category": "section",
    "text": "The way to instruct ForneyLab to generate a belief propagation algorithm (also known as a sum-product algorithm) is by using the sumProductAlgorithm function. This function takes as argument(s) the random variable(s) for which we want to infer the posterior distribution. As an example, consider the following hierarchical model in which the mean of a Gaussian distribution is represented by another Gaussian distribution whose mean is modelled by another Gaussian distribution.  g = FactorGraph() # create a new factor graph\r\n@RV m2 ~ GaussianMeanVariance(0.0, 1.0)\r\n@RV m1 ~ GaussianMeanVariance(m2, 1.0)\r\n@RV y ~ GaussianMeanVariance(m1, 1.0)\r\nplaceholder(y, :y)\r\nForneyLab.draw(g)If we were only interested in inferring the posterior distribution of m1 then we would runalgorithm_string = sumProductAlgorithm(m1)\r\nnothing # hideOn the other hand, if we were interested in the posterior distributions of both m1 and m2 we would then need to pass them as elements of an array, i.e.algorithm_string = sumProductAlgorithm([m1, m2])\r\nnothing # hideNote that the message-passing algorithm returned by the sumProductAlgorithm function is a String that contains the definition of a Julia function. In order to be able to execute this function, we first need to parse this string as Julia expression to then evaluate it in the current scope that the program is running on. This can be done as followsalgorithm_expr = Meta.parse(algorithm_string)\r\nnothing # hide:(function step!(data::Dict, marginals::Dict=Dict(), messages::Vector{Message}=Array{Message}(undef, 4))\r\n      #= none:3 =#\r\n      messages[1] = ruleSPGaussianMeanVarianceOutVPP(nothing, Message(Univariate, PointMass, m=0.0), Message(Univariate, PointMass, m=1.0))\r\n      #= none:4 =#\r\n      messages[2] = ruleSPGaussianMeanVarianceOutVGP(nothing, messages[1], Message(Univariate, PointMass, m=1.0))\r\n      #= none:5 =#\r\n      messages[3] = ruleSPGaussianMeanVarianceMPVP(Message(Univariate, PointMass, m=data[:y]), nothing, Message(Univariate, PointMass, m=1.0))\r\n      #= none:6 =#\r\n      messages[4] = ruleSPGaussianMeanVarianceMGVP(messages[3], nothing, Message(Univariate, PointMass, m=1.0))\r\n      #= none:8 =#\r\n      marginals[:m1] = (messages[2]).dist * (messages[3]).dist\r\n      #= none:9 =#\r\n      marginals[:m2] = (messages[1]).dist * (messages[4]).dist\r\n      #= none:11 =#\r\n      return marginals\r\n  end)eval(algorithm_expr)At this point a new function named step! becomes available in the current scope. This function contains a message-passing algorithm that infers both m1 and m2 given one or more y observations. In the section Executing an algorithm we will see how this function is used."
},

{
    "location": "user-guide/#Variational-message-passing-1",
    "page": "User guide",
    "title": "Variational message passing",
    "category": "section",
    "text": "Variational message passing (VMP) algorithms are generated much in the same way as the belief propagation algorithm we saw in the previous section. There is a major difference though: for VMP algorithm generation we need to define the factorization properties of our approximate distribution. A common approach is to assume that all random variables of the model factorize with respect to each other. This is known as the mean field assumption. In ForneyLab, the specification of such factorization properties is defined using the RecognitionFactorization composite type. Let\'s take a look at a simple example to see how it is used. In this model we want to learn the mean and variance of a Gaussian distribution, where the former is modelled with a Gaussian distribution and the latter with a Gamma.g = FactorGraph() # create a new factor graph\r\n@RV m ~ GaussianMeanVariance(0, 10)\r\n@RV w ~ Gamma(0.1, 0.1)\r\n@RV y ~ GaussianMeanPrecision(m, w)\r\nplaceholder(y, :y)\r\ndraw(g)The construct of the RecognitionFactorization composite type takes the random variables of interest as arguments and one final argument consisting of an array of symbols used to identify each of these random variables. Here is an example of how to use this construct for the previous model where we want to infer m and w.q = RecognitionFactorization(m, w, ids=[:M, :W])\r\nnothing # hideThis recognition factorization constraint that we introduce to guarantee tractability of the approximate distribution has a graphical interpretation. We can view this constraint as a division of the factor graph into a number of different subgraphs, each corresponding to a different factor in the recognition factorization. Minimization of the free energy is performed by iterating over each subgraph in order to update the posterior marginal corresponding to the current factor which depends on messages coming from the other subgraphs. This iteration is repeated until either the free energy converges to a certain value or the posterior marginals of each factor stop changing. We can use the ids passed to the RecognitionFactorization function to visualize their corresponding subgraphs, as shown below.   ForneyLab.draw(q.recognition_factors[:M])ForneyLab.draw(q.recognition_factors[:W])Generating the VMP algorithm follows the same procedure that we saw for the belief propagation algorithm. In this case, however, the resulting algorithm will consist of a set of step functions, one for each recognition factor, that need to be executed iteratively until convergence.# Generate variational update algorithms for each recognition factor\r\nalgo = variationalAlgorithm(q)\r\neval(Meta.parse(algo))\r\nnothing # hideMeta.parse(algo) = quote\r\n    #= none:3 =#\r\n    function stepM!(data::Dict, marginals::Dict=Dict(), messages::Vector{Message}=Array{Message}(undef, 2))\r\n        #= none:5 =#\r\n        messages[1] = ruleVBGaussianMeanVarianceOut(nothing, ProbabilityDistribution(Univariate, PointMass, m=0), ProbabilityDistribution(Univariate, PointMass, m=10))\r\n        #= none:6 =#\r\n        messages[2] = ruleVBGaussianMeanPrecisionM(ProbabilityDistribution(Univariate, PointMass, m=data[:y]), nothing, marginals[:w])\r\n        #= none:8 =#\r\n        marginals[:m] = (messages[1]).dist * (messages[2]).dist\r\n        #= none:10 =#\r\n        return marginals\r\n    end\r\n    #= none:14 =#\r\n    function stepW!(data::Dict, marginals::Dict=Dict(), messages::Vector{Message}=Array{Message}(undef, 2))\r\n        #= none:16 =#\r\n        messages[1] = ruleVBGammaOut(nothing, ProbabilityDistribution(Univariate, PointMass, m=0.1), ProbabilityDistribution(Univariate, PointMass, m=0.1))\r\n        #= none:17 =#\r\n        messages[2] = ruleVBGaussianMeanPrecisionW(ProbabilityDistribution(Univariate, PointMass, m=data[:y]), marginals[:m], nothing)\r\n        #= none:19 =#\r\n        marginals[:w] = (messages[1]).dist * (messages[2]).dist\r\n        #= none:21 =#\r\n        return marginals\r\n    end\r\nend"
},

{
    "location": "user-guide/#Computing-free-energy-1",
    "page": "User guide",
    "title": "Computing free energy",
    "category": "section",
    "text": "VMP inference boils down to finding the member of a family of tractable probability distributions that is closest in KL divergence to an intractable posterior distribution. This is achieved by minimizing a quantity known as free energy. ForneyLab provides the function freeEnergyAlgorithm which generates an algorithm that can be used to evaluate this quantity. This function takes an object of type RecognitionFactorization as argument. Free energy is particularly useful to test for convergence of the VMP iterative procedure. Here is an example that generates, parses and evaluates this algorithm.fe_algorithm = freeEnergyAlgorithm(q)\r\neval(Meta.parse(fe_algorithm));"
},

{
    "location": "user-guide/#Executing-an-algorithm-1",
    "page": "User guide",
    "title": "Executing an algorithm",
    "category": "section",
    "text": "In section Specifying a model we introduced two main ways to learn from data, namely in an online and in an offline setting. We saw that the structure of the factor graph is different in each of these settings. In this section we will demonstrate how to feed data to an algorithm in both an online and an offline setting. We will use the same examples from section Online vs. offline learning."
},

{
    "location": "user-guide/#Online-learning-1",
    "page": "User guide",
    "title": "Online learning",
    "category": "section",
    "text": "For convenience, let\'s reproduce the model specification for the problem of estimating the mean x of a Gaussian distributed random variable y, where x is modelled using another Gaussian distribution with hyperparameters m and v. Let\'s also generate a belief propagation algorithm for this inference problem like we have seen before.g = FactorGraph() # create a new factor graph\r\nm = placeholder(:m)\r\nv = placeholder(:v)\r\n@RV x ~ GaussianMeanVariance(m, v)\r\n@RV y ~ GaussianMeanVariance(x, 1.0)\r\nplaceholder(y, :y)\r\neval(Meta.parse(sumProductAlgorithm(x))) # generate, parse and evaluate the algorithm\r\nnothing # hideIn order to execute this algorithm we first have to specify a prior for x. This is done by choosing some initial values for the hyperparameters m and v. In each processing step, the algorithm expects an observation and the current belief about x, i.e. the prior. We pass this information as elements of a data dictionary where the keys are the ids of their corresponding placeholders. The algorithm performs inference and returns the results inside a different dictionary (which we call marginals in the following script). In the next iteration, we repeat this process by feeding the algorithm with the next observation in the sequence and the posterior distribution of x that we obtained in the previous processing step. In other words, the current posterior becomes the prior for the next processing step. Let\'s illustrate this using an example where we will first generate a synthetic dataset by sampling observations from a Gaussian distribution that has a mean of 5.using Plots, LaTeXStrings; theme(:default) ;\r\npyplot(fillalpha=0.3, leg=false, xlabel=L\"x\", ylabel=L\"p(x|D)\", yticks=nothing)\r\n\r\nN = 50                      # number of samples\r\ndataset = randn(N) .+ 5     # sample N observations from a Gaussian with m=5 and v=1\r\n\r\nnormal(μ, σ²) = x -> (1/(sqrt(2π*σ²))) * exp(-(x - μ)^2 / (2*σ²)) # to plot results\r\n\r\nm_prior = 0.0   # initialize hyperparameter m\r\nv_prior = 10    # initialize hyperparameter v\r\n\r\nmarginals = Dict()  # this is where the algorithm stores the results\r\n\r\nanim = @animate for i in 1:N\r\n    data = Dict(:y => dataset[i],\r\n                :m => m_prior,\r\n                :v => v_prior)\r\n\r\n    plot(-10:0.01:10, normal(m_prior, v_prior), fill=true)\r\n\r\n    step!(data, marginals) # feed in prior and data points 1 at a time\r\n\r\n    global m_prior = mean(marginals[:x]) # today\'s posterior is tomorrow\'s prior\r\n    global v_prior = var(marginals[:x])  # today\'s posterior is tomorrow\'s prior\r\nend\r\nnothing # hide(Image: Online learning)As we process more samples, our belief about the possible values of m becomes more confident."
},

{
    "location": "user-guide/#Offline-learning-1",
    "page": "User guide",
    "title": "Offline learning",
    "category": "section",
    "text": "Executing an algorithm in an offline fashion is much simpler than in the online case. Let\'s reproduce the model specification of the previous example in an offline setting (also shown in Online vs. offline learning.)g = FactorGraph()   # create a new factor graph\r\nN = 30              # number of observations\r\ny = Vector{Variable}(undef, N)\r\n@RV x ~ GaussianMeanVariance(0.0, 1.0)\r\nfor i = 1:N\r\n    @RV y[i] ~ GaussianMeanVariance(x, 1.0)\r\n    placeholder(y[i], :y, index=i)\r\nend\r\neval(Meta.parse(sumProductAlgorithm(x))) # generate, parse and evaluate the algorithm\r\nnothing # hideSince we have a placeholder linked to each observation in the sequence, we can process the complete dataset in one step. To do so, we first need to create a dictionary having the complete dataset array as its single element. We then need to pass this dictionary to the step! function which, in contrast with the online counterpart, we only need to call once.data = Dict(:y => dataset)\r\nmarginals = step!(data) # Run the algorithm\r\nplot(-10:0.01:10, normal(mean(marginals[:x]), var(marginals[:x])), fill=true)note: Note\nBatch processing does not perform well with large datasets at the moment. We are working on this issue."
},

{
    "location": "library/public-api/#",
    "page": "Public API",
    "title": "Public API",
    "category": "page",
    "text": ""
},

{
    "location": "library/public-api/#User-API-1",
    "page": "Public API",
    "title": "User API",
    "category": "section",
    "text": "Documentation for ForneyLab.jl\'s public API.See Internal API for internal package docs."
},

{
    "location": "library/public-api/#Contents-1",
    "page": "Public API",
    "title": "Contents",
    "category": "section",
    "text": "Pages = [\"public-api.md\"]\r\nDepth = 5"
},

{
    "location": "library/public-api/#Index-1",
    "page": "Public API",
    "title": "Index",
    "category": "section",
    "text": "Modules = [ForneyLab]\r\nPages = [\"public-api.md\"]\r\nOrder = [:macro, :module, :constant, :type, :function]"
},

{
    "location": "library/public-api/#ForneyLab.@RV",
    "page": "Public API",
    "title": "ForneyLab.@RV",
    "category": "macro",
    "text": "@RV provides a convenient way to add Variables and FactorNodes to the graph.\n\nExamples:\n\n# Automatically create new Variable x, try to assign x.id = :x if this id is available\n@RV x ~ GaussianMeanVariance(constant(0.0), constant(1.0))\n\n# Explicitly specify the id of the Variable\n@RV [id=:my_y] y ~ GaussianMeanVariance(constant(0.0), constant(1.0))\n\n# Automatically assign z.id = :z if this id is not yet taken\n@RV z = x + y\n\n# Manual assignment\n@RV [id=:my_u] u = x + y\n\n# Just create a variable\n@RV x\n@RV [id=:my_x] x\n\n\n\n\n\n"
},

{
    "location": "library/public-api/#ForneyLab.FactorGraph",
    "page": "Public API",
    "title": "ForneyLab.FactorGraph",
    "category": "type",
    "text": "A factor graph consisting of factor nodes and edges.\n\n\n\n\n\n"
},

{
    "location": "library/public-api/#ForneyLab.Variable",
    "page": "Public API",
    "title": "ForneyLab.Variable",
    "category": "type",
    "text": "A Variable encompasses one or more edges in a FactorGraph.\n\n\n\n\n\n"
},

{
    "location": "library/public-api/#ForneyLab.currentGraph",
    "page": "Public API",
    "title": "ForneyLab.currentGraph",
    "category": "function",
    "text": "Return currently active FactorGraph. Create one if there is none.\n\n\n\n\n\n"
},

{
    "location": "library/public-api/#Model-specification-1",
    "page": "Public API",
    "title": "Model specification",
    "category": "section",
    "text": "ForneyLab.@RV\r\nForneyLab.FactorGraph\r\nForneyLab.Variable\r\nForneyLab.currentGraph"
},

{
    "location": "library/public-api/#ForneyLab.Addition",
    "page": "Public API",
    "title": "ForneyLab.Addition",
    "category": "type",
    "text": "Description:\n\nAn addition constraint factor node.\n\nf(out,in1,in2) = δ(in1 + in2 - out)\n\nInterfaces:\n\n1. out\n2. in1\n3. in2\n\nConstruction:\n\nAddition(out, in1, in2, id=:some_id)\n\n\n\n\n\n"
},

{
    "location": "library/public-api/#Base.:--Tuple{Variable,Variable}",
    "page": "Public API",
    "title": "Base.:-",
    "category": "method",
    "text": "-(in1::Variable, in2::Variable)\n\nA subtraction constraint based on the addition factor node.\n\n\n\n\n\n"
},

{
    "location": "library/public-api/#ForneyLab.Bernoulli",
    "page": "Public API",
    "title": "ForneyLab.Bernoulli",
    "category": "type",
    "text": "Description:     Bernoulli factor node\n\nout ∈ {0, 1}\np ∈ [0, 1]\n\nf(out, p) = Ber(out|p) = p^out (1 - p)^{1 - out}\n\nInterfaces:     1. out     2. p\n\nConstruction:     Bernoulli(id=:some_id)\n\n\n\n\n\n"
},

{
    "location": "library/public-api/#ForneyLab.Beta",
    "page": "Public API",
    "title": "ForneyLab.Beta",
    "category": "type",
    "text": "Description:     Beta factor node\n\nReal scalars\na > 0\nb > 0\n\nf(out, a, b) = Beta(out|a, b) = Γ(a + b)/(Γ(a) Γ(b)) out^{a - 1} (1 - out)^{b - 1}\n\nInterfaces:     1. out     2. a     3. b\n\nConstruction:     Beta(id=:some_id)\n\n\n\n\n\n"
},

{
    "location": "library/public-api/#ForneyLab.Categorical",
    "page": "Public API",
    "title": "ForneyLab.Categorical",
    "category": "type",
    "text": "Description:     Categorical factor node\n\nThe categorical node defines a one-dimensional probability\ndistribution over the normal basis vectors of dimension d\n\nout ∈ {0, 1}^d where Σ_k out_k = 1\np ∈ [0, 1]^d, where Σ_k p_k = 1\n\nf(out, p) = Cat(out | p)\n          = Π_i p_i^{out_i}\n\nInterfaces:     1. out     2. p\n\nConstruction:     Categorical(id=:some_id)\n\n\n\n\n\n"
},

{
    "location": "library/public-api/#ForneyLab.@ensureVariables-Tuple",
    "page": "Public API",
    "title": "ForneyLab.@ensureVariables",
    "category": "macro",
    "text": "@ensureVariables(...) casts all non-Variable arguments to Variable through constant(arg).\n\n\n\n\n\n"
},

{
    "location": "library/public-api/#ForneyLab.Clamp",
    "page": "Public API",
    "title": "ForneyLab.Clamp",
    "category": "type",
    "text": "Description:\n\nA factor that clamps a variable to a constant value.\n\nf(out) = δ(out - value)\n\nInterfaces:\n\n1. out\n\nConstruction:\n\nClamp(out, value, id=:some_id)\nClamp(value, id=:some_id)\n\n\n\n\n\n"
},

{
    "location": "library/public-api/#ForneyLab.constant-Tuple{Any}",
    "page": "Public API",
    "title": "ForneyLab.constant",
    "category": "method",
    "text": "constant creates a Variable which is linked to a new Clamp, and returns this variable.\n\ny = constant(3.0, id=:y)\n\n\n\n\n\n"
},

{
    "location": "library/public-api/#ForneyLab.placeholder-Tuple{Variable,Symbol}",
    "page": "Public API",
    "title": "ForneyLab.placeholder",
    "category": "method",
    "text": "placeholder(...) creates a Clamp node and registers this node as a data placeholder with the current graph.\n\n# Link variable y to buffer with id :y,\n# indicate that Clamp will hold Float64 values.\nplaceholder(y, :y, datatype=Float64)\n\n# Link variable y to index 3 of buffer with id :y.\n# Specify the data type by passing a default value for the Clamp.\nplaceholder(y, :y, index=3, default=0.0)\n\n# Indicate that the Clamp will hold an array of size `dims`,\n# with Float64 elements.\nplaceholder(X, :X, datatype=Float64, dims=(3,2))\n\n\n\n\n\n"
},

{
    "location": "library/public-api/#ForneyLab.@composite-Tuple{Symbol,Expr,Expr}",
    "page": "Public API",
    "title": "ForneyLab.@composite",
    "category": "macro",
    "text": "The @composite macro allows for defining custom (composite) nodes. Composite nodes allow for implementating of custom update rules that may be computationally more efficient or convenient. A composite node can be defined with or without an  internal model. For detailed usage instructions we refer to the composite_nodes demo.\n\n\n\n\n\n"
},

{
    "location": "library/public-api/#ForneyLab.Contingency",
    "page": "Public API",
    "title": "ForneyLab.Contingency",
    "category": "type",
    "text": "Description:     Contingency factor node\n\nThe contingency distribution is a multivariate generalization of\nthe categorical distribution. As a bivariate distribution, the\ncontingency distribution defines the joint probability\nover two unit vectors. The parameter p encodes a contingency matrix\nthat specifies the probability of co-occurrence.\n\nout1 ∈ {0, 1}^d1 where Σ_j out1_j = 1\nout2 ∈ {0, 1}^d2 where Σ_k out2_k = 1\np ∈ [0, 1]^{d1 × d2}, where Σ_jk p_jk = 1\n\nf(out1, out2, p) = Con(out1, out2 | p)\n                 = Π_jk p_jk^{out1_j * out2_k}\n\nA Contingency distribution over more than two variables requires\nhigher-order tensors as parameters; these are not implemented in ForneyLab.\n\nInterfaces:     1. out1     2. out2     3. p\n\nConstruction:     Contingency(id=:some_id)\n\n\n\n\n\n"
},

{
    "location": "library/public-api/#ForneyLab.Dirichlet",
    "page": "Public API",
    "title": "ForneyLab.Dirichlet",
    "category": "type",
    "text": "Description:     Dirichlet factor node\n\nReal vector\na .> 0\n\nMultivariate:\nf(out, a) = Dir(out|a)\n          = Γ(Σ_i a_i)/(Π_i Γ(a_i)) Π_i out_i^{a_i}\n\nMatrix variate with independent rows:\nf(out, a) = Π_j Dir(out|a_j.)\n          = Π_j Γ(Σ_k a_jk)/(Π_k Γ(a_jk)) Π_k out_jk^{a_jk}\n\nInterfaces:     1. out     2. a\n\nConstruction:     Dirichlet(id=:some_id)\n\n\n\n\n\n"
},

{
    "location": "library/public-api/#ForneyLab.DotProduct",
    "page": "Public API",
    "title": "ForneyLab.DotProduct",
    "category": "type",
    "text": "Description:\n\nout = in1\'*in2\n\nin1: d-dimensional vector\nin2: d-dimensional vector\nout: scalar\n\n       in2\n       |\n  in1  V   out\n----->[⋅]----->\n\nf(out, in1, in2) =  δ(out - in1\'*in2)\n\nInterfaces:\n\n1 i[:out], 2 i[:in1], 3 i[:in2]\n\nConstruction:\n\nDotProduct(out, in1, in2, id=:my_node)\n\n\n\n\n\n"
},

{
    "location": "library/public-api/#ForneyLab.Equality",
    "page": "Public API",
    "title": "ForneyLab.Equality",
    "category": "type",
    "text": "Description:\n\nAn equality constraint factor node\n\nf([1],[2],[3]) = δ([1] - [2]) δ([1] - [3])\n\nInterfaces:\n\n1, 2, 3\n\nConstruction:\n\nEquality(id=:some_id)\n\nThe interfaces of an Equality node have to be connected manually.\n\n\n\n\n\n"
},

{
    "location": "library/public-api/#ForneyLab.Exponential",
    "page": "Public API",
    "title": "ForneyLab.Exponential",
    "category": "type",
    "text": "Description:\n\nMaps a location to a scale parameter by exponentiation\n\nf(out,in1) = δ(out - exp(in1))\n\nInterfaces:\n\n1. out\n2. in1\n\nConstruction:\n\nExponential(out, in1, id=:some_id)\n\n\n\n\n\n"
},

{
    "location": "library/public-api/#ForneyLab.Gamma",
    "page": "Public API",
    "title": "ForneyLab.Gamma",
    "category": "type",
    "text": "Description:\n\nA gamma node with shape-rate parameterization:\n\nf(out,a,b) = Gam(out|a,b) = 1/Γ(a) b^a out^{a - 1} exp(-b out)\n\nInterfaces:\n\n1. out\n2. a (shape)\n3. b (rate)\n\nConstruction:\n\nGamma(out, a, b, id=:some_id)\n\n\n\n\n\n"
},

{
    "location": "library/public-api/#ForneyLab.GaussianMeanPrecision",
    "page": "Public API",
    "title": "ForneyLab.GaussianMeanPrecision",
    "category": "type",
    "text": "Description:\n\nA Gaussian with mean-precision parameterization:\n\nf(out,m,w) = 𝒩(out|m,w) = (2π)^{-D/2} |w|^{1/2} exp(-1/2 (out - m)\' w (out - m))\n\nInterfaces:\n\n1. out\n2. m (mean)\n3. w (precision)\n\nConstruction:\n\nGaussianMeanPrecision(out, m, w, id=:some_id)\n\n\n\n\n\n"
},

{
    "location": "library/public-api/#ForneyLab.GaussianMeanVariance",
    "page": "Public API",
    "title": "ForneyLab.GaussianMeanVariance",
    "category": "type",
    "text": "Description:\n\nA Gaussian with mean-variance parameterization:\n\nf(out,m,v) = 𝒩(out|m,v) = (2π)^{-D/2} |v|^{-1/2} exp(-1/2 (out - m)\' v^{-1} (out - m))\n\nInterfaces:\n\n1. out\n2. m (mean)\n3. v (covariance)\n\nConstruction:\n\nGaussianMeanVariance(out, m, v, id=:some_id)\n\n\n\n\n\n"
},

{
    "location": "library/public-api/#ForneyLab.GaussianMixture",
    "page": "Public API",
    "title": "ForneyLab.GaussianMixture",
    "category": "type",
    "text": "Description:\n\nA Gaussian mixture with mean-precision parameterization:\n\nf(out, z, m1, w1, m2, w2, ...) = 𝒩(out|m1, w1)^z_1 * 𝒩(out|m2, w2)^z_2 * ...\n\nInterfaces:\n\n1. out\n2. z (switch)\n3. m1 (mean)\n4. w1 (precision)\n5. m2 (mean)\n6. w2 (precision)\n...\n\nConstruction:\n\nGaussianMixture(out, z, m1, w1, m2, w2, ..., id=:some_id)\n\n\n\n\n\n"
},

{
    "location": "library/public-api/#ForneyLab.LogNormal",
    "page": "Public API",
    "title": "ForneyLab.LogNormal",
    "category": "type",
    "text": "Description:\n\nA log-normal node with location-scale parameterization:\n\nf(out,m,s) = logN(out|m, s) = 1/out (2π s)^{-1/2} exp(-1/(2s) (log(out) - m)^2))\n\nInterfaces:\n\n1. out\n2. m (location)\n3. s (squared scale)\n\nConstruction:\n\nLogNormal(out, m, s, id=:some_id)\n\n\n\n\n\n"
},

{
    "location": "library/public-api/#ForneyLab.Multiplication",
    "page": "Public API",
    "title": "ForneyLab.Multiplication",
    "category": "type",
    "text": "Description:\n\nFor continuous random variables, the multiplication node acts\nas a (matrix) multiplication constraint, with node function\n\nf(out, in1, a) = δ(out - a*in1)\n\nInterfaces:\n\n1. out\n2. in1\n3. a\n\nConstruction:\n\nMultiplication(out, in1, a, id=:some_id)\n\n\n\n\n\n"
},

{
    "location": "library/public-api/#ForneyLab.Nonlinear",
    "page": "Public API",
    "title": "ForneyLab.Nonlinear",
    "category": "type",
    "text": "Description:\n\nNonlinear node modeling a nonlinear relation. Updates for\nthe nonlinear node are computed through local linearization.\n\nf(out, in1) = δ(out - g(in1))\n\nInterfaces:\n\n1. out\n2. in1\n\nConstruction:\n\nNonlinear(out, in1, g::Function, J_g::Function, id=:my_node)\n\n\n\n\n\n"
},

{
    "location": "library/public-api/#ForneyLab.Sigmoid",
    "page": "Public API",
    "title": "ForneyLab.Sigmoid",
    "category": "type",
    "text": "Description:     Constrains a continuous, real-valued variable with a binary (boolean) variable.\n\nf(bin, real) = σ(bin⋅real)\n\nInterfaces:     1. bin     2. real\n\nConstruction:     Sigmoid(id=:some_id)\n\n\n\n\n\n"
},

{
    "location": "library/public-api/#ForneyLab.Transition",
    "page": "Public API",
    "title": "ForneyLab.Transition",
    "category": "type",
    "text": "Description:\n\nThe transition node models a transition between discrete\nrandom variables, with node function\n\nf(out, in1, a) = Cat(out | a*in1)\n\nInterfaces:\n\n1. out\n2. in1\n3. a\n\nConstruction:\n\nTransition(out, in1, a, id=:some_id)\n\n\n\n\n\n"
},

{
    "location": "library/public-api/#ForneyLab.Wishart",
    "page": "Public API",
    "title": "ForneyLab.Wishart",
    "category": "type",
    "text": "Description:\n\nA Wishart node:\n\nf(out,v,nu) = W(out|v, nu) = B(v, nu) |out|^{(nu - D - 1)/2} exp(-1/2 tr(v^{-1} out))\n\nInterfaces:\n\n1. out\n2. v (scale matrix)\n3. nu (degrees of freedom)\n\nConstruction:\n\nWishart(out, v, nu, id=:some_id)\n\n\n\n\n\n"
},

{
    "location": "library/public-api/#Factor-nodes-1",
    "page": "Public API",
    "title": "Factor nodes",
    "category": "section",
    "text": "Modules = [ForneyLab]\r\nPrivate = false\r\nPages = collect(Iterators.flatten([[joinpath(root[4:end], file) for file in files] for (root, dirs, files) in walkdir(\"../src/factor_nodes/\")]))\r\nOrder = [:macro, :module, :constant, :type, :function]"
},

{
    "location": "library/public-api/#ForneyLab.MarginalSchedule",
    "page": "Public API",
    "title": "ForneyLab.MarginalSchedule",
    "category": "type",
    "text": "A MarginalSchedule defines the update order for marginal computations.\n\n\n\n\n\n"
},

{
    "location": "library/public-api/#ForneyLab.RecognitionFactorization",
    "page": "Public API",
    "title": "ForneyLab.RecognitionFactorization",
    "category": "type",
    "text": "A RecognitionFactorization holds a collection of (non-overlapping) recognition factors that specify the recognition factorization over a factor graph that is used for variational inference.\n\n\n\n\n\n"
},

{
    "location": "library/public-api/#ForneyLab.Schedule",
    "page": "Public API",
    "title": "ForneyLab.Schedule",
    "category": "type",
    "text": "A Schedule defines the update order for message computations.\n\n\n\n\n\n"
},

{
    "location": "library/public-api/#ForneyLab.currentRecognitionFactorization",
    "page": "Public API",
    "title": "ForneyLab.currentRecognitionFactorization",
    "category": "function",
    "text": "Return currently active RecognitionFactorization. Create one if there is none.\n\n\n\n\n\n"
},

{
    "location": "library/public-api/#ForneyLab.expectationPropagationSchedule",
    "page": "Public API",
    "title": "ForneyLab.expectationPropagationSchedule",
    "category": "function",
    "text": "expectationPropagationSchedule() generates a expectation propagation message passing schedule.\n\n\n\n\n\n"
},

{
    "location": "library/public-api/#ForneyLab.sumProductSchedule",
    "page": "Public API",
    "title": "ForneyLab.sumProductSchedule",
    "category": "function",
    "text": "sumProductSchedule() generates a sum-product message passing schedule that computes the marginals for each of the argument variables.\n\n\n\n\n\n"
},

{
    "location": "library/public-api/#ForneyLab.variationalExpectationPropagationSchedule",
    "page": "Public API",
    "title": "ForneyLab.variationalExpectationPropagationSchedule",
    "category": "function",
    "text": "variationalExpectationPropagationSchedule() generates an expectation propagation message passing schedule that is limited to the recognition_factor. Updates on EP sites are computed with an ExpectationPropagationRule.\n\n\n\n\n\n"
},

{
    "location": "library/public-api/#ForneyLab.variationalSchedule",
    "page": "Public API",
    "title": "ForneyLab.variationalSchedule",
    "category": "function",
    "text": "variationalSchedule() generates a variational message passing schedule that computes the marginals for each of the recognition distributions in the recognition factor.\n\n\n\n\n\n"
},

{
    "location": "library/public-api/#Scheduling-1",
    "page": "Public API",
    "title": "Scheduling",
    "category": "section",
    "text": "ForneyLab.MarginalSchedule\r\nForneyLab.RecognitionFactorization\r\nForneyLab.Schedule\r\nForneyLab.currentRecognitionFactorization\r\nForneyLab.expectationPropagationSchedule\r\nForneyLab.sumProductSchedule\r\nForneyLab.variationalExpectationPropagationSchedule\r\nForneyLab.variationalSchedule"
},

{
    "location": "library/public-api/#ForneyLab.expectationPropagationAlgorithm",
    "page": "Public API",
    "title": "ForneyLab.expectationPropagationAlgorithm",
    "category": "function",
    "text": "Create a sum-product algorithm to infer marginals over variables, and compile it to Julia code\n\n\n\n\n\n"
},

{
    "location": "library/public-api/#ForneyLab.freeEnergyAlgorithm",
    "page": "Public API",
    "title": "ForneyLab.freeEnergyAlgorithm",
    "category": "function",
    "text": "The freeEnergyAlgorithm function accepts a RecognitionFactorization and returns (if possible) Julia code for computing the variational free energy with respect to  the argument recognition factorization and corresponding FactorGraph (model).\n\n\n\n\n\n"
},

{
    "location": "library/public-api/#ForneyLab.sumProductAlgorithm",
    "page": "Public API",
    "title": "ForneyLab.sumProductAlgorithm",
    "category": "function",
    "text": "Create a sum-product algorithm to infer marginals over variables, and compile it to Julia code\n\n\n\n\n\n"
},

{
    "location": "library/public-api/#ForneyLab.variationalAlgorithm",
    "page": "Public API",
    "title": "ForneyLab.variationalAlgorithm",
    "category": "function",
    "text": "Create a variational algorithm to infer marginals over a recognition distribution, and compile it to Julia code\n\n\n\n\n\n"
},

{
    "location": "library/public-api/#ForneyLab.variationalExpectationPropagationAlgorithm",
    "page": "Public API",
    "title": "ForneyLab.variationalExpectationPropagationAlgorithm",
    "category": "function",
    "text": "Create a variational EP algorithm to infer marginals over a recognition distribution, and compile it to Julia code\n\n\n\n\n\n"
},

{
    "location": "library/public-api/#Algorithm-generation-1",
    "page": "Public API",
    "title": "Algorithm generation",
    "category": "section",
    "text": "ForneyLab.expectationPropagationAlgorithm\r\nForneyLab.freeEnergyAlgorithm\r\nForneyLab.sumProductAlgorithm\r\nForneyLab.variationalAlgorithm\r\nForneyLab.variationalExpectationPropagationAlgorithm"
},

{
    "location": "library/public-api/#ForneyLab.Message",
    "page": "Public API",
    "title": "ForneyLab.Message",
    "category": "type",
    "text": "Encodes a message, which is a probability distribution with a scaling factor\n\n\n\n\n\n"
},

{
    "location": "library/public-api/#ForneyLab.PointMass",
    "page": "Public API",
    "title": "ForneyLab.PointMass",
    "category": "type",
    "text": "PointMass is an abstract type used to describe point mass distributions. It never occurs in a FactorGraph, but it is used as a probability distribution type.\n\n\n\n\n\n"
},

{
    "location": "library/public-api/#ForneyLab.ProbabilityDistribution",
    "page": "Public API",
    "title": "ForneyLab.ProbabilityDistribution",
    "category": "type",
    "text": "Encodes a probability distribution as a FactorNode of type family with fixed interfaces\n\n\n\n\n\n"
},

{
    "location": "library/public-api/#Algorithm-execution-1",
    "page": "Public API",
    "title": "Algorithm execution",
    "category": "section",
    "text": "ForneyLab.Message\r\nForneyLab.PointMass\r\nForneyLab.ProbabilityDistribution"
},

{
    "location": "library/public-api/#ForneyLab.mat-Tuple{Any}",
    "page": "Public API",
    "title": "ForneyLab.mat",
    "category": "method",
    "text": "Helper function to construct 1x1 Matrix\n\n\n\n\n\n"
},

{
    "location": "library/public-api/#ForneyLab.@symmetrical-Tuple{Expr}",
    "page": "Public API",
    "title": "ForneyLab.@symmetrical",
    "category": "macro",
    "text": "Duplicate a method definition with the order of the first two arguments swapped. This macro is used to duplicate methods that are symmetrical in their first two input arguments, but require explicit definitions for the different argument orders. Example:\n\n@symmetrical function prod!(x, y, z)\n    ...\nend\n\n\n\n\n\n"
},

{
    "location": "library/public-api/#ForneyLab.ensureMatrix-Union{Tuple{T}, Tuple{AbstractArray{T,2}}} where T<:Number",
    "page": "Public API",
    "title": "ForneyLab.ensureMatrix",
    "category": "method",
    "text": "ensureMatrix: cast input to a Matrix if necessary\n\n\n\n\n\n"
},

{
    "location": "library/public-api/#ForneyLab.isApproxEqual-Tuple{Any,Any}",
    "page": "Public API",
    "title": "ForneyLab.isApproxEqual",
    "category": "method",
    "text": "isApproxEqual: check approximate equality\n\n\n\n\n\n"
},

{
    "location": "library/public-api/#ForneyLab.isRoundedPosDef-Tuple{AbstractArray{Float64,2}}",
    "page": "Public API",
    "title": "ForneyLab.isRoundedPosDef",
    "category": "method",
    "text": "isRoundedPosDef: is input matrix positive definite? Round to prevent fp precision problems that isposdef() suffers from.\n\n\n\n\n\n"
},

{
    "location": "library/public-api/#ForneyLab.leaftypes-Tuple{Type}",
    "page": "Public API",
    "title": "ForneyLab.leaftypes",
    "category": "method",
    "text": "leaftypes(datatype) returns all subtypes of datatype that are leafs in the type tree.\n\n\n\n\n\n"
},

{
    "location": "library/public-api/#ForneyLab.trigammaInverse-Tuple{Float64}",
    "page": "Public API",
    "title": "ForneyLab.trigammaInverse",
    "category": "method",
    "text": "trigammaInverse(x): solve trigamma(y) = x for y.\n\nUses Newton\'s method on the convex function 1/trigramma(y). Iterations converge monotonically. Based on trigammaInverse implementation in R package \"limma\" by Gordon Smyth: https://github.com/Bioconductor-mirror/limma/blob/master/R/fitFDist.R\n\n\n\n\n\n"
},

{
    "location": "library/public-api/#Helper-1",
    "page": "Public API",
    "title": "Helper",
    "category": "section",
    "text": "Modules = [ForneyLab]\r\nPrivate = true\r\nPages = [\"src/helpers.jl\"]\r\nOrder = [:macro, :module, :constant, :type, :function]"
},

{
    "location": "library/internal-api/#",
    "page": "Internal API",
    "title": "Internal API",
    "category": "page",
    "text": ""
},

{
    "location": "library/internal-api/#Internal-API-1",
    "page": "Internal API",
    "title": "Internal API",
    "category": "section",
    "text": "Documentation for ForneyLab.jl\'s internal API."
},

{
    "location": "library/internal-api/#Contents-1",
    "page": "Internal API",
    "title": "Contents",
    "category": "section",
    "text": "Pages = [\"internal-api.md\"]\r\nDepth = 5"
},

{
    "location": "library/internal-api/#Index-1",
    "page": "Internal API",
    "title": "Index",
    "category": "section",
    "text": "Modules = [ForneyLab]\r\nPages = [\"internal-api.md\"]\r\nOrder = [:macro, :module, :constant, :type, :function]"
},

{
    "location": "library/internal-api/#ForneyLab.@composite",
    "page": "Internal API",
    "title": "ForneyLab.@composite",
    "category": "macro",
    "text": "The @composite macro allows for defining custom (composite) nodes. Composite nodes allow for implementating of custom update rules that may be computationally more efficient or convenient. A composite node can be defined with or without an  internal model. For detailed usage instructions we refer to the composite_nodes demo.\n\n\n\n\n\n"
},

{
    "location": "library/internal-api/#Extended-factor-nodes-1",
    "page": "Internal API",
    "title": "Extended factor nodes",
    "category": "section",
    "text": "ForneyLab.@composite"
},

{
    "location": "library/internal-api/#ForneyLab.@expectationPropagationRule",
    "page": "Internal API",
    "title": "ForneyLab.@expectationPropagationRule",
    "category": "macro",
    "text": "@expectationPropagationRule registers a expectation propagation update  rule by defining the rule type and the corresponding methods for the outboundType  and isApplicable functions. If no name (type) for the new rule is passed, a  unique name (type) will be generated. Returns the rule type.\n\n\n\n\n\n"
},

{
    "location": "library/internal-api/#ForneyLab.@marginalRule",
    "page": "Internal API",
    "title": "ForneyLab.@marginalRule",
    "category": "macro",
    "text": "@marginalRule registers a marginal update rule for a (joint) marginal by defining the rule type and the corresponding methods for the isApplicable functions. If no name (type) for the new rule is passed, a unique name (type) will be generated. Returns the rule type.\n\n\n\n\n\n"
},

{
    "location": "library/internal-api/#ForneyLab.@naiveVariationalRule",
    "page": "Internal API",
    "title": "ForneyLab.@naiveVariationalRule",
    "category": "macro",
    "text": "@naiveVariationalRule registers a variational update rule for the naive (mean-field) factorization by defining the rule type and the corresponding methods for the  outboundType and isApplicable functions. If no name (type) for the new rule is passed, a unique name (type) will be generated. Returns the rule type.\n\n\n\n\n\n"
},

{
    "location": "library/internal-api/#ForneyLab.@structuredVariationalRule",
    "page": "Internal API",
    "title": "ForneyLab.@structuredVariationalRule",
    "category": "macro",
    "text": "@structuredVariationalRule registers a variational update rule for the structured factorization by defining the rule type and the corresponding methods for the  outboundType and isApplicable functions. If no name (type) for the new rule is passed, a unique name (type) will be generated. Returns the rule type.\n\n\n\n\n\n"
},

{
    "location": "library/internal-api/#ForneyLab.@sumProductRule",
    "page": "Internal API",
    "title": "ForneyLab.@sumProductRule",
    "category": "macro",
    "text": "@sumProductRule registers a sum-product update rule by defining the rule type and the corresponding methods for the outboundType and isApplicable functions. If no name (type) for the new rule is passed, a unique name (type) will be generated. Returns the rule type.\n\n\n\n\n\n"
},

{
    "location": "library/internal-api/#Extended-rules-1",
    "page": "Internal API",
    "title": "Extended rules",
    "category": "section",
    "text": "ForneyLab.@expectationPropagationRule\r\nForneyLab.@marginalRule\r\nForneyLab.@naiveVariationalRule\r\nForneyLab.@structuredVariationalRule\r\nForneyLab.@sumProductRule"
},

{
    "location": "library/internal-api/#ForneyLab.Edge",
    "page": "Internal API",
    "title": "ForneyLab.Edge",
    "category": "type",
    "text": "An Edge joins two interfaces (half-edges) a and b.\n\n\n\n\n\n"
},

{
    "location": "library/internal-api/#ForneyLab.Interface",
    "page": "Internal API",
    "title": "ForneyLab.Interface",
    "category": "type",
    "text": "An Interface belongs to a FactorNode and represents a half-edge. An Interface has at most one partner interface, with wich it forms an edge.\n\n\n\n\n\n"
},

{
    "location": "library/internal-api/#ForneyLab.Terminal",
    "page": "Internal API",
    "title": "ForneyLab.Terminal",
    "category": "type",
    "text": "Description:\n\nTerminal is a special type of node that is only used in the internal\ngraph of a CompositeNode. A Terminal is used to terminate an Edge in the\ninternal graph that is linked to an interface of the CompositeNode.\n\nA Terminal is linked to an interface of the\nCompositeNode containing the Terminal.\n\nInterfaces:\n\n1. out\n\nConstruction:\n\nTerminal(id=:some_id)\n\n\n\n\n\n"
},

{
    "location": "library/internal-api/#Graph-(low-level)-1",
    "page": "Internal API",
    "title": "Graph (low-level)",
    "category": "section",
    "text": "ForneyLab.Edge\r\nForneyLab.Interface\r\nForneyLab.Terminal"
},

{
    "location": "library/internal-api/#ForneyLab.MarginalRule",
    "page": "Internal API",
    "title": "ForneyLab.MarginalRule",
    "category": "type",
    "text": "MarginalRule{factortype} specifies a joint marginal update rule with respect to a node of type `factortype`.\n\n\n\n\n\n"
},

{
    "location": "library/internal-api/#ForneyLab.MarginalScheduleEntry",
    "page": "Internal API",
    "title": "ForneyLab.MarginalScheduleEntry",
    "category": "type",
    "text": "A MarginalScheduleEntry defines a marginal computation. The marginal_update_rule <: MarginalUpdateRule defines the rule that is used to calculate the (joint) marginal over target.\n\n\n\n\n\n"
},

{
    "location": "library/internal-api/#ForneyLab.MarginalUpdateRule",
    "page": "Internal API",
    "title": "ForneyLab.MarginalUpdateRule",
    "category": "type",
    "text": "A MarginalUpdateRule specifies how a (joint) marginal is calculated from incoming messages (and a node function).\n\n\n\n\n\n"
},

{
    "location": "library/internal-api/#ForneyLab.MessageUpdateRule",
    "page": "Internal API",
    "title": "ForneyLab.MessageUpdateRule",
    "category": "type",
    "text": "A MessageUpdateRule specifies how a Message is calculated from the node function and the incoming messages. Use subtypes(MessageUpdateRule) to list the available rules.\n\n\n\n\n\n"
},

{
    "location": "library/internal-api/#ForneyLab.RecognitionFactor",
    "page": "Internal API",
    "title": "ForneyLab.RecognitionFactor",
    "category": "type",
    "text": "A RecognitionFactor specifies the subset of variables that comprise a joint factor in the recognition factorization.\n\n\n\n\n\n"
},

{
    "location": "library/internal-api/#ForneyLab.ScheduleEntry",
    "page": "Internal API",
    "title": "ForneyLab.ScheduleEntry",
    "category": "type",
    "text": "A ScheduleEntry defines a message computation. The msg_update_rule <: MessageUpdateRule defines the rule that is used to calculate the message coming out of interface.\n\n\n\n\n\n"
},

{
    "location": "library/internal-api/#Scheduler-(low-level)-1",
    "page": "Internal API",
    "title": "Scheduler (low-level)",
    "category": "section",
    "text": "ForneyLab.MarginalRule\r\nForneyLab.MarginalScheduleEntry\r\nForneyLab.MarginalUpdateRule\r\nForneyLab.MessageUpdateRule\r\nForneyLab.RecognitionFactor\r\nForneyLab.ScheduleEntry"
},

{
    "location": "contributing/#",
    "page": "Contributing",
    "title": "Contributing",
    "category": "page",
    "text": ""
},

{
    "location": "contributing/#Contribution-guidelines-1",
    "page": "Contributing",
    "title": "Contribution guidelines",
    "category": "section",
    "text": "We welcome all possible contributors. This page details the some of the guidelines that should be followed when contributing to this package."
},

{
    "location": "contributing/#Reporting-bugs-1",
    "page": "Contributing",
    "title": "Reporting bugs",
    "category": "section",
    "text": "We track bugs using GitHub issues. We encourage you to write complete, specific, reproducible bug reports. Mention the versions of Julia and ForneyLab.jl for which you observe unexpected behavior. Please provide a concise description of the problem and complement it with code snippets, test cases, screenshots, tracebacks or any other information that you consider relevant. This will help us to replicate the problem and narrow the search space for solutions."
},

{
    "location": "contributing/#Suggesting-features-1",
    "page": "Contributing",
    "title": "Suggesting features",
    "category": "section",
    "text": "We welcome new feature proposals. However, before submitting a feature request, consider a few things:Does the feature require changes in the core ForneyLab.jl code? If it doesn\'t (for example, you would like to add a node for a particular application), consider making a separate repository for your extensions.\nIf you would like to add an implementation of a feature that changes a lot in the core ForneyLab.jl code, please open an issue on GitHub and describe your proposal first. This will allow us to discuss your proposal with you before you invest your time in implementing something that may be difficult to merge later on."
},

{
    "location": "contributing/#Contributing-code-1",
    "page": "Contributing",
    "title": "Contributing code",
    "category": "section",
    "text": ""
},

{
    "location": "contributing/#Installing-ForneyLab-1",
    "page": "Contributing",
    "title": "Installing ForneyLab",
    "category": "section",
    "text": "We suggest that you use the dev command from the new Julia package manager to install ForneyLab.jl for development purposes. To work on your fork of ForneyLab.jl, use your fork\'s URL address in the dev command, for example:] dev git@github.com:your_username/ForneyLab.jl.gitThe dev command clones ForneyLab.jl to ~/.julia/dev/ForneyLab. All local changes to ForneyLab code will be reflected in imported code."
},

{
    "location": "contributing/#Committing-code-1",
    "page": "Contributing",
    "title": "Committing code",
    "category": "section",
    "text": "We use the standard GitHub Flow workflow where all contributions are added through pull requests. In order to contribute, first fork the repository, then commit your contributions to your fork, and then create a pull request on the master branch of the ForneyLab.jl repository.Before opening a pull request, please make sure that all tests pass without failing! All demos (can be found in /demo/ directory) have to run without errors as well."
},

{
    "location": "contributing/#Style-conventions-1",
    "page": "Contributing",
    "title": "Style conventions",
    "category": "section",
    "text": "We use default Julia style guide. We list here a few important points and our modifications to the Julia style guide:Use 4 spaces for indentation\nType names use UpperCamelCase. E.g., FactorNode, Gaussian\nFunction names are lowerCamelCase (differs from the official Julia convention). For example, isApplicable, currentGraph\nVariable names and function arguments (e.g. inbound_messages) use snake_case\nThe name of a method that modifies its argument(s) must end in !"
},

{
    "location": "contributing/#Unit-tests-1",
    "page": "Contributing",
    "title": "Unit tests",
    "category": "section",
    "text": "We use the test-driven development (TDD) methodology for ForneyLab.jl development. The test coverage should be as complete as possible. Please make sure that you write tests for each piece of code that you want to add.All unit tests are located in the /test/ directory. The /test/ directory follows the structure of the /src/ directory. Each test file should have following filename format: test_*.jl.The tests can be evaluated by running following command in the Julia REPL:] test ForneyLab"
},

{
    "location": "internals/#",
    "page": "Internals",
    "title": "Internals",
    "category": "page",
    "text": ""
},

{
    "location": "internals/#Internals-1",
    "page": "Internals",
    "title": "Internals",
    "category": "section",
    "text": "This page documents the internals of the ForneyLab package. It is mainly tailored for software developers interested in understanding the inner workings of the package."
},

{
    "location": "internals/#Directory-structure-1",
    "page": "Internals",
    "title": "Directory structure",
    "category": "section",
    "text": "ForneyLab\'s directories and files are structured as follows:/demo/: demos in Jupyter (iJulia) notebook format (.ipynb)\n/src/: all source files\nalgorithms/: inference algorithm implementations\nexpectation_propagation/: EP algorithm implementation\nsum_product/: SP algorithm implementation\nvariational_bayes/: VMP algorithm implementation\nengines/: rendering of message passing schedules to executable code\njulia/: Julia engine and update rule implementations\nfactor_nodes/: all node-specific files\nupdate_rules/: message passing update rules\n/test/: test files with directory structure similar to /src/."
},

{
    "location": "internals/#Update-rules-naming-convention-1",
    "page": "Internals",
    "title": "Update rules naming convention",
    "category": "section",
    "text": "The name of an update rule is composed of several parts:The word rule\nType of algorithm\nSP: sum-product\nVB: variational bayes\nSVB: structured variational bayes\nM: marginal, used with SVB\nType of factor node\nInterface of the outgoing message\nTypes of incoming messages (absent for VB rules)\nV: void\nP: point mass\nD: distribution\n[I]: first letter of the message\'s probability distribution"
},

{
    "location": "internals/#Example-1:-ruleSPGaussianMeanPrecisionMPVP-1",
    "page": "Internals",
    "title": "Example 1: ruleSPGaussianMeanPrecisionMPVP",
    "category": "section",
    "text": "rule : update rule\nSP : sum-product algorithm\nGaussianMeanPrecision: Gaussian mean precision factor node\nM: outgoing message through \'Mean\' interface\nPVP: incoming message types are: point mass, void and point mass"
},

{
    "location": "internals/#Example-2:-ruleVBBernoulliOut-1",
    "page": "Internals",
    "title": "Example 2: ruleVBBernoulliOut",
    "category": "section",
    "text": "rule: update rule\nVB: variational bayes algorithm\nBernoulli: Bernoulli factor node\nOut: outgoing message through \'Out\' interface\n-"
},

{
    "location": "internals/#Example-3:-ruleEPSigmoidRealGB-1",
    "page": "Internals",
    "title": "Example 3: ruleEPSigmoidRealGB",
    "category": "section",
    "text": "rule: update rule\nEP: expectation propagation algorithm\nSigmoid: sigmoid factor node\nReal: outgoing message through \'Real\' interface\nGB: incoming message types are: Gaussian and BernoulliNote that EP update rules do not have V (void) in the set of incoming messages given that in EP there is an incoming message through the interface of the outgoing message that is being calculated."
},

]}
