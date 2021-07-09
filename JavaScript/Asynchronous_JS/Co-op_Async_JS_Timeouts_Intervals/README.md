# Cooperative asynchronous JavaScript: Timeouts and intervals

This tutorial looks at the traditional methods JavaScript has available for running code asynchronously after a set time period has elapsed, or at a regular interval (e.g. a set number of times per second), discusses what they are useful for, and considers their inherent issues.

## Introduction

For a long time, the web platform has offered JavaScript programmers a number of functions that allow them to asynchronously execute code after a certain time interval has elapsed, and to repeatedly execute a block of code asynchronously until you tell it to stop.

These functions are:

**[`setTimeout()`](https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/setTimeout)** - Execute a specified block of code once after a specified time has elapsed.

**[`setnterval()`](https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/setInterval)** - Execute a specified block of code repeatedly with a fixed time delay between each call.

**[`requestAnimationFrame()`](https://developer.mozilla.org/en-US/docs/Web/API/window/requestAnimationFrame)** - The modern version of `setInterval()`. Executes a specified block of code before the browser next repaints the display, allowing an animation to be run at a suitable framerate regardless of the environment it is being run in.

The asynchronous code set up by these functions runs on the main thread (after their specified timer has elapsed).

It's important to know that you can (and often will) run other code before a `setTimeout()` call executes, or between iterations of `setInterval()`. Depending on how processor-intensive these operations are, they can delay your async code even further, as any async code will execute only *after* the main thread is available. (In other words, when the stack is empty.) You will learn more on this matter as you progress through this article.

In any case, these functions are used for running constant animations and other background processing on a web site or application. In the following sections, we will show you how they can be used.

## setTimeout()

As we said before, [`setTimeout()`](https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/setTimeout) executes a particular block of code once after a specified time has elapsed. It takes the following parameters:

* A function to run, or a reference to a function defined elsewhere.
* A number representing the time interval in milliseconds (1000 milliseconds equals 1 second) to wait before executing the code. If you specify a value of `0` (or omit the value), the function will run as soon as possible. (See the note below on why it runs "as soon as possible" and not "immediately".) More on why you might want to do this later.
* Zero or more values that represent any parameters you want to pass to the function when it is run.

<hr>

**Note**: The specified amount of time (or the delay) is **not** the *guaranteed time* to execution, but rather the *minimum time* to execution. The callbacks you pass to these functions cannot run until the stack on the main thread is empty.

As a consequence, code like `setTimeout(fn, 0)` will execute as soon as the stack is empty, **not** immediately. If you execute code like `setTimeout(fn, 0)` but then immediately after run a loop that counts from 1 to 10 billion, your callback will be executed after a few seconds.

<hr>

In the following example, the browser will wait two seconds before executing the anonymous function, then will display the alert message ([see it running live](), and [see the source code]()):
```
let myGreeting = setTimeout(() => {
    alert('Hello, Mr. Universe!');
}, 2000);
```
The functions you specify don't have to be anonymous. You can give your function a name, and even define it seomwhere else and pass a function reference to the `setTimeout()`. The following two versions of the code snippet are equivalent to the first one:
```
// With a named function
let myGreeting = setTimeout(function sayHi() {
    alert('Hello, Mr. Universe!');
}, 2000);

// With a function defined separately
function sayHi() {
    alert('Hello, Mr. Universe!');
}

let myGreeting = setTimeout(sayHi, 2000);
```
