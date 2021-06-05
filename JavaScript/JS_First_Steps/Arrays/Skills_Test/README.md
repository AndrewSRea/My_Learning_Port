# Test your skills: Arrays

The aim of this skill test is to assess whether you've understood Mozilla's [Arrays](https://github.com/AndrewSRea/My_Learning_Port/tree/main/JavaScript/JS_First_Steps/Arrays#arrays) article.

## Arrays Skills 1

Let's start off with some basic array practice. In this task, we'd like you to create an array of three items, stored inside a variable called `myArray`. The items can be anything you want--how about your favorite foods or bands?

Next, modify the first two items in the array using simple bracket notation and assignment. Then add a new item to the beginning of the array.

Try updating the live code below to recreate the finished example:
```
// Add your code here

// Don't edit the code below here!

section.innerHTML = ' ';
let para1 = document.createElement('p');
para1.textContent = `Array: ${ myArray }`;

section.appendChild(para1);
```
See my finished code for this test under the **Arrays Skills Test 1** header in my accompanying [arrays-skills-test.html](https://github.com/AndrewSRea/My_Learning_Port/blob/main/JavaScript/JS_First_Steps/Arrays/Skills_Test/arrays-skills-test.html) file, and see the result of this finished code [here](), under the **Arrays Skills Test 1** header.

## Arrays Skills 2

Now let's move on to another task. Here you are provided with a string to work with. We'd like you to:

1. Convert the string into an array, removing the `+` characters in the process. Save the result in a variable called `myArray`.
2. Store the length of the array in a variable called `arrayLength`.
3. Store the last item in the array in a variable called `lastItem`.

Try updating the live code below to recreate the finished example:
```
// Add your code here 

let myString = 'Ryu+Ken+Chun-Li+Cammy+Guile+Sakura+Sagat+Juri';

// Don't edit the code below here!

section.innerHTML = ' ';
let para1 = document.createElement('p');
para1.textContent = `Array: ${ myArray }`;

let para2 = document.createElement('p');
para2.textContent = `The length of the array is ${ arrayLength }.`;

let para3 = document.createElement('p');
para3.textContent = `The last item in the array is "${ lastItem }".`;

section.appendChild(para1);
section.appendChild(para2);
section.appendChild(para3);
```
See my finished code for this test under the **Arrays Skills Test 2** header in my accompanying [arrays-skills-test.html](https://github.com/AndrewSRea/My_Learning_Port/blob/main/JavaScript/JS_First_Steps/Arrays/Skills_Test/arrays-skills-test.html) file, and see the result of this finished code [here](), under the **Arrays Skills Test 2** header.

## Arrays Skills 3

For this final array task, we provide you with a starting array, and you will work in somewhat the opposite direction. You need to:

1. Remove the last item in the array.
2. Add two new names to the end of the array.
3. Go over each item in the array and add its index number after the name inside parentheses. For example, `Ryu (0)`. Note that we don't teach how to do this in the Arrays article, so you'll have to do some research.
4. Finally, join the array items together in a single string called `myString`, with a separator of "` - `".

Try updating the live code below to recreate the finished example:
```
let myArray = [ "Ryu", "Ken", "Chun-Li", "Cammy", "Guile", "Sakura", "Sagat", "Juri" ];

// Add your code here

// Don't edit the code below here!

section.innerHTML = ' ';

let para1 = document.createElement('p');
para1.textContent = myString;

section.appendChild(para1);
```
See my finished code for this test under the **Arrays Skills Test 3** header in my accompanying [arrays-skills-test.html](https://github.com/AndrewSRea/My_Learning_Port/blob/main/JavaScript/JS_First_Steps/Arrays/Skills_Test/arrays-skills-test.html) file, and see the result of this finished code [here](), under the **Arrays Skills Test 3** header.

<hr>

[[Back to the Arrays page]](https://github.com/AndrewSRea/My_Learning_Port/tree/main/JavaScript/JS_First_Steps/Arrays#arrays)