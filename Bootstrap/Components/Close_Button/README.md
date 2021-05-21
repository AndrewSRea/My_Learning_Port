# Close button

A generic close button for dismissing content like modals and alerts.

## Example

Provide an option to dismiss or close a component with `.btn-close`. Default styling is limited, but highly customizable. Modify the Sass variables to replace the default `background-image`. **Be sure to include text for screen readers**, as Bootstrap has done with `aria-label`.
```
<button type="button" class="btn-close" aria-label="Close"></button>
```
(See the code example above in my accompanying [close-button-examples.html](https://github.com/AndrewSRea/My_Learning_Port/blob/main/Bootstrap/Components/Close_Button/close-button-examples.html) file.)

## Disabled state

Disabled close buttons change their `opacity`. Bootstrap also applies `pointer-events: none` and `user-select: none` to prevent hover and active states from triggering.
```
<button type="button" class="btn-close" disabled aria-label="Close"></button>
```
(This code example can also be found in my accompanying [close-button-examples.html](https://github.com/AndrewSRea/My_Learning_Port/blob/main/Bootstrap/Components/Close_Button/close-button-examples.html) file.)

## White variant

Change the default `.btn-close` to be white with the `.btn-close-white` class. This class uses the `filter` property to invert the `background-image`.
```
<button type="button" class="btn-close btn-close-white" aria-label="Close"></button>
<button type="button" class="btn-close btn-close-white" disabled aria-label="Close"></button>
```
(And this code example can be found in my accompanying [close-button-examples.html](https://github.com/AndrewSRea/My_Learning_Port/blob/main/Bootstrap/Components/Close_Button/close-button-examples.html) file.)

## Sass

### Variables

```
$btn-close-width:              1em;
$btn-close-height:             $btn-close-width;
$btn-close-padding-x:          .25em;
$btn-close-padding-y:          $btn-close-padding-x;
$btn-close-color:              $black;
$btn-close-bg:                 url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='#{$btn-close-color}'><path d='M.293.293a1 1 0 011.414 0L8 6.586 14.293.293a1 1 0 111.414 1.414L9.414 8l6.293 6.293a1 1 0 01-1.414 1.414L8 9.414l-6.293 6.293a1 1 0 01-1.414-1.414L6.586 8 .293 1.707a1 1 0 010-1.414z'/></svg>");
$btn-close-focus-shadow:       $input-btn-focus-box-shadow;
$btn-close-opacity:            .5;
$btn-close-hover-opacity:      .75;
$btn-close-focus-opacity:      1;
$btn-close-disabled-opacity:   .25;
$btn-close-white-filter:       invert(1) grayscale(100%) brightness(200%);
```

<hr>

[[Previous page]](https://github.com/AndrewSRea/My_Learning_Port/tree/main/Bootstrap/Components/Carousel#carousel) - [[Top]](https://github.com/AndrewSRea/My_Learning_Port/tree/main/Bootstrap/Components/Close_Button#close-button) - [[Next page]](https://github.com/AndrewSRea/My_Learning_Port/tree/main/Bootstrap/Components/Collapse#collapse)