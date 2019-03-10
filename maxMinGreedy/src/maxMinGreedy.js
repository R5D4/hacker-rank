function maxMin(k, arr) {
    const sorted = arr.slice().sort((a, b) => a - b);
    let min = Infinity;
    for (let i = 0; i < sorted.length - k + 1; i++) {
        const unfairness = sorted[i + k - 1] - sorted[i];
        min = unfairness < min ? unfairness : min;
    }
    return min;
}

exports.maxMin = maxMin;