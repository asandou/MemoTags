function MemoDetailWindow() {
	
	this.self = Ti.UI.createWindow({
		title: 'Memo detail'
	});
	
	this.view = Ti.UI.createView({
		backgroundColor:'e3e3e3'
	});

	var memoLabel = Ti.UI.createLabel({
		text: 'no memo selected to view',
		height:'auto',
		width:'auto',
		color:'#000'
	});
	this.view.add(memoLabel);
	
	this.self.add(this.view);
	
	this.self.setMemoToDetail = function(memo){
		memoLabel.text = memo.content;
	};

	return this.self;
};


module.exports = MemoDetailWindow;
