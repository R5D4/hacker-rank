/**
 * Returns new array containing integers from a rotated left d times
 * @param {array} a Array of integers
 * @param {int} d Number of times to rotate left 
 */
function rotLeft(a, d) {
    // calculate new indices of each element and map into new array
    const rotatedArray = a.map((e, i) => a[(i + (a.length + d)) % a.length]);    
    return rotatedArray;
}

module.exports = rotLeft;