# Django web application security

Protecting user data is an essential part of any website design. We previously explained some of the more common security threats in the article [Web security](https://developer.mozilla.org/en-US/docs/Web/Security) -- this article provides a practical demonstration of how Django's in-built protections handle such threats.

## Overview

The [Website security](https://developer.mozilla.org/en-US/docs/Web/Security) topic provides an overview of what website security means for server-side design, and some of the more common threats that you should protect against. One of the key messages in that article is that almost all attacks are successful when the web application trusts data from the browser.

<hr>

:warning: **Warning**: The single most important lesson you can learn about website security is to **never trust data from the browser**. This includes `GET` request data in URL parameters, `POST` data, HTTP headers and cookies, user-uploaded files, etc. Always check and sanitize all incoming data. Always assume the worst.

<hr>

The good news for Django users is that many of the more common threats are handled by the framework! The [Security in Django](https://docs.djangoproject.com/en/3.1/topics/security/) (Django docs) article explains Django's security features and how to secure a Django-powered website.

## Common threats/protections

Rather than duplicate the Django documentation here, in this article we'll demonstrate just a few of the security features in the context of our Django [LocalLibrary](https://github.com/AndrewSRea/My_Learning_Port/tree/main/JavaScript/Server-Side_Website_Programming/Django_Web_Framework/Django_Tutorial_Local_Library#django-tutorial-the-local-library-website) tutorial.

### Cross site scripting (XSS)

XSS is the term used to describe a class of attacks that allow an attacker to inject client-side scripts *through* the website into the browsers of other users. This is usually achieved by storing malicious scripts in the database where they can be retrieved and displayed to other users, or by getting users to click a link that will cause the attacker's JavaScript to be executed by the user's browser.

Django's template system projects you against the majority of XSS attacks by [escaping specific characters](https://docs.djangoproject.com/en/3.1/ref/templates/language/#automatic-html-escaping) that are "dangerous" in HTML. We can demonstrate this by attempting to inject some JavaScript into our LocalLibrary website using the Create-author form we set up in [Django Tutorial Part 9: Working with forms](https://github.com/AndrewSRea/My_Learning_Port/tree/main/JavaScript/Server-Side_Website_Programming/Django_Web_Framework/Django_Tutorial_9#django-tutorial-part-9-working-with-forms).

1. Start the website using the development server (`python3 manage.py runserver`).

2. Open the site in your local browser and login to your superuser account.

3. Navigate to the author-creation page (which should be at URL: [http://127.0.0.1:8000/catalog/author/create/](http://127.0.0.1:8000/catalog/author/create/)).

4. Enter names and date details for a new author, and then append the following test to the Last Name field: `<script>alert('Test alert');</script>`. [**Note**: This is a harmless script that, if executed, will display an alert box in your browser. If the alert is displayed when you submit the record, then the site is vulnerable to XSS threats.]

5. Press **Submit** to save the record.

6. When you save the author, it will be displayed as shown below. Because of the XSS protections, the `alert()` should not be run. Instead, the script is displayed as plain text.

![Image of the "Last Name" input displayed as text on the "LocalLibrary" app](https://developer.mozilla.org/en-US/docs/Learn/Server-side/Django/web_application_security/author_detail_alert_xss.png)

If you view the page HTML source code, you can see that the dangerous characters for the script tags have been turned into their harmless escape code equivalents (e.g. `>` is not `&gt;`). For example:
```
<h1>Author: Boon&lt;script&gt;alert(&#39;Test alert&#39;);&lt;/script&gt;, David (Boonie) </h1>
```
Using Django templates protects you against the majority of XSS attacks. However it is possible to turn off this protection, and the protection isn't automatically applied to all tags that wouldn;t normally be populated by user input. (For example, the `help_text` in a form field is usually not user-supplied, so Django doesn't escape those values.)

It is also possible for XSS attacks to originate from other untrusted sources of data, such as cookies, Web services, or uploaded files (whenever the data is not sufficiently sanitized before being included in a page). If you're displaying data from these sources, then you may need to add your own sanitization code.

### Cross site request forgery (CSRF) protection

CSRF attacks allow a malicious user to execute actions using the credentials of another user without that user's knowledge or consent. For example, consider the case where we have a hacker who wants to create additional authors for our LocalLibrary.

<hr>

**Note**: Obviously our hacker isn't in this for the money! A more ambitious hacker could use the same approach on other sites to perform much more harmful tasks (e.g. transfer money to their own accounts, etc.).

<hr>

In order to do this, they might create an HTML file like the one below, which contains an author-creation form (like the one we used in the previous section) that is submitted as soon as the file is loaded. They would then send the file to all the Librarians and suggest that they open the file (it contains some harmless information, honest!). If the file is opened by any logged in librarian, then the form would be submitted with their credentials and a new author would be created.
```
<html>
<body onload='document.EvilForm.submit()'>

<form action="http://127.0.0.1:8000/catalog/author/create/" method="post" name='EvilForm'>
    <table>
        <tr><th><label for="id_first_name">First name:</label></th><td><input id="id_first_name" maxlength="100" name="first_name" type="text" value="Mad" required /></td></tr>
        <tr><th><label for="id_last_name">Last name:</label></th><td><input id="id_last_name" maxlength="100" name="last_name" type="text" value="Man" required /></td></tr>
        <tr><th><label for="id_date_of_birth">Date of birth:</label></th><td><input id="id_date_of_birth" name="date_of_birth" type="text" /></td></tr>
        <tr><th><label for="id_date_of_death">Died:</label></th><td><input id="id_date_of_death" name="date_of_death" type="text" value="12/10/2016" /></td></tr>
    </table>
    <input type="submit" value="Submit" />
</form>

</body>
</html>
```
Run the development web server, and log in with your superuser account. Copy the text above into a file and then open it in the browser. You should get a CSRF error, because Django has protection against this kind of thing!

The way the protection is enabled is that you include the `{% csrf_token %}` template tag in your form definition. This token is then rendered in your HTML as shown below, with a value that is specific to the user on the current browser.
```
<input type='hidden' name='csrfmiddlewaretoken' value='0QRWHnYVg776y2l66mcvZqp8alrv4lb8S8lZ4ZJUWGZFA5VHrVfL2mpH29YZ39PW' />
```
Django generates a user/browser specific key and will reject forms that do not contain the field, or that contain an incorrect field value for the user/browser.

To use this type of attack, the hacker now has to discover and include the CSRF key for the specific target user. They also can't use the "scattergun" approach of sending a malicious file to all librarians and hoping that one of them will open it, since the CSRF key is browser specific.

Django's CSRF protection is turned on by default. You should always use the `{% csrf_token %}` template tag in your forms and use `POST` for requests that might change or add data to the database.