# Components

Learn how and why Bootstrap builds nearly all its components responsively and with base and modifier classes.

## Base classes

Bootstrap's components are largely built with a base-modifier nomenclature. Bootstrap groups as many shared properties as possible into a base class, like `.btn`, and then groups individual styles for each variant into modifier classes, like `.btn-primary` or `.btn-success`.

To build Bootstrap's modifier classes, it uses Sass's `@each` loops to iterate over a Sass map. This is especially helpful for generating variants of a component by using Bootstrap's `$theme-colors` and creating responsive variants for each breakpoint. As you customize these Sass maps and recompile, you'll automatically see your changes reflected in these loops.

Check out [Bootstrap's Sass maps and loops docs](https://github.com/AndrewSRea/My_Learning_Port/tree/main/Bootstrap/Customize/Sass#maps-and-loops) for how to customize these loops and extend Bootstrap's base-modifier approach to your own code.

## Modifiers

Many of Bootstrap's components are built with a base-modifier class approach. This means the bulk of the styling is contained to a base class (e.g., `.btn`) while style variations are confined to modifier classes (e.g., `.btn-danger`). These modifier classes are built from the `$theme-colors` map to make customizing the number and name of Bootstrap's modifier classes.

Here are two examples of how Bootstrap loops over the `$theme-colors` map to generate modifiers to the `.alert` and `.list-group` components.
```
// Generate contextual modifier classes for colorizing the alert.

@each $state, $value in $theme-colors {
    $alert-background: shift-color($value, $alert-bg-scale);
    $alert-border: shift-color($value, $alert-border-scale);
    $alert-color: shift-color($value, $alert-color-scale);
    @if (contrast-ratio($alert-background, $alert-color) < $min-contrast-ratio) {
        $alert-color: mix($value, color-contrast($alert-background), abs($alert-color-scale));
    }
    .alert-#{$state} {
        @include alert-variant($alert-background, $alert-border, $alert-color);
    }
}
```
```
// List group contextual variants
//
// Add modifier classes to change text and background color on individual items.
// Organizationally, this must come after the `:hover` states.

@each $state, $value in $theme-colors {
    $list-group-background: shift-color($value, $list-group-item-bg-scale);
    $list-group-color: shift-color($value, $list-group-item-color-scale);
    @if (contrast-ratio($list-group-background, $list-group-color) < $min-contrast-ratio) {
        $list-group-color: mix($value, color-contrast($list-group-background), abs($alert-color-scale));
    }
    @include list-group-item-variant($state, $list-group-background, $list-group-color);
}
```

## Responsive

These Sass loops aren't limited to color maps, either. You can also generate responsive variations of your components. Take, for example, Bootstrap's responsive alignment of the dropdowns where Bootstrap mixes an `@each` loop for the `$grid-breakpoints` Sass map with a media query include.
```
// We deliberately hardcode the `bs-` prefix because we check
// this custom property in JS to determine Popper's positioning

@each $breakpoint in map-keys($grid-breakpoints) {
    @include media-breakpoint-up($breakpoint) {
        $infix: breakpoint-infix($breakpoint, $grid-breakpoints);

        .dropdown-menu#{$infix}-start {
            --bs-position: start;

            &[data-bs-popper] {
                right: auto #{"/* rtl:ignore */"};
                left: 0 #{"/* rtl:ignore */"};
            }
        }

        .dropdown-menu#{$infix}-end {
            --bs-position: end;

            &[data-bs-popper] {
                right: 0 #{"/* rtl:ignore */"};
                left: auto #{"/* rtl:ignore */"};
            }
        }
    }
}
```
Should you modify your `$grid-breakpoints`, your changes will apply to all the loops iterating over that map.
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
For more information and examples on how to modify our Sass maps and variables, please refer to [the Sass section of the Grid documentation](https://github.com/AndrewSRea/My_Learning_Port/tree/main/Bootstrap/Layout/Grid#sass).

## Creating your own

Bootstrap encourages you to adopt these guidelines when building with Bootstrap to create your own components. It has extended this approach itself to the custom components in its documentation and examples. Components like Bootstrap's callouts are built just like its provided components with base and modifier classes.
```
<div class="callout">
    <strong>This is a callout.</strong> Bootstrap built it custom for its docs so its messages to you stand out. It has three variants via modifier classes.
</div>
```
In your CSS, you'd have something like the following where the bulk of the styling is done via `.callout`. Then, the unique styles between each variant is controlled via modifer class.
```
// Base class
.callout {}

// Modifier classes
.callout-info {}
.callout-warning {}
.callout-danger {}
```
For the callouts, that unique styling is just a `border-left-color`. When you combine that base class with one of those modifier classes, you get your complete component family:
```
<div class="callout-info">
    <strong>This is an info callout.</strong> Example text to show it in action.
</div>
<div class="callout-warning">
    <strong>This is a warning callout.</strong> Example text to show it in action.
</div>
<div class="callout-danger">
    <strong>This is a danger callout.</strong> Example text to show it in action.
</div>
```

<hr>

[[Previous page]](https://github.com/AndrewSRea/My_Learning_Port/tree/main/Bootstrap/Customize/Colors#color) - [[Top]](https://github.com/AndrewSRea/My_Learning_Port/tree/main/Bootstrap/Customize/Components#components) - [[Next page]](https://github.com/AndrewSRea/My_Learning_Port/tree/main/Bootstrap/Customize/CSS_Variables#css-variables)