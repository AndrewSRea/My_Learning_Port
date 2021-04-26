# Image gallery

Now that we've looked at the fundamental building blocks of JavaScript, we'll test your knowledge of loops, functions, conditionals, and events by getting you to build a fairly common item you'll see on a lot of websites--a JavaScript-powered image gallery.

## Starting point

To get this assessment started, you should go and [grab the ZIP](https://github.com/mdn/learning-area/blob/master/javascript/building-blocks/gallery/gallert-start.zip?raw=true) file for the example, unzip it somewhere on your computer, and do the exercise locally to begin with.

Alternatively, you could use a site like [JSBin]() or [Glitch]() to do your assessment. You could paste the HTML, CSS, and JavaScript into one of these online editors. If the online editor you are using doesn't have separate JavaScript/CSS panels, feel free to put them inline `<script>`/`<style>` elements inside the HTML page.

<hr>

**Note**: If you get stuck, then you may seek help in the Mozilla Developer Network--see the [Assessment or further help]() section at the bottom of this page.

<hr>

## Project brief

You have been provided with some HTML, CSS, and image assets and a few lines of JavaScript code; you need to write the necessary JavaScript to turn this into a working program. The HTML body looks like this:
```
<h1>Image gallery example</h1>

<div class="full-img">
    <img class="displayed-img" src="images/pic1.jpg">
    <div class="overlay"></div>
    <button class="dark">Darken</button>
</div>

<div classs="thumb-bar">

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

To give you more of an idea, have a look at the [finished example]() (no peeking at the source code!)

## Steps to complete

