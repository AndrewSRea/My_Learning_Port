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





cd JavaScript/Tools_and_Testing/Client-side_Frameworks/React/React_Events_and_State