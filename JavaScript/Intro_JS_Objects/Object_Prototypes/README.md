# Object prototypes

Prototypes are the mechanism by which JavaScript objects inherit features from one another. In this article, we explain how prototype chains work and look at how the `prototype` property can be used to add methods to existing constructors.

<hr>

**Note**: This article covers traditional JavaScript constructors and classes. In the next article, we talk about the modern way of doing things, which provides easier syntax to achieve the same things -- see [ECMAScript 2015 classes](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Inheritance#ecmascript_2015_classes).

## A protype-based language

JavaScript is often described as a **prototype-based language** -- to provide inheritance, objects can have a **`prototype` object**, which acts as a template object that it inherits methods and properties from.

An object's prototype object may also have a prototype object, which it inherits methods and properties from, and so on. This is often referred to as a **prototype chain**, and explains why different objects have properties and methods defined on other objects available to them.

In JavaScript, a link is made between the object instance and its prototype (its `__proto__` property, which is derived from the `prototype` property on the constructor), and the properties and methods are found by walking up the chain of prototypes.

<hr>

**Note**: It's important to understand that there is a distinction between an **object's `prototype`** (available via [`Object.getPrototype(obj)`](), or via the deprecated [`__proto__`]() property) and **the `prototype` property on constructor functions**.

The constructor function `Foobar()` has its own `prototype`, which can be found by calling [`Object.getPrototypeOf(Foobar)`](). However, this differs from its `prototype` property, `Foobar.prototype`, which is the blueprint for instances of this constructor function.

If we were to create a new instance -- `let fooInstance = new Foobar()` -- `fooInstance` would take its prototype from its constructor function's `prototype` property. Thus `Object.getPrototypeOf(fooInstance) === Foobar.prototype`.

<hr>

Let's look at an example to make this a bit clearer.