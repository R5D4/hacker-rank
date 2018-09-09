const expect = require('chai').expect;
const minimumBribes = require('../src/new_year_chaos');

describe('minimumBribes', () => {
    it('should output 3 for this input', () => {
        const q = [2, 1, 5, 3, 4];
        const bribes = minimumBribes(q);
        expect(bribes).to.equal(3);
    });
});