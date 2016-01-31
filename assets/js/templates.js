this["GOLDSTEIN"] = this["GOLDSTEIN"] || {};
this["GOLDSTEIN"]["templates"] = this["GOLDSTEIN"]["templates"] || {};

Handlebars.registerPartial("advanced-search", Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    return "checked";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : {};

  return "<div class='advanced-search'>\n\n    <label><input type=\"checkbox\" value=\"only-images\" autocomplete=\"off\"\n         id=\"only-images\" "
    + ((stack1 = helpers["if"].call(alias1,((stack1 = ((stack1 = (depth0 != null ? depth0.results : depth0)) != null ? stack1.query : stack1)) != null ? stack1["only-images"] : stack1),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ">Include only objects wtih images</label>\n\n    <div class='search-fields'>\n        <h3>Search Fields</h3>\n        <label><input type=\"radio\" name=\"search-fields\" value=\"all\"\n            "
    + ((stack1 = helpers["if"].call(alias1,((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0.results : depth0)) != null ? stack1.query : stack1)) != null ? stack1["search-fields"] : stack1)) != null ? stack1.all : stack1),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "/>All</label>\n        <label><input type=\"radio\" name=\"search-fields\" value=\"catalog-number\"\n            "
    + ((stack1 = helpers["if"].call(alias1,((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0.results : depth0)) != null ? stack1.query : stack1)) != null ? stack1["search-fields"] : stack1)) != null ? stack1["catalog-number"] : stack1),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "/>Catalog Number</label>\n        <label><input type=\"radio\" name=\"search-fields\" value=\"designer\"\n            "
    + ((stack1 = helpers["if"].call(alias1,((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0.results : depth0)) != null ? stack1.query : stack1)) != null ? stack1["search-fields"] : stack1)) != null ? stack1.designer : stack1),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "/>Designer</label>\n        <label><input type=\"radio\" name=\"search-fields\" value=\"object-title\"\n            "
    + ((stack1 = helpers["if"].call(alias1,((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0.results : depth0)) != null ? stack1.query : stack1)) != null ? stack1["search-fields"] : stack1)) != null ? stack1["object-title"] : stack1),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "/>Object Name/Title</label>\n        <label><input type=\"radio\" name=\"search-fields\" value=\"date\"\n            "
    + ((stack1 = helpers["if"].call(alias1,((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0.results : depth0)) != null ? stack1.query : stack1)) != null ? stack1["search-fields"] : stack1)) != null ? stack1.date : stack1),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "/>Date Made</label>\n        <label><input type=\"radio\" name=\"search-fields\" value=\"place\"\n            "
    + ((stack1 = helpers["if"].call(alias1,((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0.results : depth0)) != null ? stack1.query : stack1)) != null ? stack1["search-fields"] : stack1)) != null ? stack1.place : stack1),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "/>Place Made</label>\n        <label><input type=\"radio\" name=\"search-fields\" value=\"medium\"\n            "
    + ((stack1 = helpers["if"].call(alias1,((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0.results : depth0)) != null ? stack1.query : stack1)) != null ? stack1["search-fields"] : stack1)) != null ? stack1.medium : stack1),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "/>Medium</label>\n        <label><input type=\"radio\" name=\"search-fields\" value=\"credit-line\"\n            "
    + ((stack1 = helpers["if"].call(alias1,((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0.results : depth0)) != null ? stack1.query : stack1)) != null ? stack1["search-fields"] : stack1)) != null ? stack1["credit-line"] : stack1),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "/>Credit Line/Donor</label>\n    </div>\n\n</div>\n";
},"useData":true}));

Handlebars.registerPartial("collection-stats", Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression;

  return "\n    <div class=\"collection-stats h2\">Search <span class=\"in-catalog\">"
    + alias2(alias1(((stack1 = ((stack1 = (depth0 != null ? depth0.home : depth0)) != null ? stack1["collection-stats"] : stack1)) != null ? stack1["objects-in-catalog"] : stack1), depth0))
    + "</span> of the <span class=\"in-collection\">"
    + alias2(alias1(((stack1 = ((stack1 = (depth0 != null ? depth0.home : depth0)) != null ? stack1["collection-stats"] : stack1)) != null ? stack1["objects-in-collection"] : stack1), depth0))
    + "</span> objects in our collection.</div>\n\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "\n"
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : {},((stack1 = (depth0 != null ? depth0.home : depth0)) != null ? stack1["collection-stats"] : stack1),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"useData":true}));

Handlebars.registerPartial("exhibition-detail", Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<h1>"
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? depth0.exhibition : depth0)) != null ? stack1.title : stack1), depth0))
    + "</h1>";
},"3":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression;

  return "    <div class=\"col-md-6 col-md-push-6\">\n        <h2 class=\"sr-only\">Exhibition image</h2>\n\n        <a href=\""
    + alias2(alias1(((stack1 = ((stack1 = (depth0 != null ? depth0.exhibition : depth0)) != null ? stack1.images : stack1)) != null ? stack1["full-url"] : stack1), depth0))
    + "\" id='exhibition-image-link'><img src=\""
    + alias2(alias1(((stack1 = ((stack1 = (depth0 != null ? depth0.exhibition : depth0)) != null ? stack1.image : stack1)) != null ? stack1["med-url"] : stack1), depth0))
    + "\" alt=\"\" class=\"img-responsive\"/></a>\n    </div>\n";
},"5":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "    <div class=\"col-md-6 col-md-pull-6\">\n        <p>"
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? depth0.exhibition : depth0)) != null ? stack1.description : stack1), depth0))
    + "</p>\n\n"
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : {},((stack1 = (depth0 != null ? depth0.exhibition : depth0)) != null ? stack1["related-links"] : stack1),{"name":"if","hash":{},"fn":container.program(6, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\n    </div>\n";
},"6":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "            <div class=\"related-links\">\n                <h2>Related links</h2>\n                <ul class=\"related-links-list\">\n"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : {},((stack1 = (depth0 != null ? depth0.exhibition : depth0)) != null ? stack1["related-links"] : stack1),{"name":"each","hash":{},"fn":container.program(7, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "                </ul>\n            </div>\n";
},"7":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "                    <li><a href=\""
    + alias4(((helper = (helper = helpers.url || (depth0 != null ? depth0.url : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"url","hash":{},"data":data}) : helper)))
    + "\">"
    + alias4(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data}) : helper)))
    + "</a></li>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : {};

  return "<div class=\"row\">\n    <div class=\"col-md-12\">\n        <div class=\"exhibition-label\">"
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? depth0.exhibition : depth0)) != null ? stack1.label : stack1), depth0))
    + "</div>\n        "
    + ((stack1 = helpers["if"].call(alias1,((stack1 = (depth0 != null ? depth0.exhibition : depth0)) != null ? stack1.title : stack1),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\n    </div>\n</div>\n\n<div class=\"row\">\n"
    + ((stack1 = helpers["if"].call(alias1,((stack1 = (depth0 != null ? depth0.exhibition : depth0)) != null ? stack1.image : stack1),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = helpers["if"].call(alias1,((stack1 = (depth0 != null ? depth0.exhibition : depth0)) != null ? stack1.description : stack1),{"name":"if","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</div>\n\n";
},"useData":true}));

Handlebars.registerPartial("explore-collection", Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<div class=\"row  explore-collection\">\n    <div class=\"col-md-10 col-md-offset-1\">\n        <h2>Explore the collection</h2>\n        <ul class=\"nav nav-tabs\" role=\"tablist\">\n            <li role=\"presentation\" class=\"active\"><a href=\"#collections\"\n                aria-controls=\"collections\" role=\"tab\" data-toggle=\"tab\">Collections</a></li>\n            <li role=\"presentation\"><a href=\"#chronology\"\n                aria-controls=\"chronology\" role=\"tab\" data-toggle=\"tab\">Chronology</a></li>\n            <li role=\"presentation\"><a href=\"#object-type\"\n                aria-controls=\"object-type\" role=\"tab\" data-toggle=\"tab\">Object Type</a></li>\n            <li role=\"presentation\"><a href=\"#designer\"\n                aria-controls=\"designer\" role=\"tab\" data-toggle=\"tab\">Designer</a></li>\n            <li role=\"presentation\"><a href=\"#advanced-search\"\n                aria-controls=\"advanced-search\" role=\"tab\" data-toggle=\"tab\">Advanced Search</a></li>\n        </ul>\n\n        <div class=\"tab-content\">\n            <div role=\"tabpanel\" class=\"tab-pane active\" id=\"collections\">\n                <ul class=\"explore-list wide\">\n                    <li><a href=\"\">Costumes</a></li>\n                    <li><a href=\"\">Textiles</a></li>\n                    <li><a href=\"\">Decorative Arts and Design</a></li>\n                    <li><a href=\"\">Graphic Design and Works on Paper</a></li>\n                </ul>\n            </div>\n            <div role=\"tabpanel\" class=\"tab-pane\" id=\"chronology\">\n                <ul class=\"explore-list\">\n                    <li><a href=\"#\">Pre 19th century</a></li>\n                    <li><a href=\"#\">1801-1850</a></li>\n                    <li><a href=\"#\">1851-1900</a></li>\n                    <li><a href=\"#\">1901-1920</a></li>\n                    <li><a href=\"#\">1921-1940</a></li>\n                    <li><a href=\"#\">1941-1960</a></li>\n                    <li><a href=\"#\">1961-1980</a></li>\n                    <li><a href=\"#\">1981-2000</a></li>\n                    <li><a href=\"#\">21st century</a></li>\n                </ul>\n            </div>\n            <div role=\"tabpanel\" class=\"tab-pane\" id=\"object-type\">\n                <ul class=\"explore-list\">\n                    <li><a href=\"#\">All</a></li>\n                    <li><a href=\"#\">Accessories</a></li>\n                    <li><a href=\"#\">Ceramics</a></li>\n                    <li><a href=\"#\">Costumes</a></li>\n                    <li><a href=\"#\">Hats</a></li>\n                    <li><a href=\"#\">Furnishings</a></li>\n                    <li><a href=\"#\">Glass</a></li>\n                    <li><a href=\"#\">Metal</a></li>\n                    <li><a href=\"#\">Shoes</a></li>\n                    <li><a href=\"#\">Textiles</a></li>\n                    <li><a href=\"#\">Wood</a></li>\n                </ul>\n            </div>\n            <div role=\"tabpanel\" class=\"tab-pane\" id=\"designer\">\n                <p>Designer list TK</p>\n            </div>\n            <div role=\"tabpanel\" class=\"tab-pane\" id=\"advanced-search\" class=\"advanced-search\">\n"
    + ((stack1 = container.invokePartial(partials["advanced-search"],depth0,{"name":"advanced-search","data":data,"indent":"                ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "            </div>\n        </div>\n    </div>\n</div>\n";
},"usePartial":true,"useData":true}));

Handlebars.registerPartial("home-objects", Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression;

  return "            <h2>Object of the Week</h2>\n\n            <a href=\""
    + alias2(alias1(((stack1 = ((stack1 = (depth0 != null ? depth0.home : depth0)) != null ? stack1["object-of-week"] : stack1)) != null ? stack1.url : stack1), depth0))
    + "\">\n"
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : {},((stack1 = ((stack1 = (depth0 != null ? depth0.home : depth0)) != null ? stack1["object-of-week"] : stack1)) != null ? stack1["med-url"] : stack1),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "            <h3>"
    + alias2(alias1(((stack1 = ((stack1 = (depth0 != null ? depth0.home : depth0)) != null ? stack1["object-of-week"] : stack1)) != null ? stack1.title : stack1), depth0))
    + "</h3>\n                <small>"
    + alias2(alias1(((stack1 = ((stack1 = (depth0 != null ? depth0.home : depth0)) != null ? stack1["object-of-week"] : stack1)) != null ? stack1.designer : stack1), depth0))
    + "<br />\n                "
    + alias2(alias1(((stack1 = ((stack1 = (depth0 != null ? depth0.home : depth0)) != null ? stack1["object-of-week"] : stack1)) != null ? stack1["date made"] : stack1), depth0))
    + "</small>\n            </a>\n\n";
},"2":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "                <img src=\""
    + container.escapeExpression(container.lambda(((stack1 = ((stack1 = (depth0 != null ? depth0.home : depth0)) != null ? stack1["object-of-week"] : stack1)) != null ? stack1["med-url"] : stack1), depth0))
    + "\" alt=\"\" class=\"img-responsive\"/>\n";
},"4":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : {};

  return "        <h2>Featured Objects</h2>\n\n"
    + ((stack1 = helpers["if"].call(alias1,((stack1 = ((stack1 = (depth0 != null ? depth0.home : depth0)) != null ? stack1["featured-objects"] : stack1)) != null ? stack1.items : stack1),{"name":"if","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = helpers["if"].call(alias1,((stack1 = ((stack1 = (depth0 != null ? depth0.home : depth0)) != null ? stack1["featured-objects"] : stack1)) != null ? stack1["archive-url"] : stack1),{"name":"if","hash":{},"fn":container.program(9, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\n";
},"5":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "                <ul class=\"featured-objects-list\">\n"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : {},((stack1 = ((stack1 = (depth0 != null ? depth0.home : depth0)) != null ? stack1["featured-objects"] : stack1)) != null ? stack1.items : stack1),{"name":"each","hash":{},"fn":container.program(6, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "                </ul>\n";
},"6":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers["if"].call(depth0 != null ? depth0 : {},(depth0 != null ? depth0["thumb-url"] : depth0),{"name":"if","hash":{},"fn":container.program(7, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"7":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "                    <li><a href=\""
    + alias4(((helper = (helper = helpers.url || (depth0 != null ? depth0.url : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"url","hash":{},"data":data}) : helper)))
    + "\" style=\"background-image: url("
    + alias4(((helper = (helper = helpers["thumb-url"] || (depth0 != null ? depth0["thumb-url"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"thumb-url","hash":{},"data":data}) : helper)))
    + ")\">\n                    </a></li>\n";
},"9":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "            <a href=\""
    + container.escapeExpression(container.lambda(((stack1 = ((stack1 = (depth0 != null ? depth0.home : depth0)) != null ? stack1["featured-objects"] : stack1)) != null ? stack1["archive-url"] : stack1), depth0))
    + "\" class=\"btn btn-primary\">Featured object archive <span class=\"glyphicon glyphicon-triangle-right\" aria-hidden=\"true\"></span></a>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : {};

  return "<div class=\"row home-objects\">\n    <section class=\"col-md-5 col-md-offset-1 object-of-week\">\n"
    + ((stack1 = helpers["if"].call(alias1,((stack1 = (depth0 != null ? depth0.home : depth0)) != null ? stack1["object-of-week"] : stack1),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "    </section>\n\n    <section class=\"col-md-5 featured-objects\">\n"
    + ((stack1 = helpers["if"].call(alias1,((stack1 = (depth0 != null ? depth0.home : depth0)) != null ? stack1["featured-objects"] : stack1),{"name":"if","hash":{},"fn":container.program(4, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\n    </section>\n</div>\n";
},"useData":true}));

Handlebars.registerPartial("object-detail", Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression;

  return "    <div class=\"col-md-6 col-md-push-6\">\n        <h2 class=\"sr-only\">Object Images</h2>\n\n        <a href=\""
    + alias2(alias1(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0["object-detail"] : depth0)) != null ? stack1.images : stack1)) != null ? stack1["0"] : stack1)) != null ? stack1["full-url"] : stack1), depth0))
    + "\" id='object-detail-image-link'><img src=\""
    + alias2(alias1(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0["object-detail"] : depth0)) != null ? stack1.images : stack1)) != null ? stack1["0"] : stack1)) != null ? stack1["med-url"] : stack1), depth0))
    + "\" alt=\"\" class=\"img-responsive object-detail-image\"/></a>\n\n        <ul class=\"object-images-list\">\n"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : {},((stack1 = (depth0 != null ? depth0["object-detail"] : depth0)) != null ? stack1.images : stack1),{"name":"each","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "        </ul>\n    </div>\n";
},"2":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "            <li><a href=\""
    + alias4(((helper = (helper = helpers["full-url"] || (depth0 != null ? depth0["full-url"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"full-url","hash":{},"data":data}) : helper)))
    + "\" data-med-url=\""
    + alias4(((helper = (helper = helpers["med-url"] || (depth0 != null ? depth0["med-url"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"med-url","hash":{},"data":data}) : helper)))
    + "\"><img src=\""
    + alias4(((helper = (helper = helpers["thumb-url"] || (depth0 != null ? depth0["thumb-url"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"thumb-url","hash":{},"data":data}) : helper)))
    + "\" alt=\""
    + alias4(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data}) : helper)))
    + "\" /></a></li>\n";
},"4":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "    <div class=\"col-md-6 col-md-pull-6\">\n        <h2 class=\"sr-only\">Object Information</h2>\n        <dl>\n"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : {},((stack1 = (depth0 != null ? depth0["object-detail"] : depth0)) != null ? stack1.information : stack1),{"name":"each","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "        </dl>\n    </div>\n";
},"5":function(container,depth0,helpers,partials,data) {
    var helper, alias1=container.escapeExpression;

  return "          <dt>"
    + alias1(((helper = (helper = helpers.key || (data && data.key)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},{"name":"key","hash":{},"data":data}) : helper)))
    + "</dt>\n          <dd>"
    + alias1(container.lambda(depth0, depth0))
    + "</dd>\n";
},"7":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "    <div class=\"col-md-6 related-topics\">\n        <h2>Explore related topics</h2>\n        <ul class=\"related-topics-list\">\n"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : {},((stack1 = (depth0 != null ? depth0["object-detail"] : depth0)) != null ? stack1["related-topics"] : stack1),{"name":"each","hash":{},"fn":container.program(8, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "        </ul>\n    </div>\n";
},"8":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "            <li><a href=\""
    + alias4(((helper = (helper = helpers.url || (depth0 != null ? depth0.url : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"url","hash":{},"data":data}) : helper)))
    + "\"><span class=\"label label-default\">"
    + alias4(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data}) : helper)))
    + "</span></a></li>\n";
},"10":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : {};

  return "    <div class=\"col-md-6 related-objects\">\n        <h2>Related objects</h2>\n"
    + ((stack1 = helpers["if"].call(alias1,((stack1 = ((stack1 = (depth0 != null ? depth0["object-detail"] : depth0)) != null ? stack1["related-objects"] : stack1)) != null ? stack1["preview-items"] : stack1),{"name":"if","hash":{},"fn":container.program(11, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias1,((stack1 = ((stack1 = (depth0 != null ? depth0["object-detail"] : depth0)) != null ? stack1["related-objects"] : stack1)) != null ? stack1.count : stack1),{"name":"if","hash":{},"fn":container.program(17, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "   </div>\n";
},"11":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "        <ul class=\"related-objects-list object-list\">\n"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : {},((stack1 = ((stack1 = (depth0 != null ? depth0["object-detail"] : depth0)) != null ? stack1["related-objects"] : stack1)) != null ? stack1["preview-items"] : stack1),{"name":"each","hash":{},"fn":container.program(12, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "        </ul>\n";
},"12":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "            <li><a href=\""
    + alias4(((helper = (helper = helpers.url || (depth0 != null ? depth0.url : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"url","hash":{},"data":data}) : helper)))
    + "\">\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0["thumb-url"] : depth0),{"name":"if","hash":{},"fn":container.program(13, data, 0),"inverse":container.program(15, data, 0),"data":data})) != null ? stack1 : "")
    + "            <h3>"
    + alias4(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data}) : helper)))
    + "</h3>\n                <small>"
    + alias4(((helper = (helper = helpers.designer || (depth0 != null ? depth0.designer : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"designer","hash":{},"data":data}) : helper)))
    + "<br />\n                "
    + alias4(((helper = (helper = helpers["date made"] || (depth0 != null ? depth0["date made"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"date made","hash":{},"data":data}) : helper)))
    + "</small>\n            </a></li>\n";
},"13":function(container,depth0,helpers,partials,data) {
    var helper;

  return "            <div><img src=\""
    + container.escapeExpression(((helper = (helper = helpers["thumb-url"] || (depth0 != null ? depth0["thumb-url"] : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},{"name":"thumb-url","hash":{},"data":data}) : helper)))
    + "\" alt=\"\" /></div>\n";
},"15":function(container,depth0,helpers,partials,data) {
    return "                <div class=\"no-image\"></div>\n";
},"17":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression;

  return "            <a href=\""
    + alias2(alias1(((stack1 = ((stack1 = (depth0 != null ? depth0["object-detail"] : depth0)) != null ? stack1["related-objects"] : stack1)) != null ? stack1.url : stack1), depth0))
    + "\" class=\"btn btn-info\">View all related objects <span class=\"badge\">"
    + alias2(alias1(((stack1 = ((stack1 = (depth0 != null ? depth0["object-detail"] : depth0)) != null ? stack1["related-objects"] : stack1)) != null ? stack1.count : stack1), depth0))
    + "</span></a>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : {};

  return "\n\n<div class=\"row\">\n    <div class=\"col-md-12\">\n        <h1>"
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? depth0["object-detail"] : depth0)) != null ? stack1.title : stack1), depth0))
    + "</h1>\n    </div>\n</div>\n\n<div class=\"row\">\n\n"
    + ((stack1 = helpers["if"].call(alias1,((stack1 = (depth0 != null ? depth0["object-detail"] : depth0)) != null ? stack1.images : stack1),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = helpers["if"].call(alias1,((stack1 = (depth0 != null ? depth0["object-detail"] : depth0)) != null ? stack1.information : stack1),{"name":"if","hash":{},"fn":container.program(4, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</div>\n\n<div class=\"row\">\n"
    + ((stack1 = helpers["if"].call(alias1,((stack1 = (depth0 != null ? depth0["object-detail"] : depth0)) != null ? stack1["related-topics"] : stack1),{"name":"if","hash":{},"fn":container.program(7, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = helpers["if"].call(alias1,((stack1 = (depth0 != null ? depth0["object-detail"] : depth0)) != null ? stack1["related-objects"] : stack1),{"name":"if","hash":{},"fn":container.program(10, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</div>\n\n";
},"useData":true}));

Handlebars.registerPartial("search-panel", Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    return " has-advanced";
},"3":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "        <a href=\"javascript:void(0)\" class=\"advanced-search-link\" id=\"advanced-search-link\">Advanced search<span class=\"glyphicon glyphicon-triangle-right\" aria-hidden=\"true\"></span></a>\n\n        <div class=\"advanced-search-wrap hidden\">\n"
    + ((stack1 = container.invokePartial(partials["advanced-search"],depth0,{"name":"advanced-search","data":data,"indent":"            ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "        </div>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : {};

  return "<section class=\"search-panel"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.show_advanced_search : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\">\n\n    <h2 class=\"sr-only\">Search the collection</h2>\n\n    <form action=\"/search-url\" id=\"search-form\">\n    <div class=\"input-group\">\n        <input type=\"text\" id=\"search-field\" class=\"form-control\" placeholder=\"Search for material, designer, object type...\" value=\""
    + container.escapeExpression(container.lambda(((stack1 = ((stack1 = (depth0 != null ? depth0.results : depth0)) != null ? stack1.query : stack1)) != null ? stack1.q : stack1), depth0))
    + "\" name=\"q\" />\n        <label for=\"search-field\" class=\"sr-only\">Search the collection</label>\n\n        <span class=\"input-group-btn\">\n            <button class=\"btn btn-primary\" type=\"submit\" id=\"search-panel-submit\"><span class=\"glyphicon glyphicon-search\" aria-hidden=\"true\"></span><span class=\"hidden-xs search-button-text\" aria-hidden=\"false\"> Search</span></button>\n        </span>\n    </div>\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.show_advanced_search : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "    </form>\n\n</section>\n";
},"usePartial":true,"useData":true}));

Handlebars.registerPartial("search-results", Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "            <h2 class=\"alert alert-warning\" role=\"alert\">No results for <i>"
    + ((stack1 = container.lambda(((stack1 = ((stack1 = (depth0 != null ? depth0.results : depth0)) != null ? stack1.query : stack1)) != null ? stack1.q : stack1), depth0)) != null ? stack1 : "")
    + "</i></h2>\n";
},"3":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda;

  return ((stack1 = helpers["if"].call(depth0 != null ? depth0 : {},((stack1 = (depth0 != null ? depth0.results : depth0)) != null ? stack1.pagination : stack1),{"name":"if","hash":{},"fn":container.program(4, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\n            "
    + container.escapeExpression(alias1(((stack1 = (depth0 != null ? depth0.results : depth0)) != null ? stack1["object-count"] : stack1), depth0))
    + " results <span class='sr-only'>for <i>"
    + ((stack1 = alias1(((stack1 = ((stack1 = (depth0 != null ? depth0.results : depth0)) != null ? stack1.query : stack1)) != null ? stack1.q : stack1), depth0)) != null ? stack1 : "")
    + "</i></span></h2>\n";
},"4":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "                <h2 class='results-page-count'>Page "
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? depth0.results : depth0)) != null ? stack1["current-page"] : stack1), depth0))
    + " of\n";
},"6":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "\n                <a href=\""
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? depth0.results : depth0)) != null ? stack1["print-url"] : stack1), depth0))
    + "\" aria-label=\"Print\" class=\"print-results\"><span class=\"glyphicon glyphicon-print\" aria-hidden=\"true\"></span> <span class=\"print-label\">Print</span></a>\n";
},"8":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : {};

  return "            <ol class=\"object-list search-results-list\">\n"
    + ((stack1 = helpers.each.call(alias1,((stack1 = (depth0 != null ? depth0.results : depth0)) != null ? stack1.objects : stack1),{"name":"each","hash":{},"fn":container.program(9, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "            </ol>\n\n            <footer class=\"search-results-footer\">\n\n"
    + ((stack1 = helpers["if"].call(alias1,((stack1 = ((stack1 = (depth0 != null ? depth0.results : depth0)) != null ? stack1.pagination : stack1)) != null ? stack1.pages : stack1),{"name":"if","hash":{},"fn":container.program(14, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\n            </footer>\n\n";
},"9":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "                <li><a href=\""
    + alias4(((helper = (helper = helpers.url || (depth0 != null ? depth0.url : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"url","hash":{},"data":data}) : helper)))
    + "\">\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0["thumb-url"] : depth0),{"name":"if","hash":{},"fn":container.program(10, data, 0),"inverse":container.program(12, data, 0),"data":data})) != null ? stack1 : "")
    + "                <h3>"
    + alias4(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data}) : helper)))
    + "</h3>\n                    <small>"
    + alias4(((helper = (helper = helpers.designer || (depth0 != null ? depth0.designer : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"designer","hash":{},"data":data}) : helper)))
    + "<br />\n                    "
    + alias4(((helper = (helper = helpers["date made"] || (depth0 != null ? depth0["date made"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"date made","hash":{},"data":data}) : helper)))
    + "</small>\n                </a></li>\n";
},"10":function(container,depth0,helpers,partials,data) {
    var helper;

  return "                <div><img src=\""
    + container.escapeExpression(((helper = (helper = helpers["thumb-url"] || (depth0 != null ? depth0["thumb-url"] : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},{"name":"thumb-url","hash":{},"data":data}) : helper)))
    + "\" alt=\"\" /></div>\n";
},"12":function(container,depth0,helpers,partials,data) {
    return "                    <div class=\"no-image\"></div>\n";
},"14":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : {};

  return "                <nav>\n                    <ul class=\"pagination\">\n"
    + ((stack1 = helpers["if"].call(alias1,((stack1 = ((stack1 = (depth0 != null ? depth0.results : depth0)) != null ? stack1.pagination : stack1)) != null ? stack1.previous : stack1),{"name":"if","hash":{},"fn":container.program(15, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = helpers.each.call(alias1,((stack1 = ((stack1 = (depth0 != null ? depth0.results : depth0)) != null ? stack1.pagination : stack1)) != null ? stack1.pages : stack1),{"name":"each","hash":{},"fn":container.program(18, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = helpers["if"].call(alias1,((stack1 = ((stack1 = (depth0 != null ? depth0.results : depth0)) != null ? stack1.pagination : stack1)) != null ? stack1.next : stack1),{"name":"if","hash":{},"fn":container.program(23, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "                    </ul>\n                </nav>\n";
},"15":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "                            <li "
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : {},((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0.results : depth0)) != null ? stack1.pagination : stack1)) != null ? stack1.previous : stack1)) != null ? stack1.disabled : stack1),{"name":"if","hash":{},"fn":container.program(16, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "><a href=\""
    + container.escapeExpression(container.lambda(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0.results : depth0)) != null ? stack1.pagination : stack1)) != null ? stack1.previous : stack1)) != null ? stack1.url : stack1), depth0))
    + "\" aria-label=\"Previous\"><span\n                                aria-hidden=\"true\">&laquo;</span></a></li>\n";
},"16":function(container,depth0,helpers,partials,data) {
    return "class=\"disabled\"";
},"18":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "                            <li "
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.current : depth0),{"name":"if","hash":{},"fn":container.program(19, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "><a href=\""
    + alias4(((helper = (helper = helpers.url || (depth0 != null ? depth0.url : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"url","hash":{},"data":data}) : helper)))
    + "\">"
    + alias4(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data}) : helper)))
    + " "
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.current : depth0),{"name":"if","hash":{},"fn":container.program(21, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</a></li>\n";
},"19":function(container,depth0,helpers,partials,data) {
    return "class=\"active\"";
},"21":function(container,depth0,helpers,partials,data) {
    return "<span class=\"sr-only\">(current)</span>";
},"23":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "                            <li "
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : {},((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0.results : depth0)) != null ? stack1.pagination : stack1)) != null ? stack1.next : stack1)) != null ? stack1.disabled : stack1),{"name":"if","hash":{},"fn":container.program(16, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "><a href=\""
    + container.escapeExpression(container.lambda(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0.results : depth0)) != null ? stack1.pagination : stack1)) != null ? stack1.next : stack1)) != null ? stack1.url : stack1), depth0))
    + "\" aria-label=\"Next\"><span\n                                aria-hidden=\"true\">&raquo;</span></a></li>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : {};

  return "\n<div class=\"row\">\n    <section class=\"col-md-12\">\n        <header class=\"search-results-meta\">\n"
    + ((stack1 = helpers.unless.call(alias1,((stack1 = (depth0 != null ? depth0.results : depth0)) != null ? stack1["object-count"] : stack1),{"name":"unless","hash":{},"fn":container.program(1, data, 0),"inverse":container.program(3, data, 0),"data":data})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = helpers["if"].call(alias1,((stack1 = (depth0 != null ? depth0.results : depth0)) != null ? stack1["print-url"] : stack1),{"name":"if","hash":{},"fn":container.program(6, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\n\n        </header>\n\n"
    + ((stack1 = helpers["if"].call(alias1,((stack1 = (depth0 != null ? depth0.results : depth0)) != null ? stack1["object-count"] : stack1),{"name":"if","hash":{},"fn":container.program(8, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\n    </section>\n</div>\n";
},"useData":true}));

Handlebars.registerPartial("site-header", Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression;

  return "\n<div class=\"site-header\">\n    <h2>\n        <span class='heading-2 site-title'><a href=\""
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.site : depth0)) != null ? stack1["index-url"] : stack1), depth0))
    + "\">Collections</a></span>\n        <span class=\"sep\">-</span>\n        <span class='heading-2  site-unit'><a href=\""
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.site : depth0)) != null ? stack1["unit-url"] : stack1), depth0))
    + "\">Goldstein Museum of Design</a></span>\n        <span class=\"sep\">-</span>\n        <span class='heading-2 site-metaunit'><a href=\""
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.site : depth0)) != null ? stack1["metaunit-url"] : stack1), depth0))
    + "\">College of Design</a></span>\n    </h2>\n</div>\n";
},"useData":true}));

Handlebars.registerPartial("viewing-objects", Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<section class=\"row\">\n    <div class=\"col-md-10 col-md-offset-1\">\n        <h2>Viewing Objects</h2>\n\n        <p>To view objects from the collection, call <a href=\"tel:+1-612-625-2737\">612-625-2737</a> or email <a href=\"mailto:gmd@umn.edu\">gmd@umn.edu</a> to make an appointment. Appointments must be scheduled one to two weeks in advance.</p>\n\n        <p>Digital photography of the collection has been funded by generous individuals and by grants from:<br />\n        <img src=\"http://goldstein.design.umn.edu/collection/images/IMLS_Logo_2c.jpg\" alt=\"Institute of Museum and Library Services\" />\n        </p>\n    </div>\n</section>\n";
},"useData":true}));

this["GOLDSTEIN"]["templates"]["detail"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "\n\n"
    + ((stack1 = container.invokePartial(partials["search-panel"],depth0,{"name":"search-panel","data":data,"helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "\n\n<div class='object-detail'>\n\n"
    + ((stack1 = container.invokePartial(partials["object-detail"],depth0,{"name":"object-detail","data":data,"indent":"    ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "\n</div><!-- end object-detail -->\n";
},"usePartial":true,"useData":true});

this["GOLDSTEIN"]["templates"]["exhibition"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "\n\n"
    + ((stack1 = container.invokePartial(partials["search-panel"],depth0,{"name":"search-panel","data":data,"helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "\n<div class=\"exhibition-detail\">\n"
    + ((stack1 = container.invokePartial(partials["exhibition-detail"],depth0,{"name":"exhibition-detail","data":data,"indent":"    ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "</div>\n\n<div class='search-results'>\n\n"
    + ((stack1 = container.invokePartial(partials["search-results"],depth0,{"name":"search-results","data":data,"indent":"    ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "\n</div><!-- end search-results -->\n";
},"usePartial":true,"useData":true});

this["GOLDSTEIN"]["templates"]["home"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "\n"
    + ((stack1 = container.invokePartial(partials["collection-stats"],depth0,{"name":"collection-stats","data":data,"helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = container.invokePartial(partials["search-panel"],depth0,{"name":"search-panel","data":data,"helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "\n<div class=\"home\">\n\n"
    + ((stack1 = container.invokePartial(partials["explore-collection"],depth0,{"name":"explore-collection","data":data,"indent":"    ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = container.invokePartial(partials["home-objects"],depth0,{"name":"home-objects","data":data,"indent":"    ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = container.invokePartial(partials["viewing-objects"],depth0,{"name":"viewing-objects","data":data,"indent":"    ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "\n</div>\n";
},"usePartial":true,"useData":true});

this["GOLDSTEIN"]["templates"]["index"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "\n\n<ul>\n    <li><a href=\"home.html\">Home</a></li>\n    <li><a href=\"detail.html\">Detail</a></li>\n    <li><a href=\"search.html\">Search</a></li>\n    <li><a href=\"exhibition.html\">Exhibition</a></li>\n</ul>\n";
},"useData":true});

this["GOLDSTEIN"]["templates"]["search"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "\n\n"
    + ((stack1 = container.invokePartial(partials["search-panel"],depth0,{"name":"search-panel","data":data,"helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "\n\n<div class='search-results'>\n\n"
    + ((stack1 = container.invokePartial(partials["search-results"],depth0,{"name":"search-results","data":data,"indent":"    ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "\n</div><!-- end search-results -->\n";
},"usePartial":true,"useData":true});