# Making decisions in your code -- conditionals

In any programming language, the code neds to make decisions and carry out actions accordingly depnding on different inputs. For example, in a game, if the player's number of lives is 0, then it's game over. In a weather app, if it is being looked at in the morning, show a sunrise graphic; show stars and a moon if it is nighttime. In this article, we'll explore how so-called conditional statements work in JavaScript.

## You can have it on one condition..!

Human beings (and other animals) make decisions all the time that affect their lives, from small ("should I eat one cookie or two?") to large ("should I stay in my home country and work on my father's farm, or should I move to America and study astrophysics?")

Conditional statements allow us to represnt such decision making in JavaScript, from the choice that must be made (for example, "one cookie or two"), to the resulting outcome of those choices (perhaps the outcome of "ate one cookie" might be "still felt hungry", and the outcome of "ate two cookies" might be "felt full, but mom scolded me for eating all the cookies").

## if...else statements

Let's look at, by far, the most common type of conditional statement you'll use in JavaScript--the humber [`if...else` statement](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else).

### Basic if...else syntax

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

**Note**: You can see a more complex version of this with [Mozilla's example](https://github.com/AndrewSRea/My_Learning_Port/blob/main/JavaScript/JS_Building_Blocks/Conditionals/allowance-updater.html).

<hr>

### else if

The last example provided us with two choices, or outcomes--but what if we want more than two?

There is a way to chain on extra choices/outcomes to your `if...else`--using `else if`. Each extra choice requires an additional block to put in between `if() { ... }` and `else { ... }`--check out the following more involved example, which could be part of a simple weather forecast application:
```
<label for="weather">Select the weather type today: </label>
<select id="weather">
    <option value="">--Make a choice--</option>
    <option value="sunny">Sunny</option>
    <option value="rainy">Rainy</option>
    <option value="snowing">Snowing</option>
    <option value="overcast">Overcast</option>
</select>

<p></p>
```
```
const select = document.querySelector('select');
const para = document.querySelector('p');

select.addEventListener('change', setWeather);

function setWeather() {
    const choice = select.value;

    if (choice === 'sunny') {
        para.textContent = 'It is nice and sunny outside today. Wear shorts! Go to the beach, or the park, and get an ice cream.';
    } else if (choice === 'rainy') {
        para.textContent = 'Rain is falling outside; take a rain coat and an umbrella, and don\'t stay out for too long.';
    } else if (choice === 'snowing') {
        para.textContent = 'The snow is coming down - it is freezing! Best to stay in with a cup of hot chocolate, or go build a snowman.';
    } else if (choice === 'overcast') {
        para.textContent = 'It isn\'t raining, but the sky is grey and gloomy; it could turn any minute, so take a rain coat just in case.';
    } else {
        para.textContent = '';
    }
}
```
1. Here we've got an HTML [`<select>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/select) element allowing us to make different weather choices, and a simple paragraph.
2. In the JavaScript, we are storing a reference to both the `<select>` and `<p>` eleemnts, and adding an event listener to the `<select>` element so that when its value is changed, the `setWeather()` function is run.
3. When this function is run, we first set a variable called `choice` to the current value selected in the `<select>` element. We then use a conditional statement to show different text inside the paragraph depending on what the vallue of `choice` is. Notice how all the conditions are tested in `else if() { ... }` blocks, except for the first one, which is tested in an `if() { ... }` block.
4. The very last choice, inside the `else { ... }` block, is basically a "last reesort" option --the code inside it will be run if none of the conditions are `true`. In this case, it serves to empty the text out of the paragraph if nothing is selected. For example, if a user decides to re-select the "--Make a choice--" placeholder option shown at the beginning.

<hr>

**Note**: You can also find Mozilla's example of this code [here](https://github.com/AndrewSRea/My_Learning_Port/blob/main/JavaScript/JS_Building_Blocks/Conditionals/simple-else-if.html).

<hr>

### A note on comparison operators

Comparison operators are used to test the conditions inside our conditional statements. We first looked at comparison operators back in our [Basic math in JavaScript -- numbers and operators](https://github.com/AndrewSRea/My_Learning_Port/tree/main/JavaScript/JS_First_Steps/Basic_Math_JS#comparison-operators) article. OUr choices are:

* `===` and `!==` -- test if one value is identical to, or not identical to, another.
* `<` and `>` -- test if one value is less than or greater than another.
* `<=` and `>=` -- test if one value is less than or equal to, or greater than or equal to, another.

<hr>

**Note**: Review the material at the previous link if you want to refresh your memories on these.

<hr>

We wanted to make a special mention of testing Boolean (`true`/`false`) values, and a common pattern you'll come across again and again. Any value that is not `false`, `undefined`, `null`, `0`, `NaN`, or an empty string (`''`) actually returns `true` when tested as a conditional statement, therefore you can use a variable name on its own to test whetheer it is `true`, or even that it exists (that is, it is not undefined). So, for example:
```
let cheese = 'Cheddar';

if (cheese) {
    console.log('Yay! Cheese available for making cheese on toast.');
} else {
    console.log('No cheese on toast for you today.');
}
```
And, returning to our previous exxample about the child doing a chore for their parent, you could write it like this:
```
let shoppingDon = false;
let childsAllowance;

if (shoppingDone) {   // don't need to explicitly specify `=== true`
    childsAllowance = 10;
} else {
    childsAllowance = 5;
}
```

### Nesting if...else

It is perfectly OK to put one `if...else` statement insidee another one--to nest them. For example, we could update our waether forecast application to show a further set of choices depending on what the temperature is:
```
if (choice === 'sunny') {
    if (temperature < 86) {
        para.textContent = 'It is ' + temperature + ' degrees outside - nice and sunny. Let\'s go out to the beach, or the park, and get an ice cream.';
    } else if (temperature >= 86) {
        para.textContent = 'It is ' + temperature + ' degrees outside - REALLY HOT! If you want to go outside, make sure to put some sunscreen on.';
    }
}
```
Even though the code all works together, each `if...else` statement works completely independently of the other one.

### Logical operators: AND, OR, and NOT

If you want to test multiple conditions without writing nested `if...else` statements, [logical operators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators) can help you. When used in conditions, the first two do the following:

* `&&` -- AND; allows you to chain together two or more expressions so that all of them have to individually evaluate to `true` for the whole expression to return `true`.
* `||` -- OR; allows you to chain together two or more expressionsso that one or more of them have to individually evaluate to `true` for the whole expression to return `true`.

To give you an AND example, the previous example snippet can be rewritten to this:
```
if (choice === 'sunny' && temperature < 86) {
    para.textContent = 'It is ' + temperature + ' degrees outside - nice and sunny. Let\'s go out to the beach, or the park, and get an ice cream.';
} else if (choice === 'sunny' && temperature >= 86) {
    para.textContent = 'It is ' + temperature + ' degrees outside - REALLY HOT! If you want to go outside, make sure to put some sunscreen on.';   
}
```
So, for example, the first code block will only be run if `choice === 'sunny'` *and* `temperature < 86` return `true`.

Let's look at a quick OR example:
```
if (iceCreamVanOutside || houseStatus === 'on fire') {
    console.log('You should leave the house quickly.');
} else {
    console.log('Probably should just stay in then.');
}
```
The last type of logical operator, NOT, expressed by the `!` operator, can be used to negate an expression. Let's combine it with OR in the above example:
```
if (!(iceCreamVanOutside || houseStatus === 'on fire')) {
    console.log('Probably should just stay in then.');
} else {
    console.log('You should leave the house quickly.');
}
```
In this snippet, if the OR statement returns `true`, the NOT operator will negate it so that the overall expression returns `false`.

You can combine as many logical statements together as you want, in whatever structure. The following example executes the code inside only if both OR statements return true, meaning that the overall AND statement will return true:
```
if ((x === 5 || y > 3 || z <= 10) && (loggedIn || username === 'Steve')) {
    // run the code
}
```
A common mistake when using the logical OR operator in conditional statements is to try to state the variable whose value you are checking once, and then give a list of values it could be to return true, separated by `||` (OR) operators. For example:
```
if (x === 5 || 7 || 10 || 20) {
    // run my code
}
```
In this case, the condition inside `if (...)` will always evaluate to true since 7 (or any other non-zero value) always evaluates to `true`. This condition is actually saying "if x equals 5, or 7 is true -- which it always is". This is logically not what we want! To make this work, you've got to specify a complete test either side of each OR operator:
```
if (x === 5 || x === 7 || x === 10 || x === 20) {
    // run my code
}
```

## switch statements

`if...else` statements do the job of enabling conditional code well, but they are not without their downsides. They are mainly good for cases where you've got a couple of choices, and each one requires a reasonable amount of code to be run, and/or the conditions are complex (for example, multiple logical operators). For cases where you just want to set a variable to a certain choice of value or print out a particular statement depending on a condition, the syntax can be a bit cumbersome, especially if you've got a large numbeer of choices.

In such a case, [`switch` statements](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch) are your friend--they take a single expression/value as an input, and then look through a number of choices until they find one that matches that value, executing the corresponding code that goes along with it. Here's some more pseudocode, to give you an idea:
```
switch (expression) {
    case choice1:
        run this code
        break;
    
    case choice2:
        run this code instead
        break;

    // include as many cases as you like

    default:
        actually, just run this code
}
```

Here we've got:

1. The keyword `switch`, followed by a set of parentheses.
2. An expression or value inside the parentheses.
3. The keyword `case`, followed by a choice that the expression/value could be, followed by a colon.
4. Some code to run if the choice matches the expression.
5. A `break` statement, followed by a semi-colon. If the previous choice matches the expression/value, the browser stops executing the code block here, and moves on to any code that appears below the swtich statement.
6. As many other cases (bullets 3-5) as you like.
7. The keyword `default`, followed by exactly the same code pattern as one of the cases (bullets 3-5), except that `default` does not have a choice after it, and you don't need to `break` statement as there is nothing to run after this in the block anyway. This is the default option that runs if none of the choices match.

<hr>

**Note**: You don't have to include the `default` section--you can safely omit it if there is no chance that the expression could end up equaling an unknown value. If there is a chance of this, however, you need to include it to handle unknown cases.

<hr>

## A switch example

Let's have a look at a real example--we'll rewrite our weather foreccast application to use a switch statement instead:
```
<label for="weather">Select the weather type today: </label>
<select id="weather">
    <option value="">--Make a choice--</option>
    <option value="sunny">Sunny</option>
    <option value="rainy">Rainy</option>
    <option value="snowing">Snowing</option>
    <option value="overcast">Overcast</option>
</select>

<p></p>
```
```
const select = document.querySelector('select');
const para = document.querySelector('p');

select.addEventListener('change', setWeather);

function setWeather() {
    const choice = select.value;

    switch (choice) {
        case 'sunny':
            para.textContent = 'It is nice and sunny outside today. Wear shorts! Go to the beach, or the park, and get an ice cream.';
            break;
        case 'rainy':
            para.textContent = 'Rain is falling outside; take a rain coat and an umbrella, and don\'t stay out for too long.';
            break;
        case 'snowing':
            para.textContent = 'The snow is coming down - it is freezing! Best to stay in with a cup of hot chocolate, or go build a snowman.';
            break;
        case 'overcast':
            para.textContent = 'It isn\'t raining, but the sky is grey and gloomy; it could turn any minute, so take a rain coat just in case.';
            break;
        default:
            para.textContent = '';
    }
}
```
<hr>

**Note**: You can also find Mozilla's example of this code [here](https://github.com/AndrewSRea/My_Learning_Port/blob/main/JavaScript/JS_Building_Blocks/Conditionals/simple-switch.html).

<hr>

## Ternary operator

There is one final bit of syntax we want to introduce to you before we get you to play with some examples. The [ternary or conditional operator]() is a small bit of syntax that tests a condition and returns one value/expression if it is `true`, and another if it is `false`--this can be useful in some situations, and can take up a lot less code than an `if...else` block if you have two choices that are chosen between via a `true`/`false` condition. The pseudocode looks like this:
```
( condition ) ? run this code : run this code instead
```
So, let's look at a simple example:
```
let greeting = ( isBirthday ) ? 'Happy birthday, Mrs. Smith - we hop you have a great day!' : 'Good morning, Mrs. Smith.';
```
Here we have a variable called `isBirthday`--if this is `true`, we give our guest a happy birthday message; if not, we give her the standard daily greeting.

### Ternary operator example

The ternary operator is not just for setting variable values; you can also run functions, or lines of code--anything you like. The following live example shows a simple theme chooser where the styling for the site is applied using a ternary operator.
```
<label for="theme">Select them: </label>
<select id="theme">
    <option value="white">White</option>
    <option value="black">Black</option>
</select>

<h1>This is my website</h1>
```
```
const select = document.querySelector('select');
const html = document.querySelector('html');
document.body.style.padding = '10px';

function update(bgColor, textColor) {
    html.style.backgroundColor = bgColor;
    html.style.color = textColor;
}

select.onchange = function() {
    ( select.value === 'black' ) ? update('black','white') : update('white','black');
}
```
Here we've got a `<select>` element to choose a theme (black or white), plus a simple `<h1>` to display a website title. We also have a function called `update()`, which takes two colors as parameters (inputs). The website's background color is set to the first provided color, and its text color is set to the second provided color.

Finally, we've also got an [onchange]() event listener that serves to run a function containing a ternary operator. It starts with a test condition--`select.value === 'black'`. If this returns `true`, we run the `update()` function with parameters of black and white, meaning that we end up with a background color of black and a text color of white. If it returns `false`, we run the `update()` function with parameters of white and black, meaning that the site colors are inverted.

<hr>

**Note**: You can also find Mozilla's example of the code just above [here](https://github.com/AndrewSRea/My_Learning_Port/blob/main/JavaScript/JS_Building_Blocks/Conditionals/simple-ternary.html).

## Active learning: A simple calendar

In this example, you are going to help us finish a simple calendar application. In the code, you've got:

* A `<select>` element to allow the user to choose between different months.
* An `onchange` event handler to detect when the value selected in the `<select>` menu is changed.
* A function called `createCalendar()` that draws the calendar and displays the correct month in the `<h1>` element.

We need you to write a conditional statement inside the `onchange` handler function, just below the `// ADD CONDITIONAL HERE` comment. It should:

1. Look at the selected month (stored in the `choice` variable. This will be the `<select>` element value after the value changes, so "January", for example).
2. Set a variable called `days` to be equal to the number of days in the selected month. To do this, you'll have to look up the number of days in each month of the year. You can ignore leap years for the purposes of this example.

Hints:

* You are advised to use the logical OR to group multiple months together into a single condition; many of them share the same number of days.
* Think about which number of days is the most common, and use that as a default value.

(See my accompanying [conditionals-active-learning.html](https://github.com/AndrewSRea/My_Learning_Port/blob/main/JavaScript/JS_Building_Blocks/Conditionals/conditionals-active-learning.html) file to see this in action.)

## Active learning: More color choices!

In this example, you are going to take the ternary operator example we saw earlier and convert the ternary operator into a switch statement to allow us to apply more choices to the simple website. Look at the `<select>`--this time you'll see that it has not two theme options, but five. You need to add a switch statement just underneath the `// ADD SWITCH STATEMENT` comment:

* It should accept the `choice` variable as its input expression.
* For each case, the choice should equal one of the possible `<option> value`s that can be selected. That is, `white`, `black`, `purple`, `yellow`, or `psychedelic`.
* For each case, the `update()` function should be run, and be passed two color values, the first one for the background color, and the second one for the text color. Remember that color values are strings, so need to be wrapped in quotes.

(See my accompanying [conditionals-active-learning-2.html]() file to see this in action.)