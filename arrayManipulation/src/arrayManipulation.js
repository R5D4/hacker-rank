function arrayManipulation(n, queries) {
    // create zero-filled array of length n
    const array = new Array(n).fill(0);

    // apply each operation to array
    queries.forEach(([a, b, k]) => {
        // add k to array between indices a and b inclusive
        // a and b are for 1-indexed array so subtract 1 from each
        for (let i = a - 1; i <= b - 1; i++) {
            array[i] += k;
        }
    });

    // determine maximum value in array
    let max = -Infinity;
    let pos = n;
    while (pos--) {
        max = array[pos] > max ? array[pos] : max;
    }

    return max;
}

exports.arrayManipulation = arrayManipulation;