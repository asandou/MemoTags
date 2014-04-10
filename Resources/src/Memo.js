// default contructor
function Memo (owner, content, tags) {
	this.owner = owner;
	this.content = content;
	this.date = new Date().now;
	this.tags = tags;
};

module.exports = Memo;

