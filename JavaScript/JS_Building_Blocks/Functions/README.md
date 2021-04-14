# Functions -- reusable blocks of code

Another essential concept in coding is **functions**, which allow you to store a piece of code that does a single task inside a defined block, and then call that code whenever you need it using a single short command--rather than having to type out the same code multiple times. In this article, we'll explore fundamental concepts behind functions such as basic syntax, how to invoke and define them, scop, and parameters.

## Where do I find functions?

In JavaScript, you'll find functions everywhere. In fact, we've been using functions all the way through the course so far; we've just not been talking about them very much. Now is the time, however, for us to start talking about functions explicitly, and really exploring their syntax.

Pretty much anytime you make use of a JavaScript structure that features a pair of parentheses -- `()` -- and you're **not** using a common built-in language structure like a [for loop](https://github.com/AndrewSRea/My_Learning_Port/tree/main/JavaScript/JS_Building_Blocks/Looping_Code#the-standard-for-loop), [while or do...while loop](https://github.com/AndrewSRea/My_Learning_Port/tree/main/JavaScript/JS_Building_Blocks/Looping_Code#while-and-dowhile), or [if...else statement](https://github.com/AndrewSRea/My_Learning_Port/tree/main/JavaScript/JS_Building_Blocks/Conditionals#making-decisions-in-your-code----conditionals), you are making use of a function.

## Built-in browser functions

We've made use of functions built in to the browsr a lot in this course. Every time we manipulated a text string, for example:
```
let myText = 'I am a string';
let newString = myText.replace('string', 'sausage');
console.log(newString);
// the replace() string function takes a source string,
// and a target string and replaces the source string,
// with the target string, and returns the newly formed string
```
Or every time we manipulated an array:
```
let myArray = ['I', 'love', 'chocolate', 'frogs'];
let madeAString = myArray.join(' ');
console.log(madeAString);
// the join() function takes an array, joins
// all the array items together into a single
// string, and returns this new string
```
Or every time we generated a random number:
```
let myNumber = Math.random();
// the random() function generates a random number between
// 0 and up to but not including 1, and returns that number
```
...we were using a function!

<hr>

**Note**: Feel fre to enter these lines into your browser's JavaScript console to re-familiarize yourself with their functionality, if needed.

<hr>

The JavaScript language has many built-in functions to allow you to do useful things without having to write all that code yourself. In fact, some of the code you are calling when you **invoke** (a fancy word for run, or execute) a built-in browser function couldn't be written in JavaScript--many of these functions are caalling parts of the background browser code, which is written largely in low-level system languages like C++, not web languages like JavaScript.

Bear in mind that some built-in browser functions are not part of the core JavaScript language--some are defined as part of browser APIs, which build on top of the default language to provide even more functionality (refer to [this early section of our course](https://github.com/AndrewSRea/My_Learning_Port/tree/main/JavaScript/JS_First_Steps/What_Is_JS#so-what-can-it-really-do) for more descriptions). We'll look at using browser APIs in more detail in a later module.

## Functions versus methods

Programmers call **functions** that are part of objects **methods**. You don't need to learn about the inner workings of structured JavaScript objects yet--you can wait until our later module that will teach you all about the inner workings of objects, and how to create your own. For now, we just wanted to clear up any possible confusion of method versus function--you are likely to meet both terms as you look at the available related resources across the Web.

The built-in code we've made use of so far comes in both forms: **functions** and **methods**. You can check the full list of the built-in functions, as well as the built-in objects and their corresponding methods [here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects).

You've also seen a lot of **custom functions** in the course so far--functions defined in your code, not inside the browser. Anytime you saw a custom name with parentheses straight after it, you were using a custom function. In our "random-canvas-circles.html" example(see my accompanying [random-canvas-circles.html](https://github.com/AndrewSRea/My_Learning_Port/blob/main/JavaScript/JS_Building_Blocks/Looping_Code/random-canvas-circles.html) file) from our [loops article](), we included a custom `draw()` function that looked like this:
```
function draw() {
    ctx.clearRect(0,0,WIDTH,HEIGHT);
    for (let i = 0; i < 100; i++) {
        ctx.beginPath();
        ctx.fillStyle = 'rgba(255,0,0,0.5)';
        ctx.arc(random(WIDTH), random(HEIGHT), random(50), 0, 2 * Math.PI);
        ctx.fill();
    }
}
```
This function draws 100 random circles inside a [`<canvas>`]() element. Every time we want to do that, we can just invoke the function with this:
```
draw();
```
...rather than having to write all that code out again every time we want to repeat it. And functions can contain whatever code you like--you can even call other functions from inside functions. The above function, for example, calls the `random()` function three times, which is defined by the following code:
```
function random(number) {
    return Math.floor(Math.random()*number);
}
```
We needed this function because the browser's built-in [Math.random()]() function only generates a random decimla number between 0 and 1. We wanted a random whole number between 0 and a specified number.