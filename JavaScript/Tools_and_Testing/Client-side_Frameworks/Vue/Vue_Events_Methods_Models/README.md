# Adding a new todo form: Vue events, methods, and models

We now have sample data in place, and a loop that takes each bit of data and renders it inside a `ToDoItem` in our app. What we really need next is the ability to allow our users to enter their own todo items into the app, and for that we'll need a text `<input>`, an event to fire when the data is submitted, a method to fire upon submission to add the data and re-render the list, and a model to control the data. This is what we'll cover in this article.

## Creating a New To-Do form

We now have an app that displays a list of to-do items. However, we can't update our list of items without manually changing our code! Let's fix that. Let's create a new component that will allow us to add a new to-do item.

1. In your components folder, create a new file called `ToDoForm.vue`.

2. Add a blank `<template>` and a `<script>` tag like before:
```
<template></template>

<script>
    export default {};
</script>
```

3. Let's add in an HTML form that lets you enter a new todo item and submit it into the app. We need a [`<form>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/form) with [`<label>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/label), an [`<input>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input), and a [`<button>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button). Update your template as follows:
```
<template>
    <form>
        <label for="new-todo-input">
            What needs to be done?
        </label>
        <input
            type="text"
            id="new-todo-input"
            name="new-todo"
            autocomplete="off"
        />
        <button type="submit">
            Add
        </button>
    </form>
</template>
```
So we now have a form component into which we can enter the title of a new todo item (which will become a label for the corresponding `ToDoItem` when it is eventually rendered).

4. Let's load this component into our app. Go back to `App.vue` and add the following `import` statement just below the previous one, inside your `<script>` element:
```
import ToDoForm from './components/ToDoForm';
```

5. You also need to register the new component in your App component -- update the `components` property of the component object so that it looks like this:
```
components: {
    ToDoItem,
    ToDoForm
}
```

6. Finally for this section, render your `ToDoForm` component inside your App by adding the `<to-do-form>` element inside your `App`'s `<template>`, like so:
```
<template>
    <div id="app">
        <h1>My To-Do List</h1>
        <ul>
            <li v-for="item in ToDoItems" :key="item.id">
                <to-do-item :label="item.label" :done="item.done" :id="item.id"></to-do-item>
            </li>
        </ul>
    </div>
</template>
```

Now when you view view your running site, you should see the new form displayed.

If you fill it out and click the "Add" button, the page will post the form back to the server, but this isn't really what we want. What we actually want to do is run a method on the [`submit` event](https://developer.mozilla.org/en-US/docs/Web/API/HTMLFormElement/submit_event) that will add the new todo to the `ToDoItem` data list defined inside `App`. To do that, we'll need to add a method to the component instance.










cd JavaScript/Tools_and_Testing/Client-side_Frameworks/Vue/Vue_Events_Methods_Models