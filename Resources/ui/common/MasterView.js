//Master View Component Constructor
function MasterView(detailView) {
	var MemoRow = require('ui/common/MemoTableViewRow');
	
	//create object instance, parasitic subclass of Observable
	var self = Ti.UI.createView({
		backgroundColor:'white'
	});

	var table = Ti.UI.createTableView({
	});
	self.add(table);

	//add behavior
	table.addEventListener('click', function(e) {
		self.fireEvent('memoSelected', {
			index: e.index
		});
	});
	
	self.refreshMemoTable = function(data) {
		if(Object.prototype.toString.apply(data) === '[object Array]') {
			var rows = [];
			for (var i=0; i<data.length; i++) {
				rows.push(new MemoRow(data[i]));
			}
			table.setData(rows);
		}
	};

	return self;
};

module.exports = MasterView;