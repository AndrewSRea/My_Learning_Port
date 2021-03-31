# Arrays

In the final article of this module, we'll look at arrays--a neat way of storing a list of data items under a single variable name. Here we look at why this is useful, then explore how to create an array, retrieve, add, and remove items stored in an array, and more besides.

## What is an array?

Arrays are generally described as "list-like objects"; they are basically single objects that contain multiple values stored in a list. Array objects can be stored in variables and dealt with in much the same way as any other type of value, the difference being that we can access each value inside the list individually, and do super useful and efficient things with the list, like loop through it and do the same thing to every value. Maybe we've got a series of product items and their prices stored in an array, and we want to loop through them all and print them out on an invoice, while totaling all the prices together and printing out the total price at the bottom.

If we didn't have arrays, we'd have to store every item in a separate variable, then call the code that does the printing and adding separately for each item. This would be much longer to write out, less efficient, and more error-prone. If we had 10 items to add to the invoice, it would already be annoying but what about 100 items, or 1000? We'll return to this example later on in the article.

As in previous articles, let's learn about the real basics of arrays by entering some examples into the **browser developer console**.

### Creating arrays

Arrays consist of square brackets and elements that are separated by commas.

1. Suppose we want to store a shopping list in an array. Paste the following code into the console:
```
let shopping =['bread', 'milk', 'cheese', 'hummus', 'noodles'];
shopping;
```
2. In the above example, each element is a string, but in an array we can store various data types--strings, numbers, objects, and even other arrays. We can also mix data types in a single array--we do not have to limit ourselves to storing only numbers in one array, and in another only strings. For example:
```
let sequence = [1, 1, 2, 3, 5, 8, 13];
let random = ['tree', 795, [0, 1, 2]];
```
3. Before proceeding, create a few example arrays.

### Accessing and modifying array items

You can then access individual items in the array using bracket notation, in the same way that you [accessed the letters in a string]().