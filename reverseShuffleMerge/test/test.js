const expect = require('chai').expect;
const { reverseShuffleMerge } = require('../src/reverseShuffleMerge');

describe('reverseShuffleMerge', () => {
    it('should return "egg" for "eggegg"', () => {
        const s = 'eggegg';
        const A = reverseShuffleMerge(s);
        expect(A).to.equal('egg');
    });

    it('should return "acb" for "abcabc"', () => {
        const s = 'abcabc';
        const A = reverseShuffleMerge(s);
        expect(A).to.equal('acb');
    });

    it('should return "agfedcb" for "abcdefgabcdefg"', () => {
        const s = 'abcdefgabcdefg';
        const A = reverseShuffleMerge(s);
        expect(A).to.equal('agfedcb');
    });

    it('should return "cgddjj" for "jjcddjggcdjd"', () => {
        const s = 'jjcddjggcdjd';
        const A = reverseShuffleMerge(s);
        expect(A).to.equal('cgddjj');
    });
});