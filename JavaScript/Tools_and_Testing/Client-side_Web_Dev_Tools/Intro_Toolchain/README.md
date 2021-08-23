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

## A couple of prerequisites

Besides the tools we're going to install that contribute to our toolchain, we mentioned two web services in the above list of tools. Let's take this opportunity to make sure we are set up with them before we continue. You will need to create accounts with each of GitHub and Netlify if you wish to complete this tutorial.

* As mentioned previously, GitHub is a source code repository service that adds community features such as issue tracking, following project releases and much more. In the next chapter, we will push to a GitHub repository, which will cause a cascade effect that (should) deploy all the software to a home on the web.
* Netlify is a hosting service for static websites (that is, websites that entirely consist of files that do not change in real time), which lets us deploy multiple times a day and freely hosts static sites of all kinds. Netlify is what provides the "home on the web" mentioned above -- free hosting for us to deploy our test app to.

Once you've signed up for [GitHub](https://github.com/) (click the *Sign Up* link on the homepage if you don't already have an account, and follow the instructions), you can use your GitHub account for authentication on [Netlify](https://www.netlify.com/) (click *Sign Up*, then choose *GitHub* from the "Sign up with one of the following" list), so technically you only need to create one new account.

Later on, you'll need to connect your Netlify account to your GitHub repository to deploy this project; we'll see how to do that in the next chapter.

## Three stages of tools

As we talked about in [Chapter 1](https://github.com/AndrewSRea/My_Learning_Port/tree/main/JavaScript/Tools_and_Testing/Client-side_Web_Dev_Tools/Client-side_Tooling#client-side-tooling-overview), the toolchain will be structured into the following phases:

* **Safety net**: Making the software development experience stable and more efficient. We might also refer to this as our development environment.
* **Transformation**: Tooling that allows us to use the latest features of a language (e.g. JavaScript) or another language entirely (e.g. JSX or TypeScript) in our development process, and then transforms our code so that the production version still runs on a wide variety of browsers, modern and older.
* **Post development**: Tooling that comes into play after you are done with the body of development to ensure that your software makes it to the web and continues to run. In this case study, we'll look at adding tests to your code, and deploying your app using Netlify so it is available for all the web to see.

Let's start working on these, beginning with our development environment.

## Creating a development environment

This part of the toolchain is sometimes seen to be delaying the actual work, and it can be very easy to fall into a "rabbit hole" of tooling where you spend a lot of time trying to get the environment "just right".

But you can look at this in the same way as setting up your physical work environment. The chair needs to be comfortable, and set up in a good position to help with your posture. You need power, WiFi, and USB ports! There might be important decorations or music that help with your mental state -- these are all important to doing your best work possible, and they should also only need to be set up once, if done properly.

In the same way, setting up your development environment, if done well, needs doing only once and should be reusable in many future projects. You will probably want to review this part of the toolchain semi-regularly and consider if there's any upgrades or changes you should introduce, but this shouldn't be required too often.

Your toolchain will depend on your own needs, but for this example of a (possible) complete toolchain, the tools that will be installed up front will be:

* Library installation tools -- for adding dependencies.
* Code revision control.
* Code tidying tools -- for tidying JavaScript, CSS, and HTML.
* Code linting tools -- for linting our code.

### Library installation tools

We'll use npm to install our tools, whicn you first met in Chapter 2. You should have Node.js and npm installed already, but if not, [refer back to that section](https://github.com/AndrewSRea/My_Learning_Port/tree/main/JavaScript/Tools_and_Testing/Client-side_Web_Dev_Tools/Command_Line#adding-powerups).

<hr>

**Note**: Though it's not clear from the install process, installing npm also installs a complimentary tool called npx. We will use npx later on in this chapter to help run tools that are installed as local dependencies to the project.

<hr>

npm will be used to install subsequent parts of our toolchain. First of all, however, we'll install git to help with revision control.

### Code revision control

It's possible you've heard of "git" before. [Git](https://git-scm.com/) is currently the most popular source code revision control tool available to developers -- revision control provides many advantages, such as a way to backup your work in a remote place, and a mechanism to work in a team on the same project without fear of overwriting each other's code.

It might be obvious to some, but it bears repeating: Git is not the same thing as GitHub. Git is the revision control tool, whereas [GitHub](https://github.com/) is an online store for git repositories (plus a number of useful tools for working with them). Note that, although we're using GitHub in this chapter, there are several alternatives including [GitLab](https://about.gitlab.com/) and [Bitbucket](https://www.atlassian.com/software/bitbucket), and you could even host your own git repositories.

Using revision control in your projects and including it as part of the toolchain will help manage the evolution of your code. It offers a way to "commit" blocks of work as you progress, along with comments such as "X new feature implemented", or "Bug Z now fixed due to Y changes".

Revision control can also allow you to *branch* out your project code, creating a separate version and try out new functionality on, without those changes affecting your original code.

Finally, it can help you undo changes or revert your code back to a time "when it was working" if a mistake has been introduced somewhere and you are having trouble fixing it -- something all developers need to do once in a while!

Git can be [downloaded and installed via the git-scm website](https://git-scm.com/downloads) -- download the relevant installer for your system, run it, and follow the on-screen prompts. This is all you need to do for now.

You can interact with git in a number of ways, from using the command line to issue commands, to using a [git GUI app](https://git-scm.com/downloads/guis) to issue the same commands by pushing buttons, or even from directly inside your code editor, as seen in the Visual Studio Code example below:

![An image of a git menu in Visual Studio Code](https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/Understanding_client-side_tools/Introducing_complete_toolchain/vscode-git.png)

Anyway, installing git is all we need to do for now. Let's move on.