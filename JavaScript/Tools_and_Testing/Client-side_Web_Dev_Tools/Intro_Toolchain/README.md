# Introducing a complete toolchain

In the final couple of articles in the series, we will solidify your toolin knowledge by walking you through the process of building up a sample case study toolchain. We''l go all the way from setting up a sensible development environment and putting transformation tools in place to actullay deploying your app on Netlify. In this article, we'll introduce the case study, set up our development environment, and set up our code transformation tools.

There really are unlimited combinations of tools and ways to use them, and what you see in this article and the next is only *one* way that the featured tools can be used for a project.

<hr>

**Note**: It's also worth repeating that not all of these tools need to be run on the command line. Many of today's code editors (such as VS Code and Atom) have integration support for a *lot* of tools via plugins.

<hr>

## Introducing our case study

The toolchain that we are creating in this article will be used to build and deploy a mini site that lists data (taken from one of [NASA's open APIs](https://api.nasa.gov/)) concerning potentially hazardous space objects that threaten our existence on Earth! It looks like this:

![Image of a website created using external package dependencies](https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/Understanding_client-side_tools/Introducing_complete_toolchain/will-it-miss-screenshot.png)

You can see a live version of the site at [near-misses.netlify.com](https://near-misses.netlify.app/).

## Tools used in our toolchain

In this article, we're going to use the following tools and features:

* [JSX](https://reactjs.org/docs/introducing-jsx.html), a [React](https://reactjs.org/)-related set of syntax extensions that allow you to do things like defining component structures inside JavaScript. You won't need to know React to follow this tutorial, but we've included this to give you an idea of how a non-native web language could be integrated into a toolchain.
* The latest built-in JavaScript features (at time of writing), such as [`import`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import).
* Useful development tools such as [Prettier](https://prettier.io/) for formatting and [eslint](https://eslint.org/) for linting.
* [PostCSS](https://postcss.org/) to provide CSS nesting capabilities.
* [Parcel](https://parceljs.org/) to build and minify our code, and to write a bunch of configuration file content automatically for us.
* [GitHub](https://github.com/AndrewSRea/My_Learning_Port/tree/main/JavaScript/Tools_and_Testing/Git_and_GitHub#git-and-github) to manage our source code control.
* [Netlify](https://www.netlify.com/) to automate our deployment process.

You may not be familiar with all of the above features and tools or what they are doing, but don't panic -- we'll explain each part as we move through this article.

## Toolchains and their inherent complexity

As with any chain, the more links you have in your toolchain, the more complex and potentially brittle it is -- for example, it might be more complex to configure, and easier to break. Conversely, the fewer links, the more resilient the toolchain is likely to be.

All web projects will be different, and you need to consider what parts of your toolchain are necessary and consider each part carefully.

The smallest toolchain is one that has no links at all. You would handcode the HTML, use "vanilla JavaScript" (meaning no frameworks or intermediary languages), and manually upload it all to a server for hosting.

However, more complicated software requirements will likely benefit from the usage of tools to help simplify the development process. In addition, you should include tests before your deploy your production server to ensure your software works as intended -- this already sounds like a neceaary toolchain.

For our sample project, we'll be using a toolchain specifically designed to aid our software development and support the technical choices made during the software design phase. We will, however, be avoiding any superfluous tooling, with the aim of keeeping complexity to a minimum.

For example, we *could* have included a tool to minimize our SVG file sizes during build. However, this project has only 4 SVG images, which were [manually minified using SVGO](https://www.npmjs.com/package/svgo) before adding them to the project.