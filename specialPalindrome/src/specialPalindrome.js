function substrCount(n, s) {
    let count = 0;
    // create array of arrays [x, y], each representing a substring of 
    // y continuous x characters in the string.
    const substrArr = [];
    let last = undefined;
    for (let c of s) {
        if (c !== last) substrArr.push([c, 1]);
        else substrArr[substrArr.length - 1][1]++;
        last = c;
    }

    // calculate number of special substrings consisting of repeated characters
    // includes single characters. For substrings of n repeated characters,
    // the number of special substrings is n * (n + 1) / 2
    count += substrArr.reduce((acc, [, n]) => {
        const substrCount = n * (n + 1) / 2;
        return acc + substrCount;
    }, 0);

    // calculate number of special substrings of form xyx, where x is a string
    // of repeated characters and y is a single character different from the
    // characters that make up x. e.g. ada
    if (substrArr.length >= 3) {
        for (let i = 0; i < substrArr.length - 2; i++) {
            const [s1, s2, s3] = [substrArr[i], substrArr[i + 1], substrArr[i + 2]];
            if (s1[0] === s3[0] && s1[0] !== s2[0]) count += s1[1];
        }
    }

    return count;
}

exports.substrCount = substrCount;