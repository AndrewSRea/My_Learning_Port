# Introduction to automated testing

Manually running tests on several browsers and devices, several times a day, can get tedious, and time-consuming. To handle this efficiently, you should become familiar with automation tools. In this article, we look at what is available, how to use task runners, and how to use the basics of commercial browser test automation apps such as LambdaTest, Sauce Labs, BrowserStack, and TestingBot.

## Automation makes things easy

Throughout this module, we have detailed loads of different ways in which you can test your websites and apps, and explained the sort of scope your cross-browser testing efforts should have in terms of what browsers to test, accessibility considerations, and more. Sounds like a lot of work, doesn't it?

We agree -- testing all the things we've looked at in previous articles manually can be a real pain. Fortunately, there are tools to help us automate some of this pain away. There are two main ways in which we can automate the tests we've been talking about in this module:

1. Use a task runner such as [Grunt](https://gruntjs.com/) or [Gulp](https://gulpjs.com/), or [npm scripts](https://docs.npmjs.com/cli/v7/using-npm/scripts) to run tests and clean up code during your build process. This is a great way to perform tasks like linting and minifying code, adding in CSS prefixes or transpiling nascent JavaScript features for maximum cross-browser reach, and so on.
2. Use a browser automation system like [Selenium](https://www.selenium.dev/) to run specific tests on installed browsers and return results, alerting you to failures in browsers as they crop up. Commercial cross-browser testing apps like [LambdaTest](https://www.lambdatest.com/), [Sauce Labs](https://saucelabs.com/), [BrowserStack](https://www.browserstack.com/), and [TestingBot](https://testingbot.com/) are based on Selenium, but allow you to access their set up remotely using a simple interface, saving you the hassle of setting up your own testing system.

We will look at how to set up your own Selenium-based testing system in the next article. In this article, we'll look at how to set up a task runner, and use the basic functionality of commercial systems like the ones mentioned above.

<hr>

**Note**: The above two categories are not mutually exclusive. It is possible to set up a task runner to access a service like Suace Labs, or LambdaTest via an API, run cross browser tests, and return results. We will look at this below as well.

<hr>

## Using a task runner to automate testing tools

As we said above, you can drastically speed up common tasks such as linting and minifying code by using a task runner to run everything you need to run automatically at a certain point in your build process. For example, this could be every time you save a file, or at some other point. Inside this section, we'll look at how to automate task running with Node and Gulp, a beginner-friendly option.

### Setting up Node and npm

Most tools these days are based on [Node.js](https://developer.mozilla.org/en-US/docs/Glossary/Node.js), so you'll need to install it from [nodejs.org](https://nodejs.org/en/):

1. Download the installer for your system from the above site. (If you already have Node and npm installed, jump to point 4.)

2. Install it like you would any other program. ote that Node comes with [Node Package Manager](https://www.npmjs.com/) (npm), which allows you to easily install packages, share your own packages with others, and run useful scripts on your projects.

3. Once the install completes, test that node is installed by typing the following into the terminal, which returns the installed versions of Node and npm:
```
node -v
npm -v
```

4. If you've got Node/npm already installed, you should update them to their latest versions. To update Node, the most reliable way is to download and install an updated installer package from their website (see link above). To update npm, use the following command in your terminal:
```
npm install npm@latest -g
```

<hr>

**Note**: If the above command fails with permissions errors, [Fixing npm permissions](https://docs.npmjs.com/resolving-eacces-permissions-errors-when-installing-packages-globally) should sort you out.

<hr>

To start using Node/npm-based packages on your projects, you need to set up your project directories as npm projects. This is easy to do.

For example, let's first create a test directory to allow us to play without fear of breaking anything.

1. Create a new directory somewhere sensible using your file manager UI, or on a command line, by navigating to the location you want and running the following command:
```
mkdir node-test
```

2. To make this directory an npm project, you just need to go inside your test directory and initialize it, with the following:
```
cd node-test
npm init
```

3. This second command will ask you many questions to find out the information required to set up the project. You can just select the defaults for now.

4. Once all the questions have been asked, it will ask you if the information entered is OK. Type `yes` and press Enter/Return and npm will generate a `package.json` file in your directory.

This file is basically a config file for the project. You can customize it later but for now, it will look something like this:
```
{
    "name": "node-test",
    "version": "1.0.0",
    "description": "Test for npm projects",
    "main": "index.js",
    "scripts": {
        "test": "test"
    },
    "author": "Chris Mills",
    "license": "MIT"
}
```
With this, you are ready to move on.