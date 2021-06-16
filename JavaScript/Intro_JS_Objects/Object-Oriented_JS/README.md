# Object-oriented JavaScript for beginners 

With the basics out of the way, we'll now focus on object-oriented JavaScript (OOJS) -- this article presents a basic view of object-oriented programming (OOP) theory, then explores how JavaScript emulates object classes via constructor functions, and how to create object instances.

## Object-oriented programming -- the basics

To start with, let's give you a simplistic, high-level view of what Object-oriented programming (OOP) is. We say simplistic because OOP can quickly get very complicated, and giving it a full treatment now would probably confuse more than help. The basic idea of OOP is that we use objects to model real world things that we want to represent inside our programs, and/or provide a simple way to access functionality that would otherwise be hard or impossible to make use of.

Objects can contain related data and code, which represent information about the thing you are trying to model, and functionality or behavior that you want it to have. Object data (and often functions, too) can be stored neatly (the official word is **encapsulated**) inside an object package (which can be given a specific name to refer to, which is sometimes called a **namespace**), making it easy to structure and access; objects are also commonly used as data stores that can be easily sent across the network.

### Defining an object template

Let's consider a simple program that displays information about the students and teachers at a school. Here we'll look at OOP theory in general, not in the context of any specific programming language.

To start this off, we could return to our Person object type from our [first objects article](https://github.com/AndrewSRea/My_Learning_Port/tree/main/JavaScript/Intro_JS_Objects/Object_Basics#javascript-object-basics), which defines the generic data and functionality of a person. There are lots of things you *could* know about a person (their address, height, shoe size, DNA profile, passport number, significant personality traits...), but in this case, we are only interested in showing their name, age, gender, and interests, and we also want to be able to write a short introduction about them based on this data, and get them to say hello. This is known as **abstraction** -- creating a simple model of a more complex thing, which represents its most important aspects in a way that is easy to work with for our program's purposes.

![Image of a Person object](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Object-oriented_JS/person-diagram.png)

### Creating actual objects

From our class, we can create **object instances** -- objects that contain the data and functionality defined in the class. From our Person class, we can now create some actual people:

![Image of some object instances](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Object-oriented_JS/mdn-graphics-instantiation-2-fixed.png)

When an object instance is created from a class, the class's **constructor function** is run to create it. This process of creating an object instance from a class is called **instantiation** -- the object instance is **instantiated** from the class.

### Specialist classes

In this case, we don't want generic people -- we want teachers and students, which are both more specific types of people. In OOP, we can create new classes based on other classes -- these new **child classes** (also known as **subclasses**) can be made to **inherit** the data and code features of their **parent class**, so you can reuse functionality common to all the object types rather than having to duplicate it. Where functionality differs between classes, you can define specialized features directly on them as needed.

![Image of inherited specialist class objects](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Object-oriented_JS/mdn-graphics-inherited-3.png)

This is really useful -- teachers and students share many common features such as name, gender, and age, so it is convenient to only have to define those features once. You can also define the same feature separately in different classes, as each definition of that feature will be in a different namespace. For example, a student's greeting might be of the form, "Yo, I'm [firstName]" (e.g. *Yo, I'm Sam*), whereas a teacher might use something more formal, such as, "Hello, my name is [Prefix][lastName], and I teach [Subject]." (e.g. *Hello, my name is Mr. Griffiths, and I teach Chemistry*).

<hr>

**Note**: The fancy word for the ability of multiple object types to implement the same functionality is **polymorphism**. Just in case you were wondering.

<hr>

You can now create object instances from your child classes. For example:

![Image of object instances from child classes](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Object-oriented_JS/mdn-graphics-instantiation-teacher-3.png)

In the rest of the article, we'll start to look at how OOP theory can be put into practice in JavaScript.

<hr>

**Note**: The images above are the property of the Mozilla Developer Network. 

<hr>