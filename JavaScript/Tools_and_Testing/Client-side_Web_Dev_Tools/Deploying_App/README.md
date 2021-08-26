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

## Committing changes to GitHub

This section will get you over the line to storing your code in a git repository, but it is a far cry from a git tutorial. There's many great tutorials and books available, and our [Git and GitHub](https://github.com/AndrewSRea/My_Learning_Port/tree/main/JavaScript/Tools_and_Testing/Git_and_GitHub#git-and-github) page is a good place to start.

We initialized our working directory as a git working directory earlier on. A quick way to verify this is to run the following command:
```
git status
```
You should get a status report of what files are being tracked, what files are staged, and so on -- all terms that are part of the git grammar. If you get the error `fatal: not a git repository` returned, then the working directory is not a git working directory and you'll need to initialize git using `git init`.

Now we have three tasks ahead of us:

* Add any changes we've made to the stage (a special name for the place that git will commit files from).
* Commit the changes to the repository.
* Push the changes to GitHub.

1. To add changes, run the following command:
```
git add .
```
Note the period at the end. It means "everything in this directory". The `git add .` command is a bit of a sledgehammer approach -- it will add all local changes you've worked on in one go. If you want finer control over what you add, the use `git add -p` for an interactive process, or add individual files using `git add path/to/file`.

2. Now all the code is staged, we can commit; run the following command:
```
git commit -m 'committing initial code'
```

<hr>

**Note** Although you're free to write whatever you wish in the commit message, there's some useful tips around the web on good commit messages. Keep them short, concise, and descriptive, so they clearly describe what the change does.

<hr>

3. Finally, the code needs to be pushed to your GitHub hosted repository. Let's do that now.

Over at GitHub, visit [https://github.com/new](https://github.com/new) and create your own repository to host this code.

4. Give your repository a short, memorable name, without spaces in it (use hyphens to separate words), and a description, then click *Create repository* at the bottom of the page.

You should now have a "remote" URL that points to your new GitHub repo.

![Image of an initial GitHub repo URL](https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/Understanding_client-side_tools/Deployment/github-quick-setup.png)

5. This remote location needs to be added to our local git repository before we can push it up there, otherwise it won't be able to find it. You'll need to run a command with the following structure (use the provided HTTPS option for now -- especially if you are new to GitHub -- not the SSH option):
```
git remote add github https://github.com/yourname/repo-name.git
```
So if your remote URL was `https://github.com/remy/super-website.git`, as in the screenshot above, your command would be:
```
git remote add github https://github.com/remy/super-website.git
```
Change the URL to your own repository, and run it now.

6. Now we're ready to push our code to GitHub; run the following command now:
```
git push github main
```
At this point, you'll be prompted to enter a username and password before Git will allow the push to be sent. This is because we used the HTTPS option rather than the SSH option, as seen in the screenshot earlier. For this you need your GitHub username and then -- if you do not have two-factor authentication (2FA) turned on -- your GitHub password. We would always encourage you to use 2FA if possible, but bear in mind that if you do, you'll also need to use a "personal access token". GitHub help pages has an [excellent and simple walkthrough covering how to get one](https://docs.github.com/en/github/authenticating-to-github/keeping-your-account-and-data-secure/creating-a-personal-access-token).

<hr>

**Note**: If you are interested in using the SSH option, thereby avoiding the need to enter your username and password every time you push to GitHub, [this tutorial walks you through how](https://docs.github.com/en/github/authenticating-to-github/connecting-to-github-with-ssh).

<hr>

This final command instructs git to push the code (aka publish) to the "remote" location that we called `github` (that's the repository hosted on github.com -- we could have called it anything we like) using the branch `main`. We've not encountered branches at all, but the "main" branch is the default place for our work and it's what git starts on. It's also the default branch that Netlify will look for, which is convenient.

<hr>

**Note** Until October 2020, the default branch on GitHub was `master`, which for various social reasons was switched to `main`. You should be aware that this older default branch may appear in various projects you encounter, but we'd suggest using `main` for your projects.

<hr>

So with our project committed in git and pushed to our GitHub repository, the next step in the toolchain is to connect GitHub to Netlify so our project can be deployed live on the web!




cd JavaScript/Tools_and_Testing/Client-side_Web_Dev_Tools/Deploying_App