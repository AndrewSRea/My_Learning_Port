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

The text shown in **bold** above would not normally appear in the test output. (This is generated by the `print()` functions in our tests.) This shows how the `setUpTestData()` method is called once for the class and `setUp()` is called before each method.

The next sections show how you can run specific tests, and how to control how much inforamtion the tests display.