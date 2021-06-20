# Inheritance and the prototype chain

[The section on **Using protoypes in JavaScript** is [below](https://github.com/AndrewSRea/My_Learning_Port/tree/main/JavaScript/Intro_JS_Objects/Using_Prototypes#using-prototypes-in-javascript).]

JavaScript is a bit confusing for developers experienced in class-based languages (like Java or C++), as it is dynamic and does not provide a `class` implementation per se (the `class` keyword is introduced in ES2015, but is syntactical sugar -- JavaScript remains prototype-based).

When it comes to inheritance, JavaScript only has one construct: objects. Each object has a private property which holds a link to another object called its **prototype**. That prototype object has a prototype of its own, and so on until an object is reached with `null` as its prototype. By definition, `null` has no prototype, and acts as the final link in this **prototype chain**.

Nearly all objects in JavaScript are instances of [`Object`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object), which sits on the top of a prototype chain.

While this confusion is often considered to be one of JavaScript's weaknesses, the prototypal inheritance model itself is, in fact, more powerful than the classic model. It is, for example, fairly trivial to build a classic model on top of a prototypal model.

## Inheritance with the prototype chain

### Inheriting properties

JavaScript objects are dynamic "bags" of properties (referred to as **own properties**). JavaScript objects have a link to a prototype object. When trying to access a property of an object, the property will not only be sought on the object but on the prototype of the object, the prototype of the prototype, and so on until either a property with a matching name is found or the end of the prototype chain is reached.

<hr>

**Note**: Following the ECMAScript standard, the notation `someObject.[[Prototype]]` is used to designate the prototype of `someObject`. Since ECMAScript 2015, the `[[Prototype]]` is accessed using the accessors [`Object.getPrototypeOf()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/getPrototypeOf) and [`Object.setPrototypeOf()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/setPrototypeOf). This is equivalent to the JavaScript property `__proto__`, which is non-standard but de-facto implemented by many browsers.

It should not be confused with the *`func`*`.prototype` property of functions, which instead specifies the `[[Prototype]]` to be assigned to all *instances* of objects created by the given function when used as a constructor. The **`Object.prototype`** property represents the [`Object`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object) prototype object.

<hr>

Here is what happens when trying to access a property:
```
// Let's create an object o from function f with its own properties a and b:
let f = function() {
    this.a = 1;
    this.b = 2;
}
let o = new f();   // {a: 1, b: 2}

// add properties in f function's prototype
f.prototype.b = 3;
f.prototype.c = 4;

// do not set the prototype f.prototype = {b:3,c:4}; this will break the prototype chain
// o.[[Prototype]] has properties b and c.
// o.[[Prototype]].[[Prototype]] is Object.prototype.
// Finally, o.[[Prototype]].[[Prototype]].[[Prototype]] is null.
// This is the end of the prototype chain, as null,
// by definition, has no [[Prototype]].
// Thus, the full prototype chain looks like:
// {a: 1, b: 2} ---> {b: 3, c: 4} ---> Object.prototype ---> null

console.log(o.a);   // 1
// Is there an 'a' own property on o? Yes, and its value is 1.

console.log(o.b);   // 2
// Is there a 'b' own property on o? Yes, and its value is 2.
// The prototype also has a 'b' property, but it's not visited.
// This is called Property Shadowing.

console.log(o.c);   // 4
// Is there a 'c' own property on o? No, check its prototype.
// Is there a 'c' own property on o.[[Prototype]]? Yes, its value is 4.

console.log(o.d);   // undefined
// Is there a 'd' own property on o? No, check its prototype.
// Is there a 'd' own property on o.[[Prototype]]? No, check its prototype.
// o.[[Prototype]].[[Prototype]] is Object.prototype, and there is no 'd' property by default, check its prototype.
// o.[[Protoype]].[[Prototype]].[[Prototype]] is null, stop searching.
// No property found, return undefined.
```
[Code link](https://replit.com/@khaled_hossain_code/prototype)

Setting a property to an object creates an own property. The only exception to the getting and setting behavior rules is when there is an inherited property with a [getter or a setter](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_Objects#defining_getters_and_setters).

### Inheriting "methods"

JavaScript does not have "methods" in the form that class-based languages define them. In JavaScript, any function can be added to an object in the form of a property. An inherited function acts just as any other property, including property shadowing as shown above (in this case, a form of *method overriding*).

When an inherited function is executed, the value of [`this`]() points to the inheriting object, not to the prototype object where the function is an own property.
```
var o = {
    a: 2,
    m: function() {
        return this.a + 1;
    }
};

console.log(o.m());   // 3
// When calling o.m in this case, 'this' refers to o

var p = Object.create(o);
// p is an object that inherits from o

p.a = 4;   // creates a property 'a' on p
console.log(p.m());   // 5
// When p.m is called, 'this' refers to p.
// So when p inherits the function m of o,
// 'this.a' means p.a, the property 'a' of p
```

## Using prototypes in JavaScript

Let's look at what happens behind the scenes in a bit more detail.

In JavaScript, as mentioned above, functions are able to have properties. All functions have a special property named `prototype`. For the best learning experience, it is highly recommended that you open a console, navigate to the "console" tab, copy-and-paste in the below JavaScript code, and run it by pressing the <kbd>Enter</kbd>/<kbd>Return</kbd> key. (The console is included in most web browser's Developer Tools. More information is available for [Firefox Developer Tools](https://developer.mozilla.org/en-US/docs/Tools), [Chrome DevTools](https://developer.chrome.com/docs/devtools/), and [Edge DevTools](https://docs.microsoft.com/en-us/archive/microsoft-edge/legacy/developer/).)

(I have created an accompanying blank HTML document, [prototype-console-example.html](https://github.com/AndrewSRea/My_Learning_Port/blob/main/JavaScript/Intro_JS_Objects/Using_Prototypes/prototype-console-example.html), for use in opening up a browser console and typing the code seen below into the console.)
```
function doSomething(){}
console.log( doSomething.prototype );

// It does not matter how you declare the function;
// a function in JavaScript will always have a default
// prototype property - with one exception: an arrow
// function doesn't have a default prototype property;

const doSomethingFromArrowFunction = () => {};
console.log( doSomethingFromArrowFunction.prototype );
```
As seen above, `doSomething()` has a default `prototype` property, as demonstrated by the console. After running this code, the console should have displayed an object that looks similar to this:
```
{
    constructor: ƒ doSomething(),
    __proto__: {
        constructor: ƒ Object(),
        hasOwnProperty: ƒ hasOwnProperty(),
        isPrototypeOf: ƒ isPrototypeOf(),
        propertyIsEnumerable: ƒ propertyIsEnumerable(),
        toLocaleString: ƒ toLocaleString(),
        toString: ƒ toString(),
        valueOf: ƒ valueOf()
    }
}
```
We can add properties to the prototype of `doSomething()`, as shown below:
```
function doSomething(){}
doSomething.prototype.foo = "bar";
console.log( doSomething.prototype );
```
This results in:
```
{
    foo: "bar",
    constructor: ƒ doSomething(),
    __proto__: {
        constructor: ƒ Object(),
        hasOwnProperty: ƒ hasOwnProperty(),
        isPrototypeOf: ƒ isPrototypeOf(),
        propertyIsEnumerable: ƒ propertyIsEnumerable(),
        toLocaleString: ƒ toLocaleString(),
        toString: ƒ toString(),
        valueOf: ƒ valueOf()
    }
}
```
We can now use the `new` operator to create an instance of `doSomething()` based on this prototype. To use the new operator, call the function normally except prefix it with `new`. Calling a function with the `new` operator returns an object that is an instance of the function. Properties can then be added onto this object.

Try the following code:
```
function doSomething(){}
doSomething.prototype.foo = "bar";   // add a property onto the prototype
var doSomeInstancing = new doSomething();
doSomeInstancing.prop = "some value";   // add a property onto the object
console.log( doSomeInstancing );
```
This results in an output similar to the following:
```
{
    prop: "some value",
    __proto__: {
        foo: "bar",
        constructor: ƒ doSomething(),
        __proto__: {
            constructor: ƒ Object(),
            hasOwnProperty: ƒ hasOwnProperty(),
            isPrototypeOf: ƒ isPrototypeOf(),
            propertyIsEnumerable: ƒ propertyIsEnumerable(),
            toLocaleString: ƒ toLocaleString(),
            toString: ƒ toString(),
            valueOf: ƒ valueOf()
        }
    }
}
```
As seen above, the `__proto__` of `doSomeInstancing` is `doSomething.prototype`. But what does it do? When you access a property of `doSomeInstancing`, the browser first looks to see if `doSomeInstancing` has that property.

If `doSomeInstancing` does not have the property, then the browser looks for the property in the `__proto__` of `doSomeInstancing` (a.k.a. `doSomething.prototype`). If the `__proto__` of `doSomeInstancing` has the property being looked for, then that property on the `__proto__` of `doSomeInstancing` is used.

Otherwise, if the `__proto__` of `doSomeInstancing` does not have the property, then the `__proto__` of the `__proto__` of `doSomeInstancing` is checked for the property. By default, the `__proto__` of any function's prototype property is `window.Object.prototype`. So, the `__proto__` of the `__proto__` of `doSomeInstancing` (a.k.a. the `__proto__` of `doSomething.prototype` (a.k.a. `Object.prototype`)) is then looked through for the property being searched for.

If the property is not found in the `__proto__` of the `__proto__` of `doSomeInstancing`, then the `__proto__` of the `__proto__` of the `__proto__` of `doSomeInstancing` is looked through. However, there is a problem: the `__proto__` of the `__proto__` of the `__proto__` of `doSomeInstancing` does not exist. Then, and only then, after the entire prototype chain of `__proto__`s is looked through, and there are no more `__proto__`s, does the browser assert that the property does not exist and conclude that the value at the property is `undefined`.

Let's try entering some more code into the console:
```
function doSomething(){}
doSomething.prototype.foo = "bar";
var doSomeInstancing = new doSomething();
doSomeInstancing.prop = "some value";
console.log("doSomeInstancing.prop:      " + doSomeInstancing.prop);
console.log("doSomeInstancing.foo:       " + doSomeInstancing.foo);
console.log("doSomething.prop:           " + doSomething.prop);
console.log("doSomething.foo:            " + doSomething.foo);
console.log("doSomething.prototype.prop: " + doSomething.prototype.prop);
console.log("doSomething.prototype.foo:  " + doSomething.prototype.foo);
```
This results in the following:
```
doSomeInstancing.prop:      some value
doSomeInstancing.foo:       bar
doSomething.prop:           undefined
doSomething.foo:            undefined
doSomething.prototype.prop: undefined
doSomething.prototype.foo:  bar
```

## Different ways to create objects and the resulting prototype chain

### Object created with syntax constructs 

```
var o = {a: 1};

// The newly created object o has Object.prototype as its [[Prototype]]
// o has no own property named 'hasOwnProperty'
// hasOwnProperty is an own property of Object.prototype.
// So o inherits hasOwnProperty from Object.prototype
// Object.prototype has null as its prototype.
// o ---> Object.prototype ---> null

var b = ['yo', 'whadup', '?'];

// Arrays inherit from Array.prototype
// (which has methods indexOf, forEach, etc.)
// The prototype chain looks like:
// b ---> Array.prototype ---> Object.prototype ---> null

function f() {
    return 2;
}

// Functions inherit from Function.prototype
// (which has methods call, bind, etc.)
// f ---> Function.prototype ---> Object.prototype ---> null
```

### With a constructor

A "constructor" in JavaScript is just a function that happens to be called with the [new operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/new).
```
function Graph() {
    this.vertices = [];
    this.edges = [];
}

Graph.prototype = {
    addVertex: function(v) {
        this.vertices.push(v);
    }
};

var g = new Graph();
// g is an object with own properties 'vertices' and 'edges'.
// g.[[Prototype]] is the value of Graph.prototype when new Graph() is executed.
```

### With `Object.create()`

ECMAScript 5 introduced a new method: [`Object.create()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/create). Calling this method creates a new object. The prototype of this object is the first argument of the function:
```
var a = {a: 1};
// a ---> Object.prototype ---> null

var b = Object.create(a);
// b ---> a ---> Object.prototype ---> null
console.log(b.a);   // 1 (inherited)

var c = Object.create(b);
// c ---> b ---> a ---> Object.prototype ---> null

var d = Object.create(null);
// d ---> null
console.log(d.hasOwnProperty);
// undefined, because d doesn't inherit from Object.prototype
```

### `delete` Operator with `Object.create` and `new` operator

Using `Object.create` of another object demonstrates prototypical inheritance with the `delete` operation:
```
var a = {a: 1};

var b = Object.create(a);

console.log(a.a);   // print 1
console.log(b.a);   // print 1
b.a = 5;
console.log(a.a);   // print 1
console.log(b.a);   // print 5
delete b.a;
console.log(a.a);   // print 1
console.log(b.a);   // print 1 (b.a. value 5 is deleted but it is showing value from its prototype chain)
delete a.a;         // This can also be done via 'delete Object.getPrototypeOf(b).a'
console.log(a.a);   // print undefined
console.log(b.a);   // print undefined
```
In the following example, calling `new Graph()` creates a `Graph` instance that has its own `vertices` property, and that doesn't inherit any `vertices` property. So when the `vertices` property is deleted from that `Graph` instance, the instance then has neither its own `vertices` property nor any inherited `vertices` property.
```
function Graph() {
    this.vertices = [4,4];
}

var g = new Graph();
console.log(g.vertices);   // print [4,4]
console.log(g.__proto__.vertices)   // print undefined
g.vertices = 25;
console.log(g.vertices);   // print 25
delete g.vertices;
console.log(g.vertices);   // print undefined
```

### With `class` keyword

ECMAScript 2015 introduced a new set of keywrods implementing [classes](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes). The new keywords include [`class`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/class), [`constructor`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/constructor), [`static`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/static), [`extends`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/extends), and [`super`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/super).
```
'use strict';

class Polygon {
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }
}

class Square extends Polygon {
    constructor(sideLength) {
        super(sideLength, sideLength);
    }
    get area() {
        return this.height * this.width;
    }
    set sideLength(newLength) {
        this.height = newLength;
        this.width = newLength;
    }
}

var square = new Square(2);
```

### Performance

The lookup time for properties that are high up on the prototype chain can have a negative impact on the performance, and this may be significant in the code where performance is critical. Additionally, trying to access nonexistent properties will always traverse the full prototype chain.

Also, when iterating over the properties of an object, **every** enumerable property that is on the prototype chain will be enumerated. To check whether an object has a property defined on *itself* and not somewhere on its prototype chain, it is necessary to use the [`hasOwnProperty`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwnProperty) method which all objects inherit from `Object.prototype`. To give you a concrete example, let's take the above graph example code to illustrate it:
```
console.log(g.hasOwnProperty('vertices'));
// true

console.log(g.hasOwnProperty('nope'));
// false

console.log(g.hasOwnProperty('addVertex'));
// false

console.log(Object.getPrototype(g).hasOwnProperty('addVertex'));
// true
```
[`hasOwnProperty`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwnProperty) is the only thing in JavaScript which deals with properties and does **not** traverse the prototype chain.

Note: It is **not** enough to check whether a property is [`undefined`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined). The property might very well exist, but its value just happens to be set to `undefined`.

### Summary of methods for extending the prototype chain

Here are all 4 ways and their pros/cons. All of the examples listed below create exactly the same resulting `inst` object (thus logging the same results to the console), except in different ways.

#### #1: New initialization

<hr>

**Warning**: One misfeature that is often used is to extend `Object.prototype` or one of the other built-in prototypes.

This technique is called "monkey patching" and breaks *encapsulation*. While used by popular frameworks such as Prototype.js, there is still no good reason for cluttering built-in types with additional *non-standard* functionality.

The **only** good reason for extending a built-in prototype is to backport the features of newer JavaScript engines, like `Array.forEach`.

<hr>

##### Code example

```
function foo(){}
foo.prototype = {
    foo_prop: "foo val"
};
function bar(){}
var proto = new foo;
proto.bar_prop = "bar val";
bar.prototype = proto;
var inst = new bar;
console.log(inst.foo_prop);
console.log(inst.bar_prop);
```

|   | **Pros and cons of extending `Object.prototype`** |
| --- | --- |
| **Pro(s)** | Supported in all browsers -- including older browsers (going all the way back to IE 5.5). Also, it is very fast, very standard, and very JIT-optimizable. |
| **Con(s)** | 1. In order to use this method, the function in question must be initialized. During this initialization, the constructor may store unique information that must be generated per-object. This unique information would only be generated once, potentially leading to problems.<br>2. The initialization of the constructor may put unwanted methods onto the object.<br>Both of those are generally not problems in practice. |

#### #2. `Object.create`

```
// Technique 1

function foo(){}
foo.prototype = {
    foo_prop: "foo val"
};
function bar(){}
var proto = Object,create(
    foo.prototype
);
proto.bar_prop = "bar val";
bar.prototype = proto;
var inst = new bar;
console.log(inst.foo_prop);
console.log(inst.bar_prop);
```
```
// Technique 2

function foo(){}
foo.prototype = {
    foo_prop: "foo val"
};
function bar(){}
var proto = Object.create(
    foo.prototype,
    {
        bar_prop: {
            value: "bar val"
        }
    }
);
bar.prototype = proto;
var inst = new bar;
console.log(inst.foo_prop);
console.log(inst.bar_prop);
```

|   | **Pros and cons of [`Object.create`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/create)** |
| --- | --- |
| **Pro(s)** | Supported in all modern browsers. Allows the direct setting of `__proto__` in a way that is a single event, which permits the browser to further optimize the object. Also allows the creation of objects without a prototype, using `Object.create(null)`. |
| **Con(s)** | Not supported in IE8 and below. However, as Microsoft has discontinued extended support for systems running IE8 and below, that should not be a concern for most applications. Additionally, the slow object initialization can be a performance black hole if using the second argument, because each object-descriptor property has its own separate descriptor object. When dealing with hundreds of thousands of object descriptors in the form of objects, that lag time might become a serious issue. |

#### #3: `Object.setPrototypeOf`

```
// Technique 1

function foo(){}
foo.prototype = {
    foo_prop: "foo val"
};
function bar(){}
var proto = {
    bar_prop: "bar val"
};
Object.setPrototypeOf(
    proto, foo.prototype
);
bar.prototype = proto;
var inst = new bar;
console.log(inst.foo_prop);
console.log(inst.bar_prop);
```
```
// Technique 2

function foo(){}
foo.prototype = {
    foo_prop: "foo val"
};
function bar(){}
var proto;
proto=Object.setPrototypeOf(
    { bar_prop: "bar val" },
    foo.prototype
);
bar.prototype = proto;
var inst = new bar;
console.log(inst.foo_prop);
console.log(inst.bar_prop);
```

|   | **Pros and cons of [`Object.setPrototypeOf`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/setPrototypeOf)** |
| --- | --- |
| **Pro(s)** | Supported in all modern browsers. Allows the dynamic manipulation of an object's prototype and can even force a prototype on a prototype-less object created with `Object.create(null)`. |
| **Con(s)** | Ill-performing. Should be deprecated. Many browsers optimize the prototype and try to guess the location of the method in memory when calling an instance in advance; but setting the prototype dynamically disrupts all those optimizations. It might cause some browsers to recompile your code for de-optimization, to make it work according to the specs. Not supported in IE8 and below. |

#### #4: Setting the `__proto__` property

```
// Technique 1

function A(){}
A.prototype = {
    foo_prop: "foo val"
};
function bar(){}
var proto = {
    bar_prop: "bar val",
    __proto__: A.prototype
};
bar.prototype = proto;
var inst = new bar;
console.log(inst.foo_prop);
console.log(inst.bar_prop);
```
```
// Technique 2

var inst = {
    __proto__: {
        bar_prop: "bar val",
        __proto__: {
            foo_prop: "foo val",
            __proto__: Object.prototype
        }
    }
};
console.log(inst.foo_prop);
console.log(inst.bar_prop);
```

|   | **Pros and cons of setting the [`__proto__`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/proto) property |
| --- | --- |
| **Pro(s)** | Supported in all modern browsers. Setting `__proto__` to something that is not an object only fails silently. It does not throw an exception. |
| **Con(s)** | Non-performant and deprecated. Many browsers optimize the prototype and try to guess the location of the method in the memory when calling an instance in advance; but setting the prototype dynamically disrupts all those optimizations and can even force some browsers to recompile for de-optimization of your code, to make it work according to the specs. Not supported in IE10 and below. |

## `prototype` and `Object.getPrototypeOf`

JavaScript is a bit confusing for developers coming from Java and C++, as it's all dynamic, all runtime, and it has no classes at all. It's all just instances (objects). Even the "classes" we simulate are just a function object.

You probably already noticed that our [function A]()