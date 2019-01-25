const expect = require('chai').expect;
const { jumpingOnClouds } = require('../src/jumpingOnClouds');

describe('jumpingOnClouds', () => {
    it('should return 4 for 4 minimum moves', () => {
        const c = [0,0,1,0,0,1,0];
        const moves = jumpingOnClouds(c);
        expect(moves).to.equal(4);
    });

    it('should return 3 for 3 minimum moves', () => {
        const c = [0,0,0,0,1,0];
        const moves = jumpingOnClouds(c);
        expect(moves).to.equal(3);
    });
});