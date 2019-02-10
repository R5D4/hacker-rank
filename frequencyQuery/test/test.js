const expect = require('chai').expect;
const { freqQuery } = require('../src/frequencyQuery');

describe('freqQuery', () => {
    it('should return [0, 1] #1', () => {
        const queries = [[1, 5], [1, 6], [3, 2], [1, 10], [1, 10], [1, 6], [2, 5], [3, 2]];
        const answers = freqQuery(queries);
        expect(answers).to.deep.equal([0, 1]);
    });

    it('should return [0, 1] #2', () => {
        const queries = [[3, 4], [2, 1003], [1, 16], [3, 1]];
        const answers = freqQuery(queries);
        expect(answers).to.deep.equal([0, 1]);
    });

    it('should return [0, 1, 1]', () => {
        const queries = [[1, 3], [2, 3], [3, 2], [1, 4], [1, 5], [1, 5], [1, 4], [3, 2], [2, 4], [3, 2]];
        const answers = freqQuery(queries);
        expect(answers).to.deep.equal([0, 1, 1]);
    });
});