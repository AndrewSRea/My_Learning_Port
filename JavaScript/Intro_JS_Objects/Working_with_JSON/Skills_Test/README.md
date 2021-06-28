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