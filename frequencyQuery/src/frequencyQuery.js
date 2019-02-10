function freqQuery(queries) {
    const answers = [];
    const map = {};
    queries.forEach(([op, data]) => {
        switch (op) {
            case 1:
                if (map[data] !== undefined) { 
                    map[data]++; 
                } else {
                    map[data] = 1;
                }
                break;
            case 2:
                if (map[data] > 0) {
                    map[data]--;
                }
                break;
            case 3:
                const ans = Object.values(map).some(e => e === data);
                answers.push(+ans);
                break;
            default:
                break;
        }
    });
    return answers;
}

exports.freqQuery = freqQuery;