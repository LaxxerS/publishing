var frontend = require('../controllers/frontend');

module.exports = function(server, passport) {
	server.post('/login/', frontend.doSignin);
	server.get('*', frontend.homepage);
}
