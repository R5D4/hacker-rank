function countingValleys (n, s) {
    let level = 0;
    let valleys = 0;
    Object.values(s).forEach(step => {
        switch (step) {
            case 'U':
                level++;
                if (level === 0) valleys++; 
                break;
            case 'D':
                level--;
                break;
            default:
                break;
        }
    });
    return valleys;
}

exports.countingValleys = countingValleys;