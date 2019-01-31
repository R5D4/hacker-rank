const expect = require('chai').expect;
const { twoStrings } = require('../src/twoStrings');

describe('twoStrings', () => {
    it('should return "YES" for two strings with a common substring', () => {
        const s1 = 'hello', s2 = 'world';
        const answer = twoStrings(s1, s2);
        expect(answer).to.equal('YES');
    });

    it('should return "NO" for two strings without a common substring', () => {
        const s1 = 'hi', s2 = 'world';
        const answer = twoStrings(s1, s2);
        expect(answer).to.equal('NO');
    });
});