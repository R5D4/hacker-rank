'use strict';

function hourglassSum (arr) {
    // assume well-formed input: array of six arrays of six integers.
    const hourGlasses = parseIntoHourglasses(arr);
    const sums = hourGlasses.map(hourglass => getHourglassSum(hourglass));
    const maxSum = getMaxSum(sums);
    return maxSum;
}

/**
 * Return array of 16 arrays of 7 integers
 * (each array of 7 integers representing an hourglass)
 * @param {array} arr Array of six arrays of six integers
 */
function parseIntoHourglasses (arr) {
    const MAX_ROW_INDEX = 3, MAX_COL_INDEX = 3;
    const hourGlassesArray = [];

    for (let i = 0; i <= MAX_ROW_INDEX; i++) {
        for (let j = 0; j <= MAX_COL_INDEX; j++) {
            const hourGlass = [arr[i][j], arr[i][j+1], arr[i][j+2],
                                    arr[i+1][j+1],
                         arr[i+2][j], arr[i+2][j+1], arr[i+2][j+2]];
            hourGlassesArray.push(hourGlass);
        }
    }
    return hourGlassesArray;
}

/**
 * Return the sum of the given hourglass
 * @param {array} hourglass An array of seven integers representing an hourglass 
 */
function getHourglassSum (hourglass) {
    const sum = hourglass.reduce((acc, current) => acc + current, 0);
    return sum;
}

/**
 * Return largest integer in given array.
 * @param {array} sums Array of integers representing hourglass sums
 */
function getMaxSum (sums) {
    const maxSum = sums.reduce((largest, current) => current > largest ? current : largest, sums[0]);
    return maxSum;
}

module.exports = hourglassSum;
