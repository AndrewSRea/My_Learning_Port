# Useful String Methods

Now that we've looked at the very basics of strings, let's move up a gear and start thinking about what useful operations we can do on strings with built-in methods, such as finding the length of a text string, joining and splitting strings, substituting one character in a string for another, and more.

## Strings as objects

Most things are objects in JavaScript. When you create a string, for example, by using...
```
let string = 'This is my string';
```
...your variable becomes a string object instance and, as a result, has a large number of properties and methods available to it. You can see this if you go to the MDN [`String`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) object page and look down the list on the side of the page!

**Now, before your brain starts melting, don't worry!** You really don't need to know about most of these early on in your learning journey. But there are a few that you'll potentially use quite often that we'll look at here.

Let's enter some examples into the **browser developer console**.

### Finding the length of a string

This is easy--you use the [`length`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/length) property. Try entering the following line:
```
let browserType = 'mozilla';
browserType.length;
```
This should return the number 7, because "mozilla" is 7 characters long. This is useful for many reasons; for example, you might want to find the lengths of a series of names so you can display them in order of length,