# Tables

<!-- link on Content/Reboot, header "Tables" -->

Documentation and examples for opt-in styling of tables (given their prevalent use in JavaScript plugins) with Bootstrap.

### Overview

Due to the widespread use of `<table>` elements across third-party widgets like calendars and date pickers, Bootstrap's tables are **opt-in**. Add the base class `.table` to any `<table>`, then extend it with Bootstrap's optional modifier classes or custom styles. All table styles are not inherited in Bootstrap, meaning any nested tables can be styled independent from the parent.
Using the most basic table markup, here's how `.table`-based tables look in Bootstrap.
```
<table class="table">
    <thead>
        <tr>
            <th scope="col">#</th>
            <th scope="col">First</th>
            <th scope="col">Last</th>
            <th scope="col">Handle</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
        </tr>
        <tr>
            <th scope="row">2</th>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
        </tr>
        <tr>
            <th scope="row">3</th>
            <td colspan="2">Larry the Bird</td>
            <td>@twitter</td>
        </tr>
    </tbody>
</table>
```

## Variants

Use contextual classes to color tables, table rows, or individual cells.
```
<!-- On tables -->
<table class="table-primary">...</table>
<table class="table-secondary">...</table>
<table class="table-success">...</table>
<table class="table-danger">...</table>
<table class="table-warning">...</table>
<table class="table-info">...</table>
<table class="table-light">...</table>
<table class="table-dark">...</table>

<!-- On rows -->
<tr class="table-primary">...</tr>
<tr class="table-secondary">...</tr>
<tr class="table-success">...</tr>
<tr class="table-danger">...</tr>
<tr class="table-warning">...</tr>
<tr class="table-info">...</tr>
<tr class="table-light">...</tr>
<tr class="table-dark">...</tr>

<!-- On cells (`td` or `th`) -->
<tr>
    <td class="table-primary">...</td>
    <td class="table-secondary">...</td>
    <td class="table-success">...</td>
    <td class="table-danger">...</td>
    <td class="table-warning">...</td>
    <td class="table-info">...</td>
    <td class="table-light">...</td>
    <td class="table-dark">...</td>
</tr>
```

<hr>

### :warning: Conveying meaning to assistive technologies

Using color to add meaning only provides a visual indication, which will not be conveyed to users of assistive technologies - such as screen readers. Ensure that information denoted by color is either obvious from the conten  itself (e.g. the visible text), or is included through alternative means, such as additional text hidden with the `.visually-hidden` class.

<hr>

## Accented tables

### Striped rows

Use `.table-striped` to add zebra-striping to any table row within the `<tbody>`.
```
<table class="table table-striped">
    ...
</table>
```
These classes can also be added to table variants:
```
<table class="table table-dark table-striped">
    ...
</table>
```
```
<table class="table table-success table-striped">
    ...
</table>
```

### Hoverable rows

Add `.table-hover` to enable a hover state on table rows with a `<tbody>`.
```
<table class="table table-hover">
    ...
</table>
```
```
<table class="table table-dark table-hover">
    ...
</table>
```
These hoverable rows can also be combined with the striped variant:
```
<table class="table table-striped table-hover">
    ...
</table>
```

### Active tables

Highlight a table row or cell by adding a `.table-active` class.
```
<table class="table">
    <thead>
        ...
    </thead>
    <tbody>
        <tr class="table-active">
            ...
        </tr>
        <tr>
            ...
        </tr>
        <tr>
            <th scope="row">3</th>
            <td colspan="2" class="table-active">Larry the Bird</td>
            <td>@twitter</td>
        </tr>
    </tbody>
</table>
```
```
<table class="table table-dark">
    <thead>
        ...
    </thead>
    <tbody>
        <tr class="table-active">
            ...
        </tr>
        <tr>
            ...
        </tr>
        <tr>
            <th scope="row">3</th>
            <td colspan="2" class="table-active">Larry the Bird</td>
            <td>@twitter</td>
        </tr>
    </tbody>
</table>
```

## How do the variants and accented tables work?

For the accented tables ([striped rows](https://github.com/AndrewSRea/My_Learning_Port/tree/main/Bootstrap/Content/Tables#striped-rows), [hoverable rows](https://github.com/AndrewSRea/My_Learning_Port/tree/main/Bootstrap/Content/Tables#hoverable-rows), and [active tables](https://github.com/AndrewSRea/My_Learning_Port/tree/main/Bootstrap/Content/Tables#active-tables)), Bootstrap used some techniques to make these effects work for all of the [table variants](https://github.com/AndrewSRea/My_Learning_Port/tree/main/Bootstrap/Content/Tables#variants):

* Bootstrap starts by setting the background of a table cell with the `--bs-table-bg` custom property. All table variants then set that custom property to colorize the table cells. This way, we don't get into trouble if semi-transparent colors are used as table backgrounds.
* Then Bootstrap adds a gradient on the table cells with `background-image: linear-gradient(var)--bs-table-accent-bg), var(--bs-table-accent-bg));` to layer on top of any specified `background-color`. Since `--bs-table-accent-bg` is transparent by default, we have an invisible transparent linear gradient by default.
* When either `.table-striped`, `.table--hover`, or `.table-active` classes are added, the `--bs-table-accent-bg` is set to a semitransparent color to colorize the background.
* For each table variant, Bootstrap generates a `--bs-table-accent-bg` color with the highest contrast depending on that color. For example, the accent color for `.table-primary` is darker while `.table-dark` has a lighter accent color.
* Text and border colors are generated the same way, and their colors are inherited by default.

Behind the scenes, it looks like this:
```
@mixin table-variant($state, $background) {
    .table-#{$state} {
        $color: color-contrast(opaque($body-bg, $background));
        $hover-bg: mix($color, $background, percentage($table-hover-bg-factor));
        $striped-bg: mix($color, $background, percentage($table-striped-bg-factor));
        $active-bg: mix($color, $background, percentage($table-active-bg-factor));

        --#{$variable-prefix}table-bg: #{$background};
        --#{$variable-prefix}table-striped-bg: #{$striped-bg};
        --#{$variable-prefix}table-striped-color: #{color-contrast($striped-bg)};
        --#{$variable-prefix}table-active-bg: #{$active-bg};
        --#{$variable-prefix}table-active-color: #{color-contrast($active-bg)};
        --#{$variable-prefix}table-hover-bg: #{$hover-bg};
        --#{$variable-prefix}table-hover-color: #{color-contrast($hover-bg)};

        color: $color;
        border-color: mix($color, $background, percentage($table-border-factor));
    }
}
```

## Table borders

### Bordered tables

Add `.table-bordered` for borders on all sides of the table and cells.
```
<table class="table table-bordered">
    ...
</table>
```
[Border color utilities](https://github.com/AndrewSRea/My_Learning_Port/tree/main/Bootstrap/Utilities/Borders#border-color) can be added to change colors:
```
<table class="table table-bordered border-primary">
    ...
</table>
```

### Tables without borders

Add `.table-borderless` for a table without borders.
```
<table class="table table-borderless">
    ...
</table>
```
```
<table class="table table-dark table-borderless">
    ...
</table>
```

## Small tables

Add `.table-sm` to make any `.table` more compact by cutting all cell `padding` in half.
```
<table class="table table-sm">
    ...
</table>
```
```
<table class="table table-dark table-sm">
    ...
</table>
```

## Vertical alignment

Table cells of `<thead>` are always vertical aligned to the bottom. Table cells in `<tbody>` inherit their alignment from `<table>` and are aligned to the top by default. Use the [vertical align](https://github.com/AndrewSRea/My_Learning_Port/tree/main/Bootstrap/Utilities/Vertical_Alignment#vertical-alignment) classes to re-align where needed.
```
<table class="table table-sm table-dark">
    <div class="table-responsive">
        <table class="table align-middle">
            <thead>
                <tr>
                    ...
                </tr>
            </thead>
            <tbody>
                <tr>
                    ...
                </tr>
                <tr class="align-bottom">
                    ...
                </tr>
                <tr>
                    <td>...</td>
                    <td>...</td>
                    <td class="align-top">This cell is aligned to the top.</td>
                    <td>...</td>
                </tr>
            </tbody>
        </table>
    </div>
</table>
```

## Nesting

Border styles, active styles, and table variants are not inherited by nesting tables.
```
<table class="table table-striped">
    <thead>
        ...
    </thead>
    <tbody>
        ...
        <tr>
            <td colspan="4">
                <table class="table mb-0">
                    ...
                </table>
            </td>
        </tr>
        ...
    </tbody>
</table>
```

## How nesting works

To prevent *any* styles from leaking to nested tables, Bootstrap uses the child combinator (`>`) selector in its CSS. Since Bootstrap needs to target all the `td`s and `th`s in the `thead`, `tbody`, and  `tfoot`, Bootstrap's selector would look pretty long without it. As such, Bootstrap uses the rather odd looking `.table > :not(caption) > * > *` selector to target all `td`s and `th`s of the `.table`, but none of any potential nested tables.
Note that if you add `<tr>`s as direct children of a table, those `<tr>` will be wrapped in a `<tbody>` by default, thus making our selectors work as intended.

## Anatomy

### Table head

Similar to tables and dark tables, use the modifier classes `.table-light` or `.table-dark` to make `<thead>`s appear light or dark gray.
```
<table class="table">
    <thead class="table-light">
        ...
    </thead>
    <tbody>
        ...
    </tbody>
</table>
```
```
<table class="table">
    <thead class="table-dark">
        ...
    </thead>
    <tbody>
        ...
    </tbody>
</table>
```

### Table foot

```
<table class="table">
    <thead>
        ...
    </thead>
    <tbody>
        ...
    </tbody>
    <tfoot>
        ...
    </tfoot>
</table>
```

### Captions

A `<caption>` functions like a heading for a table. It helps users with screen readers to find a table and understand what it's about and decide if they want to read it.
```
<table class="table table-sm">
    <caption>List of users</caption>
    <thead>
        ...
    </thead>
    <tbody>
        ...
    </tbody>
</table>
```
You can also put the `<caption>` on the top of the table with `.caption-top`.
```
<table class="table caption-top">
    <caption>List of users</caption>
    <thead>
        <tr>
            <th scope="col">#</th>
            <th scope="col">First</th>
            <th scope="col">Last</th>
            <th scope="col">Handle</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
        </tr>
         <tr>
            <th scope="row">2</th>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
        </tr>
         <tr>
            <th scope="row">3</th>
            <td>Larry</td>
            <td>the Bird</td>
            <td>@twitter</td>
        </tr>
    </tbody>
</table>
```

## Responsive tables

Responsive tables allow tables to be scrolled horizontally with ease. Make any table responsive across all viewports by wrapping a `.table` with `.table-responsive`. Or, pick a maximum breakpoint with which to have a responsive table up to by using `.table-responsive{-sm|-md|-lg|-xl|-xxl}`.

<hr>

### :warning: Vertical clipping/truncation

Reponsive tables make use of `overflow-y: hidden`, which clips off any content that goes beyond the bottom or top edges of the table. In particular, this can clip off dropdown menus and other third-party widgets.

<hr>

### Always responsive

Across every breakpoint, use `.table-responsive` for horizontally scrolling tables.
```
<div class="table-responsive">
    <table class="table">
        ...
    </table>
</div>
```

### Breakpoint specific

Use `.table-responsive{-sm|-md|-lg|-xl|-xxl}` as needed to create responsive tables up to a particular breakpoint. From that breakpoint and up, the table will behave normally and not scroll horizontally.

**These tables may appear broken until their responsive styles apply at specific viewport widths.**
```
<div class="table-responsive">
    <table class="table">
        ...
    </table>
</div>

<div class="table-responsive-sm">
    <table class="table">
        ...
    </table>
</div>

<div class="table-responsive-md">
    <table class="table">
        ...
    </table>
</div>

<div class="table-responsive-lg">
    <table class="table">
        ...
    </table>
</div>

<div class="table-responsive-xl">
    <table class="table">
        ...
    </table>
</div>

<div class="table-responsive-xxl">
    <table class="table">
        ...
    </table>
</div>
```

## Sass

### Variables

```
$table-cell-padding-y:          .5rem;
$table-cell-padding-x:          .5rem;
$table-cell-padding-y-sm:       .25rem;
$table-cell-padding-x-sm:       .25rem;

$table-cell-vertical-align:     top;

$table-color:                   $body-color;
$table-bg:                      transparent;

$table-th-font-weight:          null;

$table-striped-color:           $table-color;
$table-striped-bg-factor:       .05;
$table-striped-bg:              rgba($black, $table-striped-bg-factor);

$table-active-color:            $table-color;
$table-active-bg-factor:        .1;
$table-active-bg:               rgba($black, $table-active-bg-factor);

$table-hover-color:             $table-color;
$table-hover-bg-factor:         .075;
$table-hover-bg:                rgba($black, $table-hover-bg-factor);

$table-border-factor:           .1;
$table-border-width:            $border-width;
$table-border-color:            $border-color;

$table-striped-order:           odd;

$table-group-separator-color:   currentColor;

$table-caption-color:           $text-muted;

$table-bg-scale:                -80%;
```

### Loop

```
$table-variants: (
    "primary":     shift-color($primary, $table-bg-scale),
    "secondary":   shift-color($secondary, $table-bg-scale),
    "success":     shift-color($success, $table-bg-scale),
    "info":        shift-color($info, $table-bg-scale),
    "warning":     shift-color($warning, $table-bg-scale),
    "danger":      shift-color($danger, $table-bg-scale),
    "light":       $light,
    "dark":        $dark,
);
```

### Customizing

* The factor variables (`$table-striped-bg-factor`, `$table-active-bg-factor` & `$table-hover-bg-factor`) are used to determine the contrast in table variants.
* Apart from the light & dark table variants, theme colors are lightened by the `$table-bg-level` variable.

<hr>

[[Previous page]](https://github.com/AndrewSRea/My_Learning_Port/tree/main/Bootstrap/Content/Images#images) - [[Top]](https://github.com/AndrewSRea/My_Learning_Port/tree/main/Bootstrap/Content/Tables#tables) - [[Next page]](https://github.com/AndrewSRea/My_Learning_Port/tree/main/Bootstrap/Content/Figures#figures)