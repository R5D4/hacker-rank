function isValid(s) {
    // create map of letter count
    const letterCount = {};
    for (let c of s) letterCount[c] = letterCount[c] + 1 || 1;

    // create map of frequency count
    const freqCount = {};
    for (let l in letterCount) freqCount[letterCount[l]] = freqCount[letterCount[l]] + 1 || 1;

    // check for validity based on frequency count
    let answer = 'NO';
    if (Object.keys(freqCount).length === 1) {
        answer = 'YES';
    } else if (Object.keys(freqCount).length === 2) {
        const [freqA, freqB] = Object.keys(freqCount);
        if ((+freqA === 1 && freqCount[freqA] === 1) || 
            (+freqB === 1 && freqCount[freqB] === 1)) {
            answer = 'YES';
        } else if ((+freqB === +freqA + 1 && freqCount[freqB] === 1) ||
                   (+freqA === +freqB + 1 && freqCount[freqA] === 1)) {
            answer = 'YES';
        }
    }
    return answer;
}

exports.isValid = isValid;