# Vue conditional rendering: editing existing todos

Now it is time to add one of the major parts of functionality that we're still missing -- the ability to edit existing todo items. To do this, we will take advantage of Vue's conditional rendering capabilities -- namely `v-if` and `v-else` -- to allow us to toggle between the existing todo item view, and an edit view where you can update todo item labels. We'll also look at adding functionality to delete todo items.

## Creating an editing component

We can start by creating a separate component to handle the editing functionality. In your `components` directory, create a new file called `ToDoItemEditForm.vue`. Copy the following code into that file:
```
<template>
    <form class="stack-small" @submit.prevent="onSubmit">
        <div>
            <label class="edit-label">Edit Name for &quot;{{label}}&quot;</label>
            <input :id="id" type="text" autocomplete="off" v-model.lazy.trim="newLabel" />
        </div>
        <div class="btn-group">
            <button type="button" class="btn" @click="onCancel">
                Cancel
                <span class="visually-hidden">editing {{label}}</span>
            </button>
            <button type="submit" class="btn btn__primary">
                Save
                <span class="visually-hidden">edit for {{label}}</span>
            </button>
        </div>
    </form>
</template>
<script>
    export default {
        props: {
            label: {
                type: String,
                required: true 
            },
            id: {
                type: String,
                required: true 
            }
        },
        data() {
            return {
                newLabel: this.label
            };
        },
        methods: {
            onSubmit() {
                if (this.newLabel && this.newLabel !== this.label) {
                    this.$emit("item-edited", this.newLabel);
                }
            },
            onCancel() {
                this.$emit("edit-cancelled");
            }
        }
    };
</script>
<style scoped>
    .edit-label {
        font-family: Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        color: #0b0c0c;
        display: block;
        margin-bottom: 5px;
    }
    input {
        display: inline-block;
        margin-top: 0.4rem;
        width: 100%;
        min-height: 4.4rem;
        padding: 0.4rem 0.8rem;
        border: 2px solid #565656;
    }
    form {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
    }
    form > * {
        flex: 0 0 100%;
    }
</style>
```

<hr>

**Note**: Walk through the above code, then read the below description to make sure you understand everything the component is doing before moving on. This is a useful way to help reinforce everything you've learned so far.

<hr>

This code sets up the core of the edit functionality. We create a form with an `<input>` field for editing the name of our to-do.

There is a "Save" button and a "Cancel" button:

* When the "Save" button is clicked, the component emits the new label via an `item-edited` event.
* When the "Cancel" button is clicked, the component signals this by emitting an `edit-cancelled` event.

## Modifying our `ToDoItem` component

Before we can add `ToDoItemEditForm` to our app, we need to make a few modifications to our `ToDoitem` component. Specifically, we need to add a variable to track if the item is being edited, and a button to toggle that variable. We'll also add a `Delete` button since deletion is closely related.

Update your `ToDoItem`'s template as shown below:
```
<template>
    <div class="stack-small">
        <div class="custom-checkbox">
            <input type="checkbox" class="checkbox" :id="id" :checked="isDone" 
                @change="$emit('checkbox-changed')" />
            <label :for="id" class="checkbox-label">{{label}}</label>
        </div>
        <div class="btn-group">
            <button type="button" class="btn" @click="toggleToItemEditForm">
                Edit <span class="visually-hidden">{{label}}</span>
            </button>
            <button type="button" class="btn btn__danger" @click="deleteToDo">
                Delete <span class="visually-hidden">{{label}}</span>
            </button>
        </div>
    </div>
</template>
```
We've added a wrapper `<div>` around the whole template for layout purposes.

We've also added "Edit" and "Delete" buttons:

* The "Edit" button, when clicked, will toggle displaying the `ToDoItemEditForm` component so we can use it to edit our todo item, via an event handler function called `toggleToItemEditForm()`. This handler will set an `isEditing` flag to true. To do that, we'll need to first define it inside our `data()` property.
* The "Delete" button, when clicked, will delete the todo item via an event handler function called `deleteToDo()`. In this handler, we'll emit an `item-deleted` event to our parent component so the list can be updated.

Let's define our click handlers, and the necessary `isEditing` flag.

Add `isEditing` below your existing `isDone` data point:
```
data() {
    return {
        isDone: this.done,
        isEditing: false
    };
}
```
Now add your methods inside a `methods` property, right below your `data()` property:
```
methods: {
    deleteToDo() {
        this.$emit('item-deleted');
    },
    toggleToItemEditForm() {
        this.isEditing = true;
    }
}
```













cd JavaScript/Tools_and_Testing/Client-side_Frameworks/Vue/Vue_Conditional_Rendering