# Position

Use these shorthand utilities for quickly configuring the position of an element.

## Position values

Quick positioning classes are available, though they are not responsive.
```
<div class="position-static">...</div>
<div class="position-relative">...</div>
<div class="position-absolute">...</div>
<div class="position-fixed">...</div>
<div class="position-sticky">...</div>
```

## Arrange elements

Arrange elements easily with the edge positioning utilities. The format is `{property}-{position}`.

Where *property* is one of:

* `top` - for the vertical `top` position.
* `start` - for the horizontal `left` position (in LTR).
* `bottom` - for the vertical `bottom` position.
* `end` - for the horizontal `right` position (in LTR).

Where *position* is one of:

* `0` - for `0` edge position.
* `50` - for `50%` edge position.
* `100` - for `100%` edge position.

(You can add more position values by adding entries to the `$position-values` Sass map variable.)
```
<div class="position-relative">
    <div class="position-absolute top-0 start-0">
    <div class="position-absolute top-0 end-0">
    <div class="position-absolute top-50 start-50">
    <div class="position-absolute bottom-50 end-50">
    <div class="position-absolute bottom-0 start-0">
    <div class="position-absolute bottom-0 end-0">
</div>
```
(This code example can be found in my accompanying [position-utilities-examples-1.html](https://github.com/AndrewSRea/My_Learning_Port/blob/main/Bootstrap/Utilities/Position/position-utilities-examples-1.html) file. The varying "position" elements can only be viewed one at a time by commenting/uncommenting the code of each separate `<div>`.)

## Center elements

In addition, you can also center the elements with the transform utility class `.translate-middle`.

This class applies the transformations `translateX(-50%)` and `translateY(-50%)` to the element which, in combination with edge positioning utilities, allows you to absolute center an element.
```
<div class="position-relative">
    <div class="position-absolute top-0 start-0 translate-middle">
    <div class="position-absolute top-0 start-50 translate-middle">
    <div class="position-absolute top-0 start-100 translate-middle">
    <div class="position-absolute top-50 start-0 translate-middle">
    <div class="position-absolute top-50 start-50 translate-middle">
    <div class="position-absolute top-50 start-100 translate-middle">
    <div class="position-absolute top-100 start-0 translate-middle">
    <div class="position-absolute top-100 start-50 translate-middle">
    <div class="position-absolute top-100 start-100 translate-middle">
</div>
```
(And this code example can also be found in my accompanying [position-utilities-examples-1.html](https://github.com/AndrewSRea/My_Learning_Port/blob/main/Bootstrap/Utilities/Position/position-utilities-examples-1.html) file. The varying "position" elements can only be viewed one at a time by commenting/uncommenting the code of each separate `<div>`.)

By adding `.translate-middle-x` or `.translate-middle-y` classes, elements can be positioned only in horizontal or vertical direction.
```
<div class="position-relative">
    <div class="position-absolute top-0 start-0">
    <div class="position-absolute top-0 start-50 translate-middle-x">
    <div class="position-absolute top-0 end-0">
    <div class="position-absolute top-50 start-0 translate-middle-y">
    <div class="position-absolute top-50 start-50 translate-middle">
    <div class="position-absolute top-50 end-0 translate-middle-y">
    <div class="position-absolute bottom-0 start-0">
    <div class="position-absolute bottom-0 start-50 translate-middle-x">
    <div class="position-absolute bottom-0 end-0">
</div>
```
(Again, this code example can be found in my accompanying [position-utilities-examples-1.html](https://github.com/AndrewSRea/My_Learning_Port/blob/main/Bootstrap/Utilities/Position/position-utilities-examples-1.html) file. The varying "position" elements can only be viewed one at a time by commenting/uncommenting the code of each separate `<div>`.)

## Examples

Here are some real life examples of these classes:
```
<button type="button" class="btn btn-primary position-relative">
    Mails <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-secondary">+99 <span class="visually-hidden">unread messages</span></span>
</button>

<button type="button" class="btn btn-dark position-relative">
    Marker <svg width="1em" height="1em" viewBox="0 0 16 16" class="position-absolute top-100 start-50 translate-middle mt-1 bi bi-caret-down-fill" fill="#212529" xmlns="http://www.w3.org/2000/svg"><path d="M7.247 11.14L2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"/></svg>
</button>

<button type="button" class="btn btn-primary position-relative">
    Alerts <span class="position-absolute top-0 start-100 translate-middle badge border border-light rounded-circle bg-danger p-2"><span class="visually-hidden">unread messages</span></span>
</button>
```
(This code example can be found in my accompanying [position-utilities-examples-2.html](https://github.com/AndrewSRea/My_Learning_Port/blob/main/Bootstrap/Utilities/Position/position-utilities-examples-2.html) file.)

You can use these classes with existing components to create new ones. Remember that you can extend its functionality by adding entries to the `$position-values` variable.
```
<div class="position-relative m-4">
    <div class="progress" style="height: 1px;">
        <div class="progress-bar" role="progressbar" style="width: 50%;" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
    </div>
    <button type="button" class="position-absolute top-0 start-0 translate-middle btn btn-sm btn-primary rounded-pill" style="width: 2rem; height: 2rem;">1</button>
    <button type="button" class="position-absolute top-0 start-50 translate-middle btn btn-sm btn-primary rounded-pill" style="width: 2rem; height: 2rem;">2</button>
    <button type="button" class="position-absolute top-0 start-100 translate-middle btn btn-sm btn-seccondary rounded-pill" style="width: 2rem; height: 2rem;">3</button>
</div>
```
(And this code example can also be found in my accompanying [position-utilities-examples-2.html](https://github.com/AndrewSRea/My_Learning_Port/blob/main/Bootstrap/Utilities/Position/position-utilities-examples-2.html) file.

## Sass

### Maps

Default position utility values are declared in a Sass map, then used to generate our utilities.
```
$position-values: (
    0: 0,
    50: 50%,
    100: 100%
);
```

### Utilities API

Position utilities are declared in our utilities API in `scss/_utilities.scss`. [Learn how to use the utilities API.](https://github.com/AndrewSRea/My_Learning_Port/tree/main/Bootstrap/Utilities/API#using-the-api)
```
"position": (
    property: position,
    values: static relative absolute fixed sticky
),
"top": (
    property: top,
    values: $position-values
),
"bottom": (
    property: bottom,
    values: $position-values
),
"start": (
    property: left,
    class: start,
    values: $position-values
),
"end": (
    property: right,
    class: end,
    values: $position-values
),
"translate-middle": (
    property: transform,
    class: translate-middle,
    values: (
        null: translate(-50%, -50%),
        x: translateX(-50%),
        y: translateY(-50%),
    )
),
```

<hr>

[[Previous page]](https://github.com/AndrewSRea/My_Learning_Port/tree/main/Bootstrap/Utilities/Overflow#overflow) - [[Top]](https://github.com/AndrewSRea/My_Learning_Port/tree/main/Bootstrap/Utilities/Position#position) - [[Next page]](https://github.com/AndrewSRea/My_Learning_Port/tree/main/Bootstrap/Utilities/Shadows#shadows)