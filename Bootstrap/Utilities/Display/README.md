# Display property

Quickly and responsively toggle the display value of components and more with Bootstrap's display utilities. Includes support for some of the more common values, as well as some extras for controlling display when printing.

## How it works

Change the value of the [`display` property](https://developer.mozilla.org/en-US/docs/Web/CSS/display) with Bootstrap's responsive display utility classes. Bootstrap purposely supports only a subset of all possible values for `display`. Classes can be combined for various effects as you need.

## Notation

Display utility classes that apply to all [breakpoints](https://github.com/AndrewSRea/My_Learning_Port/tree/main/Bootstrap/Layout#breakpoints), from `xs` to `xxl`, have no breakpoint abbreviation in them. This is because those classes are applied from `min-width: 0;` and up, and thus are not bound by a media query. The remaining breakpoints, however, do include a breakpoint abbreviation.

As such, the classes are named using the format:

* `.d-{value}` for `xs`.
* `.d-{breakpoint}-{value}` for `sm`, `md`, `lg`, `xl`, and `xxl`.

Where *value* is one of:

* `none`
* `inline`
* `inline-block`
* `block`
* `grid`
* `table`
* `table-cell`
* `table-row`
* `flex`
* `inline-flex`

The display values can be altered by changing the `$displays` variable and recompiling the SCSS.

The media queries affect screen widths with the given breakpoint *or larger*. For example, `.d-lg-none` sets `display: none;` on `lg`, `xl`, and `xxl` screens.

## Examples

```
<div class="d-inline p-2 bg-primary text-white">d-inline</div>
<div class="d-inline p-2 bg-dark text-white">d-inline</div>
```
```
<span class="d-block p-2 bg-primary text-white">d-block</span>
<span class="d-block p-2 bg-dark text-white">d-block</span>
```

## Hiding elements