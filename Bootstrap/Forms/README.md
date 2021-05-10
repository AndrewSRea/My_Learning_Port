<!-- GO BACK TO THE README in the Customize folder and add links for certain Forms folder and/or headers -->

# Forms

Examples and usage guidelines for form control styles, layout options, and custom components for creating a wide variety of forms.

## Table of contents

* [Form control](https://github.com/AndrewSRea/My_Learning_Port/tree/main/Bootstrap/Forms/Form_Control#form-controls) - Style textual inputs and textareas with support for multiple states.

* [Select](https://github.com/AndrewSRea/My_Learning_Port/tree/main/Bootstrap/Forms/Select#select) - Improve browser default select elements with a custom initial appearance.

* [Checks & radios](https://github.com/AndrewSRea/My_Learning_Port/tree/main/Bootstrap/Forms/Checks_and_Radios#checks-and-radios) - Use Bootstrap's custom radio buttons and checkboxes in forms for selecting input options.

* [Range]() - Replace browser default range inputs with Bootstrap's custom version.

* [Input group]() - Attach labels and buttons to your inputs for increased semantic value.

* [Floating labels]() - Create beautifully simple form labels that float over your input fields.

* [Layout]() - Create inline, horizontal, or complex grid-based layouts with your forms.

* [Validation]() - Validate your forms with custom or native validation behaviors and styles.

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

[[Next page]]() - [[Next module: Components]]()

## Validation

Provide valuable, actionable feedback to your users with HTML5 form validation, via browser default behaviors or custom styles and JavaScript.
<hr>
:warning: Currently the client-side custom validation styles and tooltips are not accessible, since they are not exposed to assistive technologies. While Bootstrap works on a solution, the technology recommends either using the server-side option or the default browser validation method.
<hr>

### How it works

Here's how form validation works with Bootstrap:

* HTML form validation is applied via CSS's two pseudo-classes, `:invalid` and `:valid`. It applies to`<input>`, `<select>`, and `<textarea>` elements.
* Bootstrap scopes the `:invalid` and `:valid` styles to parent `.was-validated` class, usually applied to the `<form>`. Otherwise, any required field without a value shows up as invalid on page load. This way, you may choose when to activate them (typically after form submission is attempted).
* To reset the appearance of the form (for instance, in the case of dynamic form submissions using AJAX), remove the `.was-validated` class from the `<form>` again after submission.
* As a fallback, `.is-invalid` and `.is-valid` classes may be used instead of the pseudo-classes for [server-side validation](#server-side). They do not require a `.was-validated` class from the `<form>` again after submission.
* Due to constraints in how CSS works, Bootstrap cannot (at present) apply styles to a `<label>` that comes before a form control in the DOM without the help of custom JavaScript.
* All modern browsers support the [constraint validation API](https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#the-constraint-validation-api), a serikes of JavaScript methods for validating form controls.
* Feedback message may utilize the [browser defaults](#browser-defaults) (different for each browser, and unstylable via CSS) or Bootstrap's custom feedback styles with additional HTML and CSS.
* You may provide custom validity messages with `setCustomValidity` in JavaScript.

With that in mind, consider the following demos for Bootstrap's custom form validation styles, optional server-side classes, and browser defaults.

### Custom styles

For custom Bootstrap form validation messages, you'll need to add the `novalidate` Boolean attribute to your `<form>`. This disables the browser default feedback tooltips, but still provides access to the form validation APIs in JavaScript. Try to submit the form below; our JavaScript will intercept the submit button and relay feedback to you. When attempting to submit, you'll see the `:invalid` and `:valid` styles applied to your form controls.
Custom feedback styles apply custom colors, borders, focus styles, and background icons to better communicate feedback. Background icons for `<select>`s are only available with `.form-select`, and not `.form-control`.
```
<form class="row g-3 needs-validation" novalidate>
    <div class="col-md-4">
        <label for="validationCustom01" class="form-label">First name</label>
        <input type="text" class="form-control" id="validationCustom01" value="Mark" required>
        <div class="valid-feedback">
            Looks good!
        </div>
    </div>
    <div class="col-md-4">
        <label for="validationCustom02" class="form-label">Last name</label>
        <input type="text" class="form-control" id="validationCustom02" value="Otto" required>
        <div class="valid-feedback">
            Looks good!
        </div>
    </div>
    <div class="col-md-4">
        <label for="validationCustomUsername" class="form-label">Username</label>
        <div class="input-group has-validation">
            <span class="input-group-text" id="inputGroupPrepend">@</span>
            <input type="text" class="form-control" id="validationCustomUsername" aria-describedby="inputGroupPrepend" required>
            <div class="invalid-feedback">
                Please choose a username.
            </div>
        </div>
    </div>
    <div class="col-md-6">
        <label for="validationCustom03" class="form-label">City</label>
        <input type="text" class="form-control" id="validationCustom03" required>
        <div class="invalid-feedback">
            Please provide a valid city.
        </div>
    </div>
    <div class="col-md-3">
        <label for="validationCustom04" class="form-label">State</label>
        <select class="form-select" id="validationCustom04" required>
            <option selected disabled value="">Choose...</option>
            <option>...</option>
        </select>
        <div class="invalid-feedback">
            Please select a valid state.
        </div>
    </div>
    <div class="col-md-3">
        <label for="validationCustom05" class="form-label">Zip</label>
        <input type="text" class="form-control" id="validationCustom05" required>
        <div class="invalid-feedback">
            Please provide a valid zip.
        </div>
    </div>
    <div class="col-12">
        <div class="form-check">
            <input class="form-check-input" type="checkbox" value="" id="invalidCheck" required>
            <label class="form-check-label" for="InvalidCheck">
                Agree to terms and conditions
            </label>
            <div class="invalid-feedback">
                You must agree before submitting.
            </div>
        </div>
    </div>
    <div class="col-12">
        <button class="btn btn-primary" type="submit">Submit</button>
    </div>
</form>
```
```
// Example starter JavaScript for disabling form submissions if there are invalid fields
(function() {
    'use strict'

    // Fetch all the forms to which we want to apply custom Bootstrap validation styles
    var forms = document.querySelectorAll('.needs-validation')

    // Loop over them and prevent submission
    Array.prototype.slice.call(forms)
        .forEach(function(form) {
            form.addEventListener('submit', function(event) {
                if (!form.checkValidity()) {
                    event.preventDefault()
                    event.stopPropagation()
                }

                form.classList.add('was-validated')
            }, false)
        })
})()
```

### Browser defaults

Not interested in custom validation feedback messages or writing JavaScript to change form behaviors? All good, you can use the browser defaults. Try submitting the form below. Depending on your browser and OS, you'll see a slightly different style of feedback.
While these feedback styles cannot be styled with CSS, you can still customize the feedback text through JavaScript.
```
<form class="row g-3">
    <div class="col-md-4">
        <label for="validationDefault01" class="form-label">First name</label>
        <input type="text" class="form-control" id="validationDefault01" value="Mark" required>
    </div>
    <div class="col-md-4">
        <label for="validationDefault02" class="form-label">Last name</label>
        <input type="text" class="form-control" id="validationDefault02" value="Otto" required>
    </div>
    <div class="col-md-4">
        <label for="validationDefaultUsername" class="form-label">Username</label>
        <div class="input-group">
            <span class="input-group-text" id="inputGroupPrepend2">@</span>
            <input type="text" class="form-control" id="validationDefaultUsername" aria-describedby="inputGroupPrepend2" required>
        </div>
    </div>
    <div class="col-md-6">
        <label for="validationDefault03" class="form-label">City</label>
        <input type="text" class="form-control" id="validationDefault03" required>
    </div>
    <div class="col-md-3">
        <label for="validationDefault04" class="form-label">State</label>
        <select class="form-select" id="validationDefault04" required>
            <option selected disabled value="">Choose...</option>
            <option>...</option>
        </select>
    </div>
    <div class="col-md-3">
        <label for="validationDefault05" class="form-label">Zip</label>
        <input type="text" class="form-control" id="validationDefault05" required>
    </div>
    <div class="col-12">
        <div class="form-check">
            <input class="form-check-input" type="checkbox" value="" id="invalidCheck2" required>
            <label class="form-check-label" for="invalidCheck2">
                Agree to terms and conditions
            </label>
        </div>
    </div>
    <div class="col-12">
        <button class="btn btn-primary" type="submit">Submit form</button>
    </div>
</form>
```

<!-- add link to the Customize folder README opening page -->

### Server side

Bootstrap recommends using client-side validation, but in case you require server-side validation, you can indicate invalid and valid form fields with `.is-invalid` and `.is-valid`. Note that `.invalid-feedback` is also supported with these classes.
For invalid fields, ensure that the invalid feedback/error message is associated with the relevant form field using `aria-describedby` (noting that this attribute allows more than one `id` to be referenced, in case the field already points to additional form text).
To fix [issues with border radii](https://github.com/twbs/bootstrap/issues/25110), input groups require an additional `.has-validation` class.
```
<form class="row g-3">
    <div class="col-md-4">
        <label for="validationServer01" class="form-label">First name</label>
        <input type="text" class="form-control is-valid" id="validationServer01" value="Mark" required>
        <div class="valid-feedback">
            Looks good!
        </div>
    </div>
    <div class="col-md-4">
        <label for="validationServer02" class="form-label">Last name</label>
        <input type="text" class="form-control is-valid" id="validationServer02" value="Otto" required>
        <div class="valid-feedback">
            Looks good!
        </div>
    </div>
    <div class="col-md-4">
        <label for="validationServerUsername" class="form-label">Username</label>
        <div class="input-group has-validation">
            <span class="input-group-text" id="inputGroupPrepend3">@</span>
            <input type="text" class="form-control is-invalid" id="validationServerUsername" aria-describedby="inputGroupPrepend3 validationServerUsernameFeedback" required>
            <div class="validationServerUsernameFeedback" class="invalid-feedback">
                Please choose a username.
            </div>
        </div>
    </div>
    <div class="col-md-6">
        <label for="validationServer03" class="form-label">City</label>
        <input type="text" class="form-control is-invalid" id="validationServer03" aria-describedby="validationServer03Feedback" required>
        <div id="validationServer03Feedback" class="invalid-feedback">
            Please provide a valid city.
        </div>
    </div>
    <div class="col-md-3">
        <label for="validationServer04" class="form-label">State</label>
        <select class="form-select is-invalid" id="validationServer04" aria-describedby="validationServer04Feedback" required>
            <option selected disabled value="">Choose...</option>
            <option>...</option>
        </select>
        <div id="validationServer04Feedback" class="invalid-feedback">
            Please select a valid state.
        </div>
    </div>
    <div class="col-md-3">
        <label for="validationServer05" class="form-label">Zip</label>
        <input type="text" class="form-control is-invalid" id="validationServer05" aria-describedby="validationServer05Feedback" required>
        <div id="validationServer05Feedback" class="invalid-feedback">
            Please provide a valid zip.
        </div>
    </div>
    <div class="col-12">
        <div class="form-check">
            <input class="form-check-input is-invalid" type="checkbox" value="" id="invalidCheck3" aria-decribedby="invalidaCheck3Feedback required>
            <label class="form-check-label" for="invalidCheck3">
                Agree to terms and conditions
            </label>
            <div id="invalidCheck3Feedback" class="invalid-feedback">
                You must agree before submitting.
            </div>
        </div>
    </div>
    <div class="col-12">
        <button class="btn btn-primary" type="submit">Submit form</button>
    </div>
</form>
```

### Supported elements

Validation styles area available for the following form controls and components:

* `<input>`s and `<textarea>`s with `.form-control` (including up to one `.form-control` in input groups)
* `<select>`s with `.form-select`
* `.form-check`s
```
<form class="was-validated">
    <div class="mb-3">
        <label for="validationTextarea" class="form-label">Textarea</label>
        <textarea class="form-control is-invalid" id="validationTextarea" placeholder="Required example textarea" required></textarea>
        <div class="invalid-feedback">
            Please enter a message in the textarea.
        </div>
    </div>

    <div class="form-check">
        <input type="checkbox" class="form-check-input" id="validationFormCheck1" required>
        <label class="form-check-label" for="validationFormCheck1">Check this checkbox</label>
        <div class="invalid-feedback">Example invalid feedback</div>
    </div>

    <div class="form-check">
        <input type="radio" class="form-check-input" id="validationFormCheck2" name="radio-stacked" required>
        <label class="form-check-label" for="validationFormCheck2">Toggle this radio</label>
    </div>
    <div class="form-check mb-3">
        <input type="radio" class="form-check-input" id="validationFormCheck3" name="radio-stacked" required>
        <label class="form-check-label" for="validationFormCheck3">Or toggle this other radio</label>
        <div class="invalid-feedback">More example invalid feedback text</div>
    </div>

    <div class="mb-3">
        <select class="form-select" required aria-label="select example">
            <option value="">Open this select menu</option>
            <option value="1">One</option>
            <option value="1">One</option>
            <option value="1">One</option>
        </select>
        <div class="invalid-feedback">Example invalid select feedback</div>
    </div>

    <div class="mb-3">
        <input type="file" class="form-control" aria-label="file example" required>
        <div class="invalid-feedback">Example invalid form file feedback</div>
    </div>

    <div class="mb-3">
        <button class="btn btn-primary" type="submit" disabled>Submit form</button>
    </div>
</form>
```

### Tooltips

If your form layout allows it, you can swap the `.{valid|invalid}-feedback` classes for `.{valid|invalid}-tooltip` classes to display validation feedback in a styled tooltip. Be sure to have a parent with `position: relative` on it for tooltip positioning. In the example below, our column classes have this already, but your project may require an alternative setup.
```
<form class="row g-3 needs-validation" novalidate>
    <div class="col-md-4 position-relative">
        <label for="validationTooltip01" class="form-label">First name</label>
        <input type="text" class="form-control" id="validationTooltip01" value="Mark" required>
        <div class="valid-tooltip">
            Looks good!
        </div>
    </div>
    <div class="col-md-4 position-relative">
        <label for="validationTooltip02" class="form-label">Last name</label>
        <input type="text" class="form-control" id="validationTooltip02" value="Otto" required>
        <div class="valid-tooltip">
            Looks good!
        </div>
    </div>
    <div class="col-md-4 position-relative">
        <label for="validationTooltipUsername" class="form-label">Username</label>
        <div class="input-group has-validation">
            <span class="input-group-text" id="validationTooltipUsernamePrepend">@</span>
            <input type="text" class="form-control" id="validationTooltipUsername" aria-describedby="validationTooltipUsernamePrepend" required>
            <div class="invalid-tooltip">
                Please choose a unique and valid username.
            </div>
        </div>
    </div>
    <div class="col-md-6 position-relative">
        <label for="validationTooltip03" class="form-label">City</label>
        <input type="text" class="form-control" id="validationTooltip03" required>
        <div class="invalid-tooltip">
            Please provide a valid city.
        </div>
    </div>
    <div class="col-md-3 position-relative">
        <label for="validationTooltip04" class="form-label">State</label>
        <select class="form-select" id="validationTooltip04" required>
            <option selected disabled value="">Choose...</option>
            <option>...</option>
        </select>
        <div class="invalid-tooltip">
            Please select a valid state.
        </div>
    </div>
    <div class="col-md-3 position-relative">
        <label for="validationTooltip05" class="form-label">Zip</label>
        <input type="text" class="form-control" id="validationTooltip05" required>
        <div class="invalid-tooltip">
            Please provide a valid zip.
        </div>
    </div>
    <div class="col-12">
        <button class="btn btn-primary" type="submit">Submit form</button>
    </div>
</form>
```

### Customizing

Validating states can be customized via Sass with the `$form-validation-states` map. Located in Bootstrap's `_variables.scss` file, this Sass map is looped over to generate the default `valid`/`invalid` validation states. Included is a nested map for customizing each state's color and icon. While no other states are supported by browsers, those using custom styles can easily add more complex form feedback.
Please note that we do not recommend customizing these values without also modifying the `form-validation-state` mixin.
This is the Sass map from `_variables.scss`. Override this and recompile your Sass to generate different states:
```
$form-validation-states: (
    "valid": (
        "color": $form-feedback-valid-color,
        "icon": $form-feedback-icon-valid
    ),
    "invalid": (
        "color": $form-feedback-invalid-color,
        "icon": $form-feedback-icon-invalid
    )
);
```
This is the loop from `forms/_validation.scss`. Any modifications to the above Sass map will be reflected in your compiled CSS via this loop:
```
@each $state, $data in $form-validation-states {
    @include form-validation-state($state, map-gt($data, color), map-get($data, icon));
}
```