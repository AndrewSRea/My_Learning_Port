# Object prototypes

Prototypes are the mechanism by which JavaScript objects inherit features from one another. In this article, we explain how prototype chains work and look at how the `prototype` property can be used to add methods to existing constructors.

<hr>

**Note**: This article covers traditional JavaScript constructors and classes. In the next article, we talk about the modern way of doing things, which provides easier syntax to achieve the same things -- see [ECMAScript 2015 classes](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Inheritance#ecmascript_2015_classes).

<hr>

## A protype-based language

JavaScript is often described as a **prototype-based language** -- to provide inheritance, objects can have a **`prototype` object**, which acts as a template object that it inherits methods and properties from.

An object's prototype object may also have a prototype object, which it inherits methods and properties from, and so on. This is often referred to as a **prototype chain**, and explains why different objects have properties and methods defined on other objects available to them.

In JavaScript, a link is made between the object instance and its prototype (its `__proto__` property, which is derived from the `prototype` property on the constructor), and the properties and methods are found by walking up the chain of prototypes.

<hr>

**Note**: It's important to understand that there is a distinction between an **object's `prototype`** (available via [`Object.getPrototype(obj)`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/getPrototypeOf), or via the deprecated [`__proto__`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/proto) property) and **the `prototype` property on constructor functions**.

The constructor function `Foobar()` has its own `prototype`, which can be found by calling [`Object.getPrototypeOf(Foobar)`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/getPrototypeOf). However, this differs from its `prototype` property, `Foobar.prototype`, which is the blueprint for instances of this constructor function.

If we were to create a new instance -- `let fooInstance = new Foobar()` -- `fooInstance` would take its prototype from its constructor function's `prototype` property. Thus `Object.getPrototypeOf(fooInstance) === Foobar.prototype`.

<hr>

Let's look at an example to make this a bit clearer.

## Understanding prototype objects

Here we'll go back to the example in which we finished writing our `Person()` constructor -- load the example in your browser. You can use our [oojs-class-further-exercises.html](https://mdn.github.io/learning-area/javascript/oojs/introduction/oojs-class-further-exercises.html) example (see also the [source code](https://github.com/mdn/learning-area/blob/master/javascript/oojs/introduction/oojs-class-further-exercises.html)), if you don't already have it working through the last article. (I have carried this file over from my **Object-Oriented_JS** folder and listed it in this folder as [third-oojs.html](https://github.com/AndrewSRea/My_Learning_Port/blob/main/JavaScript/Intro_JS_Objects/Object_Prototypes/third-oojs.html).)

In this example, we have defined a constructor function, like so:
```
function Person(first, last, age, gender, interests) {

    // property and method definitions
    this.name = {
        'first': first,
        'last': last
    };
    this.age = age;
    this.gender = gender;
    // ...see link in summary above for full definition
}
```
We have then created an object instance like this:
```
let person1 = new Person('Bob', 'Smith', 32, 'male', ['music', 'skiing']);
```
If you type "`person1.`" into your JavaScript console, you should see the browser try to auto-complete this with the member names available on this object:

![Image of member names of an Object in a JS console](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Object_prototypes/object-available-members.png)

In this list, you will see the members defined on `person1`'s constructor -- `Person()` -- `name`, `age`, `gender`, `interests`, `bio`, and `greeting`. You will, hoever, also see some other members -- `toString`, `valueOf`, etc. -- these are defined on `person1`'s prototype object's prototype object, which is `Object.prototype`.

![Image of Object.prototype inheritance](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Object_prototypes/mdn-graphics-person-person-object-2.png)

<hr>

**Note**: These images above are the property of the Mozilla Developer Network.

<hr>

What happens if you call a method on `person1`, which is actually defined on `Object.prototype`? For example:
```
person1.valueOf()
```
`valueOf()` returns the value of the object it is called on. In this case, what happens is:

* The browser initially checks to see if the `person1` object has a `valueOf()` method available on it, as defined on its constructor, `Person()`, and it doesn't.
* So the browser checks to see if the `person1`'s prototype object has a `valueOf()` method available on it. It doesn't, then the browser checks `person1`'s prototype object's prototype object, and it has. So the method is called, and all is good!

<hr>

**Note**: We want to reiterate that the methods and properties are **not** copied from one object to another in the prototype chain. They are *accessed* by *walking up the chain* as described above.

<hr>

**Note**: The prototype chain is traversed only while retrieving properties. If properties are set or [delete](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/delete)d directly on the object, the prototype chain is not traversed.

<hr>

**Note**: before ECMAScript 2015, there wasn't officially a way to access an object's `prototype` directly -- the "links" between the items in the chain are defined in an internal property, referred to as `[[prototype]]` in the specification for the JavaScript language (see [ECMAScript](https://developer.mozilla.org/en-US/docs/Glossary/ECMAScript)).

Most modern browsers, however, do offer property available called [`__proto__`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/proto) (that's 2 underscores either side), which contains the object's constructor's `prototype` object. For example, try `person1.__proto__` and `person1.__proto__.__proto__` to see what the chain looks like in code!

Since ECMAScript 2015, you can access an object's prototype object indirectly via `Object.getPrototype(obj)`.

<hr>

## The prototype property: Where inherited members are defined

So, where are the inherited properties and methods defined? If you look at the [`Object`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object) reference page, you'll see listed in the left hand side a large number of properties and methods -- many more than the number of inherited members we saw available on the `person1` object. Some are inherited, and some aren't -- why is this?

As mentioned above, the inherited ones are the ones defined on the `prototype` property (you could call it a sub-namespace) -- that is, the ones that begin with `Object.prototype.`, and not the ones that begin with just `Object.` The `prototype` property's value is an object, which is basically a bucket for storing properties and methods that we want to be inherited by objects further down the prototype chain.

So [`Object.prototype.toString()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/toString), [`Object.prototype.valueOf()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/valueOf), etc., are available to any object types that inherit from `Object.prototype`, including new object instances created from the `Person()` constructor.

[`Object.is()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is), [`Object.keys()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys), and other members not defined inside the `prototype` bucket, are not inherited by object instances or object types that inherit from `Object.prototype`. They are methods/properties available just on the `Object()` constructor itself.

<hr>

**Note**: This seems strange -- how can you have a method defined on a constructor, which is itself a function?

Well, a function is also a type of object. See the [`Function()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function) constructor reference if you don't believe us.

<hr>

1. You can check out existing prototype properties for yourself -- go back to our previous example and try entering the following into the JavaScript console:
```
Person.prototype
```

2. The output won't show you very much because we haven't defined anything on our custom constructor's prototype! By default, a constructor's `prototype` always starts empty. Now try the following:
```
Object.prototype
```
You'll see a large number of methods defined on `Object`'s `prototype` property, which are then available on objects that inherit from `Object`, as shown earlier.

You'll see other examples of prototype chain inheritance all over JavaScript -- try looking for the methods and properties defined on the prototype of the [`String`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String), [`Date`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date), [`Number`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number), and [`Array`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array) global objects, for example. These all have a number of members defined on their prototype, which is why, for example, when you create a string like this:
```
let myString = 'This is my string.`;
```
`myString` immediately has a number of useful methods available on it, like [`split()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split), [`indexOf()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/indexOf), [`replace()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace), etc.

<hr>

**Note**: It is worth reading our more in-depth guide to "[Using prototypes in JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Inheritance_and_the_prototype_chain#using_prototypes_in_javascript)", once you've made sense of this section and wish to know more. This section is intenionally simplified to make these concepts to make these concepts a little easier to understand when you first meet them.

(I will add a subfolder named **Using_Prototypes_JS** to the overall **Intro_JS_Objects**. Follow this [link to that subfolder](), or click the "[Next page]" link at the bottom of this article.)

<hr>

**Important**: The `prototype` property is one of the most confusingly-named parts of JavaScript -- you might think that it points to the prototype object of the current object, but it doesn't (that's an internal object that can be accessed by `__proto__`, remember?). `prototype` instead is a property containing an object on which you define members that you want to be inherited.

<hr>

## Revisiting `create()`




[[Previous page]]() - [[Top]]() - [[Next page]]() <!-- Next page link will be to the "Using prototypes in JavaScript" subfolder -->