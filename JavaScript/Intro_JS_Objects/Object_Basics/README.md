# JavaScript object basics

In this article, we'll look at fundamental JavaScript object syntax, and revisit some JavaScript features that we've already seen earlier in the course, reiterating the fact that many of the features you've already dealt with are objects.

## Object basics

An object is a collection of related data and/or functionality (which usually consists of several variables and functions -- which are called properties and methods when they are inside objects). Let's work through an example to understand what they look like.

To begin with, make a local copy of our [oojs.html](https://github.com/mdn/learning-area/blob/master/javascript/oojs/introduction/oojs.html) file. This contains very little -- a [`<script>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/script) element for us to write our source code into. We'll use this as a basis for exploring basic object syntax. While working with this example, you should have you [developer tools JavaScript console](https://developer.mozilla.org/en-US/docs/Learn/Common_questions/What_are_browser_developer_tools#the_javascript_console) open and ready to type in some commands.

As with many things in JavaScript, creating an object often begins with defining and initializing a variable. Try entering the following line below the JavaScript code that's already in your file, then saving and refreshing:
```
const person = {};
```
Now open your browser's JavaScript console, enter `person` into it, and press <kbd>Enter</kbd>/<kbd>Return<kbd>. You should get a result similar to one of the below lines:
```
[object Object]
Object { }
{ }
```
Congratulations, you've just created your first object. Job done! But this is an empty object, so we can't really do much with it. Let's update the JavaScript object in our file to look like this:
```
const person = {
    name: ['Bob', 'Smith'],
    age: 32,
    gender: 'male',
    interests: ['music', 'skiing'],
    bio: function() {
        alert(this.name[0] + ' ' + this.name[1] + ' is ' + this.age + ' years old. He likes ' + this.interests[0] + ' and ' + this.interests[1] + '.');
    },
    greeting: function() {
        alert('Hi! I\'m ' + this.name[0] + '.');
    }
};
```
After saving and refreshing, try entering some of the following into the JavaScript console on your browser devtools:
```
person.name
person.name[0]
person.age
person.interests[1]
person.bio()
person.greeting()
```
You have now got some data and functionality inside your object, and are now able to access them with some nice simple syntax!

So what is going on here? Well, an object is made up of multiple members, each of which has a name (e.g. `name` and `age` above), and a value (e.g. `['Bob', 'Smith']` and `32`). Each name/value pair must be separated by a comma, and the name and value in each case are separated by a colon. The syntax always follows this pattern:
```
const objectName = {
    member1Name: member1Value,
    member2Name: member2Value,
    member3Name: member3Value
};
```
The value of an object member can be pretty much anything -- in our person object, we've got a string, a number, two arrays, and two functions. The first four items are data items, and are referred to as the object's **properties**. The last two items are functions that allow the object to do something with that data, and are referred to as the object's **methods**.

An object like this is referred to as an **object literal** -- we've literally written out the object contents as we've come to create it. This is in contrast to objects instantiated from classes, which we'll look at later on.

It is very common to create an object using an object literal when you want to transfer a series of structured, related data items in some manner. For example, sending a request to the server to be put into a database. Sending a single object is much more efficient than sending several items individually, and it is easier to work with than an array, when you want to identify individual items by name.

## Dot notation

Above, you accessed the object's properties and methods using **dot notation**. The object name (`person`) acts as the **namespace** -- it must be entered first to access anything **encapsulated** inside the object. Next, you write a dot, then the item you want to access -- this can be the name of a simple property, an item of an array property, or a call to one of the object's methods. For example:
```
person.age
person.interests[1]
person.bio()
```

### Sub-namespaces

It is even possible to make the value of an object member another object. For example, try changing the name member from
```
name: ['Bob', 'Smith'],
```
to
```
name: {
    first: 'Bob',
    last: 'Smith'
},
```
Here we are effectively creating a **sub-namespace**. This sounds complex, but it's really not -- to access these items, you just need to chain the extra step onto the end with another dot. Try these in the JS console:
```
person.name.first
person.name.last
```
**Important**: At this point, you'll also need to go through your method code and change any instances of
```
name[0]
name[1]
```
to
```
name.first
name.last
```
Otherwise you methods will no longer work.

## Bracket notation

There is another way to access object properties -- using bracket notation. Instead of using these:
```
person.age
person.name.first
```
You can use
```
person['age']
person['name']['first']
```
This looks very similar to how you access items in an array, and it is basically the same thing -- instead of using an index number to select an item, you are using the name associated with each member's value. It is no wonder that objects are sometimes called **associative arrays** -- they map strings to values in the same way that arrays map numbers to values.

## Setting object members

So far we've only looked at retrieving (or **getting**) object members -- you can also **set** (update) the value of object members by declaring the member you want to set (using dot or bracket notation), like this:
```
person.age = 45;
person['name']['last'] = 'Cratchit';
```
Try entering the above lines, and then getting the members again to see how they've changed, like so:
```
person.age
person['name']['last']
```
Setting members doesn't just stop at updating the values of existing properties and methods; you can alos create completely new members. Try these in the JS console:
```
person['eyes'] = 'hazel';
person.farewell = function() { alert("Bye, everybody!"); }
```
You can now test out your new members:
```
person['eyes']
person.farewell()
```
One useful aspect of bracket notation is that it can be used to set not only member values dynamically, but member names, too. Let's say we wanted users to be able to store custom value types in their people data, by typing the member name and value into two text inputs. We could get those values like this:
```
let myDataName = nameInput.value;
let myDataValue = nameValue.value;
```
We could then add this new member name and value to the `person` object like this:
```
person[myDataName] = myDataValue;
```
To test this, try adding the following lines into your code, just below the closing curly brace of the `person` object:
```
let myDataName = 'height';
let myDataValue = '1.75m';
person[myDataName] = myDataValue;
```
Now try saving and refreshing, and entering the following into your text input:
```
person.height
```
Adding a property to an object using the method above isn't possible with dot notation, which can only accept a literal member name, not a variable value pointing to a name.

## What is "this"?

You may have noticed something slightly strange in our methods. Look at this one, for example:
```
greeting: function() {
    alert('Hi! I\'m ' + this.name.first + '.');
}
```
You are probably wondering what "this" is. The `this` keyword refers to the current object the code is being written inside -- so in this case, `this` is equivalent to `person`. So why not just write `person` instead? As you'll see in the [Object-oriented JavaScript for beginners]() article, 