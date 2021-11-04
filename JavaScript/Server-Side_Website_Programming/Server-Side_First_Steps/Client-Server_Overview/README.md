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
* The end of the first line also includes a short string identifying the specific protocol version (`HTTP/1.1`).

The final line contains information about the client-side cookies. You can see, in this case, the cookie includes an id for managing sessions: (`Cookie: sessionid=6ynxs23n521lu21b1t136rhbv7ezngie; ...`).

The remaining lines contain information about the browser used and the sort of responses it can handle. For example, you can see here that:

* The article creator's browser (`User-Agent`) is Mozilla Firefox (`Mozilla/5.0`).
* It can accept gzip compressed information (`Accept-Encoding: gzip`).
* It can accept the specified set of characters (`Accept-Charset: ISO-8859-1,UTF-8;q=0.7,*;q=0.7`) and languages (`Accept-Language: en-US,en;q=0.8,es;q=0.6`).
* The `Referer` line indicates the address of the web page that contained the link to this resource (i.e. the origin of the request, `https://developer.mozilla.org/en-US/`).

HTTP requests can also have a body, but it is empty in this case.

#### The response

The first part of the reponse for this request is shown below. The header contains information like the following:

* The first line includes the response code `200 OK`, which tells us that the request succeeded.
* We can see that the response is `text/html` formatted (`Content-Type`).
* We can also see that it uses the UTF-8 character set (`Content-Type: text/html; charset=utf-8`).
* The head also tells us how big it is (`Content-Length: 41823`).

At the end of the message, we see the **body** content, which contains the actual HTML returned by the request:
```
HTTP/1.1 200 OK
Server: Apache
X-Backend-Server: developer1.webapp.scl3.mozilla.com
Vary: Accept,Cookie, Accept-Encoding
Content-Type: text/html; charset=utf-8
Date: Wed, 07 Sep 2016 00:11:31 GMT
Keep-Alive: timeout=5, max=999
Connection: Keep-Alive
X-Frame-Options: DENY
Allow: GET
X-Cache-Info: caching
Content-Length: 41823

<!DOCTYPE html>
<html lang="en-US" dir="ltr" class="redesign no-js"  data-ffo-opensanslight=false data-ffo-opensans=false >
<head prefix="og: http://ogp.me/ns#">
  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=Edge">
  <script>(function(d) { d.className = d.className.replace(/\bno-js/, ''); })(document.documentElement);</script>
  ...
```
The remainder of the response header includes information about the response (e.g. when it was generated), the server, and how it expects the browser to handle the page (e.g. the `X-Frame-Options: DENY` line tells the browser not to allow this page to be embedded in an [`<iframe>`])(https://developer.mozilla.org/en-US/docs/Web/HTML/Element/iframe) in another site).

### POST request/response example

An HTTP `POST` is made when you submit a form containing information to be saved on the server.

#### The request

The text below shows the HTTP request made when a user submits new profile details on this site. The format of the request is almost the same as the `GET` request example shown previously, though the first line identifies this request as a `POST`.
```
POST /en-US/profiles/hamishwillee/edit HTTP/1.1
Host: developer.mozilla.org
Connection: keep-alive
Content-Length: 432
Pragma: no-cache
Cache-Control: no-cache
Origin: https://developer.mozilla.org
Upgrade-Insecure-Requests: 1
User-Agent: Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/52.0.2743.116 Safari/537.36
Content-Type: application/x-www-form-urlencoded
Accept: text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8
Referer: https://developer.mozilla.org/en-US/profiles/hamishwillee/edit
Accept-Encoding: gzip, deflate, br
Accept-Language: en-US,en;q=0.8,es;q=0.6
Cookie: sessionid=6ynxs23n521lu21b1t136rhbv7ezngie; _gat=1; csrftoken=zIPUJsAZv6pcgCBJSCj1zU6pQZbfMUAT; dwf_section_edit=False; dwf_sg_task_completion=False; _ga=GA1.2.1688886003.1471911953; ffo=true

csrfmiddlewaretoken=zIPUJsAZv6pcgCBJSCj1zU6pQZbfMUAT&user-username=hamishwillee&user-fullname=Hamish+Willee&user-title=&user-organization=&user-location=Australia&user-locale=en-US&user-timezone=Australia%2FMelbourne&user-irc_nickname=&user-interests=&user-expertise=&user-twitter_url=&user-stackoverflow_url=&user-linkedin_url=&user-mozillians_url=&user-facebook_url=
```
The main difference is that the URL doesn't have any parameters. As you can see, the information from the form is encoded in the body of the request. (For example, the new user fullname is set using: `&user-fullname=Hamish+Willee`.)

#### The response

The response from the request is shown below. The status code of `"302 Found"` tells the browser that the post succeeded, and that it must issue a second HTTP request to load the page specified in the `Location` field. The information is otherwise similar to that for the response to a `GET` request.
```
HTTP/1.1 302 FOUND
Server: Apache
X-Backend-Server: developer3.webapp.scl3.mozilla.com
Vary: Cookie
Vary: Accept-Encoding
Content-Type: text/html; charset=utf-8
Date: Wed, 07 Sep 2016 00:38:13 GMT
Location: https://developer.mozilla.org/en-US/profiles/hamishwillee
Keep-Alive: timeout=5, max=1000
Connection: Keep-Alive
X-Frame-Options: DENY
X-Cache-Info: not cacheable; request wasn't a GET or HEAD
Content-Length: 0
```

<hr>

**Note**: The HTTP responses and requests shown in these examples were captured using the [Fiddler](https://www.telerik.com/download/fiddler) application, but you can get similar information using web sniffers (e.g. [Websniffer](https://websniffer.cc)) or packet analyzers like [Wireshark](https://www.wireshark.org/). You can try this yourself. Use any of the linked tools, and then navigate through a site and edit profile information to see the different requests and responses. Most modern browsers also have tools that monitor network requests (for example, the [Network Monitor](https://developer.mozilla.org/en-US/docs/Tools/Network_Monitor) tool in Firefox).

<hr>

**Note**: Just for reference, Chrome has its own [Network Inspector](https://developer.chrome.com/docs/devtools/network/) within its DevTools.

<hr>

## Static sites

A *static site* is one that returns the same hard coded content from the server whenever a particular resource is requested. So, for example, if you have a page about a product at `/static/myproduct1.html`, this same page will be returned to every user. If you add another similar product to your site, you will need to add another page (e.g. `myproduct2.html`) and so on. This can start to get really inefficient. What happens when you get to thousands of product pages? You would repeat a lot of code across each page (the basic page template, structure, etc.), and if you wanted to change anything about the page structure -- like add a new "related products" section, for example -- then you'd have to change every page individually. 

<hr>

**Note**: Static sites are excellent when you have a small number of pages and you want to send the same content to every user. However, they can have a significant cost to maintain as the number of pages becomes larger.

<hr>

Let's recap on how this works, by looking again at the static site architecture diagram we looked at in the last article.

![Image of a diagram showing static site architecture](https://developer.mozilla.org/en-US/docs/Learn/Server-side/First_steps/Client-Server_overview/basic_static_app_server.png)

When a user wants to navigate to a page, the browser sends an HTTP `GET` request specifying the URL of its HTML page. The server retrieves the requested document from its file system and returns an HTTP response containing the document and an [HTTP Response status code](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status) of `"200 OK"` (indicating success). The server might return a different status code -- for example, `"404 Not Found"` if the file is not present on the server, or `"301 Moved Permanently"` if the file exists but has been redirected to a different location.

The server for a static site will only ever need to process `GET` requests, because the server doesn't store any modifiable data. It also doesn't change its responses based on HTTP Request data (e.g. URL parameters or cookies).

Understanding how static sites work is nevertheless useful when learning server-side programming, because dynamic sites handle requests for static files (CSS, JavaScript, static images, etc.) in exactly the same way.