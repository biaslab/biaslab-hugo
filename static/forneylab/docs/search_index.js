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
    "text": "ForneyLab.jl is a Julia package for automatic generation of (Bayesian) inference algorithms. Given a probabilistic model, ForneyLab generates efficient Julia code for message-passing based inference. It uses the model structure to generate an algorithm that consists of a sequence of local computations on a Forney-style factor graph (FFG) representation of the model. For an excellent introduction to message passing and FFGs, see The Factor Graph Approach to Model-Based Signal Processing by Loeliger et al. (2007).We designed ForneyLab with a focus on flexible and modular modeling of time-series data. ForneyLab enables a user to:Conveniently specify a probabilistic model;\nAutomatically generate an efficient inference algorithm;\nCompile the inference algorithm to executable Julia code.The current version supports belief propagation (sum-product message passing), variational message passing and expectation propagation.The ForneyLab project page provides more background on ForneyLab as well as pointers to related literature and talks. For a practical introduction, have a look at the demos."
},

{
    "location": "#Installation-1",
    "page": "Home",
    "title": "Installation",
    "category": "section",
    "text": "Install ForneyLab through the Julia package manager:] add ForneyLabIf you want to be able to use the graph visualization functions, you will also need to have GraphViz installed. On Linux, just use apt-get install graphviz or yum install graphviz. On Windows, run the installer and afterwards manually add the path of the GraphViz installation to the PATH system variable. On MacOS, use for example brew install graphviz. The dot command should work from the command line.Some demos use the PyPlot plotting module. Install it using ] add PyPlot.Optionally, use ] test ForneyLab to validate the installation by running the test suite."
},

{
    "location": "#Demos-1",
    "page": "Home",
    "title": "Demos",
    "category": "section",
    "text": "There are demos available to get you started. Additionally, the ForneyLab project page contains a talk and other resources that might be helpful."
},

{
    "location": "#License-1",
    "page": "Home",
    "title": "License",
    "category": "section",
    "text": "(c) 2018 GN Store Nord A/S. Permission to use this software for any non-commercial purpose is granted. See LICENSE.md file for details."
},

{
    "location": "getting-started/introduction/#",
    "page": "Getting Started",
    "title": "Getting Started",
    "category": "page",
    "text": ""
},

{
    "location": "getting-started/introduction/#Getting-Started-1",
    "page": "Getting Started",
    "title": "Getting Started",
    "category": "section",
    "text": "ForneyLab is a toolbox for deriving solutions to probabilistic inference problems by message passing on Forney-style factor graphs. A Forney-style factor graph (FFG) is a graphical representation of a factorized probabilistic model. Message passing solutions to inference tasks can be automatically derived from a probabilistic model specification. ForneyLab yields message passing algorithms (MPA) as Julia code. In other words, ForneyLab is a Julia program that automatically builds inference programs that are specified as Julia programs.We designed ForneyLab to be practical, while retaining maximal flexibility. The inherent modularity of the FFG framework allowed us to make ForneyLab extensible at all levels (nodes, update rules, algorithms, inference engines). Although we had performance in mind while developing ForneyLab, optimally efficient execution of the resulting inference programs (specified in Julia as message passing sequence) may still require custom work.  The ForneyLab approach to solving inference problems consists of three phases:Model specification. ForneyLab provides a simple meta-language to specifiy models.\nMessage Passing Agorithm (MPA) Generation. This task is automatically performed by ForneyLab.\nMPA Execution. This is simply evaluating a Julia program.Each of the demos will step through these phases in turn, showcasing the most important ForneyLab functionalities. For more detailed information we refer to the Julia help functionality (simply type ? and the ForneyLab function you\'re interested in), or the source code itself."
},

{
    "location": "getting-started/introduction/#Factor-Graphs-and-Variables-1",
    "page": "Getting Started",
    "title": "Factor Graphs and Variables",
    "category": "section",
    "text": "A central concept in ForneyLab is the (random) Variable type. After including ForneyLab and indicating that we start a new FactorGraph, we can declare a Variable by calling its constructor function:using ForneyLab\n\n# Declare a new graph\ng = FactorGraph()\n\n# Declare a variable\nx = Variable(id=:x)\n\ng.variablesDict{Symbol,Variable} with 1 entry:\n  :x => Variable(:x, Edges:…The call to FactorGraph() creates a factor graph type and registers the graph as the currently active graph. Note that the variable has been associated with an edge in the currently active graph.ForneyLab comes equipped with the @RV macro to define random variables. For instance, defining a new variable y with identifier :y and associating the variable to the current graph can also be accomplished by executing @RV y:@RV y\n\ng.variablesDict{Symbol,Variable} with 2 entries:\n  :y => Variable(:y, Edges:…\n  :x => Variable(:x, Edges:…We can assign a probability distribution to a random variable by the ~ operator:@RV z ~ GaussianMeanVariance(0.0, 1.0)\ng.variablesDict{Symbol,Variable} with 5 entries:\n  :clamp_2 => Variable(:clamp_2, Edges:…\n  :y       => Variable(:y, Edges:…\n  :clamp_1 => Variable(:clamp_1, Edges:…\n  :z       => Variable(:z, Edges:…\n  :x       => Variable(:x, Edges:…Note that the graph now also includes two variables with id :clamp_1 and :clamp_2. These two variables correspond to the mean and variance parameters for the Gaussian and are clamped to values 0.0 and 1.0 respectively.If you have graphviz installed, then you can draw the factor graph. (Edges (variables) that are not constrained by any factor are not drawn):ForneyLab.draw(g) # draw the graphIn case you don\'t like the automatically generated id\'s :clamp_1 and :clamp_2, you could have declared the parameters of the Gaussian distribution through the @RV macro and associated a Clamp distribution with these variables:g2 = FactorGraph()\n@RV m ~ Clamp(0.0)\n@RV v ~ Clamp(1.0)\n@RV z ~ GaussianMeanVariance(m, v)\ng2.variablesDict{Symbol,Variable} with 3 entries:\n  :m => Variable(:m, Edges:…\n  :v => Variable(:v, Edges:…\n  :z => Variable(:z, Edges:…ForneyLab.draw(g2)The graph stores the identifier of each variable. This is useful because now we can retrieve a variable from a graph by its identifier, .e.g.,g2.variables[:m]Variable(:m, Edges:\nEdge belonging to variable m: ( clamp_1.i[out] )----( gaussianmeanvariance_1.i[m] ).\n)Let\'s build another simple factor graph forbeginalign*\np(xyz) = p(zxy)p(x)p(y) \n  = delta(z-x-y)mathcalN(x0010)mathcalN(y2030)\nendalign*g3 = FactorGraph()\n@RV x ~ GaussianMeanVariance(0.0, 1.0)\n@RV y ~ GaussianMeanVariance(2.0, 3.0)\n@RV z = x + y\nForneyLab.draw(g3)Next, we could be interested in inferring a property of z, e.g., the mean parameter for the distribution over z. This process can be automated by message passing in the graph. The next set of demo\'s will expand on the various methods for describing graphs and message passing inference methods with ForneyLab."
},

{
    "location": "getting-started/introduction/#Resources-1",
    "page": "Getting Started",
    "title": "Resources",
    "category": "section",
    "text": "The following are additional resources we recommend you check out:H.-A. Loeliger, J. Dauwels, J. Hu, S. Korl, Li Ping, and F. Kschischang, The factor graph approach to model-based signal processing, Proceedings of the IEEE, vol. 95, no. 6, pp. 1295-1322, June 2007.\nKorl, Sascha, A factor graph approach to signal modelling, system identification and filtering, Series in signal and information processing Doctoral Thesis, 2005"
},

{
    "location": "user-API/construct-a-model/#",
    "page": "Construct a model",
    "title": "Construct a model",
    "category": "page",
    "text": ""
},

{
    "location": "user-API/construct-a-model/#Construct-a-model-1",
    "page": "Construct a model",
    "title": "Construct a model",
    "category": "section",
    "text": ""
},

{
    "location": "user-API/construct-a-model/#Index-1",
    "page": "Construct a model",
    "title": "Index",
    "category": "section",
    "text": "Modules = [ForneyLab]\nPages = [\"construct-a-model.md\"]\nOrder = [:macro, :module, :constant, :type, :function]"
},

{
    "location": "user-API/construct-a-model/#ForneyLab.@RV",
    "page": "Construct a model",
    "title": "ForneyLab.@RV",
    "category": "macro",
    "text": "@RV provides a convenient way to add Variables and FactorNodes to the graph.\n\nExamples:\n\n# Automatically create new Variable x, try to assign x.id = :x if this id is available\n@RV x ~ GaussianMeanVariance(constant(0.0), constant(1.0))\n\n# Explicitly specify the id of the Variable\n@RV [id=:my_y] y ~ GaussianMeanVariance(constant(0.0), constant(1.0))\n\n# Automatically assign z.id = :z if this id is not yet taken\n@RV z = x + y\n\n# Manual assignment\n@RV [id=:my_u] u = x + y\n\n# Just create a variable\n@RV x\n@RV [id=:my_x] x\n\n\n\n\n\n"
},

{
    "location": "user-API/construct-a-model/#Random-variable-1",
    "page": "Construct a model",
    "title": "Random variable",
    "category": "section",
    "text": "ForneyLab.@RV"
},

{
    "location": "user-API/construct-a-model/#ForneyLab.FactorGraph",
    "page": "Construct a model",
    "title": "ForneyLab.FactorGraph",
    "category": "type",
    "text": "A factor graph consisting of factor nodes and edges.\n\n\n\n\n\n"
},

{
    "location": "user-API/construct-a-model/#Factor-graph-1",
    "page": "Construct a model",
    "title": "Factor graph",
    "category": "section",
    "text": "ForneyLab.FactorGraph"
},

{
    "location": "user-API/construct-a-model/#ForneyLab.Variable",
    "page": "Construct a model",
    "title": "ForneyLab.Variable",
    "category": "type",
    "text": "A Variable encompasses one or more edges in a FactorGraph.\n\n\n\n\n\n"
},

{
    "location": "user-API/construct-a-model/#Variable-1",
    "page": "Construct a model",
    "title": "Variable",
    "category": "section",
    "text": "ForneyLab.Variable"
},

{
    "location": "user-API/construct-a-model/#ForneyLab.currentGraph",
    "page": "Construct a model",
    "title": "ForneyLab.currentGraph",
    "category": "function",
    "text": "Return currently active FactorGraph. Create one if there is none.\n\n\n\n\n\n"
},

{
    "location": "user-API/construct-a-model/#Current-graph-1",
    "page": "Construct a model",
    "title": "Current graph",
    "category": "section",
    "text": "ForneyLab.currentGraph"
},

{
    "location": "user-API/construct-a-model/#ForneyLab.Addition",
    "page": "Construct a model",
    "title": "ForneyLab.Addition",
    "category": "type",
    "text": "Description:\n\nAn addition constraint factor node\n\nf(out,in1,in2) = δ(in1 + in2 - out)\n\nInterfaces:\n\n1. out\n2. in1\n3. in2\n\nConstruction:\n\nAddition(out, in1, in2, id=:some_id)\n\n\n\n\n\n"
},

{
    "location": "user-API/construct-a-model/#ForneyLab.Bernoulli",
    "page": "Construct a model",
    "title": "ForneyLab.Bernoulli",
    "category": "type",
    "text": "Description:     Bernoulli factor node\n\nout ∈ {0, 1}\np ∈ [0, 1]\n\nf(out, p) = Ber(out|p) = p^out (1 - p)^{1 - out}\n\nInterfaces:     1. out     2. p\n\nConstruction:     Bernoulli(id=:some_id)\n\n\n\n\n\n"
},

{
    "location": "user-API/construct-a-model/#ForneyLab.Beta",
    "page": "Construct a model",
    "title": "ForneyLab.Beta",
    "category": "type",
    "text": "Description:     Beta factor node\n\nReal scalars\na > 0\nb > 0\n\nf(out, a, b) = Beta(out|a, b) = Γ(a + b)/(Γ(a) Γ(b)) out^{a - 1} (1 - out)^{b - 1}\n\nInterfaces:     1. out     2. a     3. b\n\nConstruction:     Beta(id=:some_id)\n\n\n\n\n\n"
},

{
    "location": "user-API/construct-a-model/#ForneyLab.Categorical",
    "page": "Construct a model",
    "title": "ForneyLab.Categorical",
    "category": "type",
    "text": "Description:     Categorical factor node\n\nThe categorical node defines a one-dimensional probability\ndistribution over the normal basis vectors of dimension d\n\nout ∈ {0, 1}^d where Σ_k out_k = 1\np ∈ [0, 1]^d, where Σ_k p_k = 1\n\nf(out, p) = Cat(out | p)\n          = Π_i p_i^{out_i}\n\nInterfaces:     1. out     2. p\n\nConstruction:     Categorical(id=:some_id)\n\n\n\n\n\n"
},

{
    "location": "user-API/construct-a-model/#ForneyLab.@ensureVariables-Tuple",
    "page": "Construct a model",
    "title": "ForneyLab.@ensureVariables",
    "category": "macro",
    "text": "@ensureVariables(...) casts all non-Variable arguments to Variable through constant(arg).\n\n\n\n\n\n"
},

{
    "location": "user-API/construct-a-model/#ForneyLab.Clamp",
    "page": "Construct a model",
    "title": "ForneyLab.Clamp",
    "category": "type",
    "text": "Description:\n\nA factor that clamps a variable to a constant value.\n\nf(out) = δ(out - value)\n\nInterfaces:\n\n1. out\n\nConstruction:\n\nClamp(out, value, id=:some_id)\nClamp(value, id=:some_id)\n\n\n\n\n\n"
},

{
    "location": "user-API/construct-a-model/#ForneyLab.constant-Tuple{Any}",
    "page": "Construct a model",
    "title": "ForneyLab.constant",
    "category": "method",
    "text": "constant creates a Variable which is linked to a new Clamp, and returns this variable.\n\ny = constant(3.0, id=:y)\n\n\n\n\n\n"
},

{
    "location": "user-API/construct-a-model/#ForneyLab.placeholder-Tuple{Variable,Symbol}",
    "page": "Construct a model",
    "title": "ForneyLab.placeholder",
    "category": "method",
    "text": "placeholder(...) creates a Clamp node and registers this node as a data placeholder with the current graph.\n\n# Link variable y to buffer with id :y,\n# indicate that Clamp will hold Float64 values.\nplaceholder(y, :y, datatype=Float64)\n\n# Link variable y to index 3 of buffer with id :y.\n# Specify the data type by passing a default value for the Clamp.\nplaceholder(y, :y, index=3, default=0.0)\n\n# Indicate that the Clamp will hold an array of size `dims`,\n# with Float64 elements.\nplaceholder(X, :X, datatype=Float64, dims=(3,2))\n\n\n\n\n\n"
},

{
    "location": "user-API/construct-a-model/#ForneyLab.@composite-Tuple{Symbol,Expr,Expr}",
    "page": "Construct a model",
    "title": "ForneyLab.@composite",
    "category": "macro",
    "text": "The @composite macro allows for defining custom (composite) nodes. Composite nodes allow for implementating of custom update rules that may be computationally more efficient or convenient. A composite node can be defined with or without an  internal model. For detailed usage instructions we refer to the composite_nodes demo.\n\n\n\n\n\n"
},

{
    "location": "user-API/construct-a-model/#ForneyLab.Contingency",
    "page": "Construct a model",
    "title": "ForneyLab.Contingency",
    "category": "type",
    "text": "Description:     Contingency factor node\n\nThe contingency distribution is a multivariate generalization of\nthe categorical distribution. As a bivariate distribution, the\ncontingency distribution defines the joint probability\nover two unit vectors. The parameter p encodes a contingency matrix\nthat specifies the probability of co-occurrence.\n\nout1 ∈ {0, 1}^d1 where Σ_j out1_j = 1\nout2 ∈ {0, 1}^d2 where Σ_k out2_k = 1\np ∈ [0, 1]^{d1 × d2}, where Σ_jk p_jk = 1\n\nf(out1, out2, p) = Con(out1, out2 | p)\n                 = Π_jk p_jk^{out1_j * out2_k}\n\nA Contingency distribution over more than two variables requires\nhigher-order tensors as parameters; these are not implemented in ForneyLab.\n\nInterfaces:     1. out1     2. out2     3. p\n\nConstruction:     Contingency(id=:some_id)\n\n\n\n\n\n"
},

{
    "location": "user-API/construct-a-model/#ForneyLab.Dirichlet",
    "page": "Construct a model",
    "title": "ForneyLab.Dirichlet",
    "category": "type",
    "text": "Description:     Dirichlet factor node\n\nReal vector\na .> 0\n\nMultivariate:\nf(out, a) = Dir(out|a)\n          = Γ(Σ_i a_i)/(Π_i Γ(a_i)) Π_i out_i^{a_i}\n\nMatrix variate with independent rows:\nf(out, a) = Π_j Dir(out|a_j.)\n          = Π_j Γ(Σ_k a_jk)/(Π_k Γ(a_jk)) Π_k out_jk^{a_jk}\n\nInterfaces:     1. out     2. a\n\nConstruction:     Dirichlet(id=:some_id)\n\n\n\n\n\n"
},

{
    "location": "user-API/construct-a-model/#ForneyLab.DotProduct",
    "page": "Construct a model",
    "title": "ForneyLab.DotProduct",
    "category": "type",
    "text": "Description:\n\nout = in1\'*in2\n\nin1: d-dimensional vector\nin2: d-dimensional vector\nout: scalar\n\n       in2\n       |\n  in1  V   out\n----->[⋅]----->\n\nf(out, in1, in2) =  δ(out - in1\'*in2)\n\nInterfaces:\n\n1 i[:out], 2 i[:in1], 3 i[:in2]\n\nConstruction:\n\nDotProduct(out, in1, in2, id=:my_node)\n\n\n\n\n\n"
},

{
    "location": "user-API/construct-a-model/#ForneyLab.Equality",
    "page": "Construct a model",
    "title": "ForneyLab.Equality",
    "category": "type",
    "text": "Description:\n\nAn equality constraint factor node\n\nf([1],[2],[3]) = δ([1] - [2]) δ([1] - [3])\n\nInterfaces:\n\n1, 2, 3\n\nConstruction:\n\nEquality(id=:some_id)\n\nThe interfaces of an Equality node have to be connected manually.\n\n\n\n\n\n"
},

{
    "location": "user-API/construct-a-model/#ForneyLab.Exponential",
    "page": "Construct a model",
    "title": "ForneyLab.Exponential",
    "category": "type",
    "text": "Description:\n\nMaps a location to a scale parameter by exponentiation\n\nf(out,in1) = δ(out - exp(in1))\n\nInterfaces:\n\n1. out\n2. in1\n\nConstruction:\n\nExponential(out, in1, id=:some_id)\n\n\n\n\n\n"
},

{
    "location": "user-API/construct-a-model/#ForneyLab.Gamma",
    "page": "Construct a model",
    "title": "ForneyLab.Gamma",
    "category": "type",
    "text": "Description:\n\nA gamma node with shape-rate parameterization:\n\nf(out,a,b) = Gam(out|a,b) = 1/Γ(a) b^a out^{a - 1} exp(-b out)\n\nInterfaces:\n\n1. out\n2. a (shape)\n3. b (rate)\n\nConstruction:\n\nGamma(out, a, b, id=:some_id)\n\n\n\n\n\n"
},

{
    "location": "user-API/construct-a-model/#ForneyLab.GaussianMeanPrecision",
    "page": "Construct a model",
    "title": "ForneyLab.GaussianMeanPrecision",
    "category": "type",
    "text": "Description:\n\nA Gaussian with mean-precision parameterization:\n\nf(out,m,w) = 𝒩(out|m,w) = (2π)^{-D/2} |w|^{1/2} exp(-1/2 (out - m)\' w (out - m))\n\nInterfaces:\n\n1. out\n2. m (mean)\n3. w (precision)\n\nConstruction:\n\nGaussianMeanPrecision(out, m, w, id=:some_id)\n\n\n\n\n\n"
},

{
    "location": "user-API/construct-a-model/#ForneyLab.GaussianMeanVariance",
    "page": "Construct a model",
    "title": "ForneyLab.GaussianMeanVariance",
    "category": "type",
    "text": "Description:\n\nA Gaussian with mean-variance parameterization:\n\nf(out,m,v) = 𝒩(out|m,v) = (2π)^{-D/2} |v|^{-1/2} exp(-1/2 (out - m)\' v^{-1} (out - m))\n\nInterfaces:\n\n1. out\n2. m (mean)\n3. v (covariance)\n\nConstruction:\n\nGaussianMeanVariance(out, m, v, id=:some_id)\n\n\n\n\n\n"
},

{
    "location": "user-API/construct-a-model/#ForneyLab.GaussianMixture",
    "page": "Construct a model",
    "title": "ForneyLab.GaussianMixture",
    "category": "type",
    "text": "Description:\n\nA Gaussian mixture with mean-precision parameterization:\n\nf(out, z, m1, w1, m2, w2, ...) = 𝒩(out|m1, w1)^z_1 * 𝒩(out|m2, w2)^z_2 * ...\n\nInterfaces:\n\n1. out\n2. z (switch)\n3. m1 (mean)\n4. w1 (precision)\n5. m2 (mean)\n6. w2 (precision)\n...\n\nConstruction:\n\nGaussianMixture(out, z, m1, w1, m2, w2, ..., id=:some_id)\n\n\n\n\n\n"
},

{
    "location": "user-API/construct-a-model/#ForneyLab.LogNormal",
    "page": "Construct a model",
    "title": "ForneyLab.LogNormal",
    "category": "type",
    "text": "Description:\n\nA log-normal node with location-scale parameterization:\n\nf(out,m,s) = logN(out|m, s) = 1/out (2π s)^{-1/2} exp(-1/(2s) (log(out) - m)^2))\n\nInterfaces:\n\n1. out\n2. m (location)\n3. s (squared scale)\n\nConstruction:\n\nLogNormal(out, m, s, id=:some_id)\n\n\n\n\n\n"
},

{
    "location": "user-API/construct-a-model/#ForneyLab.Multiplication",
    "page": "Construct a model",
    "title": "ForneyLab.Multiplication",
    "category": "type",
    "text": "Description:\n\nFor continuous random variables, the multiplication node acts\nas a (matrix) multiplication constraint, with node function\n\nf(out, in1, a) = δ(out - a*in1)\n\nInterfaces:\n\n1. out\n2. in1\n3. a\n\nConstruction:\n\nMultiplication(out, in1, a, id=:some_id)\n\n\n\n\n\n"
},

{
    "location": "user-API/construct-a-model/#ForneyLab.Nonlinear",
    "page": "Construct a model",
    "title": "ForneyLab.Nonlinear",
    "category": "type",
    "text": "Description:\n\nNonlinear node modeling a nonlinear relation. Updates for\nthe nonlinear node are computed through local linearization.\n\nf(out, in1) = δ(out - g(in1))\n\nInterfaces:\n\n1. out\n2. in1\n\nConstruction:\n\nNonlinear(out, in1, g::Function, J_g::Function, id=:my_node)\n\n\n\n\n\n"
},

{
    "location": "user-API/construct-a-model/#ForneyLab.Sigmoid",
    "page": "Construct a model",
    "title": "ForneyLab.Sigmoid",
    "category": "type",
    "text": "Description:     Constrains a continuous, real-valued variable with a binary (boolean) variable.\n\nf(bin, real) = σ(bin⋅real)\n\nInterfaces:     1. bin     2. real\n\nConstruction:     Sigmoid(id=:some_id)\n\n\n\n\n\n"
},

{
    "location": "user-API/construct-a-model/#ForneyLab.Transition",
    "page": "Construct a model",
    "title": "ForneyLab.Transition",
    "category": "type",
    "text": "Description:\n\nThe transition node models a transition between discrete\nrandom variables, with node function\n\nf(out, in1, a) = Cat(out | a*in1)\n\nInterfaces:\n\n1. out\n2. in1\n3. a\n\nConstruction:\n\nTransition(out, in1, a, id=:some_id)\n\n\n\n\n\n"
},

{
    "location": "user-API/construct-a-model/#ForneyLab.Wishart",
    "page": "Construct a model",
    "title": "ForneyLab.Wishart",
    "category": "type",
    "text": "Description:\n\nA Wishart node:\n\nf(out,v,nu) = W(out|v, nu) = B(v, nu) |out|^{(nu - D - 1)/2} exp(-1/2 tr(v^{-1} out))\n\nInterfaces:\n\n1. out\n2. v (scale matrix)\n3. nu (degrees of freedom)\n\nConstruction:\n\nWishart(out, v, nu, id=:some_id)\n\n\n\n\n\n"
},

{
    "location": "user-API/construct-a-model/#Node-types-1",
    "page": "Construct a model",
    "title": "Node types",
    "category": "section",
    "text": "Modules = [ForneyLab]\nPrivate = false\nPages = collect(Iterators.flatten([[joinpath(root[4:end], file) for file in files] for (root, dirs, files) in walkdir(\"../src/factor_nodes/\")]))\nOrder = [:macro, :module, :constant, :type, :function]"
},

{
    "location": "user-API/schedule-an-algorithm/#",
    "page": "Schedule an algorithm",
    "title": "Schedule an algorithm",
    "category": "page",
    "text": ""
},

{
    "location": "user-API/schedule-an-algorithm/#Schedule-an-algorithm-1",
    "page": "Schedule an algorithm",
    "title": "Schedule an algorithm",
    "category": "section",
    "text": ""
},

{
    "location": "user-API/schedule-an-algorithm/#Index-1",
    "page": "Schedule an algorithm",
    "title": "Index",
    "category": "section",
    "text": "Modules = [ForneyLab]\nPages = [\"schedule-an-algorithm.md\"]\nOrder = [:macro, :module, :constant, :type, :function]"
},

{
    "location": "user-API/schedule-an-algorithm/#ForneyLab.MarginalSchedule",
    "page": "Schedule an algorithm",
    "title": "ForneyLab.MarginalSchedule",
    "category": "type",
    "text": "A MarginalSchedule defines the update order for marginal computations.\n\n\n\n\n\n"
},

{
    "location": "user-API/schedule-an-algorithm/#Marginal-Schedule-1",
    "page": "Schedule an algorithm",
    "title": "Marginal Schedule",
    "category": "section",
    "text": "ForneyLab.MarginalSchedule"
},

{
    "location": "user-API/schedule-an-algorithm/#ForneyLab.RecognitionFactorization",
    "page": "Schedule an algorithm",
    "title": "ForneyLab.RecognitionFactorization",
    "category": "type",
    "text": "A RecognitionFactorization holds a collection of (non-overlapping) recognition factors that specify the recognition factorization over a factor graph that is used for variational inference.\n\n\n\n\n\n"
},

{
    "location": "user-API/schedule-an-algorithm/#Recognition-Factorization-1",
    "page": "Schedule an algorithm",
    "title": "Recognition Factorization",
    "category": "section",
    "text": "ForneyLab.RecognitionFactorization"
},

{
    "location": "user-API/schedule-an-algorithm/#ForneyLab.Schedule",
    "page": "Schedule an algorithm",
    "title": "ForneyLab.Schedule",
    "category": "type",
    "text": "A Schedule defines the update order for message computations.\n\n\n\n\n\n"
},

{
    "location": "user-API/schedule-an-algorithm/#Schedule-1",
    "page": "Schedule an algorithm",
    "title": "Schedule",
    "category": "section",
    "text": "ForneyLab.Schedule"
},

{
    "location": "user-API/schedule-an-algorithm/#ForneyLab.currentRecognitionFactorization",
    "page": "Schedule an algorithm",
    "title": "ForneyLab.currentRecognitionFactorization",
    "category": "function",
    "text": "Return currently active RecognitionFactorization. Create one if there is none.\n\n\n\n\n\n"
},

{
    "location": "user-API/schedule-an-algorithm/#Сurrent-recognition-factorization-1",
    "page": "Schedule an algorithm",
    "title": "Сurrent recognition factorization",
    "category": "section",
    "text": "ForneyLab.currentRecognitionFactorization"
},

{
    "location": "user-API/schedule-an-algorithm/#ForneyLab.expectationPropagationSchedule",
    "page": "Schedule an algorithm",
    "title": "ForneyLab.expectationPropagationSchedule",
    "category": "function",
    "text": "expectationPropagationSchedule() generates a expectation propagation message passing schedule.\n\n\n\n\n\n"
},

{
    "location": "user-API/schedule-an-algorithm/#Expectation-propagation-schedule-1",
    "page": "Schedule an algorithm",
    "title": "Expectation propagation schedule",
    "category": "section",
    "text": "ForneyLab.expectationPropagationSchedule"
},

{
    "location": "user-API/schedule-an-algorithm/#ForneyLab.sumProductSchedule",
    "page": "Schedule an algorithm",
    "title": "ForneyLab.sumProductSchedule",
    "category": "function",
    "text": "sumProductSchedule() generates a sum-product message passing schedule that computes the marginals for each of the argument variables.\n\n\n\n\n\n"
},

{
    "location": "user-API/schedule-an-algorithm/#Sum-Product-schedule-1",
    "page": "Schedule an algorithm",
    "title": "Sum-Product schedule",
    "category": "section",
    "text": "ForneyLab.sumProductSchedule"
},

{
    "location": "user-API/schedule-an-algorithm/#ForneyLab.variationalExpectationPropagationSchedule",
    "page": "Schedule an algorithm",
    "title": "ForneyLab.variationalExpectationPropagationSchedule",
    "category": "function",
    "text": "variationalExpectationPropagationSchedule() generates an expectation propagation message passing schedule that is limited to the recognition_factor. Updates on EP sites are computed with an ExpectationPropagationRule.\n\n\n\n\n\n"
},

{
    "location": "user-API/schedule-an-algorithm/#Variational-expectation-propagation-schedule-1",
    "page": "Schedule an algorithm",
    "title": "Variational expectation propagation schedule",
    "category": "section",
    "text": "ForneyLab.variationalExpectationPropagationSchedule"
},

{
    "location": "user-API/schedule-an-algorithm/#ForneyLab.variationalSchedule",
    "page": "Schedule an algorithm",
    "title": "ForneyLab.variationalSchedule",
    "category": "function",
    "text": "variationalSchedule() generates a variational message passing schedule that computes the marginals for each of the recognition distributions in the recognition factor.\n\n\n\n\n\n"
},

{
    "location": "user-API/schedule-an-algorithm/#Variational-schedule-1",
    "page": "Schedule an algorithm",
    "title": "Variational schedule",
    "category": "section",
    "text": "ForneyLab.variationalSchedule"
},

{
    "location": "user-API/construct-algorithm-code/#",
    "page": "Construct algorithm code",
    "title": "Construct algorithm code",
    "category": "page",
    "text": ""
},

{
    "location": "user-API/construct-algorithm-code/#Construct-algorithm-code-1",
    "page": "Construct algorithm code",
    "title": "Construct algorithm code",
    "category": "section",
    "text": ""
},

{
    "location": "user-API/construct-algorithm-code/#Index-1",
    "page": "Construct algorithm code",
    "title": "Index",
    "category": "section",
    "text": "Modules = [ForneyLab]\nPages = [\"construct-algorithm-code.md\"]\nOrder = [:macro, :module, :constant, :type, :function]"
},

{
    "location": "user-API/construct-algorithm-code/#ForneyLab.expectationPropagationAlgorithm",
    "page": "Construct algorithm code",
    "title": "ForneyLab.expectationPropagationAlgorithm",
    "category": "function",
    "text": "Create a sum-product algorithm to infer marginals over variables, and compile it to Julia code\n\n\n\n\n\n"
},

{
    "location": "user-API/construct-algorithm-code/#Expectation-propagation-algorithm-1",
    "page": "Construct algorithm code",
    "title": "Expectation propagation algorithm",
    "category": "section",
    "text": "ForneyLab.expectationPropagationAlgorithm"
},

{
    "location": "user-API/construct-algorithm-code/#ForneyLab.sumProductAlgorithm",
    "page": "Construct algorithm code",
    "title": "ForneyLab.sumProductAlgorithm",
    "category": "function",
    "text": "Create a sum-product algorithm to infer marginals over variables, and compile it to Julia code\n\n\n\n\n\n"
},

{
    "location": "user-API/construct-algorithm-code/#Sum-product-algorithm-1",
    "page": "Construct algorithm code",
    "title": "Sum-product algorithm",
    "category": "section",
    "text": "ForneyLab.sumProductAlgorithm"
},

{
    "location": "user-API/construct-algorithm-code/#ForneyLab.variationalAlgorithm",
    "page": "Construct algorithm code",
    "title": "ForneyLab.variationalAlgorithm",
    "category": "function",
    "text": "Create a variational algorithm to infer marginals over a recognition distribution, and compile it to Julia code\n\n\n\n\n\n"
},

{
    "location": "user-API/construct-algorithm-code/#Variational-algorithm-1",
    "page": "Construct algorithm code",
    "title": "Variational algorithm",
    "category": "section",
    "text": "ForneyLab.variationalAlgorithm"
},

{
    "location": "user-API/construct-algorithm-code/#ForneyLab.variationalExpectationPropagationAlgorithm",
    "page": "Construct algorithm code",
    "title": "ForneyLab.variationalExpectationPropagationAlgorithm",
    "category": "function",
    "text": "Create a variational EP algorithm to infer marginals over a recognition distribution, and compile it to Julia code\n\n\n\n\n\n"
},

{
    "location": "user-API/construct-algorithm-code/#Variational-expectation-propagation-algorithm-1",
    "page": "Construct algorithm code",
    "title": "Variational expectation propagation algorithm",
    "category": "section",
    "text": "ForneyLab.variationalExpectationPropagationAlgorithm"
},

{
    "location": "user-API/construct-algorithm-code/#ForneyLab.freeEnergyAlgorithm",
    "page": "Construct algorithm code",
    "title": "ForneyLab.freeEnergyAlgorithm",
    "category": "function",
    "text": "The freeEnergyAlgorithm function accepts a RecognitionFactorization and returns (if possible) Julia code for computing the variational free energy with respect to  the argument recognition factorization and corresponding FactorGraph (model).\n\n\n\n\n\n"
},

{
    "location": "user-API/construct-algorithm-code/#Free-energy-algorithm-1",
    "page": "Construct algorithm code",
    "title": "Free energy algorithm",
    "category": "section",
    "text": "ForneyLab.freeEnergyAlgorithm"
},

{
    "location": "user-API/execute-an-algorithm/#",
    "page": "Execute an algorithm",
    "title": "Execute an algorithm",
    "category": "page",
    "text": ""
},

{
    "location": "user-API/execute-an-algorithm/#Execute-an-algorithm-1",
    "page": "Execute an algorithm",
    "title": "Execute an algorithm",
    "category": "section",
    "text": ""
},

{
    "location": "user-API/execute-an-algorithm/#Index-1",
    "page": "Execute an algorithm",
    "title": "Index",
    "category": "section",
    "text": "Modules = [ForneyLab]\nPages = [\"execute-an-algorithm.md\"]\nOrder = [:macro, :module, :constant, :type, :function]"
},

{
    "location": "user-API/execute-an-algorithm/#ForneyLab.Message",
    "page": "Execute an algorithm",
    "title": "ForneyLab.Message",
    "category": "type",
    "text": "Encodes a message, which is a probability distribution with a scaling factor\n\n\n\n\n\n"
},

{
    "location": "user-API/execute-an-algorithm/#Message-1",
    "page": "Execute an algorithm",
    "title": "Message",
    "category": "section",
    "text": "ForneyLab.Message"
},

{
    "location": "user-API/execute-an-algorithm/#ForneyLab.PointMass",
    "page": "Execute an algorithm",
    "title": "ForneyLab.PointMass",
    "category": "type",
    "text": "PointMass is an abstract type used to describe point mass distributions. It never occurs in a FactorGraph, but it is used as a probability distribution type.\n\n\n\n\n\n"
},

{
    "location": "user-API/execute-an-algorithm/#Point-mass-1",
    "page": "Execute an algorithm",
    "title": "Point mass",
    "category": "section",
    "text": "ForneyLab.PointMass"
},

{
    "location": "user-API/execute-an-algorithm/#ForneyLab.ProbabilityDistribution",
    "page": "Execute an algorithm",
    "title": "ForneyLab.ProbabilityDistribution",
    "category": "type",
    "text": "Encodes a probability distribution as a FactorNode of type family with fixed interfaces\n\n\n\n\n\n"
},

{
    "location": "user-API/execute-an-algorithm/#Probability-distribution-1",
    "page": "Execute an algorithm",
    "title": "Probability distribution",
    "category": "section",
    "text": "ForneyLab.ProbabilityDistribution"
},

{
    "location": "user-API/helpers/#",
    "page": "Helpers",
    "title": "Helpers",
    "category": "page",
    "text": ""
},

{
    "location": "user-API/helpers/#Helpers-1",
    "page": "Helpers",
    "title": "Helpers",
    "category": "section",
    "text": ""
},

{
    "location": "user-API/helpers/#Index-1",
    "page": "Helpers",
    "title": "Index",
    "category": "section",
    "text": "Modules = [ForneyLab]\nPages = [\"helpers.md\"]\nOrder = [:macro, :module, :constant, :type, :function]"
},

{
    "location": "user-API/helpers/#ForneyLab.mat-Tuple{Any}",
    "page": "Helpers",
    "title": "ForneyLab.mat",
    "category": "method",
    "text": "Helper function to construct 1x1 Matrix\n\n\n\n\n\n"
},

{
    "location": "user-API/helpers/#ForneyLab.@symmetrical-Tuple{Expr}",
    "page": "Helpers",
    "title": "ForneyLab.@symmetrical",
    "category": "macro",
    "text": "Duplicate a method definition with the order of the first two arguments swapped. This macro is used to duplicate methods that are symmetrical in their first two input arguments, but require explicit definitions for the different argument orders. Example:\n\n@symmetrical function prod!(x, y, z)\n    ...\nend\n\n\n\n\n\n"
},

{
    "location": "user-API/helpers/#ForneyLab.ensureMatrix-Union{Tuple{AbstractArray{T,2}}, Tuple{T}} where T<:Number",
    "page": "Helpers",
    "title": "ForneyLab.ensureMatrix",
    "category": "method",
    "text": "ensureMatrix: cast input to a Matrix if necessary\n\n\n\n\n\n"
},

{
    "location": "user-API/helpers/#ForneyLab.isApproxEqual-Tuple{Any,Any}",
    "page": "Helpers",
    "title": "ForneyLab.isApproxEqual",
    "category": "method",
    "text": "isApproxEqual: check approximate equality\n\n\n\n\n\n"
},

{
    "location": "user-API/helpers/#ForneyLab.isRoundedPosDef-Tuple{AbstractArray{Float64,2}}",
    "page": "Helpers",
    "title": "ForneyLab.isRoundedPosDef",
    "category": "method",
    "text": "isRoundedPosDef: is input matrix positive definite? Round to prevent fp precision problems that isposdef() suffers from.\n\n\n\n\n\n"
},

{
    "location": "user-API/helpers/#ForneyLab.leaftypes-Tuple{Type}",
    "page": "Helpers",
    "title": "ForneyLab.leaftypes",
    "category": "method",
    "text": "leaftypes(datatype) returns all subtypes of datatype that are leafs in the type tree.\n\n\n\n\n\n"
},

{
    "location": "user-API/helpers/#ForneyLab.trigammaInverse-Tuple{Float64}",
    "page": "Helpers",
    "title": "ForneyLab.trigammaInverse",
    "category": "method",
    "text": "trigammaInverse(x): solve trigamma(y) = x for y.\n\nUses Newton\'s method on the convex function 1/trigramma(y). Iterations converge monotonically. Based on trigammaInverse implementation in R package \"limma\" by Gordon Smyth: https://github.com/Bioconductor-mirror/limma/blob/master/R/fitFDist.R\n\n\n\n\n\n"
},

{
    "location": "user-API/helpers/#Description-1",
    "page": "Helpers",
    "title": "Description",
    "category": "section",
    "text": "Modules = [ForneyLab]\nPrivate = true\nPages = [\"src/helpers.jl\"]\nOrder = [:macro, :module, :constant, :type, :function]"
},

{
    "location": "developer-API/extended-factor-nodes/#",
    "page": "Extended factor nodes",
    "title": "Extended factor nodes",
    "category": "page",
    "text": ""
},

{
    "location": "developer-API/extended-factor-nodes/#Extended-factor-nodes-1",
    "page": "Extended factor nodes",
    "title": "Extended factor nodes",
    "category": "section",
    "text": ""
},

{
    "location": "developer-API/extended-factor-nodes/#Index-1",
    "page": "Extended factor nodes",
    "title": "Index",
    "category": "section",
    "text": "Modules = [ForneyLab]\nPages = [\"extended-factor-nodes.md\"]\nOrder = [:macro, :module, :constant, :type, :function]"
},

{
    "location": "developer-API/extended-factor-nodes/#ForneyLab.@composite",
    "page": "Extended factor nodes",
    "title": "ForneyLab.@composite",
    "category": "macro",
    "text": "The @composite macro allows for defining custom (composite) nodes. Composite nodes allow for implementating of custom update rules that may be computationally more efficient or convenient. A composite node can be defined with or without an  internal model. For detailed usage instructions we refer to the composite_nodes demo.\n\n\n\n\n\n"
},

{
    "location": "developer-API/extended-factor-nodes/#Composite-1",
    "page": "Extended factor nodes",
    "title": "Composite",
    "category": "section",
    "text": "ForneyLab.@composite"
},

{
    "location": "developer-API/extended-rules/#",
    "page": "Extended rules",
    "title": "Extended rules",
    "category": "page",
    "text": ""
},

{
    "location": "developer-API/extended-rules/#Extended-rules-1",
    "page": "Extended rules",
    "title": "Extended rules",
    "category": "section",
    "text": ""
},

{
    "location": "developer-API/extended-rules/#Index-1",
    "page": "Extended rules",
    "title": "Index",
    "category": "section",
    "text": "Modules = [ForneyLab]\nPages = [\"extended-rules.md\"]\nOrder = [:macro, :module, :constant, :type, :function]"
},

{
    "location": "developer-API/extended-rules/#ForneyLab.@expectationPropagationRule",
    "page": "Extended rules",
    "title": "ForneyLab.@expectationPropagationRule",
    "category": "macro",
    "text": "@expectationPropagationRule registers a expectation propagation update  rule by defining the rule type and the corresponding methods for the outboundType  and isApplicable functions. If no name (type) for the new rule is passed, a  unique name (type) will be generated. Returns the rule type.\n\n\n\n\n\n"
},

{
    "location": "developer-API/extended-rules/#Expectation-propagation-rule-1",
    "page": "Extended rules",
    "title": "Expectation propagation rule",
    "category": "section",
    "text": "ForneyLab.@expectationPropagationRule"
},

{
    "location": "developer-API/extended-rules/#ForneyLab.@marginalRule",
    "page": "Extended rules",
    "title": "ForneyLab.@marginalRule",
    "category": "macro",
    "text": "@marginalRule registers a marginal update rule for a (joint) marginal by defining the rule type and the corresponding methods for the isApplicable functions. If no name (type) for the new rule is passed, a unique name (type) will be generated. Returns the rule type.\n\n\n\n\n\n"
},

{
    "location": "developer-API/extended-rules/#Marginal-rule-1",
    "page": "Extended rules",
    "title": "Marginal rule",
    "category": "section",
    "text": "ForneyLab.@marginalRule"
},

{
    "location": "developer-API/extended-rules/#ForneyLab.@naiveVariationalRule",
    "page": "Extended rules",
    "title": "ForneyLab.@naiveVariationalRule",
    "category": "macro",
    "text": "@naiveVariationalRule registers a variational update rule for the naive (mean-field) factorization by defining the rule type and the corresponding methods for the  outboundType and isApplicable functions. If no name (type) for the new rule is passed, a unique name (type) will be generated. Returns the rule type.\n\n\n\n\n\n"
},

{
    "location": "developer-API/extended-rules/#Naive-variational-rule-1",
    "page": "Extended rules",
    "title": "Naive variational rule",
    "category": "section",
    "text": "ForneyLab.@naiveVariationalRule"
},

{
    "location": "developer-API/extended-rules/#ForneyLab.@structuredVariationalRule",
    "page": "Extended rules",
    "title": "ForneyLab.@structuredVariationalRule",
    "category": "macro",
    "text": "@structuredVariationalRule registers a variational update rule for the structured factorization by defining the rule type and the corresponding methods for the  outboundType and isApplicable functions. If no name (type) for the new rule is passed, a unique name (type) will be generated. Returns the rule type.\n\n\n\n\n\n"
},

{
    "location": "developer-API/extended-rules/#Structured-variational-rule-1",
    "page": "Extended rules",
    "title": "Structured variational rule",
    "category": "section",
    "text": "ForneyLab.@structuredVariationalRule"
},

{
    "location": "developer-API/extended-rules/#ForneyLab.@sumProductRule",
    "page": "Extended rules",
    "title": "ForneyLab.@sumProductRule",
    "category": "macro",
    "text": "@sumProductRule registers a sum-product update rule by defining the rule type and the corresponding methods for the outboundType and isApplicable functions. If no name (type) for the new rule is passed, a unique name (type) will be generated. Returns the rule type.\n\n\n\n\n\n"
},

{
    "location": "developer-API/extended-rules/#Sum-product-rule-1",
    "page": "Extended rules",
    "title": "Sum-product rule",
    "category": "section",
    "text": "ForneyLab.@sumProductRule"
},

{
    "location": "developer-API/graph/#",
    "page": "Graph (low-level)",
    "title": "Graph (low-level)",
    "category": "page",
    "text": ""
},

{
    "location": "developer-API/graph/#Graph-(low-level)-1",
    "page": "Graph (low-level)",
    "title": "Graph (low-level)",
    "category": "section",
    "text": ""
},

{
    "location": "developer-API/graph/#Index-1",
    "page": "Graph (low-level)",
    "title": "Index",
    "category": "section",
    "text": "Modules = [ForneyLab]\nPages = [\"graph.md\"]\nOrder = [:macro, :module, :constant, :type, :function]"
},

{
    "location": "developer-API/graph/#ForneyLab.Edge",
    "page": "Graph (low-level)",
    "title": "ForneyLab.Edge",
    "category": "type",
    "text": "An Edge joins two interfaces (half-edges) a and b.\n\n\n\n\n\n"
},

{
    "location": "developer-API/graph/#Edge-1",
    "page": "Graph (low-level)",
    "title": "Edge",
    "category": "section",
    "text": "ForneyLab.Edge"
},

{
    "location": "developer-API/graph/#ForneyLab.Interface",
    "page": "Graph (low-level)",
    "title": "ForneyLab.Interface",
    "category": "type",
    "text": "An Interface belongs to a FactorNode and represents a half-edge. An Interface has at most one partner interface, with wich it forms an edge.\n\n\n\n\n\n"
},

{
    "location": "developer-API/graph/#Interface-1",
    "page": "Graph (low-level)",
    "title": "Interface",
    "category": "section",
    "text": "ForneyLab.Interface"
},

{
    "location": "developer-API/graph/#ForneyLab.Terminal",
    "page": "Graph (low-level)",
    "title": "ForneyLab.Terminal",
    "category": "type",
    "text": "Description:\n\nTerminal is a special type of node that is only used in the internal\ngraph of a CompositeNode. A Terminal is used to terminate an Edge in the\ninternal graph that is linked to an interface of the CompositeNode.\n\nA Terminal is linked to an interface of the\nCompositeNode containing the Terminal.\n\nInterfaces:\n\n1. out\n\nConstruction:\n\nTerminal(id=:some_id)\n\n\n\n\n\n"
},

{
    "location": "developer-API/graph/#Terminal-1",
    "page": "Graph (low-level)",
    "title": "Terminal",
    "category": "section",
    "text": "ForneyLab.Terminal"
},

{
    "location": "developer-API/scheduler/#",
    "page": "Scheduler (low-level)",
    "title": "Scheduler (low-level)",
    "category": "page",
    "text": ""
},

{
    "location": "developer-API/scheduler/#Graph-(low-level)-1",
    "page": "Scheduler (low-level)",
    "title": "Graph (low-level)",
    "category": "section",
    "text": ""
},

{
    "location": "developer-API/scheduler/#Index-1",
    "page": "Scheduler (low-level)",
    "title": "Index",
    "category": "section",
    "text": "Modules = [ForneyLab]\nPages = [\"graph.md\"]\nOrder = [:macro, :module, :constant, :type, :function]"
},

{
    "location": "developer-API/scheduler/#ForneyLab.RecognitionFactor",
    "page": "Scheduler (low-level)",
    "title": "ForneyLab.RecognitionFactor",
    "category": "type",
    "text": "A RecognitionFactor specifies the subset of variables that comprise a joint factor in the recognition factorization.\n\n\n\n\n\n"
},

{
    "location": "developer-API/scheduler/#Recognition-factor-1",
    "page": "Scheduler (low-level)",
    "title": "Recognition factor",
    "category": "section",
    "text": "ForneyLab.RecognitionFactor"
},

{
    "location": "developer-API/scheduler/#ForneyLab.MarginalScheduleEntry",
    "page": "Scheduler (low-level)",
    "title": "ForneyLab.MarginalScheduleEntry",
    "category": "type",
    "text": "A MarginalScheduleEntry defines a marginal computation. The marginal_update_rule <: MarginalUpdateRule defines the rule that is used to calculate the (joint) marginal over target.\n\n\n\n\n\n"
},

{
    "location": "developer-API/scheduler/#Marginal-schedule-entry-1",
    "page": "Scheduler (low-level)",
    "title": "Marginal schedule entry",
    "category": "section",
    "text": "ForneyLab.MarginalScheduleEntry"
},

{
    "location": "developer-API/scheduler/#ForneyLab.MarginalRule",
    "page": "Scheduler (low-level)",
    "title": "ForneyLab.MarginalRule",
    "category": "type",
    "text": "MarginalRule{factortype} specifies a joint marginal update rule with respect to a node of type `factortype`.\n\n\n\n\n\n"
},

{
    "location": "developer-API/scheduler/#Marginal-rule-1",
    "page": "Scheduler (low-level)",
    "title": "Marginal rule",
    "category": "section",
    "text": "ForneyLab.MarginalRule"
},

{
    "location": "developer-API/scheduler/#ForneyLab.MarginalUpdateRule",
    "page": "Scheduler (low-level)",
    "title": "ForneyLab.MarginalUpdateRule",
    "category": "type",
    "text": "A MarginalUpdateRule specifies how a (joint) marginal is calculated from incoming messages (and a node function).\n\n\n\n\n\n"
},

{
    "location": "developer-API/scheduler/#Marginal-update-rule-1",
    "page": "Scheduler (low-level)",
    "title": "Marginal update rule",
    "category": "section",
    "text": "ForneyLab.MarginalUpdateRule"
},

{
    "location": "developer-API/scheduler/#ForneyLab.MessageUpdateRule",
    "page": "Scheduler (low-level)",
    "title": "ForneyLab.MessageUpdateRule",
    "category": "type",
    "text": "A MessageUpdateRule specifies how a Message is calculated from the node function and the incoming messages. Use subtypes(MessageUpdateRule) to list the available rules.\n\n\n\n\n\n"
},

{
    "location": "developer-API/scheduler/#Message-update-rule-1",
    "page": "Scheduler (low-level)",
    "title": "Message update rule",
    "category": "section",
    "text": "ForneyLab.MessageUpdateRule"
},

{
    "location": "developer-API/scheduler/#ForneyLab.ScheduleEntry",
    "page": "Scheduler (low-level)",
    "title": "ForneyLab.ScheduleEntry",
    "category": "type",
    "text": "A ScheduleEntry defines a message computation. The msg_update_rule <: MessageUpdateRule defines the rule that is used to calculate the message coming out of interface.\n\n\n\n\n\n"
},

{
    "location": "developer-API/scheduler/#Schedule-entry-1",
    "page": "Scheduler (low-level)",
    "title": "Schedule entry",
    "category": "section",
    "text": "ForneyLab.ScheduleEntry"
},

]}
