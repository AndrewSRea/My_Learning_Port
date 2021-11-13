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

## Creating a superuser

In order to log into the admin site, we need a user acount with *Staff* status enabled. In order to view and create records, we also need this user to have permissions to manage all our objects. You can create a "superuser" account that has full access to the site and all needed permissions using **manage.py**.

Call the following command, in the same directory as **manage.py**, to create the superuser. You will be prompted to enter a username, email address, and *strong* password.
```
python3 manage.py createsuperuser
```
Once this command completes, a new superuser will have been added to the database. Now restart the development server so we can test the login:
```
python3 manage.py runserver
```

## Logging in and using the site

To login to the site, open the */admin* URL (e.g. [http://127.0.0.1:8000/admin](http://127.0.0.1:8000/admin)) and enter your new superuser userid and password credentials. (You'll be redirected to the *login* page, and then back to the */admin* URL after you've entered your details.)

This part of the site displays all our models, grouped by installed application. You can click on a model name to go to a screen that lists all its associated records, and you can further click on those records to edit them. You can also directly click the **Add** link next to each model to start creating a record of that type.

![Image of a Django Admin application open in a browser](https://developer.mozilla.org/en-US/docs/Learn/Server-side/Django/Admin_site/admin_home.png)

Click on the **Add** link to the right of *Books* to create a new book. (This will display a dialog much like the one below.) Note how the titles of each field, the type of widget used, and the `help_text` (if any) match the values you specified in the model.

Enter values for the fields. You can create new authors or genres by pressing the **+** button next to the respective fields (or selecting existing values from the lists if you've created them). When you're done, you can press **SAVE**, **Save and add another**, or **Save and continue editing** to save the record.

![Image of "Add book" fields in a Django Admin application](https://developer.mozilla.org/en-US/docs/Learn/Server-side/Django/Admin_site/admin_book_add.png)

<hr>

**Note**: At this point, we'd like you to spend some time adding a few books, authors, and genres (e.g. Fantasy) to your application. Make sure that each author and genre includes a couple of different books. (This will make your list and detail views more interesting when we implement them later on in the article series.)

<hr>

When you've finished adding books, click on the **Home** link in the top bookmark to be taken back to the main admin page. Then click on the **Books** link to display the current list of books (or on one of the other links to see other models lists). Now that you've added a few books, the list might look similar to the screenshot below. The title of each book is displayed; this is the value returned in the Book model's `__str__()` method that we specified in the last article.

![Image of list of books in the "Book" model in a Django Admin application](https://developer.mozilla.org/en-US/docs/Learn/Server-side/Django/Admin_site/admin_book_list.png)

From this list, you can delete books by selecting the checkbox next to the book you don't want, selecting the *delete...* action from the *Action* drop-down list, and then pressing the **Go** button. You can also add new books by pressing the **ADD BOOK** button.

You can edit a book by selecting its name in the link. The edit page for a book, shown below, is almost identical to the "Add" page. The main differences are the page title (*Change book*) and the addition of **Delete**, **HISTORY**, and **VIEW ON SITE** buttons. (This last button appears because we defined the `get_absolute_url()` method in our model.)

![Image of edit fields for changing parameter descriptions of a book](https://developer.mozilla.org/en-US/docs/Learn/Server-side/Django/Admin_site/admin_book_modify.png)

Now navigate back to the **Home** page (using the *Home* link in the breadcrumb trail) and then view the **Author** and **Genre** lists. You should already have quite a few created from when you added the new books, but feel free to add some more.

What you won't have is any *Book Instances*, because these are not createed from Books. (Although you can create a `Book` from a `BookInstance` -- this is the nature of the `ForeignKey` field.) Navigate back to the *Home* page and press the associated **Add** button to display the *Add book instance* screen below. Note the large, globally unique id, which can be used to separately identify a single copy of a book in the library.

![Image of "Add Book Instance" fields in a Django Admin application](https://developer.mozilla.org/en-US/docs/Learn/Server-side/Django/Admin_site/admin_bookinstance_add.png)

Create a number of these records for each of your books. Set the status as *Available* for at least some records, and *On loan* for others. If the status is **not** *Available*, then also set a future *Due back* date.

<hr>

**Personal note**: The application would not let me "*Save*" (etc.) a book instance without filling in the "**Imprint**" field. I tried to research what should be put into this field but I did not find an answer -- so I just input "null" into the field for each book instance.

<hr>

That's it! You've now learned how to set up and use the administration site. You've also created records for `Book`, `BookInstance`, `Genre`, and `Author` that we'll be able to use once we create our own views and templates.













cd JavaScript/Server-Side_Website_Programming/Django_Web_Framework/Django_Tutorial_4