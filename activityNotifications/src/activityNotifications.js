function activityNotifications (expenditure, d) {
    // expenditure for first d trailing days, sorted
    const arr = expenditure.slice(0, d).sort((a, b) => a - b);

    /**
     * Return median of sorted array
     * @param {array} sorted Sorted array of expenditures of last d days
     */
    function getMedian (sorted) {
        sorted.sort((a, b) => a - b);
        const n = sorted.length;
        if (n % 2 === 0) { 
            return (sorted[n / 2 - 1] + sorted[n / 2]) / 2; 
        } else {
            return sorted[Math.floor(n / 2)];
        }
    }

    /**
     * Remove last, add current, keeping arr sorted
     * @param {array} sorted sorted expenditure array of last d days
     * @param {int} last oldest expenditure
     * @param {int} current newest expenditure
     */
    function updateArray (arr, last, current) {
        arr.splice(arr.indexOf(last), 1);
        // find index of first element in arr larger than current
        let index = arr.length;
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] > current) {
                index = i; 
                break;
            }
        }
        arr.splice(index, 0, current);
    }

    let count = 0;
    for (let i = d; i < expenditure.length; i++) {
        const median = getMedian(arr);
        if (expenditure[i] >= 2 * median) count++;
        updateArray(arr, expenditure[i - d], expenditure[i]);
    }
    return count;
}

exports.activityNotifications = activityNotifications;