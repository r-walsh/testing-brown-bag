describe('_.first', function() {

	it('be able to return the first element of an array if n is undefined', function() {
		expect(_.first([1, 2, 3])).to.equal(1);
		expect(_.first([2])).to.equal(2);
	});

	it('should return the first N elements of an array', function() {
		expect(_.first([1, 2, 3, 4, 5], 3)).to.eql([1, 2, 3])
	});

});

describe('_.indexOf', function() {

	it('returns the index of the target value', function() {
		expect(_.indexOf([1, 2, 3], 2)).to.equal(1);
	});

	it('should return -1 if the target value is not found', function() {
		expect(_.indexOf([1, 2, 3], 4)).to.equal(-1);
	});

});