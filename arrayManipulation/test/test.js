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

    it('should output 10 for largest value = 10', () => {
        const n = 10;
        const queries = [
            [1, 5, 3],
            [4, 8, 7],
            [6, 9, 1]
        ];
        const max = arrayManipulation(n, queries);
        expect(max).to.equal(10);
    });

    it('should output 882 for largest value = 882', () => {
        const n = 4;
        const queries = [
            [2, 3, 603],
            [1, 1, 286],
            [4, 4, 882]
        ];
        const max = arrayManipulation(n, queries);
        expect(max).to.equal(882);
    });
});