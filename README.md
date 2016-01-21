# Goldstein Museum of Design Collections Template

## Installation

This assumes you have git and node/npm installed.

1. Clone this repo
2. run `npm install`

## Building

1. Run `grunt`

Output will be located in the `dist/` directory.

## Development

1. Make sure that `npm install` has been run
2. Install the [LiveReload browser extension](https://chrome.google.com/webstore/detail/livereload/jnihajbhpnppcggbcgedagnkighmdlei)
3. Run `grunt watch`


## Use

### Static assets

CSS, fonts, images, and javascript are generated and/or copied to the `dist/assets` directory on `build`. These generated/copied files should be used for any production use of the site.

### Handlebars partials, templates, & layouts

The `src/templates` directory is where the templates live. This is designed to be used with the assemble.io build system. However, translating the structure to a client-side templated application should be possible with some updates. Here are how various files would map to a client-side rendered application

* `src/templates/layouts/default.hbs` is the non-templated version of the a page should be derrived from. Some directives, such as `{{assets}}` in the tempalte would need to be removed.
* `src/templates/*.hbs` are the various template files we generate for the demo site.
** Only a small amount of HTML lives in these files, but they include the partials that are very important.
** These files are somewhat special in that they may include [front matter](http://jekyllrb.com/docs/frontmatter/) which set variables that may adjust the layout.
* `src/templates/layouts/partials/*.hbs` are the various partials that the base templates include.
** To re-use these you may wish to pre-compile them or include them in the base page inside the appropriate handlebars script tags as template fragments.


### Example data

The `src/data` directory contains example json data that the handlebars templates expect to render.
