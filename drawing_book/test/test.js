const expect = require('chai').expect;
const { pageCount } = require('../src/drawingBook');

describe('drawing book', () => {
    it('should return 1 for 6 pages turning to page 2', () => {
        const n = 6;
        const p = 2;
        const pageTurns = pageCount(n, p);
        expect(pageTurns).to.equal(1);
    });

    it('should return 0 for 5 pages turning to page 4', () => {
        const n = 5;
        const p = 4;
        const pageTurns = pageCount(n, p);
        expect(pageTurns).to.equal(0);
    });
});