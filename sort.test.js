
var sort = require('./sort.js');
var expect = require('chai').expect;

describe('冒泡函数的测试', function() {
    it('[3, 1, 2, 6, 5] result [1, 2, 3, 5, 6]', function() {
        expect(sort([3, 1, 2, 6, 5])).to.deep.equal([1, 2, 3, 5, 6]);
    });
});