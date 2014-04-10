function ApplicationWindow() {
	//declare module dependencies
	var MasterView = require('ui/common/MasterView'),
		DetailView = require('ui/common/DetailView'),
		Memo = require('src/memo');

	//construct UI
	var masterView = MasterView(),
		detailView = DetailView();

	//create master view container
	var masterContainerWindow = Ti.UI.createWindow({
		title:'Welcome to MemoTags'
	});
	masterContainerWindow.add(masterView);

	//create detail view container
	var detailContainerWindow = Ti.UI.createWindow({
		title:'Memo detail'
	});
	detailContainerWindow.add(detailView);

	//create iOS specific NavGroup UI
	var navGroup = Ti.UI.iOS.createNavigationWindow({
		window:masterContainerWindow
	});

	//add behavior for master view
	masterView.addEventListener('itemSelected', function(e) {
		detailView.fireEvent('itemSelected',e);
		navGroup.openWindow(detailContainerWindow);
	});
	
	function refreshMemo() {
		//statically initialize the array
		var memos = [];
		for(var i=0; i<5; i++) {
			memos.push(new Memo('Adina', 'my memo number '+i, 'tag'+i));	
		}
		
		masterView.refreshMemoTable(memos);
	};
	
	refreshMemo();

	return navGroup;
};

module.exports = ApplicationWindow;
