# Containers

Containers are a fundamental building block of Bootstrap that contain, pad, and align your content within a given device or viewport.

## How they work

Containers are the most basic layout element in Bootstrap and are **required when using Bootstrap's default grid system**. Containers are used to contain, pad, and (sometimes) center the content within them. While containers *can* be nested, most layouts do not require a nested container.

Bootstrap comes with three different containers:

* `.container`, which sets a `max-width` at each responsive breakpoint.
* `.container-fluid`, which is `width: 100%` at all breakpoints.
* `.container-{breakpoint}`, which is `width: 100%` until the specified breakpoint.

The table below illustrates how each container's `max-width` compares to the original `.container` and `.container-fluid` across each breakpoint.

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

See an example of a responsive container in my accompanying [container-example.html](https://github.com/AndrewSRea/My_Learning_Port/blob/main/Bootstrap/Layout/Containers/container-example.html) file.

## Default container

Bootstrap's default `.container` class is a responsive, fixed-width container, meaning its `max-width` changes at each breakpoint.
```
<div class="container">
    <!-- Content here -->
</div>
```

## Responsive containers

Responsive containers allow you to specify a class that is 100% wide until the specified breakpoint is reached, after which we apply `max-width`s for each of the higher breakpoints. For example, `.container-sm` is 100% wide to start until the `sm` breakpoint is reached, where it will scale up with `md `, `lg`, `xl`, and `xxl`. 
```
<div class="container-sm">100% wide until small breakpoint</div>
<div class="container-md">100% wide until medium breakpoint</div>
<div class="container-lg">100% wide until large breakpoint</div>
<div class="container-xl">100% wide until extra large breakpoint</div>
<div class="container-xxl">100% wide until extra extra large breakpoint</div>
```
See an example of the code above in my accompanying [responsive-containers.html](https://github.com/AndrewSRea/My_Learning_Port/blob/main/Bootstrap/Layout/Containers/responsive-containers.html) file.

## Fluid containers

Use `.container-fluid` for a full width container, spanning the entire width of the viewport.
```
<div class="container-fluid">
    ...
</div>
```

## Sass

As shown above, Bootstrap generates a series of predefined container classes to help you build the layouts you desire. You may customize these predefined container classes by modifying the Sass map (found in `_variables.scss`) that powers them:
```
$container-max-widths: (
    sm: 540px,
    md: 720px,
    lg: 960px,
    xl: 1140px,
    xxl: 1320px
);
```
In addition to customizing the Sass, you can also create your own containers with Bootstrap's Sass mixin.
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
For more information and examples on how to modify Bootstrap's Sass maps and variables, please refer to [the Sass section of the Grid documentation]() below. <!-- link to Layout/Grid folder, "Sass" header -->

## A code example using Bootstrap's responsive containers

I am going to create an HTML document named [container-example.html](https://github.com/AndrewSRea/My_Learning_Port/blob/main/Bootstrap/Layout/Containers/container-example.html) which incorporates Bootstrap's responsive container component. I will also add three boxes into the container, just to be able to see the effect when the browser is opened for the `container-example.html` document, and the browser is shifted in size from small (mobile) to large (desktop).

[[Previous page]](https://github.com/AndrewSRea/My_Learning_Port/tree/main/Bootstrap/Layout/Breakpoints#breakpoints) - [[Top]](https://github.com/AndrewSRea/My_Learning_Port/tree/main/Bootstrap/Layout/Containers#containers) - [[Next page]](https://github.com/AndrewSRea/My_Learning_Port/tree/main/Bootstrap/Layout/Grid#grid-system)