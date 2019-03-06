function commonChild (s1, s2) {
    const memo = {};
    for (let i = 0; i <= s1.length; i++) {
        for (let j = 0; j <= s2.length; j++) {
            let len;
            if (i === 0 || j === 0) {
                len = 0;
            } else if (s1[i - 1] === s2[j - 1]) {
                len = memo[`${i - 1},${j - 1}`] + 1;
            } else {
                len = Math.max(memo[`${i},${j - 1}`], memo[`${i - 1},${j}`]);
            }
            memo[`${i},${j}`] = len;
        }
    }
    return memo[`${s1.length},${s2.length}`];
}

exports.commonChild = commonChild;