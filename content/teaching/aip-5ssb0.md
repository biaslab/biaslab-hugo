+++
date = "2018-08-23T14:45:00+02:00"
external_link = ""
title = "Adaptive Information Processing (5SSB0)"
participants_block_position = "down"
type = "teaching"

[blackfriday]
    fractions = false

[[participants]]
    name = "Bert de Vries"
    is_member = true
    id = "bert"
    position = 1

[[participants]]
    name = "Tjalling Tjalkens"
    is_member = true
    id = "tjalling"
    position = 2

+++

<img src="/img/teaching/5SSB0-banner.png" width="1200px">
In this course, using fundamental concepts of probability theory, we present an
introduction to the design of adaptive information processing systems. This
course extends coursework on adaptive signal processing and can also be taken as
an introduction to **machine learning** and **data science**. Typical
application areas include pattern recognition, medical signal analysis, speech
and language processing, image processing, bio-informatics and robotics.

In the 2018/19 academic year, this class is taught in semester B (3rd quarter)
and **starts on 4-Feb-2019**.


## News

- **26-Mar-2019** We added an extra old exam (from April 2017, [with solutions](https://github.com/bertdv/AIP-5SSB0/raw/master/lessons/exercises/170410-5SSB0-exam-with-solutions.pdf)) to aid your exam preparation.   
- **12-Mar-2019** The [pdf handout for part-2](https://github.com/bertdv/AIP-5SSB0/raw/master/lessons/Tjalling/AIP-part2-handout.pdf) has been updated.
- **5-Feb-2019** The [pdf bundle for part-1](https://github.com/bertdv/AIP-5SSB0/raw/master/output/AIP-5SSB0.pdf) has been updated.

<!---

- **8-Mar-2018**: Added answers to question 15 (on temporal models) in the [exercises for part-1](https://github.com/bertdv/AIP-5SSB0/blob/master/lessons/exercises/5MB20-exercises-part-1-with-solutions.pdf).

- **8-Mar-2018** Class materials for part-2 have been updated.

- **8-Mar-2018** The [lecture booklet in PDF-format for part-1](https://github.com/bertdv/AIP-5SSB0/raw/master/lessons/booklet/AIP-5SSB0-part-1-lectures-booklet.pdf) has been updated to incorporate some minor updates that were added over the past few weeks. No need to print out a new version if you have a previous version.

- **5-Mar-2018** There was a request to supply an answer to the three-coins problem (in [lesson 10 - The EM Algorithm](http://nbviewer.ipython.org/github/bertdv/AIP-5SSB0/blob/master/lessons/notebooks/10_The-General-EM-Algorithm.ipynb)). You can google [three coins EM algorithm](http://lmgtfy.com/?q=three+coins+EM+algorithm) to find many resources on the internet. The problem and solution was originally described in [Collins (1997), sec.3.1](https://github.com/bertdv/AIP-5SSB0/blob/master/lessons/notebooks/files/Collins-1997-The-EM-algorithm.pdf). I personally like [this concise summary](https://github.com/bertdv/AIP-5SSB0/blob/master/lessons/notebooks/files/Chen-EM-algorithm.pdf).

- **21-Mar-2018** Per request of some students, I added the corresponding lesson number to the [exercises for part 1](https://github.com/bertdv/AIP-5SSB0/blob/master/lessons/exercises/5MB20-exercises-part-1-with-solutions.pdf) (and reshuffled the sequence of exercises to match the sequence order of the lessons).

--->

## Materials

In principle, you can download all needed materials from this site. We strongly
recommend that you acquire the following text book: [Pattern Recognition and
Machine
Learning](https://www.bol.com/nl/p/pattern-recognition-and-machine-learning/1001004002773122)
(Springer, 2006) by [Christopher M.
Bishop](http://research.microsoft.com/en-us/um/people/cmbishop/index.htm). You
can also download this book for free in PDF format
[here](https://www.microsoft.com/en-us/research/uploads/prod/2006/01/Bishop-Pattern-Recognition-and-Machine-Learning-2006.pdf).
Try to get the book before classes start.

### Part 1: Linear Gaussian Models and the EM Algorithm

Instructor: [Prof.dr.ir. Bert de Vries](http://bertdv.nl)

We present a unified probabilistic modeling approach to a large set of algorithms based on Linear Gaussian
Models, including models for regression and classification problems, Gaussian mixture models, Kalman filters, hidden
Markov models and various latent component analysis models. Furthermore, we derive the **Expectation Maximization** (EM) algorithm for maximum likelihood estimation problems and present factor graphs as a unifying framework for efficient realization of probabilistic inference algorithms. In part 1, the emphasis will be on parameter estimation for a given model specification. You can **view the lecture notes** through the links below:

- [ 0 - Introduction](http://nbviewer.ipython.org/github/bertdv/AIP-5SSB0/blob/master/lessons/notebooks/00_Introduction.ipynb)
- [1 - Machine Learning Overview](http://nbviewer.ipython.org/github/bertdv/AIP-5SSB0/blob/master/lessons/notebooks/01_Machine-Learning-Overview.ipynb)
- [2 - Probability Theory Review](http://nbviewer.ipython.org/github/bertdv/AIP-5SSB0/blob/master/lessons/notebooks/02_Probability-Review.ipynb)
- [3 - Bayesian Machine Learning](http://nbviewer.ipython.org/github/bertdv/AIP-5SSB0/blob/master/lessons/notebooks/03_Bayesian-Machine-Learning.ipynb)
- [4 - Working with Gaussians](http://nbviewer.ipython.org/github/bertdv/AIP-5SSB0/blob/master/lessons/notebooks/04_Working-with-Gaussians.ipynb)
- [5 - Density Estimation](http://nbviewer.ipython.org/github/bertdv/AIP-5SSB0/blob/master/lessons/notebooks/05_Density-Estimation.ipynb)
- [6 - Linear Regression](http://nbviewer.ipython.org/github/bertdv/AIP-5SSB0/blob/master/lessons/notebooks/06_Linear-Regression.ipynb)
- [7 - Generative Classification](http://nbviewer.ipython.org/github/bertdv/AIP-5SSB0/blob/master/lessons/notebooks/07_Generative-Classification.ipynb)
- [8 - Discriminative Classification](http://nbviewer.ipython.org/github/bertdv/AIP-5SSB0/blob/master/lessons/notebooks/08_Discriminative-Classification.ipynb)
- [9 - Clustering with Gaussian Mixture Models](http://nbviewer.ipython.org/github/bertdv/AIP-5SSB0/blob/master/lessons/notebooks/09_Clustering-with-Gaussian-Mixture-Models.ipynb)
- [10- The EM Algorithm](http://nbviewer.ipython.org/github/bertdv/AIP-5SSB0/blob/master/lessons/notebooks/10_The-General-EM-Algorithm.ipynb)
- [11- Continuous Latent Variable Models - PCA and FA](http://nbviewer.ipython.org/github/bertdv/AIP-5SSB0/blob/master/lessons/notebooks/11_Continuous-Latent-Variable-Models-PCA-and-FA.ipynb)     
- [12- Dynamic Latent Variable Models](http://nbviewer.ipython.org/github/bertdv/AIP-5SSB0/blob/master/lessons/notebooks/12_Dynamic-Latent-Variable-Models.ipynb)     
- [13- Factor Graphs and Message Passing Algorithms](http://nbviewer.ipython.org/github/bertdv/AIP-5SSB0/blob/master/lessons/notebooks/13_Factor-Graphs-and-Message-Passing-Algorithms.ipynb)


<!---
- [14- EM as a Message Passing Algorithm](http://nbviewer.ipython.org/github/bertdv/AIP-5SSB0/blob/master/lessons/notebooks/14_EM-as-Message-Passing.ipynb) (this lesson not at exam!)
--->
<br/>

- The [source files for these lecture notes are accessible at github](https://github.com/bertdv/AIP-5SSB0). If you catch an error or if you have a specific update request, please [file a github issue](https://github.com/bertdv/AIP-5SSB0/issues/new).
.
- Here is a [PDF bundle of all classes for part-1](https://github.com/bertdv/AIP-5SSB0/raw/master/output/AIP-5SSB0.pdf). The lecture notes may change a bit during the course, e.g., to process comments by students. A final PDF version will be posted after the last lecture.

- Code examples in the lecture notes are in the [Julia](http://julialang.org/) language, which is syntactically similar to MATLAB. In order to run the code examples straight in the browser, you will need to run the lecture notes files in a [Jupyter](http://jupyter.org/) notebook. We recommend that you run the cloud-based [JuliaBox](https://www.juliabox.com/) service to run Jupyter notebooks. Please see [these instructions](https://github.com/bertdv/AIP-5SSB0) (scroll to down to the README) if you want to run the lecture notes in JuliaBox.

### Part 2: Model Complexity Control and the MDL Principle

Instructor: [Dr.ir. Tjalling J. Tjalkens](https://research.tue.nl/en/persons/tjalling-tjalkens)

In part 2, the discussion on probabilistic modeling extends to model specification itself. Specifically, the notion of **Stochastic Complexity** will be developed and the **Minimum Description Length** (MDL) principle will be used to _select_ appropriate models. The lessons are structured as follows:

- Part 2A: The Bayesian Information Criterion
- Part 2B: Bayesian model estimation and Context-tree model selection
- Part 2C: Descriptive complexity

<!-- break -->

* [Click here to view or download the lecture notes for part-2](https://github.com/bertdv/AIP-5SSB0/raw/master/lessons/Tjalling/AIP-part2-handout.pdf?dl=0).
  * An extended version of the part-2 handouts is in preparation but only
    half-finished. You can download this [UNFINISHED
    work](https://github.com/bertdv/AIP-5SSB0/raw/master/lessons/Tjalling/AIP-part2-article.pdf?dl=0)
    as well.
* Background on [information theory](https://github.com/bertdv/AIP-5SSB0/raw/master/lessons/Tjalling/information-theory-background.pdf?dl=0).
* [Markov structures and summary of essential content](https://github.com/bertdv/AIP-5SSB0/raw/master/lessons/Tjalling/summary-of-essential-content.pdf?dl=0).

## Exam Preparation

- Each year there will be two written exam opportunities. Check the official TUE course site for exam dates.
- In preparation for the exam, we recommend that you work through the following exercises and old exams:
  * [exercises for part 1](https://github.com/bertdv/AIP-5SSB0/raw/master/lessons/exercises/5MB20-exercises-part-1.pdf); [same with solutions](https://github.com/bertdv/AIP-5SSB0/raw/master/lessons/exercises/5MB20-exercises-part-1-with-solutions.pdf)
  * [exercises for part 2](https://github.com/bertdv/AIP-5SSB0/raw/master/lessons/exercises/5MB20-exercises-part-2.pdf); [same with solutions](https://github.com/bertdv/AIP-5SSB0/raw/master/lessons/exercises/5MB20-exercises-part-2-hints.pdf)
  * [exam 2011/04/14](https://github.com/bertdv/AIP-5SSB0/raw/master/lessons/exercises/110414-5mb20-exam.pdf); [with solutions](https://github.com/bertdv/AIP-5SSB0/raw/master/lessons/exercises/110414-5mb20-exam-with-solutions.pdf)
  * [exam 2011/06/20](https://github.com/bertdv/AIP-5SSB0/raw/master/lessons/exercises/110620-5MB20-exam.pdf); [with solutions](https://github.com/bertdv/AIP-5SSB0/raw/master/lessons/exercises/110620-5MB20-exam-with-solutions.pdf)
  * [exam 2016/04/15](https://github.com/bertdv/AIP-5SSB0/raw/master/lessons/exercises/160415-5mb20-5SSB0-exam.pdf); [with solutions](https://github.com/bertdv/AIP-5SSB0/raw/master/lessons/exercises/160415-5mb20-5SSB0-exam-with-solutions.pdf)
 * [exam 2017/04/10](https://github.com/bertdv/AIP-5SSB0/raw/master/lessons/exercises/170410-5SSB0-exam.pdf); [with solutions](https://github.com/bertdv/AIP-5SSB0/raw/master/lessons/exercises/170410-5SSB0-exam-with-solutions.pdf)

- Please feel free to consult the following matrix and Gaussian cheat sheets (by Sam Roweis) when making exercises.
  * [Gaussian Identities](https://github.com/bertdv/AIP-5SSB0/raw/master/lessons/notebooks/files/RoweisS-gaussian_formulas.pdf?dl=0)
  * [Matrix Identities](https://github.com/bertdv/AIP-5SSB0/raw/master/lessons/notebooks/files/RoweisS-matrix_identities.pdf?dl=0)
- Note however that **you cannot bring notes or books to the exam. All needed formulas are supplied at the exam sheet**.

## Video

The 2007 class meetings were [recorded and can be viewed](http://videocollege.tue.nl)
if you have a valid TU/e account. Note however that the current class will
change a bit relative to the 2007 class. Talk to us before you plan to
follow the class only from video.

## Miscellany

- **Prerequisites**: Mathematical maturity equivalent to undergraduate engineering program.
Some MATLAB programming skills are helpful.

- You're advised to bring the lecture notes (either in soft- or hardcopy) with you to class in order to add your personal comments.

- Some related resources on the net with lots of relevant content
  - [CS281: Advanced Machine Learning](http://www.seas.harvard.edu/courses/cs281/) by prof. Ryan Adams, at Harvard University.
