var middleware = require('./middleware'),
	when 	   = require('when'),
	url        = require('url'),
	path 	   = require('path'),
	hbs	       = require('express-hbs'),
	express    = require('express'),
    slashes    = require('connect-slashes'),

    expressServer,
    corePath,
	ONE_HOUR_S  = 60 * 60,
    ONE_YEAR_S  = 365 * 24 * ONE_HOUR_S,
    ONE_HOUR_MS = ONE_HOUR_S * 1000,
    ONE_YEAR_MS = 365 * 24 * ONE_HOUR_MS;
    corePath = path.resolve(path.resolve(__dirname, '../../../'), 'core/');

module.exports = function(server) {
	expressServer = server;

	expressServer.engine('hbs', hbs.express3());
	expressServer.use('/shared/', express.static(path.join(corePath, 'shared'), {maxAge: ONE_HOUR_MS}));
	expressServer.use('/scripts/', express.static(path.join(corePath, 'client'), {maxAge: ONE_HOUR_MS}));
	expressServer.set('views', path.join(corePath, 'server/views'));	
	expressServer.set('view engine', 'hbs');

	expressServer.use(slashes(true, {headers: {'Cache-Control': 'public, max-age=' + ONE_YEAR_S}}));
}

module.exports.middleware = middleware;