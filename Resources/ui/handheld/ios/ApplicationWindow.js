function ApplicationWindow() {
	//declare module dependencies
	var MainScrollableView = require('ui/common/MainScrollableView'),
		MasterView = require('ui/common/MasterView'),
		DetailView = require('ui/common/DetailView'),
		CreateMemoView = require('ui/common/CreateMemoView');
		Memo = require('src/Memo');

	//create static memo array
	var memos = [];
	var detailView = DetailView();
	var masterView = MasterView(detailView);
	var createMemoView = CreateMemoView(masterView.refreshMemoTable, memos);
	
	//construct UI
	//create master view container
	var masterContainerWindow = Ti.UI.createWindow({
		title:'Welcome to MemoTags',
		backgroundColor:'e3e3e3',
		navTintColor: 'e3e3e3'
		//navBarHidden: true
	});
	
	var mainScrollableView = new MainScrollableView(memos, masterView, detailView, createMemoView);
	masterContainerWindow.add(mainScrollableView);
	
	// refresh window function
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

	return masterContainerWindow;
};

module.exports = ApplicationWindow;
