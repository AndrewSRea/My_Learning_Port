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

## Common accessibility issues

In this section, we'll detail some of the main issues that arise around web accessibility, connected with specific technologies, along with best practices to follow, and some quick tests you can do to see if your sites are going in the right direction.

<hr>

**Note**: Accessibility is morally the right thing to do, and good for business (numbers of disabled users, users on mobile devices, etc., present significant market segments), but it is also a legal requirement in many parts of the world to make web content accessible to people with disabilities. Read [Accessibility guidelines and the law](https://developer.mozilla.org/en-US/docs/Learn/Accessibility/What_is_accessibility#accessibility_guidelines_and_the_law) for more information.

<hr>

### HTML

Semantic HTML (where the elements are used for their correct purpose) is accessible right out of the box -- such content is readable by sighted viewers (provided you don't do anything silly like make the text way too small or hide it using CSS), but will also be usable by assistive technologies like screen readers (apps that literally read out a web page to their user), and confer other advantages, too.

#### Semantic structure

The most important quick win in semantic HTML is to use a structure of headings and paragraphs for your content. This is because screen reader users tend to use the headings of a document as signposts to find the content they need more quickly. If your content has no headings, all they will get is a huge wall of text with no signposts to find anything. Examples of bad and good HTML:
```
<!-- bad HTML -->
<font size="7">My heading</font>
<br><br>
This is the first section of my document.
<br><br>
I'll add another paragraph here, too.
<br><br>
<font size="5>My subheading</font>
<br><br>
This is the first subsection of my document. I'd love people to be able to find this content!
<br><br>
<font size="5">My 2nd subheading</font>
This is the second subsection of my content. I think it is more interesting than the last one.
```
```
<!-- good HTML -->
<h1>My heading</h1>

<p>This is the first section of my document.</p>

<p>I'll add another paragraph here, too.</p>

<h2>My subheading</h2>

<p>This is the first subsection of my document. I'd love people to be able to find this content!</p>

<h2>My 2nd subheading</h2>

<p>This is the second subsection of my content. I think it is more interesting than the last one.</p>
```
In addition, your content should make logical sense in its source order -- you can always place it where you want using CSS later on, but you should get the source order right from the start.