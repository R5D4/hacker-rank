function makeAnagram(a, b) {
    let deletions = 0;
    const freqA = {}, freqB = {};

    // make character frequency maps
    for (let c of a) {
        freqA[c] = freqA[c] + 1 || 1;
    }
    for (let c of b) {
        freqB[c] = freqB[c] + 1 || 1;
    }

    // count frequency differences
    for (let c in freqA) {
        if (freqB[c]) { // characters in both a and b, delete difference
            deletions += Math.abs(freqB[c] - freqA[c]);
            delete freqB[c];
        } else { // delete all characters in a that are not in b
            deletions += freqA[c];
        }
        delete freqA[c];
    }

    // delete all characters in b that are not in a
    for (let c in freqB) {
        deletions += freqB[c];
    }

    return deletions;
}

exports.makeAnagram = makeAnagram;