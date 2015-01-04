var dataProvider = require('../models'),
	_ 		     = require('lodash'),
	moment		 = require('moment'),


	collectionpost;

collectionpost = {
    add: function(newRelation) {
            return dataProvider.CollectionPost.add(newRelation);
    }

};

module.exports = collectionpost;