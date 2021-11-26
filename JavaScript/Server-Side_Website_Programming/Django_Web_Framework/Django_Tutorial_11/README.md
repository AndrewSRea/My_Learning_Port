# Django Tutorial Part 11: Deploying Django to production

Now you've created (and tested) an awesome [LocalLibrary](https://github.com/AndrewSRea/My_Learning_Port/tree/main/JavaScript/Server-Side_Website_Programming/Django_Web_Framework/Django_Tutorial_Local_Library#django-tutorial-the-local-library-website) website, you're going to want to install it on a public web server so that it can be accessed by library staff and members over the Internet. This article provides an overview of how you might go about finding a host to deploy your website, and what you need to do in order to get your site ready for production.

## Overview

Once your site is finished (or finished "enough" to start public testing), you're going to need to host it somewhere more public and accessible than your personal development computer.

Up to now you've been working in a development environment, using the Django development web server to share your site to the local browser/network, and running your website with (insecure) development settings that expose debug and other private information. Before you can host a website externally, you're first going to have to:

* Make a few changes to your project settings.
* Choose an environment for hosting the Django app.
* Choose an environment for hosting any static files.
* Set up a production-level infrastructure for serving your website.

This tutorial provides some guidance on your options for choosing a hosting site, a brief overview of what you need to do in order to get your Django app ready for production, and a worked example of how to install the LocalLibrary website onto the [Heroku](https://www.heroku.com/) cloud hosting service.

## What is a production environment?

The production environment provided by the server computer where you will run your website for external consumption. The environment includes:

* Computer hardware on which the website runs.
* Operating system (e.g. Linux, Windows).
* Programming language runtime and framework libraries on top of which your website is written.
* Web server used to serve pages and other content (e.g. Nginx, Apache).
* Application server that passes "dynamic" requests between your Django website and the webserver.
* Databases on which your website is dependent.

<hr>

**Note**: Depending on how your production is configured, you might also have a reverse proxy, load balancer, etc.

<hr>

The server computer could be located on your premises and connected to the Internet by a fast link, but it is far more common to use a computer that is hosted "in the cloud". What this actually means is that your code is run on some remote computer (or possibly a "virtual" computer) in your hosting company's data center(s). The remote server will usually offer some guaranteed level of computing resources (e.g. CPU, RAM, storage memory, etc.) and Internet connectivity for a certain price.

This sort of remotely accessible computing/networking hardware is referred to as *Infrastructure as a Service (IaaS)*. Many IaaS vendors provide options to preinstall a particular operating system, onto which you must install the other components of your production environment. Other vendors allow you to select more fully-featured environments, perhaps including a complete Django and web-server setup.