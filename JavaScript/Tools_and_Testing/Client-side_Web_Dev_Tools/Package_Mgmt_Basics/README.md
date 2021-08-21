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

For a package manager to work, it needs to know where to install packages from, and this comes in the form of a package registry. The registry is a central place that a package is published to and thus can be installed from. npm, as well as being a package manager, is also the name of the most commonly-used package registry for JavaScript packages. The npm registry exists at [npmjs.com](https://www.npmjs.com/).

npm is not the only option. You could manage your own package registry -- products like [Microsoft Azure](https://azure.microsoft.com/en-us/) allow you to create proxies to the npm registry (so you can override or lock certain packages), [GitHub also offers a package registry service](https://github.com/features/packages), and there will likely be more options appearing as tijme goes on.

What is important is that you ensure you've chosen the best registry for you. Many projects will use npm, and we'll stick to this in our examples throughout the rest of the module.

## Using the package ecosystem

Let's run through an example to get you started with using a package manager and registry to install a command line utility.

[Parcel](https://parceljs.org/) is another tool that developers commonly use in their development process. Parcel is clever in that it can watch the contents of our code for calls to dependencies and automatically installs any dependencies it sees that our code needs. It can also automatically build our code.

In our previous chapter, we installed Prettier as a global tool. Here, however, let's use npm to install Parcel as a local tool, as best practices dictate. We'll install it as part of an experimental app.

### Setting up the app as an npm package

First of all, create a new directory to store our experimental app in, somewhere sensible that you'll find again. We'll call it `parcel-experiment`, but you can call it whatever you like:
```
mkdir parcel-experiment
cd parcel-experiment
```
Next, let's initialize our app as an npm package, which creates a config file -- `package.json` -- that allows us to save our configuration details in case we want to recreate this environment later on, or even publish the package to the npm registry (although this is somewhat beyond the scope of this article).

Type the following command, making sure you are inside the `parcel-experiment` directory:
```
npm init
```
You will now be asked some questions; npm will then create a default `package.json` file based on the answers:

* `name`: A name to identify the app. Just press <kbd>Return</kbd> to accept the default `parcel-experiment`.
* `version`: The starting version number for the app: Again, just press <kbd>Return</kbd> to accept the default `1.0.0`.
* `description`: A quick description of the app's purpose. Type in something really simple, like "A simple npm package to learn about using npm", then press <kbd>Return</kbd>.
* `entry point`: This will be the top-level JavaScript file of the app. The default `index.js` is fine for now -- press <kbd>Return</kbd>.
* `test command`, `git repository`, and `keywords`: Press <kbd>Return</kbd> to leave each of these blank for now.
* `author`: The author of the project. Type your own name, and press <kbd>Return</kbd>.
* `license`: The license to publish the package under: Press <kbd>Return</kbd> to accept the default for now.

Press <kbd>Return</kbd> one more time to accept these settings.

Go into your `parcel-experiment` directory and you should now find you've got a package.json file. Open it up and it should look something like this:
```
{
    "name": "parcel-experiment",
    "version": "1.0.0",
    "description": "A simple npm package to learn about using npm",
    "main": "index.js",
    "scripts": {
        "test": "echo \"Error: no test specified\" && exit 1"
    },
    "author": "Chris Mills",
    "license": "ISC"
}
```
So this is the config file that defines your package. This is good for now, so let's move on.

### Installing parcel

Run the following command to install Parcel locally:
```
npm install parcel-bundler
```
Once that's done, we're now ready for some "modern client-side development" (which really means using build tools to make the developer experience a little easier). First of all, however, take another look at your package.json file. You'll see that npm has added a new field, `dependencies`:
```
"dependencies": {
    "parcel-bundler": "^1.12.4"
}
```
This is part of the npm magic -- if, in the future, you move your codebase to another location, on another machine, you can recreate the same set up by running the command `npm install`, and npm will look at the dependencies and install them for you.

One disadvantage is that Parcel is only available inside our `parcel-experiment` app; you won't be able to run it in a different directory. But the advantages outweigh the disadvantages.

<hr>

**Personal note**: After typing the terminal command `npm install parcel-bundler`, npm downloaded a subfolder in my `Parcel_Experiment` folder named `node_modules` with over 100 subfolders, and I received a warning message in my terminal basically stating that all of these subfolders would be too large to be added through Git to my GitHub repository. So after this example is finished, I will not be adding the `node_modules` subfolder to my repository and I will have to -- *ugh!* -- delete all of these subfolders from my local **My_Learning_Port** folder.

<hr>

### Setting up our example app

Anyway, on with the setup.

Parcel expects an `index.html` and an `index.js` file to work with., but otherwise it is very unopinionated about how you structure your project. Other tools can be very different but, at least, Parcel makes it easy for our initial experiment.

So now we need to add an `index.html` file to our working directory. Create `index.html` in your test directory, and give it the following contents:
```
<!DOCTYPE html>
<html lang="en-US">
    <head>
        <meta charset="utf-8">
        <title>My test page</title>
    </head>
    <body>
        <script src="./index.js"></script>
    </body>
</html>
```
Next, we need to add an `index.js` file in the same directory as `index.html`. For now, `index.js` can be empty; it just needs to exist. Create this now.

### Having fun with Parcel

