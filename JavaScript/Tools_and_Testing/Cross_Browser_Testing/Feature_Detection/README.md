# Implementing feature detection

Feature detection involves working out whether a browser supports a certain block of code, and running different code depending on whether it does (or doesn't) so that the browser can always provide a working experience rather than crashing/erroring in some browsers. This article details how to write your own simple feature detection, how to use a library to speed up implementation, and native features for feature detection such as `@supports`.

## The concept of feature detection

The idea behind feature detection is that you can run a test to determine whether a feature is supported in the current browser, and then conditionally run code to provide an acceptable experience both in browsers that *do* support the feature, and browsers that *don't*. If you don't do this, browsers that don't support the features you are using in your code won't display your sites properly and will just fail, creating a bad user experience.

Let's recap and look at the example we touched on in our [Handling common JavaScript problems](https://github.com/AndrewSRea/My_Learning_Port/tree/main/JavaScript/Tools_and_Testing/Cross_Browser_Testing/Handling_JavaScript_Problems#handling-common-javascript-problems) -- the [Geolocation API](https://developer.mozilla.org/en-US/docs/Web/API/Geolocation_API) (which exposes avaiolable location data for the device the web browser is running on) has the main entry point for its use, a `geolocation` property available on the global [Navigator](https://developer.mozilla.org/en-US/docs/Web/API/Navigator) object. Therefore, you can detect whether the browser supprots geolocation or not by using something like the following:
```
if ("geolocation" in navigator) {
    navigator.geolocation.getCurrentPosition(function(position) {
        // show the location on a map, perhaps using the Google Maps API
    });
} else {
    // Give the user a choice of static maps instead
}
```
It is probably better to use an established feature detection library, however, rather than writing your own all the time. Modernizr is the industry standard for feature detection tests, and we'll look at that later on.

Before we move on, we'd like to say one thing upfront: Don't confuse feature detection with **browser sniffing** (detecting what specific browser is accessing the site). This is a terrible practice that should be discouraged at all costs. See [Using bad browser sniffing code](https://github.com/AndrewSRea/My_Learning_Port/tree/main/JavaScript/Tools_and_Testing/Cross_Browser_Testing/Handling_JavaScript_Problems#using-bad-browser-sniffing-code) for more details.

## Writing your own feature detection tests

In this section, we'll look at implementing your own feature detection tests, in both CSS and JavaScript.

### CSS

You can write tests for CSS features by testing for the existence of *[element.style.property](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/style)* (e.g. `paragraph.style.transform`) in JavaScript.

A classic example might be to test for [Flexbox](https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Flexbox) support in a browser. For browsers that support the newest Flexbox spec, we could use a flexible and robust flex layout. For browsers that don't, we could use a floated layout that works OK, although it is slightly more brittle and hacky, and not as cool-looking.

Let's implement something that demonstrates this, although we'll keep it simple for now.

1. Start by making local copies of our [css-feature-detect.html](https://github.com/mdn/learning-area/blob/master/tools-testing/cross-browser-testing/feature-detection/css-feature-detect.html), [flex-layout.css](https://github.com/mdn/learning-area/blob/master/tools-testing/cross-browser-testing/feature-detection/flex-layout.css), [float-layout.css](https://github.com/mdn/learning-area/blob/master/tools-testing/cross-browser-testing/feature-detection/float-layout.css), and [basic-styling.css](https://github.com/mdn/learning-area/blob/master/tools-testing/cross-browser-testing/feature-detection/basic-styling.css) files. Save them in a new directory.

2. We will add the HTML5 Shiv to our example, too, so that the HTML5 semantic elements will style properly in older versions of IE. Download the latest version (see [Manual installation](https://github.com/aFarkas/html5shiv#manual-installation)), unzip the ZIP file, copy the `html5shiv-printshiv.min.js` and `html5shiv.min.js` files into your example directory, and link to one of the files by putting the following under your [`<title>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/title) element:
```
<script src="html5shiv.min.js"></script>
```

3. Have a look at your example CSS files. You'll see that `basic-styling.css` handles all the styling that we want to give to every browser, whereas the other two CSS files contain the CSS we want to selectively apply to a browser depending on their support levels. You can look at the different effects these two files have by manually changing the CSS file referred to by the sceond [`<link>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/link) element, but let's instead implement some JavaScript to automatically swap them as needed.

4. First, remove the contents of the second `<link>` element's `href` attribute. We will fill this in dynamically later on.

5. Next, add a `<script></script>` element at the bottom of your body (just before the closing `</body>` tag).

6. Give it the following contents:
```
const conditional = document.querySelector('.conditional');
const testElem = document.createElement('div');
if (testElem.style.flex !== undefined && testElem.style.flexFlow !== undefined) {
    conditional.setAttribute('href', 'flex-layout.css');
} else {
    conditional.setAttribute('href', 'float-layout.css');
}
```

Here we are grabbing a reference to the second `<link>` element, and creating a `<div>` element as part of our test. In our conditional statement, we test that the [`flex`](https://developer.mozilla.org/en-US/docs/Web/CSS/flex) and [`flex-flow`](https://developer.mozilla.org/en-US/docs/Web/CSS/flex-flow) properties exist in the browser. Note how the JavaScript representations of those properties that are stored inside the [`HTMLElement.style`](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/style) object use lower camel case, not hyphens, to separate the words.

<hr>

**Note**: If you have trouble getting this to work, you can compare it to our [css-feature-detect-finished.html](https://github.com/mdn/learning-area/blob/master/tools-testing/cross-browser-testing/feature-detection/css-feature-detect-finished.html) code. (Also, see the [live version](https://mdn.github.io/learning-area/tools-testing/cross-browser-testing/feature-detection/css-feature-detect-finished.html).)

<hr>

When you save everything and try out your example, you should see the flexbox layout applied to the page if the browser supports modern flexbox, and the float layout if not.

<hr>

**Note**: Often such an approach is overkill for a minor feature detection problem. You can often get away with using multiple vendor prefixes and fallback properties, as described in [CSS fallback behavior](https://github.com/AndrewSRea/My_Learning_Port/tree/main/JavaScript/Tools_and_Testing/Cross_Browser_Testing/Handling_HTML_CSS_Problems#css-fallback-behavior) and [Handling CSS prefixes](https://github.com/AndrewSRea/My_Learning_Port/tree/main/JavaScript/Tools_and_Testing/Cross_Browser_Testing/Handling_HTML_CSS_Problems#handling-css-prefixes).

<hr>

<hr>