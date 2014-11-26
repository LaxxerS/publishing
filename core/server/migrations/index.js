var knex 	= require('../models/base').knex,
	User 	= require('../models/user').User,

	user,
	init;


user = {
	"name": "Chong Zhi Rui",
	"password": "abc123laxx",
	"email": "laxxers@gmail.com"

}

function PopulateUsers() {
	return User.add(user).then(function(user) {
		console.log("userdone");
	});
}

init = function() {

	knex.schema.hasTable('users').then(function(exists) {
		if(!exists) {
			return knex.schema.createTable('users', function(t) {
				t.increments('id').primary();
				t.string('uuid', 36);
				t.string('name', 150).unique();
				t.string('password', 1000);
				t.string('email', 254).unique();
				t.text('image', 2000).nullable();
				t.text('cover', 2000).nullable();
				t.string('bio', 250).nullable();
				t.string('status').defaultTo('active');
				t.dateTime('last_login').nullable();
				t.timestamps();
			}).then(function() {
				return PopulateUsers();
			})
		}
	});

};

module.exports = {
	init: init
}