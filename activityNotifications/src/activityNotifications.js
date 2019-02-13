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
        arr.splice(index, 0, current);
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

    // expenditure for first d trailing days, sorted
    const arr = sort(expenditure.slice(0, d));

    let count = 0;
    for (let i = d; i < expenditure.length; i++) {
        const median = getMedian(arr);
        if (expenditure[i] >= 2 * median) count++;
        updateArray(arr, expenditure[i - d], expenditure[i]);
    }
    return count;
}

exports.activityNotifications = activityNotifications;