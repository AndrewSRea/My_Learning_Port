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

    // Send the reponse body "Hello World"
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