# Setting up a Django development environment

Now that you know what Django is for, we'll show you how to set up and test a Django development environment on Windows, Linux (Ubuntu), and macOS -- whatever common operating system you are using, this article should give you what you need to be able to start developing Django apps.

## Django development environment overview

Django makes it very easy to set up your own computer so that you can start developing web applications. This section explains what you get with the development environment, and provides an overview of some of your setup and configuration options. The remainder of the article explains the *recommended* method of installing the Django development environment on Ubuntu, macOS, and Windows, and how you can test it.

### What is the Django development environment?

The development environment is an installation of Django on your local computer that you can use for developing and testing Django apps prior to deploying them to a production environement.

The main tools that Django itself provides are a set of Python scripts for creating and working with Django projects, along with a simple *development webserver* that you can use to test local (i.e. on your computer, not an external web server) Django web applications on your computer's web browser.

There are other peripheral tools, which form part of the development environment, that we won't be covering here. These include things like a [text editor](https://developer.mozilla.org/en-US/docs/Learn/Common_questions/Available_text_editors) or IDE for editing code, and a source control management tool like [Git](https://git-scm.com/) for safely managing different versions of your code. We are assuming that you've already got a text editor installed.

### What are the Django setup options?

Django is extremely flexible in terms of how and where it can be installed and configured. Django can be:

* Installed on different operating systems.
* Installed from source, from the Python Package Index (PyPi) and in many cases, from the host computer's package manager application.
* Configured to use one of several databases, which may also need to be separately installed and configured.
* Run in the main system Python environment or within separate Python virtual environments.

Each of these options requires a slightly different configuration and setup. The following subsections explain some of your choices. For the rest of the article, we'll show you how to setup Django on a small number of operating systems, and that setup will be assumed throughout the rest of this module.

<hr>

**Note**: Other possible installation options are covered in the official Django documentation. We link to the [appropriate documents below](https://github.com/AndrewSRea/My_Learning_Port/tree/main/JavaScript/Server-Side_Website_Programming/Django_Web_Framework/Django_Development_Environment#see-also).

<hr>

#### What operating systems are supported?

Django web applications can be run on almost any machine that can run the Python 3 programming language: Windows, macOS, Linux/Unix, Solaris, to name just a few. Almost any computer should have the necessary performance to run Django during development.

In this article, we'll provide instructions for Windows, macOS, and Linux/Unix.

#### What version of Python should be used?

You can use any Python version supported by your target Django release. For Django 3.1.2, the allowed versions are Python 3.6. to 3.8 (see [FAQ: Installation](https://docs.djangoproject.com/en/3.1/faq/install/#what-python-version-can-i-use-with-django)).

The Django project *recommends* (and "officially supports") using the newest available supported Python release. 

<hr>

**Note**: Python 2.7 cannot be used with the current releases of Django. (The Django 1.11.x series is the last to support Python 2.7.)

<hr>

#### Where can we download Django?

There are three places to download Django:

* The Python Package Repository (PyPi), using the *pip* tool. This is the best way ti get the latest stable version of Django.
* Use a version from your computer's package manager. Distributions of Django that are bundled with operating systems offer a familiar installation mecahnism. Note, however, that the packaged version may be quite old, and can only be installed into the system's Python environment (which may not be what you want).
* Install from source. You can get and install the latest bleeding-edge version of Django from the source. This is not recommended for beginners but is needed when you're ready to start contributing back to Django itself.

This article shows how to install Django from PyPi, in order to get the latest stable version.

#### Which database?

Django officially supports the PostgreSQL, MariaDB, MySQL, Oracle, and SQLite databases, and there are community libraries that provide varying levels of support for other popular SQL and NoSQL databases. We recommend that you select the same database for both production and development. (Although Django abstracts many of the database differences using its Object-Relational Mapper (ORM), there are still [potential issues](https://docs.djangoproject.com/en/3.1/ref/databases/) that are better to avoid.)

For this article (and most of this module), we will be using the *SQLite* database, which stores its data in a file. SQLite is intended for use as a lightweight database and can't support a high level of concurrency. It is, however, an excellent choice for applications that are primarily read-only.

<hr>

**Note**: Django is configured to use SQLite by default when you start your website project using the standard tools (*django-admin*). It's a great choice when you're getting started because it requires no additional configuration or setup.

<hr>











## See also 