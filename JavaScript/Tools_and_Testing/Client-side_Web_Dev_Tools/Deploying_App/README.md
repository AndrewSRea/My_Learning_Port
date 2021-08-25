# Deploying our app

In the final article in our series, we take the example toolchain we built up in the previous article and add to it so that we can deploy our sample app. We push the code to GitHub, deploy it using Netlify, and even show you how to add a simple test into the process.

## Post development

There's potentially a large range of problems to be solved in this section of the project's lifecycle. As such, it's important to create a toolchain that handles these problems in a way that requires as little manual intervention as possible.

Here's just a few things to consider for this particular project:

* Generating a production build: Ensuring files are minimized, chunked, have tree-shaking applied, and that versions are "cache busted".
* Running tests: These can range from "is this code formatted properly?" to "does this thing do what I expect?", and ensuring failing tests prevent deployment.
* Actually deploying the updated code to a live URL: Or potentially a staging URL so it can be reviewed first.

<hr>

**Note**: Cache busting is a new term that we haven't met before in the module. This is the strategy of breaking a browser's own caching mechanism, which forces the browser to download a new copy of your code. Parcel (and indeed many other tools) will generate filenames that are unique to each new build. This unique filename "busts" your browser's cache, thereby making sure the browser donwloads the fresh code each time an update is made to the deployed code.

<hr>

The above tasks also break down into further tasks; note that most web development teams will have their own terms and processes for, at least, some part of the post-development phase.

For this project, we're going to use [Netlify](https://www.netlify.com/)'s wonderful static hosting offering to host our project. Netlify gives us hosting or more specifically, a URL to view your project online and to share it with your friends, family, and colleagues.

Deploying to hosting tends to be at the tail-end of the project lifecycle, but with services such as Netlify bringing down the cost of deployments (both in financial terms and also the tijme required to actually deploy), it's possible to deploy during development to either share work in progress or to have a pre-release for some other purpose.

Netlify, amongst other things, also allows you to run pre-deployment tasks, which in our case means that all the production code build processes can be performed inside of Netlify and if the build is successful, the website changes will be deployed.

Although Netlify offers a [drag and drop deployment service](https://app.netlify.com/drop), we are intending to trigger a new deployment to Netlify each time we push to a GitHub repo.

It's exactly these kinds of connected services that we would encourage you to look for when deciding on your own build toolchain. We can commit our code and push to GitHub and the updated code will automatically trigger the entire build routine. If all is well, we get a live change deployed automatically. The *only* action we need to perform is that initial "push".

However, we do have to set these steps up, and we'll look at that now.

