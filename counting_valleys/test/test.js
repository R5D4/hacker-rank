const expect = require('chai').expect;
const { countingValleys } = require('../src/countingValleys');

describe('counting valleys', () => {
    it('should return 1 for 1 valley', () => {
        const n = 8;
        const s = 'UDDDUDUU';
        const valleys = countingValleys(n, s);
        expect(valleys).to.equal(1);
    })
});