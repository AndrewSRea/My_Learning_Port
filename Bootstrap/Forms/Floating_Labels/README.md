# Floating labels

Create beautifully simple form labels which float over your input fields.

## Example

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
Form validation styles also work as expected. (To be covered in the [Validation](#validation) section below.)
```
<form class="form-floating">
    <input type="email" class="form-control is-invalid" id="floatingInputInvalid" placeholder="name@example.com" value="text@example.com">
    <label for="floatingInputInvalid">Invalid input</label>
</form>
```
(The three code examples above can be found in my accompanying [`floating-labels-examples.html`](https://github.com/AndrewSRea/My_Learning_Port/blob/main/Bootstrap/Forms/Floating_Labels/floating-labels-examples.html) file.)

## Textareas

By default, `<textarea>`s with `.form-control` will be the same height as `<input>`s.
```
<div class="form-floating">
    <textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea"></textarea>
    <label for="floatingTextarea">Comments</label>
</div>
```
To set a custom height on your `<textarea>`, do not use the `rows` attribute. Instead, set an explicit `height` (either inline or via custom CSS).
```
<div class="form-floating">
    <textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea2" style="height: 100px;"></textarea>
    <label for="floatingTextarea2">Comments</label>
</div>
```
(These two code examples above can be found in my accompanying [`floating-labels-examples.html`](https://github.com/AndrewSRea/My_Learning_Port/blob/main/Bootstrap/Forms/Floating_Labels/floating-labels-examples.html) file.)

## Selects

Other than `.form-control`, floating labels are only available on `.form-select`s. They work in the same way, but unlike `<input>`s, they'll always show the `<label>` in its floated state.
```
<div class="form-floating">
    <select class="form-select" id="floatingSelect" aria-label="Floating label select example">
        <option selected>Open this select menu</option>
        <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
    </select>
    <label for="floatingSelect">Works with selects</label>
</div>
```
(This code example can be found in my accompanying [`floating-labels-examples-2.html`](https://github.com/AndrewSRea/My_Learning_Port/blob/main/Bootstrap/Forms/Floating_Labels/floating-labels-examples-2.html) file.)

# Layout

When working with the Bootstrap grid system, be sure to place form elements within column classes.
```
<div class="row g-2">
    <div class="col-md">
        <div class="form-floating">
            <input type="email" class="form-control" id="floatingInputGrid" placeholder="name@example.com" value="mdo@example.com">
            <label for="floatingInputGrid">Email address</label>
        </div>
    </div>
    <div class="col-md">
        <div class="form-floating">
            <select class="form-select" id="floatingSelectGrid" aria-label="Floating label select example">
                <option selected>Open this select menu</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
            </select>
            <label for="floatingSelectGrid">Works with selects</label>
        </div>
    </div>
</div>
```
(And this code example can also be found in my accompanying [`floating-labels-examples-2.html`](https://github.com/AndrewSRea/My_Learning_Port/blob/main/Bootstrap/Forms//Floating_Labels/floating-labels-examples-2.html) file.)

