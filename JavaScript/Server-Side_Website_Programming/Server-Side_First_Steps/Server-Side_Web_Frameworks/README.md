# Server-side web frameworks

The previous article showed you what the communication between web clients and servers looks like, the nature of HTTP requests and responses, and what a server-side web application needs to do in order to respond to requests from a web browser. With this knowledge under our belt, it's time to explore how web frameworks can simplify these tasks, and give you an idea of how you'd choose a framework for your first server-side web application.

The following sections illustrate some points using code fragments taken from real web frameworks. Don't be concerned if it doesn't **all** make sense now. We'll be working you through the code in our framework-specific modules.

## Overview

Server-side web frameworks (a.k.a. "web application frameworks") are software frameworks that make it easier to write, maintain, and scale web applications. They provide tools and libraries that simplify common web development tasks, including routing URLs to appropriate handlers, interacting with databases, supporting sessions and user authorization, formatting output (e.g. HTML, JSON, XML), and improving security against web attacks.

The next section provides a bit more detail about how web frameworks can ease web application development. We then explain some of the criteria you can use for choosing a web framework, and then list some of your options.

## What can a web framework do for you?

Web frameworks provide tools and libraries to simplify common web development operations. You don't *have* to use a server-side web framework, but it is strongly advised -- it will make your life a lot easier.

This section discusses some of the functionality that is often provided by web frameworks. (Not every framework will necessarily provide all of these features!)

### Work directly with HTTP requests and responses

As we saw in the last article, web servers and browsers communicate via the HTTP protocol. Servers wait for HTTP requests from the browser and then return information in HTTP responses. Web frameworks allow you to write simplified syntax that will generate server-side code to work with these requests and responses. This means that you will have an easier job, interacting with easier, higher-level code rather than lower-level netowrking primitives.

The example below shows how this works in the Django (Python) web framework. Every "view" function (a request handler) receives an `HttpRequest` object containing request information, and is required to return an `HttpResponse` object with the formatted output (in this case, a string):
```
# Django view function
from django.http import HttpResponse

def index(request):
    # Get an HttpRequest (request)
    # perform operations using information from the request.
    # Return HttpResponse
    return HttpResponse('Output string to return')
```

### Route requests to the appropriate handler

Most sites will provide a number of different resources, accessible through distinct URLs. Handling these all in one function would be hard to maintain, so web frameworks provide simple mechanisms to map URL patterns to specific handler functions. This approach also has benefits in terms of maintenance, because you can change the URL used to deliver a particular feature without having to change the underlying code.

Different frameworks use different mechanisms for the mapping. For example, the Flask (Python) web framework adds routes to view functions using a decorator.
```
@app.route("/")
def hello():
    return "Helllo World!"
```
While Django expects developers to define a lits of URL mappings between a URL pattern and a view function.
```
urlpatterns = [
    url(r'^$', views.index),
    # example: /best/myteamname/5/
    url(r'^best/(?P<team_name>\w.+?)/(?P<team_number>[0-9]+)/$', views.best),
]
```

### Make it easy to access data in the request

Data can be encoded in an HTTP request in a number of ways. An HTTP `GET` request to get files or data from the server may encode what data is required in URL parameters or within the URL structure. An HTTP `POST` request to update a resource on the server will instead include the update information as "POST data" within the body of the request. The HTTP request may also include information about the current sesssion or user in a client-side cookie.

Web frameworks provide programming-language-appropriate mechanisms to access this information. For example, the `HttpRequest` object that Django passes to every view function contains methods and properties for accessing the target URL, the type of request (e.g. an HTTP `GET`), `GET` or `POST` parameters, cookie and session data, etc. Django can also pass information encoded in the structure of the URL by defining "capture patterns" in the URL mapper (see the last code fragment in the section above).

### Abstract and simplify database access

Websites use databases to store information both to be shared with users, and about users. Web frameworks often provide a database layer that abstracts database read, write, query, and delete operations. This abstraction layer is referred to as an Object-Relational Mapper (ORM).

Using an ORM has two benefits:

* You can replace the underlying database without necessarily needing to change the code that uses it. This allows developers to optimize for the characteristics of different databases based on their usage.
* Basic validation of data can be implemented within the framework. This makes it easier and safer to check that data is stored in the correct type of database field, has the correct format (e.g. an email address), and isn't malicious in any way. (Crackers can use certain patterns of code to do bad things, such as deleting database records.)

For example, the Django web framework provides an ORM, and refers to the object used to define the structure of a record as the *model*. The model specifies the field *types* to be stored, which may provide field-level validation on what information can be stored (e.g. an email field would only allow valid email addresses). The field definitions may also specify their maxiumum size, default values, selection list options, help text for documentation, label text for forms, etc. The model doesn't state any information about the underlying database as that is a configuration setting that may be changed separately of our code.

The first code snippet below shows a very simple Django model for a `Team` object. This stores the team name and team level as character fields and specifies a maximum number of characters to be stored for each record. The `team_level` is a choice field, so we also provide a mapping between choices to be displayed and data to be stored, along with a default value.
```
#best/models.py

from django.db import models

class Team(models.Model):
    team_name = models.CharField(max_length=40)

    TEAM_LEVELS = (
        ('U09', 'Under 09s'),
        ('U10', 'Under 10s'),
        ('U11', 'Under 11s'),
        ... #list our other teams
    )
    team_level = models.CharField(max_length=3,choices=TEAM_LEVELS,default='U11')
```
The Django model provides a simple query API for searching the database. This can match against a number of fields at a time using different criteria (e.g. exact, case-insensitive, greater than, etc.), and can support complex statements. (For example, you can specify a search on U11 teams that have a team name that starts with "Fr" or ends with "al".)

The second code snippet shows a view function (resource handler) for displaying all of our U09 teams. In this case, we specify that we want to filter for all records where the `team_level` field has exactly the text 'U09'. (Note below how this criteria is passed to the `filter()` function as an argument with field name and match type separated by double underscores: **team_level__exact**).
```
#best/views.py

from django.shortcuts import render
from .models import Team

def youngest(request):
    list_teams = Team.objects.filter(team_level__exact="U09")
    context = {'youngest_teams': list_teams}
    return render(request, 'best/index.html', context)
```

### Rendering data

Web frameworks often provide templating systems. These allow you to specify the structure of an output document, using placeholders for data that will be added when a page is generated. Templates are often used to create HTML, but can also create other types of document.

Web frameworks often provide a mechanism to make it easy to generate other formats from stored data, including [JSON](https://developer.mozilla.org/en-US/docs/Glossary/JSON) and [XML](https://developer.mozilla.org/en-US/docs/Glossary/XML).

For example, the Django template system allows you to specify variables using a "double-handlebars" syntax (e.g. `{{ variable_name }}`), which will be replaced by values passed in from the view function when a page is rendered. The template system also provides support for expressions (with syntax: `{% expression %}`), which allow templates to perform simple operations like iterating list values passed into the template.

<hr>

**Note** Many other templating systems use a similar syntax, e.g. [Jinja2](https://jinja2docs.readthedocs.io/en/stable/) (Python), [Handlebars](https://handlebarsjs.com/) (JavaScript), [Moustache](https://mustache.github.io/) (JavaScript), etc.

<hr>

The code snippet below shows how this works. Continuing the "youngest team" example from the previous section, the HTML template is passed a list variable called `youngest_teams` by the view. Inside the HTML skeleton, we have an expression that first checks if the `youngest_teams` variable exists, and then iterates it in a `for` loop. On each iteration, the template displays the team's `team_name` value in a list item.
```
#best/templates/best/index.html

<!DOCTYPE html>
<html lang="en">
<body>

    {% if youngest_teams %}
        <ul>
        {% for team in youngest_teams %}
            <li>{{ team.team_name }}</li>
        {% endfor %}
        </ul>
    {% else %}
        <p>No teams are available.</p>
    {% endif %}

</body>
</html>
```

## How to select a web framework

