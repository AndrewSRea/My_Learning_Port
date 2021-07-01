# Object Building Practice

In previous articles, we looked at all the essential JavaScript object theory and syntax details, giving you a solid base to start from. In this article, we dive into a practical exercise, giving you some more practice in building custom JavaScript objects, with a fun and colorful result.

## Let's bounce some balls

In this article, we will write a classic "bouncing balls" demo, to show you how useful objects can be in JavaScript. Our little balls will bounce around on the screen, and change color when they touch each other. The finished example will look a little something like this:

![Image of bouncing balls inside a browser window](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Object_building_practice/bouncing-balls.png)

(This image is the property of the Mozilla Developer Network.)

This example will make use of the [Canvas API](https://github.com/AndrewSRea/My_Learning_Port/tree/main/JavaScript/Client-side_Web_APIs/Drawing_Graphics#drawing-graphics) for drawing the balls to the screen, and the [requestAnimationFrame](https://developer.mozilla.org/en-US/docs/Web/API/window/requestAnimationFrame) API for animating the whole display -- you don't need to have any previous knowledge of these APIs, and we hope that by the time you've finished this article you'll be interested in exploring them more. Along the way, we'll make use of some nifty objects, and show you a couple of nice techniques like bouncing balls off walls, and checking whether they have hit each other (otherwise known as **collision detection**).

## Getting started

To begin with, make local copies of our [index.html](https://github.com/mdn/learning-area/blob/master/javascript/oojs/bouncing-balls/index.html), [style.css](https://github.com/mdn/learning-area/blob/master/javascript/oojs/bouncing-balls/style.css), and [main.js](https://github.com/mdn/learning-area/blob/master/javascript/oojs/bouncing-balls/main.js) files. These contain the following, respectively:

1. A very simple HTML document featuring an [`<h1>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/Heading_Elements) element, a [`<canvas>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/canvas) element to draw our balls on, and elements to apply our CSS and JavaScript to our HTML.
2. Some very simple styles, which mainly serve to style and position the `<h1>`, and get rid of any scrollbars or margin around the edge of the page (so that it looks nice and neat).
3. Some JavaScript that serves to set up the `<canvas>` element and provide a general function that we're going to use.

The first part of the script looks like so:
```
const canvas = document.querySelector('canvas');

const ctx = canvas.getContext('2d');

const width = canvas.width = window.innerWidth;
const height = canvas.height = window.innerHeight;
```
This script gets a reference to the `<canvas>` element, then calls the [`getContext()`](https://developer.mozilla.org/en-US/docs/Web/API/HTMLCanvasElement/getContext) method on it to give us a context on which we can start to draw. The resulting constant (`ctx`) is the object that directly represents the drawing area of the canvas and allows us to draw 2D shapes on it.

Next, we set constants called `width` and `height`, and the width and height of the canvas element (represented by the `canvas.width` and `canvas.height` properties) to equal the width and height of the browser viewport (the area that the webpage appears on -- this can be gotten from the [`Window.innerWidth`](https://developer.mozilla.org/en-US/docs/Web/API/Window/innerWidth) and [`Window.innerHeight`](https://developer.mozilla.org/en-US/docs/Web/API/Window/innerHeight) properties.)

Note that we are chaining multiple assignments together, to get the variables all set quicker -- this is perfectly OK.

The last bit of the initial script looks as follows:
```
function random(min, max) {
    const num = Math.floor(Math.random() * (max - min + 1)) + min;
    return num;
}
```
This function takes two numbers as arguments, and returns a random number in the range between the two.

## Modeling a ball in our program

Our program will feature lots of balls bouncing around the screen. Since these balls will all behave in the same way, it makes sense to represent them with an object. Let's start by adding the following constructor to the bottom of our code.
```
function Ball(x, y, velX, velY, color, size) {
    this.x = x;
    this.y = y;
    this.velX = velX;
    this.velY = velY;
    this.color = color;
    this.size = size;
}
```
Here we include some parameters that define the properties each ball needs in order to function in our program:

* `x` and `y` coordinates -- the horizontal and vertical coordinates where the ball starts on the screen. This can range between 0 (top left hand corner) to the width and height of the browser viewport (bottom right hand corner).
* Horizontal and vertical velocity (`velX` and `velY`) -- each ball is given a horizontal and vertical velocity; in real terms, these values are regularly added to the `x`/`y` coordinate values when we animate the balls, to move them by this much on each frame.
* `color` -- each ball gets a color.
* `size` -- each ball gets a size -- this is its radius, in pixels.

This handles the properties, but what about the methods? We want to gvet our balls to actually do something in our program.

### Drawing the ball

First, add the following `draw()` method to the `Ball()`'s `prototype`:
```
Ball.prototype.draw = function() {
    ctx.beginPath();
    ctx.fillStyle = this.color;
    ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
    ctx.fill();
}
```
Using this function, we can tell the ball to draw itself onto the screen, by calling a series of members of the 2D canvas context we defined earlier (`ctx`). The context is like the paper, and now we want to command our pen to draw something on it:

* First, we use [`beginPath()`](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/beginPath) to state that we want to draw a shape on the paper.
* Next, we use [`fillStyle`](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/fillStyle) to define what color we want the shape to be -- we set it to our ball's `color` property.
* Next, we use the [`arc()`](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/arc) method to trace an arc  shape on the paper. Its parameters are:
    - The `x` and `y` position of the arc's center -- we are specifying the ball's `x` and `y` properties.
    - The radius of the arc -- in this case, the ball's `size` property.
    - The last two parameters specify the start and end number of degrees around the circle that the arc is drawn between. Here we specify 0 degrees, and `2 * PI`, which is the equivalent of 360 degrees in radians (annoyingly, you have to specify this in radians). That gives us a complete circle. If you had specified only `1 * PI`, you'd get a semi-circle (180 degrees).
* Last of all, we use the [`fill()`](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/fill) method, which basically states "finish drawing the path we started with `beginPath()`, and fill the area it takes up with the color we specified earlier in `fillStyle`."

You can start testing your object out already.

1. Save the code so far, and load the HTML file in a browser.
2. Open the browser's JavaScript console, and then refresh the page so that the canvas size changes to the smaller visible viewport that remains when the console opens.
3. Type in the following to create a new ball instance:
```
let testBall = new Ball(50, 100, 4, 4, 'blue', 10);
```

4. Try calling its members:
```
testBall.x
testBall.size
testBall.color
testBall.draw()
```

5. When you enter the last line, you should see the ball draw itself somewhere on the canvas.

### Updating the ball's data

We can draw the ball in position, but to actually move the ball, we need an update function of some kind. Add the following code at the bottom of your JavaScript file, to add an `update()` method to the `Ball()`'s `prototype`:
```
Ball.prototype.update = function() {
    if ((this.x + this.size) >= width) {
        this.velX = -(this.velX);
    }

    if ((this.x - this.size) <= 0) {
        this.velX = -(this.velX);
    }

    if ((this.y + this.size) >= height) {
        this.velY = -(this.velY);
    }

    if ((this.y - this.size) <= 0) {
        this.velY = -(this.velY);
    }

    this.x += this.velX;
    this.y += this.velY;
}
```
The first four parts of the function check whether the ball has reached the edge of the canvas. If it has, we reverse the polarity of the relevant velocity to make the ball travel in the opposite direction. So, for example, if the ball was traveling upwards (positive `velY`), then the vertical velocity is changed so that it starts to travel downwards instead (negative `velY`).

In the four cases, we are checking to see:

* if the `x` coordinate is greater than the width of the canvas (the ball is going off the right edge).
* if the `x` coordinate is smaller than 0 (the ball is going off the left edge).
* if the `y` coordinate is greater than the height of the canvas (the ball is going off the bottom edge).
* if the `y` coordinate is smaller than 0 (the ball is going off the top edge).

In each ase, we include the `size` of the ball in the calculation because the `x`/`y` coordinates are in the center of the ball, but we want the edge of the ball to bounce off the perimeter -- we don't want the ball to go halfway off the screen before it starts to bounce back.

The last two lines add the `valX` value to the `x` coordinate, and the `velY` value to the `y` coordinate -- the ball is in effect moved each time this method is called.

This will do for now; let's get on with some animation!

## Animating the ball