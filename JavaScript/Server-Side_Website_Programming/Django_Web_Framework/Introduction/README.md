# Django introduction

In this first Django article, we answer the question "What is Django?" and give you an overview of what makes this web framework special.

We'll outline the main features, including some of the advanced functionality that we won't have time to cover in detail in this module. We'll also show you some of the main building blocks of a Django application. (Although at this point you won't yet have a development environment in which to test it.)

## What is Django?

Django is a high-level Python web framework that enables rapid development of secure and maintainable websites. Built by experienced developers, Django takes care of much of the hassle of web development, so you can focus on writing your app without needing to reinvent the wheel. It is free and open source, has a thriving and active community, great documentation, and many options for free and paid-for support

Django helps you write software that is: 

**Complete**

Django follows the "Batteries included" philosophy and provides almost everything developers might want to do "out of the box". Because everything you need is part of the one "product", it all works seamlessly together, follows consistent design principles, and has extensive and [up-to-date documentation](https://docs.djangoproject.com/en/3.2/).

**Versatile**

Django can be (and has been) used to build almost any type of website -- from content management systems and wikis, through to social networks and news sites. It can work with any client-side framework, and can deliver content in almost any format (including HTML, RSS feeds, JSON, XML, etc.). The [MDN Learning page this is module is copied from](https://developer.mozilla.org/en-US/docs/Learn/Server-side/Django/Introduction) is built with Django!

Internally, while it provides choices for almost any functionality you might want (e.g. several popular databases, templating engines, etc.), it can also be extended to use other components if needed.

**Secure**

Django helps developers avoid many common security mistakes by providing a framework that has been engineered to "do the right things" to protect the website automatically. For example, Django provides a secure way to manage user accounts and passwords, avoiding common mistakes like putting session information in cookies where it is vulnerable (instead cookies just contain a key, and the actual data is stored in the database) or directly storing passwords rather than a password hash.

A password hash is a fixed-length value created by sending the password through a [cryptographic hash function](https://en.wikipedia.org/wiki/Cryptographic_hash_function). Django can check if an entered password is correct by running it through the hash function and comparing the output to the stored hash value. However, due to the "one-way" nature of the function, even if a stored hash value is compromised, it is hard for an attacker to work out the original password.

Django enables protection against many vulnerabilities by default, including SQL injection, cross-site scripting, cross-site request forgery, and clickjacking. (See [Website security](https://github.com/AndrewSRea/My_Learning_Port/tree/main/JavaScript/Server-Side_Website_Programming/Server-Side_First_Steps/Website_Security#website-security) for more details of such attacks.)

**Scalable**

Django uses a component-based "[shared-nothing](https://en.wikipedia.org/wiki/Shared-nothing_architecture)" architecture. (Each part of the architecture is independent of the others, and can hence be replaced or changed if needed.) Having a clear separation between the different parts means that it can scale for increased traffic by adding hardware at any level: caching servers, database servers, or application servers. Some of the busiest sites have successfully scaled Django to meet their demands (e.g. Instagram and Disqus, to name just two).

**Maintainable**

Django code is written using design priniciples and patterns that encourage the creation of maintainable and reusable code. In particular, it makes use of the "Don't Repeat Yourself" (DRY) priniciple so there is no unnecessary duplication, reducing the amount of code. Django also promotes the grouping of related functionality into reusable "applications" and, at a lower level, groups related code into modules (along the lines of the [Model View Controller (MVC)]() pattern).

**Portable**

Django is written in Python, which runs on many platforms. That means that you are not tied to any particular server platform, and can run your applications on many flavors of Linux, Windows, and Mac OS X. Furthermore, Django is well-supported by many web hosting providers, who often provide specific infrastructure and documentation for hosting Django sites.

## Where did it come from?

Django was initially 