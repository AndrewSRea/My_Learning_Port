# Storing the information you need -- Variables

After reading the laast couple or articles, you should now know what JavaScript is, what it can do for you, how you use it alongside other web technologies, and whaat its main features look like from a high level. In this article, we will get down to the real basics, looking at how to work with the most basic building blocks of JavaScript -- Variables.

## Tools you need

Throughout this article, you'll be asked to type in lines of code to test your understanding of the content. If you aare using a desktop browser, the best place to type your sample code is your browser's JavaScript console (see [What are browser developer tools](https://developer.mozilla.org/en-US/docs/Learn/Common_questions/What_are_browser_developer_tools) for more information on how to access this tool).

## What is a variable?

A variable is a container for a value, like a number we might use in a sum, or a string that we might use as part of a sentence. But one special thing about variables is that their contained values can change. Let's look at a simple example:
```
<button>Press me</button>
```
```
const button = document.querySelector('button');

button.onclick = function() {
    let name = prompt('What is your name?');
    alert('Hello ' + name + ', nice to see you!');
}
```
In this example, pressing the button runs a couple of lines of code. The first line pops a box up on the screen that asks the reader to enter their name, and then stores the value in a variable. The second line displays a welcome message that includes their name, taken from the variable name.

To understand why this is so useful, let's think about how we'd write this example without using a variable. It would end up looking something like this:
```
let name = prompt('What is your name?');

if (name === 'Adam') { 
    alert('Hello Adam, nice to see you!');
} else if (name === 'Alan') {
    alert('Hello Alan, nice to see you!');
} else if (name === 'Bella') {
    alert('Hello Bella, nice to see you!');
} else if (name === 'Bianca') {
    alert('Hello Bianca, nice to see you!');
} else if (name === 'Chris') {
    alert('Hello Chris, nice to see you!');
}

// ...and so on...
```
You may not fully understand the syntax we are using (yet!) but you should be able to get the idea--if we didn't have variables available, we'd have to implement a giant code block that checked what the entered name was, and then display the appropriate message for any name. This is obviously really inefficient (the code is a lot bigger, even for only five choices), and it just wouldn't work--you couldn't possibly store all possible choices.

Variables just make sense, and as you learn more about JavaScript, they will start to become second nature.

Another special thing about variables is that they can contain just about anything--not just strings and numbers. Variables can also contain complex data and even entire functions to do amazing things. You'll learn more about this as you go along.

<hr>

**Note**: We say variables contain values. This is an important distinction to make. Variables aren't the values themselves; they aree containers for values. You can think of them being like little cardboard boxes that you can store things in.

<hr>

## Declaring a variable

To use a variable, you've first got to create it--more accurately, we call this declaring the variable. To do this, we type the keyword `var` or `let`, followed by the name you want to call your variable:
```
let myName;
let myAge;
```
Here we're create two variables called `myName` and `myAge`. Try typing these lines into your web browser's console. After that, try creating a variable (or two) with your own name choices.

<hr>

**Note**: In JavaScript, all code instructions should end with a semi-colon (;)--your code may work correctly for single lines, but probably won't when you are writing multiple lines of code together. Try to get into the habit of including it.

<hr>

You can test whether these values now exist in the execution environment by typing just the variable's name, e.g.
```
myName;
myAge;
```
They currently have no value; they are empty containers. When you enter the variable names, you should get a value of `undefined` returned. If they don't exist, you'll get an error message--try typing in
```
scoobyDoo;
```

<hr>

**Note**: Don't confuse a variable that exists but has no defined vallue with a variable that doesn't exist at all--they are very different things. In the box analogy you saw above, not existing would mean theere's no box (variable) for a value to go in. No value defined would mean that there IS a box, but it has no value inside it.

<hr>

## Initilaizing a variable