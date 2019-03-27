function pairs(k, arr) {
    // create map from arr, key = element
    const map = {};
    arr.forEach(a => map[a] = map[a] ? map[a] + 1 : 1);
    // search for a + k for all a in arr
    const numPairs = arr.reduce((acc, a) => map[a + k] ? acc + map[a + k] : acc, 0);
    return numPairs;
}

exports.pairs = pairs;