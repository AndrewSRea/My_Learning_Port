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