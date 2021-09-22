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











cd JavaScript/Tools_and_Testing/Client-side_Frameworks/Vue/Vue_Conditional_Rendering