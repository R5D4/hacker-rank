const expect = require('chai').expect;
const { getMinimumCost } = require('../src/getMinimumCost');

describe('getMinimumCost', () => {
    it('should return 13 as minimum cost', () => {
        const k = 3;
        const c = [2, 5, 6];
        const cost = getMinimumCost(k, c);
        expect(cost).to.equal(13);
    });

    it('should return 15 as minimum cost', () => {
        const k = 2;
        const c = [2, 5, 6];
        const cost = getMinimumCost(k, c);
        expect(cost).to.equal(15);
    });

    it('should return 29 as minimum cost', () => {
        const k = 3;
        const c = [1, 3, 5, 7, 9];
        const cost = getMinimumCost(k, c);
        expect(cost).to.equal(29);
    });
});