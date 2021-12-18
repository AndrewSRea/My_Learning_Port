# BookInstance detail page and challenge

## BookInstance detail page

The `BookInstance` detail page needs to display the information for each `BookInstance`, identified using its (automatically generated) `_id` field value. This will include the `Book` name (as a link to the *Book detail page*) along with other information in the record.

### Controller

Open **/controllers/bookinstanceController.js**. Find the exported `bookinstance_detail()` controller method and replace it with the following code.
```
// Display detail page for a specific BookInstance
exports.bookinstance_detail = function(req, res, next) {
    
    BookInstance.findById(req.params.id)
    .populate('book')
    .exec(function(err, bookinstance) {
        if (err) { return next(err); }
        if (bookinstance==null) {   // No results
            var err = new Error('Book copy not found');
            err.status = 404;
            return next(err);
        }
        // Successful, so render
        res.render('bookinstance_detail', { title: 'Copy: ' + bookinstance.book.title, bookinstance: bookinstance});
    });
    
};
```
The method calls `BookInstance.findById()` with the ID of a specific book instance extracted from the URL (using the route), and accessed within the controller via the request parameters: `req.params.id`. It then calls `populate()` to get the details of the associated `Book`.

### View

Create **/views/bookinstance_detail.pug** and copy in the content below.
```
extends layout 

block content 

  h1 ID: #{bookinstance._id} 

  p #[strong Title:] 
    a(href=bookinstance.book.url) #{bookinstance.book.title} 
  p #[strong Imprint:] #{bookinstance.imprint} 

  p #[strong Status:] 
    if bookinstance.status=='Availble'
      span.text-success #{bookinstance.status} 
    else if bookinstance.status=='Maintenance'
      span.text-danger #{bookinstance.status}  
    else 
      span.text-warning #{bookinstance.status} 

  if bookinstance.status!='Available' 
    p #[strong Due back:] #{bookinstance.due_back}
```
Everything in this template has been demonstrated in previous sections.

### What does it look like?

Run the application and open your browser to [http://localhost:3000/](http://localhost:3000/). Select the *all book-instances* link, then select one of the items. If everything is set up correctly, your site should look something like the following screenshot.

![Image of the "Book Instances List" browser page in the LocalLibrary app](https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/Displaying_data/BookInstance_detail_page_and_challenge/locallibary_express_bookinstance_detail.png)