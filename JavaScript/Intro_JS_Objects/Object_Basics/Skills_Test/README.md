# Test your skills: Object basics

The aim of this skill test is to assess whether you've understood our [JavaScript object basics](https://github.com/AndrewSRea/My_Learning_Port/tree/main/JavaScript/Intro_JS_Objects/Object_Basics#javascript-object-basics) article.

## Object basics 1

In this task, you are provided with an object literal, and your tasks are to:

* Store the value of the `name` property inside the `catName` variable, using bracket notation.
* Run the `greeting()` method using dot notation (it will log the greeting to the browser DevTools' console).
* Update the `color` property value to `black`.

Try updating the live code below to recreate the finished example:
```
let cat = {
    name: 'Bertie',
    breed: 'Cymric',
    color: 'white',
    greeting: function() {
        console.log('Meow!');
    }
}

// Put your code here



// Don't edit the code below here

let para1 = document.createElement('p');
let para2 = document.createElement('p');

para1.textContent = `The cat's name is ${ catName }.`;
para2.textContent = `The cat's color is ${ cat.color }.`;

section.appendChild(para1);
section.appendChild(para2);
```
See my finished code for this test under the **Object Basics Skills Test 1** header, under the opening `<script>` tag, in my accompanying [object-basics-skills-test.html](https://github.com/AndrewSRea/My_Learning_Port/blob/main/JavaScript/Intro_JS_Objects/Object_Basics/Skills_Test/object-basics-skills-test.html) file, and see the result of this finished code [here](), under the **Object Basics Skills Test 1** header.

## Object basics 2

In our next task, we want you to have a go at creating your own object literal to represent one of your favorite bands. The required members are:

* `name`: A string representing the band name.
* `nationality`: A string representing the country the band comes from.
* `genre`: What type of music the band plays.
* `members`: A number representing the number of members the band has.
* `formed`: A number representing the year the band formed.
* `split`: A number representing the year the band split up, or `false` if they are still together.
* `albums`: An array representing the albums released by the band. Each array item should be an object containing the following members:
    - `name`: A string representing the name of the album.
    - `released`: A number representing the year the album was released.

Include at least two albums in the `albums` array.

Once you've done this, you should then write a string to the variable `bandInfo`, which will contain a small biography detailing their name, nationality, years active, and style, and the title and release date of their first album.

Try updating the live code below to recreate the finished example:
```
let bandInfo;

// Put your code here


// Don't edit the code below here

let para1 = document.createElement('p');
para1.textContent = bandInfo;
section.appendChild(para1);
```
See my finished code for this test under the **Object Basics Skills Test 2** header, under the opening `<script>` tag, in my accompanying [object-basics-skills-test.html](https://github.com/AndrewSRea/My_Learning_Port/blob/main/JavaScript/Intro_JS_Objects/Object_Basics/Skills_Test/object-basics-skills-test.html) file, and see the result of this finished code [here](), under the **Object Basics Skills Test 2** header.