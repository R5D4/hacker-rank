function sherlockAndAnagrams (s) {
    /**
     * Return true if s1 and s2 are anagrams, else false
     * Assume s1 and s2 have same length
     * @param {string} s1 
     * @param {string} s2 
     * @param {obj} cache Saved results from previous runs
     */ 
    function isAnagram (s1, s2, cache) {
        // retrieve frequency maps from cache if possible
        let charCountS1 = {}, charCountS2 = {};

        // key = character, value = frequency
        if (cache[s1]) {
            charCountS1 = cache[s1];
        } else {
            for (let c of s1) {
                charCountS1[c] = charCountS1[c] + 1 || 1;
            }
            cache[s1] = charCountS1;
        }

        if (cache[s2]) {
            charCountS2 = cache[s2];
        } else {
            for (let c of s2) {
                charCountS2[c] = charCountS2[c] + 1 || 1;
            }
            cache[s2] = charCountS2;
        }

        for (let c of s1) {
            if (charCountS1[c] !== charCountS2[c]) {
                return false;
            }
        }
        return true;
    }

    let pairs = 0;
    let cache = {};
    for (let start = 0; start < s.length - 1; start++) {
        for (let len = 1; len < s.length - start; len++) {
            const s1 = s.substring(start, start + len);
            for (let s2Start = start + 1; s2Start < s.length - len + 1; s2Start++) {
                const s2 = s.substring(s2Start, s2Start + len);
                if (isAnagram(s1, s2, cache)) pairs++;
            }
        }
    }

    return pairs;
}

exports.sherlockAndAnagrams = sherlockAndAnagrams;