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