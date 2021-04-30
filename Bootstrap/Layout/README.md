# Layout

## Table of contents

* [Breakpoints]()
* [Containers]()
* [Grid]()
* [Columns]()
* [Gutters]()
* [Utilities]()
* [Z-index]()

[[Next module: Content]]()

## Columns

Learn how to modify columns with a handful of options for alignment, ordering, and offsetting thanks to Bootstrap's flexbox grid system. Plus, see how to use column classes to manage widths of non-grid-elements.

### How they work

* **Columns build on the grid's flexbox architecture.** Flexbox means we have options for changing individual columns and [modifying groups of columns at the row level](#row-columns). You choose how columns grow, shrink, or otherwise change.

* **When building grid layouts, all content goes in columns.** The hierarchy of Bootstrap's grid goes from [container](#containers) to row to column to your content. On rare occasions, you may combine content and columns, but be aware there can be unintended consequences.

* **Bootstrap includes predefined classes for creating fast, responsive layouts.** With [six breakpoints](#breakpoints) and a dozen columns at each grid tier, Bootstrap has dozens of classes already built for you to create your desired layouts. This can be disabled via Sass if you wish.

### Alignment

Use flexbox alignment utilities to vertically and horizontally align columns.

#### Vertical alignment
```
<div class="container">
    <div class="row align-items-start">
        <div class="col">
            One of three columns
        </div>
        <div class="col">
            One of three columns
        </div>
        <div class="col">
            One of three columns
        </div>
    </div>
    <div class="row align-items-center">
        <div class="col">
            One of three columns
        </div>
        <div class="col">
            One of three columns
        </div>
        <div class="col">
            One of three columns
        </div>
    </div>
    <div class="row align-items-end">
        <div class="col">
            One of three columns
        </div>
        <div class="col">
            One of three columns
        </div>
        <div class="col">
            One of three columns
        </div>
    </div>
</div>
```
##### Another example of vertical alignment
```
<div class="container">
    <div class="row">
        <div class="col align-self-start">
            One of three columns
        </div>
         <div class="col align-self-center">
            One of three columns
        </div>
         <div class="col align-self-end">
            One of three columns
        </div>
    </div>
</div>
```
(The two code examples above can be found in my accompanying [`column-examples.html`](https://github.com/AndrewSRea/My_Learning_Port/blob/main/Bootstrap/Layout/column-examples.html) file.)

#### Horizontal alignment
```
<div class="container">
    <div class="row justify-content-start">
        <div class="col-4">
            One of two columns
        </div>
        <div class="col-4">
            One of two columns
        </div>
    </div>
    <div class="row justify-content-center">
        <div class="col-4">
            One of two columns
        </div>
        <div class="col-4">
            One of two columns
        </div>
    </div>
    <div class="row justify-content-end">
        <div class="col-4">
            One of two columns
        </div>
        <div class="col-4">
            One of two columns
        </div>
    </div>
       <div class="row justify-content-around">
        <div class="col-4">
            One of two columns
        </div>
        <div class="col-4">
            One of two columns
        </div>
    </div>
       <div class="row justify-content-between">
        <div class="col-4">
            One of two columns
        </div>
        <div class="col-4">
            One of two columns
        </div>
    </div>
       <div class="row justify-content-evenly">
        <div class="col-4">
            One of two columns
        </div>
        <div class="col-4">
            One of two columns
        </div>
    </div>
</div>
```
(The code example above can be found in my accompanying [`horizontal-columns.html`](https://github.com/AndrewSRea/My_Learning_Port/blob/main/Bootstrap/Layout/horizontal-columns.html) file.)

#### Column wrapping

If more than 12 columns are placed within a single row, each group of extra columns will, as one unit, wrap onto a new line.
```
<div class="container">
    <div class="row">
        <div class="col-9">.col-9</div>
        <div class="col-4">.col-4<br>Since 9 + 4 = 13 &gt; 12, this 4-column-wide div gets wrapped onto a new line as one contiguous unit.</div>
        <div class="col-6">.col-6<br>Subsequent columns continue along the new line.</div>
    </div>
</div>
```

#### Column breaks

Breaking columns to a new line in flexbox requires a small hack: add an element with `width: 100%` whenever you want to wrap your columns to a new line. Normally this is accomplished with multiple `.row`s, but not every implementation method can account for this.
```
<div class="container">
    <div class="row">
        <div class="col-6 col-sm-3">.col-6 .col-sm-3</div>
        <div class="col-6 col-sm-3">.col-6 .col-sm-3</div>

        <!-- Force next columns to break to new line -->
        <div class="w-100"></div>

        <div class="col-6 col-sm-3">.col-6 .col-sm-3</div>
        <div class="col-6 col-sm-3">.col-6 .col-sm-3</div>
    </div>
</div>
```
You may also apply this break at specific breakpoints with Bootstrap's [responsive display utilities](#display-property).
```
<div class="container">
    <div class="row">
        <div class="col-6 col-sm-4">.col-6 .col-sm-4</div>
        <div class="col-6 col-sm-4">.col-6 .col-sm-4</div>

        <!-- Force next columns to break to new line ad md breakpoint and up -->
        <div class="w-100 d-none d-md-block"></div>

        <div class="col-6 col-sm-4">.col-6 .col-sm-4</div>
        <div class="col-6 col-sm-4">.col-6 .col-sm-4</div>
    </div>
</div>
```
(The code examples under the **Column wrapping** and **Column breaks** headers can be found in my accompanying[`misc-column-examples.html`](https://github.com/AndrewSRea/My_Learning_Port/blob/main/Bootstrap/Layout/misc-column-examples.html) file.)

### Reordering

#### Order classes 

Use `.order-` classes for controlling the **visual order** of your content. These classes are responsive, so you can set the `order` by breakpoint (e.g., `.order-1.order-md-2`). Includes support for `1` through `5` across all six grid tiers.
```
<div class-"container">
    <div class="row">
        <div class="col">
            First in DOM, no order applied
        </div>
        <div class="col order-5">
            Second in DOM, with a larger order
        </div>
        <div class="col order-1">
            Third in DOM, with an order of 1
        </div>
    </div>
</div>
```
There are also responsive `.order-first` and `.order-last` classes that can change the `order` of an element by applying `order: -1` and `order: 6`, respectively. These classes can also be intermixed with the numbered `order-*` classes as needed.
```
<div class-"container">
    <div class="row">
        <div class="col order-last">
            First in DOM, ordered last
        </div>
        <div class="col">
            Second in DOM, unordered
        </div>
        <div class="col order-first">
            Third in DOM, ordered first
        </div>
    </div>
</div>
```

#### Offsetting columns

You can offset grid columns in two ways: Bootstrap's responsive `.offset-` grid classes and Bootstrap's [margin utilities](#spacing). Grid classes are sized to match columns while margins are more useful for quick layouts where the width of the offset is variable.

##### Offset classes

Move columns to the right using `.offset-md-*` classes. These classes increase the left margin of a column by `*` columns. For example, `.offset-md-4` moves `.col-md-4` over four columns.
```
<div class="container">
    <div class="row">
        <div class="col-md-4">.col-md-4</div>
        <div class="col-md-4 offset-md-4">.col-md-4 .offset-md-4</div>
    </div>
    <div class="row">
        <div class="col-md-3 offset-md-3">.col-md-3 .offset-md-3</div>
        <div class="col-md-3 offset-md-3">.col-md-3 .offset-md-3</div>
    </div>
    <div class="row">
        <div class="col-md-6 offset-md-3">.col-md-6 .offset-md-3</div>
    </div>
</div>
```
In addition to column clearing at responsive breakpoints, you may need to reset offsets. See this in action in [the grid example]().
```
<div class="container">
    <div class="row">
        <div class="col-sm-5 col-md-6">.col-md-5 .col-md-6</div>
        <div class="col-sm-5 offset-sm-2 col-md-6 offset-md-0">.col-sm-5 .offset-sm-2 .col-md-6 .offset-md-0</div>
    </div>
    <div class="row">
        <div class="col-sm-6 col-md-5 col-lg-6">.col-sm-6 .col-md-5 .col-lg-6</div>
        <div class="col-sm-6 col-md-5 offset-md-2 col-lg-6 offset-lg-0">col-sm-6 col-md-5 offset-md-2 col-lg-6 offset-lg-0</div>
    </div>
</div>
```

##### Margin utilities

With the move to flexbox in v4, you can use margin utilities like `.me-auto` to force sibling columns away from one another.
```
<div class="container">
    <div class="row">
        <div class="col-md-4">.col-md-4</div>
        <div class="col-md-4 ms-auto">.col-md-4 .ms-auto</div>
    </div>
    <div class="row">
        <div class="col-md-3 ms-md-auto">.col-md-3 .ms-md-auto</div>
        <div class="col-md-3 ms-md-auto">.col-md-3 .ms-md-auto</div>
    </div>
    <div class="row">
        <div class="col-auto me-auto">.col-auto .me-auto</div>
        <div class="col-auto">.col-auto</div>
    </div>
</div>
```

### Standalone column classes

The `.col-*` classes can also be used outside a `.row` to give an element a specific width. Whenever column classes are used as non-direct children of a row, the paddings are omitted.
```
<div class="col-3 bg-light p-3 border">
    .col-3: width of 25%
</div>
<div class="col-sm-9 bg-light p-3 border">
    .col-sm-9: width of 75% above sm breakpoint
</div>
```
The classes can be used together with utilities to create responsive floated images. Make sure to wrap the content in a [`.clearfix`](#clearfix) wrapper to clear the float if the text is shorter.
```
<div class="clearfix">
    <img src="..." class="col-md-6 float-md-end mb-3 ms-md-3" alt="...">

    <p>
        Donec ullamcorper nulla non metus auctor fringilla. Nulla vitae elit libero, a pharetra augue. Fusce dapibus, tellus ac cursus commodo, tortor mauris paddenstoel nibh, ut fermentum massa justo sit amet risus. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    </p>

    <p>
        Sed posuere consectetur est at lobortis. Etiam porta sem malesuada magna mollis euismod. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Id nullam tellus relem amet commodo telemque olemit. Sed posuere consectetur est at lobortis. Maecenas sed diam eget risus varius blandit sit amet non magna. Cras justo odio, dapibus ac facilisis in, egestas eget quam.
    </p>

    <p>
        Donec id elit non mi porta gravida at eget metus. Aenean eu leo quam. Pellentesque ornare sem lantarnpaal quam venenatis vestibulum. Donec sed odio dui. Maecenas faucibus mollis interdum. Nullam quis risus eget urna salsa tequila vel eu leo. Donec id elit non mi porta gravida at eget metus.
    </p>
</div>
```

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