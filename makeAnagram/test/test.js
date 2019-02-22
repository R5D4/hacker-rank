const expect = require('chai').expect;
const { makeAnagram } = require('../src/makeAnagram');

describe('makeAnagram', () => {
    it('should return 4 deletions', () => {
        const a = 'cde';
        const b = 'abc';
        const deletions = makeAnagram(a, b);
        expect(deletions).to.equal(4);
    });
});