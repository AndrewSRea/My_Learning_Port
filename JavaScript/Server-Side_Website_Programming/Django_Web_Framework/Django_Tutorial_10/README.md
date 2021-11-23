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
        sel.assertTrue(False)
```
