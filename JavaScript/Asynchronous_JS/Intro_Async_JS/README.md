# Introducing asynchronous JavaScript

In this article, we briefly recap the problems associated with synchronous JavaScript, and take a first look at some of the different asynchronous techniques you'll encounter, showing how they can help us solve such problems.

## Synchronous JavaScript

To allow us to understand what **[asynchronous](https://developer.mozilla.org/en-US/docs/Glossary/Asynchronous)** JavaScript is, we ought to start off by making sure we understand what **[synchronous](https://developer.mozilla.org/en-US/docs/Glossary/Synchronous)** JavaScript is. This section recaps some of the information we saw in the previous article.

A lot of the functionality we have looked at in previous learning area modules is synchronous -- you run some code, and the result is returned as soon as the browser can do so. Let's look at a simple example ([see it live here](), and [see the source](https://github.com/AndrewSRea/My_Learning_Port/blob/main/JavaScript/Asynchronous_JS/Intro_Async_JS/basic-function.html)):
```
const btn = document.querySelector('button');
btn.addEventListener('click', () => {
    alert('You clicked me!');

    let pElem = document.createElement('p');
    pElem.textContent = 'This is a newly-added paragraph.';
    document.body.appendChild(pElem);
});
```
In this block, the lines are executed one after the other:

1. We grab a reference to a [`<button>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button) element that is already available in the DOM.
2. We add a [`click`](https://developer.mozilla.org/en-US/docs/Web/API/Element/click_event) event listener to it so that when the button is clicked:
    1. An [`alert()`](https://developer.mozilla.org/en-US/docs/Web/API/Window/alert) message appears.
    2. Once the alert is dismissed, we create a [`<p>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/p) element.
    3. We then give it some text content.
    4. Finally, we append the paragraph to the document body.

While each operation is being processed, nothing else can happen -- rendering is paused. This is because, as we said in the **[previous article](https://github.com/AndrewSRea/My_Learning_Port/tree/main/JavaScript/Asynchronous_JS/Gen_Async_Prog_Concepts#general-asynchronous-programming-concepts)**, [JavaScript is single-threaded](https://github.com/AndrewSRea/My_Learning_Port/tree/main/JavaScript/Asynchronous_JS/Gen_Async_Prog_Concepts#javascript-is-single-threaded). Only one thing can happen at a time, on a single main thread, and everything else is blocked until an operation completes.

So in the example above, after you've clicked the button, the paragraph won't appear until after the OK button is pressed in the alert box. [You can try it for yourself]().

<hr>

**Note**: It is important to remember that [`alert()`](https://developer.mozilla.org/en-US/docs/Web/API/Window/alert), while being very useful for demonstrating a synchronous blocking operation, is terrible for use in real world applications.

<hr>

## Asynchronous JavaScript

For reasons illustrated earlier (e.g., related to blocking), many Web API features now use asynchronous code to run, especially those that access or fetch some kind of resource from an external device, such as fetching a file from the network, accessing a database and returning data from it, accessing a video stream from a web cam, or broadcasting the display to a VR headset.

Why is this difficult to get to work using synchronous code? Let's look at a quick example. When you fetch an image from a server, you can't return the result immediately. That means that the following (pseudocode) wouldn't work:
```
let response = fetch('myImage.png');   // fetch is asynchronous
let blob = response.blob();   
// display your image blob in the UI somehow
```
That's because you don't know how long the image will take to download, so when you come to run the second line, it will throw an error (possibly intermittently, possibly every time) because the `response` is not yet available. Instead, you need your code to wait until the `response` is returned before it tries to do anything else to it.

There are two main types of asynchronous code styles you'll come across in JavaScript code, old-style callbacks and newer promise-style code. In the below sections, we'll review each of these in turn.

## Async callbacks

Async callbacks are functions that are specified as arguments when calling a function which will start executing code in the background. When the background code finishes running, it calls the callback function to let you know the work is done, or let you know that something of interest has happened. Using callbacks is slightly old-fashioned now, but you'll still see them in use in a number of older-but-still-commonly-used APIs.

An example of of an async callback is the second parameter of the [`addEventListener()`]() method (as we saw in action above):
```
btn.addEventListener('click', => {
    alert('You clicked me!');

    let pElem = document.createElement('p');
    pElem.textContent = 'This is a newly-added paragraph.';
    document.body.appendChild(pElem);
});
```
The first parameter is the type of event to be listened for, and the second parameter is a callback function that is invoked when the event is fired.

When we pass a callback function as an argument to another function, we are only passing the function's reference as an argument, i.e. the callback function is **not** executed immediately. It is "called back" (hence the name) asynchronously somewhere inside the containing function's body. The containing function is responsible for executing the callback function when the time comes.

You can write your own function containing a callback easily enough. Let's look at another example that loads a resource via the [`XMLHttpRequest` API](https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest) ([run it live](), and [see the source]()):
```
function loadAsset(url, type, callback) {
    let xhr = new XMLHttpRequest();
    xhr.open('GET', url);
    xhr.responseType = type;

    xhr.onload = function() {
        callback(xhr.response);
    };

    xhr.send();
}

function displayImage(blob) {
    let objectURL = URL.createObjectURL(blob);

    let image = document.createElement('img');
    image.src = objectURL;
    document.body.appendChild(image);
}

loadAsset('coffee.jpg', 'blob', displayImage);
```