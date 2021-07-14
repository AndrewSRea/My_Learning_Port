# Graceful asynchronous programming with Promises

**Promises** are a comparatively new feature of the JavaScript language that allow you to defer further actions until after a previous action has completed, or respond to its failure. This is useful for setting up a sequence of async operations to work correctly. This article shows you how promises work, how you'll see them in use with web APIs, and how to write your own.

## What are promises?

We looked at [Promises](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) briefly in the first article of the course, but here we'll look at them in a lot more depth.

Essentially, a Promise is an object that represents an intermediate state of an operation -- in effect, a *promise* that a result of some kind will be returned at some point in the future. There is no guarantee of exactly when the operation will complete and the result will be returned, but there *is* a guarantee that when the result is available, or the promise fails, the code you provide will be executed in order to do something else with a successful result, or to gracefully handle a failure case.

Generally, you are les interested in the amount of time an async operation will take to return its result (unless, of course, it takes *far* too long!), and more interested in being able to respond to it being returned, whenever that is. And, of course, it's nice that it doesn't block the rest of the code execution.

One of the most common engagements you'll have with promises is with web APIs that return a promise. Let's consider a hypothetical video chat application. The application has a window with a list of the user's friends, and clicking on a button next to a user starts a video call to that user.

That button's handler calls [`getUserMedia()`](https://developer.mozilla.org/en-US/docs/Web/API/MediaDevices/getUserMedia) in order to get access to the user's camera and microphone. Since `getUserMedia()` has to ensure that the user has permission to use those devices *and* ask the user which microphone to use and which camera to use (or whether to be a voice-only call, among other possible options), it can block until not only all of those decisions are made, but also the camera and microphone have been engaged. Also, the user may not respond immediately to these permission requests. This can potentially take a long time.

Since the call to `getUserMedia()` is made from the browser's main thread, the entire browser is blocked until `getUserMedia()` returns! Obviously, that's not an acceptable option; without promises, everything in the browser becomes unusable until the user decides what to do about the camera and microphone. So instead of waiting for the user, getting the chosen devices enabled, and directly returning the [`MediaStream`](https://developer.mozilla.org/en-US/docs/Web/API/MediaStream) for the stream created from the selected sources, `getUserMedia()` returns a [`promise`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) which is resolved with the [`MediaStream`](https://developer.mozilla.org/en-US/docs/Web/API/MediaStream) once it's available.

The code that the video chat application would use might look something like this:
```
function handleCallButton(evt) {
    setStatusMessage("Calling...");
    navigator.mediaDevices.getUserMedia({video: true, audio: true})
        .then(chatStream => {
            selfViewElem.srcObject = chatStream;
            chatStream.getTracks().forEach(track => myPeerConnection.addTrack(track, chatStream));
            setStatusMessage("Connected");
        }).catch(err => {
            setStatusMessage("Failed to connect");
        });
}
```
This function starts by using a function called `setStatusMessage()` to update a status display with the message "Calling...", indicating that a call is being attempted. It then calls `getUserMedia()`, asking for a stream that has both video and audio tracks, then once that's been obtained, sets up a video element to show the stream coming from the camera as a "self view", then takes each of the stream's tracks and adds them to the [WebRTC]() [`RTCPeerConnection`]() representing a connection to another user. After that, the status display is updated to say "Connected".

If `getUserMedia()` fails, the `catch` block runs. This uses `setStatusMessage()` to update the status box to indicate that an error occurred.

The important thing here is that the `getUserMedia()` call returns almost immediately, even if the camera stream hasn't been obtained yet. Even if the `handleCallButton()` function has already returned to the code that called it, when `getUserMedia()` has finished working, it calls the handler you provide. As long as the app doesn't assume that streaming has begun, it can just keep on running.

<hr>

**Note**: You can learn more about this somewhat advanced topic, if you're interested, in the article [Signaling and video calling](). Code similar to this, but much more complete, is used in that example.

(I might add the information from the **Signaling and video calling** article in a subfolder when I start creating folders for the [Client-side web APIs](https://github.com/AndrewSRea/My_Learning_Port/tree/main/JavaScript/Client-side_Web_APIs#client-side-web-apis) JavaScript folder.)

<hr>

## The trouble with callbacks

To fully understand why promises are a good thing, it helps to think back to old-style callbacks and to appreciate why they are problematic.

Let's talk about ordering pizza as an analogy. There are certain steps that you have to take for your order to be successful, which doesn't really make sense to try to execute out of order, or in order but before each previous step has quite finished:

1. You choose what toppings you want. This can take a while if you are indecisive, and may fail if you just can't make up your mind, or decide to get a curry instead.
2. You then place your order. This can take a while to return a pizza and may fail if the restaurant does not have the required ingredients to cook it.
3. You then collect your pizza and eat. This might fail if, say, you forgot your wallet so can't pay for the pizza!

With old-style [callbacks](https://github.com/AndrewSRea/My_Learning_Port/tree/main/JavaScript/Asynchronous_JS/Intro_Async_JS#introducing-asynchronous-javascript), a pseudo-code representation of the above functionality might look something like this:
```
chooseToppings(function(toppings) {
    placeOrder(toppings, function(order) {
        collectOrder(order, function(pizza) {
            eatPizza(pizza);
        }, failureCallback);
    }, failureCallback);
}, failureCallback);
```
This is messy and hard to read (often referred to as "[callback hell](http://callbackhell.com/)"), requires the `failureCallback()` to be called multiple times (once for each nested function), with other issues besides.

### Improvements with promises

Promises make situations like the above much easier to write, parse, and run. If we represented the above pseudo-code using asynchronous promises instead, we'd end up with something like this:
```
chooseToppings()
.then(function(toppings) {
    return placeOrder(toppings);
})
.then(function(order) {
    return collectOrder(order);
})
.then(function(pizza) {
    eatPizza(pizza);
})
.catch(failureCallback);
```
This is much better -- it is easier to see what is going on, we only need a single `.catch()` block to handle all the errors, it doesn't block the main thread (so we can keep playing video games while we wait for the pizza to be ready to collect), and each operation is guaranteed to wiat for previous operations to complete before running. We're able to chain multiple asynchronous actions to occur one after another this way because each `.then()` block returns a new promise that resolves when the `.then()` block is done running. Clever, right?

Using arrow function, you can simplify the code even further:
```
chooseToppings()
.then(toppings =>
    placeOrder(toppings)
)
.then(order =>
    collectOrder(order)
)
.then(pizza =>
    eatPizza(pizza)
)
.catch(failureCallback);
```
Or even this:
```
chooseToppings()
.then(toppings => placeOrder(toppings))
.then(order => collectOrder(order))
.then(pizza => eatPizza(pizza))
.catch(failureCallback);
```
This works because with arrow functions `() => x` is valid shorthand for `() => { return x; }`.

You could even do this, since the functions just pass their arguments directly, so there isn't any need for that extra layer of functions:
```
chooseToppings().then(placeOrder).then(collectOrder).then(eatPizza).catch(failureCallback);
```
This is not quite as easy to read, however, and this syntax might not be usable if your blocks are more complex than what we've shown here.

<hr>

**Note**: You can make further improvements with `async`/`await` syntax, which we'll dig into in the next article.

<hr>

At their most basic, promises are similar to event listeners, but with a few differences:

* A promise can only succeed or fail once. It cannot succeed or fail twice and it cannot switch from success to failure or vice versa once the operation has completed.
* If a promise has succeeded or failed and you later add a success/failure callback, the correct callback will be called, even though the event took place earlier.

## Explaining basic promise syntax: A real example

Promises are important to understand because most modern Web APIs use them for functions that perform potentially lengthy tasks. To use modern web technologies, you'll need to use promises. Later on in the chapter, we'll look at how to write your own promise, but for now we'll look at some simple examples that you'll encounter in Web APIs.

In the first example, we'll use the [`fetch()`](https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/fetch) method to fetch an image from the web, the [`Response.blob()`](https://developer.mozilla.org/en-US/docs/Web/API/Response/blob) method to transform the fetch response's raw body contents into a [`Blob`](https://developer.mozilla.org/en-US/docs/Web/API/Blob) object, and then display that blob inside an [`<img>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img) element. This is very similar to the example we looked at in the [first article of the series](https://github.com/AndrewSRea/My_Learning_Port/tree/main/JavaScript/Asynchronous_JS/Intro_Async_JS#asynchronous-javascript), but we'll do it a bit differently as we get you building your own promise-based code.

<hr>

**Note**: The following example will not work if you just run it directly from the file (i.e. via a `file://` URL). You need to run it through a [local testing server](https://github.com/AndrewSRea/My_Learning_Port/tree/main/JavaScript/Asynchronous_JS/Intro_Async_JS/Setup_Local_Server#how-do-you-set-up-a-local-testing-server), or use an online solution such as [Glitch](https://glitch.com) or [GitHub pages](https://developer.mozilla.org/en-US/docs/Learn/Common_questions/Using_Github_pages).

<hr>

1. First of all, download our [simple HTML template](https://github.com/mdn/learning-area/blob/master/html/introduction-to-html/getting-started/index.html) and the [sample image file](https://github.com/mdn/learning-area/blob/master/javascript/asynchronous/promises/coffee.jpg) that we'll fetch.

2. Add a [`<script>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/script) element at the bottom of the HTML [`<body>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/body).

3. Inside your `<script>` element, add the following line:
```
let promise = fetch('coffee.jpg');
```
This calls the `fetch()` method, passing it the URL of the image to fetch from the network as a parameter. This can also take an options object as an optional second paramter, but we are just using the simplest version for now. We are storing the promise object returned by `fetch()` inside a variable called `promise`. As we said before, this object represents an intermediate state that is initially neither success nor failure -- the official term for a promise in this state is **pending**.

4. To respond to the successful completion of the operation whenever that occurs (in this case, when a [`Response`](https://developer.mozilla.org/en-US/docs/Web/API/Response) is returned), we invoke the [`.then()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/then) method of the promise object. The callback inside the `.then()` block runs only when the promise call completes successfully and returns the `Response` object -- in promise-speak, when it has been **fulfilled**. It is passed the returned `Response` object as a parameter.

<hr>

**Note**: The way that a `.then()` block works is similar to when you add an event listener to an object using `addEventListener()`. It doesn't run until an event occurs (when the promise fulfills). The most notable difference is that a `.then()` will only run once for each time it is used, whereas an event listener could be invoked multiple times.

<hr>

We immediately run the `blob()` method on this response to ensure that the response body is fully downloaded, and when it is available, transform it into a `Blob` object that we can do something with. The result of this is returned like so:
```
response => response.blob()
```
...which is shorthand for:
```
function(response) {
    return response.blob();
}
```
Unfortunately, we need to do slightly more than this. Fetch promises do not fall on 404 or 500 errors -- only on something catastrophic like a network failure. Instead, they succeed, but with the [`response.ok`](https://developer.mozilla.org/en-US/docs/Web/API/Response/ok) property set to `false`. To produce an error on a 404, for example, we need to check the value of `response.ok`, and if `false`, throw an error, only returning the blob if it is `true`. This can be done like so -- add the following lines below your first line of JavaScript:
```
let promise2 = promise.then(response => {
    if (!response.ok) {
        throw new Error(`HTTP error! Status: ${reponse.status}`);
    } else {
        return response.blob();
    }
});
```

5. Each call to `.then()` creates a new promise. This is very useful; because the `blob()` method also returns a promise, we can handle the `Blob` object it returns on fulfillment by invoking the `.then()` method of the second promise. Because we want to do something a bit more complex to the blob than just run a single method on it and return the result, we'll need to wrap the function body in curly braces this time (otherwise, it'll throw an error).

Add the following to the end of your code:
```
let promise3 = promise2.then(myBlob => {

})
```

6. Now let's fill in the body of the `.then()` callback. Add the following lines inside the curly braces:
```
let objectURL = URL.createObjectURL(myBlob);
let image = document.createElement('img');
image.src = objectURL;
document.body.appendChild(image);
```
Here we are returning the [`URL.createObjectURL()`](https://developer.mozilla.org/en-US/docs/Web/API/URL/createObjectURL) method, passing it as a parameter the `Blob` returned when the second promise fulfills. This will return a URL pointing to the object. Then we create an [`<img>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img) element, set its `src` attribute to equal the object URL and append it to the DOM, so the image will display on the page!

If you save the HTML file you've just created and load it in your browser, you'll see that the image is displayed in the page as expected. Good work!

<hr>

**Note**: You will probably notice that these examples are somewhat contrived. You could just do away with the whole `fetch()` and `blob()` chain, and just create an `<img>` element and set its `src` attribute value to the URL of the image file, `coffee.jpg`. We did, however, pick this example because it demonstrates promises in a nice simple fashion, rather than for its real-world appropriateness.

<hr>

### Responding to failure

Something is missing -- currently, there is nothing to explicitly handle errors if one of the promises fails (**rejects**, in promise-speak). We can add error handling by running the [`.catch()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/catch) method off the previous promise. Add this now:
```
let errorCase = promise.catch(e => {
    console.log('There has been a problem with your fetch operation: ' + e.message);
});
```
To see this in action, try misspelling the URL to the image and reloading the page. The error will be reported in the console of your browser's developer tools.

This doesn't do much more than it would if you just didn't bother including the `.catch()` block at all, but think about it -- this allows us to control error handling exactly how we want. In a real app, your `.catch()` block could retry fetching the image, or show a default image, or prompt the user to provide a different image URL, or whatever.

<hr>

**Note**: You can see the live version of this finished code running [here](), and see the finished source code [here](https://github.com/AndrewSRea/My_Learning_Port/blob/main/JavaScript/Asynchronous_JS/Async_Prog_with_Promises/index.html).

<hr>

### Chaining the blocks together

This is a very longhand way of writing this out; we've deliberately done this to help you understand what is going on clearly. As shown earlier on in this article, you can chain together `.then()` blocks (and also `.catch()` blocks). The above code could also be written like this (see also [simple-fetch-chained.html](https://github.com/mdn/learning-area/blob/master/javascript/asynchronous/promises/simple-fetch-chained.html) on Mozilla's GitHub):
```
fetch('coffee.jpg')
.then(response => {
    if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
    } else {
        return response.blob();
    }
})
.then(myBlob => {
    let objectURL = URL.createObjectURL(myBlob);
    let image = document.createElement('img');
    image.src = objectURL;
    document.body.appendChild(image);
})
.catch(e => {
    console.log('There has been a problem with your fetch operation: ' + e.message);
});
```
Bear in mind that the value returned by a fulfilled promise becomes the paramter passed to the next `.then()` block's callback function.

<hr>

**Note**: `.then()`/`.catch()` blocks in promises are basically the async equivalent of a [`try...catch`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/try...catch) block in sync code. Bear in mind that synchronous `try...catch` won't work in async code.

<hr>

## Promise terminology recap

There was a lot to cover in the above section, so let's go back over it quickly to give you a **[short guide that you can bookmark]()** and use to refresh your memory in the future. You should also go over the above section again a few more times to make sure these concepts stick.

1. When a promise is created, it is neither in a success or failure state. It is said to be **pending**.
2. When a promise returns, it is said to be **resolved**.
    1. A successfully resolved promise is said to be **fulfilled**. It returns a value, which can be accessed by chaining a `.then()` block onto the end of the promise chain. The callback function inside the `.then()` block will contain the promise's return value.
    2. An unsuccessful resolved promise is said to be **rejected**. It returns a **reason**, an error message stating why the promise was rejected. This reason can be accessed by chaining a `.catch()` block onto the end of the promise chain.
