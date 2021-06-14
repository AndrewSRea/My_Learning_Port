# Test your skills: Events

The aim of this skill test is to assess whether you've understood Mozilla's [Introduction to events](https://github.com/AndrewSRea/My_Learning_Port/tree/main/JavaScript/JS_Building_Blocks/Intro_to_Events#introduction-to-events) article.

## DOM manipulation: considered useful

Some of the questions below require you to write some [DOM](https://developer.mozilla.org/en-US/docs/Glossary/DOM) manipulation code to complete them--such as creating new HTML elements, setting their text contents to equal specific string values, and nesting them inside existing elements on the page--all via JavaScript.

We haven't explicitly taught this yet in the course, but you'll have seen some examples that make use of it, and we'd like you to do some research into what DOM APIs you need to successfully answer the questions. A good starting place is Mozilla's [Manipulating documents](https://github.com/AndrewSRea/My_Learning_Port/tree/main/JavaScript/Client-side_Web_APIs/Manipulating_Documents#manipulating-documents) tutorial.

## Events 1

In our first events-related task, you need to create a simple event handler that causes the text inside the button (`btn`) to change when it is clicked on, and change back when it is clicked again.

The HTML should not be changed; just the JavaScript.

Try updating the live code below to recreate the finished example:
```
let btn = document.querySelector('.off');

// Add your code here
```
See my finished code for this test under the **Events Skills Test 1** header, under the opening `<script>` tag, in my accompanying [events-skills-test.html](https://github.com/AndrewSRea/My_Learning_Port/blob/main/JavaScript/JS_Building_Blocks/Intro_to_Events/Skills_Test/events-skills-test.html) file, and see the result of this finished code [here](), under the **Events Skills Test 1** header.

## Events 2

Now we'll look at keyboard events. To pass this assessment, you need to build an event handler that moves the circle around the provided canvas when the WASD keys are pressed on the keyboard. The circle is drawn with the function `drawCircle()`, which takes the following parameters as inputs:

* `x` -- the x coordinate of the circle.
* `y` -- the y coordinate of the circle.
* `size` -- the radius of the circle.

Try updating the live code below to recreate the finished example:
```
let canvas = document.querySelector('canvas');
let ctx = canvas.getContext('2d');

function drawCircle(x, y, size) {
    ctx.fillStyle = 'white';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.beginPath();
    ctx.fillStyle = 'black';
    ctx.arc(x, y, size, 0, 2 * Math.PI);
    ctx.fill();
}

let x = 50;
let y = 50;
const size = 30;

drawCircle(x, y, size);

// Add your code here
```
See my finished code for this test under the **Events Skills Test 2** header, under the opening `<script>` tag, in my accompanying [events-skills-test.html](https://github.com/AndrewSRea/My_Learning_Port/blob/main/JavaScript/JS_Building_Blocks/Intro_to_Events/Skills_Test/events-skills-test.html) file, and see the result of this finished code [here](), under the **Events Skills Test 2** header.

## Events 3

In our final events-related task, you need to set an event listener on the `<button>`s' parent element (`<div class="button-bar"> ... </div>`), which, when invoked by clicking any of the buttons, will set the backgroun of the `button-bar` to the color contained in the button's `data-color` attribute.

We want you to solve this without looping through all the buttons and giving each one their own event listener.

Try updating the live code below to recreate the finished example:
```
let buttonBar = document.querySelector('.button-bar');

// Add your code here
```
See my finished code for this test under the **Events Skills Test 3** header, under the opening `<script>` tag, in my accompanying [events-skills-test.html](https://github.com/AndrewSRea/My_Learning_Port/blob/main/JavaScript/JS_Building_Blocks/Intro_to_Events/Skills_Test/events-skills-test.html) file, and see the result of this finished code [here](), under the **Events Skills Test 3** header.

<hr>

[[Back to the Introduction to events page]](https://github.com/AndrewSRea/My_Learning_Port/tree/main/JavaScript/JS_Building_Blocks/Intro_to_Events#introduction-to-events)