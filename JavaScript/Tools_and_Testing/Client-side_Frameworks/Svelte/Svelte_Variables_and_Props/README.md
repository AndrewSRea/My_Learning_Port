# Dynamic behavior in Svelte: working with variables and props

Now that we have our markup and styles ready, we can start developing the required features for our Svelte To-Do list app. In this article, we'll be using variables and props to make our app dynamic, allowing us to add and delete todos, mark them as complete, and filter them by status.

## Code along with us

### Git

Clone the GitHub repo (if you haven't already done it) with:
```
git clone https://github.com/opensas/mdn-svelte-tutorial.git
```
Then, to get to the current app state, run:
```
cd mdn-svelte-tutorial/03-adding-dynamic-behavior
```
Or directly download the folder's content:
```
npx degit opensas/mdn-svelte-tutorial/03-adding-dynamic-behavior
```
Remember to run `npm install && npm run dev` to start your app in development mode.

### REPL

To code along with us using the REPL, start at:

[https://svelte.dev/repl/c862d964d48d473ca63ab91709a0a5a0?version=3.23.2](https://svelte.dev/repl/c862d964d48d473ca63ab91709a0a5a0?version=3.23.2)

## Working with todos

Our `Todos.svelte` component is currently just displaying static markup; let's start making it a bit more dynamic. We'll take the tasks information from the markup and store it in a `todos` array. We'll also create two variables to keep track of the total number of tasks and the completed tasks.

The state of our component will be represented by these three top-level variables.

1. Create a `<script>` section at the top of `src/components/Todos.svelte` and give it some content, as follows:
```
<script>
    let todos = [
        { id: 1, name: 'Create a Svelte starter app', completed: true },
        { id: 2, name: 'Create your first component', completed: true },
        { id: 3, name: 'Complete the rest of the tutorial', completed: false }
    ]

    let totalTodos = todos.length;
    let completedTodos = todos.filter(todo => todo.completed).length;
</script>
```
Now let's do something with that information.

2. Let's start by showing a status message. Find the `<h2>` heading with an `id` of `list-heading` and replace the hardcoded number of active and completed tasks with dynamic expressions:
```
<h2 id="list-heading">{completedTodos} out of {totalTodos} items completed</h2>
```

3. Go to the app, and you should see the "2 out of 3 items completed" message as before, but this time the information is coming from the `todos` array.

4. To prove it, go to that array, and try changing some of the todo object's completed property values, and even add a new todo object. Observe how the numbers in the message are updated appropriately.

## Dynamically generating the todos from the data

At the moment, our displayed todo items are all static. We want to iterate over each item in our `todos` array and render the markup for each task, so let's do that now.

HTML doesn't have a way of expressing logic -- like conditionals and loops. Svelte does. In this case, we use the [`{#each...}`]() directive to iterate over the `todos` array. The second parameter, if provided, will contain the index of the current item. Also, a key expression can be provided, which will uniquely identify each item. Svelte will use it to [diff the list](https://en.wikipedia.org/wiki/Diff) when data changes, rather than adding or removing items at the end, and it's a good practice to always specify one. Finally, an `:else` block can be provided, which will be rendered when the list is empty.

Let's give it a try.

1. Replace the existing `<ul>` element with the following simplified version to get an idea of how it works:
```
<ul>
{#each todos as todo, index (todo.id)}
    <li>
        <input type="checkbox" checked={todo.completed}/> {index}. {todo.name} (id: {todo.id})
    </li>
{:else}
    Nothing to do here!
{/each}
</ul>
```

2. Go back to the app and you'll see something like this:

![Image of the unordered list created from the code above](https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Svelte_variables_props/01-each-block.png)

3. Now that's we've seen that this is working, let's generate a complete todo item with each loop of the `{#each}` directive, and inside embed the information from the `todos` array: `id`, `name`, and `completed`. Replace your existing `<ul>` block with the following:
```
<!-- Todos -->
<ul role="list" class="todo-list stack-large" aria-labelledby="list-heading">
    {#each todos as todo (todo.id)}
        <li class="todo">
            <div class="stack-small">
                <div class="c-cb">
                    <input type="checkbox" id="todo-{todo.id}" checked={todo.completed}/>
                    <label for="todo-{todo.id}" class="todo-label">
                        {todo.name}
                    </label>
                </div>
                <div class="btn-group">
                    <button type="button" class="btn">
                        Edit <span class="visually-hidden">{todo.name}</span>
                    </button>
                    <button type="button" class="btn btn__danger">
                        Delete <span class="visually-hidden">{todo.name}</span>
                    </button>
                </div>
            </div>
        </li>
    {:else}
        <li>Nothing to do here!</li>
    {/each}
</ul>
```
Notice how we are using curly braces to embed JavaScript expressions in HTML attributes, like we did with the `checked` and `id` attributes of the checkbox.

We've turned our static markup into a dynamic template ready to display the tasks from our component's state. Great! We are getting there.

## Working with props

With a hardcoded list of todos, our `Todos` component is not very useful. To turn our component into a general purpose To-Do editor, we should allow the parent of this component to pass in the list of todos to edit. This would allow us to save them to a web service or local storage and later retrieve them for update. So let's turn the array into a `prop`.

1. In `Todos.svelte`, replace the existing `let todos = ...` block with `export let todos = []`.
```
export let todos = [];
```
This may feel a little weird at first. That's not how `export` normally works in JavaScript modules! This is how Svelte "extends" JavaScript by taking valid syntax and giving it a new purpose. In this case, Svelte is using the `export` keyword to mark a variable declaration as a property or prop, which means it becomes accessible to consumers of the component.

You can also specify a default initial value for a prop. This will be used if the component's consumer doesn't specify the prop on the component -- or if its initial value is undefined -- when instantiating the component.

So with `export let todos = []`, we are telling Svelte that our `Todos.svelte` component will accept a `todos` attribute which, when omitted, will be initialized to an empty array.

2. Have a look at the app, and you'll see the "Nothing to do here!" message. This is because we are currently not passing any value into it from `App.svelte`, so it's using the default value.

3. Now let's move our todos to `App.svelte` and pass them to the `Todos.svelte` component as a prop. Update `src/App.svelte` as follows:
```
<script>
    let todos = [
        { id: 1, name: 'Create a Svelte starter app', completed: true },
        { id: 2, name: 'Create your first component', completed: true },
        { id: 3, name: 'Complete the rest of the tutorial', completed: false }
    ]
</script>

<Todos todos={todos} />
```

4. When the attribute and the variable have the same name, Svelte allows you to just specify the variable as a handy shortcugt, so we can rewrite our last line like this. Try this now:
```
<Todos {todos} />
```
At this point, your todos should render just like they did before, except that now we're passing them in from the `App.svelte` component.







cd JavaScript/Tools_and_Testing/Client-side_Frameworks/Svelte/Svelte_Variables_and_Props