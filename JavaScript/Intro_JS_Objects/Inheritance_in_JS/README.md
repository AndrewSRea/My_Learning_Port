# Inheritance in JavaScript

With most of the gory details of OOJS now explained, this article shows how to create "child" object classes (constructors) that inherit features from their "parent" classes. In addition, we present some advice on when and where you might use OOJS, and look at how classes are dealt with in modern ECMAScript syntax.

## Prototypal inheritance

So far we have seen some inheritance in action -- we have seen how prototype chains work, and how members are inherited going up a chain. But mostly this has involved built-in browser functions. How do we create an object in JavaScript that inherits from another object?

Let's explore how to do this with a concrete example.

## Getting started

First of all, make yourself a local copy of our [oojs-class-inheritance-start.html](https://github.com/mdn/learning-area/blob/master/javascript/oojs/advanced/oojs-class-inheritance-start.html) file (see it [running live](https://mdn.github.io/learning-area/javascript/oojs/advanced/oojs-class-inheritance-start.html) also). Inside here you'll find the same `Person()` constructor example that we've been using all the way through the last module (the [Object prototypes](https://github.com/AndrewSRea/My_Learning_Port/tree/main/JavaScript/Intro_JS_Objects/Object_Prototypes#object-prototypes) module), with a slight difference -- we've defined only the properties inside the constructor:
```
