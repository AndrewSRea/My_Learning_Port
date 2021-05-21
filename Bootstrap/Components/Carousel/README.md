# Carousel

A slideshow component for cycling through elements--images or slides of text--like a carousel.

## How it works

The carousel is a slideshow for cycling through a series of content, built with CSS 3D transforms and a bit of JavaScript. It works with a series of images, text, or custom markup. It also includes support for previous/next controls and indicators.

In browsers where the [Page Visibility API](https://www.w3.org/TR/page-visibility/) is supported, the carousel will avoid sliding when the webpage is not visible to the user (such as when the browser tab is inactive, the browser window is minimized, etc.).

<hr>

:warning: The animation effect of this component is dependent on the `prefers-reduced-motion` media query. See the [reduced motion section of Bootstrap's documentation](https://github.com/AndrewSRea/My_Learning_Port/tree/main/Bootstrap/Getting_Started/Accessibility#reduced-motion).

<hr>

Please be aware that nested carousels are not supported, and carousels are generally not compliant with accessibility standards.

## Example

Carousels don't automatically normalize slide dimensions. As such, you may need to use additional utilities or custom styles to apporpriately size content. While carousels support previous/next controls and indicators, they're not explicitly required. Add and customize as you see fit.

**The `.active` class needs to be added to one of the slides**, otherwise the carousel will not be visible. Also, be sure to set a unique `id` on the `.carousel`for optional controls, especially if you're using multiple carousels on a single page. Control and indicator elements must have a `data-bs-target` attribute (or `href` for links) that matches the `id` of the `.carousel` element.

### Slides only

Here's a carousel with slides only. Note the presence of the `.d-block` and `.w-100` on carousel images to prevent browser default image alignment.
```
<div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
    <div class="carousel-inner">
        <div class="carousel-item active">
            <img src="..." class="d-block w-100" alt="...">
        </div>
        <div class="carousel-item">
            <img src="..." class="d-block w-100" alt="...">
        </div>
        <div class="carousel-item">
            <img src="..." class="d-block w-100" alt="...">
        </div>
    </div>
</div>
```
(See the code example above in my accompanying [carousel-examples.html](https://github.com/AndrewSRea/My_Learning_Port/blob/main/Bootstrap/Components/Carousel/carousel-examples.html) file.)

### With controls

Adding in the previous and next controls. Bootstrap recommends using `<button>` elements, but you can use `<a>` elements with `role="button"`.
```
<div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
    <div class="carousel-inner">
        <div class="carousel-item active">
            <img src="..." class="d-block w-100" alt="...">
        </div>
        <div class="carousel-item">
            <img src="..." class="d-block w-100" alt="...">
        </div>
        <div class="carousel-item">
            <img src="..." class="d-block w-100" alt="...">
        </div>
    </div>
    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
    </button>
     <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
    </button>
</div>
```
(This code example can be found in my accompanying [carousel-examples.html](https://github.com/AndrewSRea/My_Learning_Port/blob/main/Bootstrap/Components/Carousel/carousel-examples.html) file.)

### With indicators

You can also add the indicators to the carousel, alongside the controls, too.
```
<div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
    <div class="carousel-indicators">
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
    </div>
    <div class="carousel-inner">
        <div class="carousel-item active">
            <img src="..." class="d-block w-100" alt="...">
        </div>
        <div class="carousel-item">
            <img src="..." class="d-block w-100" alt="...">
        </div>
        <div class="carousel-item">
            <img src="..." class="d-block w-100" alt="...">
        </div>
    </div>
    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
    </button>
     <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
    </button>
</div>
```
(And this code example can be found in my accompanying [carousel-examples.html](https://github.com/AndrewSRea/My_Learning_Port/blob/main/Bootstrap/Components/Carousel/carousel-examples.html) file.)

### With captions

Add captions to your slides easily with the `.carousel-caption` element within any `.carousel-item`. They can be easily hidden on smaller viewports, as shown below, with optional [display utilities](). We hide them initially with `.d-none` and bring them back on medium-sized devices with `.d-md-block`.
```
<div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
    <div class="carousel-indicators">
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
    </div>
    <div class="carousel-inner">
        <div class="carousel-item active">
            <img src="..." class="d-block w-100" alt="...">
            <div class="carousel-caption d-none d-md-block">
                <h5>First slide label</h5>
                <p>Some representative placeholder content for the first slide.</p>
            </div>
        </div>
        <div class="carousel-item">
            <img src="..." class="d-block w-100" alt="...">
            <div class="carousel-caption d-none d-md-block">
                <h5>Second slide label</h5>
                <p>Some representative placeholder content for the second slide.</p>
            </div>
        </div>
        <div class="carousel-item">
            <img src="..." class="d-block w-100" alt="...">
            <div class="carousel-caption d-none d-md-block">
                <h5>Third slide label</h5>
                <p>Some representative placeholder content for the third slide.</p>
            </div>
        </div>
    </div>
    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
    </button>
     <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
    </button>
</div>
```
(And again, this code example can be found in my accompanying [carousel-examples.html](https://github.com/AndrewSRea/My_Learning_Port/blob/main/Bootstrap/Components/Carousel/carousel-examples.html) file.)

### Crossfade

Add `.carousel-fade` to your carousel to animate slides with a fade transition instead of a slide.
```
<div id="carouselExampleFade" class="carousel slide carousel-fade" data-bs-ride="carousel">
    <div class="carousel-inner">
        <div class="carousel-item active">
            <img src="..." class="d-block w-100" alt="...">
        </div>
        <div class="carousel-item">
            <img src="..." class="d-block w-100" alt="...">
        </div>
        <div class="carousel-item">
            <img src="..." class="d-block w-100" alt="...">
        </div>
    </div>
    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
    </button>
     <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
    </button>
</div>
```
(Once again, this code example can be found in my accompanying [carousel-examples.html](https://github.com/AndrewSRea/My_Learning_Port/blob/main/Bootstrap/Components/Carousel/carousel-examples.html) file.)

### Individual `.carousel-item` interval

Add `data-bs-interval=""` to a `.carousel-item` to change the amount of time to delay betwen automatically cycling to the next item.
```
<div id="carouselExampleInterval" class="carousel slide" data-bs-ride="carousel">
    <div class="carousel-inner">
        <div class="carousel-item active" data-bs-interval="10000">
            <img src="..." class="d-block w-100" alt="...">
        </div>
        <div class="carousel-item" data-bs-interval="2000">
            <img src="..." class="d-block w-100" alt="...">
        </div>
        <div class="carousel-item">
            <img src="..." class="d-block w-100" alt="...">
        </div>
    </div>
    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
    </button>
     <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
    </button>
</div>
```
(Again, this code example above in my accompanying [carousel-examples.html](https://github.com/AndrewSRea/My_Learning_Port/blob/main/Bootstrap/Components/Carousel/carousel-examples.html) file.)

### Disable touch swiping

Carousels support swiping left/right on touchscreen devices to move between slides. This can be disabled using the `data-bs-touch` attribute. The example below also does not include the `data-bs-ride` attribute and has `data-bs-interval="false"` so it doesn't autoplay.
```
<div id="carouselExampleControlsNoTouching" class="carousel slide" data-bs-touch="false" data-bs-interval="false">
    <div class="carousel-inner">
        <div class="carousel-item active">
            <img src="..." class="d-block w-100" alt="...">
        </div>
        <div class="carousel-item">
            <img src="..." class="d-block w-100" alt="...">
        </div>
        <div class="carousel-item">
            <img src="..." class="d-block w-100" alt="...">
        </div>
    </div>
    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControlsNoTouching" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
    </button>
     <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControlsNoTouching" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
    </button>
</div>
```
(And again, this code example can be found in my accompanying [carousel-examples.html](https://github.com/AndrewSRea/My_Learning_Port/blob/main/Bootstrap/Components/Carousel/carousel-examples.html) file.)

## Dark variant

Add `.carousel-dark` to the `.carousel` for darker ontrols, indicators, and captions. Controls have been inverted from their default white fill with the `filter` CSS property. Captions and controls have additional Sass variables that customize the `color` and `background-color`.
```
<div id="carouselExampleDark" class="carousel carousel-dark slide" data-bs-ride="carousel">
    <div class="carousel-indicators">
        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
    </div>
    <div class="carousel-inner">
        <div class="carousel-item active" data-bs-interval="10000">
            <img src="..." class="d-block w-100" alt="...">
            <div class="carousel-caption d-none d-md-block">
                <h5>First slide label</h5>
                <p>Some representative placeholder content for the first slide.</p>
            </div>
        </div>
        <div class="carousel-item" data-bs-interval="2000">
            <img src="..." class="d-block w-100" alt="...">
            <div class="carousel-caption d-none d-md-block">
                <h5>Second slide label</h5>
                <p>Some representative placeholder content for the second slide.</p>
            </div>
        </div>
        <div class="carousel-item">
            <img src="..." class="d-block w-100" alt="...">
            <div class="carousel-caption d-none d-md-block">
                <h5>Third slide label</h5>
                <p>Some representative placeholder content for the third slide.</p>
            </div>
        </div>
    </div>
    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
    </button>
     <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
    </button>
</div>
```
(And finally, this code example can be found in my accompanying [carousel-examples.html](https://github.com/AndrewSRea/My_Learning_Port/blob/main/Bootstrap/Components/Carousel/carousel-examples.html) file.)

## Custom transition

The transition duration of `.carousel-item` can be changed with the `$carousel-transition-duration` Sass variable before compiling or custom styles if you're using the compiled CSS. If multiple transitions are applied, make sure the transform transition is defined first (e.g. `transition: transform 2s ease, opacity .5s ease-out`).

## Sass

### Variables

```
$carousel-control-color:               $white;
$carousel-control-width:               15%;
$carousel-control-opacity:             .5;
$carousel-control-hover-opacity:       .9;
$carousel-control-transition:          opacity .15s ease;

$carousel-indicator-width:             30px;
$carousel-indicator-height:            3px;
$carousel-indicator-hit-area-height:   10px;
$carousel-indicator-spacer:            3px;
$carousel-indicator-opacity:           .5;
$carousel-indicator-active-bg:         $white;
$carousel-indicator-active-opacity:    1;
$carousel-indicator-transition:        opacity .6s ease;

$carousel-caption-width:               70%;
$carousel-caption-color:               $white;
$carousel-caption-padding-y:           1.25rem;
$carousel-caption-spacer:              1.25rem;

$carousel-control-icon-width:          2rem;

$carousel-control-prev-icon-bg:        url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='#{$carousel-control-color}'><path d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z'/></svg>");
$carousel-control-next-icon-bg:        url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='#{$carousel-control-color}'><path d="M4.646 1.646a.5.5 0 0 1 0 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z'/></svg>");

$carousel-transition-duration:         .6s;
$carousel-transition:                  transform $carousel-transition-duration ease-in-out;   // Define transform transit first if using multiple transitions (e.g., `transform 2s ease, opacity .5s ease-out`)

$carousel-dark-indicator-active-bg:    $black;
$carousel-dark-caption-color:          $black;
$carousel-dark-control-icon-filter:    invert(1) grayscale(100);
```

## Usage

### Via data attributes

Use data attributes to easily control the position of the carousel. `data-bs-slide` accepts the keywords `prev` or `next`, which alters the slide position relative to its current position. Alternatively, use `data-bs-slide-to` to pass a raw slide index to the carousel `data-bs-slide-to="2"`, which shifts the slide position to a particular index beginning with `0`.

The `data-bs-ride="carousel"` attribute is used to mark a carousel as animating starting at page load. If you don't use `data-bs-ride="carousel"` to initialize your carousel, you have to initialize it yourself. **It cannot be used in combination with (redundant and unnecessary) explicit JavaScript initialization of the same carousel.**

### Via JavaScript

Call carousel manually with:
```
var myCarousel = document.querySelector('#myCarousel');
var carousel = new bootstrap.Carousel(myCarousel);
```

### Options

Options can be passed via data attributes or JavaScript. For data attributes, append the option name to `data-bs-`, as in `data-bs-interval=""`.

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `interval` | number | `5000` | The amount of time to delay between automatically cycling an item. If `false`, carousel will not automatically cycle. |
| `keyboard` | Boolean | `true` | Whether the carousel should react to keyboard events. |
| `pause` | string \| Boolean | `'hover'` | If set to `'hover'`, pauses the cycling of the carousel on `mouseenter` and resumes the cycling of the carousel on `mouseleave`. If set to `false`, hovering over the carousel won't pause it.<br>On touch-enabled devices, when set to `'hover'`, cycling will pause on `touchend` (once the user finished interacting with the carousel) for two intervals, before automatically resuming. Note that this is in addition to the above mouse behavior. |
| `ride` | string \| Boolean | `false` | Autoplays the carousel after the user manually cycles the first item. If set to `'carousel'`, autoplays the carousel on load. |
| `wrap` | Boolean | `true` | Whether the carousel should cycle continuously or have hard stops. |
| `touch` | Boolean | `true` | Whether the carousel should support left/right swipe interactions on touchscreen devices. |

### Methods

<hr>

#### :warning: Asynchronous methods and transitions

All API methods are **asynchronous** and start a **transition**. They return to the caller as soon as the transition is started but **before it ends**. In addition, a method call on a **transitioning component will be ignored**.
[See Bootstrap's JavaScript documentation for more information](https://github.com/AndrewSRea/My_Learning_Port/tree/main/Bootstrap/Getting_Started/JavaScript#asynchronous-functions-and-transitions).

<hr>

You can create a carousel instance with the carousel constructor, for example, to initialize with additional options and start cycling through items:
```
var myCarousel = document.querySelector('#myCarousel');
var carousel = new bootstrap.Carousel(myCarousel, {
    interval: 2000,
    wrap: false
});
```

| Method | Description |
| --- | --- |
| `cycle` | Cycles through the carousel items from left to right. |
| `pause` | Stops the carousel from cycling through items. |
| `prev` | Cycles to the previous item. **Returns to the caller before the previous item has been shown** (e.g., before the `slid.bs.carousel` event occurs). |
| `next` | Cycles to the next item. **Returns to the caller before the next item has been shown** (e.g., before the `slid.bs-carousel` event occurs). |
| `nextWhenVisible` | Don't cycle carousel to next when the page isn't visible or the carousel or its parent isn't visible. **Returns to the caller before the target item has been shown.** |
| `to` | Cycles the carousel to a particular frame (0 based, similar to an array). **Returns to the caller before the target item has been shown** (e.g., bfore the `slid.bs.carousel` event occurs). |
| `dispose` | Destroys an element's carousel. (Removes stored data on the DOM element.) |
| `getInstance` | Static method which allows you to get the carousel instance associated with a DOM element. |

### Events

Bootstrap's carousel class exposes two events for hooking into carousel functionality. Both events have the following additional properties:

* `direction`: The direction in which the carousel is sliding (either `"left"` or `"right"`).
* `relatedTarget`: The DOM element that is being slid into place as the active item.
* `from`: The index of the current item.
* `to`: The index of the next item.

All carousel events are fired at the carousel itself (i.e. at the `<div class="carousel">`).

| Event type | Description |
| --- | --- |
| `slide.bs.carousel` | Fires immediately when the `slide` instance method is invoked. |
| `slid.bs.carousel` | Fired when the ccarousel has completed its slide transition. |

```
var myCarousel = document.getElementById('myCarousel');

myCarousel.addEventListener('slide.bs.carousel', function() {
    // do something...
});
```

<hr>

[[Previous page]](https://github.com/AndrewSRea/My_Learning_Port/tree/main/Bootstrap/Components/Card#cards) - [[Top]](https://github.com/AndrewSRea/My_Learning_Port/tree/main/Bootstrap/Components/Carousel#carousel) - [[Next page]](https://github.com/AndrewSRea/My_Learning_Port/tree/main/Bootstrap/Components/Close_Button)