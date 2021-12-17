# Date formatting using luxon

The default rendering of dates from our models is very ugly: *Tue Oct 06 2020 15:49:58 GMT+1100 (AUS Eastern Daylight Time)*. In this section, we'll show how you can update the *BookInstance List* page from the previous section to present the `due_date` field in a more friendly format: Oct 6th, 2020.

The approach we will use is to create a virtual property in our `BookInstance` model that returns the formatted date. We'll do the actual formatting using [luxon](https://www.npmjs.com/package/luxon), a powerful, modern, and friendly library for parsing, validating, manipulating, formatting, and localizing dates.

<hr>

**Note**: It is possible to use *luxon* to format the strings directly in our Pug templates, or we could format the string in a number of other places. Using a virtual property allows us to get the formatted date in exactly the same way as we get the `due_date` currently.

<hr>

**Note**: This tutorial previously used the [moment](https://www.npmjs.com/package/moment) library for date formatting. We've moved to Luxon because moment has [declared itself "legacy"](https://momentjs.com/docs/#/-project-status/). Luxon is one of the [moment project's main recommendations](https://momentjs.com/docs/#/-project-status/recommendations/) for a great alternative library.

<hr>

## Install luxon

Enter the following command in the root of the project:
```
npm install luxon
```

## Create the virtual property

1. Open **./models/bookinstance.js**.

2. At the top of the page, import *luxon*.
```
const { DateTime } = require("luxon");
```

Add the virtual property `due_back_formatted` just after the URL property.
```
BookInstanceSchema
.virtual('due_back_formatted')
.get(function() {
    return DataTime.fromJSDate(this.due_back).toLocaleString(DateTime.DATE_MED);
});
```

<hr>

**Note**: Luxon can import strings in many formats and export to both predefined and free-form formats. In this case, we use `fromJSDate()` to import a JavaScript date string and `toLocaleString()` to output the date in `DATE_MED` format in English: Oct 6th, 2020. For information about other formats and date string internationalization, see the Luxon documentation on [formatting](https://github.com/moment/luxon/blob/master/docs/formatting.md#formatting).

<hr>

## Update the view

Open **/views/bookinstance_list.pug** and replace `due_back` with `due_back_formatted`.
```
        if val.status != 'Available'
          // span  (Due: #{val.due_back} )
          span  (Due: #{val.due_back_formatted} )
```
That's it! If you go to *All book-instances* in the sidebar, you should now see all the due dates are far more attractive!

## Next steps

* Return to [Express Tutorial Part 5: Displaying library data](https://github.com/AndrewSRea/My_Learning_Port/tree/main/JavaScript/Server-Side_Website_Programming/Express_Web_Framework/Express_Tutorial_5#express-tutorial-part-5-displaying-library-data).
* Proceed to the next subarticle of part 5: [Author list page and Genre list page challenge](https://github.com/AndrewSRea/My_Learning_Port/tree/main/JavaScript/Server-Side_Website_Programming/Express_Web_Framework/Express_Tutorial_5/Subtutorial_5_8#author-list-page-and-genre-list-page-challenge).