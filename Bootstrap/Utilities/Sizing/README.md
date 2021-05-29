# Sizing

Easily make an element as wide or as tall with our width and height utilities.

## Relative to the parent

Width and height utilities are generated from the utility API in `_utilities.scss`. Includes support for `25%`, `50%`, `75%`, `100%`, and `auto` by default. Modify those values as you need to generate different utilities here.
```
<div class="w-25 p-3" style="background-color: #eee;">Width 25%</div>
<div class="w-50 p-3" style="background-color: #eee;">Width 50%</div>
<div class="w-75 p-3" style="background-color: #eee;">Width 75%</div>
<div class="w-100 p-3" style="background-color: #eee;">Width 100%</div>
<div class="w-auto p-3" style="background-color: #eee;">Width auto</div>
```
```
<div style="height: 100px; background-color: rgba(255,0,0,0.1);">
    <div class="h-25 d-inline-block" style="width: 120px; background-color: rgba(0,0,255,.1)">Height 25%</div>
    <div class="h-50 d-inline-block" style="width: 120px; background-color: rgba(0,0,255,.1)">Height 50%</div>
    <div class="h-75 d-inline-block" style="width: 120px; background-color: rgba(0,0,255,.1)">Height 75%</div>
    <div class="h-100 d-inline-block" style="width: 120px; background-color: rgba(0,0,255,.1)">Height 100%</div>
    <div class="h-auto d-inline-block" style="width: 120px; background-color: rgba(0,0,255,.1)">Height auto</div>
</div>
```
(These two code examples above can be found in my accompanying [sizing-utilities-examples-1.html](https://github.com/AndrewSRea/My_Learning_Port/blob/main/Bootstrap/Utilities/Sizing/sizing-utilities-examples-1.htmll) file.)

You can also use `max-width: 100%;` and `max-height: 100%;` utilities as needed.
```
<img src="..." class="mw-100" alt="...">
```
```
<div style="height: 100px; background-color: rgba(255,0,0,.1);">
    <div class="mh-100" style="width: 100px; height: 200px; background-color: rgba(0,0,255,.1);">Max-height 100%</div>
</div>
```
(These two code examples above can also be found in my accompanying [sizing-utilities-examples-1.html](https://github.com/AndrewSRea/My_Learning_Port/blob/main/Bootstrap/Utilities/Sizing/sizing-utilities-examples-1.htmll) file.)

## Relative to the viewport

You can also use utilities to set the width and height relative to the viewport.
```
<div class="min-vw-100">Min-width 100vw</div>
<div class="min-vh-100">Min-height 100vh</div>
<div class="vw-100">Width 100vw</div>
<div class="vh-100">Height 100vh</div>
```
(And this code example can also be found in my accompanying [sizing-utilities-examples-1.html](https://github.com/AndrewSRea/My_Learning_Port/blob/main/Bootstrap/Utilities/Sizing/sizing-utilities-examples-1.htmll) file.)

## Sass

### Utilities API

Sizing utilities are declared in our utilities API is `scss/_utilities.scss`. [Learn how to use the utilities API.](https://github.com/AndrewSRea/My_Learning_Port/tree/main/Bootstrap/Utilities/API#using-the-api)
```
"width": (
    property: width,
    class: w,
    values: (
        25: 25%,
        50: 50%,
        75: 75%,
        100: 100%,
        auto: auto
    )
),
"max-width": (
    property: max-width,
    class: mw,
    values: (100: 100%)
),
"viewport-width": (
    property: width,
    class: vw,
    values: (100: 100vw)
),
"min-viewport-width": (
    property: min-width,
    class: min-vw,
    values: (100: 100vw)
),
"height": (
    property: height,
    class: h,
    values: (
        25: 25%,
        50: 50%,
        75: 75%,
        100: 100%,
        auto: auto
    )
),
"max-height": (
    property: max-height,
    class: mh,
    values: (100: 100%)
),
"viewport-height": (
    property: height,
    class: vh,
    values: (100: 100vh)
),
"min-viewport-height": (
    property: min-height,
    class: min-vh,
    values: (100: 100vh)
),
```

<hr>

[[Previous page]](https://github.com/AndrewSRea/My_Learning_Port/tree/main/Bootstrap/Utilities/Shadows#shadows) - [[Top]](https://github.com/AndrewSRea/My_Learning_Port/tree/main/Bootstrap/Utilities/Sizing#sizing) - [[Next page]](https://github.com/AndrewSRea/My_Learning_Port/tree/main/Bootstrap/Utilities/Text#text)