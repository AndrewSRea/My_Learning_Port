# Express web framework (Node.js/JavaScript)

Express is a popular unopinionated web framework, written in JavaScript and hosted within the Node.js runtime environment. This module explains some of the key benefits of the framework, how to set up your development environment and how to perform common web development and deployment tasks.

## Prerequisites

Before starting this module, you will need to understand what server-side web programming and web frameworks are, ideally by reading the topics in our [Server-side website programming first steps](https://github.com/AndrewSRea/My_Learning_Port/tree/main/JavaScript/Server-Side_Website_Programming/Server-Side_First_Steps#server-side-website-programming-first-steps) module. A general knowledge of programming concepts and [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript) is highly recommended, but not essential to understanding the core concepts.

<hr>

**Note**: Mozilla Developer Network has many useful resources for learning JavaScript *in the context of client-side development*: [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript), [JavaScript Guide](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide), [JavaScript Basics](https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/JavaScript_basics), [JavaScript](https://github.com/AndrewSRea/My_Learning_Port/tree/main/JavaScript#javascript) (learning). The core JavaScript language and concepts are the same for server-side development on Node.js and this material will be relevant. Node.js offers [additional APIs](https://nodejs.org/dist/latest-v10.x/docs/api/) for supporting functionality that is useful in browserless environments (e.g. to create HTTP servers and access the file system), but does not support JavaScript APIs for working with the browser and DOM.

This guide will provide some information about working with Node.js and Express, and there are numerous other excellent resources on the Internet and in books -- some of these linked from [How do I get started with Node.js](https://stackoverflow.com/questions/2353818/how-do-i-get-started-with-node-js/5511507#5511507) (StackOverflow) and [What are the best resources for learning Node.js?](https://www.quora.com/What-is-the-greatest-resource-for-learning-Node-js-for-a-newbie) (Quora).

<hr>