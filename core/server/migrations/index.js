var knex 	       = require('../models/base').knex,
	User 	       = require('../models/user').User,
	Follower       = require('../models/follower').Follower,
	Post           = require('../models/post').Post,
	Collection     = require('../models/collection').Collection,
	CollectionPost = require('../models/collection-post').CollectionPost,
	Bookmark       = require('../models/bookmark').Bookmark,
	Recommend      = require('../models/recommend').Recommend,
	Comment        = require('../models/comment').Comment;

init = function() {
	knex.schema.hasTable('users').then(function(exists) {
		if(!exists) {
			console.log('\nMigrations: Database initialise...');
			console.log('Migrations: Creating tables...');
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
				console.log('Migrations: Creating table: users');
			});
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
				console.log('Migrations: Creating table: posts');
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
				console.log('Migrations: Creating table: users_users');
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
				console.log('Migrations: Creating table: collections');
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
				console.log('Migrations: Creating table: collections_posts');
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
				console.log('Migrations: Creating table: bookmarks');
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
				console.log('Migrations: Creating table: recommends');
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
				console.log('Migrations: Creating table: comments');
				console.log('Migrations: Complete');
			});
		}
	});
};

module.exports = {
	init: init
}