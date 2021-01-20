# Bootstrap

## Build fast, responsive sites with Bootstrap

Quickly design and customize responsive mobile-first sites with Bootstrap, the world's most popular front-end open source toolkit (by Bootstrap's own reckoning), featuring [Sass](https://sass-lang.com/) variables and mixins, responsive grid system, extensive prebuilt components, and powerful JavaScript plugins.

## Installation of Bootstrap

There are two ways to install Bootstrap into your HTML document:

* Install Bootstrap's source Sass and JavaScript files via npm, Composer, or Meteor.

I was taught how to use npm packages through the Terminal window on my Visual Studio Code editor but again, we only covered that technology over the course of a week so I vaguely remember how to use npm packages. But I will be covering that technologyin a future folder in My_Learning_Port folder. So therefore, I will not be using this technology just yet as I work with Bootstrap.

* [jsDelivr](https://www.jsdelivr.com/) - When you only need to include Bootstrap's compiled CSS or JS, you can use jsDelivr.

I am familiar with this technology, as it is pretty much the same as adding a CSS stylesheet link and a JavaScript ```<script>```link into the ```<head>``` of an HTML document. In fact, I will be incorporating a [starter template](https://github.com/AndrewSRea My_Learning_Port/blob/main/Bootstrap/starter-template.html) provided by [Bootstrap](https://getbootstrap.com/docs/5.0/getting-started/introduction/#starter-template) throughout all of the files inside this Bootstrap folder. 
This starter template provides the necessary Bootstrap CSS and the Bootstrap JavaScript and Popper.js needed to be able to incorporate
all the Bootstrap components into an HTML document.

### Side note

As [Sass](https://sass-lang.com/) was mentioned above, if Sass is a necessary component of Bootstrap, I may have to create a separate folder containing instructions and code examples for Sass. I will add this folder after this Bootstrap folder if I deem it necessary.

## Bootstrap Layout

So I have my [starter template](https://github.com/AndrewSRea/My_Learning_Port/blob/main/Bootstrap/starter-template.html), ready to jump right in to building some layouts with Bootstrap. Let's go!

## Breakpoints

Breakpoints are the triggers in Bootstrap for how your responsive layout changes across device or viewport sizes.

### Core concepts

* **Breakpoints are the building blocks or responsive design.** Use them to control when your layout can be adapted at a particular viewport or device size.

* **Use media queries to architect your CSS by breakpoint.** Media queries are a feature of CSS that allow you to conditionally apply styles based on a set of browser and operating system parameters. Bootstrap most commonly uses ```min-width``` in their media queries.

* **Mobile first, responsive design in the goal.** Bootstrap's CSS aims to apply the bare minimum of styles to make a layout work at the smallest breakpoint, and then layers on styles to adjust that design for larger devices. This optimizes your CSS, improves rendering time, and provides a great experience for your visitors.

### Available breakpoints

Bootstrap inludes six default breakpoints, sometimes referred to as *grid tiers*, for building responsively. These breakpoints can be customized if you're using Bootstrap's source [Sass](https://sass-lang.com/) files.

| Breakpoint | Class infix | Dimensions |
| --- | --- | --- |
| X-Small | *None* | less than 576px |
| Small | `sm` | greater than or equal to 576px |
| Medium | `md` | greater than or equal to 768px |
| Large | `lg` | greater than or equal to 992px |
| Extra large | `xl` | greater than or equal to 1200px |
| Extra extra large | `xxl` | greater than or equal to 1400px |

Each breakpoint was chosen to comfortably hold containers whose widths are multiples of 12. Breakpoints are also representative of a subset of common device sizes and viewport dimensions--they don't specifically target every use case or device. Instead, the ranges provide a strong and consistent foundation to build on for nearly any device.
These breakpoints are customizable via [Sass](https://sass-lang.com/)--you'll find them in a Sass map in Bootstrap's `_variables.scss` stylesheet. (Perhaps I will have to create a Sass folder within this Bootstrap folder.)
```
$grid-breakpoints: (
    xs: 0,
    sm: 576px,
    md: 768px,
    lg: 992px,
    xl: 1200px,
    xxl: 1400px
);
```

More information, and examples on how to modify Sass maps and variables, is available on the [Sass section of the Grid documentation]()
below.

## Media Queries

Since Bootstrap is developed to be mobile first, we use a handful of [media queries](https://developer.mozilla.org/en-US/docs/Web/CSS/Media_Queries/Using_media_queries) to create sensible breakpoints for Bootstrap's layouts and interfaces. These breakpoints are mostly based on minimum viewport widths and allow us to scale up elements as the viewport changes.

### Min-width

Bootstrap primarly uses the following media query ranges--or breakpoints--in Bootstrap's source Sass files for its layout, grid system, and components.
```
// Source mixins

// No media query necessary for xs breakpoint as it's effectively `@media (min-width: 0) { ... }`

@include media-breakpoint-up(sm) { ... }
@include media-breakpoint-up(md) { ... }
@include media-breakpoint-up(lg) { ... }
@include media-breakpoint-up(xl) { ... }
@include media-breakpoint-up(xxl) { ... }

// Usage

// Example: Hide starting at `min-width: 0`, and then show at the `sm` breakpoint
.custom-class {
    display: none;
}
@include media-breakpoint-up(sm) {
    .custom-class {
        display: block;
    }
}
```

These Sass mixins translate in Bootstrap's compiled CSS using the values declared in Bootstrap's Sass variables. For example:
```
// X-Small devices (portrait phones, less than 576px)
// No media query for `xs` since this is the default in Bootstrap

// Small devices (landscape phones, 576px and up)
@media (min-width: 576px) { ... }

// Medium devices (tablets, 768px and up)
@media (min-width: 768px) { ... }

// Large devices (desktops, 992px and up)
@media (min-width: 992px) { ... }

// X-Large devices (large desktops, 1200px and up)
@media (min-width: 1200px) { ... }

// XX-Large devices (larger desktops, 1400px and up)
@media (min-width: 1400px) { ... }
```

### Max-width

Bootstrap occasionally uses media queries that go in the other direction (the given screen size *or smaller*):
```
// No media query necessary for xs breakpoint as it's effectively `@media (max-width: 0) { ... }`

@include media-breakpoint-down(sm) { ... }
@include media-breakpoint-down(md) { ... }
@include media-breakpoint-down(lg) { ... }
@include media-breakpoint-down(xl) { ... }
@include media-breakpoint-down(xxl) { ... }

// Example: Style from medium breakpoint and down
@include media-breakpoint-down(md) {
    .custom-class {
        display: block;
    }
}
```

These mixins take those declared breakpoints, subtract `.02px` from them, and use them as Bootstrap's `max-width` values. For example:
```
// X-Small devices (portrait phones, less than 576px)
@media (max-width: 575.98px) { ... }

// Small devices (landscape phones, less than 768px)
@media (max-width: 767.98px) { ... }

// Medium devices (tablets, less than 992px)
@media (max-width: 991.98px) { ... }

// Large devices (desktops, less than 1200px)
@media (max-width: 1199.98px) { ... }

// X-Large devices (large desktops, less than 1400px)
@media (max-width: 1399.98px) { ... }

// XX-Large devices (larger desktops)
// No media query since the xxl breakpoint has no upper bound on its width
```

**Why subtract .02px?** Browsers don't currently support [range context queries](https://www.w3.org/TR/mediaqueries-4/#range-context), so Bootstrap works around the limitations of [min- and max- prefixes](https://www.w3.org/TR/mediaqueries-4/#mq-min-max) and viewports with fractional widths (which can occur under certain conditions on high-dpi [*dots per inch*] devices, for instance) by using values with higher precision.

### Single breakpoint

There are also media queries and mixins for targeting a single segment of screen sizes using the minimum and maximum breakpoint widths.
```
@include media-breakpoint-only(sm) { ... }
@include media-breakpoint-only(md) { ... }
@include media-breakpoint-only(lg) { ... }
@include media-breakpoint-only(xl) { ... }
@include media-breakpoint-only(xxl) { ... }
```

For example, the `@include media-breakpoint-only(md) { ... }` will result in:
```
@media (min-width: 768px) and (max-width: 991.98px) { ... }
```

### Between breakpoints

Similarly, meedia queries may span multiple breakpoint widths:
```
@include media-breakpoint-between(md, xl) { ... }
```
Which results in:
```
// Example
// Apply styles starting from medium devices and up to extra large devices
@media (min-width: 768px) and (max-width: 1199.98px) { ... }
```

### A code example using Bootstrap breakpoints

I am going to create an HTML document named [breakpoints-example.html](https://github.com/AndrewSRea/My_Learning_Port/blob/main/Bootstrap/breakpoints-example.html) which incorporates Bootstrap's breakpoint components into three rows of columns. When `breakpoints-example.html` is opened in a browser, if the browser window's width is shifted to a smaller or larger width, the columns will also change in width, and will also stack on top of each other in a smaller browser window, or sit side-by-side each other in a larger browser window.

## Containers

Containers are a fundamental building block of Bootstrap which contain, pad, and align your content within a given device or viewport.

### How they work

Containers are the most basic layout element in Bootstrap and are **required when using Bootstrap's default grid system**. Containers are used to contain, pad, and (sometimes) center the content within them. While containers *can* be nested, most do not require a nested container.
Bootstrap comes with three different containers:

* `.container`, which sets a `max-width` at each responsive breakpoint.
* `.container-fluid`, which is `width: 100%` at all breakpoints.
* `.container-{breakpoint}`, which is `width: 100%` until the specified breakpoint.

The table below illustrates how each container's `max-width` compares to the original `.container` and `.container-fluid` across each breakpoint.
See them in action and compare them in my accompanying [grid-example]().

|   | Extra small | Small | Medium | Large | X-Large | XX-Large |
| --- | --- | --- | --- | --- | --- | --- |
|   | <576px | ≥576px | ≥768px | ≥992px | ≥1200px | ≥ 1400px |
| `.container` | 100% | 540px | 720px | 960px | 1140px | 1320px |
| `.container-sm` | 100% | 540px | 720px | 960px | 1140px | 1320px |
| `.container-md` | 100% | 100% | 720px | 960px | 1140px | 1320px |
| `.container-lg` | 100% | 100% | 100% | 720px | 960px | 1140px | 1320px |
| `.container-xl` | 100% | 100% | 100% | 100% | 1140px | 1320px |
| `.container-xxl` | 100% | 100% | 100% | 100% | 100% | 1320px |
| `.container-fluid` | 100% | 100% | 100% | 100% | 100% | 100% |

### Default container

Bootstrap's default `.container` class is a responsive, fixed-width container, meaning its `max-width` changes at each breakpoint.
```
<div class="container">
    <!-- Content here -->
</div>
```

### Responsive containers

Responsive containers allow you to specify a class that is 100% wide until the specified breakpoint is reached, after which we apply `max-width`s for each of the higher breakpoints. For example, `.container-sm` is 100% wide to start until the `sm` breakpoint is reached, where it will scale up with `md `, `lg`, `xl`, and `xxl`. 
```
<div class="container-sm">100% wide until small breakpoint</div>
<div class="container-md">100% wide until medium breakpoint</div>
<div class="container-lg">100% wide until large breakpoint</div>
<div class="container-xl">100% wide until extra large breakpoint</div>
<div class="container-xxl">100% wide until extra extra large breakpoint</div>
```

### Fluid containers

Use `.container-fluid` for a full width container, spanning the entire width of the viewport.
```
<div class="container-fluid">
    ...
</div>
```

### Sass

As shown above, Bootstrap generates a series of predefined container classes to help you build the layouts you desire. You may customize these predefined container classes by modifyiing the Sass map (found in `_variables.scss`) that powers them:
```
$container-max-widths: (
    sm: 540px,
    md: 720px,
    lg: 960px,
    xl: 1140px,
    xxl: 1320px
);
```
In addition to customizing the Sass, you can also create your own containers with Bootstrap's mixin.
```
// Source mixin
@mixin make-container($padding-x: $container-padding-x) {
    width: 100%;
    padding-right: $padding-x;
    padding-left: $padding-x;
    margin-right: auto;
    margin-left: auto;
}

// Usage
.custom-container {
    @include make-container();
}
```
For more information and examples on how to modify Bootstrap's Sass maps and variables, please refer to the **Sass section of the Grid documentation** below.

### A code example using Bootstrap's responsive containers

I am going to create an HTML document named [container-example.html](https://github.com/AndrewSRea/My_Learning_Port/blob/main/Bootstrap/container-example.html) which incorporates Bootstrap's responsive container component. I will also add three boxes into the container, just to be able to see the effect when the browser is opened for the `container-example.html` document, and the browser is shifted in size from small (mobile) to large (desktop).

## Grid system

Use Bootstrap's powerful mobile-first flexbox grid to build layouts of all shapes and sizes thanks to a twelve-column system, six default responsive tiers, Sass variables and mixins, and dozens of predefined classes.

### Example

Bootstrap's grid system uses a series of containers, rows, and columns to layout and align content. It's built with flexbox and is fully responsive. Below is an example and an in-depth explanation for how the grid system comes together.
(All of the code examples below can be found in my accompanying [`grid-examples.html` file](https://github.com/AndrewSRea/My_Learning_Port/blob/main/Bootstrap/grid-examples.html).)
```
<div class="container">
    <div class="row">
        <div class="col-sm">
            One of three columns
        </div>
        <div class="col-sm">
            One of three columns
        </div>
        <div class="col-sm">
            One of three columns
        </div>
    </div>
</div>
```
The above examples creates three equal-width columns across all devices and viewports using Bootstrap's predefined grid classes. Those columns are centered in the page with parent `.container`.

### How it works 

Breaking it down, here's how the grid system comes together:

* **Bootstrap's grid supports [six different breakpoints](#breakpoints).** Breakpoints are based on `min-width` media queries, meaning they affect that breakpoint and all those above it (e.g., `.col-sm-4` applies to `sm`, `md`, `lg`, `xl`, and `xxl`). This means you can control containeer and column sizing and behavior by each breakpoint.

* **Containers center and horizontally pad your content.** Use `.container` for a responsive pixel width, ` .container-fluid` for `width: 100%` across all viewports and devices, or a responsive container (e.g., `.container-md`) for a combination of fluid and pixel widths.

* **Rows are wrappers for columns.** Each column has horizontal `padding` (called a gutter) for controlling the space between them. This `padding` is then counteracted on the rows with negative margins to ensure the content in your columns is visually aligned down the left side. Rows also support modifier classes to [uniformly apply column sizing](#row-columns) and [gutter classes](#gutters) to change the spacing of your content.

* **Columns are incredibly flexible.** There are 12 template columns available per row, allowing you to create different combinations of elements that span any number of columns. Column classes indicate the number of template columns to span (.e.g, `col-4` spans four). `width`s are set in percentages so you always have the same relative sizing.

* **Gutters are also responsive and customizable.** [Gutter classes are available](#gutters) across all breakpoints, with all the same sizes as Bootstrap's [margin and padding spacing](#spacing). Change horizontal gutters with `.gx-*` classes, vertical gutters with `.gy-*`, or all gutters with `.g-*` classes. `.g-0` is also available to remove gutters.

* **Sass variables, maps, and mixins power the grid.** If you don't want to use the predefined grid classes in Bootstrap, you can use Bootstrap's grid's source Sass to create your own with more semantic markup. Bootstrap also includes some CSS custom properties to consume these Sass variables for even greater flexibility for you.

Be aware of the limitations and [bugs around flexbox](https://github.com/philipwalton/flexbugs), like the [inability to use some HTML elements as flex containers](https://github.com/philipwalton/flexbugs#flexbug-9).

### Grid options

Bootstrap's grid system can adapt across all six default breakpoints, and any breakpoints you customize. The six default grid tiers are as follows:

* Extra small (xs)
* Small (sm)
* Medium (md)
* Large (lg)
* Extra large (xl)
* Extra extra large (xxl)

As noted above, each of these breakpoints have their own container, unique class prefix, and modifiers. Here's how the grid changes across these breakpoints:

|   | xs | sm | md | lg | xl | xxl |
| --- | --- | --- | --- | --- | --- | --- |
|   | <576px | ≥576px | ≥768px | ≥992px | ≥1200px | ≥ 1400px |
| **Container** `max-width` | None (auto) | 540px | 720px | 960px | 1140px | 1320px |
| **Class prefix** | `.col-` | `.col-sm-` | `.col-md-` | `.col-lg-` | `.col-xl-` | `.col-xxl-` |
| **# of columns** | 12 | same | same | same | same | same |
| **Gutter width** | 1.5rem (.75rem on left and right) | same | same | same | same | same |
| **Custom gutters** | [Yes](#gutters) | same | same | same | same | same |
| **Nestable** | [Yes](#nesting) | same | same | same | same | same |
| **Column ordering** | [Yes](#reordering) | same | same | same | same | same |

## Auto-layout columns

Utilize breakpoint-specific column classes for easy column sizing without an explicit numbered class like `.col-sm-6`.

### Equal width

For example, here are two grid layouts that apply to every device and viewport, from `xs` to `xxl`. Add any number of unitless classes for each breakpoint you need and every column will be the same width.
```
<div class="container">
    <div class="row">
        <div class="col">
            1 of 2
        </div>
        <div class="col">
            2 of 2
        </div>
    </div>
    <div class="row">
        <div class="col">
            1 of 3
        </div>
        <div class="col">
            2 of 3
        </div>
        <div class="col">
            3 of 3
        </div>
    </div>
</div>
```

### Setting one column width

Auto-layout for flexbox grid columns also means you can set the width of one column and have the sibling columns automatically resize around it. You may use predefined grid classes (as shown below), grid mixins, or inline widths. Note thaat the other columns will resize no matter the width of the center column.
```
<div class="container">
    <div class="row">
        <div class="col">
            1 of 3
        </div>
        <div class="col-6">
            2 of 3 (wider)
        </div>
        <div class="col">
            3 of 3
        </div>
    </div>
    <div class="row">
        <div class="col">
            1 of 3
        </div>
        <div class="col-5">
            2 of 3 (wider)
        </div>
        <div class="col">
            3 of 3
        </div>
    </div>
</div>
```

### Variable width content

Use `col-{breakpoint}-auto` classes to size columns based on the natural width of their content.
```
<div class="container">
    <div class="row justify-content-md-center">
        <div class="col col-lg-2">
            1 of 3
        </div>
        <div class="col-md-auto">
            Variable width content
        </div>
        <div class="col col-lg-2">
            3 of 3
        </div>
    </div>
    <div class="row">
        <div class="col">
            1 of 3
        </div>
        <div class="col-md-auto">
            Variable width content
        </div>
        <div class="col col-lg-2">
            3 of 3
        </div>
    </div>
</div>
```

## Responsive classes

Bootstrap's grid includes six tiers of predefined classes for building complex responsive layouts. Customize the size of your columns on extra small, small, medium, large, or extra large devices however you see fit.

### All breakpoints

For grids that are the same from the smallest of devices to the largest, use the `.col` and `.col-*` classes. Specify a numbered class when you need a particularly sized column; otherwise, feel free to stick to `.col`.
(All of the code examples below can be found in my accompanying [`responsive-grid-examples.html` file](https://github.com/AndrewSRea/My_Learning_Port/blob/main/Bootstrap/responsive-grid-examples.html).)
```
<div class="container">
    <div class="row">
        <div class="col">col</div>
        <div class="col">col</div>
        <div class="col">col</div>
        <div class="col">col</div>
    </div>
    <div class="row">
        <div class="col-8">col-8</div>
        <div class="col-4">col-4</div>
    </div>
</div>
```

### Stacked to horizontal

Using a single set of `.col-sm-*` classes, you can creaate a basic grid system that starts out stacked and becomes horizontal at the small breakpoint (`sm`).
```
<div class="container">
    <div class="row">
        <div class="col-8">col-8</div>
        <div class="col-4">col-4</div>
    </div>
    <div class="row">
        <div class="col-sm">col-sm</div>
        <div class="col-sm">col-sm</div>
        <div class="col-sm">col-sm</div>
    </div>
</div>
```

### Mix and match

Don't want your columns to simply stack in some grid tiers? Use a combination of different classes for each tier as needed. See the example below for a better idea of how it works.
```
<div class="container">
    <!-- Stack the columns on mobile by making one full-width and the other half-width -->
    <div class="row">
        <div class="col-md-8">.col-md-8</div>
        <div class="col-6 col-md-4">.col-6 .col-md-4</div>
    </div>

    <!-- Columns start at 50% wide on mobile and bump up to 33.3% wide on desktop -->
    <div class="row">
        <div class="col-6 col-md-4">.col-6 .col-md-4</div>
        <div class="col-6 col-md-4">.col-6 .col-md-4</div>
        <div class="col-6 col-md-4">.col-6 .col-md-4</div>
    </div>

    <!-- Columns are always 50% wide, on mobile and desktop -->
    <div class="row">
        <div class="col-6">.col-6</div>
        <div class="col-6">.col-6</div>
    </div>
</div>
```

### Row columns

Use the responsive `.row-cols-*` classes to quickly set the number of columns which best render your content and layout. Whereas normal `.col-*` classes apply to the individual columns (e.g., `.col-md-4`), the row columns classes are set on the parent `.row` as a shortcut. With `.row-cols-auto`, you can give the columns their natural width.
Use these row columns classes to quickly create basic grid layouts or to control your card layouts.
```
<div class="container">
    <div class="row row-cols-2">
        <div class="col">Column</div>
        <div class="col">Column</div>
        <div class="col">Column</div>
        <div class="col">Column</div>
    </div>
</div>
```
```
<div class="container">
    <div class="row row-cols-3">
        <div class="col">Column</div>
        <div class="col">Column</div>
        <div class="col">Column</div>
        <div class="col">Column</div>
    </div>
</div>
```
```
<div class="container">
    <div class="row row-cols-auto">
        <div class="col">Column</div>
        <div class="col">Column</div>
        <div class="col">Column</div>
        <div class="col">Column</div>
    </div>
</div>
```
```
<div class="container">
    <div class="row row-cols-4">
        <div class="col">Column</div>
        <div class="col">Column</div>
        <div class="col">Column</div>
        <div class="col">Column</div>
    </div>
</div>
```
```
<div class="container">
    <div class="row row-cols-1 row-cols-sm-2 row-cols-md-4">
        <div class="col">Column</div>
        <div class="col">Column</div>
        <div class="col">Column</div>
        <div class="col">Column</div>
    </div>
</div>
```

You can also use the accompanying Sass mixin, `.row-cols()`:
```
.element {
    // Three columns to start
    @include row-cols(3);

    // Five columns from medium breakpoint up
    @include media-breakpoint-up(md) {
        @include row-cols(5);
    }
}
```

## Nesting

To nest your content with the default grid, add a new `.row` and set of `.col-sm-*` columns within an existing `.col-sm-*` column. Nested rows should include a set of columns which add up to 12 or fewer (it is not required that you use all 12 available columns).
(The code example below can be found in my accompanying [`nesting-grid-example.html` file](https://github.com/AndrewSRea/My_Learning_Port/blob/main/Bootstrap/nesting-grid-example.html).)
```
<div class="container">
    <div class="row">
        <div class="col-sm-3">
            Level 1: .col-sm-3
        </div>
        <div class="col-sm-9">
            <div class="row">
                <div class="col-8 col-sm-6">
                    Level 2: .col-8 .col-sm-6
                </div>
                <div class="col-4 col-sm-6">
                    Level 2: .col-4 .col-sm-6
                </div>
            </div>
        </div>
    </div>
</div>
```

## Sass

When using Bootstrap's source Sass files, you have the option of using Sass variables and mixins to create custom, semantic, and responsive page layouts. Our predefined grid classes use these same variables and mixins to provide a whole suite of ready-to-use classes for fast responsive layouts.

### Variables

Variables and maps determine the number of columns, the gutter width, and the media query point at which to begin floating columns. We use these to generate the predefined grid classes documented above, as well as for the custom mixins listed below.
```
$grid-columns:      12;
$grid-gutter-width: 1.5rem;
```
```
$grid-breakpoints: (
    xs: 0,
    sm: 576px,
    md: 768px,
    lg: 992px,
    xl: 1200px,
    xxl: 1400px
);
```
```
$container-max-widths: (
    sm: 540px,
    md: 720px,
    lg: 960px,
    xl: 1140px,
    xxl: 1320px
);
```

### Mixins

Mixins are used in conjunction with the grid variables to generate semantic CSS for individual grid columns.
```
// Creates a wrapper for a series of columns
@include make-row();

// Make the element grid-ready (applying everything but the width)
@include make-col-ready();
@include make-col($size, $columns: $grid-columns);

// Get fancy by offsetting, or changing the sort order
@include make-col-offset($size, $columns: $grid-columns);
```

### Example usage

You can modify the variables to your own custom values, or just use the mixins with their default values. Here's an exxample of using the default settings to create a two-column layout with a gap between.
```
.example-container {
    @include make-container();
    // Make sure to define this width after the mixin to override
    // `width: 100%` generated by `make-container()`
    width: 800px;
}

.example-row {
    @include make-row();
}

.example-content-main {
    @include make-col-ready();

    @include media-breakpoint-up(sm) {
        @include make-col(6);
    }
    @include media-breakpoint-up(lg) {
        @include make-col(8);
    }
}

.example-content-secondary {
    @include make-col-ready();

    @include media-breakpoint-up(sm) {
        @include make-col(6);
    }
    @include media-breakpoint-up(lg) {
        @include make-col(4);
    }
}
```
```
<div class="example-container">
    <div class="example-row">
        <div class="example-content-main">Main content</div>
        <div class="example-content-secondary">Secondary content</div>
    </div>
</div>
```

## Customizing the grid

Using Bootstrap's built-in grid Sass variables and maps, it's possible to completely customize the predefined grid classes. Change the number of tiers, the media query dimensions, and the container widths--then recompile.

### Columns and gutters

The number of grid columns can be modified via Sass variables. `$grid-columns` is used to generate the widths (in percent) of each individual column while `$Kgrid-gutter-width` sets the width for the column gutters.
```
$grid-columns: 12 !default;
$grid-gutter-width: 1.5rem !default;
```

### Grid tiers

Moving beyond the columns theemselves, you may also customize the number of grid tiers. If you wanted just four grid tiers, you'd update the `$grid-breakpoints` and `$container-max-widths` to something like this:
```
$grid-breakpoints: (
    xs: 0,
    sm: 480px,
    md: 768px,
    lg: 1024px
);

$container-max-widths: (
    sm: 420px,
    md: 720px,
    lg: 960px
);
```
When making any changes to the Sass variables or maps, you'll need to save your changes and recompile. Doing so will output a brand new set of predefined grid classes for column widths, offsets, and ordering. Responsive visibility utilities will also be updated to use the custom breakpoints. Make sure to set grid values in `px` (not `rem`, `em`, or `%`).

### A code example of Bootstrap's responsive grid system



## Columns

Learn how to modify columns with a handful of options for alignment, ordering, and offsetting thanks to Bootstrap's flexbox grid system. Plus, see how to use column classes to manage widths of non-grid-elements.

### How they work

* **Columns build on the grid's flexbox architecture.** Flexbox means we have options for changing individual columns and [modifying groups of columns at the row level](#row-columns). You choose how columns grow, shrink, or otherwise change.

* **When building grid layouts, all content goes in columns.** The hierarchy of Bootstrap's grid goes from [container](#containers) to row to column to your content. On rare occasions, you may combine content and columns, but be aware there can be unintended consequences.

* **Bootstrap includes predefined classes for creating fast, responsive layouts.** With [six breakpoints](#breakpoints) and a dozen columns at each grid tier, Bootstrap has dozens of classes already built for you to create your desired layouts. This can be disabled via Sass if you wish.

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
#### Another example of vertical alignment
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

### Horizontal alignment
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
       <div class="row justify-content-eveenly">
        <div class="col-4">
            One of two columns
        </div>
        <div class="col-4">
            One of two columns
        </div>
    </div>
</div>
```

### Column wrapping

### Gutters

### Reordering

### Spacing