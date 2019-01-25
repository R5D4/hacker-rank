const expect = require('chai').expect;
const { catAndMouse } = require('../src/catAndMouse');

describe('catAndMouse', () => {
    it('should return "Cat A" when Cat A is closer', () => {
        const x = 1, y = 2, z = 3;
        const answer = catAndMouse(x, y, z);
        expect(answer).to.equal('Cat B');
    });

    it('should return "Mouse C" when both cats are same distance', () => {
        const x = 1, y = 3, z = 2;
        const answer = catAndMouse(x, y, z);
        expect(answer).to.equal('Mouse C');
    });
});