# Fetching data from the server

Another very common task in modern websites and applications is retrieving individual data items from the server to update sections of a webpage without having to load an entire new page. This seemingly small detail has had a huge impact on the performance and behavior of sites, so in this article, we'll explain the concept and look at technologies that make it possible, such as XMLHttpsRequest and the Fetch API.

## What is the problem here?

Originally, page loading on the web was simple -- you'd send a request for a website to a server, and as long as nothing went wrong, the assets that made the web page would be downloaded and displayed on your computer.

The trouble with this model is that whenever you want to update any part of the page, for example, to display a new set of products or load a new page, you've got to load the entire page again. This is extremely wasteful and results in a poor user experience, especially as pages get larger and more complex.

## Enter Ajax

This led to the creation of technologies that allow web pages to request small chunks of data (such as [HTML](https://developer.mozilla.org/en-US/docs/Web/HTML), [XML](https://developer.mozilla.org/en-US/docs/Glossary/XML), [JSON](https://github.com/AndrewSRea/My_Learning_Port/tree/main/JavaScript/Intro_JS_Objects/Working_with_JSON#working-with-json), or plain text) and display them only when needed, helping to solve the problem described above.

This is achieved by using APIs like [`XMLHttpRequest`](https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest) or -- more recently -- the [Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API). These technologies allow web pages to directly handle making [HTTP](https://developer.mozilla.org/en-US/docs/Web/HTTP) requests for specific resources available on a server and formatting the resulting data as needed before it is displayed.

<hr>

**Note**: In the early days, this general technique was known as [Asynchronous](https://developer.mozilla.org/en-US/docs/Glossary/Asynchronous) JavaScript and XML ([Ajax](https://developer.mozilla.org/en-US/docs/Glossary/AJAX)), because it tended to use [`XMLHttpRequest`](https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest) to request XML data. This is normally not the case these days (you'd be more likely to use `XMLHttpRequest` or Fetch to request JSON), but the result is still the same, and the term "Ajax" is still often used to describe the technique.

<hr>

The Ajax model involves using a web API as a proxy to more intelligently request data rather than just having the browser reload the entire page. Let's think about the significance of this:

1. Go to one of your favorite information-rich sites, like Amazon, YouTube, CNN, etc., and load it.
2. Now search for something, like a new product. The main content will change, but most of the surrounding information, like the header, footer, navigation menu, etc., will stay the same.

This is a really good thing because:

* Page updates are a lot quicker and you don't have to wait for the page to refresh, meaning that the site feels faster and more responsive.
* Less data is downloaded on each update, meaning less wasted bandwidth. This may not be such a big issue on a desktop on a broadband connection, but it's a major issue on mobile devices and in developing countries that don't have ubiquitous fast Internet service.

To speed things up even further, some sites also store assets and data on the user's computer when they are first requested, meaning that on subsequent visits they use the local versions instead of downloading fresh copies everytime the page is first loaded. The content is only reloaded from the server when it has been updated.

## A basic Ajax request

Let's look at how such a request is handled, using both [`XMLHttpRequest`](https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest) and [Fetch](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API). For these examples, we'll request data out of a few different text files and use them to populate a content area.

This series of files will act as our fake database; in a real application, we'd be more likely to use a server-side language like PHP, Python, or Node to request our data from a database. Here, however, we want to keep it simple and concentrate on the client-side part of this.

### XMLHttpRequest

`XMLHttpRequest` (which is frequently abbreviated to XHR) is a fairly old technology now -- it was invented by Microsoft in the late 90's, and has been standardized across browsers for quite a long time.

1. To begin this example, make a local copy of [ajax-start.html](https://github.com/mdn/learning-area/blob/master/javascript/apis/fetching-data/ajax-start.html) and the four text files -- [verse1.txt](https://github.com/mdn/learning-area/blob/master/javascript/apis/fetching-data/verse1.txt), [verse2.txt](https://github.com/mdn/learning-area/blob/master/javascript/apis/fetching-data/verse2.txt), [verse3.txt](https://github.com/mdn/learning-area/blob/master/javascript/apis/fetching-data/verse3.txt), and [verse4.txt](https://github.com/mdn/learning-area/blob/master/javascript/apis/fetching-data/verse4.txt) -- in a new directory on your computer. In this example, we will load a different verse of the poem (which you may well recognize) via XHR when it's selected in the drop-down menu.

2. Just inside the [`<script>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/script) element, add the following code. This stores a reference to the [`<select>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/select) and [`<pre>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/pre) elements in constants and defines an [`onchange`](https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onchange) event handler function so that when the select's value is changed, its value is passed to an invoked function, `updateDisplay()`, as a parameter.
```
const verseChoose = document.querySelector('select');
const poemDisplay = document.querySelector('pre');

verseChoose.onchange = function() {
    const verse = verseChoose.value;
    updateDisplay(verse);
};
```

3. Let's define our `updateDisplay()` function. First of all, put the following beneath your previous code block -- this is the empty shell of the function. Note: Steps 4 - 9 will all be performed *within* this function.
```
function updateDisplay(verse) {

}
```

4. We'll start our function by constructing a relative URL pointing to the text file we want to load, as we'll need it later. The value of the [`<select>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/select) element at any time is the same as the text inside the selected [`<option>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/option) (unless you specify a different value in a value attribute) -- so, for example, "Verse 1". The corresponding verse text file is "verse1.txt", and is in the same directory as the HTML file, therefore just the file name will do.

However, web servers tend to be case sensitive, and the file name doesn't have a space in it. To convert "Verse 1" to "verse1.txt", we need to convert the "V" to lowercase, remove the space, and add ".txt" on the end. This can be done with [`replace()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace), [`toLowerCase()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toLowerCase), and simple [string concatenation](https://github.com/AndrewSRea/My_Learning_Port/tree/main/JavaScript/JS_First_Steps/Strings_in_JS#concatenating-strings). Add the following lines inside your `updateDisplay()` function:
```
verse = verse.replace(" ", "");
verse = verse.toLowerCase();
let url = verse + '.txt';
```

5. To begin creating an XHR request, you need to create a new request object using the [`XMLHttpRequest()`](https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/XMLHttpRequest) constructor. You can call this object anything you like, but we'll call it `request` to keep things simple. Add the following below your previous lines inside your `updateDisplay()` function:
```
let request = new XMLHttpRequest();
```

6. Next, you need to use the [`open()`](https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/open) method to specify what [HTTP request method](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods) to use to request the resource from the network, and what its URL is. We'll just use the [`GET`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods/GET) method here and set the URL as our `url` variable. Add this below your previous line:
```
request.open('GET', url);
```

7. Next, we'll set the type of response we are expecting -- which is defined by the request's [`responseType`](https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/responseType) property -- as `text`. This isn't strictly necessary here -- XHR returns text by default -- but it is a good idea to get into the habit of setting this in case you want to fetch other types of data in the future. Add this next:
```
request.responseType = 'text';
```

8. Fetching a resource from the network is an [asynchronous](https://developer.mozilla.org/en-US/docs/Glossary/Asynchronous) operation, meaning that you have to wait for that operation to complete (e.g., the resource is returned from the network) before you can do anything with that response, otherwise, an error will be thrown. XHR allows you to handle this using its [`onload`](https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onload) event handler -- this is run when the [`load`](https://developer.mozilla.org/en-US/docs/Web/API/Window/load_event) event fires (when the response had returned). When this has occurred, the response data will be available in the `response` property of the XHR request object.

Add the following below your last addition. You'll see that inside the `onload` event handler, we are setting the [`textContent`](https://developer.mozilla.org/en-US/docs/Web/API/Node/textContent) of the `poemDisplay` (the [`<pre>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/pre)) to the value of the [`request.response`](https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/response) property.
```
request.onload = function() {
    poemDisplay.textContent = request.response;
};
```

9. The above is all set up for the XHR request -- it won't actually run until we tell it to, which is done using the [`send()`](https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/send) method. Add the following below your previous addition to complete the function. This line should rest just above the closing curly brace of your `updateDisplay()` function.
```
request.send();
```

10. One problem with the example as it stands is that it won't show any of the poem when it first loads. To fix this, add the following two lines at the bottom of your code (just above the closing `</script>` tag) to load verse 1 by default, and make sure the [`<select>`]() element always shows the correct value:
```
updateDisplay('Verse 1');
verseChoose.value = 'Verse 1';
```