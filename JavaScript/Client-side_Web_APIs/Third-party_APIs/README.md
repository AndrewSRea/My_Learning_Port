# Third-party APIs

The APIs we've covered so far are built into the browser, but not all APIs are. Many large websites and services such as Google Maps, Twitter, Facebook, PayPal, etc., provide APIs allowing developers to make use of their data (e.g. displaying your Twitter stream on your blog) or services (e.g. using Facebook login to login in your users). This article looks at the difference between browser APIs and 3rd party APIs and shows some typical uses of the latter.

## What are third party APIs?

Third party APIs are APIs provided by third parties -- generally companies such as Facebook, Twitter, or Google -- to allow you to access their functionality via JavaScript and use it on your site. One of the most obvious examples is using mapping APIs to display custom maps on your pages.

Let's look at a [Simple Mapquest API example](https://mdn.github.io/learning-area/javascript/apis/third-party-apis/mapquest/), and use it to illustrate how third-party APIs differ from browser APIs. (See the source code [here](https://github.com/mdn/learning-area/blob/master/javascript/apis/third-party-apis/mapquest/index.html).)

<hr>

You might want to just [get all our code examples](https://developer.mozilla.org/en-US/docs/Learn#getting_our_code_examples) at once, in which case you can then just search the repo for the example files you need in each section.

<hr>

### They are found on third-party servers

Browser APIs are built into the browser -- you can access them from JavaScript immediately. For example, the Web Audio API we [saw in the Introductory article](https://github.com/AndrewSRea/My_Learning_Port/tree/main/JavaScript/Client-side_Web_APIs/Intro_Web_APIs#how-do-apis-work) is accessed using the native [`AudioContext`](https://developer.mozilla.org/en-US/docs/Web/API/AudioContext) object. For example:
```
const audioCtx = new AudioContext();
    ...
const audioElement = document.querySelector('audio');
    ...
const audioSource = audioCtx.createMediaElementSource(audioElement);
    // etc.
```
Third party APIs, on the other hand, are located on third party servers. To access them from JavaScript, you first need to connect to the API functionality and make it available on your page. This typically involves first linking to a JavaScript library available on the server via a [`<script>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/script) element, as seen in our Mapquest example:
```
<script src="https://api.mqcdn.com/sdk/mapquest-js/v1.3.2/mapquest.js"></script>
<link type="text/css" rel="stylesheet" href="https://api.mqcdn.com/sdk/mapquest-js/v1.3.2/mapquest.css"/>
```
You can then start using the objects available in that library. For example:
```
let map = L.mapquest.map('map', {
    center: [53.480759, -2.242631],
    layers: L.mapquest.tileLayer('map'),
    zoom: 12
});
```
Here we are creating a variable to store the map information in, then creating a new map using the `mapquest.map()` method, which takes as its parameters the ID of a [`<div>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/div) element you want to display the map in ('map'), and an options object containing the details of the particular map we want to display. In this case, we specify the coordinates of the center of the map, a map layer of type `map` to show (created using the `mapquest.tileLayer()` method), and the default zoom level.

This is all information the Mapquest API needs to plot a simple map. The server you are connecting to handles all the complicated stuff, like displaying the correct map tiles for the area being shown, etc.

<hr>

Some APIs handle access to their functionality slightly differently, requiring the developer to make an HTTP request to a specific URL pattern to retrieve data. These are called [RESTful APIs -- we'll show an example later on](https://github.com/AndrewSRea/My_Learning_Port/tree/main/JavaScript/Client-side_Web_APIs/Third-party_APIs#a-restful-api---nytimes).

<hr>

### They usually require API keys

Security for browser APIs tends to be handled by permission prompts, as [discussed in our first article](https://github.com/AndrewSRea/My_Learning_Port/tree/main/JavaScript/Client-side_Web_APIs/Intro_Web_APIs#they-have-additional-security-mechanisms-where-appropriate). The purpose of these is so that the user knows what is going on in the websites they visit and is less likely to fall victim to someone using an API in a malicious way.

Third party APIs have a slightly different permissions system -- they tend to use developer keys to allow developers access to the API functionality, which is more to protect the API vendor than the user.

You'll find a line similar to the following in the Mapquest API example:
```
L.mapquest.key = 'YOUR-API-KEY-HERE';
```
This line specifies an API or developer key to use in your application -- the developer of the application must apply to get a key, and then include it in their code to be allowed access to the API's functionality. In our example, we've just provided a placeholder.

<hr>

**Note**: When creating your own examples, you'll use your own API key in place of any placeholder.

<hr>

Other APIs may require that you include the key in a slightly different way, but the pattern is relatively similar for most of them. 

Requiring a key enables the API provider to hold users of the API accountable for their actions. When the developer has registered for a key, they are then known to the API provider, and action can be taken if they start to do anything malicious with the API (such as tracking people's location or trying to spam the API with loads of requests to stop it working, for example). The easiest action would be to just revoke their API privileges.

## Extending the Mapquest example

Let's add some functionality to the Mapquest example to show how to use some other features of the API.

1. To start this section, make yourself a copy of the [mapquest starter file](https://github.com/mdn/learning-area/blob/master/javascript/apis/third-party-apis/mapquest/starter-file.html), in a new directory. If you've already [cloned the examples repository](https://developer.mozilla.org/en-US/docs/Learn#getting_our_code_examples), you'll already have a copy of this file, which you can find in the *javascript/apis/third-party-apis/mapquest* directory.

2. Next, you need to go to the [Mapquest developer site](https://developer.mapquest.com/), create an account, and then create a developer key to use with your example. (At the time of writing, it was called a "consumer key" on the site, and the key creation process also asked for an optional "callback URL". You don't need to fill in a URL here: just leave it blank.)

3. Open up your starting file, and replace the API key placeholder with your key.

### Changing the type of map

There are a number of different types of map that can be shown with the Mapquest API. To do this, find the following line:
```
layers: L.mapquest.tileLayer('map');
```
Try changing `'map'` to `'hybrid'` to show a hybrid-style map. Try some other values, too. The [`tileLayer` reference page](https://developer.mapquest.com/documentation/mapquest-js/v1.3/l-mapquest-tile-layer/) shows the different available options, plus a lot more information.

### Adding different controls

The map has a number of different controls available; by default, it just shows a zoom control. You can expand the controls available using the `map.addControl()` method; add this to your code, inside the `window.onload` handler:
```
map.addControl(L.mapquest.control());
```
The [`mapquest.control()` method](https://developer.mapquest.com/documentation/mapquest-js/v1.3/l-mapquest-control/) just creates a simple full-featured control set, and it is placed in the top-right hand corner by default. You can adjust the position by specifying an options object as a parameter for the control containing a `position` property, the value of which is a string specifying a position for the control. Try this, for example:
```
map.addControl(L.mapquest.control({ position: 'bottomright' }));
```
There are other types of control available, for example [`mapquest.searchControl()`](https://developer.mapquest.com/documentation/mapquest-js/v1.3/l-mapquest-search-control/) and [`mapquest.satelliteControl()`](https://developer.mapquest.com/documentation/mapquest-js/v1.3/l-mapquest-satellite-control/), and some are quite complex and powerful. Have a play around and see what you can come up with.

## Adding a custom marker

Adding a marker (icon) at a certain point on the map is easy -- you just use the [`L.marker()`](https://developer.mapquest.com/documentation/mapquest-js/v1.3/l-mapquest-icons/) method (which seems to be documented in the related [Leaflet.js docs](https://leafletjs.com/reference-1.7.1.html)). Add the following code to your example, again inside `window.onload`:
```
L.marker([53.480759, -2.242631], {
    icon: L.mapquest.icons.marker({
        primaryColor: '#22407F',
        secondaryColor: '#3B5998',
        shadow: true,
        size: 'md',
        symbol: 'A'
    })
})
.bindPopup('This is Manchester!')
.addTo(map);
```
As you can see, this at its simplest takes two parameters, an array containing the coordinates at which to display the marker (I have changed the coordinates of my map to show the city of Madrid), and an options object containing an `icon` property that defines the icon to display at that point.

The icon is defined using a [`mapquest.icons.marker()`](https://developer.mapquest.com/documentation/mapquest-js/v1.3/l-mapquest-icons/) method, which as you can see contains information such as color and size of marker.

Onto the end of the first method call, we chain `.bindPopup('This is Manchester!')`, which defines content to display when the marker is clicked.

Finally, we chain `.addTo(map)` to the end of the chain to actually add the marker to the map.

Have a play with the other options shown in the documentation and see what you can come up with! Mapquest provides some pretty advanced functionality, such as directions, searching, etc.

## What about Google Maps?

Google Maps is arguably the most popular maps API, so why didn't we use it for our maps example? We did [create an example](https://github.com/mdn/learning-area/blob/master/javascript/apis/third-party-apis/google-maps/finished-maps-example.html) to show how to use it but in the end, we went with Mapqeust for a couple of reasons:

* It is much easier to get started with. For Google APIs in general, you need to create a Google account and log into the [Google Cloud Platform Console](https://console.cloud.google.com/home/dashboard?project=beginner-dev-299600) to create API keys, etc., and the process is fairly complex. For the [Google Maps API](https://cloud.google.com/maps-platform/) in particular, you need to provide a credit card for billing purposes (although basic usage is free), which we didn't think was acceptable for a basic tutorial.
* We wanted to show that there are other alternatives available.

## A RESTful API - NYTimes

Now let's look at another API example -- the [New York Times API](https://developer.nytimes.com/). This API allows you to retrieve New York Times news story information and display it on your site. This type of API is known as a **RESTful API** -- instead of getting data using the features of a JavaScript library like we did with Mapquest, we get data by making HTTP requests to specific URLs, with data-like search terms and other properties encoded in the URL (often as URL parameters). This is a common pattern you'll encounter with APIs.

## An approach for using third-party APIs

Below we'll take you through an exercise to show you how to use the NYTimes API, which also provides a more general set of steps to follow that you can use as an approach for working with new APIs.

### Find the documentation

When you want to use a third-party API, it is essential to find out where the documentation is, so you can find out what features the API has, how you use them, etc. The New York Times API documentation is at [https://developer.nytimes.com/](https://developer.nytimes.com/).

### Get a developer key

Most APIs require you to use some kind of developer key, for reasons of security and accountability. To sign up for an NYTimes API key, follow the instructions at [https://developer.nytimes.com/get-started](https://developer.nytimes.com/get-started).

1. Let's request a key for the Article Search API -- create a new app, selecting this as the API you want to use (fill in a name and description, toggle the switch under the "Article Search API" to the "on" position, and then click "Create").

2. Get the API key from the resulting page.

3. Now, to start the example off, make copies of [nytimes_start.html](https://github.com/mdn/learning-area/blob/master/javascript/apis/third-party-apis/nytimes/nytimes_start.html) and [nytimes.css](https://github.com/mdn/learning-area/blob/master/javascript/apis/third-party-apis/nytimes/nytimes.css) in a new directory on your computer. If you've already [cloned the example repository](https://developer.mozilla.org/en-US/docs/Learn#getting_our_code_examples), you'll already have a copy of these files, which you can find in the *javascript/apis/third-party-apis/nytimes* directory. Initially the `<script>` element contains a number of variables needed for the setup of the example; below we'll fill in the required functionality.

The app will end up allowing you to type in a search term and optional start and end dates, which it will then use to query the Article Search API and display the search results.

### Connect the API to your app

First, you'll need to make a connection between the PI and your app. In the case of this API, you need to include the API key as a [get](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods/GET) parameter every time you request data from the service at the correct URL.

1. Find the following line:
```
let key = ' ... ';
```
Replace the existing API key with the actual API key you got in the previous section.

2. Add the following line to your JavaScript, below the "`// Event listeners to control the functionality`" comment. This runs a function called `submitSearch()` when the form is submitted (the button is pressed).
```
searchForm.addEventListener('submit', submitSearch);
```

3. Now add the `submitSearch()` and `fetchResults()` function definitions, below the previous line:
```
function submitSearch(e) {
    pageNumber = 0;
    fetchResults(e);
}

function fetchResults(e) {
    // Use preventDefault() to stop the form submitting
    e.preventDefault();

    // Assemble the full URL
    url = baseURL + '?api-key=' + key + '&page=' + pageNumber + '&q=' + searchTerm.value + '&fq=document_type:("article")';

    if(startDate.value !== '') {
        url += '&begin_date=' + startDate.value;
    };

    if(endDate.value !== '') {
        url += '&end_date=' + endDate.value;
    };

}
```
`submitSearch()` sets the page number back to 0 to begin with, then calls `fetchResults()`. This first calls [`preventDefault()`](https://developer.mozilla.org/en-US/docs/Web/API/Event/preventDefault) on the event object, 