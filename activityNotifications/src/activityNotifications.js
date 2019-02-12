function activityNotifications (expenditure, d) {
    function getMedian (arr) {
        arr.sort((a, b) => a - b);
        if (arr.length % 2 === 0) { 
            return (arr[arr.length / 2 - 1] + arr[arr.length / 2]) / 2; 
        } else {
            return arr[Math.floor(arr.length / 2)];
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