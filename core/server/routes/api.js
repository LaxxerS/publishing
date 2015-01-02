var api = require('../api');
	
module.exports = function(server) {
    // ## User
    server.get('/admin/api/v0.1/users/', api.requestHandler(api.users.browse));
    server.get('/admin/api/v0.1/users/:username/', api.requestHandler(api.users.read));
    server.put('/admin/api/v0.1/users/:username/', api.requestHandler(api.users.edit));

    // ## Post
    server.get('/admin/api/v0.1/posts/:username/', api.requestHandler(api.posts.browse));
    server.get('/admin/api/v0.1/posts/:username/:slug/', api.requestHandler(api.posts.read));

    // ## Follower
    server.get('/admin/api/v0.1/followers/:follower_id/:following_id/', api.requestHandler(api.followers.read));
    server.post('/admin/api/v0.1/followers/', api.requestHandler(api.followers.add));
    server.delete('/admin/api/v0.1/followers/:id/', api.requestHandler(api.followers.destroy));

    // ## Collection
    server.get('/admin/api/v0.1/collections/all/:username/', api.requestHandler(api.collections.browse));
    server.get('/admin/api/v0.1/collections/:slug/', api.requestHandler(api.collections.read));
}
