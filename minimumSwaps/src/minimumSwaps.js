function minimumSwaps (arr) {
    /**
     * 
     * @param {int} n Value at index
     * @param {int} i index in array
     */
    function getDistance (n, i) {
        return i + 1 - n;
    }
    // calculate distance array for each element
    const distance = [];
    arr.forEach((n, i) => {
        distance[i] = getDistance(n, i);
    });

    let swaps = 0;
    let sorted = false;
    while (!sorted) {
        sorted = true;
        for (let i = 0; i < arr.length; i++) {
            const n = arr[i];
            if (distance[i] < 0) {
                // do the swap
                const i2 = distance.indexOf(Math.max(...distance));
                arr[i] = arr[i2];
                arr[i2] = n;
                swaps++;
                // update distance array
                distance[i] = getDistance(arr[i], i);
                distance[i2] = getDistance(arr[i2], i2);
                // keep checking for out of order items
                sorted = false;
                break;
            }
        };
    }
    return swaps;
}

exports.minimumSwaps = minimumSwaps;