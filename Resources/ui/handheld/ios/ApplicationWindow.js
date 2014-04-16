function ApplicationWindow() {
	//declare module dependencies
	var MasterView = require('ui/common/MasterView'),
		DetailView = require('ui/common/DetailView'),
		CreateMemoView = require('ui/handheld/ios/CreateMemoView'),
		Memo = require('src/Memo');

	//create static memo array
	var memos = [];
	//construct UI
	var masterView = MasterView();
	var detailView = DetailView();

	//create master view container
	var masterContainerWindow = Ti.UI.createWindow({
		title:'Welcome to MemoTags'
	});
	masterContainerWindow.add(masterView);
	
	//create iOS specific NavGroup UI
	var navGroup = Ti.UI.iOS.createNavigationWindow({
		window: masterContainerWindow
	});

	var createMemoTagsWindow = Ti.UI.createWindow({
		title: 'Create new memo',
		barColor:'#000' //set this too
	});
	var backCreateMemoButton = Ti.UI.createButton({
		title: '< Back'
	});
	createMemoTagsWindow.leftNavButton = backCreateMemoButton;
	
	var createMemoView = CreateMemoView(createMemoTagsWindow.close, masterView.refreshMemoTable, memos);
	
	backCreateMemoButton.addEventListener('click', function(){
		createMemoTagsWindow.close();
	});
	
	createMemoTagsWindow.add(createMemoView);

	var newMemoButton = Ti.UI.createButton({
		image: 'images/35.png',
		title: 'New Memo',
		height: 45,
		width: 45,
		left: 45,
		top: 5
	});
	newMemoButton.addEventListener('click', function(e) {
		navGroup.openWindow(createMemoTagsWindow);
	});
	masterContainerWindow.add(newMemoButton);

	var button = Ti.UI.createButton({
		systemButton: Ti.UI.iPhone.SystemButton.REFRESH
	});
	button.addEventListener('click', function(e) {
		refreshMemo();
	});
	masterContainerWindow.rightNavButton = button;
	
	//create detail view container
	var detailContainerWindow = Ti.UI.createWindow({
		title: 'Memo detail'
	});
	detailContainerWindow.add(detailView);

	//add behavior for master view
	masterView.addEventListener('itemSelected', function(e) {
		detailView.fireEvent('itemSelected', e);
		navGroup.openWindow(detailContainerWindow);
	});
	
	function refreshMemo() {
		//statically initialize the array
		if(memos.length === 0) {
			for(var i=0; i<5; i++) {
				memos.push(new Memo('Adina', 'my memo number '+i, 'tag'+i));	
			}
		}
		
		masterView.refreshMemoTable(memos);
	};
	
	refreshMemo();

	return navGroup;
};

module.exports = ApplicationWindow;
