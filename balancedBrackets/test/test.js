const expect = require('chai').expect;
const { isBalanced } = require('../src/isBalanced');

describe('isBalanced', () => {
    it('should output YES for balanced nested brackets', () => {
        const s = '{[()]}';
        const balanced = isBalanced(s);
        expect(balanced).to.equal('YES');
    });
});