# Basic math in JavaScript -- numbers and operators

At this point in the course, we discuss math in JavaScript--how we can use [operators](https://developer.mozilla.org/en-US/docs/Glossary/Operator) and other features to successfully manipulate numbers to do our bidding.

## Everybody loves math

Okay, maybe not. Some of us like math, some of us have hated math ever since we had to learn multiplication tables and long division in school, and some of us sit somewhere in between the two. But none of us can deny that math is a fundamental part of life that we can't get very far without. This is especially true when we are learning to program JavaScript (or any other language, for that matter)--so much of what we do relies on processing numerical data, calculating new values, and so on, that you won't be surprised to learn that JavaScript has a full-featured set of math functions available.

This article discusses only the basic parts that you need to know now.

### Types of numbers

In programming, even the humble decimal number system that we all know so well is more complicated than you might think. We use different terms to describe different types of decimal numbers. For example:

* **Integers** are whole numbers, e.g. 10, 400, or -5.
* **Floating point numbers** (floats) have decimal points and decimal places. For example, 12.5, and 56.7786543.
* **Doubles** are a specific type of floating point number that have greaeter precision than standard floating point numbers (meaning that they are accurate to a greater number of decimal place).

We even have different type of number systems! Decimal is base 10 (meaning it uses 0-9 in each column), but we also have things like:

* **Binary** -- The lowest level language of computers; 0s and 1s.
* **Octal** -- Base 8, uses 0-7 in each column.
* **Hexadecimal** -- Base 16, uses 0-9 and then a-f in each column. You may have encountered these numbers before when setting [colors in CSS](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Values_and_units#hexadecimal_values).

**Before you start to get worried about your brain melting, stop right there!** For a start, we are just going to stick to decimal numbers throughout this course; you'll rarely come across a need to start thinking about other types, if ever.

The second bit of good news is that unlike some other programming languages, JavaScript only has one data type for numbers, both integers and decimals--you guessed it, [`Number`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number). This means that whatever type of numbers you are dealing with in JavaScript, you handle them in exactly the same way.

<hr>

**Note**: Actually, JavaScript has a second number type, [BigInt](https://developer.mozilla.org/en-US/docs/Glossary/BigInt), used for very, very large integers. But for the purposes of this course, we'll just worry about `Number` values.

<hr>

### It's all numbers to me

Let's quickly play with some numbers to reacquaint ourselves with the basic syntax we need. Enter the commands listed below into your **developer tools JavaScript console**.

1. First of all, let's declare a couple of variables and initialize them with an integer and a float, respectively, then type the variable names back in to check that everything is in order:
```
let myInt = 5;
let myFloat = 6.667;
myInt;
myFloat;
```

2. Number values are typed in without quote marks--try declaring and initializing a couple more variables containing numbers before you move on.
3. Now let's check that both our original variables are of the same datatype. There is an operator called [`typeof`]() in JavaScript that does this. Enter the below two lines as shown:
```
typeof myInt;
typeof myFloat;
```
You should get `"number"` returned in both cases--this makes things a lot easier for us than if different numbers had different data types, and we had to deal with them in different ways. Phew!

### Useful Number methods

The [`Number`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) object, an instance of which represents all standard numbers you'll use in your JavaScript, has a number of useful methods available on it for you to manipulate numbers. We don't cover these in detail in this article because we wanted to keep it as a simple introduction and only cover the real basic essentials for now; however, once you've read through this module a couple of times, it is worth going to the object reference pages and learning more about what's available. <!-- perhaps an aside for the `Number` object? -->

For example, to round your number to a fixed number of decimal places, use the [`toFixed()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toFixed) method. Type the following lines into your browser's **console**:
```
let lotsOfDecimal = 1.766584985675746364;
lotsOfDecimal;
let twoDecimalPlaces = lotsOfDecimal.toFixed(2);
twoDecimalPlaces;
```

### Converting to number data types

Sometimes you might end up with a number that is stored as a string type, which makes it difficult to perform calculations with it. This most commonly happens when data is entered into a [form](https://developer.mozilla.org/en-US/docs/Learn/Forms) input, and the [input type is text](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/text). <!-- gonna add a Web Forms folder? --> There is a way to solve this problem--passing the string value into the [`Number()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/Number) constructor to return a number version of the same value.

For example, try typing these lines into your console:
```
let myNumber = '74';
myNumber + 3;
```
You end up with the result 743, not 77, because `myNumber` is actually defined as a string. You can test this by typing the following:
```
typeof myNumber;
```
To fix the calculation, you can do this:
```
Number(myNumber) + 3;
```

## Arithmetic operators

Arithmetic operators are the basic operators that we use to do sums in JavaScript:

| Operator | Name | Purpose | Example |
| --- | --- | --- | --- |
| + | Addition | Adds two numbers together. | 6 + 9 |
| - | Subtraction | Subtracts the right number from the left. | 20 - 15 |
| * | Multiplication | Multiplies two numbers together. | 3 * 7 |
| / | Division | Divides the left number by the right. | 10 / 5 |
| % | Remainder (sometimes called modulo) | Returns the remainder left over after you've divided the left number into a number of integer portions equal to the right number. | 8 % 3 (returns 2, as 3 goes into 8 twice, leaving 2 left over) |
| ** | Exponent | Raises a `base` number to the `exponent` power, that is, the `base` number multipled by itself, `exponent` times. It was first introduced in ECMAScript 2016. | 5 ** 2 (returns 25, which is the same as 5 * 5) |

<hr>

**Note**: You'll sometimes see numbers involved in arithmetic referred to as [operands](https://developer.mozilla.org/en-US/docs/Glossary/Operand).

<hr>

**Note**: You may sometimes see exponents expressed using the older [`Math.pow()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/pow) method, which works in a very similar way. For example, in `Math.pow(7, 3)`, 7 is the base and 3 is the exponent, so the result of the expression is 343. `Math.pow(7, 3)` is equivalent to `7**3`.

<hr>

We probably don't need to teach you how to do basic math, but we would like to test your understanding of the syntax involved. Try entering the examples below into your **developer tools JavaScript console** to familiarize yourself with the syntax.

1. First, try entering some simple examples of your own, such as:
```
10 + 7
9 * 8
60 % 3
```

2. You can also try declaring and initializing some numbers inside variables, and try using those in the sums--the variables will behave exactly like the values they hold for the purposes of the sum. For example:
```
let num1 = 10;
let num2 = 50;
9 * num1;
num1 ** 3;
num2 / num1;
```

3. Last for this section, try entering some more complex expressions, such as:
```
5 + 10 * 3
num2 % 9 * num1;
num2 + num1 / 8 + 2;
```

Some of this last set of calculations might not give you quite the result you were expecting; the section below might well give the answer as to why.

### Operator precendence

Let's look at the last example from above, assuming that `num2` holds the value 50 and `num1` holds the value 10 (as originally stated above):
```
num2 + num1 / 8 + 2;
```
As a human being, you may read this as *"50 plus 10 equals 60"*, then *"8 plus 2 equals 10"*, and finally *"60 divided by 10 equals 6"*.

But the browser does *"10 divided by 8 equals 1.25"*, then *"50 plus 1.25 plus 2 equals 53.25"*.

This is because of **operator precendence**--some operators are applied before others when calculating the result of a calculation (referred to as an *expression*, in programming). Operator precendence in JavaScript is the same as is taught in math classes in school - Multiply and divide are always done first, then add and subtract (the calculation is always evaluated from the left to right).

If you want to override operator precendence, you can put parentheses round the parts that you want to be explicitly dealt with first. So, to get a result of 6, we could do this:
```
(num2 + num1) / (8 + 2);
```
Try it and see.

<hr>

**Note**: A full list of all JavaScript operators and their precendence can be found in [Expressions and operators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#operator_precedence).

<hr>

## Increment and decrement operators

Sometimes you'll want to repeatedly add or subtract one to or from a numeric variable value. This can be conveniently done using the increment (`++`) and decrement (`--`) operators. We used `++` in our "Guess the number" game back in our [first splash into JavaScript](https://github.com/AndrewSRea/My_Learning_Port/tree/main/JavaScript/JS_First_Steps/First_Splash_JS#a-first-splash-into-javascript) article, when we added 1 to our `guessCount` variable to keep track of how many guesses the user had left after each turn.
```
guessCount++;
```

<hr>

**Note**: These operators are most commonly used in [loops](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration), which you'll learn about later on in the course. For example, say you wanted to loop through a list of prices, and add sales tax to each one. You'd use a loop to go through each value in turn and do the necessary calculation for adding the sales tax in each case. The incrementor is usedto move to the next value when needed. We've actually provided a simple example showing how this is done--[check it out live](), <!-- Git page --> and [look at the source code](https://github.com/AndrewSRea/My_Learning_Port/blob/main/JavaScript/JS_First_Steps/Basic_Math_JS/loop.html) to see if you can spot the incrementors! We'll look at loops in detail later on in the course.

<hr>

Let's try playing with these in your console. For a start, note that you can't apply these directly to a number, which might seem strange, but we are assigning a variable a new updated value, not operating on the value itself. The following will return an error:
```
3++;
```
So, you can only increment an existing variable. Try this:
```
let num1 = 4;
num1++;
```
Okay, strangeness number 2! When you do this, you'll see a value of 4 returned--this is because the browser returns the current value, *then* increments the variable. You can see that it's been incremented if you return the variable value again:
```
num1;
```
The same is true of `--`: try the following:
```
let num2 = 6;
num2--;
num2;
```

<hr>

**Note**: You can make the browser do it the other way round--increment/decrement the variable *then* returns the value--by putting the operator at the start of the variable instead of the end. Try the above examples again, but this time use `++num1` and `--num2`.

<hr>

## Assignment operators

