# Making decisions in your code -- conditionals

In any programming language, the code neds to make decisions and carry out actions accordingly depnding on different inputs. For example, in a game, if the player's number of lives is 0, then it's game over. In a weather app, if it is being looked at in the morning, show a sunrise graphic; show stars and a moon if it is nighttime. In this article, we'll explore how so-called conditional statements work in JavaScript.

## You can have it on one condition..!

Human beings (and other animals) make decisions all the time that affect their lives, from small ("should I eat one cookie or two?") to large ("should I stay in my home country and work on my father's farm, or should I move to America and study astrophysics?")

Conditional statements allow us to represnt such decision making in JavaScript, from the choice that must be made (for example, "one cookie or two"), to the resulting outcome of those choices (perhaps the outcome of "ate one cookie" might be "still felt hungry", and the outcome of "ate two cookies" might be "felt full, but mom scolded me for eating all the cookies").

## if...else statements

Let's look at, by far, the most common type of conditional statement you'll use in JavaScript--the humber [`if...else` statement](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else).

### Basic `if...else` syntax

Basic `if...else` syntax looks like the following in [pseudocode](https://developer.mozilla.org/en-US/docs/Glossary/Pseudocode):
```
if (condition) {
    code to run if condition is true
} else {
    run some other code instead
}
```
Here we've got:

1. The keyword `if` followed by some parentheses.
2. A condition to test, placed inside the parentheses (typically "is this value bigger than this other value?", or "does this value exist?"). The condition makes use of the [comparison operators](https://github.com/AndrewSRea/My_Learning_Port/tree/main/JavaScript/JS_First_Steps/Basic_Math_JS#comparison-operators) we discussed in the last module and returns `true` or `false`.
3. A set of curly braces, inside which we have some code--this can be any code we like, and it only runs if the condition returns `true`.
4. The keyword `else`.
5. Another set of curly braces, inside which we have some more code--this can be any code we like, and it only runs if the condition is not `true`--or in other words, the condition is `false`.

This code is pretty human-readable--it is saying "**if** the **condition** returns `true`, run code A, **else** run code B".

You should note that you don't have to include the `else` and the second curly brace block--the following is also prefectly legal code:
```
if (condition) {
    code to run if condition is true
}

run some other code
```
However, you need to be careful here--in this case, the second block of code is not controlled by the conditional statement, so it **always** runs, regardless of whether the condition returns `true` or `false`. This is not necessarily a bad thing, but it might not be what you want--often you want to run one block of code *or* the other, not both.

As a final point, you may sometimes see `if...else` statements written without the curly braces, in the following shorthand style:
```
if (condition) code to run if condition is true
else run some other code instead
```
This is perfectly valid code, but using it is no recommended--it is much easier to read the code and work out what is going on if you use the curly braces to delimit the blocks of code, and use multiple lines and indentation.

### A real example

To understand this syntax better, let's consider a real example. Imagine a child being asked for help with a chore by their mother or father. The parent might say, "Hey, sweetheart! If you help me by going and doing the shopping, I'll give you some extra allowance so you can afford that toy you wanted." In JavaScript, we could represent this like so:
```
let shoppingDone = false;
let childsAllowance;

if (shoppingDone === true) {
    childsAllowance = 10;
} else {
    childsAllowance = 5;
}
```
This code as shown always results in the `shoppingDone` variable returning `false`, meaning disappointment for our poor child. It'd be up to us to provde a mechanism for the parent to set the `shoppingDone` variable to `true` if the child did the shopping.

<hr>

**Note**: You can see a more complex version of this with [Mozilla's example](). <!-- Don't forget this link to your code -->