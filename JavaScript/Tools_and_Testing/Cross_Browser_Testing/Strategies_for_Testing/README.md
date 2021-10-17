# Strategies for carrying out testing

In this article, we drill down into carrying out testing, looking at identifying a target audience (e.g. what browsers, devices, and other segments should you make sure are tested), lo-fi testing strategies (get yourself a range of devices and some virtual machines and do ad-hoc test when needed), higher tech strategies (automation, using dedicated testing apps), and testing with user groups.

## Gotta test 'em all

When doing cross-browser testing, you need to work out a list of browsers you will need to test on to start with. There is no way you can test on every combination of browser and device your users might use to view your site -- there are just too many, and new ones appear all the time.

Instead, you should try to make sure your site works on the most important target browsers and devices, and then code defensively to give your site the widest support reach it can be expected to have.

By coding defensively, we mean trying to build in intelligent fallbacks so that if a feature or style doesn't work in a browser, the site will be able to downgrade to something less exciting that still provides an acceptable user experience -- the core information is still accessible, for example, even if it doesn't look quite as nice.

The aim is to build up a chart of browsers/devices you can refer to as you test. You can make this as simple or as complex as you like -- for example, a common approach is to have multiple grades of support level, something like:

1. A grade: Common/modern browsers -- known to be capable. Test thoroughly and provide full support.
2. B grade: Older/less capable browsers -- known not to be capable. Test, and provide a more basic experience that gives full access to core information and services.
3. C grade: Rare/unknown browsers -- don't test, but assume they are capable. Serve the full site, which should work, at least with the fallbacks provided by our defensive coding.

Throughout the following sections, we'll build up a support chart in this format.

<hr>

**Note**: Yahoo first made this approach popular, with their [Graded Browser Support](https://github.com/yui/yui3/wiki/Graded-Browser-Support) approach.

<hr>

### Educated guesses

Yo0u could call these "assumptions", or "gut feelings". This is not an accurate, scientific approach, but as someone who has experience with the web industry, you'll have a pretty good idea of, at least, some of the browsers you should test. This can form a good basis for a support chart.

For example, if you live in Western Europe or North America, you will know that a lot of people use Windows and Mac desktops/laptops, where the main browsers are Chrome, Firefox, Safari, IE, and Edge. You probably want to just test the latest versions of the first three, as these browsers receive regular updates. For Edge and IE, you probably want to test the last couple of versions; these should all go in the A grade tier.

<hr>

**Note**: You can only have one version of IE or Edge installed on a machine at once, so you will probably have to use virtual machine, or other strategy to do the testing you need. See [Virtual machines]() later on. <!-- below -->

<hr>

Lots of people use iOS and Android, so you probably also want to test the latest versions of iOS Safari, the last couple of versions of the old Android stock browser, and Chrome and Firefox for iOS and Android. You should ideally test these on both a phone and a tablet, to make sure that responsive designs are working OK.

You might also know that a number of people still use IE 9. This is old and less capable, so let's put it in the B grade tier.

This gives us the following support chart so far:

1. A grade: Chrome and Firefox for Windows/Mac, Safari for Mac, Edge and IE for Windows (last two versions of each), iOS Safari for iPhone/iPad, Android stock browser (last two versions) on phone/tablet, Chrome and Firefox for Android (last two versions) on phone tablet.
2. B grade: IE 9 for Windows.
3. C grade: N/A.

If you live somewhere else, or are working on a site that will serve somewhere else (e.g. certain countries, or locales), then you will probably have different common browsers to test.

<hr>

**Note**: "The CEO of my company uses a Blackberry, so we'd better make sure it looks good on that" can also be a persuasive argument.

<hr>

### Browser support stats

