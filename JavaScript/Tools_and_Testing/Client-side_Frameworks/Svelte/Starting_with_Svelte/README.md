# Getting started with Svelte

In this article, we'll provide a quick introduction to the [Svelte framework](). We will see how Svelte works and what sets it apart from the rest of the frameworks and tools we've seen so far. Then we will learn how to setup our development environment, create a sample app, understand the structure of the project, and see how to run it locally and build it for production.

## Svelte: A new approach to building rich user interfaces

Svelte provides a different approach to building web apps than some of the other frameworks covered in this module. While frameworks like React and Vue do the bulk of their work in the user's browser while the app is running, Svelte shifts that work into a compile step that happens only when you build your app, producing highly-optimized vanilla JavaScript.

The outcome of this approach is not only similar application bundles and better performance, but also a developer experience that is more approachable for people that have limited experience of the modern tooling ecosystem.

Svelte sticks closely to the classic web development model of HTML, CSS, and JS, just adding a few extensions to HTML and JavaScript. It arguably has fewer concepts and tools to learn than some of the other framework options.

Its main current disadvantages are that it is a young framework -- its ecosystem is, therefore, more limited in terms of tooling, support, plugins, clear usage patterns, etc., than more mature frameworks, and there are also less job opportunities. But its advantages shold be enough to make you interested to explore it.

<hr>

**Note**: Recently, Svelte has added [official TypeScript support](https://svelte.dev/blog/svelte-and-typescript), one of its most requested features. We'll look at it later on in this tutorial series.

<hr>

We encourage you to go through the [Svelte tutorial](https://svelte.dev/tutorial/basics) for a really quick introduction to the basic concepts, before returning to this tutorial series to learn how to build something slightly more in-depth. It should take you about 30 minutes to complete.

## Use cases

Svelte can be used to develop small pieces of an interface or whole applications. You can either start from scratch, letting Svelte drive your UI, or you can incrementally integrate it into an existing application.

Nevertheless, Svelte is particularly appropriate to tackle the following situations:

* Web applications intended for low power devices: Applications built with Svelte have smaller bundle sizes, which is ideal for devices with slow network connections and limited processing power. Less code means less KB to download, parse, execute, and keep hanging around in memory.
* Highly interactive pages or complex visualizations: If you are building data-visualizations that need to display a large number of DOM elements, the performance gains that come from a framework with no runtime overhead will ensure that user interactions are snappy and responsive.
* Onboarding people with basic web development knowledge: Svelte has a shallow learning curve. Web developers with basic HTML, CSS, and JavaScript knowledge can easily grasp Svelte specifics in a short time and start building web applications.

Moreover, with the help of [Sapper](https://sapper.svelte.dev/) (a framework based on Svelte), you can also develop applications with advanced features like server-side rendering, code splitting, file-based routing and offline support. And then there's also [Svelte Native](https://svelte-native.technology/), which lets you build native mobile applications.

## How does Svelte work?

Being a compiler, Svelte can extend HTML, CSS, and JavaScript, generating optimal JavaScript code without any runtime overhead. To achieve this, Svelte extends vanilla web technologies in the following ways:

* It extends HTML by allowing JavaScript expressions in markup and providing directives to use conditions and loops, in a fashion similar to Handlebars.
* It extends CSS by adding a scoping mechanism, allowing each component to define their own styles without the risk of clashing with other component's styles.

The compiler only intervenes in very specific situations and only in the context of Svelte components. Extensions to the JavaScript language are minimal and carefully picked in order to not break JavaScript syntax nor alienate developers. In fact, you will be mostly working with vanilla JavaScript.

## First steps with Svelte

Being a compiler, you can't just add a `<script src="svelte.js">` tag to your page and import it into your app. You'll have to set up your development environment in order to let the compiler do its job.

### Requirements

In order to work with Svelte, you need to have [Node.js](https://nodejs.org/en/) installed. It's recommended that you use the long-term support (LTS) version. Node includes npm (the node package manager), and npx (the node package runner). Note that you can also use the Yarn package manager in place of npm, but we'll assume you are using npm in this set of tutorials. See [Package management basics](https://github.com/AndrewSRea/My_Learning_Port/tree/main/JavaScript/Tools_and_Testing/Client-side_Web_Dev_Tools/Package_Mgmt_Basics#package-management-basics) for more information on npm and yarn.

If you're using Windows, you will need to install some software to give you parity with Unix/macOS terminal in order to use the terminal commands mentioned in this tutorial. Gitbash (which comes as part of the [git for Windows toolset](https://gitforwindows.org/)) or [Windows Subsystem for Linux (WSL)](https://docs.microsoft.com/en-us/windows/wsl/about) are both suitable. [Cmder](https://cmder.net/) is another very good and complete alternative. See [Command line crash course](https://github.com/AndrewSRea/My_Learning_Port/tree/main/JavaScript/Tools_and_Testing/Client-side_Web_Dev_Tools/Command_Line#command-line-crash-course) for more information on these, and on terminal commands in general.

Also, see the following for more information:

* ["What is npm"](https://nodejs.org/en/knowledge/getting-started/npm/what-is-npm/) on nodejs.org
* ["Introducing npx"](https://blog.npmjs.org/post/162869356040/introducing-npx-an-npm-package-runner) on the npm blog
* ["The easiest way to get started with Svelte"](https://svelte.dev/blog/the-easiest-way-to-get-started) on the svelte blog

### Creating your first Svelte app

The easiest way to create a starter app template is to just download the starter template application. You can do that by visiting [sveltejs/template](https://github.com/sveltejs/template) on GitHub or you can avoid having to download and unzip it and just use [degit](https://github.com/Rich-Harris/degit).

To create your starter app template, run the following terminal commands:
```
npx degit sveltejs/template moz-todo-svelte
cd moz-todo-svelte
npm install
npm run dev
```

<hr>

**Note**: degit doesn't do any kind of magic -- it just lets you download and unzip the latest version of a git repo's contents. This is much quicker than using `git clone` because it will not download all the history of the repo, or create a complete local clone.

<hr>

After running `npm run dev`, Svelte will compile and build your application. It will start a local server at `localhost:5000`. Svelte will watch for file updates, and automatically recompile and refresh the app for you when changes are made to the source files. Your browser will display something like this:

![Image of the moz-todo-svelte app open in a browser](https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Svelte_getting_started/01-svelte-starter-app.png)

### Application structure

The starter template comes with the following structure:
```
moz-todo-svelte
├── README.md
├── package.json
├── package-lock.json
├── rollup.config.js
├── .gitignore
├── node_modules
├── public
│   ├── favicon.png
│   ├── index.html
│   ├── global.css
│   └── build
│       ├── bundle.css
│       ├── bundle.js
│       └── bundle.js.map
├── scripts
│   └── setupTypeScript.js
└── src
    ├── App.svelte
    └── main.js
```







cd JavaScript/Tools_and_Testing/Client-side_Frameworks/Svelte/Starting_with_Svelte