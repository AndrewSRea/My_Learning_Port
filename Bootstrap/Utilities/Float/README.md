# Float

Toggle floats on any element, across any breakpoint, using Bootstrap's responsive float utilities.

## Overview

These utility classes float an element to the left or right, or disable floating, based on the current viewport size using the [CSS `float` property](https://developer.mozilla.org/en-US/docs/Web/CSS/float). `!important` is included to avoid specificity issues. These use the same viewport breakpoints as Bootstrap's grid system. Please be aware float utilities have no effect on flex items.
```
<div class="float-start">Float start on all viewport sizes</div><br>
<div class="float-end">Float end on all viewport sizes</div><br>
<div class="float-none">Don't float on all viewport sizes</div>
```
(This code example can be found in my accompanying [float-utilities-examples-1.html](https://github.com/AndrewSRea/My_Learning_Port/blob/main/Bootstrap/Utilities/Float/float-utilities-examples-1.html) file.)

## Responsive 

Responsive variations also exist for each `float` value.
```
<div class="float-sm-start">Float start on viewports sized SM (small) or wider</div><br>
<div class="float-md-start">Float start on viewports sized MD (medium) or wider</div><br>
<div class="float-lg-start">Float start on viewports sized LG (large) or wider</div><br>
<div class="float-xl-start">Float start on viewports sized XL (extra-large) or wider</div>
```
(And this code example can also be found in my accompanying [float-utilities-examples-1.html](https://github.com/AndrewSRea/My_Learning_Port/blob/main/Bootstrap/Utilities/Float/float-utilities-examples-1.html) file.)

Here are all the support classes:

* `.float-start`
* `.float-end`
* `.float-none`
* `.float-sm-start`
* `.float-sm-end`
* `.float-sm-none`
* `.float-md-start`
* `.float-md-end`
* `.float-md-none`
* `.float-lg-start`
* `.float-lg-end`
* `.float-lg-none`
* `.float-xl-start`
* `.float-xl-end`
* `.float-xl-none`
* `.float-xxl-start`
* `.float-xxl-end`
* `.float-xxl-none`

## Sass

### Utilities API

Float utilities are declared in our utilities API in `scss/_utilities.scss`. [Learn how to use the utilities API.](https://github.com/AndrewSRea/My_Learning_Port/tree/main/Bootstrap/Utilities/API#using-the-api)
```
"float": (
    responsive: true,
    property: float,
    values: (
        start: left,
        end: right,
        none: none,
    )
),
```

<hr>

[[Previous page]](https://github.com/AndrewSRea/My_Learning_Port/tree/main/Bootstrap/Utilities/Flex#flex) - [[Top]](https://github.com/AndrewSRea/My_Learning_Port/tree/main/Bootstrap/Utilities/Float#float) - [[Next page]](https://github.com/AndrewSRea/My_Learning_Port/tree/main/Bootstrap/Utilities/Interactions#interactions)