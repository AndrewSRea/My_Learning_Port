# Accessibility in React

In our final tutorial article, we'll focus on (pun intended) accessibility, including focus management in React, which can improve usability and reduce confusion for both keyboard-only and screenreader users.

## Including keyboard users

At this point, we've accomplished all of the features we set out to implement. A user can add a new task, check and uncheck tasks, delete tasks, or edit task names. And they can filter their task list by all, active, or completed tasks.

Or, at least, they can do all of these things with a mouse. Unfortunately, these features are not very accessible to keyboard-only users. Let's explore this now.

## Exploring the keyboard usability problem

Start by clicking on the input at the top of our app, as if you're going to add a new task. You'll see a thick, dashed outline around that input. This outline is your visual indicator that the browser is currently focused on this element. Press the <kbd>Tab</kbd> key, and you will see the outline appear around the "Add" button beneath the input. This shows you that the browser's focus has moved.

Press <kbd>Tab</kbd> a few more times, and you will see this dashed focus indicator move between each of the filter buttons. Keep going until the focus indicator is around the first "Edit" button. Press <kbd>Enter</kbd>.

The `<Todo />` component will switch templates, as we designed, and you'll see a form that lets us edit the name of the task.

But where did our focus indicator go?

When we switch between templates in our `<Todo />` component, we completely remove the elements that were there before to replace them with something else. That means the element that we were focused on vanishes, and nothing is in focus at all. This could confuse a wide variety of users -- particularly users who rely on the keyboard, or users who use a screen reader.

To improve the experience for keyboard and screen-reader users, we should manage the browser's focus ourselves.

## Focusing between templates

When a user toggles a `<Todo />` template from viewing to editing, we should focus on the `<input>` used to rename it; when they toggle back from editing to viewing, we should move focus back to the "Edit" button.

### Targeting our elements

