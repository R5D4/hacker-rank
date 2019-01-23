function sockMerchant1 (n, ar) {
    const sockRecord = {};
    ar.forEach(colour => {
        sockRecord[colour] = sockRecord[colour] + 1 || 1;
    });
    return Object.values(sockRecord).reduce((acc, current) => acc + Math.floor(current/2), 0);
}

function sockMerchant2 (n, ar) {
    let numOfPairs = 0;
    const sockMap = {};
    ar.forEach(colour => {
        if (sockMap[colour]) {
            numOfPairs++;
            sockMap[colour] = undefined;
        } else {
            sockMap[colour] = 1;
        }
    });
    return numOfPairs;
}

exports.sockMerchant1 = sockMerchant1;
exports.sockMerchant2 = sockMerchant2