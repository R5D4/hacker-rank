const expect = require('chai').expect;
const { minimumAbsoluteDifference } = require('../src/minAbsDiff');

describe('minimumAbsoluteDifference', () => {
    it('should return 3 for min absolute difference of 3', () => {
        const arr = [3, -7, 0];
        const min = minimumAbsoluteDifference(arr);
        expect(min).to.equal(3);
    });

    it('should return 3 for min absolute difference of 3 #2', () => {
        const arr = [1, -3, 71, 68, 17];
        const min = minimumAbsoluteDifference(arr);
        expect(min).to.equal(3);
    });

    it('should return 1 for min absolute difference of 1', () => {
        const arr = [-59, -36, -13, 1, -53, -92, -2, -96, -54, 75];
        const min = minimumAbsoluteDifference(arr);
        expect(min).to.equal(1);
    });
    
});