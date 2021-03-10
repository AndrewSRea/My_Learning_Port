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
* [Audio and Video APIs](https://developer.mozilla.org/en-US/docs/Web/Guide/Audio_and_video_delivery) like [`HTMLMediaElement`](https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement) and [`WebRTC`](https://developer.mozilla.org/en-US/docs/Web/API/WebRTC_API) allow you to do really interesting things with multimedia, such as play audio and video right in a web game, or grab video from your web camera and display it on someone else's computer (try Mozilla's simple [Snapshot demo](https://chrisdavidmills.github.io/snapshot/) to get the idea).

<hr>

:exclamation: **Note**: Many of the above demos won't work in an older browser--when experimenting, it's a good idea to use a modern browser like Firefox, Chrome, Edge, or Opera to run your code in. You will need to consider [cross browser testing]() in more detail when you get closer to delivering production code (i.e. real code that real customers will use).

<hr>

**Third party APIs** are not built into the browser, by default, and you generally have to grab their code and information from somewhere on the Web. For example:

* The [Twitter API]() allows you to do things like displaying your latest tweets on your website.
* The [Google Maps API]() and [OpenStreetMap API]() allows you to embed custom maps into your website, and other such functionality.

<hr>

:exclamation: **Note**: These APIs are advanced, and we'll not be covering any of these in this module. You can find out much more about these in the [Client-side web APIs module](). <!-- your "Client-side_Web_APIs" folder -->

<hr>

There's a lot more available, too! However, don't get overexcited just yet. You won't be able to build the next Facebook, Google Maps, or Instagram after studying JavaScript for 24 hours--there are a lot of basics to cover first. And that's why you're here--let's move on!

## What is JavaScript doing on your page?

Here we'll actually start looking at some code, and while doing so, explore what actually happens when you run some JavaScript in your page.

Let's briefly recap the story of what happens when you load a web page in a browser (first talked about in Mozilla's [How CSS works](https://developer.mozilla.org/en-US/docs/Learn/CSS/First_steps/How_CSS_works#how_does_css_actually_work) article). When you load a web page in your browser, you are running your code (the HTML, CSS, and JavaScript) inside an execution environment (the browser tab). This is like a factory that takes in raw materials (the code) and outputs a product (the web page).

A very common use of JavaScript is to dynamically modify HTML and CSS to update a user interface, via the Document Object Model API (as mentioned above). Note that the code in your web documents is generally loaded and executed in the order it appears on the page. If the JavaScript loads and tries to run before the HTML and CSS it is affecting has been loaded, errors can occur. You will learn ways around this later in the article, in the [Script loading strategies]() section.

### Browser security

Each browser tab has its own separate bucket for running code in (these buckets are called "execution environments" in technical terms)--this means that, in most cases, the code in each tab is run completely separately, and the code in one tab cannot directly affect the code in another tab--or on another website. This is a good security measure--if this were not the case, then pirates could start writing code to steal information from other websites, and other such bad things.

<hr>

:exclamation: **Note**: There are ways to send code and data between different websites/tabs in a safe manner, but these are advanced techniques that we won't cover in this course.

<hr>

### JavaScript running order

When the browser encounters a block of JavaScript, it generally runs it in order, from top to bottom. This means that you need to be careful what order you put things in. For example, let's return to the block of JavaScript we saw in our first example:
```
const para = document.querySelector('p');

para.addEventListener('click', updateName);

function updateName() {
    let name = prompt('Enter a new name');
    para.textContent = 'Player 1: ' + name;
}
```
Here we are selecting a text paragraph (line 1), then attaching an event listener to it (line 3) so that when the paragraph is clicked, the `updateName()` code block (lines 5-8) is run. The `updateName()` code block (these types of reusable code blocks are called "functions") asks the user for a new name, and then inserts that name into the paragraph to update the display.

If you swapped the order of the first two lines of code, it would no longer work--instead, you'd get an error returned in the [browser developer console]()--`TypeError: para is undefined`. This means that the `para` object does not exist yet, so we ccan't add an event listener to it.

<hr>

:exclamation: **Note**: This is a very common error--you need to be careful that the objects referenced in your code exist before you try to do stuff to them.

<hr>

### Interpreted versus compiled code

You might hear the terms **interpreted** and **complied** in the context of programming. In interpreted languages, the code is run from top to bottom and the result of running the code is immediately returned. You don't have to transform the code into a different form before the browser runs it. The code is received in its programmer-friendly text form and processed directly from that. 

Compiled languages, on the other hand, are transformed (compiled) into another form before they are run by the computer. For example, C/C++ are complied into machine code that is run by the computer. The program is executed from a binary format, which was generated from the original program source code.

JavaScript is a lightweight interpreted programming language. The web browser receives the JavaScript code in its original text form and runs the script from that. From a technical standpoint, most modern JavaScript interpreters actually use a technique called **just-in-time compiling** to improve performance; the JavaScript source code gets compiled into a faster, binary format while the script is being used, so that it can be run as quickly as possible. However, JavaScript is still considered an interpreted language, since the compilation is handled at run time, rather than ahead of time.

There are advantages to both types of language, but we won't discuss them right now.

### Server-side versus client-side code

You might also hear the terms **server-side** and **client-side** code, especially in the content of web development. Client-side code is code that is run on the user's computer--when a web page is viewed, the page's client-side code is downloaded, then run and displayed by the browser. In this module, we are explicitly talking about **client-side JavaScript**.

Server-side code, on the other hand, is run on the server, then its results are downloaded and displayed in the browser. Examples of popular server-side web languages include PHP, Python, Ruby, ASP.NET and... JavaScript! JavaScript can also be used as a server-side language, for example, in the popular Node.js environment--you acn find out more about the server-side JavaScript in Mozilla's [Dynamic Websites - Server-side programming](https://developer.mozilla.org/en-US/docs/Learn/Server-side) topic. (This will also be a folder I intend to create inside the **My_Learning_Port** folder.)

### Dynamic versus static code

The word **dynamic** is used to describe both client-side JavaScript, and server-side languages--it refers to the ability to update the display of a web page/app to show different things in different circumstances, generating new content as required. Server-side code dynamically generates new content on the server, e.g. pulling data from a database, whereas client-side JavaSript dynamically generates new code inside the browser on the client, e.g. creating a new HTML table, filling it with data requested from the server, then displaying the table in a web page shown to the user. The meaning is slightly different in the two contexts, but related, and both approaches (server-side and client-side) usually work together.

A web page with no dynamically updating content is referred to as **static**--it just shows the same content all the time.

## How do you add JavaScript to your page?

JavaScript is applied to your HTML page in a similar manner to CSS. Whereas CSS uses [`<link>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/link) elements to apply external stylesheets and [`<style>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/style) elements to apply internal stylesheets to HTML, JavaScript only needs one friend in the world of HTML--the [`<script>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/script) element. Let's learn how this works.

### Internal JavaScript

1. First of all, make a local copy of Mozilla's example file [apply-javascript.html](https://github.com/mdn/learning-area/blob/master/javascript/introduction-to-js-1/what-is-js/apply-javascript.html). Save it in a directory somewhere sensible.
2. Open the file in your web browser and in your text editor. You'll see that the HTML creates a simple web page containing a clickable button.
3. Next, go to your text editor and add the following in your head--just before your closing `</head>` tag:
```
<script>

    // JavaScript goes here

</script>
```
4. Now we'll add some JavaScript inside our `<script>` element to make the page do something more interesting--add the following code just below the "// JavaScript goes here" line:
```
document.addEventListener("DOMContentLoaded", function() {
    function createParagraph() {
        let para = document.createElement('p');
        para.textContent = 'You clicked the button!';
        document.body.appendChild(para);
    }

    const buttons = document.querySelectorAll('button');

    for(let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', createParagraph);
    }
});
```
5. Save your file and refresh the browser--now you should see that when you click the button, a new paragraph is generated and placed below.

<hr>

:exclamation: **Note**: If your example dosn't sem to work, go through the steps again and check that you did everything right. Did you save your local copy of the starting code as an `.html` file? Did you add your `<script>` element just before the `</head>` tag? Did you enter the JavaScript exactly as shown? **JavaScript is case sensitive, and very fussy, so you need to enter the syntax exactly as shown, otherwise it may not work.**

<hr>

### External JavaScript