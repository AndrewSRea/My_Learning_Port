# Django Tutorial Part 9: Working with forms

In this tutorial, we'll show you how to work with HTML Forms in Django, and, in particular, the easiest way to write forms to create, update, and delete model instances. As part of this demonstration, we'll extend the [LocalLibrary](https://github.com/AndrewSRea/My_Learning_Port/tree/main/JavaScript/Server-Side_Website_Programming/Django_Web_Framework/Django_Tutorial_Local_Library#django-tutorial-the-local-library-website) website so that librarians can renew books, and create, update, and delete authors using our own forms (rather than using the admin application).

## Overview

An [HTML Form](https://developer.mozilla.org/en-US/docs/Learn/Forms) is a group of one or more fields/widgets on a web page, which can be used to collect information from users for submission to a server. Forms are a flexible mechanism for collecting user input because there are suitable widgets for entering many different types of data, including text boxes, checkboxes, radio buttons, date pickers, and so on. Forms are also a relatively secure way of sharing data with the server, as they allow us to send data in `POST` requests with cross-site request forgery protection.

While we haven't created any forms in this tutorial so far, we've already encountered them in the Django Admin site. For example, the screenshot below shows a form for editing one of our [Book](https://github.com/AndrewSRea/My_Learning_Port/tree/main/JavaScript/Server-Side_Website_Programming/Django_Web_Framework/Django_Tutorial_3#django-tutorial-part-3-using-models) models, comprised of a number of selection lists and text editors.

![Image of the Django admin app showing an "Add book" form](https://developer.mozilla.org/en-US/docs/Learn/Server-side/Django/Forms/admin_book_add.png)

Working with forms can be complicated! Developers need to write HTML for the form, validate and properly sanitize entered data on the server (and possibly also in the browser), repost the form with error messages to inform users of any invalid fields, handle the data when it has successfully been submitted, and finally respond to the user in some way to indicate success. *Django Forms* take a lot of the work out of all these steps, by providing a framework that lets you define forms and their fields programmatically, and then use these objects to both generate the form HTML code and handle much of the validation and user interaction.

In this tutorial, we're going to show you a few of the ways you can create and work with forms, and in particular, how the generic editing views can significantly reduce the amount of work you need to do to create forms to manipulate your models. Along the way, we'll extend our *LocalLibrary* application by adding a form to allow librarians to renew library books, and we'll create pages to create, edit, and delete books and authors (reproducing a basic version of the form shown above for editing books).

## HTML Forms

First, a brief overview of [HTML Forms](https://developer.mozilla.org/en-US/docs/Learn/Forms). Consider a simple HTML form, with a single text field for entering the name of some "team", and its associated label:

![Image of a simple HTML form](https://developer.mozilla.org/en-US/docs/Learn/Server-side/Django/Forms/form_example_name_field.png)

The form is defined in HTML as a collection of elements inside `<form>...</form>` tags, containing at least one `input` element of `type="submit"`.
```
<form action="/team_name_url/" method="post">
    <label for="team_name">Enter name: </label>
    <input id="team_name" type="text" name="name_field" value="Default name for team.">
    <input type="submit" value="OK">
</form>
```
While here we just have one text field for entering the team name, a form *may* have any number of other input elements and their associated labels. The field's `type` attribute defines what sort of widget will be displayed. The `name` and `id` of the field are used to identify the field in JavaScript/CSS/HTML, while `value` defines the initial value for the field when it is first displayed. The matching team label is specified using the `label` tag (see "Enter name" above), with a `for` field containing the `id` value of the associated `input`.

The `submit` input will be displayed as a button (by default) that can be pressed by the user to upload the data in all the other input elements in the form to the server (in this case, just the `team_name`). The form attributes define the HTTP `method` used to send the data and the destination of the data on the server (`action`):

* `action`: The resource/URL where data is to be sent for processing when the form is submitted. If this is not set (or set to an empty string), then the form will be submitted back to the current page URL.
* `method`: The HTTP method used to send the data: *post* or *get*.
    - The `POST` method should always be used if the data is going to result in a change to the server's database because this can be made more resistant to cross-site forgery request attacks.
    - The `GET` method should only be used for forms that don't change user data (e.g. a search form). It is recommended for when you want to be able to bookmark or share the URL.

The role of the server is first to render the initial form state -- either containing blank fields or pre-populated with initial values. After the user presses the submit button, the server will receive the form data with values from the web browser and must validate the information. If the form contains invalid data, the server should display the form again, this time with user-entered data in "valid" fields and messages to describe the problem for the invalid fields. Once the server gets a request with all valid form data, it can perform an appropriate action (e.g. saving the data, returning the result of a search, uploading a file, etc.) and then notify the user.

As you can imagine, creating the HTML, validating the returned data, redisplaying the entered data with error reports, if needed, and performing the desired operation on valid data can take quite a lot of effort to "get right". Django makes this a lot easier, by taking away some of the heavy lifting and repetitive code!

## Django form handling process

Django's form handling uses all of the same techniques that we learned about in previous tutorials (for displaying information about our models): the view gets a request, performs any actions required including reading data from the models, then generates and returns an HTML page (from a template, into which we pass a *context* containing the data to be displayed). What makes things more complicated is that the server also needs to be able to process data provided by the user, and redisplay the page if there are any errors.

A process flowchart of how Django handles form requests is shown below, starting with a request for a page containing a form (shown in green):

![Image of a flowchart showing Django form requests to the server](https://developer.mozilla.org/en-US/docs/Learn/Server-side/Django/Forms/form_handling_-_standard.png)

Based on the diagram above, the main things that Django's form handling does are:

1. Display the default form the first time it is requested by the user.
    - The form may contain blank fields (e.g. if you're creating a new record), or it may be pre-populated with initial values (e.g. if you are changing a record, or have useful default initial values).
    - The form is referred to as *unbound* at this point, because it isn't associated with any user-entered data (though it may have initial values).
2. Receive data from a submit request and bind it to the form.
    - Binding data to the form means that the user-entered data and any errors are available when we need to redisplay the form.
3. Clean and validate the data.
    - Cleaning the data performs sanitization of the input (e.g. removing invalid characters that might be used to send malicious content to the server) and converts them into consistent Python types.
    - Validation checks that the values are appropriate for the field (e.g. are in the right date range, aren't too short or too long, etc.)
4. If any data is invalid, redisplay the form, this time with any user populated values and error messages for the problem fields.
5. If all data is valid, perform required actions (e.g. save the data, send an email, return the result of a search, upload a file, etc.)
6. Once all actions are complete, redirect the user to another page.

Django provides a number of tools and approaches to help you with the tasks detailed above. The most fundamental is the `Form` class, which simplifies both generations of form HTML and data cleaning/validation. In the next section, we describe how forms work using the practical example of a page to allow librarians to renew books.

<hr>

**Note**: Understanding how `Form` is used will help you when we discuss Django's more "high level" form framework classes.

<hr>

## Renew-book form using a Form and function view

Next, we're going to add a page to allow librarians to renew borrowed books. To do this, we'll create a form that allows users to enter a date value. We'll seed the field with an initial value 3 weeks from the current date (the normal borrowing period), and add some validation to ensure that the librarian can't enter a date in the past or a date too far in the future. When a valid date has been entered, we'll write it to the current record's `BookInstance.due_back` field.

The example will use a function-based view and a `Form` class. The following sections explain how forms work, and the changes you need to make to our ongoing *LocalLibrary* project.

### Form

The `Form` class is the heart of Django's form handling system. It specifies the fields in the form, their layout, display widgets, labels, initial values, valid values, and (once validated) the error messages associated with invalid fields. The class also provides methods for rendering itself in templates using predefined formats (tables, lists, etc.) or for getting the value of any element (enabling fine-grained manual rendering).

#### Declaring a Form

The declaration syntax for a `Form` is very similar to that for declaring a `Model`, and shares the same field types (and some similar parameters). This makes sense because in both cases we need to ensure that each field handles the right types of data, is constrained to valid data, and has a description for display/documentation.

Form data is stored in an application's *forms.py* file, inside the application directory. Create and open the file **locallibrary/catalog/forms.py**. To create a `Form`, we import the `forms` library, derive from the `Form` class, and declare the form's fields. A very basic form class for our library book renewal form is shown below. Add this to your new file:
```
from django import forms

class RenewBookForm(forms.Form):
    renewal_date = forms.DateField(help_text="Enter a date between now and 4 weeks (default 3).") 
```

#### Form fields

In this case, we have a single [`DateField`](https://docs.djangoproject.com/en/3.1/ref/forms/fields/#datefield) for entering the renewal date that will render in HTML with a blank value, the default label "*Renewal date:*", and some helpful usage text: "*Enter a date between now and 4 weeks (default 3 weeks)*." As none of the other optional arguments are specified, the field will accept dates using the [`input_formats`](https://docs.djangoproject.com/en/3.1/ref/forms/fields/#django.forms.DateField.input_formats): YYYY-MM-DD (2016-11-06), MM/DD/YYYY (02/26/2016), MM/DD/YY (10/25/16), and will be rendered using the default [`widget`](https://docs.djangoproject.com/en/3.1/ref/forms/fields/#widget): [`DateInput`](https://docs.djangoproject.com/en/3.1/ref/forms/widgets/#django.forms.DateInput).

There are many other types of form fields, which you will largely recognize from their similarity to the equivalent model field classes: [`BooleanField`](https://docs.djangoproject.com/en/3.1/ref/forms/fields/#booleanfield), [`CharField`](https://docs.djangoproject.com/en/3.1/ref/forms/fields/#charfield), [`ChoiceField`](https://docs.djangoproject.com/en/3.1/ref/forms/fields/#choicefield), [`TypedChoiceField`](https://docs.djangoproject.com/en/3.1/ref/forms/fields/#typedchoicefield), [`DateField`](https://docs.djangoproject.com/en/3.1/ref/forms/fields/#datefield), [`DateTimeField`](https://docs.djangoproject.com/en/3.1/ref/forms/fields/#datetimefield), [`DecimalField`](https://docs.djangoproject.com/en/3.1/ref/forms/fields/#decimalfield), [`DurationField`](https://docs.djangoproject.com/en/3.1/ref/forms/fields/#durationfield), [`EmailField`](https://docs.djangoproject.com/en/3.1/ref/forms/fields/#emailfield), [`FileField`](https://docs.djangoproject.com/en/3.1/ref/forms/fields/#filefield), [`FilePathField`](https://docs.djangoproject.com/en/3.1/ref/forms/fields/#filepathfield), [`FloatField`](https://docs.djangoproject.com/en/3.1/ref/forms/fields/#floatfield), [`ImageField`](https://docs.djangoproject.com/en/3.1/ref/forms/fields/#imagefield), [`IntegerField`](https://docs.djangoproject.com/en/3.1/ref/forms/fields/#integerfield), [`GenericIPAddressField`](https://docs.djangoproject.com/en/3.1/ref/forms/fields/#genericipaddressfield), [`MultipleChoiceField`](https://docs.djangoproject.com/en/3.1/ref/forms/fields/#multiplechoicefield), [`TypedMultipleChoiceField`](https://docs.djangoproject.com/en/3.1/ref/forms/fields/#typedmultiplechoicefield), [`NullBooleanField`](https://docs.djangoproject.com/en/3.1/ref/forms/fields/#nullbooleanfield), [`RegexField`](https://docs.djangoproject.com/en/3.1/ref/forms/fields/#regexfield), [`SlugField`](https://docs.djangoproject.com/en/3.1/ref/forms/fields/#slugfield), [`TimeField`](https://docs.djangoproject.com/en/3.1/ref/forms/fields/#timefield), [`URLField`](https://docs.djangoproject.com/en/3.1/ref/forms/fields/#urlfield), [`UUIDField`](https://docs.djangoproject.com/en/3.1/ref/forms/fields/#uuidfield), [`ComboField`](https://docs.djangoproject.com/en/3.1/ref/forms/fields/#combofield), [`MultiValueField`](https://docs.djangoproject.com/en/3.1/ref/forms/fields/#multivaluefield), [`SplitDateTimeField`](https://docs.djangoproject.com/en/3.1/ref/forms/fields/#splitdatetimefield), [`ModelMultipleChoiceField`](https://docs.djangoproject.com/en/3.1/ref/forms/fields/#modelmultiplechoicefield), [`ModelChoiceField`](https://docs.djangoproject.com/en/3.1/ref/forms/fields/#modelchoicefield).

The arguments that are common to most fields are listed below (these have sensible default values):

* [`required`](https://docs.djangoproject.com/en/3.1/ref/forms/fields/#required): If `True`, the field may not be left blank or given a `None` value. Fields are required by default, so you would set `required=False` to allow blank values in the form.
* [`label`](https://docs.djangoproject.com/en/3.1/ref/forms/fields/#label): The label to use when rendering the field in HTML. If a `label` is not specified, Django will create one from the field name by capitalizing the first letter and replacing underscores with spaces (e.g. *Renewal date*).
* [`label_suffix`](https://docs.djangoproject.com/en/3.1/ref/forms/fields/#label-suffix): By default, a colon is displayed after the label (e.g. Renewal date\***:**\*). This argument allows you to specify a different suffix containing other character(s).
* [`initial`](https://docs.djangoproject.com/en/3.1/ref/forms/fields/#initial): The initial value for the field when the form is displayed.
* [`widget`](https://docs.djangoproject.com/en/3.1/ref/forms/fields/#widget): The display widget to use.
* [`help_text`](https://docs.djangoproject.com/en/3.1/ref/forms/fields/#help-text) (as seen in the example above): Additional text that can be displayed in forms to explain how to use the field.
* [`error_messages`](https://docs.djangoproject.com/en/3.1/ref/forms/fields/#error-messages): A list of error messages for the field. You can override these with your own messages if needed.
* [`validators`](https://docs.djangoproject.com/en/3.1/ref/forms/fields/#validators): A list of functions that will be called on the field when it is validated.
* [`localize`](https://docs.djangoproject.com/en/3.1/ref/forms/fields/#localize): Enables the localization of form data input (see link for more information).
* [`disabled`](https://docs.djangoproject.com/en/3.1/ref/forms/fields/#disabled): The field is displayed but its value cannot be edited if this is `True`. The default is `False`.

#### Validation