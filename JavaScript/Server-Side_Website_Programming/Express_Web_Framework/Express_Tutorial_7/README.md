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

Other hosting provides support Express as part of a *Platform as a Service (PaaS)* offering. When using this sort of hosting, you don't need to worry about most of your production environment (servers, load balancers, etc.) as the host platform takes care of those for you. That makes deployment quite easy because you just need to concentrate on your web application and not any other server infrastructure.

Some developers will choose the increased flexibility provided by IaaS over PaaS, while others will appreciate the reduced maintenance overhead and easier scaling of PaaS. When you're getting started, setting up your website on a PaaS system is much easier, so that is what we'll do in this tutorial.

<hr>

**Note**: If you choose a Node/Express-friendly hosting provider, they should provide instructions on how to set up an Express website using different configurations of web server, application server, reverse proxy, etc. For example, there are many step-by-step guides for various configurations in the [Digital Ocean Node community docs](https://www.digitalocean.com/community/tutorials?q=node).

<hr>

## Choosing a hosting provider

There are numerous hosting providers that are known to either actively support or work well with *Node* (and *Express*). These vendors provide different types of environments (IaaS, PaaS), and different levels of computing and network resources at different prices.

<hr>

**Note**: There are a lot of hosting solutions, and their services and pricing can change over time. While we introduce a few options below, it is worth checking both these and other options before selecting a hosting provider.

<hr>

Some of the things to consider when choosing a host:

* How busy your site is likely to be and the cost of data and computing resources required to meet that demand.
* Level of support for scaling horizontally (adding more machines) and vertically (upgrading to more powerful machines) and the costs of doing so.
* Where the supplier has data centers, and hence where access is likely to be the fastest.
* The host's historical uptime and downtime perfomance.
* Tools provided for managing the site -- are they easy to use and are they secure (e.g. SFTP vs. FTP).
* Inbuilt frameworks for monitoring your server.
* Known limitations. Some hosts will deliberately block certain services (e.g. email). Others offer only a certain number of hours of "live time" in some price tiers, or only offer a small amount of storage.
* Additional benefits. Some providers will offer free domain names and support for SSL certificates that you would otherwise have to pay for.
* Whether the "free" tier you're relying on expires over time, and whether the cost of migrating to a more expensive tier means you would have been better off using some other service in the first place!

The good news when you're starting out is that there are quite a few sites that provide computing environments for "free", albeit with some conditions. For example, [Heroku](https://www.heroku.com) provides a free but resource-limited *PaaS* environment "forever", while [Amazon Web Services](https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/billing-free-tier.html), [Google Cloud](https://cloud.google.com/free/docs/gcp-free-tier), and [Microsoft Azure](https://azure.microsoft.com/en-us/pricing/details/app-service/windows/) provide free credit when you first join.

Many providers also have a "basic" tier that provides more useful levels of computing power and fewer limitations. [Digital Ocean](https://www.digitalocean.com/) is an example of a popular hosting provider that offers a relatively inexpensive basic computing tier (in the $5 per month lower range at time of writing).

<hr>

**Note**: Remember that price is not the only selection criterion. If your website is successful, it may turn out that scalability is the most important consideration.

<hr>

## Getting your website ready to publish

The main things to think about when publishing your website are web security and performance. At the bare minimum, you will want to remove the stack traces that are included on error pages during development, tidy up your logging, and set the appropriate headers to avoid many common security threats.

In the following subsections, we outline the most important changes that you should make to your app.

<hr>

**Note**: There are other useful tips in the Express docs -- see [Production best practices: performance and reliability](https://expressjs.com/en/advanced/best-practice-performance.html) and [Production Best Practices: Security](https://expressjs.com/en/advanced/best-practice-security.html).

<hr>

### Set NODE_ENV to 'production'

We can remove stack traces in error pages by setting the `NODE_ENV` environment variable to *production* (it is set to '*development*' by default). In addition to generating less-verbose error messages, setting the variable to *production* caches view templates and CSS files generated from CSS extensions. Tests indicate that setting `NODE_ENV` to *production* can improve app performance by a factor of three!

This change can be made either by using `export`, an environment file, or the OS initialization system.

<hr>

**Note**: This is actually a change you make in your environment setup rather than your app, but important enough to note here! We'll show how this is set for our hosting example below.

<hr>

### Log appropriately

Logging calls can have an impact on a high-traffic website. In a production environment, you may need to log website activity (e.g. tracking traffic or logging API calls) but you should attempt to minimize the amount of logging added for debugging purposes.

One way to minimize "debug" logging in production is to use a module like [debug](https://www.npmjs.com/package/debug) that allows you to control what logging is performed by setting an environment variable. For example, the code fragment below shows how you might set up 'author' logging. The debug variable is declared with the name 'author', and the prefix "author" will be automatically displayed for all logs from this object.
```
var debug = require('debug')('author');

// Display Author update form on GET
exports.author_update_get = function(req, res, next) {

    req.sanitize('id').escape().trim();
    Author.findById(req.params.id, function(err, author) {
        if (err) {
            debug('update error:' + err);
            return next(err);
        }
        // On success
        res.render('author_form', { title: 'Update Author', author: author });
    });

};
```
You can then enable a particular set of logs by specifying them as a comma-separated list in the `DEBUG` environment variable. You can set the variables for displaying author and book logs as shown (wildcards are also supported).
```
# Windows
set DEBUG=author,book

# Linux
export DEBUG="author,book"
```

<hr>

**Note**: Calls to `debug` can replace logging you might previously have done using `console.log()` or `console.error()`. Replace any `console.log()` calls in your code with logging via the [debug](https://www.npmjs.com/package/debug) module. Turn the logging on and off in your development environment by setting the `DEBUG` variable and observe the impact this has on logging.

<hr>

If you need to log website activity, you can use a logging library like [Winston](https://www.npmjs.com/package/winston) or [Bunyan](https://www.npmjs.com/package/bunyan). For more information on this topic, see [Production best practices: performance and reliability](https://expressjs.com/en/advanced/best-practice-performance.html).

### Use gzip/deflate compression for responses

Web servers can often compress the HTTP response sent back to a client, significantly reducing the time required for the client to get and load the page. The compression method used will depend on the decompression methods the client says it supports in the request. (The response will be sent uncompressed if no compression methods are supported.)

Add this to your site using [compression](https://www.npmjs.com/package/compression) middleware. Install this at the root of your project by running the following command:
```
npm install compression
```
Open **./app.js** and require the compression library as shown. Add the compression library to the middleware chain with the `use()` method. (This should appear before any routes you want compressed -- in this case, all of them!)
```
var catalogRouter = require('./routes/catalog');   // Import routes for "catalog" area of site
var compression = require('compression');

// Create the Express application object
var app = express();

...

app.use(compression());   // Compress all routes

app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/catalog', catalogRouter);   // Add catalog routes to middleware chain.

...
```

<hr>

**Note**: For a high-traffic website in production, you wouldn't use this middleware. Instead, you would use a reverse proxy like [Nginx](https://nginx.org/).

<hr>

### Use Helmet to protect against well-known vulnerabilities

[Helmet](https://www.npmjs.com/package/helmet) is a middleware package. It can set appropriate HTTP headers that help protect your app from well-known  web vulnerabilities. (See the [docs](https://helmetjs.github.io/) for more information on what headers it sets and vulnerabilities it protects against.)

Install this at the root of your project by running the following command:
```
npm install helmet
```
Open **./app.js** and require the *helmet* library as shown. Then add the module to the middleware chain with the `use()` method.
```
var compression = require('compression');
var helmet = require('helmet');

// Create the Express application object
var app = express();

app.use(helmet());
...
```

<hr>

**Note**: The command above adds a *subset* of the available headers. (These make sense for most sites.) You can add/disable specific headers as needed by following the [instructions for using helmet here](https://www.npmjs.com/package/helmet).

<hr>

## Example: Installing LocalLibrary on Heroku

This section provides a practical demonstration of how to install *LocalLibrary* on the [Heroku PaaS cloud](https://heroku.com).

### Why Heroku?

Heroku is one of the longest-running and popular cloud-based PaaS services. It originally supported only Ruby apps, but now can be used to host apps from many programming environments, including Node (and hence Express!)

We are choosing to use Heroku for several reasons:

* Heroku has a [free tier](https://www.heroku.com/pricing) that is *really* free (albeit with some limitations).
* As a PaaS, Heroku takes care of a lot of the web infrastructure for us. This makes it much easier to get started because you don't worry about servers, load balancers, reverse proxies, restarting your website on a crash, or any of the other web infrastructure that Heroku provides.
* While it does have limitations, they will not affect this particular application. For example:
    - Heroku's free-tier only provides short-lived storage. User-uploaded files are not safely stored on Heroku itself.
    - The free tier will sleep an inactive web app if there are no requests within a helf-hour period. The site may take several seconds to respond if the dyno is asleep.
    - The free tier limits your site to a certain amount of hours runtime each month (time "asleep" is not used in the calculation). This is fine for a low use or demonstration site. It's not suitable if 100% uptime is required.
    - Other limitations are listed in [Limits](https://devcenter.heroku.com/articles/limits) (Heroku docs).
* If it works and you end up loving it, you'll want to upgrade. Scaling your app on Heroku is very easy.

While Heroku is perfect for hosting this demonstration, it may not be perfect for your real website. Heroku makes things easy to set up and scale. If you need more speed or uptime or add-on features, expect to pay for them.

### How does Heroku work?

Heroku runs websites within one or more "[Dynos](https://devcenter.heroku.com/articles/dynos)". These are isolated, virtualized Unix containers that provide the environment required to run an application. The dynos are completely isolated and have an *ephemeral* file system (a short-lived file system that is cleaned and emptied each time the dyno restarts). The one thing dynos share by default are the application [configuration variables](https://devcenter.heroku.com/articles/config-vars). Internally, Heroku uses a load balancer to distribute web traffic to all "web" dynos. Since nothing is shared between them, Heroku can scale an app horizontally by adding more dynos. You may also need to scale your database to accept additional connections.

Because the file system is ephemeral, you can't directly install services required by your application. Databases, queues, caching systems, storage, email services, etc., are considered "add-ons". Heroku web applications use backing services provided by Heroku and third parties. Once attached to your web application, the add-on services are accessed in your web application via environment variables. For each additional service, charges may apply.

In order to execute your application, Heroku needs to be configured to set up the appropriate environment for your application's dependencies and be told how to start. For Node apps, all the information it needs is obtained from your **package.json** file.

Developers interact with Heroku using a special client app/terminal, which is much like a Unix bash script. This allows you to upload code stored in a git repository, inspect the running processes, see logs, set configuration variables, and much more.

Let's get our application on Heroku. First, we'll initialize a git repository for our Express web application. Next, we'll make some minor changes to the package.json. Once we've done that, we'll set up a Heroku account, install the Heroku client on our local machine and use it to upload our application.

That's all the overview you need in order to get started. (See [Getting Started on Heroku with Node.js](https://devcenter.heroku.com/articles/getting-started-with-nodejs) for a more comprehensive guide.)