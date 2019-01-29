const expect = require('chai').expect;
const { arrayManipulation } = require('../src/arrayManipulation');

describe('arrayManipulation', () => {
    it('should output 200 for largest value = 200', () => {
        const n = 5;
        const queries = [
            [1, 2, 100],
            [2, 5, 100],
            [3, 4, 100]
        ];
        const max = arrayManipulation(n, queries);
        expect(max).to.equal(200);
    });
});