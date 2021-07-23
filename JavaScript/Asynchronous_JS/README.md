# Asynchronous JavaScript

In this module, we take a look at [asynchronous](https://developer.mozilla.org/en-US/docs/Glossary/Asynchronous) [JavaScript](https://developer.mozilla.org/en-US/docs/Glossary/JavaScript), why it is important, and how it can be sued to effectively handle potential blocking operations, such as fetching resources from a server.

## Guides

**[General asynchronous programming concepts](https://github.com/AndrewSRea/My_Learning_Port/tree/main/JavaScript/Asynchronous_JS/Gen_Async_Prog_Concepts#general-asynchronous-programming-concepts)**

In this article, we'll run through a number of important concepts relating to asynchronous programming, and how this looks in web browsers and JavaScript. You should understand these concepts before working through the other articles in the module.

**[Introducing asynchronous JavaScript](https://github.com/AndrewSRea/My_Learning_Port/tree/main/JavaScript/Asynchronous_JS/Intro_Async_JS#introducing-asynchronous-javascript)**

In this article, we briefly recap the problems associated with synchronous JavaScript, and take a first look at some of the different asynchronous JavaScript techniques you'll encounter, showing how they can help us solve such problems.

**[Cooperative asynchronous JavaScript: Timeouts and intervals](https://github.com/AndrewSRea/My_Learning_Port/tree/main/JavaScript/Asynchronous_JS/Co-op_Async_JS_Timeouts_Intervals#cooperative-asynchronous-javascript-timeouts-and-intervals)**

Here we look at the traditional methods JavaScript has available for running code asynchronously after a set time period has elapsed, or at a regular interval (e.g., a set number of times per second), talk about what they are useful for, and look at their inherent issues.

**[Handling async operations gracefully with Promises](https://github.com/AndrewSRea/My_Learning_Port/tree/main/JavaScript/Asynchronous_JS/Async_Prog_with_Promises#graceful-asynchronous-programming-with-promises)**

Promises are a comparatively new feature of the JavaScript language that allow you to defer further actions until after the previous action has completed, or respond to its failure. This is really useful for setting up a sequence of operations to work correctly. This article shows you how promises work, where you'll see them in use in WebAPIs, and how to write your own.

**[Making asynchronous programming easier with async and await](https://github.com/AndrewSRea/My_Learning_Port/tree/main/JavaScript/Asynchronous_JS/Async_Prog_with_Async_and_Await#making-asynchronous-programming-easier-with-async-and-await)**

Promises can be somewhat complex to set up and understand, and so modern browsers have implemented `async` functions and the `await` operator. The former allows standard functions to implicitly behave asynchronously with promises, whereas the latter can be used inside `async` functions to wait for promises before the function continues. This makes chaining promises simpler and easier to read.

**[Choosing the right approach](https://github.com/AndrewSRea/My_Learning_Port/tree/main/JavaScript/Asynchronous_JS/Choosing_the_Right_Approach#choosing-the-right-approach)**

To finish this module off, we'll consider the different coding techniques and features we've discussed throughout, looking at which ones you should use when, with recommendations and reminders of common pitfalls where appropriate.

## See also

* [Asynchronous Programming](https://eloquentjavascript.net/11_async.html) from the fantastic [Eloquent JavaScript](https://eloquentjavascript.net/) online book by Marijn Haverbeke.