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

The compiler only intervenes in very specific situations and only in the context of Svelte components. Extensions to the JavaScript language are minimal and carefully picked in order to not break JavaScript syntax nor alienate developers. In fact, you will mostly working with vaniall JavaScript.