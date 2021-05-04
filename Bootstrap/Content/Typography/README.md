## Typography

Documentation and examples for Bootstrap typography, including global settings, headings, body text, lists, and more.

### Global settings

Bootstrap sets basic global display, typography, and link styles. When more control is needed, check out the [textual utility classes](). <!-- link to Utilities foldes / Text -->

* Use a [native font stack](#native-font-stack) that selects the best `font-family` for each OS and device.
* For a more inclusive and accessible type scale, Bootstrap uses the browser's default root `font-size` (typically 16px) so visitors can customize their browser defaults as needed.
* Use the `$font-family-base`, `$font-size-base`, and `$line-height-base` attributes as our typographic base applied to the `<body>`.
* Set the global link color via `$link-color`.
* Use `$body-bg` to set a `background-color` on the `<body>` (`#fff` by default).

These styles can be found within `_reboot.scss`, and the global variables are defined in `_variables.scss`. Make sure to set `$font-size-base` in `rem`.

### Headings

All HTML headings, `<h1>` through `<h6>`, are available.

| Heading | Example |
| --- | --- |
| `<h1></h1>` | <h1>h1. Bootstrap heading</h1> |
| `<h2></h2>` | <h2>h2. Bootstrap heading</h2> |
| `<h3></h3>` | <h3>h3. Bootstrap heading</h3> |
| `<h4></h4>` | <h4>h4. Bootstrap heading</h4> |
| `<h5></h5>` | <h5>h5. Bootstrap heading</h5> |
| `<h6></h6>` | <h6>h6. Bootstrap heading</h6> |
```
<h1>h1. Bootstrap heading</h1>
<h2>h2. Bootstrap heading</h2>
<h3>h3. Bootstrap heading</h3>
<h4>h4. Bootstrap heading</h4>
<h5>h5. Bootstrap heading</h5>
<h6>h6. Bootstrap heading</h6>
```
`.h1` though `.h6` classes are also available, for when you want to match the font styling of a heading but cannot use the associated HTML element.
```
<p class="h1">h1. Bootstrap heading</p>
<p class="h2">h2. Bootstrap heading</p>
<p class="h3">h3. Bootstrap heading</p>
<p class="h4">h4. Bootstrap heading</p>
<p class="h5">h5. Bootstrap heading</p>
<p class="h6">h6. Bootstrap heading</p>
```

#### Customizing headings

Use the included utility classes to recreate the small secondary heading text from Bootstrap 3.
```
<h3>
    Fancy display heading
    <small class="text-muted">With faded secondary text</small>
</h3>
```

### Display headings

Traditional heading elements are designed to work best in the meat of your page content. When you need a heading to stand out, consider using a **display heading**--a larger, slightly more opinionated heading style.
```
<h1 class="display-1">Display 1</h1>
<h1 class="display-2">Display 2</h1>
<h1 class="display-3">Display 3</h1>
<h1 class="display-4">Display 4</h1>
<h1 class="display-5">Display 5</h1>
<h1 class="display-6">Display 6</h1>
```
Display headings are configured via the `$display-font-sizes` Sass map and two variables, `$display-font-weight` and `$display-line-height`.
```
$display-font-sizes: (
    1: 5rem,
    2: 4.5rem,
    3: 4rem,
    4: 3.5rem,
    5: 3rem,
    6: 2.5rem
);

$display-font-weight: 300;
$display-line-height: $headings-line-height;
```

### Lead

Make a paragraph stand out by adding `.lead`.
```
<p class="lead">
    Vivamus sagittis lacus vel augue laoreet rutum faucibus dolor auctor. Duis mollis, est non commodo luctus.
</p>
```

### Inline text elements

Styling for common inline HTML5 elements.
```
<p>You can use the mark tag to <mark>highlight</mark> text.</p>
<p><del>This line of text is meant to be treated as deleted text.</del></p>
<p><s>This line of text is meant to be treated as no longer accurate.</s></p>
<p><ins>This line of text is meant to be treated as an addition to the document.</ins></p>
<p><u>This line of text will render as underlined.</u></p>
<p><small>This line of text is meant to be treated as fine print.</small></p>
<p><strong>This line of tex is rendered as bold text.</strong></p>
<p><em>This line of text is rendered as italicized text.</em></p>
```
Beware that those tags should be used for semantic purpose:

* `<mark>` represents text which is marked or highlighted for reference or notation purposes.
* `<small>` represents side-comments and small print, like copyright and legal text.
* `<s>` represents elements which are no longer relevant or no longer accurate.
* `<u>` represents a span of inline text which should be rendered in a way that indicates that it has a non-textual annotation.

If you want to style your text, you should use the following classes instead:

* `.mark` will apply the same styles as `<mark>`.
* `.small` will apply the same styles as `<small>`.
* `.text-decoration-underline` will apply the same styles as `<u>`.
* `.text-decoration-line-through` will apply the same styles as `<s>`.

While not shown above, feel free to use `<b>` and `<i>` in HTML5. `<b>` is meant to highlight words or phrases without conveying addtional importance, while `<i>` is mostly for voice, technical terms, etc.

#### Side note

From my studies on HTML5, I know enough to remember that the HTML tags `<strong>` and `<em>` should be used instead of `<b>` and `<i>`, respectively, because `<strong>` and `<em>` are vital elements in creating a more accessible user experience, especially in regards to screen readers.

### Text utilities

Change text alignment, transform, style, weight, line-height, decoration, and color with Bootstrap's [text utilities]() and [color utilities](). <!-- link to Utilities folder, and the "Text" and "Colors" sections -->

### Abbreviations

Stylized implementation of HTML's `<abbr>` element for abbreviations and acronyms to show the expanded version on hover. Abbreviations have a default underline and gain a help cursor to provide additional context on hover and to users of assistive technologies.
Add `.initialism` to an abbreviation for a slightly smaller font-size.
```
<p><abbr title="attribute">attr</attr></p>
<p><abbr title=HyperText Markup Language" class="initialism">HTML</abbr></p>
```

### Blockquotes

For quoting blocks of content from another source within tour document. Wrap `<blockquote class="blockquote">` around any HTML as the quote.
```
<blockquote class="blockquote">
    <p>Lorem ipsum dolor si amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
</blockquote>
```

#### Naming a source

The HTML spec requires that blockquote attribution be placed outisde the `<blockquote>`. When providing attribution, wrap your `<blockquote>` in a `<figure>` and use a `<figcaption>` or a block level element (e.g., `<p>`) with the `.blockquote-footer` class. Be sure to wrap the name of the source work in `<cite>` as well.
```
<figure>
    <blockquote class="blockquote">
        <p>Lorem ipsum dolor si amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
    </blockquote>
    <figcaption class="blockquote-footer">
        Someone famous in <cite title="Source Title">Source Title</cite>
    </figcaption>
</figure>
```

#### Alignment

Use text utilities as needed to change the alignment of your blockquote.
```
<figure class="text-center">
    <blockquote class="blockquote">
        <p>Lorem ipsum dolor si amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
    </blockquote>
    <figcaption class="blockquote-footer">
        Someone famous in <cite title="Source Title">Source Title</cite>
    </figcaption>
</figure>
```
```
<figure class="text-end>
    <blockquote class="blockquote">
        <p>Lorem ipsum dolor si amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
    </blockquote>
    <figcaption class="blockquote-footer">
        Someone famous in <cite title="Source Title">Source Title</cite>
    </figcaption>
</figure>
```

### Lists

#### Unstyled

Remove the default `list-style` and left margin on list items (immediate children only). **This only applies to immediate children list items**, meaning you will need to add the class for any nested lists as well.
```
<ul class="list-unstyled">
    <li>Lorem ipsum dolor sit amet</li>
    <li>Consectetur adipiscing elit</li>
    <li>Integer molestie lorem at massa</li>
    <li>Facilisis in pretium misl aliquet</li>
        <ul>
            <li>Phasellus iaculis neque</li>
            <li>Purus sodales ultricies</li>
            <li>Vestibulum laoreet porttitor sem</li>
            <li>Ac tristique libero volutpat at</li>
        </ul>
    </li>
    <li>Faucibus porta lacus fringilla vel</li>
    <li>Aenean sit amet erat nunc</li>
    <li>Eget porttitor lorem</li>
</ul>
```

#### Inline

Remove a list's bullets and apply some light `margin` with a combination of two classes, `.list-inline` and `.list-inline-item`.
```
<ul class="list-inline">
    <li class="list-inline-item">Lorem ipsum</li>
    <li class="list-inline-item">Phasellus iaculis</li>
    <li class="list-inline-item">Nulla volutpat</li>
</ul>
```

#### Description list alignment

Align terms and description horizontally by using Bootstrap's grid system's predefined classes (or semantic mixins). For longer terms, you can optionally add a `.text-truncate` class to truncate the text with an ellipsis.
```
<dl class="row">
    <dt class="col-sm-3">Description lists</dt>
    <dd class="col-sm-9">A description list is perfect  for defining terms.</dd>

    <dt class="col-sm-3">Euismod</dt>
    <dd class="col-sm-9">
        <p>Vestibulum id ligula porta felis euismod semper eget lacinia odio sem nec elit.</p>
        <p>Donec id elit non mi porta gravida at eget metus.</p>
    </dd>

    <dt class="col-sm-3">Malesuada porta</dt>
    <dd class="col-sm-9">Etiam porta sem malesuada magna mollis euismod.</dd>

    <dt class="col-sm-3 text-truncate">Truncated term is truncated.</dt>
    <dd class="col-sm-9">Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.</dd>

    <dt class="col-sm-3">Nesting</dt>
    <dd class="col-sm-9">
        <dl class="row">
            <dt class="col-sm-4">Nesting definition list</dt>
            <dd class="col-sm-8">Aenean posuere, tortor sed cursus feugiat, nunc augue blandit nunc.</dd>
        </dl>
    </dd>
</dl>
```

### Responsive font sizes

In Bootstrap 5, they have enabled responsive font sizes by default, allowing text to scale more naturally across device and viewport sizes. Have a look at the [RFS page](https://getbootstrap.com/docs/5.0/getting-started/rfs/) to find out how this works.