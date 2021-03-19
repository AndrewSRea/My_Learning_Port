# Flex

Quickly manage the layout, alignment, and sizing of grid columns, navigation, components, and more with a full suite of responsive flexbox utilities. For more complex implementations, custom CSS may be necessary.

## Enable flex behaviors

Apply `display` utilities to create a flexbox container and transform **direct child elements** into flex items. Flex containers and items are able to be modified further with additional flex properties.
```
<div class="d-flex p-2 bd-highlight">I'm a flexbox container!</div>
```
```
<div class="d-inline-flex p-2 bd-highlight">I'm an inline flex box container!</div>
```
Responsive variations also exist for `.d-flex` and `.d-inline-flex`.

* `.d-flex`
* `.d-inline-flex`
* `.d-sm-flex`
* `.d-sm-inline-flex`
* `.d-md-flex`
* `.d-md-inline-flex`
* `.d-lg-flex`
* `.d-lg-inline-flex`
* `.d-xl-flex`
* `.d-xl-inline-flex`
* `.d-xxl-flex`
* `.d-xxl-inline-flex`

## Direction

Set the direction of flex items in a flex container with direction utilities. In most cases, you can omit the horizontal class here as the browser default is `row`. However, you may encounter situations where you needed to explicitly set this value (like responsive layouts).

Use `.flex-row` to set a horizontal direction (the browser default), or `.flex-row-reverse` to start the horizontal direction from the opposite side.
```
<div class="d-flex flex-row bd-highlight mb-3">
    <div class="p-2 bd-highlight">Flex item 1</div>
    <div class="p-2 bd-highlight">Flex item 2</div>
    <div class="p-2 bd-highlight">Flex item 3</div>
</div>
<div class="d-flex flex-row-reverse bd-highlight">
    <div class="p-2 bd-highlight">Flex item 1</div>
    <div class="p-2 bd-highlight">Flex item 2</div>
    <div class="p-2 bd-highlight">Flex item 3</div>
</div>
```
