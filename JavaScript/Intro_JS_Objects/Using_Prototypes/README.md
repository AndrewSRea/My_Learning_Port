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