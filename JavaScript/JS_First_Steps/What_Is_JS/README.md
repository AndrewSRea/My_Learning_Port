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