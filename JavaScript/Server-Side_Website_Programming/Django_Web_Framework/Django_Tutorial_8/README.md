# Django Tutorial Part 8: User authentication and permissions

In this tutorial, we'll show you how to allow users to log in to your site with their own accounts, and how to control what they can do and see based on whether or not they are logged in and their *permissions*. As part of this demonstration, we'll extend the [LocalLibrary](https://github.com/AndrewSRea/My_Learning_Port/tree/main/JavaScript/Server-Side_Website_Programming/Django_Web_Framework/Django_Tutorial_Local_Library#django-tutorial-the-local-library-website) website, adding login and logout pages, and user- and staff-specific pages for viewing books that have been borrowed.

## Overview

Django provides an authentication and authorization ("permission") system, built on top of the session framework discussed in the [previous tutorial](https://github.com/AndrewSRea/My_Learning_Port/tree/main/JavaScript/Server-Side_Website_Programming/Django_Web_Framework/Django_Tutorial_7#django-tutorial-part-7-sessions-framework), that allows you to verify user credentials and define what actions each user is allowed to perform. The framework includes built-in models for `Users` and `Groups` (a generic way of applying permissions to more than one user at a time), permissions/flags that designate whether a user may perform a task, forms and views for logging in users, and view tools for restricting content.

<hr>

**Note**: According to Django, the authentication system aims to be very generic, and so does not provide some features provided in other web authentication systems. Solutions for some common problems are available as third-party packages. For example, throttling of login attempts and authentication against third parties (e.g. OAuth).

<hr>

In this tutorial, we'll show you how to enable user authentication in the [LocalLibrary](https://github.com/AndrewSRea/My_Learning_Port/tree/main/JavaScript/Server-Side_Website_Programming/Django_Web_Framework/Django_Tutorial_Local_Library#django-tutorial-the-local-library-website) website, create your own login and logout pages, add permissions to your models, and control access to pages. We'll use the authentication/permissions to display lists of books that have been borrowed for both users and librarians.

The authentication system is very flexible, and you can build up your URLs, forms, views, and templates from scratch if you like, just calling the provided API to log in the user. However, in this article, we're going to use Django's "stock" authentication views and forms for our login and logout pages. We'll still need to create some templates, but that's pretty easy.

We'll also show you how to create permissions, and check on login status and permissions in both views and templates.

## Enabling authentication

The authentication was enabled automatically when we [created the skeleton website](https://github.com/AndrewSRea/My_Learning_Port/tree/main/JavaScript/Server-Side_Website_Programming/Django_Web_Framework/Django_Tutorial_2#django-tutorial-part-2-creating-a-skeleton-website) (in tutorial 2) so you don't need to do anything more at this point.

<hr>

**Note**: The necessary configuration was all done for us when we created the app using the `django-admin startproject` command. The database tables for users and model permissions were created when we first called `python manage.py migrate`.

<hr>

The configuration is set up in the `INSTALLED_APPS` and `MIDDLEWARE` sections of the project file (**locallibrary/locallibrary/settings.py**), as shown below:
```
INSTALLED_APPS = [
    ...
    'django.contrib.auth',  # Core authentication framework and its default models.
    'django.contrib.contenttypes',  # Django content type system (allows permissions to be associated with models).
    ....


MIDDLEWARE = [
    ...
    'django.contrib.sessions.middleware.SessionMiddleware',  # Manages sessions across requests.
    ...
    'django.contrib.auth.middleware.AuthenticationMiddleware',  # Associates users with requests using sessions.
    ....
```

## Creating users and groups

You already created your first user when we looked at the [Django admin site](https://github.com/AndrewSRea/My_Learning_Port/tree/main/JavaScript/Server-Side_Website_Programming/Django_Web_Framework/Django_Tutorial_4#django-tutorial-part-4-django-admin-site) in tutorial 4. (This was a superuser, created with the command `python manage.py createsuperuser`.) Our superuser is already authenticated and has all permissions, so we'll need to create a test user to represent a normal site user. We'll be using the admin site to create our *locallibrary* groups and website logins, as it is one of the quickest ways to do so.

<hr>

**Note**: You can also create users programmatically, as shown below. You would have to do this, for example, if developing an interface to allow users to create their own logins (you shouldn't give users access to the admin site).
```
from django.contrib.auth.models import User

# Create user and save to the database
user = User.objects.create_user('myusername', 'myemail@crazymail.com`, 'mypassword')

# Update fields and then save again
user.first_name = 'John'
user.last_name = 'Citizen'
user.save()
```
It is highly recommended to set up a custom user model when starting an actual project. You'll be able to easily customize it in the future if the need arises. For more information, see [Using a custom user model when starting](https://docs.djangoproject.com/en/3.1/topics/auth/customizing/#using-a-custom-user-model-when-starting-a-project) (Django docs).

<hr>

Below, we'll first create a group and then a user. Even though we don't have any permissions to add for our library members yet, if we need to later, it will be much easier to add them once to the group than individually to each member.

Start the development server and navigate to the admin site in your local web browser ([http://127.0.0.1:8000/admin/](http://127.0.0.1:8000/admin/)). Login to the site using the credntials for your superuser account. The top level of the Admin site displays all of your models, sorted by "Django application". From the **Authentication and Authorization** section, you can click the **Users** or **Groups** links to see their existing records.

![Image of a Django administration page showing "Users" and "Groups"](https://developer.mozilla.org/en-US/docs/Learn/Server-side/Django/Authentication/admin_authentication_add.png)

First, let's create a new group for our library members.

1. Click the **Add** button (next to Group) to create a new *Group*; enter the **Name** "Library Members" for the group.

![Image of the "Add group" page for "Authentication and Authorization"](https://developer.mozilla.org/en-US/docs/Learn/Server-side/Django/Authentication/admin_authentication_add_group.png)

2. We don't need any permissions for the group, so just press **SAVE**. (You will be taken to a list of groups.)

Now let's create a user:

1. Navigate back to the home page of the admin site.

2. Click the **Add** button next to *Users* to open the *Add user* dialog box.

![Image of the "Add user" page for "Authentication and Authorization"](https://developer.mozilla.org/en-US/docs/Learn/Server-side/Django/Authentication/admin_authentication_add_user_prt1.png)

3. Enter an appropriate **Username** and **Password**/**Password confirmation** for your test user.

4. Press **SAVE** to create the user. The admin site will create the new user and immediately take you to a *Change user* screen where you can change your **username** and add information for the User model's optional fields. These fields include the first name, last name, email address, and the user's status and permissions (only the **Active** flag should be set). Further down, you can specify the user's groups and permissions, and see important dates related to the user (e.g. their join date and last login date).

![Image of the "Change user" page for "Authentication and Authorization"](https://developer.mozilla.org/en-US/docs/Learn/Server-side/Django/Authentication/admin_authentication_add_user_prt2.png)

5. In the *Groups** section, select the **Library Members** group from the list of *Available groups*, and then press the **right-arrow** between the boxes to move it into the *Chosen groups* box.

![Image of the "Chosen groups" box in "Authentication and Authorization"](https://developer.mozilla.org/en-US/docs/Learn/Server-side/Django/Authentication/admin_authentication_user_add_group.png)

6. We don't need to do anything else here, so just select **SAVE** again, to go to the list of users.

That's it! Now you have a "normal library member" account that you will be able to use for testing (once we've implemented the pages to enable them to log in).

<hr>

**Note**: You should try creating another library member user. Also, create a group for Librarians, and add a user to that, too!

<hr>