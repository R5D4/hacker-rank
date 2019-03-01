function commonChild (s1, s2) {
    const memo = {};
    function LCS (ss1, ss2) {
        let len;
        if (memo[`${ss1.length},${ss2.length}`]) return memo[`${ss1.length},${ss2.length}`];
        if (ss1.length === 0 || ss2.length === 0) {
            len = 0;
        } else if (ss1[ss1.length - 1] === ss2[ss2.length -1]) {
            len = LCS(ss1.substring(0, ss1.length - 1), ss2.substring(0, ss2.length - 1)) + 1;
        } else {
            len = Math.max(LCS(ss1, ss2.substring(0, ss2.length - 1)), LCS(ss1.substring(0, ss1.length - 1), ss2));
        }
        memo[`${ss1.length},${ss2.length}`] = len;
        return len;
    }
    return LCS(s1, s2);
}

exports.commonChild = commonChild;