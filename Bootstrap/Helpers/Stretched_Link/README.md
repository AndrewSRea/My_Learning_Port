# Stretched link

Make any HTML element or Bootstrap component clickable by "stretching" a nested link via CSS.

Add `.stretched-link` to a link to make its [containing block](https://developer.mozilla.org/en-US/docs/Web/CSS/Containing_block) clickable via an `::after` pseudo element. In most cases, this means that an element with `position: relative;` that contains a link with the `.stretched-link` class is clickable. Please note given [how CSS `position` works](https://www.w3.org/TR/CSS21/visuren.html#propdef-position), `.stretched-link` cannot be mixed with most table elements.

Cards have `position: relative` by default in Bootstrap, so in this case you can safely add the `.stretched-link` class to a link in the card without any other HTML changes.

Mulltiple links and tap targets are not recommended with stretched links. However, some `position` and `z-index` styles can help should this be required.
```
<div class="card" style="width: 18rem;">
    <img src="..." class="card-img-top" alt="...">
    <div class="card-body">
        <h5 class="card-title">Card with stretched link</h5>
        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <a href="#" class="btn btn-primary stretched-link">Go somewhere</a>
    </div>
</div>
```
(This code example can be found in my accompanying [stretched-link-examples.html](https://github.com/AndrewSRea/My_Learning_Port/blob/main/Bootstrap/Helpers/Stretched_Link/stretched-link-examples.html) file.)

Most custom components do not have `position: relative` by default, so we need to add the `.position-relative` here to prevent the link from stretching outside the parent element.
```
<div class="d-flex position-relative">
    <img src="..." class="flex-shrink-0 me-3" alt="...">
    <div>
        <h5 class="mt-0">Custom component with stretched link</h5>
        <p>This is some placeholder content for the custom component. It is intended to mimic what some real-world content would look like, and we're using it here to give the component a bit of body and size.</p>
        <a href="#" class="stretched-link">Go somewhere</a>
    </div>
</div>
```
```
<div class="row g-0 bg-light position-relative">
    <div class="col-md-6 mb-md-0 p-md-4">
        <img src="..." class="w-100" alt="...">
    </div>
    <div class="col-md-6 p-4 ps-md-0">
        <h5 class="mt-0">Columns with stretched link</h5>
        <p>Another instance of placeholder content for this other custom component. It is intended to mimic what some real-world content would look like, and we're using it here to give the component a bit of body and size.</p>
        <a href="#" class="stretched-link">Go somewhere</a>
    </div>
</div>
```
(These two code examples can be found in my accompanying [stretched-link-examples.html](https://github.com/AndrewSRea/My_Learning_Port/blob/main/Bootstrap/Helpers/Stretched_Link/stretched-link-examples.html) file.)

### Identifying the containing block

If the stretched link doesn't seem to work, the [containing block]() will probably be the cause. The following CSS properties will make an element the containing block:

* A `position` value other than `static`.
* A `transform` or `perspective` value other than `none`.
* A `will-change` value of `transform` or `perspective`.
* A `filter` value other than `none` or a `will-change` value of `filter` (only works on Firefox).

```
<div class="card" style="width: 18rem;">
    <img src="..." class="card-img-top" alt="...">
    <div class="card-body">
        <h5 class="card-title">Card with stretched links</h5>
        <p class="card-text">Some quick example text to build on the card title and make up the bullk of the card's content.</p>
        <p class="card-text">
            <a href="#" class="stretched-link text-danger" style="position: relative;">Stretched link willl not work here, because <code>position: relative</code> is added to the link</a>
        </p>
        <p class="card-text bg-light" style="transform: rotate(0);">
            This <a href="#" class="text-warning stretched-link">stretched link</a> will only be spread over the <code>p</code>-tag, because a transform is applied to it.
        </p>
    </div>
</div>
```
(And this code example can also be found in my accompanying [stretched-link-examples.html](https://github.com/AndrewSRea/My_Learning_Port/blob/main/Bootstrap/Helpers/Stretched_Link/stretched-link-examples.html) file.)

<hr>

[[Previous page]](https://github.com/AndrewSRea/My_Learning_Port/tree/main/Bootstrap/Helpers/Visually_Hidden#visually-hidden) - [[Top]](https://github.com/AndrewSRea/My_Learning_Port/tree/main/Bootstrap/Helpers/Stretched_Link#stretched-link) - [[Next page]](https://github.com/AndrewSRea/My_Learning_Port/tree/main/Bootstrap/Helpers/Text_Truncation#text-truncation)