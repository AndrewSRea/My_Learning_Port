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

1. Add the following line below your previous addition:
```
Teacher.prototype = Object.create(Person.prototype);
```
Here our friend [`create()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/create) comes to the rescue again. In this case, we are using it to create a new object and make it the value of `Teacher.prototype`. The new object has `Person.prototype` as its prototype and will therefore inherit, if and when needed, all the methods available on `Person.prototype`.

2. We need to do one more thing before we move on. After adding the last line, `Teacher.prototype`'s `constructor` property is now equal to `Person()`, because we just set `Teacher.prototype` to reference an object that inherits its properties from `Person.prototype`! Try saving your code, loading the page in a browser, and entering `Teacher.prototype.constructor` into the console to verify.

3. This can become a problem, so we need to set this right. You can do so by going back to your source code and adding the following line at the bottom:
```
Object.defineProperty(Teacher.prototype, 'constructor', {
    value: Teacher.
    enumerable: false,   // so that it does not appear in 'for in' loop
    writable: true
});
```

4. Now if you save and refresh, entering `Teacher.prototype.constructor` should return `Teacher()`, as desired, plus we are now inheriting from `Person()`!

## Giving `Teacher()` a new `greeting()` function

To finish off our code, we need to define a new `greeting()` function on the `Teacher()` constructor.

The easiest way to do this is to define it on `Teacher()`'s prototype -- add the following at the bottom of your code:
```
Teacher.prototype.greeting = function() {
    let prefix;

    if (this.gender === 'male' || this.gender === 'Male' || this gender === 'm' || this.gender === 'M') {
        prefix = 'Mr.';
    } else if (this.gender === 'female' || this.gender === 'Female' || this gender === 'f' || this.gender === 'F') {
        prefix = 'Ms.';
    } else {
        prefix = 'Mx.';
    }

    alert('Hello. My name is ' + prefix + ' ' + this.name.last + ', and I teach ' + this.subject + '.');
};
```
This alerts the teacher's greeting, which also uses an appropriate name prefix for their gender, worked out using a conditional statement.

## Trying the example out

Now that you've entered all the code, try creating an object instance from `Teacher()` by putting the following at the bottom of your JavaScript (or something similar of your choosing):
```
let teacher1 = new Teacher('Dave', 'Griffiths`, 31, 'male', ['football', 'cookery'], 'mathematics');
```
Now save and refresh, and try accessing the properties and methods of your new `teacher1` object. For example:
```
teacher1.name.first;
teacher1.interests[0];
teacher1.bio();
teacher1.subject;
teacher1.greeting();
teacher1.farewell();
```
These should all work just fine. The queries on lines 1, 2, 3, and 6 access members inherited from the generic `Person()` constructor (class). The query on line 4 accesses a member that is available only on the more specialized `Teacher()` constructor (class). The query on line 5 would have accessed a member inherited from `Person()`, except for the fact that `Teacher()` has its own member with the same name, so the query accesses that member.

The technique we covered here is not the only way to create inheriting classes in JavaScript, but it works OK, and it gives you a good idea about how to implement inheritance in JavaScript.

A common way is to use a JavaScript library -- most of the popular options have an easy set of functionality available for doing inheritance more easily and quickly. [CoffeeScript](https://coffeescript.org/#classes), for example, provides `class`, `extends`, etc.

## A further exercise

In our [OOP theory section](https://github.com/AndrewSRea/My_Learning_Port/tree/main/JavaScript/Intro_JS_Objects/Object-Oriented_JS#object-oriented-javascript-for-beginners), we also included a `Student` class as a concept, which inherits all the features of `Person`, and also has a different `greeting()` method from `Person` that is much more informal than the `Teacher`'s greeting. Have a look at what the student's greeting looks like in that section, and try implementing your own `Student()` constructor that inherits all the features of `Person()`, and implements the different `greeting()` function.

(See my implemented finished version of the code [here](https://github.com/AndrewSRea/My_Learning_Port/blob/main/JavaScript/Intro_JS_Objects/Inheritance_in_JS/oojs-class-inheritance-start.html), and see it running live [here]().)

## Object member summary

To summarize, you've got four types of property/method to worry about:

1. Those defined inside a constructor function that are given to object instances. These are fairly easy to spot -- in your own custom code, they are the members defined inside a constructor using the `this.x = x` type lines; in built-in browser code, they are the members only available to object instances (usually created by calling a constructor using the `new` keyword, e.g. `let myInstance = new myConstructor()`).
2. Those defined directly on the constructor themselves, that are available only on the constructor. These are commonly only available on built-in browser objects, and are recognized by being chained directly onto a constructor, *not* an instance. For example, [`Object.keys()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys). These are also known as **static properties/methods**.
3. Those defined on a constructor's prototype, which are inherited by all instances and inheriting object classes. These include any member defined on a Constructor's `prototype` property, e.g. `myConstructor.prototype.x()`.
4. Those available on an object instance, which can either be an object created when a constructor is instantiated like we saw above (so, for example, `let teacher1 = new Teacher( 'Chris' );` and then `teacher1.name`), or an object literal (`let teacher1 = { name : 'Chris' }` and then `teacher1.name`).

If you are not sure which is which, don't worry about it just yet -- you are still learning, and familiarity will come with practice.

## ECMAScript 2015 Classes

ECMAScript 2015 introduces [class syntax](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes) to JavaScript as a way to write reusable classes using easier, cleaner syntax, which is more similar to classes in C++ or Java. In this section, we'll convert the Person and Teacher examples from prototypal inheritance to classes, to show you how it's done.

<hr>

**Note**: This modern way of writing classes is supported in all modern browsers, but it is still worth knowing about the underlying prototypal inheritance in case you work on a project that requires supporting a browser that doesn't support this syntax (most notably Internet Explorer).

<hr>

Let's look at a rewritten version of the Person example, class-style:
```
class Person {
    constructor(first, last, age, gender, interests) {
        this.name = {
            first,
            last
        };
        this.age = age;
        this.gender = gender;
        this.interests = interests;
    }

    greeting() {
        console.log(`Hi! I'm ${this.name.first}`);
    };

    farewell() {
        console.log(`${this.name.first} has left the building. Bye for now!`);
    };
}
```
The [class](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/class) statement indicates that we are creating a new class. Inside this block, we define all the features of the class:

* The [`constructor()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/constructor) method defines the constructor function that represents our `Person` class. 
* `greeting()` and `farewell()` are class methods. Any methods you want associated with the class are defined inside it, after the constructor. In this example, we've used [template literals](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals) rather than string concatenation to make the code easier to read.

We can now instantiate object instances using the [`new` operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/new), in just the same way as we did before:
```
let han = new Person('Han', 'Solo', 25, 'male', ['Smuggling']);
han.greeting();
// Hi! I'm Han

let leia = new Person('Leia', 'Organa', 19, 'female', ['Government']);
leia.farewell();
// Leia has left the building. Bye for now!
```

<hr>

**Note**: Under the hood, your classes are being converted into Prototypal Inheritance models -- this is just syntactic sugar. But I'm sure you'll agree that it's easier to write.

<hr>

### Inheritance with class syntax

Above we created a class to represent a person. They have a series of attributes that are common to all people; in this section, we'll create our specialized `Teacher` class, making it inherit from `Person` using modern class syntax. This is called creating a subclass, or subclassing.

To create a subclass, we use the [`extends` keyword](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/extends) to tell JavaScript the class we want to base our class on.
```
class Teacher extends Person {
    constructor(subject, grade) {
        this.subject = subject;
        this.grade = grade;
    }
}
```
But there's a little catch.

Unlike old-school constructor functions where the `new` operator does the initialization of `this` to a newly-allocated object, this isn't automatically initialized for a class defined by the `extends` keyword, i.e. the subclasses.

Therefore running the above code will give an error:
```
Uncaught ReferenceError: Must call super constructor in derived class before accessing 'this' or returning from derived constructor
```
For sub-classes, the `this` initialization to a newly allocated object is always dependent on the parent class constructor, i.e. the constructor function of the class from which you're extending.

Here, we are extending the `Person` class -- the `Teacher` sub-class is an extension of the `Person` class. So, for `Teacher`, the `this` initialization is done by the `Person` constructor.

To call the parent constructor, we have to use the [`super()` operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/super), like so:
```
class Teacher extends Person {
    constructor(subject, grade) {
        super();   // Now 'this' is initialized by calling the parent constructor.
        this.subject = subject;
        this.grade = grade;
    }
}
```
There is no point having a sub-class if it doesn't inherit properties from the parent class. It is good then that the `super()` operator also accepts arguments for the parent constructor.

Looking back to our `Person` constructor, we can see it has the following block of code in its constructor method:
```
constructor(first, last, age, gender, interests) {
    this.name = {
        first,
        last
    };
    this.age = age;
    this.gender = gender;
    this.interests = interests;
}
```
Since the `super()` operator is actually the parent class constructor, passing it the necessary arguments of the `Person` class constructor will also initialize the parent class properties in our sub-class, thereby inheriting it:
```
class Teacher extends Person {
    constructor(first, last, age, gender, interests, subject, grade) {
        super(first, last, age, gender, interests);

        // subject and grade are specific to Teacher
        this.subject = subject;
        this.grade = grade;
    }
}
```
Now when we instantiate `Teacher` object instances, we can call methods and properties defined on both `Teacher` and `Person` as we'd expect:
```
let snape = new Teacher('Severus', 'Snape', 58, 'male', ['Potions'], 'Dark arts', 5);
snape.greeting();   // Hi! I'm Severus
snape.farewell();   // Severus has left the building. Bye for now!
snape.age;          // 58
snape.subject;      // Dark arts
```
Like we did with `Teacher`, we could create other subclasses of `Person` to make them more specialized without modifying the base class.

## Getters and setters