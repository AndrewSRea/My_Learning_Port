# Getting started with React

In this article, we will say hello to React. We'll discover a little bit of detail about its background and use cases, set up a basic React toolchain on our local computer, and create and play with a simple starter app -- learning a bit about how React works in the process.

## Hello React

As its official tagline states, [React](https://reactjs.org/) is a library for building user interfaces. React is not a framework -- it's not even exclusive to the web. It's used with other libraries to render to certain environments. For instance, [React Native](https://reactnative.dev/) can be used to build mobile applications; [React 360](https://opensource.fb.com/) can be used to build virtual reality applications; and there are other possibilities besides.

To build for the web, developers use React in tandem with [ReactDOM](https://reactjs.org/docs/react-dom.html). React and ReactDOM are often discussed in the same spaces as -- and utilized to solve the same problems as -- other true web development frameworks. When we refer to React as a "framework", we're working with that colloquial understanding.

React's primary goal is to minimize the bugs that occur when developers are building UIs. It does this through the use of components -- self-contained, logical pieces of code that describe a portion of the user interface. These components can be composed together to create a full UI, and React abstracts away much of the rendering work, leaving you to concentrate on the UI design.

## Use cases

Unlike the other frameworks covered in this module, React does not enforce strict rules around code conventions or file organization. This allows teams to set conventions that work best for them, and to adopt React in any way they would like to. React can handle a single button, a few pieces of an interface, or an app's entire user interface.

While React *can* be used for [small pieces of an interface](https://reactjs.org/docs/add-react-to-a-website.html), it's not as easy to "drop into" an application as a library like jQuery, or even a framework like Vue -- it is more approachable when you build your entire app with React.

In addition, many of the developer-experience benefits of a React app, such as writing interfaces with JSX, require a compilation process. Adding a compiler like Babel to a website makes the code on it run slowly, so developers often set up such tooling with a build step. React arguably has a heavy tooling requirement, but it can be learned.

This article is going to focus on the use case of using React to render the entire user interface of an application, using tooling provided by Facebook's own [create-react-app](https://create-react-app.dev/) tool.