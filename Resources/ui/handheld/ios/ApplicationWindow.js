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
		title:'Welcome to MemoTags',
		backgroundColor:'e3e3e3',
		navTintColor: 'e3e3e3'
		//navBarHidden: true
	});
	masterContainerWindow.add(masterView);
	
	//create iOS specific NavGroup UI
	var navGroup = Ti.UI.iOS.createNavigationWindow({
		window: masterContainerWindow
	});

	var createMemoTagsWindow = Ti.UI.createWindow({
		title: 'Create new memo'
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
		backgroundImage: 'images/NewMemo.png',
		height: 42,
		width: 42,
		left: 300,
		top: 20
	});
	newMemoButton.addEventListener('click', function(e) {
		navGroup.openWindow(createMemoTagsWindow);
	});
	masterContainerWindow.rightNavButton = newMemoButton;

	
	//create detail view container
	var detailContainerWindow = Ti.UI.createWindow({
		title: 'Memo detail'
	});
	detailContainerWindow.add(detailView);

	//add behavior for master view
	masterView.addEventListener('itemSelected', function(e) {
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
