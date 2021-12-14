# Express Tutorial Part 4: Routes and controllers

In this tutorial, we'll set up routes (URL handling code) with "dummy" handler functions for all the resource endpoints that we'll eventually need in the [LocalLibrary](https://github.com/AndrewSRea/My_Learning_Port/tree/main/JavaScript/Server-Side_Website_Programming/Express_Web_Framework/Express_Tutorial_Local_Library#express-tutorial-the-local-library-website) website. On completion, we'll have a modular structure for our route handling code, which we can extend with real handler functions in the following articles. We'll also have a really good understanding of how to create modular routes using Express!

## Overview

In the [last tutorial article](https://github.com/AndrewSRea/My_Learning_Port/tree/main/JavaScript/Server-Side_Website_Programming/Express_Web_Framework/Express_Tutorial_3#express-tutorial-part-3-using-a-database-with-mongoose), we defined *Mongoose* models to interact with the database, and used a (standalone) script to create some initial library records. We can now write the code to present that information to users. The first thing we need to do is determine what information we want to be able to display in our pages, and then define appropriate URLs for returning these resources. Then we're going to need to create the routes (URL handlers) and views (templates) to display those pages.

The diagram below is provided as a reminder of the main flow of data and things that need to be implemented when handling an HTTP request/response. In addition to the views and routes, the diagram shows "controllers" -- functions that separate out the code to route requests from the code that actually processes requests.

As we've already created the models, the main things we'll need to create are:

* "Routes" to forward the supported requests (and any information encoded in request URLs) to the appropriate controller functions.
* Controller functions to get the requested data from the models, create an HTML page displaying the data, and return it to the user to view in the browser.
* Views (templates) used by the controllers to render the data.

![Image of a diagram showing the data flow between Models, Views, Routes, and Controllers](https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/routes/mvc_express.png)

Ultimately, we might have pages to show lists and detail information for books, genres, authors, and bookinstances, along with pages to create, update, and delete records. That's a lot to document in one article. Therefore, most of this article will concentrate on setting up our routes and controllers to return "dummy" content. We'll extend the controller methods in our subsequent articles to work with model data.

The first section below provides a brief "primer" on how to use the Express [Router](https://expressjs.com/en/4x/api.html#router) middleware. We'll then use that knowledge in the following sections when we set up the LocalLibrary routes.

## Routes primer

A route is a section of Express code that associates an HTTP verb (`GET`, `POST`, `PUT`, `DELETE`, etc.), a URL path/pattern, and a function that is called to handle that pattern.

There are several ways to create routes. For this tutorial, we're going to use the [`express.Router`](https://expressjs.com/en/guide/routing.html#express-router) middleware as it allows us to group the route handlers for a particular part of a site together and access them using a common route-prefix. We'll keep all our library-related routes in a "catalog" module, and, if we add routes for handling user accounts or other functions, we can keep them grouped separately.

<hr>

**Note**: We discussed Express application routes briefly in our [Express Introduction > Creating route handlers](https://github.com/AndrewSRea/My_Learning_Port/tree/main/JavaScript/Server-Side_Website_Programming/Express_Web_Framework/Express_Node_Intro#creating-route-handlers). Other than providing better support for modularization (as discussed in the first subsection below), using *Router* is very similar to defining routes directly on the *Express application object*.

<hr>

The rest of this section provides an overview of how the `Router` can be used to define the routes.

### Defining and using separate route modules

The code below provides a concrete example of how we can create a route module and then use it in an *Express* application.

First, we create routes for a wiki in a module named **wiki.js**. The code first imports the Express application object, uses it to get a `Router` object and then adds a couple of routes to it using the `get()` method. Last of all, the module exports the `Router` object.
```
// wiki.js - Wiki route module.

var express = require('express');
var router = express.Router();

// Home page route.
router.get('/', function(req, res) {
    res.send('Wiki home page');
});

// About page route.
router.get('/about', function(req, res) {
    res.send('About this wiki');
});

module.exports = router;
```

<hr>

**Note**: Above we are defining our route handler callbacks directly in the router functions. In the LocalLibrary, we'll define these callbacks in a separate controller module.

<hr>

To use the router module in our main app file, we first `require()` the route module (**wiki.js**). We then call `use()` on the *Express* application to add the Router to the middleware handling path, specifying a URL path of 'wiki'.
```
var wiki = require('./wiki.js');
// ...
app.use('/wiki', wiki);
```
The two routes defined in our wiki route module are then accessible from `/wiki/` and `/wiki/about/`.

### Route functions

Our module above defines a couple of typical route functions. The "about" route (reproduced below) is defined using the `Router.get()` method, which responds only to HTTP GET requests. The first argument to this method is the URL path while the second is a callback function that will be invoked if an HTTP GET request with the path is received.
```
router.get('/about', function(req, res) {
    res.send('About this wiki');
});
```
The callback takes three arguments (usually named as shown: `req`, `res`, `next`) that will contain the HTTP Request object, HTTP response, and the *next* function in the middleware chain.

<hr>

**Note**: Router functions are [Express middleware](https://github.com/AndrewSRea/My_Learning_Port/tree/main/JavaScript/Server-Side_Website_Programming/Express_Web_Framework/Express_Node_Intro#using-middleware), which means that they must either complete (respond to) the request or call the `next` function in the chain. In the case above, we complete the request using `send()`, so the `next` argument is not used (and we choose not to specify it).

The router function above takes a single callback, but you can specify as many callback arguments as you want, or an array of callback functions. Each function is part of the middleware chain, and will be called in the order it is added to the chain (unless a preceding function completes the request).

<hr>

The callback function here calls [`send()`](https://expressjs.com/en/4x/api.html#res.send) on the response to return the string "About this wiki" when we receive a GET request with the path (`'/about'`). There are a [number of other response methods](https://expressjs.com/en/guide/routing.html#response-methods) for ending the request/response cycle. For example, you could call [`res.json()`](https://expressjs.com/en/4x/api.html#res.json) to send a JSON response or [`res.sendFile()`](https://expressjs.com/en/4x/api.html#res.sendFile) to send a file. The response method that we'll be using most often as we build up the library is [`render()`](https://expressjs.com/en/4x/api.html#res.render), which creates and returns HTML files using templates and data -- we'll talk a lot more about that in a later article!

### HTTP verbs

The example routes above use the `Router.get()` method to respond to HTTP GET requests with a certain path.

The `Router` also provides route methods for all the other HTTP verbs, that are mostly used in exactly the same way: `post()`, `put()`, `delete()`, `options()`, `trace()`, `copy()`, `lock()`, `mkcol()`, `move()`, `purge()`, `propfind()`, `proppatch()`, `unlock()`, `report()`, `mkactivity()`, `checkout()`, `merge()`, `m-search()`, `notify()`, `subscribe()`, `unsubscribe()`, `patch()`, `search()`, and `connect()`.

For example, the code below behaves just like the previous `/about` route, but only responds to HTTP POST requests.
```
router.post('/about', function(req, res) {
    res.send('About this wiki');
});
```

### Route paths

The route paths define the endpoints at which requests can be made. The examples we've seen so far have just been strings, and are used exactly as written: '/', '/about', '/book', 'any-random-path'.

Route paths can also be string patterns. String patterns use a form of regular expression syntax to define *patterns* of endpoints that will be matched. The syntax is listed below (note that the hyphen (`-`) and the dot (`.`) are interpreted literally by string-based paths):

* `?`: The endpoint must have 0 or 1 of the preceding character (or group), e.g. a route path of `'/ab?cd'` will match endpoints `acd` or `abcd`.
* `+`: The endpoint must have 1 or more of the preceding character (or group), e.g. a route path of `'/ab+cd'` will match endpoints `abcd`, `abbcd`, `abbbcd`, and so on.
* `*`: The endpoint may have an arbitrary string where the `*` character is placed, e.g. a route path of `'/ab*cd'` will match endpoints `abcd`, `abXcd`, `abSOMErandomTEXTcd`, and so on.
* `()`: Grouping match on a set of characters to perform another operation on, e.g. `'/ab(cd)?e'` will perform a `?`-match on the group `(cd)` -- it will match `abe` and `abcde`.

The route paths can also be JavaScript [regular expressions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions). For example, the route path below will match `catfish` and `dogfish`, but not `catflap`, `catfished`, and so on. Note that the path for a regular expression uses regular expression syntax (it is not a quoted string as in the previous cases).
```
app.get(/.*fish$/, function(req, res) {
    ...
});
```

<hr>

**Note**: Most of our routes for the LocalLibrary will use strings and not regular expressions. We'll also use route parameters as discussed in the next section.

<hr>

### Route parameters

Route parameters are *named URL segments* used to capture values at specific positions in the URL. The named segments are prefixed with a colon and then the name (e.g. `/:your_parameter_name/`). The captured values are stored in the `req.params` object using the parameter names as keys (e.g. `req.params.your_parameter_name`).

So, for example, consider a URL encoded to contain information about users and books: `http://localhost:3000/users/34/books/8989`.
We can extract this information as shown below, with the `userId` and `bookId` path parameters:
```
app.get('/users/:userId/books/:bookId', function(req, res) {
    // Access userId via: req.params.userId
    // Access bookId via: req.params.bookId
    res.send(req.params);
});
```
The names of route parameters must be made up of "word characters" (A-Z, a-z, 0-9, and _).

<hr>

**Note**: The URL */book/create* will be matched by a route like `/book/:bookId` (which will extract a "bookId" value of `'create'`). The first route that matches an incoming URL will be used, so if you want to process `/book/create` URLs separately, their route handler must be defined before your `/book/:bookId` route.

<hr>

That's all you need to get started with routes -- if needed, you can find more information in the Express docs: [Basic routing](https://expressjs.com/en/starter/basic-routing.html) and [Routing guide](https://expressjs.com/en/guide/routing.html). The following sections show how we'll set up our routes and controllers for the LocalLibrary.

## Routes needed for the LocaLibrary

The URLs that we're ultimately going to need for our pages are listed below, where *object* is replaced by the name of each of our models (book, bookinstance, genre, author), *objects* is the plural of object, and *id* is the unique instance field (`_id`) that is given to each Mongoose model instance by default.

* `catalog/` -- The home/index page.
* `catalog/<objects>/` -- The list of all books, bookinstances, genres, or authors (e.g. `/catalog/books/`, `/catalog/genres/`, etc.)
* `catalog/<object>/<id>` -- The detail page for a specific book, bookinstance, genre, or author with the given `_id` field value (e.g. `/catalog/book/5884493c1f4887f06c0e67d37`).
* `catalog/<object>/create` -- The form to create a new book, bookinstance, genre, or author (e.g. `/catalog/book/create`).
* `catalog/<object>/<id>/update` -- The form to update a specific book, bookinstance, genre, or author with the given `_id` field value (e.g. `/catalog/book/5884493c1f4887f06c0e67d37/update`).
* `catalog/<object>/<id>/delete` -- The form to delete a specific book, bookinstance, genre, or author with the given `_id` field value (e.g. `/catalog/book/5884493c1f4887f06c0e67d37/delete`).

The first home page and list pages don't encode any additional information. While the results returned will depend on the model type and the content in the database, the queries run to get the information will always be the same (similarly the code run for object creation will always be similar).

By contrast, the other URLs are used to act on a specific document/model instance -- these encode the identity of the item in the URL (shown as `<id>` above). We'll use path parameters to extract the encoded information and pass it to the route handler (and in a later article, we'll use this to dynamically determine what information to get from the database). By encoding the information in our URL, we only need one route for every resource of a particular type (e.g. one route to handle the display of every single book item).

<hr>

**Note**: Express allows you to construct your URLs any way you like -- you can encode information in the body of the URL as shown above, or use URL `GET` parameters (e.g. `/book/?id=6`). Whichever approach you use, the URLs should be kept clean, logical and readable. ([Check out the W3C advice here](https://www.w3.org/Provider/Style/URI).)

<hr>

Next, we create our route handler callback functions and route code for all the above URLs.

## Create the route-handler callback functions

Before we define our routes, we'll first create all the dummy/skeleton callback functions that they will invoke. The callbacks will be stored in separate "controller" modules for Books, BookInstances, Genres, and Authors. (You can use any file/module structure, but this seems an appropriate granularity for this project.)

Start by creating a folder for our controllers in the project root (**/controllers**) and then create separate controller files/modules for handling each of the models:
```
/express-locallibrary-tutorial   // the project root
    /controllers
        authorController.js
        bookController.js
        bookinstanceController.js
        genreController.js
```

### Author controller

Open the **/controllers/authorController.js** file and type in the following code:
```
var Author = require('../models/author');

// Display list of all Authors
exports.author_list = function(req, res) {
    res.send('NOT IMPLEMENTED: Author list');
};

// Display detail page for a specific Author
exports.author_detail = function(req, res) {
    res.send('NOT IMPLEMENTED: Author detail: ' + req.params.id);
};

// Display Author create form on GET
exports.author_create_get = function(req, res) {
    res.send('NOT IMPLEMENTED: Author create GET');
};

// Handle Author create on POST
exports.author_create_post = function(req, res) {
    res.send('NOT IMPLEMENTED: Author create POST');
};

// Display Author delete form on GET
exports.author_delete_get = function(req, res) {
    res.send('NOT IMPLEMENTED: Author delete GET'); 
};

// Handle Author delete on POST
exports.author_delete_post = function(req, res) {
    res.send('NOT IMPLEMENTED: Author delete POST');
};

// Display Author update form on GET
exports.author_update_get = function(req, res) {
    res.send('NOT IMPLEMENTED: Author update GET');
};

// Handle Author update on POST
exports.author_update_post = function(req, res) {
    res.send('NOT IMPLEMENTED: Author update POST');
};
```
The module first requires the model that we'll later be using to access and update our data. It then exports functions for each of the URLs we wish to handle (the create, update, and delete operations use forms, and hence also have additional methods for handling form post requests -- we'll discuss those methods in the "forms" article later on).

All the functions have the standard form of an *Express middleware function*, with arguments for the request and response. We could also include the `next` function to be called if the method does not complete the request cycle but in all these cases, it does, so we've omitted it. The methods return a string indicating that the associated page has not yet been created. If a controller function is expected to receive path parameters, these are output in the message string (see `req.params.is` above).