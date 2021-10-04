# Working with Svelte stores

In the last article, we completed the development of our app, finished organizing it into components, and discussed some advanced techniques for dealing with reactivity, working with DOM nodes, and exposing component functionality. In this article, we will show another way to handle state management in Svelte -- [Stores](https://svelte.dev/tutorial/writable-stores). Stores are global data repositories that hold values. Components can subscribe to stores and receive notifications when their values change.

Using stores, we will create an `Alert` component that shows notifications on screen, which can receive messages from any component. In this case, the `Alert` component is independent from the rest -- it is not a parent or child of any other -- so the messages don't fit into the component hierarchy.

We will also see how to develop our own custom store to persist the todo information to [web storage](https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API), allowing our todos to persist over page reloads.

## Code along with us

### Git

Clone the GitHub repo (if you haven't already done it) with:
```
git clone https://github.com/opensas/mdn-svelte-tutorial.git
```
Then, to get to the current app state, run:
```
cd mdn-svelte-tutorial/06-stores
```
Or directly download the folder's content:
```
npx degit opensas/mdn-svelte-tutorial/06-stores
```
Remember to run `npm install && npm run dev` to start your app in development mode.

### REPL

To code along with us using the REPL, start at:

[https://svelte.dev/repl/d1fa84a5a4494366b179c87395940039?version=3.23.2](https://svelte.dev/repl/d1fa84a5a4494366b179c87395940039?version=3.23.2)

## Dealing with our app state

We have already seen how our components can communicate with each other using props, two-way data binding, and events. In all these cases, we were dealing with communication between parent and child components.

But not all application state belongs inside your application's component hierarchy. For example, information about the logged in user, or whether the dark theme is selected or not.

Sometimes your app state will need to be accessed by multiple components that are not hierarchically related, or by a regular JavaScript module.

Moreover, when your app becomes complicated and your component hierarchy gets complex, it might become too difficult for components to relay data between each other. In that case, moving to a global data store might be a good option. If you've already worked with [Redux](https://redux.js.org/) or [Vuex](https://vuex.vuejs.org/), then you'll be familiar with how this kind of store works. Svelte stores offer similar features for state management.

A store is an object with a `subscribe()` method that allows interested parties to be notified whenever the store value changes, and an optional `set()` method that allows you to set new values for the store. This minimal API is known as the [store contract](https://svelte.dev/docs#Store_contract).

Svelte provides functions for creating [readable](https://svelte.dev/docs#readable), [writable](https://svelte.dev/docs#writable), and [derived](https://svelte.dev/docs#derived) stores in the `svelte/store` module.

Svelte also provides a very intuitive way to integrate stores into its reactivity system using the [reactive `$store` syntax](). If you create your own stores honoring the store contract, you get this reactivity syntactic sugar for free.










JavaScript/Tools_and_Testing/Client-side_Frameworks/Svelte/Svelte_Stores