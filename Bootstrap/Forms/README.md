# Bootstrap Forms

Examples and usage guidelines for form control styles, layout options, and custom components for creating a wide variety of forms.

#### [Form control](#form-controls)

Style textual inputs and textareas with support for multiple states.

#### [Select](#select-menus)

Improve browser default select elements with a custom initial appearance.

#### [Checks & radios](#checks-and-radios)

Use Bootstrap's custom radio buttons and checkboxes in forms for selecting input options.

#### [Range]()

Replace browser default range inputs with Bootstrap's custom version.

#### [Input group]()

Attach labels and buttons to your inputs for increased semantic value.

#### [Floating labels]()

Create beautifully simple form labels that float over your input fields.

#### [Layout]()

Create inline, horizontal, or complex grid-based layouts with your forms.

#### [Validation]()

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
(The code example above can be found in my accompanying [`disabled-forms-examples.html`](https://github.com/AndrewSRea/My_Learning_Port/blob/main/Bootstrap/Forms/disabled-forms-example.html) file.)

## Accessibility

Ensure that all form controls have an appropriate accessible name so that their purpose can be conveyed to users of assistive technologies. The simplest way to achieve this is to use a `<label>` element, or--in the case of buttons--to include sufficiently descriptive text as part of the `<button>...</button>` content.
For situations where it's not possible to include a visible `<label>` or appropriate text content, there are alternative ways of still providing an accessible name, such as:

* `<label>` elements hidden using the `.visually-hidden` class.
* Pointing to an existing element that can act as a label using `aria-labelledby`.
* Providing a `title` attribute.
* Explicitly setting the accessible name on an element using `aria-label`.

If none of these are present, assistive technologies may resort to using the `placeholder` attribute as a fallback for the accessible name on `<input>` and `<textarea>` elements. The examples in this section provide a few suggested, case-specific approaches.
While using visually hidden content (`.visually-hidden`, `aria-label`, and even `placeholder` content, which disappears once a form field has content) will benefit assistive technology users, a lack of visible label text may still be problematic for certain users. Some form of visible label is generally the best approach, both for accessibility and usability.

## Form controls

Give textual form controls like `<input>`s and `<textarea>`s an upgrade with custom styles, sizing, focus states, and more.

### Example

```
<div class="mb-3">
    <label for="exampleFormControlInput1" class="form-label">Email address</label>
    <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com">
</div>
<div class="mb-3">
    <label for="exampleFormControlTextarea1" class="form-label">Example textarea</label>
    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
</div>
```
(The code example above can be found in my accompanying [`form-controls-example.html`](https://github.com/AndrewSRea/My_Learning_Port/blob/main/Bootstrap/Forms/form-controls-example.html) file.)

### Sizing

Set heights using classes like `.form-control-lg` and `.form-control-sm`.
```
<input class="form-control form-control-lg" type="text" placeholder=".form-control-lg" aria-label=".form-control-lg example">
<input class="form-control" type="text" placeholder="Default input" aria-label="default input example">
<input class="form-control form-control-sm" type="text" placeholder=".form-control-sm" aria-label=".form-control-sm example">
```
(The code example above can be found in my accompanying [`form-controls-example.html`](https://github.com/AndrewSRea/My_Learning_Port/blob/main/Bootstrap/Forms/form-controls-example.html) file.)

### Disabled

Add the `disabled` Boolean attribute on an input to give it a grayed out appearance and remove pointer events.
```
<input class="form-control" type="text" placeholder="Disabled input" aria-label="Disabled input example" disabled>
<input class="form-control" type="text" placeholder="Disabled readonly input" aria-label="Disabled input example" disabled readonly>
```
(The code example above can be found in my accompanying [`form-controls-example.html`](https://github.com/AndrewSRea/My_Learning_Port/blob/main/Bootstrap/Forms/form-controls-example.html) file.)

### Readonly

Add the `readonly` Boolean attribute on an input to prevent modification of the input's value. Read-only inputs appear lighter (just like disabled inputs), but retain the standard cursor.
```
<input class="form-control" type="text" placeholder="Readonly input here..." aria-label="readonly input example" readonly>
```

### Readonly plain text

If you want to have `<input readonly>` elements in your form styled as plain text, use the `.form-control-plaintext` class to remove the default form field styling and preserve the correct margin and padding.
```
<div class="mb-3 row">
    <label for="staticEmail" clas="col-sm-2 col-form-label">Email</label>
    <div class="col-sm-10">
        <input type="text" readonly class="form-control-plaintext" id="staticEmail" value="email@example.com">
    </div>
</div>
<div class="mb-3 row">
    <label for="inputPassword" class="col-sm-2 col-form-label">Password</label>
    <div class="col-sm-10">
        <input type="password" class="form-control" id="inputPassword">
    </div>
</div>
```
```
<form class="row g-3">
    <div class="col-auto">
        <label for="staticEmail2" class="visually-hidden">Email</label>
        <input type="text" readonly class="form-control-plaintext" id="staticEmail2" value="email@example.com">
    </div>
    <div class="col-auto">
        <label for="inputPassword2" class="visually-hidden">Password</label>
        <input type="password" class="form-control" id="inputPassword2" placeholder="Password">
    </div>
    <div class="col-auto">
        <button type="submit" class="btn btn-primary mb-3">Confirm identity</button>
    </div>
</form>
```
(The "readonly" code examples above can be found in my accompanying [`form-controls-example.html`](https://github.com/AndrewSRea/My_Learning_Port/blob/main/Bootstrap/Forms/form-controls-example.html) file.)

### File input

```
<div class="mb-3">
    <label for="formFile" class="form-label">Default file input example</label>
    <input class="form-control" type="file" id="formFile">
</div>
<div class="mb-3">
    <label for="formFileMultiple" class="form-label">Multiple files input example</label>
    <input class="form-control" type="file" id="formFileMultiple">
</div>
<div class="mb-3">
    <label for="formFileDisabled" class="form-label">Disabled file input example</label>
    <input class="form-control" type="file" id="formFileDisabled" disabled>
</div>
<div class="mb-3">
    <label for="formFileSm" class="form-label">Small file input example</label>
    <input class="form-control form-control-sm" id="formFileSm" type="file">
</div>
<div class="mb-3">
    <label for="formFileLg" class="form-label">Large file input example</label>
    <input class="form-control form-control-lg" id="formFileLg" type="file">
</div>
```

### Color

```
<label for="exampleColorInput" class="form-label">Color picker</label>
<input type="color" class="form-control form-control-color" id="exampleColorInput" value="#563d7c" title="Choose your color">
```

### Datalists

Datalists allow you to create a group of `<option>`s that can be accessed (and autocompleted) from within an `<input>`. These are similar to `<select>` elements, but come with more menu styling limitations and differences. While most browsers and operating systems include some support for `<datalist>` elements, their styling is inconsistent at best.
Learn more about [support for datalist elements](https://caniuse.com/datalist).
```
<label for="exampleDataList" class="form-label">Datalist example</label>
<input class="form-control" list="datalistOptions" id="exampleDataList" placeholder="Type to search...">
<datalist id="datalistOptions">
    <option value="San Francisco">
    <option value="New York">
    <option value="Seattle">
    <option value="Los Angeles">
    <option value="Chicago">
</datalist>
```
(The "File input," "Color," and "Datalists" code examples above can be found in my accompanying [`form-controls-example-2.html`](https://github.com/AndrewSRea/My_Learning_Port/blob/main/Bootstrap/Forms/form-controls-example-2.html) file.)

## Select menus

Customize the native `<select>`s with custom CSS that changes the element's initial appearance.

### Default

Custom `<select>` menus need only a custom class, `.form-select`, to trigger the custom styles. Custom styles are limited to the `<select>`'s initial appearance anc cannot modify the `<option>`s due to browser limitiations.
```
<select class="form-select" aria-label="Default select example">
    <option selected>Open this select menu</option>
    <option value="1">One</option>
    <option value="2">Two</option>
    <option value="3">Three</option>
</select>
```

### Sizing

You may also choose from small and large custom selects to match Bootstrap's similarly sized text inputs.
```
<select class="form-select form-select-lg mb-3" aria-label=".form-select-lg example">
    <option selected>Open this select menu</option>
    <option value="1">One</option>
    <option value="2">Two</option>
    <option value="3">Three</option>
</select>

<select class="form-select form-select-sm" aria-label=".form-select-sm example">
    <option selected>Open this select menu</option>
    <option value="1">One</option>
    <option value="2">Two</option>
    <option value="3">Three</option>
</select>
```
The `multiple` attribute is also supported:
```
<select class="form-select" multiple aria-label="multiple select example">
    <option selected>Open this select menu</option>
    <option value="1">One</option>
    <option value="2">Two</option>
    <option value="3">Three</option>
</select>
```
As is the `size` attribute:
```
<select class="form-select" size="3" aria-label="size 3 select example">
    <option selected>Open this select menu</option>
    <option value="1">One</option>
    <option value="2">Two</option>
    <option value="3">Three</option>
</select>
```

### Disabled

Add the `disabled` Boolean attribute on a select to give it a grayed out appearance and remove pointer events.
```
<select class="form-select" aria-label="Disabled select example" disabled>
    <option selected>Open this select menu</option>
    <option value="1">One</option>
    <option value="2">Two</option>
    <option value="3">Three</option>
</select>
```

(All of the code examples in this **Select menus** section can be found in my accompanying [`form-controls-example.html`](https://github.com/AndrewSRea/My_Learning_Port/blob/main/Bootstrap/Forms/form-controls-example.html) file.)

## Checks and radios

Create consistent cross-browser and cross-device checkboxes and radios with Bootstrap's completely rewritten checks component.

### Approach

Browser default checkboxes and radios are replaced with the help of `.form-check`, a series of classes for both input types that improves the layout and behavior of their HTML elements, which provide greater customization and cross browser consistency. Checkboxes are for selecting one or several options in a list, while radios are for selecting one option from many.
Structurally, Boostrap's `<input>`s and `<label>`s are sibling elements as opposed to an `<input>` within a `<label>`. This is slightly more verbose as you must specify `id` and `for` attributes to relate the `<input>` and `<label>`. Bootstrap uses the sibling selector (`~`) for all of its `<input>` states, like `:checked` or `:disabled`. When combined with the `.form-check-label` class, Bootstrap can easily style the text for each item based on the `<input>`'s state.
Bootstrap's checks use custom icons built by Bootstrap to indicate checked or indeterminate states.

### Checks

```
<div class="form-check">
    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
    <label class="form-check-label" for="flexCheckDefault">
        Default checkbox
    </label>
</div>
<div class="form-check">
    <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" checked>
    <label class="form-check-label" for="flexCheckChecked">
        Checked checkbox
    </label>
</div>
```

#### Indeterminate

Checkboxes can utilize the `:indeterminate` pseudo-class when manually set via JavaScript (there is no available HTML attribute for specifying it).
```
<div class="form-check">
    <input class="form-check-input" type="checkbox" value="" id="flexCheckIndeterminate">
    <label class="form-check-label" for="flexCheckIndeterminate">
        Indeterminate checkbox
    </label>
</div>
```

#### Disabled

Add the `disabled` attribute and the associated `<label>`s are automatically styled to match with a lighter color to help indicate the input's state.
```
<div class="form-check">
    <input class="form-check-input" type="checkbox" value="" id="flexCheckDisabled" disabled>
    <label class="form-check-label" for="flexCheckDisabled">
        Disabled checkbox
    </label>
</div>
<div class="form-check">
    <input class="form-check-input" type="checkbox" value="" id="flexCheckCheckedDisabled" checked disabled>
    <label class="form-check-label" for="flexCheckCheckedDisabled">
        Disabled checked checkbox
    </label>
</div>
```
(All of the code examples in this **Checks** section can be found in my accompanying [`checkbox-examples.html`](https://github.com/AndrewSRea/My_Learning_Port/blob/main/Bootstrap/Forms/checkbox-examples.html) file.)

### Radios

```
<div class="form-check">
    <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1">
    <label class="form-check-label" for="flexRadioDefault1">
        Default radio
    </label>
</div>
<div class="form-check">
    <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked>
    <label class="form-check-label" for="flexRadioDefault2">
        Default checked radio
    </label>
</div>
```

#### Disabled

Add the `disabled` attribute and the associated `<label>`s are automatically styled to match with a lighter color to help indicate the input's state.
```
<div class="form-check">
    <input class="form-check-input" type="radio" name="flexRadioDisabled" id="flexRadioDisabled" disabled>
    <label class="form-check-label" for="flexRadioDisabled">
        Disabled radio
    </label>
</div>
<div class="form-check">
    <input class="form-check-input" type="radio" name="flexRadioDisabled" id="flexRadioCheckedDisabled" checked disabled>
    <label class="form-check-label" for="flexRadioCheckedDisabled">
        Disabled checked radio
    </label>
</div>
```
(All of the code examples in this **Radios** section can be found in my accompanying [`radio-button-examples.html`](https://github.com/AndrewSRea/My_Learning_Port/blob/main/Bootstrap/Forms/radio-button-examples.html) file.)

### Switches

A switch has the markup of a custom checkbox but uses the `.form-switch` class to render a toggle switch. Switches also support the `disabled` attribute.
```
<div class="form-check form-switch">
    <input class="form-check-input" type="checkbox" id="flexSwitchCheckDefault">
    <label class="form-check-label" for="flexSwitchCheckDefault">Default switch checkbox input</label>
</div>
<div class="form-check form-switch">
    <input class="form-check-input" type="checkbox" id="flexSwitchCheckChecked">
    <label class="form-check-label" for="flexSwitchCheckChecked">Checked switch checkbox input</label>
</div>
<div class="form-check form-switch">
    <input class="form-check-input" type="checkbox" id="flexSwitchCheckDisabled">
    <label class="form-check-label" for="flexSwitchCheckDisabled">Disabled switch checkbox input</label>
</div>
<div class="form-check form-switch">
    <input class="form-check-input" type="checkbox" id="flexSwitchCheckCheckedDisabled">
    <label class="form-check-label" for="flexSwitchCheckCheckedDisabled">Disabled checked switch checkbox input</label>
</div>
```

### Default (stacked)

By default, any number of checkboxes and radios that are immediate siblings will be vertically stacked and appropriately spaced with `.form-check`.
```
<div class="form-check">
    <input class="form-check-input" type="checkbox" value="" id="defaultCheck1">
    <label class="form-check-label" for="defaultCheck1">
        Default checkbox
    </label>
</div>
<div class="form-check">
    <input class="form-check-input" type="checkbox" value="" id="defaultCheck2" disabled>
    <label class="form-check-label" for="defaultCheck2">
        Disabled checkbox
    </label>
</div>
```
```
<div class="form-check">
    <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" checked>
    <label class="form-check-label" for="exampleRadios1">
        Default radio
    </label>
</div>
<div class="form-check">
    <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="option2">
    <label class="form-check-label" for="exampleRadios2">
        Second default radio
    </label>
</div>
<div class="form-check">
    <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios3" value="option3" disabled>
    <label class="form-check-label" for="exampleRadios3">
        Disabled radio
    </label>
</div>
```

### Inline

Group checkboxes or radios on the same horizontal row by adding `.form-check-inline` to any `.form-check`.
```
<div class="form-check form-check-inline">
    <input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1">
    <label class="form-check-label" for="inlineCheckbox1">1</label>
</div>
<div class="form-check form-check-inline">
    <input class="form-check-input" type="checkbox" id="inlineCheckbox2" value="option2">
    <label class="form-check-label" for="inlineCheckbox2">2</label>
</div>
<div class="form-check form-check-inline">
    <input class="form-check-input" type="checkbox" id="inlineCheckbox3" value="option3" disabled>
    <label class="form-check-label" for="inlineCheckbox3">3 (disabled)</label>
</div>
```
```
<div class="form-check form-check-inline">
    <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1">
    <label class="form-check-label" for="inlineRadio1">1</label>
</div>
<div class="form-check form-check-inline">
    <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2">
    <label class="form-check-label" for="inlineRadio2">2</label>
</div>
<div class="form-check form-check-inline">
    <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio3" value="option3" disabled>
    <label class="form-check-label" for="inlineRadio3">3 (disabled)</label>
</div>
```
(All of the code examples from the **Switches**, **Default (stacked)**, and **Inline** sections can be found in my accompanying [`checkbox-radio-misc-examples.html`](https://github.com/AndrewSRea/My_Learning_Port/blob/main/Bootstrap/Forms/checkbox-radio-misc-examples.html) file.)

### Without labels

Omit the wrapping `.form-check` for checkboxes and radios which have no label text. Remember to still provide some form of accessible name for assistive technologies (for instance, using `aria-label`). See the [forms overview accessibility](https://github.com/AndrewSRea/My_Learning_Port/tree/main/Bootstrap/Forms#accessibility) section for details.
```
<div>
    <input class="form-check-input" type="checkbox" id="checkboxNoLabel" value="" aria-label="...">
</div>
<div>
    <input class="form-check-input" type="radio" name="radioNoLabel" id="radioNoLabel1" value="" aria-label="...">
</div>
```

### Toggle buttons

Create button-like checkboxes and radio buttons by using `.btn` styles rather than `.form-check-label` on the `<label>` elements. These toggle buttons can further be grouped in a [button group]() if needed. <!-- link to Components folder / Button group -->

#### Checkbox toggle buttons

```
<input type="checkbox" class="btn-check" id="btn-check" autocomplete="off">
<label class="btn btn-primary" for="btn-check">Single toggle</label>
```
```
<input type="checkbox" class="btn-check" id="btn-check-2" checked autocomplete="off">
<label class="btn btn-primary" for="btn-check-2">Checked</label>
```
```
<input type="checkbox" class="btn-check" id="btn-check-3" autocomplete="off" disabled>
<label class="btn btn-primary" for="btn-check-3">Disabled</label>
```
See this code example in my accompanying [`checkbox-radio-misc-examples-2.html`](https://github.com/AndrewSRea/My_Learning_Port/blob/main/Bootstrap/Forms/checkbox-radio-misc-examples-2.html) file.

<hr>

:warning: Visually, these checkbox toggle buttons are identical to the [button plugin toggle buttons](). <!-- link to Components folder / Buttons / Button plugin --> However, they are conveyed differently by assistive technologies: the checkbox toggles will be announced by screen readers as "checked"/"not checked" (since, despite their appearance, they are fundamentally still checkboxes), whereas the button plugin toggle buttons will be announced as "button"/"button pressed". The choice between these two approaches will depend on the type of toggle you are creating, and whether or not the toggle will make sense to users when announced as a checkbox or as an actual button.

<hr>

#### Radio toggle buttons

```
<input type="radio" class="btn-check" name="options" id="option1" autocomplete="off" checked>
<label class="btn btn-secondary" for="option1">Checked</label>

<input type="radio" class="btn-check" name="options" id="option2" autocomplete="off">
<label class="btn btn-secondary" for="option2">Radio</label>

<input type="radio" class="btn-check" name="options" id="option3" autocomplete="off" disabled>
<label class="btn btn-secondary" for="option3">Disabled</label>

<input type="radio" class="btn-check" name="options" id="option4" autocomplete="off">
<label class="btn btn-secondary" for="option4">Radio</label>
```
See this code example in my accompanying [`checkbox-radio-misc-examples-2.html`](https://github.com/AndrewSRea/My_Learning_Port/blob/main/Bootstrap/Forms/checkbox-radio-misc-examples-2.html) file.

#### Outlined styles

Defined variants of `.btn`, such as the various outlined styles, are supported.
```
<input type="checkbox" class="btn-check" id="btn-check-outlined" autocomplete="off">
<label class="btn btn-outline-primary" for="btn-check-outlined">Single toggle</label><br>

<input type="checkbox" class="btn-check" id="btn-check-2-outlined" checked autocomplete="off">
<label class="btn btn-outline-secondary" for="btn-check-2-outlined">Checked</label><br>

<input type="radio" class="btn-check" name="options-outlined" id="success-outlined" autocomplete="off" checked>
<label class="btn btn-outline-success" for="success-outlined">Checked success radio</label>

<input type="radio" class="btn-check" name="options-outlined" id="danger-outlined" autocomplete="off">
<label class="btn btn-outline-danger" for="danger-outlined">Danger radio</label>
```
See this code example in my accompanying [`checkbox-radio-misc-examples-2.html`](https://github.com/AndrewSRea/My_Learning_Port/blob/main/Bootstrap/Forms/checkbox-radio-misc-examples-2.html) file.

## Range

Use Bootstrap's custom range inputs for consistent cross-browser styling and built-in customization.

### Overview

Create custom `<input type="range">` controls with `.form-range`. The track (the background) and thumb (the value) are both styled to appear the same across browsers. As only Edge Legacy and Firefox supports "filling" their track from the left or right of the thumb as a means to visually indicate progress, Bootstrap do not currently support it.
```
<label for="customRange1" class="form-label">Example range</label>
<input type="range" class="form-range" id="customRange1">
```
See all the code examples in this **Range** section in my accompanying [`range-examples.html`](https://github.com/AndrewSRea/My_Learning_Port/blob/main/Bootstrap/Forms/checkbox-radio-misc-examples-2.html) file.

### Disabled

Add the `disabled` Boolean attribute on an input to give it a grayed out appearance and remove pointer events.
```
<label for="disabledRange" class="form-label">Disabled range</label>
<input type="range" class="form-range" id="disabledRange" disabled>
```

### Min and max

Range inputs have implicit values for `min` and `max`--`0` and `100`, respectively. You may specify new values for those using the `min` and `max` attributes.
```
<label for="customRange2" class="form-label">Example range</label>
<input type="range" class="form-range" min="0" max="5" id="customRange2">
```

### Steps

By default, range inputs "snap" to integer values. To change this, you can specify a `step` value. In the example below, we double the number of steps by using `step="0.5"`.
```
<label for="customRange3" class="form-label">Example range</label>
<input type="range" class="form-range" min="0" max="5" step="0.5" id="customRange3">
```

## Input group

Easily extend form controls by adding text, buttons, or button groups on either side of textual inputs, custom selects, and custom file inputs.

### Basic example

Place one add-on or button on either side of an input. You may also place one on both sides of an input. Remember to place `<label>`s outside the input group.
See all the code examples in this **Input group** section in my accompanying [`input-group-examples.html`](https://github.com/AndrewSRea/My_Learning_Port/blob/main/Bootstrap/Forms/input-group-examples.html) file.
```
<div class="input-group mb-3">
    <span class="input-group-text" id="basic-addon1">@</span>
    <input type="text" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1">
</div>

<div class="input-group mb-3">
    <input type="text" class="form-control" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="basic-addon2">
    <span class="input-group-text" id="basic-addon2">@example.com</span>
</div>

<label for="basic-url" class="form-label">Your vanity URL</label>
<div class="input-group mb-3">
    <span class="input-group-text" id="basic-addon3">https://example.com/users/</span>
    <input type="text" class="form-control" id="basic-url" aria-describedby="basic-addon3">
</div>

<div class="input-group mb-3">
    <span class="input-group-text">$</span>
    <input type="text" class="form-control" aria-label="Amount (to the nearest dollar">
    <span class="input-group-text">.00</span>
</div>

<div class="input-group mb-3">
    <input type="text" class="form-control" placeholder="Username" aria-label="Username">
    <span class="input-group-text">@</span>
    <input type="text" class="form-control" placeholder="Server" aria-label="Server">
</div>

<div class="input-group">
    <span class="input-group-text">With textarea</span>
    <textarea class="form-control" aria-label="With textarea"></textarea>
</div>
```

### Wrapping

Input groups wrap by default via `flex-wrap: wrap` in order to accomodate custom field validation within an input group. You may disable this with `.flex-nowrap`.
```
<div class="input-group flex-nowrap">
    <span class="input-group-text" id="addon-wrapping">@</span>
    <input type="text" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="addon-wrapping">
</div>
```

### Sizing

Add the relative form sizing classes to the `.input-group` itself and contents within will automatically resize--no need for repeating the form control size classes on each element.
**Sizing on the individual input group elements isn't supported.**
```
<div class="input-group input-group-sm mb-3">
    <span class="input-group-text" id="inputGroup-sizing-sm">Small</span>
    <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm">
</div>

<div class="input-group mb-3">
    <span class="input-group-text" id="inputGroup-sizing-default">Default</span>
    <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default">
</div>

<div class="input-group input-group-lg">
    <span class="input-group-text" id="inputGroup-sizing-lg">Large</span>
    <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg">
</div>
```

### Checkboxes and radios

Place any checkbox or radio option within an input group's addon instead of text.
```
<div class="input-group mb-3">
    <div class="input-group-text">
        <input class="form-check-input" type="checkbox" value="" aria-label="Checkbox for following text input">
    </div>
    <input type="text" class="form-control" aria-label="Text input with checkbox">
</div>

<div class="input-group">
    <div class="input-group-text">
        <input class="form-check-input" type="radio" value="" aria-label="Radio button for following text input">
    </div>
    <input type="text" class="form-control" aria-label="Text input with radio button">
</div>
```

### Multiple inputs

While multiple `<input>`s are supported visually, validation styles are only available for input groups with a single `<input>`.
```
<div class="input-group">
    <span class="input-group-text">First and last name</span>
    <input type="text" aria-label="First name" class="form-control">
    <input type="text" aria-label="Last name" class="form-control">
</div>
```
See this code example in my accompanying [`input-group-examples-2.html`](https://github.com/AndrewSRea/My_Learning_Port/blob/main/Bootstrap/Forms/input-group-examples-2.html) file.

### Mutliple addons

Multiple add-ons are supported and can be mixed with checkbox and radio input versions.
```
<div class="input-group mb-3">
    <span class="input-group-text">$</span>
    <span class="input-group-text">0.00</span>
    <input type="text" class="form-control" aria-label="Dollar amount (with dot and two decimal places)">
</div>

<div class="input-group">
    <input type="text" class="form-control" aria-label="Dollar amount (with dot and two decimal places)">
    <span class="input-group-text">$</span>
    <span class="input-group-text">0.00</span>
</div>
```
See this code example in my accompanying [`input-group-examples-2.html`](https://github.com/AndrewSRea/My_Learning_Port/blob/main/Bootstrap/Forms/input-group-examples-2.html) file.

### Button addons

```
<div class="input-group mb-3">
    <button class="btn btn-outline-secondary" type="button" id="button-addon1">Button</button>
    <input type="text" class="form-control" placeholder="" aria-label="Example text with button addon" aria-describedby="button-addon1">
</div>

<div class="input-group mb-3">
    <input type="text" class="form-control" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="button-addon2">
    <button class="btn btn-outline-secondary" type="button" id="button-addon2">Button</button>
</div>

<div class="input-group mb-3">
    <button class="btn btn-outline-secondary" type="button">Button</button>
    <button class="btn btn-outline-secondary" type="button">Button</button>
    <input type="text" class="form-control" placeholder="" aria-label="Example text with two button addons">
</div>

<div class="input-group">
    <input type="text" class="form-control" placeholder="Recipient's username" aria-label="Recipient's username with two button addons">
    <button class="btn btn-outline-secondary" type="button">Button</button>
    <button class="btn btn-outline-secondary" type="button">Button</button>
</div>
```
See this code example in my accompanying [`input-group-examples-2.html`](https://github.com/AndrewSRea/My_Learning_Port/blob/main/Bootstrap/Forms/input-group-examples-2.html) file.

### Buttons with dropdowns

```
<div class="input-group mb-3">
    <button class="btn btn-outline-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">Dropdown</button>
    <ul class="dropdown-menu">
        <li><a class="dropdown-item" href="#">Action</a></li>
        <li><a class="dropdown-item" href="#">Another action</a></li>
        <li><a class="dropdown-item" href="#">Something else here</a></li>
        <li><hr class="dropdown-divider"></li>
        <li><a class="dropdown-item" href="#">Separated link</a></li>
    </ul>
    <input type="text" class="form-control" aria-label="Text input with dropdown button">
</div>

<div class="input-group mb-3">
    <input type="text" class="form-control" aria-label="Text input with dropdown button">
    <button class="btn btn-outline-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">Dropdown</button>
    <ul class="dropdown-menu dropdown-menu-end">
        <li><a class="dropdown-item" href="#">Action</a></li>
        <li><a class="dropdown-item" href="#">Another action</a></li>
        <li><a class="dropdown-item" href="#">Something else here</a></li>
        <li><hr class="dropdown-divider"></li>
        <li><a class="dropdown-item" href="#">Separated link</a></li>
    </ul>
</div>

<div class="input-group">
    <button class="btn btn-outline-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">Dropdown</button>
    <ul class="dropdown-menu">
        <li><a class="dropdown-item" href="#">Action</a></li>
        <li><a class="dropdown-item" href="#">Another action</a></li>
        <li><a class="dropdown-item" href="#">Something else here</a></li>
        <li><hr class="dropdown-divider"></li>
        <li><a class="dropdown-item" href="#">Separated link</a></li>
    </ul>
    <input type="text" class="form-control" aria-label="Text input with 2 dropdown buttons">
    <button class="btn btn-outline-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">Dropdown</button>
    <ul class="dropdown-menu dropdown-menu-end">
        <li><a class="dropdown-item" href="#">Action</a></li>
        <li><a class="dropdown-item" href="#">Another action</a></li>
        <li><a class="dropdown-item" href="#">Something else here</a></li>
        <li><hr class="dropdown-divider"></li>
        <li><a class="dropdown-item" href="#">Separated link</a></li>
    </ul>
</div>
```
See this code example in my accompanying [`input-group-examples-2.html`](https://github.com/AndrewSRea/My_Learning_Port/blob/main/Bootstrap/Forms/input-group-examples-2.html) file.

### Segmented buttons

```
<div class="input-group mb-3">
    <button type="button" class="btn btn-outline-secondary">Action</button>
    <button type="button" class="btn btn-outline-secondary dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false">
        <span class="visually-hidden">Toggle Dropdown</span>
    </button>
    <ul class="dropdown-menu">
        <li><a class="dropdown-item" href="#">Action</a></li>
        <li><a class="dropdown-item" href="#">Another action</a></li>
        <li><a class="dropdown-item" href="#">Something else here</a></li>
        <li><hr class="dropdown-divider"></li>
        <li><a class="dropdown-item" href="#">Separated link</a></li>
    </ul>
    <input type="text" class="form-control" aria-label="Text input with segmented dropdown button">
</div>

<div class="input-group">
    <input type="text" class="form-control" aria-label="Text input with segmented dropdown button">
    <button type="button" class="btn btn-outline-secondary">Action</button>
    <button type="button" class="btn btn-outline-secondary dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false">
        <span class="visually-hidden">Toggle Dropdown</span>
    </button>
    <ul class="dropdown-menu dropdown-menu-end">
        <li><a class="dropdown-item" href="#">Action</a></li>
        <li><a class="dropdown-item" href="#">Another action</a></li>
        <li><a class="dropdown-item" href="#">Something else here</a></li>
        <li><hr class="dropdown-divider"></li>
        <li><a class="dropdown-item" href="#">Separated link</a></li>
    </ul>
</div>
```
See this code example in my accompanying [`input-group-examples-2.html`](https://github.com/AndrewSRea/My_Learning_Port/blob/main/Bootstrap/Forms/input-group-examples-2.html) file.

### Custom forms

Input groups include support for custom selects and custom file inputs. Browser default versions of these are not supported.

#### Custom select

```
<div class="input-group mb-3">
    <label class="input-group-text" for="inputGroupSelect01">Options</label>
    <select class="form-select" id="inputGroupSelect01">
        <option selected>Choose...</option>
        <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
    </select>
</div>

<div class="input-group mb-3">
    <select class="form-select" id="inputGroupSelect02">
        <option selected>Choose...</option>
        <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
    </select>
    <label class="input-group-text" for="inputGroupSelect02">Options</label>
</div>

<div class="input-group mb-3">
    <button class="btn btn-secondary" type="button">Button</button>
    <select class="form-select" id="inputGroupSelect03" aria-label="Example select with button addon">
        <option selected>Choose...</option>
        <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
    </select>
</div>

<div class="input-group">
    <select class="form-select" id="inputGroupSelect04" aria-label="Example select with button addon">
        <option selected>Choose...</option>
        <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
    </select>
    <button class="btn btn-outline-secondary" type="button">Button</button>
</div>
```
See this code example in my accompanying [`custom-forms-examples.html`](https://github.com/AndrewSRea/My_Learning_Port/blob/main/Bootstrap/Forms/custom-forms-examples.html) file.

#### Custom file input

```
<div class="input-group mb-3">
    <label class="input-group-text" for="inputGroupFile01">Upload</label>
    <input type="file" class="form-control" id="inputGroupFile01">
</div>

<div class="input-group mb-3">
    <input type="file" class="form-control" id="inputGroupFile02">
    <label class="input-group-text" for="inputGroupFile02">Upload</label>
</div>

<div class="input-group mb-3">
    <button class="btn btn-outline-secondary" type="button" id="inputGroupFileAddon03">Button</button>
    <input type="file" class="form-control" id="inputGroupFile03" aria-describedby="inputGroupFileAddon03" aria-label="Upload">
</div>

<div class="input-group">
    <input type="file" class="form-control" id="inputGroupFile04" aria-describedby="inputGroupFileAddon04" aria-label="Upload">
    <button class="btn btn-outline-secondary" type="button" id="inputGroupFileAddon04">Button</button>
</div>
```
See this code example in my accompanying [`custom-forms-examples.html`](https://github.com/AndrewSRea/My_Learning_Port/blob/main/Bootstrap/Forms/custom-forms-examples.html) file.

## Floating labels

Create beautifully simple form labels which float over your input fields.

### Example

Wrap a pair of `<input class="form-control">` and `<label>` elements in `.form-floating` to enable floating labels with Bootstrap's textual form fields. A `placeholder` is required on each `<input>` as Bootstrap's method of CSS-only floating labels uses the `:placeholder-shown` pseudo-element. Also, note that the `<input>` must come first so Bootstrap can utilize a sibling selector (e.g., `~`).
```
<div class="form-floating mb-3">
    <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com">
    <label for="floatingInput">Email address</label>
</div>
<div class="form-floating">
    <input type="password" class="form-control" id="floatingPassword" placeholder="Password">
    <label for="floatingPassword">Password</label>
</div>
```
When there's a `value` already defined, `<label>`s will automatically adjust to their floated position.
```
<form class="form-floating">
    <input type="email" class="form-control" id="floatingInputValue" placeholder="name@example.com" value="text@example.com">
    <label for="floatingInputValue">Input with value</label>
</form>
```
Form validation styles also work as expected.
```
<form class="form-floating">
    <input type="email" class="form-control is-invalid" id="floatingInputInvalid" placeholder="name@example.com" value="text@example.com">
    <label for="floatingInputInvalid">Invalid input</label>
</form>
```

### Textareas