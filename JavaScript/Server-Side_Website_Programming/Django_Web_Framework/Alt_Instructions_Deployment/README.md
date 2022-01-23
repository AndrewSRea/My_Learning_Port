# Alternate instructions for deploying a Django app to Heroku

In case you followed the instructions in the [Django Tutorial Part 11: Deploying Django to production](https://github.com/AndrewSRea/My_Learning_Port/tree/main/JavaScript/Server-Side_Website_Programming/Django_Web_Framework/Django_Tutorial_11#django-tutorial-part-11-deploying-django-to-production) in full, yet you were still unable to deploy your *LocalLibrary* Django application to Heroku, then this article will give you step-by-step instructions for how to set up the *LocalLibrary* Django application locally with all of the necessary components you'll need in order to host your Django app for deployment on the Heroku website.

These step-by-step instructions come from an instructional YouTube video tutorial named [Python Django Tutorial: Deploying Your Application (Option #2) - Deploy using Heroku](https://youtu.be/6DI_7Zja8Zc), part of a series of [instructional YouTube videos](https://www.youtube.com/playlist?list=PL-osiE80TeTtoQCKZ03TU5fNfx2UY6U4p) hosted by [Corey Schafer](https://coreyms.com/), in which he guides viewers in building a Django blog application.

Corey Schafer's YouTube videos were very helpful in building another Django application, and guiding me through the deployment process to host the blog application on Heroku. However, there were some steps within the **Python Django Tutorial: Deploying Your Application (Option #2) - Deploy using Heroku** YouTube video which were perhaps omitted due to the time the videos were posted. I will add these missing instructions within the instructions listed below.

## Signup for a Heroku account

To start using Heroku, you will first need to create an account:

* Go to [www.heroku.com](https://www.heroku.com) and click the **SIGN UP FOR FREE** button.
* Enter your details and then press **CREATE FREE ACCOUNT**. You'll be asked to check your account for a sign-up email.
* Click the account activation link in the signup email. You'll be taken back to your account on the web browser.
* Enter your password and click **SET PASSWORD AND LOGIN**.
* You'll then be logged in and taken to the Heroku dashboard: [https://dashboard.heroku.com/apps](https://dashboard.heroku.com/apps).

## Install the Heroku client

Download and install the Heroku client by following the [instructions on Heroku here](https://devcenter.heroku.com/articles/getting-started-with-python#set-up). Make sure you are in the virtual environment, in the root directory, of your *LocalLibrary* Django application first.

After the client is installed, you will be able to run commands. For example, by simply typing `heroku` in your terminal, you will receive the following in return:
```
CLI to interact with Heroku

VERSION
  heroku/7.59.2 darwin-x64 node-v12.21.0

USAGE
  $ heroku [COMMAND]

COMMANDS
  access          manage user access to apps
  addons          tools and services for developing, extending, and operating your app
  apps            manage apps on Heroku
  auth            check 2fa status
  authorizations  OAuth authorizations
  autocomplete    display autocomplete installation instructions
  buildpacks      scripts used to compile apps
  certs           a topic for the ssl plugin
  ci              run an application test suite on Heroku
  clients         OAuth clients on the platform
  config          environment variables of apps
  container       Use containers to build and deploy Heroku apps
  domains         custom domains for apps
  drains          forward logs to syslog or HTTPS
  features        add/remove app features
  git             manage local git repository for app
  help            display help for heroku
  keys            add/remove account ssh keys
  labs            add/remove experimental features
  local           run Heroku app locally
  logs            display recent log output
  maintenance     enable/disable access to app
  members         manage organization members
  notifications   display notifications
  orgs            manage organizations
  pg              manage postgresql databases
  pipelines       manage pipelines
  plugins         list installed plugins
  ps              Client tools for Heroku Exec
  psql            open a psql shell to the database
  redis           manage heroku redis instances
  regions         list available regions for deployment
  releases        display the releases for an app
  reviewapps      manage reviewapps in pipelines
  run             run a one-off process inside a Heroku dyno
  sessions        OAuth sessions
  spaces          manage heroku private spaces
  status          status of the Heroku platform
  teams           manage teams
  update          update the Heroku CLI
  webhooks        list webhooks on an app
```
All of the `COMMANDS` listed above can be used in your terminal in combination with the `heroku` command. For example, to get some help from Heroku, type:
```
heroku help
```
In fact, you can now log in to your Heroku account *from the terminal!* Type `heroku login` on the CLI. (We will now refer to the terminal as the **CLI** (**C**ommand **L**ine **I**nterface).)

A message will return which states:
```
heroku: Press any key to open up the browser to login or q to exit:
```
Pressing any key on your keyboard will open up a browser window on Heroku's login page. Press the "Log in" button to log into your Heroku account. Some form fields will appear on the browser, prompting you to "Log in to your account. Enter the email address and password you used to create your Heroku account in the corresponding form fields, and press the "Log In" button.

You should then receive a message in the Heroku browser which says, "Logged in," and "You can close this page and return to your CLI. It should now be logged in." Go ahead and close the Heroku browser page, and return to your CLI.

<!-- Review this section for instructions which shouldn't be there. **Change this to opening an account on GitHub if user has not already done so. Put the other part about creating a repo down lower. -->

## Creating an application repository in GitHub

Heroku is closely integrated with the **git** source code version control system, using it to upload/synchronize any changes you make to the live system. It does this by adding a new Heroku "remote" repository named *heroku* pointing to a repository for your source on the Heroku cloud. During development, you use git to store changes on your own repository. When you want to deploy your site, you sync your changes to the Heroku repository.

<hr>

**Note**: If you're used to following good software development practices, you are probably already using git or some other SCM system. If you already have a git repository, then you can skip this step.

<hr>

There are a lot of ways to work with git, but one of the easiest is to first set up an account on [GitHub](https://github.com/), create the repository there, and then sync to it locally:

1. Visit [https://github.com/](https://github.com/) and create an account.
2. Once you are logged in, click the **+** link in the top toolbar and select **New repository**.
3. Fill in all the fields on this form. While these are not compulsory, they are strongly recommended.
    - Enter a new repository name (e.g. *django_local_library*), and description (e.g. "Local Library website written in Django").
    - Choose **Python** in the *Add .gitignore* selection list.
    - Choose your preferred license in the *Add license* selection list.
    - Check **Initialize this repository with a README**.
4. Press **Create repository**.
5. Click the green "**Clone or download** button on your new repo page.
6. Copy the URL value from the text field inside the dialog box that appears. (It should be something like: **https://bithub.com/<your_git_user_id>/django_local_library.git**).

Now that the repository ("repo") is created, we are going to want to clone it on our local computer:

1. Install *git* for your local computer. (You can find versions for different platforms [here](https://git-scm.com/downloads).)

2. Open a command prompt/terminal and clone your repository using the URL you copied above. (**Make sure to navigate out of your *django-projects* folder into a folder where you are willing to put this new cloned *django_local_library* folder**):
```
git clone https://github.com/<your_git_user_id>/django_local_library.git
```

3. Navigate into the new repo.
```
cd django_local_library
```

The final steps are to copy your application into this local project directory and then add (or "push", in git lingo) the local repository to your remote GitHub repository:

1. Copy your Django application into this folder (all the files at the same level as **manage.py** and below, **not** their containing locallibrary folder).

2. Open the **.gitignore** file, copy the following lines into the bottom of it, and then save. (This file is used to identify files that should not be uploaded to git by default).
```
# Text backup files
*.bak

# Database
*.sqlite3
```

3. Open a command prompt/terminal and use the `add` command to add all files to git. This adds the files which aren't ignored by the **.gitignore** file to the "staging area".
```
git add -A
```

4. Use the `status` command to check that all files you are about to `commit` are correct. (You want to include source files, not binaries, temporary files, etc.) It should look a bit like the listing below:
```
> git status
On branch main
Your branch is up-to-date with 'origin/main'.
Changes to be committed:
    (use "git reset HEAD <file>..." to unstage)

        modified:    .gitignore
        new file:    catalog/__init__.py
        ...
        new file:    catalog/migrations/0001_initial.py
        ...
        new file:    templates/registration/password_reset_form.html
```

5. When you're satisfied, `commit` the files to your local repository. This is essentially equivalent to signing off on the changes and making them an official part of the local repository.
```
git commit -m "First version of application moved into github"
```

6. At this point, the remote repository has not been changed. Synchronize (`push`) your local repository to the remote GitHub repository using the following command:
```
git push origin main
```

<hr>

:warning: **Warning**: In 2020, GitHub changed the default repo branch name to "main" (from "master"). If using an older/existing repository, you might call `git push origin master` instead.

<hr>

When this operation completes, you should be able to go back to the page on GitHub where you created your repo, refresh the page, and see that your whole application has now been uploaded. You can continue to update your repository as files change using this add/commit/push cycle.

<hr>

**Note**: This is a good point to make a backup of your "vanilla" project -- while some of the changes we're going to be making in the following sections might be useful for deployment on any platform (or development), others might not.

The *best* way to do this is to use *git* to manage your revisions. With *git* you can not only go back to a particular old version, but you can maintain this in a separate "branch" from your production changes and cherry-pick any changes to move between production and development branches. [Learning Git](https://docs.github.com/en/get-started/quickstart/git-and-github-learning-resources) is well worth the effort, but is beyond the scope of this topic.

The *easiest* way to do this is to just copy your files into another location. Use whichever appraoch best matches your knowledge of git!

<hr>