# Parcel

Learn how to include Bootstrap in your project using Parcel.

## Install Parcel

Install [Parcel Bundler](https://en.parceljs.org/getting_started.html).

## Install Bootstrap

[Install bootstrap](https://github.com/AndrewSRea/My_Learning_Port/tree/main/Bootstrap/Getting_Started/Download#npm) as a Node.js module using npm.

Bootstrap depends on [Popper](https://popper.js.org/), which is specified in the `peerDependencies` property. This means that you will have to make sure to add both of them to your `package.json` using `npm install popper.js`.

When all will be completed, your project will be structured like this:
```
project-name/
├── build/
├── node_modules/
│   └── bootstrap/
│   └── popper.js/
├── scss/
│   └── custom.scss
├── src/
│   └── index.html
│   └── index.js
└── package.json
```

## Importing JavaScript

Import [Bootstrap's JavaScript](https://github.com/AndrewSRea/My_Learning_Port/tree/main/Bootstrap/Getting_Started/JavaScript#javascript) in your app's entry point (usually `src/index.js`). You can import all of Bootstrap's plugins in one file or separately if you require only a subset of them.
```
// Import all plugins
import * as bootstrap from 'bootstrap';

// Or import only needed plugins
import { Tooltip as Tooltip, Toast as Toast, Popover as Popover } from 'bootstrap';

// Or import just one
import Alert as Alert from '../node_modules/bootstrap/js/dist/alert';
```

## Importing CSS

To utilize the full potential of Bootstrap and customize it to your needs, use the source files as a part of your project's bundling process.

Create your own `scss/custom.scss` to [import Bootstrap's Sass files]() <!-- link to Customize/Sass folder, "Importing" header --> and then override the [built-in custom variables](). <!-- link to Customize/Sass folder, "Variable defaults" header -->

## Build app

Include `src/index.js` before the closing `</body>` tag.
```
<!doctype html>
<html lang="en">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
    </head>
    <body>
        <script src="./index.js"></script>
    </body>
</html>
```

### Edit `package.json`

Add `dev` and `build` scripts in your `package.json` file.
```
"scripts": {
    "dev": "parcel ./src/index.html",
    "prebuild": "npx rimraf build",
    "build": "parcel build --public-url ./ ./src/index.html --experimental-scope-hoisting --out-dir build"
}
```

### Run dev script

Your app will be accessible at `http://127.0.0.1:1234`.
```
$ npm run dev
```

### Build app files

Built files are in the `build/` folder.
```
$ npm run build
```

<hr>

[[Previous page]](https://github.com/AndrewSRea/My_Learning_Port/tree/main/Bootstrap/Getting_Started/Accessibility#accessibility) - [[Top]](https://github.com/AndrewSRea/My_Learning_Port/tree/main/Bootstrap/Getting_Started/Parcel#parcel) - [[Next page]](https://github.com/AndrewSRea/My_Learning_Port/tree/main/Bootstrap/Getting_Started/Accessibility#accessibility)