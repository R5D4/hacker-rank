const expect = require('chai').expect;
const readline = require('readline');
const fs = require('fs');
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

    it('should return 2 for min absolute difference of 2', () => {
        const arr = [2, 4, 30];
        const min = minimumAbsoluteDifference(arr);
        expect(min).to.equal(2);
    });

    it('should return 0 for hacker rank test case 02', (done) => {
        const rl = readline.createInterface({
            input: fs.createReadStream('test/input02.txt')
        });
        const lines = [];
        rl.on('line', line => {
            lines.push(line);
        });
        rl.on('close', () => {
            const [, rawArr] = lines;
            const arr = rawArr.split(' ').map(arrTemp => parseInt(arrTemp, 10));
            const min = minimumAbsoluteDifference(arr);
            expect(min).to.equal(0);
            done();
        });
    });

    it('should return 334 hacker rank test case 03', (done) => {
        const rl = readline.createInterface({
            input: fs.createReadStream('test/input03.txt')
        });
        const lines = [];
        rl.on('line', line => {
            lines.push(line);
        });
        rl.on('close', () => {
            const [, rawArr] = lines;
            const arr = rawArr.split(' ').map(arrTemp => parseInt(arrTemp, 10));
            const min = minimumAbsoluteDifference(arr);
            expect(min).to.equal(334);
            done();
        });
    });
    
});