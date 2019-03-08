function minimumAbsoluteDifference(arr) {
    let min = Infinity;
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            const absDiff = Math.abs(arr[i] - arr[j]);
            min = absDiff < min ? absDiff : min;
        }
    }
    return min;
}

exports.minimumAbsoluteDifference = minimumAbsoluteDifference;