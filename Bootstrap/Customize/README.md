# Customize

Learn how to theme, customize, and extend Bootstrap with Sass, a boatload of global options, an expansive color system, and more.

## Table of contents

* [Sass](https://github.com/AndrewSRea/My_Learning_Port/tree/main/Bootstrap/Customize/Sass#sass) - Utilize Bootstrap's source Sass files to take advantage of variables, maps, mixins, and functions.
* [Options](https://github.com/AndrewSRea/My_Learning_Port/tree/main/Bootstrap/Customize/Options#options) - Customize Bootstrap with built-in variables to easily toggle global CSS preferences.
* [Color](https://github.com/AndrewSRea/My_Learning_Port/tree/main/Bootstrap/Customize/Colors#color) - Learn about and customize the color systems that support the entire toolkit.
* [Components](https://github.com/AndrewSRea/My_Learning_Port/tree/main/Bootstrap/Customize/Components#components) - Learn how Bootstrap builds nearly all its components responsively and with base and modifier classes.
* [CSS variables](https://github.com/AndrewSRea/My_Learning_Port/tree/main/Bootstrap/Customize/CSS_Variables#css-variables) - Use Bootstrap's CSS custom properties for fast and forward-looking design and development.
* [Optimize](https://github.com/AndrewSRea/My_Learning_Port/tree/main/Bootstrap/Customize/Optimize#optimize) - Keep your projects lean, responsive, and maintainable so you can deliver the best experience.

## Overview

There are multiple ways to customize Bootstrap. Your best path can depend on your project, the complexity of your build tools, the version of Bootstrap you're using, browser support, and more.

Bootstrap's two preferred methods are:

1. Using Bootstrap [via package manager](https://github.com/AndrewSRea/My_Learning_Port/tree/main/Bootstrap/Getting_Started/Download#package-managers) so you can use and extend its source files.
2. Using Bootstrap's compiled distribution fles or [jsDelivr](https://github.com/AndrewSRea/My_Learning_Port/tree/main/Bootstrap/Getting_Started/Download#cdn-via-jsdelivr) so you can add onto or override Bootstrap's styles.

While the Bootstrap devs cannot go into details here on how to use every package manager, they can give some guidance on [using Bootstrap with your own Sass compiler](https://github.com/AndrewSRea/My_Learning_Port/tree/main/Bootstrap/Customize/Sass#sass).

For those who want to use the distribution files, review the [getting started page](https://github.com/AndrewSRea/My_Learning_Port/tree/main/Bootstrap/Getting_Started/Introduction#introduction) for how to utilize Boostrap's global options, making use of and changing its color system, how to build its components, how to use its growing list of CSS custom properties, and how to optimize your code when building with Bootstrap.

## CSPs and embedded SVGs

Several Bootstrap components include embedded SVGs in Bootstrap's CSS to style components consistently and easily across browsers and devices. **For organizations with more strict [CSP](https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP) configurations**, Bootstrap has documented all instances of its embedded SVGs (all of which are applied via `background-image`) so you can more thoroughly review your options.

* [Accordion](https://github.com/AndrewSRea/My_Learning_Port/tree/main/Bootstrap/Components/Accordion#accordion)
* [Close button](https://github.com/AndrewSRea/My_Learning_Port/tree/main/Bootstrap/Components/Close_Button#close-button) (used in alerts and modals)
* [Form checkboxes and radio buttons]() <!-- link to Forms/Checks_and_Radios -->
* [Form switches]() <!-- link to Forms/Checks_and_Radios - "Switches" header -->
* [Form validation icons]() <!-- link to Forms/Validation - "Server side" header -->
* [Select menus]() <!-- link to Forms/Select -->
* [Carousel controls](https://github.com/AndrewSRea/My_Learning_Port/tree/main/Bootstrap/Components/Carousel#carousel)
* [Navbar toggle buttons](https://github.com/AndrewSRea/My_Learning_Port/tree/main/Bootstrap/Components/Navbar#responsive-behaviors)

Based on [community conversation](https://github.com/twbs/bootstrap/issues/25394), some options for addressing this in your own codebase include replacing the URLs with locally hosted assets, removing the images and using inline images (not possible in all components), and modifying your CSP. Bootstrap's recommendation is to carefully review your own security policies and decide on a best path forward, if necessary.

<hr>

[[Next module: Layout]](https://github.com/AndrewSRea/My_Learning_Port/tree/main/Bootstrap/Layout#bootstrap-layout)