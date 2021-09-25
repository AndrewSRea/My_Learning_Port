# Vue resources

Now we'll round off our study of Vue by giving you a list of resources that you can use to go further in your learning, plus some other useful tips.

## Further resources

Here's where you should go to learn more about Vue:

* [Vue Docs](https://vuejs.org/) -- The main Vue site. Contains comprehensive documentation, including examples, cookbooks, and reference material. This is the best place to start learning Vue in depth.
* [Vue GitHub Repo](https://github.com/vuejs/vue) -- The Vue code itself. This is where you can report issues and/or contribute directly to the Vue codebase. Studying the Vue source code can help you better understand how the framework works, and write better code.
* [Vue Forum](https://forum.vuejs.org/) -- The official forum for getting help with Vue.
* [Vue CLI Docs](https://cli.vuejs.org/) -- Documentation for the Vue CLI. This contains information on customizing and extending the output you are generating via the CLI.
* [NuxtJS](https://nuxtjs.org/) -- NuxtJS is a Server-Side Vue Framework, with some architectural opnions that can be useful to creating maintainable applications, even if you don't use any of the Server Side Rendering features it provides. This site provides detailed documentation on using NuxtJS.
* [Vue Mastery](https://www.vuemastery.com/courses/) -- A paid education platform that specializes in Vue, including some free lessons.
* [Vue School](https://vueschool.io/) -- Another paid education platform specializing in Vue.

## Building and publishing your Vue app

The Vue CLI also provides us with tools for preparing our app for publishing to the web. You can do this like so:

* If your local server is still running, end it by pressing <kbd>Ctrl</kbd> + <kbd>C</kbd> in the terminal.
* Next, run the `npm run build` (or `yarn build`) in the console.

This will create a new `dist` directory containing all of your production ready files. To publish your site to the web, copy the contents of this folder to your hosting environment.

<hr>

**Note**: The Vue CLI docs also include a [specific guide on how to publish your app](https://cli.vuejs.org/guide/deployment.html#platform-guides) to many of the common hosting platforms.

<hr>

## Vue 3

Vue 3 is a major release of the framework with a lot of major changes. It went into active beta in April, 2020. The biggest change is a new Composition API that works as an alternative to the current property-based API. In this new API, a single `setup()` function is used on the component. Only what you return from this function is available in your `<template>`s. You are required to be explicit about "reactive" properties when using this API. Vue handles this for you using the Options API. This makes the new API typically considered a more advanced use case.

There are also a handful of other changes, including a change in how Apps are initialized in Vue. To read more about the changes involved with Vue 3, refer to [this article by Vue School which goes over most of the major changes in Vue 3](https://vueschool.io/articles/vuejs-tutorials/exciting-new-features-in-vue-3/).

<hr>

[[Previous page]](https://github.com/AndrewSRea/My_Learning_Port/tree/main/JavaScript/Tools_and_Testing/Client-side_Frameworks/Vue/Focus_Mgmt_Vue_Refs#focus-management-with-vue-refs) - [[Top]](https://github.com/AndrewSRea/My_Learning_Port/tree/main/JavaScript/Tools_and_Testing/Client-side_Frameworks/Vue/Vue_Resources#vue-resources) - [[Next module: Svelte]](https://github.com/AndrewSRea/My_Learning_Port/tree/main/JavaScript/Tools_and_Testing/Client-side_Frameworks/Svelte/Starting_with_Svelte#getting-started-with-svelte)