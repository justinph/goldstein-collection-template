
// Adapted from: https://gist.github.com/dhollenbeck/c4cde67aee08a3db06edf34c02ddd543

var Handlebars = (typeof Handlebars === 'undefined') ? require('handlebars') : Handlebars;

var eachNewLine = function (str, options) {
    var accum = '';
    var data = Handlebars.createFrame(options, options.hash);
    var arr = str.split(/\r?\n/);

    arr.map(function (str) {
        if (str) accum += options.fn(str.trim(), {data: data});
    });
    return accum;
};


if( typeof exports !== 'undefined' ) {
    exports.eachNewLine = eachNewLine;
} else {
    Handlebars.registerHelper('eachNewLine', eachNewLine);

    Handlebars.registerHelper('is', function (value, test, options) {
        if (value === test) {
          return options.fn(this);
        } else {
          return options.inverse(this);
        }
    });
}
