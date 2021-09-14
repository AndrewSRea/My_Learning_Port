# Ember interactivity: Events, classes and state

At this point, we'll start adding some interactivity to our app, providing the ability to add and display new todo items. Along the way, we'll look at using events in Ember, creating component classes to contain JavaScript code to control interactive features, and setting up a service to keep track of the data state of our app.

## Adding interactivity

Now we've got a refactored componentized version of our todo app, let's walk through how we can add the interactivity we need to make the app functional.

When beginning to think about interactivity, it's good to declare what each component's goals and responsibilities are. In the below sections, we'll do this for each component, and then walk you through how the functionality can be implemented.

## Creating todos

For our `card-header/todo input`, we'll want to be able to submit our typed-in todo task when we press the <kbd>Enter</kbd> key and have it appear in the todos list.

We want to be able to capture the text typed into the input. We do this so that our JavaScript code knows what we typed in, and we can save our todo and pass that text along to the todo list component to display.

We can capture the [`keydown`](https://developer.mozilla.org/en-US/docs/Web/API/Document/keydown_event) event via the [`on` modifier](https://api.emberjs.com/ember/3.16/classes/Ember.Templates.helpers/methods/on?anchor=on), which is just Ember syntactic sugar around [`addEventListener`](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener) and [`removeEventListener`](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/removeEventListener) (see [this explanation](https://github.com/AndrewSRea/My_Learning_Port/tree/main/JavaScript/JS_Building_Blocks/Intro_to_Events#introduction-to-events) if needed).

Add the new line shown below to your `header.hbs` file:
```
<input
    class="new-todo"
    aria-label="What needs to be done?"
    placeholder="What needs to be done?"
    autofocus
    {{on "keydown" this.onKeyDown}}
>
```
This new attribute is inside double curly braces, which tells you it is part of Ember's dynamic templating syntax. The first argument passed to `on` is the type of event to respond to (`keydown`), and the last argument is the event handler -- the code that will run in response to the `keydown` event firing. As you may expect from dealing with [vanilla JavaScript objects](https://github.com/AndrewSRea/My_Learning_Port/tree/main/JavaScript/Intro_JS_Objects/Object-Oriented_JS#object-oriented-javascript-for-beginners), the `this` keyword refers to the "context" or "scope" of the component.; One component's `this` will be different from another component's `this`.

We can define what is available inside `this` by generating a component class to go along with your component. This is a vanilla JavaScript class and has no special meaning to Ember, other than *extending* from the `Component` super-class.

To create a header class to go with your header component, type this in to your terminal:
```
ember generate component-class header
```
This will create the following empty class file -- `todomvc/app/components/header.js`:
```
import Component from '@glimmer/component';

export default class HeaderComponent extends Component {

}
```
Inside this file, we will implement the event handler code. Update the content to the following:
```
import Component from '@glimmer/component';
import { action } from '@ember/object';

export default class HeaderComponent extends Component {

    @action
    onKeyDown({ target, key }) {
        let text = target.value.trim();
        let hasValue = Boolean(text);

        if (key === 'Enter' && hasValue) {
            alert(text);

            target.value = '';
        }
    }
}
```
The `@action` decorator is the only Ember-specific code here (aside from extending from the `Component` superclass, and the Ember-specific items we are importing using [JavaScript module syntax](https://github.com/AndrewSRea/My_Learning_Port/tree/main/JavaScript/Asynchronous_JS/Async_Prog_with_Async_and_Await/JS_Modules#javascript-modules)) -- the rest of the file is vanilla JavaScript, and would work in any application. The `@action` decorator declares that the function is an "action", meaning it's a type of function that will be invoked from an event that occurred in the template. `@action` also binds the `this` of the function to the class instance.

<hr>

**Note**: A decorator is basically a wrapper function, which wraps and calls other functions or properties, providing additional functionality along the way. For example, the `@tracked` decorator (see slightly later on) runs code it is applied to, but additionally tracks it and automatically updates the app when values change. [Read JavaScript Decorators: What They Are and When to Use Them](https://www.sitepoint.com/javascript-decorators-what-they-are/) for more general information on decorators.

<hr>

Coming back to our browser tab with the app running, we can type whatever we want, and when we hit <kbd>Enter</kbd>, we'll be greeted with an alert message telling us exactly what we typed.

With the interactivity of the header input out of the way, we need a place to store todos so that other components can access them.

## Storing Todos with a service

Ember has built-in application-level **state** management that we can use to manage the storage of our todos and allow each of our components to access data from that application-level state. Ember calls these constructs [Services](https://guides.emberjs.com/release/services/), and they live for the entire lifetime of the page (a page refresh will clear them; persisting the data for longer is beyond the scope of this tutorial).

Run this terminal command to generate a service for us to store our todo-list data in:
```
ember generate service todo-data
```
This should give you a terminal output like so:
```
installing service
    create app/services/todo-data.js
installing service-test
    create tests/unit/services/todo-data-test.js
```
This creates a `todo-data.js` file inside the `todomvc/app/services` directory to contain our service, which initially contains an import statement and an empty class:
```
import Service from '@ember/service';

export default class TodoDataService extends Service {

}
```
First of all, we want to define *what a todo is*. We know that we want to track both the text of a todo, and whether or not it is completed.

Add the following `import` statement below the existing one:
```
import { tracked } from '@glimmer/tracking';
```
Now add the following class below the previous line you added:
```
class Todo {
    @tracked text = '';
    @tracked isCompleted = false;

    constructor(text) {
        this.text = text;
    }
}
```
This class represents a todo -- it contains a `@tracked` `text` property containing the text of the todo, and a `@tracked` `isCompleted` property that specifies whether the todo has been completed or not. When instantiated, a `Todo` object will have an initial `text` value equal to the text given to it when created (see below), and an `isCompleted` value of `false`. The only Ember-specific part of this class is the `@tracked` decorator -- this hooks in to the reactivity system and allows Ember to update what you're seeing in your app automatically if the trcked properties change. [More information on `tracked` can be found here](https://api.emberjs.com/ember/3.15/functions/@glimmer%2Ftracking/tracked).

Now it's time to add to the body of the service.

First, add another `import` statement below the previous one, to make actions available inside the service:
```
import { action } from '@ember/object';
```
Update the existing `export default class TodoDataService extends Service { ... }` block as follows:
```
export default class TodoDataService extends Service {
    @tracked todos = [];

    @action
    add(text) {
        let newTodo = new Todo(text);

        this.todos = [...this.todos, newTodo];
    }
}
```
Here, the `todos` property on the service will maintain our list of todos contained inside an array, and we'll mark it with `@tracked` because when the value of `todos` is updated, we want the UI to update as well.

And just like before, the `add()` function that will be called from the template gets annotated with the `@action` decorator to bind it to the class instance. This function's contents are fairly easy to understand -- when the function is invoked, a new `Todo` object instance is created with a text value of `text`, and the `todos` property value is updated to all of the current items inside the array (accessed conveniently using [spread syntax](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax)), *plus* the new todo.

## Using the service from our header component

Now that we've defined a way to add todos, we can interact with this service from the `header.js` input component to actually start adding them.

First of all, the service needs to be injected into the template via the `@inject` decorator, which we'll rename to `@service` for semantic clarity. To do this, add the following `import` line to `header.js`, beneath the two existing `import` lines:
```
import { inject as service } from '@ember/service';
```
With this import in place, we can now make the `todo-data` service available inside the `HeaderComponent` class via the `todos` object, using the `@service` decorator. Add the following line just below the opening `export...` line:
```
@service('todo-data') todos;
```
Now the placeholder `alert(text);` line can be replaced with a call to our new `add()` function. Replace it with the following:
```
this.todos.add(text);
```
If we try this out in the todo app in our browser (`npm start, go to `localhost:4200`), it will look like nothing happens after hitting the <kbd>Enter</kbd> key (although the fact that the app builds without any errors is a good sign). Using the [Ember Inpector](https://guides.emberjs.com/release/ember-inspector/installation/), however, we can see that our todo was added. (See the gif of the "Ember Inspector" being used on this app [here](https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Ember_interactivity_events_state#displaying_our_todos) [just above the "Displaying our todos" header].)








cd JavaScript/Tools_and_Testing/Client-side_Frameworks/Ember/Ember_Events_Classes_and_State