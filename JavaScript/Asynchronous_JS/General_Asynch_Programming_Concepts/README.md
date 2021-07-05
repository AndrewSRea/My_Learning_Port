# General asynchronous programming concepts

In this article, we'll run through a number of important concepts relating to asynchronous programming, and how this looks in web browsers and JavaScript. You should understand these concepts before working through the other articles in the module.

## Asynchronous?

Normally, a given program's code runs straight along, with only one thing happening at once. If a function relies on the result of another function, it has to wait for the other function to finish and return, and until that happens, the entire program is essentially stopped from the persepctive of the user.

Mac users, for example, sometimes experience this as the spinning rainbow-colored cursor (or "beachball", as it is often called). This cursor is how the operating system says "the current program you're using has had to stop and wait for something to finish up, and it's taking so long that I was worried you'd wonder what was going on."

This is a frustrating experience and isn't a good use of computer processing power -- especially in an era in which computers have have multiple processor cores available. There's no sense sitting there waiting for something when you could let the other task chug along on another processor core and let you know when it's done. This lets you get other work done in the meantime, which is the basis of **asynchronous programming**. It is up to the programming environment you are using (web browsers, in the case of web development) to provide you with APIs that allow you to run such tasks asynchronously.

## Blocking code

Asynchronous techniques are very useful, particularly in web programming. When a web app runs in a browser and it executes an intensive chunk of code without returning control to the browser, the browser can appear to be frozen. This is called **blocking**; the browser is blocked from continuing to handle user input and perform other tasks until the web app returns control of the processor.

Let's look at a couple of examples that show what we mean by blocking.

In our [simple-sync.html]() example ([see it running live]()), we add a click event listener to a button so that when clicked, it runs a time-consuming operation (calculates 10 million dates, then logs the final ones to the console) and then adds a paragraph to the DOM:
```
const btn = document.querySelector('button');
btn.addEventListener('click', ()  => {
    let myDate;
    for (let i = 0; i < 10000000; i++) {
        let date = new Date();
        myDate = date;
    }

    console.log(myDate);

    let pElem = document.createElement('p');
    pElem.textContent = 'This is a newly-added paragraph.';
    document.body.appendChild(pElem);
});
```
When running the example, open your JavaScript console, then click the button -- you'll notice that the paragraph does not appear until after the dates have finished being calculated and the console message has been logged. The code runs in the order it appears in the source, and the later operation doesn't run till the earlier operation has finished running.

<hr>

**Note**: The previous example is very unrealistic. You would never calculate 10 million dates on a real web app! It does, however, serve to give you the basic idea.

<hr>