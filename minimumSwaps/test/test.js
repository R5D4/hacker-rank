const expect = require('chai').expect;
const { minimumSwaps } = require('../src/minimumSwaps');

describe('minimumSwaps', () => {
    it('should output 5 for 5 swaps', () => {
        const arr = [7, 1, 3, 2, 4, 5, 6];
        const swaps = minimumSwaps(arr);
        expect(swaps).to.equal(5);
    });
});