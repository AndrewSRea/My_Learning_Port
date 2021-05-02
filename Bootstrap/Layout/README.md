# Layout

## Table of contents

* [Breakpoints](https://github.com/AndrewSRea/My_Learning_Port/tree/main/Bootstrap/Layout/Breakpoints#breakpoints)
* [Containers](https://github.com/AndrewSRea/My_Learning_Port/tree/main/Bootstrap/Layout/Containers#containers)
* [Grid](https://github.com/AndrewSRea/My_Learning_Port/tree/main/Bootstrap/Layout/Grid#grid-system)
* [Columns](https://github.com/AndrewSRea/My_Learning_Port/tree/main/Bootstrap/Layout/Columns#columns)
* [Gutters](https://github.com/AndrewSRea/My_Learning_Port/tree/main/Bootstrap/Layout/Gutters#gutters)
* [Utilities]()
* [Z-index]()

[[Next module: Content]]()

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