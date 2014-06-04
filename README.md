Practice Repo
========

Practice repo for a Node.js website.

How to git
-------------
Ubuntu Installation:
    1) Install git by typing
    
        $ sudo apt-get install git
    
       and hitting enter in the command line.
    
    2) Install Node.js by typing
    
        $ sudo apt-get install nodejs
    
       then hitting tab twice. This should bring up a list of nodejs packages, install all of them.
    
    3) Install NPM by typing
    
        $ sudo apt-get install npm
    
       and hitting enter in the command line.
    
How to pull our repo:    
    
    4) Create a new directory in your home directory called "BroboticsForever" and move into it by typing
    
        $ mkdir ~/BroboticsForever; cd ~/BroboticsForever
    
       then hitting enter.
    
    5) Now you can clone our git practice repo by entering
    
        $ git clone https://github.com/BroboticsForever/practice.git
    
       (This is the URL to our git repo)
    
    6) Now to set it up so you can push to our github.com repo, type
    
        $ cd practice; git push
    
       It should then prompt you for your github.com username and password.
       Type in your username (not the email you use to log in, just your username) and hit enter.
       Your password for github will not work for security reasons, so you will need to create a Personal access token on github.com
    
    7) To create a Personal access token, go to http://github.com and log in, then click settings in the top right corner.
       Next click Applications and then click Generate new token. Type in anything for the description (Your computer name is a good choice).
       Check all the check boxes and click Generate token. Once the token is generated, copy it and use that as the password when trying to run "git push".
       If everything goes well, it should display "Everything up-to-date".
       
Running and making changes to the repo:       
       
    8) In order to run the practice application, you must first make sure you have all the necessary libraries installed. This is easily done with npm by entering:
    
        $ npm install
        
       In the main directory of your repository. This command checks the "package.json" file in the repo to find what dependencies are necessary, and automatically downloads and installs them.
    
    8) You are now ready to begin making changes to our repository! However, by default you are on the "master" branch of the repository.
       It is not good practice to directly change the master branch, so if you wish to make changes to the repo please create a new branch for your changes.
       First, if you ever need to check what branch you are on, type:
       
        $ git branch
        
       And hit enter. This will list all local branches on your machine, with a '*' next to your current branch.
       Master should be the only branch right now. To create a new branch, enter:
       
        $ git branch <nameOfYourNewBranch>
        
       The name of your branch should relate to something you wish to accomplish in that branch so that others know what the branch is for.
       This only creates the branch. In order to switch to the branch you just created, enter:
       
        $ git checkout <nameOfYourNewBranch>
       
       Now you are working on your local branch rather than the master branch.
       Once you have made the changes you wish to complete, you must add them and commit them to your branch. To check the current status of your branch, enter:
       
        $ git status
        
       This will display for you all of the files you have changes since your last git commit to this branch.
       If you wish to see all of the changes you've made within those files, enter:
       
        $ git diff
        
    9) Once you have verified that all the changes you have made are correct andthat you haven't changed anything you didnt mean to, you will need to commit those changes.
       To commit what you have done to your branch, you first need to stage. Do this by entering:
        
        $ git add .
        
       This will add all the files you have changed to the commit staging area. You will then need to commit the changes. Do this by entering:
        
        $ git commit -m "Some message about what you did"
        
       The message should contain enough information that someone else can know what you did without having to delve into your code.
    
   10) Finally, you need to push these changes to a branch in the github.com repo.  This is done by first entering:
        
        $ git config --global push.default simple
        
       This will set up the default push options as simple (this only needs to be done once, not every time you push).
       Then, in order to set up the branch on github.com to push to, enter:
        
        $ git push --set-upstream origin <nameOfYourCurrentBranch>
        
       This also only needs to be done once per branch, not on every push. Finally, we can call the push command:
       
        $ git push
        
   11) Congratulations, you are now a git wizard! AKA, a Gizard.