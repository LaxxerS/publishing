var api = require('../api');
	
module.exports = function(server) {
    // ## User
    server.get('/admin/api/v0.1/users/', api.requestHandler(api.users.browse));
    server.get('/admin/api/v0.1/users/:username/', api.requestHandler(api.users.read));
    server.put('/admin/api/v0.1/users/:username/', api.requestHandler(api.users.edit));
}
