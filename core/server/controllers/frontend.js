var api    = require('../api'),
   	
   	sessionCache,
    frontendControllers;


frontendControllers = {
	homepage: function(req, res) {
			console.log(sessionCache);
			if(sessionCache) {
				res.render('default', { session: sessionCache });
			} else {
				res.render('default', {});
			}
			
		},

	signin: function(req, res) {
		res.render('login', {error: req.flash('error'), hideNavbar: true});
	},

	doSignin: function(req, res) {
		api.users.check({email: req.body.email, password: req.body.password}).then(function(user) {
			req.session.regenerate(function(error) {
				if(!error) {
					req.session.user = user.id;
					return api.users.read({id: req.session.user}).then(function(user) {
						sessionCache = user;
						res.redirect(301, '/');
					});
					
				}
			});
		}, function(error) {
			req.flash('error', error.message);
			res.redirect('/signin/');
		});
	},

	getSession: function(req, res) {
		var session = sessionCache;
		if(sessionCache) {
			res.json(sessionCache);
		} else {
			res.json({});
		}
	}
}

module.exports = frontendControllers;
module.exports.sessionCache = sessionCache;