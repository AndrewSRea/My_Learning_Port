# Browsers and devices

Learn about the browsers and devices, from modern and old, that are supported by Bootstrap, including known quirks and bugs for each.

## Supported browsers

Bootstrap supports the **latest, stable releases** of all major browsers and platforms.

Alternative browsers which use the latest version of WebKit, Blink, or Gecko, whether directly or via the platform's web view API, are not explicitly supported. However, Bootstrap should (in most cases) display and function correctly in these browsers as well. More specific support information is provided below.

You can find Bootstrap's supported range of browsers and their versions [in its `.browserslistrc file`]():
```
# https://github.com/browserslist/browserslist#readme

>= 0.5%
last 2 major versions
not dead
Chrome >= 60
Firefox >= 60
Firefox ESR
iOS >= 12
Safari >= 12
not Explorer <= 11
```
Bootstrap uses [Autoprefixer]() to handle intended browser support via CSS prefixes, which uses [Browserslist]() to manage these browser versions. Consult their documentation for how to integrate these tools into your projects.

### Mobile devices

