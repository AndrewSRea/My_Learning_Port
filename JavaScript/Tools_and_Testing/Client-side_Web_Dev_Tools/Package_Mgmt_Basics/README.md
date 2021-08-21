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

In theory, you may not need a package manager and you could manually download and store your project dependencies, but a package manager will seamlessly handle installing and uninstalling packages. If you didn't use one, you'd have to manually handle:

* Finding all the correct package JavaScript files.
* Checking them to make sure they don't have any known vulnerabilities.
* Downloading them and putting them in the correct locations in your project.
* Writing the code to include the package(s) in your application (this tends to be done using [JavaScript modules](https://github.com/AndrewSRea/My_Learning_Port/tree/main/JavaScript/Asynchronous_JS/Async_Prog_with_Async_and_Await/JS_Modules#javascript-modules), another subject that is worth reading up on and understanding [the link here leads to my own folder on the subject]).
* Doiong the same thing for all of the packages' sub-dependencies, of which there could be tens, or hundreds.
* Removing all the files again if you want to remove the packages.

In addition, package managers handle duplicate dependencies (something that becomes important and common in front-end development).

In the case of npm (and JavaScript- and Node-based package managers), you have two options for where you install your dependencies. As we touched on in the previous article, dependencies can be installed globally or locally to your project. Although there tend to be more pros for installing globally, the pros for installing locally are more important -- such as code portability and version locking.

For example, if your project relied on Webpack with a certain configuration, you'd want to ensure that if you installed that project on another machine or returned to it much later on, the configuration would still work. If a different version of Webpack was installed, it may not be compatible. To mitigate this, dependencies are installed locally to a project.

To see local dependencies really shine, all you need to do is try to download and run an existing project -- if it works and all the dependencies work right out of the box, then you have local dependencies to thank for the fact that the code is portable.

<hr>

**Note**: npm is not the only package manager available. A successful and popular alternative package manager is [Yarn](https://yarnpkg.com/). Yarn resolves the dependencies using a different algorithm that can mean a faster user experience. There are also a number of other emerging clients, such as [pnpm](https://pnpm.io/).

<hr>

## Package registries

