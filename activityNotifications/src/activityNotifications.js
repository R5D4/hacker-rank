function activityNotifications (expenditure, d) {
    /**
     * Counting sort
     * @param {array} arr 
     */
    function sort (arr) {
        const count = new Array(201).fill(0);
        const output = [];
        arr.forEach(e => count[e]++);
        for (let i = 1; i < count.length; i++) {
            count[i] = count[i] + count[i - 1];
        }
        for (let i = arr.length - 1; i >= 0; i--) {
            output[count[arr[i]] - 1] = arr[i];
            count[arr[i]]--;
        }
        return output;
    }

    function getMedian (arr) {
        const sorted = sort(arr);
        if (sorted.length % 2 === 0) { 
            return (sorted[sorted.length / 2 - 1] + sorted[sorted.length / 2]) / 2; 
        } else {
            return sorted[Math.floor(sorted.length / 2)];
        }
    }

    let count = 0;
    for (let i = d; i < expenditure.length; i++) {
        const median = getMedian(expenditure.slice(i - d, i));
        if (expenditure[i] >= 2 * median) count++;
    }
    return count;
}

exports.activityNotifications = activityNotifications;