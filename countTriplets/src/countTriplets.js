function countTriplets(arr, r) {
    const map = {};
    let count = 0;
    for (let i = arr.length - 1; i >= 0; i--) {
        const num = arr[i];
        const second = arr[i] * r;
        const third = second * r;
        const keyPair = `${third},${second}`;
        const keySingle = `${second}`;
        if (map[keyPair] > 0) {
            count += map[keyPair];
        }
        if (map[keySingle] > 0) {
            map[`${second},${num}`] = map[`${second},${num}`] + map[keySingle] || map[keySingle];
        }
        map[num] = map[num] + 1 || 1;
    }
    return count;
}

exports.countTriplets = countTriplets;