function minimumSwaps (arr) {
    // calculate distance array for each element
    const distance = [];
    arr.forEach((n, i) => {
        distance[i] = i + 1 - n;
    });

    let sorted = false;
    while (!sorted) {
        
    }
    return 0;
}

exports.minimumSwaps = minimumSwaps;