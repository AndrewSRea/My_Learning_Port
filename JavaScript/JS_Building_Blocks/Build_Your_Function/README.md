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

1. Start by accessing the [function-start.html](https://github.com/mdn/learning-area/blob/master/javascript/building-blocks/functions/function-start.html) file and making a local copy. You'll see that the HTML is simple--the body contains just a single button. We've also provided some basic CSS to stylee the custom message box, and an empty [`<script>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/script) element to put our JavaScript in.
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

The first line uses a DOM API function called [`document.querySelector()`](https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector) to select the [`<html>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/html) element and store a reference to it in a constant called `html`, so we can do things to it later on:
```
const html = document.querySelector('html');
```
The next section uses another DOM API function called [`document.createElement()`](https://developer.mozilla.org/en-US/docs/Web/API/Document/createElement) to create a [`<div>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/div) element and store a reference to it in a constant called `panel`. This element will be the outer container of our message box.

We then use yet another DOM API function called [`Element.setAttribute()`](https://developer.mozilla.org/en-US/docs/Web/API/Element/setAttribute) to set a `class` attribute on our panel with a value of `msgBox`. This is to make it easier to style the element--if you look at the CSS on the page, you'll see that we are using a `.msgBox` class selector to style the message box and its contents.

Finally, we call a DOM function called [`Node.appendChild()`](https://developer.mozilla.org/en-US/docs/Web/API/Node/appendChild) on the `html` constant we stored earlier, which nests one element inside the other as a child of it. We specify the panel `<div>` as the child we want to append inside the `<html>` element. We need to do this as the element we created won't just appear on the page on its own--we need to specify where to put it.
```
const panel = document.createElement('div');
panel.setAttribute('class', 'msgBox');
html.appendChild(panel);
```
The next two sections make use of the same `createElement()` and `appendChild()` functions we've already seen to create two new elements--a [`<p>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/p) and a [`<button>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button)--and insert them in the page as children of the panel `<div>`. We use their [`Node.textContent`](https://developer.mozilla.org/en-US/docs/Web/API/Node/textContent) property--which represents the text content of an element--to insert a message inside the paragraph, and an 'x' inside the button. This button will be what needs to be clicked/activated when the user wants to close the message box.
```
const msg = document.createElement('p');
msg.textContent = 'This is a message box';
panel.appendChild(msg);

const closeBtn = document.createElement('button');
closeBtn.textContent = 'x';
panel.appendChild(closeBtn);
```
Finally, we use a [`GlobalEventHandlers.onclick`](https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onclick) event handler to make it so that when the button is clicked, some code is run to delete the whole panel from the page--to close the message box.

Briefly, the `onclick` handler is a property available on the button (or in fact, any element on the page) that can be set to a function to specify what code to run when the button is clicked. You'll learn a lot more about these in our later [events article](). <!-- link to JS_Building_Blocks - Intro_to_Events folder --> We are making the `onclick` handler equal to an anonymous function, which contains the code to run when the button is clicked. The line inside the function uses the [`Node.removeChild()`]() DOM API function to specify that we want to remove a specific child element of the HTML element--in this case, the "panel" `<div>`.
```
closeBtn.onclick = function() {
    panel.parentNode.removeChild(panel);
}
```
Basically, this whole block of code is generating a block of HTML that looks like so, and inserting it into the page:
```
<div class="msgBox">
    <p>This is a message box</p>
    <button>x</button>
</div>
```
That was a lot of code to work through--don't worry too much if you don't remember exactly how every bit of it works right now! The main part we want to focus on here is the function's structure and usage, but we wanted to show something interesting for this example.

## Calling the function

You've got your function definition written into your `<script>` element just fine, but it will do nothing as it stands.

1. Try including the following line below your function to call it:
```
displayMessage();
```
This line invokes the function, making it run immediately. When you save your code and reload it in the browser, you'll see the little message box appear immediately, only once. We are only calling it once, after all.
2. Now open your browser developer tools on the example page, go to the JavaScript console and type the line again there, and you'll see it appear again! So this is fun--we now have a reusable function that we can call any time we like.

But we probably want it to appear in response to user and system actions. In a real application, such a message box would probably be called in response to new dta being available, or an error having occurred, or the user trying to delete their profile ("are you sure about this?"), or the user adding a new contact and the operation completing successfully, etc.

In this demo, we'll get the message box to appear when the user clicks the button.

3. Delete the previous line you added.
4. Next, we'll select the button 