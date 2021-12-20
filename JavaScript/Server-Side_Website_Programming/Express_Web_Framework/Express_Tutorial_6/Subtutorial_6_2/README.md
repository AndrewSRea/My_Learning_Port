# Create Author form

This subarticle shows how to define a page for creating `Author` objects.

## Import validation and sanitization methods

As with the genre form, to use *express-validator* we have to *require* the functions we want to use.

Open **/controllers/authorController.js**, and add the following lines at the top of the file:
```
const { body,validationResult } = require('express-validator');
```

## Controller -- get route

Find the exported `author_create_get()` controller method and replace it with the following code. This renders the **author_form.pug** view, passing a `title` variable.
```
// Display Author create form on GET
exports.author_create_get = function(req, res, next) {
    res.render('author_form', { title: 'Create Author' });
};
```

## Controller -- post route

Find the exported `author_create_post()` controller method, and replace it with the following code.
```
// Handle Author create on POST
exports.author_create_post = [

    // Validate and sanitize fields
    body('first_name').trim().isLength({ min: 1 }).escape().withMessage('First name must be specified.')
        .isAlphanumeric().withMessage('First name has non-alphanumeric characters.'),
    body('family_name').trim().isLength({ min: 1 }).escape().withMessage('Family name must be specified.')
        .isAlphanumeric().withMessage('Family name has non-alphanumeric characters.'),
    body('date_of_birth', 'Invalid date of birth').optional({ checkFalsy: true }).isISO8601().toDate(),
    body('date_of_death', 'Invalid date of death').optional({ checkFalsy: true }).isISO8601().toDate(),

    // Process request after validation and sanitization
    (req, res, next) => {

        // Extract the validation errors from a request
        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            // There are errors. Render form again with sanitized values/errors messages
            res.render('author_form', { title: 'Create Author', author: req.body, errors: errors.array() });
            return;
        }
        else {
            // Data from form is valid

            // Create an Author object with escaped and trimmed data
            var author = new Author(
                {
                    first_name: req.body.first_name,
                    family_name: req.body.family_name,
                    date_of_birth: req.body.date_of_birth,
                    date_of_death: req.body.date_of_death
                });
            author.save(function(err) {
                if (err) { return next(err); }
                // Successful - redirect to new author record
                res.redirect(author.url);
            });
        }
    }
];
```
Tne structure and behavior of this code is almost exactly the same as for creating a `Genre` object. First, we validate and sanitize the data. If the data is invalid, then we redisplay the form along with the data that was originally entered by the user and a list of error messages. If the data is valid, then we save the new author record and redirect the user to the author detail page.

<hr>

**Note**: Unlike with the `Genre` post handler, we don't check whether the `Author` object already exists before saving it. Arguably we should, though as it is now we can have multiple authors with the same name.

<hr>

The validation code demonstrates several new features:

* We can daisy chain validators, using `withMessage()` to specify the error message to display if the previous validation method fails. This makes it very easy to provide specific error messages without lots of code duplication.
```
// Validate fields
body('first_name').trim().isLength({ min: 1 }).escape().withMessage('First name must be specified.')
        .isAlphanumeric().withMessage('First name has non-alphanumeric characters.'),
```

* We can use the `optional()` function to run a subsequent validation only if a field has been entered. (This allows us to validate optional fields.) For example, below we check that the optional date of birth is an ISO8601-compliant date. (The `checkFalsy` flag means that we'll accept either an empty string or `null` as an empty value.)
```
body('date_of_birth', 'Invalid date of birth').optional({ checkFalsy: true }).isISO8601().toDate(),
```

* Parameters are received from the request as strings. We can use `toDate()` (or `toBoolean()`) to cast these to the proper JavaScript types (as shown at the end of the validator chain above).