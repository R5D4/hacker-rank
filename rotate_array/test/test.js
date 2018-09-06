const expect = require('chai').expect;
const rotLeft = require('../src/rotate_array');

describe('Array left rotation', () => {
    it('should rotate an array of five elements left four times', () => {
        const a = [1, 2, 3, 4, 5];
        const result = rotLeft(a, 4);
        const expected = [5, 1, 2, 3, 4];
        expect(result).to.deep.equal(expected);     
    });
});