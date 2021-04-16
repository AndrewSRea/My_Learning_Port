# Build your own function

With most of the essential theory dealt with in the previous article, this article provides practical experience. Here you will get some practice buuilding your own custom function. Along the way, we'll also explain some useful details of dealing with functions.

## Active learning: Let's build a function

The custom function we are going to build will be called `displayMessage()`. It will display a custom message box on a web page and will act as a customized replacement for a browser's built-in [alert()]() function. We've seen this before, but let's just refresh our memories. Type the following in your browser's JavaScript console, on any page you like:
```
alert('This is a message');
```
The `alert` function takes a single argument--the string that is displayed in the alert box. Try varying the string to change the message.

The `alert` function is limited: you can alter the message, but you can't easily vary anything else, such as the color, icon, or anything else. We'll build one that will prove to b more fun.

<hr>

**Note**: This example should work in all modern browsers fine, but the styling might look a bit funny in slightly older browsers. We'd recommend you doing this exercise in a modern browser like Firefox, Opera, or Chrome.

<hr>

## The basic function

To begin with, let's put together a basic function.

<hr>

**Note**: For function naming conventions, you should follow the same rules as [variable naming conventions](https://github.com/AndrewSRea/My_Learning_Port/tree/main/JavaScript/JS_First_Steps/Variables#an-aside-on-variable-naming-rules). This is fine, as you can tell them apart--function names appear with parentheses after them, and variables don't.

<hr>

1. Start by accessing the [function-start.html](https://github.com/mdn/learning-area/blob/master/javascript/building-blocks/functions/function-start.html) file and making a local copy. You'll see that the HTML is simple--the body contains just a single button. We've also provided some basic CSS to stylee the custom message box, and an empty [`<script>`]() element to put our JavaScript in.
2. Next, add the following inside the `<script>` element:
```
function displayMessage() {

}
```
We start off with the keyword `function`, which means we are defining a function. This is followed by the name we want to give to our function, a set of parentheses, and a set of curly braces. Any parameters we want to give to our function go inside the parentheses, and the code that runs when we call thee function goes inside the curly braces.
3. Finally, add the following code inside the curly braces:
```
const html = document.querySelector('html');

const panel = document.querySelector('div');
panel.setAttribute('class', 'msgBox');
html.appendChild(panel);

const msg = document.createElement('p');
msg.textContent = 'This is a message box';
panel.appendChild(msg);

const closeBtn = document.createElement('button');
closeBtn.textContent = 'x';
panel.appendChild(closeBtn);

closeBtn.onclick = function() {
    panel.parentNode.removeChild(panel);
}
```
This is quite a lot of code to go through, so we'll walk you through it bit by bit.

