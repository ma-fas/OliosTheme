this["MyApp"] = this["MyApp"] || {};
this["MyApp"]["templates"] = this["MyApp"]["templates"] || {};
this["MyApp"]["templates"]["home_template"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<section id=\"homePage\">\r\n	<div class=\"container-main\">\r\n		<p class=\"bg-blurb\">newest</p>\r\n		<h1>Olios</h1>\r\n		<p class=\"title-blurb\">newest furniture template</p>\r\n		<button class=\"btn-more\"><a id=\"btn-more\" href=\"#\">view more</a></button>\r\n	</div>\r\n\r\n	<div id=\"carousel\">\r\n		<a href=\"#\"><img src=\"img/slider0.jpg\"></a>\r\n		<a href=\"#\"><img src=\"img/slider2.png\"></a>\r\n		<a href=\"#\"><img src=\"img/slider3.png\"></a>\r\n		<a href=\"#\"><img src=\"img/slider5.png\"></a>\r\n	</div>\r\n</section>";
},"useData":true});
this["MyApp"]["templates"]["main_nav_template"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<nav class=\"nav-main\">\r\n	<ul>\r\n		<li><a class=\"icon-logo\" href=\"#\"><img class=\"js-startUp\" src=\"img/icons/logo.png\"></a></li>\r\n		<li><a class=\"js-startUp icon icon-home\" href=\"#\"></a></li>\r\n		<li><a class=\"icon icon-basket\" href=\"#\"><span id=\"cart\"></span></a></li>\r\n		<li><a id=\"search-modal\" class=\"icon icon-search\" href=\"#\"></a></li>\r\n	</ul>\r\n	<a class=\"icon icon-download\" href=\"#\"></a>\r\n</nav>";
},"useData":true});
this["MyApp"]["templates"]["modal_search_template"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<div id=\"modal-search\" class=\"\">\r\n	<div class=\"modal-wrap\">\r\n		<button id=\"btn-close-form\" class=\"btn-close-form\">\r\n			<span class=\"close-one\"></span>\r\n			<span class=\"close-two\"></span>\r\n		</button>\r\n		<form id=\"search-form\">\r\n			<input type=\"text\" name=\"search-input\" id=\"search-input\">\r\n			<label for=\"search-input\">Type product that you are looking for</label>\r\n		</form>\r\n	</div>\r\n</div>";
},"useData":true});
this["MyApp"]["templates"]["products_template"] = Handlebars.template({"1":function(depth0,helpers,partials,data,blockParams,depths) {
    var stack1;

  return ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.items : depth0),{"name":"each","hash":{},"fn":this.program(2, data, 0, blockParams, depths),"inverse":this.noop,"data":data})) != null ? stack1 : "");
},"2":function(depth0,helpers,partials,data,blockParams,depths) {
    var helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "						<div id=\"product\" class=\"product product-sm\" href=\"product-info.html\" data-id=\""
    + alias3(((helper = (helper = helpers.index || (data && data.index)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"index","hash":{},"data":data}) : helper)))
    + "\"  data-parent=\""
    + alias3(this.lambda((depths[1] != null ? depths[1].name : depths[1]), depth0))
    + "\">\r\n							<img src=\""
    + alias3(((helper = (helper = helpers.src_sm || (depth0 != null ? depth0.src_sm : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"src_sm","hash":{},"data":data}) : helper)))
    + "\">\r\n							<div class=\"product-info\">\r\n								<h2>"
    + alias3(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"name","hash":{},"data":data}) : helper)))
    + "</h2>\r\n								<p>"
    + alias3(((helper = (helper = helpers.description_short || (depth0 != null ? depth0.description_short : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"description_short","hash":{},"data":data}) : helper)))
    + "</p>\r\n								<p class=\"price\">"
    + alias3(((helper = (helper = helpers.price_current || (depth0 != null ? depth0.price_current : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"price_current","hash":{},"data":data}) : helper)))
    + "</p>\r\n							</div>\r\n						</div>\r\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data,blockParams,depths) {
    var stack1;

  return "<section>\r\n	<div class=\"container\">\r\n		<div class=\"product-head\">\r\n			<h1>Products</h1>\r\n			<span>\r\n				<p>living room</p>\r\n				<img src=\"img/icons/living-room.png\">\r\n			</span>\r\n		</div>\r\n\r\n		<div id=\"products-showcase\">\r\n			<div class=\"product-row\">\r\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.category : depth0),{"name":"each","hash":{},"fn":this.program(1, data, 0, blockParams, depths),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "			</div>\r\n		</div>\r\n	</div>\r\n</section>";
},"useData":true,"useDepths":true});
this["MyApp"]["templates"]["product_details_template"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "<section id=\"productInfo\">\r\n	<div class=\"product-details\">	   			\r\n		<div class=\"product-zoom-wrap\">\r\n			<div class=\"product-like\">\r\n				<p id=\"like-counter\">495</p>\r\n			</div> \r\n			<img id=\"photo-zoom\" src=\""
    + alias3(((helper = (helper = helpers.src_sm || (depth0 != null ? depth0.src_sm : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"src_sm","hash":{},"data":data}) : helper)))
    + "\" data-zoom-image=\""
    + alias3(((helper = (helper = helpers.src || (depth0 != null ? depth0.src : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"src","hash":{},"data":data}) : helper)))
    + "\"/>\r\n			<div class=\"zoom-panel\">\r\n				<img id=\"zoom-panel-plus\" src=\"img/icons/plus.png\">\r\n				<img id=\"zoom-panel-minus\" src=\"img/icons/minus.png\">\r\n			</div>\r\n		</div>\r\n\r\n		<div class=\"container\">\r\n			<div class=\"product-head\">\r\n				<h2>Products</h2>\r\n				<span>\r\n					<p>living room</p>\r\n					<img src=\"img/icons/living-room.png\">\r\n				</span>\r\n			</div>\r\n			<div class=\"product-info\">\r\n				<h1>"
    + alias3(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"name","hash":{},"data":data}) : helper)))
    + "</h1>\r\n				<p class=\"sub-heading\">- Office</p>\r\n				<p>"
    + alias3(((helper = (helper = helpers.description_full || (depth0 != null ? depth0.description_full : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"description_full","hash":{},"data":data}) : helper)))
    + "</p>\r\n			</div>\r\n			<div class=\"product-options\">\r\n				<div class=\"price-panel\">\r\n	    			<div >\r\n	    				<h3>price</h3>\r\n		    			<p class=\"price\" id=\"price-current\">"
    + alias3(((helper = (helper = helpers.price_current || (depth0 != null ? depth0.price_current : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"price_current","hash":{},"data":data}) : helper)))
    + "</p>\r\n		    			<p id=\"price-previous\">"
    + alias3(((helper = (helper = helpers.price_previous || (depth0 != null ? depth0.price_previous : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"price_previous","hash":{},"data":data}) : helper)))
    + "</p>\r\n	    			</div>\r\n	    			<div class=\"quantity\">\r\n	    				<h3>quantity</h3>\r\n	    				<input id=\"quantity\" type=\"number\" name=\"quantity\" min=\"0\" max=\"30\" placeholder=\"0\">\r\n	    			</div>\r\n	    			<button id=\"add-to-cart\" class=\"btn-cart\">add to cart</button>\r\n	    		</div>\r\n			</div>	\r\n		</div>\r\n	</div>\r\n	<button id=\"btn-return\" class=\"btn-return\">return</button>\r\n</section>\r\n";
},"useData":true});
this["MyApp"]["templates"]["side_menu_template"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<div id=\"nav-toggle\" class=\"nav-toggle\">\r\n	<span class=\"one\"></span>\r\n	<span class=\"two\"></span>\r\n	<span class=\"three\"></span>\r\n</div>\r\n<aside class=\"side-menu\">\r\n	<nav class=\"side-nav\">\r\n		<ul class=\"nav-side\">\r\n			<li><a class=\"js-category-switch icon icon-living\" href=\"#\" data-category=\"living_room\">living room</a></li>\r\n			<li><a class=\"js-category-switch icon-office\" href=\"#\" data-category=\"office\">office</a></li>\r\n			<li><a class=\"js-category-switch icon-kids\" href=\"#\" data-category=\"kids\">for kids</a></li>\r\n			<li><a class=\"js-category-switch icon-kitchen\" href=\"#\" data-category=\"kitchen\">kitchen</a></li>\r\n			<li><a class=\"js-category-switch icon-acc\" href=\"#\" data-category=\"accessories\">accessories</a></li>\r\n		</ul>\r\n	</nav>\r\n</aside>";
},"useData":true});