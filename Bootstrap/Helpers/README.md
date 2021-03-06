# Helpers

Each of the subsections in this **Helpers** section are small enough to fit inside this one README, and are listed in the table of contents below:

* [Clearfix](#clearfix)
* [Colored links](#colored-links)
* [Ratio](#ratios)
* [Position]()
* [Visually hidden]()
* [Stretched link]()
* [Text truncation]()

## Clearfix

Quickly and easily clear floated content within a container by adding a clearfix utility.

Easily clear `float`s by adding `.clearfix` **to the parent element**. Can also be used as a mixin.

Use in HTML:
```
<div class="clearfix">...</div>
```
The mixin source code:
```
@mixin clearfix() {
    &::after {
        display: block;
        clear: both;
        content: "";
    }
}
```
Use the mixin in SCSS:
```
.element {
    @include clearfix;
}
```
The following example shows how the clearfix can be used. Without the clearfix, the wrapping div wouold not span around the buttons, which would cause a brokn layout.
```
<div class="bg-info clearfix">
    <button type="button" class="btn btn-secondary float-start">Example Button floated left</button>
    <button type="button" class="btn btn-secondary float-end">Example Button floated right</button>
</div>
```

## Colored links

Colored links with hover states.

You can use the `.link-*` classes to colorize links. Unlike the [`.text-*` classes](), <!-- link to Utilities folder / Colors --> these classes have a `:hover` and `:focus` state.
```
<a href="#" class="link-primary">Primary link</a>
<a href="#" class="link-secondary">Secondary link</a>
<a href="#" class="link-success">Success link</a>
<a href="#" class="link-danger">Danger link</a>
<a href="#" class="link-warning">Warning link</a>
<a href="#" class="link-info">Info link</a>
<a href="#" class="link-light">Light link</a>
<a href="#" class="link-dark">Dark link</a>
```

<hr>

:exclamation: Some of the link styles use a relatively light foreground color, and should only be used on a dark background in order to have sufficient contrast.

<hr>

## Ratios

Use generated pseudo elements to make an element maintain the aspect ratio of your choosing. Perfect for responsively handlling video or slideshow embeds based on the width of the parent.

### About

Use the ratio helper to manage the aspect ratios of external content like `<iframe>`s, `<embed>`s, `<video>`s, and `<object>`s. These helpers also can be used on any standard HTML child element (e.g., a `<div>` or `<img>`). Styles are applied from the parent `.ratio` class directly to the child.

Aspect ratios are declared in a Sass map and included in each class via CSS variable, which also allows [custom aspect ratios](#custom-ratios).

<hr>

**Pro-tip!** You don't need `frameborder="0"` on your `<iframe>`s as Bootstrap overrides that for you in [Reboot](https://github.com/AndrewSRea/My_Learning_Port/tree/main/Bootstrap/Content#reboot).

<hr>

### Example

Wrap any embed, like an `<iframe>`, in a parent element with `.ratio` and an aspect ratio class. The immediate child element is automatically sized thanks to Bootstrap's universal selector `.ratio > *`.
```
<div class="ratio ratio-16x9">
    <iframe src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0" title="YouTube video" allowfullscreen></iframe>
</div>
```

### Aspect ratios

Aspect ratios can be customized with modifier classes. By default, the following ratio classes are provided:
```
<div class="ratio ratio-1x1">
    <div>1x1</div>
</div>
<div class="ratio ratio-4x3">
    <div>4x3</div>
</div>
<div class="ratio ratio-16x9">
    <div>16x9</div>
</div>
<div class="ratio ratio-21x9">
    <div>21x9</div>
</div>
```

### Custom ratios

Each `.ratio-*` class includes a CSS custom property (or CSS variable) in the selector. You can override this CSS variable to create custom aspect ratios on the fly with some quick math on your part.

For example, to create a 2x1 aspect ratio, set `--bs-aspect-ratio: 50%` on the `.ratio`.
```
<div class="ratio" style="--bs-aspect-ratio: 50%;">
    <div>2x1</div>
</div>
```
This CSS variable makes it easy to modify the aspect ratio across breakpoints. The following is 4x3 to start, but changes to a custom 2x1 at the medium breakpoint.
```
.ratio-4x3 {
    @include media-breakpoint-up(md) {
        --bs-aspect-ratio: 50%;   // 2x1
    }
}
```
```
<div class="ratio ratio-4x3">
    <div>4x3, then 2x1</div>
</div>
```

<hr>

:exclamation: As I have not yet downloaded the npm package for Sass to my Bootstrap folder, the HTML and CSS code above is more than likely not going to work in my "helpers-examples-2.html` file.

<hr>

### Sass map

Within `_variables.scss`, you can change the aspect ratios you want to use. Here is Bootstrap's default `$ratio-aspect-ratios` map. Modify the map as you like and recompile your Sass to put them to use.
```
$aspect-ratios: (
    "1x1": 100%,
    "4x3": calc(3 / 4 * 100%),
    "16x9": calc(9 / 16 * 100%),
    "21x9": calc(9 / 21 * 100%)
);
```

