this["JST"] = this["JST"] || {};

this["JST"]["home"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<header class=\"navbar\">\r\n	<nav class=\"nav-menu\">\r\n		<a href=\"/\">Publishing &mdash; &hearts;</a>\r\n		<ul class=\"nav-buttons\">\r\n			<li><a href=\"/@laxxers/\" style=\"background-image: url(/shared/img/profile.jpg);\"></a></li>\r\n			<li><a href=\"\"></a></li>\r\n			<li><a href=\"\"></a></li>\r\n		</ul>\r\n	</nav>\r\n</header>\r\n\r\n<nav class=\"nav-tabs\">\r\n	<ul class=\"nav-tabs-list\">\r\n		<li><a href=\"#\">home</a></li>\r\n		<li><a href=\"#top-stories\">top stories</a></li>\r\n		<li><a href=\"#bookmarks\">bookmarks</a></li>\r\n	</ul>\r\n</nav>\r\n\r\n<section class=\"main-contents\">\r\n\r\n</section>\r\n\r\n<aside class=\"sidebar\">\r\n	\r\n</aside>";
  });

this["JST"]["home/bookmarks"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<section class=\"contents-wrapper\">\r\n	<article clsss=\"post-block\">\r\n		<span class=\"post-title\"><a href=\"#\">This Is A Bookmarked Post</a></span>\r\n		<section class=\"post-content\">\r\n			\"I'm not advocating happy endings; I'm advocating well-built stories.\"\r\n		</section>\r\n		<section class=\"post-footer\">\r\n			<div class=\"rounded\">\r\n				<div class=\"user-image\" style=\"background-image: url(/shared/img/profile.jpg);\"></div>\r\n			</div>\r\n				<span class=\"author\"><a href=\"/@laxxers/\">Chong Zhi Rui</a></span>\r\n				<span class=\"time\">1d ago</span>\r\n				<a href=\"#\" class=\"readtime\">9 min read</a>\r\n		</section>\r\n	</article>	\r\n</section>\r\n";
  });

this["JST"]["home/feed"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<section class=\"contents-wrapper\">\r\n	<article clsss=\"post-block\">\r\n		<span class=\"recommend\"><a href=\"#\">\"Interesting post!\" &mdash; Staff</a></span>\r\n		<span class=\"post-title\"><a href=\"/@laxxers/this-is-how-you-write-a-memoir\">This Is How You Write a Memoir</a></span>\r\n		<section class=\"post-content\">\r\n			\"I'm not advocating happy endings; I'm advocating well-built stories.\"\r\n		</section>\r\n		<section class=\"post-footer\">\r\n			<div class=\"rounded\">\r\n				<div class=\"user-image\" style=\"background-image: url(/shared/img/profile.jpg);\"></div>\r\n			</div>\r\n				<span class=\"author\"><a href=\"/@laxxers/\">Chong Zhi Rui</a></span>\r\n				<span class=\"time\">1d ago</span>\r\n				<a href=\"#\" class=\"readtime\">9 min read</a>\r\n		</section>\r\n	</article>	\r\n</section>\r\n\r\n<section class=\"contents-wrapper\">\r\n	<article clsss=\"post-block\">\r\n		<span class=\"recommend\"><a href=\"#\">\"Highly recommended!\" &mdash; Staff</a></span>\r\n		<span class=\"post-title\"><a href=\"#\">A Portrait of the Artist\r\nas a Young Gamer</a></span>\r\n		<section class=\"post-content\">\r\n			\"We asked eight artists to illustrate the video-game obsessions of their childhoods—from The Legend of Zelda to Minesweeper to Final Fantasy.\"\r\n		</section>\r\n		<section class=\"post-footer\">\r\n			<div class=\"rounded\">\r\n				<div class=\"user-image\" style=\"background-image: url(/shared/img/profile.jpg);\"></div>\r\n			</div>\r\n				<span class=\"author\"><a href=\"/@laxxers/\">Chong Zhi Rui</a></span>\r\n				<span class=\"time\">1d ago</span>\r\n				<a href=\"#\" class=\"readtime\">9 min read</a>\r\n		</section>\r\n	</article>	\r\n</section>\r\n";
  });

this["JST"]["home/sidebar"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<aside class=\"sidebar-contents\">\r\n	<section class=\"sidebar-title\">\r\n		<label for=\"\">Recommended for you</label>\r\n	</section>\r\n</aside>";
  });

this["JST"]["home/top-stories"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<section class=\"contents-wrapper\">\r\n	<article clsss=\"post-block\">\r\n		<span class=\"post-title\"><a href=\"#\">This Is How You Write a Memoir</a></span>\r\n		<section class=\"post-content\">\r\n			\"I'm not advocating happy endings; I'm advocating well-built stories.\"\r\n		</section>\r\n		<section class=\"post-footer\">\r\n			<div class=\"rounded\">\r\n				<div class=\"user-image\" style=\"background-image: url(/shared/img/profile.jpg);\"></div>\r\n			</div>\r\n				<span class=\"author\"><a href=\"/@laxxers/\">Chong Zhi Rui</a></span>\r\n				<span class=\"time\">1d ago</span>\r\n				<a href=\"#\" class=\"readtime\">9 min read</a>\r\n		</section>\r\n	</article>	\r\n</section>\r\n";
  });

this["JST"]["post"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<header class=\"navbar\">\r\n	<nav class=\"nav-menu\">\r\n		<a href=\"/\">Publishing &mdash; &hearts;</a>\r\n		<ul class=\"nav-buttons\">\r\n			<li><a href=\"/@laxxers/\" style=\"background-image: url(/shared/img/profile.jpg);\"></a></li>\r\n			<li><a href=\"\"></a></li>\r\n			<li><a href=\"\"></a></li>\r\n		</ul>\r\n	</nav>\r\n</header>\r\n\r\n<p>Not to be too Tale of Two Cities about it, but I find writing a memoir easier than writing fiction, and more difficult.\r\n\r\nWhy is it easier? You don’t have to make stuff up, which is hard work. You don’t have to run your characters/plot/milieu/ending through a stress test that’ll determine whether it makes sense. That is to say, of course it makes sense. It happened to you.\r\n\r\nWhat makes writing a memoir difficult is harder to quantify. Is it learning to know when you’re ready to talk about something? Is it seeing the structure in a lumpen mass of fact? Is it finding out what you were really like, as other people saw you? Yes, to each.\r\n\r\nThere are ways to make it all easier.\r\n\r\n“Don’t write to settle scores, or to prove something in some debate.”\r\nBe truthful. Don’t write to settle scores, or to prove something in some debate. In the worst memoirs, you can feel the author justifying himself — forgiving himself — in every paragraph. In the best memoirs, the author is tougher on his or herself than his or her readers will ever be.\r\n\r\nHow do you shed the self-protection that, like a warranty, comes home with us all once we leave the new-baby ward?\r\n\r\nWell, the details of your story will be perspective-wreckingly close; you’ll have to develop a plan to increase that distance. Here’s what I suggest: Change your narrator from “I” to “he” or “she.” Write the whole thing in third person, and then — after typing your final period — do a word-replace to get yourself back in there. You’ll be amazed at how freeing that is.\r\n\r\nTry to think of the story as a novel. I don’t mean that you should feel free to invent stuff. I’m very strict in my belief that non-fiction should be truthful and fiction is for invented narratives.\r\n\r\nDon’t forget that you have a story to tell. Biopics are bad when they suggest every story begins at birth and ends at death. This is not necessarily the case. Some people’s best stories might happen over the span of a year, an hour, a decade. Decide.\r\n\r\n“Biopics are bad when they suggest every story begins at birth and ends at death.”\r\nNovelist and screenwriter Helen Schulman teaches to ask of your story a version of what Jews ask on the Passover holiday: Why is this day different from all other days? In other words, what makes one day story-worthy, and one day not? Spielberg’s Lincoln is a good biopic because it dramatizes a specific, narratively shapely episode in Abe Lincoln’s life and sets out to tell just that story.\r\n\r\nBack to your memoir. Think: What is the conflict here? What does my character (e.g., you) want? What is this character’s desire? Does the character get what s/he wants in the end? How do I get the character to the end of the story in the most artful, satisfying way? I’m not advocating happy endings; I’m advocating well-built stories.</p>";
  });

this["JST"]["profile"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<header class=\"navbar\">\r\n	<nav class=\"nav-menu\">\r\n		<a href=\"/\">Publishing &mdash; &hearts;</a>\r\n		<ul class=\"nav-buttons\">\r\n			<li><a href=\"/@laxxers/\" style=\"background-image: url(/shared/img/profile.jpg);\"></a></li>\r\n			<li><a href=\"\"></a></li>\r\n			<li><a href=\"\"></a></li>\r\n		</ul>\r\n	</nav>\r\n</header>\r\n\r\n<section class=\"profile-wrapper\">\r\n	<div class=\"image-holder\">\r\n		<div class=\"user-image\" style=\"background-image: url(/shared/img/profile.jpg);\"></div>\r\n	</div>\r\n	<div class=\"user-name\">Chong Zhi Rui</div>\r\n	<div class=\"user-bio\">Final year CS student; Programmer; Photographer;</div>\r\n	<ul class=\"user-meta\">\r\n		<li><a href=\"#\"><span>following</span>20</a></li>\r\n		<li><a href=\"#\"><span>follower</span>0</a></li>\r\n		<li><a href=\"http://twitter.com/laxxers\"><span>elsewhere</span><i class=\"fa fa-twitter\"></i></a></li>\r\n	</ul>\r\n</section>\r\n\r\n<section class=\"profile-contents\">\r\n	<a href=\"\" class=\"recommended\">Most Recommended</a>\r\n	\r\n</section>";
  });