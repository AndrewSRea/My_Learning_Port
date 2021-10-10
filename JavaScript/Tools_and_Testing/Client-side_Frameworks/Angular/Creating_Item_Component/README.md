# Creating an item component

Components provide a way for you to organize your application. This article walks you through creating a component to handle the individual items in the list, and adding check, edit, and delete functionality. The Angular event model is covered here.

## Creating the new component

At the command line, create a component named `item` with the following CLI command:
```
ng generate component item
```
The `ng generate component` command create a component and folder with the name you specify. Here, the folder and component name is `item`. You can find the `item` directory within the `app` folder.

Just as with the `AppComponent`, the `ItemComponent` is made up of the following files:

* `item.component.html` for HTML.
* `item.component.ts` for logic.
* `item.component.css` for styles.

You can see a reference to the HTML and CSS files in the `@Component()` decorator metadata in `item.component.ts`.
```
@Component({
    selector: 'app-item',
    templateUrl: './item.component.html',
    styleUrls: ['./item.component.css'],
})
```

## Add HTML for the ItemComponent

The `ItemComponent` can take over the task of giving the user a way to check items off as done, edit them, or delete them.

Add markup for managing items by replacing the placeholder content in `item.component.html` with the following:
```
<div class="item">

    <input [id]="item.description" type="checkbox" (change)="item.done = !item.done" [checked]="item.done" />
    <label [for]="item.description">{{item.description}}</label>

    <div class="btn-wrapper" *ngIf="!editable">
        <button class="btn" (click)="editable = !editable">Edit</button>
        <button class="btn btn-warn" (click)="remove.emit()">Delete</button>
    </div>

    <!-- This section shows only if user clicks Edit button -->
    <div *ngIf="editable">
        <input class="sm-text-input" placeholder="edit item" [value]="item.description" #editedItem (keyup.enter)="saveItem(editedItem.value)">

        <div class="btn-wrapper">
            <button class="btn" (click)="editable = !editable">Cancel</button>
            <button class="btn btn-save" (click)="saveItem(editedItem.value">Save</button>
        </div>
    </div>
    
</div>
```
The first input is a checkbox so users can check off items when an item is complete. The double curly braces, `{{}}`, in the `<input>` and `<label>` for the checkbox signifies Angular's interpolation. Angular uses `{{item.description}}` to retrieve the description of the current `item` from the `items` array. The next section explains how components share data in detail.

The next two buttons for editing and deleting the current item are within a `<div>`. On this `<div>` is an `*ngIf`, a built-in Angular directive that you can use to dynamically change the structure of the DOM.

This `*ngIf` means that if `editable` is `false`, this `<div>` is in the DOM. If `editable` is `true`, Angular removes this `<div>` from the DOM.
```
<div class="btn-wrapper" *ngIf="!editable">
    <button class="btn" (click)="editable = !editable">Edit</button>
    <button class="btn btn-warn" (click)="remove.emit()">Delete</button>
</div>
```
When a user clicks the **Edit** button, `editable` becomes true, which removes this `<div>` and its children from the DOM. If, instead of clicking **Edit**, a user clicks **Delete**, the `ItemComponent` raises an event that notifies the `AppComponent` of the deletion.

An `*ngIf` is also on the next `<div>`, but is set to an `editable` value of `true`. In this case, if `editable` is `true`, Angular puts the `<div>` and its child `<input>` and `<button>` element in the DOM.
```
<!-- This section shows only if user clicks Edit button -->
<div *ngIf="editable">
    <input class="sm-text-input" placeholder="edit item" [value]="item.description" #editedItem (keyup.enter)="saveItem(editedItem.value)">

    <div class="btn-wrapper">
        <button class="btn" (click)="editable = !editable">Cancel</button>
        <button class="btn btn-save" (click)="saveItem(editedItem.value">Save</button>
    </div>
</div>
```
With `[value]="item.description"`, the value of the `<input>` is bound to the `description` of the current item. This binding makes the item's `description` the value of the `<input>`. So if the `description` is `eat`, the `description` is already in the `<input>`. This way, the user edits the item, and the value of the `<input>` is already `eat`.

The template variable, `#editedItem`, on the `<input>` means that Angular stores whatever a user types in this `<input>` in a variable called `editedItem`. The `keyup` event calls the `saveItem()` method and passes in the `editedItem` value if the user chooses to press enter instead of click **Save**.

When a user clicks the **Cancel** button, `editable` toggles to `false`, which removes the input and buttons for editing from the DOM. When `editable` is `false`, Angular puts the `<div>` with the **Edit** and **Delete** buttons back in the DOM.

Clicking the **Save** button calls the `saveItem()` method. The `saveItem()` method takes the value from the `#editedItem` `<input>` and changes the item's `description` to the `editedItem.value` string.

## Prepare the AppComponent

In the next section, you will add code that relies on communication between the `AppComponent` and the `ItemComponent`. Configure the `AppComponent` first by adding the following to `app.component.ts`:
```
remove(item) {
    this.allItems.splice(this.allItems.indexOf(item), 1);
}
```
The `remove()` method uses the JavaScript `Array.splice()` method to remove one item at the `indexOf` the relevant item. In plain English, this means that the `splice()` method removes the item from the array. For more information on the `splice()` method, see the MDN Web Docs article on [`Array.prototype.splice()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice).

## Add logic to ItemComponent

To use the `ItemComponent` UI, you must add logic to the component, such as functions, and ways for data to go in and out.

In `item.component.ts`, edit the JavaScript imports as follows:
```
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Item } from "../item";
```
The additon of `Input`, `Output`, and `EventEmitter` allows `ItemComponent` to share data with `AppComponent`. By importing `Item`, `ItemComponent` can understand what an `item` is.

Further down `item.component.ts`, replace the generated `ItemComponent` class with the following:
```
export class ItemComponent {

    editable = false;

    @Input() item: Item;
    @Input() newItem: string;
    @Output() remove = new EventEmitter<Item>();

    saveItem(description) {
        if (!description) return;
        this.editable = false;
        this.item.description = description;
    }
}
```
The `editable` property helps toggle a section of the template where a user can edit an item. `editable` is the same property in the HTML as in the `*ngIf` statement, `*ngIf="editable"`. When you use a property in the template, you must also declare it in the class.

`@Input()`, `@Output()`, `EventEmitter` facilitate communication between your two components. An `@Input()` serves as a doorway for data to come into the component, and an `@Output()` acts as a doorway for data to go out of the component. An `@Output()` has to be of type `EventEmitter`, so that a component can raise an event when there's data ready to share with another component.

Use `@Input()` to specify that the value of a property can come from outside of the component. Use `@Output()` in conjunction with `EventEmitter` to specify that the value of a property can leave the component so that another component can receive that data.

The `saveItem()` method takes as an argument a `description`. The `description` is the text that the user enters into the HTML `<input>` when editing an item in the list. This `description` is the same string from the `<input>` with the `#editedItem` template variable.

If the user doesn't enter a value but clicks **Save**, `saveItem()` returns nothing and does not update the `description`. If you didn't have this `if` statement, the user could click **Save** with nothing in the HTML `<input>`, and the `description` would become an empty string.

If a user enters text and clicks **Save**, `saveItem()` sets `editable` to `false`, which causes the `*ngIf` in the template to remove the edit feature and render the **Edit** and **Delete** buttons in the DOM again.

Though the application should compile at this point, you need to use the `ItemComponent` in `AppComponent` so you can see the new features in the browser.

## Use the ItemComponent in the AppComponent

Including one component within another in the context of a parent-child relationship gives you the flexibility of using components wherever you need them.

The `AppComponent` serves as a shell for the application where you can include other components.

To use the `ItemComponent` in `AppComponent`, put the `ItemComponent` selector in the `AppComponent` template. Angular specifies the selector of a component in the metadata of the `@Component()` decorator. In this example, the selector is `app-item`:
```
@Component({
    selector: 'app-item',
    templateUrl: './item.component.html',
    styleUrls: ['./item.component.css']
})
```
To use the `ItemComponent` selector within the `AppComponent`, you add the element, `<app-item>`, which corresponds to the selector you defined for the component class to `app.component.html`. Replace the current unordered list in the `app.component.html` with the following updated version:
```
<h2>{{items.length}} <span *ngIf="items.length === 1; else elseBlock">item</span>
<ng-template #elseBlock>items</ng-template></h2>

<ul>
    <li *ngFor="let item of items">
        <app-item (remove)="remove(item)" [item]="item"></app-item>
    </li>
</ul>
```
The double curly brace syntax, `{{}}`, in the `<h2>` interpolates the length of the `items` array and displays the number.

The `<span>` in the `<h2>` uses an `*ngIf` and `else` to determine whether the `<h2>` should say "item" or "items". If there is only a single item in the list, the `<span>` containing the "item" displays. Otherwise, if the length of the `items` array is anything other than `1`, the `<ng-template>`, which we've named `elseBlock`, with the syntax `#elseBlock`, shows instead of the `<span>`. You can use Angular's `<ng-template>` when you don't want content to render by default. In this case, when the length of the `items` array is not `1`, the `*ngIf` shows the `elseBlock` and not the `<span>`.

The `<li>` uses Angular's repeater directive, `*ngFor`, to iterate over all of the items in the `items` array. Angular's `*ngFor`, like `*ngIf`, is another directive that helps you change the structure of the DOM while writing less code. For each `item`, Angular repeats the `<li>` and everything within it, which includes `<app-item>`. This means that for each item in the array, Angular creates another instance of `<app-item>`. For any number of items in the array, Angular would create that many `<li>` elements.

You can use an `*ngFor` on other elements, too, such as `<div>`, `<span>`, or `<p>`, to name a few.

The `AppComponent` has a `remove()` method for removing the item, which is bound to the `remove` property in the `ItemComponent`. The `item` property in the square brackets, `[]`, binds the value of `item` between the `AppComponent` and the `ItemComponent`.

Now you should be able to edit and delete items from the list. When you add or delete items, the count of the items should also change. To make the list more user-friendly, add some styles to the `ItemComponent`.
















cd JavaScript/Tools_and_Testing/Client-side_Frameworks/Angular/Creating_Item_Component