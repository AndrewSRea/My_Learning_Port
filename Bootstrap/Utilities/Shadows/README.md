# Shadows

Add or remove shadows to elements with box-shadow utilities.

## Examples

While shadows on components are disabled by default in Bootstrap and can be enabled via `$enable-shadows`, you can also quickly add or remove a shadow with our `box-shadow` utility classes. Includes support for `.shadow-none` and three default sizes (which have associated variables to match).
```
<div class="shadow-none p-3 mb-5 bg-light rounded">No shadow</div>
<div class="shadow-sm p-3 mb-5 bg-body rounded">Small shadow</div>
<div class="shadow p-3 mb-5 bg-body rounded">Regular shadow</div>
<div class="shadow-lg p-3 mb-5 bg-body rounded">Larger shadow</div>
```
(This code example can be found in my accompanying [shadows-utilities-examples-1.html](https://github.com/AndrewSRea/My_Learning_Port/blob/main/Bootstrap/Utilities/Shadows/shadows-utilities-examples-1.html) file.)

## Sass

### Variables

```
$box-shadow:           0 .5rem 1rem rgba($black, .15);
$box-shadow-sm:        0 .125rem .25rem rgba($black, .075);
$box-shdow-lg:         0 1rem 3rem rgba($black, .175);
$box-shadow-inset:     inset 0 1px 2px rgba($black, .075);
```

### Utilities API

Shadow utilities are declared in Bootstrap's utilities API in `scss/_utilities.scss`. [Learn how to use the utilities API.](https://github.com/AndrewSRea/My_Learning_Port/tree/main/Bootstrap/Utilities/API#using-the-api)
```
"shadow": (
    property: box-shadow,
    class: shadow,
    values: (
        null: $box-shadow,
        sm: $box-shadow-sm,
        lg: $box-shadow-lg,
        none: none,
    )
),
```

<hr>

[[Previous page]](https://github.com/AndrewSRea/My_Learning_Port/tree/main/Bootstrap/Utilities/Position#position) - [[Top]](https://github.com/AndrewSRea/My_Learning_Port/tree/main/Bootstrap/Utilities/Shadows#shadows) - [[Next page]](https://github.com/AndrewSRea/My_Learning_Port/tree/main/Bootstrap/Utilities/Sizing#sizing)