# Focus management with Vue refs

We are nearly done with Vue. The last bit of functionality to look at is focus management, or put another way, how we can improve our app's keyboard accessibility. We'll look at using **Vue refs** to handle this -- an advanced feature that allows you to have direct access to the underlying DOM nodes below the virtual DOM, or direct access from one component to the internal DOM structure of a child component.

## The focus management problem

While we do have working edit functionality, we aren't providing a great experience for non-mouse users. Specifically, when a user activates the "Edit" button, we remove the "Edit" button from the DOM, but we don't move the user's focus anywhere so, in effect, it just disappears. This can be disorienting for keyboard and non-visual users.

To understand what's currently happening:

1. Reload your page, then press <kbd>Tab</kbd>. You should see a focus outline on the input for adding new to-do items.
2. Pres <kbd>Tab</kbd> again. The focus should move to the "Add" button.
3. Hit it again, and it'll be on the first checkbox. One more time, and focus should be on the first "Edit" button.
4. Activate the "Edit" button by pressing <kbd>Enter</kbd>. The checkbox will be replaced with our edit component, but the focus outline will be gone.

This behavior can be jarring. In addition, what happens when you press <kbd>Tab</kbd> again varies depending on the browser you're using. Similarly, if you save or cancel your edit, focus will disappear again as you move back to the non-edit view.

To give users a better experience, we'll add code to control the focus so that it gets set to the edit field when the edit form is shown. We'll also want to put focus back on the "Edit" button when a user cancels or saves their edit. In order to set focus, we need to understand a little bit more about how Vue works internally.

## Virtual DOM and refs

Vue, like some other frameworks, uses a virtual DOM (VDOM) to manage elements. This means that Vue keeps a representation of all of the nodes in our app in memory. Any updates are first performed on the in-memory nodes, and then all the changes that need to be made to the actual nodes on the page are synced in a batch.

Since reading and writing actual DOM nodes is often more expensive than virtual nodes, this can result in better performance. However, it also means you often should not edit your HTML elements directly through native browser APIs (like [`Document.getElementById`](https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementById)) when using frameworks, because it results in the VDOM and real DOM going out of sync.

Instead, if you need to access the underlying DOM nodes (like when setting focus), you can use **[Vue refs](https://vuejs.org/v2/api/#ref)**. For custom Vue components, you can also use refs to directly access the internal structure of a child component. However, this should be done with caution as it can make code harder to reason about and understand.

To use a ref in a component, you add a `ref` attribute to the element that you want to access, with a string identifier for the value of the attribute. It's important to note that a ref needs to be unique within a component. No two elements rendered at the same time should have the same ref.

### Adding a ref to our app

So, let's attach a ref to our "Edit" button in `ToDoItem.vue`. Update it like this:
```
<button type="button" class="btn" ref="editButton" @click="toggleToItemEditForm">
    Edit
    <span class="visually-hidden">{{label}}</span>
</button>
```
To access the value associated with our ref, we use the `$refs` property provided on our component instance. To see the value of the ref when we click our "Edit" button, add a `console.log()` to our `toggleToItemEditForm()` method, like so:
```
toggleToItemEditForm() {
    console.log(this.$refs.editButton);
    this.isEditing = true;
}
```
If you activate the "Edit" button at this point, you should see an HTML `<button>` element referenced in your console.

## Vue's `$nextTick` method

We want to set focus on the "Edit" button when a user saves or cancels their edit. To do that, we need to handle focus in the `ToDoItem` component's `itemEdited()` and `editCancelled()` methods.

For convenience, create a new method which takes no arguments called `focusOnEditButton()`. Inside it, assign your `ref` to a variable, and then call the `focus()` method on the ref.
```
focusOnEditButton() {
    const editButtonRef = this.$refs.editButton;
    editButtonRef.focus();
}
```
Next, add a call to `this.focusOnEditButton()` at the end of the `itemEdited()` and `editCancelled()` methods:
```
itemEdited(newItemName) {
    this.$emit("item-edited", newItemName);
    this.isEditing = false;
    this.focusOnEditButton();
},
editCancelled() {
    this.isEditing = false;
    this.focusOnEditButton();
},
```
Try editing and then saving/cancelling a to-do item via your keyboard. You'll notice that focus isn't being set, so we wrill have a problem to solve. If you open your console, you'll see an error raised along the lines of *"can't access property "focus", editButtonRef is undefined"*. This seens weird. Your button ref was defined when you activated the "Edit" button, but now it's not. What is going on?

Well, remember when we change `isEditing` to `true`, we no longer render the section of the component featuring the "Edit" button. This means there's no element to bind the ref to, so it becomes `undefined`.

You might be thinking, "Hey, don't we set `isEditing="false"` before we try to access the `ref`, so therefore shouldn't the `v-if` now be displaying the button?" This is where the virtual DOM comes into play. Because Vue is trying to optimize and batch changes, it won't immediately update the DOM when we set `isEditing` to `false`. So when we call `focusOnEdit()`, the "Edit" button has not been rendered yet.

Instead, we need to wait until after Vue undergoes the next DOM update cycle. To do that, Vue components have a special method called `$nextTick()`. This method accepts a callback function, which then executes after the DOM updates.

Since the `focusOnEditButton()` method needs to be invoked after the DOM has updated, we can wrap the existing function body inside a `$nextTick()` call.
```
focusOnEditButton() {
    this.$nextTick(() => {
        const editButtonRef = this.$refs.editButton;
        editButtonRef.focus();
    });
}
```
Now when you activate the "Edit" button and then cancel or save your changes via the keyboard, focus should be returned to the "Edit" button. Success!







cd JavaScript/Tools_and_Testing/Client-side_Frameworks/Vue/Focus_Mgmt_Vue_Refs