# Beginning our React to-do list

Let's say that we've been tasked with creating a proof-of-concept in React -- an app that allows users to add, edit, and delete tasks they want to work on, and also mark tasks as complete without deleting them. This article will walk you through putting the basic `App` component structure and styling in place, ready for individual component definition and interactivity, which we'll add later.

## Our app's user stories

In software development, a user story is an actionable goal from the persepctive of the user. Defining user stories before we begin our work will help us focus our work. Our app should fulfill the following stories:

As a user, I can:

* Read a list of tasks.
* Add a task using the mouse or keyboard.
* Mark any task as completed, using the mouse or keyboard.
* Delete any task, using the mouse or keyboard.
* Edit any task, using the mouse or keyboard.
* View a specific subset of tasks: All tasks, only the active task, or only the completed tasks.

We'll tackle these stories one-by-one.

## Pre-project housekeeping

create-react-app has made a few files we won't be using at all for our project.

* We're not going to write per-component stylesheets, so first delete the `App.css` import from the top of `App.js`.
* We are also not going to be using the `logo.svg` file, so remove that import, too.

Then copy and paste the following commands into your terminal to delete some unneeded files. Make sure you're starting in the app's root directory!
```
# Move into the src directory of your project
cd src
# Delete a few files
rm -- App.test.js App.css logo.svg serviceWorker.js setupTests.js
# Move back up to the root of the project
cd ..
```
Notes: 

* Two of the files we're deleting are for testing the application. We will not cover testing here.
* If you stopped your server to do the terminal taqsks mentioned above, you'll have to start it again using `npm start`.

## Project starter code