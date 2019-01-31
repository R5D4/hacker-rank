function checkMagazine(magazine, note) {
    // create hash map from magazine words
    const map = {};
    magazine.forEach(word => {
        if (map[word] !== undefined) {
            map[word]++;
        } else {
            map[word] = 1;
        }
    });

    // look up note words in map
    for (let word of note) {
        if (map[word] === undefined || map[word] === 0) return 'No';
        else if (map[word] > 0) map[word]--;
    }

    return 'Yes';
}

exports.checkMagazine = checkMagazine;