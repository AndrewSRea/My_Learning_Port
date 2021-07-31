# JavaScript modules

This guide gives you all you need to get started with JavaScript module syntax.

## A background on modules

JavaScript programs started off pretty small -- most of its usage in the early days was to do isolated scripting tasks, providing a bit of interactivity to your web pages where needed, so large scripts were generally not needed. Fast forward a few years and we now have complete applications being run in browsers with a lot of JavaScript, as well as JavaScript being used in other contexts ([Node.js](https://developer.mozilla.org/en-US/docs/Glossary/Node.js), for example).

It has, therefore, made sense in recent years to start thinking about providing mechanisms for splitting JavaScript programs up into separate modules that can be imported when needed. Node.js has had this ability for a long time, and there are a number of JavaScript libraries and frameworks that enable module usage (for example, other [CommonJS](https://en.wikipedia.org/wiki/CommonJS) and [AMD](https://github.com/amdjs/amdjs-api/blob/master/AMD.md)-based module systems like [RequireJS](https://requirejs.org/), and more recently, [Webpack](https://webpack.github.io/) and [Babel](https://babeljs.io/)).

The good news is that modern browsers have started to support module functionality natively, and this is what this article is about. This can only be a good thing -- browsers can optimize loading of modules, making it more efficient than having to use a library and do all of that extra client-side processing and extra round trips.

## Browser support

Use of native JavaScript modules is dependent on the [`import`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import) and [`export`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/export) statements; these are supported in browsers as follows:

### The graph showing browser support for [import](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules#import)

### The graph showing browser support for [export](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules#export)

## Introducing an example

To demonstrate usage of modules, we've created a [simple set of examples](https://github.com/mdn/js-examples/tree/master/modules) that you can find on GitHub. These examples demonstrate a simple set of modules that create a [`<canvas>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/canvas) element on a webpage, and then draw (and report information about) different shapes on the canvas.

These are fairly trivial, but have been kept deliberately simple to demonstrate modules clearly.

<hr>

**Note**: If you want to download the examples and run them locally, you'll need to run them through a [local web server](https://github.com/AndrewSRea/My_Learning_Port/tree/main/JavaScript/Asynchronous_JS/Intro_Async_JS/Setup_Local_Server#how-do-you-set-up-a-local-testing-server).

<hr>

