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

It is perferable to use the `libs.top.js` and `libs.bottom.js` in files as it combines all the necessary js for the top and the bottom of the page into on smaller js file.

### Handlebars partials, templates, & layouts

The `src/templates` directory is where the templates live. This is designed to be used with the assemble.io build system. However, translating the structure to a client-side templated application should be possible with some updates. See the [README in the generated project](https://github.com/justinph/goldstein-collection-template/blob/gh-pages/README.md) for details on how to use this in a client-side manner.


### Example data

The `src/data` directory contains example json data that the handlebars templates expect to render.
