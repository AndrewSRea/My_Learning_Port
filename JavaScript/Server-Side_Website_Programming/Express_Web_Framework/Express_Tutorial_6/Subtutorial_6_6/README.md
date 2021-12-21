# Update Book form

This final subarticle shows how to define a page to update `Book` objects. Form handling when updating a book is much like that for creating a book, except that you must populate the form in the `GET` route with values from the database.

## Controller -- get route

Open **/controllers/bookController.js**. Find the exported `book_update_get()` controller method and replace it with the following code.
```
// Display book update form on GET
exports.book_update_get = function(req, res, next) {
    
    // Get book, authors, and genres for form
    async.parallel({
        book: function(callback) {
            Book.findById(req.params.id)
                .populate('author')
                .populate('genre')
                .exec(callback);
        },
        authors: function(callback) {
            Author.find(callback);
        },
        genres: function(callback) {
            Genre.find(callback);
        },
    }, function(err, results) {
        if (err) { return next(err); }
        if (results.book==null) {   // No results
            var err = new Error('Book not found');
            err.status = 404;
            return next(err);
        }
        // Success 
        // Mark our selected genres as checked
        for (var all_g_iter = 0; all_g_iter < results.genres.length; all_g_iter++) {
            for (var book_g_iter = 0; book_g_iter < results.book.genre.length; book_g_iter++) {
                if (results.genres[all_g_iter]._id.toString()===results.book.genre[book_g_iter]._id.toString()) {
                    results.genres[all_g_iter],checked='true';
                }
            }
        }
        res.render('book_form', { title: 'Update Book', authors: results.authors, genres: results.genres, book: results.book });
    });
    
};
```
The controller gets the id of the `Book` to be updated from the URL parameter (`req.params.id`). It uses the `async.parallel()` method to get the specified `Book` record (populating its genre and author fields) and lists of all the `Author` and `Genre` objects.

When the operations complete, it checks for any errors in the find operation, and also whether any books were found.

<hr>

**Note**: Not finding any book results is **not an error** for a search -- but it is for this application because we know there must be a matching book record! The code above compares for (`results===null`) in the callback, but it could equally well have daisy-chained the method [`orFail()`](https://mongoosejs.com/docs/api.html#query_Query-orFail) to the query.

<hr>

We then mark the currently selected genres as checked and then render the **book_form.pug** view, passing variables for `title`, `book`, all `authors`, and all `genres`.

