function DetailView() {
	var Memo = require('src/Memo');
	
	var self = Ti.UI.createView({
		backgroundColor:'e3e3e3'
	});

	this.label = Ti.UI.createLabel({
		text: 'no memo selected to view',
		height:'auto',
		width:'auto',
		color:'#000'
	});
	self.add(label);

	return self;
};

DetailView.prototype.setMemoToDetail = function(memo){
	var refresh = function(current) {
		this.label.text = current.content;
	};
	refresh(memo);
};

module.exports = DetailView;
