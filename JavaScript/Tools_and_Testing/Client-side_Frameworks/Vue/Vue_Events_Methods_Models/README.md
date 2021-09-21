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

## Creating a method and binding it to an event with `v-on`

To make a method available to the `ToDoForm` component, we need to add it to the component object, and this is done inside a `methods` property to our component, which goes in the same place as `data()`, `props`, etc. The `methods` property holds any methods we might need to call in our component. When referenced, methods are fully run, so it's not a good idea to use them to display information inside the template. For displaying data that comes from calculations, you should use a `computed` property, which we'll cover later.

1. In this component, we need to add an `onSubmit()` method to a `methods` property inside the `ToDoForm` component object. We'll use this to handle the submit action.

Add this like so:
```
export default {
    methods: {
        onSubmit() {
            console.log('form submitted');
        }
    }
}
```

2. Next, we need to bind the method to our `<form>` element's `submit` event handler. Much like how Vue uses the [`v-bind`](https://vuejs.org/v2/api/#v-bind) syntax for binding attributes, Vue has a special directive for event handling: [`v-on`](https://vuejs.org/v2/api/#v-on). The `v-on` directive works via the `v-on:event="method"` syntax. And much like `v-bind`, there's also a shorthand syntax: `@event="method"`.

We'll use the shorthand syntax here for consistency. Add the `submit` handler to your `<form>` element like so:
```
<form @submit="onSubmit">
```

3. When you run this, the app still posts the data to the server, causing a refresh. Since we're doing all of our processing on the client, there's no server to handle the postback. We also lose all local state on page refresh. To prevent the browser from posting to the server, we need to stop the even't default action while bubbling up through the page ([`Event.preventDefault()`](https://developer.mozilla.org/en-US/docs/Web/API/Event/preventDefault), in vanilla JavaScript). Vue has a special syntax called **event modifiers** that can handle this for us right in our template.

Modifiers are appended to the end of an event with a dot like so: `@event.modifier`. Here is a list of event modifiers:

* `.stop`: Stops the event from propagating. Equivalent to [`Event.stopPropagation()`](https://developer.mozilla.org/en-US/docs/Web/API/Event/stopPropagation) in regular JavaScript events.
* `.prevent`: Prevents the event's default behavior. Equivalent to [`Event.preventDefault()`](https://developer.mozilla.org/en-US/docs/Web/API/Event/preventDefault).
* `.self`: Triggers the handler only if the event was dispatched from this exact element.
* `{.key}`: Triggers the event handler only via the specified key. [MDN has a list of valid key values](https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/key/Key_Values); multi-word keys just need to be converted to kebab-case (e.g. `page-down`).
* `.native`: Listens for a native event on the root (outermost wrapping) element on your component.
* `.once`: Listens for the event until it's been triggered once, and then no more.
* `.left`: Only trigger the handler via the left mouse button event.
* `.right`: Only triggers the handler via the right mouse button event.
* `.middle`: Only triggers the handler via the middle mouse button event.
* `.passive`: Equivalent to using the `{ passive: true }` parameter when creating an event listener in vanilla JavaScript using [`addEventListener()`](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener).

In this case, we need to use the `.prevent` handler to stop the browser's default submit action. Add `.prevent` to the `@submit` handler template like so:
```
<form @submit.prevent="onSubmit">
```
If you try submitting the form now, you'll notice that the page doesn't reload. If you open the console, you can see the results of the [`console.log()`](https://developer.mozilla.org/en-US/docs/Web/API/console/log) we added inside our `onSubmit()` method.

## Binding data to inputs with `v-model`

Next up, we need a way to get the value from the form's `<input>` so we can add the new to-do item to our `ToDoItems` data list.

The first thing we need is a `data` property in our form to track the value of the to-do.

1. Add a `data()` method to our `ToDoForm` component object that returns a `label` field. We can set the initial value of the `label` to an empty string.

Your component object should look something like this:
```
export default {
    methods: {
        onSubmit() {
            console.log('form submitted');
        }
    },
    data() {
        return {
            label: '';
        };
    }
};
```

2. We now need some way to attach the value of the `new-todo-input` `<input>` field to the `label` field. Vue has a special directive for this: [`v-model`](https://vuejs.org/v2/api/#v-model). `v-model` binds to the data property you set on it and keeps it in sync with the `<input>`. `v-model` works across all the various input types, including checkboxes, radios, and select inputs. To use `v-model`, you add an attribute with the structure `v-model="variable"` to the `<input>`.

So in our case, we would add it to our `new-todo-input` field as seen below. Do this now:
```
<input
    type="text"
    id="new-todo-input"
    name="new-todo"
    autocomplete="off"
    v-model="label"
/>
```

<hr>

**Note**: You can also sync data with `<input>` values through a combination of events and `v-bind` attributes. In fact, this is what `v-model` does behind the scenes. However, the exact event and attribute combination varies depending on input types and will take more code than just using the `v-model` shortcut.

<hr>

3. Let's test out our use of `v-model` by loggin the value of the data submitted in our `onSubmit()` method. In components, data attributes are accessed using the `this` keyword. So we access our `label` field using `this.label`.

Update your `onSubmit()` method to look like this:
```
methods: {
    onSubmit() {
        console.log('Label value: ', this.label);
    }
},
```

4. Now go back to your running app, add some text to the `<input>` field, and click the "Add" button. You should see the value you entered logged to your console. For example:
```
Label value: My value
```

## Changing `v-model` behavior with modifiers

In a similar fashion  to event modifiers, we can also add modifiers to change the behavior of `v-model`. In our case, there are two worth considering. The first, `.trim`, will remove whitespace from before or after the input. We can add the modifier to our `v-model` statement like so: `v-model.trim="label"`.

The second modifier we should consider is called `.lazy`. This modifier changes when `v-model` syncs the value for text inputs. As mentioned earlier, `v-model` syncing works by updating the variable using events. For text inputs, this sync happens using the [`input` event](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/input_event). Often this means that Vue is syncing the data after every keystroke. The `.lazy` modifier causes `v-model` to use the [`change` event](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/change_event) instead. This means that Vue will only sync data when the input loses focus or the form is submitted. For our purposes, this is much more reasonable since we only need the final data.

To use both the `.lazy` and the `.trim` modifier together, we can chain them, e.g. `v-model.lazy.trim="label"`.

Update your `v-model` attribute to chain `lazy` and `trim` as shown above, and then test your app again. Try, for example, submitting a value with whitespace at each end.










cd JavaScript/Tools_and_Testing/Client-side_Frameworks/Vue/Vue_Events_Methods_Models