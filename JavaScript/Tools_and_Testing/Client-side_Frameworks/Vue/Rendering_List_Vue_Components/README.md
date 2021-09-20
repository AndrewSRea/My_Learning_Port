# Rendering a list of Vue components

At this point, we've got a fully working component; we're now ready to add multiple `ToDoItem` components to our App. In this article, we'll look at adding a set of todo item data to our `App.vue` component, which we'll then loop through and display inside `ToDoItem` components using the `v-for` directive.

## Rendering lists with `v-for`

To be an effective to-do list, we need to be able to render multiple to-do items. To do that, Vue has a special directive, [`v-for`](https://vuejs.org/v2/api/#v-for). This is a built-in Vue directive that lets us include a loop inside of our template, repeating the rendering of a template feature for each item in an array. We'll use this to iterate through an array of to-do items and display them in our app in separate `ToDoItem` components.

### Adding some data to render

First, we need to get an array of to-do items. To do that, we'll add a `data` property to the `App.vue` component object, containing a `ToDoItems` field whose value is an array of todo items. While we'll eventually add a mechanism to add new todo items, we can start with some mock to do items. Each to-do item will be represented by an object with a `name` and a `done` property.

Add a few sample to-do items, along the lines of those seen below. This way you have some data available for rendering using `v-for`.
```
export default {
    name: 'app',
    components: {
        ToDoItem
    },
    data() {
        return {
            ToDoItems: [
                { label: 'Learn Vue', done: false },
                { label: 'Create a Vue project with the CLI', done: true },
                { label: 'Have fun', done: true },
                { label: 'Create a to-do list', done: false }
            ]
        };
    }
};
```
Now that we have a list of items, we can use the `v-for` directive to display them. Directives are applied to elements like other attributes. In the case of `v-for`, you use a special syntax similar to a [`for...in`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...in) loop in JavaScript -- `v-for="item in items"` -- where `items` is the array you want to iterate over, and `item` is a reference to the current element in the array.

`v-for` attaches to the element you want to repeat, and renders that element and its children. In this case, we want to display a `<li>` element for every to-do item inside our `ToDoItems` array. Then we want to pass the data from each to-do item to `ToDoItem` component.

### Key attribute

Before we do that, there's one other piece of syntax to know about that is used with `v-for`: the `key` attribute. To help Vue optimize rendering the elements in the list, it tries to patch list elements so it's not recreating them every time the list changes. However, Vue needs help. To make sure it is reusing list elements appropriately, it needs a unique "key" on the same element that you attach `v-for` to.

To make sure that Vue can accurately compare the `key` attributes, they need to be string or numeric values. While it would be great to use the name field, this field will eventually be controlled by user input, which means we can't guarantee that the names would be unique. We could use `lodash.uniqueid()`, however, like we did in the previous article.

1. Import `lodash.uniqueid` into `App` component in the same way you did with your `ToDoItem` component, using:
```
import uniqueId from 'lodash.uniqueid';
```

2. Next, add an `id` field to each element in your `ToDoItems` array, and assign each of them a value of `uniqueId('todo-')`.

Your `App.vue` `<script>` element contents should now look like this:
```
import ToDoItem from './components/ToDoItem.vue';
import uniqueId from 'lodash.uniqueid';

export default {
    name: 'app',
    components: {
        ToDoItem
    },
    data() {
        return {
            ToDoItems: [
                { id: uniqueId('todo-'), label: 'Learn Vue', done: false },
                { id: uniqueId('todo-'), label: 'Create a Vue project with the CLI', done: true },
                { id: uniqueId('todo-'), label: 'Have fun', done: true },
                { id: uniqueId('todo-'), label: 'Create a to-do list', done: false }
            ]
        };
    }
};
```

3. Now, add the `v-for` directive and `key` attribute to the `<li>` element in your `App.vue` template, like so:
```
<ul>
    <li v-for="item in ToDoItems" :key="item.id">
        <to-do-item label="My ToDoItem" :done="true"></to-do-item>
    </li>
</ul>
```
When you make this change, every JavaScript expression between the `<li>` tags will have access to the `item` value in addition to the other component attributes. This means we can pass the fields of our item objects to our `ToDoItem` component -- just remember to use the `v-bind` syntax. This is really useful, as we want our todo items to display their `label` properties as their label, not a static label of "My Todo Item". In addition, we want their checked status to reflect their `done` properties, not always be set to `done="false"`.









cd JavaScript/Tools_and_Testing/Client-side_Frameworks/Vue/Rendering_List_Vue_Components