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

Svelte also provides a very intuitive way to integrate stores into its reactivity system using the [reactive `$store` syntax](https://svelte.dev/docs#4_Prefix_stores_with_%24_to_access_their_values). If you create your own stores honoring the store contract, you get this reactivity syntactic sugar for free.

## Creating the Alert component

To show how to work with stores, we will create an `Alert` component. These kind of widgets might also be known as popup notifications, toast, or notification bubbles.

Our `Alert` component will be displayed by the `App` component, but any component will be able to write to this store, and the `Alert` component will subscribe to it and display a message whenever the store is modified.

1. Create a new file -- `stores.js` -- inside your `src` directory.

2. Give it the following content:
```
import { writable } from 'svelte/store';

export const alert = writable('Welcome to the To-Do list app!'); 
```

<hr>

**Note**: Stores can be defined and used outside of Svelte components, so you can organize them in any way you please.

<hr>

In the above code, we import the `writable()` function from `svelte/store` and use it to create a new store called `alert` with an initial value of "Welcome to the To-Do list app!". We then `export` the store.

### Creating the actual component

Let's now create our `Alert` component and see how we can read values from the store.

1. Create another new file named `src/components/Alert.svelte`.

2. Give it the following content:
```
<script>
    import { alert } from '../stores.js';
    import { onDestroy } from 'svelte';

    let alertContent = '';

    const unsubscribe = alert.subscribe(value => alertContent = value);

    onDestroy(unsubscribe);
</script>

{#if alertContent}
<div on:click={() => alertContent = ''}>
    <p>{ alertContent }</p>
</div>
{/if}

<style>
    div {
        position: fixed;
        cursor: pointer;
        margin-right: 1.5rem;
        margin-left: 1.5rem;
        margin-top: 1rem;
        right: 0;
        display: flex;
        align-items: center;
        border-radius: 0.2rem;
        background-color: #565656;
        color: #fff;
        font-size: 0.875rem;
        font-weight: 700;
        padding: 0.5rem 1.4rem;
        font-size: 1.5rem;
        z-index: 100;
        opacity: 95%;
    }
    div p {
        color: #fff;
    }
    div svg {
        height: 1.6rem;
        fill: currentColor;
        width: 1.4rem;
        margin-right: 0.5rem;
    }
</style>
```
Let's walk through this piece of code in detail.

* At the beginning, we import the `alert` store.
* Next, we import the `onDestroy()` lifecycle function, which lets us execute a callback after the component has been unmounted.
* We then create a local variable named `alertContent`. Remember that we can access top-level variables from the markup and whenever they are modified, the DOM will update accordingly.
* Then we call the method `alert.subscribe()`, passing it a callback function as a parameter. Whenever the value of the store changes, the callback function will be called with the new value as its parameter. In the callback function, we just assign the value we receive to the local variable, which will trigger the update of the component's DOM.
* The `subscribe()` method also returns a clean-up function, which takes care of releasing the subscription. So we subscribe when the component is being initialized, and use `onDestroy` to unsubscribe when the component is unmounted.
* Finally, we use the `alertContent` variable in our markup, and if the user clicks on the alert, we clean it.
* At the end, we include a few CSS lines to style our `Alert` component.

This setup allow us to work with stores in a reactive way. When the value of the store changes, the callback is executed. There we assign a new value to a local variable, and thanks to Svelte reactivity, all our markup and reactive dependencies are updated accordingly.

### Using the component

Let's now use our component.

1. In `App.svelte`, we'll import the component. Add the following import statement below the existing one:
```
import Alert from './components/Alert.svelte';
```

2. Then call the `Alert` component just above the `Todos` call, like this:
```
<Alert />
<Todos {todos} />
```

3. Load your test app now, and you should now see the `Alert` message on screen. You may click on it to dismiss it.

## Making stores reactive with the reactive `$store` syntax

This works, but you'll have to copy and paste all this code every time you want to subscribe to a store:
```
<script>
    import myStore from '../stores.js';
    import { onDestroy } from 'svelte';

    let myStoreContent = '';

    const unsubscribe = myStore.subscribe(value => myStoreContent = value);

    onDestroy(unsubscribe);
</script>

{myStoreContent}
```
That's too much boilerplate for Svelte! Being a compiler, Svelte has more resources to make our lives easier. In this case, Svelte provides the reactive `$store` syntax, also known as auto-subscription. In simple terms, you just prefix the store with the `$` sign and Svelte will generate the code to make it reactive automatically. So our previous code block can be replaced with this:
```
<script>
    import myStore from './stores.js';
</script>

{$myStore}
```
And `$myStore` will be fully reactive. This also applies to your own custom stores. If you implement the `subscribe()` and `set()` methods, like we'll do later, the reactive `$store` syntax will also apply to your stores.

1. Let's apply this to our `Alert` component. Update the `<script>` and markup sections of `Alert.svelte` as follows:
```
<script>
    import { alert } from './stores.js';
</script>

{#if $alert}
<div on:click={() => $alert = ''}>
    <p>{ $alert }</p>
</div>
{/if}
```

2. Check your app again and you'll see that this works just like before. That's much better!

Behind the scenes, Svelte has generated the code to declare the local variable `$alert`, subscribe to the `alert` store, update `$alert` whenever the store's content is modified, and unsubscribe when the component is unmounted. It will also generate the `alert.set(...)` statements whenever we assign a value to `$alert`.

The end result of this nifty trick is that you can access global stores just as easily as using reactive local variables.

This is a perfect example of how Svelte puts the compiler in charge of better developer ergonomics, not only saving us from typing boiler plate, but also generating less error-prone code.









cd JavaScript/Tools_and_Testing/Client-side_Frameworks/Svelte/Svelte_Stores