<!-- add link to the Customize folder README opening page -->

# Select

Customize the native `<select>`s with custom CSS that changes the element's initial appearance.

## Default

Custom `<select>` menus need only a custom class, `.form-select`, to trigger the custom styles. Custom styles are limited to the `<select>`'s initial appearance anc cannot modify the `<option>`s due to browser limitiations.
```
<select class="form-select" aria-label="Default select example">
    <option selected>Open this select menu</option>
    <option value="1">One</option>
    <option value="2">Two</option>
    <option value="3">Three</option>
</select>
```

## Sizing

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

## Disabled

Add the `disabled` Boolean attribute on a select to give it a grayed out appearance and remove pointer events.
```
<select class="form-select" aria-label="Disabled select example" disabled>
    <option selected>Open this select menu</option>
    <option value="1">One</option>
    <option value="2">Two</option>
    <option value="3">Three</option>
</select>
```

(All of the code examples in this **Select menus** section can be found in my accompanying [`select-menus-examples.html`](https://github.com/AndrewSRea/My_Learning_Port/blob/main/Bootstrap/Forms/Select/select-menus-examples.html) file.)

<hr>

[[Previous page]](https://github.com/AndrewSRea/My_Learning_Port/tree/main/Bootstrap/Forms/Form_Control#form-controls) - [[Top]](https://github.com/AndrewSRea/My_Learning_Port/tree/main/Bootstrap/Forms/Select#select) - [[Next page]](https://github.com/AndrewSRea/My_Learning_Port/tree/main/Bootstrap/Forms/Checks_and_Radios#checks-and-radios)