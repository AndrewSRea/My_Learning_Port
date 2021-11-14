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