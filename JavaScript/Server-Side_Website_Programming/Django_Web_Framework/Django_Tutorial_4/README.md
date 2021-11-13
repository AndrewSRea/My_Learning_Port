# Django Tutorial Part 4: Django admin site

Now that we've created models for the [LocalLibrary](https://github.com/AndrewSRea/My_Learning_Port/tree/main/JavaScript/Server-Side_Website_Programming/Django_Web_Framework/Django_Tutorial_Local_Library#django-tutorial-the-local-library-website) website, we'll use the Django Admin site to add some "real" book data. First, we'll show you how to register the models with the admin site, then we'll show you how to login and create some data. At the end of the article, we will show some of the ways you can further improve the presentation of the Admin site.

## Overview

The Django admin *application* can use your models to automatically build a site area that you can use to create, view, update, and delete records. This can save you a lot of time during development, making it very easy to test your models and get a feel for whether you have the *right* data. The admin application can also be useful for managing data in production, depending on the type of website. The Django project recommends it only for internal data management (i.e. just for use by admins, or people internal to your organization), as the model-centric approach is not necessarily the best possible interface for all users, and exposes a lot of unnecessary detail about the models.

All the configuration required to include the admin application in your website was done automatically when you [created the skeleton project](https://github.com/AndrewSRea/My_Learning_Port/tree/main/JavaScript/Server-Side_Website_Programming/Django_Web_Framework/Django_Tutorial_2#django-tutorial-part-2-creating-a-skeleton-website). (For information about actual dependencies needed, see the [Django docs here](https://docs.djangoproject.com/en/3.1/ref/contrib/admin/).) As a result, all you **must** do to add your models to the admin application is to *register* them. At the end of this article, we'll provide a brief demonstration of how you might further configure the admin area to better display our model data.

After registering the models, we'll show how to create a new "superuser", login to the site, and create some books, authors, book instances, and genres. These will be useful for testing the views and templates we'll start creating in the next tutorial.

## Registering models

First, open **admin.py** in the catalog application (**/locallibrary/catalog/admin.py**). It currently looks like this -- note that it already imports `django.contrib.admin`:
```
from django.contrib import admin

# Register your models here
```
Register the models by copying the following text into the bottom of the file. This code imports the models and then calls `admin.site.register` to register each of them.
```
from .models import Author, Genre, Book, BookInstance

admin.site.register(Book)
admin.site.register(Author)
admin.site.register(Genre)
admin.site.register(BookInstance)
```

<hr>

**Note**: If you accepted the challenge to create a model to represent the natural language of a book ([see the models tutorial article](https://github.com/AndrewSRea/My_Learning_Port/tree/main/JavaScript/Server-Side_Website_Programming/Django_Web_Framework/Django_Tutorial_3#language-model----challenge)), import and register it, too!

<hr>

This is the simplest way of registering a model, or models, with the site. The admin site is highly customizable, and we'll talk more about the other ways of registering your models further down.













cd JavaScript/Server-Side_Website_Programming/Django_Web_Framework/Django_Tutorial_4