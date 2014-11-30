var frontendControllers;


frontendControllers = {
	homepage: function(req, res) {
			res.send('index');
		},

	profile: function(req, res) {
			res.send('profile');
	}
}

module.exports = frontendControllers;