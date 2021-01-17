# Bootstrap

## Build fast, responsive sites with Bootstrap

Quickly design and customize responsive mobile-first sites with Bootstrap, the world's most popular front-end open source toolkit (by Bootstrap's own reckoning), featuring [Sass](https://sass-lang.com/) variables and mixins, responsive grid system, extensive prebuilt components, and powerful JavaScript plugins.

## Installation of Bootstrap

There are two ways to install Bootstrap into your HTML document:

* Install Bootstrap's source Sass and JavaScript files via npm, Composer, or Meteor.

I was taught how to use npm packages through the Terminal window on my Visual Studio Code editor but again, we only covered that technology over the course of a week so I vaguely remember how to use npm packages. But I will be covering that technologyin a future folder in My_Learning_Port folder. So therefore, I will not be using this technology just yet as I work with Bootstrap.

* [jsDelivr](https://www.jsdelivr.com/) - When you only need to include Bootstrap's compiled CSS or JS, you can use jsDelivr.

I am familiar with this technology, as it is pretty the same as adding a CSS stylesheet link and a JavaScript ```<script>```link into the ```<head>``` of an HTML document. In fact, I will be incorporating a [starter template](https://github.com/AndrewSRea My_Learning_Port/blob/main/Bootstrap/starter-template.html) provided by [Bootstrap](https://getbootstrap.com/docs/5.0/getting-started/introduction/#starter-template) throughout all of the files inside this Bootstrap folder. 
This starter template provides the necessary Bootstrap CSS and the Bootstrap JavaScript and Popper.js needed to be able to incorporate
all the Bootstrap components into an HTML document.

### Side note

As [Sass](https://sass-lang.com/) was mentioned above, if Sass is a necessary component of Bootstrap, I may have to create a separate folder containing instructions and code examples for Sass. I will add this folder after this Bootstrap folder if I deem it necessary.

## Bootstrap Layout

So I have my [starter template](https://github.com/AndrewSRea/My_Learning_Port/blob/main/Bootstrap/starter-template.html), ready to jump right in to building some layouts with Bootstrap. Let's go!

### Breakpoints

Breakpoints are the triggers in Bootstrap for how your responsive layout changes across device or viewport sizes.

#### Core concepts

* **Breakpoints are the building blocks or responsive design.** Use them to control when your layout can be adapted at a particular viewport or device size.

* **Use media queries to architect your CSS by breakpoint.** Media queries are a feature of CSS that allow you to conditionally apply styles based on a set of browser and operating system parameters. Bootstrap most commonly uses ```min-width``` in their media queries.

* **Mobile first, responsive design in the goal.** Bootstrap's CSS aims to apply the bare minimum of styles to make a layout work at the smallest breakpoint, and then layers on styles to adjust that design for larger devices. This optimizes your CSS, improves rendering time, and provides a great experience for your visitors.

#### Available breakpoints

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
These breakpoints are customizable via [Sass](https://sass-lang.com/)--you'll find them in a Sass map in Boostrap's `_variables.scss` stylesheet. (Perhaps I will have to create a Sass folder within this Bootstrap folder.)
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

### Media Queries

Since Bootstrap is developed to be mobile first, we use a handful of [media queries](https://developer.mozilla.org/en-US/docs/Web/CSS/Media_Queries/Using_media_queries) to create sensible breakpoints for our layouts and interfaces. These breakpoints are mostly based on minimum viewport widths and allow us to scale up elements as the viewport changes.

#### Min-width

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

#### Max-width

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

These mixins take those declared breakpoints, subtract `.02px` from them, and use them as our `max-width` values. For example:
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

#### Single breakpoint

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

#### Between breakpoints

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

#### An code example using Bootstrap breakpoints

I am going to create an HTML document named `[breakpoints-example.html]()` which incorporates Bootstrap's breakpoint components into three rows of columns. When `breakpoints-example.html` is opened in a browser, if the browser window's width is shifted to a smaller or larger width, the columns will also change in width, and will also stack on top of each other in a smaller browser window, or sit side-by-side each other in a larger browser window.