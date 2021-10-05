# TypeScript support in Svelte

In the last article, we learned about Svelte stores and even implemented our own custom store to persist the app's information to Web Storage. We also had a look at using the transition directive to implement animations on DOM elements in Svelte.

We will now learn how to use TypeScript in Svelte applications. First, we'll learn what TypeScript is and what benefits it can bring us. Then we'll see how to configure our project to work with TypeScript files. Finally, we will go over our app and see what modifications we have to make to fully take advantage ot TypeScript features.

Note that our application is fully functional and porting it to TypeScript is completely optional. There are different opinions about it, and in this chapter we will talk briefly about the pros and cons of using TypeScript. Even if you are not planning to adopt it, this article will be useful for allowing you to learn what it has to offer and help you make your own decision. If you are not interested at all in TypeScript, you can skip to the next chapter, where we will look at different options for deploying our Svelte applications, further resources, and more.

## Code along with us

### Git

Clone the GitHub repo (if you haven't already done it) with:
```
git clone https://github.com/opensas/mdn-svelte-tutorial.git
```
Then, to get to the current app state, run:
```
cd mdn-svelte-tutorial/07-typescript-support
```
Or directly download the folder's content:
```
npx degit opensas/mdn-svelte-tutorial/07-typescript-support
```
Remember to run `npm install && npm run dev` to start your app in development mode.

### REPL

Unfortunately, [TypeScript support is not yet available in the REPL](https://github.com/sveltejs/svelte-repl/issues/130).

## TypeScript: optional static typing for JavaScript

[TypeScript]() is a superset of JavaScript that provides features such as optional static typing, classes, interfaces, and generics. The goal of TypeScript is to help catch mistakes early through its type system and make JavaScript development more efficient. One of the big benefits is enabling IDEs ([Integrated Development Environment](https://en.wikipedia.org/wiki/Integrated_development_environment))to provide a richer environment for spotting common errors as you type the code.

Best of all, JavaScript code is valid TypeScript code; TypeScript is a superset of JavaScript. You can rename most of your `.js` files to `.ts` files and they will still work.

Our TypeScript code will be able to run everywhere JavaScript can run. How is that possible? TypeScript "transpiles" our code to vanilla JavaScript. That means that it parses TypeScript code and produces the equivalent vanilla JavaScript code for browsers to run.

<hr>

**Note**: If you are curious about how TypeScript transpiles our code to JavaScript, you can have a look at the [TypeScript Playground](https://www.typescriptlang.org/play?target=1&e=4#example/hello-world).

<hr>

First class TypeScript support has been Svelte's most requested feature for quite some time. Thanks to the hard work of the Svelte team, together with many contributors, we have an [official solution](https://svelte.dev/blog/svelte-and-typescript) ready to be put to the test. In this section, we'll show you how to setup a Svelte project with TypeScript support to give it a try.

## Why TypeScript?

TypeScript's main advantages are:

* Early spotted bugs: The compiler checks types at compile time and provides error reporting.
* Readability: Static typing gives the code more structure, making it self-documenting and more readable.
* Rich IDE support: Type information allows code editors and IDEs to offer features like code navigation, autocompletion, and smarter hints.
* Safer refactoring: Types allow IDEs to know more about your code, and assist you while refactoring large portions of your code base.
* Type inference: Enables you to take advantage of many TypeScript features even without declaring variable types.
* Availability of new and future JavaScript features: TypeScript transpiles many recent [ES6 features]() to plain old-school JavaScript, allowing you to use them even on user-agents that don't support them natively yet.

TypeScript also has some disadvantages:

* Not true static typing: Types are only checked at compile time, and they are removed from the generated code.
* Steep learning curve: Even though TypeScript is a superset of JavaScript and not a completely new language, there is a considerable learning curve, especially if you have no experience at all with static languages like Java or C#.
* More code: You have to write and maintain more code.
* No replacement for automatic tests: Event though types might help you catch several bugs, TypeScript is not a true replacement for a comprehensive suite of automated tests.
* Boiler plate code: Working with types, classes, interfaces, and generics can lead to over-engineered code bases.

There seem to be a broad consensus that TypeScript is particularly well-suited for large-scale projects, with many developers working on the same code base. And it is indeed being used by several large-scale projects, like Angular 2, Vue 3, Ionic, Visual Studio Code, Jest, and even the Svelte compiler. Nevertheless, some developers prefer to use it even on small projects like the one we are developing.

In the end, it's your decision. In the following sections, we hope to give you more evidence to make up your mind about it.










cd JavaScript/Tools_and_Testing/Client-side_Frameworks/Svelte/TypeScript_in_Svelte