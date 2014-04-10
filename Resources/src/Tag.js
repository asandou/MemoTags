var _ = require('underscore');

function Tag(name) {
	this.uuid = _.uniqueId(); 
	this.name = name;
};

module.exports = Tag;