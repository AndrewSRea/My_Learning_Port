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
This should return the number 7, because "mozilla" is 7 characters long. This is useful for many reasons; for example, you might want to find the lengths of a series of names so you can display them in order of length, or let a user know that a username they have entered into a form field is too long if it is over a certain length.

### Retrieving a specific string character

On a related note, you can return any character inside a string by using **square bracket notation**--this means you include square brackets (`[]`) on the end of your variable name. Inside the square brackets, you include the number of the character you want to return. So, for example, to retrieve the first letter, you'd do this:
```
browserType[0];
```
Remember: computers count from 0, not 1! You could use this to, for example, find the first letter of a series of strings and order them alphabetically.

To retrieve the last character of *any* string, we could use the following line, combining this technique with the `length` property we looked at above:
```
browserType[browserType.length-1];
```
The length of "mozilla" is 7, but because the count starts at 0, the character position is 6; using `length-1` gets us the last character.

### Finding a substring inside a string and extracting it

Sometimes you'll want to find if a smaller string