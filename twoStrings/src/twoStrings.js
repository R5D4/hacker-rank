function twoStrings(s1, s2) {
    let short, long;
    if (s1.length < s2.length) {
        short = s1;
        long = s2;
    } else {
        short = s2;
        long = s1;
    }

    // check if any characters in shorter string is also in longer string
    for (let c of short) {
        if (long.includes(c)) return 'YES';
    }

    return 'NO';
}

exports.twoStrings = twoStrings;