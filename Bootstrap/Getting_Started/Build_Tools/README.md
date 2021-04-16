# Build tools

Learn how to use Bootstrap's included npm scripts to build its documentation, compile source code, run tests, and more.

## Tooling setup

Bootstrap uses [npm scripts](https://docs.npmjs.com/cli/v7/using-npm/scripts) for its build system. Its [package.json](https://github.com/twbs/bootstrap/blob/v5.0.0-beta3/package.json) includes convenient methods for working with the framework, including compiling code, running tests, and more.

To use Bootstrap's build system and run its documentation locally, you'll need a copy of Bootstrap's source files and Node. Follow these steps and you should be ready to rock:

1. [Download and install Node.js](https://nodejs.org/en/download/), which Bootstrap uses to manage its dependencies.
2. Either [download Bootstrap's sources](https://codeload.github.com/twbs/bootstrap/zip/v5.0.0-beta3) or fork [Bootstrap's respository](https://github.com/twbs/bootstrap).
3.  Navigate to the root `/bootstrap` directory and run `npm install` to install Bootstrap's local dependencies listed in [package.json](https://github.com/twbs/bootstrap/blob/v5.0.0-beta3/package.json).

When completed, you'll be able to run the various commands provided from the command line.

## Using npm scripts

Bootstrap's [package.json](https://github.com/twbs/bootstrap/blob/v5.0.0-beta3/package.json) includes numerous tasks for developing the project. Run `npm run` to see all the npm scripts in your terminal. **Primary tasks include:**

| Task | Description |
| --- | --- |
| `npm start` | Compiles CSS and JavaScript, build the documentation, and starts a local server. |
| `npm run dist` | Creates the `dist/` directory with compiled files. Requires [Sass](https://sass-lang.com/), [Autoprefixer](https://github.com/postcss/autoprefixer), and [terser](https://github.com/terser/terser). |
| `npm test` | Runs tests locally after running `npm run dist` |
| `npm run docs-serve` | Builds and runs the documentation locally. |

<hr>

**Get started with Bootstrap via npm with its starter project!** Head to the [twbs/bootstrap-npm-starter](https://github.com/twbs/bootstrap-npm-starter) template repository to see how to build and customize Bootstrap in your own npm project. Includes Sass compiler, Autoprefixer, Stylelint, PurgeCSS, and Bootstrap Icons.

<hr>

## Sass

Bootstrap uses [Dart Sass](https://sass-lang.com/dart-sass) for compiling its Sass source files into CSS files (included in Bootstrap's build process), and it's recommended you do the same if you're compiling Sass using your own asset pipeline. Bootstrap previously used Node Sass for Bootstrap v4, but LibSass and packages built on top of it, including Node Sass, are now [deprecated](https://sass-lang.com/blog/libsass-is-deprecated).

Dart Sass uses a rounding precision of 10 and for efficiency reasons does not allow adjustment of this value. Bootstrap doesn't lower this precision during further processing of its generated CSS, such as during minification, but if you chose to do so, Bootstrap recommends maintaining a precision of, at least, 6 to prevent issues with browser rounding.

## Autoprefixer

Bootstrap uses [Autoprefixer](https://github.com/postcss/autoprefixer) (included in its build process) to automatically add vendor prefixes to some CSS properties at build time. Doing so saves you time and code by allowing you to write key parts of Bootstrap's CSS a single time while eliminating the need for vendor mixins like those found in v3.

Bootstrap maintains the list of browsers supported through Autoprefixer in a separate file within its GitHub repository. See [.browserslistrc](https://github.com/twbs/bootstrap/blob/v5.0.0-beta3/.browserslistrc) for details.

## RTLCSS

Bootstrap uses [RTLCSS](https://rtlcss.com/) to process compiled CSS and convert them to RTL - basically replacing horizontal direction aware properties (e.g. `padding-left`) with their opposite. It allows you to only write Bootstrap's CSS a single time and make minor tweaks using RTLCSS [control](https://rtlcss.com/learn/usage-guide/control-directives/) and [value](https://rtlcss.com/learn/usage-guide/value-directives/) directives.

## Local documentation 

Running our documentation locally requires the use of Hugo, which gets installed via the [hugo-bin](https://www.npmjs.com/package/hugo-bin) npm package. Hugo is a blazingly fast and quite extensible static site generator that provides us: basic includes, Markdown-based files, templates, and more. Here's how to get it started:

1. Run through the [tooling setup](https://github.com/AndrewSRea/My_Learning_Port/tree/main/Bootstrap/Getting_Started/Build_Tools#tooling-setup) above to install all dependencies.
2. From the root `/bootstrap` directory, run `npm run docs-serve` in the command line.
3. Open `http://localhost:9001/` in your browser, and viola!

Learn more about using Hugo by reading its [documentation](https://gohugo.io/documentation/).

## Troubleshooting

Should you encounter problems with installing dependencies, uninstall all previous dependency versions (global and local). Then, rerun `npm install`.

[[Previous page]](https://github.com/AndrewSRea/My_Learning_Port/tree/main/Bootstrap/Getting_Started/JavaScript#javascript) - [[Top]](https://github.com/AndrewSRea/My_Learning_Port/tree/main/Bootstrap/Getting_Started/Build_Tools#build-tools) - [[Next page]]()