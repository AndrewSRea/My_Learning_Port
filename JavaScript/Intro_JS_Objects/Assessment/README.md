# Adding features to our bouncing balls demo

In this assessment, you are expected to use the bouncing balls demo from the previous article as a starting point, and add some new and interesting features to it.

## Starting point

To get this assessment started, make a local copy of [index-finished.html](https://github.com/mdn/learning-area/blob/master/javascript/oojs/bouncing-balls/index-finished.html), [style.css](https://github.com/mdn/learning-area/blob/master/javascript/oojs/bouncing-balls/style.css), and [main-finished.js](https://github.com/mdn/learning-area/blob/master/javascript/oojs/bouncing-balls/main-finished.js) from our last article in a new directory in your local computer.

(I am just going to use my finished [index.html](https://github.com/AndrewSRea/My_Learning_Port/blob/main/JavaScript/Intro_JS_Objects/Object_Building_Practice/index.html), [style.css](https://github.com/AndrewSRea/My_Learning_Port/blob/main/JavaScript/Intro_JS_Objects/Object_Building_Practice/style.css), and [main.js](https://github.com/AndrewSRea/My_Learning_Port/blob/main/JavaScript/Intro_JS_Objects/Object_Building_Practice/main.js) files from my **Object_Building_Practice** folder.)

Alternatively, you could use a site like [JSBin]() or [Glitch]() to do your assessment. You could paste the HTML, CSS, and JavaScript into one of these online editors. If the online editor you are using doesn't have separate JavaScript/CSS panels, feel free to put them in inline `<script>`/`<style>` elements inside the HTML page.

## Hints and tips

A couple of pointers before you get started:

* This assessment is quite challenging. Read the whole assessment before you start coding, and take each step slowly and carefully.
* It might be a good idea to save a separate copy of the demo after you get each stage working, so you can refer back to it if you find yourself in trouble later on.

## Project brief

Our bouncy ball demo is fun, but now we want to make it a little bit more interactive by adding a user-controlled evil circle, which will eat the balls if it catches them. We also want to test your object-building skills by creating a generic `Shape()` object that our balls and evil circle can inherit from. Finally, we want to add a score counter to track the number of balls left to capture.

The following screenshot gives you an idea of what the finished program should look like:

![Image of bouncing balls inside a browser window](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Adding_bouncing_balls_features/bouncing-evil-circle.png)

To give you more of an idea, have a look at the [finished example](https://mdn.github.io/learning-area/javascript/oojs/assessment/). (No peeking at the source code!)