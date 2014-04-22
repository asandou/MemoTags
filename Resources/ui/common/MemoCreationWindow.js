
function MemoCreationWindow(refresh, memos) {
	var Memo = require('src/Memo');
	
	var self = Ti.UI.createWindow({
		title: 'Create new memo'
	});
	
	var backCreateMemoButton = Ti.UI.createButton({
		title: '< Back'
	});
	self.leftNavButton = backCreateMemoButton;
	backCreateMemoButton.addEventListener('click', function(){
		self.close();
	});
		
	var view = Ti.UI.createView({
		backgroundColor:'e3e3e3'
	});
	
	var editBox = Ti.UI.createTextArea({
		scrollable: true,
		borderWidth: 2,
	    borderColor: '#bbb',
	    borderRadius: 5,
	    color: '#888',
	    font: {fontSize:20, fontWeight:'bold'},
	    keyboardType: Ti.UI.KEYBOARD_DEFAULT,
	    returnKeyType: Ti.UI.RETURNKEY_DEFAULT,
	    textAlign: 'left',
		width: 300,
		height: 300,
		top: 10
	});
	view.add(editBox);
	
	var createButton = Ti.UI.createButton({
		title: 'Create',
		top: 350,
		width: 100,
	    height: 50
	});
	createButton.addEventListener('click', function() {
		var memo = new Memo('user', editBox.getValue(), ['tag1', 'tag2']);
		memos.push(memo);
		editBox.setValue('');
		refresh(memos);
	});
	view.add(createButton);
	
	self.add(view);
	
	return self;
};



module.exports = MemoCreationWindow;
