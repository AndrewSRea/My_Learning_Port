# A first splash into JavaScript

Now you've learned something about the theory of JavaScript and what you can do with it, we are going to give you an idea of what the process of creating a simple JavaScript program is like, by guiding you through a practical tutorial. Here you'll build up a simple "Guess the number" game, step by step.

We want to set really clear expectations here: You won't be expected to learn JavaScript by the end of this article, or even understand all the code we are asking you to write. Instead, we want to give you an idea of how JavaScript's features work together, and what writing JavaScript feels like. In subsequent articles, you'll revisit all the features shown here in a lot more detail, so don't worry if you don't understand it all immediately!

<hr>

**Note**: Many of the code features you'll see in JavaScript are the same as in other programming languages--functions, loops, etc. The code syntax looks different, but the concepts are still largely the same.

<hr>

## Thinking like a programmer

One of the hardest things to learn in programming is not the syntax you need to learn, but how to apply it to solve real world problems. You need to start thinking like a programmer--this generally involves looking at descriptions of what your program needs to do, working out what code features are needed to achieve those things, and how to make them work together.

This requires a mixture of hard work, experience with the progamming syntax, and practice--plus, a bit of creativity. The more you code, the better you'll get at it. We can't promise that you'll develop "programmer brain" in five minutes, but we will give you plenty of opportunity to practice thinking like a programmer throughout the course.

With that in mind, let's look at the example we'll be building up in this article, and review the general process of dissecting it into tangible tasks.

## Example - Guess the number game

In this article, we'll show you how to build up the simple game you can see [here](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/A_first_splash#example_%E2%80%94_guess_the_number_game). <!-- swap with your own version (GitHub pages) -->

Have a go at playing it--familiarize yourself with the game before you move on.

Let's imagine your boss has given you the following brief for creating this game:

<hr>

<h4>I want you to create a simple guess the number type game. It should choose a random number between 1 and 100, then challenge the player to guess the number in 10 turns. After each turn, the player should be told if they are right or wrong, and if they are wrong, whether the guess was too low or too high. It should also tell the player what numbers they previously guessed. The game will end once the player guesses correctly, or once they run out of turns. When the game ends, the player should be given an option to start playing again.</h4>

<hr>

Upon looking at this brief, the first thing we can do is start breaking it down into simple actionable tasks, in as much of a programmer mindset as possible:

1. Generate a random number between 1 and 100.
2. Record the turn number the player is on. Start it on 1.
3. Provide the player with a way to guess what the number is.
4. Once a guess has been submitted, first record it somewhere so the user can see their previous guesses.
5. Next, check whether it is the correct number.
6. If it is correct:
    1. Display congratulations message.
    2. Stop the player from being able to enter more guesses. (This would mess the game up.)
    3. Display control allowing the player to restart the game.
7. If it is wrong and the player has turns left:
    1. Tell the player they are wrong and whether their guess was too high or too low.
    2. Allow them to enter another guess.
    3. Increment the turn number by 1.
8. If it is wrong and the player has no turns left:
    1. Tell the player it is game over.
    2. Stop the player from being able to enter more guesses. (This would mess the game up.)
    3. Display control allowing the player to restart the game.
9. Once the game restarts, make sure the game logic and UI are completely reset, then go back to step 1.

Let's move forward, looking at how we can turn these steps into code, building up the example, and exploring JavaScript features as we go.

### Initial setup

To begin this tutorial, make a local copy of the [number-guessing-game-start.html](https://github.com/mdn/learning-area/blob/master/javascript/introduction-to-js-1/first-splash/number-guessing-game-start.html) file. Open it in both your text editor and your web browser. At the moment, you'll see a simple heading, paragraph of instructions, and form for entering a guess, but the form won't currently do anything.

The place where we'll be adding all our code is inside the [`<script>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/script) element at the bottom of the HTML:
```
<script>

    // Your JavaScript goes here

</script>
```

### Adding variables to store our data

Let's get started. First of all, add the following lines inside your `<script>` element:
```
let randomNumber = Math.floor(Math.random() * 100) + 1;

const guesses = document.querySelector('.guesses');
const lastResult = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');

const guessSubmit = document.querySelector('.guessSubmit');
const guessField = document.querySelector('.guessField');

let guessCount = 1;
let resetButton;
```
This section of the code sets up the variables and constants we need to store the data our program will use. Variables are basically containers for values (such as numbers, or strings of text). You create a variable with the keyword `let` (or `var`) followed by a name for your variable (a [future article]() will show the difference between these two keywords). <!-- link to Variables folder --> Constants are used to store values that are immutable or can't be changed and are created with the keyword `const`. In this case, we are using constants to store references to parts of our user interface; the text inside some of them might change, but the HTML elements referenced stay the same.

You can assign a value to your variable or constant with an equals sign (`=`) followed by the valu you want to give it.

In our example:

* The first variable - `randomNumber` - is assigned a random number between 1 and 100, calculated using a mathematical algorithm.
* The first three constants are each made to store a reference to the results paragraphs in our HTML, and are used to insert values into the paragraphs later on in the code (note how they are inside a `<div>` element, which is itself used to select all three later on for resetting, when we restart the game):
```
<div class="resultParas">
    <p class="guesses"></p>
    <p class="lastResult"></p>
    <p class="lowOrHi"></p>
</div>
```
* The next two constants store references to the form text input and submit button and are used to control submitting the guess later on.
```
<label for="guessField">Enter a guess: </label><input type="text" id="guessField" class="guessField">
<input type="submit" value="Submit guess" class="guessSubmit">
```
* Our final two variables store a guess count of 1 (used to keep track of how many guesses the player has had), and a reference to a reset button that doesn't exist yet (but will later).

<hr>

**Note**: You'll learn a lot more about variables/constants later on in the course, starting with the [next article](). <!-- Variables folder -->

<hr>

### Functions

Next, add the following below your previous JavaScript:
```
function checkGuess() {
    alert('I am a placeholder');
}
```
Functions are reusable blocks of code that you can write once and run again and again, saving the need to keep repeating code all the time. This is really useful. There are a number of ways to define functions, but for now we'll concentrate on one simple type. Here we have defined a function by using the keyword `function`, followed by a name, with parentheses put after it. After that, we put two curly braces goes all the code that we want to run whenever we call the function.

When we want to run the code, we type the name of the function followed by parentheses.

Let's try that now. Save your code and referesh the page in your browser. Then go into the [developer tools JavaScript console](https://developer.mozilla.org/en-US/docs/Learn/Common_questions/What_are_browser_developer_tools), and enter the following line:
```
checkGuess();
```
After pressing <kbd>Return</kbd>/<kbd>Enter</kbd>, you should see an alert come up that says `I am a placeholder`; we have defined a function in our code that creates an alert whenever we call it.

<hr>

**Note**: You'll learn a lot more about functions [later in the course](). <!-- JS_Building_Blocks folder / Functions -->

<hr>