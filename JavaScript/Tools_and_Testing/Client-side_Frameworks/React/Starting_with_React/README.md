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

## How does React use JavaScript?

React utilizes features of modern JavaScript for many of its patterns. Its biggest departure from JavaScript comes with the use of [JSX](https://reactjs.org/docs/introducing-jsx.html) syntax. JSX extends JavaScript's syntax so that HTML-like code can live alongside it. For example:
```
const heading = <h1>Mozilla Developer Network</h1>
```
This heading constant is known as a **JSX expression**. React can use it to render that [`<h1>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/Heading_Elements) tag in our app.

Suppose we wanted to wrap our heading in a [`<header>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/header) tag, for semantic reasons? The JSX approach allows us to nest our elements within each other, just like we do with HTML:
```
const header = (
    <header>
        <h1>Mozilla Developer Network</h1>
    </header>
);
```

<hr>

**Note**: The parentheses in the previous snippet aren't unique to JSX, and don't have any effect on your application. They're a signal to you (and your computer) that the multiple lines of code inside are part of the same expression. You could just as well write the header expression like this:
```
const header = <header>
    <h1>Mozilla Developer Network</h1>
</header>
```
However, this looks kind of awkward, because the [`<header>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/header) tag that starts the expression is not indented to the same position as its corresponding closing tag.

<hr>

Of course, your browser can't read JSX without help. When compiled (using a tool like [Babel](https://babeljs.io/) or [Parcel](https://parceljs.org/)), our header expression would look like this:
```
const header = React.createElement("header", null,
    React.createElement("h1", null, "Mozilla Developer Network")
);
```
It's *possible* to skip the compilation step and use [`React.createElement()`](https://reactjs.org/docs/react-api.html#createelement) to write your UI yourself. In doing this, however, you lose the declarative benefit of JSX, and your code becomes harder to read. Compilation is an extra step in the development process, but many developers in the React communitythink that the readability of JSX is worthwhile. Plus, popular tooling makes the JSX-to-JavaScript compilation part of its setup process. You don't have to configure compilation yourself unless you want to.

Because JSX is a blend of HTML and JavaScript, some developers find it intuitive. Others say that its blended nature makes it confusing. Once you're comfortable with it, however, it will allow you to build user interfaces more quickly and intuitively, and allow others to better understand your codebase at a glance.

To read more about JSX, check out the React team's [JSX In Depth](https://reactjs.org/docs/jsx-in-depth.html) article.

## Setting up your first React app

There are many ways to use React, but we're going to use the command-line interface (CLI) tool create-react-app, as mentioned earlier, which expedites the process of developing a React application by installing some packages and creating some files for you, handling the tooling described above.

It's possible to [add React to a website without create-react-app](https://reactjs.org/docs/add-react-to-a-website.html) by copying some [`<script>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/script) elements into an HTML file, but the create-react-app CLI is a common starting point for React applications. Using it will allow you to sepnd more time building your app, and less time fussing with setup.

### Requirements

In order to use create-react-app, you need to have [Node.js](https://nodejs.org/en/) installed. It's recommended that you use the long-term support (LTS) version. Node includes npm (the node package manager), and npx (the node package runner).

You may also use the Yarn package manager as an alternative, but we'll assume you are using npm in this set of tutorials. See [Package management basics](https://github.com/AndrewSRea/My_Learning_Port/tree/main/JavaScript/Tools_and_Testing/Client-side_Web_Dev_Tools/Package_Mgmt_Basics#package-management-basics) for more information on npm and yarn.

If you're using Windows, you need to install some software to give you parity with Unix/macOS terminal in order to use the terminal commands mentioned in this tutorial. **Gitbash** (which comes as part of the [git for Windows toolset](https://gitforwindows.org/)) or **[Windows Subsystem for Linux](https://docs.microsoft.com/en-us/windows/wsl/about) (WSL)** are both suitable. See [Command line crash course](https://github.com/AndrewSRea/My_Learning_Port/tree/main/JavaScript/Tools_and_Testing/Client-side_Web_Dev_Tools/Command_Line#command-line-crash-course) for more information on these, and on terminal commands in general.

Also, bear in mind that React and ReactDOM produce apps that only work on a fairly modern set of browsers -- IE9+ by way of some polyfills. It is recommended that you use a modern browser like Firefox, Microsoft Edge, Safari, or Chrome when working through these tutorials.

Also, see the following for more information:

* ["What is npm" on nodejs.org](https://nodejs.org/en/knowledge/getting-started/npm/what-is-npm/)
* ["Introducing npx" on the npm blog](https://blog.npmjs.org/post/162869356040/introducing-npx-an-npm-package-runner)
* [The create-react-app documentation](https://create-react-app.dev/)

### Initializing your app

create-react-app takes one argument: the name you'd like to give your app. create-react-app uses this name to make a new directory, then create the necessary files inside it. Make sure you `cd` to the place you'd like your app to live on your hard drive, then run the following in your terminal:
```
npx create-react-app moz-todo-react
```
This create a `moz-todo-react` directory, and does several things inside it:

* Installs some npm packages essential to the functionality of the app.
* Writes scripts for starting and serving the application.
* Creates a structure of files and directories that define the basic app architecture.
* Initializes the directory as a git repository, if you have git installed on your computer.

<hr>

**Note**: If you have the yarn package manager installed, create-react-app will default to using it instead of npm. If you have both package managers installed and explicitly want to use NPM, you can add the flag `--use-npm` when you run create-react-app:
```
npx create-react-app moz-todo-react --use-npm
```

<hr>

create-react-app will display a number of messages in your terminal while it works; this is normal! This might take a few minutes, so now might be a good time to go make a cup of tea. (Yes, Mozilla, if we were all in jolly ol' England!)

When the process is complete, `cd` into the `moz-todo-react` directory and run the command `npm start`. The scripts installed by create-react-app will start being served at a local server at `localhost:3000`, and open the app in a new browser tab. Your browser will display something like this:

![Image of the React app's initial stage](https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_getting_started/default-create-react-app.png)

### Application structure

create-react-app gives us everything we need to develop a React application. Its initial file structure looks like this:
```
moz-todo-react
├── README.md
├── node_modules
├── package.json
├── package-lock.json
├── .gitignore
├── public
│   ├── favicon.ico
│   ├── index.html
│   └── manifest.json
└── src
    ├── App.css
    ├── App.js
    ├── App.test.js
    ├── index.css
    ├── index.js
    ├── logo.svg
    └── serviceWorker.js
```
The **`src`** directory is where we'll spend most of our time, as it's where the source code for our application lives.

The **`public`** directory contains files that will be read by your browser while you're developing the app; the most important of these is `index.html`. React injects your code into this file so that your browser can run it. There's some other markup that helps create-react-app function, so take care not to edit it unless you know what you're doing. You very much should change the text inside the [`<title>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/title) element in this file to reflect the title of your application. Accurate page titles are important for accessibility!

The `public` directory will also be published when you build and deploy a production version of your app. We won't cover deployment in this tutorial, but you should be able to use a similar solution to that described in our [Deploying our app](https://github.com/AndrewSRea/My_Learning_Port/tree/main/JavaScript/Tools_and_Testing/Client-side_Web_Dev_Tools/Deploying_App#deploying-our-app) tutorial.

The `package.json` file contains information about our project that Node.js/npm uses to keep it organized. This file is not unique to React applications; create-react-app merely populates it. You don't need to understand this file at all to complete this tutorial, however, if you'd like to learn more about it, you can read [What is the file `package.json`? on NodeJS.org](https://nodejs.org/en/knowledge/getting-started/npm/what-is-the-file-package-json/); we also talk about it in our [Package management basics](https://github.com/AndrewSRea/My_Learning_Port/tree/main/JavaScript/Tools_and_Testing/Client-side_Web_Dev_Tools/Package_Mgmt_Basics#package-management-basics) tutorial.

## Exploring our first React component -- `<App/>`

In React, a **component** is a reusable module that renders a part of our app. These parts can be big or small, but they are usually clearly defined: they serve a single, obvious purpose.

Let's open `src/App.js`, since our browser is prompting us to edit it. This file contains our first component, `App`, and a few other lines of code:
```
import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    Edit <code>src/App.js</code> and save to reload.
                </p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
            </header>
        </div>
    );
}
export default App;
```
The `App.js` file consists of three main parts: some [`import`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import) statements at the top, the `App` component in the middle, and an [`export`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/export) statement at the bottom. Most React components follow this pattern.

### Import statements

The `import` statements at the top of the file allow `App.js` to use code that has been defined elsewhere. Let's look at these statements more closely.
```
import React from 'react';
import logo from './logo.svg';
import './App.css';
```
The first statement imports the React library itself. Because React turns the JSX we write into `React.createElement()`, all React components must import the `React` module. If you skip this step, your application will produce an error.

The second statement imports a logo from `'./logo.svg'`. Note the use of `./` at the beginning of the path, and the `.svg` extension at the end -- these tell us that the file is local and that it is not a JavaScript file. Indeed, the `logo.svg` file lives in our source directory.

We don't write a path or extension when importing the `React` module -- this is not a local file; instead, it is listed as a dependency in our `package.json` file. Be careful of this distinction as you work through this lesson!

The third statement imports the CSS related to our App component. Note that there is no variable name and no `from` directive. This particular import syntax is not native to JavaScript files together and serve them to the browser.

### The `App` component

After the imports, we have a function named `App`. Whereas most of the JavaScript community prefers camel-case names like `helloWorld`, React components use pascal-case variable names, like `HelloWorld`, to make it clear that a given JSX element is a React component, and not a regular HTML tag. If you were to rename the `App` function to `app`, your browser would show you an error.

Let's look at `App` more closely.
```
function App() {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    Edit <code>src/App.js</code> and save to reload.
                </p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
            </header>
        </div>
    );
}
```
The `App` function returns a JSX expression. This expression defines what your browser ultimately renders to the DOM.

Some elements in the expression have attributes, which are written just like in HTML, following a pattern of `attribute="value"`. On line 3, the opening [`<div>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/div) tag has a `className` attribute. This is the same as the [`class`](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/class) attribute in HTML, but because JSX is JavaScript, we can't use the word `class` -- it's reserved, meaning JavaScript already uses it for a specific purpose and it would cause problems here in our code. A few other HTML attributes are written differently in JSX than they are in HTML, too, for the same kind of reason. We'll cover them as we encounter them.

Take a moment to change the [`<p>`]() tag on line 6 so that it reads "Hello, world!", then save your file. You'll notice that this change is immediately rendered in the development server running at `http://localhost:3000` in your browser. Now delete the [`<a>`]() and save; the "Learn React" link will be gone.

Your `App` component should now look like this:
```
function App() {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    Hello, world!
                </p>
            </header>
        </div>
    );
}
```