# What is JavaScript?

Welcome to the MDN beginner's JavaScript course! In this folder, we will look at JavaScript from a high level, answering questions such as "What is it?" and "What can you do with it?", and making sure you are comfortable with JavaScript's purpose.

## A high-level definition

JavaScript is a scripting or programming language that allows you to implement complex features on web pages--every time a web page does more than just sit there and display static information for you to look at--displaying timely content updates, interactive maps, animated 2D/3D graphics, scrolling video jukeboxes, etc.--you can bet that JavaScript is probably involved. It is the third layer of the layer cake of standard web technologies, the other two technologies being [HTML](https://developer.mozilla.org/en-US/docs/Learn/HTML) and [CSS](https://developer.mozilla.org/en-US/docs/Learn/CSS).

* [HTML](https://developer.mozilla.org/en-US/docs/Glossary/HTML) is the markup language that we use to structure and give meaning to our web content. For example, defining paragraphs, headnings, and data tables, or embedding images and videos in the page.

* [CSS](https://developer.mozilla.org/en-US/docs/Glossary/CSS) is a language of style rules that we use to apply styling to our HTML content. For example, setting background colors and fonts, and laying out our content in multiple columns.

* [JavaScript]() is a scripting language that enables you to create dynamically updating content, control multimedia, animate images, and pretty much everything else. (OK, not everything, but it is amazing what you can achieve with a few lines of JavaScript code.)

The three layers build on top of one another nicely. Let's take a simple text label as an example. We can mark it up using HTML to give it structure and purpose:
```
<p>Player 1: Chris</p>
```
Then we can add some CSS into the mix to get it looking nice:
```
p {
    font-family: 'helvetica neue', helvetica, sans-serif;
    letter-spacing: 1px;
    text-transform: uppercase;
    text-align: center;
    border: 2px solid rgba(0,0,200,0.6);
    background: rgba(0,0,200,0.3);
    color: rgba(0,0,200,0.6);
    box-shadow: 1px 1px 2px rgba(0,0,200,0.4);
    border-radius: 10px;
    padding: 3px 10px;
    display: inline-block;
    cursor: pointer;
}
```
And finally, we can add some JavaScript to implement dynamic behavior:
```
const para = document.querySelector('p');

para.addEventListener('click', updateName);

function updateName() {
    let name = prompt('Enter a new name');
    para.textContent = 'Player 1: ' + name;
}
```
Try clicking on the button created by this code in this demo [here](). (And see the source code [here](https://github.com/AndrewSRea/My_Learning_Port/blob/main/JavaScript/JS_First_Steps/What_Is_JS/javascript-label.html).)

JavaScript can do a lot more than this--let's explore what in more detail.

## So what can it really do?

The core client-side JavaScript language consists of some common programming features that allow you to do things like:

* Store useful values inside variables. In the above example, for instance, we ask for a new name to be entered, then store that name in a variable called `name`.
* Operations on pieces of text (known as "strings" in programming). In the above example, we take the string "Player 1:" and join it to the `name` variable to create the complete text label, e.g. "Player 1: Chris".
* Running code in response to certain events occurring on a web page. We used a `click` event in our example above to detect when the button is clicked and then run the code that updates the text label.
* And much more!

What is even more exciting, however, is the functionality built on top of the client-side JavaScript language. So-called **Application Programming Interfaces (APIs)** provide you with extra superpowers to use in your JavaScript code.

APIs are ready-made sets of code building blocks that allow a developer to implement programs that would otherwise be hard or impossible to implement. They do the same thing for programming that ready-made furniture kits do for home building--it is much easier to take ready-cut panels and screw them together to make a bookshelf than it is to work out the design yourself, go and find the correct wood, cut all the panels to the right size and shape, find the correct-sized screws, and *then* put them together to make a bookshelf.

They generally fall into to categories:

**Browser APIs** are built into your web browser, and are able to expose data from the surrounding computer environment, or do useful complex things. For example:

* The [`DOM (Document Object Model) API`](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model) allows you to manipulate HTML and CSS, creating, removing, and changing HTML, dynamically applying new styles to your page, etc. Every time you see a popup window appear on a page, or some new content displayed (as we saw above in our simple demo), for example, that's the DOM in action.
* The [`Geolocation API`](https://developer.mozilla.org/en-US/docs/Web/API/Geolocation) retrieves geographical information. This is how [Google Maps](https://www.google.com/maps) is able to find your location and plot it on a map.
* The [`Canvas`](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API) and [`WebGL`](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API) APIs allow you to create animated 2D and 3D graphics. People are doing some amazing things using these web technologies--see [Chrome Experiments](https://experiments.withgoogle.com/search?q=WebGL) and [webglsamples](http://webglsamples.org/).
* [Audio and Video APIs]() like [`HTMLMediaElement`]() and [`WebRTC`]() allow you to do really interesting things with multimedia, such as play audio and video right in a web game, or grab video from your web camera and display it on someone else's computer (try Mozilla's simple [Snapshot demo]() to get the idea).

<hr>

:exclamation: **Note**: Many of the above demos won't work in an older browser--when experimenting, it's a good idea to use a modern browser like Firefox, Chrome, Edge, or Opera to run your code in. You will need to consider [cross browser testing]() in more detail when you get closer to delivering production code (i.e. real code that real customers will use).

<hr>

**Third party APIs** are not built into the browser, by default, and you generally have to grab their code and 