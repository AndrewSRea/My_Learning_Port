# Accessibility in React

In our final tutorial article, we'll focus on (pun intended) accessibility, including focus management in React, which can improve usability and reduce confusion for both keyboard-only and screenreader users.

## Including keyboard users

At this point, we've accomplished all of the features we set out to implement. A user can add a new task, check and uncheck tasks, delete tasks, or edit task names. And they can filter their task list by all, active, or completed tasks.

Or, at least, they can do all of these things with a mouse. Unfortunately, these features are not very accessible to keyboard-only users. Let's explore this now.

## Exploring the keyboard usability problem

Start by clicking on the input at the top of our app, as if you're going to add a new task. You'll see a thick, dashed outline around that input. This outline is your visual indicator that the browser is currently focused on this element. Press the <kbd>Tab</kbd> key, and you will see the outline appear around the "Add" button beneath the input. This shows you that the browser's focus has moved.

Press <kbd>Tab</kbd> a few more times, and you will see this dashed focus indicator move between each of the filter buttons. Keep going until the focus indicator is around the first "Edit" button. Press <kbd>Enter</kbd>.

The `<Todo />` component will switch templates, as we designed, and you'll see a form that lets us edit the name of the task.

But where did our focus indicator go?

When we switch between templates in our `<Todo />` component, we completely remove the elements that were there before to replace them with something else. That means the element that we were focused on vanishes, and nothing is in focus at all. This could confuse a wide variety of users -- particularly users who rely on the keyboard, or users who use a screen reader.

To improve the experience for keyboard and screen-reader users, we should manage the browser's focus ourselves.

## Focusing between templates

When a user toggles a `<Todo />` template from viewing to editing, we should focus on the `<input>` used to rename it; when they toggle back from editing to viewing, we should move focus back to the "Edit" button.

### Targeting our elements

In order to focus on an element in our DOM, we need to tell React which element we want to focus on and how to find it. React's [`useRef`](https://reactjs.org/docs/hooks-reference.html#useref) hook creates an object with a single property: `current`. This property can be a reference to anything we want and look that reference up later. It's particularly useful for referring to DOM elements.

Change the `import` statement at the top of `Todo.js` so that it includes `useRef`:
```
import React, { useRef, useState } from "react";
```
Then, create two new constants beneath the hooks in your `Todo()` function. Each should be a ref -- one for the "Edit" button in the view template, and one for the edit field in the editing template.
```
const editFieldRef = useRef(null);
const editButtonRef = useRef(null);
```
These refs have a default value of `null` because they will not have value until we attach them to their respective elements. To do that, we'll add an attribute of `ref` to each element, and set their values to the appropriately named `ref` objects.

The textbox `<input>` in your editing template should be updated like this:
```
<input
    id={props.id}
    className="todo-text"
    type="text"
    value={newName}
    onChange={handleChange}
    ref={editFieldRef}
/>
```
The "Edit" button in your view template should read like this:
```
<button
    type="button"
    className="btn"
    onClick={() => setEditing(true)}
    ref={editButtonRef}
>
    Edit <span className="visually-hidden">{props.name}</span>
</button>
```

### Focusing on our refs with useEffect

To use our refs for their intended purpose, we need to import another React hook: [`useEffect()`](https://reactjs.org/docs/hooks-reference.html#useeffect). `useEffect()` is so named because it runs after React renders a given component, and will run any side-effects that we'd like to add to the render process, which we can't run inside the main function body. `useEffect()` is useful in the current situation because we cannot focus on an element until after the `<Todo />` component renders and React knows where our refs are.

Change the import statement of `Todo.js` again to add `useEffect`:
```
import React, { useEffect, useRef, useState } from "react";
```
`useEffect()` takes a function as an argument; this function is executed after the component renders. Let's see this in action; put the following `useEffect()` call just above the `return` statement in the body of `Todo()`, and pass into it a function that logs the words "side effect" to your console:
```
useEffect(() => {
    console.log("side effect");
});
```
To illustrate the difference between the main render process and code run inside `useEffect()`, add another log -- put this one below the previous addition:
```
console.log("main render");
```
Now, open the app in your browser. You should see both messages in your console, with each one repeating three times. Note how "main render" logged first, and "side effect" logged second, even though the "side effect" log appears first in the code.
```
main render (3)                     Todo.js:100
side effect (3)                     Todo.js:98
```
That's it for our experimentation for now. Delete `console.log("main render")` now, and let's move on to implementing our focus management.

### Focusing on our editing field

Now that we know our `useEffect()` hook works, we can manage focus with it. As a reminder, we want to focus on the editing field when we switch to the editing template.

Update your existing `useEffect()` hook so that it reads like this:
```
useEffect(() => {
    if (isEditing) {
        editFieldRef.current.focus();
    }
}, [isEditing]);
```
These changes make it so that, if `isEditing` is true, React reads the current value of the `editFieldRef` and moves browser focus to it. We also pass an array into `useEffect()` as a second argument. This array is a list of values `useEffect()` should depend on. With these values included, `useEffect()` will only run when one of those values changes. We only want to change focus when the value of `isEditing` changes.

Try it now, and you'll see that when you click an "Edit" button, focus moves to the corresponding edit `<input>`!

### Moving focus back to the edit button

At first glance, getting React to move focus back to our "Edit" button when the edit is saved or cancelled appears deceptively easy. Surely we could add a condition to our `useEffect` to focus on the edit button if `isEditing` is `false`? Let's try it now -- update your `useEffect()` call like so:
```
useEffect(() => {
    if (isEditing) {
        editFieldRef.current.focus();
    } else {
        editButtonRef.current.focus();
    }
}, [isEditing]);
```
This kind of mostly works. Head back to your browser and you'll see that your focus moves between Edit `<input>` and "Edit" button as you start and end an edit. However, you may have noticed a new problem -- the "Edit" button in the final `<Todo />` component is focused immediately on page load, before we even interact with the app!

Our `useEffect()` hook is behaving exactly as we designed it: it runs as soon as the component renders, sees that `isEditing` is `false`, and focuses the "Edit" button. Because there are three instances of `<Todo />`, we see focus on the last "Edit" button.

We need to refactor our approach so that focus changes only when `isEditing` changes from one value to another.




cd JavaScript/Tools_and_Testing/Client-side_Frameworks/React/React_Accessibility