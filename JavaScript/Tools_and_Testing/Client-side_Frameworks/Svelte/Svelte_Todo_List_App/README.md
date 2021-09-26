# Starting our Svelte Todo List app

Now that we have a basic understanding of how things work in Svelte, we can start building our example app: a todo list. In this article, we will first have a look at the desired functionality or our app, then we'll create a `Todos.svelte` component and put static markup and styles in place, leaving everything ready to start developing our To-Do list app features, which we'll go on to in subsequent articles.

We want our users to be able to browse, add, and delete tasks, and also to mark them as complete. This will be the basic functionality that we'll be developing in this tutorial series, plus we'll look at some more advanced concepts along the way, too.

## Code along with us

### Git

Clone the github repo (if you haven't already done it) with:
```
git clone https://github.com/opensas/mdn-svelte-tutorial.git
```
Then, to get to the current app state, run:
```
cd mdn-svelte-tutorial/02-starting-our-todo-app
```
Or directly download the folder's content:
```
npx degit opensas/mdn-svelte-tutorial/02-starting-our-todo-app
```
Remember to run `npm install && npm run dev` to start your app in development mode.

### REPL

To code along with us using the REPL, start at:

[https://svelte.dev/repl/b7b831ea3a354d3789cefbc31e2ca495?version=3.23.2](https://svelte.dev/repl/b7b831ea3a354d3789cefbc31e2ca495?version=3.23.2)

## Todo list app features

This is how our Todo list app will look once it's ready:

![Image of the Svelte todo app in its beginning stage](https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Svelte_Todo_list_beginning/01-todo-list-app.png)

Using this UI, our user will be able to:

* Browse their tasks.
* Mark tasks as completed/pending without deleting them.
* Remove tasks.
* Add new tasks.
* Filter tasks by status: all tasks, active tasks, or completed tasks.
* Edit tasks.
* Mark all tasks as active/completed.
* Remove all completed tasks.

## Building our first component

Let's create a `Todos.svelte` component -- this will contain our list of todos.

1. Create a new folder -- `src/components`.

<hr>

**Note**: You can put your components anywhere inside the `src` folder, but the `components` folder is a recognized convention to follow, allowing you to find your components easily.

<hr>

2. Create a file named `src/components/Todos.svelte` with the following content:
```
<h1>Svelte To-Do List</h1>
```

3. Change the `title` element in `public/index.html` to contain the text *Svelte To-Do List*:
```
<title>Svelte To-Do List</title>
```

4. Open `src/App.svelte` and replace its contents with the following:
```
<script>
    import Todos from '.components/Todos.svelte';
</script>

<Todos />
```

5. In development mode, Svelte will issue a warning in the browser console when specifying a prop that doesn't exist in the component; in this case, we have a `name` prop being specified when we instantiate the `App` component inside `src/main.js`, which isn't used inside `App`. The console should currently give you a message along the lines of "&lt;App&gt; was created with unknown prop 'name'". To get rid of this, remove the `name` prop from `src/main.js`; it should now look like so:
```
import App from './App.svelte';

const app = new App({
    target: document.body;
})

export default app;
```
Now if you check yur testing server URL, you'll see our `Todos.svelte` component being rendered.

## Adding static markup

For the moment, we will start with a static markup representation of our app, so you can see what it will look like. Copy and paste the following into our `Todos.svelte` component file, replacing the existing content:
```
<!-- Todos.svelte -->
<div class="todoapp stack-large">

    <!-- New Todo -->
    <form>
        <h2 class="label-wrapper">
            <label for="todo-0" class="label__lg">
                What needs to be done?
            </label>
        </h2>
        <input type="text" id="todo-0" autocomplete="off"
            class="input input__lg" />
        <button type="submit" disabled="" class="btn btn__primary btn__lg">
            Add
        </button>
    </form>

    <!-- Filter -->
    <div class="filters btn-group stack-exception">
        <button class="btn toggle-btn" aria-pressed="true">
            <span class="visually-hidden">Show</span>
            <span>All</span>
            <span class="visually-hidden">tasks</span>
        </button>
        <button class="btn toggle-btn" aria-pressed="false">
            <span class="visually-hidden">Show</span>
            <span>Active</span>
            <span class="visually-hidden">tasks</span>
        </button>
        <button class="btn toggle-btn" aria-pressed="false">
            <span class="visually-hidden">Show</span>
            <span>Completed</span>
            <span class="visually-hidden">tasks</span>
        </button>
    </div>

    <!-- TodosStatus -->
    <h2 id="list-heading">2 out of 3 items completed</h2>

    <!-- Todos -->
    <ul role="list" class="todo-list stack-large" aria-labelledby="list-heading">

        <!-- todo-1 (editing mode) -->
        <li class="todo">
            <div class="stack-small">
                <form class="stack-small">
                    <div class="form-group">
                        <label for="todo-1" class="todo-label">
                            New name for "Create a Svelte starter app"
                        </label>
                        <input type="text" id="todo-1" autocomplete="off" class="todo-text" />
                    </div>
                    <div class="btn-group">
                        <button class="btn todo-cancel" type="button">
                            Cancel 
                            <span class="visually-hidden"> renaming Create a Svelte starter app</span>
                        </button>
                        <button class="btn btn__primary todo-edit" type="submit">
                            Save 
                            <span class="visually-hidden"> new name for Create a Svelte starter app</span>
                        </button>
                    </div>
                </form>
            </div>
        </li>

        <!-- todo-2 -->
        <li class="todo">
            <div class="stack-small">
                <div class="c-cb">
                    <input type="checkbox" id="todo-2" checked/>
                    <label for="todo-2" class="todo-label">
                        Create your first component
                    </label>
                </div>
                <div class="btn-group">
                    <button type="button" class="btn">
                        Edit 
                        <span class="visually-hidden">Create your first component</span>
                    </button>
                    <button type="button" class="btn btn__danger">
                        Delete
                        <span class="visually-hidden">Create your first component</span>
                    </button>
                </div>
            </div>
        </li>

        <!-- todo-3 -->
        <li class="todo">
            <div class="stack-small">
                <div class="c-cb">
                    <input type="checkbox" id="todo-3" />
                    <label for="todo-3" class="todo-label">
                        Complete the rest of the tutorial
                    </label>
                </div>
                <div class="btn-group">
                    <button type="button" class="btn">
                        Edit 
                        <span class="visually-hidden">Complete the rest of the tutorial</span>
                    </button>
                    <button type="button" class="btn btn__danger">
                        Delete
                        <span class="visually-hidden">Complete the rest of the tutorial</span>
                    </button>
                </div>
            </div>
        </li>
    </ul>

    <hr />

    <!-- MoreActions -->
    <div class="btn-group">
        <button type="button" class="btn btn__primary">Check all</button>
        <button type="button" class="btn btn__primary">Remove completed</button>
    </div>

</div>
```
Check the rendered app out again in your browser, and you'll see something like this:

![Image of the moz-todo-svelte app rendered with the code above applied](https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Svelte_Todo_list_beginning/03-unstyled-todo-app.png)

The HTML markup above is not very nicely styled and it's also functionally useless. Nevertheless, let's have a look at the markup and see how it relates to our desired features:

* A label and a text box for entering new tasks.
* Three buttons to filter by task status.
* A label showing the total number of tasks and the completed tasks.
* An unordered list, which holds a list item for each task.
* When the task is being edited, the list item has an input and two buttons to cancel or save modifications.
* If the task is not being edited, there's a checkbox to set the completed status, and two buttons to edit or delete the task.
* Finally, there are two buttons to check/uncheck all tasks and to remove completed tasks.

In subsequent articles, we'll get all these features working, and more besides.

### Accessibility features of the todo list

You may notice some unusual attributes here, For example:
```
<button class="btn toggle-btn" aria-pressed="true">
    <span class="visually-hidden">Show</span>
    <span>All</span>
    <span class="visually-hidden">tasks</span>
</button>
```
Here, `aria-pressed` tells assistive technology (like screen readers) that the button can be in one of two states: `pressed` or `unpressed`. Think of these as analogs for on and off. Setting a value of `true` means that the button is pressed by default.

The class `visually-hidden` has no effect yet because we have not included any CSS. Once we have put our styles in place, though, any element with this class will be hidden from sighted users; they are there to provide more information about what the button does for screenreader users that do not have the extra visual context to help them.

Further down, you can find the following `<ul>` element:
```
<ul role="list" className="todo-list stack-large" aria-labelledby="list-heading">
```
The `role` attribute helps assistive technology explain what kind of semantic value an element has -- or what its purpose is. A `<ul>` is treated like a list by default, but the styles we're about to add will break that functionality. This role will restore the "list" meaning to the `<ul>` element. If you want to learn more about why this is necessary, you can [check out Scott O'Hara's article, "Fixing Lists"](https://www.scottohara.me/blog/2019/01/12/lists-and-safari.html).

The `aria-labelledby` attribute tells assistive technologies that we're treating our `<h2>` with an `id` of `list-heading` as the label that describes the purpose of the list beneath it. Making this association gives the list a more informative context, which could help screenreader users better understand the purpose of it.

This seems like a good time to talk about how Svelte deals with accessibility; let's do that now.

## Svelte accessibility support

Svelte has a special emphasis on accessibility. The intention is to encourage developers to write more acessible code "by default". Being a compiler, Svelte can statically analyze our HTML templates to provide accessibility warnings when components are being compiled.

Accessibility (shortened to a11y) isn't always easy to get right, but Svelte will help by warning you if you write inaccessible markup.

For example, if we add an `<img>` element to our `todos.svelte` component without its corresponding `alt` prop:
```
<h1>Svelte To-Do List</h1>

<img height="32" width="88" src="https://www.w3.org/WAI/wcag2A">
```
The compiler will issue the following warning:
```
(!) Plugin svelte: A11y: <img> element should have an alt attribute
src/components/Todos.svelte
1: <h1>Svelte To-Do List</h1>
2:
3: <img height="32" width="88" src="https://www.w3.org/WAI/wcag2A">
   ^

created public/build/bundle.js in 220ms

[2020-07-15 04:07:43] waiting for changes...
```
Moreover, our editor can display this warning even before calling the compiler:

![Image of an accessibility warning in a code editor](https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Svelte_Todo_list_beginning/04-svelte-accessibility-support.png)

You can tell Svelte to ignore this warning for the next block of markup with a [comment](https://svelte.dev/docs#Comments) beginning with `svelte-ignore`, like this:
```
<!-- svelte-ignore a11y-missing-attribute -->
<img height="32" width="88" src="https://www.w3.org/WAI/wcag2A">
```

<hr>

**Note**: With VSCode, you can automatically add this ignore comment by clicking on the *Quick fix...* link or presing <kbd>Ctrl</kbd> + <kbd>.</kbd>.

<hr>







cd JavaScript/Tools_and_Testing/Client-side_Frameworks/Svelte/Svelte_Todo_List_App