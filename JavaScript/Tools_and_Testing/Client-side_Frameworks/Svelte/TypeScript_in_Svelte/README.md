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

[TypeScript]() is a superset of JavaScript that provides features such as optional static typing, classes, interfaces, and generics. The goal of TypeScript is to help catch mistakes early through its type system and make JavaScript development more efficient. One of the big benefits is enabling IDEs ([Integrated Development Environment](https://en.wikipedia.org/wiki/Integrated_development_environment)) to provide a richer environment for spotting common errors as you type the code.

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

## Creating a Svelte TypeScript project from scratch

You can start a new Svelte TypeScript project using the [standard template](https://github.com/sveltejs/template). All you have to do is run the following terminal commands (run them somewhere where you are storing your Svelte test projects -- it creates a new directory):
```
npx degit sveltejs/template svelte-typescript-app

cd svelte-typescript-app

node scripts/setupTypeScript.js
```
This creates a starter project that includes TypeScript support, which you can then modify as you wish.

Then you'll have to tell npm to download dependencies and start the project in development mode, like we usually do:
```
npm install

npm run dev
```

## Adding TypeScript support to an existing Svelte Project

To add TypeScript support to an existing Svelte project, you can [follow these instructions](https://svelte.dev/blog/svelte-and-typescript#Adding_TypeScript_to_an_existing_project). Alternatively, you can download the [`setupTypeScript.js`](https://github.com/sveltejs/template/blob/master/scripts/setupTypeScript.js) file to a `scripts` folder inside your project's root folder, and then run `node scripts/setupTypeScript.js`.

You can even use `degit` to download the script. That's what we will do to start porting our application to TypeScript.

<hr>

**Note**: Remember that you can run `npx degit opensas/mdn-svelte-tutorial/07-typescript-support svelte-todo-typescript` to get the complete to-do list application in JavaScript before you start porting it to TypeScript.

<hr>

Go to the root directory of the project and enter these commands:
```
npx degit sveltejs/template/script scripts     # download script file to a scripts folder

node scripts/setupTypeScript.js                # run it
```
You will need to rerun your dependency manager to get started.
```
npm install          # download new dependencies

npm run dev          # start the app in development mode
```
These instructions apply to any Svelte project you'd like to convert to TypeScript. Just take into account that the Svelte community is constantly improving Svelte TypeScript support, so you should run `npm update` regularly to take advantage of the latest changes.

<hr>

**Note**: If you find any trouble working with TypeScript inside a Svelte application, have a look at this [troubleshooting/FAQ section about TypeScript support](https://github.com/sveltejs/language-tools/blob/master/docs/preprocessors/typescript.md#troubleshooting--faq).

<hr>

As we said before, TypeScript is a superset of JavaScript, so your application will run without modifications. Currently you will be running a regular JavaScript application with TypeScript support enabled, without taking advantage of any of the features that TypeScript provides. You can now start adding types progressively.

Once you have TypeScript configured, you can start using it from a Svelte component by adding a `<script lang="ts">` at the beginning of the script section. To use it from regular JavaScript files, just change the file extension from `.js` to `.ts`. You'll also have to update any corresponding import statements. (Don't include the `.ts` in your `import` statements. TypeScript chose to omit those extensions.)

<hr>

**Note**: Using TypeScript in component markup sections is [not supported yet](https://github.com/sveltejs/svelte/issues/4701). You'll have to use JavaScript from the markup, and TypeScript in the `<script lang="ts">` section.

<hr>

## Improved developer experience with TypeScript

TypeScript provides code editors and IDEs with lots of information to allow them to deliver a friendlier development experience.

We'll use [Visual Studio Code](https://code.visualstudio.com/) to do a quick test and see how we can get autocompletion hints and type-checking as we're writing components.

<hr>

**Note**: If you don't wish to use VS Code, we also provide instructions for using TypeScript error checking from the terminal instead, slightly later on.

<hr>

There is work in progress to support TypeScript in Svelte projects in several code editors. The most complete support so far is available in the [Svelte for VS Code extension](https://marketplace.visualstudio.com/items?itemName=svelte.svelte-vscode), which is developed and maintained by the Svelte team. This extension offers type checking, inspecting, refactoring, intellisense, hover-information, auto-completion, and other features. This kind of developer assistance is another good reason to start using TypeScript in your projects.

<hr>

**Note**: Make sure you are using [Svelte for VS Code](https://marketplace.visualstudio.com/items?itemName=svelte.svelte-vscode) and NOT the old "Svelte" by James Birtles, which has been discontinued. In case you have it installed, you should uninstall it and install the official Svelte extension instead.

<hr>

Anyway, assuming you are inside the VS Code application, from the root of your project's folder, type `code .` (the trailing dot tells VS Code to open the current folder) to open the code editor. VS Code will tell you that there are recommended extensions to install.

![Image of an alert box showing extension recommendations](https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Svelte_TypeScript/01-vscode-extension-recommendations.png)

Clicking *Install all* will install Svelte for VS Code.

![Image of the Svelte for VS Code extension](https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Svelte_TypeScript/02-svelte-for-vscode.png)

We can also see that the `setupTypeScript.js` file made a couple of changes to our project. The `main.js` file has been renamed to `main.ts`, which means that VS Code can provide hover-information on our Svelte components:

![Image of altered `main.js` file](https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Svelte_TypeScript/03-vscode-hints-in-main-ts.png)

We also get type-checking for free. If we pass an unknown property in the options parameter of the `App` constructor (for example, a typo like `traget` instead of `target`), TypeScript will complain:

![Image of an error message created from type-checking](https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Svelte_TypeScript/04-vscode-type-checking-in-main-ts.png)

In the `App.svelte` component, the `setupTypeScript.js` script has added the `lang="ts"` attribute to the `<script>` tag. Moreover, thanks to type inference, in many cases we won't even need to specify types to get code assistance. For example, if you start adding an `ms` property to the `Alert` component call, TypeScript will infer from the default value that the `ms` property should be a number:

![Image of Svelte extension suggesting alternative code examples](https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Svelte_TypeScript/05-vscode-type-inference-and-code-assistance.png)

And if you pass something that is not a number, it will complain about it:

![Image of Svelte extension error message due to incorrect assigned "type"](https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Svelte_TypeScript/06-vscode-type-checking-in-components.png)

The application template has a `validate` script configured that runs `svelte-check` against your code. This package allows you to detect errors and warnings normally displayed by a code editor from the command line, which makes it pretty useful for running it in a continuous integration (CI) pipeline. Just run `npm run validate` to check for unused CSS, and return A11y hints and TypeScript compile errors.

In this case, if you run `npm run validate` (either in the VS Code console or terminal), you will get the following error:

![Image showing error message in a terminal after running `nom run validate`](https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Svelte_TypeScript/07-vscode-svelte-check.png)

Even better, if you run it from the VS Code integrated terminal (you can open it with the <kbd>Ctrl</kbd> + <kbd>`</kbd> keyboard shortcut), <kbd>Cmd</kbd>/<kbd>Ctrl</kbd> + clicking on the file name will take you to the line containing the error.

You can also run the `validate` script in watch mode with `npm run validate -- --watch`. In this case, the script will execute whenever you change any file. If you are running this in your regular terminal, you are advised to keep it running in the background in a separate terminal window of its own so that it can keep reporting errors but won't interfere with other terminal usage.

## Creating a custom type

TypeScript supports structural typing. Structural typing is a way of relating types based solely on their members, even if you do not explicitly define the type.

We'll define a `TodoType` type to see how TypeScript enforces that anything passed to a component expecting a `TodoType` will be structurally compatible with it.

1. Inside the `src` folder, create a `types` folder.

2. Add a `todo.type.ts` file inside it.

3. Give `todo.type.ts` the following content:
```
export type TodoType = {
    id: number,
    name: string,
    completed: boolean
}
```

<hr>

**Note**: The Svelte template uses [svelte-preprocess](https://github.com/sveltejs/svelte-preprocess) 4.0.0 to support TypeScript. From that version onward, you have to use `export`/`import` type syntax to import types and interfaces. Check [this section of the troubleshooting guide](https://github.com/sveltejs/language-tools/blob/master/docs/preprocessors/typescript.md#how-do-i-import-interfaces-into-my-svelte-components-i-get-errors-after-transpilation) for more information.

<hr>

**Personal note**: After following the instructions above, and adding `lang="ts"` attributes to various files as instructed below, I started receiving multiple error messages in my terminal for each of the components in which I added the `lang="ts"` attribute -- many of which are not described below.

So I have decided not to add TypeScript to my Svelte To-Do app for this reason. I may try to create this app again in a separate folder and try to add TypeScript to that second app.

<hr>

4. Now we'll use `TodoType` from our `Todo.svelte` component. First, add the `lang="ts"` to our `<script>` tag.

5. Let's `import` the type and use it to declare the `todo` property. Replace the `export let todo` line with the following:
```
import type { TodoType } from '../types/todo.type';

export let todo: TodoType;
```

<hr>

**Note**: Another reminder -- when importing a `.ts` file, you have to omit the extension. Check the [`import` section](https://www.typescriptlang.org/docs/handbook/modules.html#import) of the TypeScript manual for more information.

<hr>

6. Now from `Todos.svelte`, we will instantiate a Todo component with a literal object as its parameter before the call to the `MoreActions` component, like this:
```
<hr />

<Todo todo={ { name: 'a new task with no id!', completed: false } } />

<!-- MoreActions -->
<MoreActions {todos} />
```

7. Add the `lang="ts"` to the `<script>` tag of the `Todos.svelte` component, so that it knows to use the type checking we have specified.

We will get the following error:
```
Property 'id' is missing in type '{ name: string; completed: false; }' but required in type 'TodoType'.
```
By now, you should get an idea about the kind of assistance we can get from TypeScript when building Svelte projects.

Now we will undo these changes in order to start porting our application to TypeScript, so we won't be bothered with all the validate warnings.

1. Remove the flawed todo and the `lang="ts"` attribute from the `Todos.svelte` file.
2. Also, remove the import of `TodoType` and the `lang="ts"` from `Todo.svelte`.

We'll take care of them properly, later on.

## Porting our to-do list app to TypeScript

Now we are ready to start porting our to-do list application to take advantage of all the features that TypeScript offers us.

Let's start by running the validate script in watch mode inside your project root:
```
npm run validate -- --watch
```
This should output something like the following:
```
svelte-check "--watch"

Loading svelte-check in workspace: ./svelte-todo-typescript
Getting Svelte diagnostics...
====================================
svelte-check found no errors and no warnings
```
Note that if you are using a supporting code editor like VS Code, a simple way to start porting a Svelte component is to just add the `<script lang="ts">` at the top of your component and look for the three-dotted hints:

![Image of VS Code window showing code hint suggestions](https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Svelte_TypeScript/09-vscode-alert-hints.png)

### Alert.svelte

Let's start with our `Alert.svelte` component.

1. Add `lang="ts"` into your `Alert.svelte` component's `<script>` tag. You'll see some warnings in the output of the `validate` script:
```
$ npm run validate -- --watch
> svelte-check "--watch"

./svelte-todo-typescript
Getting Svelte diagnostics...
====================================

./svelte-todo-typescript/src/components/Alert.svelte:8:7
Warn: Variable 'visible' implicitly has an 'any' type, but a better type may be inferred from usage. (ts)
    let visible

./svelte-todo-typescript/src/components/Alert.svelte:9:7
Warn: Variable 'timeout' implicitly has an 'any' type, but a better type may be inferred from usage. (ts)
    let timeout

./svelte-todo-typescript/src/components/Alert.svelte:11:28
Warn: Parameter 'message' implicitly has an 'any' type, but a better type may be inferred from usage. (ts)
Change = (message, ms) => {

./svelte-todo-typescript/src/components/Alert.svelte:11:37
Warn: Parameter 'ms' implicitly has an 'any' type, but a better type may be inferred from usage. (ts)
(message, ms) => {
```

2. You can fix these by specifying the corresponding types, like so:
```
export let ms = 3000;

    let visible: boolean;
    let timeout: number;

    const onMessageChange = (message: string, ms: number) => {
        clearTimeout(timeout)
        if (!message) {             // hide Alert if message is empty
```

<hr>

**Note**: There's no need to specify the `ms` type with `export let ms:number = 3000` because TypeScript is already inferring it from its default value.

<hr>

### MoreActions.svelte

Now we'll do the same for the `MoreActions.svelte` component.

1. Add the `lang="ts"` attribute, like before. TypeScript will warn us about the `todos` prop and the `t` variable in the call to `todos.filter(t => ...)`.
```
Warn: Variable 'todos' implicitly has an 'any' type, but a better type may be inferred from usage. (ts)
    export let todos

Warn: Parameter 't' implicitly has an 'any' type, but a better type may be inferred from usage. (ts)
    $: completedTodos = todos.filter(t => t.completed).length
```

2. We will use the `TodoType` we already defined to tell TypeScript that `todos` is a `TodoType` array -- replace your `export let todos` line with the following:
```
import type { TodoType } from '../types/todo.type';

export let todos: TodoType[];
```
Notice that now TypeScript can infer that the `t` variable in `todos.filter(t => t.completed)` is of type `TodoType`. Nevertheless, if we think it makes our code easier to read, we could specify it like this:
```
$: completedTodos = todos.filter((t: TodoType) => t.completed).length
```
Most of the time, TypeScript will be able to correctly infer the reactive variable type, but sometimes you might get an "implicitly has 'any' type" error when working with reactive assignments. In those cases, you can declare the typed variable in a different statement, like this:
```
let completedTodos: number
$: completedTodos = todos.filter((t: TodoType) => t.completed).length
```
You can't specify the type in the reactive assignment itself. The following statement `$: completedTodos: number = todos.filter[...]` is invalid. For more information, read [How do I type reactive assignments? / I get an "implicitly has type 'any' error"](https://github.com/sveltejs/language-tools/blob/master/docs/preprocessors/typescript.md#how-do-i-type-reactive-assignments--i-get-an-implicitly-has-type-any-error).

### FilterButton.svelte

Now we'll take care of the `FilterButton` component.

1. Add the `lang="ts"` attribute to the `<script>` tag, as usual. You'll notice there are no warnings -- TypeScript infers the type of the filter variable from the default value. But we know that there are only three values for the filter: all, active, and completed. So we can let TypeScript know about them by creating an enum Filter.

2. Create a `filter.enum.ts` file in the `types` folder.

3. Give it the following contents:
```
export enum Filter {
    ALL = 'all',
    ACTIVE = 'active',
    COMPLETED = 'completed',
}
```

4. Now we will use this from the `FilterButton` component. Replace the content of the `FilterButton.svelte` file with the following:
```
<!-- components/FilterButton.svelte -->
<script lang="ts">
    import { Filter } from '../types/filter.enum';

    export let filter: Filter = Filter.ALL;
</script>

<div class="filters btn-group stack-exception">
    <button class="btn toggle-btn" class:btn__primary={filter === Filter.ALL} aria-pressed={filter === Filter.ALL} on:click={()=> filter = Filter.ALL} >
        <span class="visually-hidden">Show</span>
        <span>All</span>
        <span class="visually-hidden">tasks</span>
    </button>
    <button class="btn toggle-btn" class:btn__primary={filter === Filter.ACTIVE} aria-pressed={filter === Filter.ACTIVE} on:click={()=> filter = Filter.ACTIVE} >
        <span class="visually-hidden">Show</span>
        <span>Active</span>
        <span class="visually-hidden">tasks</span>
    </button>
    <button class="btn toggle-btn" class:btn__primary={filter === Filter.COMPLETED} aria-pressed={filter === Filter.COMPLETED} on:click={()=> filter = Filter.COMPLETED} >
        <span class="visually-hidden">Show</span>
        <span>Completed</span>
        <span class="visually-hidden">tasks</span>
    </button>
</div>
```
Here we are just importing the `Filter` enum, and using it instead of the string values we used previously.

### Todos.svelte

We will also use the `Filter` enum in the `Todos.svelte` component.

1. First, add the `lang="ts"` attribute to it, as before.

2. Next, import the `Filter` enum -- add the following `import` statement below your existing ones:
```
import { Filter } from '../types/filter.enum';
```

3. Now we will use it whenever we reference the current filter. Replace your two filter-related blocks with the following:
```
let filter: Filter = Filter.ALL;
    const filterTodos = (filter: Filter, todos) =>
        filter === Filter.ACTIVE ? todos.filter(t => !t.completed) :
        filter === Filter.COMPLETED ? todos.filter(t => t.completed) :
        todos

$: {
    if (filter === Filter.ALL)              $alert = 'Browsing all todos'
    else if (filter === Filter.ACTIVE)      $alert = 'Browsing active todos'
    else if (filter === Filter.COMPLETED)   $alert = 'Browsing completed todos'
}
```

4. `validate` will still give us some warnings from `Todos.svelte`. Let's fix them.

Start by importing the `TodoType` and telling TypeScript that our `todos` variable is an array of `TodoType`. Replace `export let todos = []` with the following two lines:
```
import type { TodoType } from '../types/todo.type';

export let todos: TodoType[] = [];
```

5. Next, we'll specify all the missing types. The variable `todoStatus`, which we used to programmatically access the methods exposed by the `TodosStatus` component, is of type `TodosStatus`. And each `todo` will be of type `TodoType`.

Update your `<script>` section to look like this:
```
<script lang="ts">
    import FilterButton from './FilterButton.svelte';
    import Todo from './Todo.svelte';
    import MoreActions from './MoreActions.svelte';
    import NewTodo from './NewTodo.svelte';
    import TodosStatus from './TodosStatus.svelte';
    import { alert } from '../stores';

    import { Filter } from '../types/filter.enum';

    import type { TodoType } from '../types/todo.type';

    export let todos: TodoType[] = [];

    let todosStatus: TodosStatus;     // reference to TodosStatus instance

    $: newTodoId = todos.length > 0 ? Math.max(...todos.map(t => t.id)) + 1 : 1

    function addTodo(name: string) {
        todos = [...todos, { id: newTodoId, name, completed: false}];
        $alert = `Todo '${name}' has been added`;
    }

    function removeTodo(todo: TodoType) {
        todos = todos.filter(t => t.id !== todo.id);
        todosStatus.focus();     // give focus to status heading
        $alert = `Todo '${todo.name}' has been deleted`;
    }

    function updateTodo(todo: TodoType) {
        const i = todos.findIndex(t => t.id === todo.id);
        if (todos[i].name !== todo.name)            $alert = `todo '${todos[i].name}' has been renamed to '${todo.name}'`
        if (todos[i].completed !== todo.completed)  $alert = `todo '${todos[i].name}' marked as ${todo.completed ? 'completed' : 'active'}`
        todos[i] = { ...todos[i], ...todo }
    }

    let filter: Filter = Filter.ALL;
    const filterTodos = (filter: Filter, todos: TodoType[]) =>
        filter === Filter.ACTIVE ? todos.filter(t => !t.completed) :
        filter === Filter.COMPLETED ? todos.filter(t => t.completed) :
        todos

    $: {
        if (filter === Filter.ALL)              $alert = 'Browsing all todos'
        else if (filter === Filter.ACTIVE)      $alert = 'Browsing active todos'
        else if (filter === Filter.COMPLETED)   $alert = 'Browsing completed todos'
    }

    const checkAllTodos = (completed: boolean) => {
        todos = todos.map(t => ({...t, completed}));
        $alert = `${completed ? 'Checked' : 'Unchecked'} ${todos.length} todos`;
    }
    const removeCompletedTodos = () => {
        $alert = `Removed ${todos.filter(t => t.completed).length} todos`;
        todos = todos.filter(t => !t.completed);
    }
</script>
```













cd JavaScript/Tools_and_Testing/Client-side_Frameworks/Svelte/TypeScript_in_Svelte