# Drawing graphics

The browser contains some very powerful graphics programming tools, from the Scalable Vector Graphics ([SVG](https://developer.mozilla.org/en-US/docs/Web/SVG)) language, to APIs for drawing on HTML [`<canvas>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/canvas) elements. (See [The Canvas API](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API) and [WebGL](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API).) This article provides an introduction to canvas, and further resources to allow you to learn more.

## Graphics on the Web

As we talked about in our HTML [Multimedia and embedding](https://developer.mozilla.org/en-US/docs/Learn/HTML/Multimedia_and_embedding) module, the Web was originally just text, which was very boring, so images were introduced -- first via the [`<img>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img) element and later via CSS properties such as [`background-image`](https://developer.mozilla.org/en-US/docs/Web/CSS/background-image), and [SVG](https://developer.mozilla.org/en-US/docs/Web/SVG).

This, however, was still not enough. While you could use [CSS](https://developer.mozilla.org/en-US/docs/Learn/CSS) and [JavaScript](https://github.com/AndrewSRea/My_Learning_Port/tree/main/JavaScript#javascript) to animate (and otherwise manipulate) SVG vector images -- as they are represented by markup -- there was still no way to do the same for bitmap images, and the tools available were rather limited. The Web still had no way to effectively create animations, games, 3D scenes, and other requirements commonly handled by lower level languages such as C++ or Java.

The situation started to improve when browser began to support the [`<canvas>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/canvas) element and associated [Canvas API](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API) -- Apple invented it in around 2004, and other browsers followed by implementing it in the years that followed. As you'll see below, canvas provides many useful tools for creating 2D animations, games, data visualizations, and other types of apps, especially when combined with some of the other APIs the web platform provides.

The below example shows a simple 2D canvas-based bouncing balls animation that we originally met in our [Introducing JavaScript objects](https://github.com/AndrewSRea/My_Learning_Port/tree/main/JavaScript/Intro_JS_Objects/Object_Building_Practice#object-building-practice) module:

(See the live example [here](https://andrewsrea.github.io/My_Learning_Port/JavaScript/Intro_JS_Objects/Object_Building_Practice/index.html).)

Around 2006-2007, Mozilla started work on an experimental 3D canvas implementation. This became [WebGL](), which gained traction among browser vendors, and was standardized around 2009-2010. WebGL allows you to create real 3D graphics inside your web browser; the below example shows a simple rotating WebGL cube:

(As I am unable to import this graphic, see it here [just above the "Active learning: Getting started with a `<canvas>`" header](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Client-side_web_APIs/Drawing_graphics#active_learning_getting_started_with_a_%3Ccanvas%3E).)

This article will focus mainly on 2D canvas, as raw WebGL code is very complex. We will, however, show how to use a WebGL library to create a 3D scene more easily, and you can find a tutorial covering raw WebGL elsewhere -- see [Getting started with WebGL](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Tutorial/Getting_started_with_WebGL).

<hr>

**Note**: Basic canvas functionality is supported well across browsers, with the exception of IE 8 and below for 2D canvas, and IE 11 and below for WebGL.

<hr>

## Active learning: Getting started with a `<canvas>`

If you want to create a 2D *or* 3D scene on a web page, you need to start with an HTML [`<canvas>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/canvas) element. This element is used to define the area on the page into which the image will be drawn. This is as simple as including the element on the page:
```
<canvas width="320" height="240"></canvas>
```
This will create a canvas on the page with a size of 320 by 240 pixels.

Inside the canvas tags, you can put some fallback content, which is shown if the user's browser doesn't support canvas.
```
<canvas width="320" height="240">
    <p>Your browser doesn't support canvas. Boo hoo!</p>
</canvas>
```
Of course, the above message is really unhelpful! In a real example, you'd want to relate the fallback content to the canvas content. For example, if you were rendering a constantly updating graph of stock prices, the fallback content could be a static image of the latest stock graph, with alt text saying what the prices are in text.

### Creating and sizing our canvas

Let's start by creating our own canvas that we draw future experiments on to.

1. First, make a local copy of our [0_canvas_start.html](https://github.com/mdn/learning-area/blob/master/javascript/apis/drawing-graphics/getting-started/0_canvas_start.html) file, and open it in your text editor.

2. Add the following code into it, just below the opening [`<body>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/body) tag:
```
<canvas class="myCanvas">
    <p>Add suitable fallback here.</p>
</canvas>
```
We have added a `class` to the `<canvas>` element so it will be easier to select if we have multiple canvases on the page, but we have removed the `width` and `height` attributes for now (you could add them back in if you wanted, but we will set them using JavaScript in a below section). Canvases with no explicit width and height default to 300 pizels wide by 150 pixels high.

3. Now add the following lines of JavaScript inside the [`<script>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/script) element:
```
const canvas = document.querySelector('.myCanvas');
const width = canvas.width = window.innerWidth;
const height = canvas.height = window.innerHeight;
```
Here we have stored a reference to the canvas in the `canvas` constant. In the second line, we set both a new constant `width` and the canvas' `width` property equal to [`Window.innerWidth`](https://developer.mozilla.org/en-US/docs/Web/API/Window/innerWidth) (which gives us the viewport width). In the third line, we set both a new constant `height` and the canvas' `height` property equal to [`Window.innerHeight`](https://developer.mozilla.org/en-US/docs/Web/API/Window/innerHeight) (which gives us the viewport height). So now we have a canvas that fills the entire width and height of the browser window!

You'll also see that we are chaining assignments together with multiple equals signs -- this is allowed in JavaScript, and it is a good technique if you want to make multiple variables all equal to the same value. We wanted to make the canvas width and height easily accessible in the width/height variables, as they are useful values to have available for later (for example, if you want to draw something exactly halfway across the width of the canvas).

4. If you save and load your example in a browser now, you'll see nothing, which is fine, but you'll also see scrollbars -- this is a problem for us, which ahppens because the [`<body>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/body) element has a [`margin`](https://developer.mozilla.org/en-US/docs/Web/CSS/margin) that, added to our full-window-size canvas, results in a document that's wider than the window. To get rid of the scrollbars, we need to remove the [`margin`](https://developer.mozilla.org/en-US/docs/Web/CSS/margin) and also set [`overflow`](https://developer.mozilla.org/en-US/docs/Web/CSS/overflow) to `hidden`. Add the following into the [`<head>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/head) of your document:
```
<style>
    body {
        margin: 0;
        overflow: hidden;
    }
</style>
```
The scrollbars should now be gone.

<hr>

**Note**: You should generally set the size of the image using HTML attributes or DOM properties, as explained above. You could use CSS, but the trouble then is that the sizing is done after the canvas has rendered, and just like any other image (the rendered canvas is just an image), the image could become pixelated/distorted.

### Getting the canvas context and final setup

We need to do one final thing before we can consider our canvas template finished. To draw onto the canvas, we need to get a special reference to the drawing area called a context. This is done using the [`HTMLCanvasElement.getContext()`](https://developer.mozilla.org/en-US/docs/Web/API/HTMLCanvasElement/getContext) method, which, for basic usage, takes a single string as a parameter representing the type of context you want to retrieve.

In this case, we want a 2D canvas, so add the following JavaScript line below the others inside the `<script>` element:
```
const ctx = canvas.getContext('2d');
```

<hr>

**Note**: Other context values you could choose include `webgl` for WebGL, `webgl2` for WebGL 2, etc., but we won't need those in this article.

<hr>

So that's it -- our canvas is now primed and ready for drawing on! The `ctx` variable now contains a [`CanvasRenderingContext2D`](https://developer.mozilla.org/en-US/docs/Web/API/HTMLCanvasElement/getContext) object, and all drawing operations on the canvas will involve manipulating this object.

Let's do one last thing before we move on. We'll color the canvas background black to give you a first taste of the canvas API. Add the following lines at the bottom of your JavaScript:
```
ctx.fillStyle = 'rgb(0, 0, 0)';
ctx.fillRect(0, 0, width, height);
```
Here we are setting a fill color using the canvas' [`fillStyle`](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/fillStyle) property (this takes [color values](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Values_and_units#colors) just like CSS properties do), then drawing a rectangle that covers the entire area of the canvas with the [`fillRect`](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/fillRect) method. (The first two parameters are the coordinates of the rectangle's top left hand corner; the last two are the width and height you want the rectangle drawn at -- we told you those `width` and `height` variables would be useful!)

OK, our template is done and it's time to move on. (See the finished product [here](https://andrewsrea.github.io/My_Learning_Port/JavaScript/Client-side_Web_APIs/Drawing_Graphics/canvas-start.html), and the source code [here](https://github.com/AndrewSRea/My_Learning_Port/blob/main/JavaScript/Client-side_Web_APIs/Drawing_Graphics/canvas-start.html).)

## 2D canvas basics

As we said above, all drawing operations are done by manipulating a [`CanvasRenderingContext2D`](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D) object (in our case, `ctx`). Many operations need to be given coordinates to pinpoint exactly where to draw something -- the top left of the canvas is point (0, 0), the horizontal (x) axis runs from left to right, and the vertical (y) axis runs from top to bottom.

![Image of the x and y canvas graph](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Client-side_web_APIs/Drawing_graphics/canvas_default_grid.png)

Drawing shapes tends to be done using the rectangle shape primitive, or by tracing a line along a certain path and then filling in the shape. Below we'll show you how to do both.

### Simple rectangles

Let's start with some simple rectangles.

1. First of all, take a copy of your newly coded canvas template (or make a local copy of [1_canvas_template.html](https://github.com/mdn/learning-area/blob/master/javascript/apis/drawing-graphics/getting-started/1_canvas_template.html) if you didn't follow the above steps).

2. Next, add the following lines to the bottom of your JavaScript:
```
ctx.fillStyle = 'rgb(255, 0, 0)';
ctx.fillRect(50, 50, 100, 150);
```
If you save and refresh, you should see a red rectangle has appeared on your canvas. Its top left corner is 50 pixels aweay from the top and left of the canvas edge (as defined by the first two parameters), and it is 100 pixels wide and 150 pixels tall (as defined by the third and fourth parameters).

3. Let's add another rectangle into the mix -- a green one this time. Add the following at the bottom of your JavaScript:
```
ctx.fillStyle = 'rgb(0, 255, 0)';
ctx.fillRect(75, 75, 100, 100);
```
Save and refresh, and you'll see your new rectangle. This raises an important point: graphics operations like drawing rectangles and so forth, are performed in the order in which they occur. Think of it like painting a wall, where each coat of paint overlaps and may even hide what's underneath. You can't do anything to change this, so you have to think carefully about the order in which you draw the graphics.

4. Note that you can draw semi-transparent graphics by specifying a semi-transparent color -- for example, by using `rgba()`. The `a` value defines what's called the "alpha channel", or the amount of transparency the color has. The higher its value, the more it will obscure whatever's behind it. Add the following to your code:
```
ctx.fillStyle = 'rgba(255, 0, 255, 0.75)';
ctx.fillRect(25, 100, 175, 50);
```
5. Now try drawing some more rectangles of your own; have fun!

<hr>

See the finished code [here](https://github.com/AndrewSRea/My_Learning_Port/blob/main/JavaScript/Client-side_Web_APIs/Drawing_Graphics/canvas-template-1.html), and the finished product [here](https://andrewsrea.github.io/My_Learning_Port/JavaScript/Client-side_Web_APIs/Drawing_Graphics/canvas-template-1.html).

<hr>

### Drawing paths

If you want to draw anything more complex than a rectangle, you need to draw a path. Basically, this involves writing code to specify exactly what path the pen should move along on your canvas to trace the shape you want to draw. Canvas includes functions for drawing straight lines, circles, Bézier curves, and more.

Let's start the section off by making a fresh copy of our canvas template ([1_canvas_template.html](https://github.com/mdn/learning-area/blob/master/javascript/apis/drawing-graphics/getting-started/1_canvas_template.html)), in which to draw the new example.

We'll be using some common methods and properties across all of the below sections:

* [`beginPath()`](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/beginPath) -- start drawing a path at the point where the pen currently is on the canvas. On a new canvas, the pen starts out at (0, 0).
* [`moveTo()`](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/moveTo) -- move the pen to a different point on the canvas, without recording or tracing the line; the pen "jumps" to the new position.
* [`fill()`](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/fill) -- draw a filled shape by filling in the path you've traced so far.
* [`stroke()`](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/stroke) -- draw an outline shape by drawing a stroke along the path you've drawn so far.
* You can also use features like `lineWidth` and `fillStyle`/`strokeStyle` with paths as well as rectangles.

A typical, simple path-drawing operation would look something like so:
```
ctx.fillStyle = 'rgb(255, 0, 0)';
ctx.beginPath();
ctx.moveTo(50, 50);
// draw your path
ctx.fill();
```

### Drawing lines

Let's draw an equilateral triangle on the canvas.

1. First of all, add the following helper function to the bottom of your code. This converts degree values to radians, which is useful because whenever you need to provide an angle value in JavaScript, it will nearly always be in radians, but humans usually think in degrees.
```
function degToRad(degrees) {
    return degrees * Math.PI / 180;
};
```

2. Next, start off your path by adding the following below your previous addition; here we set a color for our triangle, start drawing a path, and then move the pen to (50, 50) without drawing anything. That's where we'll start drawing our triangle.
```
ctx.fillStyle = 'rgb(255, 0, 0)';
ctx.beginPath();
ctx.moveTo(50, 50);
```

3. Now, add the following lines at the bottom of your script:
```
ctx.lineTo(150, 50);
let triHeight = 50 * Math.tan(degToRad(60));
ctx.lineTo(100, 50+triHeight);
ctx.lineTo(50, 50);
ctx.fill();
```
Let's run though this in order:

First, we draw a line across to (150, 50) -- our path now goes 100 pixels to the right along the x axis.

Second, we work out the height of our equilateral triangle, using a bit of simple trigonometry. Basically, we are drawing the triangle pointing downwards. The angles in an equilateral triangle are always 60 degrees; to work out the height, we can split it down the middle into two right-angled triangles, which will each have angles of 90 degrees, 60 degrees, and 30 degrees. In terms of the sides:

* The longest side is called the **hypotenuse**.
* The side next to the 60 degree angle is called the **adjacent** -- which we know is 50 pixels, as it is half of the line we just drew.
* The side opposite the 60 degree angle is called the **opposite**, which is the height of the triangle we want to calculate.

![Image of the different sides and names of the sides of a triangle](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Client-side_web_APIs/Drawing_graphics/trigonometry.png)

One of the basic trigonometric formulae states that the length of the adjacent multipled by the tangent of the angle is equal to the opposite, hence we come up with `50 * Math.tan(degToRad(60))`. We use our `degToRad()` function to convert 60 degrees to radians, as [`Math.tan()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/tan) expects an input value in radians.

4. With the height calculated, we draw another line to `(100, 50 + triHeight)`. The X coordinate is simple; it must be halfway between the previous two X values we set. The Y value, on the other hand, must be 50 plus the triangle height, as we know the top of the triangle is 50 pixels from the top of the canvas.

5. The next line draws a line back to the starting point of the triangle.

6. Last of all, we run `ctx.fill()` to end the path and fill in the shape.

### Drawing circles

Now let's look at how to draw a circle in canvas. This is accomplished using the [`arc()`](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/arc) method, which draws all or part of a circle at a specified point.

1. Let's add an arc to our canvas -- add the following to the bottom of your code:
```
ctx.fillStyle = 'rgb(0, 0, 255)';
ctx.beginPath();
ctx.arc(150, 106, 50, degToRad(0), degToRad(360), false);
ctx.fill();
```
`arc()` takes six parameters. The first two specify the position of the arc's center (X and Y, respectively). The third is the circle's radius, the fourth and fifth are the start and end angles at which to draw the circle (so specifying 0 and 360 degrees gives us a full circle), and the sixth parameter defines whether the circle should be drawn counterclockwise (anticlockwise) or clockwise (`false` is clockwise).

<hr>

**Note**: 0 degrees is horizontally to the right.

<hr>

2. Let's try adding another arc:
```
ctx.fillStyle = 'yellow';
ctx.beginPath();
ctx.arc(200, 106, 50, degToRad(-45), degToRad(45), true);
ctx.lineTo(200, 106);
ctx.fill();
```
The pattern here is very similar, but with two differences:

* We have set the last parameter of `arc()` to `true`, meaning that the arc is drawn counterclockwise, which means that even though the arc is specified as starting at -45 degrees and ending at 45 degrees, we draw the arc around the 270 degrees, not inside this portion. If you were to change `true` to `false` and then re-run the code, only the 90 degree slice of the circle would be drawn.
* Before calling `fill()`, we draw a line to the center of the circle. This means that we get the rather nice Pac-Man-style cutout chopped off between the start and end point of the arc. This illustrates another important point of the canvas -- if you try to fill an incomplete path (i.e. one that is not closed), the browser fills in a straight line between the start and end point and then fills it in.

That's it for now; your final example should look like this:

(See the image of the finished drawn triangle and circles [here, above the "Text" header](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Client-side_web_APIs/Drawing_graphics#text).)

<hr>

See the finished code for the drawn triangle and circles [here](https://github.com/AndrewSRea/My_Learning_Port/blob/main/JavaScript/Client-side_Web_APIs/Drawing_Graphics/canvas-template-2.html), and see the finished product [here](https://andrewsrea.github.io/My_Learning_Port/JavaScript/Client-side_Web_APIs/Drawing_Graphics/canvas-template-2.html).

<hr>

**Note**: To find out more about advanced path drawing features such as Bézier curves, check out our [Drawing shapes with canvas](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/Drawing_shapes) tutorial.

<hr>

### Text

Canvas also has features for drawing text. Let's explore these briefly. Start by making another fresh copy of our canvas template ([1_canvas_template.html](https://github.com/mdn/learning-area/blob/master/javascript/apis/drawing-graphics/getting-started/1_canvas_template.html)) in which to draw the new example.

Text is drawn using two methods:

* [`fillText()`](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/fillText) -- draws filled text.
* [`strokeText()`](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/strokeText) -- draws outline (stroke) text.

Both of these take three properties in their basic usage: the text string to draw and the X and Y coordinates of the point to start drawing the text at. This works out as the **bottom left** corner of the **text box** (literally, the box surrounding the text you draw), which might confuse you as other drawing operations tend to start from the top left corner -- bear this in mind.

There are also a number of properties to help control text rendering such as [`font`](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/font), which lets you specify font family, size, etc. It takes as its value the same syntax as the CSS [`font`](https://developer.mozilla.org/en-US/docs/Web/CSS/font) property.

Try adding the following block to the bottom of your JavaScript:
```
ctx.strokeStyle = 'white';
ctx.lineWidth = 1;
ctx.font = '36px arial';
ctx.strokeText('Canvas text', 50, 50);

ctx.fillStyle = 'red';
ctx.font = '48px georgia';
ctx.fillRect('Canvas text', 50, 150);
```
Here we draw two lines of text, one outline and the other stroke. The final example should look like so:

(See the finished product [here](https://andrewsrea.github.io/My_Learning_Port/JavaScript/Client-side_Web_APIs/Drawing_Graphics/canvas-template-3.html), and see the source code [here](https://github.com/AndrewSRea/My_Learning_Port/blob/main/JavaScript/Client-side_Web_APIs/Drawing_Graphics/canvas-template-3.html).)

Have a play and see what you can come up with! You can find more information on the options available for canvas text at [Drawing text](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/Drawing_text).

### Drawing images onto canvas

It is possible to render external images onto your canvas. These can be simple images, frames from videos, or the content of other canvases. For the moment, we'll just look at the case of using some simple images on our canvas.

1. As before, make another fresh copy of our canvas template ([1_canvas_template.html](https://github.com/mdn/learning-area/blob/master/javascript/apis/drawing-graphics/getting-started/1_canvas_template.html)) in which to draw the new example. In this case, you'll also need to save a copy of our sample image -- [firefox.png](https://github.com/mdn/learning-area/blob/master/javascript/apis/drawing-graphics/getting-started/firefox.png) -- in the same directory.

Images are drawn onto canvas using the [`drawImage()`](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/drawImage) method. The simplest version takes three parameters -- a reference to the image you want to render, and the X and Y coordinates of the image's top left corner.

2. Let's start by getting an image source to embed in our canvas. Add the following lines to the bottom of your JavaScript:
```
let image = new Image();
image.src = 'firefox.png'
```
Here we create a new [`HTMLImageElement`](https://developer.mozilla.org/en-US/docs/Web/API/HTMLImageElement) object using the [`Image()`](https://developer.mozilla.org/en-US/docs/Web/API/HTMLImageElement/Image) constructor. The returned object is the same type as that which is returned when you grab a reference to an existing [`<img>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img) element. We then set its [`src`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img#attr-src) attribute to equal our Firefox logo image. At this point, the browser starts loading the image.

3. We could now try to embed the image using `drawImage()`, but we need to make sure the image file has been loaded first, otherwise the code will fail. We can achieve this using the `onload` event handler, which will only be invoked when the image has finished loading. Add the following block below the previous one:
```
image.onload = function() {
    ctx.drawImage(image, 50, 50);
}
```
If you load your example in the browser now, you should see the image embedded in the canvas.

4. But there's more! What if we want to display only a part of the image, or to resize it? We can do both with the more complex version of `drawImage()`. Update your `ctx.drawImage()` line like so:
```
ctx.drawImage(image, 20, 20, 185, 175, 50, 50, 185, 175);
```

* The first parameter is the image reference, as before.
* Parameters 2 and 3 define the coordinates of the top left corner of the area you want to cut out of the loaded image, relative to the top-left corner of the image itself. Nothing to the left of the first parameter or above the second will be drawn.
* Parameters 4 and 5 define the width and height of the area we want to cut out from the original image we loaded.
* Parameters 6 and 7 define the coordinates at which you want to draw the top-left corner of the cut-out portion of the image, relative to the top-left corner of the canvas.
* Parameters 8 and 9 define the width and height to draw the cut-out area of the image. In this case, we have specified the same dimensions as the original slice, but you could resize it by specifying different values.

The final example should look like so:

(See the finished product [here](https://andrewsrea.github.io/My_Learning_Port/JavaScript/Client-side_Web_APIs/Drawing_Graphics/canvas-template-4.html), and the source code [here](https://github.com/AndrewSRea/My_Learning_Port/blob/main/JavaScript/Client-side_Web_APIs/Drawing_Graphics/canvas-template-4.html).)

## Loops and animations

We have so far covered some very basic uses of 2D canvas, but really you won't experience the full power of canvas unless you update or animate it in some way. After all, canvas does provide scriptable images! If you aren't going to change anything, then you might as well just use static images and save yourself all the work.

### Creating a loop

Playing with loops in canvas is rather fun -- you can run canvas commands inside a [`for`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for) (or other type of) loop just like any other JavaScript code.

Let's build a simple example.

1. Make another fresh copy of our canvas template ([1_canvas_template.html](https://github.com/mdn/learning-area/blob/master/javascript/apis/drawing-graphics/getting-started/1_canvas_template.html)) and open it in your code editor.

2. Add the following line to the bottom of your JavaScript. This contains a new method, [`translate()`](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/translate), which moves the origin point of the canvas:
```
ctx.translate(width/2, height/2);
```
This causes the coordinate origin (0, 0) to be moved to the center of the canvas, rather than being at the top left corner. This is very useful in many situations, like this one, where we want our design to be drawn relative to the center of the canvas.

3. Now add the following code to the bottom of the JavaScript:
```
function degToRad(degrees) {
    return degrees * Math.PI / 180;
};

function rand(min, max) {
    return Math.floor(Math.random() * (max-min+1)) + (min);
}

let length = 250;
let moveOffset = 20;

for(var i = 0; i < length; i++) {

}
```
Here we are implementing the same `degToRad()` function we saw in the triangle example above, a `rand()` function that returns a random number between given lower and upper bounds, `length` and `moveOffset` variables (which we'll find out more about later), and an empty `for` loop.

4. The idea here is that we'll draw something on the canvas inside the `for` loop, and iterate on it each time so we can create something interesting. Add the following code inside your `for` loop:
```
ctx.fillStyle = 'rgba(' + (255-length) + ', 0, ' + (255-length) + ', 0.9)';
ctx.beginPath();
ctx.moveTo(moveOffset, moveOffset);
ctx.lineTo(moveOffset+length, moveOffset);
let triHeight = length/2 * Math.tan(degToRad(60));
ctx.lineTo(moveOffset+(length/2), moveOffset+triHeight);
ctx.lineTo(moveOffset, moveOffset);
ctx.fill();

length--;
moveOffset += 0.7;
ctx.rotate(degToRad(5));
```
So on each iteration, we:

* Set the `fillStyle` to be a shade of slightly transparent purple, which changes each time based on the value of `length`. As you'll see later, the length gets smaller each time the loop runs, so the effect here is that the color gets brighter with each successive triangle drawn.
* Begin the path.
* Move the pen to a coordinate of `(moveOffset, moveOffset)`. This variable defines how far we want to move each time we draw a new triangle.
* Draw a line to a coordinate of `(moveOffset+length, moveOffset)`. This draws a line of length `length` parallel to the X axis.
* Calculate the triangle's height, as before.
* Draw a line to the downward-pointing corner of the triangle, then draw a line back to the start of the triangle.
* Call `fill()` to fill in the triangle.
* Update the variables that describe the sequence of triangles, so we can be ready to draw the next one. We decrease the `length` value by 1, so the triangles get smaller each time; increase `moveOffset` by a small amount so each successive triangle is slightly further away, and use another new function, [`rotate()`](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/rotate), which allows us to rotate the entire canvas! We rotate it by 5 degrees before drawing the next triangle.

That's it! The final example should look like so:

(See the finished product [here](https://andrewsrea.github.io/My_Learning_Port/JavaScript/Client-side_Web_APIs/Drawing_Graphics/canvas-template-5.html), and the source code [here](https://github.com/AndrewSRea/My_Learning_Port/blob/main/JavaScript/Client-side_Web_APIs/Drawing_Graphics/canvas-template-5.html).)

At this point, we'd like to encourage you to play with the example and make it your own! For example:

* Draw rectangles or arcs instead of triangles, or even embed images.
* Play with the `length` and `moveOffset` values.
* Introduce some random numbers using that `rand()` function we included above but didn't use.

### Animations

The loop example we built above was fun, but really you need a constant loop that keeps going and going for any serious canvas applications (such as games and real time visualizations). If you think of your canvas as being like a movie, you really want the display to update on each frame to show the updated view, with an ideal refresh rate of 60 frames per second so that movement appears nice and smooth to the human eye.

There are a few JavaScript functions that will allow you to run functions repeatedly, several times a second, the best one for our purposes here being [`window.requestAnimationFrame()`](https://developer.mozilla.org/en-US/docs/Web/API/window/requestAnimationFrame). It takes one parameter -- the name of the function you want to run for each frame. The next time the browser is ready to update the screen, your function will get called. If that function draws the new update to your animation, then calls `requestAnimationFrame()` again just before the end of the function, the animation loop will continue to run. The loop ends when you stop calling `requestAnimationFrame()` or if you call [`window.cancelAnimationFrame()`](https://developer.mozilla.org/en-US/docs/Web/API/Window/cancelAnimationFrame) after calling `requestAnimationFrame()` but before the frame is called.

<hr>

**Note**: It's good practice to call `cancelAnimationFrame()` from your main code when you're done using the animation, to ensure that no updates are still waiting to be run.

<hr>

The browser works out complex details such as making the animation run at a consistent speed, and not wasting resources animating things that can't be seen.

To see how it works, let's quickly look again at our Bouncing Balls example ([see it live](https://andrewsrea.github.io/My_Learning_Port/JavaScript/Intro_JS_Objects/Object_Building_Practice/index.html), and also see [the source code](https://github.com/AndrewSRea/My_Learning_Port/blob/main/JavaScript/Intro_JS_Objects/Object_Building_Practice/index.html)). The code for the loop that keeps everything moving looks like this:
```
function loop() {
    ctx.fillStyle = 'rgba(0, 0, 0, 0.25)';
    ctx fillRect(0, 0, width, height);

    for(let i = 0; i < balls.length; i++) {
        balls[i].draw();
        balls[i].update();
        balls[i].collisionDetect();
    }

    requestAnimationFrame(loop);
}

loop();
```
We run the `loop()` function nonce at the bottom of the code to start the cycle, drawing the first animation frame; the `loop()` function then takes charge of calling `requestAnimationFrame(loop)` to run the next frame of animation, again and again.

Note that on each frame, we are completely clearing the canvas and redrawing everything. For every ball present, we draw it, update its position, and check to see if it is colliding with any other balls. Once you've drawn a graphic to a canvas, there's no way to manipulate that graphic individually like you can with DOM elements. You can't move each ball around on the canvas because once it's drawn, it's part of the canvas, and is not an individual accessible element or object. Instead you have to erase and redraw, either by erasing the entire frame and redrawing everything, or by having code that knows exactly what parts need to be erased and only erases and redraws the minimum area of the canvas necessary.

Optimizing animation of graphics is an entire specialty of programming, with lots of clever techniques available. Those are beyond what we need for our example, though!

In general, the process of doing a canvas animation involves the following steps:

1. Clear the canvas contents (e.g. with [`fillRect()`](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/fillRect) or [`clearRect()`](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/clearRect)).
2. Save state (if necessary) using [`save()`](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/save) -- this is needed when you want to save settings you've updated on the canvas before continuing, which is useful for more advanced applications.
3. Draw the graphics you are animating.
4. Restore the settings you saved in step 2, using [`restore()`](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/restore).
5. Call `requestAnimationFrame()` to schedule drawing of the next frame of the animation.

<hr>

**Note**: We won't cover `save()` and `restore()` here, but they are explained nicely in our [Transformations](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/Transformations) tutorial (and the ones that follow it).

<hr>

### A simple character animation

Now let's create our own simple animation -- we'll get a character from a certain rather awesome retro computer game to walk across the screen.

1. Make another fresh copy of our canvas template ([1_canvas_template.html](https://github.com/mdn/learning-area/blob/master/javascript/apis/drawing-graphics/getting-started/1_canvas_template.html)) and open it in your code editor. Make a copy of [walk-right.png](https://github.com/mdn/learning-area/blob/master/javascript/apis/drawing-graphics/loops_animation/walk-right.png) in the same directory.

2. At the bottom of the JavaScript, add the following line to once again make the coordinate origin sit in the middle of the canvas:
```
ctx.translate(width/2, height/2);
```

3. Now let's create a new [`HTMLImageElement`](https://developer.mozilla.org/en-US/docs/Web/API/HTMLImageElement) object, set its [`src`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img#attr-src) to the image we want to load, and add an `onload` event handler that will cause the `draw()` function  to fire when the image is loaded:
```
let image = new Image();
image.src = 'walk-right.png';
image.onload = draw;
```

4. Now we'll add some variables to keep track of the position the sprite is to be drawn on the screen, and the sprite number we want to display.
```
let sprite = 0;
let posX = 0;
```
Let's explain the spritesheet image (which we have respectfully borrowed from Mike Thomas' [Create a sprite sheet walk cycle using CSS animation](https://atomicrobotdesign.com/blog/htmlcss/create-a-sprite-sheet-walk-cycle-using-using-css-animation/)). The image looks like this:

![Image of the spritesheet used for our character animation](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Client-side_web_APIs/Drawing_graphics/walk-right.png)

It contains six sprites that make up the whole walking sequence -- each one is 102 pixels wide and 148 pixels high. To display each sprite cleanly, we will have to use `drawImage()` to chop out a single sprite image from the spritesheet and display only that part, like we did above with the Firefox logo. The X coordinate of the slice will have to be a multiple of 102, and the Y coordinate will always be 0. The slice size will always be 102 by 148 pixels.

5. Now let's insert an empty `draw()` function at the bottom of the code, ready for filling up with some code:
```
function draw() {

};
```

6. The rest of the code in this section goes inside `draw()`. First, add the following line, which clears the canvas to prepare for drawing each frame. Notice that we have to specify the top-left corner of the rectangle as `-(width/2)`, `-(height/2)` because we specified the origin position as `width/2, height/2` earlier on.
```
ctx.fillRect(-(width/2), -(height/2), width, height);
```

7. Next, we'll draw our image using `drawImage()` -- the 9-parameter version. Add the following:
```
ctx.drawImage(image, (sprite*102), 0, 102, 148, 0+posX, -74, 102, 148);
```
As you can see: