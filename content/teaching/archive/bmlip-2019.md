+++
date = "2018-08-23T14:45:00+02:00"
external_link = ""
title = "Bayesian Machine Learning and Information Processing (5SSD0)"
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
    name = "Wouter Kouw"
    is_member = true
    id = "wouter"
    position = 2

+++

<img src="/img/teaching/5SSD0-banner.png" width="1200px">

This course covers the fundamentals of a Bayesian (i.e., probabilistic) approach to machine learning and information processing systems. The Bayesian approach allows for a unified and consistent treatment of many model-based machine learning techniques. We focus on Linear Gaussian systems and will discuss many useful models and applications, including common regression and classification methods, Gaussian mixture models, hidden Markov models and Kalman filters. We will discuss important algorithms for parameter estimation in these models including the Expectation-Maximization (EM) algorithm and Variational Bayes (VB). The Bayesian method also provides tools for comparing the performance of different information processing systems by means of estimating the ``Bayesian evidence’’ for each model. We will discuss several methods for approximating Bayesian evidence. Next, we will discuss intelligent _agents_ that learn purposeful behavior from interactions with their environment. These agents are used for applications such as self-driving cars or interactive design of virtual and augmented realities. Indeed, in this course we relate synthetic Bayesian intelligent agents to natural intelligent agents such as the brain. You will be challenged to code Bayesian machine learning algorithms yourself and apply them to practical information processing problems.


## News

### RESIT IN JULY 2020

If you wish to take a resit of this course in July 2020, please note that the resit will be an oral exam.  If you wish to take a resit, please register for the exam and schedule an appointment with me (bert.de.vries@tue.nl).

The format will be the same as in April 2020.  At the beginning of the session, I need to check your identity, preferably by your campus card. The session will last for maximally 30 minutes and will be recorded (and later deleted, following GDPR rules). Please do review the [Oral Exam Example notebook](https://nbviewer.jupyter.org/github/bertdv/BMLIP/blob/master/lessons/exercises/Oral-Exam-Example.ipynb (Links to an external site.)) to get an idea of what kind of questions will be asked.

The first question of the exam will be an open question: "You get 5 minutes to tell me about what you learned in this class. You can fill in the 5 minutes as you like but try to impress me with your knowledge or insights. E.g., talk about probabilistic modelling, how it works, what are strong aspects or weak aspects of the approach, etc."

After the first question, the rest of the exam will be more focused at selected topics by myself.  As mentioned before, I am mostly looking for conceptual understanding of the materials.



## Instructors

- Instructors: [prof.dr.ir. Bert de Vries](http://bertdv.nl) (responsible instructor) and [dr. Wouter Kouw](https://biaslab.github.io/member/wouter/).                           

- Teaching assistants: [Ismail Senoz, MSc](https://biaslab.github.io/member/ismail/),  and [Magnus Koudahl, MSc](https://biaslab.github.io/member/magnus/).  



## Materials

In principle, you can download all needed materials from this site.

### Books

Please download the following books/resources:

1. [Christopher M.
Bishop](http://research.microsoft.com/en-us/um/people/cmbishop/index.htm) (2006), [Pattern Recognition and
Machine
Learning](https://www.microsoft.com/en-us/research/people/cmbishop/prml-book/). You can also buy a [hardcopy, e.g. at bol.com](https://tinyurl.com/thj7euq).
2. [Ariel Caticha](https://www.albany.edu/physics/acaticha.shtml) (2012), [Entropic Inference and the Foundations of Physics](https://www.albany.edu/physics/ACaticha-EIFP-book.pdf)


### Lecture notes

- The [Fundamentals](#fundamentals) and [Advanced Materials](#advanced-materials) lectures (see below) are taught by Bert de Vries. The [Probabilistic Programming](#minicourse-probabilistic-programming) minicourse is taught by Wouter Kouw and the [What is Life?](#bonus-lecture) lecture is presented by Magnus Koudahl.

- The [source files for the lecture notes are accessible at github](https://github.com/bertdv/bmlip). For help with installing Julia and Jupyter, see [this pdf](/pdf/bmlip/INSTALL.pdf).

- Here is a [PDF bundle of the lecture notes of lessons 0 through 12](/pdf/bmlip/BMLIP-5SSD0.pdf). The lecture notes may change a bit during the course, e.g., to process comments by students. A final PDF version will be posted after the last lecture.

- You can view the lecture notes online through the links below:

#### Fundamentals

- [0 - Course Outline and Administrative Issues](http://nbviewer.ipython.org/github/bertdv/BMLIP/blob/master/lessons/notebooks/00-Course-Outline-and-Admin-Issues.ipynb)
- [1 - Machine Learning Overview](http://nbviewer.ipython.org/github/bertdv/BMLIP/blob/master/lessons/notebooks/01-Machine-Learning-Overview.ipynb)
- [2 - Probability Theory Review](http://nbviewer.ipython.org/github/bertdv/BMLIP/blob/master/lessons/notebooks/02-Probability-Theory-Review.ipynb)
- [3 - Bayesian Machine Learning](http://nbviewer.ipython.org/github/bertdv/BMLIP/blob/master/lessons/notebooks/03-Bayesian-Machine-Learning.ipynb)
- [4 - Continuous Data and the Gaussian Distribution](http://nbviewer.ipython.org/github/bertdv/BMLIP/blob/master/lessons/notebooks/04-The-Gaussian-Distribution.ipynb)
- [5 - Discrete Data and the Multinomial Distribution](http://nbviewer.ipython.org/github/bertdv/BMLIP/blob/master/lessons/notebooks/05-The-Multinomial-Distribution.ipynb)
- [6 - Regression](http://nbviewer.ipython.org/github/bertdv/BMLIP/blob/master/lessons/notebooks/06-Regression.ipynb)
- [7 - Generative Classification](http://nbviewer.ipython.org/github/bertdv/BMLIP/blob/master/lessons/notebooks/07-Generative-Classification.ipynb)
- [8 - Discriminative Classification](http://nbviewer.ipython.org/github/bertdv/BMLIP/blob/master/lessons/notebooks/08-Discriminative-Classification.ipynb)

#### Advanced Materials

- [9 - Latent Variable Models and Variational Bayes](http://nbviewer.ipython.org/github/bertdv/BMLIP/blob/master/lessons/notebooks/09-Latent-Variable-Models-and-VB.ipynb)
- [10- Factor Graphs](http://nbviewer.ipython.org/github/bertdv/BMLIP/blob/master/lessons/notebooks/10-Factor-Graphs.ipynb)
- [11- Dynamic Models](http://nbviewer.ipython.org/github/bertdv/BMLIP/blob/master/lessons/notebooks/11-Dynamic-Models.ipynb)
- [12- Intelligent Agents and Active Inference](http://nbviewer.ipython.org/github/bertdv/BMLIP/blob/master/lessons/notebooks/12-Intelligent-Agents-and-Active-Inference.ipynb)

#### Minicourse Probabilistic Programming

- 13- Linear Regression & Classification    
  - [with Monte Carlo Sampling](http://nbviewer.ipython.org/github/bertdv/BMLIP/blob/master/lessons/notebooks/probprog/Probabilistic-Programming-1-sampling.ipynb)  
  - [with Variational Inference](http://nbviewer.ipython.org/github/bertdv/BMLIP/blob/master/lessons/notebooks/probprog/Probabilistic-Programming-1-variational.ipynb)
- 14- Gaussian Mixture Model    
  - [with Monte Carlo Sampling](http://nbviewer.ipython.org/github/bertdv/BMLIP/blob/master/lessons/notebooks/probprog/Probabilistic-Programming-2-sampling.ipynb)
  - [with Variational Inference](http://nbviewer.ipython.org/github/bertdv/BMLIP/blob/master/lessons/notebooks/probprog/Probabilistic-Programming-2-variational.ipynb)       
- 15- Hidden Markov Model    
  - [with Monte Carlo Sampling](http://nbviewer.ipython.org/github/bertdv/BMLIP/blob/master/lessons/notebooks/probprog/Probabilistic-Programming-3-sampling.ipynb)  
  - [with Variational Inference](http://nbviewer.ipython.org/github/bertdv/BMLIP/blob/master/lessons/notebooks/probprog/Probabilistic-Programming-3-variational.ipynb)       
- 16- Kalman Filtering     
  - [with Monte Carlo sampling](http://nbviewer.ipython.org/github/bertdv/BMLIP/blob/master/lessons/notebooks/probprog/Probabilistic-Programming-4-sampling.ipynb)
  - [with Variational Inference](http://nbviewer.ipython.org/github/bertdv/BMLIP/blob/master/lessons/notebooks/probprog/Probabilistic-Programming-4-variational.ipynb)

#### Bonus lecture

- [17- What is Life?](/pdf/bmlip/what_is_life.pdf)

## Exam Preparation

- Each year there will be two written exam opportunities. Check the official TUE course site for exam dates.

- In preparation for the exam, we recommend that you work through the following exercises:
  - [Exercises (without solutions)](http://nbviewer.ipython.org/github/bertdv/BMLIP/blob/master/lessons/exercises/Exercises.ipynb)
  - [Exercises (with solutions)](http://nbviewer.ipython.org/github/bertdv/BMLIP/blob/master/lessons/exercises/Exercises-with-Solutions.ipynb)


- Please feel free to consult the following matrix and Gaussian cheat sheets (by Sam Roweis) when making exercises.
  - [Gaussian Identities](https://github.com/bertdv/AIP-5SSB0/raw/master/lessons/notebooks/files/RoweisS-gaussian_formulas.pdf?dl=0)
  - [Matrix Identities](https://github.com/bertdv/AIP-5SSB0/raw/master/lessons/notebooks/files/RoweisS-matrix_identities.pdf?dl=0)

- Note however that **you cannot bring notes or books to the exam. All needed formulas are supplied at the exam sheet**.

## Miscellany

- **Prerequisites for this course**: Mathematical maturity equivalent to undergraduate engineering program.
Scientific programming skills (e.g. in Python, MATLAB or [Julia](https://julialang.org)) are helpful.

- You're advised to bring the lecture notes (either in soft- or hardcopy) with you to class in order to add your personal comments.

- [Here](/pdf/bmlip/INSTALL.pdf) you can find a guide to help you install Julia and Jupyter, so that you can open and run the course notebooks on your own machine.
