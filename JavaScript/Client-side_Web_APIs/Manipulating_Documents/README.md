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

We have create a simple example page at [dom-example.html](https://github.com/mdn/learning-area/blob/master/javascript/apis/document-manipulation/dom-example.html) ([see it live also](https://mdn.github.io/learning-area/javascript/apis/document-manipulation/dom-example.html)). Try opening this up in your browser--it is a very simple page containing a [`<section>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/section) element inside which you can find an image, and a paragraph with a link inside. The HTML source code looks like this:
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

**Note**: This DOM tree diagram was created using Ian Hickson's [Live DOM viewer](https://software.hixie.ch/utilities/js/live-dom-viewer/). **A useful tool to keep in mind!**

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
2. Add a `<script></script>` element just above the closing `</body>` tag.
3. To manipulate an element inside the DOM, you first need to select it and store a reference to it inside a variable. Inside your script element, add the following line:
```
const link = document.querySelector('a');
```
4. Now we have the element reference stored in a variable, we can start to manipulate it using properties and methods available to it (these are defined on interfaces like [`HTMLAnchorElement`](https://developer.mozilla.org/en-US/docs/Web/API/HTMLAnchorElement) in the case of the [`<a>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a) element, its more general parent interface [`HTMLElement`](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement), and [`Node`](https://developer.mozilla.org/en-US/docs/Web/API/Node) -- which represents all nodes in a DOM). First of all, let's change the text inside the link by updating the value of the [`Node.textContent`](https://developer.mozilla.org/en-US/docs/Web/API/Node/textContent) property. Add the following line below the previous one:
```
link.textContent = 'Mozilla Developer Network';
```
5. We should also change the URL the link is pointing to, so that it doesn't go to the wrong place when it is clicked on. Add the following line, again at the bottom:
```
link.href = 'https://developer.mozilla.org';
```

Note that, as with many things in JavaScript, there are many ways to select an element and store a reference to it in a variable. [`Document.querySelector()`](https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector) is the recommended modern approach, which is convenient because it allows you to select elements using CSS selectors. The above `querySelector()` call will match the first `<a>` element that appears in the document. If you wanted to match and do things to multiple elements, you could use [`Document.querySelectorAll()`](https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelectorAll), which matches every element in the document that matches the selector, and stores references to them in an [array](https://github.com/AndrewSRea/My_Learning_Port/tree/main/JavaScript/JS_First_Steps/Arrays#arrays)-like object called a [`NodeList`](https://developer.mozilla.org/en-US/docs/Web/API/NodeList).

There are older methods available for grabbing element references, such as:

* [`Document.getElementById`](https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementById), which selects an element with a given `id` attribute value, e.g. `<p id="myId">My paragraph</p>`. The ID is passed to the function as a parameter, i.e. `const elementRef = document.getElementById('myId')`.
* [`Document.getElementsByTagName`](), which returns an array-like object containing all the elements on the page of a given type. For example, `<p>`s, `<a>`s, etc. The element type is passed to the function as a parameter, i.e. `const elementRefArray = document.getElementsByTagName('p')`.

These two work better in older browsers than the modern methods like `querySelector()`, but are not as convenient. Have a look and see what others you can find!

### Creating and placing new nodes

The above has given you a little taste of what you can do, but let's go further and look at how we can create new elements.

1. Going back to the current example (my accompanying [dom-example.html](https://github.com/AndrewSRea/My_Learning_Port/blob/main/JavaScript/Client-side_Web_APIs/Manipulating_Documents/dom-example.html)), let's start by grabbing a refernce to our [`<section>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/section) element--add the following code at the bottom of your existing script (do the same with the other lines, too):
```
const sect = document.querySelector('section');
```
2. Now let's create a new paragraph using [`Document.createElement()`](https://developer.mozilla.org/en-US/docs/Web/API/Document/createElement) and give it some text content in the same way as before:
```
const para = document.createElement('p');
para.textContent = 'We hope you enjoyed the ride.';
```
3. You can now append the new paragraph at the end of the section using [`Node.appendChild()`](https://developer.mozilla.org/en-US/docs/Web/API/Node/appendChild):
```
sect.appendChild(para);
```
4. Finally for this part, let's add a text node to the paragraph the link sits inside, to round off the sentence nicely. First we will create the text node using [`Document.createTextNode()`](https://developer.mozilla.org/en-US/docs/Web/API/Document/createTextNode):
```
const text = document.createTextNode(' - the premier source for web development knowledge.');
```
5. Now we'll grab a reference to the paragraph the link is inside, and append the text node to it:
```
const linkPara = document.querySelector('p');
linkPara.appendChild(text);
```

That's most of you need for adding nodes to the DOM--you'll make a lot of use of these methods when building dynamic interfaces (we'll look at some examples later).

### Moving and removing elements

There may be times when you want to move nodes, or delete them from the DOM altogether. This is perfectly possible.

If we wanted to move the paragraph with the link inside it to the bottom of the section, we could do this:
```
sect.appendChild(linkPara);
```
This moves the paragraph down to the bottom of the section. You might have thought it would make a second copy of it, but this is not the case--`linkPara` is a reference to the one and only copy of that paragraph. If you wanted to make a copy and add that as well, you'd need to use [`Node.cloneNode()`](https://developer.mozilla.org/en-US/docs/Web/API/Node/cloneNode) instead.

Removing a node is pretty simple as well, at least when you have a reference to the node to be removed and its parent. In our current case, we just use [`Node.removeChild()`](https://developer.mozilla.org/en-US/docs/Web/API/Node/removeChild), like this:
```
sect.removeChild(linkPara);
```
When you want to remove a node based only on a reference to itself, which is fairly common, you can use [`Element.remove()`](https://developer.mozilla.org/en-US/docs/Web/API/Element/remove):
```
linkPara.remove();
```
This method is not supported in older browsers. They have no method to tell a node to remove itself, so you'd have to do the following.
```
linkPara.parentNode.removeChild(linkPara);
```
Have a go at adding the above lines to your code.

### Manipulating styles

It is possible to manipulate CSS styles via JavaScript in a variety of ways.

To start with, you can get a list of all the stylesheets attached to a document using [`Document.stylesheets`](https://developer.mozilla.org/en-US/docs/Web/API/Document/styleSheets), which returns an array-like object with [`CSSStyleSheet`](https://developer.mozilla.org/en-US/docs/Web/API/CSSStyleSheet) objects. You can then add/remove styles as wished. However, we're not going to expand on those features because they are a somewhat archaic and difficult way to manipulate style. There are much easier ways.

The first way is to add inline styles directly onto elements you want to dynamically style. This is done with the [`HTMLElement.style`](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/style) property, which contains inline styling information for each element in the document. You can set properties of this object to directly update element styles.

1. As an example, try adding these lines to our ongoing example:
```
para.style.color = 'white';
para.style.backgroundColor = 'black';
para.style.padding = '10px';
para.style.width = '250px';
para.style.textAlign = 'center';
```
2. Reload the page and you'll see that the styles have been applied to the paragraph. If you look at that paragraph in your browser's [Page Inspector/DOM inspector](), you'll see that these lines are indeed adding inline styles to the document:
```
<p style="color: white; background-color: black; padding: 10px; width: 250px; text-align: center;">We hope you enjoyed the ride.</p>
```

<hr>

**Note**: Notice how the JavaScript property versions of the CSS styles are written in lower camel case whereas the CSS versions are hyphenated (e.g. `backgroundColor` versus `background-color`). Make sure you don't get these mixed up, otherwise it won't work.

<hr>


