const expect = require('chai').expect;
const { sockMerchant1, sockMerchant2 } = require('../src/sockMerchant');

describe('sock merchant 1', () => {
    it('should return 3 for 3 pairs', () => {
        const n = 9;
        const ar = [10,20,20,10,10,30,50,10,20];
        const pairs = sockMerchant1(n, ar);
        expect(pairs).to.equal(3);
    });
});

describe('sock merchant 2', () => {
    it('should return 3 for 3 pairs', () => {
        const n = 9;
        const ar = [10,20,20,10,10,30,50,10,20];
        const pairs = sockMerchant2(n, ar);
        expect(pairs).to.equal(3);
    });
});