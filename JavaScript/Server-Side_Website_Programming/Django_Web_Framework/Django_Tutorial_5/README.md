# Django Tutorial Part 5: Creating our home page

We're now ready to add the code that displays our first complete page -- a home page for the [LocalLibrary](https://github.com/AndrewSRea/My_Learning_Port/tree/main/JavaScript/Server-Side_Website_Programming/Django_Web_Framework/Django_Tutorial_Local_Library#django-tutorial-the-local-library-website) website. The home page will show the number of records we have for each model type and provide sidebar navigation links to our other pages. Along the way, we'll gain practical experience in writing basic URL maps and views, getting records from the database, and using templates.

## Overview

After we defined our models and created some initial library records to work with, it's time to write the code that presents that information to users. The first thing we need to do is determine what information we want to display in our pages, and define the URLs to use for returning those resources. Then we'll create a URL mapper, views, and templates to diplay the pages.

The following diagram describes the main data flow, and the components required when handling HTTP requests and responses. As we already implemented the model, the main components we'll create are:

* URL mappers to forward the supported URLs (and any information encoded in the URLs) to the appropriate view functions.
* View functions to get the requested data from the models, create HTML pages that display the data, and return the pages to the user to view in the browser.
* Templates to use when rendering data in the views.

![Image of the data flow between components of the "LocalLibrary" Django app](https://developer.mozilla.org/en-US/docs/Learn/Server-side/Django/Home_page/basic-django.png)

As you'll see in the next section, we have 5 pages to display, which is too much information to document in a single article. Therefore, this article will focus on how to implement the home page, and we'll cover the other pages in a subsequent article. This should give you a good end-to-end understanding of how URL mappers, views, and models work in practice.

## Defining the resource URLs

As this version of [LocalLibrary](https://github.com/AndrewSRea/My_Learning_Port/tree/main/JavaScript/Server-Side_Website_Programming/Django_Web_Framework/Django_Tutorial_Local_Library#django-tutorial-the-local-library-website) is essentially read-only for end users, we just need to provide a landing page for the site (a home page), and pages that *display* list and detail views for books and authors.

The URLs that we'll need for our pages are:

* `catalog/` -- The home (index) page .
* `catalog/books/` -- A list of all books.
* `catalog/authors/` -- A list of all authors.
* `catalog/book/<id>` -- The detail view for a particular book, with a field primary key of `<id>` (the default). For eaxmple, the URL for the third book added to the lsit will be `/catalog/book/3`.
* `catalog/author/<id>` -- The detail view for the specific author with a field primary key of `<id>`. For example, the URL for the 11th author added to the list will be `catalog/author/11`.

The first three URLs will return the index page, books list, and authors list. These URLs do not encode any additional information, and the queries that fetch data from the database will always be the same. However, the results that the queries return will depend on the contents of the database.

By contrast, the final two URLs will display detailed information about a specific book or author. These URLs encode the identity of the item to display (represented by `<id>` above). The URL mapper will extract the encoded information and pass it to the view, and the view will dynamically determine what information to get from the database. By encoding the information in the URL, we will use a single set of a URL mapping, a view, and a template to handle all books (or authors).

<hr>

**Note**: With Django, you can construct your URLs however you require. You can encode information in the body of the URL as shown above, or include `GET` parameters in the URL -- for example, `/book/?id=6`. Whichever approach you use, the URLs should be kept clean, logical, and readable, as [recommended by the W3C](). The Django documentation recommends encoding information in the body of the URL to achieve better URL design.

<hr>

As mentioned in the overview, the rest of this article describes how to construct the index page.

## Creating the index page

The first page we'll create is the index page (`catalog/`). The index page will include some static HTML, along with generated "counts" of different records in the database. To make this work, we'll create a URL mapping, a view, and a template.

<hr>

**Note**: It's worth paying a little extra attention in this section. Most of the information also applies to the other pages we'll create.

<hr>

### URL mapping

When we created the [skeleton website](https://github.com/AndrewSRea/My_Learning_Port/tree/main/JavaScript/Server-Side_Website_Programming/Django_Web_Framework/Django_Tutorial_2#django-tutorial-part-2-creating-a-skeleton-website), we updated the **locallibrary/urls.py** file to ensure that whenever a URL that starts with `catalog/` is received, the *URLConf* module `catalog.urls` will process the remaining substring.

The following snippet from **locallibrary/urls.py** includes the `catalog.urls` module:
```
urlpatterns += [
    path('catalog/', include('catalog.urls')),
]
```

<hr>

**Note**: Whenever Django encounters the import function [`django.urls.include()`](https://docs.djangoproject.com/en/3.1/ref/urls/#django.urls.include), it splits the URL string at the designated end character and sends the remaining substring to the included *URLconf* module for further processing.

<hr>

We also created a placeholder file for the *URLConf* module, named **/catalog/urls.py**. Add the following lines to that file:
```
urlpatterns = [
    path('', views.index, name='index'),
]
```
The `path()` function defines the following:

* A URL pattern, which is an empty string: `''`. We'll discuss URL patterns in detail when working on the other views.
* A view function that will be called if the URL pattern is detected: `views.index`, which is the function named `index()` in the **views.py** file.

The `path()` function also specifies a `name` parameter, which is a unique identifier for *this* particular URL mapping. You can use the name to "reverse" the mapper, i.e. to dynamically create a URL that points to the resource that the mapper is designed to handle. For example, we can use the `name` parameter to link to our home page from any other page by adding the following link in a template:
```
<a href="{% url 'index' %}">Home</a>
```

<hr>

**Note**: We can hard code the link as in `<a href="/catalog/">Home</a>`, but if we change the pattern for our home page -- for example, to `/catalog/index` -- the templates will no longer link correctly. Using a reversed URL mapping is more robust.

<hr>