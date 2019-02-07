const expect = require('chai').expect;
const { twoMaxSum } = require('../src/twoMaxSum');

describe('twoMaxSum', () => {
    it('should return 10 for largest values of 6 and 4', () => {
        const arr = [1, 2, 3, 4, 6];
        const sum = twoMaxSum(arr);
        expect(sum).to.equal(10);
    });

    it('should return 2 for largest values of 1 and 1', () => {
        const arr = [1, 1, 1, 1, 1];
        const sum = twoMaxSum(arr);
        expect(sum).to.equal(2);
    });

    it('should return 9 for largest values of 5 and 4', () => {
        const arr = [5, 4, 3, 2, 1];
        const sum = twoMaxSum(arr);
        expect(sum).to.equal(9);
    });

    it('should return 11 for largest values of 7 and 4', () => {
        const arr = [1, 2, 3, 7, 4];
        const sum = twoMaxSum(arr);
        expect(sum).to.equal(11);
    });
});