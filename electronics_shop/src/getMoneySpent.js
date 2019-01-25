function getMoneySpent(keyboards, drives, b) {
    let best = -1;
    const kbDsc = keyboards.sort((a, b) => b - a);
    const drAsc = drives.sort((a, b) => a - b);
    let m = 0;

    for (let i = 0; i < kbDsc.length; i++) {
        for (let j = m; j < drAsc.length; j++) {
            const spent = kbDsc[i] + drAsc[j];
            if (spent === b) return spent; // return when combination fits budget exactly
            if (i === 0 && j === drAsc.length - 1 && spent < b) return spent; // return if largest combination in still under budget
            if (spent < b && spent > best) best = spent;
            if (spent > b) { 
                m = j;
                break;
            }
        }
    }
    return best;
}

exports.getMoneySpent = getMoneySpent;