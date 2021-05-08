# Checks and radios 

Create consistent cross-browser and cross-device checkboxes and radios with Bootstrap's completely rewritten checks component.

## Approach

Browser default checkboxes and radios are replaced with the help of `.form-check`, a series of classes for both input types that improves the layout and behavior of their HTML elements, which provide greater customization and cross browser consistency. Checkboxes are for selecting one or several options in a list, while radios are for selecting one option from many.

Structurally, Boostrap's `<input>`s and `<label>`s are sibling elements as opposed to an `<input>` within a `<label>`. This is slightly more verbose as you must specify `id` and `for` attributes to relate the `<input>` and `<label>`. Bootstrap uses the sibling selector (`~`) for all of its `<input>` states, like `:checked` or `:disabled`. When combined with the `.form-check-label` class, Bootstrap can easily style the text for each item based on the `<input>`'s state.

Bootstrap's checks use custom icons built by Bootstrap to indicate checked or indeterminate states.

## Checks

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
(You can find this code example in my accompanying [`checkbox-examples.html`](https://github.com/AndrewSRea/My_Learning_Port/blob/main/Bootstrap/Forms/Checks_and_Radios/checkbox-examples.html) file.)

### Indeterminate

Checkboxes can utilize the `:indeterminate` pseudo-class when manually set via JavaScript (there is no available HTML attribute for specifying it).
```
<div class="form-check">
    <input class="form-check-input" type="checkbox" value="" id="flexCheckIndeterminate">
    <label class="form-check-label" for="flexCheckIndeterminate">
        Indeterminate checkbox
    </label>
</div>
```
(Again, this code example can be found in my accompanying [`checkbox-examples.html`](https://github.com/AndrewSRea/My_Learning_Port/blob/main/Bootstrap/Forms/Checks_and_Radios/checkbox-examples.html) file.)

### Disabled

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
(And this code example can be found in my accompanying [`checkbox-examples.html`](https://github.com/AndrewSRea/My_Learning_Port/blob/main/Bootstrap/Forms/Checks_and_Radios/checkbox-examples.html) file.)

## Radios

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
(This code example can be found in my accompanying [`radio-button-examples.html`](https://github.com/AndrewSRea/My_Learning_Port/blob/main/Bootstrap/Forms/Checks_and_Radios/radio-button-examples.html) file.)

### Disabled

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
(And this code example can be found in my accompanying [`radio-button-examples.html`](https://github.com/AndrewSRea/My_Learning_Port/blob/main/Bootstrap/Forms/Checks_and_Radios/radio-button-examples.html) file.)

## Switches

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
(This code example can be found in my accompanying [`checkbox-radio-misc-examples.html`](https://github.com/AndrewSRea/My_Learning_Port/blob/main/Bootstrap/Forms/Checks_and_Radios/checkbox-radio-misc-examples.html) file.)

## Default (stacked)

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
(The two code examples above can be found in my accompanying [`checkbox-radio-misc-examples.html`](https://github.com/AndrewSRea/My_Learning_Port/blob/main/Bootstrap/Forms/Checks_and_Radios/checkbox-radio-misc-examples.html) file.)

## Inline

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
(The two code examples above can be found in my accompanying [`checkbox-radio-misc-examples.html`](https://github.com/AndrewSRea/My_Learning_Port/blob/main/Bootstrap/Forms/Checks_and_Radios/checkbox-radio-misc-examples.html) file.)

## Without labels

Omit the wrapping `.form-check` for checkboxes and radios which have no label text. Remember to still provide some form of accessible name for assistive technologies (for instance, using `aria-label`). See the [forms overview accessibility](https://github.com/AndrewSRea/My_Learning_Port/tree/main/Bootstrap/Forms#accessibility) section for details.
```
<div>
    <input class="form-check-input" type="checkbox" id="checkboxNoLabel" value="" aria-label="...">
</div>
<div>
    <input class="form-check-input" type="radio" name="radioNoLabel" id="radioNoLabel1" value="" aria-label="...">
</div>
```
(See this code example in my accompanying [`checkbox-radio-misc-examples-2.html`](https://github.com/AndrewSRea/My_Learning_Port/blob/main/Bootstrap/Forms/Checks_and_Radios/checkbox-radio-misc-examples-2.html) file.)

## Toggle buttons

Create button-like checkboxes and radio buttons by using `.btn` styles rather than `.form-check-label` on the `<label>` elements. These toggle buttons can further be grouped in a [button group](https://github.com/AndrewSRea/My_Learning_Port/tree/main/Bootstrap/Components/Button_Group#button-group) if needed.

### Checkbox toggle buttons

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
(This code example is also in my accompanying [`checkbox-radio-misc-examples-2.html`](https://github.com/AndrewSRea/My_Learning_Port/blob/main/Bootstrap/Forms/Checks_and_Radios/checkbox-radio-misc-examples-2.html) file.)

<hr>

:warning: Visually, these checkbox toggle buttons are identical to the [button plugin toggle buttons](https://github.com/AndrewSRea/My_Learning_Port/tree/main/Bootstrap/Components/Buttons#button-plugin). However, they are conveyed differently by assistive technologies: the checkbox toggles will be announced by screen readers as "checked"/"not checked" (since, despite their appearance, they are fundamentally still checkboxes), whereas the button plugin toggle buttons will be announced as "button"/"button pressed". The choice between these two approaches will depend on the type of toggle you are creating, and whether or not the toggle will make sense to users when announced as a checkbox or as an actual button.

<hr>

### Radio toggle buttons

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
(Again, see this code example in my accompanying [`checkbox-radio-misc-examples-2.html`](https://github.com/AndrewSRea/My_Learning_Port/blob/main/Bootstrap/Forms/Checks_and_Radios/checkbox-radio-misc-examples-2.html) file.)

### Outlined styles

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
(And again, see this code example in my accompanying [`checkbox-radio-misc-examples-2.html`](https://github.com/AndrewSRea/My_Learning_Port/blob/main/Bootstrap/Forms/Checks_and_Radios/checkbox-radio-misc-examples-2.html) file.)

## Sass

### Variables

```
$form-check-input-width:                        1em;
$form-check-min-height:                         $font-size-base * $line-height-base;
$form-check-padding-start:                      $form-check-input-width + .5em;
$form-check-margin-bottom:                      .125rem;
$form-check-label-color:                        null;
$form-check-label-cursor:                       null;
$form-check-transition:                         null;

$form-check-input-active-filter:                brightness(90%);

$form-check-input-bg:                           $input-bg;
$form-check-input-border:                       1px solid rgba($black, .25);
$form-check-input-border-radius:                .25em;
$form-check-radio-border-radius:                50%;
$form-check-input-focus-border:                 $input-focus-border-color;
$form-check-input-focus-box-shadow:             $input-btn-focus-box-shadow;

$form-check-input-checked-color:                $component-active-color;
$form-check-input-checked-bg-color:             $component-active-bg;
$form-check-input-checked-border-color:         $form-check-input-checked-bg-color;
$form-check-input-checked-bg-image:             url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'><path fill='none' stroke='#{$form-check-input-checked-color}' stroke-linecap='round' stroke-linejoin='round' stroke-width='3' d='M6 10l3 3l6-6'/></svg>");
$form-check-radio-checked-bg-image:             url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'><circle r='2' fill='#{$form-check-input-checked-color}'/></svg>");

$form-check-input-indeterminate-color:          $component-active-color;
$form-check-input-indeterminate-bg-color:       $component-active-bg;
$form-check-input-indeterminate-border-color:   $form-check-input-indeterminate-bg-color;
$form-check-input-indeterminate-bg-image:       url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'><path fill='none' stroke='#{$form-check-input-indeterminate-color}' stroke-linecap='round' stroke-linejoin='round' stroke-width='3' d='M6 10h8'/></svg>");

$form-check-input-disabled-opacity:             .5;
$form-check-label-disabled-opacity:             $form-check-input-disabled-opacity;
$form-check-btn-check-disabled-opacity:         $btn-disabled-opacity;

$form-check-inline-margin-end:                  1rem;
```

<hr>

[[Previous page]](https://github.com/AndrewSRea/My_Learning_Port/tree/main/Bootstrap/Forms/Select#select) - [[Top]](https://github.com/AndrewSRea/My_Learning_Port/tree/main/Bootstrap/Forms/Checks_and_Radios#checks-and-radios) - [[Next page]]()