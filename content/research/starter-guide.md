+++
title="Starter's Guide for students at BIASlab research team"
date = "2018-07-19T8:50:58+02:00"
[[authors]]
    name = "Bert de Vries"
    is_member = true
    link = "/bert"
+++

This document is a starter's guide for students who do an internship or graduate level (MSc, PhD) project with [me](http://bertdv.nl). For the duration of your project you will become part of our [**BIASlab** team of graduate students](http://biaslab.github.io). I discuss here our research mission, our way of working, the tools we use and provide some links to key scientific papers that relate to our research. This guide is always a work in progress and each project will have its own goals and dynamics. Still, generally speaking, I would appreciate if you have a look at the links and think about the issues that I raise here. Talk to me when you have questions or ideas to improve this document.

## Research

### Mission

{{< figure src="/img/starter-guide/design-loop.png" width="450px" class="right-inline" >}}

We are interested in modern AI methods that support **automated design of signal processing systems**, in particular in the context of audio processing algorithms. For instance, if I have a problem with (the signal processing of) my hearing aid when I am at a cocktail party, I want to fix it right there so I can stay and enjoy the party. Today, there are no proper tools that support the end user in fine-tuning his hearing aid.  We aim to develop such a support tool, and our methods are inspired by theories about learning and adaptation in the fields of (Bayesian) **machine learning** and **computational neuroscience**. In particular, we derive inspiration from recent work in neuroscience that describes how brains perceive, learn and design their algorithms for speech and object recognition, navigation, etc. In our team, we are building a very efficient Bayesian machine learning toolbox ourselves and 'eat our own dogfood' by putting ourselves in complex acoustic situations and use our own tools to tune our audio processing algorithms. This leads to new demands on the toolbox, which drives our next research steps.

In short, **we work on (Bayesian) machine learning** methods with applications to automated design of signal processing algorithms. Our methods are just as easily applicable though to design problems in related fields such as control, biomedical and communications engineering.

### Methodology

I will generally ask you to work on problems that I have not solved myself and you will not be able to find a packaged solution on the internet. Also, I may not be able to provide solutions to your questions. Actually, there may not even be a solution. Accept it, you're doing research now. Find a simpler question that will put you on the path to an answer. Doing **research is a continuous process of adaptation** in _both_ posing the questions _and_ proposing solutions. In other words, *if you can't find the answer, change the question*! Start with the simplest questions and simplest solution proposals and work your way towards the more relevant issues. For further information, please have a look at Hamming's lecture on 'You and Your Research', [video](http://www.youtube.com/watch?v=a1zDuOPkMSw "Hamming video, 1995") (1995) or [html](http://www.cs.virginia.edu/~robins/YouAndYourResearch.html "Hamming html, 1986") (1986), and think about how this relates to your work.

### Expectations and Deliverables

Your project will likely be embedded as a building block in our research plan. I expect a **professional attitude** which includes that you conduct yourself as a **team player**. Be aware that this is _your_ project so _you_ are responsible for keeping an eye on departmental regulations and deadlines. Stick to deadlines and promises or inform me ahead of time when plans cannot be maintained.

If you are an MSc-EE student at TU/e, then you should be familiar with the graduation project requirements as listed in the [education guide](https://studiegids.tue.nl/opleidingen/graduate-school/masters-programs/electrical-engineering/curriculum/graduation-project/) of the Electrical Engineering department. In particular, take note that your final evaluation will be based on the following criteria:

1. Understanding own specialization (25%)
  - You should (strive to) have a deep understanding of the field/topic that you work on. A good way to get feedback on this goal is to explain to others what you work on.
1. Research skills (25%)
  - It's not enough to be smart and walk around commenting on the world around you. You should also 'get things done'. Essentially, this issue is about your skills to navigate through your project by posing the right research questions (see the comments above on methodology).
1. Execution (25%)
  - This issue is about professionalism. You need to adhere to strict principles of academic honesty and contribute to technical discussions in the team. Your technical opinion is always appreciated but play the ball, not the person.
1. Reporting (written 12.5%, oral 12.5%)
  - All your ideas are worth nothing to society if they remain locked up inside your head. As an engineer, you must communicate your ideas well, both to technical and more general audiences.


Aside from the aforementioned deliverables that are imposed by the Examination Committee, I place a **high value on the quality of your (software) code**. Consider this as a fifth examination criterion. The software that you produce in your project is the sharpest description of your ideas, so make it readable and understandable for others. If you want to read some more on this, consult [Aruliah](http://arxiv.org/abs/1210.0530 "Aruliah et al, Best Practices for Scientific Computing, 2012") (2012) and/or [Cannam](http://soundsoftware.ac.uk/icassp-2012-paper "Cannam et al., Sound Software: Towards Software Reuse in Audio and Music Research, 2012") (2012). Generally, there are many ways to improve your coding skills, e.g., the [lectures by Sandi Metz](https://www.youtube.com/watch?v=8bZh5LMaSmE) are nearly always interesting.

If you do an internship/traineeship (before your final MSc thesis project), the examination criteria are just the same, but of course the expectations on your output are appropriately reduced.

If you are from another department, please find out and notify me of which departmental rules and regulations apply to you.

## Workflow and Tools

I like the idea of **working together asynchronously**, see [Zach's Holman talk](http://zachholman.com/talk/how-github-uses-github-to-build-github/) if this idea interests you. This means we use tools like [slack](https://slack.com/) (a chatroom) and [github](https://github.com/) (for source version control) to share ideas and code without a strict need to be in the same meeting room at the same time.


### Slack

{{< figure src="/img/starter-guide/slack-logo.png" width="100px"
class="left-inline" >}}

Ideas are usually discussed in a [slack](https://slack.com/) chatroom. Slack stores a record of the chats so our discussions are automatically documented for later use, such as getting newcomers in the team up to speed.

<br />

### Git and Github

{{< figure src="/img/starter-guide/Octocat.jpg" width="100px" class="left-inline" >}}

 We use the [git](http://git-scm.com) version control system to track the various developments of our code base and we organize our projects in repositories at [github](http://github.com). It is important to become a smooth user of both git and github. We use git and github also to track all documents that we write ourselves, including your thesis report. In the windows environment, I recommend that you install [github for windows](http://windows.github.com/) and/or [TortoiseGit](http://code.google.com/p/tortoisegit/).  [Github bootcamp](https://help.github.com/articles/set-up-git) and Dudler's [git guide](http://rogerdudler.github.com/git-guide/) are good places to start. Our workflow is loosely based on [github flow](http://scottchacon.com/2011/08/31/github-flow.html). The articles on [Team collaboration with github](http://net.tutsplus.com/articles/general/team-collaboration-with-github/) and [How to collaborate on Github](http://code.tutsplus.com/tutorials/how-to-collaborate-on-github--net-34267) also contain interesting discussions.


### Julia

{{< figure src="/img/starter-guide/julia-logo.png" width="120px" class="left-inline" >}}
We use [Julia](http://julialang.org/) as our main programming language. You are probably used to MATLAB and may be put off by the idea of having to learn another language. Don't worry, Julia is more-or-less an open source MATLAB variant, but much faster (within 2x speed of C) and much cooler than MATLAB. It is a very promising language for data science in general and it will help your research work a lot if you become proficient in Julia.

I also recommend that you spend some time on getting familiar with [Test-Driven Development](https://www.youtube.com/watch?t=11&v=ZB66AKW87M0) (TDD) of code.


### LaTeX

{{< figure src="/img/starter-guide/latex-logo.png" width="120px" class="left-inline" >}}

The project's final report should be written in [LaTeX](http://www.latex-project.org/) on [Overleaf](https://www.overleaf.com/). You must get familiar with LaTeX early during your project, because we start writing the final report very soon after the start of the project.

### Zotero

{{< figure src="/img/starter-guide/zotero-logo.png" width="100px" class="left-inline" >}}

After you join the BIASlab team you will also get access to our literature collection that we store online in a  [Zotero](https://www.zotero.org/) repository. This will help you get an overview of all relevant papers in our field.

<br />

### Reporting Tips

Start working on the final report in the first month of the project. In particular, if you follow [Magnusson's advice to write backwards](https://dl.dropboxusercontent.com/u/4512522/Magnusson_1996-How_to_write_backwards.pdf) (*start with the conclusions*!), then you can **turn report writing into a powerful research tool** that reveals your next steps to pursue. I _strongly_ encourage you to have a look at [Simon Peyton Jones](http://research.microsoft.com/en-us/um/people/simonpj/papers/giving-a-talk/giving-a-talk.htm)' lectures on **writing a paper** ([video](http://sms.cam.ac.uk/media/1464870) and [slides](http://research.microsoft.com/en-us/um/people/simonpj/papers/giving-a-talk/writing-a-paper-slides.pdf)) and **giving a talk** ([video](http://research.microsoft.com/apps/video/default.aspx?id=168648) and [slides](http://research.microsoft.com/en-us/um/people/simonpj/papers/giving-a-talk/giving-a-talk-slides.pdf)).

In general, if you work on a MSc thesis project or higher, I'd like you to make a (final) report update at least once a month. The final report should be in the form of a publishable IEEE journal paper. So, working on a project implies a monthly refinement of the paper until it's ready for submission (or project time runs out). Use the process of incremental report refinement as a tool to discover what you need to work on next.


## Your First Month

What should you focus on during the first month of your project?

In the first week:
 - Copy and paste in an email addressed to me the following text:

> <---BEGIN EMAIL TEXT--->

> I hereby declare that I will protect the confidential nature of private BIASlab repositories at github. In more general terms, I will not share with third parties any research materials that have been authored by BIASlab members without prior consultation with prof. Bert de Vries.

> -- signed, your name and date

> <---END EMAIL TEXT--->

- Send me your CV and transcript by email
- Provide me with your email address (preferably a gmail account), tel number, and a portrait image (for inclusion on web site, team presentation in powerpoint slides etc)


Then, start your project:

- You need to get your project goals sharp. Therefore, I suggest that you write your first draft for the project's final report by the end of the first month, with **focus on the conclusions** (see previously mentioned reporting advice by Magnusson). This first-draft edition of the final paper may find dual use as your project proposal. We are well-aware that the actual project plan may change as the project unrolls due to unforeseen obstacles. Your final evaluation will therefore be based on balancing the realization of project goals versus your creativity in coping with difficult spots.

- Next to the final goals, you need to understand your starting point. Please **get familiar with our existing code base** (at github) that you will be working with. You should be able to understand (y)our code enough to make a change confidently. This also means that you'll have to start training yourself how to code in Julia and how to work with git (and github). Working with Julia, git and github is a process that you will gradually improve upon, but don't postpone training yourself on these tools. If you have no experience with version control software, this may feel like a burden in the beginning, but it will become a major asset (for the rest of your career) once you make it a habit to record changes by version control.

Once you got your final goals and starting point clear, you can make an attempt at a project plan. The project plan is basically a list of intermediate goals (called: _milestones_) that you intend to complete on your way from starting point to final goals.

- Finally, I will give you some literature specifically tailored for your project. You should start training yourself in Bayesian modeling and how to do Bayesian inference through message passing in graphical models.

## Want to Get Started ahead of Time?

In principle, you are not required to prepare anything before your project starts, but I will give here some pointers in case you are eager to get going or to read up on some background materials.

- One way to start is to read my [booklet](http://alexandria.tue.nl/extra2/redes/vries2013.pdf) that I wrote for my inaugual lecture and to watch that [lecture at youtube](https://www.youtube.com/watch?v=l0DuYblLEGA) (starts after 7 minutes). This kind of shows where our research interests lie, but don't take it very literally. There is of course room to negotiate your project to match your personal interests.

- If you're not yet convinced about the value of fast iteration cycles for design, I'd like you to watch two additional videos. First, I recommend that you watch the first 30 minutes of this [presentation by Bret Victor](https://vimeo.com/36579366) (you should watch this video anyway, just because it's awesome). A second interesting viewpoint relates to 'lean design' or the 'lean startup' which is well presented in this [presentation by Eric Ries](https://www.youtube.com/watch?v=fEvKo90qBns). Both presentations are not about signal processing nor about machine learning but they do support the idea that *fast iterations driven by end user feedback* is a fundamentally sound approach to the design of complex systems.

- There is a vast literature on (Bayesian) machine learning. If you time it right, this [course by Andrew Ng](https://www.coursera.org/course/ml) would probably be an excellent way to start. You could also give [Zoubin Ghahramani's lectures](http://goo.gl/jhml0) a go. This [class by Ryan Adams](http://seas.harvard.edu/courses/cs281/) lists a fairly comprehensive literature list. By no means do you need to absorb all these materials; I recommend that you watch Ghahramani's videos and look further based on interest.

- In terms of inference and learning methods, we are particularly interested in variational Bayesian learning in factor graphs, a.k.a. *Variational Message Passing* (VMP). VMP enjoys many interesting features, but it is not easy to get familiar with. A good way to start would be [Mackay's video lecture on variational methods](http://videolectures.net/mackay_course_14/).

- If you want to learn about Probabilistic Graphical Models (PGMs) in general, I recommend [Bishop's lectures at Tuebingen](http://research.microsoft.com/en-us/um/people/cmbishop/talks.htm) or [Bishop's 2010 Turing lecture](http://scpro.streamuk.com/uk/player/Default.aspx?wid=7739 "Bishop, Embracing Uncertainty: The new machine intelligence, 2010").

- For more information on the specific PGM style that we use (Forney-style Factor Graphs), please see [this lecture](https://www.youtube.com/watch?v=Fv2YbVg9Frc&t=31) by Frederico Wadehn or these papers: [Sascha Korl dissertation, 2005](http://e-collection.library.ethz.ch/eserv/eth:28176/eth-28176-02.pdf) and [Loeliger et al., 2007](http://www.isiweb.ee.ethz.ch/papers/docu/aloe-jdau-juhu-skor-2007-1.pdf).

- If you want to see how we have used factor graphs in one of our projects, here is a [recent PhD thesis](https://research.tue.nl/en/publications/automated-design-of-bayesian-signal-processing-algorithms) from one of our team members. No need to read this in detail, but it is an example of what we do.

- You could also get started in Julia if you like. See the ['learning' site at julialang.org](http://julialang.org/learning/) . You can get started to program in julia e.g. at [JuliaBox](https://www.juliabox.com/), or you can [install Julia yourself](http://julialang.org/).

- Finally, our research focuses more on machine learning methods than audio processing per se, but [Hamacher et al., 2005](http://asp.eurasipjournals.com/content/pdf/1687-6180-2005-152674.pdf "Hamacher at al, Signal Processing in High-End Hearing Aids: State of the Art, Challenges, and Future Trends, 2005") would be a good place to read up on hearing aid signal processing.

Let me know if this guide helps you and feel free to suggest updates. Good luck and welcome to the team! We look much forward to working with you.
