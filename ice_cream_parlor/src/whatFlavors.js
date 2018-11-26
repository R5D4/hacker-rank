/**
 * 
 * @param {array} cost 
 * @param {int} money 
 * @returns {string} id of the two flavours of ice cream, space separated
 */
function whatFlavors(cost, money) {
    let chosenFlavors = '';
    for (let i = 0; i < cost.length - 1; i++) {
        const otherFlavors = cost.slice(i + 1);
        const id1 = i;
        // search for (money - cost of first flavor) in the otherFlavors array
        const id2 = otherFlavors.indexOf(money - cost[id1]);
        if (id2 >= 0) { // found a match
            chosenFlavors = `${id1 + 1} ${id1 + 1 + id2 + 1}`; // convert to 1-base index
            break;
        }
    };
    return chosenFlavors;
}

module.exports = whatFlavors;