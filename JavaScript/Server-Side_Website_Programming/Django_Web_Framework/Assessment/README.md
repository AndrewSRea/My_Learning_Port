# Assessment: DIY Django mini blog

In this assessment, you'll use the Django knowledge you've picked up in the [Django Web Framework (Python)](https://github.com/AndrewSRea/My_Learning_Port/tree/main/JavaScript/Server-Side_Website_Programming/Django_Web_Framework#django-web-framework-python) module to create a very basic blog.

## Project brief

The pages that need to be displayed, their URLs, and other requirements, are listed below:

| Page | URL | Requirements |
| --- | --- | --- |
| Home page | `/` and `/blog/` | An index page describing the site. |
| List of all blog posts | `/blog/blogs/` | List of all blog posts:<ul><li>Accessible to all users from a sidebar link.</li><li>List sorted by post date (newest to oldest).</li><li>List paginated in groups of 5 articles.</li><li>List items display the blog title, post date, and author.</li><li>Blog post names are linked to blog detail pages.</li><li>Blogger (author names) are linked to blog author detail pages.</li></ul> |
| Blog author (blogger) detail page | `/blog/blogger/<author-id>` | Information for a specified author (by id) and list of their blog posts:<ul><li>Accessible to all users from author links in blog posts, etc.</li><li>Contains some biographical information about the blogger/author.</li><li>List sorted by post date (newest to oldest).</li><li>Not paginated.</li><li>List items display just the blog post name and post date.</li><li>Blog post names are linked to blog detail pages.</li></ul> |
| Blog post detail page | `/blog /<blog-id>` | Blog post details.<ul><li>Accessible to all users from blog post lists.</li><li>Page contains the blog post: name, author, post date, and content.</li><li>Comments for the blog post should be displayed at bottom.</li><li>Comments should be sorted in order: oldest to most recent.</li><li>Contains link to add comments at end for logged in users. (See Comment form page.)</li><li>Blog posts and comments need only display plain text. There is no need to support any sort of HTML markup (e.g. links, images, bold/italic, etc.)</li></ul> |
| List of all bloggers | `/blog/bloggers/` | List of bloggers on system:<ul><li>Accessible to all users from site sidebar</li><li>Blogger names are linked to Blog author detail pages.</li></ul> |
| Comment form page | `/blog/<blog-id>/create` | Create comment for blog post:<ul><li>Accessible to logged-in users (only) from link at bottom of blog post detail pages.</li><li>Displays form with description for entering comments (post date and blog is not editable).</li><li>After a comment has been posted, the page will redirect back to the associated blog post page.</li><li>Users cannot edit or delete their posts.</li><li>Logged out users will be directed to the login page to log in, before they can add comments. After logging in, they will be redirected back to the blog page they wanted to comment on.</li><li>Comment pages should include the name/link to the blogpost being commented on.</li></ul> |
| User authentication pages | `/accounts/<standard urls>` | Standard Django authentication pages for logging in, out, and setting the password:<ul><li>Login/out should be accessible via sidebar links. |
| Admin site | `/admin/<standard urls>` | Admin site should be enabled to allow create/edit/delete of blog posts, blog authors, and blog comments (this is the mechanism for bloggers to create new blog posts):<ul><li>Admin site blog posts records should display the list of associated comments inline (below each blog post).</li><li>Comment names in the Admin site are created by truncating the comment description to 75 characters.</li><li>Other types of records can use basic registration.</li></ul> |

In addition, you should write some basic tests to verify:

* All model fields have the correct label and length.
* All models have the expected object name (e.g. `__str__()` returns the expected value).
* Models have the expected URL for individual Blog and Comment records (e.g. `get_absolute_url()` returns the expected URL).
* The BlogListView (all-blog page) is accessible at the expected location (e.g. `/blog/blogs`).
* The BlogListView (all-blog page) is accessible at the expected named URL (e.g. `blogs`).
* The BlogListView (all-blog page) uses the expected template (e.g. the default).
* The BlogListView paginates records by 5 ( at least on the first page).

<hr>

**Note**: There are, of course, many other tests you can run. Use your discretion, but we'll expect you to do, at least, the tests above.

<hr>

The following section shows screenshots of a site that implements the requirements above.