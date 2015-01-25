this["JST"] = this["JST"] || {};

this["JST"]["collection"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var stack1, helper;
  if (helper = helpers.cover) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.cover); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  return escapeExpression(stack1);
  }

function program3(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\r\n            ";
  stack1 = helpers.each.call(depth0, (depth0 && depth0.posts), {hash:{},inverse:self.noop,fn:self.program(4, program4, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n        ";
  return buffer;
  }
function program4(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\r\n        <section class=\"post-wrapper\">\r\n                <article clsss=\"post-block\">\r\n                    <span class=\"post-title\"><a href=\"/@"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.author)),stack1 == null || stack1 === false ? stack1 : stack1.username)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "/";
  if (helper = helpers.slug) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.slug); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\">";
  if (helper = helpers.title) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.title); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</a></span>\r\n                    <section class=\"post-content\">\r\n                        ";
  if (helper = helpers.excerpt) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.excerpt); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\r\n                    </section>\r\n                    <section class=\"post-footer\">\r\n                        <span class=\"author\"><a href=\"/@"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.author)),stack1 == null || stack1 === false ? stack1 : stack1.username)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "/\">"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.author)),stack1 == null || stack1 === false ? stack1 : stack1.name)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</a></span>\r\n                        <a href=\"#";
  if (helper = helpers.id) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.id); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" class=\"readtime\">";
  if (helper = helpers.time) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.time); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</a>\r\n                    </section>\r\n                </article> \r\n        </section>\r\n            ";
  return buffer;
  }

  buffer += "<nav class=\"collection-menu\">\r\n    <div class=\"home-icon\"><a href=\"/\" class=\"back\"><i class=\"fa fa-home\"></i></a></div>\r\n    <div class=\"mobile-icon\"><a href=\"/\"><i class=\"fa fa-bars\"></i></a></div>\r\n	<span class=\"collection-editor\">Collection edited by <span class=\"post-author\"><a href=\"/@"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.editor)),stack1 == null || stack1 === false ? stack1 : stack1.username)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "/\">"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.editor)),stack1 == null || stack1 === false ? stack1 : stack1.name)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</a></span>\r\n    <div class=\"collection-buttons\">\r\n    </div>\r\n</nav>\r\n\r\n<header class=\"collection-header\" style=\"background-image: url(/shared/img/";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.cover), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += ")\">\r\n    <div class=\"overlay\"></div>\r\n    <div class=\"vertical\">\r\n        <div class=\"collection-header-content inner\">\r\n            <h1 class=\"collection-title\">";
  if (helper = helpers.title) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.title); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</h1>\r\n            <h2 class=\"collection-description\">";
  if (helper = helpers.description) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.description); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</h2>\r\n       </div>\r\n    </div>\r\n</header>\r\n\r\n<section class=\"collection-contents\">\r\n    <section class=\"block-contents no-border\">\r\n        <a href=\"\" class=\"label\">Latest</a>\r\n        ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.posts), {hash:{},inverse:self.noop,fn:self.program(3, program3, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += " \r\n    </section>    \r\n</section>\r\n\r\n<aside class=\"mobile-menu-holder\">\r\n    \r\n</aside>";
  return buffer;
  });

this["JST"]["collection/collection-all"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<nav class=\"collection-menu\">\r\n	<div class=\"home-icon\"><a href=\"/\" class=\"back\"><i class=\"fa fa-home\"></i></a></div>\r\n	<div class=\"mobile-icon\"><a href=\"/\"><i class=\"fa fa-bars\"></i></a></div>\r\n	<span class=\"collection-editor\">&nbsp;</span>\r\n    <div class=\"collection-buttons\">\r\n    </div>\r\n</nav>\r\n<section class=\"profile-wrapper\">\r\n	<div class=\"user-name\">Collections</div>\r\n	<div class=\"user-bio\">Stories grouped by theme or genre</div>\r\n\r\n	<section class=\"profile-follow-wrapper\">\r\n		<input type=\"hidden\" class=\"follow_id\" name=\"follow_id\" value=";
  if (helper = helpers.id) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.id); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + ">\r\n		<section class=\"profile-follow\">\r\n			<button class=\"button-follow\">Group Stories</button>\r\n		</section>\r\n	</section>\r\n</section>\r\n\r\n	\r\n<section class=\"profile-contents\">\r\n</section>\r\n\r\n<div class=\"modal-wrapper\">\r\n	<a href=\"\" class=\"close\">close [x]</a>\r\n	<div class=\"login-form\">\r\n		<span class=\"title\">New Collection</span>\r\n		<div class=\"upload-holder\"><a href=\"\" class=\"upload\"><i class=\"fa fa-camera\"></i></a></div>\r\n		<input type=\"file\" id=\"collection-cover\" name=\"files[]\" data-url=\"htttp://localhost:3000/admin/upload/\" style=\"display: none;\" />\r\n		<input type=\"text\" class=\"login-name\" name=\"title\" placeholder=\"Collection Name\" autocapitalize=\"off\" autocomplete=\"off\" spellcheck=\"false\" required autofocus>\r\n		<input type=\"hidden\" name=\"cover\" value=\"\">\r\n		<input type=\"text\" class=\"login-name\" name=\"description\" placeholder=\"Collection Description\" autocapitalize=\"off\" autocomplete=\"off\" spellcheck=\"false\" required>\r\n		<input type=\"submit\" class=\"login-submit\" value=\"Create\">\r\n	</div>\r\n</div>\r\n\r\n<aside class=\"mobile-menu-holder\">\r\n	\r\n</aside>";
  return buffer;
  });

this["JST"]["collection/collection-block"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var stack1, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\r\n<section class=\"block-contents\">\r\n	<a href=\"\" class=\"label\">Your Collection</a>\r\n		<div class=\"collection-wrapper\">\r\n			";
  stack1 = helpers.each.call(depth0, depth0, {hash:{},inverse:self.noop,fn:self.program(2, program2, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n		</div>\r\n</section>	\r\n";
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\r\n			<div class=\"collection-block\">\r\n				<a href=\"/collection/";
  if (helper = helpers.slug) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.slug); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "/\" style=\"background-image: url(/shared/img/";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.cover), {hash:{},inverse:self.noop,fn:self.program(3, program3, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += ")\">\r\n					<div class=\"darker\">";
  if (helper = helpers.title) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.title); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</div>\r\n				</a>\r\n			</div>\r\n			";
  return buffer;
  }
function program3(depth0,data) {
  
  var stack1, helper;
  if (helper = helpers.cover) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.cover); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  return escapeExpression(stack1);
  }

  stack1 = helpers['if'].call(depth0, depth0, {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { return stack1; }
  else { return ''; }
  });

this["JST"]["home"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<header class=\"navbar\">\r\n\r\n</header>\r\n\r\n<div class=\"modal-wrapper\">\r\n	<a href=\"\" class=\"close\">close [x]</a>\r\n	<div class=\"login-form\">\r\n		<span class=\"title\">Sign in / <a class=\"sign-up\" href=\"/signup/\">Sign up</a></span>\r\n		<form method=\"post\" action=\"/login/\">\r\n			<input type=\"email\" class=\"login-mail\" name=\"email\" placeholder=\"Email\" autocapitalize=\"off\" autocomplete=\"off\" spellcheck=\"false\" required autofocus>\r\n			<input type=\"password\" class=\"login-password\" name=\"password\" placeholder=\"Password\" required>\r\n			<input type=\"submit\" class=\"login-submit\" value=\"Sign In\">\r\n		</form>\r\n	</div>\r\n</div>\r\n\r\n<section class=\"main-contents\">\r\n\r\n</section>\r\n\r\n<aside class=\"sidebar\">\r\n	\r\n</aside>\r\n\r\n<aside class=\"mobile-menu-holder\">\r\n	\r\n</aside>\r\n";
  });

this["JST"]["home/bookmarks"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<section class=\"fill-up-the-bookmark\">\r\n	\r\n</section>";
  });

this["JST"]["home/discover"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<section class=\"fill-up-the-discover\">\r\n	\r\n</section>";
  });

this["JST"]["home/feed"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<section class=\"fill-up-the-feed\">\r\n	\r\n</section>";
  });

this["JST"]["home/my-bookmark"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\r\n	";
  stack1 = helpers.each.call(depth0, depth0, {hash:{},inverse:self.noop,fn:self.program(2, program2, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n";
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\r\n		<section class=\"contents-wrapper\">\r\n			<article clsss=\"post-block\">\r\n				<span class=\"post-title\"><a href=\"/@"
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = (depth0 && depth0.posts)),stack1 == null || stack1 === false ? stack1 : stack1.author)),stack1 == null || stack1 === false ? stack1 : stack1.username)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "/"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.posts)),stack1 == null || stack1 === false ? stack1 : stack1.slug)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\">"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.posts)),stack1 == null || stack1 === false ? stack1 : stack1.title)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</a></span>\r\n				<section class=\"post-content\">\r\n					";
  if (helper = helpers.excerpt) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.excerpt); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\r\n				</section>\r\n				<section class=\"post-footer\">\r\n					<div class=\"rounded\">\r\n						<div class=\"user-image\" style=\"background-image: url(/shared/img/";
  stack1 = helpers['if'].call(depth0, ((stack1 = ((stack1 = (depth0 && depth0.posts)),stack1 == null || stack1 === false ? stack1 : stack1.author)),stack1 == null || stack1 === false ? stack1 : stack1.image), {hash:{},inverse:self.program(5, program5, data),fn:self.program(3, program3, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += ");\"></div>\r\n					</div>\r\n						<span class=\"author\"><a href=\"/@"
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = (depth0 && depth0.posts)),stack1 == null || stack1 === false ? stack1 : stack1.author)),stack1 == null || stack1 === false ? stack1 : stack1.username)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "/\">"
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = (depth0 && depth0.posts)),stack1 == null || stack1 === false ? stack1 : stack1.author)),stack1 == null || stack1 === false ? stack1 : stack1.name)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</a></span>\r\n						<span class=\"time\">"
    + escapeExpression((helper = helpers.date || (depth0 && depth0.date),options={hash:{
    'timeago': ("True")
  },data:data},helper ? helper.call(depth0, ((stack1 = (depth0 && depth0.posts)),stack1 == null || stack1 === false ? stack1 : stack1.created_at), options) : helperMissing.call(depth0, "date", ((stack1 = (depth0 && depth0.posts)),stack1 == null || stack1 === false ? stack1 : stack1.created_at), options)))
    + "</span>\r\n						<a href=\"#"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.posts)),stack1 == null || stack1 === false ? stack1 : stack1.id)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" class=\"remove\">remove</a>\r\n				</section>\r\n			</article>	\r\n		</section>\r\n\r\n	";
  return buffer;
  }
function program3(depth0,data) {
  
  var stack1;
  return escapeExpression(((stack1 = ((stack1 = ((stack1 = (depth0 && depth0.posts)),stack1 == null || stack1 === false ? stack1 : stack1.author)),stack1 == null || stack1 === false ? stack1 : stack1.image)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1));
  }

function program5(depth0,data) {
  
  
  return "default.png";
  }

function program7(depth0,data) {
  
  
  return "\r\n	<section class=\"contents-wrapper\">\r\n		<article clsss=\"post-block\">\r\n			<section class=\"post-content\">\r\n				Click the <i class=\"fa fa-bookmark\"></i> bookmark button to bookmark a post.\r\n			</section>\r\n		</article>	\r\n	</section>\r\n";
  }

  stack1 = helpers['if'].call(depth0, depth0, {hash:{},inverse:self.program(7, program7, data),fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n";
  return buffer;
  });

this["JST"]["home/my-discover"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var stack1, functionType="function", escapeExpression=this.escapeExpression, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\r\n	";
  stack1 = helpers.each.call(depth0, depth0, {hash:{},inverse:self.noop,fn:self.program(2, program2, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n";
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\r\n		<section class=\"contents-wrapper\">\r\n			<article clsss=\"post-block\">\r\n				<span class=\"post-title\"><a href=\"/@"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.author)),stack1 == null || stack1 === false ? stack1 : stack1.username)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "/";
  if (helper = helpers.slug) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.slug); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\">";
  if (helper = helpers.title) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.title); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</a></span>\r\n				<section class=\"post-content\">\r\n					";
  if (helper = helpers.excerpt) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.excerpt); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\r\n				</section>\r\n				<section class=\"post-footer\">\r\n					<div class=\"rounded\">\r\n						<div class=\"user-image\" style=\"background-image: url(/shared/img/";
  stack1 = helpers['if'].call(depth0, ((stack1 = (depth0 && depth0.author)),stack1 == null || stack1 === false ? stack1 : stack1.image), {hash:{},inverse:self.program(5, program5, data),fn:self.program(3, program3, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += ");\"></div>\r\n					</div>\r\n						<span class=\"author\"><a href=\"/@"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.author)),stack1 == null || stack1 === false ? stack1 : stack1.username)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "/\">"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.author)),stack1 == null || stack1 === false ? stack1 : stack1.name)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</a></span>\r\n						<span class=\"time\">"
    + escapeExpression((helper = helpers.date || (depth0 && depth0.date),options={hash:{
    'timeago': ("True")
  },data:data},helper ? helper.call(depth0, (depth0 && depth0.created_at), options) : helperMissing.call(depth0, "date", (depth0 && depth0.created_at), options)))
    + "</span>\r\n						<a href=\"#\" class=\"readtime\">";
  if (helper = helpers.time) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.time); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</a>\r\n				</section>\r\n			</article>	\r\n		</section>\r\n	";
  return buffer;
  }
function program3(depth0,data) {
  
  var stack1;
  return escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.author)),stack1 == null || stack1 === false ? stack1 : stack1.image)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1));
  }

function program5(depth0,data) {
  
  
  return "default.png";
  }

  stack1 = helpers['if'].call(depth0, depth0, {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { return stack1; }
  else { return ''; }
  });

this["JST"]["home/my-feed"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\r\n	";
  stack1 = helpers.each.call(depth0, depth0, {hash:{},inverse:self.noop,fn:self.program(2, program2, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n";
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\r\n		<section class=\"contents-wrapper\">\r\n			<article clsss=\"post-block\">\r\n				<span class=\"post-title\"><a href=\"/@"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.author)),stack1 == null || stack1 === false ? stack1 : stack1.username)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "/";
  if (helper = helpers.slug) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.slug); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\">";
  if (helper = helpers.title) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.title); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</a></span>\r\n				<section class=\"post-content\">\r\n					";
  if (helper = helpers.excerpt) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.excerpt); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\r\n				</section>\r\n				<section class=\"post-footer\">\r\n					<div class=\"rounded\">\r\n						<div class=\"user-image\" style=\"background-image: url(/shared/img/";
  stack1 = helpers['if'].call(depth0, ((stack1 = (depth0 && depth0.author)),stack1 == null || stack1 === false ? stack1 : stack1.image), {hash:{},inverse:self.program(5, program5, data),fn:self.program(3, program3, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += ");\"></div>\r\n					</div>\r\n						<span class=\"author\"><a href=\"/@"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.author)),stack1 == null || stack1 === false ? stack1 : stack1.username)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "/\">"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.author)),stack1 == null || stack1 === false ? stack1 : stack1.name)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</a></span>\r\n						<span class=\"time\">"
    + escapeExpression((helper = helpers.date || (depth0 && depth0.date),options={hash:{
    'timeago': ("True")
  },data:data},helper ? helper.call(depth0, (depth0 && depth0.created_at), options) : helperMissing.call(depth0, "date", (depth0 && depth0.created_at), options)))
    + "</span>\r\n						<a href=\"#";
  if (helper = helpers.id) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.id); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" class=\"readtime\">";
  if (helper = helpers.time) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.time); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</a>\r\n				</section>\r\n			</article>	\r\n		</section>\r\n\r\n	";
  return buffer;
  }
function program3(depth0,data) {
  
  var stack1;
  return escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.author)),stack1 == null || stack1 === false ? stack1 : stack1.image)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1));
  }

function program5(depth0,data) {
  
  
  return "default.png";
  }

function program7(depth0,data) {
  
  
  return "\r\n	<section class=\"contents-wrapper\">\r\n		<article clsss=\"post-block\">\r\n			<section class=\"post-content\">\r\n				Your feed is empty. Click the 'follow' button to follow a user.\r\n			</section>\r\n		</article>	\r\n	</section>\r\n";
  }

  stack1 = helpers['if'].call(depth0, depth0, {hash:{},inverse:self.program(7, program7, data),fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n";
  return buffer;
  });

this["JST"]["home/my-sidebar"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, functionType="function", self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\r\n	<section class=\"sidebar-block\">\r\n		<div class=\"rounded\"><span class=\"rank\">"
    + escapeExpression((helper = helpers.plus || (depth0 && depth0.plus),options={hash:{},data:data},helper ? helper.call(depth0, (data == null || data === false ? data : data.index), options) : helperMissing.call(depth0, "plus", (data == null || data === false ? data : data.index), options)))
    + "</span></div>\r\n		<span class=\"post-title\"><a href=\"/@"
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = (depth0 && depth0.posts)),stack1 == null || stack1 === false ? stack1 : stack1.author)),stack1 == null || stack1 === false ? stack1 : stack1.username)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "/"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.posts)),stack1 == null || stack1 === false ? stack1 : stack1.slug)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "/\">"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.posts)),stack1 == null || stack1 === false ? stack1 : stack1.title)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</a></span>\r\n		<span class=\"author\"><a href=\"/@"
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = (depth0 && depth0.posts)),stack1 == null || stack1 === false ? stack1 : stack1.author)),stack1 == null || stack1 === false ? stack1 : stack1.username)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "/\">"
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = (depth0 && depth0.posts)),stack1 == null || stack1 === false ? stack1 : stack1.author)),stack1 == null || stack1 === false ? stack1 : stack1.name)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</a></span>\r\n	</section>\r\n";
  return buffer;
  }

  stack1 = helpers.each.call(depth0, depth0, {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n";
  return buffer;
  });

this["JST"]["home/sidebar"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<aside class=\"sidebar-contents\">\r\n	<section class=\"sidebar-title\">\r\n		<label for=\"\">Top recommendations</label>\r\n	</section>\r\n\r\n<section class=\"sidebar-wrapper\">\r\n</aside>";
  });

this["JST"]["partial/drop-addto-collection"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\r\n				";
  stack1 = helpers.each.call(depth0, depth0, {hash:{},inverse:self.noop,fn:self.program(2, program2, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n			";
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\r\n					<option value=\"";
  if (helper = helpers.id) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.id); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\">";
  if (helper = helpers.title) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.title); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</option>\r\n				";
  return buffer;
  }

function program4(depth0,data) {
  
  
  return "\r\n					<option>Please create a collection</option>\r\n			";
  }

  buffer += "<div class=\"drop-title\">Add to collection</div>\r\n	<div class=\"drop-wrapper\">\r\n		<select class=\"collection\">\r\n			";
  stack1 = helpers['if'].call(depth0, depth0, {hash:{},inverse:self.program(4, program4, data),fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n		</select>\r\n		<button class=\"add-to\"><i class=\"fa fa-plus\"></i></button>\r\n</div>";
  return buffer;
  });

this["JST"]["partial/mobile-menu"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\r\n    <ul>\r\n        <li><a href=\"/@";
  if (helper = helpers.username) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.username); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\"><div class=\"rounded\"><div class=\"user-image\" style=\"background-image: url(";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.image), {hash:{},inverse:self.program(4, program4, data),fn:self.program(2, program2, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "); background-size: cover;\"></div></div>";
  if (helper = helpers.name) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.name); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "<p>Profile & Settings</p></a></li>\r\n        <li><a href=\"/\">Home</a></li>\r\n        <li><a href=\"/collection/\">Collections</a></li>\r\n        <li><a href=\"/profile/settings/\">Settings</a></li>\r\n        <li><a href=\"/logout/\">Sign Out</a></li>\r\n    </ul>\r\n    ";
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "/shared/img/";
  if (helper = helpers.image) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.image); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1);
  return buffer;
  }

function program4(depth0,data) {
  
  
  return "/shared/img/default.png";
  }

function program6(depth0,data) {
  
  
  return " \r\n    <ol>\r\n    	<li><a href=\"/\">Home</a></li>\r\n        <li><a href=\"/\" class=\"sign-in\">Sign up / Register</a></li>\r\n        <li><a href=\"/collection/\">Collections</a></li>\r\n    </ol>    \r\n    ";
  }

  buffer += "<div class=\"mobile-menu\">\r\n	";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.id), {hash:{},inverse:self.program(6, program6, data),fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n</div>";
  return buffer;
  });

this["JST"]["partial/nav-menu-buttons"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\r\n		<li class=\"button-collection\"><a href=\"/collection/\"><i class=\"fa fa-book\"></i></a></li>\r\n		<li class=\"button-collection\"><a href=\"/profile/settings/\"><i class=\"fa fa-cog \"></i></a></li>\r\n		<li class=\"button-profile\"><a href=\"/@";
  if (helper = helpers.username) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.username); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "/\" style=\"background-image: url(/shared/img/";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.image), {hash:{},inverse:self.program(4, program4, data),fn:self.program(2, program2, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += ");\"></a></li>\r\n		<li class=\"button-sign\"><a href=\"/logout/\">Logout</a></li>\r\n		";
  return buffer;
  }
function program2(depth0,data) {
  
  var stack1, helper;
  if (helper = helpers.image) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.image); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  return escapeExpression(stack1);
  }

function program4(depth0,data) {
  
  
  return "default.png";
  }

function program6(depth0,data) {
  
  
  return "\r\n		<li class=\"button-sign\"><a href=\"\" class=\"sign-in\">Sign in / Sign up</a></li>\r\n		";
  }

  buffer += "\r\n<nav class=\"nav-menu\">\r\n	<div class=\"home-icon\"><a href=\"/\">Publishing</a></div>\r\n	<div class=\"mobile-icon\"><a href=\"/\"><i class=\"fa fa-bars\"></i></a></div>\r\n	<nav class=\"nav-tabs\">\r\n		<ul class=\"nav-tabs-list\">\r\n			<li><a href=\"#\">home</a></li>\r\n			<li><a href=\"#discover\">discover</a></li>\r\n			<li><a href=\"#bookmarks\">bookmarks</a></li>\r\n		</ul>\r\n	</nav>\r\n	<ul class=\"nav-buttons\">\r\n		";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.id), {hash:{},inverse:self.program(6, program6, data),fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n	</ul>\r\n</nav>\r\n";
  return buffer;
  });

this["JST"]["partial/notification"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<section class=\"notification-holder\">\r\n    <section class=\"notification-wrapper\">\r\n        <section class=\"notification-contents\">\r\n            ";
  if (helper = helpers.message) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.message); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\r\n        </section>\r\n    </section>\r\n</section> ";
  return buffer;
  });

this["JST"]["partial/session-buttons"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\r\n    <li class=\"button-collection\"><a href=\"/collection/\"><i class=\"fa fa-book\"></i></a></li>\r\n	<li class=\"button-collection\"><a href=\"/profile/settings/\"><i class=\"fa fa-cog \"></i></a></li>\r\n    <li class=\"button-profile\"><a href=\"/@";
  if (helper = helpers.username) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.username); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "/\" style=\"background-image: url(/shared/img/";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.image), {hash:{},inverse:self.program(4, program4, data),fn:self.program(2, program2, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += ");\"></a></li>\r\n    <li class=\"button-sign\"><a href=\"/logout/\"class=\"back\">Logout</a></li>\r\n    ";
  return buffer;
  }
function program2(depth0,data) {
  
  var stack1, helper;
  if (helper = helpers.image) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.image); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  return escapeExpression(stack1);
  }

function program4(depth0,data) {
  
  
  return "default.png";
  }

function program6(depth0,data) {
  
  
  return "\r\n    <li class=\"button-home\"><a href=\"/\" class=\"back\">Back to home</a></li>\r\n    ";
  }

  buffer += "<ul class=\"session-buttons\">\r\n    ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.id), {hash:{},inverse:self.program(6, program6, data),fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n</ul>";
  return buffer;
  });

this["JST"]["post"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, functionType="function", escapeExpression=this.escapeExpression, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\r\n	<section class=\"comments-wrapper\">\r\n		<div class=\"rounded large\">\r\n			<div class=\"user-image\" style=\"background-image: url(/shared/img/";
  stack1 = helpers['if'].call(depth0, ((stack1 = (depth0 && depth0.author)),stack1 == null || stack1 === false ? stack1 : stack1.image), {hash:{},inverse:self.program(4, program4, data),fn:self.program(2, program2, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += ");\"></div>\r\n		</div>\r\n			<span class=\"author\"><a href=\"/@"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.author)),stack1 == null || stack1 === false ? stack1 : stack1.username)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "/\">"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.author)),stack1 == null || stack1 === false ? stack1 : stack1.name)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</a></span>\r\n			<span class=\"time\">"
    + escapeExpression((helper = helpers.date || (depth0 && depth0.date),options={hash:{
    'timeago': ("True")
  },data:data},helper ? helper.call(depth0, (depth0 && depth0.created_at), options) : helperMissing.call(depth0, "date", (depth0 && depth0.created_at), options)))
    + "</span>\r\n			<section class=\"comment-contents\">\r\n				";
  if (helper = helpers.html) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.html); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n			</section>\r\n	</section>\r\n	";
  return buffer;
  }
function program2(depth0,data) {
  
  var stack1;
  return escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.author)),stack1 == null || stack1 === false ? stack1 : stack1.image)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1));
  }

function program4(depth0,data) {
  
  
  return "default.png";
  }

  buffer += "<nav class=\"post-menu\">\r\n	<div class=\"home-icon\"><a href=\"/\" class=\"back\"><i class=\"fa fa-home\"></i></a></div>\r\n	<div class=\"mobile-icon\"><a href=\"/\"><i class=\"fa fa-bars\"></i></a></div>\r\n	<span class=\"post-author\"><a href=\"/@"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.author)),stack1 == null || stack1 === false ? stack1 : stack1.username)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "/\">"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.author)),stack1 == null || stack1 === false ? stack1 : stack1.name)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</a> on ";
  if (helper = helpers.date) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.date); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + " &centerdot;  ";
  if (helper = helpers.time) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.time); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</span>\r\n    <div class=\"post-buttons\">\r\n    </div>\r\n</nav>\r\n\r\n<section class=\"post-wrapper\">\r\n	<section class=\"post-contents\">	\r\n		<div class=\"post-title\">";
  if (helper = helpers.title) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.title); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</div>\r\n		<div class=\"post-content\">";
  if (helper = helpers.html) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.html); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</div>\r\n		<section class=\"post-footer-buttons\">\r\n			<ul class=\"footer-recommend\">\r\n			    <li class=\"button-recommend\"><a href=\"/\" class=\"recommend back\"><i class=\"fa fa-heart-o\"></i> Recommend</a></li>\r\n			</ul>	\r\n\r\n			<ul class=\"footer-buttons\">\r\n				<input type=\"hidden\" name=\"post_id\" value=";
  if (helper = helpers.id) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.id); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + ">\r\n				<li class=\"button-add right\"><a href=\"/\"><i class=\"fa fa-plus\"></i></a></li>\r\n				<div class=\"button-add-drop\">\r\n\r\n				</div>\r\n			    <li class=\"button-bookmark right\"><a href=\"#\" class=\"bookmark-add\"><i class=\"fa fa-bookmark\"></i></a></li>\r\n			</ul>		\r\n		</section>\r\n	</section>\r\n</section>\r\n\r\n<section class=\"comments-button\">\r\n	<span style=\"display: block; margin-bottom: 20px;\">Have thoughts to share?</span>\r\n	<button class=\"add-comment\"><a href=\"\" class=\"add-com\">Write your comment</a></button>\r\n</section>\r\n\r\n<section class=\"post-comments\">\r\n	<section class=\"section-title\">\r\n		<label for=\"\">Comments</label>	\r\n	</section>\r\n\r\n	";
  stack1 = helpers.each.call(depth0, (depth0 && depth0.comments), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n</section>	\r\n\r\n<div class=\"modal-wrapper\">\r\n	<a href=\"\" class=\"close\">close [x]</a>\r\n	<div class=\"login-form\">\r\n		<span class=\"title\">Write a comment</span>\r\n		<textarea placeholder=\"Write your comment\" autofocus></textarea>\r\n		<input type=\"submit\" class=\"login-submit\" value=\"Post\">\r\n	</div>\r\n</div>\r\n\r\n<aside class=\"mobile-menu-holder\">\r\n	\r\n</aside>";
  return buffer;
  });

this["JST"]["profile"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var stack1, helper;
  if (helper = helpers.image) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.image); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  return escapeExpression(stack1);
  }

function program3(depth0,data) {
  
  
  return "default.png";
  }

function program5(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\r\n		<div class=\"follow-block\">\r\n			<div class=\"rounded\">\r\n				<div class=\"user-image\" style=\"background-image: url(/shared/img/";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.image), {hash:{},inverse:self.program(3, program3, data),fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += ");\"></div>\r\n			</div>\r\n			<div class=\"name\"><a href=\"/@";
  if (helper = helpers.username) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.username); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "/\">";
  if (helper = helpers.name) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.name); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</a></div>\r\n			<div class=\"username\"><a href=\"/@";
  if (helper = helpers.username) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.username); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "/\">@";
  if (helper = helpers.username) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.username); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</a></div>\r\n			<div class=\"bio\">";
  if (helper = helpers.bio) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.bio); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</div>\r\n			\r\n		</div>\r\n	    ";
  return buffer;
  }

  buffer += "<nav class=\"collection-menu\">\r\n	<div class=\"home-icon\"><a href=\"/\" class=\"back\"><i class=\"fa fa-home\"></i></a></div>\r\n	<div class=\"mobile-icon\"><a href=\"/\"><i class=\"fa fa-bars\"></i></a></div>\r\n	<span class=\"collection-editor\">&nbsp;</span>\r\n    <div class=\"collection-buttons\">\r\n    </div>\r\n</nav>\r\n\r\n<section class=\"profile-wrapper\">\r\n	<div class=\"image-holder\">\r\n		<div class=\"user-image\" style=\"background-image:url(/shared/img/";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.image), {hash:{},inverse:self.program(3, program3, data),fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += ");\"></div>\r\n	</div>\r\n	<div class=\"user-name\">";
  if (helper = helpers.name) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.name); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</div>\r\n	<div class=\"user-bio\">";
  if (helper = helpers.bio) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.bio); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</div>\r\n	<ul class=\"user-meta\">\r\n		<li><a href=\"#\" class=\"following\"><span>following</span>"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.following)),stack1 == null || stack1 === false ? stack1 : stack1.length)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</a></li>\r\n		<li><a href=\"#\" class=\"follower\"><span>follower</span>"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.follower)),stack1 == null || stack1 === false ? stack1 : stack1.length)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</a></li>\r\n		<li><a href=\"http://twitter.com/laxxers\"><span>elsewhere</span><i class=\"fa fa-twitter\"></i></a></li>\r\n	</ul>\r\n\r\n	<section class=\"profile-follow-wrapper\">\r\n		<input type=\"hidden\" class=\"follow_id\" name=\"follow_id\" value=";
  if (helper = helpers.id) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.id); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + ">\r\n		<section class=\"profile-follow\">\r\n			\r\n		</section>\r\n	</section>\r\n</section>\r\n\r\n<div class=\"modal-wrapper following-modal\">\r\n	<a href=\"\" class=\"close\">close [x]</a>\r\n	<div class=\"following-wrapper\">\r\n\r\n		<div class=\"name-follow\">";
  if (helper = helpers.name) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.name); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + " follows</div>\r\n		";
  stack1 = helpers.each.call(depth0, (depth0 && depth0.following), {hash:{},inverse:self.noop,fn:self.program(5, program5, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n	</div>\r\n</div>\r\n\r\n<div class=\"modal-wrapper follower-modal\">\r\n	<a href=\"\" class=\"close\">close [x]</a>\r\n	<div class=\"following-wrapper\">\r\n\r\n		<div class=\"name-follow\">";
  if (helper = helpers.name) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.name); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + " is followed by</div>\r\n		";
  stack1 = helpers.each.call(depth0, (depth0 && depth0.follower), {hash:{},inverse:self.noop,fn:self.program(5, program5, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n	</div>\r\n</div>\r\n\r\n<section class=\"profile-contents\">\r\n</section>\r\n\r\n<aside class=\"mobile-menu-holder\">\r\n	\r\n</aside>\r\n\r\n";
  return buffer;
  });

this["JST"]["profile/profile-collection"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var stack1, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\r\n<section class=\"block-contents\">\r\n	<a href=\"\" class=\"label\">Collections</a>\r\n		<div class=\"collection-wrapper\">\r\n			";
  stack1 = helpers.each.call(depth0, depth0, {hash:{},inverse:self.noop,fn:self.program(2, program2, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n		</div>\r\n</section>	\r\n";
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\r\n			<div class=\"collection-block\">\r\n				<a href=\"/collection/";
  if (helper = helpers.slug) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.slug); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "/\" style=\"background-image: url(/shared/img/";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.cover), {hash:{},inverse:self.noop,fn:self.program(3, program3, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += ")\">\r\n					<div class=\"darker\">";
  if (helper = helpers.title) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.title); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</div>\r\n				</a>\r\n			</div>\r\n			";
  return buffer;
  }
function program3(depth0,data) {
  
  var stack1, helper;
  if (helper = helpers.cover) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.cover); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  return escapeExpression(stack1);
  }

  stack1 = helpers['if'].call(depth0, depth0, {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { return stack1; }
  else { return ''; }
  });

this["JST"]["profile/profile-follow"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<button class=\"button-follow\">Follow</button>";
  });

this["JST"]["profile/profile-following"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<button class=\"button-unfollow\">Following</button>";
  });

this["JST"]["profile/profile-latest"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\r\n\r\n<section class=\"block-contents\">\r\n	<a href=\"\" class=\"label\">Latest</a>\r\n	";
  stack1 = helpers.each.call(depth0, depth0, {hash:{},inverse:self.noop,fn:self.program(2, program2, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n</section>	\r\n";
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\r\n	<section class=\"post-wrapper\">\r\n		<article clsss=\"post-block\">\r\n			<span class=\"post-title\"><a href=\"/@"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.author)),stack1 == null || stack1 === false ? stack1 : stack1.username)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "/";
  if (helper = helpers.slug) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.slug); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\">";
  if (helper = helpers.title) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.title); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</a></span>\r\n			<section class=\"post-content\">\r\n				";
  if (helper = helpers.excerpt) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.excerpt); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\r\n			</section>\r\n			<section class=\"post-footer\">\r\n				<span class=\"author\"><a href=\"/@"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.author)),stack1 == null || stack1 === false ? stack1 : stack1.username)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "/\">"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.author)),stack1 == null || stack1 === false ? stack1 : stack1.name)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</a></span>\r\n				<a href=\"#\" class=\"readtime\">";
  if (helper = helpers.time) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.time); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</a>\r\n			</section>\r\n		</article>	\r\n	</section>\r\n	";
  return buffer;
  }

function program4(depth0,data) {
  
  
  return "\r\n<div class=\"nothing\">\r\n	<p>Hasn’t written any stories yet..</p>\r\n</div>\r\n\r\n";
  }

  stack1 = helpers['if'].call(depth0, depth0, {hash:{},inverse:self.program(4, program4, data),fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n<section class=\"profile-collection\">\r\n	\r\n</section>";
  return buffer;
  });

this["JST"]["settings"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<nav class=\"collection-menu\">\r\n	<div class=\"home-icon\"><a href=\"/\" class=\"back\"><i class=\"fa fa-home\"></i></a></div>\r\n	<div class=\"mobile-icon\"><a href=\"/\"><i class=\"fa fa-bars\"></i></a></div>\r\n	<span class=\"collection-editor\">&nbsp;</span>\r\n    <div class=\"collection-buttons\">\r\n    </div>\r\n</nav>\r\n<section class=\"profile-wrapper\">\r\n	<div class=\"user-name\">Settings</div>\r\n	<div class=\"user-bio\">Change or update your settings</div>\r\n</section>\r\n\r\n<section class=\"settings-wrapper\">\r\n	<div class=\"settings-block\">\r\n		<label for=\"\">Your Name</label>\r\n		<button class=\"first\">Edit</button>\r\n		<input type=\"text\" class=\"settings\" name=\"name\" value=\"";
  if (helper = helpers.name) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.name); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\">\r\n		<p>You are advised to use your real name so that people recognize you.</p>\r\n	</div>\r\n	<div class=\"settings-block\">\r\n		<label for=\"\">Your Email Address</label>\r\n		<button class=\"second\">Edit</button>\r\n		<input type=\"email\" class=\"settings\" name=\"email\" value=\"";
  if (helper = helpers.email) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.email); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\">\r\n		<p>Your email address will be used to login into your account.</p>\r\n	</div>\r\n	<div class=\"settings-block\">\r\n		<label for=\"\">Your self-summary</label>\r\n		<button class=\"third\">Edit</button>\r\n		<input type=\"text\" class=\"settings\" name=\"bio\" value=\"";
  if (helper = helpers.bio) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.bio); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" placeholder=\"Write yourself a biography..\">\r\n		<p>Briefly describe yourself in less than 120 words.</p>\r\n	</div>\r\n	<div class=\"settings-block\">\r\n	<button class=\"update\">Save & Update Settings</button>\r\n	</div>	\r\n</section>\r\n\r\n<aside class=\"mobile-menu-holder\">\r\n	\r\n</aside>";
  return buffer;
  });

this["JST"]["signup"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<div class=\"signup-form\">\r\n	<span class=\"title\">Sign up</span>\r\n	<form method=\"post\">\r\n		<input type=\"text\" class=\"login-name\" name=\"name\" placeholder=\"Name\" autocapitalize=\"off\" autocomplete=\"off\" spellcheck=\"false\" required autofocus>\r\n		<input type=\"text\" class=\"login-username\" name=\"username\" placeholder=\"Username\" autocapitalize=\"off\" autocomplete=\"off\" spellcheck=\"false\" required>\r\n		<input type=\"email\" class=\"login-mail\" name=\"email\" placeholder=\"Email\" autocapitalize=\"off\" autocomplete=\"off\" spellcheck=\"false\" required>\r\n		<input type=\"password\" class=\"login-password\" name=\"password\" placeholder=\"Password\" required>\r\n		<input type=\"submit\" class=\"login-submit\" value=\"Sign Up\">\r\n	</form>\r\n</div>";
  });