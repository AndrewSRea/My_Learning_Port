# Test your skills: Object-oriented JavaScript

The aim of this skill test is to assess whether you've understood our [Object-oriented JavaScript for beginners](), [Object protoypes](), and [Inheritance in JavaScript]() articles.

## OOJS 1

In this task, we provide you with a constructor. We want you to:

* Add a new method to the `Shape` class's prototype, `calcPerimeter()`, which calculates its perimeter (the length of the shape's outer edge) and logs the result to the console.
* Create a new instance of the `Shape` class called `square`. Give it a `name` of `square` and a `sideLength` of `5`.
* Call your `calcPerimeter()` method on the instance, to see whether it logs the calculation result to the browser DevTools' console as expected.
* Create a new instance of `Shape` called `triangle`, with a `name` of `triangle` and a `sideLength` of `3`.
* Call `triangle.calcPerimeter()` to check that it works OK.

Try updating the live code below to recreate the finished example:
```
function Shape(name, sides, sideLength) {
    this.name = name;
    this.sides = sides;
    this.sideLength = sideLength;
}

// Write your code below here

```