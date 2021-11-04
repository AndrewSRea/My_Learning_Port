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
* Additional information can be encoded with the request (for example, HTML form data). Information can be encoded as:
    - URL parameters: `GET` requests encode data in the URL sent to the server by adding name/value pairs onto the end of it -- for example, `http://mysite.com?name=Fred&age=11`. You always have a question mark (`?`) separating the rest of the URL from the URL parameters, an equals sign (`=`) separating each name from its associated value, and an ampersand (`&`) separating each pair. URL parameters are inherently "insecure" as they can be changed by users and then resubmitted. As a result, URL parameters/`GET` requests are not used for requests that update data on the server.
    - `POST` data: `POST` requests add new resources, the data for which is encoded within the request body.
    - Client-side cookies: Cookies contain session data about the client, including keys that the server can use to determine their login status and permissions/accesses to resources.

Web servers wait for client request messages, process them when they arrive, and reply to the web browser with an HTTP Response message. The response contains an [HTTP Response status code](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status) indicating whether or not the request succeeded (e.g. `"200 OK"` for success, `"404 Not Found"` if the resource cannot be found, `"403 Forbidden"` if the user isn't authorized to see the resource, etc.) The body of a successful response to a `GET` request would contain the requested resource.

When an HTML page is returned, it is rendered by the web browser. As part of processing the browser may discover links to other resources (e.g. an HTML page usually references JavaScript and CSS pages), and will send separate HTTP Requests to download these files.

Both static and dynamic websites (discussed in the following sections) use exactly the same communication protocol/patterns.

### GET request/response example

You can make a simple `GET` request by clicking on a link or searching on a site (like a search engine homepage). For example, the HTTP request that is sent when you perform a search on MDN for the term "client server overview" will look a lot like the test shown below. (It will not be identical because parts of the message depend on your browser/setup).

<hr>

**Note**: The format of HTTP messages is defined in a "web standard" ([RFC7230](https://www.rfc-editor.org/rfc/rfc7230.txt)). You don't need to know this level of detail, but at least now you know where this all came from!

<hr>

#### The request

Each line of the request contains information about it. The first part is called the **header**, and contains useful information about the request, in the same way that an [HTML head](https://developer.mozilla.org/en-US/docs/Learn/HTML/Introduction_to_HTML/The_head_metadata_in_HTML) contains useful information about an HTML document (but not the actuakl content itself, which is in the body):
```
GET /en-US/search?q=client+server+overview&topic=apps&topic=html&topic=css&topic=js&topic=api&topic=webdev HTTP/1.1
Host: developer.mozilla.org
Connection: keep-alive
Pragma: no-cache
Cache-Control: no-cache
Upgrade-Insecure-Requests: 1
User-Agent: Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/52.0.2743.116 Safari/537.36
Accept: text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8
Referer: https://developer.mozilla.org/en-US/
Accept-Encoding: gzip, deflate, sdch, br
Accept-Charset: ISO-8859-1,UTF-8;q=0.7,*;q=0.7
Accept-Language: en-US,en;q=0.8,es;q=0.6
Cookie: sessionid=6ynxs23n521lu21b1t136rhbv7ezngie; csrftoken=zIPUJsAZv6pcgCBJSCj1zU6pQZbfMUAT; dwf_section_edit=False; dwf_sg_task_completion=False; _gat=1; _ga=GA1.2.1688886003.1471911953; ffo=true
```
The first and second lines contain most of the information we talked about above:

* The type of request (`GET`).
* The target resource URL (`/en-US/search`).
* The URL parameters (`q=client+server+overview&topic=apps&topic=html&topic=css&topic=js&topic=api&topic=webdev`).
* The target/host website (developer.mozilla.org).
* The end of the first line also include a short string identifying the specific protocol version (`HTTP/1.1`).