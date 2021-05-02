# Introduction

Get started with Bootstrap, the world's most popular framework for building responsive, mobile-first sites, with jsDelivr and a template starter page.

## Quick start

Looking to quickly add Bootstrap to your project? Use jsDelivr, a free open source [CDN (Content Delivery Network)](https://en.wikipedia.org/wiki/Content_delivery_network). Using a package manager or need to download the source files? [Head to the downloads page](https://github.com/AndrewSRea/My_Learning_Port/tree/main/Bootstrap/Getting_Started/Download#download).

### CSS 

Copy-paste the stylesheet `<link>` into your `<head>` before all other stylesheets to load Bootstrap's CSS.
```
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-eOJMYsd53ii+scO/bJGFsiCZc+5NDVN2yr8+0RDqr0Ql0h+rP48ckxlpbzKgwra6" crossorigin="anonymous">
```

### JS

Many of Bootstrap's components require the use of JavaScript to function. Specifically, they require Bootstrap's JavaScript plugins and [Popper](https://popper.js.org/). Place **one of the following `<script>`s** near the end of your pages, right before the closing `<body>` tag, to enable them.

#### Bundle

Include every Bootstrap JavaScript plugin and dependency with one of our two bundles. Both `bootstrap.bundle.js` and `bootstrap.bundle.min.js` include **Popper** for Bootstrap's tooltips and popovers. For more information about what's included in Bootstrap, please refer to the [contents](https://github.com/AndrewSRea/My_Learning_Port/tree/main/Bootstrap/Getting_Started/Contents#precompiled-bootstrap) section.
```
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/js/bootstrap.bundle.min.js" integrity="sha384-JEW9xMcG8R+pH31jmWH6WWP0WintQrMb4s7ZOdauHnUtxwoG2vI5DkLtS3qm9Ekf" crossorigin="anonymous"></script>
```

#### Separate

If you decide to go with the separate scripts solution, Popper must come first (if you're using tooltips or popovers), and then Bootstrap's JavaScript plugins.
```
<script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.1/dist/umd/popper.min.js" integrity="sha384-SR1sx49pcuLnqZUnnPwx6FCym0wLsk5JZuNx2bPPENzswTNFaQU1RDvt3wT4gWFG" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/js/bootstrap.min.js" integrity="sha384-j0CNLUeiqtyaRmlzUHCPZ+Gy5fQu0dQ6eZ/xAww941Ai1SxSY+0EQqNXNE6DZiVc" crossorigin="anonymous"></script>
```

#### Modules

If you use `<script type="module">`, please refer to the [using Bootstrap as a module](https://github.com/AndrewSRea/My_Learning_Port/tree/main/Bootstrap/Getting_Started/JavaScript#using-bootstrap-as-a-module) section.

#### Components

Curious which components explicitly require Bootstrap's JavaScript and Popper? See the **Components requiring JavaScript** list below. If you're at all unsure about the general page structure, keep reading for an example page template.

**Components requiring JavaScript**

* [Alerts](https://github.com/AndrewSRea/My_Learning_Port/tree/main/Bootstrap/Components/Alerts#alerts) for dismissing
* [Buttons](https://github.com/AndrewSRea/My_Learning_Port/tree/main/Bootstrap/Components/Buttons#buttons) for toggling states and checkbox/radio functionality
* [Carousel](https://github.com/AndrewSRea/My_Learning_Port/tree/main/Bootstrap/Components/Carousel#carousel) for all slide behaviors, controls, and indicators
* [Collapse](https://github.com/AndrewSRea/My_Learning_Port/tree/main/Bootstrap/Components/Collapse#collapse) for toggling visibility of content
* [Dropdowns](https://github.com/AndrewSRea/My_Learning_Port/tree/main/Bootstrap/Components/Dropdowns#dropdowns) for displaying and positioning (also requires Popper)
* [Modals](https://github.com/AndrewSRea/My_Learning_Port/tree/main/Bootstrap/Components/Modal#modal) for displaying, positioning, and scroll behavior
* [Navbar](https://github.com/AndrewSRea/My_Learning_Port/tree/main/Bootstrap/Components/Navbar#navbar) for extending Bootstraps [Collapse](https://github.com/AndrewSRea/My_Learning_Port/tree/main/Bootstrap/Components/Collapse#collapse) plugin to implement responsive behavior
* [Toasts](https://github.com/AndrewSRea/My_Learning_Port/tree/main/Bootstrap/Components/Toasts#toasts) for displaying and dismissing
* [Tooltips](https://github.com/AndrewSRea/My_Learning_Port/tree/main/Bootstrap/Components/Tooltips#tooltips) and [popovers](https://github.com/AndrewSRea/My_Learning_Port/tree/main/Bootstrap/Components/Popovers#popovers) for displaying and positioning (also requires Popper)
* [Scrollspy](https://github.com/AndrewSRea/My_Learning_Port/tree/main/Bootstrap/Components/Scrollspy#scrollspy) for scroll behavior and navigation updates

## Starter template

Be sure to have your pages set up with the latest design and development standards. That means using an HTML5 doctype and including a viewport meta tag for proper responsive behaviors. Put it all together and your pages should look like this:
```
<!doctype html>
<html lang="en">
    <head>
        <!-- Required meta tags -->
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <!-- Bootstrap CSS -->
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-eOJMYsd53ii+scO/bJGFsiCZc+5NDVN2yr8+0RDqr0Ql0h+rP48ckxlpbzKgwra6" crossorigin="anonymous">

        <title>Hello, world!</title>
    </head>
    <body>
        <h1>Hello, world!</h1>

        <!-- Optional JavaScript; choose one of the two! -->

        <!-- Option 1: Bootstrap Bundle with Popper -->
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/js/bootstrap.bundle.min.js" integrity="sha384-JEW9xMcG8R+pH31jmWH6WWP0WintQrMb4s7ZOdauHnUtxwoG2vI5DkLtS3qm9Ekf" crossorigin="anonymous"></script>

        <!-- Option 2: Separate Popper and Bootstrap JS -->
        <!--
        <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.1/dist/umd/popper.min.js" integrity="sha384-SR1sx49pcuLnqZUnnPwx6FCym0wLsk5JZuNx2bPPENzswTNFaQU1RDvt3wT4gWFG" crossorigin="anonymous"></script>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/js/bootstrap.min.js" integrity="sha384-j0CNLUeiqtyaRmlzUHCPZ+Gy5fQu0dQ6eZ/xAww941Ai1SxSY+0EQqNXNE6DZiVc" crossorigin="anonymous"></script>
        -->
    </body>
</html>
```
(I have an example of this starter template [here](https://github.com/AndrewSRea/My_Learning_Port/blob/main/Bootstrap/starter-template.html).)

For next steps, visit the [Layout docs](https://github.com/AndrewSRea/My_Learning_Port/tree/main/Bootstrap/Layout/Grid#grid-system) or [Bootstrap's official examples](https://getbootstrap.com/docs/5.0/examples/) to start laying out your site's content and components.

## Important globals

Bootstrap employs a handful of important global styles and settings that you'll need to be aware of when using it, all of which are almost exclusively geared towards the *normalization* of cross browser styles. Let's dive in!

### HTML5 doctype

Bootstrap requires the use of the HTML5 doctype. Without it, you'll see some funky incomplete styling, but including it shouldn't cause any considerable hiccups.
```
<!doctype html>
<html lang="en">
    ...
</html>
```

### Responsive meta tag

Bootstrap is developed *mobile first*, a strategy in which we optimize code for mobile devices first and then scale up components as necessary using CSS media queries. To ensure proper rendering and touch zooming for all devices, **add the responsive viewport meta tag** to your `<head>`.
```
<meta name="viewport" content="width=device-width, initial-scale=1">
```
You can see an example of this in action in the [starter template](https://github.com/AndrewSRea/My_Learning_Port/blob/main/Bootstrap/starter-template.html) (my starter template).

### Box-sizing

For more straightforward sizing in CSS, Bootstrap switches the global `box-sizing` value from `content-box` to `border-box`. This ensures `padding` does not affect the final computed width of an element, but it can cause problems with some third-party software like Google Maps and Google Custom Search Engine.

On the rare occasion you need to override it, use something like the following:
```
.selector-for-some-widget {
    box-sizing: content-box;
}
```
With the above snippet, nested elements--including generated content via `::before` and `::after`--will all inherit the specified `box-sizing` for that `.selector-for-some-widget`.

Learn more about [box model and sizing at CSS Tricks](https://css-tricks.com/box-sizing/).

### Reboot

For improved cross-browser rendering, we use [Reboot]() to correct inconsistencies across browsers and devices while providing slightly more opinionated resets to common HTML elements. <!-- link to Content/Reboot -->

## Community

Stay up to date on the development of Bootstrap and reach out to the community with these helpful resources.

* Read and subscribe to [The Official Bootstrap Blog](https://blog.getbootstrap.com/).
* Join [the official Slack room](https://bootstrap-slack.herokuapp.com/).
* Chat with fellow Bootstrappers in IRC. On the `irc.freenode.net` server, in the `##bootstrap` channel.
* Implementation help may be found at Stack Overflow (taagged [`bootstrap-5`](https://stackoverflow.com/questions/tagged/bootstrap-5)).
* Developers should use the keyword `bootstrap` on packages that modify or add to the functionality of Bootstrap when distributing through [npm](https://www.npmjs.com/search?q=keywords:bootstrap) or similar delivery machanisms for maximum discoverability.

You can also follow [@getbootstrap on Twitter](https://twitter.com/getbootstrap) for the latest gossip and awesome music videos.

<hr>

[[Back to Table of contents]](https://github.com/AndrewSRea/My_Learning_Port/tree/main/Bootstrap/Getting_Started#getting-started) - [[Top]](https://github.com/AndrewSRea/My_Learning_Port/tree/main/Bootstrap/Getting_Started/Introduction#introduction) - [[Next page]](https://github.com/AndrewSRea/My_Learning_Port/tree/main/Bootstrap/Getting_Started/Download#download)