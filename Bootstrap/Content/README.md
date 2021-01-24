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

The default