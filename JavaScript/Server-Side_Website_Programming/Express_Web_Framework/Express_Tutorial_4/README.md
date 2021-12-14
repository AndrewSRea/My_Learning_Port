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