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

**Note**: You may sometimes see exponents expressed using the older [`Math.pow()`]() method, which works in a very similar way. For example, in `Math.pow(7, 3)`, 7 is the base and 3 is the exponent, so the result of the expression is 343. `Math.pow(7, 3)` is equivalent to `7**3`.

<hr>
