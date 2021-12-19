# Create genre form

This subarticle shows how we define our page to create `Genre` objects. (This is a good place to start because the `Genre` has only one field, its `name`, and no dependencies.) Like any other pages, we need to set up routes, controllers, and views.

## Import validation and sanitization methods

To use the *express-validator* in our controllers, we have to *require* the functions we want to use from the **"express-validator"** module.

Open **/controllers/genreController.js**, and add the following line at the top of the file:
```
const { body,validationResult } = require("express-validator");
```

<hr>

**Note**: This syntax allows us to use `body` and `validationResult` as the associated middleware functions, as you will see in the post route section below. It is equivalent to:
```
validator = require("express-validator");
body = validator.body();
validationResult = validator.validationResult();
```

<hr>

## Controller -- get route

Find the exported `genre_create_get()` controller method and replace it with the following code. This renders the **genre_form.pug** view, passing a title variable.
```
// Display Genre create form on GET
exports.genre_create_get = function(req, res, next) {
    res.render('genre_form', { title: 'Create Genre' });
};
```

## Controller -- post route

Find the exported `genre_create_post()` controller method and replace it with the following code.
```
// Handle Genre create on POST
exports.genre_create_post = [

    // Validate and sanitize the name field
    body('name', 'Genre name required').trim().isLength({ min: 1 }).escape(),

    // Process request after validation and sanitization
    (req, res, next) => {

        // Extract the validation errors from a request
        const errors = validationResult(req);

        // Create a genre object with escaped and trimmed data
        var genre = new Genre(
            { name: req.body.name } 
        );

        if (!errors.isEmpty()) {
            // There are errors. Render the form again with sanitized values/error messages
            res.render('genre_form', { title: 'Create Genre', genre: genre, errors: errors.array() });
            return;
        }
        else {
            // Data from form is valid
            // Check if Genre with same name already exists
            Genre.findOne({ 'name': req.body.name })
                .exec(function(err, found_genre) {
                    if (err) { return next(err); }

                    if (found_genre) {
                        // Genre exists, redirect to its detail page
                        res.redirect(found_genre.url);
                    }
                    else {
                        genre.save(function(err) {
                            if (err) { return next(err); }
                            // Genre saved. Redirect to genre detail page
                            res.redirect(genre.url);
                        });
                    }

                });
        }
    }
];
```