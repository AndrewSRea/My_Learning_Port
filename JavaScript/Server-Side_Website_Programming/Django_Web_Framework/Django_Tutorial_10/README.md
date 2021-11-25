# Django Tutorial Part 10: Testing a Django web application

As websites grow, they become harder to test manually. Not only is there more to test but, as interactions between components become more complex, a small change in one area can impact other areas, so more changes will be required to ensure everything keeps working and errors are not introduced as more changes are made. One way to mitigate these problems is to write automated tests, which can easily and reliably be run every time you make a change. This tutorial shows how to automate *unit testing* of your website using Django's test framework.

## Overview

The [LocalLibrary](https://github.com/AndrewSRea/My_Learning_Port/tree/main/JavaScript/Server-Side_Website_Programming/Django_Web_Framework/Django_Tutorial_Local_Library#django-tutorial-the-local-library-website) currently has pages to display lists of all books and authors, detail views for `Book` and `Author` items, a page to renew `BookInstance`s, and pages to create, update, and delete `Author` items (and `Book` records, too, if you completed the *challenge* in the [forms tutorial](https://github.com/AndrewSRea/My_Learning_Port/tree/main/JavaScript/Server-Side_Website_Programming/Django_Web_Framework/Django_Tutorial_9#challenge-yourself)). Even with this relatively small site, manually navigating to each page and *superficially* checking that everything works as expected can take several minutes. As we make changes and grow the site, the time required to manually check that everything works "properly" will only grow. If we were to continue as we are, eventually we'd be spending most of our time testing, and very little time improving our code.

Automated test can really help with this problem! The obvious benefits are that they can be run much faster than manual tests, can test to a much lower level of detail, and test exactly the same functionality every time (human testers are nowhere near as reliable!) Because they are fast, automated tests can be executed more regularly, and if a test fails, they point to exactly where code is not performing as expected.

In addition, automated tests can act as the first real-world "user" of your code, forcing you to be rigorous about defining and documenting how your website should behave. Often they are the basis for your code examples and documentation. For these reasons, some software development processes start with test definition and implementation, after which the code is written to match the required behavior (e.g. [test-driven](https://en.wikipedia.org/wiki/Test-driven_development) and [behavior-driven](https://en.wikipedia.org/wiki/Behavior-driven_development) development).

This tutorial shows how to write automated tests for Django, by adding a number of tests to the *LocalLibrary* website.

### Types of testing

There are numerous types, levels, and classifications of tests and testing approaches. The most important automated tests are:

**Unit tests**

Verify functional behavior of individual components, often to class and function level.

**Regression tests**

Tests that reproduce historic bugs. Each tests is initially run to verify that the bug has been fixed, and then rerun to ensure that it has not been reintroduced following later changes to the code.

**Integration tests**

Verify how groupings of components work when used together. Integration tests are aware of the required interactions between components, but not necessarily of the internal operations of each component. They may cover simple groupings of components through to the whole website.

<hr>

**Note**: Other common types of tests include black box, white box, manual, automated, canary, smoke, conformance, acceptance, functional, system, performance, load, and stress tests. Look them up for more information.

<hr>

### What does Django provide for testing?

Testing a website is a complex task, because it is made of several layers of logic -- from HTTP-level request handling, queries models, to form validation and processing, and templates rendering.

Django provides a test framework with a small hierarchy of classes that build on the Python standard [`unittest`](https://docs.python.org/3/library/unittest.html#module-unittest) library. Despite the name, this test framework is suitable for both unit and integration tests. The Django framework adds API methods and tools to help test web and Django-specific behavior. These allow you to simulate requests, insert test data, and inspect your application's output. Django also provides an API ([LiveServerTestCase](https://docs.djangoproject.com/en/3.1/topics/testing/tools/#liveservertestcase)) and tools for [using different testing frameworks](https://docs.djangoproject.com/en/3.1/topics/testing/advanced/#other-testing-frameworks). For example, you can integrate with the popular [Selenium](https://github.com/AndrewSRea/My_Learning_Port/tree/main/JavaScript/Tools_and_Testing/Cross_Browser_Testing/Setting_Up_Test_Automation#setting-up-your-own-test-automation-environment) framework to simulate a user interacting with a live browser.

To write a test, you derive from any of the Django (or *unittest*) test base classes ([SimpleTestCase](https://docs.djangoproject.com/en/3.1/topics/testing/tools/#simpletestcase), [TransactionTestCase](https://docs.djangoproject.com/en/3.1/topics/testing/tools/#transactiontestcase), [TestCase](https://docs.djangoproject.com/en/3.1/topics/testing/tools/#testcase), [LiveServerTestCase](https://docs.djangoproject.com/en/3.1/topics/testing/tools/#liveservertestcase)) and then write separate methods to check that specific functionality works as expected. (Tests use "assert" methods to test that expressions result in `True` or `False` values, or that two values are equal, etc.) When you start a test run, the framework executes the chosen test methods in your derived classes. The test methods are run independently, with common setup and/or tear-down behavior defined in the class, as shown below.
```
class YourTestClass(TestCase):
    def setUp(self):
        # Setup run before every test method.
        pass

    def tearDown(self):
        # Clean up run after every test method.
        pass

    def test_something_that_will_pass(self):
        self.assertFalse(False)

    def test_something_that_will_fail(self):
        self.assertTrue(False)
```
The best base class for most tests is [`django.test.TestCase`](https://docs.djangoproject.com/en/3.1/topics/testing/tools/#testcase). This test class creates a clean database before its tests are run, and runs every test function in its own transaction. The class also owns a test [Client](https://docs.djangoproject.com/en/3.1/topics/testing/tools/#django.test.Client) that you can use to simulate a user interacting with the code at the view level. In the following sections, we're going to concentrate on unit tests, created using this [TestCase](https://docs.djangoproject.com/en/3.1/topics/testing/tools/#testcase) base class.

<hr>

**Note**: The [`django.test.TestCase`](https://docs.djangoproject.com/en/3.1/topics/testing/tools/#testcase) class is very convenient, but may result in some tests being slower than they need to be (not every test will need to set up its own database or simulate the view interaction). Once you're familiar with what you can do with this class, you may want to replace some of your tests with the available simpler test classes.

<hr>

### What should you test?

You should test all aspects of your own code, but not any libraries or functionality provided as part of Python or Django.

So, for example, consider the `Author` model defined below. You don't need to explicitly test that `first_name` and `last_name` have been stored properly as `CharField` in the database because that is something defined by Django. (Though, of course, in practice you will inevitably test this functionality during development.) Nor do you need to test that the `date_of_birth` has been validated to be a date field, because that is again something implemented in Django.

However, you should check the text used for the labels (*First name*, *Last name*, *Date of birth*, *Died*), and the size of the field allocated for the text (*100 chars*), because these are part of your design and something that could be broken/changed in the future.
```
class Author(models.Model):
    first_name = models.CharField(max_length=100)
    last_name = models.CharField(max_length=100)
    date_of_birth = models.DateField(null=True, blank=True)
    date_of_death = models.DateField('Died', null=True, blank=True)

    def get_absolute_url(self):
        return reverse('author-detail', args=[str(self.id)])

    def __str__(self):
        return '%s, %s' % (self.last_name, self.first_name)
```
Similarly, you should check that the custom methods `get_absolute_url()` and `__str__()` behave as required because they are your code/business logic. In the case of `get_absolute_url()`, you can trust that the Django `reverse()` method has been implemented properly, so what you're testing is that the associated view has actually been defined.

<hr>

**Note**: Astute readers may note that we would also want to constrain the date of birth and death to sensible values, and check that death comes after birth. In Django, this constraint would be added to your form classes. (Although you can define validators for model fields and model validators, these are only used at the form level if they are called by the model's `clean()` method. This requires a ModelForm or the model's `clean()` method needs to be specifically called.)

<hr>

With that in mind, let's start looking at how to define and run tests.

## Test structure overview

Before we go into the detail of "what to test", let's first briefly look at *where* and *how* tests are defined.

Django uses the *unittest* module's [built-in test discovery](https://docs.python.org/3/library/unittest.html#unittest-test-discovery), which will discover tests under the current working directory in any file named with the pattern **test\*.py**. Provided you name the files appropriately, you can use any structure you like. We recommend that you create a module for your test code, and have separate files for models, views, forms, and any other types of code you need to test. For example:
```
catalog/
    /tests/
        __init__.py
        test_models.py
        test_forms.py
        test_views.py
```
Create a file structure as shown above in your *LocalLibrary* project. The **__init__.py** should be an empty file. (This tells Python that the directory is a package.) You can create the three test files by copying and renaming the skeleton test file **/catalog/tests.py**.

<hr>

**Note**: The skeleton test file **/catalog/tests.py** was created automatically when we [built the Django skeleton website](https://github.com/AndrewSRea/My_Learning_Port/tree/main/JavaScript/Server-Side_Website_Programming/Django_Web_Framework/Django_Tutorial_2#django-tutorial-part-2-creating-a-skeleton-website). It is perfectly "legal" to put all your tests inside it, but if you test properly, you'll quickly end up with a very large and unmanageable test file.

Delete the skeleton file as we won't need it.

<hr>

Open **/catalog/tests/test_models.py**. The file should import `django.test.TestCase`, as shown:
```
from django.test import TestCase

# Create your tests here.
```
Often you will add a test class for each model/view/form you want to test, with individual methods for testing specific functionality. In other cases, you may wish to have a separate class for testing a specific use case, with individual test functions that test aspects of that use-case. (For example, a class to test that a model field is properly validated, with functions to test each of the possible failure cases.) Again, the structure is very much up to you, but it is best if you are consistent.

Add the test class below to the bottom of the file. The class demonstrates how to construct a test case class by deriving from `TestCase`.
```
class YourTestClass(TestCase):
    @classmethod 
    def setUpTestData(cls):
        print("setUpTestData: Run once to set up non-modified data for all class methods.")
        pass 

    def setUp(self):
        print("setUp: Run once for every test method to setup clean data.")
        pass 

    def test_false_is_false(self):
        print("Method: test_false_is_false.")
        self.assertFalse(False)

    def test_false_is_true(self):
        print("Method: test_false_is_true.")
        self.assertTrue(False)

    def test_one_plus_one_equals_two(self):
        print("Method: test_one_plus_one_equals_two.")
        self.assertEqual(1 + 1, 2)
```
The new class defines two methods that you can use for pre-test configuration. (For example, to create any models or objects you will need for the test):

* `setUpTestData()` is called once at the beginning of the test run for class-level setup. You'd use this to create objects that aren't going to be modified or changed in any of the test methods.
* `setUp()` is called before every test function to set up any objects that may be modified by the test (every test function will get a "fresh" version of these objects).

<hr>

**Note**: The test classes also have a `tearDown()` method which we haven't used. This method isn't particularly useful for database tests, since the `TestCase` base class takes care of database teardown for you.

<hr>

Below those we have a number of test methods, which use `Assert` functions to test whether conditions are true, false, or equal (`AssertTrue`, `AssertFalse`, `AssertEqual`). If the condition does not evaluate as expected, then the test will fail and report the error to your console.

The `AssertTrue`, `AssertFalse`, `AssertEqual` are standard assertions provided by **unittest**. There are other standard assertions in the framework, and also [Django-specific assertions](https://docs.djangoproject.com/en/3.1/topics/testing/tools/#assertions) to test if a view redirects (`assertRedirects`), to test if a particular template has been used (`assertTemplateUsed`), etc.

<hr>

**Note**: You should **not** normally include **`print()`** functions in your tests as shown above. We do that here only so that you can see the order that the setup functions are called in the console (in the following section).

<hr>

## How to run the tests

The easiest way to run all the tests is to use the command:
```
python3 manage.py test
```
This will discover all files named with pattern **test\*.py** under the current directory and run all tests defined using appropriate base classes. (Here we have a number of test files, but only **/catalog/tests/test_models.py** currently contains any tests.) By default, the tests will individually report only on test failures, followed by a test summary.

<hr>

**Note**: If you get errors similar to: `ValueError: Missing staticfiles manifest entry ...`, this may be because testing does not run *collectstatic* by default and your app is using a storage class that requires it (see [`manifest_static`](https://docs.djangoproject.com/en/3.1/ref/contrib/staticfiles/#django.contrib.staticfiles.storage.ManifestStaticFilesStorage.manifest_strict) for more information). There are a number of ways you can overcome this problem - the easiest is to run *collecstatic* before running the tests:
```
python3 manage.py collectstatic
```

<hr>

Run the tests in the root directory of *LocalLibrary*. You should see an output like the one below:
```
> python3 manage.py test

Creating test database for alias 'default'...
setUpTestData: Run once to set up non-modified data for all class methods.
setUp: Run once for every test method to setup clean data.
Method: test_false_is_false.
setUp: Run once for every test method to setup clean data.
Method: test_false_is_true.
setUp: Run once for every test method to setup clean data.
Method: test_one_plus_one_equals_two.
.
======================================================================
FAIL: test_false_is_true (catalog.tests.test_models.YourTestClass)
----------------------------------------------------------------------
Traceback (most recent call last):
  File "D:\Github\django_tmp\library_w_t_2\locallibrary\catalog\tests\test_models.py", line 22, in test_false_is_true
    self.assertTrue(False)
AssertionError: False is not true

----------------------------------------------------------------------
Ran 3 tests in 0.075s

FAILED (failures=1)
Destroying test database for alias 'default'...
```
Here we see that we had one test failure, and we can see exactly what function failed and why. (This failure is expected, because `False` is not `True`!)

<hr>

**Note**: The most important thing to learn from the test output above is that it is much more valuable if you use descriptive/informative names for your objects and methods.

<hr>

The text shown in **bold** above (although it can't be seen, it is the words **test** and **alias**) would not normally appear in the test output. (This is generated by the `print()` functions in our tests.) This shows how the `setUpTestData()` method is called once for the class and `setUp()` is called before each method.

The next sections show how you can run specific tests, and how to control how much inforamtion the tests display.

### Showing more test information

If you want to get more information about the test run, you can change the *verbosity*. For example, to list the test successes as well as failures (and a whole bunch of information about how the testing database is set up), you can set the verbosity to "2" as shown:
```
python3 manage.py test --verbosity 2
```
The allowed verbosity levels are 0, 1, 2, and 3, with the default being "1".

### Running specific tests

If you want to run a subset of your tests, you can do so by specifying the full dot path to the package(s), module, `TestCase` subclass, or method:
```
# Run the specified module
python3 manage.py test catalog.tests

# Run the specified module
python3 manage.py test catalog.tests.test_models

# Run the specified class
python3 manage.py test catalog.tests.test_models.YourTestClass

# Run the specified method
python3 manage.py test catalog.tests.test_models.YourTestClass.test_one_plus_one_equals_two
```

## LocalLibrary tests

Now we know how to run our tests and what sort of things we need to test, let's look at some practical examples.

<hr>

**Note**: We won't write every possible test, but this should give you an idea of how tests work, and what more you can do.

<hr>

### Models

As discussed above, we should tests anything that is part of our design or that is defined by code that we have written, but not libraries/code that is already tested by Django or the Python development team.

For example, consider the `Author` model below. Here we should test the labels for all the fields, because even though we haven't explicitly specified most of them, we have a design that says what these values should be. If we don't test the values, then we don't know that the field labels have their intended values. Similarly, while we trust that Django will create a field of the specified length, it is worthwhile to specify a test for this length to ensure that it was implemented as planned.
```
class Author(models.Model):
    first_name = models.CharField(max_length=100)
    last_name = models.CharField(max_length=100)
    date_of_birth = models.DateField(null=True, blank=True)
    date_of_death = models.DateField('Died', null=True, blank=True)

    def get_absolute_url(self):
        return reverse('author-detail', args=[str(self.id)])

    def __str__(self):
        return f'{self.last_name}, {self.first_name},
```
Open our **/catalog/tests/test_models.py**, and replace any existing code with the following test code for the `Author` model.

Here you'll see that we first import `TestCase` and derive our test class (`AuthorModelTest`) from it, using a descriptive name so we can easily identify any failing tests in the test output. We then call `setUpTestData()` to create an author object that we will use but not modify in any of the tests.
```
from django.test import TestCase

from catalog.models import Author 

class AuthorModelTest(TestCase):
    @classmethod 
    def setUpTestData(cls):
        # Set up non-modified objects used by all test methods
        Author.objects.create(first_name='Big', last_name='Bob')

    def test_first_name_label(self):
        author = Author.objects.get(id=1)
        field_label = author._meta.get_field('first_name').verbose_name
        self.assertEqual(field_label, 'first name')

    def test_date_of_death_label(self):
        author = Author.objects.get(id=1)
        field_label = author._meta.get_field('date_of_death').verbose_name
        self.assertEqual(field_label, 'died')

    def test_first_name_max_length(self):
        author = Author.objects.get(id=1)
        max_length = author._meta.get_field('first_name').max_length
        self.assertEqual(max_length, 100)

    def test_object_name_is_last_name_comma_first_name(self):
        author = Author.objects.get(id=1)
        expected_object_name = f'{author.last_name}, {author.first_name}'
        self.assertEqual(str(author), expected_object_name)

    def test_get_absolute_url(self):
        author = Author.objects.get(id=1)
        # This will also fail if the urlconf is not defined.
        self.assertEqual(author.get_absolute_url(), '/catalog/author/1')
```
The field tests check that the values of the field labels (`verbose_name`) and that the size of the character fields are as expected. These methods all have descriptive names, and follow the same pattern:
```
# Get an author object to test
author = Author.objects.get(id=1)

# Get the metadata for the required field and use it to query the required field data
field_label = author._meta.get_field('first_name').verbose_name

# Compare the value to the expected result
self.assertEqual(field_label, 'first_name')
```
The interesting things to note are:

* We can't get the `verbose_name` directly using `author.first_name.verbose_name`, because `author.first_name` is a *string* (not a handle to the `first_name` object that we can use to access its properties). Instead we need to use the author's `_meta` attribute to get an instance of the field and use that to query for the additional information.
* We chose to use `assertEqual(field_label, 'first_name')` rather than `assertTrue(field_label == 'first_name')`. The reason for this is that if the test fails, the output for the former tells you what the label actually was, which makes debugging the problem just a little easier.

<hr>

**Note**: Tests for the `last_name` and `date_of_birth` labels, and also the test for the length of the `last_name` field have been omitted. Add your own versions now, following the naming conventions and approaches shown above.

<hr>

We also need to test our custom methods. These essentially just check that the object name was constructed as we expected using "LastName", "FirstName" format, and that the URL we get for an `Author` item is as we would expect.
```
def test_object_name_is_last_name_comma_first_name(self):
    author = Author.objects.get(id=1)
    expected_object_name = f'{author.last_name}, {author.first_name}'
    self.assertEqual(str(author), expected_object_name)

def test_get_absolute_url(self):
    author = Author.objects.get(id=1)
    # This will also fail if the urlconf is not defined.
    self.assertEqual(author.get_absolute_url(), '/catalog/author/1')
```
Run the tests now. If you created the `Author` model as we described in the models tutorial, it is quite likely that you will get an error for the `date_of_death` label as shown below. The test is failing because it was written expecting the label definition to follow Django's convention of not capitalizing the first letter of the label. (Django does this for you.)
```
======================================================================
FAIL: test_date_of_death_label (catalog.tests.test_models.AuthorModelTest)
----------------------------------------------------------------------
Traceback (most recent call last):
  File "D:\...\locallibrary\catalog\tests\test_models.py", line 32, in test_date_of_death_label
    self.assertEqual(field_label,'died')
AssertionError: 'Died' != 'died'
- Died
? ^
+ died
? ^
```
This is a very minor bug, but it does highlight how writing tests can more thoroughly check any assumptions you may have made.

<hr>

**Note**: Change the label for the `date_of_death` field (**/catalog/models.py**) to "died" and rerun the tests.

<hr>

The patterns for testing the other models are similar so we won't continue to discuss these further. Feel free to create your own tests for our other models.

### Forms 

The philosophy for testing your forms is the same as for testing your models. You need to test anything that you've coded or your design specifies, but not the behavior of the underlying framework and other third party libraries.

Generally, this means that you should test that the forms have the fields that you want, and that these are displayed with appropriate labels and help text. You don't need to verify that Django validates the field type correctly (unless you created your own custom field and validation) -- i.e. you don't need to test that an email field only accepts emails. However, you would need to test any additional validation that you expect to be performed on the fields and any messages that your code will generate for errors.

Consider our form for renewing books. This has just one field for the renewal date, which will have a label and help text that we will need to verify.
```
class RenewBookForm(forms.Form):
    """Form for a librarian to renew books."""
    renewal_date = forms.DateField(help_text="Enter a date between now and 4 weeks (default 3).")

    def clean_renewal_date(self):
        data = self.cleaned_data['renewal_date']

        # Check if a date is not in the past.
        if data < datetime.date.today():
            raise ValidationError(_('Invalid date - renewal in past'))

        # Check if date is in the allowed range (+4 weeks from today).
        if data > datetime.date.today() + datetime.timedelta(weeks=4):
            raise ValidationError(_('Invalid date - renewal more than 4 weeks ahead'))

        # Remember to always return the cleaned data.
        return data
```
Open our **/catalog/tests/test_forms.py** file and replace any existing code with the following test code for the `RenewBookForm` form. We start by importing our form and some Python and Django libraries to help test time-related functionality. We then declare our form test class in the same way as we did for models, using a descriptive name for our `TestCase`-derived test class.
```
import datetime

from django.test import TestCase
from django.utils import timezone

from catalog.forms import RenewBookForm

class RenewBookFormTest(TestCase):
    def test_renew_form_date_field_label(self):
        form = RenewBookForm()
        self.assertTrue(form.fields['renewal_date'].label is None or form.fields['renewal_date'].label == 'renewal date')

    def test_renew_form_date_in_past(self):
        form = RenewBookForm()
        self.assertEqual(form.fields['renewal_date'].help_text, 'Enter a date between now and 4 weeks (default 3).')

    def test_renew_form_date_in_past(self):
        date = datetime.date.today() - datetime.timedelta(days=1)
        form = RenewBookForm(data={'renewal_date': date})
        self.assertFalse(form.is_valid())

    def test_renew_form_date_too_far_in_future(self):
        date = datetime.date.today() + datetime.timedelta(weeks=4) + datetime.timedelta(days=1)
        form = RenewBookForm(data={'renewal_date': date})
        self.assertFalse(form.is_valid())

    def test_renew_form_date_today(self):
        date = datetime.date.today()
        form = RenewBookForm(data={'renewal_date': date})
        self.assertTrue(form.is_valid())

    def test_renew_form_date_max(self):
        date = timezone.localtime() + datetime.timedelta(weeks=4)
        form = RenewBookForm(data={'renewal_date': date})
        self.assertTrue(form.is_valid())
```
The first two functions test that the field's `label` and `help_text` are as expected. We have to access the fields using the fields dictionary (e.g. `form.field['renewal_date']`). Note here that we also have to test whether the label value if `None`, because even though Django will render the correct label, it returns `None` if the value is not *explicitly* set.

The rest of the functions test that the form is valid for renewal dates just inside the acceptable range and invalid for values outside the range. Note how we construct test date values around our current date (`datetime.date.today()`) using `datetime.timedelta()` (in this case, specifying a number of days or weeks). We then just create the form, passing in our data, and test if it is valid.

<hr>

**Note**: Here we don't actually use the database or test client. Consider modifying these tests to use [SimpleTestCase](https://docs.djangoproject.com/en/3.1/topics/testing/tools/#django.test.SimpleTestCase).

We also need to validate that the correct errors are raised if the form is invalid, however this is usually done as part of view processing, so we'll take care of that in the next section.

<hr>

That's all for forms. We do have some others, but they are automatically created by our generic class-based editing views, and should be tested there! Run the tests and confirm that our code still passes!

### Views

To validate our view behavior, we use the Django test [Client](https://docs.djangoproject.com/en/3.1/topics/testing/tools/#django.test.Client). This class acts like a dummy web browser that we can use to simulate `GET` and `POST` requests on a URL and observe the response. We can see almost everything about the response, from low-level HTTP (result headers and status codes) through to the template we're using to render the HTML and the context data we're passing to it. We can also see the chain of redirects (if any) and check the URL and status code at each step. This allows us to verify that each view is doing what is expected.

Let's start with one of our simplest views, which provides a list of all Authors. This is displayed at URL **/catalog/authors/** (a URL named 'authors' in the URL configuration).
```
class AuthorListView(generic.ListView):
    model = Author
    paginate_by = 10
```