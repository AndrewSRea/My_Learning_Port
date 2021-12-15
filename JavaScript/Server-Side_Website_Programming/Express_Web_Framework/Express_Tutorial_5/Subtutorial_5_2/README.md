# Template primer

A template is a text file defining the *structure* or layout of an output file, with placeholders used to represent where data will be inserted when the template is rendered. (In *Express*, templates are referred to as *views*.)

## Express template choices

Express can be used with many different [template rendering engines](https://expressjs.com/en/guide/using-template-engines.html). In this tutorial, we use [Pug](https://pugjs.org/api/getting-started.html) (formerly known as *Jade*) for our templates. This is the most popular Node template language, and describes itself as a "clean, whitespace-sensitive syntax for writing HTML, heavily influenced by [Haml](https://haml.info/)".

Different template languages use different approaches for defining layout and marking placeholders for data -- some use HTML to define the layout while others use different markup formats that can be transpiled to HTML. Pug is of the second type: it uses a *representation* of HTML where the first word in any line usually represents an HTML element, and indentation on subsequent lines is used to represent nesting. The result is a page definition that translates directly to HTML, but is more concise and arguably easier to read.

<hr>

**Note**: The downside of using *Pug* is that it is sensitive to indentation and whitespace. (If you add an extra space in the wrong place, you may get an unhelpful error code.) Once you have your templates in place, however, they are very easy to read and maintain.

<hr>

## Template configuration

The *LocalLibrary* was configured to use [Pug](https://pugjs.org/api/getting-started.html) when we [created the skeleton website](https://github.com/AndrewSRea/My_Learning_Port/tree/main/JavaScript/Server-Side_Website_Programming/Express_Web_Framework/Express_Tutorial_2#express-tutorial-part-2-creating-a-skeleton-website). You should see the pug module included as a dependency in the website's **package.json** file, and the following configuration settings in the **app.js** file. The settings tell us that we're using pug as the view engine, and that *Express* should search for templates in the **/views** subdirectory.
```
// View engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');
```
If you look in the views directory, you will see the `.pug` files for the project's default views. These include the view for the home page (**index.pug**) and base template (**layout.pug**) that we will need to replace with ourown content.
```
/express-locallibrary-tutorial   // the project root
    /views
        error.pug
        index.pug
        layout.pug
```

## Template syntax

The example template file below shows off many of Pug's most useful features.

The first thing to notice is that the file maps the structure of a typical HTML file, with the first word in (almost) every line being an HTML element, and indentation being used to indicate nested elements. So, for example, the `body` element is inside an `html` element, and paragraph elements (`p`) are within the `body` element, etc. Non-nested elements (e.g. individual paragraphs) are on separate lines.
```
doctype html
html(lang="en")
    head
        title= title
        script(type='text/javascript').
    body
        h1= title

        p This is a line with #[em some emphasis] and #[strong strong text] markup.
        p This line has un-escaped data: !{'<em> is emphasis</em>'} and escaped data: #{'<em> is not emphasized</em>'}.
            | This line follows on.
        p= 'Evaluated and <em>escaped expression</em>:' + title

        <!-- You can add HTML comments directly -->
        // You can add single line JavaScript comments and they are generated to HTML comments
        //- Introducting a single line JavaScript link comment with "//-" ensures the comment isn't rendered to HTML

        p A line with a link
            a(href='/catalog/authors') Some link text
            | and some extra text.

        #container.col
            if title
                p A variable named "title" exists.
            else
                p A variable named "title" does not exist.
            p.
                Pug is a terse and simple template language with a 
                strong focus on performance and powerful features.

        h2 Generate a list

        ul
            each val in [1, 2, 3, 4, 5]
                li= val
```
Element attributes are defined in parentheses after their associated element. Inside the parentheses, the attributes are defined in comma- or whitespace-separated lists of the pairs of attribute names and attribute values. For example:

* `script(type='text/javascript'), link(rel='stylesheet', href='/stylesheets/style.css')`
* `meta(name='viewport' content='width=device-width initial-scale=1')`

The values of all attributes are *escaped* (e.g. characters like "`>`" are converted to their HTML code equivalents like "`&gt;`") to prevent JavaScript injection or cross-site scripting attacks.

If a tag is followed by the equals sign, the following text is treated as a JavaScript *expression*. So, for example, in the first line below, the content of the `h1` tag will be *variable* `title` (either defined in the file or passed into the template from Express). In the second line, the paragraph content is a text string concatenated with the `title` variable. In both cases, the default behavior is to *escape* the line.
```
h1= title
p= 'Evaluated and <em>escaped expression</em>:' + title
```
If there is no equals symbol after the tag, then the content is treated as plain text. Within the plain text, you can insert escaped and unescaped data using the `#{}` and `!{}` syntax respectively, as shown below. You can also add raw HTML within the plain text.