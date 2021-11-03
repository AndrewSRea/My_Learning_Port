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