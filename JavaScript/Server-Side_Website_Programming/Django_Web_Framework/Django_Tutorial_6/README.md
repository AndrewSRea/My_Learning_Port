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

### Creating the ListView template

Create the HTML file **/locallibrary/catalog/template/catalog/book_list.html** and copy in the text below. As discussed above, this is the default template file expected by the generic class-based list view (for a model named `Book` in an application named `catalog`).

Templates for generic views are just like any other templates (although, of course, the context/information passed to the template may differ). As with our *index* template, we extend our base template in the first line and then replace the block named `content`.
```
{% extends "base_generic.html" %} 

{% block content %} 
    <h1>Book List</h1>
    {% if book_list %} 
    <ul>
        {% for book in book_list %} 
            <li>
                <a href="{{ book.get_absolute_url }}">{{ book.title }}</a> ({{book.author}})
            </li>
        {% endfor %} 
    </ul>
    {% else %}  
        <p>There are no books in the library.</p>
    {% endif %} 
{% endblock %}
```
The view passes the context (list of books) by default as `object_list` and `book_list` aliases; either will work.

#### Conditional execution

We use the [`if`](https://docs.djangoproject.com/en/3.1/ref/templates/builtins/#if), `else`, and `endif` template tags to check whether the `book_list` has been defined and is not empty. If `book_list` is empty, the the `else` clause displays text explaining that there are no books to list. If `book_list` is not empty, then we iterate through the list of books.
```
{% if book_list %}
    <!-- code here to list the books --
{% else %}
    <p>There are no books in the library.</p>
{% endif %}
```
The condition above only checks for one case, but you can test on additional conditions using the `elif` template tag (e.g. `{% elif var2 %}`). For more information about conditional operators, see: [if](https://docs.djangoproject.com/en/3.1/ref/templates/builtins/#if), [ifequal/ifnotequal](https://docs.djangoproject.com/en/3.1/ref/templates/builtins/#ifequal-and-ifnotequal), and [ifchanged](https://docs.djangoproject.com/en/3.1/ref/templates/builtins/#ifchanged) in [Built-in template tags and filters](https://docs.djangoproject.com/en/3.1/ref/templates/builtins/) (Django docs).

#### For loops

The template uses the [for](https://docs.djangoproject.com/en/3.1/ref/templates/builtins/#for) and `endfor` template tags to loop through the book list, as shown below. Each iteration populates the `book` template variable with information for the current list item.
```
{% for book in book_list %}
    <li> <!-- code here to get information from each book item -->
{% endfor %}
```
While not used here, within the loop Django will also create other variables that you can use to track the iteration. For example, you can test the `forloop.last` variable to perform conditional processing the last time that the loop is run.

#### Accessing variables

The code inside the loop creates a list item for each book that shows both the title (as a link to the yet-to-be-created detail view) and the author.
```
<a href="{{ book.get_absolute_url }}">{{ book.title }}</a> ({{book.author}})
```
We access the *fields* of the associated book record using the "dot notation" (e.g. `book.title` and `book.author`), where the text following the `book` item is the field name (as defined in the model).

We can also call *functions* in the model from within our template. In this case, we call `Book.get_absolute_url()` to get a URL you could use to display the associated detail record. This works provided the function does not have any arguments. (There is no way to pass arguments!)

<hr>

**Note**: We have to be a little careful of "side effects" when calling functions in templates. Here we just get a URL to display, but a function can do pretty much anything -- we wouldn't want to delete our database (for example) just by rendering our template!

<hr>

#### Update the base template

Open the base template (**/locallibrary/catalog/templates/*base_generic.html***) and insert **{% url 'books' %}** into the URL link for **All books**, as shown below. This will enable the link in all pages. (We can successfully put this in place now that we've created the "books" URL mapper.)
```
<li><a href="{% url 'index' %}">Home</a></li>
<li><a href="{% url 'books' %}">All books</a></li>
<li><a href="">All authors</a></li>
```

### What does it look like?

You won't be able to build the book list yet, because we're still missing a dependency -- the URL map for the book detail pages, which is needed to create hyperlinks to individual books. We'll show both list and detail views after the next section.

## Book detail page

The book detail page will display information about a specific book, accessed using the URL `catalog/book/<id>` (where `<id>` is the primary key for the book). In addition to fields in the `Book` model (author, summary, ISBN, language, and genre), we'll also list the details of the available copies (`BookInstances`) including the status, expected return date, imprint, and id. This will allow our readers to not only learn about the book, but also to confirm whether/when it is available.

### URL mapping

Open **/catalog/urls.py** and add the path named **'book-detail'** shown below. This `path()` function defines a pattern, associated generic class-based detail view, and a name.
```
urlpatterns = [
    path('', views.index, name='index'),
    path('books/', views.BookListView.as_view(), name='book-detail'),
    path('book/<int:pk>', views.BookDetailView.as_view(), name='book-detail'),
]
```
For the *book-detail* path, the URL pattern uses a special syntax to capture the specific id of the book that we want to see. The syntax is very simple: angle brackets define the part of the URL to be captured, enclosing the name of the variable that the view can use to access the captured data. For example, **<something>**, will capture the marked pattern and pass the value to the view as a variable "something". You can optionally precede the variable name with a [converter specification](https://docs.djangoproject.com/en/3.1/topics/http/urls/#path-converters) that defines the type of data (int, str, slug, uuid, path).

In this case, we use `'<int:pk>'` to capture the book id, which must be a specially formatted string and pass it to the view as a parameter named `pk` (short for primary key). This is the id that is being used to store the book uniquely in the database, as defined in the Book Model.

<hr>

**Note**: As discussed previously, our matched URL is actually `catalog/book/<digits>` (because we are in the **catalog** application, `/catalog/` is assumed).

<hr>

:warning: **Warning**: The generic class-based detail view *expects* to be passed a parameter named **pk**. If you're writing your own function view, you can use whatever parameter name you like, or indeed pass the information in an unnamed argument.

<hr>