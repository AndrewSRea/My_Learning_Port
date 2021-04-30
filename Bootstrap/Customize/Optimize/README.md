# Optimize

Keep your projects lean, responsive, and maintainable so you can deliver the best experience and focus on more important jobs.

## Lean Sass imports

When using Sass in your asset pipeline, make sure you optimize Bootstrap by only `@import`ing the components you need. Your largest optimizations will likely come from the `Layout & Components` section of Bootstrap's `bootstrap.scss`.
```
// Configuration
@import "functions";
@import "variables";
@import "mixins";
@import "utilities";

// Layout & components
@import "root";
@import "reboot";
@import "type";
@import "images";
@import "containers";
@import "grid";
@import "tables";
@import "forms";
@import "buttons";
@import "transitions";
@import "dropdown";
@import "button-group";
@import "nav";
@import "navbar";
@import "card";
@import "accordion";
@import "breadcrumb";
@import "pagination";
@import "badge";
@import "alert";
@import "progress";
@import "list-group";
@import "close";
@import "toasts";
@import "modal";
@import "tooltip";
@import "popover";
@import "carousel";
@import "spinners";
@import "offcanvas";

// Helpers
@import "helpers";

// Utilities
@import "utilities/api";
```
If you're not using a component, comment it out or delete it entirely. For example, if you're not using the carousel, remove that import to save some file size in your compiled CSS. Keep in mind there are some dependencies across Sass imports that may make it more difficult to omit a file.

## Lean JavaScript

Bootstrap's JavaScript includes every component in its primary `dist` files (`bootstrap.js` and `bootstrap.min.js`), and even Bootstrap's primary dependency (Popper) with its bundle files (`bootstrap.bundle.js` and `bootstrap.bundle.min.js`). While you're customizing via Sass, be sure to remove related JavaScript.

For instance, assuming you're using your own JavaScript bundler like Webpack or Rollup, you'd only import the JavaScript you plan on using. In the example below, you can see how to just include Bootstrap's modal JavaScript:
```
// Import just what we need

// import 'bootstrap/js/dist/alert';
// import 'bootstrap/js/dist/button';
// import 'bootstrap/js/dist/carousel';
// import 'bootstrap/js/dist/collapse';
// import 'bootstrap/js/dist/dropdown';
import 'bootstrap/js/dist/modal';
// import 'bootstrap/js/dist/popover';
// import 'bootstrap/js/dist/scrollspy';
// import 'bootstrap/js/dist/tab';
// import 'bootstrap/js/dist/toast';
// import 'bootstrap/js/dist/tooltip';
```
This way, you're not including any JavaScript you don't intend to use for components like buttons, carousels, and tooltips. If you're importing dropdowns, tooltips, or popovers, be sure to list the Popper dependency in your `package.json` file.

<hr>

### :warning: Default exports

Files in `bootstrap/js/dist` use the **default export** so if you want to use one of them, you have to do the following:
```
import Modal from 'bootstrap/js/dist/modal';

const modal = new Modal(document.getElementById('myModal));
```

<hr>

## Autoprefixer `.browserslistrc`

Bootstrap depends on Autoprefixer to automatically add browser prefixes to certain CSS properties. Prefixes are dictated by Bootstrap's `browserslistrc` file, found in the root of the Bootstrap repo. Customizing this list of browsers and recompiling the Sass will automatically remove some CSS from your compiled CSS, if there are vendor prefixes unique to that browser or version.

## Unused CSS

While Bootstrap doesn't have a prebuilt example for using [PurgeCSS](https://github.com/FullHuman/purgecss) with Bootstrap, there are some helpful articles and walkthroughs that the community has written. Here are some options:

* [https://medium.com/dwarves-foundation/remove-unused-css-styles-from-bootstrap-using-purgecss-88395a2c5772](https://medium.com/dwarves-foundation/remove-unused-css-styles-from-bootstrap-using-purgecss-88395a2c5772)
* [https://lukelowrey.com/automatically-removeunused-css-from-bootstrap-or-other-frameworks/](https://lukelowrey.com/automatically-removeunused-css-from-bootstrap-or-other-frameworks/)

Lastly, this [CSS Tricks article on unused CSS](https://css-tricks.com/how-do-you-remove-unused-css-from-a-site/) shows how to use PurgeCSS and other similar tools.

