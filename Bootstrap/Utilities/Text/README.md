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