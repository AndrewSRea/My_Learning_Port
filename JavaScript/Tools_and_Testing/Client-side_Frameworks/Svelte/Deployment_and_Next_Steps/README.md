# Deployment and next steps

In the previous article, we learned about Svelte's TypeScript support, and how to use it to make your application more robust. In this final article, we will look at how to deploy your application and get it online, and also share some of the resources that you can use to continue your Svelte learning journey.

## Code along with us

### Git

Clone the GitHub repo (if you haven't already done it) with:
```
git clone https://github.com/opensas/mdn-svelte-tutorial.git
```
Then, to get to the current app state, run:
```
cd mdn-svelte-tutorial/08-next-steps
```
Or directly download the folder's content:
```
npx degit opensas/mdn-svelte-tutorial/08-next-steps
```
Remember to run `npm install && npm run dev` to start your app in development mode.

## Compiling our app

So far we've been running our app in development mode with `npm run dev`. As we saw earlier, this instruction tells Svelte to compile our components and JavaScript files into a `public/build/bundle.js` file and all the CSS sections of our components into `public/build/bundle.css`. It also starts a development server and watches for changes, recompiling the app and refreshing the page when a change occurs.

Your generated `bundle.js` and `bundle.css` files will be something like this (file size on the left):
```
  504 Jul 13 02:43 bundle.css
95981 Jul 13 02:43 bundle.js
```
To compile our application for production, we have to run `npm run build` instead. In this case, Svelte won't launch a web server or keep watching for changes. It will, however, minify and compress our JavaScript files using [terser](https://terser.org/).

So, after running `npm run build`, our generated `bundle.js` and `bundle.css` files will be more like this:
```
  504 Jul 13 02:43 bundle.css
21782 Jul 13 02:43 bundle.js
```
Try running `npmm run build` in your app's root directory now. You might get a warning, but you can ignore this for now.

Our whole app is now just 21 KB -- 8.3 KB when gzipped. There are no additional runtimes or dependencies to download, parse, execute, and keep running in memory. Svelte anaylzed our components and compiled the code to vanilla JavaScript.

## A look behind the Svelte compilation process

By default, when you create a new app with `npx degit sveltejs/template my-svelte-project`, Svelte will use [rollup](https://rollupjs.org/guide/en/) as the module bundler.

<hr>

**Note**: There is also an official template for using [webpack](https://webpack.js.org/) and also many [community-maintained plugins](https://github.com/sveltejs/integrations#bundler-plugins) for other bundlers.

<hr>

In the file `package.json`, you can see that the `dev` and `start` scripts are just calling rollup:
```
"scripts": {
    "build": "rollup -c",
    "dev": "rollup -c -w",
    "start": "sirv public"
},
```
In the `dev` script, we are passing the `-w` argument, which tells rollup to watch files and rebuild on changes.

If we have a look at the `rollup.config.js` file, we can see that the Svelte compiler is just a rollup plugin:
```
import svelte from 'rollup-plugin-svelte';
[...]
import { terser } from 'rollup-plugin-terser';

const production = !process.env.ROLLUP_WATCH;

export default {
    input: 'src/main.js',
    output: {
        sourcemap: true,
        format: 'iife',
        name: 'app',
        file: 'public/build/bundle.js'
    },
    plugins: [
        svelte({
            // enable run-time checks when not in production
            dev: !production,
            // We'll extract any component CSS out into
            // a separate file - better for performance
            css: css => {
                css.write('public/build/bundle.css');
            }
        }),
```
Later on in the same file, you'll see how rollup minimizes our scripts in production mode, and launches a local server in development mode:
```
        // In dev mode, call `npm run start` once
        // the bundle has been generated
        !production && serve(),

        // Watch the `public` directory and refresh the
        // browser on changes when not in production
        !production && livereload('public'),

        // If we're building for production (npm run build
        // instead of npm run dev), minify
        production && terser()
    ],
```
There are [many plugins for rollup](https://github.com/rollup/awesome) that allow you to customize its behavior. A particularly useful plugin which is also maintained by the Svelte team is [svelte-preprocess](https://github.com/sveltejs/svelte-preprocess), which pre-processes many different languages in Svelte files, such as PostCSS, SCSS, Less, CoffeeScript, SASS, and TypeScript.

## Deploying your Svelte application

From the point of view of a web server, a Svelte application is nothing more than a bunch of HTML, CSS, and JavaScript files. All you need is a web server capable of serving static files, which means you have plenty of options to choose from. Let's look at a couple of examples.

<hr>

**Note**: The following section could be applied to any client-side static website requiring a build step, not just Svelte apps.

<hr>

### Deploying with Vercel

One of the easiest ways to deploy a Svelte application is using [Vercel](https://vercel.com/home). Vercel is a cloud platform specifically tailored for static sites, which has out-of-the-box support for most common front-end tools, Svelte being one of them.

To deploy our app, follow these steps.

1. [Register for an account with Vercel](https://vercel.com/signup).

2. Navigate to the root of your app and run `npx vercel`. The first time you do it, you'll be prompted to enter your email address, and follow the steps in the email sent to that address, for security purposes.

3. Run `npx vercel` again, and you'll be prompted to answer a few questions, like this:
```
> npx vercel
Vercel CLI 19.1.2
? Set up and deploy “./mdn-svelte-tutorial”? [Y/n] y
? Which scope do you want to deploy to? opensas
? Link to existing project? [y/N] n
? What's your project's name? mdn-svelte-tutorial
? In which directory is your code located? ./
Auto-detected Project Settings (Svelte):
- Build Command: `npm run build` or `rollup -c`
- Output Directory: public
- Development Command: sirv public --single --dev --port $PORT
? Want to override the settings? [y/N] n
    Linked to opensas/mdn-svelte-tutorial (created .vercel)
    Inspect: https://vercel.com/opensas/mdn-svelte-tutorial/[...] [1s]
✅   Production: https://mdn-svelte-tutorial.vercel.app [copied to clipboard] [19s]
    Deployed to production. Run `vercel --prod` to overwrite later (https://vercel.link/2F).
    To change the domain or build command, go to https://zeit.co/opensas/mdn-svelte-tutorial/settings
```

4. Accept all the defaults, and you'll be fine.

5. Once it has finished deploying, go to the "Production" URL in your browser, and you'll see the app deployed!

You can also [import a Svelte git project]() into Vercel from [GitHub](), [GitLab](), or [BitBucket]().

<hr>

**Note**: You can globally install Vercel with `npm i -g vercel` so you don't have to use `npx` to run it.

<hr>

### Automatic deployment to GitLab pages

For hosting static files, there are several online services that allow you to automatically deploy your site whenever you push changes to a git repository. Most of them involve setting up a deployment pipeline that gets triggered on every `git push`, and takes care of building and deploying your website.