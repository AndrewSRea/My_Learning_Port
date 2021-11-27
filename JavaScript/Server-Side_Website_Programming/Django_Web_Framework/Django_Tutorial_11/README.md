# Django Tutorial Part 11: Deploying Django to production

Now you've created (and tested) an awesome [LocalLibrary](https://github.com/AndrewSRea/My_Learning_Port/tree/main/JavaScript/Server-Side_Website_Programming/Django_Web_Framework/Django_Tutorial_Local_Library#django-tutorial-the-local-library-website) website, you're going to want to install it on a public web server so that it can be accessed by library staff and members over the Internet. This article provides an overview of how you might go about finding a host to deploy your website, and what you need to do in order to get your site ready for production.

## Overview

Once your site is finished (or finished "enough" to start public testing), you're going to need to host it somewhere more public and accessible than your personal development computer.

Up to now you've been working in a development environment, using the Django development web server to share your site to the local browser/network, and running your website with (insecure) development settings that expose debug and other private information. Before you can host a website externally, you're first going to have to:

* Make a few changes to your project settings.
* Choose an environment for hosting the Django app.
* Choose an environment for hosting any static files.
* Set up a production-level infrastructure for serving your website.

This tutorial provides some guidance on your options for choosing a hosting site, a brief overview of what you need to do in order to get your Django app ready for production, and a worked example of how to install the LocalLibrary website onto the [Heroku](https://www.heroku.com/) cloud hosting service.

## What is a production environment?

The production environment provided by the server computer where you will run your website for external consumption. The environment includes:

* Computer hardware on which the website runs.
* Operating system (e.g. Linux, Windows).
* Programming language runtime and framework libraries on top of which your website is written.
* Web server used to serve pages and other content (e.g. Nginx, Apache).
* Application server that passes "dynamic" requests between your Django website and the webserver.
* Databases on which your website is dependent.

<hr>

**Note**: Depending on how your production is configured, you might also have a reverse proxy, load balancer, etc.

<hr>

The server computer could be located on your premises and connected to the Internet by a fast link, but it is far more common to use a computer that is hosted "in the cloud". What this actually means is that your code is run on some remote computer (or possibly a "virtual" computer) in your hosting company's data center(s). The remote server will usually offer some guaranteed level of computing resources (e.g. CPU, RAM, storage memory, etc.) and Internet connectivity for a certain price.

This sort of remotely accessible computing/networking hardware is referred to as *Infrastructure as a Service (IaaS)*. Many IaaS vendors provide options to preinstall a particular operating system, onto which you must install the other components of your production environment. Other vendors allow you to select more fully-featured environments, perhaps including a complete Django and web-server setup.

<hr>

**Note**: Pre-built environments can make setting up your website very easy because they reduce the configuration, but the available options may limit you to an unfamiliar server (or other components) and may be based on an older version of the OS. Often it is better to installl components yourself, so that you get the ones that you want, and when you need to upgrade parts of the system, you have some idea of where to start!

<hr>

Other hosting providers support Django as part of a *Platform as a Service (PaaS)* offering. In this sort of hosting, you don't need to worry about most of your production environment (web server, application server, load balancers) as the host platform takes care of those for you (along with most of what you need to do in order to scale your application). That makes deployment quite easy, because you just need to concentrate on your web application and not all the other server infrastructure.

Some developers will choose the increased flexibility provided by IaaS over PaaS, while others will appreciate the reduced maintenance overhead and easier scaling of PaaS. When you're getting started, setting up your website on a PaaS system is much easier, and so that is what we'll do in this tutorial.

<hr>

**Note**: If you choose a Python/Django-friendly hosting provider, they should provide instructions on how to set up a Django website using different configurations of webserver, application server, reverse proxy, etc. (This won't be relevant if you choose a PaaS.) For example, there are many step-by-step guides for various configurations in the [Digital Ocean Django community docs](https://www.digitalocean.com/community/tutorials?q=django).

<hr>

## Choosing a hosting provider

There are well over 100 hosting providers that are known to either actively support or work well with Django. (You can find a fairly inexhaustive list at [DjangoFriedly hosts](https://djangofriendly.com/index.html).) These vendors provide different types of environments (IaaS, PaaS), and different levels of computing and network resources at different prices.

Some of the things to consider when choosing a host:

* How busy your site is likely to be and the cost of data and computing resources required to meet that demand.
* Level of support for scaling horizontally (adding more machines) and vertically (upgrading to more powerful machines) and the costs of doing so.
* Where the supplier has data centers, and hence where access is likely to be fastest.
* The host's historical uptime and downtime performance.
* Tools provided for managing the site -- are they easy to use and are they secure (e.g. SFTP vs. FTP)?
* In-built frameworks for monitoring your server.
* Known limitations. Some hosts will deliberately block certain services (e.g. email). Others offer only a certain number of hours of "live time" in some price tiers, or only offer a small amount of storage.
* Additional benefits. Some providers will offer free domain names and support for SSL certificates that you would otherwise have to pay for.
* Whether the "free" tier you're relying on expires over time, and whether the cost of migrating to a more expensive tier means you would have been better off using some other service in the first place!

The good news when you're starting out is that there are quite a few sites that provide "evaluation", "developer", or "hobbyist" computing environments for "free". These are always fairly resource constrained/limited environments, and you do need to be aware that they may expire after some introductory period. They are, however, great for testing low traffic sites in a real environment, and can provide an easy migration to paying for more resources when your site gets busier. Popular choices in this category include [Heroku](https://www.heroku.com/), [Python Anywhere](https://www.pythonanywhere.com/), [Amazon Web Services](https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/billing-free-tier.html), [Microsoft Azure](https://azure.microsoft.com/en-us/pricing/details/app-service/windows/), etc.

Many providers also have a "basic" tier that provides more useful levels of computing power and fewer limitations. [Digital Ocean](https://www.digitalocean.com/) and [Python Anywhere](https://www.pythonanywhere.com/) are examples of popular hosting providers that offer a relatively inexpensive basic computing tier (in the $5 to $10 USD per month range).

<hr>

**Note**: Remember that price is not the only selection criterion. If your website is successful, it may turn out that scalability is the most important consideration.

<hr>

## Getting your website ready to publish

The [Django skeleton website](https://github.com/AndrewSRea/My_Learning_Port/tree/main/JavaScript/Server-Side_Website_Programming/Django_Web_Framework/Django_Tutorial_2#django-tutorial-part-2-creating-a-skeleton-website) created using the *django-admin* and *manage.py* tools are configured to make development easier. Many of the Django project settings (specified in **settings.py**) should be different for production, either for security or performance reasons.

<hr>

**Note**: It is common to have a separate **settings.py** file for production, and to import sensitive settings from a separate file or an environment variable. This file should then be protected, even if the rest of the source code is available on a public repository.

<hr>

The critical settings that you must check are:

* `DEBUG`: This should be set as `False` in production (`DEBUG = False`). This stops the sensitive/confidential debug trace and variable information from being displayed.
* `SECRET_KEY`: This is a large random value used for CSRF protection, etc. It is important that the key used in production is not in source control or accessible outside the production server. The Django documents suggest that this might best be loaded from an environment variable or read from a server-only file.
```
# Read SECRET_KEY from an environment variable
import os
SECRET_KEY = os.environ['SECRET_KEY']

# OR

# Read secret key from a file
with open('/etc/secret_key.txt') as f:
    SECRET_KEY = f.read().strip()
```
Let's change the *LocalLibrary* application so that we read our `SECRET_KEY` and `DEBUG` variables from environment variables if they are defined, but otherwise use the default values in the configuration file.

Open **/locallibrary/settings.py**, disable the original `SECRET_KEY` configuration and add the new lines as shown below. During development, no environment variable will be specified for the key, so the default value will be used. (It shouldn't matter what key you use here, or if the key "leaks", because you won't use it in production.)
```
# SECURITY WARNING: keep the secret key used in production secret!
# SECRET_KEY = "cg#p$g+j9tax!#a3cup@1$8obt2_+&k3q+pmu)5%asj6yjpkag"
import os
SECRET_KEY = os.environ.get('DJANGO_SECRET_KEY', 'cg#p$g+j9tax!#a3cup@1$8obt2_+&k3q+pmu)5%asj6yjpkag')
```
Then comment out the existing `DEBUG` setting and add the new line shown below:
```
# SECURITY WARNING: don't run with debug turned on in production!
# DEBUG = True
DEBUG = os.environ.get('DJANGO_DEBUG', '') != 'False'
```
The value of the `DEBUG` will be `True` by default, but will only be `False` if the value of the `DJANGO_DEBUG` environment variable is set to `False`. Please note that environment variables are strings and not Python types. We therefore need to compare strings. The only way to set the `DEBUG` variable to `False` is to actually set it to the string `False`.

You can set the environment variable to `False` by issuing the following command:
```
export DJANGO_DEBUG=False
```
A full checklist of settings you might want to change is provided in [Deployment checklist](https://docs.djangoproject.com/en/3.1/howto/deployment/checklist/) (Django docs). You can also list a number of these using the terminal command below:
```
python3 manage.py check --deploy
```

## Example: Installing LocalLibrary on Heroku

This section provides a practical demonstration of how to install *LocalLibrary* on the [Heroku PaaS cloud](https://www.heroku.com/).

### Why Heroku?

Heroku is one of the longest running and popular cloud-based PaaS services. It originally supported only Ruby apps, but now can be used to host apps from many programming environments, including Django!

We are choosing to use Heroku for several reasons:

* Heroku has a [free tier](https://www.heroku.com/pricing) that is *really* free (albeit with some limitations).
* As a PaaS, Heroku takes care of a lot of the web infrastructure for us. This makes it much easier to get started, because you don't worry about servers, load balancers, reverse proxies, or any of the other web infrastructure that Heroku provides for us under the hood.
* While it does have some limitations, these will not affect this particular application. For example:
    - Heroku provides only short-lived storage so user-uploaded files cannot safely be stored on Heroku itself.
    - The free tier will sleep an inactive web app if there are no requests within a half hour period. The site may then take several seconds to respond when it is woken up.
    - The free tier limits the time that your site is running to a certain amount of hours every month (not including the time that the site is "asleep"). This is fine for a low use/demonstration site, but will not be suitable if 100% uptime is required.
    - Other limitations are listed in [Limits](https://devcenter.heroku.com/articles/limits) (Heroku docs).
* Mostly it just works, and if you end up loving it, scaling your app is very easy.

While Heroku is perfect for hosting this demonstration, it may not be perfect for your real website. Heroku makes things easy to set up and scale, at the cost of being less flexible, and potentially a lot more expensive once you get out of the free tier.

### How does Heroku work?

Heroku runs Django websites within one or more "[Dynos](https://devcenter.heroku.com/articles/dynos)", which are isolated, virtualized Unix containers that provide the environment required to run an application. The dynos are completely isolated and have an *ephemeral* file system (a short-lived file system that is cleaned/emptied every time the dyno restarts). The only thing that dynos share by default are application [configuration variables](https://devcenter.heroku.com/articles/config-vars). Heroku internally uses a load balancer to distribute web traffic to all "web" dynos. Since nothing is shared between them, Heroku can scale an app horizontally by adding more dynos (though, of course, you may also need to scale your database to accept additional connections).

Because the file system is ephemeral, you can't install services required by your application directly (e.g. databases, queues, caching systems, storage, email services, etc). Instead, Heroku web applications use backing services provided as independent "add-ons" by Heroku or third parties. Once attached to your web application, the dynos access the services using information contained in application configuration variables.

In order to execute your application, Heroku needs to be able to set up the appropriate environment and dependencies, and also understand how it is launched. For Django apps, we provide this information in a number of text files:

* **runtime.txt**: The programming language and version to use.
* **requirements.txt**: The Python component dependencies, including Django.
* **Procfile**: A list of processes to be executed to start the web application. For Django, this will usually be the Gunicorn web application server (with a `.wsgi` script).
* **wsgi.py**: [WSGI](https://wsgi.readthedocs.io/en/latest/what.html) configuration to call our Django application in the Heroku environment.

Developers interact with Heroku using a special client app/terminal, which is much like a Unix Bash shell. This allows you to upload code that is stored in a git repository, inspect the running processes, see logs, set configuration variables and much more!

In order to get our application to work on Heroku, we'll need to put our Django web application into a git repository, add the files above, integrate with a database add-on, and make changes to properly handle static files.

Once we've done all that, we can set up a Heroku account, get the Heroku client, and use it to install our website.

<hr>

**Note**: The instructions below reflect how to work with Heroku at time of writing (last modified Oct. 8, 2021). If Heroku significantly change their processes, you may wish to instead check their setup documents: [Getting Started on Heroku with Django](https://devcenter.heroku.com/articles/getting-started-with-python).

<hr>

That's all the overview you need in order to get started (see [How Heroku works](https://devcenter.heroku.com/articles/how-heroku-works) for a more comprehensive guide).

### Creating an application repository in GitHub

Heroku is closely integrated with the **git** source code version control system, using it to upload/synchronize any changes you make to the live system. It does this by adding a new Heroku "remote" repository named *heroku* pointing to a repository for your source on the Heroku cloud. During development, you use git to store changes on your own repository. When you want to deploy your site, you sync your changes to the Heroku repository.

<hr>

**Note**: If you're used to following good software development practices, you are probably already using git or some other SCM system. If you already have a git repository, then you can skip this step.

<hr>

There are a lot of ways to work with git, but one of the easiest is to first set up an account on [GitHub](), create the repository there, and then sync to it locally:

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

1. Install *git* for your local computer. (You can find versions for different platforms [here]().)

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

:warning: **Warning**: In 2020, GitHub changed the default repo branch name to "main" (from "master"). If using an older/exiasting repository, you might call `git push origin master` instead.

<hr>

When this operation completes, you should be able to go back to the page on GitHub where you created your repo, refresh the page, and see that your whole application has now been uploaded. You can continue to update your repository as files change using this add/commit/push cycle.

<hr>

**Note**: This is a good point to make a backup of your "vanilla" project -- while some of the changes we're going to be making in the following sections might be useful for deployment on any platform (or development), others might not.

The *best* way to do this is to use *git* to manage your revisions. With *git* you can not only go back to a particular old version, but you can maintain this in a separate "branch" from your production changes and cherry-pick any changes to move between production and development branches. [Learning Git](https://docs.github.com/en/get-started/quickstart/git-and-github-learning-resources) is well worth the effort, but is beyond the scope of this topic.

The *easiest* way to do this is to just copy your files into another location. Use whichever appraoch best matches your knowledge of git!

<hr>

### Update the app for Heroku

This section explains the changes you'll need to make to our *LocalLibrary* application to get it to work on Heroku. While Heroku's [Getting Started on Heroku with Django](https://devcenter.heroku.com/articles/getting-started-with-python) instructions assume you will use the Heroku client to also run your local development environment, our changes are compatible with the existing Django development server and the workflows we've already learned.

#### Procfile

Create the file `Procfile` (no extension) in the root of your GitHub repository to declare the application's process types and entry points. Copy the following text into it:
```
web: gunicorn locallibrary.wsgi --log-file -
```
The "`web:`" tells Heroku that this is a web dyno and can be sent HTTP traffic. The process to start in this dyno is *gunicorn*, which is a popular web application server that Heroku recommends. We start Gunicorn using the configuration information in the module `locallibrary.wsgi` (created with our application skeleton: **/locallibrary/wsgi.py**).

#### Gunicorn

[Gunicorn](https://gunicorn.org/) is the recommended HTTP server for use with Django on Heroku (as referenced in the Procfile above). It is a pure-Python HTTP server for WSGI applications that can run multiple Python concurrent processes within a single dyno (see [Deploying Python applications with Gunicorn](https://devcenter.heroku.com/articles/python-gunicorn) for more information).

While we won't need *Gunicorn* to serve our LocalLibrary application during development, we'll install it so that it becomes part of our [requirements](https://github.com/AndrewSRea/My_Learning_Port/tree/main/JavaScript/Server-Side_Website_Programming/Django_Web_Framework/Django_Tutorial_11#requirements) for Heroku to set up on the remote server.

Install *Gunicorn* locally on the command line using *pip* (which we installed when [setting up the development environment](https://github.com/AndrewSRea/My_Learning_Port/tree/main/JavaScript/Server-Side_Website_Programming/Django_Web_Framework/Django_Development_Environment#setting-up-a-django-development-environment)):

<hr>

**Note**: Make sure that you're in your Python virtual environment (use the `workon [name-of-virtual-environment]` command) before you install *Gunicorn* and further modules with *pip*, or you might experience problems with importing these modules in your **/locallibrary/settings.py** file in the later sections.

<hr>

```
pip3 install gunicorn
```

#### Database configuration

We can't use the default SQLite database on Heroku because it is file-based, and it would be deleted from the *ephemeral* file system every time the application restarts. (Typically once a day, and every time the application or its configuration variables are changed.)

The Heroku mechanism for handling this situation is to use a [database add-on](https://elements.heroku.com/addons#data-stores) and configure the web application using information from an environment [configuration variable](https://devcenter.heroku.com/articles/config-vars), set by the add-on. There are quite a lot of database options, but we'll use the [hobby tier](https://devcenter.heroku.com/articles/heroku-postgres-plans#plan-tiers) of the *Heroku postgres* database, as this is free, supported by Django, and automatically added to our new Heroku apps when using the free hobby dyno plan tier.

The database connection information is supplied to the web dyno using a configuration variable named `DATABASE_URL`. Rather than hard-coding this information into Django, Heroku recommends that developers use the [dj-database-url](https://pypi.org/project/dj-database-url/) package to parse the `DATABASE_URL` environment variable and automatically convert it to Django's desired configuration format. In addition to installing the *dj-database-url* package, we'll also need to install [psycopg2](), as Django needs this to interact with Postgres databases.





#### Requirements