function minimumAbsoluteDifference(arr) {
    const sorted = arr.slice().sort((a, b) => a - b);

    let min = Infinity;
    for (let i = 0; i < sorted.length - 1; i++) {
        const absDiff = Math.abs(sorted[i] - sorted[i + 1]);
        min = absDiff < min ? absDiff : min;
    }
    return min;
}

exports.minimumAbsoluteDifference = minimumAbsoluteDifference;