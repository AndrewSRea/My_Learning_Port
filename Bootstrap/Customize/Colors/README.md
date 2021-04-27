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
All these colors are available as a Sass map, `$theme-colors`.
```
$theme-colors: (
    "primary": $primary,
    "secondary": $secondary,
    "success": $success,
    "info": $info,
    "warning": $warning,
    "danger": $danger,
    "light": $light,
    "dark": $dark
);
```
Check out [Bootstrap's Sass maps and loops docs](https://github.com/AndrewSRea/My_Learning_Port/tree/main/Bootstrap/Customize/Sass#maps-and-loops) for how to modify these colors.

## All colors

All Bootstrap colors are available as Sass variables and a Sass map in `scss/_variables.scss` file. To avoid increased file sizes, Bootstrap doesn't create text or background color classes for each of these variables. Instead, Bootstrap chooses a subset of these colors for a [theme palette](https://github.com/AndrewSRea/My_Learning_Port/tree/main/Bootstrap/Customize/Colors#theme-colors).

Be sure to monitor contrast ratios as you customize colors. As shown in my accompanying [bootstrap-colors.html]() file, Bootstrap has added three contrast ratios to each of the main colors--one for the swatch's current colors, one for against white, and one for against black.