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

