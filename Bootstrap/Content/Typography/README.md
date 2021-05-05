# Typography

Documentation and examples for Bootstrap typography, including global settings, headings, body text, lists, and more.

## Global settings

Bootstrap sets basic global display, typography, and link styles. When more control is needed, check out the [textual utility classes](https://github.com/AndrewSRea/My_Learning_Port/tree/main/Bootstrap/Utilities/Text#text).

* Use a [native font stack](https://github.com/AndrewSRea/My_Learning_Port/tree/main/Bootstrap/Content/Reboot#native-font-stack) that selects the best `font-family` for each OS and device.
* For a more inclusive and accessible type scale, Bootstrap uses the browser's default root `font-size` (typically 16px) so visitors can customize their browser defaults as needed.
* Use the `$font-family-base`, `$font-size-base`, and `$line-height-base` attributes as our typographic base applied to the `<body>`.
* Set the global link color via `$link-color`.
* Use `$body-bg` to set a `background-color` on the `<body>` (`#fff` by default).

These styles can be found within `_reboot.scss`, and the global variables are defined in `_variables.scss`. Make sure to set `$font-size-base` in `rem`.

## Headings

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

### Customizing headings

Use the included utility classes to recreate the small secondary heading text from Bootstrap 3.
```
<h3>
    Fancy display heading
    <small class="text-muted">With faded secondary text</small>
</h3>
```

## Display headings

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

## Lead

Make a paragraph stand out by adding `.lead`.
```
<p class="lead">
    Vivamus sagittis lacus vel augue laoreet rutum faucibus dolor auctor. Duis mollis, est non commodo luctus.
</p>
```

## Inline text elements

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

<hr>

### :attention: Side note

From my studies on HTML5, I know enough to remember that the HTML tags `<strong>` and `<em>` should be used instead of `<b>` and `<i>`, respectively, because `<strong>` and `<em>` are vital elements in creating a more accessible user experience, especially in regards to screen readers.

<hr>

## Text utilities

Change text alignment, transform, style, weight, line-height, decoration, and color with Bootstrap's [text utilities](https://github.com/AndrewSRea/My_Learning_Port/tree/main/Bootstrap/Utilities/Text#text) and [color utilities](https://github.com/AndrewSRea/My_Learning_Port/tree/main/Bootstrap/Utilities/Colors#colors).

## Abbreviations

Stylized implementation of HTML's `<abbr>` element for abbreviations and acronyms to show the expanded version on hover. Abbreviations have a default underline and gain a help cursor to provide additional context on hover and to users of assistive technologies.

Add `.initialism` to an abbreviation for a slightly smaller font-size.
```
<p><abbr title="attribute">attr</attr></p>
<p><abbr title=HyperText Markup Language" class="initialism">HTML</abbr></p>
```

## Blockquotes

For quoting blocks of content from another source within tour document. Wrap `<blockquote class="blockquote">` around any HTML as the quote.
```
<blockquote class="blockquote">
    <p>A well-known quote, contained in a blockquote element.</p>
</blockquote>
```

### Naming a source

The HTML spec requires that blockquote attribution be placed outisde the `<blockquote>`. When providing attribution, wrap your `<blockquote>` in a `<figure>` and use a `<figcaption>` or a block level element (e.g., `<p>`) with the `.blockquote-footer` class. Be sure to wrap the name of the source work in `<cite>` as well.
```
<figure>
    <blockquote class="blockquote">
        <p>A well-known quote, contained in a blockquote element.</p>
    </blockquote>
    <figcaption class="blockquote-footer">
        Someone famous in <cite title="Source Title">Source Title</cite>
    </figcaption>
</figure>
```

### Alignment

Use text utilities as needed to change the alignment of your blockquote.
```
<figure class="text-center">
    <blockquote class="blockquote">
        <p>A well-known quote, contained in a blockquote element.</p>
    </blockquote>
    <figcaption class="blockquote-footer">
        Someone famous in <cite title="Source Title">Source Title</cite>
    </figcaption>
</figure>
```
```
<figure class="text-end>
    <blockquote class="blockquote">
        <p>A well-known quote, contained in a blockquote element.</p>
    </blockquote>
    <figcaption class="blockquote-footer">
        Someone famous in <cite title="Source Title">Source Title</cite>
    </figcaption>
</figure>
```

## Lists

### Unstyled

Remove the default `list-style` and left margin on list items (immediate children only). **This only applies to immediate children list items**, meaning you will need to add the class for any nested lists as well.
```
<ul class="list-unstyled">
    <li>This is a list.</li>
    <li>It appear completely unstyled.</li>
    <li>Structurally, it's still a list.</li>
    <li>However, this style only applies to immediate child elements.</li>
    <li>Nested lists:
        <ul>
            <li>are unaffected by this style</li>
            <li>will still show a bullet</li>
            <li>and have appropriate left margin</li>
        </ul>
    </li>
    <li>This may still come in handy in some situations.</li>
</ul>
```

### Inline

Remove a list's bullets and apply some light `margin` with a combination of two classes, `.list-inline` and `.list-inline-item`.
```
<ul class="list-inline">
    <li class="list-inline-item">This is a list item.</li>
    <li class="list-inline-item">And another one.</li>
    <li class="list-inline-item">But they're displayed inline.</li>
</ul>
```

### Description list alignment

Align terms and description horizontally by using Bootstrap's grid system's predefined classes (or semantic mixins). For longer terms, you can optionally add a `.text-truncate` class to truncate the text with an ellipsis.
```
<dl class="row">
    <dt class="col-sm-3">Description lists</dt>
    <dd class="col-sm-9">A description list is perfect  for defining terms.</dd>

    <dt class="col-sm-3">Term</dt>
    <dd class="col-sm-9">
        <p>Definition for the term.</p>
        <p>And some more placeholder definition text.</p>
    </dd>

    <dt class="col-sm-3">Another term</dt>
    <dd class="col-sm-9">This definition is short, so no extra paragraphs or anything.</dd>

    <dt class="col-sm-3 text-truncate">Truncated term is truncated.</dt>
    <dd class="col-sm-9">This can be useful when space is tight. Adds an ellipsis at the end.</dd>

    <dt class="col-sm-3">Nesting</dt>
    <dd class="col-sm-9">
        <dl class="row">
            <dt class="col-sm-4">Nesting definition list</dt>
            <dd class="col-sm-8">I heard you like definition lists. Let me put a definition list inside your definition list.</dd>
        </dl>
    </dd>
</dl>
```

## Responsive font sizes

In Bootstrap 5, they have enabled responsive font sizes by default, allowing text to scale more naturally across device and viewport sizes. Have a look at the [RFS page](https://github.com/AndrewSRea/My_Learning_Port/tree/main/Bootstrap/Getting_Started/RFS#rfs) to find out how this works.

## Sass

### Variables

Headings have some dedicated variables for sizing and spacing.
```
$headings-margin-bottom:     $spacer / 2;
$headings-font-family:       null;
$headings-font-style:        null;
$headings-font-weight:       500;
$headings-line-height:       1.2;
$headings-color:             null;
```
Miscellaneous typography elements covered here and in [Reboot](https://github.com/AndrewSRea/My_Learning_Port/tree/main/Bootstrap/Content/Reboot#reboot) also have dedicated variables.
```
$lead-font-size:                  $font-size-base * 1.25;
$lead-font-weight:                300;

$small-font-size:                 .875em;

$sub-sup-font-size:               .75em;

$text-muted:                      $gray-600;

$initialism-font-size:            $small-font-size;

$blockquote-margin-y:             $spacer;
$blockquote-font-size:            $font-size-base * 1.25;
$blockquote-footer-color:         $gray-600
$blockquote-footer-font-size:     $small-font-size;

$hr-margin-y:                     $spacer;
$hr-color:                        inherit;
$hr-height:                       $border-width;
$hr-opacity:                      .25;

$legend-margin-bottom:            .5rem;
$legend-font-size:                1.5rem;
$legend-font-weight:              null;

$mark-padding:                    .2em;

$dt-font-weight:                  $font-weight-bold;

$nested-kbd-font-weight:          $font-weight-bold;

$list-inline-padding:             .5rem;

$mark-bg:                         #fcf8e3;
```

### Mixins

There are no dedicated mixins for typography, but Bootstrap does use [Responsive Font Sizing (RFS)](https://github.com/AndrewSRea/My_Learning_Port/tree/main/Bootstrap/Getting_Started/RFS#rfs).

<hr>

[[Previous page]](https://github.com/AndrewSRea/My_Learning_Port/tree/main/Bootstrap/Content/Reboot#reboot) - [[Top]](https://github.com/AndrewSRea/My_Learning_Port/tree/main/Bootstrap/Content/Typography#typography) - [[Next page]](https://github.com/AndrewSRea/My_Learning_Port/tree/main/Bootstrap/Content/Images#images)