# How do you set up a local testing server?

This article explains how to set up a simple local testing server on your machine, and the basics of how to use it.

## Local files vs. remote files

Throughout most of the learning area, we tell you to just open your examples directly in a browser -- this can be dome by double-clicking the HTML file, dragging and dropping it into the browser window, or choosing *File > Open...* and navigating to the HTML file. There are many ways to achieve this.

If the web address path starts with `file://` followed by the path to the file on your local hard drive, a local file is being used. In contrast, if you view one of our examples hosted on GitHub (or an example on some other remote server), the web address will start with `http://` or `https://`, to show that the file has been received via HTTP.

## The problem with testing local files

Some examples won't run if you open them as local files. This can be due to a variety of reasons, the most likely being:

* **They feature asynchronous requests**. Some browsers (including Chrome) will not run async requests (see [Fetching data from the server](https://github.com/AndrewSRea/My_Learning_Port/tree/main/JavaScript/Asynchronous_JS/Fetching_Data_from_Server#fetching-data-from-the-server)) if you jstu run the example from a local file. This is because of security restrictions (for more on web security, read [Website security]()).