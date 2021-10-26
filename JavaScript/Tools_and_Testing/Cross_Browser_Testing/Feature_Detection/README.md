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

#### @supports

In recent times, CSS has had its own native feature detection mechanism introduced -- the [`@supports`](https://developer.mozilla.org/en-US/docs/Web/CSS/@supports) at-rule. This works in a similar manner to [media queries](https://developer.mozilla.org/en-US/docs/Web/CSS/Media_Queries) (see also [Responsive design problems](https://github.com/AndrewSRea/My_Learning_Port/tree/main/JavaScript/Tools_and_Testing/Cross_Browser_Testing/Handling_HTML_CSS_Problems#responsive-design-problems)), except that instead of selectively applying CSS depending on a media feature like a resolution, screen width, or aspect ratio, it selectively applies CSS depending on whether a CSS feature is supported.

For example, we could rewrite our previous example to use `@supports` -- see [supports-feature-detect.html](https://github.com/mdn/learning-area/blob/master/tools-testing/cross-browser-testing/feature-detection/supports-feature-detect.html) and [supports-styling.css](https://github.com/mdn/learning-area/blob/master/tools-testing/cross-browser-testing/feature-detection/supports-styling.css). If you look at the latter, you'll see a couple of `@supports` blocks. For example:
```
@supports (flex-flow: row) and (flex: 1) {

    main {
        display: flex;
    }

    main div {
        padding-right: 4%;
        flex: 1;
    }

    main div:last-child {
        padding-right: 0;
    }

}
```
This at-rule block applies the CSS rule within only if the current browser supports both the `flex-flow: row` and `flex: 1` declarations. For each condition to work, you need to include a complete declaration (not just a property name) and NOT include the semi-colon on the end.

`@supports` also has `OR` and `NOT` logic available. The other block applies the float layout if the flexbox properties are not available:
```
@supports not (flex-flow: row) and (flex: 1) {

    /* rules in here */

}
```
This may look a lot more convenient than the previous example. We can do all of our feature detection in CSS, no JavaScript required, and we can handle all the logic in a single CSS file, cutting down on HTTP requests. The problem here is browser support. `@supports` is not supported at all in IE, and only supported in very recent versions of Safari/iOS WebKit (9+/9.2+), whereas the JavaScript version should work in much older browsers (probably back to IE8 or 9, although older versions of IE will have additional problems, such as not supporting [`Document.querySelector`](https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector), and having a messed up box model).

### JavaScript

We already saw an example of a JavaScript feature detection test earlier. Generally, such tests are done via one of the following common patterns:

#### Summary of JavaScript feature detection techniques

| Feature detection type | Explanation | Example |
| --- | --- | --- |
| *If member in object* | Check whether a certain method or property (typically an entry point into using the API or other feature you are detecting for) exists in its parent Object. | `if("geolocation" in navigator) { ... } |
| *Property on element* | Create an element in memory using [`Document.createElement()`](https://developer.mozilla.org/en-US/docs/Web/API/Document/createElement) and then check if a property exists on it. The example shown is a way of detecting [HTML5 Canvas](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API) support. | `function supports_canvas() { return !!document.createElement('canvas').getContext; } <br> if(supports_canvas()) { ... } |
| *Method on element return value* | Create an element in memory using [`Document.createElement()`](https://developer.mozilla.org/en-US/docs/Web/API/Document/createElement) and then check if a method exists on it. If it does, check what value it returns. | See [Dive into HTML5 Video Formats detection](https://diveinto.html5doctor.com/detect.html#video-formats) test. |
| *Property on element retains value* | Create an element in memory using [`Document.createElement()`](https://developer.mozilla.org/en-US/docs/Web/API/Document/createElement), set a property to a certain value, then check to see if the value is retained. | See [Dive into HTML5 `<input>` types detection](https://diveinto.html5doctor.com/detect.html#input-types) test. |

<hr>

**Note**: The double `NOT` in the above example (`!!`) is a way to force a return value to become a "proper" Boolean value, rather than a [Truthy](https://developer.mozilla.org/en-US/docs/Glossary/Truthy)/[Falsy](https://developer.mozilla.org/en-US/docs/Glossary/Falsy) value that may skew the results.

<hr>

The [Dive into HTML5 Detecting HTML5 Features](https://diveinto.html5doctor.com/detect.html) page has a lot more useful feature detection tests besides the ones listed above, and you can generally find a feature detection test for most things by searching for "detect support for YOUR-FEATURE-HERE" in your favorite search engine. Bear in mind, though, that some features are known to be undetectable -- see Modernizr's list of [Undetectables](https://github.com/Modernizr/Modernizr/wiki/Undetectables).

#### matchMedia

We also wanted to mention the [`Window.matchMedia`](https://developer.mozilla.org/en-US/docs/Web/API/Window/matchMedia) JavaScript feature at this point, too. This is a property that allows you to run media query tests inside JavaScript. It looks like this:
```
if (window.matchMedia("(max-width: 480px)").matches) {
    // run JavaScript in here
}
```
As an example, our [Snapshot](https://github.com/chrisdavidmills/snapshot) demo makes use of it to selectively apply the Brick JavaScript library and use it to handle the UI layout, but only for the small screen layout (480px wide or less). We first use the `media` attribute to only apply the Brick CSS to the page if the page width is 480px or less:
```
<link href="dist/brick.css" type="text/css" rel="stylesheet" media="all and (max-width: 480px)">
```
We then use `matchMedia()` in the JavaScript several times, to only run Brick navigation functions if we are on the small screen layout. (In wider screen layouts, everything can be seen at once, so we don't need to navigate between different views.)
```
if (window.matchMedia("(max-width: 480px)").matches) {
    deck.shuffleTo(1);
}
```

## Using Modernizr to implement feature detection

It is possible to implement your own feature detection tests using techniques like the ones detailed above. You might as well use a dedicated library, however, as it makes things much easier. The mother of all feature detection libraries is [Modernizr](https://modernizr.com/), and it can detect just about everything you'll ever need. Let's look at how to use it now.

When you are experimenting with Modernizr, you might as well use the development build, which includes every possible feature detection test. Download this now by:

1. Clicking on the [Development](https://modernizr.com/download?MessageChannel-adownload-ambientlight-animation-apng-appearance-applicationcache-arrow-atobbtoa-audio-audioloop-audiopreload-backdropfilter-backgroundblendmode-backgroundcliptext-backgroundsize-batteryapi-bdi-beacon-bgpositionshorthand-bgpositionxy-bgrepeatspace_bgrepeatround-bgsizecover-blobconstructor-bloburls-blobworkers-borderimage-borderradius-boxshadow-boxsizing-canvas-canvasblending-canvastext-canvaswinding-capture-checked-classlist-contains-contenteditable-contextmenu-cookies-cors-createelementattrs_createelement_attrs-cryptography-cssall-cssanimations-csscalc-csschunit-csscolumns-cssescape-cssexunit-cssfilters-cssgradients-cssgrid_cssgridlegacy-csshyphens_softhyphens_softhyphensfind-cssinvalid-cssmask-csspointerevents-csspositionsticky-csspseudoanimations-csspseudotransitions-cssreflections-cssremunit-cssresize-cssscrollbar-csstransforms-csstransforms3d-csstransformslevel2-csstransitions-cssvalid-cssvhunit-cssvmaxunit-cssvminunit-cssvwunit-cubicbezierrange-customelements-customevent-customprotocolhandler-dart-datachannel-datalistelem-dataset-datauri-dataview-dataworkers-details-devicemotion_deviceorientation-directory-display_runin-displaytable-documentfragment-ellipsis-emoji-es5-es5array-es5date-es5function-es5object-es5string-es5syntax-es5undefined-es6array-es6collections-es6math-es6number-es6object-es6string-eventlistener-eventsource-exiforientation-fetch-fileinput-filereader-filesystem-flash-flexbox-flexboxlegacy-flexboxtweener-flexwrap-focuswithin-fontface-forcetouch-formattribute-formvalidation-framed-fullscreen-gamepads-generatedcontent-generators-geolocation-getrandomvalues-getusermedia-hairline-hashchange-hidden-hiddenscroll-history-hovermq-hsla-htmlimports-ie8compat-imgcrossorigin-indexeddb-indexeddbblob-inlinesvg-input-inputformaction-inputformenctype-inputformmethod-inputformtarget-inputtypes-intl-jpeg2000-jpegxr-json-lastchild-ligatures-localizednumber-localstorage-lowbandwidth-lowbattery-matchmedia-mathml-mediaqueries-microdata-multiplebgs-mutationobserver-notification-nthchild-objectfit-olreversed-oninput-opacity-outputelem-overflowscrolling-pagevisibility-passiveeventlisteners-peerconnection-performance-picture-placeholder-pointerevents-pointerlock-pointermq-postmessage-preserve3d-progressbar_meter-promises-proximity-queryselector-quotamanagement-regions-requestanimationframe-requestautocomplete-rgba-ruby-sandbox-scriptasync-scriptdefer-scrollsnappoints-seamless-search-serviceworker-sessionstorage-shapes-sharedworkers-siblinggeneral-sizes-smil-speechrecognition-speechsynthesis-srcdoc-srcset-strictmode-stylescoped-subpixelfont-supports-svg-svgasimg-svgclippaths-svgfilters-svgforeignobject-target-template-templatestrings-textalignlast-textareamaxlength-textshadow-texttrackapi_track-time-todataurljpeg_todataurlpng_todataurlwebp-touchevents-transferables-typedarrays-unicode-unicoderange-unknownelements-urlparser-urlsearchparams-userdata-userselect-variablefonts-vibrate-video-videoautoplay-videocrossorigin-videoloop-videopreload-vml-webaudio-webgl-webglextensions-webintents-webp-webpalpha-webpanimation-webplossless_webp_lossless-websockets-websocketsbinary-websqldatabase-webworkers-willchange-wrapflow-xdomainrequest-xhr2-xhrresponsetype-xhrresponsetypearraybuffer-xhrresponsetypeblob-xhrresponsetypedocument-xhrresponsetypejson-xhrresponsetypetext-addtest-atrule-domprefixes-hasevent-mq-prefixed-prefixedcss-prefixedcssvalue-prefixes-setclasses-shiv-testallprops-testprop-teststyles) link.
2. Clicking the big pink *Build* button on the page that comes up.
3. Clicking the top *Download* link in the dialog box that appears.

Save it somewhere sensible, like the directory you've been creating your other examples for in this article.

When you are using Modernizr in production, you can go to the [Download page](https://modernizr.com/download?setclasses) you've already visited and click the plus buttons for only the features you need feature detects for. Then when you click the *Build* button, you'll download a custom build containing only those feature detects, making for a much smaller file size.

### CSS

Let's have a look at how Modernizr works in terms of selectively applying CSS.

1. First, make a copy of [supports-feature-detect.html](https://github.com/mdn/learning-area/blob/master/tools-testing/cross-browser-testing/feature-detection/supports-feature-detect.html) and [supports-styling.css](https://github.com/mdn/learning-area/blob/master/tools-testing/cross-browser-testing/feature-detection/supports-styling.css). Save then as **modernizr-css.html** and **modernizr-css.css**.

2. Update you [`<link>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/link) element in your HTML so it points to the correct CSS file. (You should also update your [`<title>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/title) element to something more suitable.)
```
<link href="modernizr-css.css" rel="stylesheet">
```

3. Above this `<link>` element, add a [`<script>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/script) element to apply the Modernizr library to the page, as shown below. This needs to be applied to the page before any CSS (or JavaScript) that might make use of it.
```
<script src="modernizr-custom.js"></script>
```

4. Now edit your opening `<html>` tag so that it looks like this:
```
<html class="no-js">
```

<hr>

:warning: **Warning!** You will run into problems when you download the [supports-styling.css](https://github.com/mdn/learning-area/blob/master/tools-testing/cross-browser-testing/feature-detection/supports-styling.css) file into a local directory. Your terminal will display some warnings like `{ expected` and `at-rule or selector expected`. The `@supports` code blocks have been written incorrectly. Basically, the `AND` logic on the `@supports` lines needs another set of parentheses `()` around it. The code needs to be changed as follows:
```
@supports ((flex-flow: row) and (flex: 1)) {

    ...

}

@supports not ((flex-flow: row) and (flex: 1)) {

    ...

}
```

<hr>

At this point, try loading your page, and you'll get an idea of how Modernizr works for CSS features. If you look at the DOM inspector  of your browser's developer tools, you'll see that Modernizr has updated your `<html>` `class` value like so:
```
<html class="js no-htmlimports sizes flash transferables applicationcache blobconstructor blob-constructor cookies cors ...AND LOADS MORE VALUES!>
```
It now contains a large number of classes that indicate the support status of different technology features. As an example, if the browser didn't support flexbox at all, `<html>` would be given a class name of `no-flexbox`. If it did support modern flexbox, it would get a class name of `flexbox`. If you search through the class list, you'll also see others relating to flexbox, like:

* `flexboxlegacy` for the old flexbox spec (2009).
* `flexboxtweener` for 2011 in-between stntax supported by IE10.
* `flexwrap` for the [`flex-wrap`](https://developer.mozilla.org/en-US/docs/Web/CSS/flex-wrap) property, which isn't present in some implementations.

<hr>

**Note**: You can find a list of what all the class names mean -- see [Features detected by Modernizr](https://modernizr.com/docs#features).

<hr>

Moving on, let's update our CSS to use Modernizr rather than `@supports`. Go into **modernizr-css.css**, and replace the two `@supports` blocks with the following:
```
/* Properties for browsers with modern flexbox */

.flexbox main {
    display: flex;
}

.flexbox main div {
    padding-right: 4%;
    flex: 1;
}

.flexbox main div:last-child {
    padding-right: 0;
}

/* Fallbacks for browsers that don't support modern flexbox */

.no-flexbox main div {
    width: 22%;
    float: left;
    padding-right: 4%;
}

.no-flexbox main div:last-child {
    padding: right;
}

.no-flexbox footer {
    clear: left;
}
```
So how does this work? Because all those class names have been put on the `<html>` element, you can target browsers that do or don't support a feature using specific descendant selectors. So here we're applying the top set of rules only to browsers that do support flexbox, and the bottom set of rules only to browsers that don't (`no-flexbox`).

<hr>

**Note**: Bear in mind that all of Modernizr's HTML and JavaScript feature tests are also reported in these class names, so you can quite happily apply CSS selectively based on whether the browser supports HTML or JavaScript features, if needed.

<hr>

### JavaScript

Modernizr is also equally well-prepared for implementing JavaScript feature detects, too. It does this by making the global `Modernizr` object available to the page it is applied to, which contains results of the feature detects as `true`/`false` properties.

For example, load up our [modernizr-css.html](https://github.com/mdn/learning-area/blob/master/tools-testing/cross-browser-testing/feature-detection/modernizr-css.html) example in your browser, then try going to your JavaScript console and typing `Modernizr`, followed by some of those class names. (They are here, too.) For example:
```
Modernizr.flexbox
Modernizr.websqldatabase
Modernizr.xhr2
Modernizr.fetch
```
The console will return `true`/`false` values to indicate whether your browser supports those features or not.

Let's look at an example to show how you'd use those properties.

1. First of all, make a local copy of the [modernizr-js.html](https://github.com/mdn/learning-area/blob/master/tools-testing/cross-browser-testing/feature-detection/modernizr-js.html) example file.

2. Attach the Modernizr library to the HTML using a `<script>` element, as we have done in previous demos. Put it above the existing `<script>` element, which is attaching the Google Maps API to the page.

3. Next, fill in the `YOUR-API-KEY` placeholder text in the second `<script>` element (as it is now) with a valid Google Maps API key. To get a key, sign in to a Google account, go to the [Get a Key/Authentication](https://developers.google.com/maps/documentation/javascript/get-api-key) page, then click the blue *Get a Key* button and follow the instructions.

4. Finally, add another `<script>` element at the bottom of the HTML body (just before the `</body>` tag), and put the following script inside the tags:
```
if (Modernizr.geolocation) {

    navigator.geolocation.getCurrentPosition(function(position) {

        let latlng = new google.maps.LatLng(position.coords.latitude,position.coords.longitude);
        let myOptions = {
            zoom: 8,
            center: latlng,
            mapTypeId: google.maps.MapTypeId.TERRAIN,
            disableDefaultUI: true
        }
        let map = new google.maps.Map(document.getElementById("map_canvas"), myOptions);
    });

} else {
    const para = document.createElement('p');
    para.textContent = 'Argh, no geolocation!';
    document.body.appendChild(para);
}
```

Try your example out! Here we use the `Modernizr.geolocation` test to check whether geolocation is supported by the current browser. If it is, we run some code that gets your device's current location, and plots it on a Google Map.

## Summary

This article covered feature detection in a reasonable amount of detail, going through the main concepts and showing you how to both implement your own feature detection tests and use the Modernizr library to implement tests more easily.

Next up, we'll start looking at automated testing.

<hr>

[[Previous page]](https://github.com/AndrewSRea/My_Learning_Port/tree/main/JavaScript/Tools_and_Testing/Cross_Browser_Testing/Handling_Accessibility_Problems#handling-common-accessibility-problems) - [[Top]](https://github.com/AndrewSRea/My_Learning_Port/tree/main/JavaScript/Tools_and_Testing/Cross_Browser_Testing/Feature_Detection#implementing-feature-detection) - [[Next page]]()