# Bootstrap Content

## Reboot

Reboot, a collection of element-specific CSS changes in a single file, kickstart Bootstrap to provide an elegant, consistent, and simple baseline to build upon.

### Approach

Reboot builds upon Normalize, providing many HTML elements with somewhat opinionated styles using only element selectors. Additional styling is done only with classes. For example, we reboot some `<table>` styles for a simpler baseline and later provide `.table`, `.table-bordered`, and more.<br/>
Here are Bootstrap's guildelines and reasons for choosing what to override in Reboot:

* Update some browser default values to use `rem`s instead of `em`s for scalable component spacing.
* Avoid `margin-top`. Vertical margins can collapse, yielding unexpected results. More importantly though, a single direction of `margin` is a simpler mental model.
* For easier scaling across device sizes, block elements should use `rem`s for `margin`s.
* Keep declarations of `font`-related properties to a minimum, using `inherit` whenever possible.

### Page defaults

The `<html>` and `<body>` elements are updated to provide better page-wide defaults. More specifically:

* The `box-sizing` is globally set on every element--including `*::before` and `*::after`, to `border-box`. This ensures that the declared width of element is never exceeded due to padding or border.
  - No base `font-size` is declared on the `<html>`, but `16px` is assumed (the browser default). `font-size: 1rem` is applied on the `<body>` for easy responsive type-scaling via media queries while respecting user preferences and ensuring a more accessible approach. This browser default can be overridden by modifying the `$font-size-root` variable.
* The `<body>` also sets a global `font-family`, `font-weight`, `line-height`, and `color`. This is inherited later by some form elements to prevent font inconsistencies.
* For safety, the `<body>` has a declared `background-color`, defaulting to `#fff`.

### Native font stack

Bootstrap utilizes a "native font stack" or "system font stack" for optimum text rendering on every device and OS. These system fonts have been designed specifically with today's devices in mind, with improved rendering on screens, variable font support, and more. Read more about [native font stacks in this *Smashing Magazine* article](https://www.smashingmagazine.com/2015/11/using-system-ui-fonts-practical-guide/).
```
$font-family-sans-serif :
    // Safari for macOS and iOS (San Francisco)
    -apple-system,
    // Chrome < 56 for macOS (San Francisco)
    BlinkMacSystemFont,
    // Windows
    "Segoe UI",
    // Android
    Roboto,
    // Basic web fallback
    "Helvetica Neue", Arial,
    // Linux
    "Noto sans",
    "Liberation Sans",
    // Sans serif fallback
    sans-serif,
    // Emoji fonts
    "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji" !default;
```
Note that because the font stack includes emoji fonts, many common symbol/dingbat unicode characters will be rendered as multi-colored pictographs. Their appearance will vary, depending on the style used in the browser/platform's native emoji font, and they won't be affected by any CSS `color` styles.
This `font-family` is applied to the `<body>` and automatically inherited globally throughout Bootstrap. To switch the global `font-family`, update `$font-family-base` and recompile Bootstrap.

### Headings and paragraphs

All heading elements--e.g. `<h1>`--and `<p>` are reset to have their `margin-top` removed. Headings have `margin-bottom: .5rem` added and paragraphs `margin-bottom: 1rem` for easy spacing.

| Heading | Example |
| --- | --- |
| `<h1></h1>` | <h1>h1. Bootstrap heading</h1> |
| `<h2></h2>` | <h2>h2. Bootstrap heading</h2> |
| `<h3></h3>` | <h3>h3. Bootstrap heading</h3> |
| `<h4></h4>` | <h4>h4. Bootstrap heading</h4> |
| `<h5></h5>` | <h5>h5. Bootstrap heading</h5> |
| `<h6></h6>` | <h6>h6. Bootstrap heading</h6> |

### Lists

All lists--`<ul>`, `<ol>`, and `<dl>`--have their `margin-top` removed and a `margin-bottom: 1rem`. Nested lists have no `margin-bottom`. Reboot also resets the `padding-left` on `<ul>` and `<ol>` elements.

* Lorem ipsum dolor sit amet
* Consectetur adipiscing elit
* Integer molestie lorem at massa
* Facilisis in pretium nisl aliquet
* Nulla volutpat aliquam velit
  - Phasellus iaculis neque
  - Purus sodales ultricies
  - Vestibulum laoret porttitor sem
  - Ac tristique libero volutpat at
* Faucibus porta lacus fringilla vel
* Aenean sit amet erat nunc
* Eget porttitor lorem

1. Lorem ipsum dolor sit amet
2. Consectetur adipiscing elit
3. Integer molestie lorem at massa
4. Facilisis in pretium nisl aliquet
5. Nulla volutpat aliquam velit
6. Faucibus porta lacus fringilla vel
7. Aenean sit amet erat nunc
8. Eget porttitor lorem

For simpler styling, clear hierarchy, and better spacing, description lists have updated `margin`s. `<dd>`s reset `margin-left` to `0` and add `margin-bottom: .5rem`. `<dt>`s are **bolded**.

**Description lists**
A description list is perfect for defining terms.

**Euismod**
Vestibulum id ligula porta felis euismod semper eget lacinia odio sem.
Donec id elit non mi porta gravida at eget metus.

**Malesuada porta**
Etiam porta sem malesuada magna mollis euismod.

### Inline code

Wrap inline snippets of code with `<code>`. Be sure to escape HTML angle brackets.
```
For example, <code>&lt;section&gt;</code> should be wrapped as inline.
```

### Code blocks

Use `<pre>`s for multiple lines of code. Once again, be sure to escape any angle brackets in the code for proper rendering. The `<pre>` element is reset to remove its `margin-top` and use `rem` units for its `margin-bottom`.
```
<pre><code>&lt;p&gt;Sample text here...&lt;/p&gt;
&lt;p&gt;And another line of sample text here...&lt;/p&gt;
</code></pre>
```

### Variables

For indicating variables, use the `<var>` tag.
```
<var>y</var> = <var>m</var><var>x</var> + <var>b</var>
```

### User input

Use the `<kbd>` to indicate input that is typically entered via keyboard.
```
To switch directories, type <kbd>cd</kbd> followed by the name of the directory.<br>
To edit settings, press <kbd><kbd>ctrl</kbd> + <kbd>,</kbd></kbd>
```

### Sample output

For indicating sample output from a program, use the `<samp>` tag.
```
<samp>This text is meant to be treated as sample output from a computer program.</samp>
```

### Tables

Tables are slightly adjusted to style `<caption>`s, collapse borders, and ensure consistent `text-align` throughout. Additional changes for borders, padding, and more come with [the `.table` class](#tables).

| Table heading | Table heading | Table heading | Table heading |
| --- | --- | --- | --- |
| Table cell | Table cell | Table cell | Table cell |
| Table cell | Table cell | Table cell | Table cell |
| Table cell | Table cell | Table cell | Table cell |
###### This is an example table, and this is its caption to describe the contents.

### Forms

Various form elements have been rebooted for simpler base styles. Here are some of the most notable changes:

* `<fieldset>`s have no borders, padding, or margin so they can be easily used as wrappers for individual inputs or groups of inputs.
* `<legend>`s, like fieldsets, have also been restyled to be displayed as a heading of sorts.
* `<label>`s are set to `display: inline-block` to allow `margin` to be applied.
* `<input>`s, `<select>`s, `<textarea>`s, and `<button>`s are mostly addressed by Normalize, but Reboot removes their `margin` and sets `line-height: inherit`, too.
* `<textarea>`s are modified to only be resizable vertically as horizontal resizing often "breaks" page layout.
* `<button>`s and `<input>` button elements have `cursor: pointer` when `:not(:disabled)`.

These changes, and more, are demonstrated below. <!-- Create a link to a file showing the form creations -->


##### :warning: Date & color input support

Keep in mind date inputs are [not fully supported](https://caniuse.com/input-datetime) by all browsers, namely Safari.

#### Pointers on buttons

Reboot includes an enhancement for `role="button"` to change the default cursor to `pointer`. Add this attribute to elements to help indicate elements are interactive. This role isn't necessary for `<button>` elements, which get their own `cursor` change.
```
<span role="button" tabindex="0">Non-button element button</span>
```

### Misc elements

#### Address

The `<address>` element is updated to reset the browser default `font-style` from `italic` to `normal`. `line-height` is also now inherited, and `margin-bottom: 1rem` has been added. `<address>`s are for presenting contact information for the nearest ancestor (or an entire body of work). Preserve formatting by ending lines with `<br>`.

<address>
  <strong>Twitter, Inc.</strong>
  <br>
  1355 Market St, Suite 900
  <br>
  San Francisco, CA 94103
  <br>
  <abbr title="Phone">P:</abbr>(123) 456-7890
  <br>
</address>
<address>
  <strong>Full Name</strong>
  <br>
  <a href="mailto:first.last@example.com">first.last@example.com</a>
</address>

#### Blockquote

The default `margin` on blockquotes is `1em 40px`, so we reset that to `0 0 1rem` for something more consistent with other elements.

<blockquote>
  <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.
  </p>
</blockquote>
<p>
  Someone famous in <cite title="Source Title">Source Title</cite>
</p>

#### Inline elements

The `<abbr>` element receives basic styling to make it stand out amongst paragraph text.

<p>Nulla <abbr title="attribute">attr</abbr> vitae elit libero, a pharetra augue.</p>

#### Summary

The default `cursor` on summary is `text`, so we reset that to `pointer` to convey that the element can be interacted with by clicking on it.

<details>
  <summary>Some details</summary>
  <p>More info about the details.</p>
</details>
<details open>
  <summary>Even more details</summary>
  <p>Here are even more details about the details.</p>
</details>

### HTML5 `[hidden]` attribute

HTML5 adds [a new global attribute named \[hidden\]](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/hidden), which is styled as `display: none` by default. Borrowing an idea from [PureCSS](https://purecss.io/), Bootstrap improves upon this default by making `[hidden] { display: none !important; }` to help prevent its `display` from getting accidentally overridden.
```
<input type="text" hidden>
```

##### :warning: jQuery incompatibility

`[hidden]` is not compatible with jQuery's `$(...).hide()` and `$(...).show()` methods. Therefore, Bootstrap doesn't currently especially endorse `[hidden]` over other techniques for managing the `display` of elements.

To merely toggle the visibility of an element, meaning its `display` is not modified and the element can still affect the flow of the document, use [the `.invisible` class]() instead. <!-- link to Utilities folder / Visibility -->

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

Stylized implementation of HTML's `<abbr>` element for abbreviations and acronyms to show the expanded veersion on hover. Abbreviations have a default underline and gain a help cursor to provide additional context on hover and to users of assistive technologies.
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
            <li>Ac tristique libeero volutpat at</li>
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

Align teerms and description horizontally by using Bootstrap's grid system's predefined classes (or semantic mixins). For longer terms, you can optionally add a `.text-truncate` class to truncate the text with an ellipsis.
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
    <dd claass="col-sm-9">
        <dl class="row">
            <dt class="col-sm-4">Nesting definition list</dt>
            <dd class="col-sm-8">Aenean posuere, tortor sed cursus feugiat, nunc augue blandit nunc.</dd>
        </dl>
    </dd>
</dl>
```

### Responsive font sizes

In Bootstrap 5, they have enabled responsive font sizes by default, allowing text to scale more naturally across device and viewport sizes. Have a look at the [RFS page](https://getbootstrap.com/docs/5.0/getting-started/rfs/) to find out how this works.