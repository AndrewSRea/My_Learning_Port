# Spacing

Bootstrap includes a wide range of shorthand responsize margin, padding, and gap utility classes to modify an element's appearance.

## Margin and padding

Assign responsive-friendly `margin` or `padding` values to an element or a subset of its sides with shorthand classes. Includes support for individual properties, all properties, and vertical and horizontal properties. Classes are built from a default Sass map ranging from `.25rem` to `3rem`.

Using the CSS Grid layout module? Consider using [the gap utility](). <!-- section down below -->

### Notation

Spacing utilities that apply to all breakpoints, from `xs` to `xxl`, have no breakpoint abbreviation in them. This is because those classes are applied from `min-width: 0` and up, and thus are not bound by a media query. The remaining breakpoints, however, do include a breakpoint abbreviation.

The classes are named using the format `{property}{sides}-{size}` for `xs` and `{property}{sides}-{breakpoint}-{size}` for `sm`, `md`, `lg`, `xl`, and `xxl`.

Where *property* is one of:

* `m` - for classes that set margin.
* `p` - for classes that set padding.

Where *sides* is one of:

* `t` - for classes that set `margin-top` or `padding-top`.
* `b` - for classes that set `margin-bottom` or `padding-bottom`.
* `s` - for classes that set `margin-left` or `padding-left` in LTR, `margin-right` or `padding-right` in RTL.
* `e` - for classes that set `margin-right` or `padding-right` in LTR, `margin-left` or `padding-left` in RTL.
* `x` - for classes that set both `*-left` and `*-right`.
* `y` - for classes that set both `*-top` and `*-bottom`.
* blank - for classes that set a `margin` or `padding` on all 4 sides of the element.

Where *size* is one of:

* `0` - for classes that eliminate the `margin` and `padding` by setting it to `0`.
* `1` - (by default) for classes that set the `margin` or `padding` to `$spacer * .25`.
* `2` - (by default) for classes that set the `margin` or `padding` to `$spacer * .5`.
* `3` - (by default) for classes that set the `margin` or `padding` to `$spacer`.
* `4` - (by default) for classes that set the `margin` or `padding` to `$spacer * 1.5`.
* `5` - (by default) for classes that set the `margin` or `padding` to `$spacer * 3`.
* `auto` - for classes that set the `margin` to `auto`.

(You can add more sizes by adding entries to the `$spacers` Sass map variable.)

<hr>

**Note**: I have been using these margin and padding spacing classes throughout all of my HTML code examples within this Bootstrap folder.

<hr>

### Examples

Here are some representative examples of these classes:
```
.mt-0 {
    margin-top: 0 !important;
}

.ms-1 {
    margin-left: ($spacer * .25) !important;
}

.px-2 {
    padding-left: ($spacer * .5) !important;
    padding-right: ($spacer * .5) !important;
}

.p-3 {
    padding: $spacer !important;
}
```

### Horizontal centering

Additionally, Bootstrap also includes an `.mx-auto` class for horizontally centering fixed-width block level content--that is, content that has `display: block` and a `width` set--by setting the horizontal margins to `auto`.
```
<div class="mx-auto" style="width: 200px;">
    Centered element
</div>
```

## Negative margin

In CSS, `margin` properties can utilize negative values (`padding` cannot). These negative margins are **disabled by default**, but can be enabled in Sass by setting `$enable-negative-margins: true`.

The syntax is nearly the same as the default, positive margin utilities, but with the addition of `n` before the requested size. Here's an example class that's the opposite of `.mt-1`:
```
.mt-n1 {
    margin-top: -0.25rem !important;
}
```

## Gap

When using `display: grid`, you can make use of `gap` utilities on the parent grid container. This can save on having to add margin utilities to individual grid items (children of a `display: grid` container). Gap utilities are responsive by default, and are generated via our utilities API, based on the `$spacers` Sass map.
```
<div class="d-grid gap-3">
    <div class="p-2 bg-light border">Grid item 1</div>
    <div class="p-2 bg-light border">Grid item 2</div>
    <div class="p-2 bg-light border">Grid item 3</div>
</div>
```
Support includes responsive options for all of Bootstrap's grid breakpoints, as well as six sizes from the `$spacers` map (`0-5`). There is no `.gap-auto` utility class as it's effectively the same as `.gap-0`.

## Sass

### Maps

Spacing utilities are declared via Sass map and then generated with Bootstrap's utilities API.
```
$spacer: 1rem;
$spacers: (
    0: 0,
    1: $spacer / 4,
    2: $spacer / 2,
    3: $spacer,
    4: $spacer * 1.5,
    5: $spacer * 3,
);

$negative-spacers: if($enable-negative-margins, negativity-map($spacers), null);
```

### Utilities API

Spacing utilities are declared in our utilities API in `scss/_utilities.scss`. [Learn how to use the utilities API.](https://github.com/AndrewSRea/My_Learning_Port/tree/main/Bootstrap/Utilities/API#using-the-api)
```
"margin": (
    responsive: true,
    property: margin,
    class: m,
    values: map-merge($spacers, (auto: auto))
),
"margin-x": (
    responsive: true,
    property: margin-right margin-left,
    class: mx,
    values: map-merge($spacers, (auto: auto))
),
"margin-y": (
    responsive: true,
    property: margin-top margin-bottom,
    class: my,
    values: map-merge($spacers, (auto: auto))
),
"margin-top": (
    responsive: true,
    property: margin-top,
    class: mt,
    values: map-merge($spacers, (auto: auto))
),
"margin-end": (
    responsive: true,
    property: margin-right,
    class: me,
    values: map-merge($spacers, (auto: auto))
),
"margin-bottom": (
    responsive: true,
    property: margin-bottom,
    class: mb,
    values: map-merge($spacers, (auto: auto))
),
"margin-start": (
    responsive: true,
    property: margin-left,
    class: ms,
    values: map-merge($spacers, (auto: auto))
),
// Negative margin utilities
"negative-margin": (
    responsive: true,
    property: margin,
    class: m,
    values: $negative-spacers
),
"negative-margin-x": (
    responsive: true,
    property: margin-right margin-left,
    class: mx,
    values: $negative-spacers
),
"negative-margin-y": (
    responsive: true,
    property: margin-top margin-bottom,
    class: my,
    values: $negativev-spacers
),
"negative-margin-top": (
    responsive: true,
    property: margin-top,
    class: mt,
    values: $negative-spacers
),
"negative-margin-end": (
    responsive: true,
    property: margin-right,
    class: me,
    values: $negative-spacers
),
"negative-margin-bottom": (
    responsive: true,
    property: margin-bottom,
    class: mb,
    values: $negative-spacers
),
"negative-margin-start": (
    responsive: true,
    property: margin-left,
    class: ms,
    values: $negative-spacers
),
// Padding utilities
"padding": (
    responsive: true,
    property: padding,
    class: p,
    values: $spacers
),
"padding-x": (
    responsive: true,
    property: padding-right padding-left,
    class: px,
    values: $spacers
),
"padding-y": (
    responsive: true,
    property: padding-top padding-bottom,
    class: py,
    values: $spacers
),
"padding-top": (
    responsive: true,
    property: padding-top,
    class: pt,
    values: $spacers
),
"padding-end": (
    responsive: true,
    property: padding-right,
    class: pe,
    values: $spacers
),
"padding-bottom": (
    responsive: true,
    property: padding-bottom,
    class: pb,
    values: $spacers
),
"padding-start": (
    responsive: true,
    property: padding-left,
    class: ps,
    values: $spacers
),