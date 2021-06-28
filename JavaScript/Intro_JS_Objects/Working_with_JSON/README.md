# Working with JSON

JavaScript Object Notation (JSON) is a standard text-based format for representing structured data based on JavaScript object syntax. It is commonly used for transmitting data in web applications (e.g., sending some data from the server to the client, so it can be displayed on a web page, or vice versa). You'll come across it quite often so, in this article, we will give you all you need to work with JSON using JavaScript, including parsing JSON so you can access data within it, and creating JSON.

## No, really, what is JSON?

[JSON](https://developer.mozilla.org/en-US/docs/Glossary/JSON) is a text-based data format following JavaScript object syntax, which was popularized by [Douglas Crockford](https://en.wikipedia.org/wiki/Douglas_Crockford). Even though it closely resembles JavaScript object literal syntax, it can be used independently from JavaScript, and many programming environments feature the ability to read (parse) and generate JSON.

JSON exists as a string -- useful when you want to transmit data across a network. It needs to be converted to a native JavaScript object when you want to access the data. This is not a big issue -- JavaScript provides a global [JSON](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON) object that has methods available for converting between the two.

<hr>

**Note**: Converting a string to a native object is called *deserialization*, while converting a native object to a string so it can be transmitted across the network is called *serialization*.

<hr>

A JSON string can be stored in its own file, which is basically just a text file with an extension of `.json`, and a [MIME type](https://developer.mozilla.org/en-US/docs/Glossary/MIME_type) of `application/json`.

### JSON structure

As described above, JSON is a string whose format very much resembles JavaScript object literal format. You can include the same basic data types inside JSON as you can in a standard JavaScript object -- strings, numbers, arrays, Booleans, and other object literals. This allows you to constructa data hierarchy, like so:
```
{
    "squadName": "Super hero squad",
    "homeTown": "Metro City",
    "formed": 2016,
    "secretBase": "Super tower",
    "active": true,
    "members": [
        {
            "name": "Molecule Man",
            "age": 29,
            "secretIdentity": "Dan Jukes",
            "powers": [
                "Radiation resistance",
                "Turning tiny",
                "Radiation blast"
            ]
        },
        {
            "name": "Madame Uppercut",
            "age": 39,
            "secretIdentity": "Jane Wilson",
            "powers": [
                "Million tonne punch",
                "Damage resistance",
                "Superhuman reflexes"
            ]
        },
        {
            "name": "Eternal Flame",
            "age": 1000000,
            "secretIdentity": "Unknown",
            "powers": [
                "Immortality",
                "Heat Immunity",
                "Inferno",
                "Teleportation",
                "Interdimensional travel"
            ]
        }
    ]
}
```
If we loaded this string into a JavaScript program, parsed it into a variable called `superHeroes`, for example, we could then access the data inside it using the same dot/bracket notation we looked at in the [JavaScript object basics](https://github.com/AndrewSRea/My_Learning_Port/tree/main/JavaScript/Intro_JS_Objects/Object_Basics#javascript-object-basics) article. For example:
```
superHeroes.homeTown
superHeroes['active']
```
To access data further down the hierarchy, you have to chain the required property names and array indexes together. For example, to access the third superpower of the second hero listed in the members list, you'd do this:
```
superHeroes['members'][1]['powers'][2]
```
1. First, we have the variable name -- `superHeroes`.
2. Inside that, we want to access the `members` property, so we use `['members']`.
3. `members` contains an array populated by objects. We want to access the second object inside the array, so we use `[1]`.
4. Inside this object, we want to access the `powers` property, so we use `['powers']`.
5. Inside the `powers` property is an array containing the selected hero's superpowers. We want the third one, so we use `[2]`.

<hr>

**Note**: My own observation: The above bracket notation path to find the third superpower of the second `superHeroes` member can also be written in dot notation, like this:
```
superHeroes.members[1].powers[2]
```
But I'm sure as we read along below, there will probably be a good reason for using bracket notation instead.

<hr>

**Note**: Mozilla has made the JSON seen above available inside a variable in its [JSONTest.html](https://mdn.github.io/learning-area/javascript/oojs/json/JSONTest.html) example (see the [source code](https://github.com/mdn/learning-area/blob/master/javascript/oojs/json/JSONTest.html)). Try loading this up and then accessing data inside the variable via your browser's JavaScript console.

<hr>

### Arrays as JSON

Above we mentioned that JSON text basically looks like a JavaScript object inside a string. We can also convert arrays to/from JSON. Below is also valid JSON. For example:
```
[
    {
        "name": "Molecule Man",
        "age": 29,
        "secretIdentity": "Dan Jukes",
        "powers": [
            "Radiation resistance",
            "Turning tiny",
            "Radiation blast"
        ]
    },
    {
        "name": "Madame Uppercut",
        "age": 39,
        "secretIdentity": "Jane Wilson",
        "powers": [
            "Million tonne punch",
            "Damage resistance",
            "Superhuman reflexes"
        ]
    }
]
```
The above is perfectly valid JSON. You'd just have to access array items (in its parsed version) by starting with an array index. For example, `[0]['powers'][0]`.

### Other notes

* JSON is purely a string with a specified data format -- it contains only properties, no methods.
* JSON requires double quotes to be used around strings and property names. Single quotes are not valid other than surrounding the entire JSON string.
* Even a single misplaced comma or colon can cause a JSON file to go wrong, and not work. You should be careful to validate any data you are attempting to use (although computer-generated JSON is less likely to include errors, as long as the generator program is working correctly). You can validate JSON using an application like [JSONLint](https://jsonlint.com/).
* JSON can actually take the form of any data type that is valid for inclusion inside JSON, not just arrays or objects. So, for example, a single string or number would be valid JSON.
* Unlike in JavaScript code, in which object properties may be unquoted, in JSON only quoted strings may be used as properties.

## Active learning: Working through a JSON example

So let's work through an example to show how we could make use of some JSON formatted data on a website.

### Getting started

To begin with, make local copies of our [heroes.html](https://github.com/mdn/learning-area/blob/master/javascript/oojs/json/heroes.html) and [style.css](https://github.com/mdn/learning-area/blob/master/javascript/oojs/json/style.css) files. The latter contains some simple CSS to style our page, while the former contains some very simple body HTML:
```
<header>
</header>

<section>
</section>
```
Plus, a [`<script>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/script) element to contain the JavaScript code we will be writing in this exercise. At the moment, it only contains two lines, which grab references to the [`<header>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/header) and [`<section>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/section) elements and store them in variables:
```
const header = document.querySelector('header');
const section = document.querySelector('section');
```
We have made our JSON data available on our GitHub, at [https://mdn.gihub.io/learning-area/javascript/oojs/json/superheroes.json](https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json).

We are going to load it into our page, and use some nifty DOM manipulation to display it, like this:

![Image of finished "heroes.html" file](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/JSON/json-superheroes.png)

(This image is the property of the Mozilla Developer Network.)

### Obtaining the JSON

To obtain the JSON, we use an API called [XMLHttpRequest](https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest) (often called **XHR**). This is a very useful JavaScript object that allows us to make network requests to retrieve resources from a server via JavaScript (e.g., images, text, JSON, even HTML snippets), meaning that we can update small sections of content without having to reload the entire page. This has led to more responsive web pages, and sounds exciting, but it is beyond the scope of this article to teach it in much more detail.

1. To start with, we store the URL of the JSON we want to retrieve in a variable. Add the following at the bottom of your JavaScript code:
```
let requestURL = 'https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json';
```

2. To create a request, we need to create a new request object instance from the `XMLHttpRequest` constructor, using the `new` keyword. Add the following below your last line:
```
let request = new XMLHttpRequest();
```

3. Now we need to open the request using the [`open()`](https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/open) method. Add the following line:
```
request.open('GET', requestURL);
```
This takes at least two parameters -- there are other optional parameters available. We only need the two mandatory ones for this simple example:

* The HTTP method to use when making the network request. In this case, [`GET`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods/GET) is fine, as we are just retrieving some simple data. 
* The URL to make the request to -- this is the URL of the JSON file that we stored earlier.

4. Next, add the following two lines -- here we are setting the [`responseType`](https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/responseType) to JSON, so that XHR knows that the server will be returning JSON, and that this should be converted behind the scenes into a JavaScript object. Then we send the request with the [`send()`](https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/send) method:
```
request.responseType = 'json';
request.send();
```

5. The last bit of this section involves waiting for the response to return from the server, then dealing with it. Add the following code below your previous code:
```
request.onload = function() {
    const superHeroes = request.response;
    populateHeader(superHeroes);
    showHeroes(superHeroes);
}
```
Here we are storing the response to our request (available in the [`response`](https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/response) property) in a variable called `superHeroes`; this variable now contains the JavaScript object based on the JSON! We are then passing that object to two function calls -- the first one files the `<header>` with the correct data, while the second one creates an information card for each hero on the team, and inserts it into the `<section>`.

We have wrapped the code in an event handler that runs when the load event fires on the request object (see [`onload`](https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequestEventTarget/onload)) -- this is because the load event fires when the response has successfully returned; doing it this way guarantees that `request.response` will definitely be available when we come to try to do something with it.

### Populating the header

Now that we've retrieved the JSON data and converted it into a JavaScript object, let's make use of it by writing the two functions we referenced above. First of all, add the following function definition below the previous code:
```
function populateHeader(obj) {
    const myH1 = document.createElement('h1');
    myH1.textContent = obj['squadName'];
    header.appendChild(myH1);

    const myPara = document.createElement('p');
    myPara.textContent = 'Hometown: ' + obj['homeTown'] + ' // Formed: ' + obj['formed'];
    header.appendChild(myPara);
}
```
Here we first create an [`<h1>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/Heading_Elements) element with [`createElement()`](https://developer.mozilla.org/en-US/docs/Web/API/Document/createElement), set its [`textContent`](https://developer.mozilla.org/en-US/docs/Web/API/Node/textContent) to equal the `squadName` property of the object, then append it to the header using [`appendChild()`](https://developer.mozilla.org/en-US/docs/Web/API/Node/appendChild). We then do a very similar operation with a paragraph: create it, set its text content, and append it to the header. The only difference is that its text is set to a concatenated string containing both the `homeTown` and `formed` properties of the object.

### Creating the hero information cards

Next, add the following function at the bottom of the code, which creates and displays the superhero cards:
```
function showHeroes(obj) {
    const heroes = obj['members'];

    for (let i = 0; i < heroes.length; i++) {
        const myArticle = document.createElement('article');
        const myH2 = document.createElement('h2');
        const myPara1 = document.createElement('p');
        const myPara2 = document.createElement('p');
        const myPara3 = document.createElement('p');
        const myList = document.createElement('ul');

        myH2.textContent = heroes[i].name;
        myPara1.textContent = 'Secret identity: ' + heroes[i].secretIdentity;
        myPara2.textContent = 'Age: ' + heroes[i].age;
        myPara3.textContent = 'Superpowers: ';

        const superPowers = heroes[i].powers;
        for (let j = 0; j < superPowers.length; j++) {
            const listItem = document.createElement('li');
            listItem.textContent = superPowers[j];
            myList.appendChild(listItem);
        }

        myArticle.appendChild(myH2);
        myArticle.appendChild(myPara1);
        myArticle.appendChild(myPara2);
        myArticle.appendChild(myPara3);
        myArticle.appendChild(myList);

        section.appendChild(myArticle);
    }
}
```
To start with, we store the `members` property of the JavaScript object in a new variable. This array contains multiple objects that contain the information for each hero.

Next, we use a [for loop](https://github.com/AndrewSRea/My_Learning_Port/tree/main/JavaScript/JS_Building_Blocks/Looping_Code#the-standard-for-loop) to loop through each object in the array. For each one, we:

1. Create several new elements: an `<article>`, an `<h2>`, three `<p>`s, and a `<ul>`.
2. set the `<h2>` to contain the current hero's `name`.
3. Fill the three paragraphs with their `secretIdentity`, `age`, and a line saying "Superpowers:" to introduce the information in the list.
4. Store the `powers` property in another new constant called `superPowers` -- this contains an array that lists the current hero's superpowers.
5. Use another `for` loop to loop through the current hero's superpowers -- for each one, we create an `<li>` element, put the superpower inside it, then put the `listItem` inside the `<ul>` element (`myList`) using `appendChild()`.
6. The very last thing we do is to append the `<h2>`, `<p>`s, and `<ul>` inside the `<article>` (`myArticle`), then append the `<article>` inside the `<section>`. The order in which things are appended is important, as this is the order they will be displayed inside the HTML.

## Converting between objects and text

The above example was simple in terms of accessing the JavaScript object, because we set the XHR request to convert the JSON response directly into a JavaScript object using:
```
request.responseType = 'json';
```
But sometimes we aren't so lucky -- sometimes we receive a raw JSON string, and we need to convert it to an object ourselves. And when we want to send a JavaScript object across the network, we need to convert it to JSON (a string) before sending. Luckily, these two problems are so common in web development that a built-in [JSON](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON) object is available in browsers, which contains the following two methods:

* [`parse()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse): Accepts a JSON string as a parameter, and returns the corresponding JavaScript object.
* ['stringify()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify): Accepts an object as a parameter, and returns the equivalent JSON string.

You can see the first one in action in our [heroes-finished-json-parse.html](https://mdn.github.io/learning-area/javascript/oojs/json/heroes-finished-json-parse.html) example (see the [source code](https://github.com/mdn/learning-area/blob/master/javascript/oojs/json/heroes-finished-json-parse.html)) -- this does exactly the same thing as the example we built up earlier, except that we set the XHR to return the raw JSON text, then used `parse()` to convert it to an actual JavaScript object. The key snippet of code is here:
```
request.open('GET', requestURL);
request.responseType = 'text';   // Now we're getting a string!
request.send();

request.onload = function() {
    const superHeroesText = request.response;   // Get the string from the response
    const superHeroes = JSON.parse(superHeroesText);   // Convert it to an object
    populateHeader(superHeroes);
    showHeroes(superHeroes);
}
```
As you might guess, `stringify()` works the opposite way. Try entering the following lines into your browser's JavaScript console one by one to see it in action (open this [blank HTML document]() for use in opening up the browser in order to use the DevTools JavaScript console for this example):
```
let myObj = { name: "Chris", age: 38 };
myObj
let myString = JSON.stringify(myObj);
myString
```
Here we are creating a JavaScript object, then checking what it contains, then converting it to a JSON string using `stringify()` -- saving the return value in a new variable -- then checking it again.

## Test your skills

See the [Test your skills: JSON](https://github.com/AndrewSRea/My_Learning_Port/tree/main/JavaScript/Intro_JS_Objects/Working_with_JSON/Skills_Test#test-your-skills-json) page for some further tests to verify my knowledge of the information provided by the **Working with JSON** article.

## Summary

In this article, we've given you a simple guide to using JSON in your programs, including how to create and parse JSON, and how to access data locked inside it. In the next article, we'll have some practice at building some JavaScript objects.

## See also

* [JSON reference page](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON)
* [XMLHttpRequest object reference page](https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest)
* [Using XMLHttpRequest](https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/Using_XMLHttpRequest)
* [HTTP request methods](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods)
* [Official JSON web site with link to ECMA standard](https://www.json.org/json-en.html)

<hr>

[[Previous page]](https://github.com/AndrewSRea/My_Learning_Port/tree/main/JavaScript/Intro_JS_Objects/Inheritance_in_JS#inheritance-in-javascript) - [[Top]](https://github.com/AndrewSRea/My_Learning_Port/tree/main/JavaScript/Intro_JS_Objects/Working_with_JSON) - [[Next page]]()