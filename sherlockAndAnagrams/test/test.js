const expect = require('chai').expect;
const { sherlockAndAnagrams } = require('../src/sherlockAndAnagrams');

describe('sherlockAndAnagrams', () => {
    it('should return 4 for 4 pairs of anagrams', () => {
        const s = 'abba';
        const pairs = sherlockAndAnagrams(s);
        expect(pairs).to.equal(4);
    });
});