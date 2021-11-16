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

#### Advanced path matching/regular expression primer

<hr>

**Note**: You won't need this section to complete the tutorial! We provide it because knowing this option is likely to be useful in your Django-centric future.

<hr>

The pattern matching provided by `path()` is simple and useful for the (very common) cases where you just want to capture *any* string or integer. If you need more refined filtering (for example, to filter only strings that have a certain number of characters), then you can use the [`re_path()`](https://docs.djangoproject.com/en/3.1/ref/urls/#django.urls.re_path) method.

This method is used just like `path()` except that it allows you to specify a pattern using a [Regular expression](https://docs.python.org/3/library/re.html). For example, the previous path could have been written as shown below:
```
re_path(r'^book/(?P<pk>\d+)$', views.BookDetailView.as_view(), name='book-detail'),
```
*Regular expressions* are an incredibly powerful pattern mapping tool. They are, frankly, quite unintuitive and can be intimidating for beginners. Below is a very short primer!

The first thing to know is that regular expressions should usually be declared using the raw string literal syntax (i.e. they are enclosed as shown **r'<your regular expression text goes here>'**).

The main parts of the syntax you will need to know for declaring the pattern matches are:

| Symbol | Meaning |
| --- | --- |
| ^ | Match the beginning of the text. |
| $ | Match the end of the text. |
| \d | Match a digit (0, 1, 2, ... 9) |
| \w | Match a word character, e.g. any upper- or lower-case character in the alphabet, digit, or the underscore cahracter (`_`). |
| + | Match one or more of the preceding characters. For example, to match one or more digits, you would use `\d+`. To match one or more "a" characters, you could use `a+`. |
| * | Match zero or more of the preceding character. For example, to match nothing or a word, you could use `\w*`. |
| () | Capture the part of the pattern inside the brackets. Any captured value will be passed to the view as unnamed parameters (if multiple patterns are captured, the associated parameters will be supplied in the order that captures were declared). |
| (?P<*name*>...) | Capture the pattern (indicated by ...) as a named variable (in this case "name"). The captured values are passed to the view with the name specified. Your view must, therefore, declare a parameter with the same name! |
| [ ] | Match against one character in the set. For example, [abc] will match on 'a' or 'b' or 'c'. [-\w] will match on the '-' character or any word character. |

Most other characters can be taken literally!

Let's consider a few real examples of patterns:

| Pattern | Description |
| --- | --- |
| **r'^book/(?P<pk>\d+)$'** | This is the RE used in our URL mapper. It matches a string that has `book/` at the start of the line (**^book/**), then has one or more digits (`\d+`), and then ends (with no non-digit characters before the end of line marker).<br>It also captures all the digits **(?P<pk>\d+)** and passes them to the view in a parameter named 'pk'. **The captured values are always passed as a string!**<br>For example, this would match `book/1234`, and send a variable `pk='1234'` to the view. |
| **r'^book/(d+)$'** | This matches the same URLs as the preceding case. The captured information would be sent as an unnamed argument to the view. |
| **r'^book/(?P<stub>[-\w]+)$'** | This matches a string that has `book/` at the start of the line (**^book/**), then has one or more characters that are *either* a '-' or a word character (**[-\w]+**), and then ends. It also captures this set of characters and passes them to the view in a parameter named 'stub'.<br>This is a fairly typical pattern for a "stub". Stubs are URL-friendly word-based primary keys for data. You might use a stub if you wanted your book URL to be more informative. For example, `/catalog/book/the-secret-garden` rather than `/catalog/book/33`. |

You can capture multiple patterns in the one match, and hence encode lots of different information in a URL.

<hr>

**Note**: As a challenge, consider how you might encode a URL to list all books released in a particular year, month, day, and the RE that could be used to match it.

<hr>

#### Passing additional options in your URL maps

One feature that we haven't used here, but which you may find valuable, is that you can pass a [dictionary containing additional options](https://docs.djangoproject.com/en/3.1/topics/http/urls/#views-extra-options) to the view (using the third unnamed argument to the `path()` function). This approach can be useful if you want to use the same view for multiple resources, and pass data to confirgure its behavior in each case.

For example, given the path shown below, for a request to `/myurl/halibut/`, Django will call `views.my_view(request, fish=halibut, my_template_name='some_path')`.
```
path('myurl/<int:fish>', views.my_view, {'my_template_name': 'some_path'}, name='aurl'),
```

<hr>

**Note**: Both named captured patterns and dictionary options are passed to the view as *named* arguments. If you use the **same name** for both a capture pattern and a dictionary key, then the dictionary option will be used.

<hr>

### View (class-based)

Open **catalog/views.py**, and copy the following code into the bottom of the file:
```
class BookDetailView(generic.DetailView):
    model = Book
```
That's it! All you need to do now is create a template called **/locallibrary/catalog/template/catalog/book_detail.html**, and the view will pass it the database information for the specific `Book` record extracted by the URL mapper. Within the template, you can access the book's details with the template variable named `object` OR `book` (i.e. generically `"the_model_name"`).

If you need to, you can change the template used and the name of the context object used to reference the book in the template. You can also override methods to, for example, add additional information to the context.

#### What happens if the record doesn't exist?

If a requested record does not exist, then the generic class-based detail view will raise an`Http404` exception for you automatically -- in production, this will automatically display an appropriate "resource not found" page, which you can customize if desired.

Just to give you some idea of how this works, the code fragment below demonstrates how you would implement the class-based view as a function if you were **not** using the generic class-based detail view.
```
def book_detail_view(request, primary_key):
    try:
        book = Book.objects.get(pk=primary_key)
    except Book.DoesNotExist:
        raise Http404('Book does not exist')

    return render(request, 'catalog/book_detail.html', context={'book': book})
```
The view first tries to get the specific book record from the model. If this fails, the view should raise an `Http404` exception to indicate that the book is "not found". The final step is then, as usual, to call `render()` with the tempalte name and the book data in the `context` parameter (as a dictionary).

Alternatively, we can use the `get_object_or_404()` function as a shortcut to raise an `Http404` exception if the record is not found.
```
from django.shortcuts import get_object_or_404

def book_detail_view(request, primary_key):
    book = get_object_or_404(Book, pk=primary_key)
    return render(request, 'catalog/book_detail.html', context={'book': book})
```

### Creating the Detail View template

Create the HTML file **/locallibrary/catalog/template/catalog/book_detail.html** and give it the below content. As discussed above, this is the default template file name expected by the generic class-based *detail* view (for a model named `Book` in an application named `catalog`).
```
{% extends "base_generic.html" %}  

{% block content %}  
    <h1>Title: {{ book.title }}</h1>

    <p><strong>Author:</strong> <a href="">{{ book.author }}</a></p> <!-- author detail link not yet defined -->
    <p><strong>Summary:</strong> {{ book.summary }}</p>
    <p><strong>ISBN:</strong> {{ book.isbn }}</p>
    <p><strong>Language:</strong> {{ book.language }}</p>
    <p><strong>Genre:</strong> {{ book.genre.all|join:", " }}</p>

    <div style="margin-left:20px;margin-top:20px;">
        <h4>Copies</h4>

        {% for copy in book.bookinstance_set.all %} 
            <hr>
            <p class="{% if copy.status == 'a' %}text-success{% elif copy.status == 'm' %}text-danger{% else %}text-warning{% endif %}">
                {{ copy.get_status_display }}
            </p>
            {% if copy.status != 'a' %} 
                <p><strong>Due to be returned:</strong> {{ copy.due_back }}</p>
            {% endif %}
            <p><strong>Imprint:</strong> {{ copy.imprint }}</p>
            <p class="text-muted"><strong>Id:</strong> {{ copy.id }}</p>
        {% endfor %}  
    </div>
{% endblock %}
```














cd JavaScript/Server-Side_Website_Programming/Django_Web_Framework/Django_Tutorial_6