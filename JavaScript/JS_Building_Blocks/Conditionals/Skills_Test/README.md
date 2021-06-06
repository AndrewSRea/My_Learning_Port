# Test your skills: Conditionals

The aim of this skill test is to assess whether you've understood Mozilla's [Making decisions in your code -- conditionals](https://github.com/AndrewSRea/My_Learning_Port/tree/main/JavaScript/JS_Building_Blocks/Conditionals#making-decisions-in-your-code----conditionals) article.

## Conditionals Skills 1

In this task, you are provided with two variables:

* `season` - contains a string that says what the current season is.
* `response` - begins uninitialized, but is later used to store a response that will be printed to the output panel.

We want you to create a conditional that checks whether `season` contains the string "summer", and if so, assigns a string to `response` that gives the user an appropriate message about the season. If not, it should assign a generic string to `response` that tells the user we don't know what season it is.

To finish off, you should then add another test that checks whether `season` contains the string "winter", and again assigns an appropriate string to `response`.

Try updating the live code below to recreate the finished example:
```
let season = 'summer';
let response;

// Add your code here

// Don't edit the code below here!

section.innerHTML = ' ';
let para1 = document.createElement('p');
para1.textContent = response;
section.appendChild(para1);
```
See my finished code for this test under the **Conditional Skills Test 1** header in my accompanying [conditionals-skills-test.html]() file, and see the result of this finished code [here](), under the **Conditional Skills Test 1** header.