# Implementing feature detection

Feature detection involves working out whether a browser supports a certain block of code, and running different code depending on whether it does (or doesn't) so that the browser can always provide a working experience rather than crashing/erroring in some browsers. This article details how to write your own simple feature detection, how to use a library to speed up implementation, and native features for feature detection such as `@supports`.

## The concept of feature detection

The idea behind feature detection is that you can run a test to determine whether a feature is supported in the current browser, and then conditionally run code to provide an acceptable experience both in browsers that *do* support the feature, and browsers that *don't*. If you don't do this, browsers that don't support the features you are using in your code won't display your sites properly and will just fail, creating a bad user experience.

Let's recap and look at the example we touched on in our [Handling common JavaScript problems](https://github.com/AndrewSRea/My_Learning_Port/tree/main/JavaScript/Tools_and_Testing/Cross_Browser_Testing/Handling_JavaScript_Problems#handling-common-javascript-problems) -- the [Geolocation API](https://developer.mozilla.org/en-US/docs/Web/API/Geolocation_API) (which exposes avaiolable location data for the device the web browser is running on) has the main entry point for its use, a `geolocation` property available on the global [Navigator](https://developer.mozilla.org/en-US/docs/Web/API/Navigator) object. Therefore, you can detect whether the browser supprots geolocation or not by using something like the following:
```
if ("geolocation" in navigator) {
    navigator.geolocation.getCurrentPosition(function(position) {
        // show the location on a map, perhaps using the Google Maps API
    });
} else {
    // Give the user a choice of static maps instead
}
```
It is probably better to use an established feature detection library, however, rather than writing your own all the time. Modernizr is the industry standard for feature detection tests, and we'll look at that later on.