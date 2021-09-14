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









cd JavaScript/Tools_and_Testing/Client-side_Frameworks/Ember/Ember_Events_Classes_and_State