# Client-Server Overview

Now that you know the purpose and potential benefits of server-side programming, we're going to examine in detail what happens when a server receives a "dynamic request" from a browser. As most website server-side code handles requests and responses in similar ways, this will help you understand what you need to do when writing most of your own code.

There is no real code in the discussion because we haven't yet chosen a web framework to use to write our code! This discussion is, however, still very relevant because the deswcribed behavior must be implemented by your server-side code, irrespective of which programming language or web framework you select.

## Web servers and HTTP (a primer)

Web browsers communicate with [web servers](https://developer.mozilla.org/en-US/docs/Learn/Common_questions/What_is_a_web_server) using the **H**yper**T**ext **T**ransfer **P**rotocol ([HTTP](https://developer.mozilla.org/en-US/docs/Web/HTTP)). When you click a link on a web page, submit a form, or run a search, the browser sends an *HTTP Request* to the server.

This request includes:

* A URL identifying the target server and resource (e.g. an HTML file, a particular data point on the server, or a tool to run).
* A method that defines the required action (for example, to get a file or to save or update some data). The different methods/verbs and their associated actions are listed below:
    - `GET`: Get a specific resource (e.g. an HTML file containing information about a product, or a list of products).
    - `POST`: Create a new resource (e.g. add a new article to a wiki, add a new contact to a database).
    - `HEAD`: Get the metadata information about a specific resource without getting the body like `GET` would. You might, for example, use a `HEAD` request to find out the last time a resource was updated, and then only use the (more "expensive") `GET` request to download the resource if it has changed.
    - `PUT`: Update an existing resource (or create a new one if it doesn't exist).
    - `DELETE`: Delete the specified resource.
    - [`TRACE`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods/TRACE), [`OPTIONS`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods/OPTIONS), [`CONNECT`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods/CONNECT), [`PATCH`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods/PATCH): These verbs are for less common/advanced tasks, so we won't cover them here. (But click the link for each of these verbs if you wish to know more.)
* Additional information can be enmcoded with the request (for example, HTML form data). Information can be encoded as:
    - URL parameters: `GET` requests encode data in the URL sent to the server by adding name/value pairs onto the end of it -- for example, `http://mysite.com?name=Fred&age=11`. You always have a question mark (`?`) separating the rest of the URL from the URL parameters, an equals sign (`=`) separating each name from its associated value, and an ampersand (`&`) separating each pair. URL parameters are inherently "insecure" as they can be changed by users and then resubmitted. As a result, URL parameters/`GET` requests are not used for requests that update data on the server.