function getMoneySpent(keyboards, drives, b) {
    const spent = [];
    keyboards.forEach(kb => {
        drives.forEach(dr => {
            spent.push(kb + dr);
        });
    });
    let best = -1;
    spent.forEach(s => {
        if (s <= b && s > best) best = s;
    });
    return best;
}

exports.getMoneySpent = getMoneySpent;