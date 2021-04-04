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

