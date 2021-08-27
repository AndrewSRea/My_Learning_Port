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
        id: 'todo-0;,
        name: 'Learn some frameworks!'
    }
]
```