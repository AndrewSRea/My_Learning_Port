# Introduction to cross browser testing

This article starts the module off by providing an overview of the topic of (cross) browser testing, answering questions such as "What is cross browser testing?", "What are the most common types of problems you'll encounter?", and "What are the main approaches for testing, identifying, and fixing problems?"

## What is cross browser testing?

Cross browser testing is the practice of making sure that the websites and web apps you create work across an acceptable number of web browsers. AS a web developer, it is your responsibility to make sure that not only do your projects work, but they work for all your users, no matter what browser, device, or additional assistive tools they are using. You need to think about:

* Different browsers other than the one or two that you use regularly on your devices, including slightly older browsers that some people might still be using, which don't support all the latest, shiniest CSS and JavaScript features.
* Different devices with different capabilities, from the latest greatest tablets and smartphones, through smart TVs, right down to cheap tablets and even older feature phones that may run browsers with limited capabilities.
* People with disabilities, who use the Web with the aid of assistive technologies like screenreaders, or don't use a mouse (some people use only the keyboard).

Remember that you are not your users -- just because your site works on your MacBook Pro or high-end Galaxy Nexus, doesn't mean it will work for all your users -- there's a whole lot of testing to be done!

<hr>

**Note**: [Make the web work for everyone](https://hacks.mozilla.org/2016/07/make-the-web-work-for-everyone/) provides more useful perspective on the different browsers people use, their market share, and related cross browser compatibility issues.

<hr>

We should explain a few bits of terminology here. To start with, when we talk about sites "working cross browser", we are really saying that they should provide an acceptable user experience across different browsers. It is potentially OK for a site to not deliver the exact same experience on all browsers, as long as the core functionality is accessible in some way. On modern browsers, you might get something animated, 3D and shiny, whereas on older browsers you might just get a flat graphic representing the same information. As long as the site owner is happy with this, then you have done your job.

On the other hand, it is not OK for a site to work fine for sighted users but be completely inaccessible for visually impaired users because their screen reader application can't read any of the information stored on it.

Second, when we say "across an acceptable number of web browsers", we don't mean 100% of the browsers in the world -- this is just about impossible. You can't make some informed calls as to what browsers and devices your users will be using (as we'll discuss in the second article in the series -- see [Gotta test 'em all?](https://github.com/AndrewSRea/My_Learning_Port/tree/main/JavaScript/Tools_and_Testing/Cross_Browser_Testing/Strategies_for_Testing#gotta-test-em-all)), but you can't guarantee everything. As a web developer, you need to agree on a range of browsers and devices that the code definitely needs to work on with the site owner, but beyond that, you need to code defensively to give other browsers the best chance possible of being able to use your content. This is one of the great challenges of web development.

<hr>

**Note**: We'll cover defensive coding later in the module, too.

<hr>