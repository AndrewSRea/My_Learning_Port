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

### Linters

As with [HTML and CSS](https://github.com/AndrewSRea/My_Learning_Port/tree/main/JavaScript/Tools_and_Testing/Cross_Browser_Testing/Handling_HTML_CSS_Problems#linters), you can ensure better quality, less error-prone JavaScript code using a linter, which points out errors and can also flag up warnings about bad practices, etc., and be customized to be stricter or more relaxed in their error/warning reporting. The JavaScript/ECMAScript linters we'd recommend are [JSHint](https://jshint.com/) and [ESLint](https://eslint.org/). These can be used in a variety of ways, some of which we'll detail below.

#### Online

The [JSHint homepage](https://jshint.com/) provides an online linter, which allows you to enter your JavaScript code on the left and provides an output on the right, including metrics, warnings, and errors.

![Image of the JSHint homepage](https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/Cross_browser_testing/JavaScript/jshint-online.png)

#### Code editor plugins

It is not very convenient to have to copy and paste your code over to a webpage to check its validity several times. What you really want is a linter that will fit into your standard workflow with the minimum of hassle. Many code editors have linter plugins. For example, GitHub's [Atom]() code editor has a JSHint plugin available.

To install it:

1. Install Atom (if you haven't got an up-to-date version already installed) -- download it from the Atom page linked above.
2. Go to Atom's *Preferences...* dialog (e.g. by choosing *Atom > Preferences...* on Mac, or *File > Preferences...* on Windows/Linux) and choose the *Install* option in the left-hand menu.
3. In the *Search packages* text field, type "jslint" and press Enter/Return to search for linting-related packages.
4. You should see a package called **lint** at the top of the list. Install this first (using the *Install* button), as other linters rely on it to work. After that, install the **linter-jshint** plugin.
5. After the packages have finished installing, try loading up a JavaScript file: you'll see any issues highlighted with green (for warnings) and red (for errors) circles next to the line numbers, and a separate panel at the bottom provides line numbers, error messages, and sometime suggested values or other fixes.

![Image of a JSLint linter inaction on JavaScript code](https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/Cross_browser_testing/JavaScript/jshint-linter.png)

Other popular editors have similar linting packages available. For example, see the "Plugins for text editors and IDEs" section of the [JSHint install page](https://jshint.com/install/).

#### Other uses

There are other ways to use such linters. You can read about them on the [JSHint](https://jshint.com/install/) and [ESLint](https://eslint.org/docs/user-guide/getting-started) install pages.

It is worth mentioning command line uses -- you can install these tools as command line utilities (available via the CLI -- command line interface) using npm (Node Package Manager -- you'll have to install [NodeJS](https://nodejs.org/en/) first). For example, the following command installs JSHint:
```
npm install -g jshint
```
You can then point these tools at JavaScript files you want to lint. For example:

![Image of a command line interface using JSHint commands to check a JavaScript file](https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/Cross_browser_testing/JavaScript/js-hint-commandline.png)

You can also use these tools with a task runner/build tool such as [Gulp]() or [Webpack]() to automatically lint your JavaScript during development. (See [Using a task runner to automate testing tools](https://github.com/AndrewSRea/My_Learning_Port/tree/main/JavaScript/Tools_and_Testing/Cross_Browser_Testing/Intro_Automated_Testing#using-a-task-runner-to-automate-testing-tools) in a later article.) See [EsLint integrations](https://eslint.org/docs/user-guide/integrations) for ESLint options. JSHint is supported out of the box by Grunt, and also has other integrations available, e.g. [JSHint loader for Webpack](https://github.com/webpack-contrib/jshint-loader).

<hr>

**Note**: ESLint takes a bit more setup and configuration than JSHint, but it is more powerful, too.

<hr>

### Browser developer tools

Browser developer tools have many useful features for helping to debug JavaScript. For a start, the JavaScript console will report errors in your code.

Make a local copy of our [broken-ajax.html](https://mdn.github.io/learning-area/tools-testing/cross-browser-testing/javascript/broken-ajax.html) example. (See the [source code](https://github.com/mdn/learning-area/blob/master/tools-testing/cross-browser-testing/javascript/broken-ajax.html) also.)

If you look at the console, you'll see the error message "Uncaught TypeError: can't access property "length", heroes is undefined", and the referenced line number is 49. If we look at the source code, the relevant code section is this:
```
function showHeroes(jsonObj) {
    let heroes = jsonObj['members'];

    for(i = 0; i < heroes.length; i++) {
        ...
```
So the code falls over as soon as we try to access a property of `jsonObj` (which, as you might expect, is supposed to be a [JSON object](https://github.com/AndrewSRea/My_Learning_Port/tree/main/JavaScript/Intro_JS_Objects/Working_with_JSON#working-with-json)). This is supposed to be fetched from an external `.json` file using the following `XMLHttpRequest` call:
```
let requestURL = 'https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json';
let request = new XMLHttpRequest();
request.open('GET', requestURL);
request.send();

let superHeroes = request.response;
populateHeader(superHeroes);
showHeroes(superHeroes);
```
But this fails.

#### The Console API

You may already know what is wrong with this code, but let's explore it some more to show how you could investigate this. For a start, there is a [Console]() API that allows JavaScript code to interact with the browser's JavaScript console. It has a number of features available, but the main one you'll use often is [`console.log()`](), which prints a custom message to the console.

Try inserting the following line just below line 31:
```
console.log('Response value: ' + superHeroes);
```
Refresh the page in the browser, and you will get an output in the console of "Response value: ", plus the same error message we saw before.

The `console.log()` output shows that the `superHeroes` object doesn't appear to contain anything. A very common problem with async requests like this is when you try to do something with the `response` object before it has actually been returned from the network. Let's fix this problem by running the code once the `load` event has been fired -- remove the `console.log()` line, and update this code block:
```
let superHeroes = request.reposnse;
populateHeader(superHeroes);
showHeroes(superHeroes);
```
...to the following:
```
request.onload = function() {
    let superHeroes - request.response;
    populateHeader(superHeroes);
    showHeroes(superHeroes);
}
```
To summarize, any time something is not working and a value does not appear to be what it is meant to be at some point in your code, you can use `console.log()` to print it out and see what is happening.

#### Using the JavaScript debugger

Unfortunately, we still have the same error -- the problem has not gone away. Let's investigate this now, using a more sophisticated feature of browser developer tools: the [JavaScript debugger](https://developer.mozilla.org/en-US/docs/Tools/Debugger), as it is called in Firefox.

<hr>

**Note**: Similar tools are available in other browsers: the [Sources tab](https://developer.chrome.com/docs/devtools/javascript/sources/) in Chrome, Debugger in Safari (see [Safari Web Development Tools](https://developer.apple.com/safari/tools/)), etc.

<hr>

In Firefox, the Debugger tab looks as follows:

![Image of the Debugger tab in Firefox DevTools](https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/Cross_browser_testing/JavaScript/debugger-tab.png)

* On the left, you can select the script you want to debug (in this case, we have only one).
* The center panel shows the code in the selected script.
* The right-hand panel shows useful details pertaining to the current environment -- *Breakpoints*, *Callstack*, and currently active *Scopes*.

The main feature of such tools is the ability to add breakpoints to code -- these are points where the execution of the code stops, and at that point you can examine the environment in its current state and see what is going on.

Let's get to work. The error is now being thrown at line 51. Click on line number 51 in the center panel to add a breakpoint to it. (You'll see a blue arrow appear over the top of it.) Now refresh the page (Cmd/Ctrl + R) -- the browser will pause execution of the code at line 51. At this point, the right-hand side will update to show some very useful information.

![Image of paused code and information shown in right-hand panel of DevTools Debugger](https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/Cross_browser_testing/JavaScript/breakpoint.png)

* Under *Breakpoints*, you'll see the details of the breakpoint you have set.
* Under *Call Stack*, you'll see a few entries -- this is basically a list of the series of functions that were invoked to cause the current function to be invoked. At the top, we have `showHeroes()`, the function we are currently in, and second we have `onload`, which stores the event handler function containing the call to `showHeroes()`.
* Under *Scopes*, you'll see the currently active scope for the function we are looking at. We only have three -- `showHeroes`, `block`, and `Window` (the global scope). Each scope can be expanded to show the values of variables inside the scope when execution of the code was stopped.

We can find out some very useful information in here.

1. Expand the `showHeroes` scope -- you can see from this that the heroes variable is `undefined`, indicating that accessing the `members` property of `jsonObj` (first line of the function) didn't work.
2. You can also see that the `jsonObj` variable is storing a text string, not a JSON object.
3. Exploring further down the call stack, click `onload` in the *Call Stack* section. The view will update to show the `request.onload` function in the center panel, and its scopes in the *Scopes* section.
4. If you expand the `onload` scope, you see that the `superHeroes` variable is a text string, too, not an object. This settles it -- our [XMLHttpRequest](https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest) call is returning the JSON as text, not JSON.

We'd like you to try fixing this problem yourself. To give you a clue, you can either [tell the XMLHttpRequest object explicitly to return JSON format](https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/responseType), or [convert the returned text to JSON](https://github.com/AndrewSRea/My_Learning_Port/tree/main/JavaScript/Intro_JS_Objects/Working_with_JSON#converting-between-objects-and-text) after the response arrives. If you get stuck, consult out [fixed-ajax.html](https://github.com/mdn/learning-area/blob/master/tools-testing/cross-browser-testing/javascript/fixed-ajax.html) example.

<hr>

**Note**: The debugger tab has many other useful features that we've not discussed here -- for example, conditional breakpoints and watch expressions. For a lot more information, see the [Debugger](https://developer.mozilla.org/en-US/docs/Tools/Debugger) page.

### Performance issues

As your apps get more complex and you start to use more JavaScript, you may start to run into performance problems, especially when viewing apps on slower devices. Performance is a big topic, and we don't have time to cover it in detail here. Some quick tips are as follows:

* To avoid loading more JavaScript than you need, bundle your scripts into a single file using a solution like [Browserify](https://browserify.org/). In general, reducing the number of HTTP requests is very good for performance.
* Make your files even smaller by minifying them before you load them onto your production server. Minifying squashes all the code together onto a huge single line, making it take up far less file size. It is ugly, but you don't need to read it when it is finished! This is best done using a minification tool like [Uglify](https://github.com/mishoo/UglifyJS). (There's also an online version -- see [JSCompress.com](https://jscompress.com/).)
* When using APIs, make sure you turn off the API features when they are not being used. Some API calls can be really expensive on processing power. For example, when showing a video stream, make sure it is turned off when you can't see it. When tracking a device's location using repeated Geolocation calls, make sure you turn it off when the user stops using it.
* Animations can be really costly for performance. A lot of JavaScript libraries provide animation capabilities programmed by JavaScript, but it is much more cost effective to do the animations via native browser features like [CSS Animations](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Animations) (or the nascent [Web Animations API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Animations_API)) than JavaScript. Read Brian Birtles' [Animating like you just don't care with Element.animate](https://hacks.mozilla.org/2016/08/animating-like-you-just-dont-care-with-element-animate/) for some really useful theory on why animation is expensive, tips on how to improve animation performance, and information on the Web Animations API.

<hr>

**Note**: Addy Osmani's [Writing Fast, Memory-Efficient JavaScript](https://www.smashingmagazine.com/2012/11/writing-fast-memory-efficient-javascript/) contains a lot of detail and some excellent tips for boosting JavaScript performance.

<hr>

## Cross-browser JavaScript problems

In this section, we'll look at some of the more common cross-browser JavaScript problems. We'll break this down into:

* Using modern core JavaScript features.
* Using modern Web API features.
* Using bad browser sniffing code.
* Performance problems.

### Using modern JavaScript/API features

In the [previous article](https://github.com/AndrewSRea/My_Learning_Port/tree/main/JavaScript/Tools_and_Testing/Cross_Browser_Testing/Handling_HTML_CSS_Problems#older-browsers-not-supporting-modern-features), we described some of the ways in which HTML and CSS errors and unrecognized features can be handled due to the nature of the languages. JavaScript is not as permissive as HTML and CSS, however -- if the JavaScript engine encounters mistakes or unrecognized syntax, more often than not it will throw errors.

There are a number of modern JavaScript language features defined in recent versions of the specs that won't work in older browsers. Some of these are syntactic sugar (basically an easier, nicer way of writing what you can already do using existing features), and some offer interesting new possibilities.

For example:

* [Promises](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) are a great new feature for performing asynchronous operations and making sure those operations are complete before code that relies on their results is used for something else. As an example, the [Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/fetch) (a modern equivalent to [XMLHTTPRequest](https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest)) uses promises to fetch resources across the network and make sure that the response has been returned before they are used (for example, displaying an image inside an [`<img>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img) element). They are not supported in IE at all but are supported across all modern browsers.
* Arrow functions provide a shorter, more convenient syntax for writing [anonymous functions](https://github.com/AndrewSRea/My_Learning_Port/tree/main/JavaScript/JS_Building_Blocks/Functions#anonymous-functions), which also has other advantages (see [Arrow functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions)). For a quick example, see [arrow-function.html](https://mdn.github.io/learning-area/tools-testing/cross-browser-testing/javascript/arrow-function.html). (See the [source code](https://github.com/mdn/learning-area/blob/master/tools-testing/cross-browser-testing/javascript/arrow-function.html) also.) Arrow functions are supported across all modern browsers, except for IE and Safari.
* Declaring [strict mode](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode) at the top of your JavaScript code causes it to be parsed with a stricter set of rules, meaning that more warnings and errors will be thrown, and some things will be disallowed that would otherwise be acceptable. It is arguably a good idea to use strict mode, as it makes for better, more efficient code. However, it has limited/patchy support across browsers (see [Strict mode in browsers](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode#strict_mode_in_browsers)).
* [Typed arrays](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Typed_arrays) allow JavaScript code to access and manipulate raw binary data, which is necessary as browser APIs, for example, start to manipulate streams or raw video and audio data. These are available in IE 10 and above, and all modern browsers.

There are also many new APIs appearing in recent browsers, which don't work in older browsers. For example:

* [Indexed API](https://developer.mozilla.org/en-US/docs/Web/API/IndexedDB_API), [Web Storage API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API), and others for storing website data on the client-side.
* [Web Workers API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API) for running JavaScript in a separate thread, helping to improve performance.
* [WebGL API](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API) for real 3D graphics.
* [Web Audio API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Audio_API) for advanced audio manipulation.
* [WebRTC API](https://developer.mozilla.org/en-US/docs/Web/API/WebRTC_API) for multi-person, real-time video/audio connectivity (e.g. video conferencing).
* [WebVR API](https://developer.mozilla.org/en-US/docs/Web/API/WebVR_API) for engineering virtual reality experience in the browser (e.g. controlling a 3D view with data input from VR Hardware).

There are a few strategies for handling incompatibilities between browsers relating to feature support. Let's explore the most common ones.

<hr>

**Note**: These strategies do not exist in separate silos -- you can, of course, combine them as needed. For example, you could use feature detection to determine whether a feature is supported. If it isn't, you could then run code to load a polyfill or a library to handle the lack of support.

<hr>

#### Feature detection

The idea behind feature detection is that you can run a test to determine whether a JavaScript feature is supported in the current browser, and then conditionally run code to provide an acceptable experience both in browsers that do and don't support the feature. As a quick example, the [Geolocation API](https://developer.mozilla.org/en-US/docs/Web/API/Geolocation_API) (which exposes available location data for the device the web browser is running on) has a main entry point for its use -- a `geolocation` property available on the global [Navigator](https://developer.mozilla.org/en-US/docs/Web/API/Navigator) object. Therefore, you can detect whether the browser supports geolocation or not by using something like the following:
```
if ("geolocation" in navigator) {
    navigator.geolocation.getCurrentPosition(function(position) {
        // show the location on a map, perhaps using the Google Maps API
    });
} else {
    // Give the user a choice of static maps instead
}
```
You could also write such a test for a CSS feature. For example, by testing for the existence of *[element.style.property](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/style)* (e.g. `paragraph.style.transform !== undefined`). But for both CSS and JavaScript, it is probably better to use an established feature detection library rather than writing your own all the time. Modernizr is the industry standard for feature detection tests.

As a last point, don't confuse feature detection with **browser sniffing** (detecting what specific browser is accessing the site) -- this is a terrible practice that should be discouraged at all costs. See [Using bad browser sniffing code](), later on, for more details.

<hr>

**Note**: Some features are known to be undetectable -- see Modernizr's list of [Undetectables](https://github.com/Modernizr/Modernizr/wiki/Undetectables).

<hr>

**Note**: Feature detection will be covered in a lot more detail in its own dedicated article, later in the module.

<hr>

#### Libraries

JavaScript libraries are essentially third party units of code that you can attach to your page, providing you with a wealth of ready-mde functionality that can be used straight away, saving you a lot of time in the process. A lot of JavaScript libraries probably came into existence because their developer was writing a set of common utility functions to save them time when writing future projects, and decided to release them into the wild because other people might find them useful, too.

JavaScript libraries tend to come in a few main varieties (some libraries will serve more than one of these purposes):

* Utility libraries: Provide a bunch of functions to make mundane tasks easier and less boring to manage: [jQuery](https://jquery.com/), for example, provides its own fully-featured selectors and DOM manipulation libraries, to allow CSS-selector type selecting of elements in JavaScript and easier DOM building. It is not so important now we have modern features like [`Document.querySelector()`](https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector)/[`Document.querySelectorAll()`](https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelectorAll)/[`Node`](https://developer.mozilla.org/en-US/docs/Web/API/Node) methods available across browsers, but it can still be useful when older browsers need supporting.
* Convenience libraries: Make difficult things easier to do. For example, the [WebGL API](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API) is really complex and challenging to use when you write it directly, so the [Three.js](https://threejs.org/) library (and others) is built on top of WebGL and provides a much easier API for creating common 3D objects, lighting, textures, etc. The [Service Worker API](https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API) is also very complex to use, so code libraries have started appearing to make common Service Worker uses-cases much easier to implement. (See the [Service Worker Cookbook](https://serviceworke.rs/) for several useful code samples.)
* Effects libraries: These libraries are designed to allow you to easily add special effects to your websites. This was more useful back when [DHTML](https://developer.mozilla.org/en-US/docs/Glossary/DHTML) was a popular buzzword, and implementing an effect involved a lot of complex JavaScript, but these days browsers have a lot of built in CSS3 features and APIs to implement effects more easily. See [JavaScripting.com/animation](https://www.javascripting.com/animation/) for a list of libraries. 

<hr>

**Note**: JavaScripting.com no longer has lists of JavaScript libraries of any kind. [DEV.to](https://dev.to/) is a developer community website with up-to-date resources, and has a list of the [10 Best JavaScript Animation Libraries](https://dev.to/tantanmoy/10-best-javascript-animation-libraries-3dhc).

<hr>

* UI libraries: Provide methods for implementing complex UI features that would otherwise be challenging to implement and get working cross browser -- for example, [Foundation](https://get.foundation/), [Bootstrap](https://github.com/AndrewSRea/My_Learning_Port/tree/main/Bootstrap#bootstrap), and [Material-UI](https://mui.com/) (the latter is a set of components for use with the React framework). These tend to be used as the basis of an entire site layout. It is often difficult to drop them in just for one UI feature.
* Normalization libraries: Give you a simple syntax that allows you to easily complete a task without having to worry about cross browser differences. The library will manipulate appropriate APIs in the background so the functionality will work whatever the browser (in theory). For example, [LocalForage](https://github.com/localForage/localForage) is a library for client-side data storage, which provides a simple syntax for storing and retrieving data. In the background, it uses the best API the browser has available for storing the data, whether that is [IndexedDB](https://developer.mozilla.org/en-US/docs/Web/API/IndexedDB_API), [Web Storage](https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API), or even WebSQL (which is now deprecated, but is still supported in some older versions of Safari/IE).

When choosing a library to use, make sure that it works across the set of browsers you want to support, and test your implementation thoroughly. Also, make sure that the library is popular and well-supported, and isn't likely to become obsolete next week. Talk to other developers to find out what they recommend, and see how much activity and how many contributors the library has on GitHub (or wherever else it is stored), etc.