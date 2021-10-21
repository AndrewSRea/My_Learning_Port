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

## Fixing general JavaScript problems

AS we said in the [previous article](https://github.com/AndrewSRea/My_Learning_Port/tree/main/JavaScript/Tools_and_Testing/Cross_Browser_Testing/Handling_HTML_CSS_Problems#first-things-first-fixing-general-problems) on HTML/CSS, you should make sure your code is working generally, before going on to concentrate on the cross-browser issues. If you are not already familiar with the basics of [Troubleshooting JavaScript](https://github.com/AndrewSRea/My_Learning_Port/tree/main/JavaScript/JS_First_Steps/Troubleshooting_JS#what-went-wrong-troubleshooting-javascript), you should study that article before moving on. There are a number of common JavaScript problems that you will want to be mindful of, such as:

* Basic syntax and logic problems (again, check out [Troubleshooting JavaScript](https://github.com/AndrewSRea/My_Learning_Port/tree/main/JavaScript/JS_First_Steps/Troubleshooting_JS#what-went-wrong-troubleshooting-javascript)).
* Making sure variables, etc., are defined in the correct scope, and you are not runnin into conflicts between items declared in different places (see [Function scope and conflicts](https://github.com/AndrewSRea/My_Learning_Port/tree/main/JavaScript/JS_Building_Blocks/Functions#function-scope-and-conflicts)).
* Confusion about [`this`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this), in terms of what scope it applies to, and therefore if its value is what you intended. You can read [What is "this"?](https://github.com/AndrewSRea/My_Learning_Port/tree/main/JavaScript/Intro_JS_Objects/Object_Basics#what-is-this) for a light introduction. You should also study examples like [this one](https://github.com/mdn/learning-area/blob/7ed039d17e820c93cafaff541aa65d874dde8323/javascript/oojs/assessment/main.js#L143), which shows a typical pattern of saving a `this` scope to a separate variable, then using that variable in nested functions so you can be sure you are applying functionality to the correct `this` scope.
* Incorrectly using functions inside loops that iterate with a global variable (more generally "getting the scope wrong"). For example, in [bad-for-loop.html](https://mdn.github.io/learning-area/tools-testing/cross-browser-testing/javascript/bad-for-loop.html) (see [source code](https://github.com/mdn/learning-area/blob/master/tools-testing/cross-browser-testing/javascript/bad-for-loop.html)), we loop through 10 iterations using a variable defined with `var`, each time creating a paragraph and adding an [onclick](https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onclick) event handler to it. When clicked, we want each one to display an alert message containing its number (the value of `i` at the time it was created). Instead they all report `i` as 11 -- because the `for` loop does all its iterating before nested functions are invoked.

    <hr>

    **Note**: The easiest solution is to declare the iteration variable with `let` instead of `var` -- the value of `i` associated with the function is then unique to each iteration. Unfortunately this does not work correctly with IE11, which is why we haven't used this approach in the "good" for loop.

    <hr>

    If you want this to work correctly, you can define a function to add the handler separately, calling it on each iteration and passing it the current value of `para` and `i` each time (or something similar). See [good-for-loop.html](https://mdn.github.io/learning-area/tools-testing/cross-browser-testing/javascript/good-for-loop.html) (see the [source code also](https://github.com/mdn/learning-area/blob/master/tools-testing/cross-browser-testing/javascript/good-for-loop.html)) for a version that works.

* Making sure asynchronous operations have returned before trying to use the values they return. For example, [this Ajax example](https://developer.mozilla.org/en-US/docs/Web/Guide/AJAX/Getting_Started#step_3_%e2%80%93_a_simple_example) checks to make sure the request is complete and the response has been returned before trying to use the response for anything. This kind of operation has been made easier to handle by the introduction of [Promises](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) to the JavaScript language.

<hr>

**Note**: [Buggy JavaScript Code: The 10 Most Common Mistakes JavaScript Developers Make](https://www.toptal.com/javascript/10-most-common-javascript-mistakes) has some nice discussions of these common mistakes and more.

<hr>