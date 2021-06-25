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

**Note**: Mozilla has made the JSON seen above available inside a variable in its [JSONTest.html](https://mdn.github.io/learning-area/javascript/oojs/json/JSONTest.html) example (see the [source code](https://github.com/mdn/learning-area/blob/master/javascript/oojs/json/JSONTest.html)). Try loading this up and then accessing data inside the variable via your browser's JavaScript console.

<hr>

### Arrays as JSON