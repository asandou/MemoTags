var assert = require('assert', 'expect', 'should', 'underscore');
var Memo = require('./../app/controllers/memo');

describe('Memo', function() {
	describe('#Memo', function() {
		it('should be initialized with default values', function() {
			var emptyMemo = new Memo('Adina', 'my first memo', []);
			assert.equal('Adina', emptyMemo.owner);
		});
	});
});
