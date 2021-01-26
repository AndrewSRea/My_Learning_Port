# Forms

Examples and usage guidelines for form control styles, layout options, and custom components for creating a wide variety of forms.

### [Form control]()

Style textual inputs and textareas with support for multiple states.

### [Select]()

Improve browser default select elements with a custom initial appearance.

### [Checks & radios]()

Use Bootstrap's custom radio buttons and checkboxes in forms for selecting input options.

### [Range]()

Replace browser default range inputs with Bootstrap's custom version.

### [Input group]()

Attach labels and buttons to your inputs for increased semantic value.

### [Floating labels]()

Create beautifully simple form labels that float over your input fields.

### [Layout]()

Create inline, horizontal, or complex grid-based layouts with your forms.

### [Validation]()

Validate your forms with custom or native validation behaviors and styles.

## Overview

Bootstrap's form controls expand on their [Rebooted form styles](https://github.com/AndrewSRea/My_Learning_Port/tree/main/Bootstrap/Content#forms) with classes. Use these classes to opt into their customized displays for a more consistent rendering across browsers and devices.
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
(The code example below can be found in my accompanying [`form-examples.html`](https://github.com/AndrewSRea/My_Learning_Port/blob/main/Bootstrap/Forms/form-examples.html) file.)