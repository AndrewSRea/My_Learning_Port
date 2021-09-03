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
                    id+'new-todo-input"
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
Now open `public/index.html` and change the [`<title>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/title) element's text to `TodoMatic`. This way, it will match the [`<h1>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/Heading_Elements) at the top of our app.
```
<title>TodoMatic</title>
```
When your browser refreshes, you should see something like this:

![Image of the To-Do React app in a browser](https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_todo_list_beginning/unstyled-app.png)









cd JavaScript/Tools_and_Testing/Client-side_Frameworks/React/Begin_React_To-Do_List