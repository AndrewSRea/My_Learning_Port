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
See my finished code for this test under the **Conditional Skills Test 1** header in my accompanying [conditionals-skills-test.html](https://github.com/AndrewSRea/My_Learning_Port/blob/main/JavaScript/JS_Building_Blocks/Conditionals/Skills_Test/conditionals-skills-test.html) file, and see the result of this finished code [here](), under the **Conditional Skills Test 1** header.

## Conditionals Skills 2

For this task, you are given three variables:

* `machineActive` - contains an indicator of whether the answer machine is switched on or not (`true`/`false`).
* `score` - contains your score in an imaginary game. This score is fed into the answer machine, which provides a response to indicate how well you did.
* `response` - begins uninitialized, but is later used to store a response that will be printed to the output panel.

You need to create an `if...else` structure that checks whether the machine is switched on and puts a message into the `response` variables if it isn't, telling the user to switch the machine on.

Inside the first, you need to nest an `if...else if...else` that puts appropriate messages into the `response` variable depending on what the value of score is--if the machine is turned on. The different conditional tests (and resulting responses) are as follows:

* Score of less that 0 or more than 100 - "This is not possible, an error has occurred."
* Score of 0 to 19 - "That was a terrible score - total fail!"
* Score of 20 to 39 - "You know some things, but it\'s a pretty bad score. Needs improvement."
* Score of 40 to 69 - "You did a passable job, not bad!"
* Score of 70 to 89 - "That\'s a great score, you really know your stuff."
* Score of 90 to 100 - "What an amazing score! Did you cheat? Are you for real?"

Try updating the live code below to recreate the finished example. After you've entered your code, try changing `machineActive` to `true`, to see if it works.
```
let response;
let score = 75;
let machineActive = false;

// Add your code here

// Don't edit the code below here!

section.innerHTML = ' ';
let para1 = document.createElement('p');
let para2 = document.createElement('p');

para1.textContent = `Your score is ${ score }`;
para2.textContent = response;

section.appendChild(para1);
section.appendChild(para2);
```
See my finished code for this test under the **Conditional Skills Test 2** header in my accompanying [conditionals-skills-test.html](https://github.com/AndrewSRea/My_Learning_Port/blob/main/JavaScript/JS_Building_Blocks/Conditionals/Skills_Test/conditionals-skills-test.html) file, and see the result of this finished code [here](), under the **Conditional Skills Test 2** header.

