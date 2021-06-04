# Test your skills: variables

The aim of this skill test is to assess whether you've understood Mozilla's [Storing the information you need -- Variables](https://github.com/AndrewSRea/My_Learning_Port/tree/main/JavaScript/JS_First_Steps/Variables#storing-the-information-you-need----variables) article.

## Variables Task 1

In this task, we want you to:

* Declare a variable called `myName`.
* Initialize `myName` with a suitable value, on a separate line (you can use your actual name, or something else).
* Declare a variable called `myAge` and initialize it with a value, on the same line.

Try updating the live code below to recreate the finished example:
```
// Add your code here

// Don't edit the code below here!

section.innerHTML = ' ';
let para1 = document.createElement('p');
para1.textContent = myName;
let para2 = document.createElement('p');
para2.textContent = myAge;
section.appendChild(para1);
section.appendChild(para2);
```
See my finished code for this test under the **Variables Task 1** header in my accompanying [variables-skills-test.html](https://github.com/AndrewSRea/My_Learning_Port/blob/main/JavaScript/JS_First_Steps/Variables/Skills_Test/variables-skills-test.html) file, and see the result of this finished code [here](), under the **Variables Task 1** header.

## Variables Task 2

In this task, you need to add a new line to correct the value stored in the existing `myName` variable to your own name.

Try updating the live code below to recreate the finished example:
```
// Add your code here

let myName = 'Paul';

// Don't edit the code below here!

section.innerHTML = ' ';
let para = document.createElement('p');
para.textContent = myName;
section.appendChild(para);
```
See my finished code for this test under the **Variables Task 2** header in my accompanying [variables-skills-test.html](https://github.com/AndrewSRea/My_Learning_Port/blob/main/JavaScript/JS_First_Steps/Variables/Skills_Test/variables-skills-test.html) file, and see the result of this finished code [here](), under the **Variables Task 2** header.

## Variables Task 3

The final task for now--in this case, you are provided with some existing code, which has two errors present in it. The results panel should be outputting the name `Chris`, and a statement about how old Chris will be in 20 years' time. How can you fix the problem and correct the output?

Try updating the live code below to recreate the finished example:
```
// Add your code here

const nyName = 'Default';
myName = 'Chris';

let myAge = '42';

// Don't edit the code below here!

section.innerHTML = ' ';
let para1 = document.createElement('p');
let para2 = document.createElement('p');
para1.textContent = myName;
para2.textContent = `In 20 years, I will be ${myAge + 20}`;
section.appendChild(para1);
section.appendChild(para2);
```
See my finished code for this test under the **Variables Task 3** header in my accompanying [variables-skills-test.html](https://github.com/AndrewSRea/My_Learning_Port/blob/main/JavaScript/JS_First_Steps/Variables/Skills_Test/variables-skills-test.html) file, and see the result of this finished code [here](), under the **Variables Task 3** header.