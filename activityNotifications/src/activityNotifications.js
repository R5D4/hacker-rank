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

    /**
     * Return first index of 'e' in 'arr'. -1 if not found.
     * Binary search. Assume arr is sorted.
     * @param {array} arr 
     * @param {int} x
     */
    function indexOf (arr, x) {
        function indexOfRecursive (arr, x, l, r) {
            const m = Math.floor((l + r)/2);
            if (r >= l) {
                if (x === arr[m]) return m;
                else if (x > arr[m]) return indexOfRecursive(arr, x, m + 1, r);
                else return indexOfRecursive(arr, x, l, m - 1);
            }
            return -1;
        }
        return indexOfRecursive(arr, x, 0, arr.length - 1);
    }

    /**
     * Returns median of sorted array
     * @param {array} sorted 
     */
    function getMedian (sorted) {
        if (sorted.length % 2 === 0) { 
            return (sorted[sorted.length / 2 - 1] + sorted[sorted.length / 2]) / 2; 
        } else {
            return sorted[Math.floor(sorted.length / 2)];
        }
    }

    /**
     * Remove last, add current, keeping input array sorted
     * @param {array} sorted sorted expenditure array of last d days
     * @param {int} last oldest expenditure
     * @param {int} e newest expenditure
     */
    function updateArray (sorted, last, e) {
        sorted.splice(indexOf(sorted, last), 1);
        // find index of first element in arr larger than e
        let index = sorted.length;
        for (let i = 0; i < sorted.length; i++) {
            if (sorted[i] > e) {
                index = i; 
                break;
            }
        }
        sorted.splice(index, 0, e);
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