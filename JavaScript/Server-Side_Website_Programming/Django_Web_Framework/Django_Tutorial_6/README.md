# Django Tutorial Part 6: Generic list and detail views

This tutorial extends our [LocalLibrary](https://github.com/AndrewSRea/My_Learning_Port/tree/main/JavaScript/Server-Side_Website_Programming/Django_Web_Framework/Django_Tutorial_Local_Library#django-tutorial-the-local-library-website) website, adding list and detail pages for books and authors. Here we'll learn about generic class-based views, and show how they can reduce the amount of code you have to write for common use cases. We'll also go into URL handling in greater detail, showing how to perform basic pattern matching.

## Overview

In this tutorial, we're going to complete the first version of the [LocalLibrary](https://github.com/AndrewSRea/My_Learning_Port/tree/main/JavaScript/Server-Side_Website_Programming/Django_Web_Framework/Django_Tutorial_Local_Library#django-tutorial-the-local-library-website) website by adding list and detail pages for books and authors (or, to be more precise, we'll show you how to implement the book pages, and get you to create the author pages yourself!)

The process is similar to creating the index page, which we showed in the previous tutorial. We'll still need to create URL maps, views, and templates. The main difference is that for the detail pages, we'll have the additional challenge of extracting information from patterns in the URL and passing it to the view. For these pages, we're going to demonstrate a completely different type of view: generic class-based list and detail views. These can significantly reduce the amount of view code needed, making them easier to write and maintain.

The final part of the tutorial will demonstrate how to paginate your data when using generic class-based list views.

## Book list page

The book list page will display a list of all the available book records in the page, accessed using the URL: `catalog/books/`. The page will display a title and author for each record, with the title being a hyperlink to the associated book detail page. The page will have the same structure and navigation as all other pages in the site, and we can, therefore, extend the base template (**base_generic.html**) we created in the previous tutorial.

### URL mapping

Open **/catalog/urls.py** and copy in the line setting the path for `'books/'`, as shown below. Just as for the index page, this `path()` function defines a pattern to match against the URL (**`'books/'`**), a view function that will be called if the URL matches (`views.BookListView.as_view()`), and a name for this particular mapping.
```
urlpatterns = [
    path('', views.index, name='index'),
    path('books/', views.BookListView.as_view(), name='books'),
]
```
As discussed in the previous tutorial, the URL must already have matched `/catalog`, so the view will actually be called for the URL: `/catalog/books/`.

The view function has a different format than before. That's because this view will actually be implemented as a class. We will be inheriting from an existing generic view function that already does most of what we want this view function to do, rather than writing our own from scratch.

For Django class-based views, we access an appropriate view function by calling the class method `as_view()`. This does all the work of creating an instance of the class, and making sure that the right handler methods are called for incoming HTTP requests.

### View (class-based)

We could quite easily write the book list view as a regular function (just like our previous index view), which would query the database for all books, and then call `render()` to pass the list to a specified template. Instead, however, we're going to use a class-based generic list view (`ListView`) --  a class that inherits from an existing view. Because the generic view already implements most of the functionality we need and follows Django best-practice, we will be able to create a more robust list view with less code, less repetition, and ultimately less maintenance.

Open **catalog/views.py**, and copy the following code into the bottom of the file:
```
from django.views import generic

class BookListView(generic.ListView):
    model = Book
```
That's it! The generic view will query the database to get all records for the specified model (`Book`), then render a template located at **/locallibrary/catalog/templates/catalog/book_list.html** (which we will create below). Within the template, you can access the list of books with the tempalte variable named `object_list` OR `book_list` (i.e. generically `"the_model_name_list"`).

<hr>

**Note**: This awkward path for the template location isn't a misprint -- the generic views look for templates in `/application_name/the_model_name_list.html` (`catalog/book_list.html` in this case) inside the application's `/application_name/templates/` directory (`/catalog/templates/`).

<hr>

You can add attributes to change the default behavior above. For example, you can specify another template file if you need to have multiple views that use this same model, or you might want to use a different template variable name if `book_list` is not iontuitive for your particular template use-case. Possibly the most useful variation is to change/filter the subset of results that are returned -- so instead of listing all books, you might list top 5 books that were read by other users.
```
class BookListView(generic.ListView):
    model = Book
    context_object_name = 'my_book_list'   # your own name for the list as a template variable
    queryset = Book.objects.filter(title__icontains='war')[:5]   # Get 5 books containing the title "war"
    template_name = 'books/my_arbitrary_template_name_list.html'   # Specify your own template name/location
```

#### Overriding methods in class-based views

While we don't need to do so here, you can also override some of the class methods.

For example, we can override the `get_queryset()` method to change the list of records returned. This is more flexible than just setting the `queryset` attribute as we did in the preceding code fragment (though there is no real benefit in this case):
```
class BookListView(generic.ListView):
    model = Book

    def get_queryset(self):
        return Book.objects.filter(title__icontains='war')[:5]  # Get 5 books containing the title "war"
```
We might also override `get_context_data()` in order to pass additional context variables to the template (e.g. the list of books is passed by defualt). The fragment below shows how to add a variable named "some_data" to the context (it would then be available as a template variable).
```
class BookListView(generic.ListView):
    model = Book

    def get_context_data(self, **kwargs):
        # Call the base implementation first to get the context
        context = super(BookListView, self).get_context_data(**kwargs)
        # Create any data and add it to the context
        context['some_data'] = 'This is just some data'
        return context
```
When doing this, it is important to follow the pattern used above:

* First, get the existing context from our superclass.
* Then add your new context information.
* Then return the new (updated) context.

<hr>

**Note**: Check out [Built-in class-based generic views](https://docs.djangoproject.com/en/3.1/topics/class-based-views/generic-display/) (Django docs) for many more examples of what you can do.

<hr>