const expect = require('chai').expect;
const { countTriplets } = require('../src/countTriplets');

describe('countTriplets', () => {
    it('should return 2 for 2 geometric triplets #1', () => {
        const arr = [1, 2, 4, 8];
        const r = 2;
        const triplets = countTriplets(arr, r);
        expect(triplets).to.equal(2);
    });

    it('should return 2 for 2 geometric triplets #2', () => {
        const arr = [1, 2, 2, 4];
        const r = 2;
        const triplets = countTriplets(arr, r);
        expect(triplets).to.equal(2);
    });

    it('should return 2 for 2 geometric triplets #3', () => {
        const arr = [1, 1, 2, 4];
        const r = 2;
        const triplets = countTriplets(arr, r);
        expect(triplets).to.equal(2);
    });

    it('should return 6 for 6 geometric triplets', () => {
        const arr = [1, 3, 9, 9, 27, 81];
        const r = 3;
        const triplets = countTriplets(arr, r);
        expect(triplets).to.equal(6);
    });

    it('should return 4 for 4 geometric triplets', () => {
        const arr = [1, 5, 5, 25, 125];
        const r = 5;
        const triplets = countTriplets(arr, r);
        expect(triplets).to.equal(4);
    });

    it('should return 161700 for 161700 geometric triplets', () => {
        const arr = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
        const r = 1;
        const triplets = countTriplets(arr, r);
        expect(triplets).to.equal(161700);
    });

    it('should return 4 for 4 geometric triplets #2', () => {
        const arr = [1, 1, 1, 1];
        const r = 1;
        const triplets = countTriplets(arr, r);
        expect(triplets).to.equal(4);
    });
});