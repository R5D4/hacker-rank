const expect = require('chai').expect;
const { maxMin } = require('../src/maxMinGreedy');

describe('maxMin', () => {
    it('should return minimum unfairness of 20', () => {
        const k = 3;
        const arr = [10, 100, 300, 200, 1000, 20, 30];
        const unfairness = maxMin(k, arr);
        expect(unfairness).to.equal(20);
    });

    it('should return minimum unfairness of 3', () => {
        const k = 4;
        const arr = [1, 2, 3, 4, 10, 20, 30, 40, 100, 200];
        const unfairness = maxMin(k, arr);
        expect(unfairness).to.equal(3);
    });

    it('should return minimum unfairness of 0', () => {
        const k = 2;
        const arr = [1, 2, 1, 2, 1];
        const unfairness = maxMin(k, arr);
        expect(unfairness).to.equal(0);
    });
});