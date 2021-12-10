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

### Using Mongoose and MongoDB for the LocalLibrary

For the *LocalLibrary* example (and the rest of this topic), we're going to use the [Mongoose ODM](https://www.npmjs.com/package/mongoose) to acess our library data. Mongoose acts as a front end to [MongoDB](https://www.mongodb.com/what-is-mongodb), an open source [NoSQL](https://en.wikipedia.org/wiki/NoSQL) database that uses a document-oriented data model. A "collection" of "documents" in a MongoDB database [is analogous to](https://docs.mongodb.com/manual/core/databases-and-collections/#collections) a "table of rows" in a relational database.

This ODM and database combination is extremely popular in the Node community, partially because the document storage and query system looks very much like JSON, and is hence familiar to JavaScript developers.

<hr>

**Note**: You don't need to know MongoDB in order to use Mongoose, although parts of the [Mongoose documentation](https://mongoosejs.com/docs/guide.html) *are* easier to use and understand if you are already familiar with MongoDB.

<hr>

The rest of this tutorial shows how to define and access the Mongoose schema and models for the [LocalLibrary website](https://github.com/AndrewSRea/My_Learning_Port/tree/main/JavaScript/Server-Side_Website_Programming/Express_Web_Framework/Express_Tutorial_Local_Library#express-tutorial-the-local-library-website).

## Designing the LocalLibrary models

Before you jump in and start coding the models, it's worth taking a few minutes to think about what data we need to store and the relationships between the different objects.

We know that we need to store information about books (title, summary, author, genre, ISBN) and that we might have multiple copies available (with globally unique ids, availability statuses, etc.). We might need to store more information about the author than just their name, and there might be multiple authors with the same or similar names. We want to be able to sort information based on the book title, author, genre, and category.

When designing your models, it makes sense to have separate models for every "object" (a group of related information). In this case, some obvious candidates for these models are books, book instances, and authors.

You might also want to use models to represent selection-list options (e.g. like a drop-down list of choices), rather than hard-coding the choices into the website itself -- this is recommended when all the options aren't known upfront or may change. A good example is a genre (e.g. fantasy, science fiction, etc.).

Once we've decided on our models and fields, we need to think about the relationships between them.

With that in mind, the UML association diagram below shows the models we'll define in this case (as boxes). As discussed above, we've created models for the book (the generic details of the book), book instance (status of specific physical copies of the book available in the system), and author. We have also decided to have a model for the genre so that values can be created dynamically. We've decided not to have a model for the `BookInstance:status` -- we will hard code the acceptable values because we don't expect these to change. Within each of the boxes, you can see the model name, the field names and types, and also the methods and their return types.

The diagram also shows the relationships between the models, including their *multiplicities*. The multiplicities are the numbers on the diagram showing the numbers (maximum and minimum) of each model that may be present in the relationship. For example, the connecting line between the boxes shows that `Book` and a `Genre` are related. The numbers close to the `Book` model show that a `Genre` must have zero or more `Book`s (as many as you like), while the numbers on the other end of the line next to the `Genre` show that a book can have zero or more associated `Genre`s.

<hr>

**Note**: As discussed in our [Mongoose primer](https://github.com/AndrewSRea/My_Learning_Port/tree/main/JavaScript/Server-Side_Website_Programming/Express_Web_Framework/Express_Tutorial_3#mongoose-primer) below, it is often better to have the field that defines the relationship between the documents/models in just *one* model. (You can still find the reverse relationship by searching for the associated `_id` in the other model.) Below we have chosen to define the relationship between `Book`/`Genre` and `Book`/`Author` in the Book schema, and the relationship between the `Book`/`BookInstance` schema. This choice was somewhat arbitrary -- we could have equally well had the field in the other schema.

<hr>

![Image of a UML association diagram showing the relationship between the LocalLibrary schema models](https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/mongoose/library_website_-_mongoose_express.png)

<hr>

**Note**: The next section provides a basic primer explaining how models are defined and used. As you read it, consider how we will construct each of the models in the diagram above.

<hr>

## Mongoose primer

This section provides an overview of how to connect Mongoose to a MongoDB database, how to define a schema and a model, and how to make basic queries.

<hr>

**Note**: This primer is heavily influenced by the [Mongoose quick start](https://www.npmjs.com/package/mongoose) on *npm* and the [official documentation](https://mongoosejs.com/docs/guide.html).

<hr>

### Installing Mongoose and MongoDB

Mongoose is installed in your project (**package.json**) like any other dependency -- using NPM. To install it, use the following command inside your project folder:
```
npm install mongoose
```
Installing *Mongoose* adds all its dependencies, including the MongoDB database driver, but it does not install MongoDB itself. If you want to install a MongoDB server, then you can [download installers from here](https://www.mongodb.com/try) for various operating systems and install it locally. You can also use cloud-based MongoDB instances.

<hr>

**Note**: For this tutorial, we'll be using the [MongoDB Atlas](https://www.mongodb.com/atlas) cloud-based *database as a service* free tier to provide the database. This is suitable for development and makes sense for the tutorial because it "installs" an independent operating system.

<hr>

:warning: **Warning**: The following sections will show some code examples for connecting to MongoDB, defining and creating and using models, and more. These are just *examples* and should not be input into your *LocalLibrary* tutorial code just yet. We won't be inputting code into our *LocalLibrary* tutorial project until we reach the **[Connect to MongoDB](https://github.com/AndrewSRea/My_Learning_Port/tree/main/JavaScript/Server-Side_Website_Programming/Express_Web_Framework/Express_Tutorial_3#connect-to-mongodb)** section far below.

<hr>

### Connecting to MongoDB

*Mongoose* requires a connection to a MongoDB database. You can `require()` and connect to a locally hosted database with `mongoose.connect()`, as shown below.
```
// Import the mongoose module
var mongoose = require('mongoose');

// Set up default mongoose connection
var mongoDB = 'mongodb://127.0.0.1/my_database';
mongoose.connect(mongoDB, {useNewUrlParser: true, useUnifiedTopology: true});

// Get the default connection 
var db = mongoose.connection;

// Bind connection to error event (to get notification of connection errors)
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
```
You can get the default `Connection` object with `mongoose.connection`. Once connected, the open event is fired on the `Connection` instance.

<hr>

**Note**: If you need to create additional connections, you can use `mongoose.createConnection()`. This takes the same form of database URI (with host, database, port, options, etc.) as `connect()` and returns a `Connection` object.

<hr>

### Defining and creating models

Models are *defined* using the `Schema` interface. The Schema allows you to define the fields stored in each document along with their validation requirements and default values. In addition, you can define static and instance helper methods to mamke it easier to work with your data types, and also virtual properties that you can use like any other field, but which aren't actually stored in the database. (We'll discuss this a bit further below.)

Schemas are them "compiled" into models using the `mongoose.model()` method. Once you have a model, you can use it to find, create, update, and delete objects of the given type.

<hr>

**Note**: Each model maps to a *collection* of *documents* in the MongoDB database. The documents will contain the fields/schema types defined in the model `Schema`.

<hr>

#### Defining schemas

The code fragment below shows how you might define a simple schema. First, you `require()` mongoose, then use the Schema constructor to create a new schema instance, defining the various fields inside it in the constructor's object parameter.
```
// Require Mongoose
var mongoose = require('mongoose');

// Define a schema
var Schema = mongoose.Schema;

var SomeModelSchema = new Schema({
    a_string: String,
    a_date: Date
});
```
In the case above, we just have two fields, a string and a date. In the next sections, we will show some of the other field types, validation, and other methods.

#### Creating a model

Models are created from schemas using the `mongoose.model()` method:
```
// Define schema
var Schema = mongoose.Schema;

var SomeModelSchema = new Schema({
    a_string: String,
    a_date: Date
});

// Compile model from schema
var SomeModel - mongoose.model('SomeModel', SomeModelSchema);
```
The first argument is the singular name of the collection that will be created for your model (Mongoose will create the database collection for the above model *SomeModel*), and the second argument is the schema you want to use in creating the model.

<hr>

**Note**: Once you've defined your model classes, you can use them to create, update, or delete records, and run queries to get all records or particular subsets of records. We'll show you how to do this in the [Using models](https://github.com/AndrewSRea/My_Learning_Port/tree/main/JavaScript/Server-Side_Website_Programming/Express_Web_Framework/Express_Tutorial_3#using-models) section, and when we create our views.

<hr>

#### Schema types (fields)

A schema can have an arbitrary number of fields -- each one represents a field in the documents stored in *MongoDB*. An example schema showing many of the common field types and how they are declared is shown below.
```
var schema = new Schema({
    name: String,
    binary: Buffer,
    living: Boolean,
    updated: { type: Date, default: Date.now() },
    age: { type: Number, min: 18, max: 65, required: true },
    mixed: Schema.Types.Mixed,
    _someId: Schema.Types.ObjectId,
    array: [],
    ofString: [String],   // You can also have an array of each of the other types, too.
    nested: { stuff: { type: String, lowercase: true, trim: true } }
})
```
Most of the [SchemaTypes](https://mongoosejs.com/docs/schematypes.html) (the descriptions after "`type:`" or after field names) are self-explanatory. The exceptions are:

* `ObjectId`: Represents specific instances of a model in the database. For example, a book might use this to represent its author object. This will actually contain the unique ID (`_id`) for the specified object. We can use the `populate()` method to pull in the associated information when needed.
* [`Mixed`](https://mongoosejs.com/docs/schematypes.html#mixed): An arbitrary schema type.
* `[]`: An array of items. You can perform JavaScript array operations on these models (push, pop, unshift, etc.). The examples above show an array of objects without a specified type and an array of `String` objects, but you can have an array of any type of object.

The code also shows both ways of declaring a field:

* Field *name* and *type* as a key-value pair (i.e. as done with fields `name`, `binary`, and `living`).
* Field *name* followed by an object defining the `type`, and any other *options* for the field. Options include things like:
    - Default values.
    - Built-in validators (e.g. min/max values) and custom validation functions.
    - Whether the field is required.
    - Whether `String` fields should automatically be set to lowercase, uppercase, or trimmed (e.g. `{ type: String, lowercase: true, trim: true }`).

For more information about options, see [SchemaTypes](https://mongoosejs.com/docs/schematypes.html) (Mongoose docs).

#### Validation

Mongoose provides built-in and custom validators, and synchronous and asynchronous validators. It allows you to specify both the acceptable range of values and the error message for validation failure in all cases.

The built-in validators include:

* All [SchemaTypes](https://mongoosejs.com/docs/schematypes.html) have the built-in [`required()`](https://mongoosejs.com/docs/api.html#schematype_SchemaType-required) validator. This is used to specify whether the field must be supplied in order to save a document.
* [Numbers](https://mongoosejs.com/docs/api.html#mongoose_Mongoose-Number) have [min](https://mongoosejs.com/docs/schematypes.html#numbers) and [max](https://mongoosejs.com/docs/schematypes.html#numbers) validators.
* [Strings](https://mongoosejs.com/docs/schematypes.html#usage-notes) have:
    - [enum](https://mongoosejs.com/docs/schematypes.html#usage-notes): Specifies the set of allowed values for the field.
    - [match](https://mongoosejs.com/docs/schematypes.html#usage-notes): Specifies a regular expression that the string must match.
    - [maxLength](https://mongoosejs.com/docs/schematypes.html#usage-notes) and [minLength](https://mongoosejs.com/docs/schematypes.html#usage-notes) for the string.

The example below (slightly modified from the Mongoose documents) shows how you can specify some of the validator types and error messages:
```
var breakfastSchema = new Schema({
    eggs: {
        type: Number,
        min: [6, 'Too few eggs'],
        max: 12,
        required: [true, 'Why no eggs?']
    },
    drink: {
        type: String,
        enum: ['Coffee', 'Tea', 'Water',]
    }
});
```
For complete information on field validation, see [Validation](https://mongoosejs.com/docs/validation.html) (Mongoose docs).

#### Virtual properties

Virtual properties are document properties that you can get and set but that do not get persisted to MongoDB. The getters are useful for formatting or combining fields, while setters are useful for decomposing a single value into multiple values for storage. The example in the documentation constructs (and deconstructs) a full name virtual property from a first and last name field, which is easier and cleaner than constructing a full name every time one is used in a template.

<hr>

**Note**: We will use a virtual property in the library to define a unique URL for each model record using a path and the record's `_id` value. 

<hr>

For more information, see [Virtuals](https://mongoosejs.com/docs/guide.html#virtuals) (Mongoose docs).

#### Methods and query helpers

A schema can also have [instance methods](https://mongoosejs.com/docs/guide.html#methods), [static methods](https://mongoosejs.com/docs/guide.html#statics), and [query helpers](https://mongoosejs.com/docs/guide.html#query-helpers). The instance and static methods are similar, but with the obvious difference that an instance method is associated with a particular record and has access to the current object. Query helpers allow you to extend mongoose's [chainable query builder API](https://mongoosejs.com/docs/queries.html). (For example, allowing you to add a query "`byName`" in addition to the `find()`, `findOne()`, and `findById()` methods.)

### Using models

Once you've created a schema, you can use it to create models. The model represents a collection of documents in the database that you can search, while the model's instances represent individual documents that you can save and retrieve.

We provide a brief overview below. For more information, see [Models](https://mongoosejs.com/docs/models.html) (Mongoose docs).

#### Creating and modifying documents

To create a record, you can define an instance of the model and then call `save()`. The examples below assume `SomeModel` is a model (with a single field "`name`") that we have created from our schema.
```
// Create an instance of model SomeModel
var awesome_instance = new SomeModel({ name: 'awesome' });

// Save the new model instance, passing a callback
awesome_instance.save(function(err) {
    if (err) return handleError(err);
    // saved!
});
```
Creation of records (along with updates, deletes, and queries) are asynchronous operations -- you supply a callback that is called when the operation completes. The API uses the error-first argument convention, so the first argument for the callback will always be an error value (or null). If the API returns some result, this will be provided as the second argument.

You can also use `create()` to define the model instance at the same time as you save it. The callback will return an error for the first argument and the newly-created model instance for the second argument.
```
SomeModel.create({ name: 'also awesome' }, function(err, awesome_instance) {
    if (err) return handleError(err);
    // saved!
});
```
Every model has an associated connection. (This will be the default connection when you use `mongoose.model()`.) You create a new connection and call `.model()` on it to create the documents on a different database.

You can access the fields in this new record using the dot syntax, and change the values. You have to call `save()` or `update()` to store modified values back to the database.
```
// Access model field values using dot notation
console.log(awesome_instance.name);   // should log 'also_awesome'

// Change record by modifying the fields, then calling save().
awesome_instance.name="New cool name";
awesome_instance.save(function(err) {
    if (err) return handleError(err);   // saved!
});
```








## Connect to MongoDB