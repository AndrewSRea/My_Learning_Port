# Advanced Svelte: Reactivity, lifecycle, accessibility

In the last article, we added more features to our To-Do list and started to organize our app into components. In this article, we will add the app's final features and further componentize our app. We will learn how to deal with reactivity issues related to updating objects and arrays. To avoid common pitfalls, we'll have to dig a little deeper into Svelte's reactivity system. We'll also look at solving some accessibility focus issues, and more besides.

We'll focus on some accessibility issues involving focus management. To do so, we'll utilize some techniques for accessing DOM nodes and executing methods like [`focus()`](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/focus) and [`select()`](https://developer.mozilla.org/en-US/docs/Web/API/HTMLInputElement/select). We will also see how to declare and clen up event listeners on DOM elements.

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

Another solution is to assign a new array to `todos` containing a copy of all the todos with the `completed` property updated accordingly, like this:
```
const checkAllTodos = (completed) => {
    todos = todos.map(t =>{                     // shorter version: todos = todos.map(t => ({...t, completed}))
        return {...t, completed, completed}
    })
}
```
In this case, we are using the [`map()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map) method, which returns a new array with the results of executing the provided function for each item. The function returns a copy of each todo using [spread syntax](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax) and overwrites the property of the completed value accordingly. This solution has the added benefit of returning a new array with new objects, completely avoiding mutating the original `todos` array.

<hr>

**Note** Svelte allows us to specify different options that affect how the compiler works. The `<svelte:options immutable={true}/>` option tells the compiler that you promise not to mutate any objects. This allows it to be less conservative about checking whether values have changed and generate simpler and more performant code. For more information on `<svelte:options...>`, check the [Svelte options documentation](https://svelte.dev/docs#svelte_options).

<hr>

All of these solutions involve an assignment in which the updated variable is on the left side of the equation. Any of these techniques will allow Svelte to notice that our `todos` array has been modified.

**Choose one, and update your `checkAllTodos()` function as required. Now you should be able to check and uncheck all your todos at once. Try it!**

## Finishing our MoreActions component

We will add one usability detail to our component. We'll disable the buttons when there are no tasks to be processed. To create this, we'll receive the `todos` array as a prop, and set the `disabled` property of each button accordingly.

1. Update your `MoreActions.svelte` component like this:
```
<script>
    import { createEventDispatcher } from 'svelte';
    const dispatch = createEventDispatcher();

    export let todos;

    let completed = true;

    const checkAll = () => {
        dispatch('checkAll', completed);
        completed = !completed;
    }

    const removeCompleted = () => dispatch('removeCompleted');

    $: completedTodos = todos.filter(t => t.completed).length;
</script>

<div class="btn-group">
    <button type="button" class="btn btn__primary" 
        disabled={todos.length === 0} on:click={checkAll}>{completed ? 'Check' : 'Uncheck'} all</button>
    <button type="button" class="btn btn__primary" 
        disabled={completedTodos === 0} on:click={removeCompleted}>Remove completed</button>
</div>
```
We've also declared a reactive `completedTodos` variable to enable or disable the *Remove Completed* button.

2. Don't forget to pass the prop into `MoreActions` from inside `Todos.svelte`, where the component is called:
```
<MoreActions {todos}
    on:checkAll={e => checkAllTodos(e.detail)}
    on:removeCompleted={removeCompletedTodos}
/>
```

## Working with the DOM: focusing on the details

Now that we have completed all of the app's required functionality, we'll concentrate on some accessibility features that will improve the usability of our app for both keyboard-only and screenreader users.

In its current state, our app has a couple of keyboard accessibility problems involving focus management. Let's have a look at these issues.

## Exploring keyboard accessibility issues in our todo app

Right now, keyboard users will find out that the focus flow of our app is not very predictable or coherent.

If you click on the input at the top of our app, you'll see a thick, dashed outline around that input. This outline is your visual indicator that the browser is currently focused on this element.

If you are a mouse user, you might have skipped this visual hint. But if you are working exclusively with the keyboard, knowing which control has focus is of vital importance. It tells us which control is going to receive our keystrokes.

If you press the <kbd>Tab</kbd> key repeatedly, you'll see the dashed focus indicator cycling between all the focusable elements on the page. If you move the focus to the *Edit* button and press <kbd>Enter</kbd>, suddenly the focus disappears, and you can no longer tell which control will receive our keystrokes.

Moreover, if you press the <kbd>Escape</kbd> or <kbd>Enter</kbd> key, nothing happens. And if you click on *Cancel* or *Save*, the focus disappears again. For a user working with the keyboard, this behavior will be confusing at best.

We'd also like to add some usability features, like disabling the *Save* button when required fields are empty, giving focus to certain HTML elements or auto-selecting contents when a text input receives focus.

To implement all these features, we'll need programmatic access to DOM nodes to run functions like [`focus()`](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/focus) and [`select()`](https://developer.mozilla.org/en-US/docs/Web/API/HTMLInputElement/select). We will also have to use [`addEventListener()`](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener) and [`removeEventListener()`](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/removeEventListener) to run specific tasks when the control receives focus.

The problem is that all these DOM nodes are dynamically created by Svelte at runtime. So we'll have to wait for them to be created and added to the DOM in order to use them. To do so, we'll have to learn about the [component lifecycle](https://svelte.dev/tutorial/onmount) to understand when we can access them -- more on this later.

## Creating a NewTodo component

Let's begin by extracting our new todo form out of its own component. With what we know so far, we can create a new component file and adjust the code to emit an `addTodo` event, passing the name of the new `todo` in with the additional details.

1. Create a new file -- `components/NewTodo.svelte`.

2. Put the following contents inside it:
```
<script>
    import { createEventDispatcher } from 'svelte';
    const dispatch = createEventDispatcher();

    let name = '';

    const addTodo = () => {
        dispatch('addTodo', name);
        name = '';
    }

    const onCancel = () => name = '';

</script>

<form on:submit|preventDefault={addTodo} on:keydown={e => e.key === 'Escape' && onCancel()}>
    <h2 class="label-wrapper">
        <label for="todo-0" class="label__lg">What needs to be done?</label>
    </h2>
    <input bind:value={name} type="text" id="todo-0" autoComplete="off" class="input input__lg" />
    <button type="submit" disabled={!name} class="btn btn__primary btn__lg">Add</button>
</form>
```
Here we are binding the `<input>` to the `name` variable with `bind:value={name}` and disabling the *Add* button when it is empty (i.e. no text content) using `disabled={!name}`. We are also taking care of the <kbd>Escape</kbd> key with `on:keydown={e => e.key === 'Escape' && onCancel()}`. Whenever the <kbd>Escape</kbd> key is pressed, we run `onCancel()`, which just clears up the `name` variable.

3. Now we have to `import` and use it from inside the `Todos` component, and update the `addTodo()` function to receive the name of the new todo.

Add the following `import` statement below the others inside `Todos.svelte`:
```
import NewTodo from './NewTodo.svelte';
```

4. And update the `addTodo()` function like so:
```
function addTodo(name) {
    todos = [...todos, { id: newTodoId, name, completed: false }];
}
```

`addTodo()` now receives the name of the new todo directly, so we no longer need the `newTodoName` variable to give it its value. Our `NewTodo` component takes care of that.

<hr>

**Note**: The `{ name }` syntax is just a shorthand for `{ name: name }`. This one comes from JavaScript itself and has nothing to do with Svelte, besides providing some inspriation for Svelte's own shorthands.

<hr>

5. Finally for this section, replace the `NewTodo` form markup with a call to the `NewTodo` component, like so:
```
<!-- NewTodo -->
<NewTodo on:addTodo={e => addTodo(e.detail)} />
```

## Working with DOM nodes using the `bind:this={dom_node}` directive

Now we ant the `NewTodo` `<input>` to regain focus every time the *Add* button is pressed. For that, we'll need a reference to the DOM node of the input. Svelte provides a way to do this with the `bind:this={dom_node}` directive. When specified, as soon as the component is mounted and the DOM node is created, Svelte assigns a reference to the DOM node to the specified variable.

We'll create a `nameEl` variable and bind it to the input using `bind:this={nameEl}`. Then inside `addTodo()`, after adding the new todo, we will call `nameEl.focus()` to refocus the `<input>` again. We will do the same when the user presses the <kbd>Escape</kbd> key, with the `onCancel()` function.

Update the contents of `NewTodo.svelte` like so:
```
<script>
    import { createEventDispatcher } from 'svelte';
    const dispatch = createEventDispatcher();

    let name = '';
    let nameEl;                        // reference to the name input DOM node

    const addTodo = () => {
        dispatch('addTodo', name);
        name = '';
        nameEl.focus();                // give focus to the name input
    }

    const onCancel = () => {
        name = '';
        nameEl.focus();                // give focus to the name input
    }

</script>

<form on:submit|preventDefault={addTodo} on:keydown={e => e.key === 'Escape' && onCancel()}>
    <h2 class="label-wrapper">
        <label for="todo-0" class="label__lg">What needs to be done?</label>
    </h2>
    <input bind:value={name} bind:this={nameEl} type="text" id="todo-0" autoComplete="off" class="input input__lg" />
    <button type="submit" disabled={!name} class="btn btn__primary btn__lg">Add</button>
</form>
```
Try the app out -- type a new todo name in to the `<input>` field, press <kbd>Tab</kbd> to give focus to the *Add* button, and then hit <kbd>Enter</kbd> or <kbd>Escape</kbd> to see how the input receovers focus.

### Autofocusing our input

The next feature we will add to our `NewTodo` component will be an `autofocus` prop, which will allow us to specify that we want the `<input>` field to be focused on page load.

1. Our first attempt is as follows -- let's try adding the `autofocus` prop and just call `nameEl.focus()` from the `<script>` block. Update the first part of the `NewTodo.svelte` `<script>` section (the first four lines) to look like this:
```
<script>
    import { createEventDispatcher } from 'svelte';
    const dispatch = createEventDispatcher();

    export let autofocus = false;

    let name = '';
    let nameEl;                        // reference to the name input DOM node

    if (autofocus) nameEl.focus();
```

2. Now go back to the `Todos` component, and pass the `autofocus` prop into the `<NewTodo>` component call, like so:
```
<!-- NewTodo -->
<NewTodo autofocus on:addTodo={e => addTodo(e.detail)} />
```

3. If you try your app out now, you'll see that the page is now blank, and in your DevTools web console, you'll see an error along the lines of: `TypeError: nameEl is undefined`.

To understand what's happening here, let's talk some more about that [component lifecycle](https://svelte.dev/tutorial/onmount) we mentioned earlier.










cd JavaScript/Tools_and_Testing/Client-side_Frameworks/Svelte/Svelte_Reactivity_Lifecycle_Accessibility