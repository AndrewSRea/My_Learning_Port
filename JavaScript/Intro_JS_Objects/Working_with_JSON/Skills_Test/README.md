# Test your skills: JSON

The aim of this skills test is to assess whether you've understood our [Working with JSON](https://github.com/AndrewSRea/My_Learning_Port/tree/main/JavaScript/Intro_JS_Objects/Working_with_JSON#working-with-json) article.

## JSON 1

The one and only task in this article concerns accessing JSON data and using it in your page. JSON data about some mother cats and their kittens is available in [sample.json](https://github.com/mdn/learning-area/blob/master/javascript/oojs/tasks/json/sample.json). The JSON is loaded into the page as a text string and made available in the `catString` parameter of the `displayCatInfo()` function, called when the provided promise chain (which starts by fetching the JSON data) is fulfilled. Your task is to fill in the missing parts of the `displayCatInfo()` function to store:

* The names of the three mother cats, separated by commas, in the `motherInfo` variable.
* The total number of kittens, and how many are male and female, in the `kittenInfo` variable.

The values of these variables are then printed to the screen inside paragraphs.

Some hints/questions:

* The JSON data is provided as text inside the `displayCatInfo()` function. You'll need to parse it into JSON before you can get any data out of it.
* You'll probably want to use an outer loop through the cats and add their names to the `motherInfo` variable string, and an inner loop to loop through all the kittens, add up the total of all/male/female kittens, and add those details to the `kittenInfo` variable string. 
* The last mother cat name should have an "and" before it, and a full stop after it. How do you make sure this can work, no matter how many cats are in the JSON?
* Why are the `para1.textContent = motherInfo;` and `para2.textContent = kittenInfo;` lines inside the `displayCatInfo()` function, and not at the end of the script? This has something to do with async code.

Try updating the live code below to recreate the finished example:
```
const section = document.querySelector('section');

let para1 = document.createElement('p');
let para2 = document.createElement('p');

let motherInfo = 'The mother cats are called ';
let kittenInfo;

fetch('sample.json')
.then(response => response.text())
.then(text => displayCatInfo(text))

function displayCatInfo(catString) {
    let total = 0;
    let male = 0;

    // Add your code here


    // Don't edit the code below here!

    para1.textContent = motherInfo;
    para2.textContent = kittenInfo;
}

section.appendChild(para1);
section.appendChild(para2);
```
Due to this disclaimer:

<hr>

**Warning**: To answer this question, you'll need to write your code into the live code window. The example won't work locally, or in an environment like CodePen or JSFiddle, because of something called *cross-origin security*. This basically means that you can't request a file from one origin using code on a different origin. In the live code editor, both the JavaScript code and the requested JSON file are on the same origin (the code sits on a GitHub repo, and is embedded there in an [`<iframe>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/iframe)). If you put your code on CodePen, for example, it would fail because the JSON it is requesting is not on the same origin. You can get around these restrictions using [CORS](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS), but this is beyond the scope of what we are teaching here.

<hr>

...I will put my solution to the **JSON 1** task right below here. But as soon as I can figure out how to put the JSON, the JavaScript code, and the solution into some files within this **Skills_Test** folder, I will. (I assume I can just create my own `.json` file within this folder and access the JSON information from there.)

### My solution

```
const section = document.querySelector('section');

let para1 = document.createElement('p');
let para2 = document.createElement('p');

let motherInfo = 'The mother cats are called ';
let kittenInfo;

fetch('sample.json')
.then(response => response.text())
.then(text => displayCatInfo(text))

function displayCatInfo(catString) {
    let total = 0;
    let male = 0;

    // Add your code here

    const catStringText = request.response;
    catString = JSON.parse(catStringText);

    for (let i = 0; i < catString.length; i++) {
        for (let j = 0; j < catString[i].kittens[j].length; j++) {
            if (catString.kittens[j].gender === 'm') {
                total ++;
                male ++;
            } else {
                total ++;
            }
        }

        if (i === catString.length - 1) {
            motherInfo += ' and ' + catString[i].name + '.';
        } else {
            motherInfo += catString[i].name + ', ';
        }
    }

    kittenInfo = `There are ${ total } kittens. ${ male } male kittens, and ${ total - male } female kittens.`;

    // Don't edit the code below here!

    para1.textContent = motherInfo;
    para2.textContent = kittenInfo;
}

section.appendChild(para1);
section.appendChild(para2);
```
If you copy and paste the code for my solution (under the `// Add your code here` header), and paste it in the "live code window" on Mozilla's [Test your skills: JSON](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Test_your_skills:_JSON) page, you'll find that my solution does not work, and you just receive some blank output.

I will put Mozilla's solution to the **JSON 1** task below here, and do my best to try to explain what is happening within the code solution.

### Mozilla's solution

```
let section = document.querySelector('.preview');
let para1 = document.createElement('p');
let para2 = document.createElement('p');

let motherInfo = 'The mother cats are called ';
let kittenInfo;

fetch('sample.json')
.then(response => response.text())
.then(text => displayCatInfo(text))

function displayCatInfo(catString) {
    let total = 0;
    let male = 0;

    // Add your code here

    /* 
        I really whittled down the code block example from the "Converting between objects and text" section of the "Working with
        JSON" article: request.onload = function() {
                       const superHeroesText = request.response; // get the string from the response
                       const superHeroes = JSON.parse(superHeroesText); // convert it to an object
                       populateHeader(superHeroes);
                       showHeroes(superHeroes);
        
        ...since most of this was done in the code above: fetch('sample.json')
                                                          .then(response => response.text())
                                                          .then(text => displayCatInfo(text))

        But it seems I did too much if you look at my code under the "My solution" header above.
    */

    let cats = JSON.parse(catString);

    for(let i = 0; i < cats.length; i++) {
        for(let j = 0; j < cats[i].kittens.length; j++) {   // Unfortunately I wrote the array.length as `cats[i].kittens[j].length`
            total++;                                        // The `total` incrementor should have been outside this `if` conditional
            if(cats[i].kittens[j].gender === 'm') {         // but I wrote the conditional correctly.
                male++;
            }
        }

        if(i < (cats.length - 1)) {
            motherInfo += `${ cats[i].name }, `;            // Well, this conditional is written differently than previous text
        } else {                                            // text string conditionals I've seen before, in order to make a more
            motherInfo += `and ${ cats[i].name }.`;         // semantically correct text string.
        }
    }

    // But I did write this text string correctly -- subtracting the `male`s from the `total` for the amount of `female` kittens.

    kittenInfo  = `There are ${ total } kittens in total, ${ male } males and ${ total - male } females.`;

    // Don't edit the code below here!

    para1.textContent = motherInfo;
    para2.textContent = kittenInfo;
}
```

<hr>

[[Back to Working with JSON]](https://github.com/AndrewSRea/My_Learning_Port/tree/main/JavaScript/Intro_JS_Objects/Working_with_JSON#working-with-json)