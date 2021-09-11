# React resources

Our final article provides you with a list of React resources that you can use to go further in your learning.

## Component-level styles

Although this tutorial doesn't use this approach, many React applications define their styles on a per-component basis, rather than in a single, monolithic stylesheet.

`create-react-app` makes it possible to import CSS files into JavaScript modules, so that CSS is only sent to your user when the corresponding component is rendered. For this app, we could have, for example, written a dedicated `Form.css` file to house the styles of those respective components, then imported the styles into their respective modules like this:
```
import Form from './Form';
import '.Form.css';
```
This approach makes it easy to identify and manage the CSS that belongs to a specific component. However, it also fragments your stylesheet across your codebase, and this fragmentation might not be worthwhile. For larger applications with hundreds of unique views and lots of moving parts, it makes sense to limit the amount of irrelevant code that's sent to your user. You'll likely have app-wide styles and specific component styles that build on top of those.

You can [read more about component stylesheets in the create-react-app docs](https://create-react-app.dev/docs/adding-a-stylesheet/).

## React DevTools

We used `console.log()` to check on the state and props of our application in this tutorial, and you'll also have seen some of the useful warnings and error messages that React gives you both in the CLI and your browser's JavaScript console. But there's more we can do here.

The React DevTools utility allows you to inspect the internals of your React application directly in the browser. It adds a new panel to your browser's developer tools and with it, you can inspect the state and props of various components, and even edit state and props to make immediate changes to your application.

This screenshot shows our finished application as it appears in React DevTools:

![Image showing React DevTools of a React application](https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_resources/react-devtools.png)

On the left, we see all of the components that make up our application, including some unique keys for the things that are rendered from arrays. On the right, we see the props and hooks that our App component utilizes. Notice, too, that the `Form`, `FilterButton`, and `Todo` components are indented to the right -- this indicates that `App` is their parent. In more complex apps, this view is great for understanding parent/child relationships at a glance.

React DevTools is available in a number of forms:

* A [Chrome browser extension](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?hl=en).
* A [Firefox browser extension](https://addons.mozilla.org/en-US/firefox/addon/react-devtools/).
* A Chromium Edge browser extension (available soon).
* A [stand-alone application you can install with NPM or Yarn](https://www.npmjs.com/package/react-devtools).

Try installing one of these, then using it to inspect the app you've just built!

You can [read more about React DevTools on the React blog](https://reactjs.org/blog/2019/08/15/new-react-devtools.html).

## The Context API

The application that we built in this tutorial utilized component props to pass data from its `App` component to the child components that needed it. Most of the time, props are an appropriate method for sharing data; for complex, deeply nested applications, however, they're not always best.

React provides the [Context API](https://reactjs.org/docs/context.html) as a way to provide data to components that need it *without* passing props down the component tree. There's also a [`useContext` hook](https://reactjs.org/docs/hooks-reference.html#usecontext) that facilitates this.

If you'd like to try this API for yourself, Smashing Magazine has written an [introductory article about React context](https://www.smashingmagazine.com/2020/01/introduction-react-context-api/).

## Class components

Although this tutorial doesn't mention them, it is possible to build React components using ES6 classes -- these are called class components. Until the arrival of hooks, ES6 classes were the only way to bring state into components or manage rendering side effects. They're still the only way to handle certain other, more edge-case features, and they're very common in legacy React projects. The official React docs are a great place to start learning about them.

* [State and Lifecycle in the React Docs](https://reactjs.org/docs/state-and-lifecycle.html)
* [Intro to React in the React Docs](https://reactjs.org/tutorial/tutorial.html)
* [Read about JavaScript classes at MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes)

## Testing