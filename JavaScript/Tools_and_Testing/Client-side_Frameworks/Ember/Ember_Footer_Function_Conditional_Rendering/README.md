# Ember Interactivity: Footer functionality, conditional rendering

Now it's time to start tackling the footer functionality in our app. Here we'll get the todo counter to update to show the correct number of todos still to complete, and correctly apply styling to completed todos (i.e. where the checkbox has been checked). We'll also wire up our "Clear completed" button. Along the way, we'll learn about using conditional rendering in our templates.

## Connecting the behavior in the footer

To get the footer working, we need to implement the following three areas of functionality:

* A pending todo counter.
* Filters for all, active, and completed todos.
* A button to clear the completed tools.

1. Because we need access to our service from the footer component, we need to generate a class for 