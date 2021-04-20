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

(See an example of the output from the code above [here]().)