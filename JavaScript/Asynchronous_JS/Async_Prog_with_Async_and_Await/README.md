# Making asynchronous programming easier with async and await

More recent additions to the JavaScript language are [async functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function) and the [`await`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/await) keyword, added in ECMAScript 2017. These features basically act as syntactic sugar on top of promises, making asynchronous code easier to write and to read afterwards. They make async code look more like old-school synchronous code, so they're well worth learning. This article gives you what you need to know.

## The basics of async/await

There are two parts to using async/await in your code.

### The async keyword

First of all, we have the `async` keyword, which you put in front of a function declaration to turn it into an [async function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function). An async function is a function that knows how to expect the possibility of the `await` keyword being used to invoke asynchronous code.

Try typing the following into your browser's JS console:
```
function hello() { return "Hello" };
hello();
```
The function returns "Hello" -- nothing special, right?

But what if we turn this into an async function? Try the following:
```
async function hello() { return "Hello" };
hello();
```
Ah. Invoking the function now returns a promise. This is one of the traits of async functions -- their return values are guaranteed to be converted to promises.

You can also create an [async function expression](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/async_function), like so:
```
let hello = async function() { return "Hello" };
hello();
```
And you can use arrow functions:
```
let hello = async () => { return "Hello" };
```
These all do basically the same thing.

To actually consume the value returned when the promise fulfills, since it is returning a promise, we could use a `.then()` block:
```
hello().then((value) => console.log(value))
```
...or even just shorthand such as:
```
hello().then(console.log)
```
...like we saw in the last article.

So the `async` keyword is added to function to tell them to return a promise rather than directly returning the value.

### The await keyword

The advantage of an async function only becomes apparent when you combine it with the [await](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/await) keyword. `await` only works inside async functions within regular JavaScript code. However, it can be used on its own with [JavaScript modules](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules).

`await` can be put in front of any async promise-based function to pause your code on that line until the promise fulfills, then return the resulting value.

You can use `await` when calling any function that returns a Promise, including web API functions.

Here is a trivial example:
```
async function hello() {
    return greeting = await Promise.resolve("Hello");
};

hello().then(alert);
```
Of course, the above example is not very useful, although it does serve to illustrate the syntax. Let's move on and look at a real example.

## Rewriting promise code with async/await

Let's look back at a simple fetch example that we saw in the previous article:
```
fetch('coffee.jpg')
.then(response => {
    if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return response.blob();
})
.then(myBlob => {
    let objectURL = URL.createObjectURL(myBlob);
    let image = document.createElement('img');
    image.src = objectURL;
    document.body.appendChild(image);
})
.catch(e => {
    console.log('There has been a problem with your fetch operation: ' + e.message);
});
```
By now, you should have a reasonable understanding of promises and how they work, but let's convert this to use async/await to see how much simpler it makes things:
```
async function myFetch() {
    let response = await fetch('coffee.jpg');

    if (!reponse.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
    }

    let myBlob = await response.blob();

    let objectURL = URL.createObjectURL(myBlob);
    let image = document.createElement('img');
    image.src = objectURL;
    document.body.appendChild(image);
}

myFetch()
.catch(e => {
    console.log('There has been a problem with your fetch opeation: ' + e.message);
});
```
It makes code much simpler and easier to understand -- no more `.then()` blocks everywhere!

Since an `async` keyword turns a function into a promise, you could refactor your code to use a hybrid approach of promises and await, bringing the second half of the function out into a new block to make it more flexible:
```
async function myFetch() {
    let response = await fetch('coffee.jpg');
    if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return await response.blob();
}

myFetch().then((blob) => {
    let objectURL = URL.createObjectURL(blob);
    let image = document.createElement('img');
    image.src = objectURL;
    document.body.appendChild(image);
}).catch(e => console.log(e));
```
See this example running live [here](), and see the source code [here]().