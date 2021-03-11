# Background

Convey meaning through `background-color` and add decoration with gradients.

## Background color

Similar to the contextual text color classes, set the background of an element to any contextual class. Background utilities **do not set `color`**, so in some cases you'll want to use `.text-*` [color utilities](). <!-- link to Utilities folder / Colors -->
```
<div class="p-3 mb-2 bg-primary text-white">.bg-primary</div>
<div class="p-3 mb-2 bg-secondary text-white">.bg-secondary</div>
<div class="p-3 mb-2 bg-success text-white">.bg-success</div>
<div class="p-3 mb-2 bg-danger text-white">.bg-danger</div>
<div class="p-3 mb-2 bg-warning text-dark">.bg-warning</div>
<div class="p-3 mb-2 bg-info text-dark">.bg-info</div>
<div class="p-3 mb-2 bg-light text-dark">.bg-light</div>
<div class="p-3 mb-2 bg-dark text-white">.bg-dark</div>
<div class="p-3 mb-2 bg-body text-dark">.bg-body</div>
<div class="p-3 mb-2 bg-white text-dark">.bg-white</div>
<div class="p-3 mb-2 bg-transparent text-dark">.bg-transparent</div>
```

## Background gradient

By ading a `.bg-gradient` class, a linear gradient is added as background image to backgrounds. This gradient starts with a semi-transparent white which fades out to the bottom.

Do you need a gradient in your custom CSS? Just add `background-image: var(--bs-gradient);`.
```
<div class="p-3 mb-2 bg-primary bg-gradient text-white">.bg-primary.bg-gradient</div>
<div class="p-3 mb-2 bg-secondary bg-gradient text-white">.bg-secondary.bg-gradient</div>
<div class="p-3 mb-2 bg-success bg-gradient text-white">.bg-success.bg-gradient</div>
<div class="p-3 mb-2 bg-danger bg-gradient text-white">.bg-danger.bg-gradient</div>
<div class="p-3 mb-2 bg-warning bg-gradient text-dark">.bg-warning.bg-gradient</div>
<div class="p-3 mb-2 bg-info bg-gradient text-dark">.bg-info.bg-gradient</div>
<div class="p-3 mb-2 bg-light bg-gradient text-dark">.bg-light.bg-gradient</div>
<div class="p-3 mb-2 bg-dark bg-gradient text-white">.bg-dark.bg-gradient</div>
<div class="p-3 mb-2 bg-body bg-gradient text-dark">.bg-body.bg-gradient</div>
<div class="p-3 mb-2 bg-white bg-gradient text-dark">.bg-white.bg-gradient</div>
<div class="p-3 mb-2 bg-transparent bg-gradient text-dark">.bg-transparent.bg-gradient</div>
```

## Sass