function maximumToys(prices, k) {
    let sum = 0;
    let count = 0;
    prices.sort((a, b) => a - b);
    for (let p of prices) {
        if (sum + p <= k) {
            sum += p;
            count++;
        }
    }
    return count;
}

exports.maximumToys = maximumToys;