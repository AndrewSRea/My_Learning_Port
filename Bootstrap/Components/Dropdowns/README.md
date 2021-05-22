# Dropdowns

Toggle contextual overlays for displaying lists of links and more with the Bootstrap dropdown plugin.

## Overview

Dropdowns are toggleable, contextual overlays for displaying lists of links and more. They're made interactive with the included Bootstrap dropdown JavaScript plugin. They're toggled by clicking, not by hovering; this is [an intentional design decision](https://markdotto.com/2012/02/27/bootstrap-explained-dropdowns/).

Dropdowns are built on a third party library, [Popper](https://popper.js.org/), which provides dynamic positioning and viewport detection. Be sure to include [popper.min.js](https://cdn.jsdelivr.net/npm/@popperjs/core@2.6.0/dist/umd/popper.min.js) before Bootstrap's JavaScript or use `bootstrap.bundle.min.js` / `bootstrap.bundle.js` which contains Popper. Popper isn't used to position dropdowns in navbars though as dynamic positioning isn't required.

## Accessibility

The [WAI ARIA](https://www.w3.org/TR/wai-aria/) standard defines an actual [`role-"menu"` widget](https://www.w3.org/TR/wai-aria/#menu), but this is specific to application-like menus which trigger actions or functions. ARIA menus can only contain menu items, checkbox menu items, radio button menu items, radio button groups, and sub-menus.

Bootstrap's dropdowns, on the other hand, are designed to be generic and applicable to a variety of situations and markup structures. For instance, it is possible to create dropdowns that contain additional inputs and form controls, such as search fields or login forms. For this reason, Bootstrap does not expect (nor automatically add) any of the `role` and `aria-` attributes required for true ARIA menus. Authors will have to include these more specific attributes themselves.

However, Bootstrap does add built-in support for most standard keyboard menu interactions, such as the ability to move through individual `.dropdown-item` elements using the cursor keys and close the menu with the <kbd>ESC</kbd> key.

## Examples

Wrap the dropdown's toggle (your button or link) and the dropdown menu within `.dropdown`, or another element that declares `position: relative;`. Dropdowns can be triggered from `<a>` or `<button>` elements to better fit your potential needs. The examples shown here use semantic `<ul>` elements where appropriate, but custom markup is supported.

### Single button

Any single `.btn` can be turned into a dropdown toggle with some markup changes. Here's how you can put them to work with either `<button>` elements:
```
<div class="dropdown">
    <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
        Dropdown button
    </button>
    <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
        <li><a class="dropdown-item" href="#">Action</a></li>
        <li><a class="dropdown-item" href="#">Another action</a></li>
        <li><a class="dropdown-item" href="#">Something else here</a></li>
    </ul>
</div>
```
(See the code example above in my accompanying [dropdowns-examples.html](https://github.com/AndrewSRea/My_Learning_Port/blob/main/Bootstrap/Components/Dropdowns/dropdowns-examples.html) file.)

And with `<a>` elements:
```
<div class="dropdown">
    <a class="btn btn-secondary dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
        Dropdown link
    </a>

    <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
        <li><a class="dropdown-item" href="#">Action</a></li>
        <li><a class="dropdown-item" href="#">Another action</a></li>
        <li><a class="dropdown-item" href="#">Something else here</a></li>
    </ul>
</div>
```
(And this code example can also be found in my accompanying [dropdowns-examples.html](https://github.com/AndrewSRea/My_Learning_Port/blob/main/Bootstrap/Components/Dropdowns/dropdowns-examples.html) file.)

The best part is you can do this with any button variant, too:
```
<!-- Example single danger button -->
<div class="btn-group">
    <button type="button" class="btn btn-danger dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
        Danger
    </button>
    <ul class="dropdown-menu">
        <li><a class="dropdown-item" href="#">Action</a></li>
        <li><a class="dropdown-item" href="#">Another action</a></li>
        <li><a class="dropdown-item" href="#">Something else here</a></li>
        <li><hr class="dropdown-divider"></li>
        <li><a class="dropdown-item" href="#">Separated link</a></li>
    </ul>
</div>
```
(This code example can also be found in my accompanying [dropdowns-examples.html](https://github.com/AndrewSRea/My_Learning_Port/blob/main/Bootstrap/Components/Dropdowns/dropdowns-examples.html) file.)

### Split button

Similarly, create split button dropdowns with virtually the same markup as single button dropdowns, but with the addition of `.dropdown-toggle-split` for proper spacing around the dropdown caret.

Bootstrap uses this extra class to reduce the horizontal `padding` on either side of the caret by 25% and remove the `margin-left` that's added for regular button dropdowns. Those extra changes keep the caret centered in the split button and provide a more appropriately sized hit area next to the main button.
```
<!-- Example split danger button -->
<div class="btn-group">
    <button type="button" class="btn btn-danger">Danger</button> 
    <button type="button" class="btn btn-danger dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false">
        <span class="visually-hidden">Toggle Dropdown</span>
    </button>
    <ul class="dropdown-menu">
        <li><a class="dropdown-item" href="#">Action</a></li>
        <li><a class="dropdown-item" href="#">Another action</a></li>
        <li><a class="dropdown-item" href="#">Something else here</a></li>
        <li><hr class="dropdown-divider"></li>
        <li><a class="dropdown-item" href="#">Separated link</a></li>
    </ul>
</div>
```
(And again, this code example can be found in my accompanying [dropdowns-examples.html](https://github.com/AndrewSRea/My_Learning_Port/blob/main/Bootstrap/Components/Dropdowns/dropdowns-examples.html) file.)

## Sizing

Button dropdowns work with buttons of all sizes, including default and split dropdown buttons.
```
<!-- Large button groups (default and split) -->
<div class="btn-group">
    <button class="btn btn-secondary btn-lg dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
        Large button
    </button>
    <ul class="dropdown-menu">
        ...
    </ul>
</div>
<div class="btn-group">
    <button class="btn btn-secondary btn-lg" type="button">
        Large split button
    </button>
    <button type="button" class="btn btn-lg btn-secondary dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false">
        <span class="visually-hidden">Toggle Dropdown</span>
    </button>
    <ul class="dropdown-menu">
        ...
    </ul>
</div>
```
```
<div class="btn-group">
    <button class="btn btn-secondary btn-sm dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
        Small button
    </button>
    <ul class="dropdown-menu">
        ...
    </ul>
</div>
<div class="btn-group">
    <button class="btn btn-secondary btn-sm" type="button">
        Small split button
    </button>
    <button type="button" class="btn btn-sm btn-secondary dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false">
        <span class="visually-hidden">Toggle Dropdown</span>
    </button>
    <ul class="dropdown-menu">
        ...
    </ul>
</div>
```
(These two code examples can be found in my accompanying [dropdowns-examples.html](https://github.com/AndrewSRea/My_Learning_Port/blob/main/Bootstrap/Components/Dropdowns/dropdowns-examples.html) file.)

## Dark dropdowns

Opt into darker dropdowns to match a dark navbar or custom style by adding `.dropdown-menu-dark` onto an existing `.dropdown-menu`. No changes are required to the dropdown items.
```
<div class="dropdown">
    <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton2">
        Dropdown button
    </button>
    <ul class="dropdown-menu dropdown-menu-dark" aria-labelledby="dropdownMenubutton2">
        <li><a class="dropdown-item" href="#">Action</a></li>
        <li><a class="dropdown-item" href="#">Another action</a></li>
        <li><a class="dropdown-item" href="#">Something else here</a></li>
        <li><hr class="dropdown-divider"></li>
        <li><a class="dropdown-item" href="#">Separated link</a></li>
    </ul>
</div>
```
(And again, this code example can be found in my accompanying [dropdowns-examples.html](https://github.com/AndrewSRea/My_Learning_Port/blob/main/Bootstrap/Components/Dropdowns/dropdowns-examples.html) file.)

And putting it to use in a navbar:
```
<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container-fluid">
        <a class="navbar-brand" href="#">Navbar</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDarkDropdown" aria-controls="navbarNavDarkDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavDarkDropdown">
            <ul class="navbar-nav">
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" id="navbarDarkDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false>
                        Dropdown
                    </a>
                    <ul class="dropdown-menu dropdown-menu-dark" aria-labelledby="navbarDarkDropdownMenuLink">
                        <li><a class="dropdown-item" href="#">Action</a></li>
                        <li><a class="dropdown-item" href="#">Another action</a></li>
                        <li><a class="dropdown-item" href="#">Something else here</a></li>
                    </ul>
                </li>
            </ul>
        </div>
    </div>
</nav>
```
(And this code example can be found in my accompanying [dropdowns-examples.html](https://github.com/AndrewSRea/My_Learning_Port/blob/main/Bootstrap/Components/Dropdowns/dropdowns-examples.html) file.)

## Directions

<hr>

### :exclamation: RTL

Directions are mirrored when using Bootstrap in RTL, meaning `.dropstart` will appear on the right side.

<hr>

### Dropup

Trigger dropdown menus above elements by adding `.dropup` to the parent element.
```
<!-- Default dropup button -->
<div class="btn-group dropup">
    <button type="button" class="btn btn-secondary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
        Dropup
    </button>
    <ul class="dropdown-menu">
        <!-- Dropdown menu links -->
    </ul>
</div>

<!-- Split dropup button -->
<div class="btn-group dropup">
    <button type="button" class="btn btn-secondary">
        Split dropup
    </button>
    <button type="button" class="btn btn-secondary dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false">
        <span class="visually-hidden">Toggle Dropdown</span>
    </button>
    <ul class="dropdown-menu">
        <!-- Dropdown menu links -->
    </ul>
</div>
```
(See the code example above in my accompanying [dropdowns-examples-2.html](https://github.com/AndrewSRea/My_Learning_Port/blob/main/Bootstrap/Components/Dropdowns/dropdowns-examples-2.html) file.)

### Dropright

Trigger dropdown menus at the right of the elements by adding `.dropend` to the parent element.
```
<!-- Default dropend button -->
<div class="btn-group dropend">
    <button type="button" class="btn btn-secondary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
        Dropright
    </button>
    <ul class="dropdown-menu">
        <!-- Dropdown menu links -->
    </ul>
</div>

<!-- Split dropend button -->
<div class="btn-group dropend">
    <button type="button" class="btn btn-secondary">
        Split dropend
    </button>
    <button type="button" class="btn btn-secondary dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false">
        <span class="visually-hidden">Toggle Dropright</span>
    </button>
    <ul class="dropdown-menu">
        <!-- Dropdown menu links -->
    </ul>
</div>
```
(And this code example can also be found in my accompanying [dropdowns-examples-2.html](https://github.com/AndrewSRea/My_Learning_Port/blob/main/Bootstrap/Components/Dropdowns/dropdowns-examples-2.html) file.)

### Dropleft

Trigger dropdown menus at the left of the elements by adding `.dropstart` to the parent element.
```
<!-- Default dropstart button -->
<div class="btn-group dropstart">
    <button type="button" class="btn btn-secondary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
        Dropstart
    </button>
    <ul class="dropdown-menu">
        <!-- Dropdown menu links -->
    </ul>
</div>

<!-- Split dropstart button -->
<div class="btn-group">
    <div class="btn-group dropstart" role="group">
        <button type="button" class="btn btn-secondary dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false">
            <span class="visually-hidden">Toggle Dropstart</span>
        </button>
        <ul class="dropdown-menu">
            <!-- Dropdown menu links -->
        </ul>
    </div>
    <button type="button" class="btn btn-secondary">
        Split dropstart
    </button>
</div>
```
(And again, this code example can be found in my accompanying [dropdowns-examples-2.html](https://github.com/AndrewSRea/My_Learning_Port/blob/main/Bootstrap/Components/Dropdowns/dropdowns-examples-2.html) file.)

## Menu items

Historically, dropdown menu contents *had* to be links, but that's no longer the casee with v4. Now you can optionally use `<button>` elements in your dropdowns instead of just `<a>`s.
```
<div class="dropdown">
    <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenu2" data-bs-toggle="dropdown" aria-expanded="false">
        Dropdown
    </button>
    <ul class="dropdown-menu" aria-labelledby="dropdownMenu2">
        <li><a class="dropdown-item" href="#">Action</a></li>
        <li><a class="dropdown-item" href="#">Another action</a></li>
        <li><a class="dropdown-item" href="#">Something else here</a></li>
    </ul>
</div>
```
(Once again, this code example can be found in my accompanying [dropdowns-examples-2.html](https://github.com/AndrewSRea/My_Learning_Port/blob/main/Bootstrap/Components/Dropdowns/dropdowns-examples-2.html) file.)

You can also create non-interactive dropdown items with `.dropdown-item-text`. Feel free to style further with custom CSS or text utilities.
```
<ul class="dropdown-menu">
    <li><span class="dropdown-item-text">Dropdown item text</span></li>
    <li><a class="dropdown-item" href="#">Action</a></li>
    <li><a class="dropdown-item" href="#">Another action</a></li>
    <li><a class="dropdown-item" href="#">Something else here</a></li>
</ul>
```
(And once more, this code example can be found in my accompanying [dropdowns-examples-2.html](https://github.com/AndrewSRea/My_Learning_Port/blob/main/Bootstrap/Components/Dropdowns/dropdowns-examples-2.html) file.)

### Active

Add `.active` to items in the dropdown to **style them as active**. To convey the active state to assistive technologies, use the `aria-current` attribute--using the `page` value for the current page, or `true` for the current item in a set.
```
<ul class="dropdown-menu">
    <li><a class="dropdown-item" href="#">Regular link</a></li>
    <li><a class="dropdown-item active" href="#" aria-current="true">Active link</a></li>
    <li><a class="dropdown-item" href="#">Another link</a></li>
</ul>
```
(Again, this code example can be found in my accompanying [dropdowns-examples-2.html](https://github.com/AndrewSRea/My_Learning_Port/blob/main/Bootstrap/Components/Dropdowns/dropdowns-examples-2.html) file.)

### Disabled

Add `.disabled` to items in the dropdown to **styles them as disabled**.
```
<ul class="dropdown-menu">
    <li><a class="dropdown-item" href="#">Regular link</a></li>
    <li><a class="dropdown-item disabled" href="#" tabindex="-1" aria-disabled="true">Disabled link</a></li>
    <li><a class="dropdown-item" href="#">Another link</a></li>
</ul>
```
(And one more time, this code example can be found in my accompanying [dropdowns-examples-2.html](https://github.com/AndrewSRea/My_Learning_Port/blob/main/Bootstrap/Components/Dropdowns/dropdowns-examples-2.html) file.)

## Menu alignment

By default, a dropdown menu is automatically positioned 100% from the top and along the left side of its parent. You can change this with the directional `.drop*` classes, but you can also control them with additional modifier classes.

Add `.dropdown-menu-end` to a `.dropdown-menu` to right align the dropdown menu. Directions are mirrored when using Bootstrap in RTL, meaning `.dropdown-menu-end` will appear on the left side.

<hr>

**Heads up!** Dropdowns are positioned thanks to Popper except when they are contained in a navbar.

<hr>

```
<div class="btn-group">
    <button type="button" class="btn btn-secondary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
        Right-aligned menu example
    </button>
    <ul class="dropdown-menu dropdown-menu-end">
        <li><button class="dropdown-item" type="button">Action</button></li>
        <li><button class="dropdown-item" type="button">Another action</button></li>
        <li><button class="dropdown-item" type="button">Something else here</button></li>
    </ul>
</div>
```
(See the code example above in my accompanying [dropdowns-examples-3.html](https://github.com/AndrewSRea/My_Learning_Port/blob/main/Bootstrap/Components/Dropdowns/dropdowns-examples-3.html) file.)

### Responsive alignment

If you want to use responsive alignment, disable dynamic positioning by adding the `data-bs-display="static"` attribute and use the responsive variation classes.

To align **right** the dropdown menu with the given breakpoint or larger, add `.dropdown-menu-{sm|-md|-lg|-xl|-xxl}-end`.
```
<div class="btn-group">
    <button type="button" class="btn btn-secondary dropdown-toggle" data-bs-toggle="dropdown" data-bs-display="static" aria-expanded="false">
        Left-aligned but right-aligned when large screen
    </button>
    <ul class="dropdown-menu dropdown-menu-lg-end">
        <li><button class="dropdown-item" type="button">Action</button></li>
        <li><button class="dropdown-item" type="button">Another action</button></li>
        <li><button class="dropdown-item" type="button">Something else here</button></li>
    </ul>
</div>
```
(Again, this code example can be found in my accompanying [dropdowns-examples-3.html](https://github.com/AndrewSRea/My_Learning_Port/blob/main/Bootstrap/Components/Dropdowns/dropdowns-examples-3.html) file.)

To align **left** the dropdown menu with the given breakpoint or larger, add `.dropdown-menu-end` and `.dropdown-menu{-sm|-md|-lg|-xl|-xxl}-start`.
```
<div class="btn-group">
    <button type="button" class="btn btn-secondary dropdown-toggle" data-bs-toggle="dropdown" data-bs-display="static" aria-expanded="false">
        Right-aligned but left-aligned when large screen
    </button>
    <ul class="dropdown-menu dropdown-menu-end dropdown-menu-lg-start">
        <li><button class="dropdown-item" type="button">Action</button></li>
        <li><button class="dropdown-item" type="button">Another action</button></li>
        <li><button class="dropdown-item" type="button">Something else here</button></li>
    </ul>
</div>
```
(And again, this code example can be found in my accompanying [dropdowns-examples-3.html](https://github.com/AndrewSRea/My_Learning_Port/blob/main/Bootstrap/Components/Dropdowns/dropdowns-examples-3.html) file.)

Note that you don't need to add a `data-bs-display="static"` attribute to dropdown buttons in navbars, since Popper isn't used in navbars.

### Alignment options

Taking most of the options shown above, here's a small kitchen sink demo of various dropdown alignment options in one place.
```
<div class="btn-group">
    <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
        Dropdown
    </button>
    <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton">
        <li><a class="dropdown-item" href="#">Menu item</a></li>
        <li><a class="dropdown-item" href="#">Menu item</a></li>
        <li><a class="dropdown-item" href="#">Menu item</a></li>
    </ul>
</div>

<div class="btn-group">
    <button type="button" class="btn btn-secondary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
        Right-aligned menu
    </button>
    <ul class="dropdown-menu dropdown-menu-end">
        <li><a class="dropdown-item" href="#">Menu item</a></li>
        <li><a class="dropdown-item" href="#">Menu item</a></li>
        <li><a class="dropdown-item" href="#">Menu item</a></li>
    </ul>
</div>

<div class="btn-group">
    <button type="button" class="btn btn-secondary dropdown-toggle" data-bs-toggle="dropdown" data-bs-display="static" aria-expanded="false">
        Left-aligned, right-aligned lg
    </button>
    <ul class="dropdown-menu dropdown-menu-lg-end">
        <li><a class="dropdown-item" href="#">Menu item</a></li>
        <li><a class="dropdown-item" href="#">Menu item</a></li>
        <li><a class="dropdown-item" href="#">Menu item</a></li>
    </ul>
</div>

<div class="btn-group">
    <button type="button" class="btn btn-secondary dropdown-toggle" data-bs-toggle="dropdown" data-bs-display="static" aria-expanded="false">
        Right-aligned, left-aligned lg
    </button>
    <ul class="dropdown-menu dropdown-menu-end dropdown-menu-lg-start">
        <li><a class="dropdown-item" href="#">Menu item</a></li>
        <li><a class="dropdown-item" href="#">Menu item</a></li>
        <li><a class="dropdown-item" href="#">Menu item</a></li>
    </ul>
</div>

<div class="btn-group dropstart">
    <button type="button" class="btn btn-secondary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
        Dropstart
    </button>
    <ul class="dropdown-menu">
        <li><a class="dropdown-item" href="#">Menu item</a></li>
        <li><a class="dropdown-item" href="#">Menu item</a></li>
        <li><a class="dropdown-item" href="#">Menu item</a></li>
    </ul>
</div>

<div class="btn-group dropend">
    <button type="button" class="btn btn-secondary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
        Dropend
    </button>
    <ul class="dropdown-menu">
        <li><a class="dropdown-item" href="#">Menu item</a></li>
        <li><a class="dropdown-item" href="#">Menu item</a></li>
        <li><a class="dropdown-item" href="#">Menu item</a></li>
    </ul>
</div>

<div class="btn-group dropup">
    <button type="button" class="btn btn-secondary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
        Dropup
    </button>
    <ul class="dropdown-menu">
        <li><a class="dropdown-item" href="#">Menu item</a></li>
        <li><a class="dropdown-item" href="#">Menu item</a></li>
        <li><a class="dropdown-item" href="#">Menu item</a></li>
    </ul>
</div>
```
(And all of the code examples above can be found in my accompanying [dropdowns-examples-3.html](https://github.com/AndrewSRea/My_Learning_Port/blob/main/Bootstrap/Components/Dropdowns/dropdowns-examples-3.html) file.)

## Menu content

### Headers

Add a header to label sections of actions in any dropdown menu.
```
<ul class="dropdown-menu">
    <li><h6 class="dropdown-header">Dropdown header</h6></li>
    <li><a class="dropdown-item" href="#">Action</a></li>
    <li><a class="dropdown-item" href="#">Another action</a></li>
</ul>
```
(See the code example above in my accompanying [dropdowns-examples-4.html](https://github.com/AndrewSRea/My_Learning_Port/blob/main/Bootstrap/Components/Dropdowns/dropdowns-examples-4.html) file.)

### Dividers

Separate groups of related menu items with a divider.
```
<ul class="dropdown-menu">
    <li><a class="dropdown-item" href="#">Action</a></li>
    <li><a class="dropdown-item" href="#">Another action</a></li>
    <li><a class="dropdown-item" href="#">Something else here</a></li>
    <li><hr class="dropdown-divider"></li>
    <li><a class="dropdown-item" href="#">Separated link</a></li>
</ul>
```
(And this code example can be found in my accompanying [dropdowns-examples-4.html](https://github.com/AndrewSRea/My_Learning_Port/blob/main/Bootstrap/Components/Dropdowns/dropdowns-examples-4.html) file.)

### Text

Place any freeform text within a dropdown menu with text and use [spacing utilities](https://github.com/AndrewSRea/My_Learning_Port/tree/main/Bootstrap/Utilities/Spacing#spacing). Note that you'll likely need additional sizing styles to constrain the menu width.
```
<div class="dropdown-menu p-4 text-muted" style="max-width: 200px;">
    <p>
        Some example text that's free-flowing within the dropdown menu.
    </p>
    <p class="mb-0">
        And this is more example text.
    </p>
</div>
```
(And again, this code example can be found in my accompanying [dropdowns-examples-4.html](https://github.com/AndrewSRea/My_Learning_Port/blob/main/Bootstrap/Components/Dropdowns/dropdowns-examples-4.html) file.)

### Forms

Put a form within a dropdown menu, or make it into a dropdown menu, and use [margin or padding utilities](https://github.com/AndrewSRea/My_Learning_Port/tree/main/Bootstrap/Utilities/Spacing#margin-and-padding) to give it the negative space you require.
```
<div class="dropdown-menu">
    <form class="px-4 py-3">
        <div class="mb-3">
            <label for="exampleDropdownFormEmail1" class="form-label">Email address</label>
            <input type="email" class="form-control" id="exampleDropdownFormEmail1" placeholder="email@example.com">
        </div>
        <div class="mb-3">
            <label for="exampleDropdownFormPassword1" class="form-label">Password</label>
            <input type="password" class="form-control" id="exampleDropdownFormPassword1" placeholder="Password">
        </div>
        <div class="mb-3">
            <div class="form-check">
                <input type="checkbox" classs="form-check-input" id="dropdownCheck">
                <label class="form-check-label" for="dropdownCheck">
                    Remember me
                </label>
            </div>
        </div>
        <button type="submit" class="btn btn-primary">Sign in</button>
    </form>
    <div class="dropdown-divider"></div>
    <a class="dropdown-item" href="#">New around here? Sign up</a>
    <a class="dropdown-item" href="#">Forgot password?</a>
</div>
```
```
<form class="dropdown-menu p-4">
    <div class="mb-3">
        <label for="exampleDropdownFormEmail2" class="form-label">Email address</label>
        <input type="email" class="form-control" id="exampleDropdownFormEmail2" placeholder="email@example.com">
    </div>
    <div class="mb-3">
        <label for="exampleDropdownFormPassword2" class="form-label">Password</label>
        <input type="password" class="form-control" id="exampleDropdownFormPassword2" placeholder="Password">
    </div>
    <div class="mb-3">
        <div class="form-check">
            <input type="checkbox" classs="form-check-input" id="dropdownCheck2">
            <label class="form-check-label" for="dropdownCheck2">
                Remember me
            </label>
        </div>
    </div>
    <button type="submit" class="btn btn-primary">Sign in</button>
</form>
```
(These two code examples above can be found in my accompanying [dropdowns-examples-4.html](https://github.com/AndrewSRea/My_Learning_Port/blob/main/Bootstrap/Components/Dropdowns/dropdowns-examples-4.html) file.)

## Dropdown options

Use `data-bs-offset` or `data-bs-reference` to change the location of the dropdown.
```
<div class="d-flex">
    <div class="dropdown me-1">
        <button type="button" class="btn btn-secondary dropdown-toggle" id="dropdownMenuOffset" data-bs-toggle="dropdown" aria-expanded="false" data-bs-offset="10,20">
            Offset
        </button>
        <ul class="dropdown-menu" aria-labelledby="dropdownMenuOffset">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
        </ul>
    </div>
    <div class="btn-group">
        <button type="button" class="btn btn-secondary">Reference</button>
        <button type="button" class="btn btn-secondary dropdown-toggle dropdown-toggle-split" id="dropdownMenuReference" data-bs-toggle="dropdown" aria-expanded="false" data-bs-reference="parent">
            <span class="visually-hidden">Toggle Dropdown</span>
        </button>
        <ul class="dropdown-menu" aria-labelledby="dropdownMenuReference">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
            <li><hr class="dropdown-divider"></li>
            <li><a class="dropdown-item" href="#">Separated link</a></li>
        </ul>
    </div>
</div>
```
(See the code example above in my accompanying [dropdowns-examples-5.html](https://github.com/AndrewSRea/My_Learning_Port/blob/main/Bootstrap/Components/Dropdowns/dropdowns-examples-5.html) file.)

### Auto close behavior

By default, the dropdown menu is closed when clicking inside or outside the dropdown menu. You can use the `autoClose` option to change this behavior of the dropdown.
```
<div class="btn-group">
    <button class="btn btn-secondary dropdown-toggle" type="button" id="defaultDropdown" data-bs-toggle="dropdown" data-bs-auto-close="true" aria-expanded="false">
        Default dropdown
    </button>
    <ul class="dropdown-menu" aria-labelledby="defaultDropdown">
        <li><a class="dropdown-item" href="#">Menu item</a></li>
        <li><a class="dropdown-item" href="#">Menu item</a></li>
        <li><a class="dropdown-item" href="#">Menu item</a></li>
    </ul>
</div>

<div class="btn-group">
    <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuClickableOutside" data-bs-toggle="dropdown" data-bs-auto-close="inside" aria-expanded="false">
        Clickable outside
    </button>
    <ul class="dropdown-menu" aria-labelledby="dropdownMenuClickableOutside">
        <li><a class="dropdown-item" href="#">Menu item</a></li>
        <li><a class="dropdown-item" href="#">Menu item</a></li>
        <li><a class="dropdown-item" href="#">Menu item</a></li>
    </ul>
</div>

<div class="btn-group">
    <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuClickableInside" data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-expanded="false">
        Clickable inside
    </button>
    <ul class="dropdown-menu" aria-labelledby="dropdownMenuClickableInside">
        <li><a class="dropdown-item" href="#">Menu item</a></li>
        <li><a class="dropdown-item" href="#">Menu item</a></li>
        <li><a class="dropdown-item" href="#">Menu item</a></li>
    </ul>
</div>

<div class="btn-group">
    <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuClickable" data-bs-toggle="dropdown" data-bs-auto-close="false" aria-expanded="false">
        Manual close
    </button>
    <ul class="dropdown-menu" aria-labelledby="dropdownMenuClickable">
        <li><a class="dropdown-item" href="#">Menu item</a></li>
        <li><a class="dropdown-item" href="#">Menu item</a></li>
        <li><a class="dropdown-item" href="#">Menu item</a></li>
    </ul>
</div>
```
(And this code example can be found in my accompanying [dropdowns-examples-5.html](https://github.com/AndrewSRea/My_Learning_Port/blob/main/Bootstrap/Components/Dropdowns/dropdowns-examples-5.html) file.)

## Sass

### Variables

Variables for all dropdowns:
```
$dropdown-min-width:             10rem;
$dropdown-padding-x:             0;
$dropdown-padding-y:             .5rem;
$dropdown-spacer:                .125rem;
$dropdown-font-size:             $font-size-base;
$dropdown-color:                 $body-color;
$dropdown-bg:                    $white;
$dropdown-border-color:          rgba($black, .15);
$dropdown-border-radius:         $border-radius;
$dropdown-border-width:          $border-width;
$dropdown-inner-border-radius:   subtract($dropdown-border-radius, $dropdown-border-width);
$dropdown-divider-bg:            $dropdown-border-color;
$dropdown-divider-margin-y:      $spacer / 2;
$dropdown-box-shadow:            $box-shadow;

$dropdown-link-color:            $gray-900;
$dropdown-link-hover-color:      shade-color($gray-900, 10%);
$dropdown-link-hover-bg:         $gray-200;

$dropdown-link-active-color:     $component-active-color;
$dropdown-link-active-bg:        $component-active-bg;

$dropdown-link-disabled-color:   $gray-500;

$dropdown-item-padding-y:        $spacer / 4;
$dropdown-item-padding-x:        $spacer;

$dropdown-header-color:          $gray-600;
$dropdown-header-padding:        $dropdown-padding-y $dropdown-item-padding-x;
```
Variables for the [dark dropdown](https://github.com/AndrewSRea/My_Learning_Port/tree/main/Bootstrap/Components/Dropdowns#dark-dropdowns):
```
$dropdown-dark-color:                 $gray-300;
$dropdown-dark-bg:                    $gray-500;
$dropdown-dark-border-color:          $dropdown-border-color;
$dropdown-dark-divider-bg:            $dropdown-divider-bg;
$dropdown-dark-box-shadow:            null;
$dropdown-dark-link-color:            $dropdown-dark-color;
$dropdown-dark-link-hover-color:      $white;
$dropdown-dark-link-hover-bg:         rgba($white, .15);
$dropdown-dark-link-active-color:     $dropdown-link-active-color;
$dropdown-dark-active-bg:             $dropdown-link-active-bg;
$dropdown-dark-link-disabled-color:   $gray-500;
$dropdown-dark-header-color:          $gray-500;
```
Variables for the CSS-based carets that indicate a dropdown's interactivity:
```
$caret-width:              .3em;
$caret-vertical-align:     $caret-width * .85;
$caret-spacing:            $caret-width * .85;
```

### Mixins

Mixins are used to generate the CSS-based carets and can be found in `scss/mixins/_caret.scss`.
```
@mixin caret-down {
    border-top: $caret-width solid;
    border-right: $caret-width solid transparent;
    border-bottom: 0;
    border-left: $caret-width solid transparent;
}

@mixin caret-up {
    border-top: 0;
    border-right: $caret-width solid transparent;
    border-bottom: $caret-width solid;
    border-left: $caret-width solid transparent;
}

@mixin caret-end {
    border-top: $caret-width solid transparent;
    border-right: 0;
    border-bottom: $caret-width solid transparent;
    border-left: $caret-width solid;
}

@mixin caret-start {
    border-top: $caret-width solid transparent;
    border-right: $caret-width solid;
    border-bottom: $caret-width solid transparent;
}

@mixin caret($direction: down) {
    @if $enable-caret {
        &::after {
            display: inline-block;
            margin-left: $caret-spacing;
            vertical-align: $caret-vertical-align;
            content: "";
            @if $direction == down {
                @incklude caret-down();
            } @else if $direction == up {
                @include caret-up();
            } @else if $direction == end {
                @include caret-end();
            }
        }

        @if $direction == start {
            &::after {
                display: none;
            }

            &::before {
                display: inline-block;
                margin-right: $caret-spacing;
                vertical-align: $caret-vertical-align;
                content: "";
                @include caret-start();
            }
        }

        &:empty::after {
            margin-left: 0;
        }
    }
}
```

## Usage

Via data attributes or JavaScript, the dropdown plugin toggles hidden content (dropdown menus) by toggling the `.show` class on the parent `.dropdown-menu`. The `data-bs-toggle="dropdown"` attribute is relied on for closing dropdown menus at an application level, so it's a good idea to always use it.

<hr>

:warning: On touch-enabled devices, opoening a droopdown adds empty `mouseover` handlers to the immediate children of the `<body>` element. This admittedly ugly hack is necessary to work around a [quirk in iOS' event delegation](https://www.quirksmode.org/blog/archives/2014/02/mouse_event_bub.html), which would otherwise prevent a tap anywhere outside of the dropdown from triggering the code that closes the dropdown. Once the dropdown is closed, these additional empty `mouseover` handlers are removed.

<hr>

### Via data attributes

Add `data-bs-toggle="dropdown"` to a link or button to toggle a dropdown.
```
<div class="dropdown">
    <button id="dLabel" type="button" data-bs-toggle="dropdown" aria-expanded="false">
        Dropdown trigger
    </button>
    <ul class="dropdown-menu" aria-labelledby="dLabel">
        ...
    </ul>
</div>
```

### Via JavaScript

Call the dropdowns via JavaScript:
```
var dropdownElementList = [].slice.call(document.querySelectorAll('.dropdown-toggle'));
var dropdownList = dropdownElementList,map(function(dropdownToggleEl) {
    return new bootstrap.Dropdown(dropdownToggleEl);
});
```

<hr>

#### :warning: `data-bs-toggle="dropdown"` still required

Regardless of whether you call your dropdown via JavaScript or instead use the data-api, `data-bs-toggle="dropdown"` is always required to be present on the dropdown's trigger element.

<hr>

### Options

Options can be passed via data attributes or JavaScript. For data attributes, append the option name to `data-bs-`, as in `data-bs-offset=""`. Make sure to change the case type of the option name from camelCase to kebab-case when passing the options via data attributes. For example, instead of using `data-bs-autoClose="false"`, use `data-bs-auto-close="false"`.

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `boundary` | string \| element | `'clippingParents'` | Overflow constraint boundary of the dropdown menu (applies only to Popper's preventOverflow modifer (via JavaScript only). For more information, refer to Popper's [detectOverflow docs](https://popper.js.org/docs/v2/utils/detect-overflow/#boundary). |
| `reference` | string \| element \| object | `'toggle'` | Reference element of the dropdown menu. Accepts the values of `'toggle'`, `'parent'`, an HTMLElement reference or an object providing `getBoundingClientRect`. For more information, refer to Popper's [constructor docs](https://popper.js.org/docs/v2/constructors/#createpopper) and [virtual element docs](https://popper.js.org/docs/v2/virtual-elements/). |
| `display` | string | `dynamic` | By default, Bootstrap uses Popper for dynamic positioning. Disable this with `static`. |
| `offset` | array \| string \| function | `[0, 2]` | Offset of the dropdown relative to its target. You can pass a string in data attributes with comma separated values like: `data-bs-offset="10,20"`<br>When a function is used to determine the offset, it is called with an object containing the popper placement, the reference, and popper rects as its first argument. The triggering element DOM node is passed as the second argument. The function must return an array with two numbers: `[`[skidding](https://popper.js.org/docs/v2/modifiers/offset/#skidding-1), [distance](https://popper.js.org/docs/v2/modifiers/offset/#distance-1)`]`.<br>For more information, refer to Popper's [offset docs](https://popper.js.org/docs/v2/modifiers/offset/#options). |
| `autoClose` | Boolean \| string | `true` | Configure the auto close behavior of the dropdown:<br>* `true` - the dropdown will be closed by clicking outside or inside the dropdown menu.<br>* `false` - the dropdown will be closed by clicking the toggle button and manually calling the `hide` or `toggle` method. (Also will not be closed by pressing <kbd>esc</kbd> key.)<br>* `'inside'` - the dropdown will be closed (only) by clicking inside the dropdown menu.<br>* `'outside'` - the dropdown will be closed (only) by clicking outside the dropdown menu. |
| `popperConfig` | null \| object \| function | `null` | To change Bootstrap's default Popper config, see [Popper's configuration](https://popper.js.org/docs/v2/constructors/#options).<br>When a function is used to create the Popper configuration, it's called with an object that contains the Bootstrap's default Popper configuration. It helps you use and merge the default with your own configuration. The function must return a configuration object for Popper. |

#### Using function with `popperConfig`

```
var dropdown = new bootstrap.Dropdown(element, {
    popperConfig: function(defaultBsPopperConfig) {
        // var newPopperConfig = {...}
        // use defaultBsPopperCconfig if needed...
        // return newPopperConfig
    };
});
```

### Methods

| Method | Description |
| --- | --- |
| `toggle` | Toggles the dropdown menu of a given navbar or tabbed navigation. |
| `show` | Shows the dropdown menu of a given navbar or tabbed navigation. |
| `hide` | Hides the dropdown menu of a given navbar or tabbed navigation. |
| `update` | Updates the position of an element's dropdown. |
| `dispose` | Destroys an element's dropdown. (Removes stored data on the DOM element.) |
| `getInstance` | Static method which allows you to get the dropdown instance associated with a DOM element. |

### Events

All dropdown events are fired at the toggling element and then bubbled up. So you can also add event listeners on the `.dropdown-menu`'s parent element. `hide.bs.dropdown` and `hidden.bs.dropdown` events have a `clickEvent` property (only when the original Event type is `click`) that contains an Event Object for the click event.

| Method | Description |
| --- | --- |
| `show.bs.dropdown` | Fires immediately when the show instance method is called. |
| `shown.bs.dropdown` | Fired when the dropdown has been made visible to the user and CSS transitions have completed. |
| `hide.bs.dropdown` | Fires immediately when the hide instance method has been called. |
| `hidden.bs.dropdown` | Fired when the dropdown has finished being hidden from the user and CSS transitions have completed. |

```
var myDropdown = document.getElementById('myDropdown');
myDropdown.addEventListener('show.bs.dropdown', function() {
    // do something...
}) ;
```

<hr>

[[Previous page]](https://github.com/AndrewSRea/My_Learning_Port/tree/main/Bootstrap/Components/Collapse#collapse) - [[Top]](https://github.com/AndrewSRea/My_Learning_Port/tree/main/Bootstrap/Components/Dropdowns#dropdowns) - [[Next page]](https://github.com/AndrewSRea/My_Learning_Port/tree/main/Bootstrap/Components/List_Group)