# Test your skills: Object-oriented JavaScript

The aim of this skill test is to assess whether you've understood our [Object-oriented JavaScript for beginners](https://github.com/AndrewSRea/My_Learning_Port/tree/main/JavaScript/Intro_JS_Objects/Object-Oriented_JS#object-oriented-javascript-for-beginners), [Object protoypes](https://github.com/AndrewSRea/My_Learning_Port/tree/main/JavaScript/Intro_JS_Objects/Object_Prototypes#object-prototypes), and [Inheritance in JavaScript](https://github.com/AndrewSRea/My_Learning_Port/tree/main/JavaScript/Intro_JS_Objects/Inheritance_in_JS#inheritance-in-javascript) articles.

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
See my finished code for this test under the **Object-Oriented JS Skills Test 1** header, under the opening `<script>` tag, in my accompanying [oojs-skills-test.html](https://github.com/AndrewSRea/My_Learning_Port/blob/main/JavaScript/Intro_JS_Objects/Object-Oriented_JS/Skills_Test/oojs-skills-test.html) file, and see the result of this finished code [here](), under the **Object-Oriented JS Skills Test 1** header.

## OOJS 2

Next up, we want you to take the `Shape` class you saw in Task #1 (including the `calcPerimeter()` method) and recreate it using ES syntax instead.

Test that it works by creating the `square` and `triangle` object instances as before (using `new Shape()` for both), and then calling their `calcPerimeter()` methods.

Try updating the live code below to recreate the finished example:
```


```
The "live code" above is blank because this code is basically recreated from the previous **OOJS 1** task above. To see my full finished code for this test, go to my accompanying [oojs-skills-test.html](https://github.com/AndrewSRea/My_Learning_Port/blob/main/JavaScript/Intro_JS_Objects/Object-Oriented_JS/Skills_Test/oojs-skills-test.html) file and look under the **Object-Oriented JS Skills Test 2** header, under the opening `<script>` tag, and see the result of this finished code [here](), under the **Object-Oriented JS Skills Test 2** header.

## OOJS 3

Finally, we'd like you to start with the ES `Shape` class you created in the last task.

We'd like you to create a `Square` class that inherits from `Shape`, and adds a `calcArea()` method that calculates the square's area. Also, set up the constructor so that the `name` property of `Square` object instances is automatically set to `square`, and the `sides` property is automatically set to `4`. When invoking the constructor, you should therefore just need to provide the `sideLength` property.

Create an instance of the `Square` class called `square` with appropriate property values, and call its `calcPerimeter()` and `calcArea()` methods to show that it works OK.

Try updating the live code below to recreate the finished example:
```


```
The "live code" above is blank because this code is basically recreated from the previous **OOJS 2** task above. To see my full finished code for this test, go to my accompanying [oojs-skills-test.html](https://github.com/AndrewSRea/My_Learning_Port/blob/main/JavaScript/Intro_JS_Objects/Object-Oriented_JS/Skills_Test/oojs-skills-test.html) file and look under the **Object-Oriented JS Skills Test 3** header, under the opening `<script>` tag, and see the result of this finished code [here](), under the **Object-Oriented JS Skills Test 3** header.

<hr>

[[Back to Object-oriented JavaScript for beginners]](https://github.com/AndrewSRea/My_Learning_Port/tree/main/JavaScript/Intro_JS_Objects/Object-Oriented_JS#test-your-skills) - [[Back to Object prototypes]](https://github.com/AndrewSRea/My_Learning_Port/tree/main/JavaScript/Intro_JS_Objects/Object_Prototypes#test-your-skills) - [[Back to Inheritance in JavaScript]](https://github.com/AndrewSRea/My_Learning_Port/tree/main/JavaScript/Intro_JS_Objects/Inheritance_in_JS#test-your-skills)