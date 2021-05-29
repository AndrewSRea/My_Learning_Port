# Overflow

Use these shorthand utilities for quickly configuring how content overflows an element.

Adjust the `overflow` property on the fly with four default values and classes. These classes are not responsive by default.
```
<div class="overflow-auto">...</div>
<div class="overflow-hidden">...</div>
<div class="overflow-visible">...</div>
<div class="overflow-scroll">...</div>
```
(This code example can be found in my accompanying [overflow-utilities-examples-1.html](https://github.com/AndrewSRea/My_Learning_Port/blob/main/Bootstrap/Utilities/Overflow/overflow-utilities-examples-1.html) file.)

Using Sass variables, you may customize the overflow utilities by changing the `$overflows` variable in `_variables.scss`.

## Sass

### Utilities API

Overflow utilities are declared in our utilities API in `scss/_utilities.scss`. [Learn how to use the utilities API.](https://github.com/AndrewSRea/My_Learning_Port/tree/main/Bootstrap/Utilities/API#using-the-api)
```
"overflow": (
    property: overflow,
    values: auto hidden visible scroll,
),
```

<hr>

[[Previous page]](https://github.com/AndrewSRea/My_Learning_Port/tree/main/Bootstrap/Utilities/Interactions#interactions) - [[Top]](https://github.com/AndrewSRea/My_Learning_Port/tree/main/Bootstrap/Utilities/Overflow#overflow) - [[Next page]](https://github.com/AndrewSRea/My_Learning_Port/tree/main/Bootstrap/Utilities/Position#position)