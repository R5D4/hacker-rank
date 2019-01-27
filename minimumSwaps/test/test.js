const expect = require('chai').expect;
const { minimumSwaps } = require('../src/minimumSwaps');

describe('minimumSwaps', () => {
    it.only('should output 2 for 2 swaps', () => {
        const arr = [4, 3, 2, 1];
        const swaps = minimumSwaps(arr);
        expect(swaps).to.equal(2);
    });

    it('should output 5 for 5 swaps', () => {
        const arr = [7, 1, 3, 2, 4, 5, 6];
        const swaps = minimumSwaps(arr);
        expect(swaps).to.equal(5);
    });

    it('should output 3 for 3 swaps', () => {
        const arr = [4, 3, 1, 2];
        const swaps = minimumSwaps(arr);
        expect(swaps).to.equal(3);
    });

    it('should output 3 for 3 swaps #2', () => {
        const arr = [2, 3, 4, 1, 5];
        const swaps = minimumSwaps(arr);
        expect(swaps).to.equal(3);
    });

    it('should output 3 for 3 swaps #3', () => {
        const arr = [1, 3, 5, 2, 4, 6, 7];
        const swaps = minimumSwaps(arr);
        expect(swaps).to.equal(3);
    });
});