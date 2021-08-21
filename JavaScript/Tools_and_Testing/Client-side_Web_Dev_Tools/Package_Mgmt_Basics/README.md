# Package management basics

In this article, we'll look at package managers in some detail to understand how we can use them in our own projects -- to install project tool dependencies, keep them up-to-date, and more.

## A dependency in your project

A **dependency** is a third-party bit of software that was probably written by someone else and ideally solves a single problem for you. A web project can have any number of dependencies, ranging from none to many, and your dependencies might include sub-dependencies that you didn't explicitly install -- your dependencies may have their own dependencies.

A simple example of a useful dependency that your project might need is some code to calculate relative dates as human-readable text. You could certainly code this yourself, but there's a strong chance that someone else has already solved this problem -- why waste time reinventing the wheel? Moreover, a reliable third-party dependency will likely have been tested in a lot of different situations, making it more robust and cross-browser compatible than your own solution.

A project dependency can be an entire JavaScript library or framework -- such as React or Vue -- or a very small utility like our human-readable date library, or it can be a command line tool such as Prettier or eslint, which we talked about in previous articles.

Without modern build tools, dependencies like this might be included in your project using a simple [`<script>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/script) element, but this might not work right out of the box and you will likely need some modern tooling to bundle your code and dependencies together when they are released on the web. A bundle is the term that's generally used to refer to a single file on your web server that contains all the JavaScript for your software -- typically compressed as much as possible to help reduce the time it takes to get your software downloaded and displayed in your visitors' browser.

In addition, what happens if you find a better tool that you want to use instead of the current one, or a new version of your dependency is released that you want to update to? This is not too painful for a couple of dependencies but in larger projects with many dependencies, this kind of thing can become really challenging to keep track of. It makes more sense to use a **package manager** such as npm, as this will guarantee that the code is added and removed cleanly, as well as a host of other advantages.

## What exactly is a package manager?

We've met [npm](https://www.npmjs.com/) already, but stepping back from npm itself, a package manager is a system that will manage your project dependencies.

The package manager will provide a method to install new dependencies (also referred to as "packages"), manage where packages are stored on your file system, and offer capabilities for you to publish your own packages.