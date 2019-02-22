const expect = require('chai').expect;
const { countInversions } = require('../src/countInversions');

describe('countInversions', () => {
    it('should return 0 for sorted array', () => {
        const arr = [1, 1, 1, 2, 2];
        const count = countInversions(arr);
        expect(count).to.equal(0);
    });
    
    it('should return 4 for unsorted array', () => {
        const arr = [2, 1, 3, 1, 2];
        const count = countInversions(arr);
        expect(count).to.equal(4);
    });

    it('should return 5 for unsorted array', () => {
        const arr = [4, 3, 1, 2];
        const count = countInversions(arr);
        expect(count).to.equal(5);
    });
});