# Setting up a Node development environment

Now that you know what [Express](https://github.com/AndrewSRea/My_Learning_Port/tree/main/JavaScript/Server-Side_Website_Programming/Express_Web_Framework/Express_Node_Intro#introducing-express) is for, we'll show you how to set up and test a Node/Express development environment on Windows, or Linux (Ubuntu), or macOS. For any of those operating systems, this article provides what you need to start developing Express apps.

## Express developmemnt environment overview


*Node* and *Express* make it very easy to set up your computer in order to start developing web applications. This section provides an overview of what tools are needed, explains some of the simplest methods for installing Node (and Express) on Ubuntu, macOS, and Windows, and shows how you can test your installation.

### What is the Express development environment?

The *Express* development environment includes an installation of *Nodejs*, the *NPM package manager*, and (optionally) the *Express Application Generator* on your local computer.

*Node* and the *NPM* package manager are installed together from prepared binary packages, installers, operating system package managers or from source (as shown in the following sections). *Express* is then installed by NPM as a dependency of your individual *Express* web applications (along with other libraries like template engines, database drivers, authentication middleware, middleware to serve static files, etc.)

*NPM* can also be used to (globally) install the *Express Application Generator*, a handy tool for creating skeleton *Express* web apps that follow the [MVC pattern](https://developer.mozilla.org/en-US/docs/Glossary/MVC). The application generator is optional because you don't *need* to use this tool to create apps that use Express, or construct Express apps that have the same architectural layout or dependencies. We'll be using it, though, because it makes getting started a lot easier, and promotes a modular application structure.

<hr>

**Note**: Unlike some other web frameworks, the development environment does not include a separate development web server. In *Node/Express*, a web application creates and runs its own web server!

<hr>

There are other peripheral tools that are part of a typical development environment, including [text editors](https://developer.mozilla.org/en-US/docs/Learn/Common_questions/Available_text_editors) or IDEs for editing code, and source control management tools like [Git](https://git-scm.com/) for safely managing different versions of your code. We are assuming that you've already got these sorts of tools installed (in particular, a text editor).

### What operating systems are supported?

*Node* can be run on Windows, macOS, many flavors of Linux, Docker, etc. There is a full list on the Nodejs [Downloads](https://nodejs.org/en/download/) page. Almost any personal computer should have the necessary performance to run Node during development. *Express* is run in a *Node* environment, and hence can run on any platform that runs *Node*.

In this article, we provide setup instructions for Windows, macOS, and Ubuntu Linux.

### What version of Node/Express should you use?

There are many [releases of Node](https://nodejs.org/en/blog/release/) -- newer releases contain bug fixes, support for more recent versions of ECMAScript (JavaScript) standards, and improvements to the Node APIs.

Generally, you should use the most recent *LTS (long-term supported)* release as this will be more stable than the "current" release while still having relatively recent features (and is still being actively maintained). You should use the *Current* release if you need a feature that is not present in the LTS version.

For *Express*, you should always use the latest version.

### What about databases and other dependencies?

Other dependencies, such as database drivers, template engines, authentication engines, etc., are part of the application, and are imported into the application environment using the NPM package manager. We'll discuss them in later app-specific articles.

## Installing Node

In order to use *Express*, you will first have to install *Nodejs* and the [Node Package Manager (NPM)](https://docs.npmjs.com/) on your operating system. The following sections explain the easiest way to install the Long Term Supported (LTS) version of Nodejs on Ubuntu Linux 20.04, macOS, and Windows 10.

<hr>

**Note**: The sections below show the easiest way to install *Node* and *NPM* on our target OS platforms. If you're using another OS or just want to see some of the other approaches for the current platforms, then see [Installing Node.js via package manager](https://nodejs.org/en/download/package-manager/) (nodejs.org).

<hr>

### macOS and Windows

Installing *Node* and *NPM* on Windows and macOS is straightforward because you can just use the provided installer:

1. Download the required installer:
    1. Go to [https://nodejs.org/en/](https://nodejs.org/en/).
    2. Select the button to download the LTS build that is "Recommended for most users".
2. Install Node by double-clicking on the downloaded file and following the installation prompts.

### Ubuntu 20.04

The easiest way to install the most recent LTS version of Node 12.x is to use the [package manager](https://nodejs.org/en/download/package-manager/#debian-and-ubuntu-based-linux-distributions) to get it from the Ubuntu *binary distributions* repository. This can be done by running the following two commands on your terminal:
```
curl -sL https://deb.nodesource.com/setup_12.x | sudo -E bash -
sudo apt-get install -y nodejs
```

<hr>

:warning: **Warning**: Don't install directly from the normal Ubuntu repositories because they contain very old versions of node.

<hr>