# Alerts

Provide contextual feedback messages for typical user actions with the handful of available and flexible alert messages.

## Examples

Alerts are available for any length of text, as well as an optional close button. For proper styling, use one of the eight **required** contextual classes (e.g., `.alert-success`). For inline dimissal, use the [alerts JavaScript plugin](https://github.com/AndrewSRea/My_Learning_Port/tree/main/Bootstrap/Components/Alerts#dismissing).
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
(See the code example above in my accompanying [alert-examples.html](https://github.com/AndrewSRea/My_Learning_Port/blob/main/Bootstrap/Components/Alerts/alert-examples.html) file.)

<hr>

### :warning: Conveying meaning to assistive technologies

Using color to add meaning only provides a visual indication, which will not be conveyed to users of assistive technologies--such as screen readers. Ensure that information denoted by color is either obvious from the content itself (e.g. the visible text), or is included through alternative means, such as additional text hidden with the `.visually-hidden` class.

<hr>

### Link color

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
(This code example can also be seen in my accompanying [alert-examples.html](https://github.com/AndrewSRea/My_Learning_Port/blob/main/Bootstrap/Components/Alerts/alert-examples.html) file.)

### Additional content

Alerts can also contain additional HTML elements like headings, paragraphs, and dividers.
```
<div class="alert alert-success" role="alert">
    <h4 class="alert-heading">Well done!</h4>
    <p>Aww, yeah! You successfully read this important alert message. This example text is going to run a bit longer so that you can see how spacing within an alert works with this kind of content.</p>
    <hr>
    <p class="mb-0">Whenever you need to, be sure to use margin utilities to keep things nice and tidy.</p>
</div>
```
(And again, this code example above in my accompanying [alert-examples.html](https://github.com/AndrewSRea/My_Learning_Port/blob/main/Bootstrap/Components/Alerts/alert-examples.html) file.)

### Icons

Similarly, you can use [flexbox utilities](https://github.com/AndrewSRea/My_Learning_Port/tree/main/Bootstrap/Utilities/Flex#flex) and [Bootstrap Icons](https://icons.getbootstrap.com/) to create alerts with icons. Depending on your icons and content, you may want to add more utilities or custom styles.
```
<div class="alert alert-primary d-flex align-items-center" role="alert">
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-exclamation-triangle-fill flex-shrink-0 me-2" viewBox="0 0 16 16" role="img" aria-label="Warning:">
        <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
    </svg>
    <div>
        An example alert with an icon
    </div>
</div>
```
(And this code example above in my accompanying [alert-examples.html](https://github.com/AndrewSRea/My_Learning_Port/blob/main/Bootstrap/Components/Alerts/alert-examples.html) file.)

Need more than one icon for your alerts? Consider using more Bootstrap Icons and making a local SVG sprite like so to easily reference the same icons repeatedly.
```
<svg xmlns="http://www/w3.org/2000/svg" style="display: none;">
    <symbol id="check-circle-fill" fill="currentColor" viewBox="0 0 16 16">
        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
    </symbol>
    <symbol id="info-fill" fill="currentColor" viewBox="0 0 16 16">
        <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm.93-9.412-1 4.705c-.07.34.029.533.304.533.194 0 .487-.07.686-.246l-.088.416c-.287.346-.92.598-1.465.598-.703 0-1.002-.422-.808-1.319l.738-3.468c.064-.293.006-.399-.287-.47l-.451-.081.082-.381 2.29-.287zM8 5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2z"/>
    </symbol>
    <symbol>
        <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
    </symbol>
</svg>

<div class="alert alert-primary d-flex align-items-center" role="alert">
    <svg class="bi flex-shrink-0 me-2" width="24" height="24" role="img" aria-label="Info:"><use xlink:href="#info-fill"/></svg>
    <div>
        An example alert with an icon
    </div>
</div>
<div class="alert alert-success d-flex align-items-center" role="alert">
    <svg class="bi flex-shrink-0 me-2" width="24" height="24" role="img" aria-label="Success:"><use xlink:href="#check-circle-fill"/></svg>
    <div>
        An example success alert with an icon
    </div>
</div>
<div class="alert alert-warning d-flex align-items-center" role="alert">
    <svg class="bi flex-shrink-0 me-2" width="24" height="24" role="img" aria-label="Warning:"><use xlink:href="#exclamation-triangle-fill"/></svg>
    <div>
        An example warning alert with an icon
    </div>
</div>
<div class="alert alert-danger d-flex align-items-center" role="alert">
    <svg class="bi flex-shrink-0 me-2" width="24" height="24" role="img" aria-label="Danger:"><use xlink:href="#exclamation-triangle-fill"/></svg>
    <div>
        An example danger alert with an icon
    </div>
</div>
```
(And this code example can also be seen in my accompanying [alert-examples.html](https://github.com/AndrewSRea/My_Learning_Port/blob/main/Bootstrap/Components/Alerts/alert-examples.html) file.)

### Dismissing

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

:warning: When an alert is dismissed, the element is completely removed from the page structure. If a keyboard user dismisses the alert using the close button, their focus will suddenly be lost and, depending on the browser, reset to the start of the page/document. For this reason, Bootstrap recommends including additional JavaScript that listens for the `closed.bs.alert` event and programmatically sets `focus()` to the most appropriate location in the page. If you're planning to move focus to a non-interactive element that normally does not receive focus, make sure to add `tabindex="-1"` to the element.

<hr>

## JavaScript behavior

### Triggers

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

### Methods

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

### Events

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