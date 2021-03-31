# Sizing

Easily make an element as wide or as tall with our width and height utilities.

## Relative to the parent

Width and height utilities are generated from the utility API in `_utilities.scss`. Includes support for `25%`, `50%`, `75%`, `100%`, and `auto` by default. Modify those values as you need to generate different utilities here.
```
<div class="w-25 p-3" style="background-color: #eee;">Width 25%</div>
<div class="w-50 p-3" style="background-color: #eee;">Width 50%</div>
<div class="w-75 p-3" style="background-color: #eee;">Width 75%</div>
<div class="w-100 p-3" style="background-color: #eee;">Width 100%</div>
<div class="w-auto p-3" style="background-color: #eee;">Width auto</div>
```
```
<div style="height: 100px; background-color: rgba(255,0,0,0.1);">
    <div class="h-25 d-inline-block" style="width: 120px; background-color: rgba(0,0,255,.1)">Height 25%</div>
    <div class="h-50 d-inline-block" style="width: 120px; background-color: rgba(0,0,255,.1)">Height 50%</div>
    <div class="h-75 d-inline-block" style="width: 120px; background-color: rgba(0,0,255,.1)">Height 75%</div>
    <div class="h-100 d-inline-block" style="width: 120px; background-color: rgba(0,0,255,.1)">Height 100%</div>
    <div class="h-auto d-inline-block" style="width: 120px; background-color: rgba(0,0,255,.1)">Height auto</div>
</div>
```
You can also use `max-width: 100%;` and `max-height: 100%;` utilities as needed.
```