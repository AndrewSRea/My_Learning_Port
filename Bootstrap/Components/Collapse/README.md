# Collapse

Toggle the visibility of content across your project with a few classes and our JavaScript plugins.

## How it works

The collapse JavaScript plugin is used to show and hide content. Buttons or anchors are used as triggers that are mapped to specific elements you toggle. Collapsing an element will animate the `height` from its current value to `0`. Given how CSS handles animations, you cannot use `padding` on a `.collapse` element. Instead, use the class as an independent wrapping element.

<hr>

:warning: The animation effect of this component is dependent on the `prefers-reduced-motion` media query. See the [reduced motion section of Bootstrap's accessiblity documentation](https://github.com/AndrewSRea/My_Learning_Port/tree/main/Bootstrap/Getting_Started/Accessibility#reduced-motion).

<hr>

## Example

Click the buttons in my example in [collapse-examples.html](https://github.com/AndrewSRea/My_Learning_Port/blob/main/Bootstrap/Components/Collapse/collapse-examples.html) to show and hide another element via class changes: <!-- replace URL with link to GitHub Page -->

* `.collapse` hides content.
* `.collapsing` is applied during transitions.
* `.collapse.show` shows content.

Generally, Boostrap recommends using a button with the `data-bs-target` attribute. While not recommended from a semantic point of view, you can also use a link with the `href` attribute (and a `role="button"`). In both cases, the `data-bs-toggle="collapse"` is required.
```
<p>
    <a class="btn btn-primary" data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
        Link with href
    </a>
    <button class="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
        Button with data-bs-target
    </button>
</p>
<div class="collapse" id="collapseExample">
    <div class="card card-body">
        Some placeholder content for the collapse component. This panel is hidden by default but revealed when the user activates the relevant trigger.
    </div>
</div>
```
(See the code example above in my accompanying [collapse-examples.html](https://github.com/AndrewSRea/My_Learning_Port/blob/main/Bootstrap/Components/Collapse/collapse-examples.html) file.)

## Multiple targets

A `<button>` or `<a>` can show and hide multiple elements by referencing them with a selector in its `href` or `data-bs-target` attribute. Multiple `<button>` or `<a>` can show and hide an element if they each reference it with their `href` or `data-bs-target` attribute.
```
<p>
    <a class="btn btn-primary" data-bs-toggle="collapse" href="#multiCollapseExample1" role="button" aria-expanded="false" aria-controls="multiCollapseExample1">Toggle first example</a>
    <button class="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#multiCollapseExample2" aria-expanded="false" aria-controls="multiCollapseExample2">Toggle second element</button>
    <button class="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target=".multi-collapse" aria-expanded="false" aria-controls="multiCollapseExample1 multiCollapseExample2">Toggle both elements</button>
</p>
<div class="row">
    <div class="col">
        <div class="collapse multi-collapse" id="multiCollapseExample1">
            <div class="card card-body">
                Some placeholder content for the first collapse component of this multi-collapse example. This panel is hidden by default but revealed when the user activates the relevant trigger.
            </div>
        </div>
    </div>
    <div class="col">
        <div class="collapse multi-collapse" id="multiCollapseExample2">
            <div class="card card-body">
                Some placeholder content for the second collapse component of this multi-collapse example. This panel is hidden by default but revealed when the user activates the relevant trigger.
            </div>
        </div>
    </div>
</div>
```
(And this code example can be found in my accompanying [collapse-examples.html](https://github.com/AndrewSRea/My_Learning_Port/blob/main/Bootstrap/Components/Collapse/collapse-examples.html) file.)

## Acccessibility

Be sure to add `aria-expanded` to the control element. This attribute explicitly conveys the current state of the collapsible element tied to the control to screen readers and similar assistive technologies. If the collapsible element is closed by default, the attribute on the control element should have a value of `aria-expanded="false"`. If you've set the collapsible element to be open by default using the `show` class, set `aria-expanded="true"` on the control instead. The plugin will automatically toggle this attribute on the control based on whether or not the collapsible element has been opened or closed (via JavaScript, or because the user triggered another control element also tied to the same collapsible element). If the control element's HTML element is not a button (e.g., an `<a>` or `<div>`), the attribute `role="button"` should be added to the element.

If your control element is targeting a single collapsible element - i.e. the `data-bs-target` attribute is pointing to an `id` selector - you should add the `aria-controls` attribute to the control element, containing the `id` of the collapsible element. Modern screen readers and similar assistive technologies make use of this attribute to provide users with additional shortcuts to navigate directly to the collapsible element itself.

Note that Bootstrap's current implementation does not cover the various *optional* keyboard interactions described in the [WAI-ARIA Authoring Practices 1.1 accordion pattern](https://www.w3.org/TR/wai-aria-practices-1.1/#accordion) - you will need to include these yourself with custom JavaScript.

## Sass

### Variables

```
$transition-collapse:     height .35s ease;
```

### Classes

Collapse transition classes can be found in `scss/_transitions.scss` as these are shared across multiple components (collapse and accordion).
```
.collapse {
    &:not(.show) {
        display: none;
    }
}

.collapsing {
    height: 0;
    overflow: hidden;
    @include transition($transition-collapse);
}
```

## Usage

The collapse plugin utilizes a few classes to handle the heavy lifting:

* `.collapse` hides the content.
* `.collapse.show` shows the content.
* `.collapsing` is added when the transition starts, and removed when it finishes.

These classes can be found in `_transitions.scss`.

### Via data attributes

Just add `data-bs-toggle="collapse"` and a `data-bs-target` to the element to automatically assign control of one or more collapsible elements. The `data-bs-target` attribute accepts a CSS selector to apply the collapse to. Be sure to add the class `collapse` to the collapsible element. If you'd like it to default open, add the additional class `show`.

To add accordion-like group management to a collapsible area, add the data attribute `data-bs-parent="#selector"`. Refer to the demo to see this in action.

### Via JavaScript

Enable manually with:
```
var collapseElementList = [].slice.call(document.querySelectorAll('.collapse));
var collapseList = collapseElementList.map(function(collapseEl) {
    return new bootstrap.Collapse(collapseEl);
});
```

### Options

Options can be passed via data attributes or JavaScript. For data attributes, append the option name to `data-bs-`, as in `data-bs-parent=""`.

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `parent` | selector \| jQuery object \| DOM element | `false` | If parent is provided, then all collapsible elements under the specified parent will be closed when this collapsible item is shown. (Similar to traditional accordion behavior - this is dependent on the `card` class.) The attribute has to be set on the target collapsible area. |
| `toggle` | Boolean | `true` | Toggles the collapsible element on invocation. |

### Methods

<hr>

#### :warning: Asynchronous methods and transitions

All API methods are **asynchronous** and start a **transition**. They return to the caller as soon as the transition is started but **before it ends**. In addition, a method call on a **transitioning component will be ignored**.
[See Bootstrap's JavaScript documentation for more information](https://github.com/AndrewSRea/My_Learning_Port/tree/main/Bootstrap/Getting_Started/JavaScript#asynchronous-functions-and-transitions).

<hr>

Activates your content as a collapsible element. Accepts an optional options `object`.

You can create a collapse instance with the constructor. For example:
```
var myCollapse = document.getElementById('myCollapse');
var bsCollapse = new bootstrap.Collapse(myCollapse, {
    toggle: false;
});
```

| Method | Description |
| --- | --- |
| `toggle` | Toggles a collapsible element to shown or hidden. **Returns to the caller before the collapsible element has actually been shown or hidden** (i.e. before the `shown.bs.collapse` or `hidden.bs.collapse` event occurs). |
| `show` | Shows a collapsible element. **Returns to the caller before the collapsible element has actually been shown** (e.g., before the `shown.bs.collapse` event occurs). |
| `hide` | Hides a collapsible element. **Returns to the caller before the collapsible element has actually been hidden** (e.g., before the `hidden.bs.collapse` event occurs). |
| `dispose` | Destroys an element's collapse. (Removes stored data on the DOM element.) |
| `getInstance` | Static method which allows you to get the collapse instance associated with a DOM element. |

### Events

Bootstrap's collapse class exposes a few events for hooking into collapse functionality.

| Event type | Description |
| --- | --- |
| `show.bs.collapse` | This event fires immediately when the `show` instance method is called. |
| `shown.bs.collapse` | This event is fired when a collapse element has been made visible to the user (will wait for CSS transitions to complete). |
| `hide.bs.collapse` | This event is fired immediately when the `hide` method has been called. |
| `hidden.bs.collapse` | This event is fired when a collapse element has been hidden from the user (will wait for CSS transitions to complete). |

```
var myCollapsible = document.getElementById('myCollapsible');
myCollapsible.addEventListener('hidden.bs.collapse', function() {
    // do something...
});
```

<hr>

[[Previous page]](https://github.com/AndrewSRea/My_Learning_Port/tree/main/Bootstrap/Components/Close_Button#close-button) - [[Top]](https://github.com/AndrewSRea/My_Learning_Port/tree/main/Bootstrap/Components/Collapse#collapse) - [[Next page]](https://github.com/AndrewSRea/My_Learning_Port/tree/main/Bootstrap/Components/Dropdowns#dropdowns)