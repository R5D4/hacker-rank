function minimumSwaps (arr) {
    let swaps = 0;
    for (let i = 0, n = arr.length; i < n; i++) {
        while (arr[i] !== i + 1) {
            arr[i] = [arr[arr[i]-1], arr[arr[i]-1] = arr[i]][0];
            if (!arr[i]) break;
            swaps++;
        }
    }
    return swaps;
}

exports.minimumSwaps = minimumSwaps;