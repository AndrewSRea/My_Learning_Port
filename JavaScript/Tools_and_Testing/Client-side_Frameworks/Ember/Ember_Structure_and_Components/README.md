# Ember app structure and componentization

In this article, we'll get right on with planning out the structure of our TodoMVC Ember app, adding in the HTML for it, and then breaking that HTML structure into components.

## Planning out the layout of the TodoMVC app

In the last article, we set up a new Ember project, then added and configured our CSS styles. At this point, we add some HTML, planning out the structure and semantics of our TodoMVC app.

The landing page HTML of our application is defined in `app/templates/application.hbs`. This already exists, and its contents currently look like so:
```
{{!-- The following component displays Ember's default welcome message. --}}
<WelcomePage />
{{!-- Feel free to remove this! --}}

{{outlet}}
```
`<WelcomePage />` is a component provided by an Ember addon that renders the default welcome page we saw in the previous article, when we first navigated to our server at `localhost:4200`.

However, we don't want this. Instead, we want it to contain the TodoMVC app structure. To start with, delete the contents of `application.hbs` and replace them with the following:
```
<section class="todoapp">
    <h1>todos</h1>
    <input 
        class="new-todo"
        aria-label="What needs to be done?"
        placeholder="What needs to be done?"
        autofocus
    >
</section>
```

<hr>

**Note**: [`aria-label`](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/ARIA_Techniques/Using_the_aria-label_attribute) provides a label for assistive technology to make use of -- for example, for a screenreader to read out. This is useful in such cases where we have an [`<input>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input) being used with no corresponding HTML text that could be turned into a label.

<hr>

When you save `application.hbs`, the development server you started earlier will automatically rebuild the app and refresh the browser. The rendered output should now look like this:

![Image of browser hosting Ember app with additions to code](https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Ember_structure_componentization/todos-initial-render.png)

It doesn't take too much effort to get our HTML looking like a fully-featured to-do list app. Update the `application.hbs` file again so its content looks like this:
```
<section class="todoapp">
    <h1>todos</h1>
    <input
        class="new-todo"
        aria-label="What needs to be done?"
        placeholder="What needs to be done?"
        autofocus
    >

    <section class="main">
        <input id="mark-all-complete" class="toggle-all" type="checkbox">
        <label for="mark-all-complete">Mark all as complete</label>

        <ul class="todo-list">
            <li>
                <div class="view">
                    <input
                        aria-label="Toggle the completion of this todo"
                        class="toggle"
                        type="checkbox"
                    >
                    <label>Buy Movie Tickets</label>
                    <button
                        type="button"
                        class="destroy"
                        title="Remove this todo"
                    ></button>
                </div>

                <input autofocus class="edit" value="Todo Text">
            </li>

            <li>
                <div class="view">
                    <input
                        aria-label="Toggle the completion of this todo"
                        class="toggle"
                        type="checkbox"
                    >
                    <label>Go to Movie</label>
                    <button
                        type="button"
                        class="destroy"
                        title="Remove this todo"
                    ></button>
                </div>

                <input autofocus class="edit" value="Todo Text">
            </li>
        </ul>
    </section>

    <footer class="footer">
        <span class="todo-count">
            <strong>0</strong> todos left
        </span>

        <ul class="filters">
            <li>
                <a href="#">All</a>
                <a href="#">Active</a>
                <a href="#">Completed</a>
            </li>
        </ul>

        <button type="button" class="clear-completed">
            Clear Completed
        </button>
    </footer>
</section>
```