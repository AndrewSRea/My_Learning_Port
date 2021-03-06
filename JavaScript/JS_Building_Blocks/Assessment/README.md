# Image gallery

Now that we've looked at the fundamental building blocks of JavaScript, we'll test your knowledge of loops, functions, conditionals, and events by getting you to build a fairly common item you'll see on a lot of websites--a JavaScript-powered image gallery.

## Starting point

To get this assessment started, you should go and [grab the ZIP](https://github.com/mdn/learning-area/blob/master/javascript/building-blocks/gallery/gallery-start.zip?raw=true) file for the example, unzip it somewhere on your computer, and do the exercise locally to begin with.

Alternatively, you could use a site like [JSBin](https://jsbin.com) or [Glitch](https://glitch.com) to do your assessment. You could paste the HTML, CSS, and JavaScript into one of these online editors. If the online editor you are using doesn't have separate JavaScript/CSS panels, feel free to put inline `<script>`/`<style>` elements inside the HTML page.

## Project brief

You have been provided with some HTML, CSS, and image assets and a few lines of JavaScript code; you need to write the necessary JavaScript to turn this into a working program. The HTML body looks like this:
```
<h1>Image gallery example</h1>

<div class="full-img">
    <img class="displayed-img" src="images/pic1.jpg">
    <div class="overlay"></div>
    <button class="dark">Darken</button>
</div>

<div class="thumb-bar">

</div>
```
The example looks like this:

![Image gallery example](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Image_gallery/gallery.png)

The most interesting parts of the example's CSS file:

* It absolutely positions the three elements inside the `full-img <div>` -- the `<img>` in which the full-sized image is displayed, an empty `<div>` that is sized to be the same size as the `<img>` and put right over the top of it (this is used to apply a darkening effect to the image via a semi-transparent background color), and a `<button>` that is used to control the darkening effect.
* It sets the width of any images inside the `thumb-bar <div>` (so-called "thumbnail" images) to 20%, and floats them to the left so they sit next to one another on a line.

Your JavaScript needs to:

* Loop through all the images, and for each one insert an `<img>` element inside the `thumb-bar <div>` that embeds that image in the page.
* Attach an `onclick` handler to each `<img>` inside the `thumb-bar <div>` so that when they are clicked, the corresponding image is displayed in the `displayed-img <img>` element.
* Attach an `onclick` handler to the `<button>` so that when it is clicked, a darken effect is applied to the full-size image. When it is clicked again, the darken effect is removed again.

To give you more of an idea, have a look at the [finished example](https://mdn.github.io/learning-area/javascript/building-blocks/gallery/) (no peeking at the source code!)

## Steps to complete

The following sections describe what you need to do.

### Looping through the images

We've already provided you with lines that store a reference to the `thumb-bar <div>` inside a constant called `thumbBar`, create a new `<img>` element, set its `src` attribute to a placeholder value `xxx`, and append this new `<img>` element inside `thumbBar`.

You need to:

1. Put the section of code below the "Looping through images" comment inside a loop that loops through all 5 images--you just need to loop through five numbers, one representing each image.
2. In each loop iteration, replace the `xxx` placeholder value with a string that will equal the path to the image in each case. We are setting the value of the `src` attribute to this value in each case. Bear in mind that in each case, the image is inside the images directory and its name is `pic1.jpg`, `pic2.jpg`, etc.

### Adding an onclick handler to each thumbnail image

In each loop iteration, you need to add an `onclick` handler to the current `newImage`--this handler should find the value of the `src` attribute of the current image. Set the `src` attribute value of the `displayed-img <img>` to the `src` value passed in as a parameter.

Alternatively, you can add one event listener to the thumb bar.

### Writing a handler that runs the darken/lighen button

That just leaves our darken/lighten `<button>`--we've already provided a line that stores a reference to the `<button>` in a constant called `btn`. You need to add an `onclick` handler that:

1. Checks the current class name set on the `<button>`--you can again achieve this by using `getAttribute()`.
2. If the class name is `"dark"`, changes the `<button>` class to `"light"` (using [`setAttribute()`](https://developer.mozilla.org/en-US/docs/Web/API/Element/setAttribute)), its text content to "Lighten", and the [`background-color`](https://developer.mozilla.org/en-US/docs/Web/CSS/background-color) of the overlay `<div>` to `"rgba(0,0,0,0.5)"`.
3. If the class name is not `"dark"`, changes the `<button>` class to `"dark"`, its text content back to "Darken", and the `background-color` of the overlay `<div>` to `"rgba(0,0,0,0)"`.

The following lines provide a basis for achieving the changes stipulated in points 2 and 3 above.
```
btn.setAttribute('class', xxx);
btn.textContent = xxx;
overlay.style.backgroundColor = xxx;
```

## Hints and tips

* You don't need to edit the HTML or CSS in any way.

<hr>

[[Previous page]](https://github.com/AndrewSRea/My_Learning_Port/tree/main/JavaScript/JS_Building_Blocks/Intro_to_Events#introduction-to-events) - [[Beginning of JavaScript Building Blocks module]](https://github.com/AndrewSRea/My_Learning_Port/tree/main/JavaScript/JS_Building_Blocks#javascript-building-blocks) - [[Next module: Introducing JavaScript Objects]](https://github.com/AndrewSRea/My_Learning_Port/tree/main/JavaScript/Intro_JS_Objects#introducing-javascript-objects)