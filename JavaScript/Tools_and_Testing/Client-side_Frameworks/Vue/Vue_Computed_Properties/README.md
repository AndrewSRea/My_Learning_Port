# Using Vue computed properties

In this article, we';; add a counter that displays the number of completed todo items, using a feature of Vue called computed properties. These work similarly to methods, but only rerun when one of their dependencies changes.

## Using computed properties

The aim here is to add a summary count of our to-do list. This can be useful for users, while also serving to label the list for assistive technology. If we have 2 of 5 items completed in our to-do list, our summary could read "2 items completed out of 5". While it might be tempting to do something like this:
```
<h2>{{ToDoItems.filter(item => item.done).length}} out of {{ToDOItems.length}} items completed</h2>
```
It would be recalculated on every render. For a small app like this, that probably doesn't matter too much. For bigger apps, or when the expression is more complicated , that could cause a serious performance problem.

A better solution is to use Vue's **[computed properties](https://vuejs.org/v2/guide/computed.html)**. Computed Properties work similarly to methods, but only rerun when one of their dependencies changes. In our case, this would only rerun when the `ToDoItems` array changes.

To create a computed property, we need to add a `computed` property to our component object, much like the `methods` property we've used previously.

## Adding a summary counter

Add the following code to your `App` component object, below the `methods` property. The list summary method will get the number of finished `ToDoItems`, and return a string reporting this.
```
computed: {
    listSummary() {
        const numberFinishedItems = this.ToDoItems.filter(item => item.done).length;
        return `${numberFinishedItems} out of ${this.ToDOItems.length} items completed`;
    }
}
```
Now we can add `{{listSummary}}` directly to our template; we'll add this inside an `<h2>` element, just above our `<ul>`. We'll also add an `id` and an `aria-labelledby` attribute to assign the `<h2>` contents to be a label for the `<ul>` element.

Add the described `<h2>` and update the `<ul>` inside your App's template as follows:
```
<h2 id="list-summary">{{listSummary}}</h2>
<ul aria-labelledby="list-summary" class="stack-large">
    <li v-for="itemin ToDoItems" :key="item.id">
        <to-do-item :label="item.label" :done="item.done" :id="item.id"></to-do-item>
    </li>
</ul>
```
You should now see the list summary in your app, and the total number of items update as you add more todo items! However, if you try checking and unchecking some items, you'll reveal a bug. Currently, we're not actually tracking the "done" data in any fashion, so the number of completed items does not change.







cd JavaScript/Tools_and_Testing/Client-side_Frameworks/Vue/Vue_Computed_Properties