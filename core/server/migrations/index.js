var knex 	 = require('../models/base').knex,
	User 	 = require('../models/user').User,
	Follower = require('../models/follower').Follower,

	user_1,
	user_2,
	follow,
	init;


user_1 = {
	"name": "Chong Zhi Rui",
	"username": "laxxers",
	"password": "abc123laxx",
	"email": "laxxers@gmail.com"
}

user_2 = {
	"name": "Leong Shu Hwa",
	"username": "nicole",
	"password": "luckypig",
	"email": "nicole@gmail.com"
}

follow = {
	"follower": 1,
	"following": 2
}

function PopulateUsers(user) {
	return User.add(user).then(function(user) {
		console.log("userdone");
	});
}

function PopulateFollower(follow) {
	return Follower.add(follow).then(function() {
		console.log("followdone");
	});
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
			})
		}
	});

	knex.schema.hasTable('followers').then(function(exists) {
		if(!exists) {
			return knex.schema.createTable('followers', function(t) {
				t.integer('follower').primary();
				t.integer('following');
				t.timestamps();
			}).then(function() {
				return PopulateFollower(follow);
			})
		}
	});
};

module.exports = {
	init: init
}