# Introduction to web APIs

First up, we'll start by looking at APIs from a high level -- what are they, how do they work, how to use them in your code, and how are they structured? We'll also take a look at what the different main classes of APIs are, and what kind of uses they have.

## What are APIs?

Application Programming Interfaces (APIs) are constructs made available in programming languages to allow developers to create complex functionality more easily. They abstract more complex code away from you, providing some easier syntax to use in its place.

As a real-world example, think about the electricity supply in your house, apartment, or other dwellings. If you want to use an appliance in your house, you plug it into a plug socket and it works. You don't try to wire it directly into the power supply -- to do so would be really inefficient and, if you are not an electrician, difficult and dangerous to attempt.

In the same way, if you want to, say, program some 3D graphics, it is a lot easier to do it using an API written in a higher-level language such as JavaScript or Python, rather than try to directly write low-level code (say, C or C++) that directly controls the computer's GPU or other graphics functions.

<hr>

**Note**: See also the [API glossary entry](https://developer.mozilla.org/en-US/docs/Glossary/API) for further description.

<hr>

### APIs in client-side JavaScript

Client-side JavaScript, in particular, has many APIs available to it -- these are not part of the JavaScript language itself, rather they are built on top of the core JavaScript language, providing you with extra superpowers to use in your JavaScript code. They generally fall into two categories:

* **Browser APIs** are built into your web browser and are able to expose data from the browser and surrounding computer environment and do useful complex things with it. For example, the [Web Audio API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Audio_API) provides JavaScript constructs for manipulating audio in the browser -- taking an audio track, altering its volume, applying effects to it, etc. In the background, the browser is actually using some complex lower-level code (e.g. C++ or Rust) to do the actual audio processing. But again, this complexity is abstracted away from you by the API.
* **Third-party APIs** are not built into the browser by default, and you generally have to retrieve their code and information from somewhere on the Web. For example, the [Twitter API](https://developer.twitter.com/en/docs) allows you to do things like displaying your latest tweets on your website. It provides a special set of constructs you can use to query the Twitter service and return specific infromation.

### Relationships between JavaScript, APIs, and other JavaScript tools

So above, we talked about what client-side JavaScript APIs are, and how they relate to the JavaScript language. Let's recap this to make it clearer, and also mention where other JavaScript tools fit in:

* JavaScript -- A high-level scripting language built into browser that allows you to implement functionality on web pages/apps. Note that JavaScript is also available in other programming environments, such as [Node](https://github.com/AndrewSRea/My_Learning_Port/tree/main/Server-Side_Website_Programming/Express_Web_Framework/Express_Node_Intro#expressnode-introduction).

* Browser APIs -- Constructs built into the browser that sits on top of the JavaScript language and allows you to implement functionality in more easily.