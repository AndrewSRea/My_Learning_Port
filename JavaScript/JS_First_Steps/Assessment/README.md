# Silly story generator

In this assessment, you'll be tasked with taking some of the knowledge you've picked up in this module's articles and applying it to creating a fun app that generates random silly stories. Have fun!

## Starting point

To get this assessment started, you should:

* Go and [grab the HTML file](https://github.com/mdn/learning-area/blob/master/javascript/introduction-to-js-1/assessment-start/index.html) for the example, save a local copy of it as `index.html` in a new directory somewhere on your computer, and do the assessment locally to begin with. This also has the CSS to style the example contained within it.
* Go to the [page containing the raw text](https://github.com/mdn/learning-area/blob/master/javascript/introduction-to-js-1/assessment-start/raw-text.txt) and keep this open in a separate browser tab somewhere. You'll need it later.

Alternatively, you could use a site like [JSBin](https://jsbin.com/?html,output) or [Glitch](https://glitch.com/dashboard?group=owned&sortColumn=boost&sortDirection=DESC&page=1&showAll=false&filterDomain=) to do your assessment. You could paste the HTML, CSS, and JavaScript into one of these online editors. If the online editor you are using doesn't have a separate JavaScript panel, feel free to put it inline in a `<script>` element inside the HTML page.

<hr>

**Note**: If you get stuck, then ask the Mozilla Developer Network for help--see the [Assessment or further help]() section at the bottom of this page.

<hr>

## Project brief

You have been provided with some raw HTML/CSS and a few text strings and JavaScript functions; you need to write the necessary JavaScript to turn this into a working program, which does the following:

* Generates a silly story when the "Generate random story" button is pressed.
* Replaces the default name "Bob" in the story with a custom name, only if a custom name is entered into the "Enter custom name" text field before the generate button is pressed.
* Converts the default US weight and temperature quantities and units in the story into UK equivalents if the UK radio button is checked before the generate button is pressed.
* Will generate another random silly story if you press the button again (and again...)

To see an example of what the finished program should output, [have a look at this finished example](https://mdn.github.io/learning-area/javascript/introduction-to-js-1/assessment-finished/) (no peeking at the source code!)

## Steps to complete

The following sections describe what you need to do.

Basic setup:

1. Create a new file ccalled `main.js`, in the same directory as your `index.html` file.
2. Apply the external JavaScript file to your HTML by inserting a [`<script>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/script) element into your HTML referencing `main.js`. Put it just before the closing `</body>` tag.

Initial variables and functions:

1. In the raw text file, copy all of the code underneath the heading "1. COMPLETE VARIABLE AND FUNCTION DEFINITIONS" and paste it into the top of the `main.js` file. This gives you three variables that store references to the "Enter custom name" text field (`customName`), the "Generate random story" button (`randomize`), and the `<p>` element at the bottom of the HTML body that the story will be copied into (`story`), respectively. In addition, you've got a function called `randomValueFromArray()` that takes an array, and returns one of the items stored inside the array at random.
2. Now look at the second section of the raw text file--"2. RAW TEXT STRINGS". This contains text strings that will act as input into our program. We'd like you to contain these inside variables inside `main.js`:
    1. Store the first big, long string of text inside a variable called `storyText`.
    2. Store the first set of three strings inside an array called `insertX`.
    3. Store the second set of three strings inside an array called `insertY`.
    4. Store the third set of three strings inside an array called `insertZ`.

Placing the event handler and incomplete fuction:

1. Now return to the raw text file.
2. Copy the code found underneath the heading "3. EVENT LISTENER AND PARTIAL FUNCTION DEFINITION" and paste it into the bottom of your `main.js` file. This:
    - Adds a click event listener to the `randomize` variable so that when the button it represents is clicked, the `result()` function is run.
    - Adds a partially-completed `result()` function definition to your code. For the remainder of the assessment, you'll be filling in lines inside this function to complete it and make it work properly.

Completing the `result()` function:

1. Create a new variable called `newStory`, and set its value to equal `storyText`. This is needed so we can create a new random story each time the button is pressed and the function is run. If we made changes directly to `storyText`, we'd only be able to generate a new story once.
2. Create three new variables called `xItem`, `yItem`, and `zItem`, and make them equal to the result of calling `randomValueFromArray()` on your three arrays (the result in each case will be a random item out of each array it is called on). For example, you can call the function and get it to return one random string out of `insertX` by writing `randomValueFromArray(insertX)`.
3. Next, we want to replace the three placeholders in the `newStory` string--`:insertx:`, `:inserty:`, and `:insertz:`--with the strings stored in `xItem`, `yItem`, and `zItem`. There is a particular string method that will help you here--in each case, make the call to the method equal to `newStory`, so each time it is called, `newStory` is made equal to itself, but with substitutions made. So each time the button is pressed, these placeholders are each replaced with a random silly string. As a further hint, the method in question only replaces the first instance of the substring it finds, so you might need to make one of the calls twice.
4. 



<!-- Don't forget to link to this "Assessment or further help" from the top of the page. -->