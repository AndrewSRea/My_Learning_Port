# Ember Interactivity: Footer functionality, conditional rendering

Now it's time to start tackling the footer functionality in our app. Here we'll get the todo counter to update to show the correct number of todos still to complete, and correctly apply styling to completed todos (i.e. where the checkbox has been checked). We'll also wire up our "Clear completed" button. Along the way, we'll learn about using conditional rendering in our templates.

## Connecting the behavior in the footer

To get the footer working, we need to implement the following three areas of functionality:

* A pending todo counter.
* Filters for all, active, and completed todos.
* A button to clear the completed tools.

1. Because we need access to our service from the footer component, we need to generate a class for the footer. Enter the following terminal command to do so:
```
ember generate component-class footer
```

2. Next, go and find the newly-created `todomvc/app/components/footer.js` file and update it to the following:
```
import Component from '@glimmer/component';
import { inject as service } from '@ember/service';

export default class FooterComponent extends Component {
    @service('todo-data') todos;
}
```

3. Now we need to go back to our `todo-data.js` file and add some functionality that will allow us to return the number of incomplete todos (useful for showing how many are left), and clear the completed todos out of the list (which is what the "Clear completed" functionality needs).

In `todo-data.js`, add the following getter underneath the existing `all()` getter to define what the incomplete todos actually are:
```
get incomplete() {
    return this.todos.filter(todo => {
        return todo.isCompleted === false;
    });
}
```
Using [`array.filter()`](), we declare that "incomplete" todos are ones that have `isCompleted` equal to `false`.

4. Next, add the following action underneath the existing `add(text)` action:
```
@action
clearCompleted() {
    this.todos = this.incomplete;
}
```
This is rather nice for clearing the todos -- we just need to set the `todos` array to equal the list of incomplete todos.

5. Finally, we need to mmake use of this new functionality in our `footer.hbs` template. Go to this file now.

6. First of all, replace this line:
```
<strong>0</strong> todos left
```
With this, which populates the incomplete number with the length of the `incomplete` array:
```
<strong>{{this.todos.incomplete.length}}</strong> todos left
```

7. Next, replace this:
```
<button type="button" class="clear-completed">
```
With this:
```
<button type="button" class="clear-completed" {{on 'click' this.todos.clearCompleted}}>
```
So now, when the button is clicked, the `clearCompleted()` action we added earlier is run. However, if you try to click the "Clear completed" button now, it won't appear to do anything, because there is currently no way to "complete" a todo. We need to wire up the `todo.hbs` template to the service so that checking the relevant checkbox changes the state of each todo. We'll do that next.