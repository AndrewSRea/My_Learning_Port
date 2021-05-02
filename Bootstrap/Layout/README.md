# Layout

## Table of contents

* [Breakpoints](https://github.com/AndrewSRea/My_Learning_Port/tree/main/Bootstrap/Layout/Breakpoints#breakpoints)
* [Containers](https://github.com/AndrewSRea/My_Learning_Port/tree/main/Bootstrap/Layout/Containers#containers)
* [Grid](https://github.com/AndrewSRea/My_Learning_Port/tree/main/Bootstrap/Layout/Grid#grid-system)
* [Columns](https://github.com/AndrewSRea/My_Learning_Port/tree/main/Bootstrap/Layout/Columns#columns)
* [Gutters]()
* [Utilities]()
* [Z-index]()

[[Next module: Content]]()

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