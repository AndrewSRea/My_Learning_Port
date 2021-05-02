# Columns

Learn how to modify columns with a handful of options for alignment, ordering, and offsetting thanks to Bootstrap's flexbox grid system. Plus, see how to use column classes to manage widths of non-grid-elements.

## How they work

* **Columns build on the grid's flexbox architecture.** Flexbox means we have options for changing individual columns and [modifying groups of columns at the row level](https://github.com/AndrewSRea/My_Learning_Port/tree/main/Bootstrap/Layout/Grid#row-columns). You choose how columns grow, shrink, or otherwise change.

* **When building grid layouts, all content goes in columns.** The hierarchy of Bootstrap's grid goes from [container](https://github.com/AndrewSRea/My_Learning_Port/tree/main/Bootstrap/Layout/Containers#containers) to row to column to your content. On rare occasions, you may combine content and columns, but be aware there can be unintended consequences.

* **Bootstrap includes predefined classes for creating fast, responsive layouts.** With [six breakpoints](https://github.com/AndrewSRea/My_Learning_Port/tree/main/Bootstrap/Layout/Breakpoints#breakpoints) and a dozen columns at each grid tier, Bootstrap has dozens of classes already built for you to create your desired layouts. This can be disabled via Sass if you wish.

## Alignment

Use flexbox alignment utilities to vertically and horizontally align columns.

### Vertical alignment
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
(The two code examples above can be found in my accompanying [`column-examples.html`](https://github.com/AndrewSRea/My_Learning_Port/blob/main/Bootstrap/Layout/Columns/column-examples.html) file.)

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
(The code example above can be found in my accompanying [`horizontal-columns.html`](https://github.com/AndrewSRea/My_Learning_Port/blob/main/Bootstrap/Layout/Columns/horizontal-columns.html) file.)

### Column wrapping

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
(This code example can be found in my accompanying [`misc-column-examples.html`](https://github.com/AndrewSRea/My_Learning_Port/blob/main/Bootstrap/Layout/Columns/misc-column-examples.html) file.)

### Column breaks

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
You may also apply this break at specific breakpoints with Bootstrap's [responsive display utilities](https://github.com/AndrewSRea/My_Learning_Port/tree/main/Bootstrap/Utilities/Display#display-property).
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
(The two code examples above can be found in my accompanying[`misc-column-examples.html`](https://github.com/AndrewSRea/My_Learning_Port/blob/main/Bootstrap/Layout/Columns/misc-column-examples.html) file.)

## Reordering

### Order classes 

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

### Offsetting columns

You can offset grid columns in two ways: Bootstrap's responsive `.offset-` grid classes and Bootstrap's [margin utilities](https://github.com/AndrewSRea/My_Learning_Port/tree/main/Bootstrap/Utilities/Spacing#spacing). Grid classes are sized to match columns while margins are more useful for quick layouts where the width of the offset is variable.

#### Offset classes

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
In addition to column clearing at responsive breakpoints, you may need to reset offsets. See this in action in [the grid example](https://getbootstrap.com/docs/5.0/examples/grid/).
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

#### Margin utilities

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

## Standalone column classes

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
## A code example using Bootstrap's columns



[[Previous page]](https://github.com/AndrewSRea/My_Learning_Port/tree/main/Bootstrap/Layout/Grid#grid-system) - [[Top]](https://github.com/AndrewSRea/My_Learning_Port/tree/main/Bootstrap/Layout/Columns#columns) - [[Next page]](https://github.com/AndrewSRea/My_Learning_Port/tree/main/Bootstrap/Layout/Gutters#gutters)