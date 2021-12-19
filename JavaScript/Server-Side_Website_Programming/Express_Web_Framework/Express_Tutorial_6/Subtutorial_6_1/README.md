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
The first thing to note is that instead of being a single middleware function (with arguments `(res, res, next)`), the controller specifies an *array* of middleware functions. The array is passed to the router function and each method is called in order.

<hr>

**Note**: This approach is needed, because the validators are middleware functions.

<hr>

The first method in the array defines a body validator (`body()`) that validates and sanitizes the field. This uses `trim()` to remove any trailing/leading whitespace, checks that the *name* field is not empty, and then uses `escape()` to remove any dangerous HTML characters.
```
// Validate that the name field is not empty
body('name', 'Genre name required').trim().isLength({ min: 1 }).escape(),
```
After specifying the validators, we create a middleware function to extract any validation errors. We use `isEmpty()` to check whether there are any errors in the validation result. If there are, then we render the form again, passing in our sanitized genre object and the array of error messages (`errors.array()`).
```
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
        ... <save the result/> ...
    }
};
```
If the genre name data is valid, then we check if a `Genre` with the same name already exists (as we don't want to create duplicates). If it does, we redirect to the existing genre's detail page. If not, we save the new `Genre` and redirect to its detail page.
```
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
```
This same pattern is used in all our post controllers: we run validators (with sanitizers), then check for errors and either re-render the form with error information or save the data.

## View

The same view is rendered in both the `GET` and `POST` controllers/routes when we create a new `Genre` (and later on it is also used when we *update* a `Genre`). In the `GET` case, the form is empty, and we just pass a title variable. In the `POST` case, the user has previously entered invalid data -- in the `genre` variabl, we pass back a sanitized version of the entered data, and in the `errors` variable, we pass back an array of error messages.
```
res.render('genre_form', { title: 'Create Genre' });
res.render('genre_form', { title: 'Create Genre', genre: genre, errors: errors.array() });
```
Create **/views/genre_form.pug** and copy in the text below.