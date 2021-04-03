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
2. Apply the external JavaScript file to your HTML by inserting a [`<script>`]() element into your HTML referencing `main.js`. Put it just before the closing `</body>` tag.

Initial variables and functions:

1. 



<!-- Don't forget to link to this "Assessment or further help" from the top of the page. -->