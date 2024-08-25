+++
date = "2018-08-23T14:45:00+02:00"
external_link = ""
title = "Bayesian Machine Learning and Information Processing (5SSD0)"
subtitle = "academic year 2024/25"
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


The course "Bayesian Machine Learning and Information Processing" starts in November 2024 (Q2).

<img src="/img/teaching/5SSD0-banner.png" width="1200px">

### Course goals
This course provides an introduction to Bayesian machine learning and information processing systems. The Bayesian approach affords a unified and consistent treatment of many useful information processing systems.

### Course summary
This course covers the fundamentals of a Bayesian (i.e., probabilistic) approach to machine learning and information processing systems. The Bayesian approach allows for a unified and consistent treatment of many model-based machine learning techniques. Initially, we focus on Linear Gaussian systems and will discuss many useful models and applications, including common regression and classification methods, Gaussian mixture models, hidden Markov models and Kalman filters. We will discuss important algorithms for parameter estimation in these models including the _Variational Bayes_ method. The Bayesian method also provides tools for comparing the _performance_ of different information processing systems by means of estimating the _Bayesian evidence_ for each model. We will discuss several methods for approximating Bayesian evidence. Next, we will discuss intelligent _agents_ that learn purposeful behavior from interactions with their environment. These agents are used for applications such as self-driving cars or interactive design of virtual and augmented realities. Indeed, in this course we relate synthetic Bayesian intelligent agents to natural intelligent agents such as the brain. You will be challenged to code Bayesian machine learning algorithms yourself and apply them to practical information processing problems.



<h2 style="color:red;">
News and Announcements
</h2>

- (15-Nov-2023) Please sign up for Piazza (Q&A platform) at [signup link](https://piazza.com/tue.nl/winter2024/5ssd0). As much as possible we will use the Piazza site for new announcements as well.

## Instructors

- [Prof.dr.ir. Bert de Vries](http://bertdv.nl) (email: bert.de.vries@tue.nl) is the responsible instructor for this course and teaches the [lectures with label B](#lectures).
- [Dr. Wouter Kouw](https://biaslab.github.io/member/wouter/) (w.m.kouw@tue.nl) teaches the probabilistic programming [lectures with label W](#lectures).
- [Tim Nisslbeck](https://biaslab.github.io/member/tim), [Sepideh Adamiat](https://biaslab.github.io/member/sepideh) and [Wouter Nuijten](https://biaslab.github.io/member/woutern) are the teaching assistants.

## Materials

In principle, you can download all needed materials from the links below.

### Lecture Notes

The lecture notes are mandatory material for the exam:

- Bert de Vries (2023), [PDF bundle of all lecture notes for lessons B0 through B12](https://github.com/bertdv/BMLIP/blob/master/output/BMLIP-5SSD0-lecture-notes.pdf).
- Wouter Kouw (2023), [PDF bundle of all probabilistic programming lecture notes for lessons W1 through W4](https://github.com/bertdv/BMLIP/blob/master/output/BMLIP-5SSD0-prob-prog.pdf).


### Books

The following books are optional but very useful for additional reading:

- [Christopher M.
Bishop](http://research.microsoft.com/en-us/um/people/cmbishop/index.htm) (2006), [Pattern Recognition and
Machine
Learning](https://www.microsoft.com/en-us/research/people/cmbishop/prml-book/). You can also buy a [hardcopy, e.g. at bol.com](https://tinyurl.com/thj7euq).
- [Ariel Caticha](https://www.albany.edu/physics/acaticha.shtml) (2012), [Entropic Inference and the Foundations of Physics](https://github.com/bertdv/BMLIP/blob/master/lessons/notebooks/files/Caticha-2012-Entropic-Inference-and-the-Foundations-of-Physics.pdf).

### Software

- Please install Microsoft's VS Code editor ([download](https://code.visualstudio.com/Download)) and add the Jupyter notebook extension ([tutorial](https://code.visualstudio.com/learn/educators/notebooks)).
- Please install Julia <b>version 1.9</b> ([download](https://julialang.org/downloads/)) on your machine and then add the Julia extension in VS Code ([tutorial](https://code.visualstudio.com/docs/languages/julia)).


### <a name="lectures">Lecture notes, exercises, assignment and video recordings</a>

<!--- The [source files for the lecture notes are accessible on github](https://github.com/bertdv/bmlip). If you want to download them, click the green `Code` button and then `Download ZIP`. The theory lectures are under `lessons/notebooks` and the programming notebooks are under `lessons/notebooks/probprog`. Note that you don't have to download them, --->

You can access all lecture notes, videos and exercises online through the links below:

<table border = "1"; style="text-align:center"; vertical-align: middle;>
         <tr>
            <th rowspan = "2"; style="text-align:center">Date</th>
            <th rowspan = "2"; style="text-align:center">lesson</th>
            <th colspan = "4"; style="text-align:center">materials</th>
         </tr>
         <tr>
            <th style="text-align:center">lecture notes</th>
            <th style="text-align:center">exercises</th>
            <th style="text-align:center">assignments</th>
            <th style="text-align:center">video recordings</th>
         </tr>
         <tr>
            <td>13-Nov-2024 (Wednesday)</td>
            <td>B0: Course Syllabus<br/>
            B1: Machine Learning Overview</td>
            <td><a href="http://nbviewer.jupyter.org/github/bertdv/BMLIP/blob/master/lessons/notebooks/Course-Syllabus.ipynb">B0</a>, <a href="http://nbviewer.jupyter.org/github/bertdv/BMLIP/blob/master/lessons/notebooks/Machine-Learning-Overview.ipynb">B1</a></td>
            <td></td>
            <td></td>
            <td> <a href="https://youtu.be/GtukVrtcXe8">B0</a>,  <a href="https://youtu.be/mPc3j7XgZHM">B1</a></td>
         </tr>
         <tr style="color:green;">
            <td>15-Nov-2024</td>
            <td>Introduction to Julia</td>
            <td><a href="">W0</a></td>
            <td></td>
            <td></td>
            <td></td>
         </tr>
         <tr>
            <td>20-Nov-2024</td>
            <td>B2: Probability Theory Review</td>
            <td><a href="http://nbviewer.jupyter.org/github/bertdv/BMLIP/blob/master/lessons/notebooks/Probability-Theory-Review.ipynb">B2</a></td>
            <td><a href="http://nbviewer.jupyter.org/github/bertdv/BMLIP/blob/master/lessons/exercises/Exercises-Probability-Theory-Review.ipynb">B2-ex</a><br/> <a href="http://nbviewer.jupyter.org/github/bertdv/BMLIP/blob/master/lessons/exercises/Solutions-Probability-Theory-Review.ipynb">B2-sol</a></td>
            <td></td>
            <td><a href="https://youtu.be/PGbN5rv6HL4">B2.1</a>, <a href="https://youtu.be/LKh2ypFVGwY">B2.2</a></td>
         </tr>
         <tr>
            <td>22-Nov-2024</td>
            <td>B3: Bayesian Machine Learning</td>
            <td><a href="http://nbviewer.jupyter.org/github/bertdv/BMLIP/blob/master/lessons/notebooks/Bayesian-Machine-Learning.ipynb">B3</a></td>
            <td><a href="http://nbviewer.jupyter.org/github/bertdv/BMLIP/blob/master/lessons/exercises/Exercises-Bayesian-Machine-Learning.ipynb">B3-ex</a><br/> <a href="http://nbviewer.jupyter.org/github/bertdv/BMLIP/blob/master/lessons/exercises/Solutions-Bayesian-Machine-Learning.ipynb">B3-sol</a></td>
            <td></td>
            <td> <a href="https://youtu.be/OPGrqnnEfU0">B3.1</a>, <a href="https://youtu.be/BOUmzY1Nx5g">B3.2</a> </td>
         </tr>
         <tr>
            <td >27-Nov-2024</td>
            <td >B4: Factor Graphs and the Sum-Product Algorithm</td>
            <td><a href="http://nbviewer.jupyter.org/github/bertdv/BMLIP/blob/master/lessons/notebooks/Factor-Graphs.ipynb">B4</a></td>
             <td><a href="http://nbviewer.jupyter.org/github/bertdv/BMLIP/blob/master/lessons/exercises/Exercises-Factor-Graphs.ipynb">B4-ex</a><br/> <a href="http://nbviewer.jupyter.org/github/bertdv/BMLIP/blob/master/lessons/exercises/Solutions-Factor-Graphs.ipynb">B4-sol</a></td>
             <td></td>
             <td><a href="https://youtu.be/C2vvsf_Ts2g">B4.1</a>, <a href="https://youtu.be/HbUuYBMZOKw">B4.2</a></td>
         </tr>
         <tr style="color:red;">
            <td>27-Nov-2024</td>
            <td>Deadline julia programming assignment</td>
            <td></td>
            <td></td>
            <td><a href="https://github.com/bertdv/BMLIP/blob/master/lessons/assignments/%5B5SSD0%5D%20Julia%20assignment.zip">A0</a>
            <!---
            <br><a href="https://github.com/bertdv/BMLIP/blob/master/lessons/assignments/%5B5SSD0%5D%20Julia%20assignment%20-%20solutions.ipynb">A0-sol</a>
            --->
            </td>
            <td></td>
         </tr>
         <tr>
            <td>29-Nov-2024</td>
            <td>B5: Continuous Data and the Gaussian Distribution</td>
            <td><a href="http://nbviewer.jupyter.org/github/bertdv/BMLIP/blob/master/lessons/notebooks/The-Gaussian-Distribution.ipynb">B5</a></td>
            <td><a href="http://nbviewer.jupyter.org/github/bertdv/BMLIP/blob/master/lessons/exercises/Exercises-The-Gaussian-Distribution.ipynb">B5-ex</a><br/> <a href="http://nbviewer.jupyter.org/github/bertdv/BMLIP/blob/master/lessons/exercises/Solutions-The-Gaussian-Distribution.ipynb">B5-sol</a></td>
            <td></td>
            <td> <a href="https://youtu.be/WS6gWO5vgtc">B5.1</a>, <a href="https://youtu.be/Ma3jXNbNCyc">B5.2 </a> </td>
         </tr>
         <tr>
            <td>04-Dec-2024</td>
            <td>B6: Discrete Data and the Multinomial Distribution</td>
            <td><a href="http://nbviewer.jupyter.org/github/bertdv/BMLIP/blob/master/lessons/notebooks/The-Multinomial-Distribution.ipynb">B6</a></td>
            <td><a href="http://nbviewer.jupyter.org/github/bertdv/BMLIP/blob/master/lessons/exercises/Exercises-The-Multinomial-Distribution.ipynb">B6-ex</a><br/> <a href="http://nbviewer.jupyter.org/github/bertdv/BMLIP/blob/master/lessons/exercises/Solutions-The-Multinomial-Distribution.ipynb">B6-sol</a></td>
            <td></td>
            <td><a href="https://youtu.be/vyh8RvXxnT8">B6</a> </td>
         </tr>
         <tr style="color:green;">
            <td>06-Dec-2024</td>
            <td>Probabilistic Programming 1 - Bayesian inference with conjugate models</td>
            <td><a href="http://nbviewer.jupyter.org/github/bertdv/BMLIP/blob/master/lessons/notebooks/probprog/Probabilistic-Programming-1.ipynb">W1</a></td>
            <td></td>
            <td></td>
            <td> <a href="https://youtu.be/ynfvgtjOnqo">W1.1</a>, <a href="https://youtu.be/h9nODl50m_M">W1.2 </a> </td>
         </tr>
         <tr>
            <td>11-Dec-2024</td>
            <td>B7: Regression</td>
            <td><a href="http://nbviewer.jupyter.org/github/bertdv/BMLIP/blob/master/lessons/notebooks/Regression.ipynb">B7</a></td>
            <td><a href="http://nbviewer.jupyter.org/github/bertdv/BMLIP/blob/master/lessons/exercises/Exercises-Regression.ipynb">B7-ex</a><br/> <a href="http://nbviewer.jupyter.org/github/bertdv/BMLIP/blob/master/lessons/exercises/Solutions-Regression.ipynb">B7-sol</a></td>
            <td></td>
            <td> <a href="https://youtu.be/2llpaRSN2Wc">B7.1</a>, <a href="https://youtu.be/TSoYnO6oXhw">B7.2 </a></td>
         </tr>
         <tr>
            <td>13-Dec-2024</td>
            <td>B8: Generative Classification <br/>B9: Discriminative Classification
            </td>
            <td><a href="http://nbviewer.jupyter.org/github/bertdv/BMLIP/blob/master/lessons/notebooks/Generative-Classification.ipynb">B8</a>, <a href="http://nbviewer.jupyter.org/github/bertdv/BMLIP/blob/master/lessons/notebooks/Discriminative-Classification.ipynb">B9</a></td>
            <td><a href="http://nbviewer.jupyter.org/github/bertdv/BMLIP/blob/master/lessons/exercises/Exercises-Classification.ipynb">B8-9-ex</a><br/> <a href="http://nbviewer.jupyter.org/github/bertdv/BMLIP/blob/master/lessons/exercises/Solutions-Classification.ipynb">B8-9-sol</a></td>
            <td></td>
            <td><a href="https://youtu.be/IzNDzIcrhLA">B8</a>, <a href="https://youtu.be/Y7q0JQKNfjM">B9</a></td>
         </tr>
         <tr style="color:green;">
            <td>18-Dec-2024</td>
            <td>Probabilistic Programming 2 - Bayesian regression & classification</td>
            <td><a href="http://nbviewer.jupyter.org/github/bertdv/BMLIP/blob/master/lessons/notebooks/probprog/Probabilistic-Programming-2.ipynb">W2</a></td>
            <td></td>
            <td></td>
            <td><a href="https://youtu.be/TKvI5uUYY8A">W2.1</a>, <a href="https://youtu.be/WCtInHz5-zA">W2.2</a></td>
         </tr>
         <tr>
            <td>20-Dec-2024</td>
            <td>B10: Latent Variable Models and Variational Bayes</td>
            <td><a href="http://nbviewer.jupyter.org/github/bertdv/BMLIP/blob/master/lessons/notebooks/Latent-Variable-Models-and-VB.ipynb">B10</a></td>
            <td><a href="http://nbviewer.jupyter.org/github/bertdv/BMLIP/blob/master/lessons/exercises/Exercises-Latent-Variable-Models-and-VB.ipynb">B10-ex</a><br/> <a href="http://nbviewer.jupyter.org/github/bertdv/BMLIP/blob/master/lessons/exercises/Solutions-Latent-Variable-Models-and-VB.ipynb">B10-sol</a></td>
            <td></td>
            <td><a href="https://youtu.be/pVWdm9fQT6Y">B10.1</a>, <a href="https://youtu.be/mg9HGykqEbw">B10.2</a></td>
         </tr>
         <tr style="color:red;">
            <td>20-Dec-2024</td>
            <td>Deadline probabilistic programming assignment 1</td>
            <td></td>
            <td></td>
            <td><a href="https://github.com/bertdv/BMLIP/blob/master/lessons/assignments/%5B5SSD0%5D%20Probabilistic%20Programming%201.zip">A1</a>
            <!---
            <br><a href="https://github.com/bertdv/BMLIP/blob/master/lessons/assignments/%5B5SSD0%5D%20Probabilistic%20Programming%201%20-%20solutions.ipynb">A1-sol</a>
            --->
            </td>
            <td></td>
         </tr>    
         <tr style="color:blue;">
            <td colspan="6">break</td>
         </tr>
         <tr style="color:green;">
            <td>08-Jan-2025</td>
            <td>Probabilistic Programming 3 - Variational Bayesian inference</td>
            <td><a href="http://nbviewer.jupyter.org/github/bertdv/BMLIP/blob/master/lessons/notebooks/probprog/Probabilistic-Programming-3.ipynb">W3</a></td>
            <td></td>
            <td></td>
            <td><a href="https://youtu.be/z_hKaRqpNQM">W3.1</a>, <a href="https://youtu.be/FLKbzyiQlLo">W3.2</a></td>
         </tr>
         <tr>
         <tr>
            <td>10-Jan-2025</td>
            <td>B11: Dynamic Models</td>
            <td><a href="http://nbviewer.jupyter.org/github/bertdv/BMLIP/blob/master/lessons/notebooks/Dynamic-Models.ipynb">B11</a></td>
            <td><a href="http://nbviewer.jupyter.org/github/bertdv/BMLIP/blob/master/lessons/exercises/Exercises-Dynamic-Models.ipynb">B11-ex</a><br/> <a href="http://nbviewer.jupyter.org/github/bertdv/BMLIP/blob/master/lessons/exercises/Solutions-Dynamic-Models.ipynb">B11-sol</a></td>
            <td></td>
            <td><a href="https://youtu.be/W1AkZJAjvqI">B11.1</a>, <a href="https://youtu.be/G7EJqWY4aq0">B11.2</a></td>
         </tr>
         <tr style="color:green;">
            <td>15-Jan-2025</td>
            <td>Probabilistic Programming 4 - Bayesian filters & smoothers</td>
            <td><a href="http://nbviewer.jupyter.org/github/bertdv/BMLIP/blob/master/lessons/notebooks/probprog/Probabilistic-Programming-4.ipynb">W4</a></td>
            <td></td>
            <td></td>
            <td><a href="https://youtu.be/Yp2vhndnjng">W4.1</a>, <a href="https://youtu.be/qnWofDRh5eo">W4.2</a></td>
         </tr>
         <tr>
            <td>17-Jan-2025</td>
            <td>B12: Intelligent Agents and Active Inference</td>
            <td><a href="http://nbviewer.jupyter.org/github/bertdv/BMLIP/blob/master/lessons/notebooks/Intelligent-Agents-and-Active-Inference.ipynb">B12,</a><br/> <a href="https://github.com/bertdv/BMLIP/blob/master/lessons/notebooks/files/BdV-Jan2024-Natural-Artificial-Intelligence.ppsx">slides</a> </td>
            <td><a href="http://nbviewer.jupyter.org/github/bertdv/BMLIP/blob/master/lessons/exercises/Exercises-Intelligent-Agents-and-Active-Inference.ipynb">B12-ex</a><br/> <a href="http://nbviewer.jupyter.org/github/bertdv/BMLIP/blob/master/lessons/exercises/Solutions-Intelligent-Agents-and-Active-Inference.ipynb">B12-sol</a></td>
            <td></td>
            <td><a href="https://youtu.be/fBm1oAzlv0w">B12.1</a>,  <a href="https://youtu.be/UbOuLxv9EdI">B12.2</a> </td>
         </tr>
         <tr style="color:red;">
            <td>24-Jan-2025</td>
            <td>Deadline probabilistic programming assignment 2</td>
            <td></td>
            <td></td>
            <td><a href="https://github.com/bertdv/BMLIP/blob/master/lessons/assignments/%5B5SSD0%5D%20Probabilistic%20Programming%202.zip">A2</a>
            <!---
            <br><a href="https://github.com/bertdv/BMLIP/blob/master/lessons/assignments/%5B5SSD0%5D%20Probabilistic%20Programming%201%20-%20solutions.ipynb">A2-sol</a>
            --->
            </td>
            <td></td>
         </tr>
         <tr style="color:blue;">
            <td >30-Jan-2025</td>
            <td colspan="5">written examination (13:30-16:30)</td>
         </tr>
         <tr style="color:blue;">
            <td >??-Apr-2025</td>
            <td colspan="5">resit written examination (??:??-??:??)</td>
         </tr>
         <!-- <tr>
            <td></td>
            <td>M1: Bonus Lecture: What is Life?</td>
            <td><a href="https://youtu.be/MGusn1JzqVs">M1.1</a>, <a href="https://youtu.be/Gk225kuulOE">M1.2</a> </td>
            <td><a href="https://github.com/bertdv/BMLIP/raw/master/lessons/notebooks/MKoudahl-March2020-What-is-life.pdf?dl=0">M1</a></td>
            <td></td>
         </tr> -->
      </table>


## Exams & Assignments

### Preparation

- Consult the <a href="http://nbviewer.jupyter.org/github/bertdv/BMLIP/blob/master/lessons/notebooks/Course-Syllabus.ipynb">Course Syllabus</a> (lecture notes for 1st class) for advice on how to study the materials.

<!-- - Each year there will be two written exam opportunities. The exams will be in multiple-choice format. Grading rules have been [posted at Piazza](https://piazza.com/class/l9n5gnieu4k6tl/post/23). **You cannot bring notes or books to the written exam sessions. All needed formulas are supplied at the exam sheet**. -->

- In addition to the materials in the above table, we provide two representative practice written exams:

  - 3-Feb-2022: <a href="https://github.com/bertdv/BMLIP/blob/master/exams/20220203-5SSD0-exam.pdf?dl=0">exam </a>; <a href="https://github.com/bertdv/BMLIP/blob/master/exams/20220203-5SSD0-exam-answers.pdf?dl=0">answers </a>; <a href="https://github.com/bertdv/BMLIP/blob/master/exams/20220203-5SSD0-exam-calculations.ipynb?dl=0">calculations</a>
  - 2-Feb-2023: <a href="https://github.com/bertdv/BMLIP/blob/master/exams/20230202-5SSD0-exam.pdf?dl=0">exam </a>; <a href="https://github.com/bertdv/BMLIP/blob/master/exams/20230202-5SSD0-exam-answers.pdf?dl=0">answers </a>; <a href="https://github.com/bertdv/BMLIP/blob/master/exams/20230202-5SSD0-exam-calculations.ipynb?dl=0">calculations</a>

### Programming Assignments

- Programming assignments can be downloaded from the table above.
- Programming assignments should be submitted before the indicated deadlines at the [Canvas Assignments tab](https://canvas.tue.nl/courses/26086/assignments).

### Grading

- See [this Piazza note on how the final grade is computed](https://piazza.com/class/ln1m8n333g5aa/post/6).

## Projects

- If you liked this class, [here is a short oversight](https://t.ly/lfIoh) (~10 minutes) of internship and graduation projects that you may consider applying for.


<!---
### Assignment

- The assignment may be downloaded [here](https://github.com/bertdv/BMLIP/blob/master/lessons/assignment/%5B5SSD0%5D%20Probabilistic%20Programming%20-%20Assignment.zip). The Jupyter notebook explains the problem in detail.
- Please hand in the completed notebook file on Canvas.
- The solution to this year's assignment can be found [here](https://github.com/bertdv/BMLIP/blob/master/lessons/assignment/Probabilistic%20Programming%20-%20Assignment%20%5BSolution%5D.ipynb).
--->


<!---
### Oral Exam Guide

An exam session lasts about 30 minutes and will be recorded (and later deleted, following GDPR rules). At the beginning of the session, the examiner needs to check your identity, preferably by your campus card.

The style of the examination is conversational. We like to engage in a conversation with you about what you learned in the class. In general, oral exams do not lend themselves well to proofing theorems or other deep mathematical manipulations. Instead, the focus is more on testing if you understand the conceptual ideas in this class. In principle, everything that has been presented in the lecture notes and videos is fair game as an exam question, including programming questions from the probabilistic programming sessions.

Please review the [Oral Exam Example notebook](https://nbviewer.jupyter.org/github/bertdv/BMLIP/blob/master/lessons/exercises/Oral-Exam-Example.ipynb (Links to an external site.)) to get an idea of what kind of questions will be asked.

The first question of the exam will be an open question: "You get 5 minutes to tell me about what you learned in this class. You can fill in the 5 minutes as you like but try to impress me with your knowledge or insights. E.g., talk about probabilistic modelling, how it works, what are strong aspects or weak aspects of the approach, etc." After the first question, the rest of the exam will be focused at topics selected by the examiner.
--->
