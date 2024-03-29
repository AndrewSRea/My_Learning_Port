# Express web framework (Node.js/JavaScript)

Express is a popular unopinionated web framework, written in JavaScript and hosted within the Node.js runtime environment. This module explains some of the key benefits of the framework, how to set up your development environment and how to perform common web development and deployment tasks.

## Prerequisites

Before starting this module, you will need to understand what server-side web programming and web frameworks are, ideally by reading the topics in our [Server-side website programming first steps](https://github.com/AndrewSRea/My_Learning_Port/tree/main/JavaScript/Server-Side_Website_Programming/Server-Side_First_Steps#server-side-website-programming-first-steps) module. A general knowledge of programming concepts and [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript) is highly recommended, but not essential to understanding the core concepts.

<hr>

**Note**: Mozilla Developer Network has many useful resources for learning JavaScript *in the context of client-side development*: [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript), [JavaScript Guide](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide), [JavaScript Basics](https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/JavaScript_basics), [JavaScript](https://github.com/AndrewSRea/My_Learning_Port/tree/main/JavaScript#javascript) (learning). The core JavaScript language and concepts are the same for server-side development on Node.js and this material will be relevant. Node.js offers [additional APIs](https://nodejs.org/dist/latest-v10.x/docs/api/) for supporting functionality that is useful in browserless environments (e.g. to create HTTP servers and access the file system), but does not support JavaScript APIs for working with the browser and DOM.

This guide will provide some information about working with Node.js and Express, and there are numerous other excellent resources on the Internet and in books -- some of these linked from [How do I get started with Node.js](https://stackoverflow.com/questions/2353818/how-do-i-get-started-with-node-js/5511507#5511507) (StackOverflow) and [What are the best resources for learning Node.js?](https://www.quora.com/What-is-the-greatest-resource-for-learning-Node-js-for-a-newbie) (Quora).

<hr>

## Guides

**[Express/Node introduction](https://github.com/AndrewSRea/My_Learning_Port/tree/main/JavaScript/Server-Side_Website_Programming/Express_Web_Framework/Express_Node_Intro#expressnode-introduction)**

In this first Express article, we answer the questions "What is Node?" and "What is Express?" and give you an overview of what makes the Express web framework special. We'll outline the main features and show you some of the main building blocks of an Express application (although at this point, you won't yet have a development environment in which to test it).

**[Setting up a Node (Express) development environment](https://github.com/AndrewSRea/My_Learning_Port/tree/main/JavaScript/Server-Side_Website_Programming/Express_Web_Framework/Node_Development_Environment#setting-up-a-node-development-environment)**

Now that you know what Express is for, we'll show you how to set up and test a Node/Express development environment on Windows, Linux (Ubuntu), and Mac OS X. Whatever common operating system you are using, this article should give you what you need to be able to start developing Express apps.

**[Express Tutorial: The Local Library website](https://github.com/AndrewSRea/My_Learning_Port/tree/main/JavaScript/Server-Side_Website_Programming/Express_Web_Framework/Express_Tutorial_Local_Library#express-tutorial-the-local-library-website)**

The first article in our practical tutorial series explains what you'll learn and provides an overview of the "local library" example website we'll be working through and evolving in subsequent articles.

**[Express Tutorial Part 2: Creating a skeleton website](https://github.com/AndrewSRea/My_Learning_Port/tree/main/JavaScript/Server-Side_Website_Programming/Express_Web_Framework/Express_Tutorial_2#express-tutorial-part-2-creating-a-skeleton-website)**

This article shows how you can create a "skeleton" website project, which you can then go on to populate with site-specific routes, templates/views, and databases.

**[Express Tutorial Part 3: Using a Database (with Mongoose)](https://github.com/AndrewSRea/My_Learning_Port/tree/main/JavaScript/Server-Side_Website_Programming/Express_Web_Framework/Express_Tutorial_3#express-tutorial-part-3-using-a-database-with-mongoose)**

This article briefly introduces databases for Node/Express. It then goes on to show how we can use [Mongoose](https://mongoosejs.com/) to provide database access for the *LocalLibrary* website. It explains how object schema and models are declared, the main field types, and basic validation. It also briefly shows a few of the main ways you can access model data.

**[Express Tutorial Part 4: Routes and controllers](https://github.com/AndrewSRea/My_Learning_Port/tree/main/JavaScript/Server-Side_Website_Programming/Express_Web_Framework/Express_Tutorial_4#express-tutorial-part-4-routes-and-controllers)**

In this tutorial, we'll set up routes (URL handling code) with "dummy" handler functions for all the resource endpoints that we'll eventually need in the *LocalLibrary* website. On completion, we'll have a modular structure for our route handling code, that we can extend with real handler functions in the following articles. We'll also have a really good understanding of how to create modular routes using Express.

**[Express Tutorial Part 5: Displaying library data](https://github.com/AndrewSRea/My_Learning_Port/tree/main/JavaScript/Server-Side_Website_Programming/Express_Web_Framework/Express_Tutorial_5#express-tutorial-part-5-displaying-library-data)**

WE're now ready to add the pages that display the *LocalLibrary* website books and other data. The pages will include a home page that shows how many records we have of each model type, and list and detail pages for all of our models. Along the way, we'll gain practical experience in getting records from the database and using templates.

**[Express Tutorial Part 6: Working with forms](https://github.com/AndrewSRea/My_Learning_Port/tree/main/JavaScript/Server-Side_Website_Programming/Express_Web_Framework/Express_Tutorial_6#express-tutorial-part-6-working-with-forms)**

In this tutorial, we'll show you how to work with [HTML Forms](https://developer.mozilla.org/en-US/docs/Learn/Forms) in Express, using Pug, and in particular, how to write forms to create, update, and delete documents from the database.

**[Express Tutorial Part 7: Deploying to production](https://github.com/AndrewSRea/My_Learning_Port/tree/main/JavaScript/Server-Side_Website_Programming/Express_Web_Framework/Express_Tutorial_7#express-tutorial-part-7-deploying-to-production)**

Now you've created an awesome *LocalLibrary* website, you're going to want to install it on a public web server so that it can be accessed by library staff and members over the Internet. This article provides an overview of how you might go about finding a host to deploy your website, and what you need to do in order to get your site ready for production.

<hr>

[[Previous module: Django Web Framework]](https://github.com/AndrewSRea/My_Learning_Port/tree/main/JavaScript/Server-Side_Website_Programming/Django_Web_Framework#django-web-framework-python) - [[Top]](https://github.com/AndrewSRea/My_Learning_Port/tree/main/JavaScript/Server-Side_Website_Programming/Express_Web_Framework#express-web-framework-nodejsjavascript) - [[Express Node introduction]](https://github.com/AndrewSRea/My_Learning_Port/tree/main/JavaScript/Server-Side_Website_Programming/Express_Web_Framework/Express_Node_Intro#expressnode-introduction)