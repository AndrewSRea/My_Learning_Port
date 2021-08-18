# Client-side tooling overview

In this article, we provide an overview of modern web tooling, what kinds of tools are available and where you'll meet them in the lifecycle of web app development, and how to find help with individual tools.

## Overview of modern tooling

Writing software for the web has become more sophisticated through the ages. Although it is still entirely reasonable to write HTML, CSS, and JavaScript "by hand", there is now a wealth of tools that developers can use to speed up the process of building a web site, or app.

There are some extremely well-established tools that have become common "household names" amongst the development community, and new tools are being written and released every day to solve specific problems. You might even find yourself writing a piece of software to aid your own development process, to solve a specific problem that existing tools don't already seem to handle.

It is easy to become overwhelmed by the sheer number of tools that can included in a single project. Equally, a single configuration file for a tool like [Webpack](https://webpack.js.org/) can be hundreds of lines long, most of which are magical incantations that seem to do the job but which only a master engineer will fully understand!

From time to time, even the most experienced of web developers get stuck on a tooling problem; it is possible to waste hours attempting to get a tooling pipeline working before even touching a single line of application code. If you have found yourself struggling in the past, then don't worry -- you are not alone.

In these articles, we won't answer every question about web tooling, but we will provide you with a useful starting point of understanding the fundamentals, which you can then build from. As with any complex topic, it is good to start small, and gradually work your way up to more advanced uses.

## The modern tooling ecosystem

Today's modern developer tooling ecosystem is huge, so it's useful to have a broad idea of what main problems the tools are solving. If you jump on your favorite search engine and look for "front-end developer tools", you're going to hit a huge spectrum of results ranging from text editors, to browsers, to the type of pens you can use to take notes.

Though your choice of code editor is certainly a tooling choice, this series of articles will go beyond that, focusing on developer tools that help you produce web code more efficiently.

From a high-level perspective, you can put client-side tools into the following three broad categories of problems to solve:

* **Safety net** -- Tools that are useful during your code development.
* **Transformation** -- Tools that transform code in some way, e.g. turning an intermediate language into JavaScript that a browser can understand.
* **Post-development** -- Tools that are useful after you have written your code, such as testing and deployment tools.

Let's look at each one of these in more detail.

### Safety net

These are tools that make the code you write a little better.

This part of the tooling should be specific to your own development environment, though it's not uncommon for companies to have some kind of policy or pre-baked configuration available to install so that all their developers are all using the same processes.

This includes anything that makes your development process easier with respect to generating stable and reliable code. Safety net tooling should also help you either prevent mistakes or correct mistakes automatically without having to build your code from scratch each time.

A few very common safety net tool types you will find being used by developers are as follows.

#### Linters

**Linters** are tools that check through your code and tell you about any errors that are present, what error types they are, and what code lines they are present on. Often linters can be configured to not only report errors, but also report any violations of a specified style guide that your team might be using (for example, code that is using the wrong number of spaces for indentation, or using [template literals](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals) rather than regular string literals).

[eslint](https://eslint.org/) is the industry standard JavaScript linter -- a highly configurable tool for catching potential syntax errors and encouraging "best practices" throughout your code. Some companies and projects have also [shared their eslint configs](https://www.npmjs.com/search?q=keywords:eslintconfig).

You can also find linting tools for other languages, such as [csslint](http://csslint.net/).

Also well-worth looking at is [webhint](https://webhint.io/), a configurable, open-source linter for the web that surfaces best practices including approaches to accessibility, performance, cross-browser compatibility via [MDN's browser compatibility data](https://github.com/mdn/browser-compat-data), security, testing for PWAs, and more. It is available as a [Node.js commnd-line tool](https://webhint.io/docs/user-guide/) and a [VS Code extension](https://marketplace.visualstudio.com/items?itemName=webhint.vscode-webhint).