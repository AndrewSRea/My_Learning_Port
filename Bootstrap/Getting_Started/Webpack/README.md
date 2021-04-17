# Webpack and bundlers

Learn how to include Bootstrap in your project using Webpack or other bundlers.

## Installing Bootstrap

[Install bootstrap](https://github.com/AndrewSRea/My_Learning_Port/tree/main/Bootstrap/Getting_Started/Download#npm) as a Node.js module using npm.

## Importing JavaScript

Import [Bootstrap's JavaScript](https://github.com/AndrewSRea/My_Learning_Port/tree/main/Bootstrap/Getting_Started/JavaScript#javascript) by adding this line to your app's entry point (usually `index.js` or `app.js`):
```
// You can specify which plugins you need
import { Tooltip, Toast, Popover } from 'bootstrap';
```
Alternatively, if you need just a few of Bootstrap's plugins, you may **import plugins individually** as needed:
```
import Alert from 'bootstrap/js/dist/alert';
...
```
Bootstrap depends on [Popper](https://popper.js.org/), which is specified in the `peerDependencies` property. This means that you will have to make sure to add it to your `package.json` using `npm install @popperjs/core`.

## Importing Styles

