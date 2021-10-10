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













cd JavaScript/Tools_and_Testing/Client-side_Frameworks/Angular/Creating_Item_Component