# Express Tutorial Part 7: Deploying to production

Now you've created (and tested) an awesome [LocalLibrary](https://github.com/AndrewSRea/My_Learning_Port/tree/main/JavaScript/Server-Side_Website_Programming/Express_Web_Framework/Express_Tutorial_Local_Library#express-tutorial-the-local-library-website) website, you're going to want to install it on a public web server so that it can be accessed by library staff and members over the Internet. This article provides an overview of how you might go about finding a host to deploy your website, and what you need to do in order to get your site ready for production.

## Overview

Once your site is finished (or finished "enough" to start public testing), you're going to need to host it somewhere more public and accessible than your personal development computer.

Up to now, you've been working in a [development environment](https://github.com/AndrewSRea/My_Learning_Port/tree/main/JavaScript/Server-Side_Website_Programming/Express_Web_Framework/Node_Development_Environment#setting-up-a-node-development-environment), using Express/Node as a web server to share your site to the local browser/netowkr, and running your website with (insecure) development settings that expose debugging and other private information. Before you can host a website externally, you're first going to have to:

* Choose an environment for hosting the Express app.
* Make a few changes to your project settings.
* Set up a production-level infrastructure for serving your website.

This tutorial provides some guidance on your options for choosing a hosting site, a brief overview of what you need to do in order to get your Express app ready for production, and a worked example of how to install the LocalLibrary website onto the [Heroku](https://www.heroku.com) cloud hosting service.

## What is a production environment?

The production environment is the environment provided by the server computer where you will run your website for external consumption. The environment includes:

* Computer hardware on which the website runs.
* Operating system (e.g. Linux or Windows).
* Programming language runtime and framework libraries on top of which your website is written.
* Web server infrastructure, possibly including a web server, reverse proxy, load balancer, etc.
* Databases on which your website is dependent.

The server computer could be located on your premises and connected to the Internet by a fast link, but it is far more common to use a computer that is hosted "in the cloud". What this actually means is that your code is run on some remote computer (or possibly a "virtual" computer) in your hosting company's data center(s). The remote server will usually offer some guaranteed level of computing resources (e.g. CPU, RAM, storage memory, etc.) and Internet connectivity for a certain price.

This sort of remotely accessible computing/networking hardware is referred to as *Infrastructure as a Service (IaaS)*. Many IaaS vendors provide options to preinstall a particular operating system, onto which you must install the other components of your production environment. Other vendors allow you to select more fully-featured environments, perhaps including a complete Node setup.

<hr>

**Note**: Pre-built environments can make setting up your website very easy because they reduce the configuration, but the available options may limit you to an unfamiliar server (or other components) and may be based on an older version of the OS. Often it is better to install components yourself so that you get the ones that you want, and when you need to upgrade parts of the system, you have some idea of where to start!

<hr>

