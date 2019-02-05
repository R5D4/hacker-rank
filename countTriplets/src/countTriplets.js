function countTriplets(arr, r) {
    // create map: key = number, value = [index1, index2, ...]
    const map = {};
    arr.forEach((cur, idx) => {
        if (map[cur] !== undefined) {
            map[cur].push(idx);
        } else {
            map[cur] = [idx];
        }
    });

    // find triplets
    let pairs = 0;
    for (let i = 0; i < arr.length - 2; i++) {
        // remove current element from map
        const cur = arr[i];
        const iArr = map[cur];
        iArr.splice(iArr.indexOf(i), 1);
        // calculate other two numbers in progression
        const second = cur * r;
        const third = second * r;
        // find number of valid pairs of second and third values
        if (map[second] !== undefined && map[second].length > 0) {
            map[second].forEach(id2 => {
                let n2 = 0, n3 = 0; // number of valid pairs of second and third values
                if (id2 > i) {
                    n2++;
                    if (map[third] !== undefined && map[third].length > 0) {
                        n3 = map[third].reduce((acc, id3) => acc + +(id3 > id2), 0);
                    }
                }
                pairs += n2 * n3;
            });
        }
    }
    return pairs;
}

exports.countTriplets = countTriplets;