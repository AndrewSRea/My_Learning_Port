# Handling common JavaScript problems

Now we'll look at common cross-browser JavaScript problems and how to fix them. This includes information on using browser dev tools to track down and fix problems, using Polyfills and libraries to work around problems, getting modern JavaScript features working in older browsers, and more.

## The trouble with JavaScript

Historically, JavaScript was plagued with cross-browser compatibility problems -- back in the 1990s, the main browser choices back then (Internet Explorer and Netscape) had scripting implemented in different language flavors (Netscape had JavaScript, IE had JScript and also offered VBScript as an option), and while, at least, JavaScript and JScript were compatible to some degree (both based on the [ECMAScript](https://developer.mozilla.org/en-US/docs/Glossary/ECMAScript) specification), things were often implemented in conflicting, incompatible ways, causing developers many nightmares.

Such incompatibility problems persisted well into the early 2000s, as old browsers were still being used and still needed supporting. This is one of the main reasons why libraries like [jQuery](https://jquery.com/) came into existence -- to abstract away differences in browser implementations (e.g. see the code snippet in [How to make an HTTP request](https://developer.mozilla.org/en-US/docs/Web/Guide/AJAX/Getting_Started#step_1_%e2%80%93_how_to_make_an_http_request)) so developers only have to write one simple bit of code (see [`jQuery.ajax()`](https://api.jquery.com/jquery.ajax/)). jQuery (or whatever library you are using) will then handle the differences in the background so you don't have to.

Things have improved significantly since then. Modern browsers do a good job of supporting "classic JavaScript features", and the requirement to use such code has diminished as the requirement to support older browsers has lessened (although bear in mind that they have not gone away altogether).

These days, most cross-browser JavaScript problems are seen:

* When poor-quality browser-sniffing code, feature-detection code, and vendor prefix usage block browsers from running code they could otherwise use just fine.
* When developers make use of new/nascent JavaScript features, modern Web APIs, etc., in their code, and find that such features don't work in older browsers.

We'll explore all these problems and more below.