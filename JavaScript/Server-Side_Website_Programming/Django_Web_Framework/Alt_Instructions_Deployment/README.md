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
Pressing any key on your keyboard will open up a browser window on Heroku's login page. Press the "Log in" button to log into your Heroku account. Some form fields will appear on the browser, prompting you to "Log in to your account". Enter the email address and password you used to create your Heroku account in the corresponding form fields, and press the "Log In" button.

You should then receive a message in the Heroku browser which says, "Logged in," and "You can close this page and return to your CLI. It should now be logged in." Go ahead and close the Heroku browser page, and return to your CLI.

## Install Gunicorn

[Gunicorn](https://gunicorn.org/) is the recommended HTTP server for use with Django on Heroku. It is a pure-Python HTTP server for WSGI applications that can run multiple Python concurrent processes within a single dyno. (See [Deploying Python applications with Gunicorn](https://devcenter.heroku.com/articles/python-gunicorn) for more information.)

While we won't need *Gunicorn* to serve our *LocalLibrary* application during development, we'll install it so that it becomes part of our [requirements]() <!-- below --> for Heroku to set up on the remote server.

Install *Gunicorn* locally on the CLI using *pip* (which you should have installed when [setting up the development environment](https://github.com/AndrewSRea/My_Learning_Port/tree/main/JavaScript/Server-Side_Website_Programming/Django_Web_Framework/Django_Development_Environment#setting-up-a-django-development-environment)):

<hr>

**Note**: Make sure that you're in your Python virtual environment (use the `workon [name-of-virtual-environment]` command) before you install *Gunicorn* and further modules with *pip*, or you might experience problems with importing these modules in your **/locallibrary/settings.py** file later.

<hr>

```
pip install gunicorn
```

## Requirements

The Python requirements of your web application must be stored in a file `requirements.txt` in the root directory of your *LocalLibrary* Django application (on the same level as your `manage.py` file). Heroku will then install these automatically when it rebuilds your environment.

In your terminal, run this command on the CLI:
```
pip freeze
```
This will display a list of all the *pip* installations you have installed into your project thus far. These *pip* installations need to be put into a `requirements.txt` file so your application will be compatible with Heroku and give it the ability to be deployed.

On a MAC/Linux terminal, all that needs to be done is type this command on the CLI:
```
pip freeze > requirements.txt
```
This will create a `requirements.txt` file in your root directory, and "pipe" all of the *pip* installations you have downloaded into your application into the `requirements.txt` file. If you open up your `requirements.txt` file, you should see all of your *pip* installations listed there.

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
    - Don't choose to *Add .gitignore* just yet. We will manually add a `.gitignore` file later.
    - Choose your preferred license in the *Add license* selection list.
    - Check **Initialize this repository with a README**.
4. Press **Create repository**.
5. Click the green "**Clone or download** button on your new repo page.
6. Copy the URL value from the text field inside the dialog box that appears. (It should be something like: **https://github.com/<your_git_user_id>/django_local_library.git**).

Now that the repository ("repo") is created, we are going to want to clone it on our local computer:

1. Install *git* for your local computer. (You can find versions for different platforms [here](https://git-scm.com/downloads).)

2. Open a command prompt/terminal and clone your repository using the URL you copied above. (**Make sure to navigate out of your *django-projects* folder into a folder where you are willing to put this new cloned *django_local_library* folder**):
```
git clone https://github.com/<your_git_user_id>/django_local_library.git
```

3. Copy your Django application into this folder (all the files at the same level as **manage.py** and below, **not** their containing locallibrary folder).

4. Follow the instructions below to **Create a `.gitignore` file**.

### Create a `.gitignore` file

There are certain files we do not want tracked within our Git repository nor within our Heroku application, as these files may cause errors when we try to deploy our application to Heroku -- as well as create error messages within our GitHub repository.

Therefore, we need to create a `.gitignore` file (note the period `.` at the start of the `.gitignore` name, which is very important!) Again, in the root directory of your *LocalLibrary* application, create a `.gitignore` file there (exactly as spelled). Then, from his YouTube video tutorial named [Python Django Tutorial: Deploying Your Application (Option #2) - Deploy using Heroku](https://youtu.be/6DI_7Zja8Zc), Corey Schafer has provided a link to a GitHub repo displaying [a typical Python `.gitignore` file](https://github.com/github/gitignore/blob/main/Python.gitignore) for use when deploying a Python (Django) application to Heroku.

Copy all of the text within that file, and paste it within the `.gitignore` file you have just created. As with all additions to your application, make sure you save any and all changes.

<hr>

:exclamation: **Attention**: For MAC users, it is suggested that you add an extra line at the top of your `.gitignore` file:
```
.DS_Store
```
This is just another file which needs to be ignored in applications created using a MAC when those applications get deployed to Heroku.

<hr>

### Continuing with creating an application repository in GitHub

Now, navigate into the new repo.
```
cd django_local_library
```

1. Open a command prompt/terminal and use the `add` command to add all files to git. This adds the files which aren't ignored by the **.gitignore** file to the "staging area".
```
git add -A
```

2. Use the `status` command to check that all files you are about to `commit` are correct. (You want to include source files, not binaries, temporary files, etc.) It should look a bit like the listing below:
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

3. When you're satisfied, `commit` the files to your local repository. This is essentially equivalent to signing off on the changes and making them an official part of the local repository.
```
git commit -m "First version of application moved into github"
```

4. At this point, the remote repository has not been changed. Synchronize (`push`) your local repository to the remote GitHub repository using the following command:
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

The *easiest* way to do this is to just copy your files into another location. Use whichever approach best matches your knowledge of git!

<hr>

## Create and upload the application to Heroku

To create the app, we run the "create" command in the root directory of our repository. This creates a git remote ("pointer to a remote repository") named *heroku* in our local git environment.
```
heroku create
```

<hr>

**Note**: You can name the remote if you like by specifying a value after "`create`". If you don't, then you'll get a random name generated by Heroku. The name is used in the default URL of your app.

<hr>

You can check to see if your app has been deployed to Heroku by typing the following on your CLI:
```
heroku open
```
This will open up a browser window to your deployed app on Heroku. 

What you will see in the browser window will not look like what you have seen when you have opened your Django application locally on your own browser. This is because there are still more steps to go through to finish deploying your app on Heroku.

On the default browser for your Heroku app, you should see a message which states, "**Heroku | Welcome to your new app!**", with a line below it saying, "Refer to the **documentation** if you need help deploying." If you see this message, congratulations! You have successfully created a connection between your local app and Heroku.

You can then fully push your app to the Heroku repository with the following command on the CLI: 
```
git push heroku main
```
You will see the `push` start to work inside your terminal, but after some time the `push` will reject and fail. If you scroll up and search through the text in your terminal, you will see some text which says:
```
remote:  !     Error while running '$ python manage.py collectstatic -- noinput'.
```
Just above that, there is another error message which reads:
```
remote:        django.core.exceptions.ImproperlyConfigured: You're using the staticfiles app without having set the STATIC_ROOT setting to a filesystem path.
```
Basically, this error has happened because the static files we have added to our app -- like CSS and JavaScript -- are rejected when they are deployed to Heroku. So some further changes must be made to our app.

## Making changes to the `settings.py` file

Open **/locallibrary/settings.py** and right above this line of code which reads: 
```
STATIC_URL = '/static/'
```
...write the following code line:
```
STATIC_ROOT = os.path.join(BASE_DIR, 'staticfiles')
```
Make sure you have `import os` written near the top of your `settings.py` file; otherwise, this line of code will be rejected when you try again to `push` your changes to Heroku.

At this point, we will run all of our `git` commands on the CLI to push our changes into Heroku:
```
git add -A
git commit -m "Updated 'settings.py' file with a 'STATIC_ROOT'"
git push heroku main
```
If you type `heroku open` again to open your Heroku app in a browser