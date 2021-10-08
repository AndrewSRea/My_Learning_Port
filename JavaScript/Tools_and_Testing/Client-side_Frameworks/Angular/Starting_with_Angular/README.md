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
ng new todo --routing-false --style-css
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