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

## Basic example structure

In our first example (see [basic-modules](https://github.com/mdn/js-examples/tree/master/modules/basic-modules)), we have a file structure as follows:
```
index.html
main.js
modules/
    canvas.js
    square.js
```

<hr>

**Note**: All of the examples in this guide have basically the same structure; the above should start getting pretty familiar.

<hr>

The `modules` directory's two modules are described below:

* `canvas.js` -- contains functions related to setting up the canvas:
    - `create()` -- creates a canvas with a specified `width` and `height` inside a wrapper [`<div>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/div) with a specified ID, which is itself appended inside a specified parent element. Returns an object containing the canvas's 2D context and the wrapper's ID.
    - `createReportList()` -- creates an unordered list appended inside a specified wrapper element, which can be used to output report data into. Returns the list's ID.
* `square.js` -- contains:
    - `name` -- a constant containing the string 'square'.
    - `draw()` -- draws a square on a specified canvas, with a specified size, position, and color. Returns an object containing the square's size, position, and color.
    - `reportArea()` -- writes a square's area to a specific report list, given its length.
    - `reportPerimeter()` -- writes a square's perimeter to a specific report list, given its length.

## Aside -- `.mjs` versus `.js`

Throughout this article, we've used `.js` extensions for our module files, but in other resources you may see the `.mjs` extension used instead. [V8's documentation recommends this](https://v8.dev/features/modules#mjs), for example. The reasons given are:

* It is good for clarity, i.e. it makes it clear which files are modules, and which are regular JavaScript.
* It ensures that your module files are parsed as a module by runtimes such as [Node.js](https://nodejs.org/api/esm.html#esm_enabling), and build tools such as [Babel](https://babeljs.io/docs/en/options#sourcetype).

However, we decided to keep to using `.js`, at least for the moment. To get modules to work correctly in a browser, you need to make sure that your server is serving them with a `Content-Type` header that contains a JavaScript MIME type such as `text/javascript`. If you don't, you'll get a strict MIME type checking error along the lines of "The server responded with a non-JavaScript MIME type" and the browser won't run your JavaScript. Most servers already set the correct type for `.js` files, but not yet for `.mjs` files. Servers that already serve `.mjs` files correctly include [GitHub Pages](https://pages.github.com/) and [`http-server`](https://github.com/http-party/http-server#readme) for Node.js.

This is OK if you are using an environment already, or if you aren't but you know what you are doing and have access (i.e. you can configure your server to set the correct [`Content-Type`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Type) for `.mjs` files). It could, however, cause confusion if you don't control the server you are serving files from, or are publishing files for public use, as we are here.

For learning and portability purposes, we decided to keep to `.js`.

If you really value the clarity of using `.mjs` for modules versus using `.js` for "normal" JavaScript files, but don't want to run into the problem described above, you could always use `.mjs` during development and convert them to `.js` during your build step.

It is also worth noting that:

* Some tools may never support `.mjs`, such as [TypeScript](https://www.typescriptlang.org/).
* The `<script type="module">` attribute is used to denote when a module is being pointed to, as you'll see below.

## Exporting module features

The first thing you do to get access to module features is export them. This is done using the [`export`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/export) statement.

The easiest way to use it is to place it in front of any items you want exported out of the module. For example:
```
export const name = 'square';

export function draw(ctx, length, x, y, color) {
    ctx.fillStyle = color;
    ctx.fillRect(x, y, length, length);

    return {
        length: length,
        x: x,
        y: y,
        color: color
    };
}
```
You can export functions, `var`, `let`, `const`, and -- as we'll see later -- classes. They need to be top-level items; you can't use `export` inside a function, for example.

A more convenient way of exporting all the items you want to export is to use a single export statement at the end of your module file, followed by a comma-separated list of the features you want to export wrapped in curly braces. For example:
```
export { name, draw, reportArea, reportPerimeter };
```

## Importing features into your script

Once you've exported some features out of your module, you need to import them into your script to be able to use them. The simplest way to do this is as follows:
```
import { name, draw, reportArea, reportPerimeter } from './modules/square.js';
```
You use the [`import`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import) statement, followed by a comma-separated list of the features you want to import wrapped in curly braces, followed by the keyword `from`, followed by the path to the module file -- a path relative to the site root, which for our `basic-modules` example would be `/js-examples/modules/basic-modules`.

However, we've written the path a bit differently -- we are using the dot (`.`) syngtax to mean "the current location", followed by the path beyond that to the file we are trying to find. This is much better than writing out the entire relative path each time, as it is shorter, and it makes the URL portable -- the example will still work if you move it to a different location in the site hierarchy.

So, for example:
```
/js-examples/modules/basic-modules/modules/square.js
```
...becomes:
```
./modules/square.js
```
You can see such lines in action in [`main.js`](https://github.com/mdn/js-examples/blob/master/modules/basic-modules/main.js).

<hr>

**Note**: In some module systems, you can omit the file extension and the leading `/`, `./`, or `../` (e.g. `'modules/square'`). This doesn't work in native JavaScript modules.

<hr>

Once you've imported the features into your script, you can use them just like they were defined inside the same file. The following is found in `main.js`, below the import lines:
```
let myCanvas = create('myCanvas', document.body, 480, 320);
let reportList = createReportList(myCanvas.id);

let square1 = draw(myCanvas.ctx, 50, 50, 100, 'blue');
reportArea(square1.length, reportList);
reportPerimeter(square1.length, reportList);
```

<hr>

**Note**: Although imported features are available in the file, they are read only views of the feature that was exported. You cannot change the variable that was imported, but you can still modify properties similar to `const`. Additionally, these features are imported as live bindings, meaning that they can change in value even if you cannot modify the binding unlike `const`.

<hr>

## Applying the module to your HTML

Now we just need to apply the `main.js` module to our HTML page. This is very similar to how we apply a regular script to a page, with a few notable differences.

First of all, you need to include `type="module"` in the [`<script>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/script) element, to declare this script as a module. To import the `main.js` script, we use this:
```
<script type="module" src="main.js"></script>
```
You can also embed the module's script directly into the HTML file by placing the JavaScript code within the body of the `<script>` element:
```
<script type="module">
    /* JavaScript module code here */
</script>
```
The script into which you import the module features basically acts as the top-level module. If you omit it, Firefox, for example, gives you an error of "SyntaxError: import declarations may only appear at top level of a module".

You can only use `import` and `export` statements inside modules, not regular scripts.

## Other differences between modules and standard scripts

* You need to pay attention to local testing -- if you try to load the HTML file locally (i.e. with a `file://` URL), you'll run into CORS errors due to JavaScript module security requirements. You need to do your [testing through a server](https://github.com/AndrewSRea/My_Learning_Port/tree/main/JavaScript/Asynchronous_JS/Intro_Async_JS/Setup_Local_Server#how-do-you-set-up-a-local-testing-server).
* Also, note that you might get different behavior from sections of script defined inside modules as opposed to in standard scripts. This is because modules use [strict mode](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode) automatically.
* There is no need to use the `defer` attribute (see [`<script>` attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/script#attributes)) when loading a module script; modules are deferred automatically.
* Modules are only executed once, even if they have been referenced in multiple `<script>` tags.
* Last but not least, let's make this clear -- module features are imported into the scope of a single script -- they aren't available in the global scope. Therefore, you will only be able to access imported features in the script they are imported into, and you won't be able to access them from the JavaScript console, for example. You'll still get syntax errors shown in the DevTools, but you'll not be able to use some of the debugging techniques you might have expected to use.

## Default exports versus named exports

The functionality we've exported so far has been comprised of **named exports** -- each item (be it a function, `const`, etc.) has been referred to by its name upon export, and that name has been used to refer to it on import as well.

There is also a type of export called the **default export** -- this is designed to make it easy to have a default function provided by a module, and also helps JavaScript modules to interoperate with existing CommonJS and AMD module systems (as explained nicely in [ES6 In Depth: Modules](https://hacks.mozilla.org/2015/08/es6-in-depth-modules/) by Jason Orendorff; search for "Default exports").

Let's look at an example as we explain how it works. In our basic-modules `square.js`, you can find a function called `randomSquare()` that creates a square with a random color, size, and position. We want to export this as our default, so at the bottom of the file, we write this:
```
export default randomSquare;
```
Note the lack of curly braces.

We could instead prepend `export default` onto the function and define it as an anonymous function, like this:
```
export default function(ctx) {
    ...
}
```
Over in our `main.js` file, we import the default function using this line:
```
import randomSquare from './modules/square.js';
```
Again, note the lack of curly braces. This is because there is only one defualt export allowed per module, and we know that `randomSquare` is it. The above line is basically shorthand for:
```
import {default as randomSquare} from './modules/square.js';
```

<hr>

**Note**: The `as` syntax for renaming exported items is explained below in the [Renaming imports and exports]() section.

<hr>

## Avoiding naming conflicts

So far, our canvas shape drawing modules seem to be working OK. But what happens if we try to add a module that deals with drawing another shape, like a circle or triangle? These shapes would probably have associated functions like `draw()`, `reportArea()`, etc., too; if we tried to import different functions of the same name into the same top-level module file, we'd end up with conflicts and errors.

Fortunately, there are a number of ways to get around this. We'll look at these in the following sections.

## Renaming imports and exports