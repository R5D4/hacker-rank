const expect = require('chai').expect;
const { sherlockAndAnagrams } = require('../src/sherlockAndAnagrams');

describe('sherlockAndAnagrams', () => {
    it('should return 4 for 4 pairs of anagrams', () => {
        const s = 'abba';
        const pairs = sherlockAndAnagrams(s);
        expect(pairs).to.equal(4);
    });

    it('should return 0 for 0 pairs of anagrams', () => {
        const s = 'abcd';
        const pairs = sherlockAndAnagrams(s);
        expect(pairs).to.equal(0);
    });

    it('should return 3 for 3 pairs of anagrams', () => {
        const s = 'ifailuhkqq';
        const pairs = sherlockAndAnagrams(s);
        expect(pairs).to.equal(3);
    });

    it('should return 10 for 10 pairs of anagrams', () => {
        const s = 'kkkk';
        const pairs = sherlockAndAnagrams(s);
        expect(pairs).to.equal(10);
    });
});