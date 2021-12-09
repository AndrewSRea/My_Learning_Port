# Express Tutorial Part 2: Creating a skeleton website

This second article in our [Express Tutorial](https://github.com/AndrewSRea/My_Learning_Port/tree/main/JavaScript/Server-Side_Website_Programming/Express_Web_Framework/Express_Tutorial_Local_Library#express-tutorial-the-local-library-website) shows how you can create a "skeleton" website project which you can then go on to populate with site-specific routes, templates/views, and database calls.

## Overview

This article shows how you can create a "skeleton" website using the [Express Application Generator](https://expressjs.com/en/starter/generator.html) tool, which you can then populate with site-specific routes, views/templates, and database calls. In this case, we'll use the tool to create the framework for our [Local Library website](https://github.com/AndrewSRea/My_Learning_Port/tree/main/JavaScript/Server-Side_Website_Programming/Express_Web_Framework/Express_Tutorial_Local_Library#express-tutorial-the-local-library-website), to which we'll later add all the other code needed by the site. The process is extremely simple, requiring only that you invoke the generator on the command line with a new project name, optionally also specifying the site's template engine and CSS generator.

The following sections show you how to call the application generator, and provides a little explanation about the different view/CSS options. We'll also explain how the skeleton website is structured. At the end, we'll show how you can run the website to verify that it works.

<hr>

**Note**: The *Express Application Generator* is not the only generator for Express applications, and the generated project is not the only viable way to structure your files and directories. The generated site does, however, have a modular structure that is easy to extend and understand. For information about a *minimal* Express application, see [Hello world example](https://expressjs.com/en/starter/hello-world.html) (Express docs).

<hr>

**Note**: This tutorial uses the version of *Express* that is defined in the **package.json** created by the *Express Application Generator*. This is not (necessarily) the latest version!

<hr>

## Using the application generator

You should already have installed the generator as part of [setting up a Node development environment](). As a quick reminder, you install the generator tool site-wide using the NPM package manager, as shown:
```
npm install express-generator -g
```
The generator has a number of options, which you can view on the command line using the `--help` (or `-h`) command:
```
> express --help

    Usage: express [options] [dir]

  Options:

        --version        output the version number
    -e, --ejs            add ejs engine support
        --pug            add pug engine support
        --hbs            add handlebars engine support
    -H, --hogan          add hogan.js engine support
    -v, --view <engine>  add view <engine> support (dust|ejs|hbs|hjs|jade|pug|twig|vash) (defaults to jade)
        --no-view        use static html instead of view engine
    -c, --css <engine>   add stylesheet <engine> support (less|stylus|compass|sass) (deafults to plain css)
        --git            add .gitignore
    -f, --force          force on non-empty directory
    -h, --help           output usage information
```
You can specify express to create a project inside the *current* directory using the *Jade* view engine and plain CSS. (If you specify a directory name, then the project will be created in a subfolder with that name.)
```
express
```
You can also choose a view (template) engine using `--view` and/or a CSS generation engine using `--css`.

<hr>

**Note**: The other options for choosing template engines (e.g. `--hogan`, `--ejs`, `--hbs`, etc.) are deprecated. Use `--view` (or `-v`).

<hr>

### What view engine should I use?

The *Express Application Generator* allows you to configure a number of popular view/templating engines, including [EJS](https://www.npmjs.com/package/ejs), [Hbs](https://github.com/pillarjs/hbs), [Pug](https://pugjs.org/api/getting-started.html) (Jade), [Twig](https://www.npmjs.com/package/twig), and [Vash](https://www.npmjs.com/package/vash), although it chooses Jade by default if you don't specify a view option. Express itself can also support a large number of other templating languages [out of the box](https://github.com/expressjs/express/wiki#template-engines).

<hr>

**Note**: If you want to use a template engine that isn't supported by the generator, then see [Using template engines with Express](https://expressjs.com/en/guide/using-template-engines.html) (Express docs) and the documentation for your target view engine.

<hr>

Generally speaking, you should select a templating engine that delivers all the functionality you need and allows you to be productive sooner -- or in other words, in the same way that you choose any other component! Some of the things to consider when comparing template engines:

* Time to productivity -- If your team already has experience with a templating language, then it is likely they will be productive faster using that language. If not, then you should consider the relative learning curve for candidate templating engines.
* Popularity and activity -- Review the popularity of the engine and whether it has an active community. It is important to be able to get support when problems arise throughout the lifetime of the website.
* Style -- Some template engines use specific markup to indicate inserted content within "ordinary" HTML, while others construct the HTML using a different syntax (for example, using indentation and block names).
* Performance/rendering time.
* Features -- You should consider whether the engines you look at have the following features available:
    - Layout inheritance: Allows you to define a base template and then "inherit" just the parts of it that you want to be different for a particular page. This is typically a better approach than building templates by including a number of required components or building a template from scratch each time.
    - "Include" support: Allows you to build up templates by including other templates.
    - Concise variable and loop control syntax.
    - Ability to generate output formats other than HTML (e.g. JSON or XML).
    - Support for asynchronous operations and streaming.
    - Client-side features: If a templating engine can be used on the client, this allows the possibility of having all or most of the rendering done client-side.

<hr>

**Note**: There are many resources on the Internet to help you compare the different options!

<hr>

For this project, we'll use the [Pug](https://pugjs.org/api/getting-started.html) templating engine (this is the recently-renamed Jade engine), as this is one of the most popular Express/JavaScript templating languages and is supported out of the box by the generator.

### What CSS stylesheet engine should I use?

The *Express Application Generator* allows you to create a project that is configured to use the most common CSS stylesheet engines: [LESS](https://lesscss.org/), [SASS](https://sass-lang.com/), [Compass](http://compass-style.org/), or [Stylus](https://stylus-lang.com/).

<hr>

**Note**: CSS has some limitations that make certain tasks difficult. CSS stylesheet engines allow you to use more powerful syntax for defining your CSS and then compile the definition into plain-old CSS for browsers to use.

<hr>

As with templating engines, you should use the stylesheet engine that will allow your team to be most productive. For this project, we'll use vanilla CSS (the default) as our CSS requirements are not sufficiently complicated to justify using anything else.

### What database should I use?

The generated code doesn't use/include any databases. *Express* apps can use any [database mechanism](https://expressjs.com/en/guide/database-integration.html) supported by *Node*. (*Express* itself doesn't define any specific additional behavior/requirements for database management.)

We'll discuss how to integrate with a database in a later article.

## Creating the project

For the sample *Local Library* app we're going to build, we'll create a project named *express-locallibrary-tutorial* using the *Pug* template library and no CSS engine.

First, navigate to where you want to create the project and then run the *Express Application Generator* in the command prompt as shown:
```
express express-locallibrary-tutorial --view=pug
```
The generator will create (and list) the project's files.
```
    create : express-locallibrary-tutorial\
    create : express-locallibrary-tutorial\public\
    create : express-locallibrary-tutorial\public\javascripts\
    create : express-locallibrary-tutorial\public\images\
    create : express-locallibrary-tutorial\public\stylesheets\
    create : express-locallibrary-tutorial\public\stylesheets\style.css
    create : express-locallibrary-tutorial\routes\
    create : express-locallibrary-tutorial\routes\index.js
    create : express-locallibrary-tutorial\routes\users.js
    create : express-locallibrary-tutorial\views\
    create : express-locallibrary-tutorial\views\error.pug
    create : express-locallibrary-tutorial\views\index.pug
    create : express-locallibrary-tutorial\views\layout.pug
    create : express-locallibrary-tutorial\app.js
    create : express-locallibrary-tutorial\package.json
    create : express-locallibrary-tutorial\bin\
    create : express-locallibrary-tutorial\bin\www

    change directory:
        > cd express-locallibrary-tutorial

    install dependencies:
        > npm install

    run the app (Bash (Linux or macOS))
        > DEBUG=express-locallibrary-tutorial:* npm start

    run the app (PowerShell (Windows))
        > $ENV:DEBUG = "express-locallibrary-tutorial:*"; npm start

    run the app (Command Prompt (Windows)):
        > SET DEBUG=express-locallibrary-tutorial:* & npm start
```
At the end of the output, the generator provides instructions on how to install the dependencies (as listed in the **package.json** file) and how to run the application.

## Running the skeleton website

At this point, we have a complete skeleton project. The website doesn't actually *do* very much yet, but it's worth running it to show that it works.

1. First, install the dependencies (the `install` command will fetch all the dependency packages listed in the project's **package.json** file).
```
cd express-locallibrary-tutorial
npm install
```

2. Then run the application.
    - On the Windows CMD prompt, use this command:
    ```
    SET DEBUG=express-locallibrary-tutorial:* & npm start
    ```

    - On Windows Powershell, use this command:
    ```
    $ENV:DEBUG = "express-locallibrary-tutorial:*"; npm start
    ```
    [**Note**: Powershell commands are not covered further in this tutorial. (The provided "Windows" commands assume you're using the Windows CMD prompt.)]

    - On macOS or Linux, use this command:
    ```
    DEBUG=express-locallibrary-tutorial:* npm start
    ```

3. Then load [http://localhost:3000/](http://localhost:3000/) in your browser to access the app.

You should see a browser page that looks like this:

![Image of the opening browser page of an Express application skeleton](https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/skeleton_website/expressgeneratorskeletonwebsite.png)

Congratulations! You now have a working Express application that can be accessed via port 3000.

<hr>

**Note**: You could also start the app just using the `npm start` command. Specifying the `DEBUG` variable as shown enables console logging/debugging. For example, when you visit the above page, you'll see debug output like this:
```
> SET DEBUG=expres-locallibrary-tutorial:* & npm start

> express-locallibrary-tutorial@0.0.0 start D:\github\mdn\test\exprgen\express-locallibrary-tutorial
> node ./bin/www

  express-locallibrary-tutorial:server Listening on port 3000 +0ms
GET / 304 490.296 ms - -
GET /stylesheets/style.css 200 4.886 ms - 111
```

<hr>

## Enable server restart on file changes

Any changes you make to your Express website are currently not visible until you restart the server. It quickly becomes very irritating to have to stop and restart your server every time you make a change, so it is worth taking the time to automate restarting the server when needed.

A convenient tool for this purpose is [nodemon](https://github.com/remy/nodemon). This is usually installed globally (as it is a "tool"), but here we'll install and use it locally as a *developer dependency*, so that any developers working with the project get it automatically when they install the application. Use the following command in the root directory for the skeleton project:
```
npm install --save-dev nodemon
```
If you still choose to install [nodemon](https://github.com/remy/nodemon) globally to your machine, and not only to your project's **package.json** file:
```
npm install -g nodemon
```
If you open your project's **package.json** file, you'll now see a new section with this dependency:
```
"devDependencies": {
    "nodemon": "^2.0.4"
}
```
Because the tool isn't installed globally, we can't launch it from the command line (unless we add it to the path) but we can call it from an NPM script because NPM knows all about the installed packages. Find the `scripts` section of your **package.json**. Initially, it will contain one line, which begins with `"start"`. Update it by putting a comma at the end of that line, and adding the `"devstart"` and `"serverstart"` lines:

* On Linux and macOS, the `scripts` section will look like this:
```
"scripts": {
    "start": "node ./bin/www",
    "devstart": "nodemon ./bin/www",
    "serverstart": "DEBUG=express-locallibrary-tutorial:* npm run devstart"
},
```

* On Windows, use this command instead:
```
SET DEBUG=express-locallibrary-tutorial:* & npm run devstart
```

We can now start the server in almost exactly the same way as previously, but using the `devstart` command.

