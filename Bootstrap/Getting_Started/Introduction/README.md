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