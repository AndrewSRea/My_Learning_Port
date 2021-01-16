# Bootstrap

## Build fast, responsive sites with Bootstrap

Quickly design and customize responsive mobile-first sites with Bootstrap, the world's most popular front-end open source toolkit (by Bootstrap's own reckoning), featuring [Sass](https://sass-lang.com/) variables and mixins, responsive grid system, extensive prebuilt components, and powerful JavaScript plugins.

## Installation of Bootstrap

There are two ways to install Bootstrap into your HTML document:

* Install Bootstrap's source Sass and JavaScript files via npm, Composer, or Meteor.

I was taught how to use npm packages through the Terminal window on my Visual Studio Code editor but again, we only covered that technology over the course of a week so I vaguely remember how to use npm packages. But I will be covering that technologyin a future folder in My_Learning_Port folder. So therefore, I will not be using this technology just yet as I work with Bootstrap.

* [jsDelivr](https://www.jsdelivr.com/) - When you only need to include Bootstrap's compiled CSS or JS, you can use jsDelivr.

I am familiar with this technology, as it is pretty the same as adding a CSS stylesheet link and a JavaScript ```<script>```link into the ```<head>``` of an HTML document. In fact, I will be incorporating a [starter template](https://github.com/AndrewSRea My_Learning_Port/blob/main/Bootstrap/starter-template.html) provided by [Bootstrap](https://getbootstrap.com/docs/5.0/getting-started/introduction/#starter-template) throughout all of the files inside this Bootstrap folder. 
This starter template provides the necessary Bootstrap CSS and the Bootstrap JavaScript and Popper.js needed to be able to incorporate
all the Bootstrap components into an HTML document.

### Side note

As [Sass](https://sass-lang.com/) was mentioned above, if Sass is a necessary component of Bootstrap, I may have to create a separate folder containing instructions and code examples for Sass. I will add this folder after this Bootstrap folder if I deem it necessary.

## Bootstrap Layout

So I have my starter template, ready to jump right in to building some layouts with Bootstrap. Let's go!

### Breakpoints

Breakpoints are the triggers in Bootstrap for how your responsive layout changes across device or viewport sizes.

#### Core concepts

* **Breakpoints are the building blocks or responsive design.** Use them to control when your layout can be adapted at a particular viewport or device size.

* **Use media queries to architect your CSS by breakpoint.** Media queries are a feature of CSS that allow you to conditionally apply styles based on a set of browser and operating system parameters. Bootstrap most commonly uses ```min-width``` in their media queries.

* **Mobile first, responsive design in the goal.** Bootstrap's CSS aims to apply the bare minimum of styles to make a layout work at the smallest breakpoint, and then layers on styles to adjust that design for larger devices. This optimizes your CSS, improves rendering time, and provides a great experience for your visitors.

#### Available breakpoints

Bootstrap inludes six default breakpoints, sometimes referred to as *grid tiers*, for building responsively. These breakpoints can be customized if you're using Bootstrap's source [Sass](https://sass-lang.com/) files.

| Breakpoint | Class infix | Dimensions |
| --- | --- | --- |
| X-Small | *None* | less than 576px |
| Small | `sm` | greater than or equal to 576px |
| Medium | `md` | greater than or equal to 768px |
| Large | `lg` | greater than or equal to 992px |
| Extra large | `xl` | greater than or equal to 1200px |
| Extra extra large | `xxl` | greater than or equal to 1400px |

