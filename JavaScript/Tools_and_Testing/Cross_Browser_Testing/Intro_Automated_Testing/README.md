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

...