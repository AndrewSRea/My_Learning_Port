# Setting up your own test automation environment

In this article, we will teach you how to install your own automation environment and run your own tests using Selenium/WebDriver and a testing library such as selenium-webdriver for Node. We will also look at how to integrate your local testing environment with commercial tools like the ones discussed in the previous article.

## Selenium

[Selenium](https://www.selenium.dev/) is the most popular browser automation tool. There are other ways, but the best way to use Selenium is via WebDriver, a powerful API that builds on top of Selenium and makes calls to a browser to automate it, carrying out actions such as "open this web page", "move over this element on the page", "click this link", "see whether this link opens this URL", etc. This is ideal for running automated tests.

How you install and use WebDriver depends on what programming environment you want to use to write and run your tests. Most popular environments have available a package or framework that will install WebDriver and the bindings required to communicate with WebDriver using this language -- for example, Java, C#, Ruby, Python, JavaScript (Node), etc. See [Setting Up a Selenium-WebDriver Project](https://www.selenium.dev/documentation/#setting-up-a-selenium-webdriver-project) for more details of Selenium setups for different languages.

Different browsers require different drivers to allow WebDriver to communicate with and control them. See [Platforms Supported by Selenium](https://www.selenium.dev/downloads/) for more information on where to get browser drivers from, etc.

We will cover writing and running Selenium tests using Node.js, as it is quick and easy to get started, and a more familiar environment for front end devs.

<hr>

**Note**: If you want to find out how to use WebDriver with other server-side environments, also check out [Platforms Supported by Selenium](https://www.selenium.dev/downloads/) for some useful links.

<hr>

:warning: **Warning**: Instead of following the instructions below, I would suggest following the instructions laid out in Selenium's own website, in the [Setting Up a Selenium-WebDriver Project](https://www.selenium.dev/documentation/#setting-up-a-selenium-webdriver-project) documentation.

<hr>

### Setting up Selenium in Node

1. To start with, set up a new npm project, as discussed in [Setting up Node and npm](https://github.com/AndrewSRea/My_Learning_Port/tree/main/JavaScript/Tools_and_Testing/Cross_Browser_Testing/Intro_Automated_Testing#setting-up-node-and-npm) in the last chapter. Call it something different, like `selenium-test`.

2. Next, we need to install a framework to allow us to work with Selenium from inside Node. We are going to choose Selenium's official [selenium-webdriver](https://www.npmjs.com/package/selenium-webdriver), as the documentation seems fairly up-to-date and it is well-maintained. If you want different options, [webdriver.io](https://webdriver.io/) and [nightwatch.js](https://nightwatchjs.org/) are also good choices. To install selenium-webdriver, run the following command, making sure you are inside your project folder:
```
npm install selenium-webdriver
```

<hr>

**Note**: It is still a good idea to follow these steps even if you previously installed selenium-webdriver and downloaded the browser drivers. You should make sure that everything is up-to-date.

<hr>

Next, you need to download the relevant drivers to allow WEbDriver to control the browsers you want to test. You can find details of where to get them from the [selenium-webdriver](https://www.npmjs.com/package/selenium-webdriver) page (see the table in the first section). Obviously, some of the browsers are OS-specific, but we're going to stick with Firefox and Chrome, as they are available across all the main OSes.

1. Download the latest [GeckoDriver](https://github.com/mozilla/geckodriver/releases/) (for Firefox) and [ChromeDriver](https://chromedriver.storage.googleapis.com/index.html) drivers.
2. Unpack them into somewhere fairly easy to navigate toward, like the root of your home user directory.
3. Add the `chromedriver` and `geckodriver` driver's location to your system `PATH` variable. This should be an absolute path from the root of your hard disk, to the directory containing the drivers. For example, if we were using a macOS machine, and our user name was "bob", and we put our drivers in the root of our home folder, the path would be `/Users/bob`.

<hr>

**Note**: Just to reiterate, the path you add to `PATH` needs to be the path to the directory containing the drivers, not the paths to the drivers themselves! This is a common mistake.

<hr>

To set your `PATH` variable on a macOS system and on most Linux systems:

1. If you're not already using the `bash` shell (for example, on macOS systems, the default is the `zsh` shell, not `bash`), switch to the `bash` shell:
```
exec bash
```

2. Open your `.bash_profile` (or `.bashrc`) file. (If you can't see hidden files, you'll need to display them. See [Show/Hide hidden files in Mac OS X](https://ianlunn.co.uk/articles/quickly-showhide-hidden-files-mac-os-x-mavericks) or [Show hidden folders in Ubuntu](https://askubuntu.com/questions/470837/how-to-show-hidden-folders-in-file-manager-nautilus-on-ubuntu).)

3. Paste the following into the bottom of your file (updating the path as it actually is on your machine):
```
#Add WebDriver browser drivers to PATH

export PATH=$PATH:/Users/bob
```

4. Save and close this file, then restart your Terminal/command prompt to reapply your Bash configuration.

5. Check that your new paths are in the `PATH` variable by entering the following into your terminal:
```
echo $PATH
```

6. You should see it printed out in the terminal.

To set your `PATH` variable on Windows, follow the instructions at [How can I add a new folder to my system path?](https://www.itprotoday.com/)

OK, let's try a quick test to make sure evertyhing is working.

1. Create a new file inside your project directory called `google_test.js`.

2. Give it the following contents, and then save it:
```
const webdriver = require('selenium-webdriver'),
    By = webdriver.By,
    until = webdriver.until;

const driver = new webdriver.Builder()
    .forBrowser('firefox')
    .build();

driver.get('http://www.google.com');

driver.findElement(By.name('q')).sendKeys('webdriver');

driver.sleep(1000).then(function() {
    driver.findElement(By.name('q')).sendKeys(webdriver.Key.TAB);
});

driver.findElement(By.name('btnK')).click();

driver.sleep(2000).then(function() {
    driver.getTitle().then(function(title) {
        if(title === 'webdriver - Google Search') {
            console.log('Test passed');
        } else {
            console.log('Test failed');
        }
        driver.quit();
    });
});
```

3. In terminal, make sure you are inside your project folder, then enter the following command:
```
node google_test
```

You should see an instance of Firefox automatically open up! Google should automatically be loaded in a tab, "webdriver" should be entered in the search box, and the search button will be clicked. WebDriver will then wait for 2 seconds. The document title is then accessed, and if it is "webdriver - Google Search", we will return a message to claim the test is passed. WebDriver will then close down the Firefox instance and stop.

## Tesing in multiple browsers at once

There is also nothing to stop you running the test on multiple browsers simultaneously. Let's try this!

1. Create another new file inside your project directory called `google_test_multiple.js`. You can feel free to change the references to some of the other browsers we added, remove them, etc., depending on what browsers you have available to test on your operating system. You'll need to make sure you have the right browser drivers set up on your system. In terms of what string to use inside the `.forBrowser()` method for other browsers, see the [Browser enum](https://www.selenium.dev/selenium/docs/api/javascript/module/selenium-webdriver/index_exports_Browser.html) reference page.

2. Give it the following contents, then save it:
```
const webdriver = require('selenium-webdriver'),
    By = webdriver.By,
    until = webdriver.until;

let driver_fx = new webdriver.Builder()
    .forBrowser('firefox')
    .build();

let driver_chr = new webdriver.Builder()
    .forBrowser('chrome')
    .build();

searchTest(driver_fx);
searchTest(driver_chr);

function searchTest(driver) {
    driver.get('http://ww.google.com');
    driver.findElement(By.name('q')).sendKeys('webdriver');

    driver.sleep(1000).then(function() {
        driver.findElement(By.name('q')).sendKeys(webdriver.Key.TAB);
    });

    driver.findElement(By.name('btnK')).click();

    driver.sleep(2000).then(function() {
        driver.getTitle().then(function(title) {
            if(title === 'webdriver - Google Search') {
                console.log('Test passed');
            } else {
                console.log('Test failed');
            }
            driver.quit();
        });
    });

}
```

3. In terminal, make sure you are inside your project folder, then enter the following command:
```
node google_test_multiple
```

4. If you are using a Mac and do decide to test Safari, you might get an error message along the lines of "Could not create a session: You must enable the 'Allow Remote Automation' option in Safari's Develop menu to control Safari via WebDriver." If you get this, follow the given instruction and try again.

So here we've done the test as before, except that this time we've wrapped it inside a function, `searchTest()`. We've created new browser instances for multiple browsers, then passed each one to the function so the test is performed on all three browsers!

Fun, huh? Let's move on, look at the basics of WebDriver syntax in a bit more detail.

## WebDriver syntax crash course

Let's have a look at a few key features of the webdriver syntax. For more complete details, you should consult the [selenium-webdriver JavaScript API reference](https://www.selenium.dev/selenium/docs/api/javascript/index.html) for a detailed reference, and the Selenium main documentation's [Selenium WebDriver](https://www.selenium.dev/documentation/) and [WebDriver: Advanced Usage](https://www.selenium.dev/documentation/webdriver/) pages, which contain multiple examples to learn from written in different languages.

### Starting a new test

To start up a new test, you need to include the `selenium-webdriver` module like this:
```
const webdriver = require('selenium-webdriver'),
    By = webdriver.By,
    until = webdriver.until;
```
Next, you need to create a new instance of a driver, using the `new webdriver.Builder()` constructor. This needs to have the `forBrowser()` method chained onto it to specify what browser you want to test with this builder, and the `build()` method to actually build it. (See the [Builder class reference](https://www.selenium.dev/selenium/docs/api/javascript/module/selenium-webdriver/index_exports_Builder.html) for detailed information on these features.)
```
let driver = new webdriver.Builder()
    .forBrowser('firefox')
    .build();
```
Note that it is possible to set specific configuration options for browsers to be tested. For example, you can set a specific version and OS to test in the `forBrowser()` method:
```
let driver = new webdriver.Builder()
    .forBrowser('firefox', '46', 'MAC')
    .build();
```
You could also set these options using an environment variable. For example:
```
SELENIUM_BROWSER=firefox:46:MAC
```
Let's create a new test to allow us to explore this code as we talk about it. Inside your selenium test project directory, create a new file called `quick_test.js`, and add the following code to it:
```
var webdriver = require('selenium-webdriver'),
    By = webdriver.By,
    until = webdriver.until;

var driver = new webdriver.Builder()
    .forBrowser('firefox')
    .build();
```

### Getting the document you want to test

To load the page you actually want to test, you use the `get()` method of the driver instance you created earlier. For example:
```
driver.get('http://www.google.com');
```

<hr>

**Note**: See the [WebDriver class reference](https://www.selenium.dev/selenium/docs/api/javascript/module/selenium-webdriver/lib/webdriver_exports_WebDriver.html) for details of the features in this section and the ones below it.

<hr>

You can use any URL to point to your resource, including a `file://` URL to test a local document:
```
driver.get('file://Users/chrismills/git/learning-area/tools-testing/cross-browser-testing/accessibility/fake-dive-buttons.html');
```
or
```
driver.get('http://localhost:8888/fake-div-buttons.html');
```
But it is better to use a remote server location so the code is more flexible. When you start using a remote server to run your tests (see later on), your code will break if you try to use local paths.

Add this line to the bottom of `quick_test.js` now:
```
driver.get('https://mdn.github.io/learning-area/tools-testing/cross-browser-testing/accessibility/native-keyboard-accessibility.html');
```

### Interacting with the document

Now we've got a document to test, we need to interact with it in some way, which usually involves first selecting a specific element to test seomthing about. You can [select UI elements in many ways](https://www.selenium.dev/documentation/webdriver/locating_elements/) in WebDriver, including by ID, class, element name, etc. The actual selection is done by the `findElement()` method, which accepts as a parameter a selection method. For example, to select an element by ID:
```
const element = driver.findElement(By.id('myElementId'));
```
One of the most useful ways to find an element by CSS: the `By.css()` method allows you to select an element using a CSS selector.

Enter the following at the bottom of your `quick_test.js` code now:
```
const button = driver.findElement(By.css('button:nth-of-type(1)'));
```

### Testing your element

There are many ways to interact with your web documents and elements on them. You can see useful common examples starting at [Getting text values](https://www.selenium.dev/documentation/webdriver/locating_elements/#tips-on-using-selectors) on the WebDriver docs.

If we wanted to get the text inside our button, we could do this:
```
button.getText().then(function(text) {
    console.log('Buttontext is \'' + text + '\'');
});
```
Add the above code snippet to `quick_test.js` now.

Making sure you are inside your project directory, try running the test:
```
node quick_test.js
```
You should see the button's text label reported inside the console.

Let's do something a bit more useful. Delete the previous code entry, then add this line at the bottom instead:
```
button.click();
```
Try running your test again. The button will be clicked, and the `alert()` popup should appear. At least, we know the button is working!

You can interact with the popup, too. Add the following to the bottom of the code, and try testing it again:
```
let alert = driver.switchTo().alert();

alert.getText().then(function(text) {
    console.log('Alert text is \'' + text + '\'');
});

alert.accept();
```
Next, let's try entering some text into one of the form elements. Add the following code and try running your test again:
```
const input = driver.findElement(By.id('name'));
input.sendKeys('Filling in my form');
```
You can submit key presses that can't be represented by normal characters using properties of the `webdriver.Key` object. For example, above we used this construct to tab out of the form input before submitting it:
```
driver.sleep(1000).then(function() {
    driver.findElement(By.name('q')).sendKeys(webdriver.Key.TAB);
});
```

### Waiting for something to complete

There are times where you'll want to make WebDriver wait for something to complete before carrying on. For example, if you load a new page, you'll want to wait for the page's DOM to finish loading before you try to interact with any of its elements, otherwise the test will likely fail.

In our `google_test.js` test, for example, we included this block:
```
driver.sleep(2000).then(function() {
    driver.getTitle().then(function(title) {
        if(title === 'webdriver - Google Search') {
            console.log('Test passed');
        } else {
            console.log('Test failed');
        }
    });
});
```
The `sleep()` method accepts a value that specifies the time to wait in milliseconds. The method returns a promise that resolves at the end of that time, at which point the code inside the `then()` executes. In this case, we get the title of the current page with the `getTitle()` method, then return a pass or fail message depending on what its value is.

We could add a `sleep()` method to our `quick_test.js` test, too. Try wrapping your last line of code in a block like this:
```
driver.sleep(2000).then(function() {
    input.sendKeys('Filling in my form');
    input.getAttribute("value").then(function(value) {
        if(value !== '') {
            console.log('Form input editable');
        }
    });
});
```
WebDriver will now wait for 2 seconds before filling in the form field. We then test whether its value got filled in (i.e. is not empty) by using `getAttribute()` to retrieve its `value` attribute value, and print a message to the console if it is not empty.

<hr>

**Note**: There is also a method called [`wait()`](https://www.selenium.dev/selenium/docs/api/javascript/module/selenium-webdriver/lib/webdriver_exports_WebDriver.html#wait), which repeatedly tests a condition for a certain length of time, and then carries on executing the code. This also makes use of the [`until` library](https://www.selenium.dev/selenium/docs/api/javascript/module/selenium-webdriver/lib/until.html), which defines common conditions to use along with `wait()`.

<hr>

### Shutting down drivers after use

After you've finished running a test, you should shut down any driver instances you've opened, to make sure that you don't end up with loads of rogue browser instances open on your machine! This is done using the `quit()` method. Call this on your driver instance when you are finished with it. Add this line to the bottom of your `quick_test.js` test now:
```
driver.quit();
```
When you run it, you should now see the test execute and the browser instance shut down again after the test is complete. This is useful for not cluttering up your computer with loads of browser instances, especially if you have so many that it is causing the computer to slow down.

## Test best practices

There has been a lot written about best practices for writing tests. You can find some good background information at [Test Design Considerations](https://www.selenium.dev/documentation/guidelines/). In general, you should make sure that your tests are:

1. Using good locator strategies: When you are [Interacting with the document](https://github.com/AndrewSRea/My_Learning_Port/tree/main/JavaScript/Tools_and_Testing/Cross_Browser_Testing/Setting_Up_Test_Automation#interacting-with-the-document), make sure that you use locators and page objects that are unlikely to change. If you have a testable element that you want to perform a test on, make sure that it has a stable ID, or position on the page that can be selected using a CSS selector, which isn't going to just change with the next site iteration. You want to make your tests as non-brittle as possible, i.e. they won't just break when something changes.
2. Write atomic tests: Each test should test one thing only, making it easy to keep track of what test file is testing which criterion. As an example, the `google_test.js` test we looked at above is pretty good, as it just tests a single thing: whether the title of a search results page is set correctly. We could work on giving it a better name so it is easier to work out what it does if we add more google tests. Perhaps `results_page_title_set_correctly.js` would be slightly better?
3. Write autonomous tests: Each test should work on its own, and not depend on other tests to work.

In addition, we should mention test results/reporting. We've been reporting results in our above examples using simple `console.log()` statements, but this is all done in JavaScript, so you can use whatever test running and reporting system you want, be it [Mocha](https://mochajs.org/), [Chai](https://www.chaijs.com/), or some other tool.

1. For example, try making a local copy of our [`mocha_test.js`](https://github.com/mdn/learning-area/blob/master/tools-testing/cross-browser-testing/selenium/mocha_test.js) example inside your project directory. Put it inside a subfolder called `test`. This example uses a long chain of promises to run all the steps required in our test. The promise-based methods WebDriver uses need to resolve for it to work properly.

2. Install the mocha test harness by running the following command inside your project directory:
```
npm install --save-dev mocha
```

3. You can now run the test (and any others you put inside your `test` directory) using the following command:
```
npx mocha --no-timeouts
```

4. You should include the `--no-timeouts` flag to make sure your tests don't end up failing because of Mocha's arbitrary timeout (which is 3 seconds).

<hr>

**Note**: [saucelabs-sample-test-frameworks](https://github.com/saucelabs-sample-test-frameworks) contains several useful examples showing how to set up different combinations of test/assertion tools.

<hr>

















cd JavaScript/Tools_and_Testing/Cross_Browser_Testing/Setting_Up_Test_Automation

This? https://artoftesting.com/selenium-tutorial

Or search "selenium-webdriver advanced usage". (Or "selenium-webdriver" tutorial?)