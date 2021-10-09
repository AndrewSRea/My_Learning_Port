# Getting started with Angular

It is now time to look at Google's Angular framework, another popular option that you'll come across often. In this article, we look at what Angular has to offer, install the prerequisites and set up a sample app, and look at Angular's basic architecture.

## What is Angular?

Angular is a development platform, built on [TypeScript](https://www.typescriptlang.org/). As a platform, Angular includes:

* A component-based framework for building scalable web applications.
* A collection of well-integrated libraries that cover a wide variety of features, including routing, forms management, client-server communication, and more.
* A suite of developer tools to help you develop, build, test, and update your code.

When you build applications with Angular, you're taking advantage of a platform that can scale from single-developer projects to enterprise-level applications. Angular is designed to make updating as easy as possible, so you can take advantage of the latest developments with a minimum of effort. Best of all, the Angular ecosystem consists of a diverse group of over 1.7 million developers, library authors, and content creators.

Before you start exploring the Angular platform, you should know about the Angular CLI. The Angular CLI is the fastest, easiest, and recommended way to develop Angular applications. The Angular CLI makes a number of tasks easy. Here are some examples:

|     |     |
| --- | --- |
| [`ng build`](https://angular.io/cli/build) | Compiles an Angular app into an output directory. |
| [`ng serve`](https://angular.io/cli/serve) | Builds and serves your application, rebuilding on file changes. |
| [`ng generate`](https://angular.io/cli/generate) | Generates or modifies files based on a schematic. |
| [`ng test`](https://angular.io/cli/test) | Runs unit tests on a given project. |
| [`ng e2e`](https://angular.io/cli/e2e) | Builds and serves an Angular application, then runs end-to-end tests. |

You'll find the Angular CLI to be a valuable tool for building out your applications.

## What you'll build

This tutorial series guides you through building a to-do list application. Via this application, you'll learn how to use Angular to manage, edit, add, delete, and filter items.

## Prerequisites

To install Angular on your local system, you need the following:

* **Node.js**

Angular requires a [current, active LTS, or maintainance LTS](https://nodejs.org/en/about/releases/) version of Node.js. For information about specific version requirements, see the `engines` key in the [package.json](https://unpkg.com/@angular/cli@12.2.9/package.json) file.

For more information on installing Node.js, see [nodejs.org](https://nodejs.org/en/). If you are unsure what version of Node.js runs on your system, run `node -v` in a terminal window.

* **npm package manager**

Angular, the Angular CLI, and Angular applications depend on [npm packages](https://docs.npmjs.com/about-npm) for many features and functions. To download and install npm packages, you need an npm package manager. This guide uses the [npm client](https://docs.npmjs.com/cli/v7/commands/npm-install) command line interface, which is installed with `Node.js` by default. To check that you have the npm client installed, run `npm -v` in a terminal window.

## Set up your application

You can use the Angular CLI to run commands in your terminal for generating, building, testing, and deploying Angular applications. To install the Angular CLI, run the following command in your terminal:
```
npm install -g @angular/cli
```
Angular CLI commands all start with `ng`, followed by what you'd like the CLI to do. In the Desktop directory, use the following `ng new` command to create a new application called `todo`:

<hr>

:warning: I don't know why the Mozilla Developer Network recommends creating your Angular app in your Desktop directory. It is more convenient to create files and folders in your own personal developer folder. For instance, I create all of my files and folders in my own personal folder on my local computer named `myDev`.

<hr>

```
ng new todo --routing=false --style=css
```
The `ng new` command creates a minimal starter Angular application on your Desktop. The additional flags, `--routing` and `--style`, define how to handle navigation and styles in the application. This tutorial describes these features later in more detail.

If you are prompted to enforse stricter type checking, you can respond with yes.

Navigate into your new project with the following `cd` command:
```
cd todo
```
To run your `todo` application, use `ng serve`.

When the CLI prompts you about analytics, answer no.

In the browser, navigate to `http://localhost:4200/` to see your new starter application. If you change any of the source files, the application automatically reloads.

While `ng serve` is running, you might want to open a second terminal tab or window in order to run commands. If at any point you would like to stop serving your application, press <kbd>Ctrl</kbd> + <kbd>C</kbd> while in the terminal.

## Get familiar with your Angular application

The application source files that this tutorial focuses on are in `src/app`. Key files that the CLI generates automatically include the following:

1. `app.module.ts`: Specifies the files that the application uses. This file acts as a central hub for the other files in your application.
2. `app.component.ts`: Also known as the class, contains the logic for the application's main page.
3. `app.component.html`: Contains the HTML for `AppComponent`. The contents of this file are also known as the template. The template determines the view or what you see in the browser.
4. `app.component.css`: Contains the styles for `AppComponent`. You use this file when you want to define styles that only apply to a specific component, as opposed to your application overall.

A component in Angular is made up of three main parts -- the template, styles, and the class. For example, `app.component.ts`, `app.component.html`, and `app.component.css` together constitute the `AppComponent`. This structure separates the logic, view, and styles so that the application is more maintainable and scalable.

In this way, you are using the best practices from the very beginning.

The Angular CLI also generates a file for component testing called `app.component.spec.ts`, but this tutorial doesn't go into testing, so you can ignore that file.

Whenever you generate a component, the CLI creates these four files in a directory with the name you specify.

## The structure of an Angular application

Angular is built with TypeScript. TypeScript is a superset of JavaScript, meaning that any valid JavaScript is valid TypeScript. TypeScript offers typing and a more concise syntax than plain JavaScript, which gives you a tool for creating more maintainable code and minimizing bugs.

Components are the building blocks of an Angular application. A component includes a TypeScript class that has a `@Component()` decorator, an HTML template, and styles.

### The class

The class is where you put any logic your component needs. This can include functions, event listeners, properties, and references to services, to name a few. The class is in a file with a name, such as `feature.component.ts`, where `feature` is the name of your component. So, you could have files with names such as `header.component.ts`, `signup.component.ts`, or `feed.component.ts`. You create a component with a `@Component()` decorator that has metadata that tells Angular where to find the HTML and CSS. A typical component is as follows:
```
import { Component } from '@angular/core';

@Component({
    selector: 'app-item',
        // the following metadata specifies the location of the other parts of the component
    templateUrl: './item.component.html',
    styleUrls: ['./item.component.css']
})

export class ItemComponent {
    // your code goes here
}
```
This component is called `ItemComponent`, and its selector is `app-item`. You use a selector just like regular HTML tags by placing it within other templates. When a selector is in a template, the browser renders the template of that component. This tutorial guides you through creating two components and using one within the other.

Angular's component model offers strong encapsulation and an intuitive application structure. Components also make your application easier to unit test and can improve the overall readability of your code.

### The HTML template

Every component has an HTML template that declares how that component renders. You can define this template either inline or by file path.

To refer to an external HTML file, use the `templateUrl` property:
```
@Component({
    selector: 'app-root',
    templateUrl: ''./app.component.html'
})

export class AppComponent {
    ...
}
```
To write inline HTML, use the `template` property and write your HTML within backticks:
```
@Component({
    selector: 'app-root',
    template: `<h1>Hi!</h1>`,
})

export class AppComponent {
    ...
}
```
Angular extends HTML with additional syntax that lets you insert dynamic values from your component. Angular automatically updates the rendered DOM when your component's state changes. One use of this feature is inserting dynamic text, as shown in the following example:
```
<h1>{{ title }}</h1>
```
The double curly braces instruct Angular to interpolate the contents within them. The value for `title` comes from the component class:
```
import { Component } from '@angular/core';

@Component ({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})

export class AppComponent {
    title = 'To do application';
}
```
When the application loads the component and its template, the browser sees the following:
```
<h1>To do application</h1>
```














cd JavaScript/Tools_and_Testing/Client-side_Frameworks/Angular/Starting_with_Angular