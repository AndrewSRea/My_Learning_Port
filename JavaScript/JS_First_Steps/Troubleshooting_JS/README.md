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

