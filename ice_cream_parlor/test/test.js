const expect = require('chai').expect;
const whatFlavors = require('../src/whatFlavors');

describe('whatFlavors', () => {
    const params = [
        {cost: [1, 4, 5, 3, 2], money: 4, expected: '1 4'},
        {cost: [2, 2, 4, 3], money: 4, expected: '1 2'},
        {cost: [1, 2, 4, 3], money: 7, expected: '3 4'},
    ];
    params.forEach(param => {
        it(`outputs correct flavor IDs for cost: [${param.cost}] and ${param.money} money`, () => {
            const flavorIDs = whatFlavors(param.cost, param.money);
            expect(flavorIDs).to.equal(param.expected);
        });
    });
});