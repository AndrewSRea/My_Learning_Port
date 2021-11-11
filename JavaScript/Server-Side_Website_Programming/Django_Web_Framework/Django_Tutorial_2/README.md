# Django Tutorial Part 2: Creating a skeleton website

This second article in our [Django Tutorial](https://github.com/AndrewSRea/My_Learning_Port/tree/main/JavaScript/Server-Side_Website_Programming/Django_Web_Framework/Django_Tutorial_Local_Library#django-tutorial-the-local-library-website) shows how you can create a "skeleton" website project as a basis, which you can then populate with site-specific settings, paths, models, views, and templates.

## Overview

This article shows how you can create a "skeleton" website, which you can then populate with site-specific settings, paths, models, views, and templates. (We discuss these in later articles.)

To get started:

1. Use the `django-admin` tool to generate a project folder, the basic file templates, and **manage.py**, which serves as your project management script.
2. Use **manage.py** to create one or more *applications*. [**Note**: A website may consist of one or more sections. For example, main site, blog, wiki, downloads area, etc. Django encourages you to develop these components as separate *applications*, which could then be reused in different projects if desired.]
3. Register the new applications to include them in the project.
4. Hook up the **url/path** mapper for each application.

For the [Local Library website](https://github.com/AndrewSRea/My_Learning_Port/tree/main/JavaScript/Server-Side_Website_Programming/Django_Web_Framework/Django_Tutorial_Local_Library#django-tutorial-the-local-library-website), the website and project folders are named *locallibrary*, and includes one application named *catalog*. The top-level folder structure will therefore be as follows:
```
locallibrary/         # Website folder
    manage.py         # Script to run Django tools for this project (created using django-admin)
    locallibrary/     # Website/project folder (created using django-admin)
    catalog/          # Application folder (created using manage.py)
```
The following sections discuss the process steps in detail, and show how you can test your changes. At the end of this article, we discuss other site-wide configuration you might also do at this stage.

## Creating the project

1. Open a command shell (or a terminal window), and make sure you are in your [virtual environment](https://github.com/AndrewSRea/My_Learning_Port/tree/main/JavaScript/Server-Side_Website_Programming/Django_Web_Framework/Django_Development_Environment#using-a-virtual-environment).

2. Navigate to where you want to store your Django apps (make it somewhere easy to find like inside your *Documents* folder), and create a folder for your new website (in this case: *django_projects*). Then change into your newly-created directory:
```
mkdir django_projects
cd django_projects
```

3. Create the new project using the `django-admin startproject` command as shown, and then change into the project folder:
```
django-admin startproject locallibrary
cd locallibrary
```

The `django-admin` tool creates a folder/file structure as follows:
```
locallibrary/
    manage.py
    locallibrary/
        __init__.py
        settings.py
        urls.py
        wsgi.py
        asgi.py
```
Our current working directory should look something like this:
```
../django_projects/locallibrary/
```
The *locallibrary* project subfolder is the entry point for the website:

* **__init__.py** is an empty file that instructs Python to treat this directory as a Python package.
* **settings.py** contains all the website settings, including registering any applications we create, the location of our static files, database configuration details, etc.
* **urls.py** defines the site URL-to-view mappings. While this could contain *all* the URL mapping code, it is more common to delegate some of the mappings to particular applications, as you'll see later.
* **wsgi.py** is used to help your Django application communicate with the webserver. You can treat this as boilerplate.
* **asgi.py** is a standard for Python asynchronous web apps and servers to communicate with each other. ASGI is the asynchronous successor to WSGI and provides a standard for both asynchronous and synchronous Python apps (whereas WSGI provided a standard for synchronous apps only). It is backward-compatible with WSGI and supports multiple servers and application frameworks.

The **manage.py** script is used to create applications, work with databases, and start the development web server.

## Creating the catalog application

Next, run the following command to create the *catalog* application that will live inside our *locallibrary* project. Make sure to run this command from the same folder as your project's **manage.py** (that is, inside the *locallibrary* main folder, where the *locallibrary* and *manage.py* subfolders are):
```
python3 manage.py startapp catalog
```

<hr>

**Note**: The example command is for Linux/macOS X. On Windows, the command should be:
```
py -3 manage.py startapp catalog
```
If you're working on Windows, replace `python3` with `py -3` throughout this module.

If you are using Python 3.7.0 or later, you should only use `py manage.py startapp catalog`.

<hr>

The tool creates a new folder and populates it with files for the different parts of the application (shown in the following example). Most of the files are named after their purpose (e.g. views should be stored in **views.py**, models in **models.py**, tests in **tests.py**, administration site configuration in **admin.py**, application registration in **apps.py**) and contain some minimal boilerplate code for working with the associated objects.

The updated project directory should now look like this:
```
locallibrary/
    manage.py
    locallibrary/
    catalog/
        admin.py
        apps.py
        models.py
        tests.py
        views.py
        __init__.py
        migrations/
```
In addition, we now have:

* A *migrations* folder, used to store "migrations" -- files that allow you to automatically update your database as you modify your models.
* **__init__.py** -- an empty file created here so that Django/Python will recognize the folder as a [Python Package]() and allow you to use its objects within other parts of the project.

<hr>

**Note**: Have you noticed what is missing from the files list above? While there is a place for your views and models, there is nowhere for you to put your url mappings, templates, and static files. We'll show you how to create them further along. (These aren't needed in every website but they are needed in this example.)