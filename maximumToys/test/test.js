const expect = require('chai').expect;
const { maximumToys } = require('../src/maximumToys');

describe('maximumToys', () => {
    it('should return max 4 toys', () => {
        const prices = [1, 12, 5, 111, 200, 1000, 10];
        const max = maximumToys(prices, 50);
        expect(max).to.equal(4);
    });

    it('should return max 2 toys', () => {
        const prices = [2, 2, 3];
        const max = maximumToys(prices, 4);
        expect(max).to.equal(2);
    });
});