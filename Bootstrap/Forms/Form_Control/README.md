# Form controls

Give textual form controls like `<input>`s and `<textarea>`s an upgrade with custom styles, sizing, focus states, and more.

## Example

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

## Sizing

Set heights using classes like `.form-control-lg` and `.form-control-sm`.
```
<input class="form-control form-control-lg" type="text" placeholder=".form-control-lg" aria-label=".form-control-lg example">
<input class="form-control" type="text" placeholder="Default input" aria-label="default input example">
<input class="form-control form-control-sm" type="text" placeholder=".form-control-sm" aria-label=".form-control-sm example">
```
(The code example above can be found in my accompanying [`form-controls-example.html`](https://github.com/AndrewSRea/My_Learning_Port/blob/main/Bootstrap/Forms/form-controls-example.html) file.)

## Disabled

Add the `disabled` Boolean attribute on an input to give it a grayed out appearance and remove pointer events.
```
<input class="form-control" type="text" placeholder="Disabled input" aria-label="Disabled input example" disabled>
<input class="form-control" type="text" placeholder="Disabled readonly input" aria-label="Disabled input example" disabled readonly>
```
(The code example above can be found in my accompanying [`form-controls-example.html`](https://github.com/AndrewSRea/My_Learning_Port/blob/main/Bootstrap/Forms/form-controls-example.html) file.)

## Readonly

Add the `readonly` Boolean attribute on an input to prevent modification of the input's value. Read-only inputs appear lighter (just like disabled inputs), but retain the standard cursor.
```
<input class="form-control" type="text" placeholder="Readonly input here..." aria-label="readonly input example" readonly>
```

## Readonly plain text

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

## File input

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

## Color

```
<label for="exampleColorInput" class="form-label">Color picker</label>
<input type="color" class="form-control form-control-color" id="exampleColorInput" value="#563d7c" title="Choose your color">
```

## Datalists

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