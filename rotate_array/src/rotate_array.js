/**
 * Returns new array containing integers from a rotated left d times
 * @param {array} a Array of integers
 * @param {int} d Number of times to rotate left 
 */
function rotLeft(a, d) {
    function rotateOnce(arr) {
        // create new array where each element is shifted to the left by one position
        const rotated = arr.map((e, i) => arr[(i + (arr.length + 1)) % arr.length]);
        return rotated;
    }
    
    let rotatedArray = a;
    for(let i = 0; i < d; i++) {
        rotatedArray = rotateOnce(rotatedArray);
    }
    return rotatedArray;
}

module.exports = rotLeft;