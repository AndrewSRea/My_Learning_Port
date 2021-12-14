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
