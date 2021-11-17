# Django Tutorial Part 7: Sessions framework

This tutorial extends our [LocalLibrary](https://github.com/AndrewSRea/My_Learning_Port/tree/main/JavaScript/Server-Side_Website_Programming/Django_Web_Framework/Django_Tutorial_Local_Library#django-tutorial-the-local-library-website) website, adding a session-based visit-counter to the home page. This is a relatively simple example, but it does show how you can use the session framework to provide persistent behavior for anonymous users in your own sites.

## Overview

The [LocalLibrary](https://github.com/AndrewSRea/My_Learning_Port/tree/main/JavaScript/Server-Side_Website_Programming/Django_Web_Framework/Django_Tutorial_Local_Library#django-tutorial-the-local-library-website) website we created in previous tutorials allows users to browse books and authors in the catalog. While the content is dynamically generated from the database, every user will essentially have their access the the same pages and types of information when they use the site.

In a "real" library, you may wish to provide individual users with a customized experience, based on their previous use of the site, preferences, etc. For example, you could hide warning messages that the user has previously acknowledged next time they visit the site, or store and respect their preferences (e.g. the number of search results that they want to be displayed on each page).

The session framework lets you implement this sort of behavior, allowing you to store and retrieve arbitrary data on a per-site-visitor basis.

## What are sessions?

All communication between web browsers and servers is via [HTTP](https://developer.mozilla.org/en-US/docs/Glossary/HTTP), which is *stateless*. The fact that the protocol is stateless means that messages between the client and server are completely independent of each other -- there is no notion of "sequence" or behavior based on previous messages. As a result, if you want to have a site that keeps track of the ongoing relationships with a client, you need to implement that yourself.

Sessions are the mechanism used by Django (and most of the Internet) for keeping track of the "state" between the site and a particular browser. Sessions allow you to store arbitrary data per browser, and have this data available to the site whenever the browser connects. Individual data items associated with the session are then referenced by a "key", which is used both to store and retrieve the data.

Django uses a cookie containing a special *session id* to identify each browser and its associated session with the site. The actual session *data* is stored in the site database by default. (This is more secure than storing the data in a cookie, where they are more vulnerable to malicious users.) You can configure Django to store the session data in other places (cache, files, "secure" cookies), but the default location is a good and relatively secure option.

