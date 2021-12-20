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
