# Routing in Ember

In this article, we learn about **routing**, or URL-based filtering as it is sometimes referred to. We'll use it to provide a unique URL for each of the three todo views -- "All", "Active", and "Completed".

## URL-based filtering

Ember comes with a routing system that has a tight integration with the browser URL. Typically , when writing web applications, you want the page to be represented by the URL so that if (for any reason) the page needs to refresh, the user isn't surprised by the state of the web app -- they can link directly to significant views of the app.

At the moment, we already have the "All" page , as we are currently not doing any filtering in the page that we've been working with, but we will need to recognize it a bit to handle a different view for the "Active" and "Completed" todos.

An Ember application has a default "application" route, which is tied to the `app/templates/application.hbs` template. Because that application template is the entry point to our todo app, we'll need to make some changes to allow for routing.

## Creating the routes

Let's start by creating three new routes: "Index", "Active", and "Completed". To do this, you'll need to enter the following commands into your terminal, inside the root directory of your app:
```
ember generate route index
ember generate route completed
ember generate route active
```
The second and third commands should have not only generated new files, but also updated an existing file, `app/router.js`. It contains the following contents:
```
import EmberRouter from '@ember/routing/router';
import config from './config/environment';

export default class Router extends EmberRouter {
    location = config.locationType;
    rootURL = config.rootURL;
}

Router.map(function() {
    this.route('completed');
    this.route('active');
});
```
The lines of code above were added when the 2nd and 3rd terminal commands above were run.

`router.js` behaves as a "sitemap" for developers to be able to quickly see how the entire app is structured. It also tells Ember how to interact with your route, such as when loading arbitrary data, handling errors while loading that data, or interpreting dynamic segments of the URL. Since our data is static, we won't get to any of those fancy features, but we'll still make sure that the route provides the minimally required data to view a page.

Creating the "Index" route did not add a route definition line to `router.js` because as with URL navigation and JavaScript module loading, "Index" is a special word that indicates the default route to render, load, etc.

To adjust our old way of rendering the TodoList app, we'll first need to replace the TodoList component invocation from the application template with an `{{outlet}}` call, which means "any sub-route will be rendered in place here".

Go to the `todomvc/app/templates/application.hbs` file and replace...
```
<TodoList />
```
...with...
```
{{outlet}}
```
Next, in our `index.hbs`, `completed.hbs`, and `active.hbs` templates (also found in the `templates` directory), we can, for now, just enter the TodoList component invocation.

In each case, replace...
```
{{outlet}}
```
...with...
```
<TodoList />
```
So, at this point, if you try the app again and visit any of the three routes:

`localhost:4200`
`localhost:4200/active`
`localhost:4200/completed`

...you'll see exactly the same thing. At each URL, the template that corresponds to the specific path ("Active", "Completed", or "Index") will render the `<TodoList />` component. The location in the page where `<TodoList />` is rendered is determined by the `{{outlet}}` inside the parent route, which in this case is `application.hbs`. So we have our routes in place. Great!

But now we need a way to differentiate between each of these routes so that they show what they are supposed to show.

First of all, return once more to our `todo-data.js` file. It already contains a getter that returns all todos, and a getter that returns incomplete todos. The getter we are missing is one to return just the completed todos. Add the following below the existing getters:
```
get completed() {
    return this.todos.filter(todo => todo.isCompleted);
}
```

## Models

Now we need to add models to our route JavaScript files to allow us to easily return specific data sets to display in those models. `model` is a data loading lifecycle hook. For TodoMVC, the capabilities of model aren't that important to us; you can find more information in the [Ember model guide](https://guides.emberjs.com/release/routing/specifying-a-routes-model/), if you want to dig deeper. We also provide access to the service, like we did for the components.

### The index route model

First of all, update `todomvc/app/routes/index.js` so it looks as follows:
```
import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class IndexRoute extends Route {
    @service('todo-data') todos;

    model() {
        let todos = this.todos;

        return {
            get allTodos() {
                return todos.all;
            }
        }
    }
}
```
We can now update the `todomvc/app/templates/index.hbs` file so that when it includes the `<TodoList />` component, it does so explicitly with the available model, calling its `allTodos()` getter to make sure all of the todos are shown.

In this file, change...
```
<TodoList />
```
...to...
```
<TodoList @todos={{ @model.allTodos }}/>
```

### The completed route model

Now update `todomvc/app/routes/completed.js` so it looks as follows:
```
import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class CompletedRoute extends Route {
    @service('todo-data') todos;

    model() {
        let todos = this.todos;

        return {
            get completedTodos() {
                return todos.completed;
            }
        }
    }
}
```
We can now update the `todomvc/app/templates/completed.hbs` file so that when it includes the `<TodoList />` component, it does so explicitly with the available model, calling its `completedTodos()` getter to make sure only the completed todos are shown.

In this file, change...
```
<TodoList />
```
...to...
```
<TodoList @todos={{ @model.completedTodos }}/>
```

### The active route model

Finally for the routes, let's sort out our active route. Start by updating `todomvc/app/routes/active.js` so it looks as follows:
```
import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class ActiveRoute extends Route {
    @service('todo-data') todos;

    model() {
        let todos = this.todos;

        return {
            get activeTodos() {
                return todos.incomplete;
            }
        }
    }
}
```
We can now update the `todomvc/app/templates/active.hbs` file so that when it includes the `<TodoList />` component, it does so explicitly with the available model, calling its `activeTodos()` getter to make sure only the active (incomplete) todos are shown.

In this file, change...
```
<TodoList />
```
...to...
```
<TodoList @todos={{ @model.activeTodos }}/>
```
Note that, in each of the route model hooks, we are returning an object with a getter instead of a static object, or more just the static list of todos (for example, `this.todos.completed`). The reason for this is that we want the template to have a dynamic reference to the todo list, and if we returned the list directly, the data would never recompute, which would result in the navigations appearing to fail and/or not actually filter. By having a getter defined in the return object from the model data, the todos are reevaluated so that our changes to the todo list are represented in the rendered list.

## Getting the footer links working