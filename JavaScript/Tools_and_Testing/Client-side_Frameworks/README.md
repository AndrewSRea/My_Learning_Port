# Understanding client-side JavaScript frameworks

JavaScript frameworks are an essential part of modern front-end web development, providing developers with tried and tested tools for building scalable, interactive web applications. Many modern companies use frameworks as a standard part of their tooling, so many front-end development jobs now require framework experience. In this set of articles, we are aiming to give you a comfortable starting point to help you begin learning frameworks.

As an aspiring front-end developer, it can be hard to work out where to begin when learning frameworks -- there are so many different frameworks to choose from, new ones will appear all the time, they mostly work in a similar way but do some things differently, and there are some specific things to be careful about when using frameworks.

We are not aiming to exhaustively teach you everything you need to know about React/ReactDOM, or Vue, or some other specific framework; the framework teams' own docs (and other resources) do that job already. Instead, we want to back up and first answer more fundamental questions such as:

* Why should I use a framework? What problems do they solve for me?
* What questions should I ask when trying to choose a framework? Do I even need to use a framework?
* What features do frameworks have? How do they work in general, and how do frameworks' implementations of these features differ?
* How do they relate to "vanilla" JavaScript or HTML?

After that, we'll provide some tutorials covering the essentials of some of the different framework choices, to provide you with enough context and familiarity to start going into greater depth yourself. We want you to go forward and learn about frameworks in a pragmatic way that doesn't forget about web platform fundamental best practices such as accessibility.

## Introductory guides

**[Introduction to client-side frameworks]()**

We begin our look at frameworks with a general overview of the area, looking at a brief history of JavaScript and frameworks, why frameworks exist and what they give us, how to start thinking about choosing a framework to learn, and what alternatives there are to client-side frameworks.

**[Framework main features]()**

Each major JavaScript framework has a different approach to updating the DOM, handling browser events, and providing an enjoyable developer experience. This article will explore the main features of "the big 4" frameworks, looking at how frameworks tend to work from a high level and the differences between them.

## React tutorials

<hr>

**Note**: React tutorials last tested in May 2020, with React/ReactDOM 16.13.1 and create-react-app 3.4.1. If you need to check your code against Mozilla's version, you can find a finished version of the sample React app code in Mozilla's [todo-react repository](https://github.com/mdn/todo-react). For a running live version, see [https://mdn.github.io/todo-react-build/](https://mdn.github.io/todo-react-build/).

<hr>

**[Getting started with React]()**

In this article, we will say hello to React. We'll discover a little bit of detail about its background and use cases, set up a basic React toolchain on our local computer, and create and play with a simple starter app, learning a bit about how React works in the process.

**[Beginning our React to-do list]()**

Let's say that we've been tasked with creating a proof-of-concept in React -- an app that allows users to add, edit, and delete tasks they want to work on, and also mark tasks as complete without deleting them. This article will walk you through putting the basic App component structure and styling in place, ready for individual component definition and interactivity, which we'll add later.

**[Componentizing our React app]()**

At this point, our app is a monolith. Before we can make it do things, we need to break it apart into manageable, descriptive components. React doesn't have any hard rules for what is and isn't a component -- that's up to you! In this article, we will show you a sensible way to break our app up into components.

**[React interactivity: Events and state]()**

With our component plan worked out, it's now time to start updating our app from a completely static UI to one that actually allows us to interact and change things. In this article, we'll do this, digging into events and state along the way.

**[React interactivity: Editing, filtering, conditional rendering]()**

As we near the end of our React journey (for now, at least), we'll add the finishing touches to the main areas of functionality in our to-do list app. This includes allowing you to edit existing tasks and filtering the list of tasks between all, completed, and incomplete tasks. We'll look at conditional UI rendering along the way.

**[Accessibility in React]()**

In our final tutorial article, we'll focus on (pun intended) accessibility, including focus management in React, which can improve usability and reduce confusion for both keyboard-only and screen reader users.

**[React resources]()**

Our final article provides you with a list of React resources that you can use to go further in your learning.

## Ember tutorials

<hr>

**Note**: Ember tutorials last tested in May 2020, with Ember/Ember CLI version 3.18.0. If you need to check your code against Mozilla's version, you can find a finished version of the sample Ember app code in the [ember-todomvc-tutorial repository](https://github.com/NullVoxPopuli/ember-todomvc-tutorial/tree/master/steps/00-finished-todomvc/todomvc). For a running live version, see [https://nullvoxpopuli.github.io/ember-todomvc-tutorial/](https://nullvoxpopuli.github.io/ember-todomvc-tutorial/) (this also includes a few additional features not covered in the tutorial).

<hr>

**[Getting started with Ember]()**

IN our first Ember article, we will look at how Ember works and what it's useful for, install the Ember toolchain locally, create a sample app, and then do some initial setup to get it ready for development.

**[Ember app structure and componentization]()**

In this article, we'll get right on with planning out the structure of our TodoMVC Ember app, adding in the HTML for it, and then breaking that HTML structure into components.

**[Ember interactivity: Events, classes, and state]()**

At this point, we'll start adding some interactivity to our app, providing the ability to add and display new to-do items. Along the way, we'll look at using events in Ember, creating component classes to contain JavaScript code to control interactive features, and setting up a service to keep track of the data state of our app.

**[Ember interactivity: Footer functionality, conditional rendering]()**

Now it's time to start tackling the footer functionality in our app. Here we'll get the to-do counter to update to show the correct number of to-dos still to complete, and correctly apply styling to completed to-dos (i.e. where the checkbox has been checked). We'll also wire up our "Clear completed" button. Along the way, we'll learn about using conditional rendering in our templates.

**[Routing in Ember]()**

In this article, we learn about routing or URL-based filtering as it is sometimes referred to. We'll use it to provide a unique URL for each of the three to-do views -- "All", "Active", and "Completed".

**[Ember resources and troubleshooting]()**

Our final Ember article provides you with a list of resources that you can use to go further in your learning, plus some useful troubleshooting and other information.

