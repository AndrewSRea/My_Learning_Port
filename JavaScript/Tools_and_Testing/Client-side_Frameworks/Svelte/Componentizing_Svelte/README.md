# Componentizing our Svelte app

In the last article, we started developing our Todo list app. The central objective of this article is to look at how to break our app into manageable components and share information between them. We'll componentize our app, then add more functionality to allow users to update existing components.

## Code along with us

### Git

Clone the GitHub repo (if you haven't already done it) with:
```
git clone https://github.com/opensas/mdn-svelte-tutorial.git
```
Then, to get to the current app state, run:
```
cd mdn-svelte-tutorial/04-componentizing-our-app
```
Or directly download the folder's content:
```
npx degit opensas/mdn-svelte-tutorial/04-componentizing-our-app
```
Remember to run `npm install && npm run dev` to start your app in development mode.

### REPL

To code along with us using the REPL, start at:

[https://svelte.dev/repl/99b9eb228b404a2f8c8959b22c0a40d3?version=3.23.2](https://svelte.dev/repl/99b9eb228b404a2f8c8959b22c0a40d3?version=3.23.2)

## Breaking the app into components

In Svelte, an application is composed from one or more components. A component is a reusable, self-contained block of code that encapsulates HTML, CSS, and JavaScript that belong together, written into a `.svelte` file. Components can be big or small, but they are usually clearly defined: the most effective components serve a single, obvious purpose.

The benefits of defining components are comparable to the more general best practice of organizing your code into manageable pieces. It will help you understand how they relate to each other, it will promote reuse, and it will make your code easier to reason about, maintain, and extend.

But how do you know what should be split into its own component?

There are no hard fules for this. Some people prefer an intuitive approach and start looking at the markup and drawing boxes around every component and subcomponent that seems to have its own logic.

Other people apply the same techniques used for deciding if you should create a new function or object. One such technique is the single responsibility principle -- that is, a component should ideally only do one thing. If it ends up growing, it should be split into smaller subcomponents.

Both approaches should complement each other, and help you decide how to better organize your components.

Eventually, we will split up our app into the following components:

* `Alert.svelte`: A general notification box for communicating actions that have occurred.
* `NewTodo.svelte`: The text input and button that allow you to enter a new todo item.
* `FilterButton.svelte`: The *All*, *Active*, and *Completed* buttons that allow you to apply filters to the displayed todo items.
* `TodosStatus.svelte`: The "x out of y items completed" heading.
* `Todo.svelte`: An individual todo item. Each visible todo item will be displayed in a separate copy of this component.
* `MoreActions.svelte`: The *Check All* and *Remove Completed* buttons at the bottom of the UI that allow you to perform mass actions on the todo items.

In this article, we will concentrate on creating the `FilterButton` and `Todo` components; we'll get to the others in future articles.

Let's get started.

<hr>

*Note*: In the process of creating our first couple of components, we will also learn different techniques to communicate between components, and the pros and cons of each.

<hr>

## Extracting our filter component

We'll begin by creating our `FilterButton.svelte`.

1. First of all, create a new file -- `components/FilterButton.svelte`.

2. Inside this file, we will declare a `filter` prop, and then copy the relevant markup over to it from `Todos,svelte`. Add the following content into the file:
```
<script> 
    export let filter = 'all'
</script>

<div class="filters btn-group stack-exception">
    <button class="btn toggle-btn" class:btn__primary={filter === 'all'} aria-pressed={filter === 'all'} on:click={()=> filter = 'all'} >
        <span class="visually-hidden">Show</span>
        <span>All</span>
        <span class="visually-hidden">tasks</span>
    </button>
    <button class="btn toggle-btn" class:btn__primary={filter === 'active'} aria-pressed={filter === 'active'} on:click{()=> filter = 'active'} >
        <span class="visually-hidden">Show</span>
        <span>Active</span>
        <span class="visually-hidden">tasks</span>
    </button>
    <button class="btn toggle-btn" class:btn__primary={filter === 'completed'} aria-pressed={filter === 'completed} on:click{()=> filter = 'completed'} >
        <span class="visually-hidden">Show</span>
        <span>Completed</span>
        <span class="visually-hidden">tasks</span>
    </button>
</div>
```

3. Back in our `Todos.svelte` component, we want to make use of our `FilterButton` component. First of all, we need to import it -- add the following line at the top of the `Todos.svelte` `<script>` section:
```
import FilterButton from './FilterButton.svelte'
```

4. Now, replace the `filters` `<div>` with a call to the `FilterButton` component, which takes the current filter as a prop -- the below line is all you need:
```
<FilterButton {filter} />
```

<hr>

**Note**: Remember that when the HTML attribute name and variable matches, they can be replaced with `{variable}`. That's why we could replace `<FilterButton filter={filter} />` with `<FilterButton {filter} />`.

<hr>

So far, so good! Let's try out the app now. You'll notice that when you click on the filter buttons, they are selected and the style updates appropriately. But! We have a problem -- the todos aren't filtered. That's because the `filter` variable flows down the `Todos` component to the `FilterButton` component through the prop, but changes occurring in the `FilterButton` component don't flow back up to its parent -- the data binding is one-way by default. Let's look at a way to solve this.

## Sharing data between components: passing a handler as a prop

One way to let child components notify their parents of any changes is to pass a handler as a prop. The child component will execute the handler, passing the needed information as a parameter, and the handler will modify the parent's state.

In our case, the `FilterButton` component will receive an `onclick` handler from its parent. Whenever the user clicks on any filter button, the child will call the `onclick` handler, passing the selected filter as a parameter, back up to its parent.

We will just declare the `onclick` prop assigning a dummy handler to prevent errors, like this:
```
export let onclick = (clicked) => {}
```
And we'll declare the following reactive statement -- `$: onclick(filter)` -- to call the `onclick` handler whenever the `filter` variable is updated.

1. The `<script>` section of our `FilterButton` component should end up looking like this -- update it now:
```
<script>
    export let filter = 'all'
    export let onclick = (clicked) => {}
    $: onclick(filter)
</script>
```

2. Now, when we call `FilterButton` inside `Todos.svelte`, we'll need to specify the handler. Update it like this:
```
<FilterButton {filter} onclick={ (clicked) => filter = clicked }/>
```

When any filter button is clicked, we just update the filter variable with the new filter. Now our `FilterButton` component will work again.

## Easier two-way data binding with the bind directive

In the previous example, we realized that our `FilterButton` component wasn't working because our application state was flowing down from parent to child through the `filter` prop -- but it wasn't going back up. So we added an `onclick` prop to let the child component communicate the new `filter` value to its parent.

It works OK, but Svelte provides us an easier and more straightforward way to achieve two-way data binding. Data ordinarily flows down from parent to child using props. If we want it to also flow the other way -- from child to parent -- we can use [the `bind:` directive](https://svelte.dev/docs#bind_element_property).

Using `bind`, we will tell Svelte that any changes made to the `filter` prop in the `FilterButton` component should propagate back up to the parent component, `Todos`. That is, we will bind the `filter` variable's value in the parent to its value in the child.

1. In `Todos.svelte`, update the call to the `FilterButton` component as follows:
```
<FilterButton bind:filter={filter} />
```
As usual, Svelte provides us with a nice shorthand -- `bind:value={value}` is equivalent to `bind:value`. So in the above example, you could just write `<FilterButton bind:filter />`.

2. The child component can now modify the value of the parent's filter variable, so we no longer need the `onclick` prop. Modify your `FilterButton` `<script>` like this:
```
<script>
    export let filter = 'all'
</script>
```

3. Try your app again, and you should still see your filters working correctly.

## Creating out Todo component

Now we will create a `Todo` component to encapsulate each individual todo -- including the checkbox and some editing logic so you can change an existing todo.

Our `Todo` component will receive a single `todo` object as a prop. Let's declare the `todo` prop and move the code from the Todos component. Just for now, we'll replace the call to `removeTodo` with an alert. We'll add that functionality back in later on.

1. Create a new component file -- `components/Todo.svelte`.

2. Put the following contents inside this file:
```
<script>
    export let todo
</script>

<div class="stack-small">
    <div class="c-cb">
        <input type="checkbox" id="todo-{todo.id}"
            on:click={() => todo.completed = !todo.completed}
            checked={todo.completed}
        />
        <label for="todo-{todo.id}" class="todo-label">{todo.name}</label>
    </div>
    <div class="btn-group">
        <button type="button" class="btn">
            Edit <span class="visually-hidden">{todo.name}</span>
        </button>
        <button type="button" class="btn btn__danger" on:click={() => alert('not implemented')}>
            Delete <span class="visually-hidden">{todo.name}</span>
        </button>
    </div>
</div>
```

3. Now we need to import our `Todo` component into `Todos.svelte`. Go to this file now, and add the following `import` statement below your previous one:
```
import Todo from './Todo.svelte';
```

4. Next, we need to update our `{#each}` block to include a `<Todo>` component for each todo, rather than the code that has been moved out to `Todo.svelte`. We are also passing the current `todo` object into the component as a prop.

Update the `{#each}` block inside `Todos.svelte` like so:
```
<ul role="list" class="todo-list stack-large" aria-labelledby="list-heading">
    {#each filterTodos(filter, todos) as todo (todo.id)}
        <li class="todo">
            <Todo {todo} />
        </li>
    {:else}
        <li>Nothing to do here!</li>
    {/each}
</ul>
```

The list of todos is displayed on the page, and the checkboxes should work (try checking/unchecking a couple, and then observing that the filters still work as expected), but our "x out of y items completed" status heading will no longer update accordingly. That's because our `Todo` component is receiving the todo via the prop, but it's not sending any information back to its parent. We'll fix this later on.

## Sharing data between components: props-down, events-up pattern

The `bind` directive is pretty straightforward and allows you to share data between a parent and child component with minimal fuss. However, when your application grows larger and more complex, it can easily get difficult to keep track of all your bound values. A different approach is the "props-down, events-up" communication pattern.

Basically, this pattern relies on child components receiving data from their parents via props and parent components updating their state by handling events emitted from child components. So props *flow down* from parent to child and events *bubble up* from child to parent. This pattern establishes a two-way flow of information, which is predictable and easier to reason about.

Let's look at how to emit our own events to reimplement the missing *Delete* button functionality.

To create custom events, we'll use the `createEventDispatcher` utility. This will return a `dispatch()` function that will allow us to emit custom events. When you dispatch an event, you have to pass the name of the event and, optionally, an object with additional information that you want to pass to every listener. This additional data will be available on the `detail` property of the event object.

<hr>

**Note**: Custom events in Svelte share the same API as regular DOM events. Moreover, you can bubble up an event to your parent component by specifying `on:event` without any handler.

<hr>

We'll edit our `Todo` component to emit a `remove` event, passing the todo being removed as additional information.

1. First of all, add the following lines to the top of the `Todo` component's `<script>` section:
```
import { createEventDispatcher } from 'svelte';
const dispatch = createEventDispatcher();
```

2. Now update the *Delete* button in the markup section of the same file to look like so:
```
<button type="button" class="btn btn__danger" on:click={() => dispatch('remove', todo)}>
    Delete <span class="visually-hidden">{todo.name}</span>
</button>
```
With `dispatch('remove', todo)`, we are emitting a `remove` event, and passing as additional data the `todo` being deleted. The handler will be called with an event object available, with the additional data available in the `event.detail` property.

3. Now we have to listen to that event from inside `Todos.svelte` and act accordingly. Go back to this file and update your `<Todo>` component call like so:
```
<Todo {todo} on:remove={e => removeTodo(e.detail)} />
```
Our handler receives the `e` parameter (the event object) which, as described before, holds the todo being deleted in the `detail` property.

4. At this point, if you try out your app again, you should see that the *Delete* functionality now works again! So our custom event has worked as we hoped. In addition, the `remove` event listener is sending the data change back up to the parent, so our "x out of y items completed" status heading will now update appropriately when todos are deleted.

Now we'll take care of the `update` event so that our parent component can get notified of any modified todo.

## Updating todos

We still have to implement functionality to allow us to edit existing todos. We'll have to include an editing mode in the `Todo` component. When entering editing mode, we'll show an `<input>` field to allow us to edit the current todo name, with two buttons to confirm or cancel our changes.

### Handling the events

1. We'll need one variable to track whether we are in editing mode and another to store the name of the task being updated. Add the following variable definitions at the bottom of the `<script>` section of the `Todo` component:
```
let editing = false;           // track editing mode
let name = todo.name:          // hold the name of the todo being edited
```

2. We have to decide what events our `Todo` component will emit:
    - We could emit different events for the status toggle and editing of the name (e.g. `updateTodoStatus` and `updateTodoName`).
    - Or we could take a more generic approach and emit a single `update` event for both operations.

We will take the second approach so we can demonstrate a different technique. The advantage of this approach is that later we can add more fields to the todos and still handle all updates with the same event.

Let's create an `update()` function that will receive the changes and will emit an update event with the modified todo. Add the following, again to the bottom of the `<script>` section:
```
function update(updatedTodo) {
    todo = { ...todo, ...updatedTodo };     // applies modifications to todo
    dispatch('update', todo);               // emit update event
}
```
Here we are using the [spread syntax]() to return the original todo with the modifications applied to it.

3. Next we'll create different functions to handle each user action. When the Todo is in editing mode, the user can save or cancel the changes. When it's not in editing mode, the user can delete the todo, edit it, or toggle its status between completed and active.

Add the following set of functions below your previous function to handle these actions:
```
function onCancel() {
    name = todo.name;                         // restores name to its initial value
    editing = false;                          // and exit editing mode
}

function onSave() {
    update({ name: name });                   // updates todo name
    editing = false;                          // and exit editing mode
}

function onRemove() {
    dispatch('remove', todo);                 // emit remove event
}

function onEdit() {
    editing = true;                           // enter editing mode
}

function onToggle() {
    update({ completed: !todo.completed });   // updates todo status
}
```

### Updating the markup










cd JavaScript/Tools_and_Testing/Client-side_Frameworks/Svelte/Componentizing_Svelte