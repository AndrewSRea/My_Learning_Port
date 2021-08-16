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

Your example is finished -- well done! All that remains now is to save your code and test your HTML page in a browser. You can see the finished version running live [here](https://andrewsrea.github.io/My_Learning_Port/JavaScript/Client-side_Web_APIs/Client-side_Storage/personal-greeting.html) (and see the source code [here](https://github.com/AndrewSRea/My_Learning_Port/blob/main/JavaScript/Client-side_Web_APIs/Client-side_Storage/index.js)).

<hr>

**Note**: There is another, slightly more complex example to explore at [Using the Web Storage API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API/Using_the_Web_Storage_API). 

<hr>

**Note**: In the line `<script src="index.js" defer></script>` of the source for our finished version, the `defer` attribute specifies that the contents of the [`<script>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/script) element will not execute until the page has finished loading.

<hr>

## Storing complex data -- IndexedDB

The [IndexedDB API](https://developer.mozilla.org/en-US/docs/Web/API/IndexedDB_API) (sometimes abbreviated IDB) is a complete database system available in the browser in which you can store complex related data, the types of which aren't limited to simple values like strings or numbers. You can store videos, images, and pretty much anything else in an IndexedDB instance.

However, this does come at a cost: IndexedDB is much more complex to use than the Web Storage API. In this section, we'll really only scratch the surface of what it is capable of, but we will give you enough to get started.

### Working through a note storage example

Here we'll run through an example that allows you to store notes in your browser and view and delete them whenever you like, getting you to build it up for yourself and explaining the most fundamental parts of IDB as we go along.

The app looks something like this:

![Image of an app using IndexedDB](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Client-side_web_APIs/Client-side_storage/idb-demo.png)

Each note has a title and some body text, each individually editable. The JavaScript code we'll go through below has detailed comments to help you understand what's going on.

### Getting started

1. First of all, make local copies of our [`index.html`](https://github.com/mdn/learning-area/blob/master/javascript/apis/client-side-storage/indexeddb/notes/index.html), [`style.css`](https://github.com/mdn/learning-area/blob/master/javascript/apis/client-side-storage/indexeddb/notes/style.css), and [`index-start.js`](https://github.com/mdn/learning-area/blob/master/javascript/apis/client-side-storage/indexeddb/notes/index-start.js) files into a new directory on your local machine.

2. Have a look at the files. You'll see that the HTML is pretty simple: a web site with a header and footer, as well as a main content area that contains a place to display notes, and a form for entering new notes into the database. The CSS provides some simple styling to make it clearer what is going on. The JavaScript file contains five declared constants containing references to the [`<ul>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/ul) element the notes will be displayed in, the title and body [`<input>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input) elements, the [`<form>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/form) itself, and the [`<button>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button).

3. Rename your JavaScript file to `index.js`. You are now ready to start adding code to it.

### Database initial set up

Now let's look at what we have to do in the first place, to actually set up a database.

1. Below the constant declarations, add the following lines:
```
// Create an instance of a db object for us to store the open database in
let db;
```
Here we are declaring a variable called `db` -- this will later be used to store an object representing our database. We will use this in a few places, so we've declared it globally here to make things easier.

2. Next, add the following to the bottom of your code:
```
window.onload = function() {

};
```
We will write all of our subsequent code inside this `window.onload` event handler function, called when the window's [`load`](https://developer.mozilla.org/en-US/docs/Web/API/Window/load_event) event fires, to make sure we don't try to use IndexedDB functionality before the app has completely finished loading (it could fail if we don't).

3. Inside the `window.onload` handler, add the following:
```
// Open our database; it is created if it doesn't already exist
// (see onupgradeneeded below)
let request = window.indexedDB.open('notes_db', 1);
```
This line creates a `request` to open version `1` of a databse called `notes_db`. If this doesn't already exist, it will be created for you by subsequent code. You will see this request pattern used very often throughout IndexedDB. Database operations take time. You don't want to hang the browser while you wait for the results, so database operations are [asynchronous](https://developer.mozilla.org/en-US/docs/Glossary/Asynchronous), meaning that instead of happening immediately, they will happen at some point in the future, and you get notified when they're done.

To handle this in IndexedDB, you create a request object (which can be called anything you like -- we called it `request` so it is obvious what it is for). You then use event handlers to run code when the request completes, fails, etc., which you'll see in use below.

<hr>

**Note**: The version number is important. If you want to upgrade your database (for example, by changing the table structure), you have to run your code again with an increased version number, different schema specified inside the `onupgradeneeded` handler (see below), etc. We won't cover upgrading databases in this simple tutorial.

<hr>

4. Now add the following event handlers just below your previous addition -- again inside the `window.onload` handler:
```
// onerror handler signifies that the database didn't open successfully
request.onerror = function() {
    console.log('Database failed to open');
};

// onsuccess handler signifies that the database opened successfully
request.onsuccess = function() {
    console.log('Database opened successfully');

    // Store the opened database object in the db variable. This is used a lot below
    db = request.result;

    // Run the displayData() function to display the notes already in the IDB
    displayData();
};
```
The [`request.onerror`](https://developer.mozilla.org/en-US/docs/Web/API/IDBRequest/onerror) handler will run if the system comes back saying that the request failed. This allows you to respond to this problem. In our simple example, we just print a message to the JavaScript console.

The [`request.onsuccess`](https://developer.mozilla.org/en-US/docs/Web/API/IDBRequest/onsuccess) handler on the other hand will run if the request returns successfully, meaning the database was successfully opened. If this is the case, an object representing the opened database becomes available in the [`request.result`](https://developer.mozilla.org/en-US/docs/Web/API/IDBRequest/result) property, allowong us to manipulate the database. We store this in the `db` variable we created earlier for later use. We also run a custom function called `displayData()`, which displays the data in the database inside the [`<ul>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/ul). We run it now so that the notes already in the database are displayed as soon as the page loads. You'll see this defined later on.

5. Finally for this section, we'll add probably the most important event handler for setting up the database: [`request.onupgradeneeded`](https://developer.mozilla.org/en-US/docs/Web/API/IDBOpenDBRequest/onupgradeneeded). This handler runs if the database has not already been set up, or if the database is opened with a bigger version number than the existing stored database (when performing an upgrade). Add the following code, below your previous handler:
```
// Setup the database tables if this has not already been done
request.onupgradeneeded = function(e) {
    // Grab a reference to the opened database
    let db = e.traget.result;

    // Create an objectStore to store our notes in (basically like a single table)
    // including an auto-incrementing key
    let objectStore = db.createObjectStore('notes_os', { keyPath: 'id', autoIncrement:true });

    // Define what data items the objectStore will contain
    objectStore.createIndex('title', 'title', { unique: false });
    objectStore.createIndex('body', 'body', { unique: false });

    console.log('Database setup complete');
};
```
This is where we define the schema (structure) of our database; that is, the set of columns (or fields) it contains. Here we first grab a reference to the existing database from the `result` property of the event's target (`e.target.result`), which is the `request` object. This is equivalent to the line `db = request.result;` inside the `onsuccess` handler, but we need to do this separately here because the `onupgradeneeded` handler (if needed) will run before the `onsuccess` handler, meaning that the `db` value wouldn't be available if we didn't do this.

We then use [`IDBDatabase.createObjectStore()`](https://developer.mozilla.org/en-US/docs/Web/API/IDBDatabase/createObjectStore) to create a new object store inside our opened database called `notes_os`. This is equivalent to a single table in a conventional database system. We've given it the name notes, and also specified an `autoIncrement` key field called `id` -- in each new record, this will automatically be given an incremented value -- the developer doesn't need to set this explicitly. Being the key, the `id` field will be used to uniquely identify records, such as when deleting or displaying a record.

We also create two other indexes (fields) using the [`IDBObjectStore.createIndex()`](https://developer.mozilla.org/en-US/docs/Web/API/IDBObjectStore/createIndex) method: `title` (which will contain a title for each note), and `body` (which will contain the body text of the note).

So with this simple database schema set up, when we start adding records to the database, each one will be represented as an object along these lines:
```
{
    title: "Buy milk",
    body: "Need both cows wilk and soy.",
    id: 8
}
```

### Adding data to the database

Now let's look at how we can add records to the database. This will be done using the form on our page.

Below your previous event handler (but still inside the `window.onload` handler), add the following line, which sets up an `onsubmit` handler that runs a function called `addData()` when the form is submitted (when the submit [`<button>`]() is pressed leading to a successful form submission):
```
// Define the addData() function
function addData(e) {
    // prevent default - we don't want the form to submit in the conventional way
    e.preventDefault();

    // grab the values entered into the form fields and store them in an object ready for being inserted into the DB
    let newItem = { title: titleInput.nodeValue, body: bodyInput.value };

    // open a read/write db transaction, ready for adding the data
    let transaction = db.transaction(['notes_os'], 'readwrite');

    // call an object store that's already been added to the database
    let objectStore = transaction.objectStore('notes_os');

    // Make a request to add our newItem object to the object store
    let request = objectStore.addData(newItem);
    request.onsuccess = function() {
        // Clear the form, ready for adding the next entry
        titleInput.value = '';
        bodyInput.value = '';
    };

    // Report on the success of the transaction completing, when everything is done
    transaction.oncomplete = function() {
        console.log('Transaction completed: database modification finished.');

        // Update the display of data to show the newly added item, by running displayData() again.
        displayData();
    };

    transaction.onerror = function() {
        console.log('Transaction not opened due to error');
    };
}
```
This is quite complex; breaking it down, we:

* Run [`Event.preventDefault()`](https://developer.mozilla.org/en-US/docs/Web/API/Event/preventDefault) on the event object to stop the form actually submitting in the conventional manner (this would cause a page refresh and spoil the experience).
* Create an object representing a record to enter into the database, populating it with values from the form inputs. Note that we don't have to explicitly include an `id` value -- as we explained eariler, this is auto-populated.
* Open a `readwrite` transaction against the `notes_os` object store using the [`IDBDatabase.transaction()`](https://developer.mozilla.org/en-US/docs/Web/API/IDBDatabase/transaction) method. This transaction object allows us to access the object store so we can do something to it, e.g. add a new record.
* Access the object store using the [`IDBTransaction.objectStore()`](https://developer.mozilla.org/en-US/docs/Web/API/IDBTransaction/objectStore) method, saving the result in the `objectStore` variable.
* Add the new record to the database using [`IDBObjectStore.add()`](https://developer.mozilla.org/en-US/docs/Web/API/IDBObjectStore/add). This creates a request object, in the same fashion as we've seen before.
* Add a bunch of event handlers to the `request` and the `transaction` to run code at critical points in the lifecycle. Once the request has succeeded, we clear the form inputs ready for entering the next note. Once the transaction has completed, we run the `displayData()` function again to update the display of notes on the page.

### Displaying the data

We've referenced `displayData()` twice in our code already, so we'd probably better define it. Add this to your code, below the previous function definition:
```
// Define the displayData() function
function displayData() {
    // Here we empty the contents of the list element each time the display is updated
    // If you didn't do this, you'd get duplicates listed each time a new note is added
    while (list.firstChild) {
        list.removeChild(list.firstChild);
    }

    // Open our object store and then get a cursor - which iterates through all the 
    // different data items in the store
    let objectStore = db.transaction('notes_os').objectStore('notes_os');
    objectStore.openCursor().onsuccess = function(e) {
        // Get a reference to the cursor
        let cursor = e.target.result;

        // If there is still another data item to iterate through, keep running this code
        if(cursor) {
            // Create a list item, h3, and p to put each data item inside when displaying it
            // structure the HTML fragment, and append it inside the list
            const listItem = document.createElement('li');
            const h3 = document.createElement('h3');
            const para = document.createElement('p');

            listItem.appendChild(h3);
            listItem.appendChild(para);
            list.appendChild(listItem);

            // Put the data from the cursor inside the h3 and para
            h3.textContent = cursor.value.title;
            para.textContent = cursor.value.body;

            // Store the ID of the data item inside an attribute on the listItem, so we know
            // which item it corresponds to. This will be useful later when we want to delete items
            listItem.setAttribute('data-note-id', cursor.value.id);

            // Create a button and place it inside each listItem
            const deleteBtn = document.createElement('button');
            listItem.appendChild(deleteBtn);
            deleteBtn.textContent = 'Delete';

            // Set an event handler so that when the button is clicked, the deleteItem()
            // function is run
            deleteBtn.onclick = deleteItem;

            // Iterate to the next item in the cursor
            cursor.continue();
        } else {
            // Again, if list item is empty, display a 'No notes stored' message
            if(!list.firstChild) {
                const listItem = document.createElement('li');
                listItem.textContent = 'No notes stored.';
                list.appendChild(listItem);
            }
            // if there are no more cursor items to iterate through, say so
            console.log('Notes all displayed');
        }
    };
}
```
Again, let's break this down:

* First, we empty out the [`<ul>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/ul) element's content, before then filling it with the updated content. If you didn't do this, you'd end up with a huge list of duplicated content being added to with each update.
* Next, we get a reference to the `notes_os` object store using [`IDBDatabase.transaction()`](https://developer.mozilla.org/en-US/docs/Web/API/IDBDatabase/transaction) and [`IDBDatabase.objectStore()`](https://developer.mozilla.org/en-US/docs/Web/API/IDBTransaction/objectStore) like we did in `addData()`, except here we are chaining them together in one line.
* The next step is to use [`IDBObjectStore.openCursor()`](https://developer.mozilla.org/en-US/docs/Web/API/IDBObjectStore/openCursor) method to open a request for a cursor -- this is a construct that can be used to iterate over the records in an object store. We chain an `onsuccess` handler on to the end of this line to make the code more concise -- when the cursor is successfully returned, the handler is run.
* We get a reference to the cursor itself (an [`IDBCursor`](https://developer.mozilla.org/en-US/docs/Web/API/IDBCursor) object) using `let cursor = e.target.result`.
* Next, we check to see if the cursor contains a record from the datastore (`if(cursor) { ... }`) -- if so, we create a DOM fragment, populate it with the data from the record, and insert it into the page (inside the `<ul>` element). We also include a delete button that, when clicked, will delete that note by running the `deleteItem()` function, which we will look at in the next section.
* At the end of the `if` block, we use the [`IDBCursor.continue()`](https://developer.mozilla.org/en-US/docs/Web/API/IDBCursor/continue) method to advance the cursor to the next record in the datastore, and run the content of the `if` block again. If there is another record to iterate to, this causes it to be inserted into the page, and then `continue()` is run again, and so on.
* When there are no more records to iterate over, `cursor` will return `undefined`, and therefore the `else` block will run instead of the `if` block. This block checks whether any notes were inserted into the `<ul>` -- if not, it inserts a message to say no note was stored.

### Deleting a note

As stated above, when a note's delete button is pressed, the note is deleted. This is achieved by the `deleteItem()` function, which looks like so:
```
// Define the deleteItem() function
function deleteItem(e) {
    // Retrieve the name of the task we want to delete. We need
    // to convert it to a number before trying to use it with IDB; IDB key
    // values are type-sensitive.
    let noteId = Number(e.target.parentNode.getAttribute('data-note-id'));

    // Open a database transaction and delete the task, finding it using the id we retrieved above
    let transaction = db.transaction(['notes_os'], 'readwrite');
    let objectStore = transaction.objectStore('notes_os');
    let request = objectStore.deleteBtn(noteId);

    // Report that the data item has been deleted
    transaction.oncomplete = function() {
        // Delete the parent of the button
        // which is the list item, so it is no longer displayed
        e.target.parentNode.parentNode.removeChild(e.target.parentNode);
        console.log('Note' + noteId + ' deleted.');

        // Again, if list item is empty, display a 'No notes stored' message
        if(!list.firstChild) {
            let listItem = document.createElement('li');
            listItem.textContent = 'No notes stored.';
            list.appendChild(listItem);
        }
    };
}
```

* The first part of this could use some explaining -- we retrieve the ID of the record to be deleted using `Number(e.target.parentNode.getAttribute('data-note-id'))` -- recall that the ID of the record was saved in a `data-note-id` attribute on the `<li>` when it was first displayed. We do, however, need to pass the attribute through the global built-in [`Number()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) object, as it is of datatype "string", and therefore wouldn't be recognized by the database, which expects a number.
* We then get a reference to the object store using the same pattern we've seen previously, and use the [`IDBObjectStore.delete()`](https://developer.mozilla.org/en-US/docs/Web/API/IDBObjectStore/delete) method to delete the record from the database, passing it the ID.
* When the database transaction is complete, we delete the note's `<li>` from the DOM, and again do the check to see if the `<ul>` is now empty, inserting a note as appropriate.

So that's it! Your example should now work.



## Offline asset storage