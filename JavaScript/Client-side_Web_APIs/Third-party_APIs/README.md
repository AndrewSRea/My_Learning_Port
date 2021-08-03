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



## A RESTful API - NYTimes