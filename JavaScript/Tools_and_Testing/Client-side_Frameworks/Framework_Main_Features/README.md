# Framework main features

Each major JavaScript framework has a different approach to updating the DOM, handling browser events, and providing an enjoyable developer experience. This article will explore the main features of "the big 4" frameworks, looking at how frameworks tend to work from a high level, and the differences between them.

## Domain-specific languages

All of the frameworks discussed in this module are powered by JavaScript, and allow you to use domain-specific languages (DSLs) in order to build your applications. In particular, React has popularized the use of **JSX** for writing its components, while Ember utilizes **Handlebars**. Unlike HTML, these languages know how to read data variables, and this data can be used to streamline the process of writing your UI.

Angular apps often make heavy use of **TypeScript**. TypeScript is not concerned with the writing of user interfaces, but it is a domaijn-specific language, and has significant differences to vanilla JavaScript.

DSLs can't be read by the browser directly; they must be transformed into JavaScript or HTML first. [Transformation is an extra step in the development process](https://github.com/AndrewSRea/My_Learning_Port/tree/main/JavaScript/Tools_and_Testing/Client-side_Web_Dev_Tools/Client-side_Tooling#transformation), but framework tooling generally includes the required tools to handle this step, or can be adjusted to include this step. While it is possible to build framework apps without using these domain-specific languages, embracing them will streamline your development process and make it easier to find help from the communities around those frameworks.

### JSX

[JSX](https://reactjs.org/docs/introducing-jsx.html), which stands for JavaScript and XML, is an extension of JavaScript that brings HTML-like syntax to a JavaScript environment. It was invented by the React team for use in React applications, but can be used to develop other applications -- like Vue apps, for instance.

The following shows a simple JSX example:
```
const subject = "World";
const header = (
    <header>
        <h1>Hello, {subject}!</h1>
    </header>
);
```
This expresion represents an HTML [`<header>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/header) element with an [`<h1>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/Heading_Elements) element inside. The curly braces around `subject` on line 4 tell the application to read the value of the `subject` constant and insert it into our `<h1>`.

When used with React, the JSX from the previous snippet would be compiled into this:
```
var subject = "World";
var header = React.createElement("header", null,
    React.createElement("h1", null, "Hello, ", subject, "!")
);
```
When ultimately rendered by the browser, the above snippet will produce HTML that looks like this:
```
<header>
    <h1>Hello, World!</h1>
</header>
```

### Handlebars

The [Handlebars](https://handlebarsjs.com/) templating language is not specific to Ember applications, but it is heavily utilized in Ember apps. Handlebars code resembles HTML, but it has the option of pulling data in from elsewhere. This data can be used to influence the HTML that an application ultimately builds.

Like JSX, Handlebars uses curly braces to inject the value of a variable. Handlebars uses a double-pair of curly braces, instead of a single pair.

Given this Handlebars template:
```
<header>
    <h1>Hello, {{subject}}!</h1>
</header>
```
And this data:
```
{
    subject: "World"
}
```
Handlebars will build HTML like this:
```
<header>
    <h1>Hello, World!</h1>
</header>
```

### TypeScript

[TypeScript](https://www.typescriptlang.org/) is a *superset* of JavaScript, meaning it extends JavaScript -- all JavaScript code is valid TypeScript, but not the other way around. TypeScript is useful for the strictness it allows developers to enforce on their code. For instance, consider a function `add()`, which takes integers `a` and `b` and returns their sum.

In JavaScript, that function could be written like this:
```
function add(a, b) {
    return a + b;
}
```
This code might be trivial for someone accustomed to JavaScript, but it could still be clearer. JavaScript lets us use the `+` operator to concatenate strings together, so this function would technically still work it `a` and `b` were strings -- it just might no give you the result you'd expect. What if we wanted to only allow numbers to be passed into this function? TypeScript makes that possible:
```
function add(a: number, b: number) {
    return a + b;
}
```
The `: number` written after each parameter here tells TypeScript that both `a` and `b` must be numbers. If we were to use this function and pass `'2'` into it as an argument, TypeScript would raise an error during compilation, and we would be forced to fix our mistake. We could write our own JavaScript that raises these errors for us, but it would make our source code significantly more verbose. It probably makes more sense to let TypeScript handle such checks for us.

## Writing components

As mentioned in the previous chapter, most frameworks have some kind of component model. React components can be written with JSX, Ember components with Handlebars, and Angular and Vue components with a tempting syntax that lightly extends HTML.

Regardless of their opinions on how components should be written, each framework's components offer a way to describe the external properties they may need, the internal state that the component should manage, and the events a user can trigger on the component's markup.

