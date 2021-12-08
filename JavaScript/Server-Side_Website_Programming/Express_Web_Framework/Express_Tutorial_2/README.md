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