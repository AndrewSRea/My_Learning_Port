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