var frontend = require('../controllers/frontend');

module.exports = function(server) {
	// ## Login & Session
	// Implemented here due to the exposure of res and req
	server.post('/login/', frontend.doSignin);
	server.get('/admin/api/v0.1/session/', frontend.getSession);
	server.post('/admin/upload/', frontend.upload);
	server.get('*', frontend.homepage);
}
