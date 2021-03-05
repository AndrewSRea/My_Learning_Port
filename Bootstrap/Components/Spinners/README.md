# Spinners

Indicate the loading state of a component or page with Bootstrap spinners, built entirely with HTML, CSS, and no JavaScript.

## About

Bootstrap "spinners" can be used to show the loading state in your projects. They're built only with HTML and CSS, meaning you don't need any JavaScript to create them. You will, however, need some custom JavaScript to toggle their visibility. Their appearance, alignment, and sizing can be easily customized with Bootstrap's amazing utility classes.<br>
For accessibility purposes, each loader here includes `role="status"` and a nested `<span class="visually-hidden">Loading...</span>`.

<hr>

:exclamation: The animation effect of this component is dependent on the `prefers-reduced-motion` media query. See the [reduced motion section of our accessibility documentation](https://getbootstrap.com/docs/5.0/getting-started/accessibility/#reduced-motion).

<hr>

## Border spinner

Use the border spinners for a lightweight loading indicator.
```
<div class="spinner-border" role="status">
    <span class="visually-hidden">Loading...</span>
</div>
```

## Colors

The border spinner uses `currentColor` for its `border-color`, meaning you can customize the color with [text color utilities](). <!-- link to Utilities folder /  Colors --> You can use any of Bootstrap's text color utilities on the standard spinner.
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
Once again, this spinner is buuilt with `currentColor`, so you can easily change its appearance with [text color utilities](). <!-- link to Utilities folder / Colors --> Here it is in blue, along with the supported variants.
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

## Alignment

Spinners in Bootstrap are built with `rem`s, `currentColor`, and `display: inline-flex`. This means they can easily be resized, recolored, and quickly aligned.

### Margin

Use [margin utilities]() <!-- link to Utilities / Spacing --> like `.m-5` for easy spacing.
```
<div class="spinner-border m-5" role="status">
    <span class="visually-hidden">Loading...</span>
</div>
```

### Placement

Use [flexbox utiilities](), [float utilities](), or [text alignment]() utilities to place spinners exactly where you need them in any situation.

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

#### Floats

```
<div class="clearfix">
    <div class="spinner-border float-end" role="status">
        <span class="visually-hidden">Loading...</span>
    </div>
</div>
```

#### Text align

```
<div class="text-center">
    <div class="spinner-border" role="status">
        <span class="visually-hidden">Loading...</span>
    </div>
</div>
```

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
Or, use custom CSS or inline styles to change the dimensions as needed.
```
<div class="spinner-border" style="width: 3rem; height: 3rem;" role="status">
    <span class="visually-hidden">Loading...</span>
</div>
<div class="spinner-grow" style="width: 3rem; height: 3rem;" role="status">
    <span class="visually-hidden">Loading...</span>
</div>
```

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