function luckBalance(k, contests) {
    const sorted = contests.sort((a, b) => b[0] - a[0]);
    return sorted.reduce((acc, cur) => cur[1] ? acc + (k-- > 0 ? 1 : -1) * cur[0] : acc + cur[0], 0);
}

exports.luckBalance = luckBalance;