/**
 * 
 * @param {array} cost 
 * @param {int} money 
 * @returns {string} id of the two flavours of ice cream, space separated
 */
function whatFlavors(cost, money) {
    let chosenFlavors = '';
    const hTable = {};
    for (let i = 0; i < cost.length; i++) {
        const id = i;
        // search for (money - cost of first flavor) in the hash table
        const id2 = hTable[money - cost[id]];
        if (id2 !== undefined) { // found a match
            chosenFlavors = `${id2 + 1} ${id + 1}`; // convert to 1-base index
            break;
        }
        hTable[cost[id]] = id;
    };
    return chosenFlavors;
}

module.exports = whatFlavors;