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

### Setting up Gulp automation

Let's look at setting up Gulp and using it to automate some testing tools.

1. To begin with, create a test npm project using the procedure detailed at the bottom of the previous section.

2. Next, you'll need some sample HTML, CSS, and JavaScript content to test your system on. Make copies of our sample [index.html](), [main.js](), and [style.css]() files in a subfolder with the name `src` inside your project folder. You can try your own test content if you like, but bear in mind that such tools won't work on internal JS/CSS -- you need external files.

3. First, install Gulp globally (meaning, it will be available across all projects) using the following command:
```
npm install --global gulp-cli
```

4. Next, run the following command inside your npm project directory root to set up gulp as a dependency of your project:
```
npm install --save-dev gulp
```

5. Now create a new file inside your project directory called `gulpfile.js`. This is the file that will run all our tasks. Inside this file, put the following:
```
const gulp = require('gulp');

exports.default = function(cb) {
    console.log('Gulp running');
    cb();
};
```
This requires the `gulp` module we installed earlier, and then exports a default task that does nothing except for printing a message to the terminal. This is useful for letting us know that Gulp is working. Each gulp task is exported in the same basic format -- `exports.taskName = taskFunction`. Each function takes one parameter -- a callback to run when the task is completed.

6. You can run your gulp's default task with the following command -- try this now:
```
gulp
```

### Adding some real tasks to Gulp

To add some real tasks to Gulp, we need to think about what we want to do. A reasonable set of basic functionalities to run on our project is as follows:

* html-tidy, css-lint, and js-hint to lint and report/fix common HTML/CSS/JS errors. (See [gulp-htmltidy](https://www.npmjs.com/package/gulp-htmltidy), [gulp-csslint](https://www.npmjs.com/package/gulp-csslint), and [gulp-jshint](https://www.npmjs.com/package/gulp-jshint).)
* Autoprefixer to scan our CSS and add vendor prefixes only where needed. (See [gulp-autoprefixer](https://www.npmjs.com/package/gulp-autoprefixer).)
* babel to transpile any new JavaScript syntax features to traditional syntax that works in older browsers. (See [gulp-babel](https://www.npmjs.com/package/gulp-babel).)

See the links above for full instructions on the different gulp packages we are using.

To use each plugin, you need to first install it via npm, then require any dependencies at the top of the `gulpfile.js` file, then add your test(s) to the bottom of it, and finally export the name of your task to be available via gulp's command.

#### html-tidy

1. In your root directory, install using the following line:
```
npm install --save-dev gulp-htmltidy
```

<hr>

**Note**: `--save-dev` adds the package as a dependency to your project. If you look in your project's `package.json` file, you'll see an entry for it in the `devDependencies` property.

<hr>

2. Add the following dependency to `gulpfile.js`:
```
const htmltidy = require('gulp-htmltidy');
```

3. Add the following test to the bottom of `gulpfile.js`:
```
function html(cb) {
    return gulp.src('src/index.html')
          .pipe(htmltidy())
          .pipe(gulp.dest('build'));
        cb();
}
```

4. Export the html task using:
```
exports.html = html;
```

5. Change the default export to:
```
exports.default = html;
```

Here we are grabbing our development `index.html` file with `gulp.src()`, which allows us to grab a source file to do something with.

We next use the `pipe()` function to pass that source to another command to do something else with. We can chain as many of these together as we want. We first run `htmltidy()` on the source, which goes through and fixes errors in our file. The second `pipe()` function writes the output HTML file to the `build` directory.

Within the `<body>` of the `index.html` file, you may have noticed that we put an empty [`<p>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/p) element. htmltidy has removed this by the time the output file has been created.

#### Autoprefixer and css-lint

1. Install using the following lines:
```
npm install --save-dev gulp-autoprefixer
npm install --save-dev gulp-csslint
```

2. Add the following dependencies to `gulpfile.js`:
```
const autoprefixer = require('gulp-autoprefixer');
const csslint - require('gulp-csslint');
```

3. Add the following test to the bottom of `gulpfile.js`:
```
function css(cb) {
    return gulp.src('src/style.css')
        .pipe(csslint())
        .pipe(csslint.formatter('compact'))
        .pipe(autoprefixer({
            cascade: false
        }))
        .pipe(gulp.dest('build'));
    cb();
}
```

4. Add the following property to `package.json`:
```
"browserslist": [
    "last 5 versions"
]
```

5. Add this line after the const definitions:
```
const { series } = require('gulp');
```

6. Export the css task using:
```
exports.css = css;
```

7. Change the default task to:
```
exports.default = series(html, css);
```

Here we grab our `style.css` file, run csslint on it (which outputs a list of any errors in your CSS to the terminal), then runs it through autoprefixer to add any prefixes needed to make nascent CSS features run in older browsers. At the end of the pipe chain, we output our modified prefixed CSS to the `build` directory. Note that this only works if csslint doesn't find any errors. Try removing a curly brace from your CSS file and rerunning gulp to see what output you get!

#### js-hint and babel

1. Install using the following lines:
```
npm install --save-dev gulp-babel @babel/preset-env
npm install --save-dev @babel/core
npm install jshint gulp-jshint --save-dev
```

2. Add the following dependencies to `gulpfile.js`:
```
const babel = require('gulp-babel');
const jshint = require('gulp-jshint');
```

3. Add the following test to the bottom of `gulpfire.js`:
```
function js(cb) {
    return gulp.src('src/main.js')
        .pipe(jshint())
        .pipe(jshint.reporter('default'))
        .pipe(babel({
            presets: ['@babel/env']
        }))
        .pipe(gulp.dest('build'));
    cb();
}
```

4. Export the JS task using:
```
exports.js = js;
```

5. Change the default task to:
```
exports.default = series(html, css, js);
```

Here we grab our `main.js` file, run `jshint` on it, and output the results to the terminal using `jshint.reporter`. We then pass the file to babel, which converts it to old style syntax and outputs the result into the `build` directory. Our original code included a [fat arrow function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions), which babel has modified into an old style function.

#### Further ideas

Once this is all set up, you can run the `gulp` command inside your project directory, and you should get an output like this:

![Image of a CLI terminal running the "gulp" command](https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/Cross_browser_testing/Automated_testing/gulp-output.png)

You can then try out the files output by your automated tasks by looking at them inside the `build` directory, and loading `build/index.html` in your web browser.

If you get errors, check that you've added all the dependencies and the tests as shown above. Also, try commenting out the HTML/CSS/JavaScript code sections and then rerunning gulp to see if you can isolate what the problem is.

Gulp comes with a `watch()` function that you can use to watch your files and run tests whenever you save a file. For example, try adding the following to the bottom of your `gulpfile.js`:
```
function watch() {
    gulp.watch('src/*.html', html)
    gulp.watch('src/*.css', css)
    gulp.watch('src/*.js', js)
}

exports.watch = watch;
```
Now try entering the `gulp watch` command into your terminal. Gulp will now watch your directory, and run the appropriate tasks whenever you save a change to an HTML, CSS, or JavaScript file.

<hr>

**Note**: The `*` character is a wildcard character. Here we're saying "run these tasks when any files of these types are saved. You could also use wildcards in your main tasks. For example, `gulp.src('src/*.css')` would grab all your CSS files and then run piped tasks on them.

<hr>

There's a lot more you can do with Gulp. The [Gulp plugin directory](https://gulpjs.com/plugins/) has literally thousands of plugins to search through.

### Other task runners

There are many other task runners available. We certainly aren't trying to say that Gulp is the best solution out there, but it works for us and it is fairly accessible to beginners. You could also try using other solutions:

* Grunt works in a very similar way to Gulp, except that it relies on tasks specified in a config file, rather than using written JavaScript. See Grunt's [Getting started](https://gruntjs.com/getting-started) Documentation page for more details.
* You can also run tasks directly using npm scripts located inside your `package.json` file, without needing to install any kind of extra task runner system. This works on the promise that things like Gulp plugins are basically wrappers around command line tools. So, if you can work out how to run the tools using the command line, you can then run them using npm scripts. It is a bit trickier to work with, but can be rewarding for those who are strong with their command line skills. [Why npm scripts?](https://css-tricks.com/why-npm-scripts/) provides a good introduction with a good deal of further information.

## Using commercial testing services to speed up browser testing

Now let's look at commercial third-party browser testing services and what they can do for us.

The basic premise with such applications is that the company that runs each one has a huge server farm that can run many different tests. When you use this service, you provide a URL of the page you want to test along with information, such as what browsers you want it tested in. The app then configures a new VM with the OS and browser you specified, and returns the test results in the form of screenshots, videos, logfiles, text, etc.

You can then step up a gear, using an API to access functionality programmatically, which means that such apps can be combined with task runners, such as your own local Selenium environments and others, to create automated tests.

<hr>

**Note**: There are other commercial browser testing systems available but in this article, we'll focus on LambdaTest, Sauce Labs, and BrowserStack. We're not saying that these are necessarily the best tools available, but they are good ones that are simple for beginners to get up and running with.

<hr>

### LambdaTest

#### Getting started with LambdaTest

1. Let's get started by [signing up on LambdaTest](https://accounts.lambdatest.com/register) for free.
2. Sign in. This should happen automatically after you verify your email address.

<hr>

**Note**: Unlike other cloud-based cross browser testing service providers, LambdaTest offers a freemium account where you get lifetime access to their platform. The only difference between their premium and the freemium plan is on the amount of consumption. For automation testing thorugh their Selenium Grid, LambdaTest offers 60 minutes per month of free testing.

<hr>

#### The basic: Manual tests

Once you sign in to LambdaTest, you will be routed to the LambdaTest Dashboard. The dashboard will provide you details related to how many minutes you have consumed, how many concurrent sessions are running, your total number of tests to date, and more.

1. To start off with manual testing, you need to select the **"Real Time Testing"** tab from the left navigation menu.

![Image of the LambdaTest Dashboard](https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/Cross_browser_testing/Automated_testing/lambdatest-dashboard.png)

2. As you click on the **Real Time Testing**, you will be directed to a screen where you can choose the browser configuration, browser version, oS, and screen resolution with which you want to test your website.

![Image of the LambdaTest "Real Time Testing" navigation menu](https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/Cross_browser_testing/Automated_testing/mark-as-bug-1.png)

3. As you click on the Start button, a loading screen will appear, providing you with a VM (Virtual Machine) based on your configurations. Once loaded, you can perform live, interactive cross-browser testing with a website.

![Image of a LambdaTest Virtual Machine environment](https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/Cross_browser_testing/Automated_testing/mark-as-bug-2.png)

    If you notice an issue with the UI, then you can share it with your colleagues by capturing a screenshot of your VM with the screenshot button. You can also record a video of your test session by hitting the recorder button in your test session.

4. With the in-buil image editor, highlight your screenshot before you push it to your colleagues.

![Image of a highlighted webpage feature in a LambdaTest screenshot](https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/Cross_browser_testing/Automated_testing/mark-as-bug-3.png)

5. Using the Mark as Bug button, you can push bugs to numerous third-party tools such as Jira, Asana, Trello, and more. That way you can log a bug directly from your test session on LambdaTest to your project management instance. Check out all the [third-party LambdaTest integrations](https://www.lambdatest.com/integrations).

<hr>

**Note**: All the video and images captured inside a test session are captured inside the gallery, test logs, and issue tracker at LambdaTest.

<hr>











cd JavaScript/Tools_and_Testing/Cross_Browser_Testing/Intro_Automated_Testing