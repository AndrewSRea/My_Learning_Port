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
- 1. Display congratulations message.
- 2. Stop the player from being able to enter more guesses. (This would mess the game up.)
- 3. Display control allowing the player to restart the game.
7. If it is wrong and the player has turns left:
- 1. Tell the player they are wrong and whether their guess was too high or too low.
- 2. Allow them to enter another guess.
- 3. Increment the turn number by 1.
8. If it is wrong and the player has no turns left:
- 1. Tell the player it is game over.
- 2. Stop the player from being able to enter more guesses. (This would mess the game up.)
- 3. Display control allowing the player to restart the game.
9. Once the game restarts, make sure the game logic and UI are completely reset, then go back to step 1.

