# Getting started with Ember

In our first Ember article, we will look at how Ember works and what it's useful for, install the Ember toolchain locally, create a simple app, and then do some initial setup to get it ready for development.

## Introducing Ember

Ember is a component-service framework that focuses on the overall web application development experience, minimizing the trivial differences between applications -- all while being a modern and light layer on top of native JavaScript. Ember also has immense backwards and forwards compatibility to help businesses stay up to date with the latest versions of Ember and latest community-driven conventions.

What does it mean to be a component-service framework? Components are individual bundles of behavior, style, and markup -- much like what other frontend frameworks provide, such as React, Vue, and Angular. The service side provides long-lived shared state, behavior, and an interface to integrating with other libraries or systems. For example, the Router (which will be mentioned later in this tutorial) is a service. Components and Services make up the majority of any EmberJS application.

## Use cases

Generally, EmberJS works well for building apps that desire either or both of the following traits:

* Single Page Applications, including native-like web apps, and [progressive web apps](https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps) (PWAs).
    - Ember works best when it is the entire front end of your application.
* Increasing cohesion among many team's technology stacks.
    - Community-backed "best practices" allow for faster long-term development speed.
    - Ember has clear conventions that are useful for enforcing consistency and helping team members get up to speed quickly.

### Ember with add-ons

EmberJS has a plugin architecture, which means that add-ons can be installed and provide additional functionality without much, if any, configuration.

Examples include:

* [PREmber](https://github.com/ef4/prember): Static website rendering for blogs or marketing content.
* [FastBoot](https://ember-fastboot.com/): Server-side rendering, including improving search-engine optimization (SEO), or improving initial render performance of complex, highly interactive web pages.
* [empress-blog](https://empress-blog.netlify.app/welcome/): Authoring blog posts in markdown while optimizing for SEO with PREmber.
* [ember-service-worker](https://ember-service-worker.com/): Configuring a PWA so that the app can be installed on mobile devices, just like apps from the device's respective app-store.

### Native mobile apps

Ember can also be used with native mobile apps with a native-mobile bridge to JavaScript, such as that provided by [Corber](http://corber.io/).

## Opinions

EmberJS is one of the most opinionated front-end frameworks out there. But what does it mean to be opinionated? In Ember, opinions are a set of conventions that help increase the efficiency of developers at the cost of having to learn those conventions. As conventions are defined and shared, the opinions that back those conventions help reduce the menial differences between apps -- a common goal among all opinionated frameworks, across any language and ecosystem. Developers are then more easily able to switch between projects and applications without having to completely relearn the architecture, patterns, conventions, etc.

As you work through this series of tutorials, you'll notice Ember's opinions -- such as strict naming conventions of component files.

## How does Ember relate to vanilla JavaScript?

Ember is built on JavaScript technologies and is a thin layer on top of traditional [object-oriented programming](https://github.com/AndrewSRea/My_Learning_Port/tree/main/JavaScript/Intro_JS_Objects/Object-Oriented_JS#object-oriented-javascript-for-beginners), while still allowing developers to utilize [functional programming techniques](https://opensource.com/article/17/6/functional-javascript).

Ember makes use of two main syntaxes:

* JavaScript (or optionally, [TypeScript](https://www.typescriptlang.org/)).
* Ember's own templating language, which is loosely based on [Handlebars](https://handlebarsjs.com/guide/).

The templating language is used to make build and runtime optimizations that otherwise wouldn't be possible. Most importantly, it is a superset of HTML -- meaning that anyone who knows HTML can make meaningful contributions to any Ember project with minimal fear of breaking code. Designers and other non-developers can contribute to page templates without any knowledge of JavaScript, and interactivity can be added later.

This language also enables lighter asset payloads due to *compiling* the templates into a "byte code" that can be parsed faster than JavaScript. The **Glimmer VM** enables extremely fast DOM change tracking without the need to manage and diff a cached virtual representation (which is a common approach to mitigating the slow I/O of DOM changes).

For more information on the technical aspects of The Glimmer VM, the GitHub repository has some [documentation](https://github.com/glimmerjs/glimmer-vm/tree/master/guides) -- specifically, [References](https://github.com/glimmerjs/glimmer-vm/blob/master/guides/04-references.md) and [Validators](https://github.com/glimmerjs/glimmer-vm/blob/master/guides/05-validators.md) may be of interest.

Everything else in Ember is *just* JavaScript. In particular, JavaScript classes. This is where most of the "framework" parts come into play, as there are [superclasses](https://en.wikipedia.org/wiki/Inheritance_(object-oriented_programming)#Subclasses_and_superclasses), where each type of *thing* has a different purpose and different expected location within your project.

Here is a demonstration of the impact Ember has on the JavaScript that is in typical projects: [Gavin demonstrates how < 20% of the JS written is specific to Ember](https://twitter.com/gavinjoyce/status/1174726713101705216).

![Image of the similarity between JavaScript and Ember](https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Ember_getting_started/20percent-js-specific-ember.png)

## Getting started

The rest of the Ember material you'll find here consists of a multi-part tutorial, in which we'll make a version of the classic [TodoMVC sample app](https://todomvc.com/), teaching you how to use the essentials of the Ember framework along the way. TodoMVC is a basic to-do tracking app implemented in many different technologies.

[Here is the completed Ember version](https://nullvoxpopuli.github.io/ember-todomvc-tutorial/), for reference.

### A note on TodoMVC and accessibility

The TodoMVC project has a few issues in terms of adhering to accessible/default web practices. There are a couple of GitHub issues open about this on the TodoMVC family of projects:

* [Add keyboard access to demos](https://github.com/tastejs/todomvc/issues/1017)
* [Re-enable Outline on focusable elements](https://github.com/tastejs/todomvc-app-css/issues/35)

Ember has a strong commitment to being accessible by default and there is an [entire section of the Ember Guides on accessibility](https://guides.emberjs.com/release/accessibility/) on what it means for website/app design.

That said, because this tutorial is a focus on the JavaScript side of making a small web application, TodoMVC's value comes from providing pre-made CSS and recommended HTML structure, which eliminates small differences between implementations, allowing for easier comparison. Later on in the tutorial, we'll focus on adding code to our application to fix some of TodoMVC's biggest faults.

## Installing the Ember tooling

Ember uses a command-line interface (CLI) tool for building and scaffolding parts of your application.

1. You'll need node and npm installed before you can install ember-cli. [Go here to find out how to install node and npm](https://github.com/AndrewSRea/My_Learning_Port/tree/main/JavaScript/Tools_and_Testing/Client-side_Web_Dev_Tools/Command_Line#adding-powerups), if you haven't already got them.

2. Now type the following into your terminal to install ember-cli:
```
npm install -g ember-cli
```
This tool provides the `ember` program in your terminal, which is used to create, build, develop, test, and scaffold your application (run `ember --help for a full list of commands and their options).

3. To create a brand new application, type the following in your terminal. This creates a new directory inside the current directory you are in called "todomvc", containing the scaffolding for a new Ember app. Make sure you navigate to somewhere appropriate in the terminal before you run it. (Good suggestions are your "desktop" or "documents" directories, so that it is easy to find):
```
ember new todomvc
```
Or, on Windows:
```
npx ember-cli new todomvc
```
This generates a production-ready application development environment that includes the following features by default:

* Development server with live reload.
* Plugin-architecture that allows for third-party packages to richly enhance your application.
* The latest JavaScript via Babel and Webpack integration.
* Automated testing environment that runs your tests in the browser, allowing you to *test like a user*.
* Transpilation, and minification, of both CSS and JavaScript for production builds.
* Conventions for minimizing the differences between applications (allowing easier mental context switching).






cd JavaScript/Tools_and_Testing/Client-side_Frameworks/Ember/Starting_with_Ember