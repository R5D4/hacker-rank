const expect = require('chai').expect;
const { alternatingCharacters } = require('../src/alternatingCharacters');

describe('alternatingCharacters', () => {
    it('should return 3 deleted characters', () => {
        const s = 'AAAA';
        const deletions = alternatingCharacters(s);
        expect(deletions).to.equal(3);
    });

    it('should return 4 deleted characters', () => {
        const s = 'BBBBB';
        const deletions = alternatingCharacters(s);
        expect(deletions).to.equal(4);
    });

    it('should return 0 deleted characters for alternating characters #1', () => {
        const s = 'ABABABAB';
        const deletions = alternatingCharacters(s);
        expect(deletions).to.equal(0);
    });

    it('should return 0 deleted characters for alternating characters #2', () => {
        const s = 'BABABA';
        const deletions = alternatingCharacters(s);
        expect(deletions).to.equal(0);
    });

    it('should return 4 deleted characters #2', () => {
        const s = 'AAABBB';
        const deletions = alternatingCharacters(s);
        expect(deletions).to.equal(4);
    });
});