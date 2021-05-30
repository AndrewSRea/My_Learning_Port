# Vertical alignment

Easily change the vertical alignment of inline, inline-block, inline-table, and table cell elements.

Change the alignment of elements with the [`vertical-alignment`](https://developer.mozilla.org/en-US/docs/Web/CSS/vertical-align) utilities. Please note that vertical-align only affects inline, inline-block, inline-table, and table cell elements.

Choose from `.align-baseline`, `.align-top`, `.align-middle`, `.align-bottom`, `.align-text-bottom`, and `.align-text-top` as needed.

To vertically center non-inline content (like `<div>`s and more), use Bootstrap's [flex box utilities](https://github.com/AndrewSRea/My_Learning_Port/tree/main/Bootstrap/Utilities/Flex#align-items).

With inline elements:
```
<span class="align-baseline">baseline</span>
<span class="align-top">top</span>
<span class="align-middle">middle</span>
<span class="align-bottom">bottom</span>
<span class="align-text-top">text-top</span>
<span class="align-text-bottom">text-bottom</span>
```
With table cells:
```
<table style="height: 100px;">
    <tbody>
        <tr>
            <td class="align-baseline">baseline</td>
            <td class="align-top">top</td>
            <td class="align-middle">middle</td>
            <td class="align-bottom">bottom</td>
            <td class="align-text-top">text-top</td>
            <td class="align-text-bottom">text-bottom</td>
        </tr>
    </tbody>
</table>
```
(These two code examples can be found in my accompanying [vert-align-utilities-examples-1.html](https://github.com/AndrewSRea/My_Learning_Port/blob/main/Bootstrap/Utilities/Vertical_Alignment/vert-align-utilities-examples-1.html) file.)

## Sass

### Utilities API

Vertical align utilities are declared in Bootstrap's utilities API in `scss/_utilities.scss`. [Learn how to use the utilities API.](https://github.com/AndrewSRea/My_Learning_Port/tree/main/Bootstrap/Utilities/API#using-the-api)
```
"align": (
    property: vertical-align,
    class: align,
    values: baseline top middle bottom text-bottom text-top
),
```

<hr>

[[Previous page]](https://github.com/AndrewSRea/My_Learning_Port/tree/main/Bootstrap/Utilities/Text#text) - [[Top]](https://github.com/AndrewSRea/My_Learning_Port/tree/main/Bootstrap/Utilities/Vertical_Alignment#vertical-alignment) - [[Next page]](https://github.com/AndrewSRea/My_Learning_Port/tree/main/Bootstrap/Utilities/Visibility#visibility)