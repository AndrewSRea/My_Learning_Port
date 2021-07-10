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

In the following example, the browser will wait two seconds before executing the anonymous function, then will display the alert message ([see it running live](), and [see the source code](https://github.com/AndrewSRea/My_Learning_Port/blob/main/JavaScript/Asynchronous_JS/Co-op_Async_JS_Timeouts_Intervals/simple-settimeout.html)):
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
That can be useful if you have a function that needs to be called both from a timeout and in response to an event, for example. But it can also just help keep your code tidy, especially if the timeout callback is more than a few lines of code.

`setTimeout()` returns an identifier value that can be used to refer to the timeout later, such as when you want to stop it. See [Clearing timeouts](https://github.com/AndrewSRea/My_Learning_Port/tree/main/JavaScript/Asynchronous_JS/Co-op_Async_JS_Timeouts_Intervals#clearing-timeouts) (below) to learn how to do that.

### Passing parameters to a setTimeout() function

Any parameters that you want to pass to the function being run inside the `setTimeout()` must be passed to it as additional parameters at the end of the list.

For example, you could refactor the previous function so that it will say hi to whatever person's name is passed to it:
```
function sayHi(who) {
    alert(`Hello ${who}!`);
}
```
Now you can pass the name of the person into the `setTimeout()` call as a third parameter:
```
let myGreeting = setTimeout(sayHi, 2000, 'Mr. Universe');
```

### Clearing timeouts

Finally, if a timeout has been created, you can cancel it before the specified time has elapsed by calling [`clearTimeout()`](https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/clearTimeout), passing it the identifier of the `setTimeout()` call as a parameter. So to cancel our above timeout, you'd do this:
```
clearTimeout(myGreeting);
```

<hr>

**Note**: See [greeter-app.html]() for a slightly more involved demo that allows you to set the name of the person to say hello to in a form, and cancel the greeting using a separate button ([see the source code also](https://github.com/AndrewSRea/My_Learning_Port/blob/main/JavaScript/Asynchronous_JS/Co-op_Async_JS_Timeouts_Intervals/greeter-app.html)).

## setInterval()

`setTimeout()` works perfectly when you need to run code once after a set period of time. But what happens when you need to run the code over and over again -- for example, in the case of an animation?

This is where [`setInterval()`](https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/setInterval) comes in. This works in a very similar way to `setTimeout()`, except that the function you pass as the first parameter is executed repeatedly at no less than the number of milliseconds given by the second paramter apart, rather than once. You can also pass any paramters required by the function being executed as subsequent parameters of the `setInterval()` call.

Let's look at an example. The following function creates a new [`Date()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) object, extracts a time string out of it using [`toLocaleTimeString()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleTimeString), and then displays it in the UI. It then runs the function once per second using `setInterval()`, creating the effect of a digital clock that updates once per second ([see this live](), and also [see the source](https://github.com/AndrewSRea/My_Learning_Port/blob/main/JavaScript/Asynchronous_JS/Co-op_Async_JS_Timeouts_Intervals/setinterval-clock.html)):
```
function displayTime() {
    let date = new Date();
    let time = date.toLocaleTimeString();
    document.getElementById('demo').textContent = time;
}

const createClock = setInterval(displayTime, 1000);
```
Just like `setTimeout()`, `setInterval()` returns an identifying value you can use later when you need to clear the interval.

### Clearing intervals

`setInterval()` keeps running a task forever, unless you do something about it. You'll probably want a way to stop such tasks, otherwise you may end up getting errors when the browser can't complete any further versions of the task, or if the animation being handled by the task has finished. You can do this the same way you stop timeouts -- by passing the identifier returned by the `setInterval()` call to the [`clearInterval()`](https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/clearInterval) function:
```
const myInterval = setInterval(myFunction, 2000);

clearInterval(myInterval);
```

### Active learning: Creating your own stopwatch!

With this said, we've got a challenge for you. Take a copy of our [setInterval-clock.html](https://github.com/mdn/learning-area/blob/master/javascript/asynchronous/loops-and-intervals/setinterval-clock.html) example, and modify it to create your own simple stopwatch.

You need to display a time as before, but in this example, you need:

* A "Start" button to start the stopwatch running.
* A "Stop" button to pause/stop it.
* A "Reset button to reset the time back to `0`.
* The time display to show the number of seconds elapsed, rather than the actual time.

Here's a few hints for you:

* You can structure and style the button markup however you like; just make sure you use semantic HTML, with hooks to allow you to grab the button references using JavaScript.
* You probably want to create a variable that starts at `0`, then increments by one every second using a constant loop.
* It is easier to create this example without using a `Date()` object, like we've done in our version, but less accurate -- you can't guarantee that the callback will fire after exactly `1000`ms. A more accurate way would be to run `startTime = Data.now()` to get a timestamp of exactly when the user clicked the start button, and then do `Date.now() - startTime` to get the number of milliseconds after the start button was clicked.
* You also want to calculate the number of hours, minutes, and seconds as separate values, and then show them together in a string after each loop iteration. From the second counter, you can work out each of these.
* How would you calculate them? Have a think about it:
    - The number of seconds in an hour is `3600`.
    - The number of minutes will be the amount of seconds left over when all of the hours have been removed, divided by `60`.
    - The number of seconds will be the amount of seconds left over when all of the minutes have been removed.
* You'll want to include a leading zero on your display values if the amount is less than `10`, so it looks more like a traditional clock/watch.
* To pause the stopwatch, you'll want to clear the interval. To reset it, you'll want to set the counter back to `0`, clear the interval, and then immediately update the display.
* You probably ought to disable the start button after pressing it once, and enable it again after you've stopped/reset it. Otherwise multiple presses of the start button will apply multiple `setInterval()`s to the clock, leading to wrong behavior.