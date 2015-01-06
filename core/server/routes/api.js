var api = require('../api');
	
module.exports = function(server) {
    // ## User
    server.get('/admin/api/v0.1/users/', api.requestHandler(api.users.browse));
    server.get('/admin/api/v0.1/users/:username/', api.requestHandler(api.users.read));
    server.post('/admin/api/v0.1/users/', api.requestHandler(api.users.add));
    server.put('/admin/api/v0.1/users/:username/', api.requestHandler(api.users.edit));

    // ## Post
    server.get('/admin/api/v0.1/posts/:username/', api.requestHandler(api.posts.browse));
    server.get('/admin/api/v0.1/posts/', api.requestHandler(api.posts.all));
    server.get('/admin/api/v0.1/posts/:username/:slug/', api.requestHandler(api.posts.read));

    // ## Follower
    server.get('/admin/api/v0.1/followers/:follower_id/:following_id/', api.requestHandler(api.followers.read));
    server.post('/admin/api/v0.1/followers/', api.requestHandler(api.followers.add));
    server.delete('/admin/api/v0.1/followers/:id/', api.requestHandler(api.followers.destroy));

    // ## Collection
    server.get('/admin/api/v0.1/collections/all/:username/', api.requestHandler(api.collections.browse));
    server.get('/admin/api/v0.1/collections/:slug/', api.requestHandler(api.collections.read));
    server.get('/admin/api/v0.1/collections/', api.requestHandler(api.collections.all));

    // ## Collection-Post
    server.post('/admin/api/v0.1/collection-post/:collection_id/:post_id/', api.requestHandler(api.collectionpost.add));

    // ## Feed
    server.get('/admin/api/v0.1/feeds/:username/', api.requestHandler(api.feeds.browse));

    // ## Bookmark
    server.get('/admin/api/v0.1/bookmarks/all/:owner_id/', api.requestHandler(api.bookmarks.browse));
    server.get('/admin/api/v0.1/bookmarks/:owner_id/:post_id/', api.requestHandler(api.bookmarks.read));
    server.post('/admin/api/v0.1/bookmarks/', api.requestHandler(api.bookmarks.add));
    server.delete('/admin/api/v0.1/bookmarks/:id/', api.requestHandler(api.bookmarks.destroy));

    // ## Recommend
    server.get('/admin/api/v0.1/recommends/all/:owner_id/', api.requestHandler(api.recommends.browse));
    server.get('/admin/api/v0.1/recommends/:owner_id/:post_id/', api.requestHandler(api.recommends.read));
    server.post('/admin/api/v0.1/recommends/', api.requestHandler(api.recommends.add));
    server.delete('/admin/api/v0.1/recommends/:id/', api.requestHandler(api.recommends.destroy));
}
