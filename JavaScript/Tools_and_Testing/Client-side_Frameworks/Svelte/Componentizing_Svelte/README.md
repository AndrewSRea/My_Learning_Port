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











cd JavaScript/Tools_and_Testing/Client-side_Frameworks/Svelte/Componentizing_Svelte