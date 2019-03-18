function reverseShuffleMerge(s) {
    // create frequence map of s and the answer A
    const freqS = {}, freqA = {};
    for (let c of s) freqS[c] = freqS[c] ? freqS[c] + 1 : 1;
    Object.entries(freqS).map(([k, v]) => freqA[k] = v / 2);

    // construct optimal answer A
    let answer = '';
    for(let i = s.length - 1; i >= 0; i--) {
        const c = s[i];
        if (freqA[c] > 0) { // we still need more c
            const lastChar = answer.charAt(answer.length - 1);
            if (c <= lastChar && freqS[lastChar] > freqA[lastChar]) {
                // replace last character of answer with c
                answer = answer.slice(0, answer.length - 1) + c;
                freqA[lastChar]++;
            } else {
                answer += c;
            }
            freqA[c]--;
        }
        freqS[c]--;
    }

    return answer;
}

exports.reverseShuffleMerge = reverseShuffleMerge;