# Helpers

Each of the subsections in this **Helpers** section are small enough to fit inside this one README, and are listed in the table of contents below:

* [Clearfix]()
* [Colored links]()
* [Ratio]()
* [Position]()
* [Visually hidden]()
* [Stretched link]()
* [Text truncation]()

## Clearfix

Quickly and easily clear floated content within a container by adding a clearfix utility.

Easily clear `float`s by adding `.clearfix` **to the parent element**. Can also be used as a mixin.<br>
Use in HTML:
```
<div class="clearfix">...</div>
```
The mixin source code:
```
@mixin clearfix() {
    &::after {
        display: block;
        clear: both;
        content: "";
    }
}
```