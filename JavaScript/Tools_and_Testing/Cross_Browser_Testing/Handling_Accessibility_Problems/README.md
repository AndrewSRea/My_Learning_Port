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

As a test, you can turn off a site's CSS and see how unreadable it is without it. You could do this manually by just removing the CSS from your code, but the easiest way is to use browser features. For example:

* Firefox: Select *View > Page Style > No Style* from the main menu.
* Safari: Select *Develop > Disable Styles* from the main menu (to enable the *Develop* menu, choose *Safari > Preferences > Advanced > Show Develop menu in menu bar*).
* Chrome: Install the Web Developer Toolbar extension, then restart the browser. Click the gear icon that will appear, then select *CSS > Disable All Styles*.
* Edge: Select *View > Style > No Style* from the main menu.

<hr>

**Personal note**: I am using a Chrome browser so I can only give advice in this regard. In your Chrome browser, go to the [Chrome Web Store](https://chrome.google.com/webstore/category/extensions?hl=en-US), and type "web developer tools" in the Search input field. Click the Web Developer choice showing a gear icon. On the Web Developer page, click the "Add to Chrome" button, and the extension will download onto your Chrome browser toolbar. (You may have to click the "Extensions" icon (the puzzle piece icon) in the top right-hand corner of your browser to access it. You can also click the pushpin icon next to "Web Developer" to set it in your browser toolbar.)

#### Using native keyboard accessibility

Certain HTML features can be selected using only the keyboard -- this is default behavior, available since the early days of the web. The elements that have this capability are the common ones that allow the user to interact with web pages, namely links, [`<button>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button)s, and form elements like [`<input>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input).

You can try this out using our [native-keyboard-accessibility.html](https://mdn.github.io/learning-area/tools-testing/cross-browser-testing/accessibility/native-keyboard-accessibility.html) example (see the [source code](https://github.com/mdn/learning-area/blob/master/tools-testing/cross-browser-testing/accessibility/native-keyboard-accessibility.html)) -- open this in a new tab, and try pressing the tab key. After a few presses, you should see the tab focus start to move through the different focusable elements. The focused elements are given a highlighted default style in every browser (which will differ slightly between different browsers) so that you can tell which element is focused.

<hr>

**Note**: In Firefox, you can also enable an overlay that shows the page tabbing order. For more information, see [Accessibility Inspector > Show web page tabbing order](https://developer.mozilla.org/en-US/docs/Tools/Accessibility_inspector#show_web_page_tabbing_order).

<hr>

You can then press Enter/Return to follow a focused link or press a button (we've included some JavaScript to make the buttons alert a message), or start typing to enter text in a text input. (Other form elements have different controls. For example, the [`<select>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/select) element can have its options displayed and cycled between using the up and down arrow keys.)

Note that different browsers may have different keyboard control options available. Most modern browsers follow the tab pattern described above. (You can also do <kbd>Shift</kbd> + <kbd>Tab</kbd> to move backwards through the focusable elements.) But some browsers have their own idiosyncrasies:

* Firefox for the Mac doesn't do tabbing by default. To turn it on, you have to go to *Preferences > Advanced > General*, then uncheck "Always use the cursor keys to navigate within pages". Next, you have to open your Mac's System Preferences app, then go to *Keyboard > Shortcuts*, then select the *All Controls* radio button.
* Safari doesn't allow you to tab through links by default. To enable this, you need to open Safari's *Preferences*, go to *Advanced*, and check the *Press Tab to highlight each item on a webpage* checkbox.

<hr>

:warning: **Warning**: You should perform this kind of text/review on any new page you write -- make sure that functionality can be accessed by the keyboard, and that the tab order provides a sensible navigation path thorugh the document.

<hr>