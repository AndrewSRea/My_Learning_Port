# Introducing asynchronous JavaScript

In this article, we briefly recap the problems associated with synchronous JavaScript, and take a first look at some of the different asynchronous techniques you'll encounter, showing how they can help us solve such problems.

## Synchronous JavaScript

To allow us to understand what **[asynchronous](https://developer.mozilla.org/en-US/docs/Glossary/Asynchronous)** JavaScript is, we ought to start off by making sure we understand what **[synchronous](https://developer.mozilla.org/en-US/docs/Glossary/Synchronous)** JavaScript is. This section recaps some of the information we saw in the previous article.

A lot of the functionality we have looked at in previous learning area modules is synchronous -- you run some code, and the result is returned as soon as the browser can do so. Let's look at a simple example ([see it live here](), and [see the source](https://github.com/AndrewSRea/My_Learning_Port/blob/main/JavaScript/Asynchronous_JS/Intro_Async_JS/basic-function.html)):
```
const btn = document.querySelector('button');
btn.addEventListener('click', () => {
    alert('You clicked me!');

    let pElem = document.createElement('p');
    pElem.textContent = 'This is a newly-added paragraph.';
    document.body.appendChild(pElem);
});
```
In this block, the lines are executed one after the other:

1. We grab a reference to a [`<button>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button) element that is already available in the DOM.
2. We add a [`click`](https://developer.mozilla.org/en-US/docs/Web/API/Element/click_event) event listener to it so that when the button is clicked:
    1. An [`alert()`](https://developer.mozilla.org/en-US/docs/Web/API/Window/alert) message appears.
    2. Once the alert is dismissed, we create a [`<p>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/p) element.
    3. We then give it some text content.
    4. Finally, we append the paragraph to the document body.

While each operation is being processed, nothing else can happen -- rendering is paused. This is because, as we said in the **[previous article](https://github.com/AndrewSRea/My_Learning_Port/tree/main/JavaScript/Asynchronous_JS/Gen_Async_Prog_Concepts#general-asynchronous-programming-concepts)**, [JavaScript is single-threaded](https://github.com/AndrewSRea/My_Learning_Port/tree/main/JavaScript/Asynchronous_JS/Gen_Async_Prog_Concepts#javascript-is-single-threaded). Only one thing can happen at a time, on a single main thread, and everything else is blocked until an operation completes.

So in the example above, after you've clicked the button, the paragraph won't appear until after the OK button is pressed in the alert box. [You can try it for yourself]().

<hr>

**Note**: It is important to remember that [`alert()`](https://developer.mozilla.org/en-US/docs/Web/API/Window/alert), while being very useful for demonstrating a synchronous blocking operation, is terrible for use in real world applications.

<hr>