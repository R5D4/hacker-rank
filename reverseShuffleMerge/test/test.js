const expect = require('chai').expect;
const { reverseShuffleMerge } = require('../src/reverseShuffleMerge');

describe('reverseShuffleMerge', () => {
    it('should return "egg" for "eggegg"', () => {
        const s = 'eggegg';
        const A = reverseShuffleMerge(s);
        expect(A).to.equal('egg');
    });
});