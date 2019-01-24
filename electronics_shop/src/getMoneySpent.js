function getMoneySpent(keyboards, drives, b) {
    let best = -1;
    keyboards.forEach(kb => {
        drives.forEach(dr => {
            const s = kb + dr;
            if (s <= b && s > best) best = s;
        });
    });
    return best;
}

exports.getMoneySpent = getMoneySpent;