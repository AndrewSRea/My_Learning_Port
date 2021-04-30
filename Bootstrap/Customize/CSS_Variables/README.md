# CSS variables

Use Bootstrap's CSS custom properties for fast and forward-looking design and development.

Bootstrap includes around two dozen [CSS custom properties (variables)](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties) in its compiled CSS, with dozens more on the way for improved customization on a per-component basis. These provide easy access to commonly used values like Bootstrap's theme colors, breakpoints, and primary font stacks when working in your browser's inspector, a code sandbox, or generral prototyping.

**All of Bootstrap's custom properties are prefixed with bs-** to avoid conflicts with third party CSS.

## Root variables

Here are the variables Bootstrap includes (note that the `:root` is required) that ccan be accessed anywhere Bootstrap's CSS is loaded. They're located in Bootstrap's `_root.scss` file and included in its compiled `dist` files.
```
:root {
    --bs-blue: #0d6efd;
    --bs-indigo: #6610f2;
    --bs-purple: #6f42c1;
    --bs-pink: #d63384;
    --bs-red: #dc3545;
    --bs-orange: #fd7e14;
    --bs-yellow: #ffc107;
    --bs-green: #198754;
    --bs-teal: #20c997;
    --bs-cyan: #0dcaf0;
    --bs-white: #fff;
    --bs-gray: #6c757d;
    --bs-gray-dark: #343a40;
    --bs-primary: #0d6efd;
    --bs-secondary: #6c757d;
    --bs-success: #198754;
    --bs-info: #0dcaf0;
    --bs-warning: #ffc107;
    --bs-danger: #dc3545;
    --bs-light: #f8f9fa;
    --bs-dark: #212529;
    --bs-font-sans-serif: system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", "Liberation Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
    --bs-font-monospace: SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
    --bs-gradient: linear-gradient(180deg, rgba(255, 255, 255, 0.15), rgba(255, 255, 255, 0));
}
```

## Component variables

Bootstrap is also beginning to make use of custom properties as local variables for various components. This way Bootstrap can reduce its compiled CSS, ensure styles aren't inherited in placces like nested tables, and allow some basic restyling and extending of Bootstrap components after Sass compilation.

Have a look at Bootstrap's table documentation for some [insight into how it's using CSS variables](). <!-- when you get the "Content" folder sorted, link to Content/Tables, header "How do the variants and accented tables work?" -->

Bootstrap is also using CSS variables across its grids--primarily for gutters--with more component usage coming in the future.

## Examples

CSS variables offer similar flexibility to Sass's variables, but without the need for compilation before being served to the browser. For example, this code is resetting the page's font and link styles with CSS variables.
```
body {
    font: 1rem/1.5 var(--bs-font-sans-serif);
}
a {
    color: var(--bs-blue);
}
```

[[Previous page]](https://github.com/AndrewSRea/My_Learning_Port/tree/main/Bootstrap/Customize/Components#components) - [[Top]](https://github.com/AndrewSRea/My_Learning_Port/tree/main/Bootstrap/Customize/CSS_Variables#css-variables) - [[Next page]](https://github.com/AndrewSRea/My_Learning_Port/tree/main/Bootstrap/Customize/Optimize#optimize)