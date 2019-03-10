function getMinimumCost(k, c) {
    const sorted = c.slice().sort((a, b) => b - a);
    const cost = sorted.reduce((acc, c, i) => acc + (Math.floor(i / k) + 1) * c, 0);
    return cost;
}

exports.getMinimumCost = getMinimumCost;