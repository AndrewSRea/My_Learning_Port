# Handling common accessibility problems

Next, we turn our attention to accessibility, providing information on common problems, how to do simple testing, and how to make use of auditing/automation tools for finding accessibility issues.

## What is accessibility?

When we say accessibility in the context of web technology, most people immediately think of making sure websites/apps are usable by people with disabilities. For example:

* Visually impaired people using screen readers or magnification/zoom to access text.
* People with motor function impairments using the keyboard (or other non-mouse features) to activate website functionality.
* People with hearing impairments relying on captions/subtitles or other text alternatives for audio/video content.

However, it is wrong to say that accessibility is just about disabilities. Really, the aim of accessibility is to make your websites/apps usable by as many people in as many contexts as possible, not just those users using high-powered desktop computers. Some examples might include:

* Users on mobile devices.
* Users on alternative browsing devices, such as TVs, watches, etc.
* Users of older devices that might not have the latest browsers.
* Users of lower spec devices that might have slow processors.

In a way, this whole module is about accessibility -- cross browser testing makes sure that your sites can be used by as many people as possible. [What is accessibility?](https://developer.mozilla.org/en-US/docs/Learn/Accessibility/What_is_accessibility) defines accessibility more completely and thoroughly than this article does.

That said, this article will cover cross browser and testing issues surrounding people with disabilities, and how they use the Web. We've already talked about other spheres such as [responsive design](https://github.com/AndrewSRea/My_Learning_Port/tree/main/JavaScript/Tools_and_Testing/Cross_Browser_Testing/Handling_HTML_CSS_Problems#responsive-design-problems) and [performance](https://github.com/AndrewSRea/My_Learning_Port/tree/main/JavaScript/Tools_and_Testing/Cross_Browser_Testing/Handling_JavaScript_Problems#performance-issues) in other places in the module.

<hr>

**Note**: Like many things in web development, accessibility isn't about 100% success or not. 100% accessibility is pretty much impossible to achieve for all content, especially as sites get more complex. Instead, it is more about making a reasonable effort to make as much of your content accessible to as many people as possible via defensive coding and sticking to best practices.

<hr>