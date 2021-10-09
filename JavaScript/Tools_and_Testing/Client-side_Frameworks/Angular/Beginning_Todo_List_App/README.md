# Beginning our Angular todo list app

At this point, we are ready to start creating our to-do list application using Angular. The finished application will display a list of to-do items and includes editing, deleting, and adding features. In this article, you will get to know your application structure, and work up to displaying a basic list of to-do items.

## The to-do application structure

Just like a basic application that doesn't use a framework, an Angular application has an `index.html`. Within the `<body>` tag of the `index.html`, Angular uses a special element -- `<app-root>` -- to insert your main component which, in turn, includes other components you create. Generally, you don't need to touch the `index.html`, instead focusing your work within specialized areas of your application called components.

### Organize your application with components

Components are a central building block of Angular applications. This to-do application has two components -- a component as a foundation for your application, and a component for handling to-do items.

Each compilation is made up of a TypeScript class, HTML, and CSS. TypeScript transpiles, or converts, into JavaScript, which means that your application ultimately ends up in plain JavaScript but you have the convenience of using TypeScript's extended features and streamlined syntax.

### Dynamically change the UI with *ngIf and *ngFor

This tutorial also covers two important Angular directives for dynamically altering the structure of the DOM. A directive is like a command that you can use in your HTML to affect change in your application.

The first directive that this tutorial covers is Angular's iterator, `*ngFor`. `*ngFor` can dynamically create DOM elements based on items in an array.

The second directive that you learn in this tutorial is `*ngIf`. You can use `*ngIf` to add or remove elements from the DOM based on a condition. For example, if users want to edit an item in the to-do list, you can provide them with the means to edit the item. If they do not want to edit an item, you can remove the interface for editing.

### Share data between components

In this to-do application, you configure your components to share data. To add new items to the to-do list, the main component has to send the new item to the second component. This second component manages the items and takes care of editing, marking as done, and deleting individual items.

You accomplish sharing data between Angular components with special decorators called `@Input()` and `@Output()`. You use these decorators to specify that certain properties allow data to go into or out of a component. To use `@Output()`, you raise an event in one component so that the other component knows that there is data available.

## Define Item

In the `app` directory, create a new file named `item.ts` with the following contents:
```
export interface Item {
    description: string;
    done: boolean;
}
```
The `Item` `interface` creates an `item` object model so that your application understands what an `item` is. For this to-do list, an `item` is an object that has a description and can be done.