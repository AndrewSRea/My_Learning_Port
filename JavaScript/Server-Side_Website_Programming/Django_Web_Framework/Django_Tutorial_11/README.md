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

<hr>

**Note**: Pre-built environments can make setting up your website very easy because they reduce the configuration, but the available options may limit you to an unfamiliar server (or other components) and may be based on an older version of the OS. Often it is better to installl components yourself, so that you get the ones that you want, and when you need to upgrade parts of the system, you have some idea of where to start!

<hr>

Other hosting providers support Django as part of a *Platform as a Service (PaaS)* offering. In this sort of hosting, you don't need to worry about most of your production environment (web server, application server, load balancers) as the host platform takes care of those for you (along with most of what you need to do in order to scale your application). That makes deployment quite easy, because you just need to concentrate on your web application and not all the other server infrastructure.

Some developers will choose the increased flexibility provided by IaaS over PaaS, while others will appreciate the reduced maintenance overhead and easier scaling of PaaS. When you're getting started, setting up your website on a PaaS system is much easier, and so that is what we'll do in this tutorial.

<hr>

**Note**: If you choose a Python/Django-friendly hosting provider, they should provide instructions on how to set up a Django website using different configurations of webserver, application server, reverse proxy, etc. (This won't be relevant if you choose a PaaS.) For example, there are many step-by-step guides for various configurations in the [Digital Ocean Django community docs](https://www.digitalocean.com/community/tutorials?q=django).

<hr>

## Choosing a hosting provider

There are well over 100 hosting providers that are known to either actively support or work well with Django. (You can find a fairly inexhaustive list at [DjangoFriedly hosts](https://djangofriendly.com/index.html).) These vendors provide different types of environments (IaaS, PaaS), and different levels of computing and network resources at different prices.

Some of the things to consider when choosing a host:

* How busy your site is likely to be and the cost of data and computing resources required to meet that demand.
* Level of support for scaling horizontally (adding more machines) and vertically (upgrading to more powerful machines) and the costs of doing so.
* Where the supplier has data centers, and hence where access is likely to be fastest.
* The host's historical uptime and downtime performance.
* Tools provided for managing the site -- are they easy to use and are they secure (e.g. SFTP vs. FTP)?
* In-built frameworks for monitoring your server.
* Known limitations. Some hosts will deliberately block certain services (e.g. email). Others offer only a certain number of hours of "live time" in some price tiers, or only offer a small amount of storage.
* Additional benefits. Some providers will offer free domain names and support for SSL certificates that you would otherwise have to pay for.
* Whether the "free" tier you're relying on expires over time, and whether the cost of migrating to a more expensive tier means you would have been better off using some other service in the first place!