# Bootstrap Components

## Accordion

Build vertically collapsing accordions in combination with Bootstrap's Collapse JavaScript plugin.

### How it works

The accordion uses [collapse](#collapse) internally to make it collapsible. To render an accordion that's expanded, add the `.open` class on the `.accordion`.
<hr>

:warning: The animation effect of this component is dependent on the `prefers-reduced-motion` media query. See the [reduced motion section of Bootstrap's accessiblity documentation](https://getbootstrap.com/docs/5.0/getting-started/accessibility/#reduced-motion).

<hr>

### Example

```
<div class="accordion" id="accordionExample">
    <div class="accordion-item">
        <h2 class="accordion-header" id="headingOne">
            <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                Accordion Item #1
            </button>
        </h2>
        <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
            <div class="accordion-body">
                <strong>This is the first item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding Bootstrap's default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
            </div>
        </div>
    </div>
    <div class="accordion-item">
        <h2 class="accordion-header" id="headingTwo">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                Accordion Item #2
            </button>
        </h2>
        <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
            <div class="accordion-body">
                <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding Bootstrap's default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
            </div>
        </div>
    </div>
    <div class="accordion-item">
        <h2 class="accordion-header" id="headingThree">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                Accordion Item #3
            </button>
        </h2>
        <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
            <div class="accordion-body">
                <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding Bootstrap's default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
            </div>
        </div>
    </div>
</div>
```

#### Flush

Add `.accordion-flush` to remove the default `background-color`, some borders, and some rounded corners to render accordions edge-to-edge with their parent container.
```
<div class="accordion accordion-flush" id="accordionFlushExample">
    <div class="accordion-item">
        <h2 class="accordion-header" id="flush-headingOne">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                Accordion Item #1
            </button>
        </h2>
        <div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
            <div class="accordion-body">
                Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
            </div>
        </div>
    </div>
    <div class="accordion-item">
        <h2 class="accordion-header" id="flush-headingTwo">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                Accordion Item #2
            </button>
        </h2>
        <div id="flush-collapseTwo" class="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
            <div class="accordion-body">
                Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
            </div>
        </div>
    </div>
    <div class="accordion-item">
        <h2 class="accordion-header" id="flush-headingThree">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                Accordion Item #3
            </button>
        </h2>
        <div id="flush-collapseThree" class="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
            <div class="accordion-body">
                Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
            </div>
        </div>
    </div>
</div>
```

### Accessiblity

Please read the [collapse accessiblity section]() <!-- link to Collapse below / Accessiblity --> for more information.

## Alerts

Provide contextual feedback messages for typical user actions with the handful of available and flexible alert messages.

### Examples

Alerts are available for any length of text, as well as an optional close button. For proper styling, use one of the eight **required** contextual classes (e.g., `.alert-success`). For inline dimissal, use the [alerts JavaScript plugin](#dismissing).
```
<div class="alert alert-primary" role="alert">
    A simple primary alert - check it out!
</div>
<div class="alert alert-secondary" role="alert">
    A simple secondary alert - check it out!
</div>
<div class="alert alert-success" role="alert">
    A simple success alert - check it out!
</div>
<div class="alert alert-danger" role="alert">
    A simple danger alert - check it out!
</div>
<div class="alert alert-warning" role="alert">
    A simple warning alert - check it out!
</div>
<div class="alert alert-info" role="alert">
    A simple info alert - check it out!
</div>
<div class="alert alert-light" role="alert">
    A simple light alert - check it out!
</div>
<div class="alert alert-dark" role="alert">
    A simple dark alert - check it out!
</div>
```
<hr>

#### :warning: Conveying meaning to assistive technologies

Using color to add meaning only provides a visual indication, which will not be conveyed to users of assistive technologies--such as screen readers. Ensure that information denoted by color is either obvious from the content itself (e.g. the visible text), or is included through alternative means, such as additional text hidden with the `.visually-hidden` class.

<hr>

#### Link color

Use the `.alert-link` utility class to quickly provide matching colored links within any alert.
```
<div class="alert alert-primary" role="alert">
    A simple primary alert with <a href="#" class="alert-link">an example link</a>. Give it a click if you like.
</div>
<div class="alert alert-secondary" role="alert">
    A simple secondary alert with <a href="#" class="alert-link">an example link</a>. Give it a click if you like.
</div>
<div class="alert alert-success" role="alert">
    A simple success alert with <a href="#" class="alert-link">an example link</a>. Give it a click if you like.
</div>
<div class="alert alert-danger" role="alert">
    A simple danger alert with <a href="#" class="alert-link">an example link</a>. Give it a click if you like.
</div>
<div class="alert alert-warning" role="alert">
    A simple warning alert with <a href="#" class="alert-link">an example link</a>. Give it a click if you like.
</div>
<div class="alert alert-info" role="alert">
    A simple info alert with <a href="#" class="alert-link">an example link</a>. Give it a click if you like.
</div>
<div class="alert alert-light" role="alert">
    A simple light alert with <a href="#" class="alert-link">an example link</a>. Give it a click if you like.
</div>
<div class="alert alert-dark" role="alert">
    A simple dark alert with <a href="#" class="alert-link">an example link</a>. Give it a click if you like.
</div>
```

#### Additional content

Alerts can also contain additional HTML elements like headings, paragraphs, and dividers.
```
<div class="alert alert-success" role="alert">
    <h4 class="alert-heading">Well done!</h4>
    <p>Aww, yeah! You successfully read this important alert message. This example text is going to run a bit longer so that you can see how spacing within an alert works with this kind of content.</p>
    <hr>
    <p class="mb-0">Whenever you need to, be sure to use margin utilities to keep things nice and tidy.</p>
</div>
```

#### Dismissing

Using the alert JavaScript plugin, it's possible to dismiss any alert inline. Here's how:

* Be sure you've loaded the alert plugin, or the compiled Bootstrap JavaScript.
* Add a [close button](#close-button) and the `.alert-dismissible` class, which adds extra padding to the right of the alert and positions the close button.
* On the close button, add the `data-bs-dismiss="alert"` attribute, which triggers the JavaScript functionality. Be sure to use the `<button>` element with it for proper behavior across all devices.
* To animate alerts when dismissing them, be sure to add the `.fade` and `.show` classes.

You can see this in action with a live demo (in my accompanying [alert-examples.html](https://github.com/AndrewSRea/My_Learning_Port/blob/main/Bootstrap/Components/alert-examples.html) file).
```
<div class="alert alert-warning alert-dismissible fade show" role="alert">
    <strong>Holy guacamole!</strong> You should check in on some of those fields below.
    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>
```

<hr>

:warning: When an alert is dismissed, the element is completely removed from the page structure. If a keyboard user dismisses the alert using the close button, their focus will suddenly be lost and, depending on the browser, reset to the start of the page/document. For this reason, Bootstrap recommends including additional JavaScript that listens for the `closed.bs.alert` event and programmatically sets `focus()` to the most appropriate location in the page. If you're planning to move focus to a non-interactive eeleemnt that normally does not receive focus, make sure to add `tabindex="-1"` to the element.

<hr>

### JavaScript behavior

#### Triggers

Enable dismissal of an alert via JavaScript:
```
var alertList = document.querySelectorAll('.alert');
alertList.forEach(function(alert) {
    new bootstrap.Alert(alert);
});
```
Or with `data` attributes on a button **within the alert**, as demonstrated above:
```
<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
```
Note that closing an alert will remove it from the DOM.

#### Methods

You can create an alert instance with the alert constructor. For example:
```
var myAlert = document.getElementById('myAlert');
var bsAlert = new bootstrap.Alert(myAlert);
```
This makes an alert listen for click events on descendant elements which have the `data-bs-dismiss="alert"` attribute. (Not necessary when using the data-api's auto-initialization.)

| Method | Description |
| --- | --- |
| `close` | Closes an alert by removing it from the DOM. If the `.fade` and `.slow` classes are present on the element, the alert will fade out before it is removed. |
| `dispose` | Destroys an element's alert. (Removes stored data on the DOM element) |
| `getInstance` | Static method which allows you to get the alert instance associated to a DOM element, you can use it like this: `bootstrap.Alert.getInstance(alert)` |

```
var alertNode = document.querySelector('.alert');
var alert = bootstrap.Alert.getInstance(alertNode);
alert.close();
```

#### Events

Bootstrap's alert plugin exposes a few events for hooking into alert functionality.

| Event | Description |
| --- | --- |
| `close.bs.alert` | Fires immediately when the `close` instance method is called. |
| `closed.bs.alert` | Fired when the alert has been closed and CS transitions have completed. |

```
var myAlert = document.getElementById('myAlert');
myAlert.addEventListener('closed.bs.alert', function() {
    // do something, for instance, explicitly move focus to the most appropriate element,
    // so it doesn't get lost/reset to the start of the page
    // document.getElementById('...').focus()
});
```

## Badges

Documentation and examples for badges, Bootstrap's small count and labeling component.

### Example

Badges scale to match the size of the immediate parent element by using relative font sizing and `em` units. As of v5, badges no longer have focus or hover styles for links.
```
<h1>Example heading <span class="badge bg-secondary">New</span></h1>
<h2>Example heading <span class="badge bg-secondary">New</span></h2>
<h3>Example heading <span class="badge bg-secondary">New</span></h3>
<h4>Example heading <span class="badge bg-secondary">New</span></h4>
<h5>Example heading <span class="badge bg-secondary">New</span></h5>
<h6>Example heading <span class="badge bg-secondary">New</span></h6>
```
Badges can be used as part of links or buttons to provide a counter.
```
<button type="button" class="btn btn-primary">
    Notifications <span class="badge bg-secondary">4</span>
</button>
```
Note that depending on how they are used, badges may be confusing for users of screen readers and similar assistive technologies. While the styling of badges provides a visual cue as to their purpose, these users will simply be presented with the content of the badge. Depending on the specific situation, these badges may seem like random additional words or numbers at the end of a sentence, link, or button.
Unless the context is clear (as with the "Notifications" example, where it is understood that the "4" is thee number of notifications), consider including additional context with a visually hidden piece of additional text.
```
<button type="button" class="btn btn-primary">
    Profile <span class="badge bg-secondary">9</span>
    <span class="visually-hidden">unread messages</span>
</button>
```

### Background colors

Use Bootstrap's background utility classes to quickly change the appearance of a badge. Please note that when using Bootstrap's default `.bg-light`, you'll likely need a text color utility like `.text-dark` for proper styling. This is because background utilities do not set anything but `background-color`.
```
<span class="badge bg-primary">Primary</span>
<span class="badge bg-secondary">Secondary</span>
<span class="badge bg-success">Success</span>
<span class="badge bg-danger">Danger</span>
<span class="badge bg-warning text-dark">Warning</span>
<span class="badge bg-info text-dark">Info</span>
<span class="badge bg-light text-dark">Light</span>
<span class="badge bg-dark">Dark</span>
```

<hr>

#### :warning: Conveying meaning to assistive technologies

Using color to add meaning only provides a visual indication, which will not be conveyed to users of assistive technologies--such as screen readers. Ensure that information denoted by the color is either obvious from the content itself (e.g. the visible text), or is included through alternative means, such as additional text hidden with the `.visually-hidden` class.

<hr>

### Pill badges

Use the `.rounded-pill` utility class to make badges more rounded with a larger `border-radius`.
```
<span class="badge rounded-pill bg-primary">Primary</span>
<span class="badge rounded-pill bg-secondary">Secondary</span>
<span class="badge rounded-pill bg-success">Success</span>
<span class="badge rounded-pill bg-danger">Danger</span>
<span class="badge rounded-pill bg-warning text-dark">Warning</span>
<span class="badge rounded-pill bg-info text-dark">Info</span>
<span class="badge rounded-pill bg-light text-dark">Light</span>
<span class="badge rounded-pill bg-dark">Dark</span>
```