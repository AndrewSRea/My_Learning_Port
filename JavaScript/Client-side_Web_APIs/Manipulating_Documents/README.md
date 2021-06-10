# Manipulating documents

When writing web pages and apps, one of the most common things you'll want to do is manipulate the document structure in some way. This is usually done by using the Document Object Model (DOM), a set of APIs for controlling HTML and styling information that makes heavy use of the [`Document`](https://developer.mozilla.org/en-US/docs/Web/API/Document) object. In this article, we'll look at how to use the DOM in detail, along with some other interesting APIs that can alter your environment in interesting ways.

## The important parts of a web browser

Web browsers are very complicated pieces of software with a lot of moving parts, many of which can't be controlled or manipulated by a web developer using JavaScript. You might think that such limitations are a bad thing, but browsers are locked down for good reasons, mostly centering around security. Imagine if a web site could get access to your stored passwords or sensitive information, and log into websites as if it were you?

Despite the limitations, Web APIs still give us access to a lot of functionality that enable us to do a great many things with web pages. There are a few really obvious bits you'll reference regularly in your code--consider the following diagram, which represents the main parts of a browser directly involved in viewing web pages:

![Image of a browser web page](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Client-side_web_APIs/Manipulating_documents/document-window-navigator.png)

* The window is the browser tab that a web page is loaded into; this is represented in JavaScript by the [`Window`](https://developer.mozilla.org/en-US/docs/Web/API/Window) object. Using methods available on this object, you can do things like return the window's size (see [`Window.innerWidth`](https://developer.mozilla.org/en-US/docs/Web/API/Window/innerWidth) and [`Window.innerHeight`](https://developer.mozilla.org/en-US/docs/Web/API/Window/innerHeight)), manipulate the document loaded into that window, store data specific to that document on the client-side (for example, using a local database or other stoarge mechanism), attach an [event handler](https://github.com/AndrewSRea/My_Learning_Port/tree/main/JavaScript/JS_Building_Blocks/Intro_to_Events#a-series-of-fortunate-events) to the current window, and more.
* The navigator represents the state and identity of the browser (i.e. the user-agent) as it exists on the web. In JavaScript, this is represented by the [`Navigator`](https://developer.mozilla.org/en-US/docs/Web/API/Navigator) object. You can use this object to retrieve things like the user's preferred language, a media stream from the user's webcam, etc.
* The document (represented by the DOM in browsers) is the actual page loaded into the window, and is represented in JavaScript by the [`Document`](https://developer.mozilla.org/en-US/docs/Web/API/Document) object. You can use this object to return and manipulate information on the HTML and CSS that comprises the document. For example, get a reference to an element in the DOM, change its text content, apply new styles to it, create elements and add them to the current element as children, or even delete it altogether.

In this article, we'll focus mainly on manipulating the document, but we'll show a few other useful bits besides.

## The document object model

The document currently loaded in each one of your browser tabs is represented by a document object model. This is a "tree structure" representation created by the browser that enables the HTML structure to be easily accessed by programming languages--for example, the browser itself uses it to apply styling and other information to the correct elements as it renders a page, and developers like you can manipulate the DOM with JavaScript after the page has been rendered.

We have create a simple example page at [dom-example.html](https://github.com/mdn/learning-area/blob/master/javascript/apis/document-manipulation/dom-example.html) ([see it live also](https://mdn.github.io/learning-area/javascript/apis/document-manipulation/dom-example.html)). Try opening this up in your browser--it is a very simple page containing a [`<section>`]() element inside which you can find an image, and a paragraph with a link inside. The HTML source code looks like this:
```
<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <title>Simple DOM example</title>
    </head>
    <body>
        <section>
            <img src="dinosaur.png" alt="A red Tyrannosaurus Rex: A two legged dinosaur standing upright like a human, with small arms, and a large head with lots of sharp teeth.">
            <p>Here we will add a link to the <a href="https://www.mozilla.org/">Mozilla homepage</a></p>
        </section>
    </body>
</html>
```
The DOM on the other hand looks like this:

![Image of a DOM tree](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Client-side_web_APIs/Manipulating_documents/dom-screenshot.png)

<hr>

**Note**: This DOM tree diagram was create using Ian Hickson's [Live DOM viewer](https://software.hixie.ch/utilities/js/live-dom-viewer/) **A useful tool to keep in mind!**

<hr>

You can see here that each element and bit of text in the document has its own entry in the tree--each one is called a **node**. You will also encounter various terms used to describe the type of node, and their position in the tree in relation to one another:

* **Element node**: An element, as it exists in the DOM.
* **Root node**: The top node in the tree, which in the case of HTML is always the `HTML` node (other markup vocabularies like SVG and custom XML will have different root elements).
* **Child node**: A node *directly* inside another node. For example, `IMG` is a child of `SECTION` in the above example.
* **Descendant node**: A node *anywhere* inside another node. For example, `IMG` is a child of `SECTION` in the above example, and it is also a descendant. `IMG` is not a child of `BODY`, as it is two levels below it in the tree, but it is a descendant of `BODY`.
* **Parent node**: A node which has another node inside it. For example, `BODY` is the parent node of `SECTION` in the above example.
* **Sibling nodes**: Nodes that sit on the same level in the DOM tree. For example, `IMG` and `P` are siblings in the above example.
* **Text node**: A node containing a text string.

It is useful to familiarize yourself with this terminology before working with the DOM, as a number of the code terms you'll come across make use of them. You may have also come across them if you have studied CSS (e.g. descendant selector, child selector).

## Active learning: Basic DOM manipulation

To start learning about DOM manipulation, let's begin with a practical example.

1. Take a local copy of the [dom-example.html page](https://github.com/mdn/learning-area/blob/master/javascript/apis/document-manipulation/dom-example.html) and the [image](https://github.com/mdn/learning-area/blob/master/javascript/apis/document-manipulation/dinosaur.png) that goes along with it.