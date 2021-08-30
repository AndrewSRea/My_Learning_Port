# Introduction to client-side frameworks

We begin our look at frameworks with a general overview of the area, looking at a brief history of JavaScript and frameworks, why frameworks exist and what they give us, how to start thinking about choosing a framework to learn, and what alternatives there are to client-side frameworks.

## A brief history

When JavaScript debuted in 1996, it added occassional interactivity and excitement to a web that was, up until then, composed of satic documents. The web became not just a place to *read things*, but to *do things*. JavaScript's popularity steadily increased. Developers who worked with JavaScript wrote tools to solve the prolems they faced, and packaged them into reusable packages called **libraries**, so they could share their solutions with others. This shared ecosystem of libraries helped shape the growth of the web.

Now, JavaScript is an essential part of the web, [used on 95% of all websites](https://w3techs.com/technologies/details/cp-javascript), and the web is an essential part of modern life. Users write papers, manage their budgets, stream music, watch movies, and communicate with others over great distances instantaneously, with text, audio or video chat. The web allows us to do things that used to be possible only in native applications installed on our computers. These modern, complex, interactive websites are often referred to as **web applications**.

The advent of modern JavaScript frameworks has made it much easier to build highly dynamic, interactive applications. A **framework** is a library that offers opinions about how software gets built. These opinions allow for predictability and homogeneity in an application; predictability allows software to scale to an enormous size and still be maintainable; predictability and maintainability are essential for the health and longevity of software.

JavaScript frameworks power much of the impressive software on the modern web -- including many of the websites you likely use every day. MDN Web Docs, which you are currently reading this on, uses the React/ReactDOM framework to power its front end.

## What frameworks are out there?

There are many frameworks out there, but currently the "big four" are considered to be the following:

### Ember

[Ember](https://emberjs.com/) was initially released in December 2011 as a continuation of work that started in the [SproutCore](https://en.wikipedia.org/wiki/SproutCore) project. It is an older framework that has less users than more modern alternatives, such as React and Vue, but still enjoys a fair amount of popularity due to its stability, community support, and some clever coding principles.

[Start learning Ember]().

### Angular

[Angular](https://angular.io/) is an open-source web application framework led by the Angular Team at Google and by a community of individuals and corporations. It is a complete rewrite from the same team that built [Angular JS](https://angularjs.org/). Angular was officially released on the 14th of September 2016.

Angular is a component-based framework which uses declarative HTML templates. At build time, transparently to developers, the framework's compiler translates the templates to optimized JavaScript instructions. Angular uses [TypeScript](https://www.typescriptlang.org/), a superset of JavaScript that we'll look at in a little more detail in the next chapter.

[Start learning Angular]().

### Vue

Evan You first released [Vue](https://vuejs.org/) in 2014, after working on and learning from the original [AngularJS](https://angularjs.org/) project. Vue is the youngest of the big four, but has enjoyed a recent uptick in popularity.

Vue, like [AngularJS](https://angularjs.org/), extends HTML with some of its own code. Apart from that, it mainly relies on modern. standard JavaScript.

[Start learning Vue]().

### React

Facebook released [React](https://reactjs.org/) in 2013. By this point, it had already been using React to solve many of its problems internally. React itself is *not* technically a framework; it's a library for rendering UI components. React is used in combination with *other* libraries to make applications -- React and [React Native](https://reactnative.dev/) enable developers to make mobile applications; React and [ReactDOM](https://reactjs.org/docs/react-dom.html) enable them to make web applications, etc.

Because React and ReactDOM are so often used together, React is colloquially understood as a JavaScript framework. As you read through this module, we will be working with that colloquial understanding.

React extends JavaScript with HTML-like syntax, known as [JSX](https://reactjs.org/docs/introducing-jsx.html).

[Start learning React]().

## Why do frameworks exist?

We've discussed the environment that inspired the creation of frameworks, but not really *why* developers felt the need to make them. Exploring the why requires first examining the challenges of software development.

Consider a common kind of application: A to-do list creator, which we'll look at implementing using a variety of frameworks in future chapters. This application should allow users to do things like render a list of tasks, add a new task, and delete a task; and it must do this while reliably tracking and updating the data underlying the application. In software development, this underlying data is known as state.

Each of our goals is theoretically simple in isolation. We can iterate over the data to render it; we can add to an object to make a new task; we can use an identifier to find, edit, or delete a task. When we remember that the application has to let the user do *all* of these things through the browser, however, some cracks start to show. **The real problem is this: every time we change our application's state, we need to update the UI to match.**

We can examine the difficulty of this problem by looking at just *one* feature of our to-do list app: rendering a list of tasks.

## The verbosity of DOM changes

Building HTML elements and rendering them in the browser at the appropriate time takes a surprising amount of code. Let's say that our state is an array of objects structured like this:
```
const state = [
    {
        id: 'todo-0',
        name: 'Learn some frameworks!'
    }
]
```
How do we show one of those tasks to our user? WE want to represent each task as a list item -- an HTML [`<li>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/li) element inside of an unordered list element (a [`<ul>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/ul)). How do we make it? That could look something like this:
```
function buildTodoItemEl(id, name) {
    const item = document.createElement('li');
    const span = document.createElement('span');
    const textContent = document.createTextNode(name);

    span.appendChild(textContent);

    item.id = id;
    item.appendChild(span);
    item.appendChild(buildDeleteButtonEl(id));

    return item;
}
```
Here, we use the [`document.createElement()`](https://developer.mozilla.org/en-US/docs/Web/API/Document/createElement) method to make our `<li>`, and several more lines of code to create the properties and children it needs.

The tenth line of this snippet references another build function: `buildDeleteButtonEl()`. It follows a similar pattern to the one we used to build a list item element:
```
function buildDeleteButtonEl(id) {
    const button = document.createElement('button');
    const textContent = document.createTextNode('Delete');

    button.setAttribute('type', 'button');
    button.appendChild(textContent);

    return button;
}
```
This button doesn't do anything yet, but it will later once we decide to implement our delete feature. The code that will render our items on the page might read something like this:
```
function renderTodoList() {
    const frag = document.createDocumentFragment();
    state.tasks.forEach(task => {
        const item = buildTodoItemEl(task.id, task.name);
        frag.appendChild(item);
    });

    while (todoListEl.firstChild) {
        todoListEl.removeChild(todoListEl.firstChild);
    }
    todoListEl.appendChild(frag);
}
```
We've now got well over thirty lines of code dedicated *just* to the UI -- *just* to the step of rendering something in the DOM -- and at no point do we add classes that we could use later to style our list-items!

Working directly with the DOM, as in this example, requires understanding many things about how the DOM works: how to make elements; how to change their properties; how to put elements inside of each other; how to get them on the page. None of this code actually handles user interactions, or addresses adding or deleting a task. If we add those features, we have to remember to update our UI in the right time and in the right way.

JavaScript frameworks were created to make this kind of work a little easier -- they exist to provide a better *developer experience*. They don't bring brand-new powers to JavaScript; they give you easier access to JavaScript's powers so you can build for today's web.

If you want to see code samples from this section in action, you can check out a [working version of the app on CodePen](https://codepen.io/mxmason/pen/XWbPNmw), which also allows users to add and delete new tasks.

Read more about the JavaScript used in this section:

* [`document.createElement()`](https://developer.mozilla.org/en-US/docs/Web/API/Document/createElement)
* [`document.createTextNode()`](https://developer.mozilla.org/en-US/docs/Web/API/Document/createTextNode)
* [`document.createDocumentFragment()`](https://developer.mozilla.org/en-US/docs/Web/API/Document/createDocumentFragment)
* [`eventTarget.addEventListener()`](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener)
* [`node.appendChild()`](https://developer.mozilla.org/en-US/docs/Web/API/Node/appendChild)
* [`node.removeChild()`](https://developer.mozilla.org/en-US/docs/Web/API/Node/removeChild)

## Another way to build UIs

Every JavaScript framework offers a way to write user interfaces more *declaratively*. That is, they allow you to write code that describes how your UI should look, and the framework makes it happen in the DOM behind the scenes.

The vanilla JavaScript approach to building out new DOM elements in repetition was difficult to understand at a glance. By contrast, the following block of code illustrates the way you might use Vue to describe out list of tasks:
```
<ul>
    <li v-for="task in tasks" v-bind:key="task.id">
        <span>{{task.name}}</span>
        <button type="button">Delete</button>
    </li>
</ul>
```
That's it. This snippet reduces approximately thirty-two lines of code down to six lines. If the curly braces and `v-` attributes here are unfamiliar to you, that's okay; you'll learn about Vue-specific syntax later on in the module. The thing to take away here is that this code looks like the UI it represents, whereas the vanilla JavaScript code does not.

Thanks to Vue, we didn't have to write our own functions for building the UI; the framework will handle that for us in an optimized, efficient way. Our only role here was to describe to Vue what each item should look like. Developers who are familiar with Vue can join our project and quickly work out what is going on. Vue is not alone in this: using a framework improves team as well as individual efficiency.

It's possible to do things *similar* to this in vanilla JavaScript. [Template literal strings](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals) make it easy to write strings of HTML that represent what the final element would look like. That might be a useful idea for something as simple as our to-do list application, but it's not maintainable for large applications that manage thousands of records of data, and could render just as many unique elements in a user interface.

## Other things frameworks give us

Let's look at some of the other advantages conferred upon us by frameworks. As we've alluded to before, the advantages of frameworks are achievable in vanilla JavaScript, but using a framework takes away all of the cognitive laod of having to solve these problems yourself.

### Tooling

Because each of the frameworks in this module have a large, active community, each framework's ecosystem provides tooling that improves the developer experience. These tools make it easy to add things like testing (to ensure that your application behaves as it should) or linting (to ensure that your code is error-free and stylistically consistent).

<hr>

**Note**: If you want to find out more details about web tooling concepts, read the [Client-side tooling overview](https://github.com/AndrewSRea/My_Learning_Port/tree/main/JavaScript/Tools_and_Testing/Client-side_Web_Dev_Tools/Client-side_Tooling#client-side-tooling-overview).

<hr>

### Compartmentalization

Most major frameworks encourage developers to abstract the different parts of their user interfaces into *components* -- maintainable, reusable chunks of code that can communicate with one another. All the code related to a given component can live in one file (or a couple of specific files), so that you as a developer know exactly where to go to make changes to that component. In a vanilla JavaScript app, you'd have to create your own set of conventions to achieve this in an efficient, scalable way. Many JavaScript developers, if left to their own devices, could end up with all the code related to one part of the UI being spread out all over a file -- or in another file altogether.

### Routing

The most essential feature of the web is that it allows users to navigate from one page to another -- it is, after all, a network of interlinked documents. When you follow a link on this very website, your browser communicates with a server and fetches new content to display for you. As it does so, the URL in your address bar changes. You can save this new URL and come back to the page later on, or share it with others so they can easily find the same page. Your browser remembers your navigation history and allows you to navigate back and forth, too. This is called **server-side routing**.

Modern web applications typically do not fetch and render new HTML files -- they load a single HTML shell, and continually update the DOM inside it (referred to as **single page apps**, or **SPAs**) without navigating users to new addresses on the web. Each new pseudo-webpage is usually called a *view*, and by default, no routing is done.

When an SPA is complex enough, and renders enough unique views, it's important to bring routing functionality into your application. People are used to being able to link to specific pages in an application, travel forward and backward in their navigation history, etc., and their experience suffers when these standard web features are broken. When routing is handled by a client application in this fashion, it is aptly called **client-side routing**.

It's *possible* to make a router using the native capabilities of JavaScript and the browser, but popular, actively developed frameworks have companion libraries that make routing a more intuitive part of the development process.