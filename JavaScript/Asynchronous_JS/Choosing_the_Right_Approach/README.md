# Choosing the right approach

To finish this module off, we'll provide a brief discussion of the different coding techniques and features we've discussed throughout, looking at which one you should use when, with recommendations and reminders of common pitfalls where appropriate. We'll probably add to this resource as time goes on.

## Asynchronous callbacks

Generally found in old-style APIs, asynchronous callbacks involve a function being passed into another function as a parameter, which is then invoked when an asynchronous operation has been completed, so that the callback can in turn do something with the result. This is the precursor to promises; it's not as efficient or flexible. Use only when necessary.

**Useful for...**

| Single delayed operation | Repeating operation | Multiple sequential operations | Multiple simultaneous operations |
| --- | --- | --- | --- |
| No | Yes (recursive callbacks) | Yes (nested callbacks) | No |

### Code example

An example that loads a resource via the [`XMLHttpRequest` API](https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest) ([run it live](https://andrewsrea.github.io/My_Learning_Port/JavaScript/Asynchronous_JS/Intro_Async_JS/xhr-async-callback.html), and [see the source code](https://github.com/AndrewSRea/My_Learning_Port/blob/main/JavaScript/Asynchronous_JS/Intro_Async_JS/xhr-async-callback.html)):
```
function loadAsset(url, type, callback) {
    let xhr = new XMLHttpRequest();
    xhr.open('GET', url);
    xhr.responseType = type;

    xhr.onload = function() {
        callback(xhr.response);
    };

    xhr.send();
}

function displayImage(blob) {
    let objectURL = URL.createObjectURL(blob);

    let image = document.createElement('img');
    image.src = objectURL;
    document.body.appendChild(image);
}

loadAsset('coffee.jpg', 'blob', displayImage);
```

### Pitfalls

* Nested callbacks can be cumbersome and hard to read (i.e. ["callback hell"](http://callbackhell.com/)).
* Failure callbacks need to be called once for each level of nesting, whereas with promises you can just use a single `.catch()` block to handle the errors for the entire chain.
* Async callbacks just aren't very graceful.
* Promise callbacks are always called in the strict order they are placed in the event queue; async callbacks aren't.
* Async callbacks lose full control of how the function will be executed when passed to a third-party library.

### Browser compatibility

Really good general support, although the exact support for callbacks in APIs depends on the particular API. Refer to the reference documentation for the API you're using for more specific support info.

### Further information

* [Introducing asynchronous JavaScript](https://github.com/AndrewSRea/My_Learning_Port/tree/main/JavaScript/Asynchronous_JS/Intro_Async_JS#introducing-asynchronous-javascript), in particular [Async callbacks](https://github.com/AndrewSRea/My_Learning_Port/tree/main/JavaScript/Asynchronous_JS/Intro_Async_JS#async-callbacks).

## setTimeout()

[`setTimeout()`](https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/setTimeout) is a method that allows you to run a function after an arbitrary amount of time has passed.

**Useful for...**

| Single delayed operation | Repeating operation | Multiple sequential operations | Multiple simultaneous operations |
| --- | --- | --- | --- |
| No | Yes (recursive timeouts) | Yes (nested timeouts) | No |

### Code example

Here the browser will wait two seconds before executing the anonymous function, then will display the alert message ([see it running live](), and [see the source code]()):
```
let myGreeting = setTimeout(function() {
    alert('Hello, Mr. Universe!');
}, 2000)
```

### Pitfalls

You can use recursive `setTimeout()` calls to run a function repeatedly in a similar fashion to `setInterval()`, using code like this:
```
let i = 1;
setTimeout(function run() {
    console.log(i);
    i++;

    setTimeout(run, 100);
}, 100);
```
There is a difference between recursive `setTimeout()` and `setInterval()`:

* Recursive `setTimeout()` guarantees, at least, the specified amount of time (100ms in this example) will elapse between the executions; the code will run and then wait 100 milliseconds before it runs again. The interval will be the same regardless of how long the code takes to run.
* With `setInterval()`, the interval we choose *includes* the time taken to execute the code we want to run in. Let's say that the code takes 40 milliseconds to run -- the interval then ends up being only 60 milliseconds.

When your code has the potential to take longer to run than the time interval you've assigned, it's better to use recursive `setTimeout()` -- this will keep the time interval constant between executions regardless of how long the code takes to execute, and you won't get errors.

### The [Browser compatibility](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous/Choosing_the_right_approach#browser_compatibility_2) of setTimeout()

### Further information

* [Cooperative asynchronous JavaScript: Timeouts and intervals](https://github.com/AndrewSRea/My_Learning_Port/tree/main/JavaScript/Asynchronous_JS/Co-op_Async_JS_Timeouts_Intervals#cooperative-asynchronous-javascript-timeouts-and-intervals), in particular [setTimeout()](https://github.com/AndrewSRea/My_Learning_Port/tree/main/JavaScript/Asynchronous_JS/Co-op_Async_JS_Timeouts_Intervals#settimeout)
* [setTimeout() reference](https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/setTimeout)

