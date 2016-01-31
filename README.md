# How to use this


There are two groupings of files, intermingled, in this distribution.

# Group 1: Static templates

There is a [Grunt task](http://gruntjs.com/) in the parent repository for this project that genreates much of the html and copies various javascript files into this distribution. These html/css/js files are generally for demonstration purposes.

You can view the site in action here: http://fiddlyio.com/goldstein-collection-template/


# Group 2: Client-side handlebars example

View here: http://fiddlyio.com/goldstein-collection-template/handlebars.html

This example demonstrates how the files in the parent project can be used to dynamically render the collection app on the client. If you look at the file "handlebars.html" in this project, you'll see two groups of comments in the source that show what coding is done to make this work.

This example uses [Handlebars](http://handlebarsjs.com/) to render on the client. Handlebars gives us more control and is less cumbersome to use than finding and replacing directly in the DOM, and allows us to not do heavy work on the server. In general, with handlebars, you write templates that get compiled from the tempalte syntax into javascript functions. Then you pass data (just structured javascript objects to the tempaltes, which return HTML. You then inject the HTML into the page.

In our example, we've set up a grunt task in the parent project to do the compliation part. That is, we take the .hbs files and turn them into one nice tidy javascript file. All the templates get compiled under the `GOLDSTEIN.templates` namespace. You can see this file `assets/js/templates.js`.

