const expect = require('chai').expect;
const { luckBalance } = require('../src/luckBalance');

describe('luckBalance', () => {
    it('should return 29 as maximum luck', () => {
        const k = 3;
        const contests = [[5, 1], [2, 1], [1, 1], [8, 1], [10, 0], [5, 0]];
        const balance = luckBalance(k, contests);
        expect(balance).to.equal(29);
    });
});