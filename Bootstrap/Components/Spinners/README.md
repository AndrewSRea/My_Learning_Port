# Spinners

Indicate the loading state of a component or page with Bootstrap spinners, built entirely with HTML, CSS, and no JavaScript.

## About

Bootstrap "spinners" can be used to show the loading state in your projects. They're built only with HTML and CSS, meaning you don't need any JavaScript to create them. You will, however, need some custom JavaScript to toggle their visibility. Their appearance, alignment, and sizing can be easily customized with Bootstrap's amazing utility classes.

For accessibility purposes, each loader here includes `role="status"` and a nested `<span class="visually-hidden">Loading...</span>`.

<hr>

:exclamation: The animation effect of this component is dependent on the `prefers-reduced-motion` media query. See the [reduced motion section of our accessibility documentation](https://github.com/AndrewSRea/My_Learning_Port/tree/main/Bootstrap/Getting_Started/Accessibility#reduced-motion).

<hr>

## Border spinner

Use the border spinners for a lightweight loading indicator.
```
<div class="spinner-border" role="status">
    <span class="visually-hidden">Loading...</span>
</div>
```
(This code example can be found in my accompanying [spinners-examples.html](https://github.com/AndrewSRea/My_Learning_Port/blob/main/Bootstrap/Components/Spinners/spinners-examples.html) file.)

## Colors

The border spinner uses `currentColor` for its `border-color`, meaning you can customize the color with [text color utilities](https://github.com/AndrewSRea/My_Learning_Port/tree/main/Bootstrap/Utilities/Colors#colors). You can use any of Bootstrap's text color utilities on the standard spinner.
```
<div class="spinner-border text-primary" role="status">
    <span class="visually-hidden">Loading...</span>
</div>
<div class="spinner-border text-secondary" role="status">
    <span class="visually-hidden">Loading...</span>
</div>
<div class="spinner-border text-success" role="status">
    <span class="visually-hidden">Loading...</span>
</div>
<div class="spinner-border text-danger" role="status">
    <span class="visually-hidden">Loading...</span>
</div>
<div class="spinner-border text-warning" role="status">
    <span class="visually-hidden">Loading...</span>
</div>
<div class="spinner-border text-info" role="status">
    <span class="visually-hidden">Loading...</span>
</div>
<div class="spinner-border text-light" role="status">
    <span class="visually-hidden">Loading...</span>
</div>
<div class="spinner-border text-dark" role="status">
    <span class="visually-hidden">Loading...</span>
</div>
```
(And this code example can also be found in my accompanying [spinners-examples.html](https://github.com/AndrewSRea/My_Learning_Port/blob/main/Bootstrap/Components/Spinners/spinners-examples.html) file.)

<hr>

:exclamation: **Why not use `border-color` utilities?** Each border spinner specifies a `transparent` border for at least one side, so `.border-{color}` utilities would override that.

<hr>

## Growing spinner

If you don't fancy a border spinner, switch to the grow spinner. While it doesn't technically spin, it does repeatedly grow!
```
<div class="spinner-grow" role="status">
    <span class="visually-hidden">Loading...</span>
</div>
```
(Again, this code example can be found in my accompanying [spinners-examples.html](https://github.com/AndrewSRea/My_Learning_Port/blob/main/Bootstrap/Components/Spinners/spinners-examples.html) file.)

Once again, this spinner is buuilt with `currentColor`, so you can easily change its appearance with [text color utilities](https://github.com/AndrewSRea/My_Learning_Port/tree/main/Bootstrap/Utilities/Colors#colors). Here it is in blue, along with the supported variants.
```
<div class="spinner-grow text-primary" role="status">
    <span class="visually-hidden">Loading...</span>
</div>
<div class="spinner-grow text-secondary" role="status">
    <span class="visually-hidden">Loading...</span>
</div>
<div class="spinner-grow text-success" role="status">
    <span class="visually-hidden">Loading...</span>
</div>
<div class="spinner-grow text-danger" role="status">
    <span class="visually-hidden">Loading...</span>
</div>
<div class="spinner-grow text-warning" role="status">
    <span class="visually-hidden">Loading...</span>
</div>
<div class="spinner-grow text-info" role="status">
    <span class="visually-hidden">Loading...</span>
</div>
<div class="spinner-grow text-light" role="status">
    <span class="visually-hidden">Loading...</span>
</div>
<div class="spinner-grow text-dark" role="status">
    <span class="visually-hidden">Loading...</span>
</div>
```
(And again, this code example can be found in my accompanying [spinners-examples.html](https://github.com/AndrewSRea/My_Learning_Port/blob/main/Bootstrap/Components/Spinners/spinners-examples.html) file.)

## Alignment

Spinners in Bootstrap are built with `rem`s, `currentColor`, and `display: inline-flex`. This means they can easily be resized, recolored, and quickly aligned.

### Margin

Use [margin utilities](https://github.com/AndrewSRea/My_Learning_Port/tree/main/Bootstrap/Utilities/Spacing#spacing) like `.m-5` for easy spacing.
```
<div class="spinner-border m-5" role="status">
    <span class="visually-hidden">Loading...</span>
</div>
```
(This code example can be found in my accompanying [spinners-examples-2.html](https://github.com/AndrewSRea/My_Learning_Port/blob/main/Bootstrap/Components/Spinners/spinners-examples-2.html) file.)

### Placement

Use [flexbox utiilities](https://github.com/AndrewSRea/My_Learning_Port/tree/main/Bootstrap/Utilities/Flex#flex), [float utilities](https://github.com/AndrewSRea/My_Learning_Port/tree/main/Bootstrap/Utilities/Float#float), or [text alignment](https://github.com/AndrewSRea/My_Learning_Port/tree/main/Bootstrap/Utilities/Text#text-alignment) utilities to place spinners exactly where you need them in any situation.

#### Flex

```
<div class="d-flex justify-content-center">
    <div class="spinner-border" role="status">
        <span class="visually-hidden">Loading...</span>
    </div>
</div>
```
```
<div class="d-flex align-items-center">
    <strong>Loading...</strong>
    <div class="spinner-border ms-auto" role="status" aria-hidden="true"></div>
</div>
```
(These two code examples can be found in my accompanying [spinners-examples-2.html](https://github.com/AndrewSRea/My_Learning_Port/blob/main/Bootstrap/Components/Spinners/spinners-examples-2.html) file.)

#### Floats

```
<div class="clearfix">
    <div class="spinner-border float-end" role="status">
        <span class="visually-hidden">Loading...</span>
    </div>
</div>
```
(And this code example can also be found in my accompanying [spinners-examples-2.html](https://github.com/AndrewSRea/My_Learning_Port/blob/main/Bootstrap/Components/Spinners/spinners-examples-2.html) file.)

#### Text align

```
<div class="text-center">
    <div class="spinner-border" role="status">
        <span class="visually-hidden">Loading...</span>
    </div>
</div>
```
(Again, this code example can be found in my accompanying [spinners-examples-2.html](https://github.com/AndrewSRea/My_Learning_Port/blob/main/Bootstrap/Components/Spinners/spinners-examples-2.html) file.)

## Size

Add `.spinner-border-sm` and `.spinner-grow-sm` to make a smaller spinner that can quickly be used within other components.
```
<div class="spinner-border spinner-border-sm" role="status">
    <span class="visually-hidden">Loading...</span>
</div>
<div class="spinner-grow spinner-grow-sm" role="status">
    <span class="visually-hidden">Loading...</span>
</div>
```
(This code example can be found in my accompanying [spinners-examples-3.html](https://github.com/AndrewSRea/My_Learning_Port/blob/main/Bootstrap/Components/Spinners/spinners-examples-3.html) file.)

Or, use custom CSS or inline styles to change the dimensions as needed.
```
<div class="spinner-border" style="width: 3rem; height: 3rem;" role="status">
    <span class="visually-hidden">Loading...</span>
</div>
<div class="spinner-grow" style="width: 3rem; height: 3rem;" role="status">
    <span class="visually-hidden">Loading...</span>
</div>
```
(And this code example can also be found in my accompanying [spinners-examples-3.html](https://github.com/AndrewSRea/My_Learning_Port/blob/main/Bootstrap/Components/Spinners/spinners-examples-3.html) file.)

## Buttons

Use spinners within buttons to indicate an action is currently processing or taking place. You may also swap the text out of the spinner element and utilize button text as needed.
```
<button class="btn btn-primary" type="button" disabled>
    <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
    <span class="visually-hidden">Loading...</span>
</button>
<button class=" btn btn-primary" type="button" disabled>
    <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
    Loading...
</button>
```
```
<button class="btn btn-primary" type="button" disabled>
    <span class="spinner-grow spinner-grow-sm" role="status" aria-hidden="true"></span>
    <span class="visually-hidden">Loading...</span>
</button>
<button class=" btn btn-primary" type="button" disabled>
    <span class="spinner-grow spinner-grow-sm" role="status" aria-hidden="true"></span>
    Loading...
</button>
```
(And these two code examples can also be found in my accompanying [spinners-examples-3.html](https://github.com/AndrewSRea/My_Learning_Port/blob/main/Bootstrap/Components/Spinners/spinners-examples-3.html) file.)

## Sass

### Variables

```
$spinner-width:             2rem;
$spinner-height:            $spinner-width;
$spinner-vertical-align:    -.125em;
$spinner-border-width:      .25em;
$spinner-animation-speed:   .75s;

$spinner-width-sm:          1rem;
$spinner-height-sm:         $spinner-width-sm;
$spinner-border-width-sm:   .2em;
```

### Keyframes

Used for creating the CSS animations for Bootstrap's spinners. Included in `scss/_spinners.scss`.
```
@keyframes spinner-border {
    to { transfrom: rotate(360deg) #{"/* rtl:ignore */"}; }
}
```
```
@keyframes spinner-grow {
    0% {
        transform: scale(0);
    }
    50% {
        opacity: 1;
        transform: none;
    }
}
```

<hr>

[[Previous page]](https://github.com/AndrewSRea/My_Learning_Port/tree/main/Bootstrap/Components/Scrollspy#scrollspy) - [[Top]](https://github.com/AndrewSRea/My_Learning_Port/tree/main/Bootstrap/Components/Spinners#spinners) - [[Next page]](https://github.com/AndrewSRea/My_Learning_Port/tree/main/Bootstrap/Components/Toasts#toasts)