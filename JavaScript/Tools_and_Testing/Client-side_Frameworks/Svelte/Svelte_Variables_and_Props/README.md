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








cd JavaScript/Tools_and_Testing/Client-side_Frameworks/Svelte/Svelte_Variables_and_Props