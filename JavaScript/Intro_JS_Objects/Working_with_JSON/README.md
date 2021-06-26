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