# Color

Bootstrap is supported by an extensive color system that themes its styles and components. This enables more comprehensive customization and extension for any project.

## Theme colors

Bootstrap uses a subset of all colors to create a smaller color pallete for generating color schemes, also available as Sass variables and a Sass map in Bootstrap's `scss/_variables.scss` file.
```
<div class="row">
    <div class="col-md-4">
        <div class="p-3 mb-3 bg-primary text-white">Primary</div>
    </div>
    <div class="col-md-4">
        <div class="p-3 mb-3 bg-secondary text-white">Secondary</div>
    </div>
    <div class="col-md-4">
        <div class="p-3 mb-3 bg-success text-white">Success</div>
    </div>
    <div class="col-md-4">
        <div class="p-3 mb-3 bg-danger text-white">Danger</div>
    </div>
    <div class="col-md-4">
        <div class="p-3 mb-3 bg-warning text-white">Warning</div>
    </div>
    <div class="col-md-4">
        <div class="p-3 mb-3 bg-info text-white">Info</div>
    </div>
    <div class="col-md-4">
        <div class="p-3 mb-3 bg-light text-dark">Light</div>
    </div>
    <div class="col-md-4">
        <div class="p-3 mb-3 bg-dark text-white">Dark</div>
    </div>
</div>
```
See the code above in action in my accompanying [bootstrap-colors.html](https://andrewsrea.github.io/My_Learning_Port/Bootstrap/Customize/Colors/bootstrap-colors.html) file. (See the source code [here](https://github.com/AndrewSRea/My_Learning_Port/blob/main/Bootstrap/Customize/Colors/bootstrap-colors.html).)

All these colors are available as a Sass map, `$theme-colors`.
```
$theme-colors: (
    "primary":   $primary,
    "secondary": $secondary,
    "success":   $success,
    "info":      $info,
    "warning":   $warning,
    "danger":    $danger,
    "light":     $light,
    "dark":      $dark
);
```
Check out [Bootstrap's Sass maps and loops docs](https://github.com/AndrewSRea/My_Learning_Port/tree/main/Bootstrap/Customize/Sass#maps-and-loops) for how to modify these colors.

## All colors

All Bootstrap colors are available as Sass variables and a Sass map in `scss/_variables.scss` file. To avoid increased file sizes, Bootstrap doesn't create text or background color classes for each of these variables. Instead, Bootstrap chooses a subset of these colors for a [theme palette](https://github.com/AndrewSRea/My_Learning_Port/tree/main/Bootstrap/Customize/Colors#theme-colors).

Be sure to monitor contrast ratios as you customize colors. As shown in my accompanying [bootstrap-colors.html](https://andrewsrea.github.io/My_Learning_Port/Bootstrap/Customize/Colors/bootstrap-colors.html) file, Bootstrap has added three contrast ratios to each of the main colors -- one for the swatch's current colors, one for against white, and one for against black.

### Notes on Sass

Sass cannot programmatically generate variables, so Bootstrap manually created variables for every tint and shade itself. Bootstrap specifies the midpoint value (e.g., `$blue-500`) and uses custom color functions to tint (lighten) or shade (darken) its colors via Sass's `mix()` color function.

Using `mix()` is not the same as `lighten()` and `darken()` -- the former blends the specified color with white or black, while the latter only adjusts the lightness value of each color. The result is a much more complete suite of colors, as [shown in this CodePen demo](https://codepen.io/emdeoh/pen/zYOQOPB).

Bootstrap's `tint-color()` and `shade-color()` functions use `mix()` alongside its `$theme-color-interval` variable, which specifies a stepped percentage value for each mixed color Bootstrap produces. See the `scss/_functions.scss` and `scss/_variables.scss` files for the full source code.

## Color Sass maps

Bootstrap's source Sass files include three maps to help you quickly and easily loop over a list of colors and their hex values.

* `$colors` lists all our available base (`500`) colors.
* `$theme-colors` lists all semantically named theme colors (shown below).
* `$grays` lists all tints and shades of gray.

Within `scss/_variables.scss`, you'll find Bootstrap's color variables and Sass map. Here's an example of the `$colors` Sass map:
```
$colors: (
    "blue":      $blue,
    "indigo":    $indigo,
    "purple":    $purple,
    "pink":      $pink,
    "red":       $red,
    "orange":    $orange,
    "yellow":    $yellow,
    "green":     $green,
    "teal":      $teal,
    "cyan":      $cyan,
    "white":     $white,
    "gray":      $gray-600,
    "gray-dark": $gray-800
);
```
Add, remove, or modify values within the map to update how they're used in many other components. Unfortunately at this time, not *every* component utilizes this Sass map. Future updates will strive to improve upon this. Until then, plan on making use of the `${color}` variables and this Sass map.

### Example

Here's how you can use these in your Sass:
```
.alpha { color: $purple; }
.beta {
    color: $yellow-300;
    background-color: $indigo-900;
}
```
[Color](https://github.com/AndrewSRea/My_Learning_Port/tree/main/Bootstrap/Utilities/Colors#colors) and [background](https://github.com/AndrewSRea/My_Learning_Port/tree/main/Bootstrap/Utilities/Background#background) utility classes are also available for setting `color` and `background-color` using the `500` color values.

## Generating utilities

Bootstrap doesn't include `color` and `background-color` utilities for every color variable, but you can generate these yourself with our [utility API]() and our extended Sass maps added in v5.1.0.

1. To start, make sure you've imported our functions, variables, mixins, and utilities.
2. Use our `map-merge-multiple()` function to quickly merge multiple Sass maps together in a new map.
3. Merge this new combined map to extend any utility with a `{color}-{level}` class name.

Here's an example that generates text color utilities (e.g., `.text-purple-500`) using the above steps.
```
@import "bootstrap/scss/functions";
@import "bootstrap/scss/variables";
@import "bootstrap/scss/mixins";
@import "bootstrap/scss/utilities";

$all-colors: map-merge-multiple($blues, $indigos, $purples, $pinks, $reds, $oranges, $yellows, $greens, $teals, $cyans);

$utilities: map-merge(
    $utilities,
    (
        "color": map-merge(
            map-get($utilities, "color"),
            (
                values: map-merge(
                    map-get(map-get($utilities, "color"), "values"),
                    (
                        $all-colors
                    ),
                ),
            ),
        ),
    )
);

@import "bootstrap/scss/utilities/api";
```
This will generate new `.text-{color}-{level}` utilities for every color and level. You can do the same for any other utility and property as well.

<hr>

[[Previous page]](https://github.com/AndrewSRea/My_Learning_Port/tree/main/Bootstrap/Customize/Options#options) - [[Top]](https://github.com/AndrewSRea/My_Learning_Port/tree/main/Bootstrap/Customize/Colors#color) - [[Next page]](https://github.com/AndrewSRea/My_Learning_Port/tree/main/Bootstrap/Customize/Components#components)