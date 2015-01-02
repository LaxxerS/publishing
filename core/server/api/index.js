var users     = require('./users'),
    posts     = require('./posts'),
    followers = require('./followers'),
    collections = require('./collections'),
	_	      = require('lodash'),
	requestHandler;

requestHandler = function (apiMethod) {
    return function (req, res) {
        var options = _.extend(req.body, req.files, req.query, req.params),
            apiContext = {
                user: req.session && req.session.user
            };

        return apiMethod.call(apiContext, options).then(function (result) {
            res.json(result || {});
        });
    };
};

module.exports = {
    users: users,
    posts: posts,
    followers: followers,
    collections: collections,
    requestHandler: requestHandler
};
