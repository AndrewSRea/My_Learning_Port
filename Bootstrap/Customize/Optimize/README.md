# Optimize

Keep your projects lean, responsive, and maintainable so you can deliver the best experience and focus on more important jobs.

## Lean Sass imports

When using Sass in your asset pipeline, make sure you optimize Bootstrap by only `@import`ing the components you need. Your largest optimizations will likely come from the `Layout & Components` section of Bootstrap's `bootstrap.scss`.
```
// Configuration
@import "functions";
@import "variables";
@import "mixins";
@import "utilities";

// Layout & components
@import "root";
@import "reboot";
@import "type";
@import "images";
@import "containers";
@import "grid";
@import "tables";
@import "forms";
@import "buttons";
@import "transitions";
@import "dropdown";
@import "button-group";
@import "nav";
@import "navbar";
@import "card";
@import "accordion";
@import "breadcrumb";
@import "pagination";
@import "badge";
@import "alert";
@import "progress";
@import "list-group";
@import "close";
@import "toasts";
@import "modal";
@import "tooltip";
@import "popover";
@import "carousel";
@import "spinners";
@import "offcanvas";

// Helpers
@import "helpers";

// Utilities
@import "utilities/api";
```