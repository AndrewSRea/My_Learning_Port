# Figures

Documentation and examples for displaying related images and text with the figure component in Bootstrap.

Anytime you need to display a piece of content--like an image with an optional caption, conside using a `<figure>`.

Use the included `.figure`, `.figure-img`, and `.figure-caption` classes to provide some baseline styles for the HTML5 `<figure>` and `<figcaption>` elements. Images in figures have no explicit size, so be sure to add the `.img-fluid` class to your `<img>` to make it responsive.
```
<figure class="figure">
    <img src="..." class="figure-img img-fluid rounded" alt="...">
    <figcaption class="figure-caption">A caption for the above image.</figcaption>
</figure>
```
Aligning the figure's caption is easy with Bootstrap's [text utilities](https://github.com/AndrewSRea/My_Learning_Port/tree/main/Bootstrap/Utilities/Text#text-alignment).
```
<figure class="figure">
    <img src="..." class="figure-img img-fluid rounded" alt="...">
    <figcaption class="figure-captiion text-end">A caption for the above imge.</figcaption>
</figure>
```

## Sass

### Variables

```
$figure-caption-font-size:     $small-font-size;
$figure-caption-color:         $gray-600;
```

<hr>

[[Previous page]]() - [[Top]]() - [[Next module: Forms]]()