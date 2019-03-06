const expect = require('chai').expect;
const fs = require('fs');
const readline = require('readline');
const { commonChild } = require('../src/commonChild');

describe('commonChild', () => {
    it('should return 0 for LCS of length 0', () => {
        const s1 = 'AA', s2 = 'BB';
        const len = commonChild(s1, s2);
        expect(len).to.equal(0);
    });

    it('should return 2 for LCS of length 2 #1', () => {
        const s1 = 'HARRY', s2 = 'SALLY';
        const len = commonChild(s1, s2);
        expect(len).to.equal(2);
    });

    it('should return 2 for LCS of length 2 #2', () => {
        const s1 = 'ABCDEF', s2 = 'FBDAMN';
        const len = commonChild(s1, s2);
        expect(len).to.equal(2);
    });

    it('should return 3 for LCS of length 3', () => {
        const s1 = 'SHINCHAN', s2 = 'NOHARAAA';
        const len = commonChild(s1, s2);
        expect(len).to.equal(3);
    });

    it('should return 27 for LCS of length 27', (done) => {
        const rl = readline.createInterface({
            input: fs.createReadStream('test/input02.txt')
        });
        const lines = [];
        rl.on('line', line => {
            lines.push(line);
        });
        rl.on('close', () => {
            const [s1, s2] = lines;
            const len = commonChild(s1, s2);
            expect(len).to.equal(27);
            done();
        });
    });

    it('should return 1417 for LCS of length 1417', (done) => {
        const rl = readline.createInterface({
            input: fs.createReadStream('test/input05.txt')
        });
        const lines = [];
        rl.on('line', line => {
            lines.push(line);
        });
        rl.on('close', () => {
            const [s1, s2] = lines;
            const len = commonChild(s1, s2);
            expect(len).to.equal(1417);
            done();
        });
    });
});