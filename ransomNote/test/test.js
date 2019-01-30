const expect = require('chai').expect;
const { checkMagazine } = require('../src/ransomNote');

describe('checkMagazine', () => {
    it('should return yes #1', () => {
        const magazine = ["give", "me", "one", "grand", "today", "night"];
        const note = ["give", "one", "grand", "today"];
        const answer = checkMagazine(magazine, note);
        expect(answer).to.equal('Yes');
    });

    it('should return no #1', () => {
        const magazine = ["two", "times", "three", "is", "not", "four"];
        const note = ["two", "times", "two", "is", "four"];
        const answer = checkMagazine(magazine, note);
        expect(answer).to.equal('No');
    });
});