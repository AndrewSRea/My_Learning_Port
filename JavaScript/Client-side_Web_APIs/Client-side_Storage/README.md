# Client-side storage

Modern web browsers support a number of ways for web sites to store data on the user's computer -- with the user's permission -- then retrieve it when necessary. This lets you persist data for long-term storage, save sites or documents for offline use, retain user-specific settings for your site, and more. This article explains the very basics of how these work.

## Client-side storage?

Elsewhere in the MDN learning area, we talked about the difference between [static sites]() and [dynamic sites](). <!-- future pages in your GitHub repo (Server-Side_Website_Programming / First_Steps) --> Most major modern web sites are dynamic -- they store data on the server using some kind of database (server-side storage), then run [server-side](https://github.com/AndrewSRea/My_Learning_Port/tree/main/JavaScript/Server-Side_Website_Programming#server-side-website-programming) code to retrieve needed data, insert it into static page templates, and serve the resulting HTML to the client to be displayed by the user's browser.

Client-side storage works on similar principles, but has different uses. It consists of JavaScript APIs that allow you to store data on the client (i.e. on the user's machine) and then retrieve it when needed. This has many distinct uses, such as:

* Personalizing site preferences (e.g. showing a user's choice of custom widgets, color scheme, or font size).
* Persisting previous site activity (e.g. storing the contents of a shopping cart from a previous session, remembering if a user was previously logged in).
* Saving data and assets locally so a site will be quicker (and potentially less expensive) to download, or be usable without a network connection.
* Saving web application generated documents locally for use offline.

Often client-side and server-side storage are used together. For example, you could download a batch of music files (perhaps used by a web game or music player application), store them inside a client-side database, and play them as needed. The user would only have to download the music files once -- on subsequent visits, they would be retrieved from the database instead.

<hr>

**Note**: There are limits to the amount of data you can store using client-side storage APIs (possibly both per individual API and cumulatively); the exact limit varies depending on the browser and possibly based on user settings. See [Browser storage limits and eviction criteria](https://developer.mozilla.org/en-US/docs/Web/API/IndexedDB_API/Browser_storage_limits_and_eviction_criteria) for more information.

<hr>

### Old school: Cookies

The concept of client-side storage has been around for a long time. Since the early days of the web, sites have used [cookies](https://developer.mozilla.org/en-US/docs/Web/HTTP/Cookies) to store information to personalize user experience on websites. They're the earliest form of client-side storage commonly used on the web.

These days, there are easier mechanisms available for storing client-side data., therefore we won't be teaching you how to use cookies in this article. However, this does not mean cookies are completely useless on the modern-day web -- they are still used commonly to store data related to user personalization and state, e.g. session IDs and access tokens. For more information on cookies, see our [Using HTTP cookies](https://developer.mozilla.org/en-US/docs/Web/HTTP/Cookies) article.

### New school: Web Storage and IndexedDB

The "easier" features we mentioned above are as follows:

* The [Web Storage API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API) provides a very simple syntax for storing and retrieving smaller data items consisting of a name and a corresponding value. This is useful when you just need to store some simple data, like the user's name, whether they are logged in, what color to use for the background of the screen, etc.
* The [IndexedDB API](https://developer.mozilla.org/en-US/docs/Web/API/IndexedDB_API) provides the browser with a complete database system for storing complex data. This can be used for things from complete sets of customer records to even complex data types like audio or video files.

You'll learn more about these APIs below.

### The future: Cache API

Some modern browsers support the new [`Cache`](https://developer.mozilla.org/en-US/docs/Web/API/Cache) API. This API is designed for storing HTTP responses to specific requests, and is very useful for doing things like storing website assets offline so the site can subsequently be used without a network connection. Cache is usually used in combination with the [Service Worker API](https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API), although it doesn't have to be.

Use of Cache and Service Workers is an advanced topic, and we won't be covering it in great detail in this article, although we will show a simple example in the [Offline asset storage](https://github.com/AndrewSRea/My_Learning_Port/tree/main/JavaScript/Client-side_Web_APIs/Client-side_Storage#offline-asset-storage) section below.

## Storing simple data -- web storage

The [Web Storage API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API) is very easy to use -- you store simple name/value pairs of data (limited to strings, numbers, etc.) and retrieve these values when needed.

### Basic syntax

Let's show you how:

1. First, go to our [web storage blank template](https://mdn.github.io/learning-area/javascript/apis/client-side-storage/web-storage/index.html) on GitHub (open this in a new tab).

2. Open the JavaScript console of your browser's developer tools.

3. All of your web storage data is contained within two object-like structures inside the browser: [`sessionStorage`](https://developer.mozilla.org/en-US/docs/Web/API/Window/sessionStorage) and [`localStorage`](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage). The first one persists data for as long as the browser is open (the data is lost when the browser is closed) and the second one persists data even after the browser is closed and then opened again. We'll use the second one in this article as it is generally more useful.

The [`Storage.setItem()`](https://developer.mozilla.org/en-US/docs/Web/API/Storage/setItem) method allows you to save a data item in storage -- it takes two parameters: the name of the item, and its value. Try typing this into your JavaScript console (change the value to your own name, if you wish):
```
localStorage.setItem('name','Chris');
```

4. The [`Storage.getItem()`](https://developer.mozilla.org/en-US/docs/Web/API/Storage/getItem) method takes one parameter -- the name of a data item you want to retrieve -- and returns the item's value. Now type these lines into your JavaScript console:
```
let myName = localStorage.getItem('name');
myName;
```
Upon typing in the second line, you should see that the `myName` variable now contains the value of the `name` data item.

5. The [`Storage.removeItem()`](https://developer.mozilla.org/en-US/docs/Web/API/Storage/removeItem) method takes one parameter -- the name of a data item you want to remove -- and removes that item out of web storage. Type the following lines into your JavaScript console:
```
localStorage.removeItem('name');
let myName = localStorage.getItem('name');
myName;
```
The third line should now return `null` -- the `name` item no longer exists in the web storage.

### The data persists!

One key feature of web storage is that the data persists between page loads (and even when the browser is shut down, in the case of `localStorage`). Let's look at this in action.

1. Open our web storage blank template again, but this time in a different browser to the one you've got this tutorial open in! This will make it easier to deal with.

2. Type these lines into the browser's JavaScript console:
```
localStorage.setItem('name','Chris');
let myName = localStorage.getItem('name');
myName;
```
You should see the name item returned.

3. Now close down the browser and open it up again.

4. Enter the following lines again:
```
let myName = localStorage.getItem('name');
myName;
```
You should see that the value is still available, even though the browser has been closed and then opened again.

### Separate storage for each domain

There is a separate data store for each domain (each separate web address loaded in the browser). You will see that if you load two websites (say google.com and amazon.com) and try storing an item on one website, it won't be available to the other website.

This makes sense -- you can imagine the security issues that would arise if websites could see each other's data!

### A more involved example

Let's apply this new-found knowledge by writing a simple working example to give you an idea of how web storage can be used. Our example will allow you to enter a name, after which the page will update to give you a personalized greeting. This state will also persist across page/browser reloads, because the name is stored in web storage.

You can find the example HTML at [personal-greeting.html](https://github.com/mdn/learning-area/blob/master/javascript/apis/client-side-storage/web-storage/personal-greeting.html) -- this contains a simple website with a header content, and footer, and a form for entering your name.

![Image of the webpage for the personal-greeting.html program](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Client-side_web_APIs/Client-side_storage/web-storage-demo.png)

Let's build up the example, so you can understand how it works.

1. First, make a local copy of our [personal-greeting.html](https://github.com/mdn/learning-area/blob/master/javascript/apis/client-side-storage/web-storage/personal-greeting.html) file in a new directory on your computer.

2. Next, note how our HTML references a JavaScript file called `index.js`, with a line like `<script src="index.js" defer></script>`. We need to create this and write our JavaScript code into it. Create an `index.js` file in the same directory as your HTML file.

3. We'll start off by creating references to all the HTML features we need to manipulate in this example -- we'll create them all as constants, as these references do not need to change in the lifecycle of the app. Add the following lines to your JavaScript file:
```
// create needed constants
const rememberDiv = document.querySelector('.remember');
const forgetDiv = document.querySelector('.forget');
const form = document.querySelector('form');
const nameInput = document.querySelector('#entername');
const submitBtn = document.querySelector('#submitname');
const forgetBtn = document.querySelector('#forgetname');

const h1 = document.querySelector('h1');
const personalGreeting = document.querySelector('.personal-greeting');
```

4. Next up, we need to include a small event listener to stop the form from actually submitting itself when the submit button is pressed, as this is not the behavior we want. Add this snippet below your previous code:
```
// Stop the form from submitting when a button is pressed
form.addEventListener('submit', function(e) {
    e.preventDefault();
});
```

5. Now we need to add an event listener, the handler function of which will run when the "Say hello" button is clicked. The comments explain in detail what each bit does, but in essence here we are taking the name the user has entered into the text input box and saving it in web storage using `setItem()`, then running a function called `nameDisplayCheck()` that will handle updating the actual website text. Add this to the bottom of your code:
```
// run function when the 'Say hello' button is clicked
submitBtn.addEventListener('click', function() {
    // store the entered name in web storage
    localStorage.setItem('name', nameInput.value);
    // run nameDisplayCheck() to sort out displaying the
    // personalized greetings and updating the form display
    nameDisplayCheck();
});
```

6. At this point, we also need an event handler to run a function when the "Forget" button is clicked -- this is only displayed after the "Say hello" button has been clicked (the two form states toggle back and forth). In this function, we remove the `name` item from web storage using `removeItem()`, then again run `nameDisplayCheck()` to update the display. Add this to the bottom:
```
// run function when the 'Forget' button is clicked
forgetBtn.addEventListener('click', function() {
    // Remove the stored name from web storage
    localStorage.removeItem('name');
    // run nameDisplayCheck() to sort out displaying the
    // generic greeting again and updating the form display
    nameDisplayCheck();
});
```

7. It is now time to define the `nameDisplayCheck()` function itself. Here we check whether the name item has been stored in web storage by using `localStorage.getItem('name')` as a conditional test. If it has been stored, this call will evaluate to `true`; if not, it will be `false`. If it is `true`, we display a personalized greeting, display the "forget" part of the form, and hide the "Say hello" part of the form. If it is `false`, we display a generic greeting and do the opposite. Again, put the following code at the bottom:
```
// define the nameDisplayCheck() function
function nameDisplayCheck() {
    // check whether the 'name' data item is stored in web Storage
    if(localStorage.getItem('name')) {
        // If it is, display personalized greeting
        let name = localStorage.getItem('name');
        h1.textContent = 'Welcome, ' + name;
        personalGreeting.textContent = 'Welcome to our website, ' + name + '! We hope you have fun while you are here.';
        // hide the 'remember' part of the form and show the 'forget' part
        forgetDiv.style.display = 'block';
        rememberDiv.style.display ='none';
    } else {
        // if not, display generic greeting
        h1.textContent ='Welcome to our website ';
        personalGreeting.textContent = 'Welcome to our website. We hope you have fun while you are here.';
        // hide the 'forget' part of the form and show the 'remember' part
        forgetDiv.style.display = 'none';
        rememberDiv.style.display = 'block';
    }
}
```

8. Last but not least, we need to run the `nameDisplayCheck()` function every time the page is loaded. If we don't do this, then the personalized greeting will not persist across page reloads. Add the following to the bottom of your code:
```
document.body.onload = nameDisplayCheck;
```

Your example is finished -- well done! All that remains now is to save your code and test your HTML page in a browser. You can see the finished version running live [here]() (and see the source code [here]()).



## Offline asset storage