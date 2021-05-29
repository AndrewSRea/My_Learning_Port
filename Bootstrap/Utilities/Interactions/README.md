# Interactions

Utility classes that change how users interact with contents of a website.

## Text selection

Change the way in which the content is selected when the user interacts with it.
```
<p class="user-select-all">This paragraph will be entirely selected when clicked by the user.</p>
<p class="user-select-auto">This paragraph has default select behavior.</p>
<p class="user-select-none">This paragraph will not be selectable when clicked by the user.</p>
```
(This code example can be found in my accompanying [interactions-examples-1.html](https://github.com/AndrewSRea/My_Learning_Port/blob/main/Bootstrap/Utilities/Interactions/interactions-examples-1.html) file.)

## Pointer events

Bootstrap provides `.pe-none` and `.pe-auto` classes to prevent or add element interactions.
```
<p><a href="#" class="pe-none" tabindex="-1" aria-disabled="true">This link</a> cannot be clicked.</p>
<p><a href="#" class="pe-auto">This link</a> can be clicked (this is default behavior).</p>
<p class="pe-none"><a href="#" tabindex="-1" aria-disabled="true">This link</a> cannot be clicked because the <code>pointer-events</code> property is inherited from its parent. However, <a href="#" class="pe-auto">this link</a> has a <code>pe-auto</code> class and can be clicked.</p>
```
(And this code example can also be found in my accompanying [interactions-examples-1.html](https://github.com/AndrewSRea/My_Learning_Port/blob/main/Bootstrap/Utilities/Interactions/interactions-examples-1.html) file.)

<hr>

:exclamation: The `.pe-none` class (and the `pointer-events` CSS property it sets) only prevents interactions with a pointer (mouse, stylus, touch). Links and controls with `.pe-none` are, by default, still focusable and actionable for keyboard users. To ensure that they are completely neutralized even for keyboard users, you may need to add further attributes such as `tabindex="-1"` (to prevent them from receiving keyboard focus) and `aria-disabled="true"` (to convey the fact they are effectively disabled to assistive technologies), and possibly use JavaScript to completely prevent them from being actionable. For form controls, consider using the `disabled` HTML attribute instead.

<hr>

## Sass

### Utilities API

Interaction utilities are declared in our utilities API in `scss/_utilities.scss` [Learn how to use the utilities API.](https://github.com/AndrewSRea/My_Learning_Port/tree/main/Bootstrap/Utilities/API#using-the-api)
```
"user-select": (
    property: user-select,
    values: all auto none
),
"pointer-events": (
    property: pointer-events,
    class: pe,
    values: none auto,
),
```

<hr>

[[Previous page]](https://github.com/AndrewSRea/My_Learning_Port/tree/main/Bootstrap/Utilities/Float#float) - [[Top]](https://github.com/AndrewSRea/My_Learning_Port/tree/main/Bootstrap/Utilities/Interactions#interactions) - [[Next page]](https://github.com/AndrewSRea/My_Learning_Port/tree/main/Bootstrap/Utilities/Overflow#overflow)