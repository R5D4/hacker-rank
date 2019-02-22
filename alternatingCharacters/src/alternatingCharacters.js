function alternatingCharacters(s) {
    let deletions = 0;
    let last = undefined;
    for (let c of s) {
        if (last === c) deletions++;
        last = c;
    }
    return deletions;
}

exports.alternatingCharacters = alternatingCharacters;