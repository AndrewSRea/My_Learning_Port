# Server-side web frameworks

The previous article showed you what the communication between web clients and servers looks like, the nature of HTTP requests and responses, and what a server-side web application needs to do in order to respond to requests from a web browser. With this knowledge under our belt, it's time to explore how web frameworks can simplify these tasks, and give you an idea of how you'd choose a framework for your first server-side web application.

The following sections illustrate some points using code fragments taken from real web frameworks. Don't be concerned if it doesn't **all** make sense now. We'll be working you through the code in our framework-specific modules.

## Overview

Server-side web frameworks (a.k.a. "web application frameworks") are software frameworks that make it easier to write, maintain, and scale web applications. They provide tools and libraries that simplify common web development tasks, including routing URLs to appropriate handlers, interacting with databases, supporting sessions and user authorization, formatting output (e.g. HTML, JSON, XML), and improving security against web attacks.

The next section provides a bit more detail about how web frameworks can ease web application development. We then explain some of the criteria you can use for choosing a web framework, and then list some of your options.

## What can a web framework do for you?

Web frameworks provide tools and libraries to simplify common web development operations. You don't *have* to use a server-side web framework, but it is strongly advised -- it will make your life a lot easier.

This section discusses some of the functionality that is often provided by web frameworks. (Not every framework will necessarily provide all of these features!)

### Work directly with HTTP requests and responses

As we saw in the last article, web servers and browsers communicate via the HTTP protocol. Servers wait for HTTP requests from the browser and then return information in HTTP responses. Web frameworks allow you to write simplified syntax that will generate server-side code to work with these requests and responses. This means that you will have an easier job, interacting with easier, higher-level code rather than lower-level netowrking primitives.

The example below shows how this works in the Django (Python) web framework. Every "view" function (a request handler) receives an `HttpRequest` object containing request information, and is required to return an `HttpResponse` object with the formatted output (in this case, a string):
```
# Django view function
from django.http import HttpResponse

def index(request):
    # Get an HttpRequest (request)
    # perform operations using information from the request.
    # Return HttpResponse
    return HttpResponse('Output string to return')
```

### Route requests to the appropriate handler

