# Helpers

## Table of contents

* [Clearfix](#clearfix)
* [Colored links](#colored-links)
* [Ratio](#ratios)
* [Position](#position)
* [Visually hidden](#visually-hidden)
* [Stretched link](#stretched-link)
* [Text truncation](#text-truncation)

<hr>

[[Previous module: Components]](https://github.com/AndrewSRea/My_Learning_Port/tree/main/Bootstrap/Components#components) - [[Next module: Utilities]](https://github.com/AndrewSRea/My_Learning_Port/tree/main/Bootstrap/Utilities#utilities)

## Text truncation

Truncate long strings of text with an ellipsis.

For longer content, you can add a `.text-truncate` class to truncate the text with an ellipsis. **Requires `display: inline-block` or `display: block`.**
```
<!-- Block level -->
<div class="row">
    <div class="col-2 text-truncate">
        Praeterea iter est quasdam res quas ex communi.
    </div>
</div>

<!-- Inline level -->
<span class="d-inline-block text-truncate" style="max-width: 150px;">
    Praeterea iter est quasdam res quas ex communi.
</span>
```