# Offcanvas

Build hidden sidebars into your project for navigation, shopping carts, and more with a few classes and Bootstrap's JavaScript plugin.

## How it works

Offcanvas is a sidebar component that can be toggled via JavaScript to appear from the left, right, or bottom edge of the viewport. Buttons or anchors are used as triggers that are attached to specific elements you toggle, and data attributes are used to invoke Bootstrap's JavaScript.

* Offcanvas shares some of the same JavaScript code as modals. Conceptually, they are quite similar, but they are separate plugins.
* Similarly, some [[source Sass]]() <!-- link to "Sass" header below --> variables for offcanvas's styles and dimensions are inherited from the modal's variables.
* When shown, offcanvas includes a default backdrop that ccan be clicked to hide the offcanvas. 
* Similar to modals, only one offcanvas can be shown at a time.

**Heads up!** Given how CSS handles animations, you cannot use `margin` or `translate` on an `.offcanvas` element. Instead, use the class as an independent wrapping element.

<hr>

The animation effect of this component is dependent on the `prefers-reduced-motion` media query. See the [reduced motion section of Bootstrrap's accessibility documentation](https://github.com/AndrewSRea/My_Learning_Port/tree/main/Bootstrap/Getting_Started/Accessibility#reduced-motion).

<hr>

## Examples

### Offcanvas components

Below is an offcanvas example that is shown by default (via `.show` on `.offcanvas`). Offcanvas includes support for a header with a close button and a close button and an optional body class for some initial `padding`. We suggest that you include offcanvas headers with dismiss actions whenever possible, or provide an explicit dismiss action.
```
<div class="offcanvas offcanvas-start" tabindex="-1> id="offcanvas" aria-labelledby="offcanvasLabel">
    <div class="offcanvas-header">
        <h5 class="offcanvas-title" id="offcanvasLabel">Offcanvas</h5>
        <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
    </div>
    <div class="offcanvas-body">
        Content for the offcanvas goes here. You can place just about any Bootstrap component or custom elements here.
    </div>
</div>
```
(This code example can be found in my accompanying [offcanvas-examples.html](https://github.com/AndrewSRea/My_Learning_Port/blob/main/Bootstrap/Components/Offcanvas/offcanvas-examples.html) file.)

### Live demo

Use the buttons in my accompanying [offcanvas-examples.html](https://github.com/AndrewSRea/My_Learning_Port/blob/main/Bootstrap/Components/Offcanvas/offcanvas-examples.html) file, under the header **Offcanvas Component Example 02**, to show and hide an offcanvas element via JavaScript that toggles the `.show` class on an element with the `.offcanvas` class.

* `.offcanvas` hides content (default)
* `.offcanvas.show` shows content

You can use a link with the `href` attribute, or a button with the `data-bs-target` attribute. In both cases, the `data-bs-toggle="offcanvas" is required.
```
<a class="btn btn-primary" data-bs-toggle="offcanvas" href="#offcanvasExample" role="button" aria-controls="offcanvasExample">
    Link with href
</a>
<button class="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="offcanvasExample" aria-controls="offcanvasExample">
    Button with data-bs-target
</button>

<div class="offcanvas offcanvas-start" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
    <div class="offcanvas-header">
        <h5 class="offcanvas-title" id="offcanvasExampleLabel">Offcanvas</h5>
        <button type="button" class="btn-close text-reset" data-bs-=dismiss="offcanvas" aria-label="Close"></button>
    </div>
    <div class="offcanvas-body">
        <div>
            Some text as placeholder. In real life you can have elements you have chosen. Like text, images, lists, etc.
        </div>
        <div class="dropdown mt-3">
            <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown">
                Dropdown button
            </button>
            <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <li><a class="dropdown-item" href="#">Action</a></li>
                <li><a class="dropdown-item" href="#">Another action</a></li>
                <li><a class="dropdown-item" href="#">Something else here</a></li>
            </ul>
        </div>
    </div>
</div>
```
(Again, this code example can be found in my accompanying [offcanvas-examples.html](https://github.com/AndrewSRea/My_Learning_Port/blob/main/Bootstrap/Components/Offcanvas/offcanvas-examples.html) file.)