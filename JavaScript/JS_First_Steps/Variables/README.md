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

Once you've declared a variable, you can initialize it with a value. You do this by typin the variable name, followed by an equals sign (=), followed by the value you want to give it. For example:
```
myName = 'Chris';
myAge = 37;
```
Try going back to the console now and typing in these lines. You should see the value you've assigned to the variable returned in the console to confirm it, in each case. Again, you can return your variable values by typing their name into the console--try these again:
```
myName;
myAge;
```
You can declare and initialize a variable at the same time, like this:
```
let myDog = 'Rover';
```
This is probably what you'll do most of the time, as it is quicker than doing the two actions on two separate lines.

## The difference between var and let

At this point, you may be thinking "why do we need two keywords for defining variables?? Whay have `var` *and* `let`?"

The reasons are somewhat historical. Back when JavaScript was first created, there was only `var`. This works basiccally fine in most cases, but it has some issues in the way it works--its design can sometimes be confusing or downright annoying. So, `let` was created in modern versions of JavaScript, a new keyword for creating variables that works somewhat differently to `var`, fixing its issues in the process.

A couple of simple differences are explained below. We won't go into all the differences now, but you'll start to discover them as you learn more about JavaScript (if you really want to read about them no, feel fre to check out the [MDN `let` reference page](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let)).

For a start, if you write a multiline JavaScript program that declares and initializes a variable, you can actually declare a variable with `var` after you initialize it and it will still work. For example:
```
myName = 'Chris';

function logName() {
    console.log(myName);
}

logName();

var myName;
```

<hr>

**Note**: This won't work when typing individual lines into a JavaScript console, just when running multiple lines of JavaScript in a web document.

<hr>

This works because of **hoisting**--read [var hoisting](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/var#var_hoisting) for more detail on the subject.

Hoisting no longer works with `let`. If we changed `var` to `let` in the above example, it would fail with an error. This is a good thing--declaring a variable after you initialize it results in confusing, harder to understand code.

Secondly, when you use `var`, you can declare the same variable as many times as you like, but with `let` you can't. The following would work:
```
var myName = 'Chris';
var myName = 'Bob';
```
But the following would throw an error on the second line:
```
let myName = 'Chris';
let myName = 'Bob';
```
You'd have to do this instead:
```
let myName = 'Chris';
myName = 'Bob';
```
Again, this is a sensible language decision. There is no reason to redeclare variables--it just makes things more confusing.

For these reasons and more, we recommend that you use `let` as much as possible in your code, rather than `var`. There is no reason to use `var`, unless you need to support old versions of Internet Explorer with your code (it doesn't support `let` un til version 11; the modern Microsoft Edge browser supports `let` just fine).

## Updating a variable

Once a variable has been initialized with a value, you can change (or update) that value by giving it a different value. Try entering the following lines into your console:
```
myName = 'Bob';
myAge = 40;
```

### An aside on variable naming rules

You can call a variable pretty much anything you like, but there are limitations. Generally, you should stick to just using Latin characters (0-9, a-z, A-Z) and the underscore character.

* You shouldn't use other characters because they may causse errors or be hard to understand for an international audience.
* Don't use underscores at the start of variable names--this is used in certain JavaScript constructs to mean specific things, so may get confusing.
* Don't use numbers at the start of variables. This isn't allowed and causes an error.
* A safe convention to stick to is so-called ["lower camel case"](https://en.wikipedia.org/wiki/Camel_case#Variations_and_synonyms), where you stick together multiple words, using loweer case for the whole first word and then capitalize subsequent words. We've been using this for our variable names in the article so far.
* Make variable names intuitive, so they describe the data they contain. Don't just use single letters/numbers, or big long phrases.
* variables aare case sensitive--so `myage` is a different variable from `myAge`.
* One last point: you also need to aavoid using JavaScript reserved words aas your variable names--by this, we mean the words that make up the actual syntax of JavaScript! So, you can't use words like `var`, `function`, `let`, and `for` as variable names. Browsers recognize them as different code items, and so you'll get errors.

<hr>

**Note**: You can find a fairly complete list of reserved keywords to avoid at [Lexical grammar--keywords](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Lexical_grammar#keywords).

<hr>

Good name examples:
```
age
myAge
init
initialColor
finalOutputValue
audio1
audio2
```
Bad name examples:
```
1
a
_12
myage
MYAGE
var
Document
skjfndskjfnbdskjfb
thisisareallylongstupidvariablenameman
```
Try creating a few more variables now, with the above guidance in mind.

## Variable types

There arae a few different types of data we can store in variables. In this section, we'll describe these in brief, then in future articles, you'll learn about them in more detail.