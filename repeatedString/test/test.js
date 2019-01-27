const expect = require('chai').expect;
const { repeatedString } = require('../src/repeatedString');

describe('repeatedString', () => {
    it('should output 7 for 7 "a"s', () => {
        const s = 'aba', n = 10;
        const count = repeatedString(s, n);
        expect(count).to.equal(7);
    });
    it('should output 1000000000000 for 1000000000000 "a"s', () => {
        const s = 'a', n = 1000000000000;
        const count = repeatedString(s, n);
        expect(count).to.equal(1000000000000);
    });
});