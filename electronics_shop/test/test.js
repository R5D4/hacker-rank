const expect = require('chai').expect;
const { getMoneySpent } = require('../src/getMoneySpent');

describe('getMoneySpent', () => {
    it('should return 9 for spending 9 dollars out of 10', () => {
        const kb = [3, 1];
        const dr = [5, 2, 8];
        const b = 10;
        const spent = getMoneySpent(kb, dr, b);
        expect(spent).to.equal(9);
    });

    it('should return -1 for not able to buy both', () => {
        const kb = [4];
        const dr = [5];
        const b = 5;
        const spent = getMoneySpent(kb, dr, b);
        expect(spent).to.equal(-1);
    });
});