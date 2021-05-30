# Approach

Learn about the guiding principles, strategies, and techniques used to build and maintain Bootstrap so you can more easily customize and extend it yourself.

While the [Getting Started pages](https://github.com/AndrewSRea/My_Learning_Port/tree/main/Bootstrap/Getting_Started#getting-started) provide an introductory tour of the project and what it offers, this document focuses on *why* we do the things we do in Bootstrap. It explains Bootstrap's philosophy to building on the web so that others can learn from Bootstrap, contribute with Bootstrap, and help Bootstrap improve.

See something that doesn't sound right, or perhaps could be done better? [Open an issue](https://github.com/twbs/bootstrap/issues/new)--Bootstrap's devs would love to discuss it with you.

## Summary

We'll dive into each of these more throughout, but at a high level, here's what guides Bootstrap's approach:

* Components should be responsive and mobile-first.
* Components should be built with a base class and extended via modifier classes.
* Component states should obey a common z-index scale.
* Whenever possible, prefer an HTML and CSS implementation over JavaScript.
* Whenever possible, use utilities over custom styles.
* Whenever possible, avoid enforcing strict HTML requirements (children selectors).

## Responsive

Bootstrap's responsive styles are built to be responsive, an approach that;s often referred to as *mobile-first*. Bootstrap uses this term in its docs and largely agrees with it, but at times it can be too broad. While not every component *must* be entirely responsive in Bootstrap, this responsive approach is about reducing CSS overrides by pushing you to add styles as the viewport becomes larger.

Across Bootstrap, you'll see this most clearly in Bootstrap's media queries. In most cases, Bootstrap uses `min-width` queries that begin to apply at a specific breakpoint and carry up through the higher breakpoints. For example, a `.d-none` applies from `min-width: 0` to infinity. On the other hand, a `.d-md-none` applies from the medium breakpoint and up.

At times, Bootstrap will use `max-width` when a component's inherent complexity requires it. At times, these overrides are functionally and mentally clearer to implement and support than rewriting core functionality from Bootstrap's components. Bootstrap strives to limit this approach, but will use it from time to time.

## Classes

Aside from Bootstrap's Reboot, a cross-browser normalization stylesheet, all of Bootstrap's styles aim to use classes as selectors. This means steering clear of type selectors (e.g., `input[type="text"]`) and extraneous parent classes (e.g., `.parent .child`) that makes styles too specific to easily override.

