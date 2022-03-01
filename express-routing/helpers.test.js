const { getMean, getMedian, getMode } = require('./helpers');

describe('#getMean', function() {
	it('gets the mean of an array of numbers', function() {
		expect(getMean([ 1, 2, 3, 4, 5 ])).toEqual(3);
	});
});

describe('#getMedian', function() {
	it('gets the mode of an array of numbers', function() {
		expect(getMedian([ 1, 2, 3, 4, 5 ])).toEqual(3);
	});
});

describe('#getMode', function() {
	it('gets the mode of an array of numbers', function() {
		expect(getMode([ 1, 2, 3, 4, 5, 5 ])).toEqual(5);
	});
});
