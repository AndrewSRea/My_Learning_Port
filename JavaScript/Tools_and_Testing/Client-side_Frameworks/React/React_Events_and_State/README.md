# React interactivity: Events and state

With our component plan worked out, it's now time to start updating our app from a completely static UI to one that actually allows us to interact and change things. In this article, we'll do this, digging into events and state along the way, and ending up with an app in which we can successfully add and delete tasks, and toggle tasks as completed.

## Handling events 

If you've only written vanilla JavaScript before now, you might be used to having a separate JavaScript file, where you query for some DOM nodes and attach listeners to them. For example:
```
const btn = document.querySelector('button');

btn.addEventListener('click', () => {
    alert("Hi!");
});
```
In React, we write event handlers directly on the elements in our JSX, like this:
```
<button
    type="button"
    onClick={() => alert("Hi!")}
>
    Say hi!
</button>
```

<hr>

**Note**: This may seem counter-intuitive regarding best practice advice that tends to advise against use of inline event handlers on HTML, but remember that JSX is actually part of your JavaScript.

<hr>

In the above example, we're adding an `onClick` attribute to the `<button>` element. The value of that attribute is a function that triggers a simple alert.

The `onClick` attribute has special meaning here: it tells React to run a given function when the user clicks on the button. There are a couple of other things to note:

* The camel-cased nature of `onClick` is important -- JSX will not recognize `onclick` (again, it is already used in JavaScript for a specific purpose, which is related but different -- standard [`onclick`](https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onclick) handler properties).
* All browser events follow this format in JSX -- `on`, followed by the name of the event.

Let's apply this to our app, starting in the `Form.js` component.

### Handling form submission

At the top of the `Form()` component function, create a function named `handleSubmit()`. This function should [prevent the default behavior of the `submit` event](https://github.com/AndrewSRea/My_Learning_Port/tree/main/JavaScript/JS_Building_Blocks/Intro_to_Events#preventing-default-behavior). After that, it should trigger an `alert()`, which can say whatever you'd like. It should end up looking something like this:
```
function handleSubmit(e) {
    e.preventDefault();
    alert('Hello, world!');
}
```
To use this function, add an `onSubmit` attribute to the [`<form>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/form) element, and set its value to the `handleSubmit` function:
```
<form onSubmit={handleSubmit}>
```
Now if you head back to your browser and click on the "Add" button, your browser will show you an alert dialog with the words "Hello, world!" -- or whatever you chose to write there.

## Callback props

In React applications, interactivity is rarely confined to just one component: events that happen in one component will affect other parts of the app. When we start giving ourselves the power to make new tasks, things that happen in the `<Form />` component will affect the list rendered in `<App />`.

We want our `handleSubmit()` function to ultimately help us create a new task, so we need a way to pass information from `<Form />` to `<App />`. We can't pass data from child to parent in the same way as we pass data from parent to child using standard props. Instead, we can write a function in `<App />` that will expect some data from our form as an input, then pass that function to `<Form />` as a prop. This function-as-a-prop is called a callback prop. Once we have our callback prop, we can call it inside `<Form />` to send the right data to `<App />`.

### Handling form submission via callbacks

Inside the top of our `App()` component function, create a function named `addTask()` which has a single parameter of `name`:
```
function addTask(name) {
    alert(name);
}
```
Next, we'll pass `addTask()` into `<Form />` as a prop. The prop can have whatever name you want, but pick a name you'll understand later. Something like `addTask` works, because it matches the name of the function as well as what the function will do. Your `<Form />` component should be updated as follows:
```
<Form addTask={addTask} />
```
Finally, you can use this prop inside the `handleSubmit()` function in your `<Form />` component! Update it as follows:
```
function handleSubmit(e) {
    e.preventDefault();
    props.addTask("Say hello!");
}
```
Clicking on the "Add" button in your browser will prove that the `addTask()` callback function works, but it'd be nice if we could get the alert to show us what we're typing in our input field! This is what we'll do next.

<hr>

**Note**: We decided to name our callback prop `addTask` to make it easy to understand what the prop will do. Another common convention you may well come across in React code is to prefix callback prop names with the word `on`, followed by the name of the event that will cause them to be run. For instance, we could have given our form a prop of `onSubmit` with the value of `addTask`.

<hr>

## State and the `useState` hook

So far, we've used props to pass data through our components and this has served us just fine. Now that we're dealing with user input and data updates, however, we need something more.

For one thing, props come from the parent of a component. Our `<Form />` will not be inheriting a new name for our task; our `<input />` element lives directly inside of `<Form />`, so `<Form />` will be directly responsible for creating that new name. We can't ask `<Form />` to spontaneously create its own props, but we *can* ask it to track some of its own data for us. Data such as this, which a component itself owns, is called **state**. State is another powerful tool for React because components not only *own* state, but can *update* it later. It's not possible to update the props a component receives; only to read them.

React provides a variety of special functions that allow us to provide new capabilities to components, like state. These functions are called **hooks**, and the `useState` hook, as the name implies, is precisely the one we need in order to give our component some state.

To use a React hook, we need to import it from the react module. In `Form.js`, change your very first line so that it reads like this:
```
import React, { useState } from "react";
```
This allows us to import the `useState()` function by itself, and utilize it anywhere in this file.

`useState()` creates a piece of state for a component, and its parameter determines the *initial value* of that state. It returns two things: the state, and a function that can be used to update the state later.

This is a lot to take in at once, so let's try it out. We're going to make ourselves a `name` state, and a function for updating the `name` state.

Write the following above your `handleSubmit()` function, inside `Form()`:
```
const [name, setName] = useState('Use hooks!');
```
What's going on in this line of code?

* We are setting the initial `name` value as "Use hooks!".
* We are defining a function whose job is to modify `name`, called `setName()`.
* `useState()` returns these two things, so we are using [array destructuring](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment) to capture them both in separate variables.

### Reading state

You can see the `name` state in action right away. Add a `value` attribute to the form's input, and set its value to `name`. Your browser will render "Use hooks!" inside the input.
```
<input
    type="text"
    id="new-todo-input"
    className="input input__lg"
    name="text"
    autoComplete="off"
    value={name}
/>
```
Change "Use hooks!" to an empty string once you're done; this is what we want for our initial state.
```
const [name, setName] = useState('');
```

### Reading user input

Before we can change the value of `name`, we need to capture a user's input as they type. For this, we can listen to the `onChange` event. Let's write a `handleChange()` function, and listen for it on the `<input />` tag.
```
// near the top of the `Form` component
function handleChange(e) {
    console.log("Typing!");
}

// Down in the return statement
<input
    type="text"
    id="new-todo-input"
    className="input input__lg"
    name="text"
    autoComplete="off"
    value={name}
    onChange={handleChange}
/>
```
Currently, your input's value will not change as you type, but your browser will log the word "Typing!" to the JavaScript console, so we know our event listener is attached to the input. In order to change the input's value, we have to use our `handleChange()` function to update our `name` state.

To read the contentsof the input field as they change, you can access the input's `value` property. We can do this inside `handleChange()` by reading `e.target.value`. `e.target` represents the element that fired the `change` event -- that's our input. So, `value` is the text inside it.

You can `console.log()` this value to see it in your browser's console.
```
function handleChange(e) {
    console.log(e.target.value);
}
```

### Update state

Logging isn't enough -- we want to actually store the updated state of the name as the input value changes! Change the `console.log()` to `setName()`, as shown below:
```
function handleChange(e) {
    setName(e.target.value);
}
```
Now we need to change our `handleSubmit()` function so that it calls `props.addTask` with `name` as an argument -- remember our callback prop? This will serve to send the task back to the `App` component, so we can add it to our list of tasks at some later date. As a matter of good practice, you should clear the input after your form submits, so we'll call `setName()` again with an empty string to do so:
```
function handleSubmit(e) {
    e.preventDefault();
    props.addTask(name);
    setName("");
}
```
At last, you can type something into the input field in your browser and click *Add* -- whatever you typed will appear in an alert dialog.

Your `Form.js` file should now read like this:
```
import React, { useState } from "react";

function Form(props) {
    const [name, setName] = useState('');

    function handleChange(e) {
        setName(e.target.value);
    }
    
    function handleSubmit(e) {
        e.preventDefault();
        props.addTask(name);
        setName("");
    }
    return (
        <form onSubmit={handleSubmit}>
            <h2 className="label-wrapper">
                <label htmlFor="new-todo-input" className="label__lg">
                    What needs to be done?
                </label>
            </h2>
            <input
                type="text"
                id="new-todo-input"
                className="input input__lg"
                name="text"
                autoComplete="off"
                value={name}
                onChange={handleChange}
            />
            <button type="submit" className="btn btn__primary btn__lg">
                Add
            </button>
        </form>
    );
}

export default Form;
```





cd JavaScript/Tools_and_Testing/Client-side_Frameworks/React/React_Events_and_State