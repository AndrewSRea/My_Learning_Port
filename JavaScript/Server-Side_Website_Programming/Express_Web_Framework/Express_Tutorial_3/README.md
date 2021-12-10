# Express Tutorial Part 3: Using a Database (with Mongoose)

This article briefly introduces databases, and how to use them with Node/Express apps. It then goes on to show how we can use [Mongoose](https://mongoosejs.com/) to provide database access for the [LocalLibrary](https://github.com/AndrewSRea/My_Learning_Port/tree/main/JavaScript/Server-Side_Website_Programming/Express_Web_Framework/Express_Tutorial_Local_Library#express-tutorial-the-local-library-website) website. It explains how object schema and models are declared, the main field types, and basic validation. It also briefly shows a few of the main ways in which you can access model data.

## Overview

Library staff will use the Local Library website to store information about books and borrowers, while library members will use it to browse and search for books, find out whether there are any copies available, and then reserve or borrow them. In order to store and retrieve information efficiently, we will store it in a *database*.

Express apps can use many different databases, and there are several approaches you can use for performing **C**reate, **R**ead, **U**pdate, and **D**elete (CRUD) operations. This tutorial provides a brief overview of some of the available options and then goes on to show in detail the particular mechanisms selected.

### What databases can I use?

*Express* apps can use any database supported by *Node* (*Express* itself doesn't define any specific additional behavior/requirements for database management). There are [many popular options](https://expressjs.com/en/guide/database-integration.html), including PostgreSQL, MySQL, Redis, SQLite, and MongoDB.

When choosing a database, you should consider things like time-to-productivity/learning curve, performance, ease of replication/backup, cost, community support, etc. While there is no single "best" database, almost any of the popular solutions should be more than acceptable for a small-to-medium-sized site like our Local Library.

For more information on the options, see [Database integration](https://expressjs.com/en/guide/database-integration.html) (Express docs).

### What is the best way to interact with a database?

There are two common approaches for interacting with a database:

* Using the database's native query language (e.g. SQL).
* Using an Object Data Model (ODM) or an Object Relational Model (ORM). An ODM/ORM represents the website's data as JavaScript objects, which are then mapped to the underlying database. Some ORMs are tied to a specific database, while others provide a database-agnostic backend.

The very best *performance* can be gained by using SQL, or whatever query language is supported by the database. ODMs are often slower because they use translation code to map between objects and the database format, which may not use the most efficient database queries. (This is particularly true if the ODM supports different database backends, and must make greater compromises in terms of what database features are supported.)

The benefit of using an ORM is that programmers can continue to think in terms of JavaScript objects rather than database semantics -- this is particularly true if you need to work with different databases (on either the same or different websites). They also provide an obvious place to perform data validation.

<hr>

**Note**: Using ODM/ORMs often results in lower costs for development and maintenance! Unless you're very familiar with the native query language or performance is paramount, you should strongly consider using an ODM.

<hr>

### What ORM/ODM should I use?

There are many ODM/ORM solutions available on the NPM package manager site. (Check out the [odm](https://www.npmjs.com/search?q=keywords:odm) and [orm](https://www.npmjs.com/search?q=keywords:orm) tags for a subset!)

A few solutions that were popular at the time of writing are:

* [Mongoose](https://www.npmjs.com/package/mongoose): Mongoose is a [MongoDB](https://www.mongodb.com/) object modeling tool designed to work in an asynchronous environment.
* [Waterline](https://www.npmjs.com/package/waterline): An ORM extracted from the Express-based [Sails](https://sailsjs.com/) web framework. It provides a uniform API for accessing numerous different databases, including Redis, MySQL, LDAP, MongoDB, and Postgres.
* [Bookshelf](https://www.npmjs.com/package/bookshelf): Features both promise-based and traditional callback interfaces, providing transaction support, eager/nested-eager relation loading, polymorphic associations, and support for one-to-one, one-to-many, and many-to-many relations. Works with PostgreSQL, MySQL, and SQLite3.
* [Objection](https://www.npmjs.com/package/objection): Makes it as easy as possible to use the full power of SQL and the underlying database engine (supports SQLite3, Postgres, and MySQL).
* [Sequelize](https://www.npmjs.com/package/sequelize): A promise-based ORM for Node.js and io.js. It supports the dialects PostgreSQL, MySQL, MariaDB, SQLite, and MSSQL, and features solid transaction support, relations, read replication, and more.
* [Node ORM2](https://node-orm.readthedocs.io/en/latest/): An Object Relationship Manager for NodeJS. It supports MySQL, SQLite, and Progress, helping to work with the database using an object-oriented approach.
* [GraphQL](https://graphql.org/): Primarily a query language for restful APIs, GraphQL is very popular, and has features available for reading data from databases.

As a general rule, you should consider both the features provided and the "community activity" (downloads, contributions, bug reports, quality of documentation, etc.) when selecting a solution. At the time of writing, Mongoose is by far the most popular ODM, and is a reasonable choice if you're using MongoDB for your database.