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