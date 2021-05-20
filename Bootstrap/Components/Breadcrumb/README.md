# Breadcrumb

Indicate the current page's location within a navigational hierarchy that automatically adds separators via CSS.

## Example

Use an ordered or unordered list with linked list items to create a minimally styled breadcrumb. Use Bootstrap's utilities to add additional styles as desired.
```
<nav aria-label="breadcrumb">
    <ol class="breadcrumb">
        <li class="breadcrumb-item active" aria-current="page">Home</li>
    </ol>
</nav>

<nav aria-label="breadcrumb">
    <ol class="breadcrumb">
        <li class="breadcrumb-item"><a href="#">Home</a></li>
        <li class="breadcrumb-item active" aria-current="page">Library</li>
    </ol>
</nav>

<nav aria-label="breadcrumb">
    <ol class="breadcrumb">
        <li class="breadcrumb-item"><a href="#">Home</a></li>
        <li class="breadcrumb-item"><a href="#">Library</a></li>
        <li class="breadcrumb-item active" aria-current="page">Data</li>
    </ol>
</nav>
```
(See the code example above in my accompanying [breadcrumb-examples.html](https://github.com/AndrewSRea/My_Learning_Port/blob/main/Bootstrap/Components/Breadcrumb/breadcrumb-examples.html) file.)

## Dividers

Dividers are automatically added in CSS through [::before](https://developer.mozilla.org/en-US/docs/Web/CSS/::before) and [content](https://developer.mozilla.org/en-US/docs/Web/CSS/content). They can be changed by modifying a local CSS custom property `--bs-breadcrumb-divider`, or through the `$breadcrumb-divider` Sass variable--and `$breadcrumb-divider-flipped` for its RTL counterpart, if needed. Bootstrap defaults to its Sass variable, which is set as a fallback to the custom property. This way, you get a global divider that you can override without recompiling CSS at any time.
```
<nav style="--bs-breadcrumb-divider: '>';" aria-label="breadcrumb">
    <ol class="breadcrumb">
        <li class="breadcrumb-item"><a href="#">Home</a></li>
        <li class="breadcrumb-item active" aria-current="page">Library</li>
    </ol>
</nav>
```
(This code example can also be found in my accompanying [breadcrumb-examples.html](https://github.com/AndrewSRea/My_Learning_Port/blob/main/Bootstrap/Components/Breadcrumb/breadcrumb-examples.html) file.)

When modifying via Sass, the [quote](https://sass-lang.com/documentation/modules/string#quote) function is required to generate the quotes around a string. For example, using `>` as the divider, you can use this:
```
$breadcrumb-divider: quote(">");
```
It's also possible to use an **embedded SVG icon**. Apply it via Bootstrap's CSS custom property, or use the Sass variable:
```
<nav style="--bs-breadcrumb-divider: url(&#34;data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='8' height='8'%3E%3Cpath d='M2.5 0L1 1.5 3.5 4 1 6.5 2.5 8l4-4-4-4z' fill='currentColor'/%3E%3C/svg%3E&#34;);" aria-label="breadcrumb">
    <ol class="breadcrumb">
        <li class="breadcrumb-item"><a href="#">Home</a></li>
        <li class="breadcrumb-item active" aria-current="page">Library</li>
    </ol>
</nav>
```
```
$breadcrumb-divider: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='8' height='8'%3E%3Cpath d='M2.5 0L1 1.5 3.5 4 1 6.5 2.5 8l4-4-4-4z' fill='currentColor'/%3E%3C/svg%3E");
```
(The HTML code example above can be found in my accompanying [breadcrumb-examples.html](https://github.com/AndrewSRea/My_Learning_Port/blob/main/Bootstrap/Components/Breadcrumb/breadcrumb-examples.html) file.)

You can also remove the divider setting `--bs-breadcrumb-divider: '';` (empty strings in CSS custom properties count as a value), or setting the Sass variable to `$breadcrumb-divider: none;`.
```
<nav style="--bs-breadcrumb-divider: '';" aria-label="breadcrumb">
    <ol class="breadcrumb">
        <li class="breadcrumb-item"><a href="#">Home</a></li>
        <li class="breadcrumb-item active" aria-current="page">Library</li>
    </ol>
</nav>
```
```
$breadcrumb-divider: none;
```
(Also, the HTML code example above can be found in my accompanying [breadcrumb-examples.html](https://github.com/AndrewSRea/My_Learning_Port/blob/main/Bootstrap/Components/Breadcrumb/breadcrumb-examples.html) file.)

## Accessiblity

Since breadcrumbs provide a navigation, it's a good idea to add a meaningful label such as `aria-label="breadcrumb"` to describe the type of navigation provided in the `<nav>` element, as well as applying an `aria-current="page"` to the last item of the set to indicate that it represents the current page.

For more information, see the [WAI-ARIA Authoring Practices for the breadcrumb pattern](https://www.w3.org/TR/wai-aria-practices/#breadcrumb).

## Sass

### Variables

```
$breadcrumb-font-size:           null;
$breadcrumb-padding-y:           0;
$breadcrumb-padding-x:           0;
$breadcrumb-item-padding-x:      .5rem;
$breadcrumb-margin-bottom:       1rem;
$breadcrumb-bg:                  null;
$breadcrumb-divider-color:       $gray-600;
$breadcrumb-active-color:        $gray-600;
$breadcrumb-divider:             quote("/");
$breadcrumb-divider-flipped:     $breadcrumb-divider;
$breadcrumb-border-radius:       null;
```

<hr>

[[Previous page]](https://github.com/AndrewSRea/My_Learning_Port/tree/main/Bootstrap/Components/Badge#badges) - [[Top]](https://github.com/AndrewSRea/My_Learning_Port/tree/main/Bootstrap/Components/Breadcrumb#breadcrumb) - [[Next page]](https://github.com/AndrewSRea/My_Learning_Port/tree/main/Bootstrap/Components/Buttons#buttons)