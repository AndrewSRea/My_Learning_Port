# Introduction to web APIs

First up, we'll start by looking at APIs from a high level -- what are they, how do they work, how to use them in your code, and how are they structured? We'll also take a look at what the different main classes of APIs are, and what kind of uses they have.

## What are APIs?

Application Programming Interfaces (APIs) are constructs made available in programming languages to allow developers to create complex functionality more easily. They abstract more complex code away from you, providing some easier syntax to use in its place.

As a real-world example, think about the electricity supply in your house, apartment, or other dwellings. If you want to use an appliance in your house, you plug it into a plug socket and it works. You don't try to wire it directly into the power supply -- to do so would be really inefficient and, if you are not an electrician, difficult and dangerous to attempt.

In the same way, if you want to, say, program some 3D graphics, it is a lot easier to do it using an API written in a higher-level language such as JavaScript or Python, rather than try to directly write low-level code (say, C or C++) that directly controls the computer's GPU or other graphics functions.

<hr>

**Note**: See also the [API glossary entry](https://developer.mozilla.org/en-US/docs/Glossary/API) for further description.

<hr>

### APIs in client-side JavaScript

Client-side JavaScript, in particular, has many APIs available to it -- these are not part of the JavaScript language itself, rather they are built on top of the core JavaScript language, providing you with extra superpowers to use in your JavaScript code. They generally fall into two categories:

* **Browser APIs** are built into your web browser and are able to expose data from the browser and surrounding computer environment and do useful complex things with it. For example, the [Web Audio API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Audio_API) provides JavaScript constructs for manipulating audio in the browser -- taking an audio track, altering its volume, applying effects to it, etc. In the background, the browser is actually using some complex lower-level code (e.g. C++ or Rust) to do the actual audio processing. But again, this complexity is abstracted away from you by the API.
* **Third-party APIs** are not built into the browser by default, and you generally have to retrieve their code and information from somewhere on the Web. For example, the [Twitter API](https://developer.twitter.com/en/docs) allows you to do things like displaying your latest tweets on your website. It provides a special set of constructs you can use to query the Twitter service and return specific infromation.

### Relationships between JavaScript, APIs, and other JavaScript tools

So above, we talked about what client-side JavaScript APIs are, and how they relate to the JavaScript language. Let's recap this to make it clearer, and also mention where other JavaScript tools fit in:

* JavaScript -- A high-level scripting language built into browser that allows you to implement functionality on web pages/apps. Note that JavaScript is also available in other programming environments, such as [Node](https://github.com/AndrewSRea/My_Learning_Port/tree/main/Server-Side_Website_Programming/Express_Web_Framework/Express_Node_Intro#expressnode-introduction).

* Browser APIs -- Constructs built into the browser that sits on top of the JavaScript language and allows you to implement functionality in more easily.

* Third-party APIs -- Constructs built into third-party platforms (e.g. Twitter, Facebook) that allow you to use some of those platform's functionality in your own web pages (for example, display your latest tweets on your web page).

* JavaScript libraries -- Usually one or more JavaScript files containing [custom functions](https://github.com/AndrewSRea/My_Learning_Port/tree/main/JavaScript/JS_Building_Blocks/Functions#functions----reusable-blocks-of-code) that you can attach to your web page to speed up or enable writing common functionality. Examples include jQuery, Mootools, and React.

* JavaScript frameworks -- The next step up from libraries, JavaScript frameworks (e.g. Angular and Ember) tend to be packages of HTML, CSS, JavaScript, and other technologies that you install and then use to write an entire web application from scratch. The key difference between a library and a framework is "Inversion of Control". When calling a method from a library, the developer is in control. With a framework, the control is inverted; the framework calls the developer's code.

## What can APIs do?

There are a huge number of APIs available in modern browsers that allow you to do a wide variety of things in your code. You can see this by taking a look at the [MDN APIs index page](https://developer.mozilla.org/en-US/docs/Web/API).

### Common browser APIs

In particular, the most common categories of browser APIs you'll use (and which we'll cover in this module in greater detail) are:

* **APIs for manipulating documents** loaded into the browser. The most obvious example is the [DOM (Document Object Model) API](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model), which allows you to manipulate HTML and CSS -- creating, removing, and changing HTML, dynamically applying new styles to your page, etc. Every time you see a popup window appear on a page or some new content displayed, for example, that's the DOM in action. Find out more about these types of API in [Manipulating documents](https://github.com/AndrewSRea/My_Learning_Port/tree/main/JavaScript/Client-side_Web_APIs/Manipulating_Documents#manipulating-documents).

* **APIs that fetch data from the server** to update small sections of a webpage on their own are very commonly used. This seemingly small detail has had a huge impact on the performance and behavior of sites -- if you just need to update a stock listing or list of available new stories, doing it instantly without having to reload the whole entire page from the server can make the site or app feel much more responsive and "snappy". APIs that make this possible include [`XMLHttpRequest`](https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest) and the [Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API). You may also come across the term **Ajax**, which describes this technique. Find out more about such APIs in [Fetching data from the server](https://github.com/AndrewSRea/My_Learning_Port/tree/main/JavaScript/Client-side_Web_APIs/Fetching_Data#fetching-data-from-the-server).

* **APIs for drawing and manipulating graphics** are now widely supported in browsers -- the most popular ones are [Canvas](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API) and [WebGL](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API), which allow you to programmatically update the pixel data contained in an HTML [`<canvas>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/canvas) element to create 2D and 3D scenes. For example, you might draw shapes such as rectangles or circles, import an image onto the canvas, and apply a filter to it such as sepia or grayscale using the Canvas API, or create a complex 3D scene with lighting and textures using WebGL. Such APIs are often combined with APIs for creating animation loops (such as [`window.requestAnimationFrame()`](https://developer.mozilla.org/en-US/docs/Web/API/window/requestAnimationFrame)) and others to make constantly updating scenes like cartoons and games.

* **[Audio and Video APIs](https://developer.mozilla.org/en-US/docs/Web/Guide/Audio_and_video_delivery)** like [`HTMLMediaElement`](https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement), the [Web Audio API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Audio_API), and [WebRTC](https://developer.mozilla.org/en-US/docs/Web/API/WebRTC_API) allow you to do really interesting things with multimedia such as creating custom UI controls for playing audio and video, displaying text tracks like captions and subtitles along with your videos, grabbing video from your web camera to be manipulated via a canvas (see above) or displayed on someone else's computer in a web conference, or adding effects to audio tracks (such as gain, distortion, panning, etc).

* **Device APIs** are basically APIs for manipulating and retrieving data from modern device hardware in a way that is useful for web apps. Examples include telling the user that a useful update is available on a web app via system notifications (see the [Notifications API](https://developer.mozilla.org/en-US/docs/Web/API/Notifications_API)) or vibration hardware (see the [Vibration API](https://developer.mozilla.org/en-US/docs/Web/API/Vibration_API)).

* **Client-side storage APIs** are becoming a lot more widespread in web browsers -- the ability to store data on the client-side is very useful if you want to create an app that will save its state between page loads, and perhaps even work when the device is offline. There are a number of options available, e.g. simple name/value storage with the [Web Storage API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API), and more complex tabular data storage with the [IndexedDB API](https://developer.mozilla.org/en-US/docs/Web/API/IndexedDB_API).

### Common third-party APIs

Third-party APIs come in a large variety; some of the more popular ones that you are likely to make use of sooner or later are:

* The [Twitter API](https://developer.twitter.com/en/docs), which allows you to do things like displaying your latest tweets on your website.

* Map APIs like [Mapquest](https://developer.mapquest.com/) and the [Google Maps API](https://developers.google.com/maps/) allows you to do all sorts of things with maps on your web pages.

* The [Facebook suite of APIs](https://developers.facebook.com/docs/) enables you to use various parts of the Facebook ecosystem to benefit your app. For example, by providing app login using Facebook login, accepting in-app payments, rolling out targeted ad campaigns, etc.

* The [Telegram APIs](https://core.telegram.org/api) allows you to embed content from Telegram channels on your website, in addition to providing support for bots.

* The [YouTube API](https://developers.google.com/youtube/), which allows you to embed YouTube videos on your site, search YouTube, build playlists, and more.

* The [Pinterest API](https://developers.pinterest.com/) provides tools to manage Pinterest boards and pins to include them in your website.

* The [Twilio API](https://www.twilio.com/), which provides a framework for building voice and video call functionality into your app, sending SMS/MMS from your apps, and more.

* The [Mastodon API](https://docs.joinmastodon.org/api/) enables you to manipulate features of the Mastodon social network programmatically.

<hr>

**Note**: You can find information on a lot more 3rd party APIs at the [Programmable Web API directory](https://www.programmableweb.com/category/all/apis).

<hr>