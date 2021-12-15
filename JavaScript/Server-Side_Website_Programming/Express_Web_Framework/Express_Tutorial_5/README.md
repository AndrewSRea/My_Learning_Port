# Express Tutorial Part 5: Displaying library data

We're now ready to add the pages that display the [LocalLibrary](https://github.com/AndrewSRea/My_Learning_Port/tree/main/JavaScript/Server-Side_Website_Programming/Express_Web_Framework/Express_Tutorial_Local_Library#express-tutorial-the-local-library-website) website books and other data. The pages will include a home page that shows how many records we have of each model type, and list and detail pages for all of our models. Along the way, we'll gain practical experience in getting records from the database, and using templates.

## Overview

In our previous tutorial articles, we defined [Mongoose models](https://github.com/AndrewSRea/My_Learning_Port/tree/main/JavaScript/Server-Side_Website_Programming/Express_Web_Framework/Express_Tutorial_3#express-tutorial-part-3-using-a-database-with-mongoose) that we can use to interact with a database and created some initial library records. We then [created all the routes](https://github.com/AndrewSRea/My_Learning_Port/tree/main/JavaScript/Server-Side_Website_Programming/Express_Web_Framework/Express_Tutorial_4#express-tutorial-part-4-routes-and-controllers) needed for the LocalLibrary website, but with "dummy controller" functions. (These are skeleton controller functions that just return a "NOT IMPLEMENTED" message when a page is accessed.)

The next step is to provide implementations for the pages that *display* our library information. (We'll look at implementing pages featuring forms to create, update, or delete information in later articles.) This includes updating the controller functions to fetch records using our models and defining templates to display this information to users.

We will start by providing overview/primer topics explaining how to manage asynchronous operations in controller functions and how to write templates using Pug. Then we'll provide implementations for each of our main "read-only" pages with a brief explanation of any special or new features that they use.

At the end of this article, you should have a good end-to-end understanding of how routes, asynchronous functions, views, and models work in practice.

## Displaying library data tutorial subarticles

The following subarticles go through the process of adding the different features required for us to display the required website pages. You need to read and work through each one of these in turn, before moving on to the next one.

1. [Aysnchrounous flow control using async]()
2. [Template primer]()
3. [The LocalLibrary base template]()
4. [Home page]()
5. [Book list page]()
6. [BookInstance list page]()
7. [Date formatting using luxon]()
8. [Author list page and Genre list page challenge]()
9. [Genre detail page]()
10. [Book detail page]()
11. [Author detail page]()
12. [BookInstance detail page and challenge]()

## Summary

We've now created all the "read-only" pages for our site: a home page that displays counts of instances of each of our models, and list and detail pages for our books, book instances, authors, and genres. Along the way, we've gained a lot of fundamental knowledge about controllers, managing flow control when using asynchronous operations, creating views using *Pug*, querying the site's database using models, passing information to a view, and creating and extending templates. The challenges will also have taught readers a little about date handling using *Luxon*.

In our next article, we'll build on our knowledge, creating HTML forms and form handling code to start modifying the data stored by the site.

## See also

* [Async module](https://caolan.github.io/async/v3/) (Async docs)
* [Using Template engines with Express](https://expressjs.com/en/guide/using-template-engines.html) (Express docs)
* [Pug](https://pugjs.org/api/getting-started.html) (Pug docs)
* [Luxon](https://github.com/moment/luxon#luxon) (Luxon docs)

<hr>

[[Previous page]](https://github.com/AndrewSRea/My_Learning_Port/tree/main/JavaScript/Server-Side_Website_Programming/Express_Web_Framework/Express_Tutorial_4#express-tutorial-part-4-routes-and-controllers) - [[Top]](https://github.com/AndrewSRea/My_Learning_Port/tree/main/JavaScript/Server-Side_Website_Programming/Express_Web_Framework/Express_Tutorial_5#express-tutorial-part-5-displaying-library-data) - [[First library data tutorial subarticle]]() - [[Express Tutorial Part 6 (Next page)]]()