# React interactivity: Editing, filtering, conditional rendering

As we near the end of our React journey (for now, at least), we'll add the finishing touches to the main areas of functionality in our Todo list app. This includes allowing you to edit existing tasks, and filtering the list of tasks between all, completed, and incomplete tasks. We'll look at conditional UI rendering along the way.

## Editing the name of a task

We don't have a user interface for editing the name of a task yet. We'll get to that in a moment. To start with, we can, at least, implement an `editTask()` function in `App.js`. It'll be similar to `deleteTask()` because it'll take an `id` to find its target object, but it'll also take a `newName` property containing the name to update the task to. We'll use [`Array.prototype.map()`]() instead of [`Array.prototype.filter()`]() because we want to return a new array with some changes, instead of deleting something from the array.

Add the `editTask()` function inside your App component, in the same place as the other functions:
```
function editTask(id, newName) {
    const editedTaskList = tasks.map(task => {
        // if this task has the same ID as the edited task
        if (id === task.id) {
            return {...task, name: newName}
        }
        return task;
    });
    setTasks(editedTaskList);
}
```
Pass `editTask` into our `<Todo />` components as a prop in the same way we did with `deleteTask`:
```
const taskList = tasks.map(task => (
    <Todo
        id={task.id}
        name={task.name}
        completed={task.completed}
        key={task.id}
        toggleTaskCompleted={toggleTaskCompleted}
        deleteTask={deleteTask}
        editTask={editTask}
    />
));
```
Now open `Todo.js`. We're going to do some refactoring.

## A UI for editing

In order to allow users to edit a task, we have to provide a user interface for them to do so. First, import `useState` into the `Todo` component like we did before with the `App` component, by updating the first import statement to this:
```
import React, { useState } from "react";
```
We'll now use this to set an `isEditing` state, the default state of which should be `false`. Add the following line just inside the top of your `Todo(props) { ... }` component definition:
```
const [isEditing, setEditing] = useState(false);
```
Next, we're going to rethink the `<Todo />` component -- ;from now on, we want it to display one of two possible "templates", rather than the single template it's used so far:

* The "view" template, when we are just viewing a to-do; this is what we've used in the rest of the tutorial so far.
* The "editing" template, when we are editing a to-do. We're about to create this.

Copy this block of code into the `Todo()` function, beneath your `useState()` hook but above the `return` statement:
```
const editingTemplate = (
    <form className="stack-small">
        <div className="form-group">
            <label className="todo-label" htmlFor={props.id}>
                New name for {props.name}
            </label>
            <input id={props.id} className="todo-next" type="text" />
        </div>
        <div className="btn-group">
            <button type="button" className="btn todo-cancel">
                Cancel
                <span className="visually-hidden">renaming {props.name}</span>
            </button>
            <button type="submit" className="btn btn__primary todo-edit">
                Save
                <span className="visually-hidden">new name for {props.name}</span>
            </button>
        </div>
    </form>
);
const viewTemplate = (
    <div className="stack-small">
        <div className="c-cb">
            <input
                id={props.id}
                type="checkbox"
                defaultChecked={props.completed}
                onChange={() => props.toggleTaskCompleted(props.id)}
            />
            <label className="todo-label" htmlFor={props.id}>
                {props.name}
            </label>
        </div>
        <div className="btn-group">
            <button type="button" className="btn">
                Edit <span className="visually-hidden">{props.name}</span>
            </button>
            <button
                type="button"
                className="btn btn__danger"
                onClick={() => props.deleteTask(props.id)}
            >
                Delete <span className="visually-hidden">{props.name}</span>
            </button>
        </div>
    </div>
);
```
We've got the two different template structures -- "edit" and "view" -- defined inside two separate constants. This means that the `return` statement of `<Todo />` is now repetitious -- it also contains a definition of the "view" template. We can clean this up by using **conditional rendering** to determine which template the component returns, and is therefore rendered in the UI.

## Conditional rendering

In JSX, we can use a condition to change what is rendered by the browser. To write a condition in JSX, we can use a [ternary operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator).

In the case of our `<Todo />` component, our condition is "Is this task being edited?" Change the `return` statement inside `Todo()` so that it reads like so:
```
return <li className="todo">{isEditing ? editingTemplate : viewTemplate}</li>
```
Your browser should render all your tasks just like before. To see the editing template, you will have to change the default `isEditing` state from `false` to `true` in your code for now; we will look at making the edit button toggle this in the next section!








cd JavaScript/Tools_and_Testing/Client-side_Frameworks/React/React_Edit_Filter_Render