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