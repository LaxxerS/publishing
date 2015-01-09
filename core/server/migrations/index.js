var knex 	 = require('../models/base').knex,
	User 	 = require('../models/user').User,
	Follower = require('../models/follower').Follower,
	Post = require('../models/post').Post,
	Collection = require('../models/collection').Collection,
	CollectionPost= require('../models/collection-post').CollectionPost,
	Bookmark = require('../models/bookmark').Bookmark,
	Recommend = require('../models/recommend').Recommend,
	Comment = require('../models/comment').Comment,

	user_1,
	user_2,
	follow,
	init;


user_1 = {
	"name": "Chong Zhi Rui",
	"username": "laxxers",
	"password": "abc123laxx",
	"email": "laxxers@gmail.com",
	"image": "profile.JPG"
}

user_2 = {
	"name": "Bessie J. Robinson",
	"username": "bessie",
	"password": "abc123laxx",
	"email": "bessie@gmail.com"
}

user_3 = {
	"name": "Cindy J. Horton",
	"username": "cindy",
	"password": "abc123laxx",
	"email": "cindy@gmail.com"
}


post_1 = {
	"title":            "On Shrimp Farms and Struggle Rap",
	"markdown":         "In 1980, a future music executive named Lyor Cohen tried to start his own shrimp-farming business in Ecuador, and failed miserably. Nearly 40 years later, the music industry is now about as lucrative as Lyor Cohen’s shrimp farm. Forbes published a report which revealed that 2014 is poised to become the first year in which no album has sold more than a million copies. This might be happening because almost a decade ago, the music industry suffered the business equivalent of a brain aneurysm, and has been struggling to maintain the will to live ever since. It must’ve been around the time Soulja Boy released “Crank That (Soulja Boy)” in 2007 when music labels successfully identified the lowest common denominator in music. If they could somehow make money from a non-sensical song that had literally $0.00 in production costs, courtesy of the free software demo of FL Studio, and it could become the first song ever in U.S. history to sell 3 million digital copies, there was basically no lower limit to shitty music’s future success. Put another way, a musician’s success was no longer determined by artistic merit, but rather by widespread access to an oeuvre bordering on self-parody. Some people are quick to blame technology for this paradigm shift. It used to be, you had to go to the brick-and-mortar store and physically buy your music on vinyl, then cassette, then CDs. No doubt there was plenty of shitty music back then too, but major labels weren’t going to spend a lot of money on artists who couldn’t make selling hundreds of thousands of units in stores a 'sure thing. 'It was more likely for shittier music acts to be relegated to smaller, local independent labels around their hometown, and they might put out a couple of 7' records before going back to pushing a mop around at Safeway.",
	"image":            null,
	"status":           "published",
	"author_id": 1
}

post_2 = {
	"title": "Is it time to step up to a full service VPS hosting option?",
	"markdown": "For anybody who is fed up with the inadequate overall performance of their shared web server but not yet in a position to step up to a costly dedicated server than the most suitable option available for you would be a Virtual Private Server (VPS). The two main forms of VPS solutions are managed and unmanaged VPS services. Managed VPS hosting services are similar in a lot of ways to hosting that is shared. You'll receive skilled pros who will take care of any issues with your hosting server which could develop. Managed VPS hosting servers are the most useful way to go if you're not very tech savvy or do not have the employees available to take care of any technical concerns that will arise with the hosting. You may also decide on Managed hosting if you're a business owner who just desires to focus on operating their business rather than concern yourself with if your server is functioning so that your clients can reach and use it. You can sleep well at night knowing your website is in safe hands. Most good Managed VPS hosting providers will ensure you get 24/7 support that should quickly try to deal with any complications with your hosting server or if you would like to add new email accounts or domains to the server. It is possible to usually put in a simple request and this will be taken good care of. A great company is Tecsys who make available both virtual offices in India among their services. Unmanaged VPS hosting services will mean that you happen to be accountable for caring for your Windows or Linux server. Unmanaged servers tend to be made use of by businesses that either have proprietors that are technically very knowledge and can fix any problems that may crop up or they hire staff who are able to handle the problems on behalf of the company. Although unmanaged VPS hosting is frequently less than managed hosting simply because you are not paying for the technical support nevertheless, you have to make sure you'll be able to take care of any technical issues that happen or you might find yourself with no functioning internet site for hours on end or even days which ultimately means that you end up paying much more in lost business than it would should you have had used a managed VPS hosting account. If you're willing to take your online business to a higher level then you certainly should consider upgrading from a shared server to a VPS hosting account that you either are comfortable taking care of yourself or opt to have a great hosting company manage it for you.",
	"image": null,
	"status":           "published",
	"author_id": 2
}

post_3 = {
	"title": "Why Digital Photographers Need Color Management",
	"markdown": "Why do your digital photos look different on every screen and in every print? This article explains how digital colour is defined and how color management tools link the digital numbers to human vision so that you can see, edit and print digital color images reliably and accurately. Digital technology offers a combination of creative flexibility and productivity that photographers of previous generations could only dream of. By allowing duplication without loss of quality, instant viewing and endless experimentation at minimal cost, digital imaging beats its analogue predecessors hands-down. But digital imaging, and more specifically, digital color, bring its own problems. Instead of the master transparency that was the definitive version of an image, you now have an endless range of interpretations, with each screen or print showing you something different - what you saw on your camera isn't quite the same as what's on your computer screen and neither of them match the print. And possibly none of them are right. Color management is the technology that solves this, allowing you to see your images reproduced faithfully on screen, providing the means to make editing decisions based on reliable display, as well as previewing and making printed output in a predictable way. Display calibration and profiling is one of the most important parts of color management and is one of the easiest and cheapest to do. It is also especially easy to keep your screen up to spec now that relatively stable LCD flat panel displays have largely replaced the older and more variable CRT types, which required calibration every seven days or so and sometimes daily or even more often in critical applications. However, if you do still have a CRT monitor you certainly can calibrate and profile it and get excellent results, but you may have to carry out the process more frequently. Whether you use Windows (XP onwards) or Mac OSX, you can use custom-made display profiles to ensure accurate display with image editing and Raw processing applications such as Adobe Photoshop, Adobe Lightroom, Phase One's Capture One, Aperture from Apple and DxO Optics Pro. So why do displays and prints look different? Digital image files are normally made up of pixels with numerical values which by themselves have no reference to the 'real' colors that we see. What's more, digital devices are all different: each output device (display or printer/press) will need different numerical values to display or print the same final color, and image capture devices such as digital cameras or scanners yield different numbers in response to the same original color.Without a mechanism to give unequivocal meaning to these pixel values, any display or printing of an image will rely upon assumptions in software as to the actual colors intended. These default settings often aren't too bad but if you're reading this, you've probably already found out that they're not good enough. To define an unambiguous color and tonal value for each image pixel, the numbers in your files need to be referenced against 'real' color values that are related to human vision rather than to specific items of hardware. The Lab* colour model provides this 'absolute' description of color and tonal values, based on experiments into human vision. It describes colors using three components: L (luminance, roughly the same as brightness, from deepest black to brightest white), a (a green-to-red scale) and b (yellow-to-blue). The * ('star') denotes a mathematical transformation of these values but is frequently omitted in non-scientific discussions and the term 'Lab' color is used to mean the same thing. An ICC profile provides the link between the numbers in your files to the 'real' Lab* colors that people see and it is used in the ICC (International Color Consortium) profile specification. Once referenced against Lab* via the profile, the pixels' colors can then be calculated for accurate display on a calibrated display. ICC profiles can also describe the color behaviour of digital cameras or scanners, working color spaces such as sRGB or Adobe RGB (1998), or the characteristics of a press or an inkjet printer. Display profiles are created by dedicated color management tools that comprise a measuring instrument (usually a colorimeter, but in display and printer profiling offerings, a spectrophotometer) and supporting software. There are choices at a wide range of price points, with accuracy and detailed control and functionality increasing with price. Color management software built into the Windows and Macintosh operating systems is used by professional quality image editing software to read these profiles and use the information within them to convert color for editing, display and print.Together, these will give you a solid basis for achieving and maintaining accurate color. You will be able properly to see what you've shotScience Articles, exactly how your edits will affect it and what it will look like when it's printed. This brings the promise of digital imaging to full fruition.",
	"image": null,
	"status":           "published",
	"author_id": 3
}


collection_1 = {
	"title": "My Collection",
	"description": "My test collection",
	"editor_id" : 1
}

comment_1 = {
	"markdown": "My comment",
	"post_id": 1,
	"user_id" : 1
}



function PopulateUsers(user) {
	return User.add(user).then(function(user) {
		console.log("userdone");
	});
}

function PopulatePost(post) {
	return Post.add(post).then(function() {
		console.log("postdone");
	});
}

function PopulateCollection(collection) {
	return Collection.add(collection).then(function() {
		console.log("collectiondone");
	})
}

function PopulateBookmark(bookmark) {
	return Bookmark.add(bookmark).then(function() {
		console.log("bookmarkdone");
	})	
}

function PopulateComment(comment) {
	return Comment.add(comment).then(function() {
		console.log("commentdone");
	})	
}

init = function() {

	knex.schema.hasTable('users').then(function(exists) {
		if(!exists) {
			return knex.schema.createTable('users', function(t) {
				t.increments('id').primary();
				t.string('uuid', 36);
				t.string('name', 150).unique();
				t.string('username', 150).unique();
				t.string('password', 1000);
				t.string('email', 254).unique();
				t.text('image', 2000).nullable();
				t.text('cover', 2000).nullable();
				t.string('bio', 250).nullable();
				t.string('status').defaultTo('active');
				t.dateTime('last_login').nullable();
				t.timestamps();
			}).then(function() {
				return PopulateUsers(user_1);
			}).then(function() {
				return PopulateUsers(user_2);
			}).then(function() {
				return PopulateUsers(user_3);
			})
		}
	});

	knex.schema.hasTable('posts').then(function(exists) {
		if (!exists) {
			return knex.schema.createTable('posts', function(t) {
				t.increments('id').primary();
				t.string('uuid', 36);
				t.string('title', 150);
				t.string('slug', 150);
				t.text('markdown', 16777215);
				t.text('html', 16777215);
				t.string('time', 150);
				t.text('image', 2000).nullable();
				t.string('status', 150);
				t.integer('author_id');
				t.timestamps(); 
			}).then(function() {
				return PopulatePost(post_1);
			}).then(function() {
				return PopulatePost(post_2);
			}).then(function() {
				return PopulatePost(post_3);
			});
		}
	});

	knex.schema.hasTable('users_users').then(function(exists) {
		if(!exists) {
			return knex.schema.createTable('users_users', function(t) {
				t.increments('id').primary();
				t.string('uuid', 36);
				t.integer('follower_id').notNullable().references('id').inTable('users');
				t.integer('following_id').notNullable().references('id').inTable('users');
				t.timestamps();
			}).then(function() {
				console.log("user_user done")
			});
		}
	});

	knex.schema.hasTable('collections').then(function(exists) {
		if(!exists) {
			return knex.schema.createTable('collections', function(t) {
				t.increments('id').primary();
				t.string('uuid', 36);
				t.string('title', 150);
				t.string('slug', 150);
				t.string('description', 150);
				t.string('cover', 150);
				t.integer('editor_id');
				t.timestamps(); 
			}).then(function() {
				return PopulateCollection(collection_1);
			});
		}
	});

	knex.schema.hasTable('collections_posts').then(function(exists) {
		if(!exists) {
			return knex.schema.createTable('collections_posts', function(t) {
				t.increments('id').primary();
				t.string('uuid', 36);
				t.integer('collection_id').notNullable().references('id').inTable('collections');
				t.integer('post_id').notNullable().references('id').inTable('posts');
				t.timestamps();
			}).then(function() {
				console.log("collections_posts done");
			})
		}
	});

	knex.schema.hasTable('bookmarks').then(function(exists) {
		if(!exists) {
			return knex.schema.createTable('bookmarks', function(t) {
				t.increments('id').primary();
				t.string('uuid', 36);
				t.integer('owner_id');
				t.integer('post_id');
				t.timestamps();
			}).then(function() {
				console.log("bookmarks done");
			})
		}
	});

	knex.schema.hasTable('recommends').then(function(exists) {
		if(!exists) {
			return knex.schema.createTable('recommends', function(t) {
				t.increments('id').primary();
				t.string('uuid', 36);
				t.integer('owner_id');
				t.integer('post_id');
				t.timestamps();
			}).then(function() {
				console.log("recommends done");
			})
		}
	});

	knex.schema.hasTable('comments').then(function(exists) {
		if(!exists) {
			return knex.schema.createTable('comments', function(t) {
				t.increments('id').primary();
				t.string('uuid', 36);
				t.integer('post_id');
				t.integer('user_id');
				t.text('markdown', 16777215);
				t.text('html', 16777215);
				t.timestamps();
			}).then(function() {
				console.log("comments done");
			}).then(function() {
				PopulateComment(comment_1);
			})
		}
	});
};

module.exports = {
	init: init
}