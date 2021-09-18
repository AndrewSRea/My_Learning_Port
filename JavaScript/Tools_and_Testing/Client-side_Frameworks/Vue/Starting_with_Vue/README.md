# Getting started with Vue

Now let's introduce Vue, the third of our frameworks. In this article, we'll look at a little bit of Vue background, learn how to install it and create a new project, study the high-level structure of the whole project and an individual component, see how to run the project locally, and get it prepared to start building our example.

## A clearer Vue

Vue is a modern JavaScript framework that provides useful facilities for progressive enhancement -- unlike many other frameworks, you can use Vue to enhance existing HTML. This lets you use Vue as a drop-in replacement for a library like [jQuery](https://developer.mozilla.org/en-US/docs/Glossary/jQuery).

That being said, you can also use Vue to write entire Single Page Applications (SPAs). This allows you to create markup managed entirely by Vue, which can improve developer experience and performance when dealing with complex applications. It allows you to take advantage of libraries for client-side routing and state management when you need to. Additionally, Vue takes a "middle ground" approach to tooling like client-side routing and state management. While the Vue core team maintains suggested libraries for these functions, they are not directly bundled into Vue. This allows you to select a different routing/state management library if they better fit your application.

In addition to allowing you to progressively integrate Vue into your applications, Vue also provides a progressive approach to writing markup. Like most frameworks, Vue lets you create reusable blocks of markup via components. Most of the time, Vue components are written using a special HTML template syntax. When you need more control than the HTML syntax allows, you can write JSX or plain JavaScript functions to define your components.

As you work through this tutorial, you might want to keep the [Vue guide](https://vuejs.org/v2/guide/) and [API documentation](https://vuejs.org/v2/api/) open in other tabs, so you can refer to them if you want more information on any subtopic. For a good (but potentially biased) comparison between Vue and many other frameworks, see [Vue Docs: Comparison with Other Frameworks](https://vuejs.org/v2/guide/comparison.html).

## Installation

To use Vue in an existing site, you can drop one of the following [`<script>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/script) elements onto a page. This allows you to start using Vue on existing sites, which is why Vue prides itself on being a progressive framework. This is a great option when migrating an existing project using a library like jQuery to Vue. With this method, you can use a lot of the core features of Vue, such as the attributes, custom components, and data-management.

* Development Script (Unoptimized, but includes console warnings. Great for development.)

```
<script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
```

* Production Script (Optimized version, minimal console warnings. It is recommended that you specify a version number when including Vue on your site so that any framework updates do not break your live site without you knowing.)

```
<script src="https://cdn.jsdelivr.net/npm/vue@2"></script>
```

However, this approach has some limitations. To build more complex apps, you'll want to use the [Vue NPM package](https://www.npmjs.com/package/vue). This will let you use advanced features of Vue and take advantage of bundlers like WebPack. To make building apps with Vue easier, there is a CLI to streamline the development process. To use the npm package and the CLI, you will need:

1. Node.js 8.11+ installed.
2. npm or yarn.

<hr>

**Note**: If you don't have the above installed, find out [more about installing npm and Node.js](https://github.com/AndrewSRea/My_Learning_Port/tree/main/JavaScript/Tools_and_Testing/Client-side_Web_Dev_Tools/Command_Line#adding-powerups) here.

<hr>

To install the CLI, run the following command in your terminal:
```
npm install --global @vue/cli
```
Or if you'd prefer to use yarn:
```
yarn global add @vue/cli
```
Once installed, to initialize a new project, you can then open a terminal in the directory you want to create the project in, and run `vue create <project-name>`. The CLI will then give you a list of project configurations you can use. There are a few preset ones, and you can make your own. These options let you configure things like TypeScript, linting, vue-router, testing, and more.

We'll look at using this below.

## Initializing a new project

To explore various features of Vue, we will be building up a sample todo list app. We'll begin by using the Vue CLI to create a new app framework to build our app into. Follow the steps below:

1. In terminal, `cd` to where you'd like to create your sample app, then run `vue create moz-todo-vue`.
2. Use the arrow keys and <kbd>Enter</kbd> to select the "Manually select features" option.
3. The first menu you'll be presented with allows you to choose which features you want to include in your project. Make sure that "Babel" and "Linter/Formatter" are selected. If they are not, use the arrow keys and the space bar to toggle them on. Once they are selected, press <kbd>Enter</kbd> to proceed.
4. Next, you'll select a config for the linter/formatter. Navigate to "Eslint with error prevention only" and hit <kbd>Enter</kbd> again. This will help us catch common errors, but not be overly opinionated.
5. Next, you are asked to configure what kind of automated linting we want. Select "Lint on save". This will check for errors when we save a file inside the project. Hit <kbd>Enter</kbd> to continue.
6. Now, you will select how we want your config files to be managed. "In dedicated config files" will put your config settings for things like ESLint into their own dedicated files. The other option, "In package.json", will put all of your config settings into the app's `package.json` file. Select "In dedicated config files" and push <kbd>Enter</kbd>.
7. Finally, you are asked if you want to save this as a preset for future options. This is entirely up to you. If you like these settings over the existing presets and want to use them again, type <kbd>y</kbd>, otherwise type <kbd>n</kbd>.

The CLI will now begin scaffolding out your project, and installing all of your dependencies.

If you've never run the Vue CLI before, you'll get one more question -- you'll be asked to choose a package manager. You can use the arrow keys to select which one you prefer. The Vue CLI will default to this package manager from now on. If you need to use a different package manager after this, you can pass in a flag, `--packageManager=<package-manager>`, when you run `vue create`. So if you wanted to create the `moz-todo-vue` project with npm and you'd previously chosen yarn, you'd run `vue create moz-todo-vue --packageManager=npm`.

<hr>

**Note**: We've not gone over all of the options here, but you can [find more information on the CLI](https://cli.vuejs.org/) in the Vue docs.

<hr>

## Project structure

If everything went successfully, the CLI should have created a series of files and directories for your project. The most significant ones are as follows:

* `.eslint.js`: This is a config file for [eslint](https://eslint.org/). You can use this to manage your linting rules.
* `babel.config.js`: This is the config file for [Babel](https://babeljs.io/), which transforms modern JavaScript features being used in development code into older syntax that is more cross-browser compatible in production code. You can register additional babel plugins in this file.
* `.browserlistrc`: This is a config for [Browserslist](https://github.com/browserslist/browserslist). You can use this to control which browsers your tooling optimizes for.
* `public`: This directory contains static assets that are published, but not processed by [Webpack](https://webpack.js.org/) during build (with one exception; `index.html` gets some processing).
    - `favicon.ico`: This is the favicon for your app. Currently, it's the Vue logo.
    - `index.html`: This is the template for your app. Your Vue app is run from this HTML page, and you can use lodash template syntax to interpolate values into it.

    <hr>

    **Note**: This is not the template for managing the layout of your application -- this template is for managing static HTML that sits outside of your Vue app. Editing this file typically only occurs in advanced use cases.

    <hr>

* `src`: This directory contains the core of your Vue app.
    - `main.js`: This is the entry point to your application. Currently, this file initializes your Vue application and signifies which HTML element in the `index.html` file your app should be attached to. This file is often where you register global components or additional Vue libraries.
    - `App.vue`: This is the top-level component in your Vue app. See below for more explanation of Vue components.
    - `components`: This directory is where you keep your components. Currently, it just has one example component.
    - `assets`: This directory is for storing static assets like CSS and images. Because these files are in the source directory, they can be processed by Webpack. This means you can use pre-processors like [Sass/CSS](https://sass-lang.com/) or [Stylus](https://stylus-lang.com/).

<hr>

**Note**: Depending on the options you select when creating a new project, there might be other directories present (for example, if you choose a router, you will also have a `views` directory).

<hr>








cd JavaScript/Tools_and_Testing/Client-side_Frameworks/Vue/Starting_with_Vue