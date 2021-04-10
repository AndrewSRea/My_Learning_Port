# Looping code

Programming languages are very useful for rapidly completing repetitive tasks, from multiple basic calculations to just about any other situation where you've got a lot of similar items of work to complete. Here we'll look at the loop structures available in JavaScript that handle such needs.

## Keep me in the loop

Loops, loops, loops. As well as being associated with [popular breakfast cereals](https://en.wikipedia.org/wiki/Froot_Loops), [roller coasters](https://en.wikipedia.org/wiki/Vertical_loop), and [musical production](https://en.wikipedia.org/wiki/Loop_(music)), they are also a critical concept in programming. Programming loops are all to do with doing the same thing over and over again, which is termed **iteration** in programming speak.

Let's consider the case of a farmer who is making sure he has enough food to feed his family for the week. He might use the following loop to achieve this:

![Image of a pseudocode loop](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Looping_code/loop_js-02-farm.png)

A loop usually has one or more of the following features:

* A **counter**, which is initialized with a certain value--this is the starting point of the loop ("Start: I have no food", above).
* A **condition**, which is a true/false test to determine whether the loop continues to run, or stops--usually when the counter reaches a certain value. This is illustrated by "Have I got enough food?" above. Let's say he needs 10 portions of food to feed his family.
* An **iterator**, which generally increments the counter by a small amount on each successive loop until the condition is no longer `true`. We haven't explicitly illustrated this above, but we could think about the farmer being able to collect, say 2 portions of food per hour. After each hour, the amount of food he has collected is incremented by two, and he checks whether he has enough food. If he has reached 10 portions (the point where the condition is no longer true, so the loop exits), he can stop collecting and go home.

In [pseudocode](https://developer.mozilla.org/en-US/docs/Glossary/Pseudocode), this would look something like the following:
```
loop (food = 0; foodNeeded = 10) {
    if (food >= foodNeeded) {
        exit loop;
        // We have enough food; let's go home
    } else {
        food += 2;   // Spend an hour collecting 2 more food
        // loop will then run again
    }
}.
```
So the amount of food needed is set at 10, and the amount the farmer currently has is set at 0. In each iteration of the loop, we check whether the amount of food the farmer has is larger or equal to the amount he needs. If so, we can exit the loop. If not, the farmer spends an hour collecting two portions of food and the loop runs again.

### Why bother?

At this point, you probably understand the high-level concepts behind loops, but you are probably thinking "OK, great, but how does this help me write better JavaScript code?" As we said earlier, **loops are all to do with doing the same thing over and over again**, which is great for **rapidly completing repetitive tasks**.

Often, the code will be slightly different on each successive iteration of the loop, which means that you can complete a whole load of tasks that are similar but slightly different; if you've got a lot of different calculations to do, you want to do each different one, not the same one over and over again!

Let's look at an example to perfectly illustrate why loops are such a good thing. Let's say we wanted to draw 100 random circles on a [`<canvas>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/canvas) element.

(See Mozilla's example of looping code in the accompanying [`random-canvas-circles.html`](https://github.com/AndrewSRea/My_Learning_Port/blob/main/JavaScript/JS_Building_Blocks/Looping_Code/random-canvas-circles.html) file.)

You don't have to understand all the code for now, but let's look at the part of the code that actually draws the 100 circles:
```
for (let i = 0; i < 100; i++) {
    ctx.beginPath();
    ctx.fillStyle = 'rgba(255,0,0,0.5)';
    ctx.arc(random(WIDTH), random(HEIGHT), random(50), 0, 2 * Math.PI);
    ctx.fill();
}
```
* `random(x)`, defined earlier in the code, returns a whole number between `0` and `x-1`.
* `WIDTH` and `HEIGHT` are the width and height of the inner browser window.

You should get the basic idea--we are using a loop to run 100 iterations of this code, each one of which draws a circle in a random position on the page. The amount of code needed would be the same whether we were drawing 100 circles, 1000, or 10,000. Only one number has to change.

If we weren't using a loop here, we'd have to repeat the following code for every circle we wanted to draw:
```
ctx.beginPath();
ctx.fillStyle = 'rgba(255,0,0,0.5)';
ctx.arc(random(WIDTH), random(HEIGHT), random(50), 0, 2 * Math.PI);
ctx.fill();
```
This would get very boring and difficult to maintain very quickly. Loops really are the best.

## The standard for loop

Let's start exploring some specific loop constructs. The first, which you'll use most of the time, is the [for](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for) loop. This has the following syntax:
```
for (initializer; condition; final-expression) {
    // code to run
}
```
Here we have:

1. The keyword `for`, followed by some parentheses.
2. Inside the parentheses, we have three items, separated by semi-colons:
    1. An **initializer**--this is usually a variable set to a number, which is incremented to count the number of times the loop has run. It is also sometimes referred to as a **counter variable**.
    2. A **condition**--as mentioned before, this defines when the loop should stop looping. This is generally an expression featuring a comparison operator, a test to see if the exit condition has been met.
    3. A **final-expression**--this is always evaluated (or run) each time the loop has gone through a full iteration. It usually serves to increment (or, in some cases, decrement) the counter variable, to brind it closer to the point where the condition is no longer `true`.
3. Some curly braces that contain a block of code--this code will be run each time the loop iterates.

Let's look at a real example so we can visualize what these do more clearly.
```
const cats = ['Bill', 'Jeff', 'Pete', 'Biggles', 'Jasmin'];
let info = 'My cats are called ';
const para = document.querySelector('p');

for (let i = 0; i < cats.length; i++) {
    info += cats[i] + ', ';
}

para.textContent = info;
```
This gives us the following output:

<br>
<p style="font-family: serif;">My cats are called Bill, Jeff, Pete, Biggles, Jasmin, </p>
<br>

This shows a loop is used to iterate over the items in an array and do something with each of them--a very common pattern is JavaScript. Here:

1. The counter variable (sometimes known as an initializer or an iteration variable), `i`, starts at `0` (`let i = 0`).
2. The loop has been told to run until `i` is no longer smaller than the length of the `cats` array. This is important--the condition is the condition under which the loop will still run. So, in this case, while `i < cats.length` is still true, the loop will still run.
3. Inside the loop, we concatenate the current loop item (`cats[i]`, which is `cats[whatever i is at the time]`) along with a comma and space, onto the end of the `info` variable. So:
    1. During the first run, `i = 0`, therefore `cats[0] + ', '` (which is equal to `Bill, `) will be concatenated onto `info`.
    2. During the second run, `i = 1`, so `cats[1] + ', '` (which is equal to `Jeff, `) will be concatenated onto `info`.
    3. And so on. After each time the loop has run, 1 will be added to `i` (`i++`), then the process will start again.
4. When `i` becomes equal to `cats.length` (in this case, 5), the loop will stop, and the browser will move on to the next bit of code below the loop.

<hr>

**Note**: We have made the condition `i < cats.length`, not `i <= cats.length`, because computers count from 0, not 1 -- we are starting `i` at `0`, and going up to `i = 4` (the index of the last array item). `cats.length` returns 5, as there are 5 items in the array, but we don't want to get up to `i = 5`, as that would return `undefined` for the last item (there is no array item with an index of 5). So, therefore, we want to go up to 1 less than `cats.length` (`i <`), not the same as `cats.length` (`i <=`).

<hr>

**Note**: A common mistake with conditions is making them use "equal to" (`===`) rather than say "less than or equal to" (`<=`). If we wanted to run our loop up to `i = 5`, the exit condition would need to be `i <= cats.length`. If we set it to `i === cats.length`, the loop would not run at all because `i` is not equal to `5` on the first loop iteration, so it would stop immediately.

<hr>

One small problem we are left with is that the final output sentence isn't very well-formed:

<br>
<p style="font-family: serif; font-weight: 400;">My cats are called Bill, Jeff, Pete, Biggles, Jasmin, </p>
<br>

Ideally, we want to change the concatenation on the final loop iteration so that we haven't got a comma on the end of the sentence. Well, no problem--we can quite happily insert a conditional inside our for loop to handle this special case:
```
for (let i = 0; i < cats.length; i++) {
    if ( i === cats.length - 1) {
        info += 'and' + cats[i] + '.';
    } else {
        info += cats[i] + ', ';
    }
}
```
<hr>

:exclamation: **Important**: With for -- as with all loops -- you must make sure that the initializer is incremented or, depending on the case, decremented, so that it eventually reaches the point where the condition is not true. If not, the loop will go on forever, and either the browser will force it to stop, or it will crash. This is called an **infinite loop**.

<hr>

## Exiting loops with break

If you want to exit a loop before all the iterations have been completed, you can use the [break](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/break) statement. We already met this in the previous article when we looked at [switch statements](https://github.com/AndrewSRea/My_Learning_Port/tree/main/JavaScript/JS_Building_Blocks/Conditionals#switch-statements)--when a case is met in a switch statement that matches the input expression, the `break` statement immediately exits the switch statement and moves on to the code after it.

It's the same with loops--a `break` statement will immediately exit the loop and make the browser move on to any code that follows it.

Say we wanted to search through an array of contacts and telephone numbers and return just the number we wanted to find? First, some simple HTML--a text `<input>` allowing us to enter a name to search for, a `<button>` element to submit a search, and a `<p>` element to display the result in:
```
<label for="search">Search by contact name: </label>
<input id="search" type="text">
<button>Search</button>

<p></p>
```
Now on to the JavaScript:
```
const contacts = ['Chris:2232322', 'Sarah:3453456', 'Bill:7654322', 'Mary:9998769', 'Dianne:9384975'];
const para = document.querySelector('p');
const input = document.querySelector('input');
const btn = document.querySelector('button');

btn.addEventListener('click', function() {
    let searchName = input.value.toLowerCase();
    input.value = '';
    input.focus();
    for (let i = 0; i < contacts.length; i++) {
        let splitContact = contacts[i].split(':');
        if (splitContact[0].toLowerCase() === searchName) {
            para.textContent = splitContact[0] + '\'s number is ' + splitContact[1] + '.';
            break;
        } else if (i === contacts.length - 1) {
            para.textContent = 'Contact not found.';
        }
    }
});
```
1. First of all, we have some variable definitions--we have an array of contact information, with each item being a string containing a name and phone number separated by a colon.
2. Next, we attach an event listener to the button (`btn`) so that when it is pressed, some code is run to perform the search and return the results.
3. We store the value entered into the text input in a variable called `searchName`, before then emptying the text input and focusing it again, ready for the next search. Note that we also run the `toLowerCase()` method on the string, so that searches will be case-insensitive.
4. Now on to the interesting part, the for loop:
    1. We start the counter at `0`, run the loop until the counter is no longer less than `contacts.length`, and increment `i` by 1 after each iteration of the loop.
    2. Inside the loop, we first split the current contact (`contacts[i]`) at the colon character, and store the resulting twwo values in an array called `splitContact`.
    3. We then use a conditional statement to test whether `splitContact[0]` (the contact's name, again lower-cased with `toLowerCase()`) is equal to the inputted `searchName`. If it is, we enter a string into the paragraph to report what the contact's number is, and use `break` to end the loop.
5. After (`contacts.length - 1`) iterations, if the contact name does not match the entered search, the paragraph text is set to "Contact not found.", and the loop continues looping until the condition is no longer true.

<hr>

**Note**: You can also find Mozilla's example of this code [here](https://github.com/AndrewSRea/My_Learning_Port/blob/main/JavaScript/JS_Building_Blocks/Looping_Code/contact-search.html).

<hr>

## Skipping iterations with continue

The [continue]() statement works in a similar manner to `break`, but instead of breaking out of the loop entirely, it skips to the next iteration of the loop. Let's look at another example that takes a number as an input, and returns only the numbers that are squares of integers (whole numbers).

The HTML is basically the same as the last example--a simple text input, and a paragraph for output. The JavaScript is mostly the same, too, although the loop itself is a bit different:
```
let num - input.value;

for (let i = 1; i <= num; i++) {
    let sqRoot = Math.sqrt(i);
    if (Math.floor(sqRoot) !== sqRoot) {
        continue;
    }

    para.textContent += i + ' ';
}
```
You can see this example of Mozilla's code in action [here]().