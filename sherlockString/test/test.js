const expect = require('chai').expect;
const { isValid } = require('../src/sherlockString');
const YES = 'YES';
const NO = 'NO';

describe('isValid', () => {
    it('should return YES for one unique letter', () => {
        const s = 'aaa';
        const answer = isValid(s);
        expect(answer).to.equal(YES);
    });

    it('should return YES for multiple letters same frequency', () => {
        const s = 'abc';
        const answer = isValid(s);
        expect(answer).to.equal(YES);
    });

    it('should return YES for removing one letter with high frequency', () => {
        const s = 'abcdefghhgfedecba';
        const answer = isValid(s);
        expect(answer).to.equal(YES);
    });

    it('should return YES for removing one letter with frequency of 1', () => {
        const s = 'aabbccd';
        const answer = isValid(s);
        expect(answer).to.equal(YES);
    });

    it('should return NO for invalid string #1', () => {
        const s = 'aabbcd';
        const answer = isValid(s);
        expect(answer).to.equal(NO);
    });

    it('should return NO for invalid string #2', () => {
        const s = 'aabbccddeefghi';
        const answer = isValid(s);
        expect(answer).to.equal(NO);
    });

    it('should return NO for invalid string #3', () => {
        const s = 'abbccc';
        const answer = isValid(s);
        expect(answer).to.equal(NO);
    });
});