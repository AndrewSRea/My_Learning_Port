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

## Reactivity gotchas: updating objects and arrays

To see what's happening, we can log the `todos` array from the `checkAllTodos()` function to the console.

1. Update your existing `checkAllTodos()` function to the following:
```
const checkAllTodos = (completed) => {
    todos.forEach(t => t.completed = completed);
    console.log('todos', todos);
}
```

2. Go back to your browser, open your DevTools console, and click *Check All/Uncheck All* a few times.

You'll notice that the array is successfully updated every time you press the button (the `todo` objects' `completed` properties are toggled between `true` and `false`), but Svelte is not aware of that. This also means that, in this case, a reactive statement like `$: console.log('todos', todos)` won't be very useful.

To find out why this is happening, we need to understand how reactivity works in Svelte when updating arrays and objects.

Many web frameworks use the virtual DOM technique to update the page. Basically, the virtual DOM is an in-memory copy of the contents of the web page. The framework updates this virtual representation, which is then synced with the "real" DOM. This is much faster than directly updating the DOM and allows the framework to apply many optimization techniques.

These frameworks, by default, basically rerun all our JavaScript on every change against this virtual DOM, and apply different methods to cache expensive calculations and optimize execution. They make little to no attempt to understand what our JavaScript code is doing.

Svelte doesn't use a virtual DOM representation. Instead, it parses and analyzes our code, creates a dependency tree, and then generates the required JavaScript to update only the parts of the DOM that need to be updated. This approach usually generates optimal JavaScript code with minimal overhead, but it also has its limitations.

Sometimes Svelte cannot detect changes to variables being watched. Rmember that to tell Svelte that a variable has changed, you have to assign it a new value. A simple rule of thumb is that **the name of the updated variable must appear on the left hand side of the assignment**.

For example, in the following piece of code:
```
const foo = obj.foo;
foo.bar = 'baz';
```
Svelte won't update references to `obj.foo.bar`, unless you follow it up with `obj = obj`. That's because Svelte can't track object references, so we have to explicitly tell it that `obj` has changed by issuing an assignment.

<hr>

**Note**: If `foo` is a top level variable, you can easily tell Svelte to update `obj` whenever `foo` is changed with the following reactive statement: `$: foo, obj = obj`. With this, we are defining `foo` as a dependency, and whenever it changes, Svelte will run `obj = obj`.

<hr>

In our `checkAllTodos()` function, when we run:
```
todos.forEach(t => t.completed = completed);
```
Svelte will not mark `todos` as changed because it does not know that when we update our `t` variable inside the `forEach()` method, we are also modifying the `todos` array. And that makes sense, because otherwise Svelte would be aware of the inner workings of the `forEach()` method; the same would therefore be true for any method attached to any object or array.

Nevertheless, there are different techniques that we can apply to solve this problem, and all of them involve assigning a new value to the variable being watched.

Like we already saw, we could just tell Svelte to update the variable with a self-assignment, like this:
```
const checkAllTodos = (completed) => {
    todos.forEach(t => t.completed = completed);
    todos = todos;
}
```
This will solve the problem. Internally, Svelte will flag `todos` as changed and remove the apparently redundant self-assignment. Apart from the fact that it looks weird, it's perfectly OK to use this technique, and sometimes it's the most concise way to do it.

We could also access the `todos` array by index, like this:
```
const checkAllTodos = (completed) => {
    todos.forEach( (t,i) => todos[i].completed = completed);
}
```
Assignments to properties of arrays and objects -- e.g. `obj.foo += 1` or `array[i] = x` -- work the same way as assignments to the values themselves. When Svelte analyzes this code, it can detect that the `todos` array is being modified.











cd JavaScript/Tools_and_Testing/Client-side_Frameworks/Svelte/Svelte_Reactivity_Lifecycle_Accessibility