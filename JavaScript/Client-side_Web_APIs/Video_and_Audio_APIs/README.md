# Video and Audio APIs

HTML5 comes with elements for embedding rich media in documents -- [`<video>`]() and [`<audio>`]() -- which in turn come with their own APIs for controlling playback, seeking, etc. This article shows you how to do common tasks such as creating custom playback controls.

## HTML5 video and audio

The [`<video>`]() and [`<audio>`]() elements allow us to embed video and audio into web pages. As we showed in [Video and audio content](), a typical implementation looks like this:
```
<video controls>
    <source src="rabbit320.mp4" type="video/mp4">
    <source src="rabbit320.webm" type="video/webm">
    <p>Your browser doesn't support HTML5 video. Here is a <a href="rabbit320.mp4">link to the video</a> instead.</p>
</video>
```
This creates a video player inside the browser. See it live [here](https://andrewsrea.github.io/My_Learning_Port/JavaScript/Client-side_Web_APIs/Video_and_Audio_APIs/simple-video.html).