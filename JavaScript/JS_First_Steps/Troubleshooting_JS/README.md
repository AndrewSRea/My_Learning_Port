# What went wrong? Troubleshooting JavaScript

When you built up the "Guess the number" game in the previous article, you may have found that it didn't work. Never fear--this article aims to save you from tearing your hair out over such problems by providing you with some tips on how to find and fix errors in JavaScript programs.

## Types of error

Generally speaking, when you do something wrong in code, there are two types of main error that you'll come across:

* **Syntax errors**: These are spelling errors in your code that actually cause the program not to run at all, or stop working part way through--you will usually be provided with some error messages, too. These are usually okay to fix, as long as you are familiar with the right tools and know what the error messages mean!
* **Logic errors**: These are errors where the syntax is actually correct but the code is not what you intended it to be, meaning that program runs successfully but gives incorrect results. These are often harder to fix than syntax errors, as there usually isn't an error message to direct you to the source of the error.

Okay, so it's not quite *that* simple--there are some other differentiators as you drill down deeper. But the above classifications will do at this early stage in your career. We'll look at both of these types going forward.

## An erroneous example

To get started, let's return to our number guessing game--except this time we'll be exploring a version that has some deliberate errors introduced. Go to Github and make your self a local copy of [number-game-errors.html](https://github.com/mdn/learning-area/blob/master/javascript/introduction-to-js-1/troubleshooting/number-game-errors.html).

1. To get started, open the local copy inside your favorite text editor, and your browser.
2. Try pllaying the game--you'll notice that when you press the "Submit guess" button, it doesn't work!

<hr>

**Note**: You might well have your own version of the game example that doesn't work, which you might want to fix! We'd still like you to work through the article with our version, so that you can learn the techniques we are teaching here. Then you can go back and try to fix your example.

<hr>

## Fixing syntax errors

Earlier on in the course, we got you to type some simple JavaScript commands into the **developer tools JavaScript console**. What's even more useful is that the console gives you error messages whenever a syntax error exists inside the JavaScript being fed into the browser's JavaScript engine. Now let's go hunting.

1. Go to the tab that you've got `number-game-errors.html` open in, and open your JavaScript console. You should see an error message along the following lines in the console:
```
TypeError: guessSubmit.addeventListener is not a function
```
2. This is a pretty easy error to track down, and the browser gives you several useful bits of information to help you out (the screenshot above is from Firefox, but other browsers provide similar information). From left to right, we've got:
    - A red "x" to indicate that this is an error.
    - An error message to indicate what's gone wrong: "TypeError: guessSubmit.addeventListener is not a function".
    - A "Learn More" link that links through to an MDN page that explains what this error means in greater detail.
    - The name of the JavaScript file, which links thorugh to the Debugger tab of the developeer tools. If you follow this link, you'll see the exact line where the error is highlighted.
    - The line number where the error is, and the character number in that line where the error is first seen. In this case, we've got line 84 (in my personal HTML file), character number 3 (no "character number" actually designated in Chrome DevTools).
3. If we look at line 84 in our code editor, we'll find this line:
```
guessSubmit.addeventListener('click', checkGuess);
```
4. The error message says "guessSubmit.addeventListener is not a function", which means that the function we're calling is not recognized by the JavaScript interpreter. Often, this error message actually means that we've spelled something wrong. If you are not sure of the correct spelling of a piece of syntax, it is often good to look up the feature on MDN. The best way to do this currently is to search for "mdn *name-of-feature*" with your favorite search engine. Here's a shortcutto save you some time in this instance: [`addEventListener()`](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener).
5. So, looking at this page, the error appears to be that we've spelled the function name wrong! Remember that JavaScript is case sensitive, so any slight difference in spelling or casing will cause an error. Changeing `addeventListener` to `addEventListener` should fix this. Do this now.

<hr>

**Note**: See the MDN [TypeError: "x" is not a function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Errors/Not_a_function) reference page for more details about this error.

### Syntax errors, round two

1. Save your page and refresh, and you should see the error has gone.
2. Now if you try to enter a guess and press the Submit guess button, you'll see...another error!
3. This time the error being reported is "TypeError: lowOrHi is null", on line 76. (For my personal HTML file, and in my Chrome DevTools console, the message is "Uncaught TypeError: Cannot set property 'textContent' of null at HTMLInputElement.checkGuess", on line 76.)

<hr>

**Note**: [`Null`]() is a special value that means "nothing", or "no value". So `lowOrHi` has been declared and initialized, but not with any meaningful value--it has no type or value.

<hr>

**Note**: This error didn't come up as soon as the page was loaded because this error occurred inside a function (inside the `checkGuess() { ... }` block). As you'll learn in more detail in our later [functions article](), code inside functions runs in a separate scope than code outside functions. In this case, the code was not run and the error was not thrown until the `checkGuess()` function was run by line 84.

<hr>