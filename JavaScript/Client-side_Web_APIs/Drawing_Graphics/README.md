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

**Note** Basic canvas functionality is supported well across browsers, with the exception of IE 8 and below for 2D canvas, and IE 11 and below for WebGL.

<hr>

## Active learning: Getting started with a <canvas>