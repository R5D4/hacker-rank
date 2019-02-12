function freqQuery(queries) {
    class countMap {
        constructor () {
            this.map = {};
        }

        get (data) {
            return this.map[data];
        }
        
        add (data) {
            if (data === undefined)  return;
            if (this.map[data] > 0) {
                this.map[data]++;
            } else if (this.map[data] === undefined) {
                this.map[data] = 1;
            }
        }

        sub (data) {
            if (data === undefined)  return;
            if (this.map[data] > 1) {
                this.map[data]--;
            } else if (this.map[data] === 1) {
                // map[data] will never remain 0; will change to undefined
                delete this.map[data];
            }
        }
    }

    const valueCount = new countMap();
    const freqCount = new countMap();
    const answers = [];

    queries.forEach(([op, data]) => {
        switch (op) {
            case 1:
                freqCount.sub(valueCount.get(data));
                valueCount.add(data);
                freqCount.add(valueCount.get(data));
                break;
            case 2:
                freqCount.sub(valueCount.get(data));
                valueCount.sub(data);
                freqCount.add(valueCount.get(data));
                break;
            case 3:
                answers.push(+!!freqCount.get(data));
                break;
            default:
                break;
        }
    });
    return answers;
}

exports.freqQuery = freqQuery;