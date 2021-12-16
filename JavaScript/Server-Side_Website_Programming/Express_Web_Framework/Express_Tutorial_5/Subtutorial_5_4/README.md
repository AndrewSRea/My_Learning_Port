# Home page

The first page we'll create will be the website home page, which is accessible from either the site (`'/'`) or catalog (`catalog/`) root. This will display some static text describing the site, along with dynamically calculated "counts" of different record types in the database.

We've already created a route for the home page. In order to complete the page, we need to update our controller function to fetch "counts" of records from the database, and create a view (template) that we can use to render the page.

## Route

We created our index page routes in a [previous tutorial](https://github.com/AndrewSRea/My_Learning_Port/tree/main/JavaScript/Server-Side_Website_Programming/Express_Web_Framework/Express_Tutorial_4#express-tutorial-part-4-routes-and-controllers). As a reminder, all the route functions are defined in **/routes/catalog.js**:
```
// GET catalog home page
router.get('/', book_controller.index);   // This actually maps to /catalog/ because we import the route with a /catalog prefix
```
Where the callback function parameter (`book_controller.index`) is defined in **/controllers/bookController.js**:
```
exports.index = function(req, res, next) {
    res.send('NOT IMPLEMENTED: Site Home Page');
}
```
It is this controller function that we extend to get information from our models and then render it using a template (view).

## Controller

The index controller function needs to fetch information about how many `Book`, `BookInstance`, available `BookInstance`, `Author`, and `Genre` records we have in the database, render this data in a template to create an HTML page, and then return it in an HTTP response.

<hr>

**Note**: We use the [`countDocuments()`](https://mongoosejs.com/docs/api.html#model_Model.countDocuments) method to get the number of instances of each model. This is called on a model, with an optional set of conditions to match against in the first argument, and a callback in the second argument (as discussed in [Using a Database (with Mongoose)](https://github.com/AndrewSRea/My_Learning_Port/tree/main/JavaScript/Server-Side_Website_Programming/Express_Web_Framework/Express_Tutorial_3#express-tutorial-part-3-using-a-database-with-mongoose)), and you can also return a `Query` and then execute it with a callback later. The callback will be invoked when the database returns the count, with an error value as the first parameter (or `null`) and the count of documents as the second parameter (or `null` if there was an error).
```
SomeModel.countDocuments({ a_model_field: 'match_value' }, function(err, count) {
    // ... do something if there is an err
    // ... do something with the count if there was no error
});
```

<hr>

Open **/controllers/bookController.js**. Near the top of the file, you should see the exported `index()` function.
```
var Book = require('../models/book');

exports.index = function(req, res, next) {
    res.send('NOT IMPLEMENTED: Site Home Page');
};
```
Replace all the code above with the following code fragment. The first thing this does is import (`require()`) all the models. We need to do this because we'll be using them to get our counts of documents. It then imports the *async* module (which we discussed previously in [Asynchronous flow control using async](https://github.com/AndrewSRea/My_Learning_Port/tree/main/JavaScript/Server-Side_Website_Programming/Express_Web_Framework/Express_Tutorial_5/Subtutorial_5_1#asynchronous-flow-control-using-async)).
```
var Book = require('../models/book');
var Author = require('../models/author');
var Genre = require('../models/genre');
var BookInstance = require('../models/bookinstance')

var async = require('async');

exports.index = function(req, res) {

    async.parallel({
        book_count: function(callback) {
            Book.countDocuments({}, callback);   // Pass an empty object as match condition to find all documents of this collection
        },
        book_instance_count: function(callback) {
            BookInstance.countDocuments({}, callback);
        },
        book_instance_available_count: function(callback) {
            BookInstance.countDocuments({status:'Available'}, callback);
        },
        author_count: function(callback) {
            Author.countDocuments({}, callback);
        },
        genre_count: function(callback) {
            Genre.countDocuments({}, callback);
        }
    }, function(err, results) {
        res.render('index', { title: 'Local Library Home', error: err, data: results });
    });
};
```
