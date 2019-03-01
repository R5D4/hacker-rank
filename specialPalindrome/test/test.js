const expect = require('chai').expect;
const { substrCount } = require('../src/specialPalindrome');

describe('substrCount', () => {
    it('should return 7 for string with 7 special substrings', () => {
        const s = 'asasd';
        const ans = substrCount(s.length, s);
        expect(ans).to.equal(7);
    });

    it('should return 7 for string with 7 special substrings #2', () => {
        const s = 'aabcc';
        const ans = substrCount(s.length, s);
        expect(ans).to.equal(7);
    });

    it('should return 10 for string with 10 special substrings', () => {
        const s = 'abcbaba';
        const ans = substrCount(s.length, s);
        expect(ans).to.equal(10);
    });

    it('should return 10 for string with 10 special substrings #2', () => {
        const s = 'aaaa';
        const ans = substrCount(s.length, s);
        expect(ans).to.equal(10);
    });

    it('should return 16 for string with 16 special substrings', () => {
        const s = 'aaabaaa';
        const ans = substrCount(s.length, s);
        expect(ans).to.equal(16);
    });
});