# BIASlab website content

This repository contains all the content necessary for proper rendering of BIASlab group [website](https://biaslab.github.io).

# Installation

### Prerequisites
You need to have [Hugo](https://gohugo.io) static site generator installed and working. More information might be found at [Hugo Installation Guide](https://gohugo.io/overview/installing/).

Please install Hugo **v0.16** or newer. Otherwise certain sections of the website won't be generated.

Working installation of GNU Make is recommended, but not required. You can test if you have it installed by typing `make -v` in the terminal.

### Getting started
1. Create a directory where you're planning to store the website:

        mkdir biaslab

2. Clone this repository and step into the directory:
        
        git clone git@github.com:biaslab/biaslab-hugo.git ./biaslab
        cd ./biaslab

4. Install [hugo-academic-group](https://github.com/biaslab/hugo-academic-group/) theme:
        make install-theme
    If you don't have a working installation of GNU Make, follow the installation instructions from [hugo-academic-group](https://github.com/biaslab/hugo-academic-group/) repository.

5. To add new content use `hugo new` command:
        hugo new post/post-title.md

    This way `hugo` will generate a template markdown file based on corresponding archetype with some of attributes filled with default values (creation timestamp, etc.), which you can later edit.

    More information on adding content can be found in the Hugo documentation in [Content](https://gohugo.io/content/organization/) and [Getting Started](https://gohugo.io/overview/quickstart/) sections.

6. All the basic build operations might be carried with the use of `make` command. If you do not have a working installation of GNU Make, study the contents of the `Makefile` and use the corresponding commands to operate the website. Currently following commands are defined in the file:

    * `install-theme`: Installs [hugo-academic-group](https://github.com/biaslab/hugo-academic-group/) theme.
    * `update-theme`: Updates the theme.
    * `build-website`: Generates all the static content for the website.
    * `debug-website`: Builds the website content and starts Hugo debugging server with live reload enabled.
    * `preview-website`: Builds the website content and starts other server to serve the content. Working installation of `python` is required (no additional libraries needed).
    * `publish`: Publishes the contents of the `./public` directory to the `master` branch of [https://biaslab.github.io](https://biaslab.github.io) repository.
