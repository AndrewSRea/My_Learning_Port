# Toasts

Push notifications to your visitors with a toast, a lightweight and easily customizable alert message.

Toasts are lightweight notifications designed to mimic the push notifications that have been popularized by mobile and desktop operating systems. They're built with flexbox, so they're easy to align and position.

## Overview

Things to know when using the toast plugin:

* Toasts are opt-in for performance reasons, so **you must initialize them yourself**.
* Toasts will automatically hide if you do not specify `autohide: false`.

<hr>

:exclamation: The animation effect of this component is dependent on the `prefers-reduced-motion` media query. See the [reduced motion section of our accessibility documentation](https://github.com/AndrewSRea/My_Learning_Port/tree/main/Bootstrap/Getting_Started/Accessibility#reduced-motion).

<hr>

## Examples

### Basic

To encourage extensible and predictable toasts, Bootstrap recommends a header and body. Toast headers use `display: flex`, allowing easy alignment of content thanks to our margin and flexbox utilities.

Toasts are as flexible as you need and have very little required markup. At a minimum, Bootstrap requires a single element to contain your "toasted" content and strongly encourage a dismiss button.
```
<div class="toast" role="alert" aria-live="assertive" aria-atomic="true">
    <div class="toast-header">
        <img src="..." class="rounded me-2" alt="...">
        <strong class="me-auto">Bootstrap</strong>
        <small>11 mins ago</small>
        <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
    </div>
    <div class="toast-body">
        Hello, world! This is a toast message.
    </div>
</div>
```
(This code example can be found in my accompanying [toasts-examples.html](https://github.com/AndrewSRea/My_Learning_Port/blob/main/Bootstrap/Components/Toasts/toasts-examples.html) file.)

### Live

Click the button below to show it as a toast (positioning with Bootstrap's utilities in the lower right corner) that has been hidden by default with `.hide`.
```
<button type="button" class="btn btn-primary" id="liveToastBtn">Show live toast</button>

<div class="position-fixed bottom-0 end-0 p-3" style="z-index: 5">
    <div id="liveToast" class="toast hide" role="alert" aria-live="assertive" aria-atomic="true">
        <div class="toast-header">
            <img src="..." class="rounded me-2" alt="...">
            <strong class="me-auto">Bootstrap</strong>
            <small>11 mins ago</small>
            <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
        </div>
        <div class="toast-body">
            Hello, world! This is a toast message.
        </div>
    </div>
</div>
```
(And this code example can also be found in my accompanying [toasts-examples.html](https://github.com/AndrewSRea/My_Learning_Port/blob/main/Bootstrap/Components/Toasts/toasts-examples.html) file.)

### Translucent

Toasts are slightly translucent, too, so they blend over whatever thy might appear over.
```
<div class="toast" role="alert" aria-live="assertive" aria-atomic="true">
    <div class="toast-header">
        <img src="..." class="rounded me-2" alt="...">
        <strong class="me-auto">Bootstrap</strong>
        <small class="text-muted">11 mins ago</small>
        <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
    </div>
    <div class="toast-body">
        Hello, world! This is a toast message.
    </div>
</div>
```
(Again, this code example can be found in my accompanying [toasts-examples.html](https://github.com/AndrewSRea/My_Learning_Port/blob/main/Bootstrap/Components/Toasts/toasts-examples.html) file.)

### Stacking

You can stack toasts by wrapping them in a toadt container, which will vertically add some spacing.
```
<div class="toast-container">
    <div class="toast" role="alert" aria-live="assertive" aria-atomic="true">
        <div class="toast-header">
            <img src="..." class="rounded me-2" alt="...">
            <strong class="me-auto">Bootstrap</strong>
            <small class="text-muted">just now</small>
            <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close">
        </div>
        <div class="toast-body">
            See? Just like this.
        </div>
    </div>

    <div class="toast" role="alert" aria-live="assertive" aria-atomic="true">
        <div class="toast-header">
            <img src="..." class="rounded me-2" alt="...">
            <strong class="me-auto">Bootstrap</strong>
            <small class="text-muted">2 seconds ago</small>
            <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close">
        </div>
        <div class="toast-body">
            Heads up, toasts will stack automatically!
        </div>
    </div>
</div>
```
(And again, this code example can be found in my accompanying [toasts-examples.html](https://github.com/AndrewSRea/My_Learning_Port/blob/main/Bootstrap/Components/Toasts/toasts-examples.html) file.)

### Custom content

Customize your toasts by removing sub-components, tweaking with [utilities](https://github.com/AndrewSRea/My_Learning_Port/tree/main/Bootstrap/Utilities/API#utility-api), or adding your own markup. Here Bootstrap has created a simpler toast by removing the default `.toast-header`, adding a custom hide icon from [Bootstrap icons](https://icons.getbootstrap.com/), and using some [flexbox utilities](https://github.com/AndrewSRea/My_Learning_Port/tree/main/Bootstrap/Utilities/Flex#flex) to adjust the layout.
```
<div class="toast align-items-center" role="alert" aria-live="assertive" aria-atomic="true">
    <div class="d-flex">
        <div class="toast-body">
            Hello, world! This is a toast message.
        </div>
        <button type="button" class="btn-close me-2 m-auto" data-bs-dismiss="toast" aria-label="Close"></button>
    </div>
</div>
```
(This code example can be found in my accompanying [toasts-examples-2.html](https://github.com/AndrewSRea/My_Learning_Port/blob/main/Bootstrap/Components/Toasts/toasts-examples-2.html) file.)

Alternatively, you can also add additional controls and components to toasts.
```
<div class="toast" role="alert" aria-live="assertive" aria-atomic="true">
    <div class="toast-body">
        Hello, world! This is a toast message.
        <div class="mt-2 pt-2 border-top">
            <button type="button" class="btn btn-primary btn-sm">Take action</button>
            <button type="button" class="btn btn-secondary btn-sm" data-bs-dismiss="toast">Close</button>
        </div>
    </div>
</div>
```
(And this code example can also be found in my accompanying [toasts-examples-2.html](https://github.com/AndrewSRea/My_Learning_Port/blob/main/Bootstrap/Components/Toasts/toasts-examples-2.html) file.)

### Color schemes

Building on the above example, you can create different toast color schemes with our [color](https://github.com/AndrewSRea/My_Learning_Port/tree/main/Bootstrap/Utilities/Colors#colors) and [background](https://github.com/AndrewSRea/My_Learning_Port/tree/main/Bootstrap/Utilities/Background#background). In this example, `.bg-primary` and `.text-white` have been added, and then `.btn-close-white` to the close button. For a crisp edge, the default border is removed with `.border-0`.
```
<div class="toast align-items-center text-white bg-primary border-0" role="alert" aria-live="assertive" aria-atomic="true">
    <div class="d-flex">
        <div class="toast-body">
            Hello, world! This is a toast message.
        </div>
        <button type="button" class="btn-close btn-close-white me-2 m-auto" data-bs-dismiss="toast" aria-label="Close"></button>
    </div>
</div>
```
(Again, this code example can be found in my accompanying [toasts-examples-2.html](https://github.com/AndrewSRea/My_Learning_Port/blob/main/Bootstrap/Components/Toasts/toasts-examples-2.html) file.)

## Placement

Placec toasts with custom CSS as you need them. The top right is often used for notifications, as is the top middle. If you're only ever going to show one toast at a time, put the positioning styles right on the `.toast`.
```
<form>
    <div class="mb-3">
        <label for="selectToastPlacement">Toast placement</label>
        <select class="form-select mt-2" id="selectToastPlacement">
            <option value="" selected>Select a position...</option>
            <option value="top-0 start-0">Top left</option>
            <option value="top-0 start-50 translate-middle-x">Top center</option>
            <option value="top-0 end-0">Top right</option>
            <option value="top-50 start-0 translate-middle-y">Middle left</option>
            <option value="top-50 start-50 translate-middle">Middle center</option>
            <option value="top-50 end-0">Middle right</option>
            <option value="bottom-0 start-0">Bottom left</option>
            <option value="bottom-0 start-50 translate-middle-x">Bottom center</option>
            <option value="bottom-0 end-0">Bottom right</option>
        </select>
    </div>
</form>
<div aria-live="polite" aria-atomic="true" class="bg-dark position-relative bd-example-toasts">
    <div class="toast-container position-absolute p-3" id="toastPlacement">
        <div class="toast">
            <div class="toast-header">
                <img src="..." class="rounded me-2" alt="...">
                <strong class="me-auto">Bootstrap</strong>
                <small>11 mins ago</small>
            </div>
            <div class="toast-body">
                Hello, world! This is a toast message.
            </div>
        </div>
    </div>
</div>
```
(And again, this code example can be found in my accompanying [toasts-examples-2.html](https://github.com/AndrewSRea/My_Learning_Port/blob/main/Bootstrap/Components/Toasts/toasts-examples-2.html) file.)

For systems that generate more notifications, consider using a wrapping element so they can easily stack.
```
<div aria-live="polite" aria-atomic="true" class="position-relative">
    <!-- Position it: -->
    <!-- - `.toast-container` for spacing between toasts -->
    <!-- - `.position-absolute`, `top-0` & `end-0` to position the toasts in the upper right corner -->
    <!-- - `.p-3` to prevent the toasts from sticking to the edge of the container -->
    <div class="toast-container position-absolute top-0 end-0 p-3">

        <!-- Then put toasts within -->
        <div class="toast" role="alert" aria-live="assertive" aria-atomic="true">
            <div class="toast-header">
                <img src="..." class="rounded me-2" alt="...">
                <strong class="me-auto">Bootstrap</strong>
                <small class="text-muted">just now</small>
                <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
            </div>
            <div class="toast-body">
                See? Just like this.
            </div>
        </div>

        <div class="toast" role="alert" aria-live="assertive" aria-atomic="true">
            <div class="toast-header">
                <img src="..." class="rounded me-2" alt="...">
                <strong class="me-auto">Bootstrap</strong>
                <small class="text-muted">2 seconds ago</small>
                <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
            </div>
            <div class="toast-body">
                Heads up, toasts will stack automatically.
            </div>
        </div>
    </div>
</div>
```
(Once again, this code example can be found in my accompanying [toasts-examples-2.html](https://github.com/AndrewSRea/My_Learning_Port/blob/main/Bootstrap/Components/Toasts/toasts-examples-2.html) file.)

You can also get fancy with flexbox utilities to align toasts horizontally and/or vertically.
```
<!-- Flexbox container for aligning the toasts -->
<div aria-live="polite" aria-atomic="true" class="d-flex justify-content-center align-items-center w-100">

    <!-- Then put toasts within -->
    <div class="toast" role="alert" aria-live="assertive" aria-atomic="true">
        <div class="toast-header">
            <img src="..." class="rounded me-2" alt="...">
            <strong class="me-auto">Bootstrap</strong>
            <small>11 mins ago</small>
            <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
        </div>
        <div class="toast-body">
            Hello, world! This is a toast message.
        </div>
    </div>
</div>
```
(And once more, this code example can be found in my accompanying [toasts-examples-2.html](https://github.com/AndrewSRea/My_Learning_Port/blob/main/Bootstrap/Components/Toasts/toasts-examples-2.html) file.)

## Accessibility

Toasts are intended to be small interruptions to your visitors or users, so to help those with screen readers and similar assistive technologies, you should wrap your toasts in an [`aria-live` region](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/ARIA_Live_Regions). Changes to live regions (such as injecting/updating a toast component) are automatically announced by screen readers without needing to move the user's focus or otherwise interrupt the user. Additionally, include `aria-atomic="true"` to ensure that the entire toast is always announced as single (atomic) unit, rather than announcing what was changed (which could lead to problems if you only update part of the toast's content, or if displaying the same toast content at a later point in time). If the information needed is important for the process, e.g. for a list of errors in a form, then use the [alert component](https://github.com/AndrewSRea/My_Learning_Port/tree/main/Bootstrap/Components/Alerts#alerts) instead of toast.

Note that the live region needs to be present in the markup *before* the toast is generated or updated. If you dynamically generate both at the same time and inject them into the page, they will generally not be announced by assistive technologies.

You also need to adapt the `role` and `aria-live` level depending on the content. If it's an important message like an error, use `role="alert" aria-live="assertive"`, otherwise use `role="status" aria-live="polite"` attributes.

As the content you're displaying changes, be sure to update the [`delay` timeout](https://github.com/AndrewSRea/My_Learning_Port/tree/main/Bootstrap/Components/Toasts#options) to ensure people have enough time to read the toast.
```
<div class="toast" role="alert" aria-live="polite" aria-atomic="true" data-bs-delay="1000">
    <div role="alert" aria-live="assertive" aria-atomic="true">...</div>
</div>
```
When using `autohide: false`, you must add a close button to allow users to dismiss the toast.
```
<div role="alert" aria-live="assertive" aria-atomic="true" class="toast" data-bs-autohide="false">
    <div class="toast-header">
        <img src="..." class="rounded me-2" alt="...">
        <strong class="me-auto">Bootstrap</strong>
        <small>11 mins ago</small>
        <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
    </div>
    <div class="toast-body">
        Hello, world! This is a toast message.
    </div>
</div>
```
While technically it's possible to add focusable/actionable controls (such as additional buttons or links) in your toast, you should avoid doing this for autohiding toasts. Even if you give the toast a long [`delay` timeout](https://github.com/AndrewSRea/My_Learning_Port/tree/main/Bootstrap/Components/Toasts#options), keyboard and assistive technology users may find it difficult to reach the toast in time to take action (since toasts don't receive focus when they are displayed). If you absolutely must have further controls, Bootstrap recommends using a toast with `autohide: false`.

## Sass

### Variables

```
$toast-max-width:
$toast-padding-x:
$toast-padding-y:
$toast-font-size:
$toast-color:
$toast-background-color:
$toast-border-width:
$toast-border-color:
$toast-border-radius:
$toast-box-shadow:
$toast-spacing:

$toast-header-color:
$toast-header-background-color:
$toast-header-border-color:
```

## JavaScript behavior

### Usage

Initialize toasts via JavaScript:
```
var toastElList = [].slice.call(document.querySelectorAll('.toast));
var toastList = toastElList.map(function(toastEl) {
    return new bootstrap.Toast(toastEl, option);
});
```

### Options

Options can be passed via data attributes or JavaScript. For data attributes, append the option name to `data-bs-`, as in `data-bs-animation=""`.

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `animation` | Boolean | `true` | Apply a CSS fade transition to the toast. |
| `autohide` | Boolean | `true` | Auto hide the toast. |
| `delay` | number | `5000` | Delay hiding the toast (ms) |

### Methods

<hr>

#### :warning: Asynchronous methods and transitions

All API methods are **asynchronous** and start a **transition**. They return to the caller as soon as the transition is started but **before it ends**. In addition, a method call on a **transitioning component will be ignored**.

[See Bootstrap's JavaScript documentation for more information](https://github.com/AndrewSRea/My_Learning_Port/tree/main/Bootstrap/Getting_Started/JavaScript#asynchronous-functions-and-transitions).

<hr>

#### show

Reveals an element's toast. **Returns to the caller before the toast has actually been shown** (i.e. before the `shown.bs.toast` event occurs). You have to manually call this method, otherwise your toast won't show.
```
toast.show();
```

#### hide

Hides an element's toast. **Returns to the caller before the toast has actually been hidden** (i.e. before the `hidden.bs.toast` event occurs). You have to manually call this method if you declared `autohide` as `false`.
```
toast.hide();
```

#### dispose

Hides an element's toast. Your toast will remain on the DOM but won't show anymore.
```
toast.dispose();
```

### Events

| Event type | Description |
| --- | --- |
| `show.bs.toast` | This event fires immediately when the `show` instance method is called. |
| `shown.bs.toast` | This event is fired when the toast has been made visible to the user. |
| `hide.bs.toast` | This event is fired immediately when the `hide` instance method has been called. |
| `hidden.bs.toast` | This event is fired when the toast has finished being hidden from the user. |

```
var myToastEl = document.getElementById('myToast');
myToastEl.addEventListener('hidden.bs.toast', function() {
    // do something...
});
```

<hr>

[[Previous page]](https://github.com/AndrewSRea/My_Learning_Port/tree/main/Bootstrap/Components/Spinners#spinners) - [[Top]](https://github.com/AndrewSRea/My_Learning_Port/tree/main/Bootstrap/Components/Toasts#toasts) - [[Next page]](https://github.com/AndrewSRea/My_Learning_Port/tree/main/Bootstrap/Components/Tooltips#tooltips)