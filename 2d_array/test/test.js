const expect = require('chai').expect;
const hourglassSum = require('../src/hourglassSum');

describe('hourglassSum', () => {
	it('should return maximum hourglass sum', () => {
        const arr = [ [1,1,1,0,0,0],
                      [0,1,0,0,0,0],
                      [1,1,1,0,0,0],
                      [0,0,2,4,4,0],
                      [0,0,0,2,0,0],
                      [0,0,1,2,4,0] ];
        const maxSum = hourglassSum(arr);
		expect(maxSum).to.equal(19);
    });
});