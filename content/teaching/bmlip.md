+++
date = "2018-08-23T14:45:00+02:00"
external_link = ""
title = "Bayesian Machine Learning and Information Processing (5SSD0)"    
subtitle = "academic year 2020/21"    
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

<h2 style="color:red;">
Note: This site is currently under construction.
</h2>
The 2020/21 course "Bayesian Machine Learning and Information Processing" will start in November 2020 (Q2).  


<img src="/img/teaching/5SSD0-banner.png" width="1200px">

This course covers the fundamentals of a Bayesian (i.e., probabilistic) approach to machine learning and information processing systems. The Bayesian approach allows for a unified and consistent treatment of many model-based machine learning techniques. We focus on Linear Gaussian systems and will discuss many useful models and applications, including common regression and classification methods, Gaussian mixture models, hidden Markov models and Kalman filters. We will discuss important algorithms for parameter estimation in these models including the Expectation-Maximization (EM) algorithm and Variational Bayes (VB). The Bayesian method also provides tools for comparing the performance of different information processing systems by means of estimating the ``Bayesian evidence’’ for each model. We will discuss several methods for approximating Bayesian evidence. Next, we will discuss intelligent _agents_ that learn purposeful behavior from interactions with their environment. These agents are used for applications such as self-driving cars or interactive design of virtual and augmented realities. Indeed, in this course we relate synthetic Bayesian intelligent agents to natural intelligent agents such as the brain. You will be challenged to code Bayesian machine learning algorithms yourself and apply them to practical information processing problems.

<h2 style="color:red;">
News
</h2>

- [Check the Canvas website regularly](https://canvas.tue.nl/courses/16117) for new announcements. 


## Instructors

- [Prof.dr.ir. Bert de Vries](http://bertdv.nl) (email: bert.de.vries@tue.nl) is the responsible instructor for this course and teaches all [lectures with label B](#lectures).
- [Dr. Wouter Kouw](https://biaslab.github.io/member/wouter/) (w.m.kouw@tue.nl) teaches all [practical sessions on probabilistic programming with label W](#lectures).                           
- [Ismail Senoz, MSc](https://biaslab.github.io/member/ismail/) (i.senoz@tue.nl),  and [Magnus Koudahl, MSc](https://biaslab.github.io/member/magnus/) (m.t.koudahl@tue.nl) are teaching assistants. Mr. Koudahl presents the ["What is Life?"](#bonus-lecture) bonus lecture. 


## Materials

In principle, you can download all needed materials from the links below.

### Books

Please download the following books/resources:

1. [Christopher M.
Bishop](http://research.microsoft.com/en-us/um/people/cmbishop/index.htm) (2006), [Pattern Recognition and
Machine
Learning](https://www.microsoft.com/en-us/research/people/cmbishop/prml-book/). You can also buy a [hardcopy, e.g. at bol.com](https://tinyurl.com/thj7euq).
2. [Ariel Caticha](https://www.albany.edu/physics/acaticha.shtml) (2012), [Entropic Inference and the Foundations of Physics](https://github.com/bertdv/BMLIP/blob/master/lessons/notebooks/files/Caticha-2012-Entropic-Inference-and-the-Foundations-of-Physics.pdf).
3. Bert de Vries et al. (2020), [PDF bundle of lecture notes for lessons B0 through B12](/pdf/bmlip/BMLIP-5SSD0.pdf). 
    - The lecture notes may change a bit during the course, e.g., to process comments by students. A final PDF version will be posted after the last lecture.

### <a name="lectures">Lecture notes and videos</a>

The [source files for the lecture notes are accessible at github](https://github.com/bertdv/bmlip). You can view all lecture notes online through the links below: 


<table border = "1">
         <tr>
            <th rowspan = "2">Date</th>
            <th rowspan = "2">lesson</th>
            <th colspan = "2">materials</th>
         </tr>
         <tr>
            <th>lecture notes</th><th>video</th>
         </tr>
         <tr>
            <td>11-Nov-2020</td>
            <td>B0: Course Outline and Administrative Issues <br/>
            B1: Machine Learning Overview</td>
            <td><a href="http://nbviewer.ipython.org/github/bertdv/BMLIP/blob/master/lessons/notebooks/00-Course-Outline-and-Admin-Issues.ipynb">B0</a>, <a href="http://nbviewer.ipython.org/github/bertdv/BMLIP/blob/master/lessons/notebooks/01-Machine-Learning-Overview.ipynb">B1</a></td>
         </tr>
         <tr>
            <td>13-Nov-2020</td>
            <td>B2: Probability Theory Review</td>
            <td><a href="http://nbviewer.ipython.org/github/bertdv/BMLIP/blob/master/lessons/notebooks/02-Probability-Theory-Review.ipynb">B2</a>
         </tr>
         <tr>
            <td>18-Nov-2020</td>
            <td>B3: Bayesian Machine Learning</td>
            <td><a href="http://nbviewer.ipython.org/github/bertdv/BMLIP/blob/master/lessons/notebooks/03-Bayesian-Machine-Learning.ipynb">B3</a>
         </tr>
         <tr>
            <td style="color:gray;">20-Nov-2020</td>
            <td style="color:gray;">W1: Probabilistic Programming 1 - Intro Bayesian ML</td>
            <td><a href=""></a>
         </tr>
         <tr>
            <td >25-Nov-2020</td>
            <td >B4: Factor Graphs and the Sum-Product Algorithm</td>
            <td><a href="http://nbviewer.ipython.org/github/bertdv/BMLIP/blob/master/lessons/notebooks/10-Factor-Graphs.ipynb">B4</a>
         </tr>
         <tr>
            <td>27-Nov-2020</td>
            <td>B5: Continuous Data and the Gaussian Distribution</td>
            <td><a href="http://nbviewer.ipython.org/github/bertdv/BMLIP/blob/master/lessons/notebooks/04-The-Gaussian-Distribution.ipynb">B5</a>
         </tr>
         <tr>
            <td>02-Dec-2020</td>
            <td>B6: Discrete Data and the Multinomial Distribution</td>
            <td><a href="http://nbviewer.ipython.org/github/bertdv/BMLIP/blob/master/lessons/notebooks/05-The-Multinomial-Distribution.ipynb">B6</a>
         </tr>
         <tr>
            <td style="color:gray;">04-Dec-2020</td>
            <td style="color:gray;">W2: ProbProg 2 - MP & Analytical Bayesian Solutions</td>
            <td><a href=""></a>
         </tr>
         <tr>
            <td>09-Dec-2020</td>
            <td>B7: Regression</td>
            <td><a href="http://nbviewer.ipython.org/github/bertdv/BMLIP/blob/master/lessons/notebooks/06-Regression.ipynb">B7</a>
         </tr>
         <tr>
            <td>11-Dec-2020</td>
            <td>B8: Generative Classification <br/>B9: Discriminative Classification
            </td>
            <td><a href="http://nbviewer.ipython.org/github/bertdv/BMLIP/blob/master/lessons/notebooks/07-Generative-Classification.ipynb">B8</a>, <a href="http://nbviewer.ipython.org/github/bertdv/BMLIP/blob/master/lessons/notebooks/08-Discriminative-Classification.ipynb">B9</a>
         </tr>
         <tr>
            <td style="color:gray;">16-Dec-2020</td>
            <td style="color:gray;">W3: ProbProg 3 - Regression and Classification</td>
            <td><a href=""></a>
         </tr>
         <tr>
            <td>18-Dec-2020</td>
            <td>B10: Latent Variable Models and Variational Bayes</td>
            <td><a href="http://nbviewer.ipython.org/github/bertdv/BMLIP/blob/master/lessons/notebooks/09-Latent-Variable-Models-and-VB.ipynb">B10</a>
         </tr>
         <tr>
            <td colspan="4">break</td>
         </tr>
         <tr>
            <td>06-Jan-2021</td>
            <td>B11: Dynamic Models</td>
            <td><a href="http://nbviewer.ipython.org/github/bertdv/BMLIP/blob/master/lessons/notebooks/11-Dynamic-Models.ipynb">B11</a>
         </tr>
         <tr>
            <td>08-Jan-2020</td>
            <td>B12: Intelligent Agents and Active Inference</td>
            <td><a href="http://nbviewer.ipython.org/github/bertdv/BMLIP/blob/master/lessons/notebooks/12-Intelligent-Agents-and-Active-Inference.ipynb">B12</a>
         </tr>
         <tr>
            <td style="color:gray;">13-Jan-2020</td>
            <td style="color:gray;">W4: ProbProg 4: Latent Variable and Dynamic Models</td>
            <td><a href=""></a>
         </tr>
         <tr>
            <td>15-Jan-2020</td>
            <td>M1: Bonus Lecture: What is Life?</td>
            <td><a href="/pdf/bmlip/what_is_life.pdf">M1</a>
         </tr>
      </table>

##  

<!---
- B0 - Course Outline and Administrative Issues ([notes](http://nbviewer.ipython.org/github/bertdv/BMLIP/blob/master/lessons/notebooks/00-Course-Outline-and-Admin-Issues.ipynb), [video]())
##

- B1 - Machine Learning Overview ([notes](http://nbviewer.ipython.org/github/bertdv/BMLIP/blob/master/lessons/notebooks/01-Machine-Learning-Overview.ipynb))     
- B2 - Probability Theory Review ([notes](http://nbviewer.ipython.org/github/bertdv/BMLIP/blob/master/lessons/notebooks/02-Probability-Theory-Review.ipynb))
- B3 - Bayesian Machine Learning ([notes](http://nbviewer.ipython.org/github/bertdv/BMLIP/blob/master/lessons/notebooks/03-Bayesian-Machine-Learning.ipynb))

- W1 - _Probabilistic Programming: Introduction Bayesian Machine Learning_ ([notes]())
##

- B4 - Factor Graphs and the Sum-Product Algorithm ([notes](http://nbviewer.ipython.org/github/bertdv/BMLIP/blob/master/lessons/notebooks/10-Factor-Graphs.ipynb))
- B5 - Continuous Data and the Gaussian Distribution ([notes](http://nbviewer.ipython.org/github/bertdv/BMLIP/blob/master/lessons/notebooks/04-The-Gaussian-Distribution.ipynb))
- B6 - Discrete Data and the Multinomial Distribution ([notes](http://nbviewer.ipython.org/github/bertdv/BMLIP/blob/master/lessons/notebooks/05-The-Multinomial-Distribution.ipynb))
- W2 - _Probabilistic Programming: Message Passing and Analytical Bayesian Solutions_ ([notes]())

##

- B7 - Regression ([notes](http://nbviewer.ipython.org/github/bertdv/BMLIP/blob/master/lessons/notebooks/06-Regression.ipynb))
- B8 - Generative Classification ([notes](http://nbviewer.ipython.org/github/bertdv/BMLIP/blob/master/lessons/notebooks/07-Generative-Classification.ipynb))
- B9 - Discriminative Classification ([notes](http://nbviewer.ipython.org/github/bertdv/BMLIP/blob/master/lessons/notebooks/08-Discriminative-Classification.ipynb))
- W3 - _Probabilistic Programming: Regression and Classification_ ([notes]())

##

- B10 - Latent Variable Models and Variational Bayes ([notes](http://nbviewer.ipython.org/github/bertdv/BMLIP/blob/master/lessons/notebooks/09-Latent-Variable-Models-and-VB.ipynb))
- B11- Dynamic Models ([notes](http://nbviewer.ipython.org/github/bertdv/BMLIP/blob/master/lessons/notebooks/11-Dynamic-Models.ipynb))
- B12- Intelligent Agents and Active Inference ([notes](http://nbviewer.ipython.org/github/bertdv/BMLIP/blob/master/lessons/notebooks/12-Intelligent-Agents-and-Active-Inference.ipynb))
- W4 - _Probabilistic Programming: Latent Variable and Dynamic Models_ ([notes]())

##

- <a name="bonus-lecture">M1- Bonus Lecture: What is Life?</a> ([notes](/pdf/bmlip/what_is_life.pdf))

--->

##


<!---
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
--->

## Oral Exam Guide

Each year there will be two exam opportunities. Check the official TUE course site for exam schedules.  In the Q2-2020 course, your performance will be assessed by an <span style="color:red;">ORAL EXAMINATION</span>, which (very likely) will take place in a video call. 

An exam session lasts about 30 minutes and will be recorded (and later deleted, following GDPR rules). At the beginning of the session, the examiner needs to check your identity, preferably by your campus card. 

The style of the examination is conversational. We like to engage in a conversation with you about what you learned in the class. In general, oral exams do not lend themselves well to proofing theorems or other deep mathematical manipulations. Instead, the focus is more on testing if you understand the conceptual ideas in this class. In principle, everything that has been presented in the lecture notes and videos is fair game as an exam question, including programming questions from the probabilistic programming sessions. 

Please review the [Oral Exam Example notebook](https://nbviewer.jupyter.org/github/bertdv/BMLIP/blob/master/lessons/exercises/Oral-Exam-Example.ipynb (Links to an external site.)) to get an idea of what kind of questions will be asked.

The first question of the exam will be an open question: "You get 5 minutes to tell me about what you learned in this class. You can fill in the 5 minutes as you like but try to impress me with your knowledge or insights. E.g., talk about probabilistic modelling, how it works, what are strong aspects or weak aspects of the approach, etc." After the first question, the rest of the exam will be focused at topics selected by the examiner. 

### exercises
Prior to 2020, this course was evaluated by a written exam. In an written exam, the focus is a bit more on computational skills than in an oral exam. Still, we recommend that you work through the following exercises to test your understanding of the materials:
  - [Exercises (without solutions)](http://nbviewer.ipython.org/github/bertdv/BMLIP/blob/master/lessons/exercises/Exercises.ipynb)
  - [Exercises (with solutions)](http://nbviewer.ipython.org/github/bertdv/BMLIP/blob/master/lessons/exercises/Exercises-with-Solutions.ipynb)

Please feel free to consult the following matrix and Gaussian cheat sheets (by Sam Roweis) when doing the exercises.
  - [Gaussian Identities](https://github.com/bertdv/AIP-5SSB0/raw/master/lessons/notebooks/files/RoweisS-gaussian_formulas.pdf?dl=0)
  - [Matrix Identities](https://github.com/bertdv/AIP-5SSB0/raw/master/lessons/notebooks/files/RoweisS-matrix_identities.pdf?dl=0)

<!---
- Note however that **you cannot bring notes or books to the exam. All needed formulas are supplied at the exam sheet**.
--->

## Miscellany

- **Prerequisites for this course**: Mathematical maturity equivalent to undergraduate engineering program.
Scientific programming skills (e.g. in Python, MATLAB or [Julia](https://julialang.org)) are helpful.

- [Here is a guide](/pdf/bmlip/INSTALL.pdf) to help you install Julia and Jupyter, so that you can open and run the course notebooks on your own machine.
