# Text

Documentation and examples for common text utilities to control alignment, wrapping, weight, and more.

## Text alignment

Easily realign text to components with text alignment classes. For start, end, and center alignment, responsive classes are available that use the same viewport width breakpoints as the grid system.
```
<p class="text-start">Start aligned text on all viewport sizes.</p>
<p class="text-center">Center aligned text on all viewport sizes.</p>
<p class="text-end">End aligned text on all viewport sizes.</p>

<p class="text-sm-start">Start aligned text on viewports sized SM (small) or wider.</p>
<p class="text-md-start">Start aligned text on viewports sized MD (medium) or wider.</p>
<p class="text-lg-start">Start aligned text on viewports sized LG (large) or wider.</p>
<p class="text-xl-start">Start aligned text on viewports sized XL (extra-large) or wider.</p>
```

<hr>

:exclamation: Note that Bootstrap doesn't provide utility classes for justified text. While, aesthetically, justified text might look more appealing, it does make word-spacing more random and therefore harder to read.

<hr>

## Text wrapping and overflow

Wrap text with a `.text-wrap` class.
```
<div class="badge bg-primary text-wrap" style="width: 6rem;">
    This text should wrap.
</div>
```
Prevent text from wrapping with a `.text-nowrap` class.
```
<div class="text-nowrap bd-highlight" style="width: 8rem;">
    This text should overflow the parent.
</div>
```

## Word break

Prevent long strings of text from breaking your components' layout by usiong `.text-break` to set `word-wrap: break-word` and `word-break: break-word`. Bootstrap uses `word-wrap` instead of the more common `overflow-wrap` for wider browser support, and adds the deprecated `word-break: break-word` to avoid issues with flex containers.
```
<p class="text-break">mmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmm</p>
```

<hr>

:exclamation: Note that [breaking words isn't possible in Arabic](), which is the most used RTL language. Therefore `.text-break` is removed from Bootstrap's RTL compiled CSS.

<hr>

## Text transform

Transform text in components with text capitalization classes.
```
<p class="text-lowercase">Lowercased text.</p>
<p class="text-uppercase">Uppercased text.</p>
<p class="text-capitalize">CapiTaliZed text.</p>
```
Note how `.text-capitalize` only changes the first letter of each word, leaving the case of any other letters unaffected.

## Font size

Quickly change the `font-size` of text. While Bootstrap's heading classes (e.g., `.h1`-`.h6`) apply `font-size`, `font-weight`, and `line-height`, these utilities *only* apply `font-size`. Sizing for these utilities matches HTML's heading elements, so as the number increases, their size decreases.
```
<p class="fs-1">.fs-1 text</p>
<p class="fs-2">.fs-2 text</p>
<p class="fs-3">.fs-3 text</p>
<p class="fs-4">.fs-4 text</p>
<p class="fs-5">.fs-5 text</p>
<p class="fs-6">.fs-6 text</p>
```
Customize your avaiable `font-size`s by modifying the `$font-sizes` Sass map.

## Font weight and italics

Quickly change the `font-weight` or `font-style` of text with these utilities. `font-style` utilities are abbreviated as `.fst-*` and `font-weight` utilities are abbreviated as `.fw-*`.
```
<p class="fw-bold">Bold text.</p>
<p class="fw-bolder">Bolder weight text (relative to the parent element).</p>
<p class="fw-normal">Normal weight text.</p>
<p class="fw-light">Light weight text.</p>
<p class="fw-lighter">Lighter weight text (relative to the parent element).</p>
<p class="fst-italic">Italic text.</p>
<p class="fst-normal">Text with normal font style.</p>
```

## Line height

Change the line height with `.lh-*` utilities.
```
<p class="lh-1">
    Some placeholder content to show off the line height utilities. Happy birthday. You could've been the greatest. She ride me like a roller coaster. I messed around and got addicted. You just gotta ignite the light and let it shine! I'm intrigued, for a peek, heard it's fascinating. Catch her if you can. I should've told you what you meant to me 'Cause now I pay the price. Do you ever feel, feel so paper thin.
</p>
<p class="lh-sm">
    But you better choose carefully. Yo, shout out to all you kids, buying bottle service, with your rent money. She's sweet as pie but if you break her heart. Just own the night like the 4th of July! In another life I would be your girl. Playing ping pong all night long, everything's all neon and hazy. Shorty so bad, I’m sprung and I don’t care.
</p>
<p class="lh-base">
    I can feel a phoenix inside of me. Maybe a reason why all the doors are closed. We go higher and higher. Passport stamps, she's cosmopolitan. Someone said you had your tattoo removed. All my girls vintage Chanel baby. Someone said you had your tattoo removed.
</p>
<p class="lh-lg">
    But I will get there. This is real so take a chance and don't ever look back, don't ever look back. You could travel the world but nothing comes close to the golden coast. Of anything and everything. Venice beach and Palm Springs, summertime is everything. Do you ever feel already buried deep six feet under? It's time to bring out the big balloons. So cover your eyes, I have a surprise. So I don't have to say you were the one that got away.
</p>
```

## Monospace

Change a selection to our monospace font stack with `.font-monospace`.
```
<p class="font-monospace">This is in monospace</p>
```

## Reset color

Reset a text or link's color with `.text-reset`, so that it inherits the color from its parent.
```
<p class="text-muted">
    Muted text with a <a href="#" class="text-reset">reset link</a>.
</p>
```

## Text decoration

Decorate text in components with text decoration classes.
```
<p class="text-decoration-underline">This text has a line underneath it.</p>
<p class="text-decoration-line-through">This text has a line going through it.</p>
<a href="#" class="text-decoration-none">This link has its text decoration removed.</a>
```

## Sass

### Variables

```
// stylelint-disable value-keyword-case

$font-family-sans-serif:     system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", "Liberation Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
$font-family-monospace:      SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;

// stylelint-enable value-keyword-case

$font-family-base:           var(--#{$variable-prefix}font-sans-serif);
$font-family-code:           var(--#{$variable-prefix}font-monospace);

// $font-size-root effects the value of `rem`, which is also used for font sizes, paddings, and margins
// $font-size-base effects the font size of the body text

$font-size-root:             null;
$font-size-base:             1rem;   // Assumes the browser deefault, typically `16px`
$font-size-sm:               $font-size-base * .875;
$font-size-lg:               $font-size-base * 1.25;

$font-weight-lighter:        lighter;
$font-weight-light:          300;
$font-weight-normal:         400;
$font-weight-bold:           700;
$font-weight-bolder:         bolder;

$font-weight-base:           $font-weight-normal;

$line-height-base:           1.5;
$line-height-sm:             1.25;
$line-height-lg:             2;

$h1-font-size:               $font-size-base * 2.5;
$h2-font-size:               $font-size-base * 2;
$h3-font-size:               $font-size-base * 1.75;
$h4-font-size:               $font-size-base * 1.5;
$h5-font-size:               $font-size-base * 1.25;
$h6-font-size:               $font-size-base;
```

## Maps

Font-size utilities are generated from this map, in combination with our utilities API.
```
$font-sizes: (
    1: $h1-font-size,
    2: $h2-font-size,
    3: $h3-font-size,
    4: $h4-font-size,
    5: $h5-font-size,
    6: $h6-font-size
);
```

## Utilities API

Font and text utilities are declared in Bootstrap's utilities API in `scss/_utilities.scss`. [Learn how to use the utilities API.]()
```
"font-family": (
    property: font-family,
    class: font,
    values: (monospace: var(--#{$variable-prefix}font-monospace))
),
"font-size": (
    rfs: true,
    property: font-size,
    class: fs,
    values: $font-sizes
),
"font-style": (
    property: font-style,
    class: fst,
    values: italic normal
),
"font-weight": (
    property: font-weight,
    class: fw,
    values: (
        light: $font-weight-light,
        lighter: $font-weight-lighter,
        normal: $font-weight-normal,
        bold: $font-weight-bold,
        bolder: $font-weight-bolder
    )
),
"line-height": (
    property: line-height,
    class: lh,
    values: (
        1: 1,
        sm: $line-height-sm,
        base: $line-height-base,
        lg: $line-height-lg,
    )
),
"text-align": (
    responsive: true,
    property: text-align,
    class: text,
    values: (
        start: left,
        end: right,
        center: center,
    )
),
"text-decoration": (
    property: text-decoration,
    values: none underline line-through
),
"text-transform": (
    property: text-transform,
    class: text,
    values: lowercase uppercase capitalize
),
"white-space": (
    property: white-space,
    class: text,
    values: (
        wrap: normal,
        nowrap: nowrap,
    )
),
"word-wrap": (
    property: word-wrap word-break,
    class: text,
    values: (break: break-word),
    rtl: false
),
```