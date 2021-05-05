# Images

Documentation and examples for opting images into responsive behavior (so they neve become larger than their parent elements) and add lightweight styles to them--all via classes.

## Reponsive images

Images in Bootstrap are made responsive with `.img-fluid`. This applies `max-width: 100%;` and `height: auto;` to the image so that it scales with the parent element.
```
<img src="..." class="img-fluid" alt="...">
```

## Image thumbnails

In addition to Bootstrap's [border-radius utilities](https://github.com/AndrewSRea/My_Learning_Port/tree/main/Bootstrap/Utilities/Borders#borders), you can use `.img-thumbnail` to give an image a rounded 1px border appearance.
```
<img src="..." class="img-thumbnail" alt="...">
```

## Aligning images

Align images with the [helper float classes](https://github.com/AndrewSRea/My_Learning_Port/tree/main/Bootstrap/Utilities/Float#float) or [text alignment classes](https://github.com/AndrewSRea/My_Learning_Port/tree/main/Bootstrap/Utilities/Text#text-alignment). `block`-level images can be centered using [the `.mx-auto` margin utility class](https://github.com/AndrewSRea/My_Learning_Port/tree/main/Bootstrap/Utilities/Spacing#horizontal-centering).
```
<img src="..." class="rounded float-start" alt="...">
<img src="..." class="rounded float-end" alt="...">
```
```
<img src="..." class="rounded mx-auto d-block" alt="...">
```
```
<div class="text-center">
    <img src="..." class="rounded" alt="...">
</div>
```

## Picture

If yiou are using the `<picture>` element to specify multiple `<source>` elements for a specific `<img>`, make sure to add the `.img-*` classes to the `<img>` and not to the `<picture>` tag.
```
<picture>
    <source srcset="..." type="image/svg+xml">
    <img src="..." class="img-fluid img-thumbnail" alt="...">
</picture>
```

## Sass

### Variables

Variables are available for image thumbnails.
```
$thumbnail-padding:           .25rem;
$thumbnail-bg:                $border-bg;
$thumbnail-border-width:      $border-width;
$thumbnail-border-color:      $gray-300;
$thumbnail-border-radius:     $border-radius;
$thumbnail-box-shadow:        $box-shadow-sm;
```

<hr>

[[Previous page]](https://github.com/AndrewSRea/My_Learning_Port/tree/main/Bootstrap/Content/Typography#typography) - [[Top]](https://github.com/AndrewSRea/My_Learning_Port/tree/main/Bootstrap/Content/Images#images) - [[Next page]]()