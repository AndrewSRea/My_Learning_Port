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

You can then access individual items in the array using bracket notation, in the same way that you [accessed the letters in a string](https://github.com/AndrewSRea/My_Learning_Port/tree/main/JavaScript/JS_First_Steps/Useful_String_Methods#retrieving-a-specific-string-character).

1. Enter the following into your console:
```
shopping[0];
// returns "bread"
```
2. You can also modify an item in an array by giving a single array item a new value. Try this:
```
shopping[0] = 'tahini';
shopping;
// shopping will now return [ "tahini", "milk", "cheese", "hummus", "noodles" ]
```

<hr>

**Note**: We've said it before, but just as a reminder--computers start counting from 0!

<hr>

3. Note that an array inside an array is called a multidimensional array. You can access an item inside an array that is itself inside another array by chaining two sets of square brackets together. For example, to access one of the items inside the array that is the third item inside the `random` array (see previous section), we could do something like this:
```
random[2][2];
```
4. Try making some more modifications to your array examples before moving on. Play around a bit, and see what works and what doesn't.

### Finding the length of an array

You can find out the length of an array (how many items are in it) in exactly the same way as you find out the length (in characters) of a string--by using the [`length`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/length) property. Try the following:
```
shopping.length;
// should return 5
```
This has other uses, but it is most commonly used to tell a loop to keep going until it has looped through all the items in an array. So, for example:
```
let sequence = [1, 1, 2, 3, 5, 8, 13];
for (let i = 0; i < sequence.length; i++) {
    console.log(sequence[i]);
}
```
You'll learn about loops properly later on (in the [Looping code](https://github.com/AndrewSRea/My_Learning_Port/tree/main/JavaScript/JS_Building_Blocks/Looping_Code#looping-code) article), but briefly, this code is saying:

1. Start looping at item number 0 in the array.
2. Stop looping at the item number equal to the length of the array. This works for an array of any length but in this case, it stops looping at item number 7 (this is good, as the last item--which we want the loop to include--is item 6).
3. For each item, print it out to the browser console with [`console.log()`](https://developer.mozilla.org/en-US/docs/Web/API/Console/log).

## Some useful array methods

In this section, we'll look at some rather useful array-related methods that allow us to split strings into array items and vice versa, and add new items into arrays.

### Converting between strings and arrays

Often you'll be presented with some raw data contained in a big long string, and you might want to separate the useful items out into a more useful form and then do things to them, like display them in a data table. To do this, we can use the [`split()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split) method. In its simplest form, this takes a single parameter, the character you want to separate the string at, and returns the substrings between the separator as iteems in an array.

<hr>

**Note**: Okay, this is technically a string method, not an array method, but we've put it in with arrays as it goes well here.

<hr>

1. Let's play with this, to see how it works. First, create a string in your console:
```
let myData = 'Manchester,London,Liverpool,Birmingham,Leeds,Carlisle';
```
2. Now let's split it at each comma:
```
let myArray = myData.split(',');
myArray;
```
3. Finally, try finding the length of your new array, and retrieving some items from it:
```
myArray.length;
myArray[0];    // the first item in the array
myArray[1];    // the second item in the array
myArray[myArray.length-1];    // the last item in the array
```
4. You can also go the opposite way using the [`join()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join) method. Try the following:
```
let myNewString = myArray.join(',');
myNewString;
```
5. Another way of converting an array to a string is to use the [`toString()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/toString) method. `toString()` is arguably simpler than `join()` as it doesn't take a parameter, but more limiting. With `join()`, you can specify different separators, whereas `toString()` always uses a comma. (Try running Step 4 with a different character than a comma.)
```
let dogNames = ['Rocket','Flash','Bella','Slugger'];
dogNames.toString();    // Rocket,Flash,Bella,Slugger
```

### Adding and removing array items

We've not yet covered adding and removing aray items--let us look at this now. We'll use the `myArray` array we ended up with in the last section. If you've not already followed that section, create the array first in your console:
```
let myArray = ['Manchester', 'London', 'Liverpool', 'Birmingham', 'Leeds', 'Carlisle'];
```
First of all, to add or remove an item at the end of an array, we can use [`push()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push) and [`pop()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/pop) respectively.

1. Let's use `push()` first--note that you need to include one or more items that you want to add to the end of your array. Try this:
```
myArray.push('Cardiff');
myArray;
myArray.push('Bradford', 'Brighton');
myArray;
```
2. The new length of the array is returned when the method call completes. If you wanted to store the new array length ion a variable, you could do something like this:
```
let newLength = myArray.push('Bristol');
myArray;
newLength;
```
3. Removing the last item from the array is as simple as running `pop()` on it. Try this:
```
myArray.pop();
```
4. The item that was removed is returned when the method call completes. To save that item in a new variable, you could do this:
```
let removedItem = myArray.pop();
myArray;
removedItem;
```

[`unshift()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/unshift) and [`shift()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/shift) work in exactly the same way as `push()` and `pop()`, respectively, except that they work on the beginning of the array, not the end.

1. First `unshift()`--try the following commands:
```
myArray.unshift('Edinburgh');
myArray;
```
2. Now `shift()`; try these!
```
let removedItem = myArray.shift();
myArray;
removedItem;
```

## Active learning: Printing those products!

Let's return to the example we described earlier--printing out product names and prices on an invoice, then totaling the prices and printing them at the bottom. In the editable example (see my accompanying [arrays-active-learning.html]() file), there are comments containing numbers--each of these marks a place where you have to add something to the code. They are as follows:

1. Below the `// number 1` comment are a number of strings, each one containing a product name and price separated by a colon. We'd like you to turn this into an array and store it in an array called `products`.
2. On the same line as the `// number 2` comment is the beginning of a for loop. In this line, we currently have `i <= 0`, which is a conditional test that cause the [for loop]() to only run once, because it is saying "stop when `i` is no longer less than or equal to 0", and `i` starts at 0. We'd like you to replace this with a conditional test that stops the loop when `i` is no longer less than the `products` array's length.
3. Just below the `// number 3` comment, we want you to write a line of code that splits the current array item (`name:price`) into two separate items, one containing just the name and one containing just the price. If you are not sure how to do this, consult the [Useful string methods]() article for some help, or even better, look at the [Converting between strings and arrays]() section of this article.
4. 