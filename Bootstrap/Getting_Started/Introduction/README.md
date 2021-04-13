# Introduction

Get started with Bootstrap, the world's most popular framework for building responsive, mobile-first sites, with jsDelivr and a template starter page.

## Quick start

Looking to quickly add Bootstrap to your project? Use jsDelivr, a free open source [CDN (Content Delivery Network)](https://en.wikipedia.org/wiki/Content_delivery_network). Using a package manager or need to download the source files? [Head to the downloads page](). <!-- link to the next folder: Download -->

### CSS 

Copy-paste the stylesheet `<link>` into your `<head>` before all other stylesheets to load Bootstrap's CSS.
```
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-eOJMYsd53ii+scO/bJGFsiCZc+5NDVN2yr8+0RDqr0Ql0h+rP48ckxlpbzKgwra6" crossorigin="anonymous">
```

### JS

Many of Bootstrap's components require the use of JavaScript to function. Specifically, they require Bootstrap's JavaScript plugins and [Popper](https://popper.js.org/). Place **one of the following `<script>`s** near the end of your pages, right before the closing `<body>` tag, to enable them.

#### Bundle

Include every Bootstrap JavaScript plugin and dependency with one of our two bundles. Both `bootstrap.bundle.js` and `bootstrap.bundle.min.js` include **Popper** for Bootstrap's tooltips and popovers. For more information about what's included in Bootstrap, please refer to the [contents]() section. <!-- link to the Getting_Started - Contents section -->
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

If you use `<script type="module">`, please refer to the [using Bootstrap as a module]() section. <!-- link to the Getting_Started / JavaScript folder ('Using Bootstrap as a module' header) -->

#### Components

Curious which components explicitly require Bootstrap's JavaScript and Popper? See the **Components requiring JavaScript** list below. If you're at all unsure about the general page structure, keep reading for an example page template.

**Components requiring JavaScript**

* [Alerts](https://github.com/AndrewSRea/My_Learning_Port/tree/main/Bootstrap/Components/Alerts#alerts) for dismissing
* [Buttons](https://github.com/AndrewSRea/My_Learning_Port/tree/main/Bootstrap/Components/Buttons#buttons) for toggling states and checkbox/radio functionality
* [Carousel]() for all slide behaviors, controls, and indicators
* [Collapse]() for toggling visibility of content
* [Dropdowns]() for displaying and positioning (also requires Popper)
* [Modals]() for displaying, positioning, and scroll behavior
* [Navbar]() for extending Bootstraps [Collapse]() plugin to implement responsive behavior
* [Toasts]() for displaying and dismissing
* [Tooltips]() and [popovers]() for displaying and positioning (also requires Popper)
* [Scrollspy]() for scroll behavior and navigation updates

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

For next steps, visit the [Layout docs]() or [Bootstrap's official examples](https://getbootstrap.com/docs/5.0/examples/) to start laying out your site's content and components.

<!-- you need to reconfigure your Layout folder, then put the link to the 'Grid system' header into the 'Layout docs' link above -->

## Important globals