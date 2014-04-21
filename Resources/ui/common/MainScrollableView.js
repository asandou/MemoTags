function MainScrollableView(memos, masterView, detailView, createMemoView) {
	
	var masterScrollView = Ti.UI.createScrollView();
	masterScrollView.add(masterView);
	
	var detailScrollView = Ti.UI.createScrollView();
	detailScrollView.add(detailView);
	
	var createMemoScrollView = Ti.UI.createScrollView();
	createMemoScrollView.add(createMemoView);
	
	var self = Ti.UI.createScrollableView({
		showPagingControl: true,
		views: [masterScrollView, createMemoScrollView, detailScrollView]
	});
	
	self.addEventListener('memoSelected', function(e) {
		var memo = memos[e.index];
		detailView.setMemoToDetail(memo);
		self.scrollToView(2);
	});
	
	return self;
};

module.exports = MainScrollableView;
