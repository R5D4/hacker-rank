const expect = require('chai').expect;
const { countSwaps } = require('../src/countSwaps');

describe('countSwaps', () => {
    function generateExpected (swaps, first, last) {
        return `Array is sorted in ${swaps} swaps.
First Element: ${first}
Last Element: ${last}`;
    }
    it('should return 3 swaps, min = 1, max = 6', () => {
        const a = [6, 4, 1];
        const expected = generateExpected(3, 1, 6);
        const output = countSwaps(a);
        expect(output).to.equal(expected);
    });

    it('should return 3 swaps, min = 1, max = 3', () => {
        const a = [3, 2, 1];
        const expected = generateExpected(3, 1, 3);
        const output = countSwaps(a);
        expect(output).to.equal(expected);
    });

    it('should return 0 swaps, min = 1, max = 3', () => {
        const a = [1, 2, 3];
        const expected = generateExpected(0, 1, 3);
        const output = countSwaps(a);
        expect(output).to.equal(expected);
    });
});