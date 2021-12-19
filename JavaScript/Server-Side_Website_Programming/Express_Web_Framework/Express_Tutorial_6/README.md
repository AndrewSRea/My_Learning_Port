# Express Tutorial Part 6: Working with forms

In this tutorial, we'll show you how to work with HTML Forms in Express using Pug. In particular, we'll discuss how to write forms to create, update, and delete documents from the site's database.

## Overview

An [HTML Form](https://developer.mozilla.org/en-US/docs/Learn/Forms) is a group of one or more fields/widgets on a web page that can be used to collect information from users for submission to a server. Forms are a flexible mechanism for collecting user input because there are suitable form inputs available for entering many different types of data -- text boxes, checkboxes, radio buttons, date pickers, etc. Forms are also a relatively secure way of sharing data with the server, as they allow us to send data in `POST` requests with cross-site request forgery protection.

Working with forms can be complicated! Developers need to write HTML for the form, validate, and properly sanitize entered data on the server (and possibly also in the browser), repost the form with error messages to inform users of any invalid fields, handle the data when it has successfully been submitted, and finally respond to the user in some way to indicate success.

In this tutorial, we're going to show you how the above operations may be performed in *Express*. Along the way, we'll extend the *LocalLibrary* website to allow users to create, edit, and delete items from the library.

<hr>

**Note**: We haven't looked at how to restrict particular routes to authenticated or authorized users, so at this point, any user will be able to make changes to the database.

<hr>

### HTML Forms

First, a brief overview of [HTML Forms](https://developer.mozilla.org/en-US/docs/Learn/Forms). Consider a simple HTML form, with a single text field for entering the name of some "team", and its associated label:

![Image of a simple HTML form](https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/forms/form_example_name_field.png)

The form is defined in HTML as a collection of elements inside `<form>...</form>` tags, containing at least one `input` element of `type="submit"`.
```
<form action="/team_name_url/" method="post">
    <label for="team_name">Enter name: </label>
    <input id="team_name" type="text" name="name_field" value="Default name for team.">
    <input type="submit" value="OK">
</form>
```
While here we have included just one (text) field for entering the team name, a form *may* contain any number of other input elements and their associated labels. The field's `type` attribute defines what sort of widget will be displayed. The `name` and `id` of the field are used to identify the field in JavaScript/CSS/HTML, while `value` defines the initial value for the field when it is first displayed. The matching team label is specified using the `label` tag (see "Enter name" above), with a `for` field containing the `id` value of the associated `input`.

The `submit` input will be displayed as a button (by default). This can be pressed by the user to upload the data contained by the other input elements to the server (in this case, just the `team_name`). The form attributes define the HTTP `method` used to send the data and the destination of the data on the server (`action`):

* `action`: The resource/URL where data is to be sent for processing when the form is submitted. If this is not set (or set to an empty string), then the form will be submitted back to the current page URL.
* `method`: The HTTP method used to send the data: `POST` or `GET`.
    - The `POST` method should always be used if the data is going to result in a change to the server's database, because this can be made more resisitant to cross-site forgery request attacks.
    - The `GET` method should only be used for forms that don't change user data (e.g. a search form). It is recommended for when you want to be able to bookmark or share the URL.

### Form handling process

Form handling uses all of the same techniques that we learned for displaying information about our models: the route sends our request to a controller function which performs any database actions required, including reading data from the models, then generates and returns an HTML page. What makes things more complicated is that the server also needs to be able to process the data provided by the user, and redisplay the form with error information if there are any problems.

A process flowchart for processing form requests is shown below, starting with a request for a page containing a form (shown in green):

![Image of a flowchart showing the process for form requests](https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/forms/web_server_form_handling.png)

As shown in the diagram above, the main things that form handling code needs to do are:

1. Display the default form the first time it is requested by the user.
    - The form may contain blank fields (e.g. if you're creating a new record), or it may be pre-populated with initial values (e.g. if you are changing a record, or have useful default initial values).
2. Receive data submitted by the user, usually in an HTTP `POST` request.
3. Validate and sanitize.
4. If any data is invalid, redisplay the form -- this time with any user populated values and error messages for the problem fields.
5. If all data is valid, perform required actions (e.g. save the data in the database, send a notification email, return the result of a search, upload a file, etc.).
6. Once all actions are complete, redirect the user to another page.

Often form handling code is implemented using a `GET` route for the initial display of the form and a `POST` route to the same path for handling validation and processing of form data. This is the approach that will be used in this tutorial.

Express itself doesn't provide any specific support for form handling operations, but it can use middleware to process `POST` and `GET` parameters from the form, and to validate/sanitize their values.

### Validation and sanitization

Before the data from a form is stored, it must be validated and sanitized:

* Validation checks that entered values are appropriate for each field (are in the right range, format, etc.), and that values have been supplied for all required fields.
* Sanitization removes/replaces characters in the data that might potentially be used to send malicious content to the server.

For this tutorial, we'll be using the popular [express-validator](https://www.npmjs.com/package/express-validator) module to perform both validation and sanitization of our form data.

#### Installation

Install the module by running the following command in the root of the project.
```
npm install express-validator
```