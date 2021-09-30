# Advanced Svelte: Reactivity, lifecycle, accessibility

In the last article, we added more features to our To-Do list and started to organize our app into components. In this article, we will add the app's final features and further componentize our app. We will learn how to deal with reactivity issues related to updating objects and arrays. To avoid common pitfalls, we'll have to dig a little deeper into Svelte's reactivity system. We'll also look at solving some accessibility focus issues, and more besides.

We'll focus on some accessibility issues involving focus management. To do so, we'll utilize some techniques for accessing DOM nodes and executing methods like [`focus()`]() and [`select()`](). We will also see how to declare and clen up event listeners on DOM elements.

We also need to learn a bit about component lifecycle, to understand when these DOM nodes get mounted and unmounted from the DOM and how we can access them. We will also learn about the `action` directive, which will allow us to extend the functionality of HTML elements in a reusable and declarative way.

Finally, we will learn a bit more about components. So far, we've seen how components can share data using props, and communicate with their parents using events and two-way data binding. Now we will see how components can also expose methods and variables.

The following new components will be developed throughout the course of this article:

* `MoreActions`: Displays the *Check All* and *Remove Completed* buttons, and emits the corresponding events required to handle their functionality.
* `NewTodo`: Displays the `<input>` field and *Add* button for adding a new todo.
* `TodosStatus`: Displays the "x out of y items completed" status heading.

## Code along with us

### Git

Clone the GitHub repo (if you haven't already done it) with:
```
git clone https://github.com/opensas/mdn-svelte-tutorial.git
```
Then, to get to the current app state, run:
```
cd mdn-svelte-tutorial/05-advanced-concepts
```
Or directly download the folder's content:
```
npx degit opensas/mdn-svelte-tutorial/05-advanced-concepts
```
Remember to run `npm install && npm run dev` to start your app in development mode.

### REPL

To code along with us using the REPL, start at:

[https://svelte.dev/repl/76cc90c43a37452e8c7f70521f88b698?version=3.23.2]()











cd JavaScript/Tools_and_Testing/Client-side_Frameworks/Svelte/Svelte_Reactivity_Lifecycle_Accessibility