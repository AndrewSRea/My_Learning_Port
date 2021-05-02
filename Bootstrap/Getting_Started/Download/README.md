# Download

Download Bootstrap to get the compiled CSS and JavaScript, source code, or include it with your favorite package managers like npm, RubyGems, and more.

## Compiled CSS and JS

Download ready-to-use compiled code for **Bootstrap v5.0.0-beta3** to easily drop into your project, which includes:

* Compiled and minified CSS bundles (see [CSS files comparison]()) <!-- link to next page, Contents (header: 'CSS files') -->
* Compiled and minified JavaScript plugins (see [JS files comparison]()) <!-- link to next page, Contents (header: 'JS files') -->

This doesn't include documentation, source files, or any optional JavaScript dependencies like Popper.

**[Download](https://github.com/twbs/bootstrap/releases/download/v5.0.0-beta3/bootstrap-5.0.0-bta3-dis.zip)**

## Source files

Compile Bootstrap with your own asset pipeline by downloading Bootstrap's source Sass, JavaScript, and documenation files. This option requires some additional tooling:

* [Sass compiler]() for compiling Sass source files into CSS files <!-- link to 'Build tools' page, header 'Sass' -->
* [Autoprefixer](https://github.com/postcss/autoprefixer) for CSS vendor prefixing

Should you require Bootstrap's full set of [build tools](), they are included for developing Bootstrap and its docs, but they're likely unstable for your own purposes. <!-- link to 'Build tools' page, header 'Tooling setup' -->

**[Download source](https://github.com/twbs/bootstrap/archive/v5.0.0-beta3.zip)**

## Examples

If you want to download and examine Bootstrap's [examples](), you can grab the already built examples:

**[Download examples](https://github.com/twbs/bootstrap/releases/download/v5.0.0-beta/bootstrap-5.0.0-beta3-examples.zip)**

## CDN via jsDelivr

Skip the download with [jsDelivr](https://www.jsdelivr.com/) to deliver a cached version of Bootstrap's compiled CSS and JS to your project.
```
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-eOJMYsd53ii+scO/bJGFsiCZc+5NDVN2yr8+0RDqr0Ql0h+rP48ckxlpbzKgwra6" crossorigin="anonymous">
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/js/bootstrap.bundle.min.js" integrity="sha384-JEW9xMcG8R+pH31jmWH6WWP0WintQrMb4s7ZOdauHnUtxwoG2vI5DkLtS3qm9Ekf" crossorigin="anonymous"></script>
```
If you're using Bootstrap's compiled JavaScript and prefer to include Popper separately, add Popper before Bootstrap's JS, via a CDN preferably.
```
<script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.1/dist/umd/popper.min.js" integrity="sha384-SR1sx49pcuLnqZUnnPwx6FCym0wLsk5JZuNx2bPPENzswTNFaQU1RDvt3wT4gWFG" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/js/bootstrap.min.js" integrity="sha384-j0CNLUeiqtyaRmlzUHCPZ+Gy5fQu0dQ6eZ/xAww941Ai1SxSY+0EQqNXNE6DZiVc" crossorigin="anonymous"></script>
```

## Package managers

Pull in Bootstrap's **source files** into nearly any project with some of the most popular package managers. No matter the package manager, Bootstrap will **require a [Sass compiler]() and [Autoprefixer](https://github.com/postcss/autoprefixer)** for a setup that matches Bootstrap's official compiled versions. <!-- for 'Sass complier', link to 'Build tools' page, header: 'Sass' -->

### npm

Install Bootstrap in your Node.js powered apps with [the npm package](https://www.npmjs.com/package/bootstrap):
``` 
$ npm install bootstrap@next
```
`const bootstrap = require('bootstrap')` or `import bootstrap from 'bootstrap'` will load all of Bootstrap's plugins onto a `bootstrap` object. The `bootstrap` module itself exports all of Bootstrap's plugins. You can manually load Bootstrap's plugins individually by loading the `/js/dist/*.js` files under the package's top-level directory.

Bootstrap's `package.json` contains some additional metadata under the following keys:

* `sass` - path to Bootstrap's main [Sass](https://sass-lang.com/) source file
* `style` - path to Bootstrap's non-minified CSS that's been precompiled using the default settings (no customization)

<hr>

**Get started with Bootstrap via npm with Bootstrap's starter project!** Head to the [twbs/bootstrap-npm-starter](https://github.com/twbs/bootstrap-npm-starter) template repository to see how to build and customize Bootstrap in your own npm project. Includes Sass compiler, Autoprefixer, Stylelint, PurgeCSS, and Bootstrap Icons.

<hr>

### yarn

Install Bootstrap in your Node.js powered apps with [the yarn package](https://classic.yarnpkg.com/en/package/bootstrap):
```
$ yarn add bootstrap@next
```

### RubyGems

Install Bootstrap in your Ruby apps using [Bundler](https://bundler.io/) **(recommended)** and [RubyGems](https://rubygems.org/) by adding the following line to your [`Gemfile`](https://bundler.io/gemfile.html):
```
gem 'bootstrap', '~> 5.0.0.beta3'
```
Alternatively, if you're not using Bundler, you can install the gem by running this command:
```
$ gem install bootstrap -v 5.0.0.beta3
```
[See the gem's README](https://github.com/twbs/bootstrap-rubygem/blob/master/README.md) for further details.

### Composer

You can also install and manage Bootstrap's Sass and JavaScript using [Composer](https://getcomposer.org/):
```
$ composer require twbs/bootstrap:5.0.0-beta3
```

### NuGet

If you develop in .NET, you can also install and manage Bootstrap's [CSS](https://www.nuget.org/packages/bootstrap/) or [Sass](https://www.nuget.org/packages/bootstrap.sass/) and JavaScript using [NuGet](https://www.nuget.org/):
```
PM> Install-Package bootstrap
```
```
PM> Install-Package bootstrap.sass
```

<hr>

[[Previous page]](https://github.com/AndrewSRea/My_Learning_Port/tree/main/Bootstrap/Getting_Started/Introduction#introduction) - [[Top]](https://github.com/AndrewSRea/My_Learning_Port/tree/main/Bootstrap/Getting_Started/Download#download) - [[Next page]](https://github.com/AndrewSRea/My_Learning_Port/tree/main/Bootstrap/Getting_Started/Contents#contents)