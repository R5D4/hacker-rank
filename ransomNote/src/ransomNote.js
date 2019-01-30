function checkMagazine(magazine, note) {
    // create hash map from magazine words
    const map = magazine.reduce((obj, word) => ({...obj, [word]: true}), {});

    // look up note words in map
    for (let word of note) {
        if (map[word] === undefined || map[word] === false) return 'No';
        else if (map[word] === true) map[word] = false;
    }

    return 'Yes';
}

exports.checkMagazine = checkMagazine;