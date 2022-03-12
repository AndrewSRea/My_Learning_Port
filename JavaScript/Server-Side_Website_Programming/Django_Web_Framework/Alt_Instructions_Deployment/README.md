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

While we won't need *Gunicorn* to serve our *LocalLibrary* application during development, we'll install it so that it becomes part of our [requirements](https://github.com/AndrewSRea/My_Learning_Port/tree/main/JavaScript/Server-Side_Website_Programming/Django_Web_Framework/Alt_Instructions_Deployment#requirements) for Heroku to set up on the remote server.

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

1. Install *git* for your local computer. (You can find versions for different platforms [here](https://git-scm.com/downloads).)
2. Visit [https://github.com/](https://github.com/) and create an account.
3. Once you are logged in, click the **+** link in the top toolbar and select **New repository**.
4. Fill in all the fields on the form provided.
    - Enter a new repository name (e.g. *django_local_library*), and description (e.g. "Local Library website written in Django").
    - To avoid errors, don't choose to add *README*, license, or *.gitignore* files just yet. You can manually add these files after your project has been pushed to GitHub.
5. Press **Create repository**.
6. Click the green "**Clone or download** button on your new repo page.
7. Copy the URL value from the text field inside the dialog box that appears. (It should be something like: **https://github.com/<your_git_user_id>/django_local_library.git**).
8. Open a command prompt/terminal. 
9. Make sure to navigate out of your *django-projects* folder into a folder where you are willing to put this new cloned *django_local_library* folder**.
10. Initialize the local directory as a Git repository in your terminal.
    ```
    git init -b main
    ```
11. Add the files in your new local repository. This stages them for the first commit.
    ```
    git add -A
    ```
12. Commit the files that you've staged in your local repository.
    ```
    git commit -m "First commit"
    ```
13. Taking the URL value from your GitHub repository (*the URL you acquired from step #7 above*), add it to the following steps:
    ```
    git remote add origin <your-github-repo's-url-address-from-step-7>

    # Then the following step
    git remote -v
    ```
14. Push these changes to your local repository in GitHub.
    ```
    git push -u origin main
    ```
15. Follow the instructions below to **Create a `.gitignore` file**.

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
git commit -m "Adding a gitignore file"
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
git push origin main
```

## Debugging using Heroku CLI commands

If you type `heroku open` again after adding your changes to Heroku using `git`, a browser window will open again on your Heroku app, but there will be an error message displayed on the browser once again, which reads:

Application error

An error occurred in the application and your page could not be served. If you are the application owner, check your logs for details.

You can do this from the Heroku CLI with the command

`heroku logs --tail`

If you type `heroku logs --tail` on your CLI, you will receive an overwhelming amount of text. But if you focus in on the bottom of the `logs`, then you will see an error message stating:
```
heroku[router]: at=error code=H14 desc="No web processes running" method=GET path="/" ...
```
This is because we have not yet implemented a way to tell Heroku how to run our application in Heroku. And the way to do that is to create what is known as a *Procfile* in the root directory of our application.

## Creating a *Procfile*

A *Procfile* is a list of processes to be executed in order for Heroku to host our application. For Django, this is usually the Gunicorn web application server (with a `.wsgi` script) which we downloaded into our application with *pip* earlier.

Create a Procfile in the root directory of your application (exactly as it is spelled, with a capital "P", and without an extension on the end).

Within the Procfile, type the following:
```
web: gunicorn locallibrary.wsgi
```
The "`web:`" tells Heroku that this is a web dyno and can be sent HTTP traffic. The process to start in this dyno is *gunicorn*, which is a popular web application server that Heroku recommends. We start Gunicorn using the configuration information in the module `locallibrary.wsgi` (which was created with our application skeleton: **/locallibrary/wsgi.py**).

Back in your terminal, your `heroku logs` will still be running. To exit out of those logs, just type <kbd>Ctrl</kbd> + <kbd>C</kbd> to return to the CLI.

Once again, run through all of your `git` commands to save the additions and changes you've made to your application.
```
git add -A
git commit -m "Added Procfile"
git push heroku main
git push origin main
```

## Adding your Heroku application's URL to `ALLOWED_HOSTS`

Once again, if you type `heroku open` on the CLI, when the browser opens on your Heroku app, you will then start to see a familiar-looking error message displayed from Django. (Yes, these error messages are getting tiresome. But as we are working through this Heroku app deployment step-by-step, and not processing the entire application all at once, we will, unfortunately, receive error messages as we go along. Hang in there!)

The error message you receive from Django should relatively read as follows:
```
Invalid HTTP_HOST header: '<your-heroku-app-name>.herokuapp.com'. You may need to add '<your-heroku-app-name>.herokuapp.com' to ALLOWED_HOSTS.
```
This is because the [`ALLOWED_HOSTS`](https://docs.djangoproject.com/en/4.0/ref/settings/#allowed-hosts) setting is *required* if you have `DEBUG=False` (as a security measure -- which we will change later). Copy the URL of your Heroku app (as seen in the error message above: `'<your-heroku-app-name>.herokuapp.com'`), open **/locallibrary.settings.py** and change the `ALLOWED_HOSTS` setting to include your Heroku app URL:
```
ALLOWED_HOSTS = ['<your-heroku-app-name>.herokuapp.com']
```
**Don't forget to save your changes in your local code editor.**

## Creating an `.env` file to hide certain components for security reasons

Some of the Django project settings (specified in **settings.py**) which were created when we [initiated the skeleton of our project](https://github.com/AndrewSRea/My_Learning_Port/tree/main/JavaScript/Server-Side_Website_Programming/Django_Web_Framework/Django_Tutorial_2#django-tutorial-part-2-creating-a-skeleton-website) should be different when hosting our project on another platform, either for security or performance reasons.

<hr>

**Note**: It is common to have a separate **settings.py** file for production, and to import sensitive settings from a separate file or an environment variable. This file should then be protected, even if the rest of the source code is available on a public repository.

<hr>

The critical settings that you must check are: 

* `DEBUG`: This should be set as `False` in production (`DEBUG = False`). This stops the sensitive/confidential debug trace and variable information from being displayed. (Don't do this yet, though. We'll get to it later.)
* `SECRET_KEY`: This is a large random value used for CSRF protection, etc. It is important that the key used in production is not in source control or accessible outside the production server. The Django documents suggest that this might best be loaded from an environment variable or read from a server-only file.

We are going to create an environment variable file, or `.env` file, to store our `SECRET_KEY` so that it cannot be accessed by any possible exterior attacks to our application.

First, let's create a `SECRET_KEY` variable for use in our *LocalLibrary* app. One way to generate a new key is to use the [Django Secret Key Generator](https://miniwebtool.com/django-secret-key-generator/). This link will take you to a website called "Miniwebtool". Scroll down the website until you see a large green button titled "Generate Django Secret Key". Press it and the application will generate a `SECRET_KEY` variable for you. (You may have to scroll down the website again to find the generated `SECRET_KEY`.) Copy the `SECRET_KEY` variable, then open your `settings.py` file, and paste the `SECRET_KEY` within the quotation marks next to `SECRET_KEY`:
```
SECRET_KEY = '<your-new-secret-key-goes-here>'
```
It's OK to store your new `SECRET_KEY` here for now, but we will be moving it into the aforementioned `.env` file soon.

An `.env` file, or dotenv file, is a simple text configuration file for controlling your application's environment constants. Between local, staging and production environments, the majority of your application will not change. However, in many applications there are instances in which some configuration will need to be altered between environments. Common configuration changes between environments may include, but are not limited to, URL's and API keys.

`.env` files are line delimitated text files, meaning that each new line represents a single variable. By convention, `.env` variable names are uppercase words separated by underscores. Variable names are followed directly by an equals sign (`=`) which, in turn, is followed directly by the value, for example:
```
VARIABLE_NAME=value
```

Now let's create that `.env` file. Make sure you are in the root directory of your project and create the `.env` file on your CLI, exactly as written: `.env`. Now open your `settings.py` file again, and copy your `SECRET_KEY` variable. Then open your new `.env` file, and type the following:
```
export SECRET_KEY=
```
And paste your `SECRET_KEY` variable right next to the equals sign (`=`), without spaces (no space after the equals sign!) and without quotes. 

The `export` in the code text will export your `SECRET_KEY` variable out to any file which is asking for it -- which will be your `settings.py` file.

We will use the `.env` file to store our `DEBUG_VALUE` as well, so go back to your `.env` file and type the following as well:
```
export DEBUG_VALUE="True"
```
This will ensure that you are still able to use the debugging services Django provides locally in your application. But we will change this value in our application later, to ensure your application works when it is deployed to Heroku.

### Set the configuration settings for your deployed Heroku app

Now we have to set the `SECRET_KEY` and `DEBUG_VALUE` configuration settings in the *LocalLibrary* app in Heroku.

To do this, on your CLI type:
```
heroku config:set SECRET_KEY="<your-secret-key>"
```
And press <kbd>Enter</kbd>. You should see a message such as `Setting SECRET_KEY and restarting...` Your terminal will tell you when the process is done.

Then set the `DEBUG_VALUE` for your Heroku app:
```
heroku config:set DEBUG_VALUE="True"
```

Now we need to make some changes to the `SECRET_KEY` variable in our `settings.py` file. Open the `settings.py` file  and change the `SECRET_KEY` settings to:
```
SECRET_KEY = os.environ.get('SECRET_KEY')
```
`os.environ` is a mapping object that represents a user's environmental variables. It returns a dictionary having a user's environmental variable as a key (`SECRET_KEY`) and their values as the value (your generated alphanumeric `SECRET_KEY`). `get` retrieves your alphanumeric `SECRET_KEY` from the `.env` file you created earlier.

We'll change the `DEBUG_VALUE` later on in these instructions, as we will still be making changes to the *LocalLibrary* app.

Now that we've made all these changes to our application, let's run through all the `git` commands again to save the additions and changes you've made.
```
git add -A
git commit -m "Added an '.env' file and updated configuration settings"
git push heroku main
git push origin main
```

## Setting up a PostgreSQL database for your Heroku application

Now you can open your application on Heroku again by typing `heroku open` on your CLI.

In the browser, there will be another error listed. (*When will these errors end?*) Another error displayed by your Django app should read:
```
OperationError at/
no such table: ...
```
This error is due to the fact that we haven't yet pushed our SQLite database tables into our Heroku app. But we will be substituting the SQLite database (which was automatically installed when we [initiated the skeleton of our project](https://github.com/AndrewSRea/My_Learning_Port/tree/main/JavaScript/Server-Side_Website_Programming/Django_Web_Framework/Django_Tutorial_2#django-tutorial-part-2-creating-a-skeleton-website)) with a PostgreSQL database, which is more compatible when deploying Django applications on Heroku.

Follow the instructions for setting up a PostgreSQL database for your Heroku app through the instructions listed below, based on different operating system users.

* [Mac setup](https://devcenter.heroku.com/articles/heroku-postgresql#set-up-postgres-on-mac)
* [Windows setup](https://devcenter.heroku.com/articles/heroku-postgresql#set-up-postgres-on-windows)
* [Linux setup](https://devcenter.heroku.com/articles/heroku-postgresql#set-up-postgres-on-linux)

When you have finished following the instructions for setting up a PostgreSQL database in your Heroku application, you can check to make it was installed properly by tying the following in your CLI:
```
heroku addons
```
The following should return in your terminal:
```
Add-on                                                                          Plan       Price  State
______________________________________________________________________________  _________  _____  _______
heroku-postgresql (postgresql-<heroku-name-given-to-your-postgresql-database>)  hobby-dev  free   created
 |-- as DATABASE

The table above shows add-ons and the attachments to the current app (<your-heroku-app>) or other apps.
```
Congratulations! You have now installed a PostgreSQL database for your Heroku app.

## Creating a line of communication between the *LocalLibrary* app and the PostgreSQL database

Now we need to set up the credentials for the PostgreSQL database in the `settings.py` file so the *LocalLibrary* application can communicate to the database. But instead of adding these credentials to the `settings.py` file manually, we're going to use *pip* on the CLI to download a Python package named `django-on-heroku`.

<hr>

**Note**: This is where my tutorial diverges the [previous tutorial](https://github.com/AndrewSRea/My_Learning_Port/tree/main/JavaScript/Server-Side_Website_Programming/Django_Web_Framework/Django_Tutorial_11#django-tutorial-part-11-deploying-django-to-production) (and Corey Schafer's [YouTube tutorial](https://www.youtube.com/watch?v=6DI_7Zja8Zc&t=1s)). Those tutorials used the `django-heroku` Python package, which has since been archived and is no longer in use.

<hr>

`django-on-heroku` is a Django library for Heroku applications that ensures a seamless deployment, with a library which provides:

* Settings configuration (for serving static files with a library called Whitenoise).
* Logging configuration.
* A test runner (important for [continuous integration in Heroku](https://www.heroku.com/continuous-integration)).

To install the `django-on-heroku` Python package to your *LocalLibrary* application, type the following in your CLI:
```
pip install django-on-heroku
```
Once the package is install, it will automatically configure your database URL, and connect your static files (your CSS and JavaScript files) to *gunicorn* (which [we installed previously](https://github.com/AndrewSRea/My_Learning_Port/tree/main/JavaScript/Server-Side_Website_Programming/Django_Web_Framework/Alt_Instructions_Deployment#install-gunicorn)) using a package mentioned before named "Whitenoise", which was just installed when we *pip* installed `django-on-heroku`.

Now, to get `django-on-heroku` connected on our app, open up the `settings.py` file and scroll to the very bottom of the file. There at the bottom of the file, type the following:
```
# Configure Django App for Heroku.
import django_on_heroku
django_on_heroku.settings(locals())
```
**Note that underscores are used for `django_on_heroku` even though we downloaded the package as `django-on-heroku`.** This is important as it is how the `settings.py` file interprets the package. Same with **`django_on_heroku.settings(...)`.**

These two code line additions will automatically configure the PostgreSQL `DATABASE_URL`, `ALLOWED_HOSTS`, Whitenoise (for static assets), Logging, and Heroku CI for your application.

<hr>

:exclamation: **Attention**: I noticed that when I typed in these two lines of code, my code editor didn't seem to recognize them. That is, the two lines of code didn't appear in their usual colorful line of fashion, as my other lines of code. They appeared white and unrecognized.

Making sure that I saved those two lines of code, I exited my code editor, and then I restarted my computer. Once I reopened my code editor, the two lines of code appeared in their usual colorful fashion, and then I knew the lines of code were being "recognized" and taking effect.

<hr>

Now, since you have downloaded the `django-on-heroku` credentials into your application, we need to add those credentials to the `requirements.txt` file. We can do this simply by typing the following on the CLI:
```
pip freeze > requirements.txt
```
Remember we did this before when we [installed `gunicorn` into our application](https://github.com/AndrewSRea/My_Learning_Port/tree/main/JavaScript/Server-Side_Website_Programming/Django_Web_Framework/Alt_Instructions_Deployment#requirements). This command must be run any time you add any new dependencies to your application.

Once you have run this command, run your `git` commands once again to add all of the changes made to your application:
```
git add -A
git commit -m "Added the 'django-on-heroku' package"
git push heroku main
git push origin main
```

## Adding the tables to the PostgreSQL database

In your CLI, type the `heroku open` command again to open your Heroku app in a browser. What?! There's another error! We swear this is the final error you will encounter.

Again, there is an error message from our Django app which reads: <!-- error might be different for *LocalLibrary* so change if true -->
```
ProgrammingError at /
relation "..." does not exist
LINE 1: SELECT COUNT(*) AS "__count" FROM "..."
```
This error means your database tables do not yet exist. Your Django app is able to communicate with your database but you need to run some more commands in order to create the database tables. We also need to create a `superuser` for access to the Admin page of the app, just like we did when [we created a `superuser` for access to the local Django app's Admin page](https://github.com/AndrewSRea/My_Learning_Port/tree/main/JavaScript/Server-Side_Website_Programming/Django_Web_Framework/Django_Tutorial_4#creating-a-superuser).

Remember back when you were running your *LocalLibrary* app locally, whenever you made changes to the `models.py` file, those changes needed to `migrate` into your database by running `python manage.py migrate` in your virtual environment on the CLI. The same needs to be done here, except for your Heroku app, as your database tables have not yet been pushed into the PostgreSQL database.

So, on the CLI, type the following:
```
heroku run python manage.py migrate
```
Once you run that command, you should immediately see a message reading, `Running python manage.py on <your-heroku-app's-name> ...`. You should also see a little icon in the text -- a little field of dots rotating around -- showing the migration is happening in your PostgreSQL database.

After a short amount of time, you should then see a message in your terminal like so:
```
Operations to perform:
  Apply all migrations: admin, auth, ...
Running migrations:
  Applying contenttypes.0001_initial... OK
  ...
```
You should see a whole list of migrations with green OKs next to them, which denotes that your migrations to the PostgreSQL database was successful.

<hr>

**Note**: The `makemigrations` command does not need to be run as that is only used when you first create the tables for your database. We have already created our database tables. We just need to run `migrate` to push the database tables we already have into our PostgreSQL database in Heroku.

<hr>

## Creating the `superuser` for Heroku app's Admin page

Now you need to create a `superuser` for yourself so you will be able to access the Admin page of your *LocalLibrary* application in Heroku, similar to what you did in [Django Tutorial Part 4: Django admin site](https://github.com/AndrewSRea/My_Learning_Port/tree/main/JavaScript/Server-Side_Website_Programming/Django_Web_Framework/Django_Tutorial_4#django-tutorial-part-4-django-admin-site). However, the difference here is that we will be using Heroku commands to create this `superuser`. (Remember, Heroku has its own CLI commands [as we saw earlier](https://github.com/AndrewSRea/My_Learning_Port/tree/main/JavaScript/Server-Side_Website_Programming/Django_Web_Framework/Alt_Instructions_Deployment#install-the-heroku-client).)

So, using Heroku CLI commands, we will create a bash shell in the terminal from which we can create our `superuser`. To do this, type:
```
heroku run bash
```
...on the CLI, and you should immediately see a message reading,
```
Running bash on <your-heroku-app's-name> ...
```
...and again you should see that little icon in the text with the little field of dots rotating around, signifying that a bash shell is starting to generate.

When the process is finished, you should then see this text in your terminal:
```
~ $
```
...with your cursor blinking right beside the text. This means your bash shell is open and connected to your Heroku application, and ready to start taking commands.

You can check to make sure your bash shell is connected to your Heroku application by typing `ls` on the command line. This should list all of the files and folders sitting within the root directory of your Heroku application. And if you notice, the `ls` command is the same as if you typed `ls` in your regular CLI in your terminal.

So just like the commands you would use in your regular CLI, you can type the following in your Heroku bash shell:
```
python manage.py createsuperuser
```
When you run that command, a prompt will appear asking for your `Username`. Here you can type in any `Username` you wish to use for your `superuser` account, and press <kbd>Enter</kbd>.

Then another prompt will appear for your `Email address`. Enter any email address you wish to use. And then a prompt will appear for your `Password`. Enter a `Password`, and a prompt will appear asking you to input that same `Password (again)`. Remember to keep all of this information on hand for future use.

You should then receive a message which reads `Superuser created successfully.` Once you have received that message, you can then exit the Heroku bash shell by simply typing `exit` and pressing <kbd>Enter</kbd>.

Now that you're on your local terminal, on the CLI type `heroku open` to open your Heroku app in a browser and voilà! You should see the beautiful *LocalLibrary* app you've spent all this time creating, shining there for all to see, hosted by Heroku!

## Test your newly hosted *LocalLibrary* Heroku app

You can now check out the features of your *LocalLibrary* app, to test whether the functionality works.

If you go to the URL address bar of your app and type `/admin` at the end of the URL, you can see if all of the functionality of your Admin page works. Login with your newly created `superuser` username and password. If the functionality is working, you can test the "Logout" and "Login" functionality.

You can test the "Register" functionality by creating a new User. You can try to add Books and Authors. Just test out all of the functionality of your newly hosted *LocalLibrary* app.

There is one more thing we need to change in our *LocalLibrary* application locally to make sure our app continues its debugging process and catches any possible future errors.

## The Django deployment checklist

Django provides [its own deployment checklist](https://docs.djangoproject.com/en/4.0/howto/deployment/checklist/) for you to review every time you deploy a Django application to an exterior hosting website. Because the internet is a dangerous place, you should reveiew this checklist to make sure your application is safe from any possible hackers.

In fact, there is one thing on this checklist we need to do to our *LocalLibrary* app, to ensure it continues its debugging process and catches any possible errors.

Open your `settings.py` file, and near the top of the file, change `DEBUG` to the following:
```
DEBUG = (os.environ.get('DEBUG_VALUE') == 'True')
```
Rememeber we put a `DEBUG_VALUE` environment variable inside an `.env` file, as `export DEBUG_VALUE="True"`. That environment variable will be `export`ed here. The `DEBUG_VALUE` is set to the string of `"True"`, so when we say "if the DEBUG_VALUE is equal to 'True'" (`==`), "then the entire conditional (`(os.environ.get('DEBUG_VALUE'))`) is true, so `DEBUG` can run, or continue the debugging process.

Now run your `git` commands one last and final time to add all of the changes you have made to your application:
```
git add -A
git commit -m "Added a superuser to the Admin page and changed DEBUG_VALUE"
git push heroku main
git push origin main
```

**Congratulations! You hung in there and finally deployed your *LocalLibrary* app to Heroku! Well done!** 

You can now share your *LocalLibrary* app with whomever you please by just copying the URL address of your deployed Heroku app, just as I will do here by example so you can see my *LocalLibrary* app hosted in Heroku:

* [My LocalLibrary app deployed on Heroku](https://peaceful-ridge-89504.herokuapp.com/catalog/)
* [The code for my LocalLibrary app](https://github.com/AndrewSRea/local_library)

<hr>

[[Previous page]](https://github.com/AndrewSRea/My_Learning_Port/tree/main/JavaScript/Server-Side_Website_Programming/Django_Web_Framework/Assessment#assessment-diy-django-mini-blog) - [[Top]](https://github.com/AndrewSRea/My_Learning_Port/tree/main/JavaScript/Server-Side_Website_Programming/Django_Web_Framework/Alt_Instructions_Deployment#alternate-instructions-for-deploying-a-django-app-to-heroku) - [[Back to the Django Web Framework opening page]](https://github.com/AndrewSRea/My_Learning_Port/tree/main/JavaScript/Server-Side_Website_Programming/Django_Web_Framework#django-web-framework-python)