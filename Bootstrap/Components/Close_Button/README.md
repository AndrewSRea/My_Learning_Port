# Close button

A generic close button for dismissing content like modals and alerts.

## Example

Provide an option to dismiss or close a component with `.btn-close`. Default styling is limited, but highly customizable. Modify the Sass variables to replace the default `background-image`. **Be sure to include text for screen readers**, as Bootstrap has done with `aria-label`.
```
<button type="button" class="btn-close" aria-label="Close"></button>
```

## Disabled state

Disabled close buttons change their `opacity`. Bootstrap also applies `pointer-events: none` and `user-select: none` to prevent hover and active states from triggering.
```
<button type="button" class="btn-close" disabled aria-label="Close"></button>
```

## White variant

Change the default `.btn-close` to be white with the `.btn-close-white` class. This class uses the `filter` property to invert the `background-image`.
```
<button type="button" class="btn-close btn-close-white" aria-label="Close"></button>
<button type="button" class="btn-close btn-close-white" disabled aria-label="Close"></button>
```