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

This example highlights the importance of using the correct semantic element for the correct job. It is possible to style *any* element to look like a link or button with CSS, and to behave like a link or button with JavaScript, but they won't actually be links or buttons, and you'll lose a lot of the accessibility these elements give you for free. So don't do it if you can avoid it.

Another tip -- as shown in our example, you can control how your focusable elements look when focused, using the [:focus](https://developer.mozilla.org/en-US/docs/Web/CSS/:focus) pseudo-class. It is a good idea to double up focus and hover styles, so your users get that visual clue that a control will do something when activated, whether they are using mouse or keyboard:
```
a:hover, input:hover, button:hover, slect:hover,
a:focus, input:focus, button:focus, select:focus {
    font-weight: bold;
}
```

<hr>

**Note**: If you do decide to remove the default focus styling using CSS, make sure you replace it with something else that fits in with your design better -- it is a very valuable accessibility tool, and should not be removed.

<hr>

#### Building in keyboard accessibility

Sometimes it is not possible to avoid losing keyboard accessibility. You might have inherited a site where the semantics are not very good (perhaps you've ended up with a horrible CMS that generates buttons made with `<div>`s), or you are using a complex control that does not have keyboard accessibility built in, like the HTML5 [`<video>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/video) element. (Amazingly, Opera is the only browser that allows you to tab through the `<video>` element's default browser controls.) You have a few options here:

1. Create custom controls using `<button>` elements (which we can tab to by default) and JavaScript to wire up their functionality. See [Creating a cross-browser video player](https://developer.mozilla.org/en-US/docs/Web/Guide/Audio_and_video_delivery/cross_browser_video_player) for some good examples of this.
2. Create keyboard shortcuts via JavaScript, so functionality is activated when you press certain keys on the keyboard. See [Desktop mouse and keyboard controls](https://developer.mozilla.org/en-US/docs/Games/Techniques/Control_mechanisms/Desktop_with_mouse_and_keyboard) for some game-related examples that can be adapted for any purpose.
3. Use some interesting tactics to fake button behavior. Take, for example, our [fake-div-buttons.html](https://mdn.github.io/learning-area/tools-testing/cross-browser-testing/accessibility/fake-div-buttons.html) example (see the [source code](https://github.com/mdn/learning-area/blob/master/tools-testing/cross-browser-testing/accessibility/fake-div-buttons.html)). Here we've given our fake `<div>` buttons the ability to be focused (including via tab) by giving each one the attribute `tabindex="0"` (see WebAIM's [tabindex article](https://webaim.org/techniques/keyboard/tabindex) for more rellay useful details). This allows us to tab to the buttons, but not to activate them via the Enter/Return key. To do that, we had to add the following bit of JavaScript trickery:
```
document.onkeydown = function(e) {
    if(e.keyCode === 13) {   // The Enter/Return key
        document.activeElement.onclick(e);
    }
};
```
Here we add a listener to the `document` object to detect when a button has been pressed on the keyboard. We check what button was pressed via the event object's [`keyCode`](https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/keyCode) property. If it is the keycode that matches Enter/Return, we run the function stored in the button's `onclick` handler using `document.activeElement.onclick()`. [`activeElement`](https://developer.mozilla.org/en-US/docs/Web/API/Document/activeElement) gives us the element that is currently focused on the page.

<hr>

**Note**: This technique will only work if you set your original event handlers via event handler properties (e.g. `onclick`). `addEventListener` won't work. This is a lot of extra hassle to build the functionality back in. And there's bound to be other problems with it. Better to just use the right element for the right job in the first place.

<hr>

#### Text alternatives

Text alternatives are very important for accessibility -- if a person has a visual or hearing impairment that stops them being able to see or hear some content, then this is a problem. The simplest text alternative available is the humber `alt` attribute, which we should include on all images that contain relevant content. This should contain a description of the image that successfully conveys its meaning and content on the page, to be picked up by a screenreader and read out to the user.

<hr>

**Note**: For more information, read [Text alternatives](https://developer.mozilla.org/en-US/docs/Learn/Accessibility/HTML#text_alternatives).

<hr>

Missing alt text can be tested in a number of ways -- for example, using accessibility [Auditing tools](https://github.com/AndrewSRea/My_Learning_Port/tree/main/JavaScript/Tools_and_Testing/Cross_Browser_Testing/Handling_Accessibility_Problems#auditing-tools).

Alt text is slightly more complex for video and audio content. There is a way to define text tracks (e.g. subtitles) and display them when video is being played, in the form of the [`<track>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/track) element, and the [WebVTT](https://developer.mozilla.org/en-US/docs/Web/API/WebVTT_API) format. (See [Adding captions and subtitles to HTML5 video](https://developer.mozilla.org/en-US/docs/Web/Guide/Audio_and_video_delivery/Adding_captions_and_subtitles_to_HTML5_video) for a detailed tutorial.) [Browser compatibility](https://developer.mozilla.org/en-US/docs/Web/Guide/Audio_and_video_delivery/Adding_captions_and_subtitles_to_HTML5_video#browser_compatibility) for these features is fairly good, but if you want to provide text alternatives for audio or support older browsers, a simple text transcript presented somewhere on the page or on a separate page might be a good idea.

#### Element relationships and context

There are certain features and best practices in HTML designed to provide context and relationships between elements where none otherwise exists. The three most common examples are links, form labels, and data tables.

The key to accessible link text is that people using screen readers will often use a common feature whereby they pull up a list of all the links on the page. In this case, the link text needs to make sense out of context. For example, a list of links labeled "click here", "click me", etc., is really bad for accessibility. It is better for link text to make sense in context and out of context.

Next on our list, the form [`<label>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/label) element is one of the central features that allows us to make forms accessible. The trouble with forms is that you need labels to say what data should be entered into each form input. Each label needs to be included inside a [`<label>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/label) to link it unambiguously to its partner form input (each `<label>` `for` attribute value needs to match the form element `id` value), and it will make sense even if the source order is not completely logical.

<hr>

**Note**: For more information about link text and form labels, read [Meaningful text labels](https://developer.mozilla.org/en-US/docs/Learn/Accessibility/HTML#meaningful_text_labels).

<hr>

Finally, a quick word about data tables. A basic data table can be written with very simple markup (see [bad-table.html](https://mdn.github.io/learning-area/accessibility/html/bad-table.html), live, and see the [source code](https://github.com/mdn/learning-area/blob/master/accessibility/html/bad-table.html)), but this has problems -- there is no way for a screen reader user to associate rows and columns together as groupings of data. To do this, you need to know what the header rows are, and if they are heading up rows, columns, etc. This can only be done visually for such a table.

If you instead look at our [punk-bands-complete.html](https://mdn.github.io/learning-area/css/styling-boxes/styling-tables/punk-bands-complete.html) example (and see the [source code](https://github.com/mdn/learning-area/blob/master/css/styling-boxes/styling-tables/punk-bands-complete.html)), you can see a few accessibility aids at work here, such as table headers ([`<th>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/th) and `scope` attributes), a [`<caption>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/caption) element, etc.

<hr>

**Note**: For more information about accessible tables, read [Accessible data tables](https://developer.mozilla.org/en-US/docs/Learn/Accessibility/HTML#accessible_data_tables).

<hr>

### CSS

CSS tends to provide a lot fewer fundamental accessibility features than HTML, but it can still do just as much damage to accessibility if used incorrectly. We have already mentioned a couple of accessibility tips involving CSS:

* Use the correct semantic elements to mark up different content in HTML. If you want to create a different visual effect, use CSS. Don't abuse an HTML element to get the look you want. For example, if you want bigger text, use [`font-size`](https://developer.mozilla.org/en-US/docs/Web/CSS/font-size), not an [`<h1>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/Heading_Elements) element.
* Make sure your source order makes sense without CSS. You can always use CSS to style the page any way you want afterward.
* You should make sure interactive elements like buttons and links have appropriate focus/hover/active states set, to give the user visual clues as to their function. If you remove the defaults for stylistic reasons, make sure you include some replacement styles.

There are a few other considerations you should take into account.

#### Color and color contrast

When choosing a color scheme for your website, you should make sure that the text (foreground) color contrasts well with the background color. Your design might look cool, but it is no good if people with visual impairments like color blindness can't read your content. Use a tool like WebAIM's [Color Contrast Checker](https://webaim.org/resources/contrastchecker/) to check whether your scheme is contrasting enough.

Another tip is to not rely on color alone for signposts/information, as this won't be good for those who can't see the color. Instead of marking required form fields in red, for example, mark them with an asterisk and in red.

<hr>

**Note**: A high contrast ratio will also allow anyone using a smartphone or tablet with a glossy screen to better read pages when in a bright environment, such as sunlight.

<hr>

#### Hiding content

There are many instances where a visual design will require that not all content is shown at once. For example, in our [Tabbed info box example](https://mdn.github.io/learning-area/css/css-layout/practical-positioning-examples/info-box.html) (see the [source code](https://github.com/mdn/learning-area/blob/master/css/css-layout/practical-positioning-examples/info-box.html)), we have three panels of information, but we are [positioning](https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Positioning) them on top of one another and providing tabs that can be clicked to show each one. (It is also keyboard accessible -- you can alternatively use <kbd>Tab</kbd> and <kbd>Enter</kbd>/<kbd>Return</kbd> to select them.)

Screen reader users don't care about any of this -- they are happy with the content as long as the source order makes sense, and they can get to it all. Absolute positioning (as used in this example) is generally seen as one of the best mechanisms of hiding content for visual effect, because it doesn't stop screen readers from getting to it.

On the other hand, you shouldn't use [`visibility`](https://developer.mozilla.org/en-US/docs/Web/CSS/visibility)`:hidden` or [`display`](https://developer.mozilla.org/en-US/docs/Web/CSS/display)`:none` because they do hide content from screenreaders. Unless, of course, there is a good reason why you want this content to be hidden from screenreaders.

<hr>

**Note**: [Invisible Content Just for Screen Reader Users](https://webaim.org/techniques/css/invisiblecontent/) has a lot more useful detail surrounding this topic.

<hr>

### JavaScript

JavaScript has the same kind of problems as CSS with respect to accessibility -- it can be disastrous for accessibility if used badly, or overused. We've already hinted at some accessibility problems related to JavaScript, mainly in the area of semantic HTML -- you should always use appropriate semantic HTML to implement functionality wherever it is available -- for example, use links and buttons as appropriate. Don't use `<div>` elements with JavaScript code to fake functionality if at all possible -- it is error prone, and more work than using the free functionality HTML gives you.

#### Simple functionality

Generally simple functionality should work with just the HTML in place -- JavaScript should only be used to enhance functionality, not build it in entirely. Good uses of JavaScript include:

* Providing client-side form validation, which alerts users to problems with their form entries quickly, without having to wait for the server to check the data. If it isn't available, the form will still work, but validation might be slower.
* Providing custom controls for HTML5 `<video>`s that are accessible to keyboard-only users. (As we said earlier, the default browser controls aren't keyboard-accessible in most browsers.)

<hr>

**Note**: WebAIM's [Accessible JavaScript](https://webaim.org/techniques/javascript/) provides some useful further details about considerations for accessible JavaScript.

<hr>

More complex JavaScript implementations can create issues with accessibility -- you need to do what you can. For example, it would be unreasonable to expect you to make a complex 3D game written using [WebGL](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API) 100% accessible to a blind person, but you could implement [keyboard controls](https://developer.mozilla.org/en-US/docs/Games/Techniques/Control_mechanisms/Desktop_with_mouse_and_keyboard) so it is usable by non-mouse users, and make the color scheme contrasting enough to be usable by those with color deficiencies.

#### Complex functionality

One of the main areas problematic for accessibility is complex apps that involve complicated form controls (such as date pickers) and dynamic content that is updated often and incrementally.

Non-native complicated form controls are problematic because the tend to involve a lot of nested `<div>`s, and the browser does not know what to do with them by default. If you are inventing them yourself, you need to make sure that they are keyboard accessible. If you are using some kind of third-party framework, carefully review the options available to see how accessible they are before diving in. [Bootstrap](https://github.com/AndrewSRea/My_Learning_Port/tree/main/Bootstrap#bootstrap) looks to be fairly good for accessibility -- although [Making Bootstrap a Little More Accessible](https://www.sitepoint.com/making-bootstrap-accessible/) by Rhiana Heath explores some of its issues (mainly related to color contrast), and looks at some solutions.

Regularly updated dynamic content can be a problem because screenreader users might miss it, especially if it updates unexpectedly. If you have a single-page app with a main content panel that is regularly updated using [XMLHttpRequest](https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest) or [Fetch](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API), a screenreader user might miss those updates.

#### WAI-ARIA

Do you need to use such complex functionality, or will plain old semantic HTML do instead? If you do need complexity, you should consider using [WAI-ARIA](https://www.w3.org/TR/wai-aria-1.1/) (Accessible Rich Internet Applications), a specification that provides semantics (in the form of new HTML attributes) for items such as complex form controls and updating panels that can be understood by most browsers and screen readers.

To deal with complex form widgets, you need to use ARIA attributes like `roles` to state what role different elements have in a widget (for example, are they a tab, or a tab panel?), `aria-disabled` to say whether a control is disabled or not, etc.

To deal with regularly updating regions of content, you can use the `aria-live` attribute, which identifies an updating region. Its value indicates how urgently the screen reader should read it out:

* `off`: The default. Updates should not be announced.
* `polite`: Updates should be announced only if the user is idle.
* `assertive`: Updates should be announced to the user as soon as possible.
* `rude`: Updates should be announced straight away, even if this interrupts the user.


Here's an example:
```
<p><span if="LiveRegion1" aria-live="polite" aria-atomic="false"></span></p>
```
You can see an example in action at Freedom Scientific's [ARIA (Accessible Rich Internet Applications) Live Regions](https://www.freedomscientific.com/SurfsUp/AriaLiveRegions.htm) example. The highlighted paragraph should update its content every 10 seconds, and a screenreader should read this out to the user. [ARIA Live Regions - Atomic](https://www.freedomscientific.com/SurfsUp/AriaLiveRegionsAtomic.htm) provides another useful example.

We don't have space to cover WAI-ARIA in detail here. You can learn a lot more about it at [WAI-ARIA basics](https://developer.mozilla.org/en-US/docs/Learn/Accessibility/WAI-ARIA_basics).

## Accessibility tools

Now we've covered accessibility considerations for different web technologies, including a few testing techniques (like keyboard navigation and color contrast checkers), let's have a look at other tools you can make use of when doing accessibility testing.

### Auditing tools

There are a number of auditing tools available that you can feed your web pages into. They will look over them and return a list of accessiblity issues present on the page. Examples include:

* [Wave](https://wave.webaim.org/): A rather nice online accessibility testing tool that accepts a web address and returns a useful annotated view of that page with accessibility problems highlighted.
* [Tenon](https://tenon.io/): Another nice online tool that goes through the code at a provided URL and returns results on accessibility errors including metrics, specific errors along with the WCAG criteria they affect, and suggested fixes. It requires a free trial signup to view the results.
* [tota11y](https://khan.github.io/tota11y/): An accessibility tool from the Khan Academy that takes the form of a JavaScript library that you attach to your page to provide a number of accessibility tools.

Let's look at an example, using Wave.

1. Go to the [Wave hompage](https://wave.webaim.org/).
2. Enter the URL of our [bad-semantics.html](https://mdn.github.io/learning-area/accessibility/html/bad-semantics.html) example into the text input box near the top of the page. Then press enter or click/tap the arrow at the far right edge of the input box.
3. The site should respond with a description of the accessibility problems. Click the icons displayed to see more information about each of the issues identified by Wave's evaluation.

<hr>

**Note**: Such tools aren't good enough to solve all your accessibility problems on their own. You'll need a combination of these, knowledge and experience, user testing, etc., to get a full picture.

<hr>

### Automation tools

[Deque's aXe tool](https://www.deque.com/axe/) goes a bit further than the auditing tools we mentioned above. Like the others, it checks pages and returns accessiblity errors. Its most immediately useful form is probably the browser extensions:

* [aXe for Chrome](https://chrome.google.com/webstore/detail/axe-devtools-web-accessib/lhdoppojpmngadmnindnejefpokejbdd)
* [aXe for Firefox](https://addons.mozilla.org/en-US/firefox/addon/axe-devtools/)

These add an accessibility tab to the browser developer tools. For example, we installed the Firefox version, then used it to audit our [bad-table.html](https://mdn.github.io/learning-area/accessibility/html/bad-table.html) example. We got the following results:

![Image of Firefox devtools using the aXe tool](https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/Cross_browser_testing/Accessibility/axe-screenshot.png)

aXe is also installable using `npm`, and can be integrated with task runners like [Grunt](https://gruntjs.com/) and [Gulp](https://gulpjs.com/), automation frameworks like [Selenium](https://www.selenium.dev/) and [Cucumber](https://cucumber.io/), unit testing frameworks like [Jasmine](https://jasmine.github.io/), and more besides. (Again, see the [main aXe page](https://www.deque.com/axe/) for details.)

### Screenreaders

It is definitely worth testing with a screenreader to get used to how severely visually imparied people use the Web. There are a number of screenreaders available:

* Some are paid-for commercial products, like [JAWS](https://www.freedomscientific.com/Products/software/JAWS/) (Windows) and Window Eyes (Windows). (Window Eyes is now a deprecated product, as of this writing, Oct. 24, 2021.)
* Some are free products, like [NVDA](https://www.nvaccess.org/) (Windows), [ChromeVox](https://support.google.com/chromebook/answer/7031755) (Chrome, Windows, and Mac OS X), and [Orca](https://wiki.gnome.org/Projects/Orca) (Linux).
* Some are built into the operating system, like [VoiceOver](https://www.apple.com/accessibility/vision/) (Mac OS X and iOS), [ChromeVox](https://support.google.com/chromebook/answer/7031755) (on Chromebooks), and [TalkBack](https://play.google.com/store/apps/details?id=com.google.android.marvin.talkback) (Android).

Generally, screen readers are separate apps that run on the host operating system and can read not only web pages, but text in other apps as well. This is not always the case (ChromeVox is a browser extension), but usually. Screenreaders tend to act in slightly different ways and have different controls, so you'll have to consult the documentation for your chosen screen reader to get all of the details. Saying that, they all work in basically the same sort of way.

Let's go through some tests with a couple of different screenreaders to give you a general idea of how they work and how to test with them.

<hr>

**Note**: WebAIM's [Designing for Screen Reader Compatibility](https://webaim.org/techniques/screenreader/) provides some useful information about screenreader usage and what works best for screenreaders. Also, see [Screen Reader User Survey #6 Results](https://webaim.org/projects/screenreadersurvey6/#used) for some interesting screenreader usage statistics.

<hr>

#### VoiceOver

VoiceOver (VO) comes free with your Mac/iPhone/iPad, so it's useful for testing on desktop/mobile if you use Apple products. We'll be testing it on Mac OS X on a MacBook Pro.

To turn it on, press Cmd + F5. If you've not used VO before, you will be given a welcome screen where you can choose to start VO or not, and run through a rather useful tutorial to learn how to use it. To turn it off again, press Cmd + F5 again.

<hr>

**Note**: You should go through the tutorial at least once. It is a really useful way to learn VO.

<hr>

When VO is on, the display will look mostly the same, but you'll see a black box at the bottom left of the screen that contains information on what VO currently has selected. The current selection will also be highlighted, with a black border. This highlight is known as the **VO cursor**.

To use VO, you will make a lot of use of the "VO modifier". This is a key or key combination that you need to press in addition to the actual VO keyboard shortcuts to get them to work. Using a modifier like this is common with screenreaders, to enable them to keep their comments from clashing with other commands. In the case of VO, the modifier can either be Caps Lock, or Ctrl + Option.

VO has many keyboard commands, and we won't list them all here. The basic ones you'll need for web page testiong are in the following table. In the keyboard shortcuts, "VO" means "the VoiceOver modifier".

#### Most common VoiceOver keyboard shortcuts

| Keyboard shortcut | Description |
| --- | --- |
| VO + Cursor keys | Move the VO cursor up, right, down, left. |
| VO + Spacebar | Select/activate items highlighted by the VO cursor. This includes items selected in the Rotor (see below). |
| VO + Shift + down cursor | | Move into a group of items (such as an HTML table, or a form, etc.) Once inside a group, you can move around and select items inside that group using the above commands as normal. |
| VO + Shift + up cursor | Move out of a group. |
| VO + C | (When inside a table), read the header of the current column. |
| VO + R | (Wehn inside a table), read the header of the current row. |
| VO + C + C (two Cs in succession) | (When inside a table), read the entire current column, including header. |
| VO + R + R (two Rs in succession) | (When inside a table), read the entire current row, including the headers that correspond to each cell. |
| VO + left cursor, VO + right cursor | (When inside some horizontal options, such as a date or time picker), move between options. |
| VO + up cursor, VO + down cursor | (When inside some horizontal options, such as a date or time picker), change the current option. |
| VO + U | Use the Rotor, which displays lists of headings, link, form controls, etc., for easy navigation. |
| VO + left cursor, VO + right cursor | (When inside Rotor), move between different lists available in the Rotor. |
| VO + up cursor, VO + down cursor | (When inside Rotor), move between different items in the current Rotor list. |
| Esc | (When inside Rotor), exit Rotor. |
| Ctrl | (When VO is speaking), pause/resume speech. |
| VO + Z | Restart the last bit of speech. |
| VO + D | Go into the Mac's Dock, so you can select apps to run inside it. |

This seems like a lot of commands, but it isn't so bad when you get used to it, and VO regularly gives you reminders of what commands to use in certain places. Have a play with VO now. You can then go on to play with some of our examples in the [Screenreader testing]() section. <!-- below -->

#### NVDA

NVDA is Windows-only, and you'll need to install it.

1. Download it from [nvaccess.org](). You can choose whether to make a donation or download it for free. You'll also need to give them your email address before you can download it.
2. Once downloaded, install it. You double-click the installer, accept the license and follow the prompts.
3. To start NVDA, double-click on the program file/shortcut, or use the keyboard shortcut Ctrl + Alt + N. You'll see the NVDA welcome dialog when you start it. Here you can choose from a couple of options, then press the *OK* button to get going.

NVDA will now be active on your computer.

To use NVDA, you will make a lot of use of the "NVDA modifier". This is a key that you need to press in addition to the actual NVDA keyboard shortcuts to get them to work. Using a modifier like this is common with screenreaders, to enable them to keep their commands from clashing with other commands. In the case of NVDA, the modifier can either be Insert (the default), or Caps Lock (which can be chosen by checking the first checkbox in the NVDA welcome dialog before pressing *OK*).

<hr>

**Note**: NVDA is more subtle than VoiceOver in terms of how it highlights where it is and what it is doing. When you are scrolling through headings, lists, etc., items you are selected on will generally be highlighted with a subtle outline, but this is not always the case for all things. If you get completely lost, you can press Ctrl + F5 to refresh the current page and begin from the top again.

<hr>

NVDA has many keyboard commands, and we won't list them all here. The basic ones you'll need for web page testing are in the following table. In the keyboard shortcuts, "NVDA" means "the NVDA modifier".

#### Most common NVDA keyboard shortcuts

| Keyboard shortcut | Description |
| --- | --- |
| NVDA + Q | Turn NVDA off again after you've started it. |
| NVDA + up cursor | Read the current line. |
| NVDA + down cursor | Start reading at the current position. |
| Up cursor and down cursor, or Shift + Tab and Tab | Move to previous/next item on page and read it. |
| Left cursor and right cursor | Move to previous/next character in current item and read it. |
| Shift + H and H | Move to previous/next heading and read it. |
| Shift + K and K | Move to previous/next link and read it. |
| Shift + D and D | Move to previous/next document landmark ( e.g. `<nav>`) and read it. |
| Shift + 1-6 and 1-6 | Move to previous/next heading (level 1-6) and read it. |
| Shift + F and F | Move to previous/next form input and focus on it. |
| Shift + T and T | Move to previous/next data table and focus on it. |
| Shift + B and B | Move to previous/next button and read its label. |
| Shift + L and L | Move to previous/next list and read its first list item. |
| Shift + I and I | Move to previous/next list item and read it. |
| Enter/Return | (When link/button or other activatable item is selected), activate item. |
| NVDA + Space | (When form is selected), enter form so individual items can be selected, or leave form if you are already in it. |
| Shift Tab and Tab | (When inside form), move between form inputs. |
| Up cursor and down cursor | (When inside form), change form input values (in the case of things like select boxes). |
| Spacebar | (When inside form), select chosen value. |
| Ctrl + Alt + cursor keys | (When a table is selected), move between table cells. |