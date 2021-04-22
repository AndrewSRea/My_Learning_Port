# Introduction to events

Events are actions or occurrences that happen in the system you are programming, which the system tells you about so you can respond to them in some way if desired. For example, if the user selects a button on a webpage, you might want to respond to that action by displaying an information box. In this article, we discuss some important concepts surrounding events, and look at how they work in browsers. This won't be an exhaustive study; just what you need to know at this stage.

## A series of fortunate events

As mentioned above, **events** are actions or occurrences that happen in the system you are programming--the system produces (or "fires") a signal of some kind when an event occurs, and provides a mechanism by which an action can be automatically taken (that is, some code running) when the event occurs. For example, in an airport, when the runway is clear for take off, a signal is communicated to the pilot. As a result, the plane can safely takeoff.

In the case of the Web, events are fired inside the browser window, and tend to be attached to a specific item that resides in it--this might be a single element, set of elements, the HTML document loaded in the current tab, or the entire browser window. There are many different types of events that can occur. For example:

* The user selects a certain element or hovers the cursor over a certain element.
* The user chooses a key on the keyboard.
* The user resizes or closes the browser window.
* A web page finishes loading.
* A form is submitted.
* A video is played, paused, or finishes.
* An error occurs.

You can gather from this (and from glancing at the MDN [Event reference](https://developer.mozilla.org/en-US/docs/Web/Events)) that there are **a lot** of events that can be responded to.

Each available event has an **event handler**, which is a block of code (usually a JavaScript function that you as a programmer create) that runs when the event fires. When such a block of code is defined to run in response to an event, we say we aree **registering an event handler**. Note: Event handlers are sometime called **event listeners**--they are pretty much interchangeable for our purposes, although strictly speaking, they work together. The listener listens out for the event happening, and the handler is the code that is run in response to it happening.

<hr>

**Note**: Web events are not part of the core JavaScript language--they are defined as part of the APIs built into the browser.

<hr>

### A simple example

Let's look at a simple example of what we mean here. You've already seen events and event handlers used in many of the examples, but let's recap just to cement our knowledge. In the following example, we have a single [`<button>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button), which when pressed, makes the background change to a random color:
```
<button>Change color</button>
```
The JavaScript looks like so:
```
const btn = document.querySelector('button');

function random(number) {
    return Math.floor(Math.random() * (number+1));
}

btn.onclick = function() {
    const rndCol = 'rgb(' + random(255) + ',' + random(255) + ',' + random(255) + ')';
    document.body.style.backgroundColor = rndCol;
}
```
In this code, we store a reference to the button inside a constant called `btn`, using the [`Document.querySelector()`](https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector) function. We also define a function that returns a random number. The third part of the code is the event handler. The `btn` constant points to a `<button>` element, and this type of object has a number of events that can fire on it, and therefore, event handlers available. We are listening for the [`click`](https://developer.mozilla.org/en-US/docs/Web/API/Element/click_event) event firing, by setting the [`onclick`](https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onclick) event handler property to equal an anonymous function containing code that generates a random RGB color and sets the [`<body>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/body) [`background-color`](https://developer.mozilla.org/en-US/docs/Web/CSS/background-color) equal to it.

This code is run whenever the click event fires on the `<button>` element, that is, whenever a user selects it.

(See an example of the output from the code above [here](https://github.com/AndrewSRea/My_Learning_Port/blob/main/JavaScript/JS_Building_Blocks/Intro_to_Events/button-onclick-event-handler.html).)

### It's not just web pages

Another thing worth mentioning at this point is that events are not unique to JavaScript--most programming languages have some kind of event model, and the way the model works often differs from JavaScript's way. In fact, the event model in JavaScript for web pages differs from the event model for JavaScript as it is used in other environments.

For example, [Node.js](https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs) is a very popular JavaScript runtime that enables developers to use JavaScript to build network and server-side applications. The [Node.js event model](https://nodejs.org/docs/latest-v12.x/api/events.html) relies on listeners to listen for events and emitters to emit events periodically--it doesn't sound that different, but the code is quite different, making use of functions like `on()` to register an event listener, and `once()` to register an event listener that unregisters after it has run once. The [HTTP connect event docs](https://nodejs.org/docs/latest-v12.x/api/http.html#http_event_connect) provide a good example.

You can also use JavaScript to build cross-browser add-ons--browser functionality enhancements--using a technology called [WebExtensions](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions). The event model is similar to the web events model, but a bit different--event listeners properties are camel-cased (such as `onMessage` rather than `onmessage`), and need to be combined with the `addListener` function. See the [`runtime.onMessage` page](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/runtime/onMessage#examples) for an example.

You don't need to understand anything about other such environments at this stage in your learning; we just wanted to make it clear that events can differ in different programming environments.

## Ways of using web events

There are a number of ways to add event listener code to web pages so it runs when the associated event fires. In this section, we review the various machanisms and discuss which ones you should use.

### Event handler properties

These are the properties that exist to contain event handler code we have seen most frequently during the course. Returning to the above example:
```
const btn = document.querySelector('button');

btn.onclick = function() {
    const rndCol = 'rgb(' + random(255) + ',' + random(255) + ',' + random(255) + ')';
    document.body.style.backgroundColor = rndCol;
}
```
The [onclick](https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onclick) property is the event handler property being used in this situation. It is essentially a property like any other available on the button (e.g. [`btn.textContent`](https://developer.mozilla.org/en-US/docs/Web/API/Node/textContent), or [`btn.style`](https://developer.mozilla.org/en-US/docs/Web/API/ElementCSSInlineStyle/style)), but it is a special type--when you set it to be equal to some code, that code is run when the event fires on the button.

You could also set the handler property to be equal to a named function name (like we saw in [Build your own function](https://github.com/AndrewSRea/My_Learning_Port/tree/main/JavaScript/JS_Building_Blocks/Build_Your_Function#build-your-own-function)). The following works just the same:
```
const btn = document.querySelector('button');

function bgChange() {
    const rndCol = 'rgb(' + random(255) + ',' + random(255) + ',' + random(255) + ')';
    document.body.style.backgroundColor = rndCol;
}

btn.onclick = bgChange;
```
There are many different event handler properties available. Let's experiment.

First, make a local copy of [random-color-eventhandlerproperty.html](https://github.com/mdn/learning-area/blob/master/javascript/building-blocks/events/random-color-eventhandlerproperty.html), and open it in your browser. It's just a copy of the simple random color example we've played with already. Now try changing `btn.onclick` to the following different values in turn, and observing the results in the example:

* [`btn.focus`](https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onfocus) and [`btn.onblur`](https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onblur) -- The color changes when the button is focused and unfocused; try pressing the tab to focus on the button and press the tab again to focus away from the button. These are often used to display information about filling in form fields when they are focused, or displaying an error message if a form field is filled with an incorrect value.
* [`btn.ondblclick`](https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/ondblclick) -- The color changes only when the button is double-clicked.
* [`window.onkeypress`](https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onkeypress), [`window.onkeydown`](https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onkeydown), [`window.onkeyup`](https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onkeyup) -- The color changes when a key is pressed on the keyboard. The `keypress` event refers to a general press (button down and then up), while `keydown` and `keyup` refer to just the key down and key up parts of the keystroke, respectively. Note: It doesn't work if you try to register this event handler on the button itself--we've had to register it on the [window]() object, which represents the entire browser window.

<hr>

:warning: **Note**: The `onkeypress` event handler has been deprecated and is no longer a recommended feature. Though some browsers might still support it, it may have already been removed from the relevant web standards, may be in the process of being dropped, or may only be kept for compatibility purposes. Avoid using it, and update existing code if possible; see the [compatibility table](https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onkeypress#browser_compatibility) to guide your decision. Be aware that this feature may cease to work at any time.

It is recommended to use the [`onkeydown`](https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onkeydown) event handler instead.

<hr>

* [`btn.onmouseover`](https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onmouseover) and [`btn.onmouseout`](https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onmouseout) -- The color changes when the mouse pointer hovers over the button, or when the pointer moves off the button, respectively.

Some events are general and available nearly anywhere (e.g. an `onclick` handler can be registered on nearly any element), whereas some are more specific and only useful in certain situations (e.g. it makes sense to use [onplay](https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onplay) only on specific elements, such as [`<video>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/video)).

### Inline event handlers -- don't use these

You might also see a pattern like this in your code:
```
<button onclick="bgChange()">Press me</button>
```
```
function bgChange() {
    const rndCol = 'rgb(' + random(255) + ',' + random(255) + ',' + random(255) + ')';
    document.body.style.backgroundColor = rndCol;
}
```

<hr>

**Note**: You can find the [full source code](https://github.com/mdn/learning-area/blob/master/javascript/building-blocks/events/random-color-eventhandlerattributes.html) for this example on GitHub (also [see it running live](https://mdn.github.io/learning-area/javascript/building-blocks/events/random-color-eventhandlerattributes.html)).

<hr>

The earliest method of registering event handlers found on the Web involved **event handler HTML attributes** (or **inline event handlers**) ike the one shown above--the attribute value is literally the JavaScript code you weant to run when the event occurs. The above example invokes a function defined inside a [`<script>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/script) element on the same page, but you could also insert JavaScript direcctly inside the attribute. For example:
```
<button onclick="alert('Hello, this is my old-fashioned event handler!');">Press me</button>
```
You can find HTML attribute equivalents for many of the event handler properties; however, you shouldn't use these--they are considered bad practice. It might seem easy to use an event handler attribute if you are doing something really quick, but they quickly become unmanageable and inefficient.

For a start, it is not a good idea to mix up your HTML and your JavaScript, as it becomes hard to parse--keeping your JavaScript separate is best practice; if it is in a separate file, you acn apply it to multiple HTML documents.

Even in a single file, inline event handlers are not a good idea. One button is OK, but what if you had 100 buttons? You'd have to add 100 attributes to the file; it would quickly turn into a maintenance nightmare. With JavaScript, you could easily add an event handler function to all the buttons on the page no matter how may there were, using something like this:
```
const buttons = document.querySelectorAll('button');

for (let i = 0; i < buttons.length; i++) {
    buttons[i].onclick = bgChange;
}
```
Note that another option here would be to use the [`forEach()`](https://developer.mozilla.org/en-US/docs/Web/API/NodeList/forEach) built-in method available on [`NodeList`](https://developer.mozilla.org/en-US/docs/Web/API/NodeList) objects:
```
buttons.forEach(function(button) {
    button.onclick = bgChange;
});
```

<hr>

**Note**: Separating your programming logic from your content also makes your site more friendly to search engines.

<hr>

### Adding and removing event handlers