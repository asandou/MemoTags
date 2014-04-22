//Master View Component Constructor
function MemoListWindow(openWindow, memoDetailWindow, memos) {
	var MemoRow = require('ui/common/MemoTableViewRow');
	
	this.self = Ti.UI.createWindow({
		title:'MemoTags List View',
		backgroundColor:'e3e3e3',
		navTintColor: 'e3e3e3'
		//navBarHidden: true
	});
	
	//create object instance, parasitic subclass of Observable
	var view = Ti.UI.createView({
		backgroundColor:'white'
	});

	var table = Ti.UI.createTableView({
	});
	view.add(table);

	//add behavior
	table.addEventListener('click', function(e) {
		view.fireEvent('memoSelected', {
			index: e.index
		});
	});
	
	//add behavior for master view
	view.addEventListener('memoSelected', function(e) {
		var memo = memos[e.index];
		memoDetailWindow.setMemoToDetail(memo);
		openWindow(memoDetailWindow);
	});
	this.self.add(view);
	
	this.self.RefreshMemoTable = function(data) {
		if(Object.prototype.toString.apply(data) === '[object Array]') {
			var rows = [];
			for (var i=0; i<data.length; i++) {
				rows.push(new MemoRow(data[i]));
			}
			table.setData(rows);
		}
	};

	return this.self;
};


module.exports = MemoListWindow;