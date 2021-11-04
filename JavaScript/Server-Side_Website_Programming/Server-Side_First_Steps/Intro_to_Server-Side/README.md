# Introduction to the server side

Welcome to the MDN beginner's server-side programming course! In this first article, we look at server-side programming from a high level, answering questions such as "What is it?", "How does it differ from client-side programming?", and "Why it is so useful?" After reading this article, you'll understand the additional power available to websites through server-side coding.

Most large-scale websites use server-side code to dynamically display different data when needed, generally pulled out of a database stored on a server and sent to the client to be displayed via some code (e.g. HTML and JavaScript).

Perhaps the most significant benefit of server-side code is that it allows you to tailor website content for individual users. Dynamic sites can highlight content that is more relevant based on user preferences and habits. It can also make sites easier to use by storing personal preferences and information -- for example, reusing stored credit card details to streamline subsequent payments.

It can even allow interaction with users of the site, sending notifications and updates via email or through other channels. All of these capabilities enable much deeper engagement with users.

In the modern world of web development, learning about server-side development is highly recommended.

## What is server-side website programming?

Web browsers communicate with [web servers](https://developer.mozilla.org/en-US/docs/Learn/Common_questions/What_is_a_web_server) using the **H**yper**T**ext **T**ransfer **P**rotocol ([HTTP](https://developer.mozilla.org/en-US/docs/Glossary/HTTP)). When you click a link on a web page, submit a form, or run a search, an **HTTP request** is sent from your browser to the target server.

The request includes a URL identifying the affected resource, a method that defines the required action (for example, to get, delete, or post the resource), and may include additional information encoded in URL parameters (the field-value pairs sent via a [query string](https://en.wikipedia.org/wiki/Query_string)), as POST data (data sent by the [HTTP POST method](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods/POST)), or in associated [cookies](https://developer.mozilla.org/en-US/docs/Glossary/Cookie).

Web servers wait for client request messages, process them when they arrive, and reply to the web browser with an **HTTP response** message. The response contains a status line indicating whether or not the request succeeded (e.g. "HTTP/1.1 200 OK" for success).

The body of a successful response to a request would contain the requested resource (e.g. a new HTML page, or an image, etc...), which could then be displayed by the web browser.

### Static sites

The diagram below shows a basic web server architecture for a *static site* (a static site is one that returns the same hard-coded content from the server whenever a particular resource is requested). When a user wants to navigate to a page, the browser sends an HTTP "GET" request specifying its URL.

The server retrieves the requested document from its file system and returns an HTTP response containing the document and a [success status](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status#successful_responses) (usually 200 OK). If the file cannot be retrieved for some reason, an error status is returned. (See [client error responses](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status#client_error_responses) and [server error responses](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status#client_error_responses).)

![Image of a diagram showing basic web server architecture](https://developer.mozilla.org/en-US/docs/Learn/Server-side/First_steps/Introduction/basic_static_app_server.png)

### Dynamic sites

A dynamic website is one where some of the response content is generated *dynamically*, only when needed. On a dynamic website, HTML pages are normally created by inserting data from a database into placeholders in HTML templates. (This is a much more efficient way of storing large amounts of content than using static websites.)

A dynamic site can return different data for a URL based on information provided by the user or stored preferences and can perform other operations as part of returning a response (e.g. sending notifications).

Most of the code to support a dynamic website must run on the server. Creating this code is known as "**server-side programming**" (or sometimes as "**back-end scripting**").

The diagram below shows a simple architecture for a *dynamic website*. As in the previous diagram, browsers send HTTP requests to the server, then the server processes the requests and returns appropriate HTTP responses.

Requests for *static* resources are handled in the same way as for static sites. (Static resources are any files that don't change -- typically CSS, JavaScript, images, pre-created PDF files, etc.)

![Image of a diagram showing simple architecture of a dynamic website](https://developer.mozilla.org/en-US/docs/Learn/Server-side/First_steps/Introduction/web_application_with_html_and_steps.png)

Requests for dynamic resources are instead forwarded (2) to server-side code (shown in the diagram as a *Web Application*). For "dynamic requests", the server interprets the request, reads the required information from the database (3), combines the retrieved data with HTML templates (4), and sends back a response containing the generated HTML (5,6).

## Are server-side and client-side programming the same?

Let's now turn our attention to the code involved in server-side and client-side programming. In each case, the code is significantly different:

* They have different purposes and concerns.
* They generally don't use the same programming languages. (The exception being JavaScript, which can be used on the server- and client-side.)
* They run inside different operating system environments.

Code running in the browser is known as **client-side code** and is primarily concerned with improving the appearance and behavior of a rendered webpage. This includes selecting and styling UI components, creating layouts, navigation, form validation, etc. By contrast, server-side website programming mostly involves choosing *which content* is returned to the browser in response to requests. The server-side code handles tasks like validating submitted data and requests, using databases to store and retrieve data and sending the correct data to the client as required.

Client-side code is written using [HTML](https://developer.mozilla.org/en-US/docs/Learn/HTML), [CSS](https://developer.mozilla.org/en-US/docs/Learn/CSS), and [JavaScript](https://github.com/AndrewSRea/My_Learning_Port/tree/main/JavaScript#javascript). It is run inside a web browser and has little or no access to the underlying operating system (including limited access to the file system).

Web developers can't control what browser every user might be using to view a website. Browsers provide inconsistent levels of compatibility with client-side code features, and part of the challenge of client-side programming is handling differences in browser support gracefully.

Server-side code can be written in any number of programming languages. Examples of popular server-side web languages include PHP, Python, Ruby, C#, and JavaScript (NodeJS). The server-side code has full access to the server operating system and the developer can choose what programming language (and specific version) they wish to use.

Developers typically write their code using **web frameworks**. Web frameworks are collections of functions, objects, rules, and other code constructs designed to solve common problems, speed up development, and simplify the different types of tasks faced in a particular domain.

Again, while both client- and server-side code use frameworks, the domains are very different, and hence so are the frameworks. Client-side web frameworks simplify layout and presentation tasks while server-side web frameworks provide a lot of "common" web server functionality that you might otherwise have to implement yourself (e.g. support for sessions, support for users and authentication, easy database access, templating libraries, etc.)

<hr>

**Note**: Client-side frameworks are often used to help speed up development of client-side code, but you can also choose to write all the code by hand. In fact, writing your code by hand can be quicker and more efficient if you only need a small, simple website UI.

In contrast, you would almost never consider writing the server-side component of a web app without a framework. Implementing a vital feature like an HTTP server is really hard to do from scratch in, say, Python, but Python web frameworks like Django provide one out of the box, along with other very useful tools.

<hr>