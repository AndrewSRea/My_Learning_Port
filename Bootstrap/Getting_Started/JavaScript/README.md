# JavaScript

Bring Bootstrap to life with its optional JavaScript plugins. Learn about each plugin, Bootstrap's daata and programmatic API options, and more.

## Individual or compiled

Plugins caan be included individually (using Bootstrap's individual `js/dist/*.js`), or all at once using `bootstrap.js` or the minified `bootstrap.min.js` (don't include both).

If you use a bundler (Webpack, Rollup...), you can use `/js/dist/*.js` files which are UMD ready.

## Using Bootstrap as a module

Bootstrap provides a version of Bootstrap built as `ESM` (`bootstrap.esm.js` and `bootstrap.esm.min.js`) which allows you to use Bootstrap as a module in your browser, if your [targeted browsers support it](https://caniuse.com/es6-module).
```
<script type="module">
    import { Toast } from 'bootstrap.esm.min.js'

    Array.from(document.querySelectorAll('.toast'))
        .forEach(toastNode => new Toast(toastNode))
</script>
```

<hr>

### :warning: Incompatible plugins

Due to browser limitations, some of our plugins, namely Dropdown, Tooltip and Popover plugins, cannot be used in a `<script>` tag with `module` type because they depend on Popper. For more information about the issue, see [here](https://v8.dev/features/modules#specifiers).

<hr>

## Dependencies

Some plugins aand CSS components depend on other plugins. If you include plugins individually, make sure to check for these dependencies in the docs.

Our dropdowns, popovers and tooltips also depend on [Popper](https://popper.js.org/).

## Still want to use jQuery? It's possible!

Bootstrap 5 is designed to be used without jQuery, but it's still possible to use Bootstrap's components with jQuery. **If Bootstrap detects `jQuery` in the `window` object**, it'll add all of its components in jQuery's plugin system; this means you'll be able to do `$('[data-bs-toggle="tooltip"]').tooltip()` to enabl tooltips. The same goes for Bootstrap's other components.

## Data attributes

Nearly all Bootstrap plugins can be enabled and configured through HTML alone with data attributes (Bootstrap's preferred way of using JavaScript functionality). Be sure to **only use one set of data attributes on a single element** (e.g., you cannot trigger a tooltip and modal from the same button).

<hr>

### :warning: Selectors

Currently to query DOM elements, Bootstrap uses the native methods `querySelector` and `querySelectorAll` for performance reasons, so you have to use [valid selectors](https://www.w3.org/TR/CSS21/syndata.html#value-def-identifier). If you use special selectors, for example: `collapse:Example`, be sure to escape them.

<hr>

## Events

Bootstrap provides custom events for most plugins' unique actions. Generally, these come in an infinitive and past participle form--where the infinitive (ex. `show`) is triggered at the start of an event, and its past participle form (ex. `shown`) is triggered on the completion of an action.

All infinitive events provide [`preventDefault()`](https://developer.mozilla.org/en-US/docs/Web/API/Event/preventDefault) functionality. This provides the ability to stop the execution of an action before it starts. Returning false from an event handler will also automatically call `preventDefault()`.
```
var myModal = document.getElementById('myModal');

myModal.addEventListener('show.bs.modal', function (event) {
    if (!data) {
        return event.preventDefault();   // stops modal from being shown
    }
});
```

<hr>

### :warning: jQuery events

Bootstrap will detect jQuery if `jQuery` is present in the `window` object and there is no `data-bs-no-jquery` attribute set on `<body>`. If jQuery is found, Bootstrap will emit events thanks to jQuery's event system. So if you want to listen to Bootstrap's events, you'll have to use the jQuery methods (`.on`, `.one`) instead of `addEventListener`.
```
$('#myTab a').on('shown.bs.tab', function() {
    // do something...
});
```

<hr>

## Programmatic API

All constructors accept an optional options object or nothing (which initiates a plugin with its default behavior):
```
var myModalEl = document.getElementById('myModal');

var modal = new bootstrap.Modal(myModalEl);   // initialized with defaults
var modal = new bootstrap.Modal(myModalEl, { keyboard: false })   // initialized with no keyboard
```
If you'd like to get a particular plugin instance, each plugin exposes a `getInstance` method. In order to retrieve it directly from an element, do this: `bootstrap.Popover.getInstance(myPopoverEl)`.

### CSS selectors in constructors

You can also use a CSS selector as the first argument instead of a DOM elemeent to initialize the plugin. Currently the element for the plugin is found by the `querySelector` method since Bootstrap's plugins support a single element only.
```
var modal = new bootstrap.Modal('#myModal');
var dropdown = new bootstrap.Dropdown('[data-bs-toggle="dropdown"]');
```

### Asynchronous functions and transitions

All programmatic API methods are **asynchronous** and return to the caller once the transition is started but **before it ends**.

In order to execute an action once the transition is complete, you can listen to the corresponding event.
```
var myCollapseEl = document.getElementById('#myCollapse');

myCollapseEl.addEventListener('shown.bs.collapse', function (event) {
    // Action to execute once the collapsible area is expanded
});
```
In addition, a method call on a **transitioning component will be ignored**.
```
var myCarouselEl = document.getElementById('myCarousel');
var carousel = bootstrap.Carousel.getInstance(myCarouselEl);   // Retrieve a Carousel instance

myCarouselEl.addEventListener('slid.bs.carousel', function (event) {
    carousel.to('2');   // Will slide to the slide 2 as soon as the transition to slide 1 is finished
});

carousel.to('1');   // Will start sliding to the slide 1 and returns to the caller
carousel.to('2');   // !! Will be ignored, as the transition to the slide 1 is not finished !!
```

### Default settings