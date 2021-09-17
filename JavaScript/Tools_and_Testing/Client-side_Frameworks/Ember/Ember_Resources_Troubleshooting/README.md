# Ember resources and troubleshooting

Our final Ember article provides you with a list of resources that you can use to go further in your learning, plus some useful troubleshooting and other information.

## Further resources

* [Ember.JS Guides](https://guides.emberjs.com/release/)
    - [Tutorial: Super Rentals](https://guides.emberjs.com/release/tutorial/part-1/)
* [Ember.JS API Documentation](https://api.emberjs.com/ember/release)
* [Ember.JS Discord Server](https://discord.com/invite/emberjs) -- a forum/chat server where you can meet the Ember community, ask for help, and help others!

## General troubleshooting, gotchas, and misconceptions

This is nowhere near an extensive list, but it is a list of things that came up around the time of writing (latest update, May 2020).

### How do I debug what's going on in the framework?

For *framework-specific* things, there is the [ember-inspector add-on](https://guides.emberjs.com/release/ember-inspector/), which allows inspection of:

* Routes & Controllers
* Components
* Services
* Promises
* Data (i.e., from a remote API -- from ember-data, by default)
* Deprecation Information
* Render Performance

For general JavaScript debugging, check out our [guides on JavaScript Debugging](https://developer.mozilla.org/en-US/docs/Tools/Debugger) as well as interacting with the [browser's other debugging tools](https://developer.mozilla.org/en-US/docs/Tools). In any default Ember project, there will be two main JavaScript files, `vendor.js` and `{app-name}.js`. Both of these files are generated with sourcemaps, so when you open the `vendor.js` or `{app-name}.js` to search for relevant code, when a debugger is placed, the sourcemap will be loaded and the breakpoint will be placed in the pre-transpiled code for easier correlation to your project code.

For more information on sourcemaps, why they're needed, and what the ember-cli does with them, see the [Advanced Use: Asset Compilation](https://cli.emberjs.com/release/advanced-use/asset-compilation/) guide. Note that sourcemaps are enabled by default.

### `ember-data` comes pre-installed; do I need it?

Not at all. While `ember-data` solves *the most common problems* that any app dealing with data will run in to, it is possible to roll your own front-end data client. A common alternative to any fully-featured front-end data client is [The Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch).

Using the design patterns provided by the framework, a `Route` using `fetch()` would look something like this:
```
import Route from '@ember/routing/route';

export default class MyRoute extends Route {
    async model() {
        let response = await fetch('some/url/to/json/data');
        let json = await response.json();

        return {
            data: json;
        };
    }
}
```
See more information on [specifying the `Route`'s model](https://guides.emberjs.com/release/routing/specifying-a-routes-model/) here.

### Why can't I just use JavaScript?

This is the *most* common question Ember folks hear from people who have previous experience with [React](https://github.com/AndrewSRea/My_Learning_Port/tree/main/JavaScript/Tools_and_Testing/Client-side_Frameworks/React/Starting_with_React#getting-started-with-react). While it is technically possible to use JSX, or any other form of DOM creation, there has yet to be anything as robust as Ember's templating system. The intentional minimalism forces certain decisions, and allows for more consistent code, while keeping the template more structural rather than having them filled with bespoke logic.

See also: [ReactiveConf 2017: Secrets of the Glimmer VM](https://www.youtube.com/watch?v=nXCSloXZ-wc)

### What is the state of the `mut` helper?

`mut` was not covered in this tutorial and is really baggage from a transitional time when Ember was moving from two-way bound data to the more common and easier-to-reason-about one-way bound data flow. It could be thought of as a buil-time transform that wraps its argument with a setter function.

More concretely, using `mut` allows for template-only settings functions to be declared:
```
<Checkbox
    @value={{this.someData}}
    @onToggle={{fn (mut this.someData) (not this.someData)}}
/>
```
Whereas, without `mut`, a component class would be needed:
```
import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class Example extends Component {
    @tracked someData = false;

    @action
    setData(newValue) {
        this.someData = newValue;
    }
}
```
Which would then be called in the template like so:
```
<Checkbox @data={{this.someData}} @onChange={{this.setData}} />
```
Due to the concisenes of using `mut`, it may be desireable to reach for it. However, `mut` has unnatural semantics and has caused much confusion over the term of its existence.

There have been a couple of new ideas put together into the form of add-ons that use the public APIs, [`ember-set-helper`](https://github.com/pzuraq/ember-set-helper) and [`ember-box`](https://github.com/pzuraq/ember-box). Both of these try to solve the problems of `mut` by introducing more obvious/"less magic" concepts, avoiding built-time transforms and implicit Glimmer VM behavior.

With `ember-set-helper`:
```
<Checkbox
    @value={{this.someData}}
    @onToggle={{set this "someData" (not this.someData)}}
/>
```
With `ember-box`:
```
{{#let (box this.someData) as |someData|}}
    <Checkbox
        @value={{unwrap someData}}
        @onToggle={{update someData (not this.someData)}}
    />
{{/let}}
```
Note that none of these solutions are particularly common among members of the community, and as a whole, people are still trying to figure out an ergonomic and simple API for setting data in a template-only context, without backing JS.