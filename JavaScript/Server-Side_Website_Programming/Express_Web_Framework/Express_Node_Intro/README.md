# Express/Node introduction

In this first Express article, we answer the question "What is Node?" and "What is Express?", and give you an overview of what makes the Express web framework special. We'll outline the main features, and show you some of the main building blocks of an Express application (although at this point, you won't yet have a development environment in which to test it).

## Introducing Node

[Node](https://nodejs.org/en/) (or more formally *Node.js*) is an open-source, cross-platform runtime environment that allows developers to create all kinds of server-side tools and applications in [JavaScript](https://developer.mozilla.org/en-US/docs/Glossary/JavaScript). The runtime is intended for use outside of a browser context (i.e. running directly on a computer or server OS). As such, the environment omits browser-specific JavaScript APIs and adds support for more traditional OS APIs including HTTP and file system libraries.

From a web server development perspective, Node has a number of benefits:

* Great performance! Node was designed to optimize throughput and scalability in web applications and is a good solution for many common web-development problems (e.g. real-time web applications).
* Code is written in "plain old JavaScript", which means that less time is spent dealing with "context shift" between languages when you're writing both client-side and server-side code.
* JavaScript is a relatively new programming language and benefits from improvements in language design when compared to other traditional web-server languages (e.g. Python, PHP, etc.) Many other new and popular languages compile/convert into JavaScript so you can also use TypeScript, CoffeeScript, ClojureScript, Scala, LiveScript, etc.
* The node package manager (NPM) provides access to hundreds of thousands of reusable packages. It also has best-in-class dependency resolution and can also be used to automate most of the build toolchain.
* Node.js is portable. It is available on Microsoft Windows, macOS, Linux, Solaris, FreeBSD, OpenBSD, WebOS, and NonStop OS. Furthermore, it is well-supported by many web hosting providers, that often provide specific infrastructure and documentation for hosting Node sites.
* It has a very active third-party ecosystem and developer community, with lots of people who are willing to help.

You can use Node.js to create a simple web server using the Node HTTP package.

### Hello Node.js

The following example creates a web server that listens for any kind of HTTP request on the URL `http://127.0.0.1:8000/` -- when a request is received, the script will respond with the string: "Hello World". If you have already installed Node, you can follow these steps to try out the example:

1. Open Terminal (on Windows, open the command line utility).

2. Create the folder where you wnt to save the program -- for example, `test-node` -- and then enter it by entering the following command into your terminal:
```
cd test-node
```

3. Using your favorite text editor, create a file called `hello.js` and paste the following code into it:
```
// Load HTTP module
const http = require("http");

const hostname = "127.0.0.1";
const port = 8000;

// Create HTTP server
const server = http.createServer(function(req, res) {

    // Set the response HTTP header with HTTP status and Content type
    res.writeHead(200, {'Content-Type': 'text/plain'});

    // Send the response body "Hello World"
    res.end('Hello World\n');
});

// Prints a log once the server starts listening
server.listen(port, hostname, function() {
    console.log(`Server running at http://${hostname}:${port}/`);
})
```

4. Save the file in the folder you created above.

5. Go back to the terminal and type the following command:
```
node hello.js
```

Finally, navigate to `http://localhost:8000` in your web browser. You should see the text "**Hello World**" in the upper left of an otherwise empty web page.

## Web Frameworks

Other common web-development tasks are not directly supported by Node itself. If you want to add specific handling for different HTTP verbs (e.g. `GET`, `POST`, `DELETE`, etc.), separately handle requests at different URL path ("routes"), serve static files, or use templates to dynamically create the response, Node won't be of much use on its own. You will either need to write the code yourself, or you can avoid reinventing the wheel and use a web framework!

## Introducing Express

[Express](https://expressjs.com/) is the most popular *Node* web framework, and is the underlying library for a number of other popular [Node web frameworks](https://expressjs.com/en/resources/frameworks.html). It provides mechanisms to:

* Write handlers for requests with different HTTP verbs at different URL paths (routes).
* Integrate with "view" rendering engines in order to generate responses by inserting data into templates.
* Set common web application settings like the port to use for connecting, and the location of templates that are used for rendering the response.
* Add additional request processing "middleware" at any point within the request handling pipeline.

While *Express* itself is fairly minimalist, developers have created compatible middleware packages to address almost any web development problem. There are libraries to work with cookies, sessions, user logins, URL parameters, `POST` data, security headers, and *many* more. You can find a list of middleware packages maintained by the Express team at [Express Middleware](https://expressjs.com/en/resources/middleware.html) (along with a list of some popular third-party packages).

<hr>

**Note**: This flexibility is a double-edged sword. There are middleware packages to address almost any problem or requirement, but working out the right packages to use can sometimes be a challenge. There is also no "right way" to structure an application, and many examples you mjight find on the Internet are not optimal, or only show a small part of what you need to do in order to develop a web application.

<hr>

## Where did Node and Express come from?

Node was initially released, for Linux only, in 2009. The NPM package manager was released in 2010, and native Windows support was added in 2012. At the time of writing, the current LTS release is Node v12.18.4, while the latest release is Node v14.13.0. This is a tiny snapshot of a rich history. Delve into [Wikipedia](https://en.wikipedia.org/wiki/Node.js#History) if you want to know more.

Express was initially released in November 2010 and is currently on version 4.17.1 of the API (with 5.0 in "alpha"). You can check out the [changelog](https://expressjs.com/en/changelog/4x.html) for information about changes in the current release, and [GitHub](https://github.com/expressjs/express/blob/master/History.md) for more detailed historical release notes.

## How popular are Node and Express?

The popularity of a web framework is important because it is an indicator of whether it will continue to be maintained, and what resources are likely to be available in terms of documentation, add-on libraries, and technical support.

There isn't any readily-available and definitive measure of the popularity of server-side frameworks (although you can estimate popularity using mechanisms like counting the number of GitHub projects and StackOverflow questions for each platform). A better question is whether Node and Express are "popular enough" to avoid the problems of unpopular platforms. Are they continuing to evolve? Can you get help if you need it? Is there an opportunity for you to get paid work if you learn Express?

Based on the number of [high profile companies](https://expressjs.com/en/resources/companies-using-express.html) that use Express, the number of people contributing to the codebase, and the number of people providing both free and paid for support, then yes, *Express* is a popular framework!

## Is Express opinionated?

Web frameworks often refer to themselves as "opinionated" or "unopinionated".

Opinionated frameworks are those with opinions about the "right way" to handle any particular task. They often support rapid development *in a particular domain* (solving problems of a particular type) because the right way to do anything is usually well-understood and well-documented. However, they can be less flexible at solving problems outside their main domain, and tend to offer fewer choices for what components and approaches they can use.

Unopinionated frameworks, by contrast, have far fewer restrictions on the best way to glue components together to achieve a goal, or even what components should be used. They make it easier for developers to use the most suitable tools to complete a particular task, albeit at the cost that you need to find those components yourself.

Express is unopinionated. You can insert almost any compatible middleware you like into the request handling chain, in almost any order you like. You can structure the app in one file or multiple files, and using any directory structure. You may sometimes feel that you have too many choices!

## What does Express code look like?

In a traditional data-driven website, a web application waits for HTTP requests from the web browser (or other client). When a request is received, the application works out what action is needed bsed on the URL pattern and possibly associated information contained in `POST` data or `GET` data. Depending on what is required, it may then read or write information from a database or perform other tasks required to satisfy the request. The application will then return a response to the web browser, often dynamically creating an HTML page for the browser to display by inserting the retrieved data into placeholders in an HTML template.

Express provides methods to specify what function is called for a particular HTTP verb (`GET`, `POST`, `SET`, etc.) and URL pattern ("route"), and methods to specify what template ("view") engine is used, where template files are located, and what template to use to render a response. You can use Express middleware to add support for cookies, sessions, and users, getting `POST`/`GET` parameters, etc. You can use any database mechanism supported by Node. (Express does not define any database-related behavior.)

The following sections explain some of the common things you'll see when working with *Express* and *Node* code.

### Helloworld Express

First, let's consider the standard Express [Hello World](https://expressjs.com/en/starter/hello-world.html) example. (We discuss each part of this below, and in the following sections.)

<hr>

**Note**: If you have Node and Express already installed (or if you install them as shown in the [next article](https://github.com/AndrewSRea/My_Learning_Port/tree/main/JavaScript/Server-Side_Website_Programming/Express_Web_Framework/Node_Development_Environment#setting-up-a-node-development-environment)), you can save this code in a text file called **app.js** and run it in a bach command prompt by calling:
```
node ./app.js
```

<hr>

```
const express = require('express');
const app = express();
const port = 3000;

app.get('/', function(req, res) {
    res.send('Hello World!');
});

app.listen(port, function() {
    console.log(`Example app listening on port ${port}!`);
});
```
The first two lines `require()` (import) the express module and create an [Express application](https://expressjs.com/en/4x/api.html#app). This object, which is traditionally named `app`, has methods for routing HTTP requests, configuring middleware, rendering HTML views, registering a template engine, and modifiying [application settings](https://expressjs.com/en/4x/api.html#app.settings.table) that control how the application behaves (e.g. the environment mode, whether route definitions are case sensitive, etc.)

The middle part of the code (the three lines starting with `app.get`) shows a *route definition*. The `app.get()` method specifies a callback function that will be invoked whenever there is an HTTP `GET` request with a path (`'/'`) relative to the site root. The callback function takes a request and a response object as arguments, and calls [`send()`](https://expressjs.com/en/4x/api.html#res.send) on the response to return the string "Hello World!"

The final block starts up the server on a specified port ('3000') and prints a log comment to the console. With the server running, you could go to `localhost:3000` in your browser to see the example response returned.

### Importing and creating modules

A module is a JavaScript library/file that you can import into other code using Node's `require()` function. *Express* itself is a module, as are the middleware and database libraries that we use in our *Express*. First we invoke the `require()` function, specifying the name of the module as a string (`'express'`), and calling the returned object to create an [Express application](https://expressjs.com/en/4x/api.html#app). We can then access the properties and functions of the application object.
```
const express = require('express');
const app = express();
```
You can also create your own modules that can be imported in the same way.

<hr>

**Note**: You will *want* to create your own modules, because this allows you to organize your code into manageable parts -- a monolithic single-file application is hard to understand and maintain. Using modules also helps you manage your namespace, because only the variables you explicitly export are imported when you use a module.

<hr>

To make objects available outside of a module, you just need to expose them as additional properties on the `exports` object. For example, the **square.js** module below is a file that exports `area()` and `perimeter()` methods:
```
exports.area = function(width) { return width * width; };
exports.perimeter = function(width) { return 4 * width; };
```
We can import this module using `require()`, and then call the exported method(s) as shown:
```
const square = require('./square');  // Here we require() the name of the file without the (optional) .js file extension
console.log('The area of a square with a width of 4 is ' + square.area(4));
```

<hr>

**Note**: You can specify an absolute path to the module (or a name, as we did initially).

<hr>

If you want to export a complete object in one assignment instead of building it one property at a time, assign it to `module.exports` as shown below. (You can also do this to make the root of the `exports` object a constructor or other function):
```
module.exports = {
    area: function(width) {
        return width * width;
    },

    perimeter: function(width) {
        return 4 * width;
    }
};
```

<hr>

**Note**: You can think of `exports` as a [shortcut](https://nodejs.org/api/modules.html#modules_exports_shortcut) to `module.exports` within a given module. In fact, `exports` is just a variable that gets initialized to the value of `module.exports` before the module is evaluated. That value is a reference to an object (empty object in this case). This means that `exports` holds a reference to the same object referenced by `module.exports`. It also means that by assigning another value to `exports`, it's no longer bound to `module.exports`.

<hr>

For a lot more information about modules, see [Modules](https://nodejs.org/api/modules.html#modules_modules) (Node API docs).