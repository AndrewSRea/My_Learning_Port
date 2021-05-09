# Range

Use Bootstrap's custom range inputs for consistent cross-browser styling and built-in customization.

## Overview

Create custom `<input type="range">` controls with `.form-range`. The track (the background) and thumb (the value) are both styled to appear the same across browsers. As only Edge Legacy and Firefox supports "filling" their track from the left or right of the thumb as a means to visually indicate progress, Bootstrap do not currently support it.
```
<label for="customRange1" class="form-label">Example range</label>
<input type="range" class="form-range" id="customRange1">
```
See all the code examples in this **Range** section in my accompanying [`range-examples.html`](https://github.com/AndrewSRea/My_Learning_Port/blob/main/Bootstrap/Forms/Range/range-examples.html) file.

## Disabled

Add the `disabled` Boolean attribute on an input to give it a grayed out appearance and remove pointer events.
```
<label for="disabledRange" class="form-label">Disabled range</label>
<input type="range" class="form-range" id="disabledRange" disabled>
```

## Min and max

Range inputs have implicit values for `min` and `max`--`0` and `100`, respectively. You may specify new values for those using the `min` and `max` attributes.
```
<label for="customRange2" class="form-label">Example range</label>
<input type="range" class="form-range" min="0" max="5" id="customRange2">
```

## Steps

By default, range inputs "snap" to integer values. To change this, you can specify a `step` value. In the example below, we double the number of steps by using `step="0.5"`.
```
<label for="customRange3" class="form-label">Example range</label>
<input type="range" class="form-range" min="0" max="5" step="0.5" id="customRange3">
```

## Sass

### Variables

```
$form-range-track-width:                    100%;
$form-range-track-height:                   .5rem;
$form-range-track-cursor:                   pointer;
$form-range-track-bg:                       $gray-300;
$form-range-track-border-radius:            1rem;
$form-range-track-box-shadow:               $box-shadow-inset;

$form-range-thumb-width:                    1rem;
$form-range-thumb-height:                   $form-range-thumb-width;
$form-range-thumb-bg:                       $component-active-bg;
$form-range-thumb-border:                   0;
$form-range-thumb-border-radius:            1rem;
$form-range-thumb-box-shadow:               0 .1rem .25rem rgba($black, .1);
$form-range-thumb-focus-box-shadow:         0 0 0 1px $body-bg, $input-focus-box-shadow;
$form-range-thumb-focus-box-shadow-width:   $input-focus-width;   // For focus box shadow issue in Edge
$form-range-thumb-active-bg:                tint-color($component-active-bg, 70%);
$form-range-thumb-disabled-bg:              $gray-500;
$form-range-thumb-transition:               background-color .15s ease-in-out, border-color .15s ease-in-out, box-shadow .15s ease-in-out;
```

<hr>

[[Previous page]](https://github.com/AndrewSRea/My_Learning_Port/tree/main/Bootstrap/Forms/Checks_and_Radios#checks-and-radios) - [[Top]]() - [[Next page]]()