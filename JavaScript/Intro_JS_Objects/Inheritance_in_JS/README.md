# Inheritance in JavaScript

With most of the gory details of OOJS now explained, this article shows how to create "child" object classes (constructors) that inherit features from their "parent" classes. In addition, we present some advice on when and where you might use OOJS, and look at how classes are dealt with in modern ECMAScript syntax.

## Prototypal inheritance

So far we have seen some inheritance in action -- we have seen how prototype chains work, and how members are inherited going up a chain. But mostly this has involved built-in browser functions. How do we create an object in JavaScript that inherits from another object?

Let's explore how to do this with a concrete example.

## Getting started

First of all, make yourself a local copy of our [oojs-class-inheritance-start.html](https://github.com/mdn/learning-area/blob/master/javascript/oojs/advanced/oojs-class-inheritance-start.html) file (see it [running live](https://mdn.github.io/learning-area/javascript/oojs/advanced/oojs-class-inheritance-start.html) also). Inside here you'll find the same `Person()` constructor example that we've been using all the way through the last module (the [Object prototypes](https://github.com/AndrewSRea/My_Learning_Port/tree/main/JavaScript/Intro_JS_Objects/Object_Prototypes#object-prototypes) module), with a slight difference -- we've defined only the properties inside the constructor:
```
function Person(first, last, age, gender, interests) {
    this.name = {
        first,
        last
    };
    this.age = age;
    this.gender = gender;
    this.interests = interests;
};
```
The methods are *all* defined on the constructor's prototype. For example:
```
Person.prototype.greeting = function() {
    alert('Hi! I\'m ' + this.name.first + '.');
};
```

<hr>

**Note**: In the source code, you'll also see `bio()` and `farewell()` methods defined. Later you'll see how these can be inherited by other constructors.

<hr>

Say we wanted to create a `Teacher` class, like the one we described in our initial object-oriented definition, which inherits all the members from `Person`, but also includes:

1. A new property, `subject` -- this will contain the subject the teacher teaches.
2. An updated `greeting()` method, which sounds a bit more formal than the standard `greeting()` method -- more suitable for a teacher addressing some students at school.

## Defining a `Teacher()` constructor function

The first thing we need to do is create a `Teacher()` constructor -- add the following below the existing code, just above the closing `</script>` tag:
```
function Teacher(first, last, age, gender, interests, subject) {
    Person.call(this, first, last, age, gender, interests);

    this.subject = subject;
}
```
This looks similar to the `Person` constructor in many ways, but there is something strange here that we've not seen before -- the [`call()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/call) function. This function basically allows you to call a function defined somewhere else, but in the current context. The first parameter specifies the value of `this` that you want to use when running the function, and the other parameters are those that should be passed to the function when it is invoked.

We want the `Teacher()` constructor to take the same parameters as the `Person()` constructor it is inheriting from, so we specify them all as parameters in the `call()` invocation.

The last line inside the constructor defines the new `subject` property that teachers are going to have, which generic people don't have.

As a note, we could have done this:
```
function Teacher(first, last, age, gender, interests, subject) {
    this.name = {
        first,
        last
    };
    this.age = age;
    this.gender = gender;
    this.interests = interests;
    this.subject = subject;
}
```
But this is just redefining the properties anew, not inheriting then from `Person()`, so it defeats the point of what we are trying to do. It also takes more lines of code.

### Inheriting from a constructor with no parameters

Note that if the constructor you are inheriting from doesn't take its property values from parameters, you don't need to specify them as additional arguments in `call()`. So, for example, if you had something really simple like this:
```
function Brick() {
    this.width = 10;
    this.height = 20;
}
```
You could inherit the `width` and `height` properties by doing this (as well as the other steps described below, of course):
```
function BlueGlassBrick() {
    Brick.call(this);

    this.opacity = 0.5;
    this.color = 'blue';
}
```
Note that we've only specified `this` inside `call()` -- no other parameters are required as we are not inheriting any properties from the parent that are set via parameters.

## Setting `Teacher()`'s prototype and constructor reference

All is good so far, but we have a problem. We have defined a new constructor, and it has a `prototype` property which, by default, just contains an object with a reference to the constructor function itself. It does not contain the methods of the `Person` constructor's `prototype` property. To see this, enter `Object.getOwnPropertyNames(Teacher.prototype)` into either the text input field (as seen in the program [running live](https://mdn.github.io/learning-area/javascript/oojs/advanced/oojs-class-inheritance-start.html)) or your JavaScript console. Then enter it again, replacing `Teacher` with `Person`. Nor does the new constructor *inherit* those methods. To see this, compare the outputs of `Person.prototype.greeting` and `Teacher.prototype.greeting`. We need to get `Teacher()` to inherit the methods defined on `Person()`'s prototype. So how do we do that?

1. 