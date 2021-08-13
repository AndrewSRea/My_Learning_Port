# Client-side storage

Modern web browsers support a number of ways for web sites to store data on the user's computer -- with the user's permission -- then retrieve it when necessary. This lets you persist data for long-term storage, save sites or documents for offline use, retain user-specific settings for your site, and more. This article explains the very basics of how these work.

## Client-side storage?

Elsewhere in the MDN learning area, we talked about the difference between [static sites]() and [dynamic sites](). <!-- future pages in your GitHub repo (Server-Side_Website_Programming / First_Steps) --> Most major modern web sites are dynamic -- they store data on the server using some kind of database (server-side storage), then run [server-side](https://github.com/AndrewSRea/My_Learning_Port/tree/main/JavaScript/Server-Side_Website_Programming#server-side-website-programming) code to retrieve needed data, insert it into static page templates, and serve the resulting HTML to the client to be displayed by the user's browser.

Client-side storage works on similar principles, but has different uses. It consists of JavaScript APIs that allow you to store data on the client (i.e. on the user's machine) and then retrieve it when needed. This has many distinct uses, such as:

* Personalizing site preferences (e.g. showing a user's choice of custom widgets, color scheme, or font size).
* Persisting previous site activity (e.g. storing the contents of a shopping cart from a previous session, remembering if a user was previously logged in).
* Saving data and assets locally so a site will be quicker (and potentially less expensive) to download, or be usable without a network connection.
* Saving web application generated documents locally for use offline.

Often client-side and server-side storage are used together. For example, you could download a batch of music files (perhaps used by a web game or music player application), store them inside a client-side database, and play them as needed. The user would only have to download the music files once -- on subsequent visits, they would be retrieved from the database instead.

<hr>

**Note**: There are limits to the amount of data you can store using client-side storage APIs (possibly both per individual API and cumulatively); the exact limit varies depending on the browser and possibly based on user settings. See [Browser storage limits and eviction criteria](https://developer.mozilla.org/en-US/docs/Web/API/IndexedDB_API/Browser_storage_limits_and_eviction_criteria) for more information.

<hr>

### Old school: Cookies

The concept of client-side storage has been around for a long time. Since the early days of the web, sites have used [cookies](https://developer.mozilla.org/en-US/docs/Web/HTTP/Cookies) to store information to personalize user experience on websites. They're the earliest form of client-side storage commonly used on the web.

These days, there are easier mechanisms available for storing client-side data., therefore we won't be teaching you how to use cookies in this article. However, this does not mean cookies are completely useless on the modern-day web -- they are still used commonly to store data related to user personalization and state, e.g. session IDs and access tokens. For more information on cookies, see our [Using HTTP cookies](https://developer.mozilla.org/en-US/docs/Web/HTTP/Cookies) article.

### New school: Web Storage and IndexedDB

The "easier" features we mentioned above are as follows:

* The [Web Storage API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API) provides a very simple syntax for storing and retrieving smaller data items consisting of a name and a corresponding value. This is useful when you just need to store some simple data, like the user's name, whether they are logged in, what color to use for the background of the screen, etc.
* The [IndexedDB API](https://developer.mozilla.org/en-US/docs/Web/API/IndexedDB_API) provides the browser with a complete database system for storing complex data. This can be used for things from complete sets of customer records to even complex data types like audio or video files.

You'll learn more about these APIs below.

### The future: Cache API

Some modern browsers support the new [`Cache`](https://developer.mozilla.org/en-US/docs/Web/API/Cache) API. This API is designed for storing HTTP responses to specific requests, and is very useful for doing things like storing website assets offline so the site can subsequently be used without a network connection. Cache is usually used in combination with the [Service Worker API](https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API), although it doesn't have to be.

Use of Cache and Service Workers is an advanced topic, and we won't be covering it in great detail in this article, although we will show a simple example in the [Offline asset storage]() section below.





## Offline asset storage