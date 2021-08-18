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

#### Source code control

Also known as **version control systems (VCS)**, **source code control** is essential for backing up and working in teams. A typical VCS involves having a local version of the code that you make changes to. You then "push" changes to a "master" version of the code inside a remote repository stored on a server somewhere. There is usually a way of controlling and coordinating what changes are made to the "master" copy of the code, and when, so a team of developers doesn't end up overwriting each other's work all the time.

[Git](https://git-scm.com/) is the source code control system that most people use these days. It is primarily accessed via the command line but can be accessed via friendly user interfaces. With your code in a git repository, you can push it to your own server instance, or use a hosted source control website such as [GitHub](https://github.com/), [GitLab](https://about.gitlab.com/), or [BitBucket](https://bitbucket.org/product/features).

We'll be using GitHub in this module. You can find more information about it at [Git and GitHub](https://github.com/AndrewSRea/My_Learning_Port/tree/main/JavaScript/Tools_and_Testing/Git_and_GitHub#git-and-github).

#### Code formatters

Code formatters are somewhat related to linters, except that rather than opoint out errors in your code, they usually tend to make sure your code is formatted correctly, according to your style rules, ideally automatically fixing errors that they find.

[Prettier](https://prettier.io/) is a very popular example of a code formatter, which we'll make use of later on in the module.

#### Bundlers/packagers

These are tools that get your code ready for production, for example, by "tree-shaking" to make sure only the parts of your code libraries that you are actually using are put into your final production code, or "minifying" to remove all the whitespace in your production code, making it as small as possible before it is uploaded to a server.

[Parcel](https://parceljs.org/) is a particularly clever tool that fits into this category -- it can do the above tasks, but also helps to package assets like HTML, CSS, and image files into convenient bundles that you can then go on to deploy, and also adds dependencies for you automatically whenever you try to use them. It can even handle some code transformation duties for you.

[Webpack](https://webpack.js.org/) is another very popular packaging tool that does similar things.

### Transformation

This stage of your web app lifecycle typically allows you to code in either "future code" (such as the latest CSS or JavaScript features that might not have native support in browsers yet) or code using another language entirely, such as [TypeScript](https://www.typescriptlang.org/). Transformation tools will then generate browser-compatible code for you, to be used in production.

Generally web development is thought of as three languages: [HTML](https://developer.mozilla.org/en-US/docs/Learn/HTML), [CSS](https://developer.mozilla.org/en-US/docs/Learn/CSS), and [JavaScript](https://github.com/AndrewSRea/My_Learning_Port/tree/main/JavaScript#javascript), and there are transformation tools for all of these languages. Transformation offers two main benefits (amongst others):

1. The ability to write code using the latest language features and have that transformed into code that works on everyday devices. For example, you might want to write JavaScript using cutting-edge new language features, but still have your final production code work on older browsers that don't support those features. Good examples here include:
    - [Babel](https://babeljs.io/): A JavaScript compiler that allows developers to write their code using cutting-edge JavaScript, which Babel then takes and converts into old-fashioned JavaScript that more browsers can understand. Developers can also write and publish [plugins for Babel](https://babeljs.io/docs/en/plugins).
    - [PostCSS](https://postcss.org/): Does the same kind of thing as Babel, but for cutting-edge CSS features. If there isn't an equivalent way to do something using older CSS features, PostCSS will install a JavaScript polyfill to emulate the CSS effect you want.

2. The option to write your code in an entirely different language and have it transformed into a web-compatible language. For example:
    - [Sass/SCSS](https://sass-lang.com/): This CSS extension allows you to use variables, nested rules, mixins, functions, and many other features, some of which are available in native CSS (such as variables), and some of which aren't.
    - [TypeScript](https://www.typescriptlang.org/): TypeScript is a superset of JavaScript that offers a bunch of additional features. The TypeScript compiler converts TypeScript code to JavaScript when building for production.
    - Frameworks such as [React](https://reactjs.org/), [Ember](https://emberjs.com/), and [Vue](https://vuejs.org/): Frameworks provide a lot of functionality for free and allow you to use it via custom syntax built on top of vanilla JavaScript. In the background, the framework's JavaScript code works hard to interpret this custom syntax and render it as a final web app.

### Post development

Post-development tooling ensures that your software makes it to the web and continues to run. This includes the deployment processes, testing frameworks, auditing tools, and more.

This stage of the development process is one that you want the least amount of active information with so that once it is configured, it runs mostly automatically, only popping up to say hello if something has gone wrong.

#### Testing tools

These generally take the form of a tool that will automatically run tests against your code to make sure it is correct before you go any further (for example, when you attempt to push changes to a GitHub repo). This can include linting, but also more sophisticated procedures like unit tests, where you run part of your code, making sure they behave as they should.

* Frameworks for writing tests include [Jest](https://jestjs.io/), [Mocha](https://mochajs.org/), and [Jasmine](https://jasmine.github.io/).
* Automated test running and notification systems include [Travis CI](https://travis-ci.org/), [Jenkins](https://www.jenkins.io/), [Circle CI](https://circleci.com/), and [others](https://en.m.wikipedia.org/wiki/List_of_build_automation_software#Continuous_integration).

#### Deployment tools

Deployment systems allow you to get your website published, are available for both static and dynamic sites, and commonly tend to work alongside testing systems. For example, a typical toolchain will wait for you to push changes to a remote repo, run some tests to see if the changes are OK, and then if the tests pass, automatically deploy your app to a production site.

[Netlify](https://www.netlify.com/) is one of the most popular deployment tools right now, but others include [Vercel](https://vercel.com/) and [GitHub Pages](https://pages.github.com/).

#### Others

There are a number of other tool types available to use in the post-development stage, including [Code Climate](https://codeclimate.com/) for gathering code quality metrics, the [webhint browser extension](https://webhint.io/docs/user-guide/extensions/extension-browser/) for performing runtime analysis of cross-browser compatibility and other checks, [GitHub bots](https://probot.github.io/) for providing more powerful GitHub functionality, [Updown](https://updown.io/) for providing app uptime monitoring, and so many more!