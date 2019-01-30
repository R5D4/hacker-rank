function arrayManipulation(n, queries) {
    // create zero-filled array of length n
    const array = new Array(n).fill(0);

    // apply each operation to array by only recording changes at edges of range
    queries.forEach(([a, b, k]) => {
        // record change at start of range
        array[a - 1] += k;
        // record change at end of range if possible
        if (b < n) array[b] -= k;
    });

    // determine maximum value in array
    let max = -Infinity;
    let current = 0;
    for (let i = 0; i < n; i++) {
        current += array[i];
        max = current > max ? current : max;
    }

    return max;
}

exports.arrayManipulation = arrayManipulation;