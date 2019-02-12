const expect = require('chai').expect;
const { activityNotifications } = require('../src/activityNotifications');

describe('activityNotifications', () => {
    it('should output 1 notification', () => {
        const expenditure = [10, 20, 30, 40, 50];
        const d = 3;
        const count = activityNotifications(expenditure, d);
        expect(count).to.equal(1);
    });

    it('should output 2 notifications', () => {
        const expenditure = [2, 3, 4, 2, 3, 6, 8, 4, 5];
        const d = 5;
        const count = activityNotifications(expenditure, d);
        expect(count).to.equal(2);
    });

    it('should output 0 notifications', () => {
        const expenditure = [1, 2, 3, 4, 4];
        const d = 4;
        const count = activityNotifications(expenditure, d);
        expect(count).to.equal(0);
    });
});