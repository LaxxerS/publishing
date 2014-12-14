this["JST"] = this["JST"] || {};

this["JST"]["home"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<header class=\"navbar\">\r\n	<nav class=\"nav-menu\">\r\n		<a href=\"#\">menu</a>\r\n	</nav>\r\n\r\n</header>\r\n\r\n<section class=\"main-contents\">\r\n	<nav class=\"nav-tabs\">\r\n		<ul class=\"nav-tabs-list\">\r\n			<li><a href=\"#\">home</a></li>\r\n			<li><a href=\"#top-stories\">top stories</a></li>\r\n			<li><a href=\"#bookmarks\">bookmarks</a></li>\r\n		</ul>\r\n	</nav>\r\n\r\n	<section class=\"contents-wrapper\">\r\n		\r\n	</section>\r\n</section>\r\n\r\n<aside class=\"sidebar\">\r\n	\r\n</aside>";
  });

this["JST"]["home/bookmarks"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "bookmarks";
  });

this["JST"]["home/feed"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "feed";
  });

this["JST"]["home/top-stories"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "top-stories";
  });