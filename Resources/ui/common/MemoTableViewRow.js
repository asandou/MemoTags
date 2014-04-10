
var MemoRow = function(memo) {
	var tablerow = Ti.UI.createTableViewRow({
		height: 70,
		hasChild: true
	});
	
	var imageview = Ti.UI.createImageView({
		image: 'images/35.png',
		height: 42,
		width: 42,
		left: 5,
		top: 3
	});
	var titleview = Ti.UI.createLabel({
		text: memo.content,
		color: '#000',
		height: 70,
		font: {	fontSize: 16 },
		left: 83,
		right: 5
	});
	tablerow.add(imageview);
	tablerow.add(titleview);
	return tablerow;
};

module.exports = MemoRow;