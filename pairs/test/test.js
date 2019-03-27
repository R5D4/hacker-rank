const expect = require('chai').expect;
const { pairs } = require('../src/pairs');

describe('pairs', () => {
    it('should return 3 for 3 pairs', () => {
        const k = 1;
        const arr = [1, 2, 3, 4];
        const numPairs = pairs(k, arr);
        expect(numPairs).to.equal(3);
    });

    it('should return 3 for 3 pairs #2', () => {
        const k = 2;
        const arr = [1, 5, 3, 4, 2];
        const numPairs = pairs(k, arr);
        expect(numPairs).to.equal(3);
    });

    it('should return 5 for 5 pairs, array has repeated elements', () => {
        const k = 1;
        const arr = [1, 2, 3, 3, 4];
        const numPairs = pairs(k, arr);
        expect(numPairs).to.equal(5);
    });
});