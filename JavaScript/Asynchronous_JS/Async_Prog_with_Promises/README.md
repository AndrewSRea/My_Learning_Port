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