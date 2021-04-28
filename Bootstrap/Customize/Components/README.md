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