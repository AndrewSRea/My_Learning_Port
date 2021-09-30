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

[https://svelte.dev/repl/76cc90c43a37452e8c7f70521f88b698?version=3.23.2](https://svelte.dev/repl/76cc90c43a37452e8c7f70521f88b698?version=3.23.2)

## Working on the MoreActions component

Now we'll tackle the *Check All* and *Remove Completed* buttons. Let's create a component that will be in charge of displaying the buttons and emitting the corresponding events.

1. Create a new file -- `components/MoreActions.svelte`.

2. When the first button is clicked, we'll emit a `checkAll` event to signal that all the todos should be checked/unchecked. When the second button is clicked, we'll emit a `removeCompleted` event to signal that all of the completed todos should be removed. Put the following content into your `MoreActions.svelte` file:
```
<script>
    import { createEventDispatcher } from 'svelte';
    const dispatch = createEventDispatcher();

    let completed = true;

    const checkAll = () => {
        dispatch('checkAll', completed);
        completed = !completed;
    }

    const removeCompleted = () => dispatch('removeCompleted');

</script>

<div class="btn-group">
    <button type="button" class="btn btn__primary" on:click={checkAll}>{completed ? 'Check' : 'Uncheck'} all</button>
    <button type="button" class="btn btn__primary" on:click={removeCompleted}>Remove completed</button>
</div>
```
We've also included a `completed` variable to toggle between checking and unchecking all tasks.

3. Back over in `Todos.svelte`, we are going to import our `MoreActions` component and create two functions to handle the events emitted by the `MoreActions` component.

Add the following import statement below the existing ones:
```
import MoreActions from './MoreActions.svelte';
```

4. Then add the described functions at the end of the `<script>` section:
```
const checkAllTodos = (completed) => todos.forEach(t => t.completed = completed);

const removeCompletedTodos = () => todos = todos.filter(t => !t.completed);
```

5. Now, go to the bottom of the `Todos.svelte` markup section and replace the `btn-group` `<div>` that we copied into `MoreActions.svelte` with a call to the `MoreActions` component, like so:
```
<!-- MoreActions -->
<MoreActions
    on:checkAll={e => checkAllTodos(e.detail)}
    on:removeCompleted={removeCompletedTodos}
/>
```

6. OK, let's go back into the app and try it out! You'll find that the *Remove Completed* button works fine, but the *Check All*/*Uncheck All* button just silently fails.

To find out what is happening here, we'll have to dig a little deeper into Svelte reactivity.











cd JavaScript/Tools_and_Testing/Client-side_Frameworks/Svelte/Svelte_Reactivity_Lifecycle_Accessibility