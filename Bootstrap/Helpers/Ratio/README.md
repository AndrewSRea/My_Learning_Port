# Ratios

Use generated pseudo elements to make an element maintain the aspect ratio of your choosing. Perfect for responsively handlling video or slideshow embeds based on the width of the parent.

## About

Use the ratio helper to manage the aspect ratios of external content like `<iframe>`s, `<embed>`s, `<video>`s, and `<object>`s. These helpers also can be used on any standard HTML child element (e.g., a `<div>` or `<img>`). Styles are applied from the parent `.ratio` class directly to the child.

Aspect ratios are declared in a Sass map and included in each class via CSS variable, which also allows [custom aspect ratios](#custom-ratios).

<hr>

**Pro-tip!** You don't need `frameborder="0"` on your `<iframe>`s as Bootstrap overrides that for you in [Reboot](https://github.com/AndrewSRea/My_Learning_Port/tree/main/Bootstrap/Content/Reboot#reboot).

<hr>

## Example

Wrap any embed, like an `<iframe>`, in a parent element with `.ratio` and an aspect ratio class. The immediate child element is automatically sized thanks to Bootstrap's universal selector `.ratio > *`.
```
<div class="ratio ratio-16x9">
    <iframe src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0" title="YouTube video" allowfullscreen></iframe>
</div>
```
(This code example can be found in my accompanying [ratio-examples.html](https://github.com/AndrewSRea/My_Learning_Port/blob/main/Bootstrap/Helpers/Ratio/ratio-examples.html) file.)

## Aspect ratios

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
(And this code example can be found in my accompanying [ratio-examples-2.html](https://github.com/AndrewSRea/My_Learning_Port/blob/main/Bootstrap/Helpers/Ratio/ratio-examples-2.html) file.)

## Custom ratios

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
(And this code example can also be found in my accompanying [ratio-examples-2.html](https://github.com/AndrewSRea/My_Learning_Port/blob/main/Bootstrap/Helpers/Ratio/ratio-examples-2.html) file.)

<hr>

:exclamation: As I have not yet downloaded the npm package for Sass to my Bootstrap folder, the HTML and CSS code above is more than likely not going to work in my "helpers-examples-2.html" file.

<hr>

## Sass map

Within `_variables.scss`, you can change the aspect ratios you want to use. Here is Bootstrap's default `$ratio-aspect-ratios` map. Modify the map as you like and recompile your Sass to put them to use.
```
$aspect-ratios: (
    "1x1": 100%,
    "4x3": calc(3 / 4 * 100%),
    "16x9": calc(9 / 16 * 100%),
    "21x9": calc(9 / 21 * 100%)
);
```

<hr>

[[Previous page]](https://github.com/AndrewSRea/My_Learning_Port/tree/main/Bootstrap/Helpers/Colored_Links#colored-links) - [[Top]](https://github.com/AndrewSRea/My_Learning_Port/tree/main/Bootstrap/Helpers/Ratio#ratios) - [[Next page]](https://github.com/AndrewSRea/My_Learning_Port/tree/main/Bootstrap/Helpers/Position#position)