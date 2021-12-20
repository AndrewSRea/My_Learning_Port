# Create Book form

This subarticle shows how to define a page/form to create `Book` objects. This is a little more complicated than the equivalent `Author` or `Genre` pages because we need to get and display avaiable `Author` and `Genre` records in our `Book` form.

## Import validation and sanitization methods

Open **/controllers/bookController.js**, and add the following line at the top of the file:
```
const { body,validationResult } = require('express-validator');
```

## Controller -- get route 

Find the exported `book_create_get()` controller method and replace it with the following code.
```
// Display book create form on GET
exports.book_create_get = function(req, res, next) {
    
    // Get all authors and genres, which we can use for adding to our book
    async.parallel({
        authors: function(callback) {
            Author.find(callback);
        },
        genres: function(callback) {
            Genre.find(callback);
        },
    }, function(err, results) {
        if (err) { return next(err); }
        res.render('book_form', { title: 'Create Book', authors: results.authors, genres: results.genres });
    });
    
};
```
This uses the async module (described in [Express Tutorial Part 5: Displaying library data](https://github.com/AndrewSRea/My_Learning_Port/tree/main/JavaScript/Server-Side_Website_Programming/Express_Web_Framework/Express_Tutorial_5#express-tutorial-part-5-displaying-library-data)) to get all `Author` and `Genre` objects. These are then passed to the view **book_form.pug** as variables named `authors` and `genres` (along woth the page `title`).

## Controller -- post route

Find the exported `book_create_post()` controller method and replace it with the following code.
```
// Handle book create on POST
exports.book_create_post = [
    // Convert the genre to an array
    (req, res, next) => {
        if(!(req.body.genre instanceof Array)) {
            if(typeof req.body.genre === 'undefined')
            req.body.genre = [];
            else
            req.body.genre = new Array(req.body.genre);
        }
        next();
    },

    // Validate and sanitize fields
    body('title', 'Title must not be empty.').trim().isLength({ min: 1 }).escape(),
    body('author', 'Author must not be empty.').trim().isLength({ min: 1 }).escape(),
    body('summary', 'Summary must not be empty.').trim().isLength({ min: 1 }).escape(),
    body('isbn', 'ISBN must not be empty.').trim().isLength({ min: 1 }).escape,
    body('genre.*').escape(),

    // Process request after validation and sanitization
    (req, res, next) => {

        // Extract the validation errors from a request
        const errors = validationResult(req);

        // Create a Book object with escaped and trimmed data
        var book = new Book(
            { title: req.body.title,
              author: req.body.author,
              summary: req.body.summary,
              isbn: req.body.isbn,
              genre: req.body.genre
            });

        if (!errors.isEmpty()) {
            // There are errors. Render form again with sanitized values/error messages

            // Get all authors and genres for form
            async.parallel({
                authors: function(callback) {
                    Author.find(callback);
                },
                genres: function(callback) {
                    Genre.find(callback);
                },
            }, function(err, results) {
                if (err) { return next(err); }

                // Mark our selected genres as checked
                for (let i = 0; i < results.genres.length; i++) {
                    if (book.genre.indexOf(results.genres[i]._id) > -1) {
                        results.genres[i].checked='true';
                    }
                }
                res.render('book_form', { title: 'Create Book', authors: results.authors, genres: results.genres, book: book, errors: errors.array() });
            });
            return;
        }
        else {
            // Data from form is valid. Save book
            book.save(function(err) {
                if (err) { return next(err); }
                // Successful - redirect to new book record
                res.redirect(book.url);
            });

        }
    }
];
```