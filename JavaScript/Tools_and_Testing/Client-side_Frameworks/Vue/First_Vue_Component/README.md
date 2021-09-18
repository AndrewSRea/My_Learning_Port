# Creasting our first Vue component

Now it's time to dive deeper into Vue, and create our own custom component -- we'll start by creating a component to represent each item in the todo list. Along the way, we'll learn about a few important concepts such as calling components inside other components, passing data to them via props, and saving data state.

<hr>

**Note**: If you need to check your code against Mozilla's version, you can find a finished version of the sample Vue app code in Mozilla's [todo-vue repository](https://github.com/mdn/todo-vue). For a running live version, see [https://mdn.github.io/todo-vue/dist/](https://mdn.github.io/todo-vue/dist/).

<hr>

## Creating a ToDoItem component

Let's create our first component, which will display a single todo item. We'll use this to build our list of todos.

1. In your `moz-todo-vue/src/components` directory, create a new file named `ToDoItem.vue`. Open the file in your code editor.
2. Create the component's template section by adding `<template></template>` to the top of the file.
3. Create a `<script></script>` section below your template section. Inside the `<script>` tags, add a default exported object `export default {}`, which is your component object.

Your file should now look like this:
```
<template></template>
<script>
    export default {};
</script>
```
We can now begin to add actual content to our `ToDoItem`. Vue templates are currently only allowed a single root element -- one element needs to wrap everything inside the template section (this will change when Vue 3 comes out). We'll use a [`<div>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/div) for that root element.

1. Add an empty `<div>` inside your component template now.

2. Inside that `<div>`, let's add a checkbox and a corresponding label. Add an `id` to the checkbox, and a `for` attribute mapping the checkbox to the label, as shown below.
```
<template>
    <div>
        <input type="checkbox" id="todo-item" checked="false" />
        <label for="todo-item">My Todo Item</label>
    </div>
</template>
```

### Using ToDoItem inside our app

This is all fine, but we haven't added the component to our app yet, so there's no way to test it and see if everything is working. Let's add it now.

1. Open up `App.vue` again.

2. At the top of your `<script>` tag, add the following to import your `ToDoItem` component:
```
import ToDoItem from './components/ToDoItem.vue';
```

3. Inside your component object, add the `components` property, and inside it add your `ToDoItem` component to register it.

Your `<script>` contents should now look like this:
```
import ToDoitem from './components/ToDoItem.vue';

export default {
    name: 'app',
    components: {
        ToDoItem
    }
};
```
This is the same way that the `HelloWorld` component was registered by the Vue CLI earlier.

To actually render the `ToDoItem` component in the app, you need to go up into your `<template>` element and call it as a `<to-do-item></to-do-item>` element. Note that the component file name and its representation in JavaScript is always PascalCase (e.g. `ToDoList`), and the equivalent custom element is always in kebab-case (e.g. `<to-do-list>`).

1. Underneath the [`<h1>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/Heading_Elements), create an unordered list ([`<ul>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/ul)) containing a single list item ([`<li>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/li)).
2. Inside the list item, add `<to-do-item></to-do-item>`.

Your `App.vue` `<template>` contents should now look something like this:
```
<div id="app">
    <h1>To-Do List</h1>
    <ul>
        <li>
            <to-do-list></to-do-list>
        </li>
    </ul>
</div>
```
If you check your rendered app again, you should now see your rendered `ToDoItem`, consisting of a checkbox and a label.








cd JavaScript/Tools_and_Testing/Client-side_Frameworks/Vue/First_Vue_Component