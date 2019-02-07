/**
 * 
 * @param {array} arr Integer array length >= 2
 */
function twoMaxSum (arr) {
    let [largest, second] = arr[0] > arr[1] ? [arr[0], arr[1]] : [arr[1], arr[0]];
    for (let i = 2; i < arr.length; i++) {
        if (arr[i] > largest) {
            second = largest;
            largest = arr[i];
        } else if (arr [i] > second) {
            second = arr[i];
        }
    }
    return largest + second;
}

exports.twoMaxSum = twoMaxSum;