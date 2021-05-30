# Visibility

Control the visibility of elements, without modifying their display, with visibility utilities.

Set the `visibility` of elements with Bootstrap's visibility utilities. These utility classes do not modify the `display` value at all and do not affect layout--`.invisible` elements still take up space in the page.

<hr>

:exclamation: Elements with the `.invisible` class will b hidden *both* visually and for assistive technology/screen reader users.

<hr>

Apply `.visible` or `.invisible` as needed.
```
<div class="visible">...</div>
<div class="inivisible">...</div>
```
```
// Class
.visible {
    visibility: visible !important;
}
.invisible {
    visibility: hidden !important;
}
```

## Sass

### Utilities API

Visibility utilities are declared in our utilities API in `scss/_utilities.scss`. [Learn how to use the utilities API.]()
```
"visibility": (
    property: visibility,
    class: null,
    values: (
        visible: visible,
        invisible: hidden,
    )
)
```

<hr>

[[Previous page]](https://github.com/AndrewSRea/My_Learning_Port/tree/main/Bootstrap/Utilities/Vertical_Alignment#vertical-alignment) - [[Top]](https://github.com/AndrewSRea/My_Learning_Port/tree/main/Bootstrap/Utilities/Visibility#visibility) - [[Next module: Extend]]()