const expect = require('chai').expect;
const minimumBribes = require('../src/new_year_chaos');

describe('minimumBribes', () => {
    it('should output 3 for this input', () => {
        const q = [2, 1, 5, 3, 4];
        const bribes = minimumBribes(q);
        expect(bribes).to.equal(3);
    });

    it('should output 4 for this input', () => {
        const q = [2, 1, 5, 4, 3];
        const bribes = minimumBribes(q);
        expect(bribes).to.equal(4);
    });

    it('should output 6 for this input', () => {
        const q = [2, 4, 5, 3, 1];
        const bribes = minimumBribes(q);
        expect(bribes).to.equal(6);
    });

    it('should output 4 for this input', () => {
        const q = [2, 4, 3, 1, 5];
        const bribes = minimumBribes(q);
        expect(bribes).to.equal(4);
    });

    it('should output "Too chaotic" for illegal configuration', () => {
        const q = [2, 5, 1, 3, 4];
        const bribes = minimumBribes(q);
        expect(bribes).to.equal('Too chaotic');
    })
});