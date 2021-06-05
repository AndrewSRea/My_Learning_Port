# Test your skills: Strings

The aim of this skills test is to assess whether you've understood Mozilla's [Handling text -- strings in JavaScript](https://github.com/AndrewSRea/My_Learning_Port/tree/main/JavaScript/JS_First_Steps/Strings_in_JS#handling-text----strings-in-javascript) and [Useful string methods](https://github.com/AndrewSRea/My_Learning_Port/tree/main/JavaScript/JS_First_Steps/Useful_String_Methods#useful-string-methods) articles.

## Strings Skills 1

In our first strings task, we start off small. You already have half of a famous quote inside a variable called `quoteStart`; we would like you to:

1. Look up the other half of the quote, and add it to the example inside a variable called `quoteEnd`.
2. Concatenate the two strings together to make a single string containing the complete quote. Save the result inside a variable called `finalQuote`.

You'll find that you get an error at this point. Can you fix the problem with `quoteStart`, so that the full quote displays correctly?

Try updating the live code below to recreate the finished example:
```
// Add your code here

let quoteStart = 'Don't judge each day by the harvest you reap ';

// Don't edit the code below here!

section.innerHTML = ' ';
let para1 = document.createElement('p');
para1.textContent = finalQuote;

section.appendChild(para1);
```
See my finished code for this test under the **Strings Skills Test 1** header in my accompanying [strings-skills-test.html](https://github.com/AndrewSRea/My_Learning_Port/blob/main/JavaScript/JS_First_Steps/Useful_String_Methods/Skills_Test/strings-skills-test.html) file, and see the result of this finished code [here](), under the **Strings Skills Test 1** header.

## Strings Skills 2

In this task, you are provided with two variables, `quote` and `substring`, which contain two strings. We would like you to:

1. Retrieve the length of the quote, and store it in a variable called `quoteLength`.
2. Find the index position where `substring` appears in `quote`, and store that value in a variable called `index`.
3. Use a combination of the variables you have and available string properties/methods to trim down the original quote to "I do not like green eggs and ham.", and store it in a variable called `revisedQuote`.

Try updating the live code below to recreate the finished example.
```
let quote = 'I do not like green eggs and ham. I do not like them, Sam-I-Am.';
let substring = 'green eggs and ham';

// Add your code here

// Don't edit the code below here!

section.innerHTML = ' ';
let para1 = document.createElement('p');
para1.textContent = `The quote is ${ quoteLength } characters long.`;
let para2 = document.createElement('p');
para2.textContent = revisedQuote;

section.appendChild(para1);
section.appendChild(para2);
```
See my finished code for this test under the **Strings Skills Test 2** header in my accompanying [strings-skills-test.html](https://github.com/AndrewSRea/My_Learning_Port/blob/main/JavaScript/JS_First_Steps/Useful_String_Methods/Skills_Test/strings-skills-test.html) file, and see the result of this finished code [here](), under the **Strings Skills Test 2** header.

## Strings Skills 3

In the next string taks, you are given the same quote that you ended up with in the previous task, but it is somewhat broken! We want you to fix and update it, like so:

1. Change the casing to correct sentence case (all lowercase, except for an uppercase first letter). Store the new quote in a variable called `fixedQuote`.
2. In `fixedQuote`, replace "green eggs and ham" with another food that you really don't like.
3. There is one more small fix to do--add a full stop onto the end of the quote, and save the final version in a variable called `finalQuote`.

Try updating the live code below to recreate the finished example:
```
let quote = 'I dO nOT lIke gREen eGgS anD HAM';

// Add your your code here

// Don't edit the code below here!

section.innerHTML = ' ';
let para1 = document.createElement('p');
para1.textContent = fixedQuote;
let para2 = document.createElement('p');
para2.textContent = finalQuote;

section.appendChild(para1);
section.appendChild(para2);
```
See my finished code for this test under the **Strings Skills Test 3** header in my accompanying [strings-skills-test.html](https://github.com/AndrewSRea/My_Learning_Port/blob/main/JavaScript/JS_First_Steps/Useful_String_Methods/Skills_Test/strings-skills-test.html) file, and see the result of this finished code [here](), under the **Strings Skills Test 3** header.

## Strings Skills 4

In the final string task, we have given you the name of a theorem, two numeric values, and an incomplete string (the bits that need adding are marked with asterisks (`*`)). We want you to change the value of the string as follows:

1. Change it from a regular string literal into a template literal.
2. Replace the four asterisks with four template literal placeholders. These should be:
    1. The name of the theorem.
    2. The two number values we have.
    3. The length of the hypotenuse of a right-angled triangle, given that the two other side lengths are the same as the two values we have. You'll need to look up how to calculate this from what you have. Do the calculation inside the placeholder.

Try updating the live code below to recreate the finished example:
```
let theorem = 'Pythagorean theorem';

let a = 5;
let b = 8;

let myString = 'Using *, we can work out that if the shortest sides of a right-angled triangle have lengths of * and *, the length of the hypotenuse is *.';

// Don't edit the code below here!

section.innerHTML = ' ';
let para1 = document.createElement('p');
para1.textContent = myString;

section.appendChild(para1);
```
See my finished code for this test under the **Strings Skills Test 4** header in my accompanying [strings-skills-test.html](https://github.com/AndrewSRea/My_Learning_Port/blob/main/JavaScript/JS_First_Steps/Useful_String_Methods/Skills_Test/strings-skills-test.html) file, and see the result of this finished code [here](), under the **Strings Skills Test 4** header.

<hr>

[[Back to the Handling text -- strings in JavaScript page]](https://github.com/AndrewSRea/My_Learning_Port/tree/main/JavaScript/JS_First_Steps/Strings_in_JS#handling-text----strings-in-javascript) or [[Back to the Useful string methods page]](https://github.com/AndrewSRea/My_Learning_Port/tree/main/JavaScript/JS_First_Steps/Useful_String_Methods#useful-string-methods)