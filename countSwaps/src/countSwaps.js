function countSwaps(a) {
    function generateExpected (swaps, first, last) {
        return `Array is sorted in ${swaps} swaps.
First Element: ${first}
Last Element: ${last}`;
    }

    let swaps = 0;
    for (let i = 0; i < a.length; i++) {
        for (let j = 0; j < a.length - 1; j++) {
            if (a[j] > a[j + 1]) {
                [a[j], a[j + 1]] = [a[j + 1], a[j]];
                swaps++;
            }
        }
    }
    const output = generateExpected(swaps, a[0], a[a.length - 1]);
    console.log(output);
    return output;
}

exports.countSwaps = countSwaps;