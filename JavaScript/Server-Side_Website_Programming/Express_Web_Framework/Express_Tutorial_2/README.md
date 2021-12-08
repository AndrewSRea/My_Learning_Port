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