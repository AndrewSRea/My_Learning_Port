# Componentizing our React app

At this point, our app is a monolith. Before we can make it do things, we need to break it apart into manageable, descriptive components. React doesn't have any hard rules for what is and isn't a component -- that's up to you! In this article, we will show you a sensible way to break our app up into components.

## Defining our first component

Defining a component can seem tricky until you have some practice, but the gist is:

* If it represents an obvious "chunk" of your app, it's probably a component.
* If it gets reused often, it's probably a component.

That second bullet is especially valuable: making a component out of common UI elements allows you to change your code in one place and see those changes everywhere that component is used. You don't have to break everything out into components right away, either. Let's take the second bullet point as inspiration and make a component out of the most reused, most important piece of the UI: a to-do list item.

## Make a `<Todo />`

Before we can make a component, we should create a new file for it. In fact, we shoiuld make a directory just for our components. The following commands make a `components` directory and then, within that, a file called `Todo.js`. Make sure you're in the root of your app before you run these!
```
mkdir src/components
touch src/components/Todo.js
```
Our new `Todo.js` file is currently empty! open it up and give it its first line:
```
import React from 'react';
```
Since we're going to make a component called `Todo`, you can start adding the code for that to `Todo.js`, too, as follows. In this code, we define the function and export it on the same line:
```
export default function Todo() {
    return (

    );
}
```
This is OK so far, but our component has to return something! Go back to `src/App.js`, copy the first [`<li>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/li) from inside the unordered list, and paste it into `Todo.js` so that it reads like this:
```
export default function Todo() {
    return (
        <li className="todo stack-small">
            <div className="c-cb">
                <input id="todo-0" type="checkbox" defaultChecked={true} />
                <label className="todo-label" htmlFor="todo-0">
                    Eat
                </label>
            </div>
            <div className="btn-group">
                <button type="button" className="btn">
                    Edit <span className="visually-hidden">Eat</span>
                </button>
                <button type="button" className="btn btn__danger">
                    Delete <span className="visually-hidden">Eat</span>
                </button>
            </div>
        </li>
    );
}
```

<hr>

**Note**: Components must always return something. If at any point in the future you try to render a component that does not return anything, React will display an error in your browser.

<hr>

Our `Todo` component is complete, at least for now; now we can use it. In `App.js`, add the following line near the top of the file to import `Todo`:
```
import Todo from "./components/Todo";
```
With this component imported, you can replace all of the `<li>` elements in `App.js` with `<Todo />` component calls. Your `<ul>` should read like this:
```
<ul
    rolle="list"
    className="todo-list stack-large stack-exception"
    aria-labelledby="list-heading"
>
    <Todo />
    <Todo />
    <Todo />
</ul>
```
When you look back at your browser, you'll notice something unforunate: your list now repeats the first task, "Eat", three times!

We don't only want to eat; we have other things to -- well -- to do. Next, we'll look at how we can make different component calls render unique content.

## Make a *unique* `<Todo />`

Components are powerful because they let us reuse pieces of our UI, and refer to one place for the source of that UI. The problem is we don't typically want to reuse all of each component; we want to reuse most parts, and change small pieces. This is where props come in.

### What's in a `name`?

In order to track the names of tasks we want to complete, we should ensure that each `<Todo />` component renders a unique name.

In `App.js`, give each `<Todo /> a name prop. Let's use the names of our tasks that we have before:
```
<Todo name="Eat" />
<Todo name="Sleep" />
<Todo name="Repeat" />
```
When your browser refreshes, you will see... the exact same thing as before. We gave our `<Todo />` some props, but we aren't using them yet. Let's go back to `Todo.js` and remedy that.

First, modify your `Todo()` function definition so that it takes `props` as a parameter. You can `console.log()` your `props` as we did before, if you'd like to check that they are being received by the component correctly.

Once you're confident that your component is getting its `props`, you can replace every occurrence of `Eat` with your `name` prop. Remember: when you're in the middle of a JSX expression, you can use curly braces to inject the value of a variable.

Putting all that together, your `Todo()` function should read like this:
```
export default function Todo(props) {
    return (
        <li className="todo stack-small">
            <div className="c-cb">
                <input id="todo-0" type="checkbox" defaultChecked={true} />
                <label className="todo-label" htmlFor="todo-0">
                    {props.name}
                </label>
            </div>
            <div className="btn-group">
                <button type="button" className="btn">
                    Edit <span className="visually-hidden">{props.name}</span>
                </button>
                <button type="button" className="btn btn__danger">
                    Delete <span className="visually-hidden">{props.name}</span>
                </button>
            </div>
        </li>
    );
}
```
*Now* your browser should show three unique tasks. Another problem remains, though: they're all still checked by default.

### Is it `completed`?

In our original static list, only `Eat` was checked. Once again, we want to reuse *most* of the UI that makes up a `<Todo />` component, but change one thing. That's a good job for another prop! Give each `<Todo />` call in `App.js` a new prop of `completed`. The first (`Eat`) should have a value of `true`; the rest should be `false`:
```
<Todo name="Eat" completed={true} />
<Todo name="Sleep" complete={false} />
<Todo name="Repeat" complete={false} />
```
As before, we must go back to `Todo.js` to actually use these props. Change the `defaultChecked` attribute on the `<input />` so that its value is equal to the `completed` prop. Once you're done, the Todo component's `<input />` element will read like this:
```
<input id="todo-0" type="checkbox" defaultChecked={props.completed} />
```
And your browser should update to show only `Eat` being checked.

If you change each `<Todo />` component's `completed` prop, your browser will check or uncheck the equivalent rendered checkboxes accordingly.

### Gimme some `id`, please

Right now, our `<Todo />` component








cd JavaScript/Tools_and_Testing/Client-side_Frameworks/React/Componentizing_React