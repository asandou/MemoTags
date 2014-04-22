function ApplicationWindow() {
	//declare module dependencies
	var MemoDetailWindow = require('ui/common/MemoDetailWindow'),
		MemoListWindow = require('ui/common/MemoListWindow'),
		MemoCreationWindow = require('ui/common/MemoCreationWindow'),
		MasterContainerWindow = require('ui/handheld/ios/MasterContainerWindow');
	
	//create static memo array
	var memos = [];
	
	var navGroup = Ti.UI.iOS.createNavigationWindow();
	
	var memoDetailWindow = new MemoDetailWindow();
	var memoListWindow = new MemoListWindow(navGroup.openWindow, memoDetailWindow, memos);
	var memoCreationWindow = new MemoCreationWindow(memoListWindow.RefreshMemoTable, memos);
	
	navGroup.setWindow(memoListWindow);
	//for android : https://developer.appcelerator.com/question/122368/android-equivalent-of-navigation-group)
	
	var newMemoButton = Ti.UI.createButton({
		backgroundImage: 'images/NewMemo.png',
		height: 42,
		width: 42,
		left: 300,
		top: 20
	});
	memoListWindow.rightNavButton = newMemoButton;
	
	newMemoButton.addEventListener('click', function(e) {
		navGroup.openWindow(memoCreationWindow);
	});
	
	// refresh and initialize window function
	this.InitMemoList(memos, memoListWindow.RefreshMemoTable);

	return navGroup;
};

ApplicationWindow.prototype.InitMemoList = function(memos, refreshMemoTable) {
	var Memo = require('src/Memo');	
	//statically initialize the array
	if(memos.length === 0) {
		for(var i=0; i<5; i++) {
			memos.push(new Memo('Adina', 'My memo number '+i, 'tag'+i));	
		}
	}
	refreshMemoTable(memos);
};

module.exports = ApplicationWindow;
