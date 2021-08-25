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

## The build process

Again, because we're using Parcel for development, the build option is extremely simple to add. Instead of running the server with `npm parcel src/index.html`, we can run it with `npx parcel buil src/index.html` and Parcel will build everything ready for production instead of just running it for development and testing purposes. This includes doing minification and tree-shaking of code, and cache-busting on filenames.

The newly-created production code is placed in a new directory called `dist`, which contains *all* the files required to run the website, ready for you to upload to a server.

However, doing this step manually isn't our final aim -- what we want is for the build to happen automatically and the result of the `dist` directory to be deployed live on our website.

This is where our code, GitHub, and Netlify need to be set up to talk to one another, so that each time we update our GitHub code repository, Netlify will automatically pick up the changes, run the build tasks, and finally release a new update.

We're going to add the build command to our `package.json` file as an npm script, so that the command `npm run build` will trigger the build process. This step isn't necessary, but it is a good best practice to get into the habit of setting up -- across all our projects, we can then rely on `npm run build` to always do the complete build step, without needing to remember the specific build command arguments for each project.

1. Open the `package.json` file in your project's root directory, and find the `scripts` property.

2. We'll add a `build` command that we can run to build our code. Add the following line to your project now:
```
"scripts": {
    ...
    "build": "parcel build src/index.html"
}
```

<hr>

**Note**: If the `scripts` property already has a command inside it, put a comma at the end of it. Keep the JSON valid.

<hr>

3. You should now be able to run the following command in the root of your project directory to run the production build step (first quit the running process with <kbd>Ctrl</kbd> + <kbd>C</kbd> if you need to):
```
npm run build
```
This should give you an output like the following, showing you the production files that were created, how big they are, and how long they took to build:
```
dist/src.99d8a31a.js.map       446.15 KB     63ms
dist/src.99d8a31a.js           172.51 KB    5.55s
dist/stars.7f1dd035.svg          6.31 KB    145ms
dist/asteroid2.3ead4904.svg      3.51 KB    155ms
dist/asteroid1.698d75e9.svg       2.9 KB    153ms
dist/src.84f2edd1.css.map        2.57 KB      3ms
dist/src.84f2edd1.css            1.25 KB    1.53s
dist/bg.084d3fd3.svg               795 B    147ms
dist/index.html                    354 B    944ms
```
Try it now!

For you to create your own instance of this project, you will need to host this project's code in your own git repository. Our next step is to push the project to GitHub.