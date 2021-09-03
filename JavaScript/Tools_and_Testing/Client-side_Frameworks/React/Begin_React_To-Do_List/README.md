# Beginning our React to-do list

Let's say that we've been tasked with creating a proof-of-concept in React -- an app that allows users to add, edit, and delete tasks they want to work on, and also mark tasks as complete without deleting them. This article will walk you through putting the basic `App` component structure and styling in place, ready for individual component definition and interactivity, which we'll add later.

## Our app's user stories

In software development, a user story is an actionable goal from the persepctive of the user. Defining user stories before we begin our work will help us focus our work. Our app should fulfill the following stories:

As a user, I can:

* Read a list of tasks.
* Add a task using the mouse or keyboard.
* Mark any task as completed, using the mouse or keyboard.
* Delete any task, using the mouse or keyboard.
* Edit any task, using the mouse or keyboard.
* View a specific subset of tasks: All tasks, only the active task, or only the completed tasks.

We'll tackle these stories one-by-one.

## Pre-project housekeeping

create-react-app has made a few files we won't be using at all for our project.

* We're not going to write per-component stylesheets, so first delete the `App.css` import from the top of `App.js`.
* We are also not going to be using the `logo.svg` file, so remove that import, too.

Then copy and paste the following commands into your terminal to delete some unneeded files. Make sure you're starting in the app's root directory!
```
# Move into the src directory of your project
cd src
# Delete a few files
rm -- App.test.js App.css logo.svg serviceWorker.js setupTests.js
# Move back up to the root of the project
cd ..
```
Notes: 

* Two of the files we're deleting are for testing the application. We will not cover testing here.
* If you stopped your server to do the terminal taqsks mentioned above, you'll have to start it again using `npm start`.

## Project starter code

As a starting point for this project, we're going to provide two things: An `App()` function to replace the one you have now, and some CSS to style your app.

### The JSX

Copy the following snippet to your clipboard, then paste it into `App.js` so that it replaces the existing `App()` function:
```
function App(props) {
    return (
        <div className="todoapp stack-large">
            <h1>TodoMatic</h1>
            <form>
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
                />
                <button type="submit" className="btn btn__primary btn__lg">
                    Add
                </button>
            </form>
            <div className="filters btn-group stack-exception">
                <button type="button" className="btn toggle-btn" aria-pressed="true">
                    <span className="visually-hidden">Show </span>
                    <span>all</span>
                    <span className="visually-hidden"> tasks</span>
                </button>
                <button type="button" className="btn toggle-btn" aria-pressed="false">
                    <span className="visually-hidden">Show </span>
                    <span>Active</span>
                    <span className="visually-hidden"> tasks</span>
                </button>
                <button type="button" className="btn toggle-btn" aria-pressed="false">
                    <span className="visually-hidden">Show </span>
                    <span>Completed</span>
                    <span className="visually-hidden"> tasks</span>
                </button>
            </div>
            <h2 id="list-heading">
                3 tasks remaining
            </h2>
            <ul
                role="list"
                className="todo-list stack-large stack-exception"
                aria-labelledby="list-heading"
            >
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
                <li className="todo stack-small">
                    <div className="c-cb">
                        <input id="todo-1" type="checkbox" />
                        <label className="todo-label" htmlFor="todo-1">
                            Sleep
                        </label>
                    </div>
                    <div className="btn-group">
                        <button type="button" className="btn">
                            Edit <span className="visually-hidden">Sleep</span>
                        </button>
                        <button type="button" className="btn btn__danger">
                            Delete <span className="visually-hidden">Sleep</span>
                        </button>
                    </div>
                </li>
                <li className="todo stack-small">
                    <div className="c-cb">
                        <input id="todo-2" type="checkbox" />
                        <label className="todo-label" htmlFor="todo-2">
                            Repeat
                        </label>
                    </div>
                    <div className="btn-group">
                        <button type="button" className="btn">
                            Edit <span className="visually-hidden">Repeat</span>
                        </button>
                        <button type="button" className="btn btn__danger">
                            Delete <span className="visually-hidden">Repeat</span>
                        </button>
                    </div>
                </li>
            </ul>
        </div>
    );
}
```

<hr>

**Personal note**: It's interesting to see what look like Bootstrap attributes within some of the elements of this code. For example, `className="btn btn__danger"`. I didn't realize Bootstrap was compatible with the React framework.

<hr>

Now open `public/index.html` and change the [`<title>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/title) element's text to `TodoMatic`. This way, it will match the [`<h1>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/Heading_Elements) at the top of our app.
```
<title>TodoMatic</title>
```
When your browser refreshes, you should see something like this:

![Image of the To-Do React app in a browser](https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_todo_list_beginning/unstyled-app.png)

It's ugly, and doesn't function yet, but that's okay -- we'll style it in a moment. First, consider the JSX we have, and how it corresponds to our user stories:

* We have a [`<form>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/form) element, with an [`<input type="text">`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/text) for writing out a new task, and a button to submit the form.
* We have an array of buttons that will be used to filter our tasks.
* We have a heading that tells us how many tasks remain.
* We have our 3 tasks, arranged in an unordered list. Each task is a list item ([`<li>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/li)), and has buttons to edit and delete it and a checkbox to check it off as done.

The form will allow us to *make* tasks; the buttons will let us *filter* them; the heading and list are our way to *read* them. The UI for *editing* a task is conspicuously absent for now. That's okay -- we'll write that later.

### Accessibility features

You may notice some unusual attributes here. For example:
```
<button type="button" className="btn toggle-btn" aria-pressed="true">
    <span className="visually-hidden">Show </span>
    <span>all</span>
    <span className="visually-hidden"> tasks</span>
</button>
```
Here, `aria-pressed` tells assistive technology (like screen readers) that the button can be in one of two states: `pressed` or `unpressed`. Think of these as analogs for `on` and `off`. Setting a value of `true` means that the button is pressed by default.

The class `visually-hidden` has no effect yet, because we have not included any CSS. Once we have put our styles in place, though, any element with this class will be hidden from sighted users and still available to screen reader users -- this is because these words are not needed by sighted users; they are there to provide more information about what the button does for screenreader users that do not have the extra visual context to help them.

Further down, you can find our [`<ul>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/ul) element:
```
<ul
    role="list"
    className="todo-list stack-large stack-exception"
    aria-labelledby="list-heading"
>
```
The `role` attribute helps assistive technology explain what kind of element a tag represents. A `<ul>` is treated like a list by default, but the styles we're about to add will break that functionality. This role will restore the "list" meaning to the `<ul>` element. If you want to learn more about why this is necessary, you can check out [Scott O'Hara's article, "Fixing Lists"](https://www.scottohara.me/blog/2019/01/12/lists-and-safari.html).

The `aria-labelledby` attribute tells assistive technologies that we're treating our list heading as the label that describes the purpose of the list beneath it. Making this association gives the list a more informative context, which could help screen reader users better understand the purposde of it.

Finally, the labels and inputs in our list items have some attributes unique to JSX:
```
<input id="todo-0" type="checkbox" defaultChecked={true} />
<label className="todo-label" htmlFor="todo-0">
    Eat
</label>
```
The `defaultChecked` attribute in the `<input>` tag tells React to check this checkbox initially. If we were to use `checked`, as we would in regular HTML, React would log some warnings into our browser console relating to handling events on the checkbox, which we want to avoid. Don't worry too much anout this for now -- we will cover this later on when we get to using events.

The `htmlFor` attribute corresponds to the [`for`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/label#attr-for) attribute used in HTML. We cannot use `for` as an attribute in JSX because `for` is a reserved word, so React uses `htmlFor` instead.

Notes:

* To use Boolean values (`true` and `false`) in JSX attributes, you must enclose them in curly braces. If you write `defaultChecked="true"`, the value of `defaultChecked` will be `"true"` -- a string literal. Remember -- this is actually JavaScript, not HTML!
* The `aria-pressed` attribute used in our earlier code snippet has a value of `"true"` because `aria-pressed` is not a true Boolean attribute in the way `checked` is.













cd JavaScript/Tools_and_Testing/Client-side_Frameworks/React/Begin_React_To-Do_List