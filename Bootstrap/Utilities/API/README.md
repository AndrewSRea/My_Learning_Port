# Utility API

The utility API is a Sass-based tool to generate utility classes.

Bootstrap utilities are generated with its utility API and can be used to modify or extend Bootstrap's default set of utility classes via Sass. Bootstrap's utility API is based on a series of Sass maps and functions for generating families of classes with various options. If you're unfamiliar with Sass maps, read up on the [official Sass docs](https://sass-lang.com/documentation/values/maps) to get started.

<hr>

:exclamation: **Side note:** It looks like I will have to create a **Sass** subfolder to the **Bootstrap** folder which will contain instructions on how to utilize Sass.

<hr>

The `$utilities` map contains all of Bootstrap's utilities and is later merged with your custom `$utilities` map, if present. The utility map contains a keyed list of utility groups which accept the following options:

| Option | Type | Description |
| --- | --- | --- |
| `property` | **Required** | Name of the property, this can be a string or an array of strings (e.g., horizontal paddings or margins). |
| `values` | **Required** | List of values, or a map if you don't want the class name to be the same as the value. If `null` is used as map key, it isn't compiled. |
| `class` | Optional | Variable for the class name if you don't want it to be the same as the property. In case you don't provide the `class` key, and `property` key is an array of strings, the class name will be the first element of the `property` array. |
| `state` | Optional | List of pseudo-class variants like `:hover` or `:focus` to generate for the utility. No default value. |
| `responsive` | Optional | Boolean indicating if responsive classes need to be generated. `false` by default. |
| `rfs` | Optional | Boolean to enable fluid rescaling. Have a look at the [RFS](https://getbootstrap.com/docs/5.0/getting-started/rfs/) page to find out how this works. `false` by default. |
