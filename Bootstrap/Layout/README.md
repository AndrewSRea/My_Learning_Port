# Layout

## Table of contents

* [Breakpoints](https://github.com/AndrewSRea/My_Learning_Port/tree/main/Bootstrap/Layout/Breakpoints#breakpoints)
* [Containers](https://github.com/AndrewSRea/My_Learning_Port/tree/main/Bootstrap/Layout/Containers#containers)
* [Grid](https://github.com/AndrewSRea/My_Learning_Port/tree/main/Bootstrap/Layout/Grid#grid-system)
* [Columns]()
* [Gutters]()
* [Utilities]()
* [Z-index]()

[[Next module: Content]]()

## Gutters

Gutters are the padding between your columns, used to responsively space and align content in the Bootstrap grid system.

### How they work

* **Gutters are the gaps between column content, created by horizontal `padding`.** We set `padding-right` and `padding-left` on each column, and use negative `margin` to offset that at the start and end of each row to align content.

* **Gutters start at `1.5rem` (`24px`) wide.** This allows us to match our grid to the [padding and margin spacers](#spacing) scale.

* **Gutters can be responsively adjusted.** Use breakpoint-specific gutter classes to modify horizontal gutters, vertical gutters, and all gutters.

### Horizontal gutters

`.gx-*` classes can be used to control the horizontal gutter widths. The `.container` or `.container-fluid` parent may need to be adjusted if larger gutters are used, too, to avoid unwanted overflow, using a matching padding utility. For example, in the following example, we've increased the padding with `.px-4`:
```
<div class="container px-4">
    <div class="row gx-5">
        <div class="col">
            <div class="p-3 border bg-light">Custom column padding</div>
        </div>
        <div class="col">
            <div class="p-3 border bg-light">Custom column padding</div>
        </div>
    </div>
</div>
```
An alternative solution is to add a wrapper around the `.row` with the `.overflow-hidden` class:
```
<div class="container overflow-hidden">
    <div class="row gx-5">
        <div class="col">
            <div class="p-3 border bg-light">Custom column padding</div>
        </div>
        <div class="col">
            <div class="p-3 border bg-light">Custom column padding</div>
        </div>
    </div>
</div>
```

### Vertical gutters

`.gy-*` classes can be used to control the vertical gutter widths. Like the horizontal gutters, the vertical gutters can cause some overflow below the `.row` at the end of a page. If this occurs, you add a wrapper around `.row` with the `.overflow-hidden` class:
```
<div class="container overflow-hidden">
    <div class="row gy-5">
        <div class="col-6">
            <div class="p-3 border bg-light">Custom column padding</div>
        </div>
        <div class="col-6">
            <div class="p-3 border bg-light">Custom column padding</div>
        </div>
        <div class="col-6">
            <div class="p-3 border bg-light">Custom column padding</div>
        </div>
        <div class="col-6">
            <div class="p-3 border bg-light">Custom column padding</div>
        </div>
    </div>
</div>
```

### Horizontal & vertical gutters

`.g-*` classes can be used to control the horizontal gutter widths. For the following example, we use a smaller gutter width so there won't be a need to add the `.overflow-hidden` wrapper class.
```
<div class="container">
    <div class="row g-2">
        <div class="col-6">
            <div class="p-3 border bg-light">Custom column padding</div>
        </div>
        <div class="col-6">
            <div class="p-3 border bg-light">Custom column padding</div>
        </div>
        <div class="col-6">
            <div class="p-3 border bg-light">Custom column padding</div>
        </div>
        <div class="col-6">
            <div class="p-3 border bg-light">Custom column padding</div>
        </div>
    </div>
</div>
```

### Row columns gutters

Gutter classes can also be added to [row columns](#row-columns). In the following example, we use responsive row columns and responsive gutter classes.
```
<div class="container">
    <div class="row row-cols-2 row-cols-lg-5 g-2 g-lg-3">
        <div class="col-6">
            <div class="p-3 border bg-light">Custom column padding</div>
        </div>
        <div class="col-6">
            <div class="p-3 border bg-light">Custom column padding</div>
        </div>
        <div class="col-6">
            <div class="p-3 border bg-light">Custom column padding</div>
        </div>
        <div class="col-6">
            <div class="p-3 border bg-light">Custom column padding</div>
        </div>
         <div class="col-6">
            <div class="p-3 border bg-light">Custom column padding</div>
        </div>
         <div class="col-6">
            <div class="p-3 border bg-light">Custom column padding</div>
        </div>
         <div class="col-6">
            <div class="p-3 border bg-light">Custom column padding</div>
        </div>
         <div class="col-6">
            <div class="p-3 border bg-light">Custom column padding</div>
        </div>
         <div class="col-6">
            <div class="p-3 border bg-light">Custom column padding</div>
        </div>
         <div class="col-6">
            <div class="p-3 border bg-light">Custom column padding</div>
        </div>
    </div>
</div>
```

### No gutters

The gutters between columns in our predefined grid classes can be removed with `.g-0`. This removes the negative `margin`s from `.row` and the horizontal `padding` from all immediate children columns.<br/>
**Need an edge-to-edge design?** Drop the parent `.container` or `.container-fluid`.<br/>
In practice, here's how it looks. Note you can continue to use this with all other predefined grid classes (including column widths, responsive tiers, reorders, and more).
```
<div class="row g-0">
    <div class="col-sm-6 col-md-8">.col-sm-6 .col-md-8</div>
    <div class="col-6 col-md-4">.col-6 .col-md-4</div>
</div>
```

### Change the gutters

Classes are built from the `$gutters` Sass map which is inherited from the `$spacers` Sass map.
```
$grid-gutter-width: 1.5rem;
$gutters: (
    0: 0,
    1: $spacer * .25,
    2: $spacer * .5,
    3: $spacer,
    4: $spacer * 1.5,
    5: $spacer * 3,
);
```

## Utilities for layout

For faster mobile-friendly and responsive development, Bootstrap includes dozens of utility classes for showing, hiding, aligning, and spacing content.

### Changing `display`

Use Bootstrap's [display utilities](#display-property) for responsively toggling common values of the `display` property. Mix it with Bootstrap's grid system, content, or components to show or hide them across specific viewports.

### Flexbox options

Bootstrap is built with flexbox, but not every element's `display` has been changed to `display: flex`, as this would add many unnecessary overrides and unexpectedly change key browser behaviors. Most of [Bootstrap's components](#alerts) are built with flexbox enabled.
Should you need to add `display: flex` to an element, do so with `.d-flex` or one of the responsive variants (e.g., `.d-sm-flex`). You'll need this class or `display` value to allow the use of our extra [flexbox utilities](#flex) for sizing, alignment, spacing, and more.

### Margin and padding

Use the `margin` and `padding` [spacing utilities](#spacing) to control how elements and components are spaced and sized. Bootstrap includes a six-level scale for spacing utilities, based on a `1rem` value default `$spacer` variable. Choose values for all viewports (e.g., `.me-3` for `margin-right: 1rem` in LTR), or pick responsive variants to target specific viewports (e.g., `.me-md-3` for `margin-right: 1rem`--in LTR--starting at the `md` breakpoint).

### Toggle `visibility`

When toggling `display` isn't needed, you can toggle the `visibility` of an element with Bootstrap's [visibility utilities](#visibility). Invisible elements will still affect the layout of the page, but are visually hidden from visitors.

## Z-index

While not a part of Bootstrap's grid system, z-indexes play an important part in how Bootstrap's components overlay and interact with one another.<br/>
Several Bootstrap components utilize `z-index`, the CSS property that helps control layout by providing a third axis to arrange content. Bootstrap utilizes a default z-index scale that's been designed to properly layer navigation, tooltips, and popovers, modals, and more.
These higher values start at an arbitrary number, high and specific enough to ideally avoid conflicts. We need a standard ste of these across our layered components--tooltips, popovers, navbars, dropdowns, modals--so we can be reasonably consistent in the behaviors. There's no reasons we couldn't have used `100`+ or `500`+.
We don't encourage customization of these individual values; should you change one, you likely need to change them all.
```
$zindex-dropdown:                1000;
$zindex-sticky:                  1020;
$zindex-fixed:                   1030;
$zindex-modal-backdrop:          1040;
$zindex-modal:                   1050;
$zindex-popover:                 1060;
$zindex-tooltip:                 1070;
```
To handle overlapping borders within components (e.g., buttons and inputs in input groups), Bootstrap uses low single digit `z-index` values of `1`, `2`, and `3` for default, hover, and active states. On hover/focus/active, Bootstrap brings a particular element to the forefront with a higher `z-index` value to show their border over the sibling elements.

## A code example of a Bootstrap layout