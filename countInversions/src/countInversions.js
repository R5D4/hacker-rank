function countInversions (arr) {
    let count = 0;
    countInversionsRec(arr);

    function countInversionsRec (arr) {
        // base case
        if (arr.length === 1) {
            return arr;
        }

        // recurse
        const m = Math.ceil(arr.length / 2); // index of midpoint
        const arrL = arr.slice(0, m);
        const arrR = arr.slice(m, arr.length);
        const sortedL = countInversionsRec(arrL);
        const sortedR = countInversionsRec(arrR);
        
        // merge
        let sorted = [];
        let i = 0, j = 0;
        while (i < sortedL.length && j < sortedR.length) {
            let l = sortedL[i];
            let r = sortedR[j];
            if (r < l) {
                count += arrL.length - i;
                sorted.push(r);
                j++;
            } else {
                sorted.push(l);
                i++;
            }
        }

        if (i < sortedL.length) sorted = sorted.concat(sortedL.slice(i));
        if (j < sortedR.length) sorted = sorted.concat(sortedR.slice(j));

        return sorted;
    }
    
    return count;
}

exports.countInversions = countInversions;