# Modal

Use Bootstrap's JavaScript modal plugin to add dialogs to your site for lightboxes, user notifications, or completely custom content.

## How it works

Before getting started with Bootstrap's modal component, be sure to read the following as Bootstrap's menu options have recently changed.

* Modals are built with HTML, CSS, and JavaScript. They're positioned over everything else in the document and remove scroll from the `<body>` so that modal content scrolls instead.
* Clicking on the modal "backdrop" will automatically close the modal.
* Bootstrap only supports one modal window at a time. Nested modals aren't supported as the designers at Bootstrap believe them to be por user experiences.
* Modals use `position: fixed`, which can sometimes be a bit particular about its rendering. Whenever possible, place your modal HTML in a top-level position to avoid potential interference from other elements. You'll likely run into issues when nesting a `.modal` within another fixed element.
* Once again, due to `position: fixed`, there are some caveats with using modals on mobile devices. [See Bootstrap's support docs](https://getbootstrap.com/docs/5.0/getting-started/browsers-devices/#modals-and-dropdowns-on-mobile) for details.
* Due to how HTML5 defines its semantics, [the `autofocus` HTML attribute](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#attr-autofocus) has no effect in Bootstrap modals. To achieve the same effect, use some custom JavaScript:
```
var myModal = document.getElementById('myModal');
var myInput = document.getElementById('myInput');

myModal.addEventListener('shown.bs.modal', function() {
    myInput.focus();
});
```
<hr>

:warning: The animation effect of this component is dependent on the `prefers-reduced-motion` media query. See the [reduced motion section of Bootstrap's accessibility documentation](https://getbootstrap.com/docs/5.0/getting-started/accessibility/#reduced-motion).

<hr>

Keep reading for demos and usage guidelines.

## Examples

### Modal components

Below is a *static* modal example (meaning its `position` and `display` have been overridden). Included are the modal header, modal body (required for `padding`), and modal footer (optional). Bootstrap asks that you include modal headers with dismiss actions whenever possible, or provide another explicit dismiss action.
```
<div class="modal" tabindex="-1">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title">Modal title</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                <p>Modal body text goes here.</p>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                <button type="button" class="btn btn-primary">Save changes</button>
            </div>
        </div>
    </div>
</div>
```
This example is not shown as a live example as modal constructs do not appear unless activated by a user's action. Please refer to the [live demo](#live-demo) below.

### Live demo

Toggle a working modal demo by clicking the button on this example below. It will slide down and fade in from the top of the page.
```
<!-- Button trigger modal -->
<button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
    Launch demo modal
</button>

<!-- Modal -->
<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                <p>Woohoo, you're reading this text in a modal!</p>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                <button type="button" class="btn btn-primary">Save changes</button>
            </div>
        </div>
    </div>
</div>
```

### Static backdrop

When backdrop is set to static, the modal will not close when clicking outside it. Click the button to try it.
```
<!-- Button trigger modal -->
<button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
    Launch static backdrop modal
</button>

<!-- Modal -->
<div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="staticBackdropLabel">Modal title</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                <p>I will not close if you click outside me. Don't event try to press escape key.</p>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                <button type="button" class="btn btn-primary">Understood</button>
            </div>
        </div>
    </div>
</div>
```

### Scrolling long content

When modals become too long for the user's viewport or device, they scroll independent of the page itself. You can also create a scrollable modal which allows you to scroll along the modal body by adding `.modal-dialog-scrollable` to the `.modal-dialog` class.
```
<!-- Scrollable modal -->
<div class="modal-dialog modal-dialog-scrollable">
    ...
</div>
```

### Vertically centered

Add `.modal-dialog-centered` to `.modal-dialog` to vertically center the modal.
```
<!-- Vertically centered modal -->
<div class="modal-dialog modal-dialog-centered">
    ...
</div>

<!-- Vertically centered scrollable modal -->
<div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
    ...
</div>
```

### Tooltips and popovers

[Tooltips](#tooltips) and [popovers](#popovers) can be placed within modals as needed. When modals are closed, any tooltips and popovers within are also automatically dismissed.
```
<div class="modal-body">
    <h5>Popover in a modal</h5>
    <p>This <a href="#" role="button" class="btn btn-secondary popover-test" title="Popover title" data-bs-content="Popover body content is set in this attribute.">button</a> triggers a popover on click.</p>
    <hr>
    <h5>Tooltips in a modal</h5>
    <p><a href="#" class="tooltip-test" title="Tooltip">This link</a> and <a href="#" class="tooltip-test" title="Tooltip">that link</a> have tooltips on hover.</p>
</div>
```

### Using the grid

Utilize the Bootstrap grid system within a modal by nesting `.container-fluid` within the `.modal-body`. Then, use the normal grid system classes as you would anywhere else.
```
<div class="modal-body">
    <div class="container-fluid">
        <div class="row">
            <div class="col-md-4">.col-md-4</div>
            <div class="col-md-4 ms-auto">.col-md-4 .ms-auto</div>
        </div>
        <div class="row">
            <div class="col-md-3 ms-auto">.col-md-3 .ms-auto</div>
            <div class="col-md-2 ms-auto">.col-md-2 .ms-auto</div>
        </div>
        <div class="row">
            <div class="col-md-6 ms-auto">.col-md-6 .ms-auto</div>
        </div>
        <div class="row">
            <div class="col-sm-9">
                Level 1: .col-sm-9
                <div class="row">
                    <div class="col-8 col-sm-6">
                        Level 2: .col-8 .col-sm-6
                    </div>
                    <div class="col-4 col-sm-6">
                        Level 2: .col-4 .col-sm-6
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
```

### Varying modal content

Have a bunch of buttons that all trigger the same modal with slightly different contents? Use `event.relatedTarget` and [HTML `data-bs-*` attributes](https://developer.mozilla.org/en-US/docs/Learn/HTML/Howto/Use_data_attributes) to vary the contents of the modal depending on which button was clicked.
Below is a live demo followed by example HTML and JavaScript. For more information, [read the modal events docs](#events) for details on `relatedTarget`.
```
<button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal2" data-bs-whatever="@mdo">Open modal for @mdo</button>
<button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal2" data-bs-whatever="@fat">Open modal for @fat</button>
<button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal2" data-bs-whatever="@getbootstrap">Open modal for @getbootstrap</button>

<div class="modal fade" id="exampleModal2" tabindex="-1" aria-labelledby="exampleModal2Label" aria-hidden="true">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="exampleModal2Label">New message</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                <form>
                    <div class="mb-3">
                        <label for="recipient-name" class="col-form-label">Recipient</label>
                        <input type="text" class="form-control" id="recipient-name">
                    </div>
                    <div class="mb-3">
                        <label for="message-text" class="col-form-label">Message</label>
                        <textarea class="form-control" id="message-text"></textarea>
                    </div>
                </form>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                <button type="button" class="btn btn-primary">Send message</button>
            </div>
        </div>
    </div>
</div>
```
```
var exampleModal2 = document.getElementById('exampleModal2');
exampleModal2.addEventListener('show.bs.modal', function(event) {
    // Button that triggered the modal
    var button = event.relatedTarget;
    // Extract info from data-bs-* attributes
    var recipient = button.getAttribute('data-bs-whatever');
    // If necessary, you could initiate an AJAX request here
    // and then do the updating in a callback
    //
    // Update the modal's content
    var modalTitle = exampleModal2.querySelector('.modal-title');
    var modalBodyInput = exampleModal2.querySelector('.modal-body input');

    modalTitle.textContent = 'New message to ' + recipient;
    modalBodyInput.value = recipient;
});
```

### Change animation

The `$modal-fade-transform` variable determines the transform state of `.modal-dialog` before the modal fade-in animation, the `$modal-show-transform` variable determines the transform of `.modal-dialog` at the end of the modal fade-in animation.
If you want, for example, a zoom-in animation, you can set `$modal-fade-transform: scale(.8)`.

### Remove animation

For modals that simply appear rather than fade in to view, remove the `.fade` class from your modal markup.
```
<div class="modal" tabindex="-1" aria-labelledby="..." aria-hidden="true">
    ...
</div>
```

### Dynamic heights

If the height of a modal changes while it is open, you should call `myModal.handleUpdate()` to readjust the modal's position in case a scrollbar appears.

### Accessibility

Be sure to add `aria-labelledby="..."`, referencing the modal title, to `.modal`. Additionally, you may give a description of your modal dialog with `aria-describedby` on `.modal`. Notee that you don't need to add `role="dialog"` since Bootstrap already adds it via JavaScript.

### Embedding YouTube videos

Embedding YouTube videos in modals requires additional JavaScript not in Bootstrap to automatically stop playback and more. [See this helpful Stack Overflow post](https://stackoverflow.com/questions/18622508/bootstrap-3-and-youtube-in-modal) for more information.

## Optional sizes

Modals have three optional sizes, available via modifier classes to be placed on a `.modal-dialog`. These sizes kick in at certain breakpoints to avoid horizontal scrollbars on narrower viewports.

| Size | Class | Modal max-width |
| --- | --- | --- |
| Small | `.modal-sm` | `300px` |
| Default | None | `500px` |
| Large | `.modal-lg` | `800px` |
| Extra large | `.modal-xl` | `1140px` |

Bootstrap's default modal without modifier class constitutes the "medium" size modal.
```
<div class="modal-dialog modal-xl">...</div>
<div class="modal-dialog modal-lg">...</div>
<div class="modal-dialog modal-sm">...</div>
```

## Fullscreen Modal

Another override is the option to pop up a modal that covers the user viewport, available via modifier classes that are placed on a `.modal-dialog`.

| Class | Availability |
| --- | --- |
| `.modal-fullscreen` | Always |
| `.modal-fullscreen-sm-down` | Below `576px` |
| `.modal-fullscreen-md-down` | Below `768px` |
| `.modal-fullscreen-lg-down` | Below `992px` | 
| `.modal-fullscreen-xl-down` | Below `1200px` |
| `.modal-fullscreen-xxl-down` | Below `1400px` |

```
<!-- Full screen modal -->
<div class="modal-dialog modal-fullscreen-sm-down">
    ...
</div>
```

## Usage

The modal plugin toggles your hidden content on demand, via data attributes or JavaScript. It also adds `.modal-open` to the `<body>` to override default scrolling behavior and generates a `.modal-backdrop` to provide a click area for dismissing shown modals when clicking outside the modal.

### Via data attributes

Activate a modal without writing JavaScript. Set `data-bs-toggle="modal"` on a controller element, like a button, along with a `data-bs-target="#foo"` or `href="#foo"` to target a specific modal to toggle.
```
<button type="button" data-bs-toggle="modal" data-bs-target="#myModal">Launch modal</button>
```

### Via JavaScript

Create a modal with a single line of JavaScript:
```
var myModal = new bootstrap.Modal(document.getElementById('myModal'), options);
```

### Options

Options can be passed via data attributes or JavaScript. For data attributes, append the option name to `data-bs-`, as in `data-bs-backdrop=""`.

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `backdrop` | Boolean or the string `'static'` | `true` | Includes a modal-backdrop element. Alternatively, specify `static` for a backdrop which doesn't close the modal on click. |
| `keyboard` | Boolean | `true` | Closes the modal when escape key is pressed. |
| `focus` | Boolean | `true` | Puts the focus on the modal when initialized. |

### Methods

<hr>

#### :warning: Asynchronous methods and transitions

All API methods are **asynchronous** and start a **transition**. They return to the caller as soon as the transition is started but **before it ends**. In addition, a method call on a **transitioning component will be ignored**. 

[See Bootstrap's JavaScript documentation for more information](https://getbootstrap.com/docs/5.0/getting-started/javascript/#asynchronous-functions-and-transitions).

<hr>

#### Passing options

Activates your content as a modal. Accepts an optional options `object`.
```
var myModal = new bootstrap.Modal(document.getElementById('myModal'), {
    keyboard: false;
});
```

#### toggle

Manually toggles a modal. **Returns to the caller before the modal has actually been shown or hidden** (i.e. before the `shown.bs.modal` or `hidden.bs.modal` event occurs).
```
myModal.toggle();
```

#### show

Manually opens a modal. **Returns to the caller before the modal has actually been shown** (i.e. before the `shown.bs.modal` event occurs).
```
myModal.show();
```

#### hide

Manually hides a modal. **Returns to the caller before the modal has actually been hidden** (i.e. before the `hidden.bs.modal` event occurs).
```
myModal.hide();
```

#### handleUpdate

Manually readjust the modal's position if the height of a modal changes while it is open (i.e. in case a scrollbar appears).
```
myModal.handleUpdate();
```

#### dispose

Destroys an element's modal. (Removes stored data on the DOM element.)
```
myModal.dispose();
```

#### getInstance

*Static* method which allows you to get the modal instance associated with a DOM element.
```
var myModalEl = document.getElementById('myModal');
var modal = bootstrap.Modal.getInstance(myModalEl);   // Returns a Bootstrap modal instance
```

### Events

Bootstrap's modal class exposes a few events for hooking into modal functionality. All modal events are fired at the modal itself (i.e. at the `<div class="modal">`).

| Event type | Description |
| --- | --- |
| `show.bs.modal` | This event fires immediately when the `show` instance method is called. If caused by a click, the clicked element is available as the `relatedTarget` property of the event. |
| `shown.bs.modal` | This event is fired when the modal has been made visible to the user (will wait for CSS transitions to complete). If caused by a click, the clicked element is available as the `relatedTarget` property of the event. |
| `hide.bs.modal` | This event is fired immediately when the `hide` instance method has been called. |
| `hidden.bs.modal` | This event is fired when the modal has finished being hidden from the user (will wait for CSS transitions to complete). |
| `hidePrevented.bs.modal` | This event is fired when the modal is shown, its backdrop is `static` and a click outside the modal or an escape key press is performed with the keyboard option or `data-bs-keyboard` set to `false`. |

```
var myModalEl = document.getElementById('myModal');
myModalEl.addEventListener('hidden.bs.modal', function(event) {
    // do something...
});
```