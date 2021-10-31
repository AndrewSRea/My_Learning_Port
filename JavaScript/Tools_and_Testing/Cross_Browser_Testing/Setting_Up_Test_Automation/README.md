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