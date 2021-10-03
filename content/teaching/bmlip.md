+++
date = "2018-08-23T14:45:00+02:00"
external_link = ""
title = "Bayesian Machine Learning and Information Processing (5SSD0)"    
subtitle = "academic year 2021/22"    
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

[[participants]]
    name = "Magnus Koudahl"
    is_member = true
    id = "magnus"
    position = 3

+++


<h2 style="color:red;">
Note: This site is currently under construction.
</h2>


The 2021/22 course "Bayesian Machine Learning and Information Processing" will start in November 2021 (Q2).  


<img src="/img/teaching/5SSD0-banner.png" width="1200px">

### Course goals
This course provides an introduction to Bayesian machine learning and information processing systems. The Bayesian approach affords a unified and consistent treatment of many useful information processing systems.

### Course summary
This course covers the fundamentals of a Bayesian (i.e., probabilistic) approach to machine learning and information processing systems. The Bayesian approach allows for a unified and consistent treatment of many model-based machine learning techniques. Initially, we focus on Linear Gaussian systems and will discuss many useful models and applications, including common regression and classification methods, Gaussian mixture models, hidden Markov models and Kalman filters. We will discuss important algorithms for parameter estimation in these models including the Expectation-Maximization (EM) algorithm and Variational Bayes (VB). The Bayesian method also provides tools for comparing the _performance_ of different information processing systems by means of estimating the _Bayesian evidence_ for each model. We will discuss several methods for approximating Bayesian evidence. Next, we will discuss intelligent _agents_ that learn purposeful behavior from interactions with their environment. These agents are used for applications such as self-driving cars or interactive design of virtual and augmented realities. Indeed, in this course we relate synthetic Bayesian intelligent agents to natural intelligent agents such as the brain. You will be challenged to code Bayesian machine learning algorithms yourself and apply them to practical information processing problems.



<h2 style="color:red;">
News and Announcements
</h2>

- As much as possible we use the [Piazza course site](https://piazza.com/class/ku2o9c3f71a4px) for new announcements. 


## Instructors

- [Prof.dr.ir. Bert de Vries](http://bertdv.nl) (email: bert.de.vries@tue.nl) is the responsible instructor for this course and teaches all [lectures with label B](#lectures).
- [Dr. Wouter Kouw](https://biaslab.github.io/member/wouter/) (w.m.kouw@tue.nl) teaches all [practical sessions on probabilistic programming with label W](#lectures).                           
- [Magnus Koudahl, MSc](https://biaslab.github.io/member/magnus/) (m.t.koudahl@tue.nl) is the teaching assistant. Mr. Koudahl presents the ["What is Life?"](#bonus-lecture) bonus lecture. 


## Materials

In principle, you can download all needed materials from the links below.

### Books

Please download the following books/resources:

1. [Christopher M.
Bishop](http://research.microsoft.com/en-us/um/people/cmbishop/index.htm) (2006), [Pattern Recognition and
Machine
Learning](https://www.microsoft.com/en-us/research/people/cmbishop/prml-book/). You can also buy a [hardcopy, e.g. at bol.com](https://tinyurl.com/thj7euq).
2. [Ariel Caticha](https://www.albany.edu/physics/acaticha.shtml) (2012), [Entropic Inference and the Foundations of Physics](https://github.com/bertdv/BMLIP/blob/master/lessons/notebooks/files/Caticha-2012-Entropic-Inference-and-the-Foundations-of-Physics.pdf).
3. <span style="color:red;"> Under Construction:</span> Bert de Vries et al. (2020), [PDF bundle of lecture notes for lessons B0 through B12 (Ed. Q3-2019/20)](https://github.com/bertdv/BMLIP/blob/master/lessons/notebooks/files/5SSD0-Mar2020-Lecture-notes.pdf?dl=0). 
    - The lecture notes may change a bit during the course, e.g., to process comments by students. A final PDF version will be posted after the last lecture.
4. <span style="color:red;"> Under Construction:</span> Wouter Kouw (2020), [Julia and Jupyter Install Guide](https://github.com/bertdv/BMLIP/blob/master/lessons/notebooks/files/WKouw-Mar2020-JuliaJupyterInstallGuide.pdf?dl=0). 
    - Use this guide if you need help to install [Julia](https://julialang.org) and [Jupyter](https://jupyter.org/), so that you can open and run the course notebooks on your own machine.
    - You can test your installation by running the notebook called "Probabilistic-Programming-0.ipynb", which can be downloaded from [github](https://github.com/bertdv/bmlip) (under `lessons/notebooks/probprog`). [Here](https://www.youtube.com/watch?v=BWGTudg3xlI) is a video with step-by-step instructions on opening course notebooks.

### <a name="lectures">Lecture notes, videos and exercises</a>

<!--- The [source files for the lecture notes are accessible on github](https://github.com/bertdv/bmlip). If you want to download them, click the green `Code` button and then `Download ZIP`. The theory lectures are under `lessons/notebooks` and the programming notebooks are under `lessons/notebooks/probprog`. Note that you don't have to download them, --->

You can access all lecture notes, videos and exercises online through the links below:

<table border = "1"; style="text-align:center"; vertical-align: middle;>
         <tr>
            <th rowspan = "2"; style="text-align:center">Date</th>
            <th rowspan = "2"; style="text-align:center">lesson</th>
            <th colspan = "4"; style="text-align:center">materials</th>
         </tr>
         <tr>
            <th style="text-align:center">video guides</th>
            <th style="text-align:center">lecture notes</th>
            <th style="text-align:center">live class (2020)</th>
            <th style="text-align:center">exercises</th>
         </tr>
         <tr>
            <td>17-Nov-2021</td>
            <td>B0: Course Syllabus and Administrative Issues <br/>
            B1: Machine Learning Overview</td>
            <td><a href="https://youtu.be/pvDZWAJ9YMM">B1</a></td>
            <td><a href="http://nbviewer.jupyter.org/github/bertdv/BMLIP/blob/master/lessons/notebooks/Course-Outline-and-Admin-Issues.ipynb">B0</a>, <a href="http://nbviewer.jupyter.org/github/bertdv/BMLIP/blob/master/lessons/notebooks/Machine-Learning-Overview.ipynb">B1</a></td>
            <td><a href="https://youtu.be/B5Spow5Flrs">B0</a></td>
            <td></td>
         </tr>
         <tr>
            <td>19-Nov-2021</td>
            <td>B2: Probability Theory Review</td>
            <td><a href="https://youtu.be/uaKD8mZZnO8">B2.1</a>, <a href="https://youtu.be/YqXkSb8updg">B2.2</a></td>
            <td><a href="http://nbviewer.jupyter.org/github/bertdv/BMLIP/blob/master/lessons/notebooks/Probability-Theory-Review.ipynb">B2</a></td>
            <td><a href="https://youtu.be/eYB3yFA2wUs">B2</a></td>
            <td><a href="http://nbviewer.jupyter.org/github/bertdv/BMLIP/blob/master/lessons/exercises/Exercises-Probability-Theory-Review.ipynb">B2-ex</a><br/> <a href="http://nbviewer.jupyter.org/github/bertdv/BMLIP/blob/master/lessons/exercises/Solutions-Probability-Theory-Review.ipynb">B2-sol</a></td>
         </tr>
         <tr>
            <td>24-Nov-2021</td>
            <td>B3: Bayesian Machine Learning</td>
            <td><a href="https://youtu.be/fw1lS0XsHrI">B3.1</a>, <a href="https://youtu.be/W5PlzDADdxE">B3.2</a></td>
            <td><a href="http://nbviewer.jupyter.org/github/bertdv/BMLIP/blob/master/lessons/notebooks/Bayesian-Machine-Learning.ipynb">B3</a></td>
            <td><a href="https://youtu.be/SE6STt-Y8MY">B3</a></td>
            <td><a href="http://nbviewer.jupyter.org/github/bertdv/BMLIP/blob/master/lessons/exercises/Exercises-Bayesian-Machine-Learning.ipynb">B3-ex</a><br/> <a href="http://nbviewer.jupyter.org/github/bertdv/BMLIP/blob/master/lessons/exercises/Solutions-Bayesian-Machine-Learning.ipynb">B3-sol</a></td>
         </tr>
         <tr>
            <td style="color:gray;">26-Nov-2021</td>
            <td style="color:gray;">W1: Probabilistic Programming 1 - Intro Bayesian ML</td>
            <td><a href="https://www.youtube.com/watch?v=2F39JxEOM0Q">W1.1</a>, <a href="https://www.youtube.com/watch?v=OoKPEteSEiA">W1.2</a>,  <a href="https://www.youtube.com/watch?v=JIY0FMd9JoE">W1.3</a></td>
            <td><a href="http://nbviewer.jupyter.org/github/bertdv/BMLIP/blob/master/lessons/notebooks/probprog/Probabilistic-Programming-1.ipynb">W1</a></td>
            <td><a href="https://www.youtube.com/watch?v=CRsDGLTAS04">W1</a></td>
            <td></td>
         </tr>
         <tr>
            <td >01-Dec-2021</td>
            <td >B4: Factor Graphs and the Sum-Product Algorithm</td>
            <td><a href="https://youtu.be/YaYJpoi9Iy0">B4</a></td>
            <td><a href="http://nbviewer.jupyter.org/github/bertdv/BMLIP/blob/master/lessons/notebooks/Factor-Graphs.ipynb">B4</a></td>
            <td><a href="https://youtu.be/r3F3pGIzGyE">B4</a></td>
            <td></td>
         </tr>
         <tr>
            <td>03-Dec-2021</td>
            <td>B5: Continuous Data and the Gaussian Distribution</td>
            <td><a href="https://youtu.be/DwUX1OOZGfM">B5.1</a>, <a href="https://youtu.be/h6y0vZnPI2s">B5.2</a>, <a href="https://youtu.be/yP1_gPso5Xg">B5.3</a></td>
            <td><a href="http://nbviewer.jupyter.org/github/bertdv/BMLIP/blob/master/lessons/notebooks/The-Gaussian-Distribution.ipynb">B5</a></td>
            <td><a href="https://youtu.be/NDy3z3iVDcw">B5</a></td>
            <td><a href="http://nbviewer.jupyter.org/github/bertdv/BMLIP/blob/master/lessons/exercises/Exercises-The-Gaussian-Distribution.ipynb">B5-ex</a><br/> <a href="http://nbviewer.jupyter.org/github/bertdv/BMLIP/blob/master/lessons/exercises/Solutions-The-Gaussian-Distribution.ipynb">B5-sol</a></td>
         </tr>
         <tr>
            <td>08-Dec-2021</td>
            <td>B6: Discrete Data and the Multinomial Distribution</td>
            <td><a href="https://youtu.be/70gVEt4AexA">B6</a></td>
            <td><a href="http://nbviewer.jupyter.org/github/bertdv/BMLIP/blob/master/lessons/notebooks/The-Multinomial-Distribution.ipynb">B6</a></td>
            <td><a href="https://youtu.be/cu9YE_kb420">B6</a>, <a href="https://youtu.be/eYQT8DeUghw">review B1-B6</a></td>
            <td><a href="http://nbviewer.jupyter.org/github/bertdv/BMLIP/blob/master/lessons/exercises/Exercises-The-Multinomial-Distribution.ipynb">B6-ex</a><br/> <a href="http://nbviewer.jupyter.org/github/bertdv/BMLIP/blob/master/lessons/exercises/Solutions-The-Multinomial-Distribution.ipynb">B6-sol</a></td>
         </tr>
         <tr>
            <td style="color:gray;">10-Dec-2021</td>
            <td style="color:gray;">W2: ProbProg 2 - MP & Analytical Bayesian Solutions</td>
            <td><a href="https://www.youtube.com/watch?v=JV09zAZ99dk">W2.1</a>, <a href="https://www.youtube.com/watch?v=bKgbNFouEiY">W2.2</a>,  <a href="https://www.youtube.com/watch?v=xqWUKsfuUdk">W2.3</a></td>
            <td><a href="http://nbviewer.jupyter.org/github/bertdv/BMLIP/blob/master/lessons/notebooks/probprog/Probabilistic-Programming-2.ipynb">W2</a></td>
            <td><a href="https://www.youtube.com/watch?v=0-IjsJa-cH8">W2</a></td>
            <td></td>
         </tr>
         <tr>
            <td>15-Dec-2021</td>
            <td>B7: Regression</td>
            <td><a href="https://youtu.be/XhZ7tSQS-ng">B7</a></td>
            <td><a href="http://nbviewer.jupyter.org/github/bertdv/BMLIP/blob/master/lessons/notebooks/Regression.ipynb">B7</a></td>
            <td><a href="https://youtu.be/pap9troKaeM">B7</a></td>
            <td><a href="http://nbviewer.jupyter.org/github/bertdv/BMLIP/blob/master/lessons/exercises/Exercises-Regression.ipynb">B7-ex</a><br/> <a href="http://nbviewer.jupyter.org/github/bertdv/BMLIP/blob/master/lessons/exercises/Solutions-Regression.ipynb">B7-sol</a></td>
         </tr>
         <tr>
            <td>17-Dec-2021</td>
            <td>B8: Generative Classification <br/>B9: Discriminative Classification
            </td>
            <td><a href="https://youtu.be/_gSZGWTx1xc">B8</a>, <a href="https://youtu.be/TpfqSf0wbBE">B9</a></td>
            <td><a href="http://nbviewer.jupyter.org/github/bertdv/BMLIP/blob/master/lessons/notebooks/Generative-Classification.ipynb">B8</a>, <a href="http://nbviewer.jupyter.org/github/bertdv/BMLIP/blob/master/lessons/notebooks/Discriminative-Classification.ipynb">B9</a></td>
            <td><a href="https://youtu.be/4wjkUR3NvkU">B8-9</a></td>
            <td><a href="http://nbviewer.jupyter.org/github/bertdv/BMLIP/blob/master/lessons/exercises/Exercises-Classification.ipynb">B8-9-ex</a><br/> <a href="http://nbviewer.jupyter.org/github/bertdv/BMLIP/blob/master/lessons/exercises/Solutions-Classification.ipynb">B8-9-sol</a></td>
         </tr>
         <tr>
            <td style="color:gray;">22-Dec-2021</td>
            <td style="color:gray;">W3: ProbProg 3 - Regression and Classification</td>
            <td><a href="https://www.youtube.com/watch?v=yls2d3HMm28">W3.1</a>, <a href="https://www.youtube.com/watch?v=Q4f6S503e5I">W3.2</a></td>
            <td><a href="http://nbviewer.jupyter.org/github/bertdv/BMLIP/blob/master/lessons/notebooks/probprog/Probabilistic-Programming-3.ipynb">W3</a></td>
            <td><a href="https://www.youtube.com/watch?v=sAU2zspDQU8">W3</a></td>
            <td></td>
         </tr>
         <tr>
            <td>24-Dec-2021</td>
            <td>B10: Latent Variable Models and Variational Bayes</td>
            <td><a href="https://youtu.be/o7evWBxSiHo">B10</a></td>
            <td><a href="http://nbviewer.jupyter.org/github/bertdv/BMLIP/blob/master/lessons/notebooks/Latent-Variable-Models-and-VB.ipynb">B10</a></td>
            <td><a href="https://youtu.be/YZ6WoaJFVfg">B10</a></td>
            <td><a href="http://nbviewer.jupyter.org/github/bertdv/BMLIP/blob/master/lessons/exercises/Exercises-Latent-Variable-Models-and-VB.ipynb">B10-ex</a><br/> <a href="http://nbviewer.jupyter.org/github/bertdv/BMLIP/blob/master/lessons/exercises/Solutions-Latent-Variable-Models-and-VB.ipynb">B10-sol</a></td>
         </tr>
         <tr style="color:blue;">
            <td colspan="6">break</td>
         </tr>
         <tr>
            <td>12-Jan-2022</td>
            <td>B11: Dynamic Models</td>
            <td><a href="https://youtu.be/-jMq9gl59pA">B11</a></td>
            <td><a href="http://nbviewer.jupyter.org/github/bertdv/BMLIP/blob/master/lessons/notebooks/Dynamic-Models.ipynb">B11</a></td>
            <td><a href="https://youtu.be/S3t-LD0prQs">B11</a></td>
            <td><a href="http://nbviewer.jupyter.org/github/bertdv/BMLIP/blob/master/lessons/exercises/Exercises-Dynamic-Models.ipynb">B11-ex</a><br/> <a href="http://nbviewer.jupyter.org/github/bertdv/BMLIP/blob/master/lessons/exercises/Solutions-Dynamic-Models.ipynb">B11-sol</a></td>
         </tr>
         <tr>
            <td>14-Jan-2022</td>
            <td>B12: Intelligent Agents and Active Inference</td>
            <td><a href="https://youtu.be/Ln0aq11YBzQ">B12</a></td>
            <td><a href="http://nbviewer.jupyter.org/github/bertdv/BMLIP/blob/master/lessons/notebooks/Intelligent-Agents-and-Active-Inference.ipynb">B12</a></td>
            <td><a href="https://youtu.be/FWYC8msl_yI">B12</a></td>
            <td><a href="http://nbviewer.jupyter.org/github/bertdv/BMLIP/blob/master/lessons/exercises/Exercises-Intelligent-Agents-and-Active-Inference.ipynb">B12-ex</a><br/> <a href="http://nbviewer.jupyter.org/github/bertdv/BMLIP/blob/master/lessons/exercises/Solutions-Intelligent-Agents-and-Active-Inference.ipynb">B12-sol</a></td>
         </tr>
         <tr>
            <td style="color:gray;">19-Jan-2022</td>
            <td style="color:gray;">W4: ProbProg 4: Latent Variable and Dynamic Models</td>
            <td><a href="https://youtu.be/UzUvkFMOlhk">W4.1</a>, <a href="https://youtu.be/47wGVzgS7Ys">W4.2</a>, <a href="https://youtu.be/ArHXwRLvhN8">W4.3</a></td>
            <td><a href="http://nbviewer.jupyter.org/github/bertdv/BMLIP/blob/master/lessons/notebooks/probprog/Probabilistic-Programming-4.ipynb">W4</a></td>
            <td><a href="https://youtu.be/Ik1N38sZCVs">PP4</a></td>
            <td></td>
         </tr>
         <tr>
            <td>21-Jan-2022</td>
            <td>M1: Bonus Lecture: What is Life?</td>
            <td><a href=""></a></td>
            <td><a href="https://github.com/bertdv/BMLIP/raw/master/lessons/notebooks/MKoudahl-March2020-What-is-life.pdf?dl=0">M1</a></td>
            <td><a href="https://youtu.be/6X8ckt0l99o">M1</a></td>
            <td></td>
         </tr>
         <tr style="color:blue;">
            <td >03-Feb-2022</td>
            <td colspan="5">written examination (13:30-16:30)</td>
         </tr>
         <tr style="color:blue;">
            <td >22-Apr-2022</td>
            <td colspan="5">resit written examination (18:00-21:00)</td>
         </tr>
      </table>


Furthermore, Q&A for each lesson can  be accessed at the [Piazza course site](https://piazza.com/class/ku2o9c3f71a4px).

## Class logistics 

Here's our recommendation on how to study for this class. Before each lecture:
  - first watch the video guide for that lecture (2nd column in above table)
  - then study the lecture notes (3rd column)
  - then (optionally), watch the live class recording from the previous (2020/21) edition (in 4th colum)
  - then try to make the exercises (5th column) for that class. Feel free to use this <a href="http://nbviewer.jupyter.org/github/bertdv/BMLIP/blob/master/lessons/exercises/cheatsheet.ipynb">cheatsheet</a> to make the exercises.
  - If you have any remaining issues or questions, please pose your question in piazza. Your questions will be answered at the piazza site by fellow students and accorded (or corrected, amended) by the teaching staff.  

The live classes in this edition of 5SSD0 are (optional) flipped classroom-style Q&A sessions, where we discuss any issues in person. This year the live class sessions are not recorded so you will not be able to view them later. We do not intend to present new materials in the live classes, so in principle, the materials in the above table should suffice as preparation for the written exam.    

## Exam Guide

Each year there will be two written exam opportunities. **You cannot bring notes or books to the written exam sessions. All needed formulas are supplied at the exam sheet**.

### Preparation
In addition to the materials in the above table, we provide two representative practice written exams:
- 2021-01-18: <a href="https://github.com/bertdv/BMLIP/raw/master/exams/20210128-5SSD0-exam-A.pdf?dl=0">exam A</a>, <a href="https://github.com/bertdv/BMLIP/raw/master/exams/20210128-5SSD0-solutions-A.pdf?dl=0">solutions A</a>; <a href="https://github.com/bertdv/BMLIP/raw/master/exams/20210128-5SSD0-exam-B.pdf?dl=0">exam B</a>, <a href="https://github.com/bertdv/BMLIP/raw/master/exams/20210128-5SSD0-solutions-B.pdf?dl=0">solutions B</a>
- 2021-04-15: <a href="https://github.com/bertdv/BMLIP/raw/master/exams/20210415-5SSD0-exam.pdf?dl=0">exam</a>, <a href="https://github.com/bertdv/BMLIP/raw/master/exams/20210415-5SSD0-solutions.pdf?dl=0">solutions</a>

### Grading

<span style="color:red;"> Under Construction:</span>

<!---
### Exercises

 Prior to 2020, this course was evaluated by a written exam. In an written exam, the focus is a bit more on computational skills than in an oral exam.

In preparation for the exam, we recommend that you work through the following exercises to test your understanding of the materials:

  - [Exercises (without solutions)](http://nbviewer.jupyter.org/github/bertdv/BMLIP/blob/master/lessons/exercises/Exercises.ipynb)
  - [Exercises (with solutions)](http://nbviewer.jupyter.org/github/bertdv/BMLIP/blob/master/lessons/exercises/Exercises-with-Solutions.ipynb)

Please feel free to consult the following matrix and Gaussian cheat sheets (by Sam Roweis) when doing the exercises.
  - [Gaussian Identities](https://github.com/bertdv/BMLIP/raw/master/lessons/notebooks/files/Roweis-1999-gaussian-identities.pdf?dl=0)
  - [Matrix Identities](https://github.com/bertdv/BMLIP/raw/master/lessons/notebooks/files/Roweis-1999-matrix-identities.pdf?dl=0)

--->

<!--- An exam session lasts about 30 minutes and will be recorded (and later deleted, following GDPR rules). At the beginning of the session, the examiner needs to check your identity, preferably by your campus card. 

The style of the examination is conversational. We like to engage in a conversation with you about what you learned in the class. In general, oral exams do not lend themselves well to proofing theorems or other deep mathematical manipulations. Instead, the focus is more on testing if you understand the conceptual ideas in this class. In principle, everything that has been presented in the lecture notes and videos is fair game as an exam question, including programming questions from the probabilistic programming sessions. 

Please review the [Oral Exam Example notebook](https://nbviewer.jupyter.org/github/bertdv/BMLIP/blob/master/lessons/exercises/Oral-Exam-Example.ipynb (Links to an external site.)) to get an idea of what kind of questions will be asked.

The first question of the exam will be an open question: "You get 5 minutes to tell me about what you learned in this class. You can fill in the 5 minutes as you like but try to impress me with your knowledge or insights. E.g., talk about probabilistic modelling, how it works, what are strong aspects or weak aspects of the approach, etc." After the first question, the rest of the exam will be focused at topics selected by the examiner. 
--->



