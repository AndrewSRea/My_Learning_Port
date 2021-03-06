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