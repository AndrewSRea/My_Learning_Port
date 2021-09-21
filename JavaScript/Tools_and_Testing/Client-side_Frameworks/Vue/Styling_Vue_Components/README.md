# Styling Vue components with CSS

The time has finally come to make our app look a bit nicer. In this article, we'll explore the different ways of styling Vue components with CSS.

## Styling Vue components with CSS

Before we move one to add more advanced features to our app, we should add some basic CSS to make it look better. Vue has three common approaches to styling apps:

* External CSS files.
* Global styles in Single File Components (`.vue` files).
* Component-scoped styles in Single File Components.

To help familiarize you with each one, we'll use a combination of all three to give our app a nicer look and feel.

## Styling with external CSS files

You can include external CSS files and apply them globally to your app. Let's look at how this is done.

To start with, create a file called `reset.css` in the `src/assets` directory. Files in this folder get processed by Webpack. This means we can use CSS pre-processors (like SCSS) or post-processors (like PostCSS).

While this tutorial will not be using such tools, it's good to know that when including such code in the assets folder, it will be processed automatically.

Add the following contents to the `reset.css` file:
```
/* reset.css */
/* RESETS */
*,
*::before,
*::after {
    box-sizing: border-box;
}
*:focus {
    outline: 3px dashed #228bec;
}
html {
    font: 62.5% / 1.15 sans-serif;
}
h1,
h2 {
    margin-bottom: 0;
}
ul {
    list-style: none;
    padding: 0;
}
button {
    border: none;
    margin: 0;
    padding: 0;
    width: auto;
    overflow: visible;
    background: transparent;
    color: inherit;
    font: inherit;
    line-height: normal;
    -webkit-font-smoothing: inherit;
    -moz-osx-font-smoothing: inherit;
    -webkit-appearance: none;
}
button::-moz-focus-inner {
    border: 0;
}
button,
input,
optgroup,
select,
textarea {
    font-family: inherit;
    font-size: 100%;
    line-height: 1.15;
    margin: 0;
}
button,
input {
    /* 1 */
    overflow: visible;
}
input[type="text"] {
    border-radius: 0;
}
body {
    width: 100%;
    max-width: 68rem;
    margin: 0 auto;
    font: 1.6rem/1.25 "Helvetica Neue", Helvetica, Arial, sans-serif;
    background-color: #f5f5f5;
    color: #4d4d4d;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
}
@media screen and (min-width: 620px) {
    body {
        font-size: 1.9rem;
        line-height: 1.31579;
    }
}
/* END RESETS */
```
Next, in your `src/main.js` file, import the `reset.css` file like so:
```
import './assets/reset.css';
```
This will cause the file to get picked up during the build step and automatically added to our site.

The reset styles should be applied to the app now. The images below show the look of the app before and after the reset is applied.

Before:

![Image of the moz-todo-vue app without added CSS stylings](https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Vue_styling/todo-app-unstyled.png)

After:

![Image of the moz-todo-vue app with added CSS stylings](https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Vue_styling/todo-app-reset-styles.png)

Noticeable changes include the removal of the liat bullets, background color changes, and changes to the base button and input styles.










cd JavaScript/Tools_and_Testing/Client-side_Frameworks/Vue/Styling_Vue_Components