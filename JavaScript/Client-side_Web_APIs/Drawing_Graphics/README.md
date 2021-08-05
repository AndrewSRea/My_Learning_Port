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

OK, our template is done and it's time to move on. (See the finished product [here](), and the source code [here]().)

## 2D canvas basics

As we said above, all drawing operations are done by manipulating a [`CanvasRenderingContext2D`]() object (in our case, `ctx`). Many operations need to be given coordinates to pinpoint exactly where to draw something -- the top left of the canvas is point (0, 0), the horizontal (x) axis runs from left to right, and the vertical (y) axis runs from top to bottom.

![Image of the x and y canvas graph](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Client-side_web_APIs/Drawing_graphics/canvas_default_grid.png)

Drawing shapes tends to be done using the rectangle shape primitive, or by tracing a line along a certain path and then filling in the shape. Below we'll show you how to do both.

### Simple rectangles

Let's start with some simple rectangles.

1. First of all, take a copy of your newly coded canvas template (or make a local copy of [1_canvas_template.html]() if you didn't follow the above steps).

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