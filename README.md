# How to use this


There are two groupings of files, intermingled, in this distribution.

## Group 1: Static templates

There is a [Grunt task](http://gruntjs.com/) in the parent repository for this project that genreates much of the html and copies various javascript files into this distribution. These html/css/js files are generally for demonstration purposes.

You can view the site in action here: http://fiddlyio.com/goldstein-collection-template/


## Group 2: Client-side handlebars example

View here: http://fiddlyio.com/goldstein-collection-template/handlebars.html

Or look in source here at `handlebars.html`.

This example demonstrates how the files in the parent project can be used to dynamically render the collection app on the client. If you look at the file "handlebars.html" in this project, you'll see two groups of comments in the source that show what coding is done to make this work.

### Handlebars

This example uses [Handlebars](http://handlebarsjs.com/) to render on the client. Handlebars gives us more control and is less cumbersome to use than finding and replacing directly in the DOM, and allows us to not do heavy work on the server. In general, with handlebars, you write templates that get compiled from the tempalte syntax into javascript functions. Then you pass data (just structured javascript objects to the tempaltes, which return HTML. You then inject the HTML into the page.

### Partials and templates

In our example, we've set up a grunt task in the parent project to compile our templates. That is, we take the [template files](https://github.com/justinph/goldstein-collection-template/tree/master/src/templates) and [partials](https://github.com/justinph/goldstein-collection-template/tree/master/src/templates/partials) and the and turn them into one nice tidy javascript file. The templates you'll find under the `GOLDSTEIN.templates` namespace. You can see this file `assets/js/templates.js`.

### Gluing

The code to inject generated HTML into the DOM should be fairly straight forward. I have placed a few json files for demonstration purposes, but I would expect the data manipluation to be more complex in a real-world example. In the end, the important part is to get the data structure to match what the templates are expecting. If that happens, it doesn't matter where the data comes from, so long as it gets there.


### Making changes

If we need to make changes to the templates, the best way to do this is to update the tempaltes in the parent project and then re-run the grunt task to re-generate `templates.js`. This distribution version should not be directly editied.
