<!-- GO BACK TO THE README in the Customize folder and add links for certain Forms folder and/or headers -->

# Forms

Examples and usage guidelines for form control styles, layout options, and custom components for creating a wide variety of forms.

## Table of contents

* [Form control](https://github.com/AndrewSRea/My_Learning_Port/tree/main/Bootstrap/Forms/Form_Control#form-controls) - Style textual inputs and textareas with support for multiple states.

* [Select](https://github.com/AndrewSRea/My_Learning_Port/tree/main/Bootstrap/Forms/Select#select) - Improve browser default select elements with a custom initial appearance.

* [Checks & radios](https://github.com/AndrewSRea/My_Learning_Port/tree/main/Bootstrap/Forms/Checks_and_Radios#checks-and-radios) - Use Bootstrap's custom radio buttons and checkboxes in forms for selecting input options.

* [Range](https://github.com/AndrewSRea/My_Learning_Port/tree/main/Bootstrap/Forms/Range#range) - Replace browser default range inputs with Bootstrap's custom version.

* [Input group](https://github.com/AndrewSRea/My_Learning_Port/tree/main/Bootstrap/Forms/Input_Group#input-group) - Attach labels and buttons to your inputs for increased semantic value.

* [Floating labels](https://github.com/AndrewSRea/My_Learning_Port/tree/main/Bootstrap/Forms/Floating_Labels#floating-labels) - Create beautifully simple form labels that float over your input fields.

* [Layout](https://github.com/AndrewSRea/My_Learning_Port/tree/main/Bootstrap/Forms/Layout#layout) - Create inline, horizontal, or complex grid-based layouts with your forms.

* [Validation](https://github.com/AndrewSRea/My_Learning_Port/tree/main/Bootstrap/Forms/Validation#validation) - Validate your forms with custom or native validation behaviors and styles.

<hr>

## Overview

Bootstrap's form controls expand on their [Rebooted form styles](https://github.com/AndrewSRea/My_Learning_Port/tree/main/Bootstrap/Content/Reboot#forms) with classes. Use these classes to opt into their customized displays for a more consistent rendering across browsers and devices.

Be sure to use an appropriate `type` attribute on all inputs (e.g., `email` for email address or `number` for numerical information) to take advantage of newer input controls like email verification, number selection, and more.

Here's a quick example to demonstrate Bootstrap's form styles. Keep reading for documentation on required classes, form layout, and more.
```
<form>
    <div class="mb-3">
        <label for="exampleInputEmail1" class="form-label">Email address</label>
        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
        <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
    </div>
    <div class="mb-3">
        <label for="exampleInputPassword1" class="form-label">Password</label>
        <input type="password" class="form-control" id="exampleInputPassword1">
    </div>
    <div class="mb-3 form-check">
        <input type="checkbox" class="form-check-input" id="exampleCheck1">
        <label class="form-check-label" for="exampleCheck1">Check me out</label>
    </div>
    <button type="submit" class="btn btn-primary">Submit</button>
</form>
```
(The code example above can be found in my accompanying [`form-examples.html`](https://github.com/AndrewSRea/My_Learning_Port/blob/main/Bootstrap/Forms/form-examples.html) file.)

## Form text

Block-level or inline-level form text can be created using `.form-text`.

<hr>

### :warning: Associating form text with form controls

Form text should be explicitly associated with the form control it relates to using the `aria-describedby` attribute. This will ensure that assistive technologies--such as screen readers--will announce this form text when the user focuses or enters the control.

<hr>

Form text below inputs can be styled with `.form-text`. If a block-level element will be used, a top margin is added for easy spacing from the inputs above.
```
<label for="inputPassword5" class="form-label">Password</label>
<input type="password" id="inputPassword5" class="form-control" aria-describedby="passwordHelpBlock">
<div id="passwordHelpBlock" class="form-text">
    Your password must be 8-20 characters long, contain letters and numbers, and must not contain spaces, special characters, or emoji.
</div>
```
(The code example above can be found in my accompanying [`form-examples.html`](https://github.com/AndrewSRea/My_Learning_Port/blob/main/Bootstrap/Forms/form-examples.html) file.)

Inline text can use any typical inline element (be it a `<span>`, `<small>`, or something else) with nothing more than the `.form-text` class.
```
<div class="row g-3 align-items-center">
    <div class="col-auto">
        <label for="inputPassword6" class="col-form-label">Password</label>
    </div>
    <div class="col-auto">
        <input type="password" id="inputPassword6" class="form-control" aria-describedby="passwordHelpInline">
    </div>
    <div class="col-auto">
        <span id="passwordHelpInline" class="form-text">
            Must b 8-20 characters long.
        </span>
    </div>
</div>
```
(The code example above can be found in my accompanying [`form-examples.html`](https://github.com/AndrewSRea/My_Learning_Port/blob/main/Bootstrap/Forms/form-examples.html) file.)

## Disabled forms

Add the `disabled` Boolean attribute on an input to prevent user interactions and make it appear lighter.
```
<input class="form-control" id="disabledInput" type="text" placeholder="Disabled input here..." disabled>
```
Add the `disabled` attribute to a `<fieldset>` to disable all the controls within. Browsers treat all native form controls (`<input>`, `<select>`, and `<button>` elements) inside a `<fieldset disabled>` as disabled, preventing both keyboard and mouse interactions on them.

However, if your form also includes custom button-like elements such as `<a class="btn btn-*">...</a>`, these will only be given a style of `pointer-events: none`, meahning they are still focusable and operable using the keyboard. In this case, you must manually modify these controls by adding `tabindex="-1"` to prevent them from receiving focus and `aria-disabled="disabled"` to signal their state assistive technologies.
```
<form>
    <fieldset disabled>
        <legend>Disabled fieldset example</legend>
        <div class="mb-3">
            <label for="disabledTextInput" class="form-label">Disabled input</label>
            <input type="text" id="disabledTextInput" class="form-control" placeholder="Disabled input">
        </div>
        <div class="mb-3">
            <label for="disabledSelect" class="form-label">Disabled select menu</label>
            <select id="disabledSelect" class="form-select">
                <option>Disabled select</option>
            </select>
        </div>
        <div class="mb-3">
            <div class="form-check">
                <input class="form-check-input" type="checkbox" id="disabledFieldsetCheck" disabled>
                <label class="form-check-label" for="disabledFieldsetCheck">
                    Can't check this
                </label>
            </div>
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
    </fieldset>
</form>
```
(The code example above can be found in my accompanying [`disabled-forms-example.html`](https://github.com/AndrewSRea/My_Learning_Port/blob/main/Bootstrap/Forms/disabled-forms-example.html) file.)

## Accessibility

Ensure that all form controls have an appropriate accessible name so that their purpose can be conveyed to users of assistive technologies. The simplest way to achieve this is to use a `<label>` element, or--in the case of buttons--to include sufficiently descriptive text as part of the `<button>...</button>` content.

For situations where it's not possible to include a visible `<label>` or appropriate text content, there are alternative ways of still providing an accessible name, such as:

* `<label>` elements hidden using the `.visually-hidden` class.
* Pointing to an existing element that can act as a label using `aria-labelledby`.
* Providing a `title` attribute.
* Explicitly setting the accessible name on an element using `aria-label`.

If none of these are present, assistive technologies may resort to using the `placeholder` attribute as a fallback for the accessible name on `<input>` and `<textarea>` elements. The examples in this section provide a few suggested, case-specific approaches.

While using visually hidden content (`.visually-hidden`, `aria-label`, and even `placeholder` content, which disappears once a form field has content) will benefit assistive technology users, a lack of visible label text may still be problematic for certain users. Some form of visible label is generally the best approach, both for accessibility and usability.

## Sass 

Many form variables are set at a general level to be re-used and extended by individual form components. You'll see these most often as `$btn-input-*` and `$input-*` variables.

### Variables

`$btn-input-*` variables are shared global variables between Bootstrap's [buttons](https://github.com/AndrewSRea/My_Learning_Port/tree/main/Bootstrap/Components/Buttons#buttons) and its form components. You'll find theese frequently reassigned as values to other component-specific variables.
```
$input-btn-padding-y:             .375rem;
$input-btn-padding-x:             .75rem;
$input-btn-font-family:           null;
$input-btn-font-size:             $font-size-base;
$input-btn-line-height:           $line-height-base;

$input-btn-focus-width:           .25rem;
$input-btn-focus-color-opacity:   .25;
$input-btn-focus-color:           rgba($component-active-bg, $input-btn-focus-color-opacity);
$input-btn-focus-blur:            0;
$input-btn-focus-box-shadow:      0 0 $input-btn-focus-blur $input-btn-focus-width $input-btn-focus-color;

$input-btn-padding-y-sm:          .25rem;
$input-btn-padding-x-sm:          .5rem;
$input-btn-font-size-sm:          $font-size-sm;

$input-btn-padding-y-lg:          .5rem;
$input-btn-padding-x-lg:          1rem;
$input-btn-font-size-lg:          $font-size-lg;

$input-btn-border-width:          $border-width;
```

<hr>

[[Next page: Form control]](https://github.com/AndrewSRea/My_Learning_Port/tree/main/Bootstrap/Forms/Form_Control#form-controls)

[[Previous module: Content]](https://github.com/AndrewSRea/My_Learning_Port/tree/main/Bootstrap/Content#content) - [[Next module: Components]](https://github.com/AndrewSRea/My_Learning_Port/tree/main/Bootstrap/Components#components)